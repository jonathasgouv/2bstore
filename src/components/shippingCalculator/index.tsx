import { FC, useState, useRef } from 'react'
import { simulateCart } from '../../helpers/vtex';

import './shippingSimulator.scss'

interface IShippingCalculator {
    sku: string;
    seller?: string;
}

interface IShippingOptions {
    hasOptions: boolean;
    options: {
        name: string;
        price: string;
        deliveryChannel: string;
        shippingEstimate: string;
        isFreeShipping: boolean;
    }[]
}

const ShippingCalculator: FC<IShippingCalculator> = ({ sku, seller = '1' }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [shippingOptions, setShippingOptions] = useState<IShippingOptions>()

    const cepRef = useRef<HTMLInputElement>(null)

    const calculateShippingOptions = async () => {
        setIsLoading(true)

        if (!cepRef.current) {
            setIsLoading(false)
            return alert('Por favor, insira um CEP')
        }

        const cep = cepRef.current.value

        const shippingInfo = {
            items: [
                {
                    id: sku,
                    quantity: 1,
                    seller,
                }
            ],
            cep,
            country: 'BRA'
        }

        const shippingData = await simulateCart(shippingInfo)

        console.log(shippingData)

        if (!shippingData || !shippingData?.logisticsInfo.length) {
            setShippingOptions({
                hasOptions: false,
                options: []
            })

            setIsLoading(false)

            return
        }

        const logisticsInfo = shippingData?.logisticsInfo
        const [logistics] = logisticsInfo
        const slas = logistics?.slas

        const currentShippingOptions = slas?.map((sla) => ({
            name: sla.name,
            price: new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
            }).format(sla.price / 100),
            deliveryChannel: sla.deliveryChannel,
            shippingEstimate: sla.shippingEstimate,
            isFreeShipping: sla.price === 0,

        }))

        if (!currentShippingOptions.length) {
            setShippingOptions({
                hasOptions: false,
                options: []
            })

            setIsLoading(false)

            return
        }

        setShippingOptions({
            hasOptions: true,
            options: currentShippingOptions
        })
        setIsLoading(false)
    }


    return (
        <div className={`shippingSimulatorWrapper ${isLoading ? '__loading' : ''}`}>
            <p className="shippingSimulatorTitle">Calcular frete e prazo</p>
            <div className="shippingSimulatorCalculate">
                <input className="shippingSimulatorCalculateInput" type="text" ref={cepRef} name="cep" id="shippingCEP" placeholder="01234 - 000" onChange={() => setIsButtonDisabled(!cepRef?.current?.value)}/>
                <button className="shippingSimulatorCalculateButton" onClick={calculateShippingOptions} disabled={isButtonDisabled}>Calcular</button>
                <a className="shippingSimulatorCalculateLink" href="https://www2.correios.com.br/sistemas/buscacep/buscacep.cfm" target="_blank" rel="noopener noreferrer">Não sei meu CEP</a>
            </div>

            {shippingOptions && (
                shippingOptions.hasOptions ? (
                    <div className="ShippingSimulatorOptions">
                        {shippingOptions.options.map(option => (
                            <div className="ShippingSimulatorOptionsOption">
                                <div className="optionEstimative">
                                    <p className="optionName">
                                        {option.name}
                                    </p>
                                    <p className="optionDate">
                                        {option.shippingEstimate}
                                    </p>
                                </div>
                                <p className="optionPrice">
                                    {option.price}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="ShippingSimulatorOptions">
                        <p className="ShippingSimulatorOptionsEmpty">
                            Não encontramos nenhuma opção de entrega para a sua região :/
                        </p>
                    </div>
                )
            )}
        </div>
    )
}


export default ShippingCalculator
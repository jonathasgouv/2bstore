import { FC, useState, useEffect, useCallback } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getProductsBySlug } from '../../helpers/vtex'
import Loading from '../../components/loading'
import Shelf from '../../components/shelf'
import Price from '../../components/price'
import SizeSelector from '../../components/sizeSelector'
import AddToCart from '../../components/addToCart'
import use2BStore from '../../stores/2bStore'

import './product.scss'
import ProductImages from '../../components/productImages'
import ShippingCalculator from '../../components/shippingCalculator'

const Product: FC = () => {
    const orderForm = use2BStore(state => state.orderForm)
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState<Product>()
    const [item, setItem] = useState<Item>()
    const { slug } = useParams()
    const [searchParams, setSearchParams] = useSearchParams({ sku: '' })
    const sku = searchParams.get('sku')

    const getProduct = useCallback(
        async (slug: string) => {
            const product = await getProductsBySlug(slug)

            if (product.length) {
                setProduct(product[0])

                const currentItem = product[0].items.find(item => item.itemId === sku) || product[0].items[0]

                setItem(currentItem)
                setSearchParams({ sku: currentItem.itemId })
                setIsLoading(false)
            }
        }, [setSearchParams, sku]
    )

    useEffect(() => {
        if (!slug) return

        getProduct(slug);
    }, [getProduct, slug])

    console.log({ product, sku, item })

    if (isLoading) return (
        <main>
            <div className="productLoading">
                <Loading size='100px' />
            </div>
        </main>
    )

    return (
        <>
            {product && item && (
                <main>
                    <div className="globalContainer">
                        <section className="productMain">
                            <ProductImages images={item.images}/>

                            <div className="productInfo">
                                <h1 className="productName">
                                    {item.name.replace(item.Tamanho[0], '')}
                                </h1>

                                <p className="productRef">
                                    Ref.: {product?.productReference}
                                </p>

                                <Price item={item} />

                                <div className="productSizesWrapper">
                                    <p className="productSizesTitle"><b>Tamanho</b> Selecione</p>
                                    <SizeSelector product={product} onSelect={(sku) => setSearchParams({ sku })} />
                                </div>

                                <AddToCart sku={item.itemId} quantity={1} seller={item.sellers[0].sellerId} label='Adicionar ao carrinho' orderFormId={orderForm?.orderFormId as string} />

                                <ShippingCalculator sku={item.itemId} />
                            </div>
                        </section>
                    </div>

                    <section className="productDescription">
                        <h2 className="productDescriptionTitle">Descrição</h2>
                        <p className="productDescriptionText">
                            {product?.description}
                        </p>
                    </section>

                    <div className="globalContainer">
                        <Shelf collectionId={143} title="OS MAIS VENDIDOS" />
                    </div>
                </main>
            )}
        </>
    )
}

export default Product
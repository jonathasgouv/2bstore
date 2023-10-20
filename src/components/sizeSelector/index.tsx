import { FC, useState } from 'react'

import './sizeSelector.scss'

interface ISizeSelector {
    product: Product
    onSelect: (sku: string) => void
}

const SizeSelector: FC<ISizeSelector> = ({ product, onSelect }) => {
    const [selectedSize, setSelectedSize] = useState(product.items[0].Tamanho[0].split('/')[0])

    const sizesSpec = product.skuSpecifications.find(spec => spec.field.name === 'Tamanho')

    if (!sizesSpec) return null

    const getSkuIdBySize = (size: string) => {
        const skuWithSize = product.items.find(item => item.Tamanho[0] === size)

        if (!skuWithSize) return null

        return skuWithSize.itemId
    }

    const sizes = sizesSpec.values.map(size => {
        return {
            name: size.name.split('/')[0],
            sku: getSkuIdBySize(size.name)
        }
    })

    const isSelectedSize = (size: string) => size === selectedSize

    const selectSize = (sizeName: string, sizeSku: string) => {
        setSelectedSize(sizeName)
        onSelect(sizeSku)
    }

    const truncateSize = (text: string) => {
        if (text.includes(',')) return text.substring(0, 4).trim()
    
        return text.substring(0, 3).trim()
    }

    return (
        <div className="productSizes">
            {sizes.map(size => {
                return (
                    <>
                        {size.sku && (
                            <button key={size.sku} className={`productSize ${isSelectedSize(size.name) ? 'selected' : ''}`} onClick={() => selectSize(size.name, size.sku as string)}>
                                {truncateSize(size.name)}
                            </button>
                        )}
                    </>
                )
            })}
        </div>
    )
}

export default SizeSelector
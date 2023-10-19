import { FC } from 'react'

interface ISizeSelector {
    product: Product
    onSelect: (sku: string) => void
}

const SizeSelector: FC<ISizeSelector> = ({ product, onSelect }) => {
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

    return (
        <div className="productSizes">
            {sizes.map(size => {
                return (
                    <>
                        {size.sku && (
                            <button className="productSize" onClick={() => {onSelect(size.sku as string)}}>
                                {size.name}
                            </button>
                        )}
                    </>
                )
            })}
        </div>
    )
}

export default SizeSelector
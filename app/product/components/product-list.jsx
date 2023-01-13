import { AText, Hr, LoadingSpinner } from "../../../components"
import { useProductsContext } from "../../../contexts"

import styles from "../product.module.css"
import { NoProducts } from "./no-products"
import { ProductItem } from "./product-item"
export const ProductList = () => {
	const { isLoading, products } = useProductsContext()
	return (
		<section className={styles["product-list-wrapper"]}>
			<header>
				<AText variant='h1'>Gift Cards</AText>
				<Hr />
			</header>

			<Status isLoading={isLoading} products={products} />

			<ul className={styles["product-list-grid"]}>
				{products.map(product => {
					const { productId } = product

					return <ProductItem key={productId} product={product} />
				})}
			</ul>
		</section>
	)
}

const Status = ({ isLoading, products }) => {
	if (isLoading) return <LoadingSpinner title='Fetching Gift Cards' />
	if (!isLoading && !products.length) return <NoProducts />
}

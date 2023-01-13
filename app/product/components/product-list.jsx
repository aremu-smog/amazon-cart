import { AText, Hr, LoadingSpinner } from "../../../components"
import { useProductsContext } from "../../../contexts"

import styles from "../product.module.css"
import { ProductItem } from "./product-item"
export const ProductList = () => {
	const { isLoading, products } = useProductsContext()
	return (
		<section className={styles["product-list-wrapper"]}>
			<header>
				<AText variant='h1'>Gift Cards</AText>
				<Hr />
			</header>

			{isLoading ? (
				<LoadingSpinner title='Fetching Gift Cards' />
			) : (
				<ul className={styles["product-list-grid"]}>
					{products.map(product => {
						const { productId } = product

						return <ProductItem key={productId} product={product} />
					})}
				</ul>
			)}
		</section>
	)
}

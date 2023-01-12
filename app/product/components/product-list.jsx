import { AText, Hr } from "../../../components"
import { useProductsContext } from "../../../contexts"

import styles from "../product.module.css"
import { ProductItem } from "./product-item"
export const ProductList = () => {
	const { products } = useProductsContext()
	return (
		<section className={styles["product-list-wrapper"]}>
			<header>
				<AText variant='h1'>Gift Cards</AText>
				<Hr />
			</header>

			<ul className={styles["product-list-grid"]}>
				{products.map(product => {
					const { productId } = product

					return <ProductItem key={productId} product={product} />
				})}
			</ul>
		</section>
	)
}

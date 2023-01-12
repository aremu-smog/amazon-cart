import Image from "next/image"
import { AText, Button } from "../../../components"
import { useCartContext } from "../../../contexts"
import styles from "../product.module.css"

export const ProductItem = ({ product }) => {
	const { productName, productId, img } = product

	const { addItemToCart } = useCartContext()

	return (
		<li className={styles["product-item"]}>
			<div className={styles["product-item-image-wrapper"]}>
				<Image src={img} alt='' fill={true} />
			</div>

			<div className={styles["product-item-details"]}>
				<AText variant='h2' className={styles["product-item-title"]}>
					{" "}
					{productName}
				</AText>

				<Button onClick={() => addItemToCart(productId)}>Add to Cart</Button>
			</div>
		</li>
	)
}

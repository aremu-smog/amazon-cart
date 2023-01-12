import Image from "next/image"
import { AText, Button, Hr } from "../../../components"
import styles from "../cart.module.css"

const CartItem = ({ product }) => {
	const { productName, img, available } = product
	return (
		<>
			<li className={styles["cart-item"]}>
				{/* image */}
				<div className={styles["cart-item-image"]}>
					<Image src={img} alt='' width={180} height={120} />
				</div>

				{/* Cart item details */}
				<div className={styles["cart-item-details"]}>
					<div className={styles["cart-item-heading"]}>
						{/* Title */}

						<a href='' className={styles["cart-item-title"]}>
							<AText variant='h2'>{productName}</AText>
						</a>
						{/* Price */}
						<AText variant='h2'>$17.51</AText>
					</div>
					<div>
						{/* Stock status */}
						<AText
							variant='p'
							className={styles[available ? "in-stock" : "out-of-stock"]}>
							{available ? "In" : "Out of"} Stock
						</AText>
						<div className={styles["cart-item-actions"]}>
							{/* Quantity Toggle */}
							<div>
								<select
									className={styles["cart-item-quantity"]}
									id='cart-item-quantity'>
									<option value='0'>0 (Delete)</option>
									<option value='1' selected>
										1
									</option>
									<option value='1'> 2</option>
								</select>
							</div>

							<Button variant='secondary'>Delete</Button>
						</div>
					</div>
				</div>
			</li>

			<Hr />
		</>
	)
}

export { CartItem }

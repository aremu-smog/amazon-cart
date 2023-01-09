import Image from "next/image"
import { AText, Button, Hr } from "../../../components"
import styles from "../cart.module.css"

const CartItem = ({ item }) => {
	return (
		<>
			<li className={styles["cart-item"]}>
				{/* image */}
				<div className={styles["cart-item-image"]}>
					<Image
						src='https://fourthcanvas.co/static/be697453bb4ea46a43b624c5a3659ee5/c6516/03_-_Nomba_app_icon-fourthcanvas_yzbalq.webp'
						alt=''
						width={180}
						height={180}
					/>
				</div>

				{/* Cart item details */}
				<div className={styles["cart-item-details"]}>
					<div className={styles["cart-item-heading"]}>
						{/* Title */}

						<a href='' className={styles["cart-item-title"]}>
							<AText variant='h2'>
								Amazon Basics USB-C Car Charger with 18W USB-C Port and 12W
								USB-A Port
							</AText>
						</a>
						{/* Price */}
						<AText variant='h2'>$17.51</AText>
					</div>
					<div>
						{/* Stock status */}
						<AText variant='p'>In Stock</AText>
						<div>
							{/* Quantity Toggle */}

							<select>
								<option value='1'>Qty: 1</option>
							</select>

							<Button>Delete</Button>
						</div>
					</div>
				</div>
			</li>

			<Hr />
		</>
	)
}

export { CartItem }

import { useState } from "react"
import Image from "next/image"
import { AText, Button, Hr } from "../../../components"
import { useCartContext } from "../../../contexts"
import styles from "../cart.module.css"

const CartItem = ({ product }) => {
	const { productName, img, available, price, productId, quantity } = product

	return (
		<>
			<li>
				{/* image */}
				<div className={styles["cart-item"]}>
					<div className={styles["cart-item-image"]}>
						<Image src={img} alt='' fill={true} />
					</div>

					{/* Cart item details */}
					<div className={styles["cart-item-details"]}>
						<div className={styles["cart-item-heading"]}>
							{/* Title */}

							<a href='' className={styles["cart-item-title"]}>
								<AText variant='h2'>{productName}</AText>
							</a>
							{/* Price */}
							<AText variant='h2'>${price}</AText>
						</div>
						<div>
							{/* Stock status */}
							<AText
								variant='p'
								className={styles[available ? "in-stock" : "out-of-stock"]}>
								{available ? "In" : "Out of"} Stock
							</AText>

							<CarItemActions productId={productId} quantity={quantity} />
						</div>
					</div>
				</div>

				<CarItemActions productId={productId} quantity={quantity} isMobile />
			</li>

			<Hr />
		</>
	)
}

const CarItemActions = ({ productId, quantity, isMobile }) => {
	const { deleteProductFromCart } = useCartContext()
	return (
		<div
			className={
				styles["cart-item-actions"] +
				" " +
				styles[isMobile ? "cart-item-actions-mobile" : ""]
			}>
			{/* Quantity Toggle */}

			<div className={styles["cart-item-quantity-wrapper"]}>
				<CartItemQuantity productId={productId} itemQuantity={quantity} />
			</div>

			<Button
				variant='secondary'
				className={styles["delete-button"]}
				onClick={() => deleteProductFromCart(productId)}>
				Delete
			</Button>
		</div>
	)
}
const CartItemQuantity = ({ productId, itemQuantity }) => {
	const [quantity, setQuantity] = useState(itemQuantity)
	const [quantityInput, setQuantityInput] = useState(quantity)
	const { deleteProductFromCart, updateCartItemQuantity } = useCartContext()
	const dropDownValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const handleCartQuantityUpdate = e => {
		const { value } = e.target
		if (value < 10) {
			updateCart(value)
		} else {
			setQuantity(value)
		}
	}

	const handleFormQuantityUpdate = e => {
		e.preventDefault()
		updateCart(quantityInput)
	}

	const handleInputChange = e => {
		setQuantityInput(e.target.value)
	}

	const updateCart = quantity => {
		if (parseInt(quantity) === 0) {
			deleteProductFromCart(productId)
		} else {
			updateCartItemQuantity(productId, quantity)
			setQuantity(quantity)
		}
	}

	if (quantity < 10) {
		return (
			<>
				<Button
					variant='secondary'
					className={styles["quantity-controller-minus"]}
					onClick={() => updateCart(quantity - 1)}>
					{quantity === 1 ? "Del" : "-"}
				</Button>
				<select
					onChange={handleCartQuantityUpdate}
					className={styles["cart-item-quantity"]}>
					<option value={0}>0 (Delete)</option>
					{dropDownValues.map(dropdownValue => {
						return (
							<option
								value={dropdownValue}
								key={`${productId}${dropdownValue}`}
								selected={itemQuantity === dropdownValue}>
								{dropdownValue}
							</option>
						)
					})}
					<option value={10}>10+</option>
				</select>
				<Button
					variant='secondary'
					className={styles["quantity-controller-plus"]}
					onClick={() => updateCart(quantity + 1)}>
					+
				</Button>
			</>
		)
	} else {
		return (
			<form
				onSubmit={handleFormQuantityUpdate}
				className={styles["cart-item-quantity-form"]}>
				<input onChange={handleInputChange} value={quantityInput} />
				<Button>Update</Button>
			</form>
		)
	}
}
export { CartItem }

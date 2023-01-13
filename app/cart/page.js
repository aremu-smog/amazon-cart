"use client"

import Head from "next/head"
import { AText, Button, LoadingSpinner } from "../../components"
import styles from "./cart.module.css"
import { CartHeader, CartSubTotal } from "./components"
import { CartItem } from "./components/cart-item"

import { useCartContext, useProductsContext } from "../../contexts"
export default function Cart() {
	// Using the is loading from the products because we rely on the products to feed the local cart context
	const { isLoading } = useProductsContext()
	const { productsInCart, noOfItemsInCart } = useCartContext()

	return (
		<section className={styles.wrapper}>
			{/* Shopping Cart Section */}
			<section className={styles.cart}>
				<CartHeader />
				{isLoading ? (
					<LoadingSpinner title='Fetching cart items...' />
				) : (
					<ul className={styles["cart-items-list"]}>
						{productsInCart.map(product => {
							const { productId } = product
							return <CartItem key={productId} product={product} />
						})}
					</ul>
				)}

				<footer>
					<CartSubTotal />
				</footer>
			</section>

			{/* Subtotal Section */}
			<aside className={styles["cart-sidebar"]}>
				<div className={styles["cart-checkout"]}>
					<CartSubTotal />
					<Button
						disabled={noOfItemsInCart === 0}
						onClick={() => alert("Checkout of this")}
						className={styles["checkout-button"]}>
						Proceed to checkout
					</Button>
				</div>
			</aside>
		</section>
	)
}

"use client"

import Head from "next/head"
import { AText, Button, LoadingSpinner } from "../../components"
import styles from "./cart.module.css"
import { CartHeader } from "./components"
import { CartItem } from "./components/cart-item"

import { useCartContext, useProductsContext } from "../../contexts"
export default function Cart() {
	// Using the is loading from the products because we rely on the products to feed the local cart context
	const { isLoading } = useProductsContext()
	const { noOfItemsInCart, productsInCart } = useCartContext()

	return (
		<>
			<main className={styles.wrapper}>
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
				</section>

				{/* Subtotal Section */}
				<aside className={styles["cart-sidebar"]}>
					<div className={styles["cart-checkout"]}>
						<AText variant='h2'>
							Subtotal ({noOfItemsInCart} item{noOfItemsInCart > 1 && "s"}):{" "}
							<b>$98.90</b>
							<Button
								onClick={() => alert("Checkout of this")}
								className={styles["checkout-button"]}>
								Proceed to checkout
							</Button>
						</AText>
					</div>
				</aside>
			</main>
		</>
	)
}

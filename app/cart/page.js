"use client"

import Head from "next/head"
import { AText, Button, Hr } from "../../components"
import styles from "./cart.module.css"
import { CartHeader } from "./components"
import { CartItem } from "./components/cart-item"

import { useCartContext } from "../../contexts"
export default function Cart() {
	const { noOfItemsInCart, addItemToCart, productsInCart } = useCartContext()
	console.log(productsInCart)
	return (
		<>
			<Head>
				<title>Amazon Cart</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.wrapper}>
				{/* Shopping Cart Section */}
				<section className={styles.cart}>
					<CartHeader />
					<ul className={styles["cart-items-list"]}>
						{productsInCart.map(product => {
							const { productId } = product
							return <CartItem key={productId} product={product} />
						})}
					</ul>
				</section>

				{/* Subtotal Section */}
				<aside className={styles["cart-sidebar"]}>
					<div className={styles["cart-checkout"]}>
						<AText variant='h2'>
							Subtotal ({noOfItemsInCart} item{noOfItemsInCart > 1 && "s"}):{" "}
							<b>$98.90</b>
							<Button
								onClick={() => addItemToCart(13960)}
								className={styles["checkout-button"]}>
								Proceed to checkout
							</Button>
							<Button
								onClick={() => addItemToCart(1, 2)}
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

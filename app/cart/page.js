"use client"
import { useState, useEffect } from "react"
import Head from "next/head"
import { AText, Button, Hr } from "../../components"
import styles from "./cart.module.css"
import { CartHeader } from "./components"
import { CartItem } from "./components/cart-item"
export default function Home() {
	const [cartItems, setCartItems] = useState([])

	const noOfItems = cartItems?.length || 0
	useEffect(() => {
		const cart = localStorage.getItem("cart")

		const _cartItems = JSON.parse(cart)

		setCartItems(_cartItems)
	}, [cartItems])

	const addItem = async () => {
		const itemsInStorageString = localStorage.getItem("cart")

		const itemsInStorage = JSON.parse(itemsInStorageString)

		const newItems = [...itemsInStorage, { id: Math.random, quantity: 4 }]
		await localStorage.setItem("cart", JSON.stringify(newItems))
	}
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
						<CartItem />
					</ul>
				</section>

				{/* Subtotal Section */}
				<aside className={styles["cart-sidebar"]}>
					<AText variant='h2'>
						Subtotal ({noOfItems} items): <b>$98.90</b>
						<Button onClick={addItem}>Proceed to checkout</Button>
					</AText>
				</aside>
			</main>
		</>
	)
}

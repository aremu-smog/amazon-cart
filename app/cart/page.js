"use client"
import { useState, useEffect } from "react"
import Head from "next/head"
import { AText, Button, Hr } from "../../components"
import styles from "./cart.module.css"
import { CartHeader } from "./components"
import { CartItem } from "./components/cart-item"
import { useProductsContext } from "../../contexts"
export default function Home() {
	const { products, setProducts } = useProductsContext()

	const [cartItems, setCartItems] = useState([])

	const noOfItems =
		cartItems.reduce((acc, curr) => {
			return acc + curr.quantity
		}, 0) || 0

	useEffect(() => {
		fetch(`https://api.chimoney.io/v0.2/info/assets`, {
			method: "GET",
			headers: {
				Bearer: process.env.NEXT_APP_CHIMONEY_API,
			},
		})
			.then(res => res.json())
			.then(data => {
				const allAssets = data.data
				const giftCards = allAssets.giftCardsRLD.content
				console.log("Gift cards", giftCards)
				const cardsToGoInCart = giftCards.slice(0, 9)

				setProducts(cardsToGoInCart)

				const _cartItems = cardsToGoInCart.map(item => {
					return { id: item.productId, quantity: 2 }
				})

				localStorage.setItem("cart", JSON.stringify(_cartItems))
				setCartItems(_cartItems)
			})
			.catch(e => {
				console.log("Something went wrong", e.messaage)
			})
	}, [])

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
						{products.map(product => {
							const { productId } = product
							return <CartItem key={productId} product={product} />
						})}
					</ul>
				</section>

				{/* Subtotal Section */}
				<aside className={styles["cart-sidebar"]}>
					<div className={styles["cart-checkout"]}>
						<AText variant='h2'>
							Subtotal ({noOfItems} items): <b>$98.90</b>
							<Button onClick={addItem} className={styles["checkout-button"]}>
								Proceed to checkout
							</Button>
						</AText>
					</div>
				</aside>
			</main>
		</>
	)
}

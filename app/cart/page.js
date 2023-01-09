import Head from "next/head"
import { AText, Button, Hr } from "../../components"
import styles from "./cart.module.css"
import { CartHeader } from "./components"
import { CartItem } from "./components/cart-item"
export default function Home() {
	const noOfItems = 4
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
					</AText>
				</aside>
			</main>
		</>
	)
}

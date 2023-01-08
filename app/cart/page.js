import Head from "next/head"
import { AText, Button, Hr } from "../../components"
import styles from "./cart.module.css"
import { CartHeader } from "./components"
export default function Home() {
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
				</section>

				{/* Subtotal Section */}
				<aside></aside>
			</main>
		</>
	)
}

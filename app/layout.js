"use client"
import Image from "next/image"
import Link from "next/link"
import { AText } from "../components"
import { ProductsProvider } from "../contexts"
import { useCart } from "../hooks"
import "../styles/globals.css"
export default function RootLayout({ children }) {
	return (
		<ProductsProvider>
			<html>
				<head />

				<body>
					<nav className='main-nav'>
						<Logo />
						<Cart />
					</nav>

					<main>{children}</main>
				</body>
			</html>
		</ProductsProvider>
	)
}

const Logo = () => {
	return (
		<span className='logo-wrapper'>
			<Link href='/'>
				<Image src='/amazon-logo.png' fill={true} alt='Amazon logo' />
			</Link>
		</span>
	)
}
const Cart = () => {
	const { noOfItemsInCart } = useCart()
	return (
		<span className='cart-wrapper'>
			<Link href='/cart'>
				<AText variant='span' className='no-of-items'>
					<b>{noOfItemsInCart}</b>
				</AText>
				<Image src='/cart.png' fill={true} alt='' />
			</Link>
		</span>
	)
}

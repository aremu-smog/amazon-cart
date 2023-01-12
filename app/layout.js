"use client"
import Image from "next/image"
import Link from "next/link"
import { AText } from "../components"
import { ProductsProvider } from "../contexts"
import "../styles/globals.css"
export default function RootLayout({ children }) {
	return (
		<ProductsProvider>
			<html>
				<head />

				<body>
					<nav className='main-nav'>
						<span className='logo-wrapper'>
							<Link href='/'>
								<Image src='/amazon-logo.png' fill={true} alt='Amazon logo' />
							</Link>
						</span>

						<span className='cart-wrapper'>
							<Link href='/cart'>
								<AText variant='span' className='no-of-items'>
									<b>0</b>
								</AText>
								<Image src='/cart.png' fill={true} alt='' />
							</Link>
						</span>
					</nav>

					<main>{children}</main>
				</body>
			</html>
		</ProductsProvider>
	)
}

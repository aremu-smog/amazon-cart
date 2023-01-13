"use client"
import Image from "next/image"
import Link from "next/link"
const { AText, Button } = require("../../../components")
import { useRouter } from "next/router"
import styles from "../cart.module.css"

export const EmptyCart = () => {
	return (
		<div className={styles["empty-cart-wrapper"]}>
			<Image src='/empty-cart.png' alt='empty cart' width={160} height={160} />
			<AText variant='h1'>No item in cart</AText>
			<Link href='/'>
				<Button text='Add items' />
			</Link>
		</div>
	)
}

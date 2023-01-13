"use client"
import Image from "next/image"
import { AText } from "../../../components"
import styles from "../product.module.css"

export const NoProducts = () => {
	return (
		<div className={styles["no-products-wrapper"]}>
			<Image src='/empty-cart.png' alt='empty cart' width={160} height={160} />

			{/* In real life you wouldn't give this much info */}
			<AText variant='h2'>
				No products found! <br />
				Kindly refresh or check your .env.local
			</AText>
		</div>
	)
}

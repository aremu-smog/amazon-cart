"use client"
import { useEffect } from "react"
import { useProductsContext } from "../contexts"
import "../styles/globals.css"

export default function Home() {
	const { products, setProducts } = useProductsContext()

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

				const recentProducts = giftCards.slice(0, 9)

				setProducts(recentProducts)
			})
			.catch(e => {
				console.log("Something went wrong", e.messaage)
			})
	}, [setProducts])

	return <section>{JSON.stringify(products)}</section>
}

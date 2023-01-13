"use client"
import { useProductsContext } from "../contexts"
import "../styles/globals.css"
import { ProductList } from "./product/components"

export default function Home() {
	return (
		<section>
			<ProductList />
		</section>
	)
}

"use client"
import { useProductsContext } from "../contexts"
import "../styles/globals.css"
import { ProductList } from "./product/components"

export default function Home() {
	const { isLoading } = useProductsContext()

	return <section>{isLoading ? "Loading..." : <ProductList />}</section>
}

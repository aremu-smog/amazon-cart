"use client"
import { useEffect } from "react"
import { useProductsContext } from "../contexts"
import "../styles/globals.css"

export default function Home() {
	const { products } = useProductsContext()

	return <section>{JSON.stringify(products)}</section>
}

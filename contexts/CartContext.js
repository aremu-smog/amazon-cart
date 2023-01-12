import React, { useContext, useEffect, useMemo, useState } from "react"
import { useProductsContext } from "./ProductsContext"

const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
	const { products } = useProductsContext()
	const [productsInCart, setProductsInCart] = useState([])

	const itemsInCart = getItemsInCart()
	useEffect(() => {
		const _productsInCart = products?.filter(product => {
			return itemsInCart?.some(item => item.id === product.productId)
		})

		setProductsInCart(_productsInCart)
	}, [products])
	const noOfItemsInCart = useMemo(() => {
		return (
			productsInCart?.reduce((acc, curr) => {
				return acc + curr.quantity
			}, 0) || 0
		)
	}, [productsInCart])

	const addItemToCart = async (productId, quantity = 1) => {
		const newItem = { id: productId, quantity }

		const productInfo = products.find(product => product.productId == productId)
		const newItems = [...itemsInCart, newItem]
		await updateCart(newItems)
		setProductsInCart([...productsInCart, { ...productInfo, quantity }])
	}
	const values = {
		noOfItemsInCart,
		addItemToCart,
		productsInCart,
	}
	return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

const updateCart = items => {
	if (typeof window !== "undefined") {
		localStorage.setItem("cart", JSON.stringify(items))
	}
}

const getItemsInCart = () => {
	if (typeof window !== "undefined") {
		const cart = localStorage.getItem("cart")

		if (cart !== null) {
			return JSON.parse(cart)
		} else {
			return []
		}
	}
}

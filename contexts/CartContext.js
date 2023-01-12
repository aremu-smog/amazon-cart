import React, { useContext, useEffect, useMemo, useState } from "react"
import { useProductsContext } from "./ProductsContext"

const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
	const { products } = useProductsContext()
	const [productsInCart, setProductsInCart] = useState([])

	const itemsInCart = getItemsInCart()
	useEffect(() => {
		if (products.length) {
			const _productsInCart = products?.filter(product => {
				return itemsInCart?.some(item => item.id === product.productId)
			})

			const productsWithQuantity = _productsInCart.map(product => {
				const theProduct = itemsInCart.find(
					item => item.id === product.productId
				)

				return { ...product, quantity: theProduct.quantity }
			})
			setProductsInCart(productsWithQuantity)
		}
	}, [products])

	console.log(productsInCart)
	const noOfItemsInCart = useMemo(() => {
		if (products.length) {
			return (
				itemsInCart?.reduce((acc, curr) => {
					return acc + curr.quantity
				}, 0) || 0
			)
		} else {
			return 0
		}
	}, [productsInCart])

	const addItemToCart = async (productId, quantity = 1) => {
		const newItem = { id: productId, quantity }

		const productInfo = products.find(product => product.productId == productId)
		const newItems = [...itemsInCart, newItem]
		await updateCart(newItems)
		setProductsInCart([...productsInCart, { ...productInfo, quantity }])
	}

	const deleteProductFromCart = productId => {
		const newItems = itemsInCart.filter(
			itemInCart => itemInCart.id !== productId
		)

		const updatedIems = productsInCart.filter(
			product => product.productId !== productId
		)

		updateCart(newItems)
		setProductsInCart(updatedIems)
	}
	const values = {
		noOfItemsInCart,
		addItemToCart,
		deleteProductFromCart,
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
	// if (typeof window !== "undefined") {
	const cart = localStorage.getItem("cart")

	if (cart !== null) {
		return JSON.parse(cart)
	} else {
		return []
	}
}

import { useProductsContext } from "../contexts"
import { useEffect, useState } from "react"

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
		}
		return cart
	}
}
const useCart = () => {
	const { products, noOfItemsInCart, setNoOfItemsInCart } = useProductsContext()

	const [productsInCart, setProductsInCart] = useState([])

	const itemsInCart = getItemsInCart()
	useEffect(() => {
		const cart = getItemsInCart()

		if (cart === null) {
			updateCart([])
		} else {
			getProductsInCart(itemsInCart)
			setNoOfItemsInCart(_noOfItemsInCart)
		}
	}, [])

	const addItemToCart = async (productId, quantity) => {
		const newItems = [...itemsInCart, { id: productId, quantity: 1 }]
		await updateCart(newItems)
		await getProductsInCart(itemsInCart)
		setNoOfItemsInCart(_noOfItemsInCart)
	}

	const deleteProductFromCart = productId => {
		const newItems = itemsInCart.filter(
			itemInCart => itemInCart.id !== productId
		)

		updateCart(newItems)
		getProductsInCart(newItems)
		setNoOfItemsInCart(_noOfItemsInCart)
	}

	const getProductsInCart = itemsInCart => {
		const productsInCart = products?.filter(product => {
			return itemsInCart?.some(item => item.id === product.productId)
		})

		setProductsInCart(productsInCart)
	}

	const _noOfItemsInCart =
		itemsInCart?.reduce((acc, curr) => {
			return acc + curr.quantity
		}, 0) || 0

	return {
		noOfItemsInCart,
		productsInCart,
		addItemToCart,
		deleteProductFromCart,
	}
}

export { useCart }

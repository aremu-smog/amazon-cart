import React, { useContext, useEffect, useState } from "react"

const ProductsContext = React.createContext()
export const useProductsContext = () => useContext(ProductsContext)

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	const [noOfItemsInCart, setNoOfItemsInCart] = useState(0)

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
	}, [])
	const values = {
		products,
		setProducts,
		noOfItemsInCart,
		setNoOfItemsInCart,
	}
	return (
		<ProductsContext.Provider value={values}>
			{children}
		</ProductsContext.Provider>
	)
}

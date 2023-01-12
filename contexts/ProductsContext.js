import React, { useContext, useState } from "react"

const ProductsContext = React.createContext()
export const useProductsContext = () => useContext(ProductsContext)

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	const [noOfItemsInCart, setNoOfItemsInCart] = useState(0)

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

import React, { useContext, useState } from "react"

const ProductsContext = React.createContext()
export const useProductsContext = () => useContext(ProductsContext)

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])

	const values = {
		products,
		setProducts,
	}
	return (
		<ProductsContext.Provider value={values}>
			{children}
		</ProductsContext.Provider>
	)
}

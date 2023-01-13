const { AText } = require("../../../components")
const { useCartContext } = require("../../../contexts")

export const CartSubTotal = () => {
	const { noOfItemsInCart, subTotal } = useCartContext()

	return (
		<div className='subtotal'>
			<AText variant='h2'>
				Subtotal ({noOfItemsInCart} item{noOfItemsInCart > 1 && "s"}):{" "}
				<b>${subTotal}</b>
			</AText>
		</div>
	)
}

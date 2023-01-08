import { AText, Hr } from "../../../components"
import styles from "../cart.module.css"

const CartHeader = () => {
	return (
		<>
			<header className={styles["cart-header"]}>
				<AText variant='h1'>Shopping Cart</AText>
				<AText variant='p'>Price</AText>
			</header>
			<Hr />
		</>
	)
}

export { CartHeader }

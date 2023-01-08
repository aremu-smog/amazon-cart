import styles from "./button.module.css"
const Button = ({ variant = "primary", text, children, props }) => {
	return (
		<button className={styles[variant]} {...props}>
			{text || children}
		</button>
	)
}

export { Button }

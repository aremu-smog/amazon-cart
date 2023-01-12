import styles from "./button.module.css"
const Button = ({
	variant = "primary",
	className,
	text,
	children,
	...props
}) => {
	return (
		<button className={styles[variant] + " " + className} {...props}>
			{text || children}
		</button>
	)
}

export { Button }

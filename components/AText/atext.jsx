import styles from "./atext.module.css"

const AText = ({ variant, value, className, children }) => {
	const TextComponent = variant

	return (
		<TextComponent className={styles[variant] + " " + className}>
			{value || children}
		</TextComponent>
	)
}

export { AText }

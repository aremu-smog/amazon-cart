import styles from "./atext.module.css"

const AText = ({ variant, value, children }) => {
	const TextComponent = variant

	return (
		<TextComponent className={styles[variant]}>
			{value || children}
		</TextComponent>
	)
}

export { AText }

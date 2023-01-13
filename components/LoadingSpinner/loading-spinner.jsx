import { AText } from "../AText"
import styles from "./loading-spinner.module.css"

export const LoadingSpinner = ({ title }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.loader}></div>
			{title && <AText variant='h1'>{title}</AText>}
		</div>
	)
}

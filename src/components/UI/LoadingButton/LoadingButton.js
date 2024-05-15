import { useContext } from "react";
import ThemeContext from "../../../context/themeContext";


export default function LoadingButton(props) {
    const theme = useContext(ThemeContext)

	const buttonProps = {...props}
	delete buttonProps.loading

	return props.loading ? (
		<button
			className={`btn mt-4 btn-${theme.color}`}
			type='button'
			disabled>
			<span
				className='spinner-border spinner-border-sm'
				role='status'
				aria-hidden='true'></span>
			<span className='visually-hidden'>Ładowanie...</span>
		</button>
	) : (
		<button {...buttonProps} className={`btn mt-4 btn-${theme.color}`}>{props.children}</button>
	)
}

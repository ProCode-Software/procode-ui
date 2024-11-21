import React from "react"
import { mergeClasses } from "../../utils/mergeClasses"

// button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, text, ...props }, ref): React.JSX.Element => {
		return (
			<button ref={ref} className={mergeClasses(['button', props.className])} {...props}>
				{text || children}
			</button>
		)
	}
)

interface ButtonProps {
	children: React.ReactNode
    disabled?: boolean
    icon?: string
	text?: string
	subText?: string
}

export { Button }

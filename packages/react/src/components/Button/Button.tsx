import React, { ButtonHTMLAttributes } from "react"
import { mergeClasses } from "../../utils/mergeClasses"
import { PolymorphicProps } from "../../utils/polymorphic"

// button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, as: Component = 'button', text, ...props }, ref): React.JSX.Element => {
		return (
			<button ref={ref} {...mergeClasses(['button', props.className])} {...props}>
				{text || children}
			</button>
		)
	}
)


type ButtonProps = PolymorphicProps<'button', {
	children: React.ReactNode
	disabled?: boolean
	icon?: string
	text?: string
	subText?: string
}>



export { Button }

import React from "react"

// button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, ...props }, ref): React.JSX.Element => {
		return (
			<button ref={ref} className="button" {...props}>
				{children}
			</button>
		)
	}
)

interface ButtonProps {
	children: React.ReactNode
    disabled?: boolean
    icon?: string
}

export { Button }

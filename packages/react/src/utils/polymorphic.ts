import React from "react"

export type PolymorphicProps<Element extends React.ElementType, Props> = Props &
    Omit<React.ComponentProps<Element>, 'as'> & {
        as?: Element;
    }
//
export const Button = ({onClick, children, ...props }) => { //SpredOperetion vai usar o onClick o chilldren e tudo que for colocado na props independente do que seja 
    return <button onClick={onClick} {...props}>{children}</button>
}
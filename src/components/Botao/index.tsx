import React from "react";
import style from './botao.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onclick?: () => void;
    children?: React.ReactNode
}

const Botao = ({onclick, type, children}: Props) => {
    return (
        <button onClick={onclick} type={type} className={style.botao}>
            {children}
        </button>
    )
}
 
export default Botao
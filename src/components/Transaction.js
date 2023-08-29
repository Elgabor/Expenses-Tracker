import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({trasaction}) => {
    const{deleteTransaction} = useContext(GlobalContext)

    const sing = trasaction.amount < 0 ? '-' : '+';
    return (
        <li className={trasaction.amount < 0 ? 'minus' : 'plus'}>
            {trasaction.text} <span>{sing}${Math.abs(trasaction.amount)}</span><button onClick = {() => deleteTransaction(trasaction.id)} className="delete-btn">x</button>
        </li>
    )
}

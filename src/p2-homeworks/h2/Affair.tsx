import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number)=>any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {

        props.deleteAffairCallback(props.affair._id)

    }// need to fix

    return (
        <div>

            <div className={s.wrapper}>
                <div>{props.affair.name}</div>
                <div>{props.affair.priority}</div>
                <div>
                    <button onClick={deleteCallback} className={s.btn}>X</button>
                </div>
            </div>
        </div>
    )
}

export default Affair

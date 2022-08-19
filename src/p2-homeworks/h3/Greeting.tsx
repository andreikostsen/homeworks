import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import f from "../h2/Affair.module.css"

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error? s.errorInput:s.normalInput  // need to fix with (?:)



    return (
        <div>
            <div className={s.wrapper}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <button onClick={addUser} className={f.btn}>add</button>
                <span>{totalUsers}</span>

            </div>
            <span className={s.errorTxt}>{error}</span>

        </div>
    )
}

export default Greeting

import React from 'react'
import f from './Message.module.css'

type messageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string

}


function Message(props:messageDataPropsType) {
    return (
        <div className={f.message}>
            <img src={props.avatar} className={f.avatar}/>
            {props.name}
            {props.message}
            {props.time}
        </div>
    )
}

export default Message

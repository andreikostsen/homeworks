import React from 'react'
import f from './Message.module.css'

type messageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string

}


function Message(props: messageDataPropsType) {
    return (
        <div className={f.messageWrapper}>

            <div className={f.avatarWrapper}>
                <img src={props.avatar} className={f.avatar}/>
            </div>

            <div className={f.message}>
                <div className={f.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={f.time}>{props.time}</div>
                <div className={f.messageLeftArrow}></div>

            </div>


        </div>
    )
}

export default Message

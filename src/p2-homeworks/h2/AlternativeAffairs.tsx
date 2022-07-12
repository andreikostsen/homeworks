import React from 'react'
import {AffairType} from "./HW2";

type PropsType={

    data: Array<AffairType>
}

function AlternativeAffairs(props:PropsType) {
    return (
        <div>
This is alternative Affairs Names:

<ul>
    {props.data.map((n)=> {
        return (<li>{n.name}</li>)
    }


        )}
</ul>
        </div>
    )
}

export default AlternativeAffairs

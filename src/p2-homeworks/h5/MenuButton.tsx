import s from "./MenuButton.module.css"

type PropsType = {

    onclickHandler: ()=>void;



}

export const MenuButton=(props:PropsType)=> {

    const onclickHandler=()=> {

        props.onclickHandler()



    }


    return (

        <div onClick={onclickHandler}  className={s.menuIconBox}>

            <div className={s.menuIcon}></div>
            <div className={s.menuIcon}></div>
            <div className={s.menuIcon}></div>


        </div>


    )


}
import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {JunPlus} from "./pages/JunPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    // add paths
}

function RoutesComponent() {
    return (
        <div>


            <Routes>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JunPlus/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>





            {/*/!*Switch выбирает первый подходящий роут*!/*/}
            {/*<Routes>*/}

            {/*/!*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*!/*/}
            {/*/!*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*!/*/}
            {/*<Route  path={'/'}  element={() => <Navigate to={'/pre-junior'}/>}   />*/}
            {/*/!*<Route  path={'/'}  element={() => <Navigate to={PATH.PRE_JUNIOR}/>}/>*!/*/}

            {/*/!*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*!/*/}
            {/*/!*<Route path='/pre-junior' element={()=> <PreJunior/>} />*!/*/}
            {/*    // add routes*/}

            {/*/!*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*!/*/}
            {/*<Route render={() => <Error404/>}/>*/}
            {/*    <Route element={() => <Error404/>}/>*/}


           {/*</Routes>*/}
        </div>
    )
}

export default RoutesComponent

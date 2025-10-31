import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import s from '../../s1-main/App.module.css'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div className={s.container}>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route ...*/}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />}/>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} />}/>
                <Route path={PATH.JUNIOR} element={<Junior />}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />}/>
                <Route path={'/error404'} element={<Error404 />}/>
                <Route path={'/*'} element={<Navigate to={'/error404'} />}/>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                {/*<Route ...*/}
                {/*<Route ...*/}
                {/*<Route ...*/}

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                {/*<Route ...*/}
            </Routes>
        </div>
    )
}

export default Pages

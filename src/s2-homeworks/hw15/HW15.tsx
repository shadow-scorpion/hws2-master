import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import {useSearchParams} from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import {CircularProgress} from "@mui/material";

/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
    id: number
    tech: string
    developer: string
}

type ParamsType = {
    sort: string
    page: number
    count: number
}

const getTechs = (params: ParamsType) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test3',
            {params}
        ).catch((e) => {
            alert(JSON.stringify(e))
            return e
        })

}

const HW15 = () => {
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(5)
    const [idLoading, setLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(100)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<TechType[]>([])

    const sendQuery = (params: any) => {
        setLoading(true)
        console.log('get dates' ,params)
            getTechs(params)
                .then((res) => {
                    setTechs(res.data.techs)
                    setTotalCount(res.data.totalCount)
                    // сохранить пришедшие данные
                }).catch((e)=> {
                    alert(e)
            }).finally(()=> setLoading(false))
        }

    const onChangePagination = (newPage: number, newCount: number) => {
        // делает студент
        setPage(newPage)
        // setPage(
        // setCount(
        setCount(newCount)
        // sendQuery(
        sendQuery({page: newPage, count: newCount})
        // setSearchParams(
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev)
            params.set('page', String(newPage))
            params.set('count', String(newCount))
            return params
        })

        //
    }

    const onChangeSort = (newSort: string) => {
        setSort(newSort)
        setPage(1)
        sendQuery({page: 1, count: count, sort: newSort})
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev)
            params.set('sort', newSort)
            console.log(!params.has('sort'))
            console.log(params.toString())
            return params
        })
        // делает студент

        // setSort(
        // setPage(1) // при сортировке сбрасывать на 1 страницу

        // sendQuery(
        // setSearchParams(

        //
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        const usedPage = +params.page || 1
        const usedCount = +params.count || 4
        // sendQuery({usedPage, usedCount})
        sendQuery({page: usedPage, count: usedCount})
        setPage(usedPage)
        setCount(usedCount)

        // sendQuery({page: +params.page, count: +params.count})
        // setPage(+params.page || 1)
        // setCount(+params.count || 4)
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t.id} className={s.row}>
            <div id={'hw15-tech-' + t.id} className={s.tech}>
                {t.tech}
            </div>

            <div id={'hw15-developer-' + t.id} className={s.developer}>
                {t.developer}
            </div>
        </div>
    ))

    return (
        <div id={'hw15'}>
            <div className={s2.hwTitle}>Homework #15</div>

            <div className={idLoading ? s.opacityPagination : `${s2.hw} ${s.container}`}>
                {/*{idLoading && <div id={'hw15-loading'} className={s.loading}>Loading...</div>}*/}
                {idLoading && <div id={'hw15-loading'} className={s.loading}>
                    <CircularProgress sx={{position: 'absolute', left: '50%', top: '20%', opacity: 1}} size={150}/>
                </div>}

                <SuperPagination
                    page={page}
                    itemsCountForPage={count}
                    totalCount={totalCount}
                    onChange={onChangePagination}
                />

                <div className={s.rowHeader}>
                    <div className={s.techHeader}>
                        tech
                        <SuperSort sort={sort} value={'tech'} onChange={onChangeSort}/>
                    </div>

                    <div className={s.developerHeader}>
                        developer
                        <SuperSort sort={sort} value={'developer'} onChange={onChangeSort} className={s.imgSort}/>
                    </div>
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW15

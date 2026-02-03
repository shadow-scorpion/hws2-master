import React from 'react'
import downArrow  from './icons/si--expand-more-duotone.svg'
import upArrow  from './icons/si--expand-less-duotone.svg'
import doubleArrow  from './icons/si--up-down-duotone.svg'

// добавить в проект иконки и импортировать
// const DownIcon = FaSortDown as React.ElementType
// const UpIcon = FaSortUp as React.ElementType
// const noneIcon = FaSort as React.ElementType

const downIcon = downArrow
const upIcon = upArrow
const noneIcon = doubleArrow

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
    className?: string
}

export const pureChange = (sort: string, down: string, up: string) => {
    if(sort === '') return down
    if(sort === down) return up
    if(sort === up) return ''
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, className, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    const styles = className ? className : ''


    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            // className={styles}
            style={{display: "flex"}}
        >
            <img id={id + '-icon-' + sort} src={icon} alt={'some sort'} style={{alignItems: 'center'}}/>
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort

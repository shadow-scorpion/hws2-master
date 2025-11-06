import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                state = [...state.sort((a, b) => a.name.localeCompare(b.name))]
            } else if (action.payload === 'down') {
                state = [...state.sort((a, b) => b.name.localeCompare(a.name))]
            }
            return state
        }
        case 'check': {
            if(action.payload >= 18) {
                state = [...state.filter((user)=> user.age >= 18).sort((a, b) => a.age - b.age)]
            }
            return state // need to fix
        }
        default:
            return state
    }
}

const initState = {
    themeId: 1,
}

type Theme = {
    themeId: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdAT): Theme => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.payload.id}
        default:
            return state
    }
}

export const changeThemeIdAC = (id: number) => (
    {
        type: 'SET_THEME_ID',
        payload: {
            id
        }
    } as const
) // fix any

type ChangeThemeIdAT = ReturnType<typeof changeThemeIdAC>

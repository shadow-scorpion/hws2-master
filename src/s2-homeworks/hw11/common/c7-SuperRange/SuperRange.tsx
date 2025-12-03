import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                '& .MuiSlider-track': {
                  color: 'green'
                },
                '& .MuiSlider-thumb': {
                    color: '#ffffff',
                    border: '2px solid green',

                    '&::before': {
                        content: '""',
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        backgroundColor: 'green'
                    }
                },
                '& .MuiSlider-mark': {
                    color: 'green'
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B'
                },
                '& .MuiSlider-valueLabel': {
                    color: 'black'
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

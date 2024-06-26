import { PaletteOptions } from '@mui/material'

export type CustomPaletteOptionsType = PaletteOptions
export type PaletteType = typeof palette

export const palette: PaletteOptions = {
    primary: {
        main: '#e3f6f5',
    },
    secondary: {
        main: '#bae8e8',
        light: '#e3f6f5',
        dark: '#2c698d',
    },
    common: {
        black: '#000',
        white: '#fff',
    },
    text: {
        primary: '#272643',
        secondary: '#272643',
    },
    background: {
        default: '#ffffff',
    },
}

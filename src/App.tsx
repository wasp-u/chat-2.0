import './App.css'
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './app/providers/AuthProvider'
import { theme } from './shared/theme'
import { router } from './app/router'
import { RefreshSession } from './app/RefreshSession'
import { QueryProvider } from './app/providers/QueryProvider'

function App() {
    return (
        <AuthProvider>
            <QueryProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <RefreshSession />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                            variant='h1'
                            fontSize={270}
                            color='31363F'
                            fontWeight={600}
                            letterSpacing={0}
                        >
                            Enjoy
                        </Typography>
                    </Box>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </QueryProvider>
        </AuthProvider>
    )
}

export default App

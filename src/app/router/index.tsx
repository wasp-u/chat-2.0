import { createBrowserRouter } from 'react-router-dom'
import { Stack } from '@mui/material'
import { SignIn } from '../../pages/SIgnIn'
import { SignUp } from '../../pages/SignUp'
import { Home } from '../../pages/Home'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: '*',
        element: (
            <Stack
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                404
            </Stack>
        ),
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
])

import { Card, Link, Stack, Typography } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { useSignInForm } from '../../hooks/useSignInForm'
import { TextField } from '../../../../shared/components/fields/TextField'
import { Button } from '../../../../shared/components/base/Button'

export function SignInForm() {
    const { methods, isPending, onSubmit } = useSignInForm()

    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: 600,
                p: 4,
            }}
        >
            <FormProvider {...methods}>
                <Typography variant='h2' sx={{ mb: 3, textAlign: 'center' }}>
                    Sign In
                </Typography>

                <Stack spacing={2}>
                    <TextField
                        name='email'
                        type='email'
                        label='Email'
                        placeholder='email@example.com'
                    />

                    <TextField
                        name='password'
                        label='Password'
                        placeholder='Password'
                    />

                    <Button
                        loading={isPending}
                        sx={{ width: 200, alignSelf: 'end' }}
                        onClick={onSubmit}
                    >
                        Login
                    </Button>
                </Stack>

                <Typography>
                    Do you not have account?{' '}
                    <Link href='/sign-up'>Sign Up</Link>
                </Typography>
            </FormProvider>
        </Card>
    )
}

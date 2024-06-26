import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useAuthActions } from '../../../entities/auth/hooks/useAuthActions'
import { LoginFormSchema, LoginFormValues } from '../model'

export const useSignInForm = () => {
    const { onSignIn } = useAuthActions()
    const navigate = useNavigate()

    const methods = useForm<LoginFormValues>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(LoginFormSchema),
    })

    const {
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = methods
    // const handleFormError = useHandleFormError(methods.setError);

    const onSubmit = handleSubmit(async (values) => {
        try {
            await onSignIn(values)

            reset()
            navigate('/')
        } catch (error) {
            console.log(error)
            // handleFormError(error);
        }
    })

    return {
        methods,
        isPending: isSubmitting,
        onSubmit,
    }
}

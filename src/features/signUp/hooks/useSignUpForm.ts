import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useAuthActions } from '../../../entities/auth/hooks/useAuthActions'
import { SingUpFormSchema, SignUpFormValues } from '../model'

export const useSignUpForm = () => {
    const { onSignUp } = useAuthActions()
    const navigate = useNavigate()

    const methods = useForm<SignUpFormValues>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
        resolver: zodResolver(SingUpFormSchema),
    })

    const {
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = methods
    // const handleFormError = useHandleFormError(methods.setError);

    const onSubmit = handleSubmit(async (values) => {
        try {
            await onSignUp(values)

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

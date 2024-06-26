import { forwardRef } from 'react'
import {
    TextInputBase,
    TextInputBaseProps,
    TextInputBaseRef,
} from '../../base/TextInputBase'
import { FormControl, FormControlProps } from '../../base/FormControl'

type TextInputRef = TextInputBaseRef
type TextInputFormControlProps = Pick<
    FormControlProps,
    'errorMessage' | 'fullWidth' | 'label' | 'helperText'
>

export interface TextInputProps
    extends TextInputBaseProps,
        TextInputFormControlProps {
    id?: string
    FormControlProps?: FormControlProps
    InputLabelProps?: {
        htmlFor?: string
        id?: string
    }
}

export const TextInput = forwardRef(
    (
        {
            id = '',
            label,
            value,
            size = 'medium',
            error,
            errorMessage,
            helperText,
            required,
            fullWidth = false,
            disabled,
            FormControlProps: formControlProps,
            InputLabelProps,
            ...props
        }: TextInputProps,
        ref: TextInputRef
    ) => {
        return (
            <FormControl
                htmlFor={id}
                label={label}
                size={size}
                error={error}
                errorMessage={errorMessage}
                required={required}
                fullWidth={fullWidth}
                helperText={helperText}
                {...formControlProps}
            >
                <TextInputBase
                    id={id}
                    ref={ref}
                    value={value}
                    size={size}
                    error={error}
                    fullWidth={fullWidth}
                    disabled={disabled}
                    sx={{ mt: 0.5, ...props.sx }}
                    {...InputLabelProps}
                    {...props}
                />
            </FormControl>
        )
    }
)

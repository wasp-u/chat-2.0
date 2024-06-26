import { useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { useSearchUsers } from '../../../entities/user/query/users'
import { TextInput } from '../../../shared/components/inputs/TextInput'
import { UserCard } from '../../UserCard/UserCard'
import { UserModel } from '../../../entities/user/model'

interface Props {
    onCardClick: (user: UserModel) => void
}

export function SearchUser({ onCardClick }: Props) {
    const [userName, setUserName] = useState('')

    const { data, mutateAsync } = useSearchUsers()

    useEffect(() => {
        mutateAsync(userName)
    }, [userName])

    return (
        <Stack spacing={1}>
            <TextInput
                placeholder='Search users'
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            {data && (
                <Stack spacing={1}>
                    {data.map((user) => (
                        <UserCard
                            userName={user.fullName}
                            key={user.id}
                            onClick={() => onCardClick(user)}
                        />
                    ))}
                </Stack>
            )}
        </Stack>
    )
}

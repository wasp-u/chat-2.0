import { Avatar, Card, Stack, Typography } from '@mui/material'
import { getInitials } from '../../shared'

interface Props {
    userName: string
    onClick: () => void
}

export function UserCard({ userName, onClick }: Props) {
    const initials = getInitials(userName)

    return (
        <Card
            sx={{
                '&:hover': {
                    background: 'rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                },
            }}
        >
            <Stack
                direction='row'
                alignItems='center'
                spacing={1}
                onClick={onClick}
            >
                <Avatar>{initials}</Avatar>

                <Typography>{userName}</Typography>
            </Stack>
        </Card>
    )
}

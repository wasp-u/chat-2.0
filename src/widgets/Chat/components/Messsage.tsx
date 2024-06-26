import { Card, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import DoneIcon from '@mui/icons-material/Done'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import { MessageModel } from '../../../entities/chat/model'
import { useSession } from '../../../app/providers/AuthProvider'

interface Props {
    message: MessageModel
}

export function Message({ message }: Props) {
    const { user } = useSession()
    const isMyMessage = message.postedByUser === user?.id
    const isViewed = message.viewed

    return (
        <Card
            sx={{
                px: 1,
                py: 0.5,
                borderRadius: 1,
                alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                ...(isMyMessage
                    ? { borderBottomRightRadius: 0 }
                    : { borderBottomLeftRadius: 0 }),
            }}
        >
            <Stack>
                {message.message}
                <Stack
                    direction='row'
                    spacing={0.5}
                    sx={{ alignSelf: 'flex-end', alignItems: 'flex-end' }}
                >
                    <Typography variant='subtitle2' fontSize={10}>
                        {dayjs(message.createdAt).format('MMM D, h:mm A')}
                    </Typography>

                    {isMyMessage && isViewed && (
                        <DoneAllIcon color='success' fontSize='small' />
                    )}
                    {isMyMessage && !isViewed && (
                        <DoneIcon color='success' fontSize='small' />
                    )}
                </Stack>
            </Stack>
        </Card>
    )
}

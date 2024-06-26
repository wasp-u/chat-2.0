import { useInfiniteQuery, useMutation, useQuery } from 'react-query'
import { getChat, getChatMessages, getUserChats } from '../api'
import { ChatModel } from '../model'

export const MESSAGES_QUERY_KEY = ['chat/messages']
export const CHATS_QUERY_KEY = ['chats']

export const useGetChat = () => {
    const state = useMutation((userId: string) => getChat({ userId }))
    return { ...state }
}

export const useGetChats = () => {
    const state = useQuery<ChatModel[]>({
        queryFn: getUserChats,
        queryKey: [CHATS_QUERY_KEY],
    })

    return { ...state }
}

export const useGetMessages = (chatRoomId: string) => {
    const state = useInfiniteQuery({
        queryKey: [MESSAGES_QUERY_KEY, chatRoomId],
        queryFn: ({ pageParam }) => getChatMessages(chatRoomId, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined
        },
    })

    return { ...state }
}

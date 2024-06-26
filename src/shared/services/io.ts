import { io } from 'socket.io-client'

export const socket = io('http://localhost:3001')

export const SOCKET_EVENTS = {
    newMessage: 'new message',
    updateChat: 'update chat',
    subscribe: 'subscribe',
    unsubscribe: 'unsubscribe',
    notification: 'notification',
    connect: 'connect',
    disconnect: 'disconnect',
}

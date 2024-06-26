import { useEffect, useState } from 'react'
import { SOCKET_EVENTS, socket } from '../services/io'

export const useSocket = () => {
    const [isConnected, setIsConnected] = useState(socket.connected)

    useEffect(() => {
        function onConnect() {
            setIsConnected(true)
        }

        function onDisconnect() {
            setIsConnected(false)
        }

        socket.on(SOCKET_EVENTS.connect, onConnect)
        socket.on(SOCKET_EVENTS.disconnect, onDisconnect)

        return () => {
            socket.off(SOCKET_EVENTS.connect, onConnect)
            socket.off(SOCKET_EVENTS.disconnect, onDisconnect)
        }
    }, [])

    return { isConnected }
}

import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'

interface Props {
    children: React.ReactNode
}

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => console.log(error),
    }),
    defaultOptions: {
        queries: { refetchOnWindowFocus: false },
    },
})

export function QueryProvider({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

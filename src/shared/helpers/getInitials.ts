export const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((item) => item.slice(0, 1))
        .join('')
}

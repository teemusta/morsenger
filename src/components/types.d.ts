export interface Message {
    id: string
    content: string
    timetamp: Date
}

export interface User {
    id: string
    email: string
    firstName?: string
    lastName?: string
}

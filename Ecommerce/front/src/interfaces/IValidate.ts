export interface ILoginProps {
    email: string
    password: string
}

export interface ILoginErrors {
    email?: string
    password?: string
}

export interface IRegisterProps {
    email: string
    password: string
    name: string
    address: string
    phone: string
}

export interface IRegisterErrors {
    email?: string
    password?: string
    name?: string
    address?: string
    phone?: string
}

export interface IUserSession {
    token: string
    user: {
        address: string
        email: string
        id: number
        name: string
        phone: string
        role: string
        orders: []
    }
}
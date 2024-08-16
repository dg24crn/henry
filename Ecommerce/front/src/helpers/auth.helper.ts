import { ILoginProps, IRegisterProps } from "@/interfaces/IValidate"

/* 
/users/register => Register User 
{ email, password, name, address, phone } = req.body
POST
http://localhost:4000/users/register 
*/

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`http://localhost:4000/users/register`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if(response.ok) {
            return response.json()
        } else {
            throw Error("Failed to register")
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function login(userData: ILoginProps) {
    try {
        const response = await fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        if(response.ok) {
            return response.json()
        } else {
            throw Error("Failed to log in")
        }

    } catch (error:any) {
        throw new Error(error)
    }
}
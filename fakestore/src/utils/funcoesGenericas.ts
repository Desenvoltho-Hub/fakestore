import { api } from "../api/api"

export const genericFunc = <T>(valor: T) => {
    return valor
}

export const ajax = async <T>(url: string) => {
    const response: T = await api.get(url)
    return response
}


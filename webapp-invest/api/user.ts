// import {User} from '@/models/user';
import api from "./api";

export const getUserByID = async (id:number)=> {
    const response = await api.get(`/usuarios/${id}`)

    return response.data
}

export const createUser = async (data:any, p0?: {onSuccess: () => void;}) => {
    const response = await api.post(`/usuarios/create`)

    return response;
}

export const alterUser = async (id:number, data:any) => {
    const response = await api.put(`/usuarios/alter/`)

    return response
}
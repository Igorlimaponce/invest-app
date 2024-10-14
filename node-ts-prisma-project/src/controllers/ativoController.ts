import { Request, Response } from 'express';
import {createAtivo, getAtivoById} from '../services/ativoService'

export const createAtivoController = async(req:Request, res:Response) =>{
    const {cod_ativo,id_tipo_ativo,nome_ativo} = req.body

    try{
        const ativo = await createAtivo({cod_ativo,id_tipo_ativo,nome_ativo})

        res.status(201).json(ativo)
    }catch(error:any){
        throw new Error('Erro ao criar um ativo')
    }
}

export const getAtivoController = async(req: Request, res: Response) => {
    const {cod_ativo} = req.params
    try{
        const ativo = await getAtivoById(Number(cod_ativo))

        res.status(201).json(ativo)
    }catch(error:any){
        throw new Error("Erro ao consultar ativo")
    }
}
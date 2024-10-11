import { Request, Response } from 'express';
import {createAtivo} from '../services/ativoService'

export const createAtivoController = async(req:Request, res:Response) =>{
    const {id_ativo,cod_ativo,id_tipo_ativo,nome_ativo} = req.body

    try{
        const ativo = await createAtivo({id_ativo,cod_ativo,id_tipo_ativo,nome_ativo})

        res.status(201).json(ativo)
    }catch(error:any){
        throw new Error('Erro ao criar um ativo')
    }
}
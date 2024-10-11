import { Request, Response } from 'express';
import {createTipoAtivo} from '../services/tipoAtivoService'

export const createTipoAtivoController = async(req: Request, res: Response)=> {
    const {id_tipo_ativo, desc_tipo_ativo} = req.body

    try{
        const tipoAtivo = await createTipoAtivo({id_tipo_ativo,desc_tipo_ativo})

        res.status(201).json(tipoAtivo)

    }catch(error:any){
        throw new Error('Erro ao criar Tipo do Ativo')

    }
}
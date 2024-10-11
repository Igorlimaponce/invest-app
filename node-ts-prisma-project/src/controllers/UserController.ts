import { Request, Response } from 'express';
import {createUser, getUserById, alterUser} from '../services/UserServices'


export const getUserController = async (req:Request,res:Response): Promise<void>=> {
    const {userId} = req.params
try {
    const user = await getUserById(Number(userId))

    res.json(user);
}
catch (error) {
        res.status(500).json({error: `Erro ao buscar usuario`})
    }
}

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    const {id_user,nome,email,senha} = req.body;
try{
    const newUser = await createUser(Number(id_user),{nome, email,senha});
    res.status(201).json(newUser);
}
catch (error:any){
    res.status(500).json({error: `Erro ao criar usuario`})
}
}

export const alterUserController = async (req: Request, res: Response): Promise<void> => {
    const {id_user, nome, email, senha} = req.body;
    try{

        if (!id_user || isNaN(Number(id_user))) {
            res.status(400).json({ error: 'ID do usuário inválido' });
            return;
        }

        const updateUser = await alterUser(Number(id_user),{nome,email,senha});

        res.json(updateUser);
    }
    catch(error){
        res.status(500).json({error: 'Erro ao tentar modificar o usuario'})
        //console.error('Erro completo:', error); // Para logar o erro real no console
        //throw new Error(`Erro ao alterar usuário: ${error.message || error}`);
    }
}
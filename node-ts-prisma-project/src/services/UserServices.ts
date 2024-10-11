import prisma from '../../prisma/PrismaClient';
import bcrypt from 'bcrypt';

interface CreateUserInput {
    nome: string,
    email: string,
    senha: string,
}

export const createUser = async (id_user: number,input: CreateUserInput) => {
    const hashedPassword = await bcrypt.hash(input.senha, 10);

    try{
        const user = await prisma.tb_user.create({
            data: {
                id_user: id_user,
                nome: input.nome,
                email: input.email,
                senha: hashedPassword
            }
        })
        return user;

    } catch(error){
      throw new Error('Erro ao criar usuario');
    }
}

export const getUserById = async (userId: number ) => {
    try {
        const user = await prisma.tb_user.findUnique({
            where: {id_user: userId}
        });
        return user;
    }      
    catch(error: any){
        throw new Error('Erro ao encontrar usuario')
    }
    
}

export const alterUser = async (id_user: number,input: CreateUserInput) => {
    const hashedPassword = await bcrypt.hash(input.senha, 10);
    try{
        const updateUser = await prisma.tb_user.update({
            where: {id_user: id_user},
            data: {nome: input.nome,
                    email: input.email,
                    senha: hashedPassword },
            
            
        })

        return updateUser;
    }catch(error: any){
        console.error('Erro completo:', error); // Para logar o erro real no console
        throw new Error(`Erro ao alterar usuário: ${error.message || error}`);
    }
}
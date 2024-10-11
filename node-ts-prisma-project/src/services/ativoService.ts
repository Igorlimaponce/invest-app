import prisma from '../../prisma/PrismaClient';

interface CreateAtivoInput{
    id_ativo: number,
    cod_ativo: number,
    id_tipo_ativo: number,
    nome_ativo: string,
}

export const createAtivo = async(input:CreateAtivoInput) =>{
    try{
        const ativo = await prisma.tb_ativo.create({
            Data:{
                id_ativo: input.id_ativo,
                cod_ativo: input.cod_ativo,
                nome_ativo:input.nome_ativo,
                id_tipo_ativo: input.id_tipo_ativo
            }
        })
    }catch(error:any){
        throw new Error('Erro ao criar ativo')
    }

}
import prisma from '../../prisma/PrismaClient';

interface CreateAtivoInput{
    cod_ativo: string,
    id_tipo_ativo: number,
    nome_ativo: string,
}

export const createAtivo = async(input:CreateAtivoInput) =>{
    try{
        const ativo = await prisma.tb_ativos.create({
            data:{
                cod_ativo: input.cod_ativo,
                nome_ativo:input.nome_ativo,
                id_tipo_ativo: input.id_tipo_ativo
            }
        })
        return ativo
    }catch(error:any){
        throw new Error('Erro ao criar ativo')
    }

}
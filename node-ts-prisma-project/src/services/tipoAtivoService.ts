import prisma from '../../prisma/PrismaClient';

interface CreateTipoInput{
    id_tipo_ativo: number,
    desc_tipo_ativo: string,
}

export const createTipoAtivo = async(input: CreateTipoInput) => {
    try{
        const tipoAtivo = await prisma.tb_tipo_ativo.create({
            data: {
                id_tipo_ativo: input.id_tipo_ativo,
                desc_tipo_ativo: input.desc_tipo_ativo,
            }
        })
        return tipoAtivo;
    }catch(error: any){
        throw new Error('Erro ao criar tipo do ativo')
    }

}
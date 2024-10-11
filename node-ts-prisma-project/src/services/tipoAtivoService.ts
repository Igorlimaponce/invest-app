import prisma from '../../prisma/PrismaClient';

interface CreateTipoInput{
    id_tipo: number,
    desc_tipo: string,
}

export const createTipoAtivo = async(input: CreateTipoInput) => {
    try{
        const tipoAtivo = await prisma.tb_tipo_ativo.create({
            Data: {
                id_tipo_ativo: input.id_tipo,
                desc_tipo_ativo: input.desc_tipo,
            }
        })
        return tipoAtivo
    }catch(error: any){
        throw new Error('Erro ao criar tipo do ativo')
    }

}
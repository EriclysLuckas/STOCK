import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Teste simples de conexão com banco
prisma.$connect()
  .then(() => console.log('✅ Conectado ao banco!'))
  .catch(err => console.error('❌ Erro ao conectar:', err))

export default prisma
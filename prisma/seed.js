import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Difficulty
  await prisma.difficulty.createMany({
    data: [
      { name: 'easy', baseScore: 10 },
      { name: 'medium', baseScore: 20 },
      { name: 'hard', baseScore: 40 },
    ],
    skipDuplicates: true,
  })

  // Mood
  await prisma.mood.createMany({
    data: [
      { name: 'down' },
      { name: 'neutral' },
      { name: 'motivated' },
    ],
    skipDuplicates: true,
  })

  // Categories
  await prisma.category.createMany({
    data: [
      { name: 'health' },
      { name: 'work' },
      { name: 'study' },
      { name: 'personal' },
      { name: 'fitness' },
    ],
    skipDuplicates: true,
  })

  console.log('Seeding completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
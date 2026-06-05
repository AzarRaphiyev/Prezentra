'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

export async function addPortfolioItem(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const imageUrl = formData.get('imageUrl') as string | null;
  const projectUrl = formData.get('projectUrl') as string | null;

  if (!title || !description) {
    return { success: false, error: 'Title and description are required.' };
  }

  try {
    // 1. Create the new portfolio item in PostgreSQL via Prisma
    const newItem = await prisma.portfolio.create({
      data: {
        title,
        description,
        imageUrl: imageUrl || null,
        projectUrl: projectUrl || null,
      },
    });

    // 2. Immediately purge the Next.js cache for the portfolio path
    revalidatePath('/portfolio');

    return { success: true, data: newItem };
  } catch (error) {
    console.error('Failed to add portfolio item:', error);
    return { success: false, error: 'Failed to add portfolio item to the database.' };
  }
}

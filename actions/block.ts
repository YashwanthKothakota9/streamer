'use server';

import { blockUser, unblockUser } from '@/lib/block-service';
import { revalidatePath } from 'next/cache';

export const onBlock = async (id: string) => {
  //Todo: Adapt to disconnect from livestream
  //Todo: Allow ability to remove the guest from the livestream

  const blockedUser = await blockUser(id);

  revalidatePath('/');

  if (blockedUser) {
    revalidatePath(`/${blockedUser.blocked.username}`);
  }

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  const unblockedUser = await unblockUser(id);

  revalidatePath('/');

  if (unblockedUser) {
    revalidatePath(`/${unblockedUser.blocked.username}`);
  }

  return unblockedUser;
};

'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { emptySafeNumber, requiredNumber } from "@/lib/zod-helpers";
import { format, addDays, startOfDay, endOfDay, startOfYear, endOfYear } from 'date-fns';
import { DEFAULT_TZ } from '@/config/timezone';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

// DEFAULT_TZ is provided by src/config/timezone.ts

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}




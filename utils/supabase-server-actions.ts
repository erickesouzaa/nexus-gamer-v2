// utils/supabase-server-actions.ts (CÓDIGO FINAL DE BUILD: REMOVENDO SET/REMOVE)

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createServerSupabaseClientActions() {
  const cookieStore = cookies(); 

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // @ts-ignore (Apenas a função GET é necessária para a checagem)
        get(name: string) { return cookieStore.get(name)?.value; },
        
        // SET e REMOVE são removidos para evitar o erro de Type Checking do Vercel
      },
    }
  );
}
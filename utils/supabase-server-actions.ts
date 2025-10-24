// utils/supabase-server-actions.ts (CÓDIGO COMPLETO COM SOLUÇÃO DE MEMÓRIA)

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createServerSupabaseClientActions() {
  const cookieStore = cookies(); 

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // @ts-ignore
        get(name: string) { return cookieStore.get(name)?.value; },
        
        // @ts-ignore
        set(name: string, value: string, options) {
          cookieStore.set(name, value, options);
        },
        
        // @ts-ignore
        remove(name: string, options) {
          cookieStore.set(name, '', options);
        },
      },
    }
  );
}
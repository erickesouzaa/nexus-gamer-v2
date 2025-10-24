// utils/supabase-server-actions.ts (CLIENTE COM PERMISSÃO PARA MODIFICAR COOKIES)

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createServerSupabaseClientActions() {
  const cookieStore = cookies(); 

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value; },
        // MANTEMOS SET e REMOVE: Essenciais para Login/Logout/Cadastro
        set(name: string, value: string, options) { cookies().set(name, value, options); },
        remove(name: string, options) { cookies().set(name, '', options); },
      },
    }
  );
}
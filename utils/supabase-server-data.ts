// utils/supabase-server-data.ts (CLIENTE APENAS PARA LEITURA)

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createServerSupabaseClientData() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value; },
        // set, remove e getAll são omitidos para que o Next.js não reclame de modificação no layout
      },
    }
  );
}
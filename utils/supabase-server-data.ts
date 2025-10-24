// utils/supabase-server-data.ts (CÓDIGO COMPLETO COM LEITURA CORRETA)

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createServerSupabaseClientData() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // SOLUÇÃO FINAL: Apenas retorna o valor do cookie (sem JSON.parse)
        get(name) {
          return cookieStore.get(name)?.value; 
        },
        // As funções set e remove são omitidas (pois este é o cliente de leitura)
      },
    }
  );
}
// app/page.tsx (CÓDIGO COMPLETO - LANDING PAGE ESTILIZADA)

import Link from 'next/link';
import { createServerSupabaseClientData } from '@/utils/supabase-server-data'; 
import ProdutoCard, { Produto } from '@/components/ProdutoCard'; 

// Componente para exibir um único carrossel/linha de destaque
async function FeaturedProducts() {
    const supabaseServer = createServerSupabaseClientData();
    
    // Busca apenas 4 produtos para o destaque na Home
    const { data: produtos, error } = await supabaseServer
        .from('produtos')
        .select('id, nome, preco, descricao, imagem_url')
        .limit(4); 

    if (error || !produtos || produtos.length === 0) {
        return <p className="text-gray-500 text-center p-10">Nenhum destaque encontrado.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {produtos.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto as Produto} />
            ))}
        </div>
    );
}

export default function RootPage() {
  return (
    // Adiciona o espaçamento no topo para a barra Navbar
    <main className="pt-12 bg-black text-white min-h-screen"> 
      
      {/* 1. SEÇÃO HERO/BANNER DE DESTAQUE */}
      <div className="w-full h-[450px] bg-gray-900 
                    flex items-center justify-center relative border-b border-nexus-primary/20">
        
        <div className="relative z-10 text-center p-8">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-2 drop-shadow-md">
            O SEU HUB DE ACESSO IMEDIATO!
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-nexus-primary mb-8 drop-shadow-md">
            CÓDIGOS GARANTIDOS EM ATÉ 24 HORAS.
          </h2>
          <Link href="/produtos">
            <button className="bg-nexus-primary text-black font-extrabold py-3 px-10 rounded-lg 
                     shadow-2xl shadow-nexus-primary/50 hover:opacity-90 transition duration-300 transform hover:scale-105 uppercase">
              VER CATÁLOGO COMPLETO
            </button>
          </Link>
        </div>
      </div>
      
      {/* 2. ÍCONES DE CONFIANÇA */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-8 px-4 text-center border-b border-nexus-accent/50">
          <div className="p-4"><p className="text-2xl font-bold text-nexus-primary">24H</p><p className="text-sm text-gray-400">Entrega Expressa Garantida</p></div>
          <div className="p-4"><p className="text-2xl font-bold text-nexus-primary">PIX</p><p className="text-sm text-gray-400">5% OFF Fixo no PIX</p></div>
          <div className="p-4"><p className="text-2xl font-bold text-nexus-primary">100%</p><p className="text-sm text-gray-400">Garantia de Código Válido</p></div>
          <div className="p-4"><p className="text-2xl font-bold text-nexus-primary">🛒</p><p className="text-sm text-gray-400">Suporte a Clientes</p></div>
      </div>

      {/* 3. SEÇÃO DE PRODUTOS EM DESTAQUE */}
      <div className="max-w-7xl mx-auto p-8">
         <h2 className="text-3xl font-bold text-white border-b border-nexus-accent pb-3 mb-6">
            Lançamentos e Destaques
         </h2>
         <FeaturedProducts /> 
         <div className="text-center mt-10">
            <Link href="/produtos" className="text-gray-400 hover:text-nexus-primary underline">
                Ver todo o catálogo
            </Link>
         </div>
      </div>
      
    </main>
  );
}
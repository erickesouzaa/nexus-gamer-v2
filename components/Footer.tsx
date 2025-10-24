// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-nexus-accent p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Informação Principal */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-extrabold text-nexus-primary hover:text-nexus-secondary transition duration-150">
            NEXUS GAMES
          </Link>
          <p className="text-sm mt-2">© {year} NEXUS GAMES. Todos os direitos reservados.</p>
          <p className="text-xs mt-1 text-gray-600">Desenvolvimento com Next.js & Supabase.</p>
        </div>

        {/* Links Rápidos */}
        <div className="flex space-x-6 text-sm">
          <Link href="/minha-conta" className="hover:text-nexus-primary transition duration-150">
            Minha Conta
          </Link>
          <Link href="/admin/pedidos" className="hover:text-nexus-primary transition duration-150">
            Admin
          </Link>
          <Link href="mailto:contato@nexusgames.com" className="hover:text-nexus-primary transition duration-150">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
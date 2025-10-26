// app/layout.tsx (CÓDIGO 100% CORRIGIDO E FINAL)

import type { Metadata } from 'next';
import './globals.css'; 
import Navbar from '@/components/Navbar'; 
import ClientProvider from '@/components/ClientProvider'; 
import Footer from '@/components/Footer'; 

export const metadata: Metadata = {
  title: 'NEXUS Gamer - E-commerce de Códigos Digitais',
  description: 'Códigos e boosts exclusivos para gamers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full"> 
      {/* BODY LIMPO - O CSS GLOBAL DEFINIRÁ O FUNDO ESCURO */}
      <body className="min-h-full"> 
        <ClientProvider> 
          <Navbar /> 
          {children} 
          <Footer /> 
        </ClientProvider>
      </body>
    </html>
  );
}
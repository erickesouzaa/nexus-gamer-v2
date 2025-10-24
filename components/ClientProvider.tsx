// components/ClientProvider.tsx
'use client';
import React, { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext';

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    // O CartProvider é o único contexto de cliente que precisamos por enquanto
    <CartProvider>
      {children}
    </CartProvider>
  );
}
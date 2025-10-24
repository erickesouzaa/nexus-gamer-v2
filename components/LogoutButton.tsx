// components/LogoutButton.tsx
'use client'; 
import { logout } from '@/utils/authActions'; 
import React from 'react';

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button 
        type="submit" 
        className="text-white hover:text-red-500 font-medium transition duration-150 text-sm"
      >
        Sair (Logout)
      </button>
    </form>
  );
}
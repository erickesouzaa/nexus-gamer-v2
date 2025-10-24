// hooks/useSearch.tsx
'use client';
import { create } from 'zustand';

interface SearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isMobileSearchVisible: boolean;
  setIsMobileSearchVisible: (visible: boolean) => void;
}

const useSearch = create<SearchState>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  isMobileSearchVisible: false,
  setIsMobileSearchVisible: (visible) => set({ isMobileSearchVisible: visible }),
}));

export default useSearch;
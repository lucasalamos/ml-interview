import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CategoryContextType {
  categoryContext: string[];
  setCategoryContext: (value: string[]) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categoryContext, setCategoryContext] = useState<string[]>([]);

  return (
    <CategoryContext.Provider value={{ categoryContext, setCategoryContext }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
};

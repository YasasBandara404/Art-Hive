import React, { createContext, useContext, useState } from 'react';
import CartService from '@/services/cartService';
import { useApiQuery } from '@/hooks/useFetch';
import { useAuth } from './AuthContext';

interface CartContextType {
  cartCount: number;
  refreshCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartCount: 0,
  refreshCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const { data: cart } = useApiQuery(
    ["cartCount", refreshTrigger],
    () => CartService.getCart(),
    {
      enabled: isAuthenticated,
    }
  );

  const cartCount = cart?.items?.length || 0;

  const refreshCart = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, refreshCart }}>
      {children}
    </CartContext.Provider>
  );
};
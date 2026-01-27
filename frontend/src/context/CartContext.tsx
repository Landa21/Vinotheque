
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
    name: string;
    producer: string;
    price: string;
    image: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (name: string) => void; // Using name as ID for now since we don't have unique IDs
    updateQuantity: (name: string, quantity: number) => void;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Omit<CartItem, 'quantity'>) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.name === product.name);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (name: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
    };

    const updateQuantity = (name: string, quantity: number) => {
        if (quantity < 1) return; // Prevent quantity less than 1
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.name === name ? { ...item, quantity } : item
            )
        );
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

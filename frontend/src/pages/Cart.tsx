
import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            // Remove 'R ' and commas, then parse
            const price = parseFloat(item.price.replace('R ', '').replace(',', ''));
            return total + price * item.quantity;
        }, 0);
    };

    const total = calculateTotal();

    if (cartItems.length === 0) {
        return (
            <div className="pt-32 pb-16 px-6 max-w-[1400px] mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-heading mb-4">Your Cart is Empty</h1>
                <p className="text-muted mb-8">Looks like you haven't added any fine wines yet.</p>
                <Link to="/shop" className="px-8 py-3 bg-primary text-background font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
                    Return to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-16 px-6 max-w-[1400px] mx-auto">
            <h1 className="text-4xl font-heading mb-12 text-center">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items List */}
                <div className="lg:col-span-2 space-y-8">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex gap-6 p-4 bg-surface/50 rounded-lg border border-white/5">
                            <div className="w-24 h-32 flex-shrink-0 bg-surface rounded-md overflow-hidden">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-heading text-lg text-primary">{item.name}</h3>
                                        <button
                                            onClick={() => removeFromCart(item.name)}
                                            className="text-muted hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                    <p className="text-sm text-muted uppercase tracking-wider">{item.producer}</p>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="text-sm text-muted">
                                        Quantity: <span className="text-primary font-bold">{item.quantity}</span>
                                    </div>
                                    <div className="text-lg font-bold text-primary">{item.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-surface p-8 rounded-lg sticky top-32">
                        <h2 className="text-xl font-heading mb-6 border-b border-white/10 pb-4">Order Summary</h2>
                        <div className="flex justify-between items-center mb-4 text-muted">
                            <span>Subtotal</span>
                            <span>R {total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mb-8 text-muted">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                        <div className="flex justify-between items-center mb-8 text-xl font-bold text-primary border-t border-white/10 pt-4">
                            <span>Total</span>
                            <span>R {total.toFixed(2)}</span>
                        </div>
                        <button className="w-full py-4 bg-accent text-white font-bold uppercase tracking-widest hover:bg-accentHover transition-colors rounded-sm">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

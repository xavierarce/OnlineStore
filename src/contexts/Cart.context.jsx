import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Find if cartItems contain product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // Case: new product in cart, add quantity
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementCartItem = (cartItems, productToDecrement) => {
  // Find if cartItems contain product to delete
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDecrement.id
  );

  // If found and quantity > 1, decrement quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToDecrement.id
        ? cartItem.quantity > 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : { ...cartItem, quantity: 0 }
        : cartItem
    );
  }

  // If not found, do nothing
  return cartItems;
};

const deleteCartItem = (cartItems, productToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => [],
  cartCount: 0,
  totalCartCount:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalCartValue, setTotalCartValue] = useState(0);

  useEffect(() => {
    const totalCartCount = cartItems.reduce(
      (acc, currentItems) => acc + currentItems.quantity,
      0
    );
    setCartCount(totalCartCount);
  }, [cartItems]);

  useEffect(() => {
    const totalSunm = cartItems.reduce(
      (acc, currentItems) => acc + currentItems.quantity * currentItems.price,
      0
    );
    setTotalCartValue(totalSunm);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decrementItemFromCart = (productToDecrement) => {
    setCartItems(decrementCartItem(cartItems, productToDecrement));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const value = {
    cartItems,
    setCartItems,
    addItemToCart,
    decrementItemFromCart,
    deleteItemFromCart,
    isCartOpen,
    setIsCartOpen,
    cartCount,
    totalCartValue,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

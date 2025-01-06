/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { db } from "@/firebaseConfig/firebase";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { Toast } from "toastify-react-native";

interface CartContextValue {
  cartCount: number | null;
  cartItems: {
    id: string;
    name: string;
    price: number;
    image: string;
  }[];
  deleteCartItem: (itemId: string) => Promise<void>;
  subtotal: number;
  addToCart: (item: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => Promise<void>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { currentUser } = useAuth();
  const [cartCount, setCartCount] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<
    {
      id: string;
      name: string;
      price: number;
      image: string;
    }[]
  >([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  const calculateSubtotal = (items: typeof cartItems) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (currentUser) {
        try {
          const cartDoc = await getDoc(doc(db, "carts", currentUser.uid));
          if (cartDoc.exists()) {
            const data = cartDoc.data();
            setCartCount(data.cartCount || 0);
            setCartItems(data.items || []);
            setSubtotal(calculateSubtotal(data.items || []));
          } else {
            await setDoc(doc(db, "carts", currentUser.uid), {
              cartCount: 0,
              items: [],
              subtotal: 0,
            });
            setCartCount(0);
            setCartItems([]);
            setSubtotal(0);
          }
        } catch (error) {
          console.error("Error fetching cart:", error);
          setCartCount(0);
          setCartItems([]);
          setSubtotal(0);
        }
      } else {
        setCartCount(0);
        setCartItems([]);
        setSubtotal(0);
      }
    };

    fetchCart();
  }, [currentUser]);

  const addToCart = async (item: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => {
    if (currentUser) {
      const userCartRef = doc(db, "carts", currentUser.uid);

      try {
        const userCartDoc = await getDoc(userCartRef);
        if (!userCartDoc.exists()) {
          await setDoc(userCartRef, { cartCount: 0, items: [], subtotal: 0 });
        }

        const currentCartItems = userCartDoc.data()?.items || [];
        const newSubtotal =
          currentCartItems.reduce(
            (total: number, cartItem: { price: number }) =>
              total + cartItem.price,
            0
          ) + item.price;

        await updateDoc(userCartRef, {
          cartCount: currentCartItems.length + 1,
          items: arrayUnion(item),
          subtotal: newSubtotal,
        });

        setCartCount(currentCartItems.length + 1);
        setCartItems([...currentCartItems, item]);
        setSubtotal(newSubtotal);
        Toast.success(`${item.name} added to cart`);
      } catch (error) {
        console.error("Error updating cart:", error);
        Toast.error("An error occurred while adding the item to your cart");
      }
    } else {
      Toast.error("Please sign in to add items to the cart");
    }
  };

  const deleteCartItem = async (itemId: string) => {
    if (currentUser) {
      const userCartRef = doc(db, "carts", currentUser.uid);

      try {
        // Fetch the current cart data
        const userCartDoc = await getDoc(userCartRef);

        if (userCartDoc.exists()) {
          const currentCartItems = userCartDoc.data()?.items || [];

          // Filter out the item to be deleted
          const updatedCartItems = currentCartItems.filter(
            (item: { id: string }) => item.id !== itemId
          );

          // Recalculate the subtotal
          const updatedSubtotal = updatedCartItems.reduce(
            (total: number, item: { price: number }) => total + item.price,
            0
          );

          // Update Firestore document
          await updateDoc(userCartRef, {
            cartCount: updatedCartItems.length,
            items: updatedCartItems,
            subtotal: updatedSubtotal,
          });

          // Update context state
          setCartCount(updatedCartItems.length);
          setCartItems(updatedCartItems);
          setSubtotal(updatedSubtotal);

          Toast.success(`Item removed from cart`);
        } else {
          console.error("Cart document not found.");
        }
      } catch (error) {
        console.error("Error removing item from cart:", error);
        Toast.error("An error occurred while removing the item from your cart");
      }
    } else {
      Toast.error("Please sign in to manage your cart");
    }
  };

  const value: CartContextValue = {
    cartCount,
    cartItems,
    addToCart,
    subtotal,
    deleteCartItem,
  };

  return (
    <CartContext.Provider value={value}>
      {cartCount !== null ? children : null}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

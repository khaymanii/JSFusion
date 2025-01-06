/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig/firebase";
import { Toast } from "toastify-react-native";

// Define the shape of the context value
interface AuthContextValue {
  currentUser: User | null;
  loading: boolean;
  signUp: (data: SignUpData) => Promise<User | void>;
  signIn: (email: string, password: string) => Promise<UserCredential | void>;
  logOut: () => Promise<void>;
}

// Define the SignUpData type for improved extensibility
interface SignUpData {
  displayName: string;
  email: string;
  password: string;
}

// Create AuthContext
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Define the props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider Component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (uid: string) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.error("No user data found!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  const signUp = async (data: SignUpData): Promise<User | void> => {
    const { displayName, email, password } = data;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: displayName,
        email: user.email,
        createdAt: new Date(),
      });

      // Fetch and merge Firestore data into currentUser
      const userData = await fetchUserData(user.uid);
      setCurrentUser({ ...user, ...userData });

      return user;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const signIn = async (
    email: string,
    password: string
  ): Promise<UserCredential | void> => {
    setLoading(true); // Start loading when the sign-in process starts
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Fetch Firestore data and merge into currentUser
      const userData = await fetchUserData(user.uid);
      setCurrentUser({ ...user, ...userData });

      return userCredential;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false); // Ensure loading is turned off after async operations
    }
  };

  // Log-out function
  const logOut = async (): Promise<void> => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      Toast.success("Logout successful");
    } catch (error) {
      Toast.error("Error logging out. Please try again.");
      console.error("Error logging out:", error);
      throw error;
    }
  };

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch Firestore data and merge into currentUser
        const userData = await fetchUserData(user.uid);
        setCurrentUser({ ...user, ...userData });
      } else {
        setCurrentUser(null);
      }
      setLoading(false); // End loading when authentication state is determined
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  // Context value
  const value: AuthContextValue = {
    currentUser,
    loading,
    signUp,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only after loading */}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

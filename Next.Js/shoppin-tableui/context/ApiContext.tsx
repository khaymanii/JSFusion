"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Product {
  id: number;
  imageUrl: string;
  sku: number;
  name: string;
  title: string;
  description: string;
  brand: string;
  costPrice: number;
  quantity: number;
  size: number;
}

interface ApiContextType {
  data: Product[];
  loading: boolean;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=7&last=30&search=EAU%20SAUVAGE"
        );
        const result = await response.json();
        console.log("API Response:", result); // Debugging log

        const formattedData = result.map((item: any, index: number) => ({
          id: index + 1, // Assuming id is generated based on index
          imageUrl: item.Image_1, // Use "Image_1" field from API
          sku: item.SKU || 0, // Assuming SKU is numeric
          name: item.Name || "Unknown Name",
          title: item.Title || "Unknown Title",
          description: item.Description || "No description available",
          brand: item.Brand || "Unknown Brand",
          costPrice: item["Cost Price"] || 0, // Accessing "Cost Price" with bracket notation due to space
          quantity: item.Quantity || 0,
          size: item.size || "Unknown Size",
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};

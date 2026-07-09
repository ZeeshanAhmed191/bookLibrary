import { createContext, useContext, useEffect, useState } from "react";
import { verifyAdmin } from "../api/loginApi";
import { getBooks } from "../api/book";
import type { Book, GetBooksFilters } from "../type/book";
type Admin = {
  id: number;
  username: string;
};
type GetBooksResponse = {
  success: boolean;
  books: Book[];
  totalPages: number;
};
type AuthContextType = {
  admin: Admin | null;
  setAdmin: React.Dispatch<React.SetStateAction<Admin | null>>;
  loading: boolean;
  fetchBooks: (
   filter:GetBooksFilters
  ) => Promise<GetBooksResponse>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchBooks = async (
   filter: GetBooksFilters
): Promise<GetBooksResponse> => {
  return await getBooks(filter);
};
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await verifyAdmin();

        setAdmin(response.data.admin);
      } catch (error) {
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        admin,
        setAdmin,
        loading,
        fetchBooks
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
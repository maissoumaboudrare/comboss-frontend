"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchAPI } from "@/lib/utils";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  checkAuthStatus: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = async () => {
    try {
      const response = await fetchAPI("/api/auth/status", {
        method: "GET",
      });
      setIsAuthenticated(response.isAuthenticated);
    } catch (error) {
      console.error("Failed to check authentication status 😢:", error);
    }
  };

  useEffect(() => {
    checkAuthStatus();
    const intervalId = setInterval(checkAuthStatus, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, checkAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
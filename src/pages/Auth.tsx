
import React, { useState } from "react";
import Logo from "@/components/Logo";
import AuthForm from "@/components/AuthForm";

const Auth = () => {
  const [userType, setUserType] = useState<"civilian" | "government">("civilian");
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <Logo />
        
        <div className="glass-panel p-8 space-y-6">
          <div className="flex space-x-4 mb-6">
            <button
              className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200
                ${userType === "civilian" 
                  ? "bg-primary text-navy" 
                  : "bg-navy-light text-primary"}`}
              onClick={() => setUserType("civilian")}
            >
              Civilian
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-200
                ${userType === "government" 
                  ? "bg-primary text-navy" 
                  : "bg-navy-light text-primary"}`}
              onClick={() => setUserType("government")}
            >
              Government
            </button>
          </div>

          <AuthForm type={userType} mode={mode} />

          <div className="text-center text-sm">
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-primary/80 hover:text-primary transition-colors"
            >
              {mode === "signin" 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

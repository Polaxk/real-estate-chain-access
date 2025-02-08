
import React, { useState } from "react";

interface AuthFormProps {
  type: "civilian" | "government";
  mode: "signin" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ type, mode }) => {
  const [formData, setFormData] = useState({
    nationalId: "",
    email: "",
    password: "",
    employeeId: "",
    securityCode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
      {type === "civilian" && (
        <div>
          <label className="block text-sm font-medium mb-1">National ID</label>
          <input
            type="text"
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Enter your National ID"
          />
        </div>
      )}

      {type === "government" && (
        <div>
          <label className="block text-sm font-medium mb-1">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Enter your Employee ID"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
          required
          placeholder="Enter your password"
        />
      </div>

      {type === "government" && (
        <div>
          <label className="block text-sm font-medium mb-1">Security Code</label>
          <input
            type="password"
            name="securityCode"
            value={formData.securityCode}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Enter security code"
          />
        </div>
      )}

      <button type="submit" className="btn-primary w-full">
        {mode === "signin" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;

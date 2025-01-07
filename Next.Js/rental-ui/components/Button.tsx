import React from "react";
interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}
function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

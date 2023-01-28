import { ReactNode } from "react";

interface FullScreenCardProps {
  children: ReactNode;
}

export function FullScreenCard({ children }: FullScreenCardProps) {
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
}

FullScreenCard.Body = function ({ children }: FullScreenCardProps) {
  return <div className="shadow bg-white p-6 rounded-lg">{children}</div>;
};

FullScreenCard.Lower = function ({ children }: FullScreenCardProps) {
  return <div className="flex justify-center gap-3 mt-2">{children}</div>;
};

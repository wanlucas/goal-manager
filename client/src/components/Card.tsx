import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className="flex-container bg-black bg-opacity-25 p-4 rounded">{ children }</div>;
}

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
    return (
        <div className={`
            card
            ${hover ? "hover:shadow-hover hover:-translate-y-1" : ""}
            transition-all duration-300
            ${className}
        `}>
            {children}
        </div>
    );
}

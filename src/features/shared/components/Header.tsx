import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/public/icons/logo.png"
                alt="Airbnb Clone"
              />
            </Link>
          </div>

          {/* Navigation */}

          {/* User Menu */}
        </div>
      </div>
    </header>
  );
}

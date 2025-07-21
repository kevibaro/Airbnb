import React from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  rating,
  imageUrl,
  guests,
  bedrooms,
  bathrooms,
}: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
              {title}
            </h3>
            <div className="flex items-center">
              <span className="text-sm">⭐</span>
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-2">{location}</p>

          <div className="text-gray-600 text-sm mb-3">
            {guests} huéspedes • {bedrooms} habitaciones • {bathrooms} baños
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold text-gray-900">${price}</span>
              <span className="text-gray-600 text-sm"> / noche</span>
            </div>
            <div className="text-gray-600 text-sm">
              Total: ${price * 1} {/* TODO: Calcular con fechas reales */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

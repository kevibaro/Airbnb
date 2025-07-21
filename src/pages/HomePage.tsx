import React from "react";
import { SearchBar } from "../features/search";
import { PropertyCard } from "../features/listing";

// Datos de ejemplo para las propiedades
const sampleProperties = [
  {
    id: "1",
    title: "Casa moderna en la playa",
    location: "Cancún, México",
    price: 150,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: "2",
    title: "Apartamento en el centro",
    location: "Barcelona, España",
    price: 120,
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: "3",
    title: "Cabaña en las montañas",
    location: "Banff, Canadá",
    price: 200,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: "4",
    title: "Loft industrial",
    location: "Nueva York, EE.UU.",
    price: 180,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: "5",
    title: "Villa con piscina",
    location: "Bali, Indonesia",
    price: 250,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: "6",
    title: "Casa de campo",
    location: "Tuscany, Italia",
    price: 160,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
    guests: 5,
    bedrooms: 3,
    bathrooms: 2,
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Alojamientos populares
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
    </div>
  );
}

export default HomePage;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        {/* Rutas públicas con MainLayout */}
        <Route path="/" element={<HomePage />} />

        {/* Rutas protegidas */}
        {/* TODO: Agregar rutas protegidas aquí */}

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;

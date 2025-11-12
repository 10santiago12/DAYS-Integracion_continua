#!/bin/sh

# Salir inmediatamente si un comando falla
set -e

echo "Instalando dependencias..."
npm install

echo "Ejecutando pruebas..."
npm test

echo "Pruebas completadas."

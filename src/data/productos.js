// src/data/productos.js
import torosLogo from '../assets/toros10.jpeg';
import torosLogo2 from '../assets/4_linea_deportiva_catalogo.png';

export const categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'dotaciones', label: 'Dotaciones Corporativas' },
  { id: 'deportiva', label: 'Línea Deportiva' },
  { id: 'urbana', label: 'Estampados & Urbana' }
];

export const productosData = [
  {
    id: 1,
    categoria: 'urbana',
    nombre: 'Polos, camisas & Camibusos Institucionales',
    precio: 'Desde $38.000 COP',
    tecnica: 'Bordado o Vinilo Textil / Estampado DTF Full Color / DTF Textil & Plastisol',
    descripcion: 'Ideales para dotaciones empresariales y uniformes corporativos de alta durabilidad.',
    imagen: torosLogo
  },
  {
    id: 2,
    categoria: 'deportiva',
    nombre: 'Línea deportiva y cinturillas',
    precio: 'Desde $28.000 COP',
    tecnica: 'Prendas al por mayor y detal',
    descripcion: 'Prendas para clubes, gimnasios y equipos con tejidos de secado rápido.',
    imagen: torosLogo2
  }
];
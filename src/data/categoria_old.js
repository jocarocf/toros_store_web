import { categorias } from "./categorias.js";

// Imagen genérica (igual a la de categorias.js). Reemplazar por la foto real de cada producto.
const IMAGEN_DEFAULT =
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80";

const TU = "Talla única";

// Helper: crea un producto. Los precios están en pesos colombianos (COP).
// p(nombre, tallas, precioMayor, precioUnidad, extras)
//   - tallas: null si el catálogo no indica talla
//   - precioMayor/precioUnidad: null cuando el producto tiene precio único (usar extras.precioUnico)
const p = (nombre, tallas, precioMayor, precioUnidad, extras = {}) => ({
  nombre,
  tallas,
  precioMayor,
  precioUnidad,
  precioUnico: null,
  desde: false,
  agotado: false,
  ...extras,
});

// Helper: producto con precio único
const unico = (nombre, tallas, precioUnico, extras = {}) =>
  p(nombre, tallas, null, null, { precioUnico, ...extras });

const porCategoria = {
  // 1 - Licras Largas y Plus Size
  1: [
    p("Licra Unicolor + Top", TU, 32000, 48000),
    p("Licra Push Up Suplex + Top", TU, 35500, 53500),
    p("Licra Bota Ancha Suplex + Top", TU, 42000, 63000),
    p("Licra Bolsillo 2 Suplex + Top", TU, 45000, 67500),
    p("Licra Malla Push Up Suplex + Top", null, 36500, 54750),
    unico("Conjunto Oliva Bota Ancha", null, 75000),
    unico("Conjunto Yoga", "S, M, L", 72000),
    p("Licra Suplex Unicolor Sola", TU, 21000, 31500),
    p("Licra Sirena Unicolor", TU, 25000, 37500),
    p("Licra Sirena Bota Ancha Suplex", TU, 38000, 57000),
    p("Licra Flex Bolsillo Suplex", TU, 26000, 39000),
    p("Licra Canesu Suplex", TU, 35000, 52500),
    p("Licra Cierre Unicolor", TU, 31000, 46500),
    p("Licra Bota Ancha Cierre Suplex", TU, 38000, 57000),
    p("Conjunto 3 Piezas", TU, 55000, 82500),
    p("Licra Suplex Sola (Plus Size)", "Plus Size", 24000, 36000),
    p("Licra Suplex + Top (Plus Size)", "Plus Size", 35000, 52500, { agotado: true }),
    p("Licra Bolsillo 2 Suplex + Top (Plus Size)", "Plus Size", 45000, 67500),
  ],

  // 2 - Shorts
  2: [
    p("Short Nylon Unicolor + Top", TU, 22000, 33000),
    p("Short Suplex Unicolor + Top", TU, 22000, 33000),
    p("Short Bolsillo Unicolor + Top", TU, 23500, 35500),
    p("Short Bolsillo Estampado + Top", TU, 24000, 36000),
    p("Short Flex Unicolor + Top Tina", TU, 25500, 38500),
    p("Short + Top Moño", TU, 25500, 38500),
    p("Short Malla Push Up + Top", TU, 30000, 45000),
    p("Short Bolsillo Suplex + Top Graduable", TU, 30000, 45000),
  ],

  // 3 - Pantalonetas
  3: [
    p("Pantaloneta Running sin Licra", TU, 24000, 36000),
    p("Pantaloneta Running con Licra", TU, 28000, 42000),
    p("Pantaloneta Control Abdomen Importada", "S y XL", 45000, 67500),
    p("Pantaloneta Running Importada", "S, M, L", 37000, 55500),
  ],

  // 4 - Bicicleteros
  4: [
    p("Bicicletero Nylon Unicolor + Top", TU, 23000, 34500),
    p("Bicicletero Suplex Unicolor + Top", TU, 23000, 34500),
    p("Bicicletero Bolsillo Nylon Estampado + Top", TU, 25000, 37500),
    p("Bicicletero Bolsillo Unicolor + Top", TU, 24500, 36800),
  ],

  // 5 - Faldas y Vestidos
  5: [
    p("Falda Unicolor + Top", TU, 32000, 48000),
    p("Falda + Top Cierre Unicolor", TU, 36000, 54000),
    p("Falda Prenses + Top Unicolor", TU, 42000, 63000),
    p("Falda Lulu + Top Unicolor", TU, 35000, 52200),
    p("Falda Unicolor + Top Cuello", TU, 38000, 57000),
    p("Falda Prenses + Top Malla Unicolor", TU, 44000, 66000),
    p("Falda Salo + Top Unicolor", TU, 36000, 54000),
    p("Vestido Prenses 3", TU, 48000, 72000),
    p("Vestido Mariposa Suplex Unicolor", TU, 36500, 54500),
    p("Vestido Lola Suplex (varios modelos)", TU, 48000, 72000),
    p("Vestido Prenses Suplex Unicolor", TU, 48000, 72000),
    p("Vestido Karla Suplex (varios modelos)", TU, 48000, 72000),
    p("Vestido Manga Larga Prenses", TU, 53000, 79500),
    p("Vestido Angy", TU, 48000, 72000),
    unico("Vestido Moño", "S, M, L", 72000),
    unico("Vestido Mila", "S, M, L", 72000),
  ],

  // 6 - Enterizos Cortos
  6: [
    p("Enterizo Mary Corto Suplex", TU, 34000, 51000),
    p("Enterizo Fryda Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Lupita Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Danna Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Corbata Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Jenny Corto Suplex", TU, 36000, 54000),
    p("Enterizo Bonita Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Malla Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Roma Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Lina Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Any Push Up Corto Suplex", TU, 41000, 61500),
    p("Enterizo Betty Corto Suplex", TU, 41000, 61500),
  ],

  // 7 - Enterizos Largos
  7: [
    p("Enterizo Any 2 Push Up Largo Suplex", TU, 48000, 72000),
    p("Enterizo Fryda 2 Push Up Largo Suplex", TU, 50000, 75000),
    p("Enterizo Venus Largo Suplex", TU, 48000, 72000),
    p("Enterizo Straples Push Up Suplex", TU, 45000, 67500),
    p("Enterizo Fryda Bota Ancha Push Up Largo Suplex", TU, 48000, 72000),
    p("Enterizo Lina Push Up Largo Suplex", TU, 48000, 72000),
    p("Enterizo Lupita Push Up Bota Tubo Largo Suplex", TU, 45000, 67500),
    p("Enterizo Lupita Push Up Bota Ancha Largo Suplex", TU, 48000, 72000),
    p("Enterizo Roma Push Up Bota Ancha Largo Suplex", TU, 48000, 72000),
    p("Enterizo Roma Push Up Bota Tubo Largo Suplex", TU, 45000, 67500),
    p("Enterizo Danna Push Up Largo Suplex", TU, 45000, 67500),
    p("Enterizo Any Push Up Bota Tubo Largo Suplex", TU, 45000, 67500),
    p("Enterizo Any Push Up Bota Ancha Largo Suplex", TU, 48000, 72000),
    p("Enterizo Mary Largo Suplex", TU, 38000, 57000),
    p("Enterizo Jenny Largo Suplex", TU, 43000, 64500),
    p("Enterizo Bibi Largo Suplex", TU, 47000, 70500),
  ],

  // 8 - Blusas, Camisetas, Buzos y Chaquetas
  8: [
    p("Blusa Laura", TU, 12000, 18000),
    p("Blusa Sharon", TU, 12000, 18000),
    p("Blusa Mariposa", TU, 12000, 18000),
    p("Blusa Libélula", TU, 12000, 18000),
    p("Blusa Esqueleto", TU, 12000, 18000),
    p("Blusa Janis", TU, 12000, 18000),
    p("Blusa Cola de Pato", TU, 12000, 18000),
    p("Blusa Embonada", TU, 17500, 26500),
    p("Camiseta Corta Capucha Mallatex", TU, 15500, 23500),
    p("Camiseta Corta Mallatex", TU, 14500, 21500),
    p("Camiseta Corta Crochet", TU, 16000, 24000),
    p("Camiseta Corta Capucha Cierre Mallatex", TU, 17000, 25500),
    p("Camiseta Capriati Cuello Redondo y Cuello B", TU, 15500, 23500),
    p("Camiseta Mallatex", TU, 15500, 23500),
    p("Blusón Redondo", TU, 17500, 26500),
    p("Blusón Lupe (tela mallatex y tela deportiva lisa)", TU, 17500, 26500),
    p("Blusón Crochet", TU, 19000, 28500),
    p("Chaqueta Capriati", TU, 19000, 28500),
    p("Buzo Calentador Dama", TU, 25000, 37500),
    p("Camiseta Importada", "S, M, L, XL", 33000, 49500, { agotado: true }),
    p("Chaqueta Importada Capucha", "S, M, L, XL", 68000, 102000, { agotado: true }),
    p("Chaqueta Importada sin Capucha", "S, M, L, XL", 58000, 87000),
    p("Chaqueta Nacional Cierre sin Capucha", TU, 35000, 52500, { agotado: true }),
    p("Camiseta Dama Nacional", "M, L", 21000, 31500),
    p("Blusón Luna", TU, 19500, 29250),
  ],

  // 9 - Cinturillas (precios por talla; ver tablaMedidas)
  9: [
    p("Cinturilla Magic Látex", "2XS a 4XL", 44000, 66000, {
      tablaMedidas: "latex",
      preciosPorTalla: [
        { tallas: "2XS a 2XL", precioMayor: 44000, precioUnidad: 66000 },
        { tallas: "3XL y 4XL", precioMayor: 46000, precioUnidad: 69000 },
      ],
    }),
    p("Cinturilla Látex", "2XS a 4XL", 44000, 66000, {
      tablaMedidas: "latex",
      preciosPorTalla: [
        { tallas: "2XS a 2XL", precioMayor: 44000, precioUnidad: 66000 },
        { tallas: "3XL y 4XL", precioMayor: 46000, precioUnidad: 69000 },
      ],
    }),
    p("Chaleco Tira Ancha Látex", "2XS a 4XL", 56000, 84000, {
      tablaMedidas: "latex",
      preciosPorTalla: [
        { tallas: "2XS a 2XL", precioMayor: 56000, precioUnidad: 84000 },
        { tallas: "3XL y 4XL", precioMayor: 61000, precioUnidad: 91500 },
      ],
    }),
    p("Chaleco Tira Brasier Látex", "2XS a 4XL", 56000, 84000, {
      tablaMedidas: "latex",
      preciosPorTalla: [
        { tallas: "2XS a 2XL", precioMayor: 56000, precioUnidad: 84000 },
        { tallas: "3XL y 4XL", precioMayor: 61000, precioUnidad: 91500 },
      ],
    }),
    p("Cinturilla Extrema", "2XS a 3XL", 61000, 91500, {
      tablaMedidas: "extrema",
      preciosMayor: [
        { desdeUnidades: 6, precio: 61000 },
        { desdeUnidades: 12, precio: 56000 },
      ],
    }),
    p("Chaleco Extremo", "2XS a 3XL", 76000, 114000, {
      tablaMedidas: "extrema",
      preciosMayor: [
        { desdeUnidades: 6, precio: 76000 },
        { desdeUnidades: 12, precio: 71000 },
      ],
    }),
  ],

  // 10 - Línea Casual Deportiva
  10: [
    p("Sudadera + Chaqueta", TU, 55000, 82500),
    p("Sudadera Bota Ancha Burda", TU, 38000, 57000),
    unico("Bermuda Dama (Cod 30258)", "U y L", 55000),
    unico("Pantalón Boteli (Cod 30169)", "Talla única y XL", 60000),
    unico("Pantalón Fendy (Cod 30255)", "Talla única y XL", 60000),
    unico("Pantalón Palazo (Cod 30168)", "Talla única y XL", 60000),
    unico("Pantalón Capri", "Talla única y XL", 60000),
    unico("Vestido Playero (Cod 30259)", TU, 60000),
  ],

  // 11 - Línea Masculina
  11: [
    p("Camiseta Hombre Unicolor", "S, M, L, XL", 21000, 30500),
    p("Camiseta Poliamida Hombre Nacional", "M, L, XL", 30000, 45000),
    p("Calentador Hombre Nacional", "L, XL", 25000, 37500),
    p("Camiseta Hombre Esqueleto Nacional", "Talla única y XL", 21000, 30500),
    p("Licra Corta Hombre Nacional", TU, 27000, 40500),
    p("Camiseta Oversize Premium Nacional", "M, L, XL", 40000, 60000),
    p("Sudadera Antifluido Nacional", "M, L, XL", 35000, 52500),
    p("Calentador Niño", "6 a 16", 21000, 30500),
    p("Pantaloneta Hombre Nacional con Licra", "M, L, XL", 30000, 45000),
    p("Pantaloneta Hombre Nacional con Licra (modelo 2)", "M, L, XL", 32000, 46000),
    p("Pantaloneta Playera Hombre", "34, 36, 38", 30000, 45000),
    p("Chaqueta Hombre Antifluido", "S, M, L, XL", 45000, 67500),
    p("Camiseta Hombre Importada", "M, L, XL, 2XL", 37500, 56250),
    p("Pantaloneta Hombre Importada con Licra", "M, L, XL", 32000, 46000),
  ],

  // 12 - Seamless (precio "desde")
  12: [
    p("Short sin Costuras", TU, 31500, null, { desde: true, linea: "Premium" }),
    p("Licra Sola sin Costuras", TU, 45000, null, { desde: true, linea: "Premium" }),
    p("Enterizo Corto sin Costuras", TU, 42500, null, { desde: true, linea: "Premium" }),
    p("Enterizo Largo sin Costuras", TU, 65000, null, { desde: true, linea: "Premium" }),
    p("Licras sin Costuras con Push Up y sin Push Up", TU, 30000, null, { desde: true, linea: "Outlet" }),
    p("Enterizo Corto sin Costuras (Outlet)", TU, 32000, null, { desde: true, linea: "Outlet" }),
    p("Enterizo Corto sin Costuras (Outlet, modelo 2)", TU, 45000, null, { desde: true, linea: "Outlet" }),
  ],

  // 13 - Tops (el catálogo indica: solicitar fotos al asesor)
  13: [
    p("Top Karina", TU, 12000, 18000),
    p("Top Julia", TU, 12000, 18000),
    p("Top Esqueleto", TU, 12000, 18000),
    p("Top Coco", TU, 12000, 18000),
    p("Top Coco Luna", TU, 12000, 18000),
    p("Top Juliana", TU, 12000, 18000),
    p("Top Broche", TU, 12000, 18000),
    p("Top Martina", TU, 12500, 18750),
    p("Top Manga Larga", TU, 15500, 23250),
    p("Top Malibu", TU, 13500, 20250),
    p("Top Moño", TU, 15000, 22500),
  ],

  // 14 - Promociones
  14: [
    p("Enterizos Varios", TU, 10000, 15000),
    p("Asoleadores", TU, 10000, 20000),
    p("Conjunto Natzuki", "S, M, L", 35000, 52500),
    p("Pantaloneta Cargo Hombre", "32, 34, 36", 20000, 30500),
    p("Pantalón Cargo Antifluido", "M y L", 35000, 52500),
    p("Short Push Up Suplex Sublimado", TU, 15000, 22500),
    p("Short Sublimado", TU, 15000, 22500),
    p("Top Brigitte", TU, 5000, 7500, { nota: "Pide las fotos a tu asesor de esta referencia" }),
  ],
};

// Tablas de medidas (cintura en cm) usadas por las cinturillas y chalecos
export const tablasMedidas = {
  latex: {
    nombre: "Cinturillas y Chalecos Látex",
    descripcion:
      "Cinturilla en látex, calibre 850, 3 líneas de broches, 2 varillas en el abdomen y 2 en la espalda que facilitan una mejor postura, capa interna en algodón para evitar irritación.",
    medidas: [
      { talla: "2XS", cintura: "47 - 52 cms" },
      { talla: "XS", cintura: "53 - 57 cms" },
      { talla: "S", cintura: "58 - 63 cms" },
      { talla: "M", cintura: "64 - 67 cms" },
      { talla: "L", cintura: "68 - 77 cms" },
      { talla: "XL", cintura: "78 - 86 cms" },
      { talla: "2XL", cintura: "87 - 96 cms" },
      { talla: "3XL (valor adicional)", cintura: "97 - 106 cms" },
    ],
  },
  extrema: {
    nombre: "Cinturilla Extrema Powernet",
    descripcion:
      "Cinturilla en Powernet, 9 varillas anatómicas, banda elástica en cintura, capa interna en tela hipoalergénica, 3 hileras de broches interna y cremallera externa.",
    medidas: [
      { talla: "2XS", cintura: "52 - 57 cms" },
      { talla: "XS", cintura: "58 - 63 cms" },
      { talla: "S", cintura: "64 - 67 cms" },
      { talla: "M", cintura: "68 - 77 cms" },
      { talla: "L", cintura: "78 - 86 cms" },
      { talla: "XL", cintura: "87 - 96 cms" },
      { talla: "2XL", cintura: "97 - 106 cms" },
      { talla: "3XL (valor adicional)", cintura: "107 - 116 cms" },
    ],
  },
};

// Lista plana final: cada producto lleva categoriaId y categoria (slug de categorias.js)
let contador = 0;
export const productos = Object.entries(porCategoria).flatMap(([categoriaId, items]) => {
  const cat = categorias.find((c) => c.id === Number(categoriaId));
  return items.map((item) => ({
    id: ++contador,
    categoriaId: cat.id,
    categoria: cat.categoria,
    ...item,
    imagen: IMAGEN_DEFAULT,
  }));
});

// Utilidades
export const getProductosPorCategoria = (categoriaId) =>
  productos.filter((prod) => prod.categoriaId === categoriaId);

export const getProductoPorId = (id) => productos.find((prod) => prod.id === id);
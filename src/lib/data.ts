export interface Estilista {
  id: string;
  nombre: string;
  foto: string;
  especialidades: string[];
  rating: number;
  horario: string;
  bio: string;
  disponible: boolean;
}

export interface Servicio {
  id: string;
  nombre: string;
  categoria: string;
  duracion: number;
  precio: number;
  descripcion: string;
  popular: boolean;
}

export interface Cita {
  id: string;
  cliente: string;
  servicio: string;
  estilista: string;
  fecha: string;
  hora: string;
  estado: "confirmada" | "pendiente" | "cancelada" | "completada";
}

export interface Paquete {
  id: string;
  nombre: string;
  precio: number;
  precioOriginal: number;
  serviciosIncluidos: string[];
  descripcion: string;
  duracionTotal: number;
}

export interface Membresia {
  id: string;
  nombre: string;
  precioMensual: number;
  precioAnual: number;
  beneficios: string[];
  suscriptores: number;
  color: string;
}

export interface Cliente {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
  historialServicios: { servicio: string; fecha: string; estilista: string }[];
  membresiaActiva: string | null;
  ultimaVisita: string;
  totalVisitas: number;
}

export const estilistas: Estilista[] = [
  {
    id: "e1",
    nombre: "Valentina Rosé",
    foto: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop&crop=face",
    especialidades: ["Peluquería", "Coloración"],
    rating: 4.9,
    horario: "09:00 - 18:00",
    bio: "Especialista en coloración avanzada y técnicas de balayage. 10 años de experiencia.",
    disponible: true,
  },
  {
    id: "e2",
    nombre: "Camila Sterling",
    foto: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop&crop=face",
    especialidades: ["Manicura", "Pedicura", "Nail Art"],
    rating: 4.8,
    horario: "10:00 - 19:00",
    bio: "Artista de uñas certificada. Experta en manicuras de gel y diseños personalizados.",
    disponible: true,
  },
  {
    id: "e3",
    nombre: "Isabella Noir",
    foto: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop&crop=face",
    especialidades: ["Tratamientos Faciales", "Masajes"],
    rating: 5.0,
    horario: "11:00 - 20:00",
    bio: "Esteticista y terapeuta spa. Maestría en tratamientos rejuvenecedores faciales.",
    disponible: true,
  },
  {
    id: "e4",
    nombre: "Sofia Lumin",
    foto: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
    especialidades: ["Peluquería", "Maquillaje"],
    rating: 4.7,
    horario: "09:00 - 17:00",
    bio: "Estilista versátil con pasión por peinados de evento y maquillaje social.",
    disponible: false,
  },
  {
    id: "e5",
    nombre: "Martina Voss",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    especialidades: ["Barbería", "Coloración"],
    rating: 4.6,
    horario: "08:00 - 16:00",
    bio: "Barbera profesional especializada en cortes clásicos y modernos para caballero.",
    disponible: true,
  },
];

export const servicios: Servicio[] = [
  { id: "s1", nombre: "Corte de Cabello", categoria: "Peluquería", duracion: 45, precio: 45000, descripcion: "Corte personalizado con lavado y peinado incluido.", popular: true },
  { id: "s2", nombre: "Peinado Social", categoria: "Peluquería", duracion: 60, precio: 65000, descripcion: "Peinado para eventos, fiestas o bodas.", popular: true },
  { id: "s3", nombre: "Balayage", categoria: "Coloración", duracion: 180, precio: 250000, descripcion: "Técnica de coloración degradada de forma natural.", popular: true },
  { id: "s4", nombre: "Tinte Completo", categoria: "Coloración", duracion: 120, precio: 180000, descripcion: "Aplicación de tinte en todo el cabello.", popular: false },
  { id: "s5", nombre: "Manicura Clásica", categoria: "Manicura y Pedicura", duracion: 45, precio: 35000, descripcion: "Corte de cutículas, limado y esmaltado.", popular: true },
  { id: "s6", nombre: "Manicura en Gel", categoria: "Manicura y Pedicura", duracion: 60, precio: 70000, descripcion: "Esmaltado en gel de larga duración.", popular: true },
  { id: "s7", nombre: "Pedicura Spa", categoria: "Manicura y Pedicura", duracion: 75, precio: 85000, descripcion: "Pedicura completa con exfoliación y masaje.", popular: false },
  { id: "s8", nombre: "Limpieza Facial Profunda", categoria: "Tratamientos Faciales", duracion: 60, precio: 95000, descripcion: "Limpieza profunda con extracción y mascarilla.", popular: true },
  { id: "s9", nombre: "Hidratación Facial", categoria: "Tratamientos Faciales", duracion: 45, precio: 70000, descripcion: "Hidratación intensa para pieles secas o deshidratadas.", popular: false },
  { id: "s10", nombre: "Masaje Relajante", categoria: "Masajes", duracion: 60, precio: 120000, descripcion: "Masaje de cuerpo completo con aceites esenciales.", popular: true },
  { id: "s11", nombre: "Masaje Descontracturante", categoria: "Masajes", duracion: 45, precio: 100000, descripcion: "Masaje focalizado en zonas de tensión muscular.", popular: false },
  { id: "s12", nombre: "Maquillaje Profesional", categoria: "Peluquería", duracion: 60, precio: 90000, descripcion: "Maquillaje para eventos o sesiones fotográficas.", popular: false },
];

export const citas: Cita[] = [
  { id: "c1", cliente: "María González", servicio: "Corte de Cabello", estilista: "Valentina Rosé", fecha: "2026-06-03", hora: "09:00", estado: "confirmada" },
  { id: "c2", cliente: "Ana López", servicio: "Manicura en Gel", estilista: "Camila Sterling", fecha: "2026-06-03", hora: "10:00", estado: "confirmada" },
  { id: "c3", cliente: "Lucía Ramírez", servicio: "Balayage", estilista: "Valentina Rosé", fecha: "2026-06-03", hora: "11:00", estado: "pendiente" },
  { id: "c4", cliente: "Carla Méndez", servicio: "Masaje Relajante", estilista: "Isabella Noir", fecha: "2026-06-03", hora: "14:00", estado: "confirmada" },
  { id: "c5", cliente: "Daniela Suárez", servicio: "Limpieza Facial Profunda", estilista: "Isabella Noir", fecha: "2026-06-03", hora: "15:30", estado: "confirmada" },
  { id: "c6", cliente: "Sofía Herrera", servicio: "Pedicura Spa", estilista: "Camila Sterling", fecha: "2026-06-03", hora: "16:00", estado: "confirmada" },
  { id: "c7", cliente: "Fernanda Ruiz", servicio: "Tinte Completo", estilista: "Valentina Rosé", fecha: "2026-06-04", hora: "09:00", estado: "pendiente" },
  { id: "c8", cliente: "Patricia Díaz", servicio: "Manicura Clásica", estilista: "Camila Sterling", fecha: "2026-06-04", hora: "10:30", estado: "confirmada" },
  { id: "c9", cliente: "Gabriela Torres", servicio: "Hidratación Facial", estilista: "Isabella Noir", fecha: "2026-06-04", hora: "13:00", estado: "confirmada" },
  { id: "c10", cliente: "Elena Vargas", servicio: "Corte de Cabello", estilista: "Sofia Lumin", fecha: "2026-06-04", hora: "14:00", estado: "cancelada" },
  { id: "c11", cliente: "Natalia Blanco", servicio: "Masaje Descontracturante", estilista: "Isabella Noir", fecha: "2026-06-05", hora: "11:00", estado: "confirmada" },
  { id: "c12", cliente: "Andrea Castillo", servicio: "Peinado Social", estilista: "Sofia Lumin", fecha: "2026-06-05", hora: "16:00", estado: "confirmada" },
  { id: "c13", cliente: "Rosa Marín", servicio: "Balayage", estilista: "Valentina Rosé", fecha: "2026-06-06", hora: "09:00", estado: "confirmada" },
  { id: "c14", cliente: "Julieta Cruz", servicio: "Manicura en Gel", estilista: "Camila Sterling", fecha: "2026-06-06", hora: "11:00", estado: "pendiente" },
  { id: "c15", cliente: "Victoria Paz", servicio: "Maquillaje Profesional", estilista: "Sofia Lumin", fecha: "2026-06-06", hora: "15:00", estado: "confirmada" },
];

export const paquetes: Paquete[] = [
  {
    id: "p1",
    nombre: "Día de Spa",
    precio: 320000,
    precioOriginal: 385000,
    serviciosIncluidos: ["Masaje Relajante", "Limpieza Facial Profunda", "Manicura Clásica", "Pedicura Spa"],
    descripcion: "Un día completo de relajación y cuidado personal. Incluye bebida de bienvenida.",
    duracionTotal: 240,
  },
  {
    id: "p2",
    nombre: "Transformación Total",
    precio: 380000,
    precioOriginal: 475000,
    serviciosIncluidos: ["Corte de Cabello", "Balayage", "Manicura en Gel"],
    descripcion: "Renueva tu look completo con este paquete de transformación.",
    duracionTotal: 285,
  },
  {
    id: "p3",
    nombre: "Belleza Exprés",
    precio: 145000,
    precioOriginal: 180000,
    serviciosIncluidos: ["Manicura Clásica", "Pedicura Spa"],
    descripcion: "Perfecto para mantenimiento rápido de manos y pies.",
    duracionTotal: 120,
  },
  {
    id: "p4",
    nombre: "Glow Facial",
    precio: 155000,
    precioOriginal: 185000,
    serviciosIncluidos: ["Limpieza Facial Profunda", "Hidratación Facial"],
    descripcion: "Doble tratamiento facial para una piel radiante.",
    duracionTotal: 105,
  },
];

export const membresias: Membresia[] = [
  {
    id: "m1",
    nombre: "Belleza Esencial",
    precioMensual: 149000,
    precioAnual: 1490000,
    beneficios: ["2 cortes de cabello al mes", "1 manicura clásica al mes", "10% descuento en servicios adicionales", "Prioridad en reservas"],
    suscriptores: 124,
    color: "oklch(0.65 0.15 330)",
  },
  {
    id: "m2",
    nombre: "Belleza Premium",
    precioMensual: 289000,
    precioAnual: 2890000,
    beneficios: ["4 servicios al mes a elección", "1 facial al mes", "15% descuento en servicios adicionales", "Prioridad en reservas", "Acceso a promociones exclusivas"],
    suscriptores: 87,
    color: "oklch(0.55 0.18 280)",
  },
  {
    id: "m3",
    nombre: "Spa Ilimitado",
    precioMensual: 499000,
    precioAnual: 4990000,
    beneficios: ["Servicios ilimitados de manicura y pedicura", "2 masajes al mes", "2 faciales al mes", "20% descuento en productos", "Reservas VIP con 48h de anticipación"],
    suscriptores: 42,
    color: "oklch(0.6 0.12 180)",
  },
];

export const clientes: Cliente[] = [
  {
    id: "cl1",
    nombre: "María González",
    telefono: "+57 312 345 6789",
    email: "maria.g@email.com",
    historialServicios: [
      { servicio: "Corte de Cabello", fecha: "2026-05-03", estilista: "Valentina Rosé" },
      { servicio: "Balayage", fecha: "2026-04-10", estilista: "Valentina Rosé" },
      { servicio: "Manicura Clásica", fecha: "2026-05-15", estilista: "Camila Sterling" },
    ],
    membresiaActiva: "Belleza Esencial",
    ultimaVisita: "2026-05-15",
    totalVisitas: 12,
  },
  {
    id: "cl2",
    nombre: "Ana López",
    telefono: "+57 315 987 6543",
    email: "ana.lopez@email.com",
    historialServicios: [
      { servicio: "Manicura en Gel", fecha: "2026-05-20", estilista: "Camila Sterling" },
      { servicio: "Pedicura Spa", fecha: "2026-05-20", estilista: "Camila Sterling" },
    ],
    membresiaActiva: "Belleza Premium",
    ultimaVisita: "2026-05-20",
    totalVisitas: 8,
  },
  {
    id: "cl3",
    nombre: "Lucía Ramírez",
    telefono: "+57 318 456 7890",
    email: "lucia.r@email.com",
    historialServicios: [
      { servicio: "Balayage", fecha: "2026-03-12", estilista: "Valentina Rosé" },
      { servicio: "Corte de Cabello", fecha: "2026-04-05", estilista: "Valentina Rosé" },
      { servicio: "Peinado Social", fecha: "2026-05-01", estilista: "Sofia Lumin" },
    ],
    membresiaActiva: null,
    ultimaVisita: "2026-05-01",
    totalVisitas: 5,
  },
  {
    id: "cl4",
    nombre: "Carla Méndez",
    telefono: "+57 320 111 2222",
    email: "carla.m@email.com",
    historialServicios: [
      { servicio: "Masaje Relajante", fecha: "2026-05-18", estilista: "Isabella Noir" },
      { servicio: "Limpieza Facial Profunda", fecha: "2026-05-18", estilista: "Isabella Noir" },
    ],
    membresiaActiva: "Spa Ilimitado",
    ultimaVisita: "2026-05-18",
    totalVisitas: 15,
  },
  {
    id: "cl5",
    nombre: "Daniela Suárez",
    telefono: "+57 301 333 4444",
    email: "daniela.s@email.com",
    historialServicios: [
      { servicio: "Hidratación Facial", fecha: "2026-04-22", estilista: "Isabella Noir" },
      { servicio: "Limpieza Facial Profunda", fecha: "2026-05-10", estilista: "Isabella Noir" },
    ],
    membresiaActiva: "Belleza Premium",
    ultimaVisita: "2026-05-10",
    totalVisitas: 9,
  },
  {
    id: "cl6",
    nombre: "Sofía Herrera",
    telefono: "+57 314 555 6666",
    email: "sofia.h@email.com",
    historialServicios: [
      { servicio: "Pedicura Spa", fecha: "2026-05-25", estilista: "Camila Sterling" },
      { servicio: "Manicura en Gel", fecha: "2026-05-25", estilista: "Camila Sterling" },
    ],
    membresiaActiva: null,
    ultimaVisita: "2026-05-25",
    totalVisitas: 3,
  },
  {
    id: "cl7",
    nombre: "Patricia Díaz",
    telefono: "+57 317 777 8888",
    email: "patricia.d@email.com",
    historialServicios: [
      { servicio: "Corte de Cabello", fecha: "2026-05-12", estilista: "Sofia Lumin" },
      { servicio: "Maquillaje Profesional", fecha: "2026-05-12", estilista: "Sofia Lumin" },
    ],
    membresiaActiva: "Belleza Esencial",
    ultimaVisita: "2026-05-12",
    totalVisitas: 7,
  },
  {
    id: "cl8",
    nombre: "Elena Vargas",
    telefono: "+57 319 999 0000",
    email: "elena.v@email.com",
    historialServicios: [
      { servicio: "Tinte Completo", fecha: "2026-04-15", estilista: "Valentina Rosé" },
      { servicio: "Corte de Cabello", fecha: "2026-04-15", estilista: "Valentina Rosé" },
    ],
    membresiaActiva: null,
    ultimaVisita: "2026-04-15",
    totalVisitas: 4,
  },
];

export const categorias = [
  "Peluquería",
  "Coloración",
  "Manicura y Pedicura",
  "Tratamientos Faciales",
  "Masajes",
];

export function getCitasHoy(): Cita[] {
  const hoy = "2026-06-03";
  return citas.filter((c) => c.fecha === hoy);
}

export function getIngresosMes(): number {
  return citas
    .filter((c) => c.fecha.startsWith("2026-06") && c.estado !== "cancelada")
    .reduce((total, c) => {
      const s = servicios.find((s) => s.nombre === c.servicio);
      return total + (s?.precio || 0);
    }, 0);
}

export function getTopServicios() {
  const counts: Record<string, number> = {};
  citas.forEach((c) => {
    if (c.estado !== "cancelada") {
      counts[c.servicio] = (counts[c.servicio] || 0) + 1;
    }
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([nombre, count]) => {
      const s = servicios.find((sv) => sv.nombre === nombre);
      return { nombre, count, categoria: s?.categoria || "" };
    });
}

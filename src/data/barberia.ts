export interface ServicioBarberia {
  id: string;
  nombre: string;
  descripcion: string;
  duracion: string;
  precio: number;
  tag?: string;
  imagen: string;
}

export interface EstiloGaleria {
  id: string;
  titulo: string;
  subtitulo: string;
  imagen: string;
}

export const BARBERIA_DATA = {
  nombre: "NAVAJA & ESTILO",
  subnombre: "BARBER STUDIO • MEDELLÍN",
  ciudad: "El Poblado / Laureles • Medellín",
  whatsapp: "573001234567",
  horario: "Lun – Sáb · 9:00 AM – 8:30 PM",
  rating: "4.9",
  totalResenas: 148,
  heroImagen:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
  barberos: [
    { id: "cualquiera", nombre: "Primer barbero libre", rol: "Asignación rápida" },
    { id: "mateo", nombre: "Mateo R.", rol: "Especialista en Fade & Navaja" },
    { id: "santiago", nombre: "Santiago V.", rol: "Barba & Diseño Clásico" },
  ],
  galeriaCortes: [
    {
      id: "mid-fade",
      titulo: "Mid Fade Texturizado",
      subtitulo: "Degradado limpio + acabado mate",
      imagen:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "beard-sculpt",
      titulo: "Perfilado & Ritual Barba",
      subtitulo: "Toalla caliente + aceites esenciales",
      imagen:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "crop-top",
      titulo: "French Crop & Diseño",
      subtitulo: "Contornos definidos a navaja",
      imagen:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=85",
    },
  ] satisfies EstiloGaleria[],
  servicios: [
    {
      id: "vip",
      nombre: "Experiencia VIP (Corte + Barba + Vapor)",
      descripcion: "Asesoría de visagismo, degradado de precisión, toalla caliente y bebida.",
      duracion: "50 min",
      precio: 42000,
      tag: "Más pedido",
      imagen:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "fade",
      nombre: "Fade / Degradado Pro",
      descripcion: "Low, Mid o High Fade con lavado refrescante y peinado.",
      duracion: "35 min",
      precio: 28000,
      imagen:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "barba",
      nombre: "Ritual de Barba & Cejas",
      descripcion: "Afeitado tradicional con navaja, bálsamo hidratante y perfilado.",
      duracion: "25 min",
      precio: 18000,
      imagen:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    },
  ] satisfies ServicioBarberia[],
};

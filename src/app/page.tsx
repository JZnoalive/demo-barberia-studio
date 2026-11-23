"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Clock,
  Star,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  UserCheck,
} from "lucide-react";
import { BARBERIA_DATA } from "@/data/barberia";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function BarberiaProPage() {
  const [servicioId, setServicioId] = useState(BARBERIA_DATA.servicios[0].id);
  const [barberoId, setBarberoId] = useState(BARBERIA_DATA.barberos[0].id);
  const [cliente, setCliente] = useState("");
  const [hora, setHora] = useState("4:30 PM");

  const servicioElegido =
    BARBERIA_DATA.servicios.find((s) => s.id === servicioId) || BARBERIA_DATA.servicios[0];
  const barberoElegido =
    BARBERIA_DATA.barberos.find((b) => b.id === barberoId) || BARBERIA_DATA.barberos[0];

  const generarLinkWhatsapp = () => {
    const mensaje = `Hola *${BARBERIA_DATA.nombre}*, soy *${
      cliente.trim() || "un cliente"
    }*.\nQuiero agendar:\n• Servicio: *${servicioElegido.nombre}* ($${servicioElegido.precio.toLocaleString(
      "es-CO"
    )} COP)\n• Barbero: *${barberoElegido.nombre}*\n• Hora: *${hora}*`;
    return `https://wa.me/${BARBERIA_DATA.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 selection:bg-amber-400 selection:text-zinc-950">
      {/* Barra superior de propuesta comercial */}
      <div className="bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-transparent border-b border-amber-400/20 px-4 py-2 text-center text-xs text-amber-200">
        <span className="font-semibold">Demo Interactiva · </span>
        Personalizable con el logo, fotos de cortes, precios y WhatsApp de tu barbería en 24h.
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#09090B]/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-zinc-950 flex items-center justify-center shadow-lg shadow-amber-400/20">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <p className="font-black tracking-tight text-sm leading-none">
                {BARBERIA_DATA.nombre}
              </p>
              <p className="text-[10px] tracking-widest text-zinc-400 mt-0.5">
                {BARBERIA_DATA.subnombre}
              </p>
            </div>
          </div>

          <a
            href="#reservar"
            className="px-4 py-2 rounded-full bg-white text-zinc-950 hover:bg-amber-400 text-xs font-extrabold transition-colors"
          >
            Reservar Cita
          </a>
        </div>
      </header>

      {/* Hero Section estilo Startup / Agencia */}
      <section className="max-w-6xl mx-auto px-5 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Agenda online sin filas · Confirmación en 1 clic</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
            Tu mejor corte,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
              sin esperar turno.
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Explora nuestros estilos, elige tu barbero de confianza y asegura tu silla en menos
            de 30 segundos directo por WhatsApp.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#reservar"
              className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm inline-flex items-center gap-2 shadow-xl shadow-amber-400/20 transition-all hover:scale-[1.02]"
            >
              <span>Agendar Ahora</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#estilos"
              className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-bold transition-colors"
            >
              Ver Catálogo de Cortes
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <strong className="text-white">{BARBERIA_DATA.rating}</strong> ({BARBERIA_DATA.totalResenas} reseñas)
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{BARBERIA_DATA.ciudad}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{BARBERIA_DATA.horario}</span>
            </div>
          </div>
        </motion.div>

        {/* Tarjeta visual derecha con foto de alta resolución */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.15}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl aspect-[4/5] bg-zinc-900">
            <img
              src={BARBERIA_DATA.heroImagen}
              alt="Estilo de corte y barbería"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl backdrop-blur-md bg-zinc-950/75 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">
                  Disponible Hoy
                </p>
                <p className="font-bold text-sm">Experiencia VIP + Toalla Caliente</p>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-amber-400 text-zinc-950 font-black text-xs">
                $42.000
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Galería Visual de Estilos / Cortes */}
      <section id="estilos" className="max-w-6xl mx-auto px-5 py-14 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Lookbook 2026
            </p>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-1">
              Elige tu próximo estilo
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-xs">
            Toca cualquier estilo para seleccionarlo en tu reserva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BARBERIA_DATA.galeriaCortes.map((item, idx) => (
            <motion.a
              key={item.id}
              href="#reservar"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={idx * 0.1}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/4] block"
            >
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-black text-lg text-white group-hover:text-amber-300 transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-xs text-zinc-300 mt-0.5">{item.subtitulo}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Módulo Interactivo de Reserva */}
      <section id="reservar" className="max-w-6xl mx-auto px-5 py-16 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Paso 1 · Servicios
            </p>
            <h2 className="text-2xl sm:text-3xl font-black">Selecciona tu servicio</h2>

            <div className="space-y-3 pt-2">
              {BARBERIA_DATA.servicios.map((srv) => {
                const activo = srv.id === servicioId;
                return (
                  <motion.button
                    key={srv.id}
                    type="button"
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setServicioId(srv.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4 cursor-pointer ${
                      activo
                        ? "border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-400/5"
                        : "border-white/10 bg-zinc-900/60 hover:border-white/25"
                    }`}
                  >
                    <img
                      src={srv.imagen}
                      alt={srv.nombre}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm sm:text-base truncate">{srv.nombre}</p>
                        {srv.tag && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-400 text-zinc-950 text-[10px] font-black shrink-0">
                            {srv.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                        {srv.descripcion}
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-1">{srv.duracion}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-black text-amber-400 text-sm sm:text-base">
                        ${srv.precio.toLocaleString("es-CO")}
                      </p>
                      {activo && (
                        <CheckCircle2 className="w-4 h-4 text-amber-400 ml-auto mt-1" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Tarjeta Sticky de Confirmación */}
          <div className="lg:col-span-5 bg-zinc-900/90 border border-white/15 rounded-3xl p-6 space-y-5 lg:sticky lg:top-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Paso 2 · Tu Turno
              </p>
              <h3 className="text-xl font-black mt-1">Confirma tu cita</h3>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Elige Barbero</span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {BARBERIA_DATA.barberos.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBarberoId(b.id)}
                    className={`px-3.5 py-2.5 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${
                      barberoId === b.id
                        ? "border-amber-400 bg-amber-400/15 text-white font-bold"
                        : "border-white/10 bg-zinc-950 text-zinc-300"
                    }`}
                  >
                    <span>{b.nombre}</span>
                    <span className="text-[11px] text-zinc-400">{b.rol}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-zinc-400 mb-1">
                  Tu nombre
                </label>
                <input
                  type="text"
                  placeholder="Ej. Carlos Gómez"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-zinc-400 mb-1">
                  Hora preferida
                </label>
                <select
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-sm focus:outline-none focus:border-amber-400"
                >
                  <option>10:30 AM</option>
                  <option>2:00 PM</option>
                  <option>4:30 PM</option>
                  <option>6:00 PM</option>
                  <option>7:30 PM</option>
                </select>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 space-y-1.5 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Servicio</span>
                <span className="text-white font-semibold">{servicioElegido.nombre}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Profesional</span>
                <span className="text-white font-semibold">{barberoElegido.nombre}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-black">
                <span>Total estimado</span>
                <span className="text-amber-400">
                  ${servicioElegido.precio.toLocaleString("es-CO")} COP
                </span>
              </div>
            </div>

            <a
              href={generarLinkWhatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-400/20 transition-all hover:scale-[1.01]"
            >
              <span>Agendar por WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

# Demo Barbería — Reserva Express & Catálogo Visual

Aplicación web interactiva para barberías y estudios de estética que convierte visitas desde redes sociales, Google Maps o QR en citas agendadas por WhatsApp.

## Stack y herramientas
- **Framework y lenguaje:** Next.js 15 (App Router) + TypeScript estricto.
- **Estilos y animaciones:** Tailwind CSS v4, Framer Motion y Lucide React.
- **Calidad y QA:** Pruebas unitarias en `tests/qa.test.ts` ejecutadas con Node bajo el patrón AAA (Arrange - Act - Assert).
- **Flujo asistido y automatización con IA:** Desarrollada con Skills modulares de ahorro de contexto/tokens, relevo multi-IA y arquitectura clonable en `src/data/barberia.ts`.

## Comandos principales
- `npm install` — Instalar dependencias.
- `npm test` — Ejecutar suite de pruebas QA.
- `npm run build` — Compilar para producción (Vercel).
- `npm run dev` — Iniciar servidor local.
import assert from "node:assert/strict";
import { BARBERIA_DATA } from "../src/data/barberia.ts";

// Arrange & Act
assert.ok(BARBERIA_DATA.servicios.length >= 3, "Debe tener al menos 3 servicios");
for (const srv of BARBERIA_DATA.servicios) {
  // Assert
  assert.ok(srv.precio > 0, `Precio inválido en ${srv.nombre}`);
  assert.ok(srv.nombre.trim().length > 0, "Nombre vacío");
}
console.log("✅ QA Barbería: Todos los contratos de datos pasaron.");

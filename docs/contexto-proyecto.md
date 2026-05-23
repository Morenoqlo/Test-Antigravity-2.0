# Contexto del Proyecto — Adesign Portfolio

> **Para agentes:** Lee este archivo al inicio de cada sesión. Contiene el estado actual del sitio, el historial de cambios, el análisis competitivo y el roadmap de mejoras pendientes.

---

## El Proyecto

**Sitio:** Portafolio profesional de Alexander Rojas (Adesign)  
**Ruta local:** `C:\Users\alexa\Downloads\Test Antigravity 2.0`  
**Stack:** Vanilla HTML5 / CSS3 / JS (ES6) — sin frameworks  
**Servidor local:** `npx serve . -p 3001` — config en `.claude/launch.json`  
**Sin repositorio git** — no hacer commits

**Especialidad del cliente:** Diseño gráfico, identidad visual, packaging, dirección de arte, empaque de marca. Ubicado en Antofagasta, Chile. Servicios remotos a nivel mundial.

---

## Estado Actual del Sitio

### Secciones (en orden)
1. **Navbar** — Logo 70px, links: Sobre Mí / Proyectos / Trayectoria / Especialidad / Contacto
2. **Hero** — Badge "Disponible para nuevos proyectos", h1, subtítulo, 2 CTAs (WhatsApp + Ver proyectos), tarjeta proceso creativo (4 pasos)
3. **About** — "El Creativo Detrás de Adesign"
4. **Projects** — Grid 8 tarjetas con modal/carousel, filtros por categoría
5. **Experience** — Timeline 5 items (badge + título = "Experiencia")
6. **Skills** — 3 cards (Avanzado / Intermedio / En Desarrollo)
7. **Contact** — 3 métodos: WhatsApp, Email, Ubicación
8. **Footer** — Logo 80px, 3 columnas

### Paleta de marca
- Amarillo/dorado: `#ffb800` / `rgba(255, 184, 0, x)`
- Naranja: `#f97316` / `rgba(249, 115, 22, x)`
- Fondo oscuro glassmorphism

### Cambios implementados (historial completo)

**V1 — Mejoras iniciales**
- Logo navbar: 70px (era muy pequeño)
- Sección Contacto: íconos alineados (`align-items: flex-start`), círculos naranja consistentes
- Reemplazo colores off-brand: eliminados todos los violetas/púrpuras y teales que quedaron de un tema anterior

**V2 — Nuevas funcionalidades**
- Badge hero: eliminado emoji ⚡
- Hero card: reemplazada tarjeta de código por tarjeta "Proceso Creativo" (4 pasos numerados)
- Lupa magnifier en modal de proyectos (circular 130px, zoom 2.5×)
- Sección Experiencia: renombrada de "Hitos y Evolución" a "Experiencia"
- Footer: eliminado `<span class="logo-text">Adesign</span>` duplicado

**V3 — Refinamiento**
- Lupa: rectangular 220×160px, zoom 3.5×, `lensW`/`lensH` separados
- Ícono ubicación: `font-size: 1.5rem` + `min-width: 48px; flex-shrink: 0` en `.method-item i`
- Footer logo: 80px (era 60px)
- Footer frase: eliminada

**V4 — Revertida**
- Se intentó imagen scrolleable en modal (reemplazar lupa) → al usuario no le gustó → revertido completamente

**Fixes adicionales**
- Section badge "Trayectoria" → "Experiencia" (consistencia con el h2)
- `.method-item i`: `min-width: 48px; flex-shrink: 0` — fix definitivo para que Font Awesome no rompa el círculo al aplicar font-size custom

---

## Análisis Competitivo

### Referentes analizados
| Diseñador | País | URL | Especialidad |
|---|---|---|---|
| Jota Zelada | Chile | jotazelada.cl | Branding / Web / Social Media freelance |
| Jose Luis Garrao | Chile | jlgarrao.cl | Motion & Graphics (desde 2007) |
| Laia Acuña | Argentina | laiaflorencia.com | Branding / AI / Packaging |
| MAKEBARDO | Argentina/NZ | makebardo.com | Branding / Packaging (publicado en 70+ revistas internacionales) |

### Dónde Adesign está adelante
- **Estética visual** — dark glassmorphism + gold/orange es más sofisticado que el minimalismo neutro chileno típico
- **Interactividad** — modal carousel, animaciones, light/dark toggle — sobre el promedio regional
- **Proceso visible** — tarjeta "Proceso Creativo" en hero es diferenciador real
- **WhatsApp first** — alineado con el mercado latinoamericano

### Brechas críticas (de mayor a menor impacto)

**1. Sin testimonios ni logos de clientes** ← IMPACTO MÁS ALTO
Jota Zelada y Garrao muestran logos y citas de clientes reales. Es el factor #1 de credibilidad. Sin esto, los visitantes no tienen prueba social de que alguien confió en el trabajo.

**2. Sin case studies — solo resultados finales**
Los mejores muestran: problema del cliente → proceso → resultado/impacto. Actualmente las tarjetas tienen descripción corta pero no cuentan la historia del proyecto.

**3. Propuesta de valor genérica**
- Jota Zelada: *"El futuro es FREELANCE"* — posicionamiento claro
- Laia Acuña: *"Designing for cool people"* — personalidad definida
- Adesign actual: *"Estética impecable y rigor visual"* — correcto pero dicho por cualquiera

**4. Sin métricas ni resultados de proyectos**
Números concretos generan credibilidad: *"marca lanzada en 3 países"*, *"rediseño que aumentó ventas X%"*

**5. Sin categorización visible en las tarjetas**
Los top etiquetan cada proyecto: *Branding / 2024*, *Packaging / Cliente X* — visible sin abrir el modal

**6. Sin contenido estratégico (blog/recursos)**
Ausente por completo. Genera tráfico orgánico y posiciona como experto.

### Puntajes actuales
| Dimensión | Puntaje |
|---|---|
| Diseño visual / estética | 8/10 |
| Presentación de proyectos | 5/10 |
| Credibilidad / social proof | 3/10 |
| Propuesta de valor / positioning | 5/10 |
| Experiencia de usuario / interacción | 7/10 |
| Contenido estratégico | 2/10 |

---

## Roadmap de Mejoras Pendientes

### Prioridad 1 — Credibilidad (impacto inmediato en conversión)
- [ ] **Testimonios** — Agregar sección con 2-3 testimonios reales de clientes (nombre, empresa, foto opcional, cita específica)
- [ ] **Logos de clientes** — Banda o grid con logos de marcas/empresas con las que trabajó

### Prioridad 2 — Profundidad de proyectos
- [ ] **Case study mínimo** en al menos 2 proyectos — dentro del modal agregar: contexto/brief → proceso → resultado
- [ ] **Año y categoría visible** en las tarjetas de proyecto (sin necesidad de abrir modal)
- [ ] **Métricas** en los proyectos que las tengan (impacto, alcance, etc.)

### Prioridad 3 — Positioning y propuesta de valor
- [ ] **One-liner reescrito** — específico: ¿para quién diseña? ¿qué resultado entrega? ¿qué lo diferencia?
- [ ] **Tagline / filosofía de diseño** — una línea memorable que deje huella

### Prioridad 4 — Detalles visuales y UX
- [ ] Revisar cómo se ven las imágenes de proyectos en el modal (el problema del zoom sigue pendiente de una solución definitiva)
- [ ] Evaluar si agregar año a las tarjetas de proyecto

### Prioridad 5 — Contenido (largo plazo)
- [ ] Blog o sección de recursos (bajo prioridad, alta inversión de tiempo)

---

## Notas técnicas importantes

### Font Awesome + width en flex containers
Si se aplica `font-size` custom a un ícono FA6 dentro de `.method-item i` (que tiene `width: 48px`), FA6 puede forzar `width: 1.25em` y romper el círculo. **Solución permanente:** `min-width: 48px; flex-shrink: 0` en `.method-item i`.

### Lupa magnifier (estado actual)
La lupa rectangular (220×160px, zoom 3.5×) existe pero tiene una limitación fundamental: `object-fit: contain` en `#modal-project-img` hace que screenshots verticales (ej: Vaiss full page) se rendericen a ~150px de ancho dentro del modal. El zoom 3.5× sobre 150px sigue siendo poco útil. El problema no está en el zoom sino en el tamaño del canvas de la imagen. Solución definitiva requiere rediseñar el modal visual (cambiar el layout o la forma de mostrar la imagen).

### Colores off-brand eliminados
En el CSS original de Gemini quedaron residuos de un tema anterior: violetas `rgba(139, 92, 246, x)` y teales `rgba(6, 182, 212, x)`. Todos fueron reemplazados por los colores de marca (amarillo/naranja). Si se regenera o modifica CSS, verificar que no reaparezcan.

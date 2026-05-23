# Mejoras Portafolio Adesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply 3 targeted CSS fixes to the Adesign portfolio: enlarge the navbar logo, fix contact section alignment, and replace off-brand purple/teal color remnants with the real Adesign brand palette.

**Architecture:** All changes are confined to `css/style.css`. No HTML or JavaScript changes required. Each task is an independent, isolated CSS edit followed by a visual screenshot verification.

**Tech Stack:** Vanilla CSS, HTML5, Font Awesome 6, Google Fonts (Outfit + Plus Jakarta Sans). Visual verification via Claude Preview MCP or `npx serve` + browser.

**Spec:** `docs/superpowers/specs/2026-05-20-mejoras-web-design.md`

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `css/style.css` | Modify | All 3 CSS changes — logo size, alignment, brand colors |

---

### Task 1: Logo más grande en navbar

**Files:**
- Modify: `css/style.css` (lines ~159–167 for `.logo-img`, line ~135 for `.glass-nav.scrolled`)

- [ ] **Step 1: Verificar estado actual antes de cambiar**

  Leer las líneas del selector en `css/style.css` y confirmar que los valores actuales son los esperados:

  ```
  .logo-img, .nav-logo img {
      height: 46px !important;
      max-height: 46px !important;
      max-width: 200px !important;
  }

  .glass-nav.scrolled {
      height: 70px;
  }
  ```

- [ ] **Step 2: Aplicar cambio de tamaño de logo**

  En `css/style.css`, localizar el selector `.logo-img, .nav-logo img` y reemplazar las tres propiedades:

  ```css
  /* ANTES */
  .logo-img, .nav-logo img {
      height: 46px !important;
      max-height: 46px !important;
      width: auto !important;
      max-width: 200px !important;
      display: block !important;
      object-fit: contain !important;
      flex-shrink: 0 !important;
  }

  /* DESPUÉS */
  .logo-img, .nav-logo img {
      height: 70px !important;
      max-height: 70px !important;
      width: auto !important;
      max-width: 270px !important;
      display: block !important;
      object-fit: contain !important;
      flex-shrink: 0 !important;
  }
  ```

- [ ] **Step 3: Aplicar ajuste del navbar scrolled**

  En `css/style.css`, localizar `.glass-nav.scrolled` y actualizar la altura:

  ```css
  /* ANTES */
  .glass-nav.scrolled {
      height: 70px;
      box-shadow: var(--shadow-premium);
  }

  /* DESPUÉS */
  .glass-nav.scrolled {
      height: 76px;
      box-shadow: var(--shadow-premium);
  }
  ```

  *Razón:* Con logo de 70px, un navbar scrolled de 70px deja 0px de margen. 76px da 3px arriba y abajo.

- [ ] **Step 4: Verificar el cambio con screenshot**

  Iniciar servidor local y tomar screenshot:

  ```bash
  npx serve "C:/Users/alexa/Downloads/Test Antigravity 2.0" -p 3000
  ```

  Luego usar Claude Preview o abrir `http://localhost:3000` en el navegador.

  Verificar visualmente:
  - El logo en la navbar se ve notablemente más grande que antes
  - El logo no se corta ni desborda el navbar
  - El navbar al hacer scroll (bajar > 50px) tiene suficiente espacio vertical para el logo

- [ ] **Step 5: Commit**

  ```bash
  git add css/style.css
  git commit -m "feat: increase navbar logo from 46px to 70px, adjust scrolled nav to 76px"
  ```

---

### Task 2: Corregir alineación del icono de ubicación en Contacto

**Files:**
- Modify: `css/style.css` (línea ~1159 del selector `.method-item`)

- [ ] **Step 1: Verificar estado actual**

  En `css/style.css`, confirmar que el selector actual dice:

  ```css
  .method-item {
      display: flex;
      align-items: center;
      gap: 1.2rem;
  }
  ```

- [ ] **Step 2: Aplicar el fix de alineación**

  Cambiar `align-items: center` por `align-items: flex-start`:

  ```css
  /* ANTES */
  .method-item {
      display: flex;
      align-items: center;
      gap: 1.2rem;
  }

  /* DESPUÉS */
  .method-item {
      display: flex;
      align-items: flex-start;
      gap: 1.2rem;
  }
  ```

- [ ] **Step 3: Verificar visualmente en la sección Contacto**

  Navegar hasta la sección `#contact` del sitio. Confirmar:
  - Los tres items (WhatsApp, Email, Ubicación) tienen sus íconos circulares alineados al **tope** del texto, no al centro
  - El ícono de ubicación (📍) ya no flota al centro del texto de 2 líneas
  - Los items de WhatsApp y Email se ven igual que antes (texto de 1 línea no se afecta visualmente)

- [ ] **Step 4: Commit**

  ```bash
  git add css/style.css
  git commit -m "fix: align contact method icons to flex-start to fix location item misalignment"
  ```

---

### Task 3: Reemplazar colores off-brand (violeta y teal) con paleta Adesign

**Files:**
- Modify: `css/style.css` — 10 declaraciones en 7 selectores

La paleta oficial Adesign es **solo** amarillo `#ffb800` (accent-1) y naranja `#f97316` (accent-2). Los siguientes valores son residuos de un tema anterior y deben reemplazarse.

- [ ] **Step 1: Corregir `.badge` — fondo y borde violeta**

  Localizar en `css/style.css`:

  ```css
  /* ANTES */
  .badge {
      display: inline-block;
      padding: 0.4rem 1rem;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 600;
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid rgba(139, 92, 246, 0.2);
      color: var(--color-accent-1);
      letter-spacing: 0.5px;
  }

  /* DESPUÉS */
  .badge {
      display: inline-block;
      padding: 0.4rem 1rem;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 600;
      background: rgba(255, 184, 0, 0.1);
      border: 1px solid rgba(255, 184, 0, 0.2);
      color: var(--color-accent-1);
      letter-spacing: 0.5px;
  }
  ```

- [ ] **Step 2: Corregir `.image-overlay-glow` — gradiente violeta**

  ```css
  /* ANTES */
  .image-overlay-glow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 80%);
      pointer-events: none;
  }

  /* DESPUÉS */
  .image-overlay-glow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 80%);
      pointer-events: none;
  }
  ```

- [ ] **Step 3: Corregir `.hero-card:hover .glowing-icon` — text-shadow violeta**

  ```css
  /* ANTES */
  .hero-card:hover .glowing-icon {
      color: var(--color-accent-1);
      text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
  }

  /* DESPUÉS */
  .hero-card:hover .glowing-icon {
      color: var(--color-accent-1);
      text-shadow: 0 0 10px rgba(255, 184, 0, 0.5);
  }
  ```

- [ ] **Step 4: Corregir `.timeline-dot` — box-shadow violeta**

  ```css
  /* ANTES */
  .timeline-dot {
      position: absolute;
      left: 20px;
      top: 10px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--bg-primary);
      border: 4px solid var(--color-accent-1);
      box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
      z-index: 10;
      transition: var(--transition-smooth);
  }

  /* DESPUÉS */
  .timeline-dot {
      position: absolute;
      left: 20px;
      top: 10px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--bg-primary);
      border: 4px solid var(--color-accent-1);
      box-shadow: 0 0 10px rgba(255, 184, 0, 0.5);
      z-index: 10;
      transition: var(--transition-smooth);
  }
  ```

- [ ] **Step 5: Corregir `.feature-icon` — fondo y borde teal**

  ```css
  /* ANTES */
  .feature-icon {
      font-size: 1.5rem;
      color: var(--color-accent-2);
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.2);
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
  }

  /* DESPUÉS */
  .feature-icon {
      font-size: 1.5rem;
      color: var(--color-accent-2);
      background: rgba(249, 115, 22, 0.1);
      border: 1px solid rgba(249, 115, 22, 0.2);
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
  }
  ```

- [ ] **Step 6: Corregir `.method-item i` — fondo y borde teal**

  ```css
  /* ANTES */
  .method-item i {
      font-size: 1.4rem;
      color: var(--color-accent-2);
      width: 48px;
      height: 48px;
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  /* DESPUÉS */
  .method-item i {
      font-size: 1.4rem;
      color: var(--color-accent-2);
      width: 48px;
      height: 48px;
      background: rgba(249, 115, 22, 0.1);
      border: 1px solid rgba(249, 115, 22, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  ```

- [ ] **Step 7: Corregir `input:focus / textarea:focus` — box-shadow teal**

  ```css
  /* ANTES */
  .form-group input:focus, .form-group textarea:focus {
      border-color: var(--color-accent-2);
      background: rgba(255, 255, 255, 0.06);
      box-shadow: 0 0 12px rgba(6, 182, 212, 0.15);
  }

  /* DESPUÉS */
  .form-group input:focus, .form-group textarea:focus {
      border-color: var(--color-accent-2);
      background: rgba(255, 255, 255, 0.06);
      box-shadow: 0 0 12px rgba(249, 115, 22, 0.15);
  }
  ```

- [ ] **Step 8: Verificar visualmente las correcciones de color**

  Navegar por el sitio y verificar en cada sección:

  | Sección | Qué verificar |
  |---|---|
  | Hero | Badge "⚡ Disponible para nuevos proyectos" tiene tinte **amarillo** (no violeta) |
  | Sobre Mí | Hover sobre foto de perfil: glow es **naranja** (no violeta) |
  | Sobre Mí | Los iconos de las features (fingerprint, wand) tienen fondo **naranja** (no teal) |
  | Hero card | Hover sobre la tarjeta de código: íconos brillan en **amarillo** (no violeta) |
  | Trayectoria | Los dots del timeline tienen glow **amarillo** (no violeta) |
  | Contacto | Los iconos circulares (WhatsApp, email, ubicación) tienen fondo **naranja** (no teal) |
  | Contacto | Click en un input del formulario: el glow del focus es **naranja** (no teal) |

- [ ] **Step 9: Commit**

  ```bash
  git add css/style.css
  git commit -m "fix: replace off-brand purple/teal colors with Adesign brand palette (yellow/orange)"
  ```

---

## Verificación final

- [ ] Abrir el sitio completo y hacer scroll de arriba a abajo en tema oscuro
- [ ] Cambiar a tema claro con el botón de la luna/sol y verificar que el logo sigue siendo visible
- [ ] Verificar el sitio en viewport móvil (≤768px): logo, contacto y colores deben verse bien
- [ ] Confirmar que no hay regresiones visuales en secciones no tocadas (Proyectos, Trayectoria, Habilidades)

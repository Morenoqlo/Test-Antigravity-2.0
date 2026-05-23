# Spec: Mejoras V4 — Imagen Scrolleable en Modal

**Fecha:** 2026-05-23  
**Proyecto:** Test Antigravity 2.0  
**Alcance:** Reemplazar la lupa magnifier por una imagen scrolleable a ancho completo en el modal de proyectos.

---

## Contexto

La lupa magnifier (implementada en V2 y ajustada en V3) no logra mostrar el detalle necesario porque `object-fit: contain` con `max-height: 85%` hace que screenshots verticales se rendericen a ~150px de ancho. Con 3.5× de zoom sigue siendo insuficiente.

**Solución:** Imagen a ancho completo (`width: 100%`) con scroll vertical dentro del contenedor `.modal-visual`. Se elimina completamente la lupa.

---

## Cambio 1 — CSS: Imagen scrolleable, eliminar lupa

**Archivo:** `css/style.css`

### 1a. Modificar `.modal-visual`

```css
/* ANTES */
.modal-visual {
    position: relative;
    height: 100%;
    min-height: 350px;
    overflow: hidden;
    background: #040406;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* DESPUÉS */
.modal-visual {
    position: relative;
    height: 100%;
    min-height: 350px;
    overflow-y: auto;
    overflow-x: hidden;
    background: #040406;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
```

Solo cambian: `overflow: hidden` → `overflow-y: auto; overflow-x: hidden`, `align-items: center` → `align-items: flex-start`. Se mantiene `justify-content: center`.

### 1b. Modificar `#modal-project-img`

```css
/* ANTES */
#modal-project-img {
    max-width: 90%;
    max-height: 85%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    z-index: 2;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
    transition: opacity 0.3s ease;
}

/* DESPUÉS */
#modal-project-img {
    max-width: 100%;
    max-height: none;
    width: 100%;
    height: auto;
    object-fit: unset;
    display: block;
    z-index: 2;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
    transition: opacity 0.3s ease;
}
```

Cambios: `max-width: 90%` → `max-width: 100%`, `max-height: 85%` → `max-height: none`, `width: auto` → `width: 100%`, `object-fit: contain` → `object-fit: unset`.

### 1c. Agregar scrollbar personalizada para `.modal-visual`

Agregar inmediatamente después del bloque `.modal-visual { ... }`:

```css
/* Scrollbar personalizada para modal visual */
.modal-visual::-webkit-scrollbar {
    width: 4px;
}
.modal-visual::-webkit-scrollbar-track {
    background: transparent;
}
.modal-visual::-webkit-scrollbar-thumb {
    background: rgba(255, 184, 0, 0.3);
    border-radius: 2px;
}
.modal-visual::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 184, 0, 0.6);
}
```

### 1d. Eliminar bloque `.img-lens` y `.modal-visual.lens-active`

Eliminar completamente:

```css
/* -------------------------------------------------------------
   LUPA MAGNIFIER — MODAL DE PROYECTOS
------------------------------------------------------------- */
.img-lens {
    position: absolute;
    width: 220px;
    height: 160px;
    border-radius: 12px;
    border: 2px solid var(--color-accent-1);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5),
                0 8px 24px rgba(0, 0, 0, 0.6),
                0 0 15px rgba(255, 184, 0, 0.3);
    display: none;
    pointer-events: none;
    z-index: 20;
    background-repeat: no-repeat;
}

.modal-visual.lens-active {
    cursor: none;
}
```

(El bloque del ícono de ubicación que sigue — `.method-item .fa-location-dot` — debe mantenerse intacto.)

---

## Cambio 2 — JS: Eliminar sección de la lupa

**Archivo:** `js/app.js`

Eliminar completamente el bloque de la lupa (sección 10), que empieza en `/* ========== 10. LUPA MAGNIFIER EN MODAL ========== */` y termina en el segundo `modalVisualEl.addEventListener('mouseleave', ...)` cierre:

```js
    /* ==========================================
       10. LUPA MAGNIFIER EN MODAL
       ========================================== */
    const lens = document.createElement('div');
    lens.className = 'img-lens';
    lens.id = 'img-lens';
    document.querySelector('.modal-visual').appendChild(lens);

    const modalVisualEl = document.querySelector('.modal-visual');

    modalVisualEl.addEventListener('mousemove', (e) => {
        ...
    });

    modalVisualEl.addEventListener('mouseleave', () => {
        lens.style.display = 'none';
        modalVisualEl.classList.remove('lens-active');
    });
```

Después de eliminar, la última línea del archivo debe seguir siendo `});` (el cierre del `DOMContentLoaded`).

**Verificar:** `lensW`, `lensH`, `zoomFactor`, `img-lens`, `lens-active` ya NO deben aparecer en `app.js`.

---

## Archivos afectados

| Archivo | Cambios |
|---|---|
| `css/style.css` | `.modal-visual` overflow+align, `#modal-project-img` tamaño completo, scrollbar custom, eliminar `.img-lens` y `.modal-visual.lens-active` |
| `js/app.js` | Eliminar sección 10 completa |

## Fuera de alcance

- `index.html` — sin cambios
- Secciones del modal distintas al área visual — sin cambios
- Comportamiento del carrusel (flechas/dots) — sin cambios

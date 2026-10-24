# Arquitectura — Nébula Café

## Sitemap

| Ruta | Página | Objetivo |
| --- | --- | --- |
| `/` | Inicio | Presentar la cafetería, la carta y la ubicación |
| `/robots.txt` | Generado en build | Indicar el sitemap correcto |
| `/sitemap-index.xml` | Generado en build | Descubrimiento SEO |

## Stack

- Framework: Astro 7, salida estática.
- Estilos: Tailwind CSS 4 con tokens en `src/styles/global.css`.
- Contenido: arrays locales en `src/pages/index.astro`.
- Tests: Playwright (escritorio y móvil).
- Despliegue: GitHub Pages con GitHub Actions.
- Backend: no aplica.

## Estructura de archivos

```text
src/
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── robots.txt.ts
└── styles/
    └── global.css

public/
├── .nojekyll
└── favicon.svg
```

## Componentes

| Componente | Uso | Props principales |
| --- | --- | --- |
| `Layout.astro` | Cabecera, metadatos, footer y skip link | `title`, `description`, `siteName` |
| `index.astro` | Landing completa con datos locales | Ninguna |

## Modelo de contenido / datos

| Entidad | Campos | Fuente |
| --- | --- | --- |
| Plato | nombre, descripción, precio, etiqueta, nota | Array local |
| Testimonio | cita, nombre, rol | Array local |
| Horario | días, horas | Array local |

## Integraciones

- Formularios: no.
- Analítica: no configurada.
- CMS: no.
- Auth: no.
- Pagos: no.

## Backend

- Necesario: no.
- API: no.
- Base de datos: no.
- Auth: no.
- Pagos: no.
- Hosting: GitHub Pages.
- Documento: `docs/web/backend.md`.

## SEO

- Title y description únicos en la home.
- Canonical calculado con `Astro.site`.
- Open Graph y Twitter Card.
- Sitemap automático con `@astrojs/sitemap`.
- `robots.txt` generado con la URL del sitemap.
- JSON-LD `CafeOrCoffeeShop` con dirección y horarios ficticios.

## Accesibilidad

- Nivel objetivo: WCAG 2.2 AA.
- Skip link, foco visible y navegación por teclado.
- HTML semántico y un solo `h1`.
- Textos alternativos y elementos decorativos ocultos a tecnologías de asistencia.
- Movimiento reducido respetado.

## Rendimiento

- Sin JavaScript de cliente propio.
- Sin fuentes ni imágenes externas.
- SVG inline y CSS para la ilustración.
- HTML estático y CSS generado por Astro.

## Riesgos

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Enlaces ficticios interpretados como reales | Bajo | Aviso visible y dominio `.test` |
| Cambios de base en GitHub Pages | Medio | `BASE_PATH` normalizado y smoke test |
| Contraste insuficiente en textos pequeños | Medio | Tokens revisados y colores oscurecidos |

## Decisiones pendientes

- [x] Ninguna para esta demo.

# QA — Nébula Café

## Alcance

- Páginas: `/`.
- Navegadores: Chromium (Playwright).
- Dispositivos: escritorio y móvil.
- Entorno local: `http://127.0.0.1:4321`.
- Entorno publicado: `https://netoxdmc.github.io/proyecto-web/`.

## Checklist

- [x] Enlaces internos y externos
- [x] Responsive 360, 768, 1024 y 1440 px
- [x] Navegación con teclado
- [x] Foco visible
- [x] Formularios: no aplica
- [x] API: no aplica
- [x] Webhooks: no aplica
- [x] Cookies, headers, CORS y secretos: no aplica
- [x] Migraciones y rollback: no aplica
- [x] Contraste y textos alternativos
- [x] Consola sin errores
- [x] Imágenes y fuentes optimizadas
- [x] Title, description y canonical
- [x] Open Graph y Twitter Card
- [x] Sitemap y robots
- [x] Sin errores 404 inesperados

## Hallazgos

| Severidad | Página | Descripción | Evidencia | Estado |
| --- | --- | --- | --- | --- |
| Baja | Home | La versión inicial de `robots.txt` concatenaba mal la base de GitHub Pages | `robots.txt` apuntaba a `/proyecto-websitemap-index.xml` | Corregido |
| Baja | Home | El color salvia inicial no llegaba a 4.5:1 en textos pequeños | Cálculo de contraste | Corregido con `#5f6f54` |

## Tests automatizados

- `tests/smoke.spec.ts`: título, H1, CTAs, sección de menú, consola y overflow horizontal en 360, 768, 1024 y 1440 px.
- `tests/backend/**`: no aplica.

## Evidencias

- `npm run check`: 0 errores.
- `npm run lint`: sin errores.
- `npm run build`: correcto.
- `npm test`: 6 tests correctos.
- `npm audit --audit-level=high`: 0 vulnerabilidades.
- Smoke test publicado: home 200, canonical, CSS, `robots.txt` y sitemap correctos; consola sin errores.

## Aprobación

- [x] QA aprobado
- [x] Preview aprobado
- [x] Despliegue autorizado

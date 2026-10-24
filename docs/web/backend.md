# Backend — Nébula Café

## Alcance

- No aplica: el sitio es estático y no necesita backend.
- No hay cuentas, base de datos, pagos, CMS ni formularios con persistencia.
- El CTA de reserva usa un enlace `mailto:` ficticio.
- Queda fuera de esta demo cualquier integración real de email, analítica o reservas.

## Stack y servicios

| Pieza | Elección | Motivo |
| --- | --- | --- |
| API / servidor | No aplica | Sitio estático |
| Base de datos | No aplica | Sin datos persistentes |
| Auth | No aplica | Sin cuentas |
| Pagos | No aplica | Sin ventas online |
| Email | `mailto:` | Demo sin backend |
| Hosting | GitHub Pages | Publicación estática |

## API

No hay endpoints de aplicación. `robots.txt` se prerenderiza en el build.

## Auth y permisos

No aplica.

## Pagos

No aplica.

## Validación y errores

No aplica.

## Seguridad

- Sin secretos en cliente.
- Sin formularios ni entradas de usuario.
- Dependencias auditadas con `npm audit`.
- El único enlace externo es Google Maps; no envía datos propios.

## Variables de entorno

| Variable | Entorno | Uso | ¿Secreta? |
| --- | --- | --- | --- |
| `PUBLIC_SITE_URL` | Todos | Dominio canónico | No |
| `BASE_PATH` | GitHub Pages | Subruta de publicación | No |

## Migraciones

No aplica.

## Tests

- E2E: `tests/smoke.spec.ts`.
- Backend: no aplica.

## Riesgos y pendientes

- [x] Ninguno para el alcance estático de la demo.

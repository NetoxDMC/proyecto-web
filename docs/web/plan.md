# Plan — Nébula Café

## Fases

| Fase | Responsable | Estado | Entregable |
| --- | --- | --- | --- |
| Brief | web-lead | Hecho | `docs/web/brief.md` |
| Arquitectura | web-architect | Hecho | `docs/web/architecture.md` |
| Diseño | web-designer | Hecho | `docs/web/design.md` |
| Copy | web-copywriter | Hecho | `docs/web/copy.md` |
| Backend | web-backend | No aplica | Sitio estático |
| Implementación | web-builder | Hecho | `src/pages/index.astro` |
| QA | web-qa | Hecho | `docs/web/qa.md` + tests |
| Revisión | web-reviewer | Hecho | Revisión local de código y build |
| Despliegue | web-deployer | Hecho | GitHub Pages |

## Hitos

- [x] Brief aprobado
- [x] Arquitectura y diseño aprobados
- [x] Primera página implementada
- [x] Backend definido (no aplica)
- [x] Backend implementado y probado (no aplica)
- [x] Sitio completo
- [x] QA y revisión aprobados
- [x] Preview aprobado
- [x] Producción autorizada

## Riesgos

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Confundir la demo con un negocio real | Bajo | Aviso de ficción en footer y documentación |
| Enlaces o email ficticios usados como reales | Bajo | Dominio `.test` y dirección marcada como ficticia |
| Regresión responsive | Medio | Tests de overflow en 360, 768, 1024 y 1440 px |

## Decisiones

| Fecha | Decisión | Motivo |
| --- | --- | --- |
| 2026-10-24 | Una sola landing | El objetivo es probar el flujo, no un sitio multipágina |
| 2026-10-24 | Sin imágenes externas | Evitar dependencias, licencias y peso |
| 2026-10-24 | GitHub Pages | Publicación gratuita y automática desde `main` |

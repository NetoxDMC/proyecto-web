# Despliegue

## Estado

- Build de producción: OK.
- `check`, `lint` y tests: OK.
- Smoke test local del build: OK (home, `robots.txt` y `sitemap-index.xml` responden 200).
- Repositorio remoto: pendiente.
- Plataforma: pendiente.
- Producción: no desplegada.

## Antes de desplegar

- [ ] `npm run check`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm test`
- [ ] `npm audit --audit-level=high`
- [ ] `PUBLIC_SITE_URL` con el dominio real.
- [ ] `public/robots.txt` con el dominio real.
- [ ] Preview revisado y aprobado.
- [ ] Autorización explícita para producción.

## Variables de entorno

| Variable | Ejemplo | Entorno |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | `https://tudominio.com` | Producción y preview |

No subas `.env` al repositorio. Los secretos de backend van solo en el panel de la plataforma.

## Opciones de plataforma

### Vercel

1. Importar el repositorio en `vercel.com/new`.
2. Framework preset: **Astro**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Añadir `PUBLIC_SITE_URL`.
6. Desplegar primero un preview.
7. CLI opcional: `npx vercel` para preview; `npx vercel --prod` solo tras aprobación.

### Netlify

1. Importar el repositorio en Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Añadir `PUBLIC_SITE_URL`.
5. CLI opcional: `npx netlify deploy --build` para preview; `npx netlify deploy --build --prod` solo tras aprobación.

### Cloudflare Pages

1. Conectar el repositorio en Cloudflare Pages.
2. Framework preset: **Astro**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Añadir `PUBLIC_SITE_URL`.
6. CLI opcional: `npx wrangler pages deploy dist` solo tras aprobación.

### GitHub Pages

1. El sitio es estático; revisar `site` y `base` en `astro.config.mjs` si se publica en un subdirectorio.
2. Crear un workflow con `actions/upload-pages-artifact` y `actions/deploy-pages`.
3. Configurar el dominio o la URL de Pages en `PUBLIC_SITE_URL` y `robots.txt`.

## Smoke test después del despliegue

- [ ] Home responde 200 por HTTPS.
- [ ] Título, canonical, Open Graph y Twitter Card correctos.
- [ ] `robots.txt` y `sitemap-index.xml` accesibles.
- [ ] Enlaces internos y externos funcionan.
- [ ] Formularios y flujos críticos funcionan.
- [ ] Consola sin errores.
- [ ] Página 404 correcta.
- [ ] La versión desplegada corresponde al commit esperado.

## Rollback

- Vercel, Netlify o Cloudflare: promover el despliegue anterior desde el panel.
- Git: revertir el commit problemático y volver a desplegar.
- Si hay backend: revertir también la migración correspondiente si es seguro.

## Autorización

No se despliega a producción sin confirmación explícita del usuario. El preview puede desplegarse antes para revisión.

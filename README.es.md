# Crítica de Guerrero

Proyecto de reconstrucción de Crítica de Guerrero, un medio de noticias con enfoque principal en Guerrero, México.

## Estado actual

- Existe una base estática para la portada, desplegada con Netlify.
- `old_index.html` conserva una captura de la portada anterior; es archivo histórico y no es el sitio activo.
- `https://criticadeguerrero.com.mx/` es el dominio de producción y la identidad pública canónica planificada.
- `criticaguerrero.com` se reserva temporalmente para pruebas; no debe usarse en enlaces públicos, metadatos canónicos, mapas del sitio ni vistas previas sociales.
- La planeación del proyecto está en `docs/`.
- Aún no están implementados los metadatos canónicos/sociales, la configuración de alias `www`, el CMS con acceso editorial ni las plantillas de notas y secciones.

## Dónde empezar

1. Leer la [lista de verificación de corte a producción](docs/PRODUCTION_CUTOVER_CHECKLIST.md) para el dominio, DNS, HTTPS, Netlify y la comprobación pública inicial.
2. Seguir el [plan de dominio y redirecciones en Netlify](docs/NETLIFY_DOMAIN_AND_REDIRECT_PLAN.md) para definir el dominio sin `www` como principal y redirigir `www.criticadeguerrero.com.mx`.
3. Aplicar el [plan de SEO y metadatos para redes sociales](docs/SEO_AND_SOCIAL_METADATA_PLAN.md) al estabilizar el dominio público.
4. Elegir y probar el [plan de CMS y acceso editorial](docs/CMS_AND_EDITOR_ACCESS_PLAN.md) antes de dar acceso a un editor.
5. Construir las [plantillas de notas y secciones](docs/ARTICLE_AND_CATEGORY_TEMPLATE_PLAN.md) con ejemplos antes de migrar contenido histórico.

## Principios de trabajo

- El español es el idioma editorial principal.
- El inglés será una edición complementaria y revisada; no sustituirá automáticamente el periodismo en español.
- Las imágenes públicas se optimizan para que el sitio cargue rápido; los originales de alta resolución se conservan por separado en un archivo privado.
- Las cuentas de dominio, recuperación, facturación y publicación deben estar bajo control del medio, no depender de una sola cuenta personal.
- El futuro editor recibirá una cuenta individual e invitada para publicar contenido; no tendrá acceso a GitHub, Netlify, DNS, registrador, analítica ni facturación.
- Nunca se guardan contraseñas, códigos de recuperación, llaves API, tokens, datos de pago ni configuraciones privadas en este repositorio.

## Documentación

### Inicio y operación

- [Lista de verificación de corte a producción](docs/PRODUCTION_CUTOVER_CHECKLIST.md)
- [Roadmap](docs/ROADMAP.md)
- [Operación y propiedad](docs/OPERATIONS_AND_OWNERSHIP.md)
- [Plan de hosting y crecimiento](docs/HOSTING_AND_GROWTH_PLAN.md)

### Planes de implementación

- [Plan de SEO y metadatos para redes sociales](docs/SEO_AND_SOCIAL_METADATA_PLAN.md)
- [Plan de dominio y redirecciones en Netlify](docs/NETLIFY_DOMAIN_AND_REDIRECT_PLAN.md)
- [Plan de CMS y acceso editorial](docs/CMS_AND_EDITOR_ACCESS_PLAN.md)
- [Plan de plantillas de notas y secciones](docs/ARTICLE_AND_CATEGORY_TEMPLATE_PLAN.md)

### Producto y contenido

- [Resumen del producto](docs/PRODUCT_BRIEF.md)
- [Arquitectura de información](docs/INFORMATION_ARCHITECTURE.md)
- [Sistema de diseño](docs/DESIGN_SYSTEM.md)
- [Modelo de contenido](docs/CONTENT_MODEL.md)
- [Arquitectura técnica](docs/TECHNICAL_ARCHITECTURE.md)
- [Estrategia de medios](docs/MEDIA_STRATEGY.md)
- [Plan de internacionalización](docs/INTERNATIONALIZATION_PLAN.md)
- [Plan de recuperación desde Wayback](docs/WAYBACK_CONTENT_RECOVERY_PLAN.md)

## Prioridades inmediatas

1. Configurar y verificar `criticadeguerrero.com.mx` en Netlify, con HTTPS y `www.criticadeguerrero.com.mx` como alias que redirige al dominio principal.
2. Añadir metadatos canónicos y sociales al sitio una vez que el dominio público esté listo.
3. Crear `robots.txt` y `sitemap.xml` cuando existan URLs públicas estables.
4. Integrar y probar un CMS en español con acceso editorial individual e invitado.
5. Crear plantillas reutilizables de notas y secciones, y publicar al menos una nota real de prueba antes de ampliar la recuperación histórica.
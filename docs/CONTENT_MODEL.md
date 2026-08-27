# Content Model

## Article

Every article should use a consistent record. Required values should be intentionally limited so editors can publish quickly.

```json
{
  "id": "2026-08-25-example-headline",
  "slug": "example-headline",
  "headline": "Titular de ejemplo",
  "dek": "Resumen opcional de una o dos líneas.",
  "section": "Política",
  "tags": ["Guerrero", "Acapulco"],
  "author": "Crítica de Guerrero",
  "publishedAt": "2026-08-25T08:30:00-06:00",
  "updatedAt": null,
  "heroImage": {
    "src": "/assets/images/example.jpg",
    "alt": "Descripción útil de la imagen",
    "caption": null,
    "credit": null
  },
  "featured": false,
  "breaking": false,
  "body": "Contenido del artículo"
}
```

### Required fields

- `headline`
- `slug`
- `section`
- `author` or editorial desk
- `publishedAt`
- `body`

### Recommended fields

- `dek`
- `heroImage.alt`
- `tags`
- `updatedAt`
- image caption and credit
- related-story references

## Section

```json
{
  "name": "Política",
  "slug": "politica",
  "description": "Cobertura política de Guerrero y México.",
  "navigationOrder": 1
}
```

## Author

```json
{
  "name": "Crítica de Guerrero",
  "slug": "redaccion",
  "bio": "Redacción de Crítica de Guerrero.",
  "image": null,
  "social": []
}
```

## Breaking item

A breaking item must link to an existing article or an approved live-update page.

```json
{
  "headline": "Titular de última hora",
  "url": "/2026/08/example-headline/",
  "publishedAt": "2026-08-25T08:30:00-06:00",
  "priority": 1,
  "expiresAt": "2026-08-26T08:30:00-06:00"
}
```

## Editorial safeguards

- Use original reporting or material the publication is authorized to publish.
- Record corrections with a visible update note on an article.
- Use accurate image credits and captions.
- Do not publish confidential personal information, credentials, or unverified allegations.
- Maintain a clear distinction between reporting, opinion, sponsored content, and announcements.

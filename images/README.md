# Imágenes de Show Rumba Latina

Este directorio contiene las imágenes optimizadas para producción (`AVIF`, `WebP`, `JPG`), el banner para redes sociales (`og-image.jpg`, < 300 KB para WhatsApp) y los códigos QR imprimibles (`qr-showrumbalatina.svg` / `.png`).

## Cómo reemplazar las imágenes atmosféricas por fotos reales de la orquesta
Si Jesús "Beto" Rojas Ochoa entrega fotografías oficiales de presentaciones en vivo:

1. Coloca tus fotos crudas en una carpeta temporal y ejecútalas con Pillow o reemplaza directamente manteniendo exactamente los nombres y dimensiones:
   - **Portada Hero (`1600×900` y `800×450`):**
     - `hero-stage-1600.avif`, `hero-stage-1600.webp`, `hero-stage-1600.jpg`
     - `hero-stage-800.avif`, `hero-stage-800.webp`, `hero-stage-800.jpg`
   - **Tarjetas de Eventos (`800×600`, proporción 4:3):**
     - `event-wedding.{avif,webp,jpg}` (Matrimonios / Bodas)
     - `event-quince.{avif,webp,jpg}` (Quinceañeros & Promociones)
     - `event-patronal.{avif,webp,jpg}` (Fiestas Patronales & Aniversarios)
     - `event-corporate.{avif,webp,jpg}` (Corporativos, Cenas & Serenatas)
   - **Banner WhatsApp / Facebook (`1200×630`, JPEG < 300 KB):**
     - `og-image.jpg`
2. Regenera los archivos y publica con costo $0:
   ```powershell
   npm run deploy:all
   ```

## Créditos y Licencias de Fotografía Editorial
Las fotografías atmosféricas de escenario y eventos provienen de **Wikimedia Commons** con licencias abiertas y gradación cromática local (*Obsidian & Warm Gold*):

* **`hero-stage`**: `Musicians_performing_on_stage_at_a_night_concert_featuring_vibrant_lights_and_energetic_atmosphere.jpg` (Licencia **CC BY 2.0**)
* **`event-wedding`**: `Wedding_reception_tables_and_benches_(Unsplash).jpg` (Licencia **CC0 / Dominio Público**)
* **`event-quince`**: `Bangkok,_Thailand,_Party,_Lights_and_sounds,_Electronic_music.jpg` (Licencia **CC BY 4.0**)
* **`event-patronal`**: `Beach-Please-2022-crowd-stage-lights-night-performance.jpg` (Licencia **CC BY-SA 4.0**)
* **`event-corporate`**: `Músico_con_Guitarra_Requinto.jpg` (Licencia **CC BY 4.0**)


# ml-interview

Bienvenido al proyecto **ml-interview**. Aquí encontrarás la implementación de un cliente y servidor para buscar productos de MercadoLibre

## Instrucciones

### Para correr el cliente:

```bash
cd client
npm run start
```

### Para correr el servidor:

```bash
cd server
npm run start
```

## Casos bordes abarcados

- **Breadcrumb de la categoría**: En la página de detalle de un ítem, el breadcrumb se pasa como variable desde la página anterior. Esto significa que, si se refresca la página, se pierde la información, ya que el endpoint de ML de detalle del ítem no proporciona el breadcrumb.

## Autor

**Lucas Alamos**
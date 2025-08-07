# Usa una imagen oficial y ligera de Nginx como base
FROM nginx:alpine

# Copia todo el contenido de tu proyecto (HTML, CSS, JS) al directorio web de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80 (el puerto por defecto de Nginx) para que el contenedor pueda recibir tráfico
EXPOSE 80

# El comando para iniciar Nginx ya está incluido en la imagen base, por lo que no es necesario añadirlo.
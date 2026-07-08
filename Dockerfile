# Stage 1: build the Vite SPA
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# BASE controls Vite's base path. Default "/" makes the image work standalone at
# the web root (docker run -p 8080:80 ...). The lernmodule deploy overrides it to
# "/strudel-kurs/" via a compose build arg so assets resolve behind Traefik.
ARG BASE=/
ENV STRUDEL_BASE=${BASE}
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine
LABEL org.opencontainers.image.title="Musik & Code (Strudel-Kurs)" \
      org.opencontainers.image.description="Programmiergrundlagen spielerisch mit Strudel-Live-Coding — einfache Sprache, 9 Kapitel"
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:18 as node
COPY . .
RUN npm install
RUN npm run build

FROM caddy/caddy:2.8.0
COPY --from=node /app/dist/facility-gestao /srv
EXPOSE 80

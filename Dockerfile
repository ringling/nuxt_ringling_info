FROM node:24-alpine
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

COPY . .
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

# Run as the unprivileged node user; the app only reads its files at runtime.
USER node

ENTRYPOINT ["node", ".output/server/index.mjs"]
FROM node:18-alpine AS builder

# Installer les dépendances système nécessaires pour Prisma
RUN apk add --no-cache bash libc6-compat openssl

WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances Node
RUN npm ci

# Copier le reste du projet (y compris le dossier prisma)
COPY . .

# Builder le projet TypeScript
RUN npm run build

# Stage final
FROM node:18-alpine

RUN apk add --no-cache bash libc6-compat openssl

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Exposer le port
EXPOSE 3000

# Commande par défaut pour démarrer l'app
CMD ["node", "dist/index.js"]

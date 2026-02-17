# Usa un'immagine Node leggera
FROM node:20-alpine

# Crea cartella app
WORKDIR /app

# Copia package.json e lock file
COPY package*.json ./

# Installa solo dipendenze production
RUN npm install --omit=dev

# Installa la cli
RUN npm install @nestjs/cli

# Copia tutto il progetto
COPY . .

# Build dell'app Nest
RUN npm run build

# Espone la porta di Nest (default 3000)
EXPOSE 3000

# Avvia l'app
CMD ["npm", "run", "start"]

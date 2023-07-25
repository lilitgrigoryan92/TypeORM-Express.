FROM node

WORKDIR /app

COPY package*.json ./
COPY dist/ ./dist

RUN npm install


CMD ["node", "dist/app.js"]

# Stage 1: Build
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Runtime
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["node", "index.js"]


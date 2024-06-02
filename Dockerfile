# Use a imagem oficial do Node.js como base
FROM node:latest

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências, incluindo o cliente MongoDB
RUN npm install mongodb

# Copie o resto do código para o diretório de trabalho
COPY . .

# Exponha a porta em que o servidor Express irá escutar
EXPOSE 3000

# Comando para iniciar o servidor em modo de desenvolvimento
CMD ["npm", "run", "dev"]
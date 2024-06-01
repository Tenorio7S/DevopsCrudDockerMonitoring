FROM node:latest

# Cria o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho do contêiner
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o diretório de trabalho do contêiner
COPY . .

# Exponha a porta em que o aplicativo irá rodar
EXPOSE 3000

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["node", "app.js"]


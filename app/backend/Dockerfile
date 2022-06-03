# Cria a imagem
FROM node:16-alpine 

# Define o diretório de trabalho
WORKDIR /app

# Copia  o diretório para dentro da imagem
COPY package*.json ./

# Prepara a imagem para rodar os apps
RUN npm install

# Fazer a cópia dos demais arquivos para dentro do contêiner
COPY . .

# Porta que será utilizada por nossa aplicação dentro do contêiner
EXPOSE 3001

# Inicia um comando ao executar os contêiners
ENTRYPOINT ["npm", "start"]

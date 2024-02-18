FROM --platform=${BUILDPLATFORM} node:20-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i --ignore-scripts

COPY . ./
RUN npm run build

CMD [ "npm", "run", "preview" ]

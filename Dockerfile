FROM cypress/included:7.5.0
ENV NODE_ENV=production
RUN mkdir /code
WORKDIR /code
COPY package.json .
RUN npm install
COPY . .
RUN npm install
ENTRYPOINT []
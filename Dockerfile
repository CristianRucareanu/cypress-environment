FROM cypress/included:7.5.0
ENV NODE_ENV=production
RUN mkdir /code
WORKDIR /code
COPY . /code
RUN npm install
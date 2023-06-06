FROM cypress/included:7.5.0
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "test"]

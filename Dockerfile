FROM cypress/included:7.5.0
ENV NODE_ENV=production
COPY . .
RUN npm install
RUN chown -R node /usr/src/app
USER node

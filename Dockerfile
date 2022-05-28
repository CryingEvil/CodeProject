FROM node:14-alpine
WORKDIR  \my-project-1
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]
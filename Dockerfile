# Install dependencies and build
FROM node:lts-alpine AS builder
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git && rm -rf /var/cache/apk/* > /dev/null 2>&1
WORKDIR /opt/app
COPY . .
ENV NODE_ENV=production
RUN npm run init
RUN npm run ci
RUN npm run build

# Copy and run
FROM node:lts-alpine AS runner
RUN apk add vips-dev
WORKDIR /opt/app
ENV NODE_ENV=production
COPY --from=builder /opt/app ./
ENV PATH /opt/app/node_modules/.bin:$PATH
EXPOSE 80
CMD ["npm", "run","start"]
 
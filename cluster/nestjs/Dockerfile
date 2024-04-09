FROM node:20 as build

ARG IMAGE_ENV=development
WORKDIR /app

COPY src src
COPY tests tests
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY start.sh start.sh
RUN npm install
RUN npm run compile

# RUN ./run-tests.sh

# ===============================================================================================================================
FROM node:20-bullseye-slim as deploy

ARG IMAGE_ENV=development

RUN echo "in deploy stage ${IMAGE_ENV}"
RUN apt update -y && apt install -y curl unzip net-tools procps vim jq
RUN echo alias l=\'ls -la\' >> ~/.bashrc

WORKDIR /app

COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json
COPY --from=build /app/node_modules /app/node_modules
RUN echo IMAGE_ENV=${IMAGE_ENV}

RUN if [ "x$IMAGE_ENV" = "xproduction" ] ; then echo "THIS IS PRODUCTION" ; else echo "THIS IS NOT PRODUCTION"  ; fi
RUN if [ "x$IMAGE_ENV" = "xproduction" ] ; then npm install --omit=dev ; else npm install ; fi

COPY --from=build /app/src /app/src
COPY --from=build /app/tests /app/tests
COPY --from=build /app/dist /app/dist
COPY --from=build /app/tsconfig.json /app/tsconfig.json
COPY --from=build /app/start.sh /app/start.sh

RUN if [ "x$IMAGE_ENV" = "xproduction" ] ; then rm -rf .app/src; fi
RUN if [ "x$IMAGE_ENV" = "xproduction" ] ; then rm -rf .app/tests; fi
RUN if [ "x$IMAGE_ENV" = "xproduction" ] ; then rm -rf tsconfig.json; fi

RUN chmod +x /app/start.sh
RUN ls -la

EXPOSE 3000

CMD ["./start.sh"]

FROM node:15-alpine

WORKDIR /user/demarketplace

COPY . .

ARG REACT_APP_CONTRACTADDR
ENV REACT_APP_CONTRACTADDR=$REACT_APP_CONTRACTADDR

ARG REACT_APP_EXPLORER
ENV REACT_APP_EXPLORER=$REACT_APP_EXPLORER

ARG REACT_APP_INFURA_IPFS_SECRET
ENV REACT_APP_CONTRACTADDR=$REACT_APP_INFURA_IPFS_SECRET

ARG REACT_APP_INFURA_IPFS_PROJECTID
ENV REACT_APP_INFURA_IPFS_PROJECTID=$REACT_APP_INFURA_IPFS_PROJECTID

RUN npm install -g serve 
RUN npm install --production
RUN npm run build --production

ENV NODE_ENV production

EXPOSE 8080

ENV PORT 8080

CMD ["serve", "-s", "-l", "8080", "./build"]


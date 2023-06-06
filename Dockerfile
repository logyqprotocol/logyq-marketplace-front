# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/demarketplace

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./
RUN npm ci


# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /usr/demarketplace
COPY --from=deps /usr/demarketplace/node_modules ./node_modules
COPY . .

#Backend env
#ARG NEXT_PUBLIC_VARNAME_ENV
#ENV NEXT_PUBLIC_VARNAME_ENV=$NEXT_PUBLIC_VARNAME_ENV


# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

#RUN yarn build

# If using npm comment out above and use below instead
RUN npm run build && npm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /usr/demarketplace

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /usr/demarketplace/public ./public
COPY --from=builder /usr/demarketplace/node_modules ./node_modules
COPY --from=builder /usr/demarketplace/package.json ./package.json

# Automatically leverage output traces to reduce image size
 
# https://nextjs.org/docs/advanced-features/output-file-tracing
#COPY --from=builder --chown=nextjs:nodejs /usr/demarketplace/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/demarketplace/.next ./.next

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]

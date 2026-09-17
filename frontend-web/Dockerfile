FROM oven/bun:latest

WORKDIR /app

# Copy package files
COPY package.json .

# Install dependencies
RUN bun install

# Copy application
COPY index.tsx .

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD bun run -e "import http from 'http'; http.get('http://localhost:3000/health', (r) => r.statusCode === 200 ? process.exit(0) : process.exit(1))" || exit 1

# Start application
CMD ["bun", "run", "index.tsx"]


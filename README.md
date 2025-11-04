# Across Protocol Data Provider

Data provider plugin for Across Protocol bridge metrics.

## Quick Start

```bash
# Install dependencies
bun install

# Run tests
bun test
```

## Running the Web UI

You need **two servers** running simultaneously:

**Terminal 1 - Plugin Server (port 3014):**
```bash
cd packages/_plugin_template
npm run dev
```

**Terminal 2 - Web Server (port 3001):**
```bash
cd apps/web
npm run dev
```

Open http://localhost:3001 in your browser.

## Configuration

Create `apps/web/.env`:

```bash
DATA_PROVIDER_API_KEY=
DATA_PROVIDER_BASE_URL=https://app.across.to/api
DATA_PROVIDER_TIMEOUT=30000
```

## Data Sources

| Metric | Endpoint | Source |
|--------|----------|--------|
| Rates & Fees | `/suggested-fees` | Across API |
| Liquidity | `/limits` | Across API |
| Assets | `/swap/tokens` | Across API |
| Volume | `/bridge/19` | DefiLlama API |

## Architecture

- **Plugin Server**: Module federation remote at port 3014
- **Web Server**: Next.js app at port 3001
- **Runtime**: `packages/api/src/runtime.ts` loads plugin with ID `@across/data-provider`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 500 errors | Check both servers are running |
| Empty data | Verify token addresses are 42 characters |
| Port in use | `pkill -f "next dev"` or `pkill -f rspack` |

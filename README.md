# Across Protocol Data Provider

Data provider plugin for Across Protocol bridge metrics.

## Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test
```

## Running the Web UI

Simply run from the root directory:

```bash
npm run dev
```

This will start both servers simultaneously:
- **Plugin Server** on port 3014
- **Web Server** on port 3001

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


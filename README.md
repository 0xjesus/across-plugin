# Across Protocol Data Provider

Data provider plugin for Across Protocol bridge metrics.

## Provider

- **Across Protocol**: [across.to](https://across.to/)
- **API**: [Across v2 API](https://docs.across.to/v/v3-deprecated/api-reference/v2-api)

## Data Sources

| Metric | Endpoint | Source |
| :--- | :--- | :--- |
| Rates & Fees | `/suggested-fees` | Across API |
| Liquidity | `/limits` | Across API |
| Assets | `/swap/tokens` | Across API |
| Volume | `/bridge/across` | DefiLlama API |

## Setup

```bash
# Install
bun install

# Run dev server
bun dev

# Run tests
bun test
```

## Configuration

Optional `.env` variables:

- `ACROSS_BASE_URL` - API base URL (default: `https://across.to/api/v2`)
- `ACROSS_TIMEOUT` - Request timeout in ms (default: `15000`)

## Features

- Automatic retries with exponential backoff
- Rate limiting with token bucket algorithm
- Price caching
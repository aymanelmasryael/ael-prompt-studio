# Security Model

## Threat Model

| Asset | Threat | Mitigation |
|-------|--------|------------|
| API keys | XSS reading sessionStorage | Cleared on tab close |
| API keys | Third-party script exfiltration | Zero external scripts |
| API keys | Server-side leakage | No backend exists |
| Prompt content | Eavesdropping | HTTPS to providers only |
| Session data | Cross-tab leak | BroadcastChannel same-origin |

## Key Storage

Keys are stored in sessionStorage under the prefix ael-prompt-key-<providerId>.

Why sessionStorage:
- Cleared when tab closes
- Not shared between tabs
- Not persisted to disk
- Simpler to audit than IndexedDB

Why not localStorage: API keys are sensitive and should not survive browser restart without re-confirmation.

## No Backend

AEL Prompt Studio has no backend. All API calls go directly from the browser to the provider.

There is no proxy server, no logging middleware, and no analytics.

## CORS Notes

- OpenAI: Allows browser calls with Authorization Bearer
- Anthropic: Requires anthropic-dangerous-direct-browser-access header
- Google: Allows browser calls with API key in query
- Groq: Allows browser calls with Authorization Bearer

For production apps, always proxy API calls through your own backend.

## Reporting a Vulnerability

Email security@aymanelmasry.com instead of opening public issues.

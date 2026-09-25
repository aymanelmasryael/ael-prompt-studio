# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x     | Active    |

## Reporting a Vulnerability

Please do not open public issues for security findings.

Email security@aymanelmasry.com with:
1. Description of the vulnerability
2. Steps to reproduce
3. Potential impact
4. Suggested mitigation (if any)

We acknowledge within 48 hours and provide an assessment within 5 business days.

## Threat Model

AEL Prompt Studio is a client-side only application.

| Asset | Threat | Mitigation |
|-------|--------|------------|
| API keys | XSS reading sessionStorage | Cleared on tab close |
| API keys | Server-side leakage | No backend exists |
| Prompt content | Eavesdropping | HTTPS to providers |
| Session data | Cross-tab leak | BroadcastChannel same-origin |

## Responsible Disclosure

We follow a 90-day coordinated disclosure policy.

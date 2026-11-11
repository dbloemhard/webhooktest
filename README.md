# IP Echo Webhook

Returns the caller's IP as JSON. Use it as a Marketo webhook target to see which egress IP Marketo calls from.

## Deploy (free)
1. Push this folder to a GitHub repo.
2. At vercel.com: **Add New > Project**, import the repo, click Deploy.
3. Your endpoint: `https://<project>.vercel.app/` (or `/api/ip`).

Note: GitHub Pages can't do this (static only, no caller IP).

## Test
    curl -X POST https://<project>.vercel.app/

## Marketo
Admin > Webhooks > New Webhook: URL = your endpoint, Request Type = POST (or GET),
Response Format = JSON. Trigger it from a smart campaign (Call Webhook), then check
the response in the lead's activity log, or Vercel > Logs.

Marketo's egress IPs can vary by pod, so call it several times and compare.

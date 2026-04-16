# Build and deploy your personal API
this is a node.js REST API, built with Express. It displays three endpoints and is deployed behind an Nginx reverse proxy.

##How to run locally
- Clone the repo
- Install dependencies
- Start the server
- Access API locally

## Base URL
http://35.177.25.3

## Summary
- Build the api using node.js/express
- Deploy it with nginx proxy server
- Keep service alive using pm2

## Endpoints
Get / - should return "app is running"
Get /health - should return "healthy"
Get /me - should return "name": "David Okunade", "email": "okunadedavid4@gmail.com", "github": "https://github.com/okunadedavid"


# Personal website

## Deployment

Execute
```
docker build -t ringling/personal-website .
docker push ringling/personal-website
```

go to DigitalOcean website and execute "deploy" in "Actions" in personal-website app

## Content
https://content.nuxtjs.org/guide/writing/document-driven





Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production


### Deployment

Requiures `doctl` - https://docs.digitalocean.com/reference/doctl/how-to/install/

Run `./deploy.sh`





Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

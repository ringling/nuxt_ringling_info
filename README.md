# Personal website

## Google Search Console

https://search.google.com/search-console/index/drilldown?resource_id=https%3A%2F%2Fwww.ringling.info%2F&item_key=CAMYFyAC&hl=da

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

Run `npm run deploy`





Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


## Grapics


### Midjourney prompts
```
3-d model, relaxing, blue and fancy paper art, white background
3-d model, artificial intelligence, blue and fancy paper art, white background
3-d model, quantum computer, blue and fancy paper art, white background

3-d model, curriculum vitae, blue and fancy paper art, white background
3-d model, image mosaic, blue and fancy paper art, white background

```
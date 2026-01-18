# Personal website

## Google Search Console

https://search.google.com/search-console/index/drilldown?resource_id=https%3A%2F%2Fwww.ringling.info%2F&item_key=CAMYFyAC&hl=da

## Deployment

Execute
```
docker build -t ringling/personal-website .
docker push ringling/personal-website
```

go to Hetzner Cloud console and execute the deploy workflow for the personal-website app

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

Requires Hetzner server access (SSH)

Run `npm run deploy`


#### Fix gpg lock freeze

```bash
ls -l ~/.gnupg/**/*.lock
rm ~/.gnupg/[name-of-the-stale-lock-file].lock
gpgconf --reload gpg-agent
```

https://gist.github.com/bahadiraraz/f2fb15b07e0fce92d8d5a86ab33469f7


__Docker Build command__

```bash
pass -c Hetzner/www_ringling
ssh root@157.180.64.13 # cmd-v
cd nuxt_ringling_info
git pull && docker build -t ringling/personal-website . && docker stop ringling_info && docker rm ringling_info && docker run -d --name ringling_info -p 8080:3000 ringling/personal-website
```


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

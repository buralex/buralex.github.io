# buralex.github.io

My personal website: [buralex.github.io](https://buralex.github.io)

Built to showcase my work and provide an easy way to get in touch.

## Updating the CV

Replace [the source PDF](./public/files/Oleksandr_Burlachenko_CV.pdf), then run
`npm run build` and `npm run deploy`. The Next.js configuration generates a
PDF filename using the first 12 hexadecimal characters of its SHA-256 hash
and uses it for both CV links, so changed content
gets a new URL without relying on browser cache expiration. Generated PDFs are
ignored by Git; keep updating only the original file. An already-open page must
be refreshed after deployment to pick up its new link.

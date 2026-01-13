# thetextilecode.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/58786a3a-22f0-4464-af50-0286ea2c3bed/deploy-status)](https://app.netlify.com/sites/thetextilecode/deploys)

Note: Typings are not yet fully implemented.

## Installation

`npm install`

## Build & Run

`npm run build`
`npm start`

## Development

`npm run dev`

Please do not modify the `next-env.d.ts` file. It ensures Next.js types are picked up by the TypeScript compiler. If you need to add an interface please add it to `types.d.ts`.

## Other Commands

Lint:
`npm run lint`

Sass:
`npm run sass`

## Components

### Tooltippy

Pass a tooltip from within your MDX file using React Bootstrap's [Tooltip](https://react-bootstrap.netlify.app/components/overlays/#tooltips),
and a custom wrapper for it:

```mdxjs
import Tooltippy from "./Tooltippy";

## Hello
An <Tooltippy tooltipText={`Free as in free speech, not free beer.`} triggerText={`inline`}/> tooltip.
```

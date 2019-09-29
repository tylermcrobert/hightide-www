# 🌴 High Tide NYC 🌴

## Overview

The site is built on React/Next.js with Prismic CMS using Next’s static export function. Static export allows the site to be hosted without running a server.

The site uses serverless functions to request data from Spotify’s API because it requires a server-side OAuth connection. Note: Netlify offers serverless functions to run for free up until a point so we'll have to keep an eye on that.

## File Structure

```
/components
  /prismic
  /slices
/pages
/prismic
/static
/style
/templates
/util
```

- **`/components`** - Houses all reusable components.

  - **`/prismic`** -Reusable site blocks powered by prismic data.
  - **`/slices`** - Code for reusable slices such as `Text Block` and `Image Block`.

- **`/pages`** - Pages of the application, each file will automatically match a route. [See Next.js docs for more info](https://nextjs.org/docs#dynamic-routing).

- **`/static`** - Houses all static files like fonts and favicon

- **`/style`** - Contains Styled components theme, global style, and utility functions for modularscale.

- **`/templates`** - UI for pages. Use data props to parse format and style page components within this directory. [see more](#page-templating)

- **`/util`** - utility functions

- **`/prismic`** - Version control for Prismic custom type JSON

- **`/middleware`** - Middleware, mostly for pages to use in `getInitialProps`

  - **`/prismic`** - utility functions for Prismic.

## Page Building

```jsx
import { Client } from 'middleware/prismic'
import ContactTemplate from 'templates/contact'

function ExamplePage() {
  return (
    <React.Fragment>
      <Meta title="Contact" />
      <ContactTemplate contact={contact} />
    </React.Fragment>
  )
}

ExamplePage.getInitialProps = async ({ req }) => {
  const contact = await Client(req).getSingle('contact')
  return { contact }
}
```

### Templating

The `pages` directory is used only to fetch data. This data is then routed to it's accompanying template in `/template/`. This is because we can't house other files (like `./Styled` in the `/pages` directory)

### Prismic fetch

Use `Client` utility function in `/middleware/prismic` for fetching data to avoid reinitializing API. Be sure to pass it the `req` object.

## Styling

Styling is done with Styled Components.

#### Structure

In most cases, styled components are imported as a compound component. Typical structure is as follows:

```
/ExampleComponent
  Styled.js
  index.js
```

- **`index.js`** - Component logic
- **`styled.js`** - File where styled components are housed.

in `Styled.js`:

```javascript
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default { Wrapper, Title }
```

in `index.js`:

```jsx
import React from 'react'
import Styled from './Styled'

function Component() {
  return (
    <Styled.Wrapper>
      <Styled.Title>I'm an Example Title</Styled.Title>
    </Styled.Wrapper>
  )
}
```

### Theming

Themes are used wherever possible. See full documentation on theming [here](https://www.styled-components.com/docs/advanced#theming).

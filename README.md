# 🌴 High Tide NYC 🌴

Site for High Tide NYC. This site is built with Next.js. [See Next's docs to learn more](https://nextjs.org/docs).

## Page Structure

```
/components
  /prismic
/pages
/prismic
/static
/style
/templates
/util
```

- **`/components`** - Houses all reusable components.

  - **`/prismic`** -Reusable site blocks powered by prismic data.

- **`/pages`** - Pages of the application, each file will automatically match a route. [See Next.js docs for more info](https://nextjs.org/docs#dynamic-routing).

- **`/static`** - Houses all static files like fonts and favicon

- **`/style`** - Contains Styled components theme, global style, and utility functions for modularscale.

- **`/templates`** - UI for pages. Use data props to parse format and style page components within this directory. [see more](#page-templating)

- **`/util`** - utility functions

  - **`/prismic`** - utility functions for Prismic.

## Page Templating

The `pages` directory is used only to fetch data. This data is then routed to it's accompanying template in `/template/`. This is because we can't house other files (like `./Styled` in the `/pages` directory)

## Prismic fetch

Use `Client()` utility function in `/util/prismic` for fetching data to avoid reinitializing API.

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

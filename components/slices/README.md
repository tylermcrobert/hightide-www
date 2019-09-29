# Slices

This directory holds the components that are used for prismic slices. Each component takes a `data` object.

in custom type component:

```jsx
slices.map(slice => {
  switch (slice.slice_type) {
    case 'image':
      return <Image data={slice} />
    case 'text':
      return <Text data={slice} />
    default:
      console.log(`nothing built for ${slice.slice_type}`)
      return null
  }
}
```

in slice component:

```jsx
function Image({ data }) {
  return <img src={data.image.url} />
}
```

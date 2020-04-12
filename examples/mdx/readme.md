# MDX + Next.js

```sh
npm install
npm run dev
```

## Components

Styling with these components was done with the `style` prop with `style` objects. In a react NextJS project you would use [styled-jsx](https://github.com/zeit/styled-jsx)

### Sample Button
This is a button with some padding and border radius. Nothing fancy here.

### CodeBlock
This component is made with [react-live](https://github.com/FormidableLabs/react-live) components. For readability as little styling and configuration was applied to make this sample work.

When the MDXProvider encounters a code block (i.e. using three backticks) it will use this CodeBlock component. See [_app.js](pages/_app.js) for reference.

If the code block contains `live=true` it will display the LiveEditor component, along with the LivePreview component.




## Troubleshooting notes
Currently getting this error:

```
@mdx-js/mdx: 
The mdPlugins option has been deprecated in favor of remarkPlugins
Support for mdPlugins will be removed in MDX v2
```

**However**, when I went to visit [remark-mdx](https://www.npmjs.com/package/remark-mdx) - the new version - it says it's in Alpha, so I haven't switched this over yet.

[See documentation](https://mdxjs.com/getting-started/next)

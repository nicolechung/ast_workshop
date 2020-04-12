# AST workshop

Abstract Syntax trees and what you can do with them in Javascript

# Installation

Run the install script:

```
./install.sh
```

## Parsing Examples

Parsing a simple `console.log`:

```
npm run parse-console
```

Parsing a simple `jsx`:


```
npm run parse-jsx
```

## Plugin examples

Name change example:

```
npm test change-name
```

## MDX Example

```sh
cd examples/mdx
npm run dev
```


### MDAST

Markdown Abstract Syntax Tree

Below is the spec:
https://github.com/syntax-tree/mdast

`Remark` is the processor:
https://github.com/remarkjs/remark

### HAST

Hypertext Abstract Syntax Tree format

Below is the spec:
https://github.com/syntax-tree/hast

`Rehype` is the processor:
https://github.com/rehypejs/rehype

### Converting markdown to HTML

Plugin to transform:
https://github.com/remarkjs/remark-rehype

## A note about solutions files
Solutions are **excluded** from tests (see `testPathIgnorePatterns` in package.json) and are meant as a reference only. 


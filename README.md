
This is a project setup example for how to use TypeScript and JSX
without npm, webpack, React or similar libraries.

Instead, this is using [esbuild](https://github.com/evanw/esbuild), a faster JavaScript bundler, transpiler
written in [Go](https://go.dev/). Esbuild supports TypeScript out of the box with no dependencies.

If you don't have Go installed, there are other ways to install esbuild, but you'll have to adjust the Makefile.

These days, the vanilla DOM manipulation API in JS is mature enough for
many simple projects.

To build the project:
```
make build
```

You can also build continuously, when source files change:
```
make watch
```
ESBUILD=github.com/evanw/esbuild/cmd/esbuild@latest

watch:
	go run $(ESBUILD) index.tsx --outfile=bundle.js --jsx-factory=JSX.el --jsx-fragment=JSX.frag --bundle --watch

build:
	go run $(ESBUILD) index.tsx --outfile=bundle.js --jsx-factory=JSX.el --jsx-fragment=JSX.frag --bundle
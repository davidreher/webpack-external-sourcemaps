# webpack-external-sourcemaps
External sourcemaps in webpack are broken. This is a repo to repro this issue.

## How to build this demo?

```bash
cd child
npm install
npm run build
cd ../parent
npm install
npm link ../child
npm run build
open dist/index.html
```

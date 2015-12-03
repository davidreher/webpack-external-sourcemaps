# webpack-external-sourcemaps
External sourcemaps in webpack are broken. This is a repo to repro this issue.

## How to build this demo?

```bash
cd child
npm run prepare
cd ../parent
npm run prepare
open dist/index.html
```

### Resulting index.js without webpack/source-map-loader
```javascript
var ChildService = (function () {
    function ChildService() {
    }
    ChildService.prototype.doSomething = function () {
        return "Hello World";
    };
    return ChildService;
})();
exports.ChildService = ChildService;
//# sourceMappingURL=index.js.map


/*****************
 ** WEBPACK FOOTER
 ** ../child/dist/index.js
 ** module id = 1
 ** module chunks = 0
 **/
```

### Resulting index.ts with webpack/source-map-loader
```javascript
export class ChildService {
    doSomething() {
        return "Hello World";
    }
}


/** WEBPACK FOOTER **
 ** C:/Users/fraetz.BAG/Documents/Projects/webpack-external-sourcemaps/child/index.ts
 **/
```

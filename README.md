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

### Resulting index.js
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

/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/var O=function(e,r){return O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},O(e,r)};export function __extends(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");O(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}export var __assign=function(){return __assign=Object.assign||function(r){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},__assign.apply(this,arguments)};export function __rest(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]]);return t}export function __decorate(e,r,t,n){var i=arguments.length,o=i<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,r,t,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(o=(i<3?a(o):i>3?a(r,t,o):a(r,t))||o);return i>3&&o&&Object.defineProperty(r,t,o),o}export function __param(e,r){return function(t,n){r(t,n,e)}}export function __esDecorate(e,r,t,n,i,o){function a(m){if(m!==void 0&&typeof m!="function")throw new TypeError("Function expected");return m}for(var c=n.kind,u=c==="getter"?"get":c==="setter"?"set":"value",s=!r&&e?n.static?e:e.prototype:null,l=r||(s?Object.getOwnPropertyDescriptor(s,n.name):{}),p,_=!1,f=t.length-1;f>=0;f--){var d={};for(var y in n)d[y]=y==="access"?{}:n[y];for(var y in n.access)d.access[y]=n.access[y];d.addInitializer=function(m){if(_)throw new TypeError("Cannot add initializers after decoration has completed");o.push(a(m||null))};var h=(0,t[f])(c==="accessor"?{get:l.get,set:l.set}:l[u],d);if(c==="accessor"){if(h===void 0)continue;if(h===null||typeof h!="object")throw new TypeError("Object expected");(p=a(h.get))&&(l.get=p),(p=a(h.set))&&(l.set=p),(p=a(h.init))&&i.unshift(p)}else(p=a(h))&&(c==="field"?i.unshift(p):l[u]=p)}s&&Object.defineProperty(s,n.name,l),_=!0}export function __runInitializers(e,r,t){for(var n=arguments.length>2,i=0;i<r.length;i++)t=n?r[i].call(e,t):r[i].call(e);return n?t:void 0}export function __propKey(e){return typeof e=="symbol"?e:"".concat(e)}export function __setFunctionName(e,r,t){return typeof r=="symbol"&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:t?"".concat(t," ",r):r})}export function __metadata(e,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,r)}export function __awaiter(e,r,t,n){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function c(l){try{s(n.next(l))}catch(p){a(p)}}function u(l){try{s(n.throw(l))}catch(p){a(p)}}function s(l){l.done?o(l.value):i(l.value).then(c,u)}s((n=n.apply(e,r||[])).next())})}export function __generator(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(s){return function(l){return u([s,l])}}function u(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(t=0)),t;)try{if(n=1,i&&(o=s[0]&2?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1],o=s;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(s);break}o[2]&&t.ops.pop(),t.trys.pop();continue}s=r.call(e,t)}catch(l){s=[6,l],i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}export var __createBinding=Object.create?function(e,r,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(r,t);(!i||("get"in i?!r.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,i)}:function(e,r,t,n){n===void 0&&(n=t),e[n]=r[t]};export function __exportStar(e,r){for(var t in e)t!=="default"&&!Object.prototype.hasOwnProperty.call(r,t)&&__createBinding(r,e,t)}export function __values(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}export function __read(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],a;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(c){a={error:c}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return o}export function __spread(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(__read(arguments[r]));return e}export function __spreadArrays(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),i=0,r=0;r<t;r++)for(var o=arguments[r],a=0,c=o.length;a<c;a++,i++)n[i]=o[a];return n}export function __spreadArray(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}export function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}export function __asyncGenerator(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(e,r||[]),i,o=[];return i={},c("next"),c("throw"),c("return",a),i[Symbol.asyncIterator]=function(){return this},i;function a(f){return function(d){return Promise.resolve(d).then(f,p)}}function c(f,d){n[f]&&(i[f]=function(y){return new Promise(function(h,m){o.push([f,y,h,m])>1||u(f,y)})},d&&(i[f]=d(i[f])))}function u(f,d){try{s(n[f](d))}catch(y){_(o[0][3],y)}}function s(f){f.value instanceof __await?Promise.resolve(f.value.v).then(l,p):_(o[0][2],f)}function l(f){u("next",f)}function p(f){u("throw",f)}function _(f,d){f(d),o.shift(),o.length&&u(o[0][0],o[0][1])}}export function __asyncDelegator(e){var r,t;return r={},n("next"),n("throw",function(i){throw i}),n("return"),r[Symbol.iterator]=function(){return this},r;function n(i,o){r[i]=e[i]?function(a){return(t=!t)?{value:__await(e[i](a)),done:!1}:o?o(a):a}:o}}export function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],t;return r?r.call(e):(e=typeof __values=="function"?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(o){t[o]=e[o]&&function(a){return new Promise(function(c,u){a=e[o](a),i(c,u,a.done,a.value)})}}function i(o,a,c,u){Promise.resolve(u).then(function(s){o({value:s,done:c})},a)}}export function __makeTemplateObject(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e}var R=Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r};export function __importStar(e){if(e&&e.__esModule)return e;var r={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return R(r,e),r}export function __importDefault(e){return e&&e.__esModule?e:{default:e}}export function __classPrivateFieldGet(e,r,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?e!==r||!n:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(e):n?n.value:r.get(e)}export function __classPrivateFieldSet(e,r,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?e!==r||!i:!r.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(e,t):i?i.value=t:r.set(e,t),t}export function __classPrivateFieldIn(e,r){if(r===null||typeof r!="object"&&typeof r!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?r===e:e.has(r)}export function __addDisposableResource(e,r,t){if(r!=null){if(typeof r!="object"&&typeof r!="function")throw new TypeError("Object expected.");var n,i;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=r[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=r[Symbol.dispose],t&&(i=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");i&&(n=function(){try{i.call(this)}catch(o){return Promise.reject(o)}}),e.stack.push({value:r,dispose:n,async:t})}else t&&e.stack.push({async:!0});return r}var C=typeof SuppressedError=="function"?SuppressedError:function(e,r,t){var n=new Error(t);return n.name="SuppressedError",n.error=e,n.suppressed=r,n};export function __disposeResources(e){function r(n){e.error=e.hasError?new C(n,e.error,"An error was suppressed during disposal."):n,e.hasError=!0}function t(){for(;e.stack.length;){var n=e.stack.pop();try{var i=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(i).then(t,function(o){return r(o),t()})}catch(o){r(o)}}if(e.hasError)throw e.error}return t()}export default{__extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator,__createBinding,__exportStar,__values,__read,__spread,__spreadArrays,__spreadArray,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault,__classPrivateFieldGet,__classPrivateFieldSet,__classPrivateFieldIn,__addDisposableResource,__disposeResources};function E(e){const r=[];typeof e=="number"&&r.push("code/timeOrigin",e);function t(i,o){r.push(i,o?.startTime??Date.now())}function n(){const i=[];for(let o=0;o<r.length;o+=2)i.push({name:r[o],startTime:r[o+1]});return i}return{mark:t,getMarks:n}}function x(){if(typeof performance=="object"&&typeof performance.mark=="function"&&!performance.nodeTiming)return typeof performance.timeOrigin!="number"&&!performance.timing?E():{mark(e,r){performance.mark(e,r)},getMarks(){let e=performance.timeOrigin;typeof e!="number"&&(e=performance.timing.navigationStart||performance.timing.redirectStart||performance.timing.fetchStart);const r=[{name:"code/timeOrigin",startTime:Math.round(e)}];for(const t of performance.getEntriesByType("mark"))r.push({name:t.name,startTime:Math.round(e+t.startTime)});return r}};if(typeof process=="object"){const e=performance?.timeOrigin;return E(e)}else return console.trace("perf-util loaded in UNKNOWN environment"),E()}function j(e){return e.MonacoPerformanceMarks||(e.MonacoPerformanceMarks=x()),e.MonacoPerformanceMarks}var T=j(globalThis),S=T.mark,te=T.getMarks;import*as g from"path";import"fs";import{fileURLToPath as I}from"url";import{createRequire as A}from"node:module";var D=A(import.meta.url),ae=g.dirname(I(import.meta.url)),M=process.platform==="win32";if(Error.stackTraceLimit=100,!process.env.VSCODE_HANDLES_SIGPIPE){let e=!1;process.on("SIGPIPE",()=>{e||(e=!0,console.error(new Error("Unexpected SIGPIPE")))})}function L(){try{typeof process.env.VSCODE_CWD!="string"&&(process.env.VSCODE_CWD=process.cwd()),process.platform==="win32"&&process.chdir(g.dirname(process.execPath))}catch(e){console.error(e)}}L();function U(e){if(!process.env.VSCODE_DEV)return;if(!e)throw new Error("Missing injectPath");D("node:module").register("./bootstrap-import.js",{parentURL:import.meta.url,data:e})}function G(){if(typeof process?.versions?.electron=="string")return;const e=D("module"),r=e.globalPaths,t=e._resolveLookupPaths;e._resolveLookupPaths=function(i,o){const a=t(i,o);if(Array.isArray(a)){let c=0;for(;c<a.length&&a[a.length-1-c]===r[r.length-1-c];)c++;return a.slice(0,a.length-c)}return a};const n=e._nodeModulePaths;e._nodeModulePaths=function(i){let o=n(i);if(!M)return o;const a=c=>c.length>=3&&c.endsWith(":\\");if(a(i)||(o=o.filter(c=>!a(g.dirname(c)))),process.env.HOMEDRIVE&&process.env.HOMEPATH){const c=g.dirname(g.join(process.env.HOMEDRIVE,process.env.HOMEPATH)),u=s=>g.relative(s,c).length===0;u(i)||(o=o.filter(s=>!u(g.dirname(s))))}return o}}import*as V from"path";import*as b from"fs";import{fileURLToPath as F}from"url";import{createRequire as k,register as $}from"node:module";import{createRequire as H}from"node:module";var N=H(import.meta.url),w={BUILD_INSERT_PRODUCT_CONFIGURATION:"BUILD_INSERT_PRODUCT_CONFIGURATION"};w.BUILD_INSERT_PRODUCT_CONFIGURATION&&(w=N("../product.json"));var v={"name":"Code","version":"1.98.2","distro":"de81a091068fb03e277543d4f4900db005edf9f3","author":{"name":"Microsoft Corporation"},"license":"MIT","main":"./out/main.js","type":"module","private":true,"scripts":{"test":"echo Please run any of the test scripts from the scripts folder.","test-browser":"npx playwright install && node test/unit/browser/index.js","test-browser-no-install":"node test/unit/browser/index.js","test-node":"mocha test/unit/node/index.js --delay --ui=tdd --timeout=5000 --exit","test-extension":"vscode-test","preinstall":"node build/npm/preinstall.js","postinstall":"node build/npm/postinstall.js","compile":"node ./node_modules/gulp/bin/gulp.js compile","watch":"npm-run-all -lp watch-client watch-extensions","watchd":"deemon npm run watch","watch-webd":"deemon npm run watch-web","kill-watchd":"deemon --kill npm run watch","kill-watch-webd":"deemon --kill npm run watch-web","restart-watchd":"deemon --restart npm run watch","restart-watch-webd":"deemon --restart npm run watch-web","watch-client":"node --max-old-space-size=8192 ./node_modules/gulp/bin/gulp.js watch-client","watch-clientd":"deemon npm run watch-client","kill-watch-clientd":"deemon --kill npm run watch-client","watch-extensions":"node --max-old-space-size=8192 ./node_modules/gulp/bin/gulp.js watch-extensions watch-extension-media","watch-extensionsd":"deemon npm run watch-extensions","kill-watch-extensionsd":"deemon --kill npm run watch-extensions","precommit":"node build/hygiene.js","gulp":"node --max-old-space-size=8192 ./node_modules/gulp/bin/gulp.js","electron":"node build/lib/electron","7z":"7z","update-grammars":"node build/npm/update-all-grammars.mjs","update-localization-extension":"node build/npm/update-localization-extension.js","smoketest":"node build/lib/preLaunch.js && cd test/smoke && npm run compile && node test/index.js","smoketest-no-compile":"cd test/smoke && node test/index.js","download-builtin-extensions":"node build/lib/builtInExtensions.js","download-builtin-extensions-cg":"node build/lib/builtInExtensionsCG.js","monaco-compile-check":"tsc -p src/tsconfig.monaco.json --noEmit","tsec-compile-check":"node node_modules/tsec/bin/tsec -p src/tsconfig.tsec.json","vscode-dts-compile-check":"tsc -p src/tsconfig.vscode-dts.json && tsc -p src/tsconfig.vscode-proposed-dts.json","valid-layers-check":"node build/lib/layersChecker.js","update-distro":"node build/npm/update-distro.mjs","web":"echo 'npm run web' is replaced by './scripts/code-server' or './scripts/code-web'","compile-cli":"gulp compile-cli","compile-web":"node ./node_modules/gulp/bin/gulp.js compile-web","watch-web":"node ./node_modules/gulp/bin/gulp.js watch-web","watch-cli":"node ./node_modules/gulp/bin/gulp.js watch-cli","eslint":"node build/eslint","stylelint":"node build/stylelint","playwright-install":"npm exec playwright install","compile-build":"node ./node_modules/gulp/bin/gulp.js compile-build","compile-extensions-build":"node ./node_modules/gulp/bin/gulp.js compile-extensions-build","minify-vscode":"node ./node_modules/gulp/bin/gulp.js minify-vscode","minify-vscode-reh":"node ./node_modules/gulp/bin/gulp.js minify-vscode-reh","minify-vscode-reh-web":"node ./node_modules/gulp/bin/gulp.js minify-vscode-reh-web","hygiene":"node ./node_modules/gulp/bin/gulp.js hygiene","core-ci":"node ./node_modules/gulp/bin/gulp.js core-ci","core-ci-pr":"node ./node_modules/gulp/bin/gulp.js core-ci-pr","extensions-ci":"node ./node_modules/gulp/bin/gulp.js extensions-ci","extensions-ci-pr":"node ./node_modules/gulp/bin/gulp.js extensions-ci-pr","perf":"node scripts/code-perf.js","update-build-ts-version":"npm install typescript@next && tsc -p ./build/tsconfig.build.json"},"dependencies":{"@microsoft/1ds-core-js":"^3.2.13","@microsoft/1ds-post-js":"^3.2.13","@parcel/watcher":"2.5.1","@types/semver":"^7.5.8","@vscode/deviceid":"^0.1.1","@vscode/iconv-lite-umd":"0.7.0","@vscode/policy-watcher":"^1.1.10","@vscode/proxy-agent":"^0.32.0","@vscode/ripgrep":"^1.15.10","@vscode/spdlog":"^0.15.0","@vscode/sqlite3":"5.1.8-vscode","@vscode/sudo-prompt":"9.3.1","@vscode/tree-sitter-wasm":"^0.1.3","@vscode/vscode-languagedetection":"1.0.21","@vscode/windows-mutex":"^0.5.0","@vscode/windows-process-tree":"^0.6.0","@vscode/windows-registry":"^1.1.0","@xterm/addon-clipboard":"^0.2.0-beta.81","@xterm/addon-image":"^0.9.0-beta.98","@xterm/addon-ligatures":"^0.10.0-beta.98","@xterm/addon-progress":"^0.2.0-beta.4","@xterm/addon-search":"^0.16.0-beta.98","@xterm/addon-serialize":"^0.14.0-beta.98","@xterm/addon-unicode11":"^0.9.0-beta.98","@xterm/addon-webgl":"^0.19.0-beta.98","@xterm/headless":"^5.6.0-beta.98","@xterm/xterm":"^5.6.0-beta.98","http-proxy-agent":"^7.0.0","https-proxy-agent":"^7.0.2","jschardet":"3.1.4","kerberos":"2.1.1","minimist":"^1.2.6","native-is-elevated":"0.7.0","native-keymap":"^3.3.5","native-watchdog":"^1.4.1","node-pty":"1.1.0-beta31","open":"^8.4.2","tas-client-umd":"0.2.0","v8-inspect-profiler":"^0.1.1","vscode-oniguruma":"1.7.0","vscode-regexpp":"^3.1.0","vscode-textmate":"9.2.0","yauzl":"^3.0.0","yazl":"^2.4.3"},"devDependencies":{"@playwright/test":"^1.50.0","@stylistic/eslint-plugin-ts":"^2.8.0","@types/cookie":"^0.3.3","@types/debug":"^4.1.5","@types/eslint":"^9.6.1","@types/gulp-svgmin":"^1.2.1","@types/http-proxy-agent":"^2.0.1","@types/kerberos":"^1.1.2","@types/minimist":"^1.2.1","@types/mocha":"^9.1.1","@types/node":"20.x","@types/sinon":"^10.0.2","@types/sinon-test":"^2.4.2","@types/trusted-types":"^1.0.6","@types/vscode-notebook-renderer":"^1.72.0","@types/webpack":"^5.28.5","@types/wicg-file-system-access":"^2020.9.6","@types/windows-foreground-love":"^0.3.0","@types/winreg":"^1.2.30","@types/yauzl":"^2.10.0","@types/yazl":"^2.4.2","@typescript-eslint/utils":"^8.8.0","@vscode/gulp-electron":"^1.36.0","@vscode/l10n-dev":"0.0.35","@vscode/telemetry-extractor":"^1.10.2","@vscode/test-cli":"^0.0.6","@vscode/test-electron":"^2.4.0","@vscode/test-web":"^0.0.62","@vscode/v8-heap-parser":"^0.1.0","@vscode/vscode-perf":"^0.0.19","@webgpu/types":"^0.1.44","ansi-colors":"^3.2.3","asar":"^3.0.3","chromium-pickle-js":"^0.2.0","cookie":"^0.7.2","copy-webpack-plugin":"^11.0.0","css-loader":"^6.9.1","cssnano":"^6.0.3","debounce":"^1.0.0","deemon":"^1.8.0","electron":"34.2.0","eslint":"^9.11.1","eslint-formatter-compact":"^8.40.0","eslint-plugin-header":"3.1.1","eslint-plugin-jsdoc":"^50.3.1","eslint-plugin-local":"^6.0.0","event-stream":"3.3.4","fancy-log":"^1.3.3","file-loader":"^6.2.0","glob":"^5.0.13","gulp":"^4.0.0","gulp-azure-storage":"^0.12.1","gulp-bom":"^3.0.0","gulp-buffer":"0.0.2","gulp-filter":"^5.1.0","gulp-flatmap":"^1.0.2","gulp-gunzip":"^1.0.0","gulp-gzip":"^1.4.2","gulp-json-editor":"^2.5.0","gulp-plumber":"^1.2.0","gulp-rename":"^1.2.0","gulp-replace":"^0.5.4","gulp-sourcemaps":"^3.0.0","gulp-svgmin":"^4.1.0","gulp-untar":"^0.0.7","husky":"^0.13.1","innosetup":"^6.4.1","istanbul-lib-coverage":"^3.2.0","istanbul-lib-instrument":"^6.0.1","istanbul-lib-report":"^3.0.0","istanbul-lib-source-maps":"^4.0.1","istanbul-reports":"^3.1.5","lazy.js":"^0.4.2","merge-options":"^1.0.1","mime":"^1.4.1","minimatch":"^3.0.4","minimist":"^1.2.6","mocha":"^10.8.2","mocha-junit-reporter":"^2.2.1","mocha-multi-reporters":"^1.5.1","npm-run-all":"^4.1.5","os-browserify":"^0.3.0","p-all":"^1.0.0","path-browserify":"^1.0.1","postcss":"^8.4.33","postcss-nesting":"^12.0.2","pump":"^1.0.1","rcedit":"^1.1.0","rimraf":"^2.2.8","sinon":"^12.0.1","sinon-test":"^3.1.3","source-map":"0.6.1","source-map-support":"^0.3.2","style-loader":"^3.3.2","ts-loader":"^9.5.1","ts-node":"^10.9.1","tsec":"0.2.7","tslib":"^2.6.3","typescript":"^5.8.0-dev.20250207","typescript-eslint":"^8.8.0","util":"^0.12.4","webpack":"^5.94.0","webpack-cli":"^5.1.4","webpack-stream":"^7.0.0","xml2js":"^0.5.0","yaserver":"^0.4.0"},"overrides":{"node-gyp-build":"4.8.1","kerberos@2.1.1":{"node-addon-api":"7.1.0"}},"repository":{"type":"git","url":"https://github.com/microsoft/vscode.git"},"bugs":{"url":"https://github.com/microsoft/vscode/issues"},"optionalDependencies":{"windows-foreground-love":"0.5.0"}};v.BUILD_INSERT_PACKAGE_CONFIGURATION&&(v=N("../package.json"));var B=w,J=v,q=k(import.meta.url),K=V.dirname(F(import.meta.url));if((process.env.ELECTRON_RUN_AS_NODE||process.versions.electron)&&$(`data:text/javascript;base64,${Buffer.from(`
	export async function resolve(specifier, context, nextResolve) {
		if (specifier === 'fs') {
			return {
				format: 'builtin',
				shortCircuit: true,
				url: 'node:original-fs'
			};
		}

		// Defer to the next hook in the chain, which would be the
		// Node.js default resolve if this is the last user-specified loader.
		return nextResolve(specifier, context);
	}`).toString("base64")}`,import.meta.url),globalThis._VSCODE_PRODUCT_JSON={...B},process.env.VSCODE_DEV)try{const e=q("../product.overrides.json");globalThis._VSCODE_PRODUCT_JSON=Object.assign(globalThis._VSCODE_PRODUCT_JSON,e)}catch{}globalThis._VSCODE_PACKAGE_JSON={...J},globalThis._VSCODE_FILE_ROOT=K;var P=void 0;function W(){return P||(P=X()),P}async function X(){S("code/willLoadNls");let e,r;if(process.env.VSCODE_NLS_CONFIG)try{e=JSON.parse(process.env.VSCODE_NLS_CONFIG),e?.languagePack?.messagesFile?r=e.languagePack.messagesFile:e?.defaultMessagesFile&&(r=e.defaultMessagesFile),globalThis._VSCODE_NLS_LANGUAGE=e?.resolvedLanguage}catch(t){console.error(`Error reading VSCODE_NLS_CONFIG from environment: ${t}`)}if(!(process.env.VSCODE_DEV||!r)){try{globalThis._VSCODE_NLS_MESSAGES=JSON.parse((await b.promises.readFile(r)).toString())}catch(t){if(console.error(`Error reading NLS messages file ${r}: ${t}`),e?.languagePack?.corruptMarkerFile)try{await b.promises.writeFile(e.languagePack.corruptMarkerFile,"corrupted")}catch(n){console.error(`Error writing corrupted NLS marker file: ${n}`)}if(e?.defaultMessagesFile&&e.defaultMessagesFile!==r)try{globalThis._VSCODE_NLS_MESSAGES=JSON.parse((await b.promises.readFile(e.defaultMessagesFile)).toString())}catch(n){console.error(`Error reading default NLS messages file ${e.defaultMessagesFile}: ${n}`)}}return S("code/didLoadNls"),e}}async function Y(){await W()}S("code/fork/start");function Q(){function t(u){const s=[],l=[];if(u.length)for(let p=0;p<u.length;p++){let _=u[p];if(typeof _>"u")_="undefined";else if(_ instanceof Error){const f=_;f.stack?_=f.stack:_=f.toString()}l.push(_)}try{const p=JSON.stringify(l,function(_,f){if(i(f)||Array.isArray(f)){if(s.indexOf(f)!==-1)return"[Circular]";s.push(f)}return f});return p.length>1e5?"Output omitted for a large object that exceeds the limits":p}catch(p){return`Output omitted for an object that cannot be inspected ('${p.toString()}')`}}function n(u){try{process.send&&process.send(u)}catch{}}function i(u){return typeof u=="object"&&u!==null&&!Array.isArray(u)&&!(u instanceof RegExp)&&!(u instanceof Date)}function o(u,s){n({type:"__$console",severity:u,arguments:s})}function a(u,s){Object.defineProperty(console,u,{set:()=>{},get:()=>function(){o(s,t(arguments))}})}function c(u,s){const l=process[u],p=l.write;let _="";Object.defineProperty(l,"write",{set:()=>{},get:()=>(f,d,y)=>{_+=f.toString(d);const h=_.length>1048576?_.length:_.lastIndexOf(`
`);h!==-1&&(console[s](_.slice(0,h)),_=_.slice(h+1)),p.call(l,f,d,y)}})}process.env.VSCODE_VERBOSE_LOGGING==="true"?(a("info","log"),a("log","log"),a("warn","warn"),a("error","error")):(console.log=function(){},console.warn=function(){},console.info=function(){},a("error","error")),c("stderr","error"),c("stdout","log")}function z(){process.on("uncaughtException",function(e){console.error("Uncaught Exception: ",e)}),process.on("unhandledRejection",function(e){console.error("Unhandled Promise Rejection: ",e)})}function Z(){const e=Number(process.env.VSCODE_PARENT_PID);typeof e=="number"&&!isNaN(e)&&setInterval(function(){try{process.kill(e,0)}catch{process.exit()}},5e3)}function ee(){const e=process.env.VSCODE_CRASH_REPORTER_PROCESS_TYPE;if(e)try{process.crashReporter&&typeof process.crashReporter.addExtraParameter=="function"&&process.crashReporter.addExtraParameter("processType",e)}catch(r){console.error(r)}}ee(),G(),process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH&&U(process.env.VSCODE_DEV_INJECT_NODE_MODULE_LOOKUP_PATH),process.send&&process.env.VSCODE_PIPE_LOGGING==="true"&&Q(),process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||z(),process.env.VSCODE_PARENT_PID&&Z(),await Y(),await import([`./${process.env.VSCODE_ESM_ENTRYPOINT}.js`].join("/"));

//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/ddc367ed5c8936efe395cffeec279b04ffd7db78/core/bootstrap-fork.js.map

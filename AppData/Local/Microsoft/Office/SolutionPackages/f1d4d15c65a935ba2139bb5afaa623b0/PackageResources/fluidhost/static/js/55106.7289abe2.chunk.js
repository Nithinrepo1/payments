/*! For license information please see 55106.7289abe2.chunk.js.LICENSE.txt */
(self.webpackChunkfluidhost=self.webpackChunkfluidhost||[]).push([[55106],{26382:(t,e,r)=>{"use strict";const n=r(34445),i=r(6900),o="function"===typeof Symbol&&"function"===typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=f,e.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},e.INSPECT_MAX_BYTES=50;const s=2147483647;function h(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,f.prototype),e}function f(t,e,r){if("number"===typeof t){if("string"===typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return a(t)}return u(t,e,r)}function u(t,e,r){if("string"===typeof t)return function(t,e){"string"===typeof e&&""!==e||(e="utf8");if(!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|g(t,e);let n=h(r);const i=n.write(t,e);i!==r&&(n=n.slice(0,i));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(J(t,Uint8Array)){const e=new Uint8Array(t);return p(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!==typeof SharedArrayBuffer&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"===typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return f.from(n,e,r);const i=function(t){if(f.isBuffer(t)){const e=0|y(t.length),r=h(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!==typeof t.length||Z(t.length)?h(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(i)return i;if("undefined"!==typeof Symbol&&null!=Symbol.toPrimitive&&"function"===typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!==typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function a(t){return c(t),h(t<0?0:0|y(t))}function l(t){const e=t.length<0?0:0|y(t.length),r=h(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,f.prototype),n}function y(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function g(t,e){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if("string"!==typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(t).length;default:if(i)return n?-1:V(t).length;e=(""+e).toLowerCase(),i=!0}}function _(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,r);case"utf8":case"utf-8":return A(this,e,r);case"ascii":return S(this,e,r);case"latin1":case"binary":return T(this,e,r);case"base64":return U(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function d(t,e,r,n,i){if(0===t.length)return-1;if("string"===typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Z(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"===typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"===typeof e)return e&=255,"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){let o,s=1,h=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,h/=2,f/=2,r/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){let n=-1;for(o=r;o<h;o++)if(u(t,o)===u(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===f)return n*s}else-1!==n&&(o-=o-n),n=-1}else for(r+f>h&&(r=h-f),o=r;o>=0;o--){let r=!0;for(let n=0;n<f;n++)if(u(t,o+n)!==u(e,n)){r=!1;break}if(r)return o}return-1}function B(t,e,r,n){r=Number(r)||0;const i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=e.length;let s;for(n>o/2&&(n=o/2),s=0;s<n;++s){const n=parseInt(e.substr(2*s,2),16);if(Z(n))return s;t[r+s]=n}return s}function E(t,e,r,n){return X(V(e,t.length-r),t,r,n)}function m(t,e,r,n){return X(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function I(t,e,r,n){return X(W(e),t,r,n)}function v(t,e,r,n){return X(function(t,e){let r,n,i;const o=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function U(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function A(t,e,r){r=Math.min(t.length,r);const n=[];let i=e;for(;i<r;){const e=t[i];let o=null,s=e>239?4:e>223?3:e>191?2:1;if(i+s<=r){let r,n,h,f;switch(s){case 1:e<128&&(o=e);break;case 2:r=t[i+1],128===(192&r)&&(f=(31&e)<<6|63&r,f>127&&(o=f));break;case 3:r=t[i+1],n=t[i+2],128===(192&r)&&128===(192&n)&&(f=(15&e)<<12|(63&r)<<6|63&n,f>2047&&(f<55296||f>57343)&&(o=f));break;case 4:r=t[i+1],n=t[i+2],h=t[i+3],128===(192&r)&&128===(192&n)&&128===(192&h)&&(f=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&h,f>65535&&f<1114112&&(o=f))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(t){const e=t.length;if(e<=R)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=R));return r}(n)}e.kMaxLength=s,f.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"===typeof console||"function"!==typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(t,e,r){return u(t,e,r)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(t,e,r){return function(t,e,r){return c(t),t<=0?h(t):void 0!==e?"string"===typeof r?h(t).fill(e,r):h(t).fill(e):h(t)}(t,e,r)},f.allocUnsafe=function(t){return a(t)},f.allocUnsafeSlow=function(t){return a(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype},f.compare=function(t,e){if(J(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),J(e,Uint8Array)&&(e=f.from(e,e.offset,e.byteLength)),!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=f.allocUnsafe(e);let i=0;for(r=0;r<t.length;++r){let e=t[r];if(J(e,Uint8Array))i+e.length>n.length?(f.isBuffer(e)||(e=f.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else{if(!f.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,i)}i+=e.length}return n},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){const t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},f.prototype.swap32=function(){const t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},f.prototype.swap64=function(){const t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},f.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?A(this,0,t):_.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(f.prototype[o]=f.prototype.inspect),f.prototype.compare=function(t,e,r,n,i){if(J(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;let o=(i>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0);const h=Math.min(o,s),u=this.slice(n,i),c=t.slice(e,r);for(let f=0;f<h;++f)if(u[f]!==c[f]){o=u[f],s=c[f];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return d(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return d(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"===typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return B(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":case"latin1":case"binary":return m(this,t,e,r);case"base64":return I(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return v(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const R=4096;function S(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function T(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function O(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let o=e;o<r;++o)i+=$[t[o]];return i}function L(t,e,r){const n=t.slice(e,r);let i="";for(let o=0;o<n.length-1;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function x(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function k(t,e,r,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function M(t,e,r,n,i){Y(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function C(t,e,r,n,i){Y(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function N(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function P(t,e,r,n,o){return e=+e,r>>>=0,o||N(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function F(t,e,r,n,o){return e=+e,r>>>=0,o||N(t,0,r,8),i.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUintLE=f.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUintBE=f.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},f.prototype.readUint8=f.prototype.readUInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),this[t]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readBigUInt64LE=K((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||q(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),f.prototype.readBigUInt64BE=K((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||q(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),f.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},f.prototype.readInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){t>>>=0,e||x(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){t>>>=0,e||x(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readBigInt64LE=K((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||q(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),f.prototype.readBigInt64BE=K((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||q(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),f.prototype.readFloatLE=function(t,e){return t>>>=0,e||x(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return t>>>=0,e||x(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return t>>>=0,e||x(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return t>>>=0,e||x(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUintLE=f.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){k(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){k(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUint8=f.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,1,255,0),this[e]=255&t,e+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeBigUInt64LE=K((function(t){return M(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,BigInt(0),BigInt("0xffffffffffffffff"))})),f.prototype.writeBigUInt64BE=K((function(t){return C(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,BigInt(0),BigInt("0xffffffffffffffff"))})),f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);k(this,t,e,r,n-1,-n)}let i=0,o=1,s=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/o|0)-s&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);k(this,t,e,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/o|0)-s&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||k(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},f.prototype.writeBigInt64LE=K((function(t){return M(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),f.prototype.writeBigInt64BE=K((function(t){return C(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),f.prototype.writeFloatLE=function(t,e,r){return P(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return P(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return F(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return F(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(!f.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const i=n-r;return this===t&&"function"===typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},f.prototype.fill=function(t,e,r,n){if("string"===typeof t){if("string"===typeof e?(n=e,e=0,r=this.length):"string"===typeof r&&(n=r,r=this.length),void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"===typeof t?t&=255:"boolean"===typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(i=e;i<r;++i)this[i]=t;else{const o=f.isBuffer(t)?t:f.from(t,n),s=o.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%s]}return this};const j={};function z(t,e,r){j[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name="".concat(this.name," [").concat(t,"]"),this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return"".concat(this.name," [").concat(t,"]: ").concat(this.message)}}}function D(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e="_".concat(t.slice(r-3,r)).concat(e);return"".concat(t.slice(0,r)).concat(e)}function Y(t,e,r,n,i,o){if(t>r||t<e){const n="bigint"===typeof e?"n":"";let i;throw i=o>3?0===e||e===BigInt(0)?">= 0".concat(n," and < 2").concat(n," ** ").concat(8*(o+1)).concat(n):">= -(2".concat(n," ** ").concat(8*(o+1)-1).concat(n,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(n):">= ".concat(e).concat(n," and <= ").concat(r).concat(n),new j.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,r){G(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||q(e,t.length-(r+1))}(n,i,o)}function G(t,e){if("number"!==typeof t)throw new j.ERR_INVALID_ARG_TYPE(e,"number",t)}function q(t,e,r){if(Math.floor(t)!==t)throw G(t,r),new j.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new j.ERR_BUFFER_OUT_OF_BOUNDS;throw new j.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(e),t)}z("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?"".concat(t," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),z("ERR_INVALID_ARG_TYPE",(function(t,e){return'The "'.concat(t,'" argument must be of type number. Received type ').concat(typeof e)}),TypeError),z("ERR_OUT_OF_RANGE",(function(t,e,r){let n='The value of "'.concat(t,'" is out of range.'),i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=D(String(r)):"bigint"===typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=D(i)),i+="n"),n+=" It must be ".concat(e,". Received ").concat(i),n}),RangeError);const H=/[^+/0-9A-Za-z-_]/g;function V(t,e){let r;e=e||1/0;const n=t.length;let i=null;const o=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function W(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(H,"")).length<2)return"";for(;t.length%4!==0;)t+="=";return t}(t))}function X(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function J(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Z(t){return t!==t}const $=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function K(t){return"undefined"===typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},6900:(t,e)=>{e.read=function(t,e,r,n,i){var o,s,h=8*i-n-1,f=(1<<h)-1,u=f>>1,c=-7,a=r?i-1:0,l=r?-1:1,p=t[e+a];for(a+=l,o=p&(1<<-c)-1,p>>=-c,c+=h;c>0;o=256*o+t[e+a],a+=l,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+t[e+a],a+=l,c-=8);if(0===o)o=1-u;else{if(o===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=u}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,h,f,u=8*o-i-1,c=(1<<u)-1,a=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(h=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),(e+=s+a>=1?l/f:l*Math.pow(2,1-a))*f>=2&&(s++,f/=2),s+a>=c?(h=0,s=c):s+a>=1?(h=(e*f-1)*Math.pow(2,i),s+=a):(h=e*Math.pow(2,a-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&h,p+=y,h/=256,i-=8);for(s=s<<i|h,u+=i;u>0;t[r+p]=255&s,p+=y,s/=256,u-=8);t[r+p-y]|=128*g}},56329:t=>{"function"===typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},59966:(t,e,r)=>{var n=r(26382),i=n.Buffer;function o(t,e){for(var r in t)e[r]=t[r]}function s(t,e,r){return i(t,e,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=n:(o(n,e),e.Buffer=s),s.prototype=Object.create(i.prototype),o(i,s),s.from=function(t,e,r){if("number"===typeof t)throw new TypeError("Argument must not be a number");return i(t,e,r)},s.alloc=function(t,e,r){if("number"!==typeof t)throw new TypeError("Argument must be a number");var n=i(t);return void 0!==e?"string"===typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},s.allocUnsafe=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return i(t)},s.allocUnsafeSlow=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},25039:(t,e,r)=>{var n=r(59966).Buffer;function i(t,e){this._block=n.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}i.prototype.update=function(t,e){"string"===typeof t&&(e=e||"utf8",t=n.from(t,e));for(var r=this._block,i=this._blockSize,o=t.length,s=this._len,h=0;h<o;){for(var f=s%i,u=Math.min(o-h,i-f),c=0;c<u;c++)r[f+c]=t[h+c];h+=u,(s+=u)%i===0&&this._update(r)}return this._len+=o,this},i.prototype.digest=function(t){var e=this._len%this._blockSize;this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0));var r=8*this._len;if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4);else{var n=(4294967295&r)>>>0,i=(r-n)/4294967296;this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var o=this._hash();return t?o.toString(t):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=i},20307:(t,e,r)=>{var n=t.exports=function(t){t=t.toLowerCase();var e=n[t];if(!e)throw new Error(t+" is not supported (we accept pull requests)");return new e};n.sha=r(42809),n.sha1=r(61222),n.sha224=r(61189),n.sha256=r(81892),n.sha384=r(21248),n.sha512=r(47169)},42809:(t,e,r)=>{var n=r(56329),i=r(25039),o=r(59966).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],h=new Array(80);function f(){this.init(),this._w=h,i.call(this,64,56)}function u(t){return t<<30|t>>>2}function c(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}n(f,i),f.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},f.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,h=0|this._d,f=0|this._e,a=0;a<16;++a)r[a]=t.readInt32BE(4*a);for(;a<80;++a)r[a]=r[a-3]^r[a-8]^r[a-14]^r[a-16];for(var l=0;l<80;++l){var p=~~(l/20),y=0|((e=n)<<5|e>>>27)+c(p,i,o,h)+f+r[l]+s[p];f=h,h=o,o=u(i),i=n,n=y}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=h+this._d|0,this._e=f+this._e|0},f.prototype._hash=function(){var t=o.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=f},61222:(t,e,r)=>{var n=r(56329),i=r(25039),o=r(59966).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],h=new Array(80);function f(){this.init(),this._w=h,i.call(this,64,56)}function u(t){return t<<5|t>>>27}function c(t){return t<<30|t>>>2}function a(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}n(f,i),f.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},f.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,h=0|this._d,f=0|this._e,l=0;l<16;++l)r[l]=t.readInt32BE(4*l);for(;l<80;++l)r[l]=(e=r[l-3]^r[l-8]^r[l-14]^r[l-16])<<1|e>>>31;for(var p=0;p<80;++p){var y=~~(p/20),g=u(n)+a(y,i,o,h)+f+r[p]+s[y]|0;f=h,h=o,o=c(i),i=n,n=g}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=h+this._d|0,this._e=f+this._e|0},f.prototype._hash=function(){var t=o.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=f},61189:(t,e,r)=>{var n=r(56329),i=r(81892),o=r(25039),s=r(59966).Buffer,h=new Array(64);function f(){this.init(),this._w=h,o.call(this,64,56)}n(f,i),f.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},f.prototype._hash=function(){var t=s.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=f},81892:(t,e,r)=>{var n=r(56329),i=r(25039),o=r(59966).Buffer,s=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],h=new Array(64);function f(){this.init(),this._w=h,i.call(this,64,56)}function u(t,e,r){return r^t&(e^r)}function c(t,e,r){return t&e|r&(t|e)}function a(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function l(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function p(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}n(f,i),f.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},f.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,h=0|this._d,f=0|this._e,y=0|this._f,g=0|this._g,_=0|this._h,w=0;w<16;++w)r[w]=t.readInt32BE(4*w);for(;w<64;++w)r[w]=0|(((e=r[w-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+r[w-7]+p(r[w-15])+r[w-16];for(var d=0;d<64;++d){var b=_+l(f)+u(f,y,g)+s[d]+r[d]|0,B=a(n)+c(n,i,o)|0;_=g,g=y,y=f,f=h+b|0,h=o,o=i,i=n,n=b+B|0}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=h+this._d|0,this._e=f+this._e|0,this._f=y+this._f|0,this._g=g+this._g|0,this._h=_+this._h|0},f.prototype._hash=function(){var t=o.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=f},21248:(t,e,r)=>{var n=r(56329),i=r(47169),o=r(25039),s=r(59966).Buffer,h=new Array(160);function f(){this.init(),this._w=h,o.call(this,128,112)}n(f,i),f.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},f.prototype._hash=function(){var t=s.allocUnsafe(48);function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=f},47169:(t,e,r)=>{var n=r(56329),i=r(25039),o=r(59966).Buffer,s=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],h=new Array(160);function f(){this.init(),this._w=h,i.call(this,128,112)}function u(t,e,r){return r^t&(e^r)}function c(t,e,r){return t&e|r&(t|e)}function a(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function l(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function y(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function g(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function _(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function w(t,e){return t>>>0<e>>>0?1:0}n(f,i),f.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},f.prototype._update=function(t){for(var e=this._w,r=0|this._ah,n=0|this._bh,i=0|this._ch,o=0|this._dh,h=0|this._eh,f=0|this._fh,d=0|this._gh,b=0|this._hh,B=0|this._al,E=0|this._bl,m=0|this._cl,I=0|this._dl,v=0|this._el,U=0|this._fl,A=0|this._gl,R=0|this._hl,S=0;S<32;S+=2)e[S]=t.readInt32BE(4*S),e[S+1]=t.readInt32BE(4*S+4);for(;S<160;S+=2){var T=e[S-30],O=e[S-30+1],L=p(T,O),x=y(O,T),k=g(T=e[S-4],O=e[S-4+1]),M=_(O,T),C=e[S-14],N=e[S-14+1],P=e[S-32],F=e[S-32+1],j=x+N|0,z=L+C+w(j,x)|0;z=(z=z+k+w(j=j+M|0,M)|0)+P+w(j=j+F|0,F)|0,e[S]=z,e[S+1]=j}for(var D=0;D<160;D+=2){z=e[D],j=e[D+1];var Y=c(r,n,i),G=c(B,E,m),q=a(r,B),H=a(B,r),V=l(h,v),W=l(v,h),X=s[D],J=s[D+1],Z=u(h,f,d),$=u(v,U,A),K=R+W|0,Q=b+V+w(K,R)|0;Q=(Q=(Q=Q+Z+w(K=K+$|0,$)|0)+X+w(K=K+J|0,J)|0)+z+w(K=K+j|0,j)|0;var tt=H+G|0,et=q+Y+w(tt,H)|0;b=d,R=A,d=f,A=U,f=h,U=v,h=o+Q+w(v=I+K|0,I)|0,o=i,I=m,i=n,m=E,n=r,E=B,r=Q+et+w(B=K+tt|0,K)|0}this._al=this._al+B|0,this._bl=this._bl+E|0,this._cl=this._cl+m|0,this._dl=this._dl+I|0,this._el=this._el+v|0,this._fl=this._fl+U|0,this._gl=this._gl+A|0,this._hl=this._hl+R|0,this._ah=this._ah+r+w(this._al,B)|0,this._bh=this._bh+n+w(this._bl,E)|0,this._ch=this._ch+i+w(this._cl,m)|0,this._dh=this._dh+o+w(this._dl,I)|0,this._eh=this._eh+h+w(this._el,v)|0,this._fh=this._fh+f+w(this._fl,U)|0,this._gh=this._gh+d+w(this._gl,A)|0,this._hh=this._hh+b+w(this._hl,R)|0},f.prototype._hash=function(){var t=o.allocUnsafe(64);function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=f},55106:(t,e,r)=>{"use strict";r.r(e),r.d(e,{gitHashFile:()=>o,hashFile:()=>i});var n=r(20307);async function i(t){let e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hex";switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"SHA-1"){case"SHA-1":e=new n.sha1;break;case"SHA-256":e=new n.sha256}return e.update(t).digest(r)}async function o(t){const e=t.byteLength,r="blob ".concat(e.toString()).concat(String.fromCharCode(0));return(new n.sha1).update(r).update(t).digest("hex")}}}]);
//# sourceMappingURL=55106.7289abe2.chunk.js.map
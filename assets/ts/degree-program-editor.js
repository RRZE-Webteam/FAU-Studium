/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/Edit.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/Edit.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const DegreeProgramEditForm_1 = tslib_1.__importDefault(__webpack_require__(/*! components/DegreeProgramEditForm */ "./resources/ts/components/DegreeProgramEditForm/index.ts"));
__webpack_require__(/*! ./admin.scss */ "./resources/ts/blocks/degree-program-form/admin.scss");
const Edit = () => {
  const blockProps = (0, block_editor_1.useBlockProps)();
  return react_1.default.createElement("div", Object.assign({}, blockProps), react_1.default.createElement(DegreeProgramEditForm_1.default, null));
};
exports["default"] = Edit;

/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/index.ts":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
const block_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./block.json */ "./resources/ts/blocks/degree-program-form/block.json"));
const Edit_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Edit */ "./resources/ts/blocks/degree-program-form/Edit.tsx"));
(0, blocks_1.registerBlockType)(block_json_1.default.name, Object.assign(Object.assign({}, block_json_1.default), {
  edit: Edit_1.default
}));

/***/ }),

/***/ "./resources/ts/blocks/description-details/Edit.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/description-details/Edit.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const Edit = _ref => {
  let {
    attributes: {
      content
    },
    setAttributes
  } = _ref;
  const blockProps = (0, block_editor_1.useBlockProps)();
  return react_1.default.createElement(block_editor_1.RichText, Object.assign({}, blockProps, {
    tagName: "dd",
    onChange: nextContent => setAttributes({
      content: nextContent
    }),
    value: content,
    placeholder: (0, i18n_1.__)('Description details …', 'fau-degree-program')
  }));
};
exports["default"] = Edit;

/***/ }),

/***/ "./resources/ts/blocks/description-details/Save.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/description-details/Save.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const Save = _ref => {
  let {
    attributes: {
      content
    }
  } = _ref;
  const saveBlockProps = block_editor_1.useBlockProps.save();
  return react_1.default.createElement(block_editor_1.RichText.Content, Object.assign({}, saveBlockProps, {
    tagName: "dd",
    value: content
  }));
};
exports["default"] = Save;

/***/ }),

/***/ "./resources/ts/blocks/description-details/index.ts":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/description-details/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
const block_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-details/block.json"));
const Edit_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-details/Edit.tsx"));
const Save_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-details/Save.tsx"));
(0, blocks_1.registerBlockType)(block_json_1.default.name, Object.assign(Object.assign({}, block_json_1.default), {
  edit: Edit_1.default,
  save: Save_1.default
}));

/***/ }),

/***/ "./resources/ts/blocks/description-list/Edit.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-list/Edit.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const ALLOWED_BLOCKS = ['fau/description-term', 'fau/description-details'];
const TEMPLATE = [['fau/description-term'], ['fau/description-details']];
const Edit = () => {
  const blockProps = (0, block_editor_1.useBlockProps)();
  return react_1.default.createElement("dl", Object.assign({}, blockProps), react_1.default.createElement(block_editor_1.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    renderAppender: block_editor_1.InnerBlocks.ButtonBlockAppender
  }));
};
exports["default"] = Edit;

/***/ }),

/***/ "./resources/ts/blocks/description-list/Save.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-list/Save.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const Save = () => {
  const blockProps = block_editor_1.useBlockProps.save();
  return react_1.default.createElement("dl", Object.assign({}, blockProps), react_1.default.createElement(block_editor_1.InnerBlocks.Content, null));
};
exports["default"] = Save;

/***/ }),

/***/ "./resources/ts/blocks/description-list/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-list/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
const block_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-list/block.json"));
const Edit_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-list/Edit.tsx"));
const Save_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-list/Save.tsx"));
(0, blocks_1.registerBlockType)(block_json_1.default.name, Object.assign(Object.assign({}, block_json_1.default), {
  edit: Edit_1.default,
  save: Save_1.default
}));

/***/ }),

/***/ "./resources/ts/blocks/description-term/Edit.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-term/Edit.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const Edit = _ref => {
  let {
    attributes: {
      content
    },
    setAttributes
  } = _ref;
  const blockProps = (0, block_editor_1.useBlockProps)();
  return react_1.default.createElement(block_editor_1.RichText, Object.assign({}, blockProps, {
    tagName: "dt",
    onChange: nextContent => setAttributes({
      content: nextContent
    }),
    value: content,
    placeholder: (0, i18n_1.__)('Description term …', 'fau-degree-program')
  }));
};
exports["default"] = Edit;

/***/ }),

/***/ "./resources/ts/blocks/description-term/Save.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-term/Save.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const Save = _ref => {
  let {
    attributes: {
      content
    }
  } = _ref;
  const saveBlockProps = block_editor_1.useBlockProps.save();
  return react_1.default.createElement(block_editor_1.RichText.Content, Object.assign({}, saveBlockProps, {
    tagName: "dt",
    value: content
  }));
};
exports["default"] = Save;

/***/ }),

/***/ "./resources/ts/blocks/description-term/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-term/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
const block_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-term/block.json"));
const Edit_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-term/Edit.tsx"));
const Save_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-term/Save.tsx"));
(0, blocks_1.registerBlockType)(block_json_1.default.name, Object.assign(Object.assign({}, block_json_1.default), {
  edit: Edit_1.default,
  save: Save_1.default
}));

/***/ }),

/***/ "./resources/ts/blocks/filters/addHeadingBlockVariations.ts":
/*!******************************************************************!*\
  !*** ./resources/ts/blocks/filters/addHeadingBlockVariations.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const hooks_1 = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
function addHeadingBlockVariations(settings, name) {
  if (name !== 'core/heading') {
    return settings;
  }
  return Object.assign(Object.assign({}, settings), {
    variations: [{
      name: 'H3',
      isDefault: true,
      title: 'H3',
      attributes: {
        level: 3
      }
    }, {
      name: 'H4',
      title: 'H4',
      attributes: {
        level: 4
      }
    }, {
      name: 'H5',
      title: 'H5',
      attributes: {
        level: 5
      }
    }]
  });
}
(0, hooks_1.addFilter)('blocks.registerBlockType', 'fau/variations/heading', addHeadingBlockVariations);

/***/ }),

/***/ "./resources/ts/blocks/filters/addShortcodeBlockVariations.ts":
/*!********************************************************************!*\
  !*** ./resources/ts/blocks/filters/addShortcodeBlockVariations.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const hooks_1 = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
function addShortcodeBlockVariations(settings, name) {
  if (name !== 'core/shortcode') {
    return settings;
  }
  return Object.assign(Object.assign({}, settings), {
    variations: [{
      name: 'Alert',
      isDefault: true,
      title: 'Alert',
      attributes: {
        text: '[alert]'
      }
    }, {
      name: 'Contact',
      title: 'Contact',
      attributes: {
        text: '[contact]'
      }
    }, {
      name: 'Video',
      title: 'Video',
      attributes: {
        text: '[fau-video]'
      }
    }]
  });
}
(0, hooks_1.addFilter)('blocks.registerBlockType', 'fau/variations/shortcode', addShortcodeBlockVariations);

/***/ }),

/***/ "./resources/ts/blocks/filters/defaultImageSize.ts":
/*!*********************************************************!*\
  !*** ./resources/ts/blocks/filters/defaultImageSize.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const hooks_1 = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
const DEFAULT_SIZE = 'thumbnail';
(0, hooks_1.addFilter)('editor.PostFeaturedImage.imageSize', 'fau/degree-program-image-size', () => DEFAULT_SIZE);

/***/ }),

/***/ "./resources/ts/blocks/filters/index.ts":
/*!**********************************************!*\
  !*** ./resources/ts/blocks/filters/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! ./defaultImageSize */ "./resources/ts/blocks/filters/defaultImageSize.ts");
__webpack_require__(/*! ./addHeadingBlockVariations */ "./resources/ts/blocks/filters/addHeadingBlockVariations.ts");
__webpack_require__(/*! ./addShortcodeBlockVariations */ "./resources/ts/blocks/filters/addShortcodeBlockVariations.ts");
__webpack_require__(/*! ./restrictAllowedTextFormats */ "./resources/ts/blocks/filters/restrictAllowedTextFormats.ts");

/***/ }),

/***/ "./resources/ts/blocks/filters/restrictAllowedTextFormats.ts":
/*!*******************************************************************!*\
  !*** ./resources/ts/blocks/filters/restrictAllowedTextFormats.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const dom_ready_1 = tslib_1.__importDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));
const rich_text_1 = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
const ALLOWED_FORMATS = ['core/bold', 'core/link'];
(0, dom_ready_1.default)(() => {
  const registeredFormats = (0, data_1.select)(rich_text_1.store).getFormatTypes();
  const formatNamesToDisable = [];
  registeredFormats.forEach(formatType => {
    if (ALLOWED_FORMATS.includes(formatType.name)) {
      return;
    }
    formatNamesToDisable.push(formatType.name);
  });
  (0, data_1.dispatch)(rich_text_1.store).removeFormatTypes(formatNamesToDisable);
});

/***/ }),

/***/ "./resources/ts/blocks/index.ts":
/*!**************************************!*\
  !*** ./resources/ts/blocks/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! ./degree-program-form */ "./resources/ts/blocks/degree-program-form/index.ts");
__webpack_require__(/*! ./description-details */ "./resources/ts/blocks/description-details/index.ts");
__webpack_require__(/*! ./description-list */ "./resources/ts/blocks/description-list/index.ts");
__webpack_require__(/*! ./description-term */ "./resources/ts/blocks/description-term/index.ts");
__webpack_require__(/*! ./filters */ "./resources/ts/blocks/filters/index.ts");

/***/ }),

/***/ "./resources/ts/components/CircularProgress/CircularProgress.tsx":
/*!***********************************************************************!*\
  !*** ./resources/ts/components/CircularProgress/CircularProgress.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const DEFAULT_SQUARE_SIZE = 100;
const DEFAULT_STROKE_WIDTH = 2;
const StyledSvgCircle = styled_components_1.default.svg`
    stroke: var(--wp-admin-theme-color, #007cba);
`;
const CircularProgressBar = _ref => {
  let {
    percentage,
    squareSize = DEFAULT_SQUARE_SIZE,
    strokeWidth = DEFAULT_STROKE_WIDTH
  } = _ref;
  const radius = (squareSize - strokeWidth) / 2;
  const viewBox = `0 0 ${squareSize} ${squareSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * percentage / 100;
  return react_1.default.createElement(StyledSvgCircle, {
    width: squareSize,
    height: squareSize,
    viewBox: viewBox
  }, react_1.default.createElement("circle", {
    className: "circle-background",
    cx: squareSize / 2,
    cy: squareSize / 2,
    r: radius,
    strokeWidth: `${strokeWidth}px`,
    fill: "none",
    stroke: "rgba(167, 152, 181, 0.3)"
  }), react_1.default.createElement("circle", {
    className: "circle-progress",
    cx: squareSize / 2,
    cy: squareSize / 2,
    r: radius,
    fill: "none",
    strokeWidth: `${strokeWidth}px`,
    transform: `rotate(-90 ${squareSize / 2} ${squareSize / 2})`,
    style: {
      strokeDasharray: dashArray,
      strokeDashoffset: dashOffset
    }
  }));
};
CircularProgressBar.defaultProps = {
  squareSize: DEFAULT_SQUARE_SIZE,
  strokeWidth: DEFAULT_STROKE_WIDTH
};
exports["default"] = CircularProgressBar;

/***/ }),

/***/ "./resources/ts/components/CircularProgress/index.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/components/CircularProgress/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var CircularProgress_1 = __webpack_require__(/*! ./CircularProgress */ "./resources/ts/components/CircularProgress/CircularProgress.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(CircularProgress_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/ContentField/ContentField.tsx":
/*!***************************************************************!*\
  !*** ./resources/ts/components/ContentField/ContentField.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const FormField_1 = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
const useBlockEditorSettings_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useBlockEditorSettings */ "./resources/ts/components/ContentField/useBlockEditorSettings.ts"));
const StyledEditorWrapper = styled_components_1.default.div`
    margin: 0 0 12px !important;

    .content-field-blocks-list {
        border: 1px solid #757575;
        padding: 10px;
    }
`;
const BlockDeselectListener = _ref => {
  let {
    editorRef
  } = _ref;
  const {
    clearSelectedBlock
  } = (0, data_1.useDispatch)(block_editor_1.store);
  const blurListener = event => {
    if (!editorRef.current || editorRef.current.contains(event.target)) {
      return;
    }
    clearSelectedBlock();
  };
  (0, react_1.useEffect)(() => {
    document.body.addEventListener('click', blurListener, {
      capture: true
    });
    return () => document.body.removeEventListener('click', blurListener, {
      capture: true
    });
  }, []);
  return null;
};
const ContentField = _ref2 => {
  let {
    content,
    onChange,
    required
  } = _ref2;
  const [currentBlocks, setCurrentBlocks] = (0, react_1.useState)((0, blocks_1.parse)(content));
  const editorRef = (0, react_1.useRef)(null);
  const updateValue = blocks => {
    onChange((0, blocks_1.serialize)(blocks));
  };
  const settings = (0, useBlockEditorSettings_1.default)();
  const {
    required: fieldRequired
  } = (0, FormField_1.useFieldContext)();
  return react_1.default.createElement(block_editor_1.BlockEditorProvider, {
    value: currentBlocks,
    onInput: blocks => {
      setCurrentBlocks(blocks);
      updateValue(blocks);
    },
    onChange: blocks => {
      setCurrentBlocks(blocks);
      updateValue(blocks);
    },
    settings: settings
  }, react_1.default.createElement("div", {
    ref: editorRef,
    className: "fau-content-field"
  }, react_1.default.createElement(components_1.SlotFillProvider, null, react_1.default.createElement(StyledEditorWrapper, {
    className: "editor-styles-wrapper"
  }, react_1.default.createElement(block_editor_1.BlockEditorKeyboardShortcuts.Register, null), react_1.default.createElement(block_editor_1.BlockTools, null, react_1.default.createElement(block_editor_1.WritingFlow, null, react_1.default.createElement(block_editor_1.ObserveTyping, null, react_1.default.createElement("div", {
    role: "textbox",
    "aria-required": required !== null && required !== void 0 ? required : fieldRequired
  }, react_1.default.createElement(block_editor_1.BlockList, {
    renderAppender: block_editor_1.DefaultBlockAppender,
    className: "content-field-blocks-list"
  }), react_1.default.createElement(BlockDeselectListener, {
    editorRef: editorRef
  })))))), react_1.default.createElement(components_1.Popover.Slot, null))));
};
ContentField.defaultProps = {
  required: false
};
exports["default"] = ContentField;

/***/ }),

/***/ "./resources/ts/components/ContentField/constants.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/components/ContentField/constants.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ALLOWED_MIME_TYPES = exports.ALLOWED_BLOCK_TYPES = void 0;
exports.ALLOWED_BLOCK_TYPES = ['core/paragraph', 'core/image', 'core/list', 'core/list-item', 'core/heading', 'core/shortcode', 'fau/description-list', 'fau/description-term', 'fau/description-details'];
exports.ALLOWED_MIME_TYPES = {
  'jpg|jpeg|jpe': 'image/jpeg',
  gif: 'image/gif',
  png: 'image/png'
};

/***/ }),

/***/ "./resources/ts/components/ContentField/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/components/ContentField/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! ./styles.scss */ "./resources/ts/components/ContentField/styles.scss");
var ContentField_1 = __webpack_require__(/*! ./ContentField */ "./resources/ts/components/ContentField/ContentField.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(ContentField_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/ContentField/useBlockEditorSettings.ts":
/*!************************************************************************!*\
  !*** ./resources/ts/components/ContentField/useBlockEditorSettings.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = __webpack_require__(/*! react */ "react");
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const media_utils_1 = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
const constants_1 = __webpack_require__(/*! ./constants */ "./resources/ts/components/ContentField/constants.ts");
const SETTINGS = {
  allowedBlockTypes: constants_1.ALLOWED_BLOCK_TYPES,
  codeEditingEnabled: false
};
const useBlockEditorSettings = () => {
  const hasUploadPermissions = (0, data_1.useSelect)(select => {
    var _a;
    return (_a = select(core_data_1.store).canUser('create', 'media')) !== null && _a !== void 0 ? _a : false;
  }, []);
  return (0, react_1.useMemo)(() => {
    let mediaUploadBlockEditor;
    if (hasUploadPermissions) {
      mediaUploadBlockEditor = _a => {
        var {
            onError
          } = _a,
          argumentsObject = tslib_1.__rest(_a, ["onError"]);
        (0, media_utils_1.uploadMedia)(Object.assign({
          wpAllowedMimeTypes: constants_1.ALLOWED_MIME_TYPES,
          onError: _ref => {
            let {
              message
            } = _ref;
            return onError(message);
          }
        }, argumentsObject));
      };
    }
    return Object.assign(Object.assign({}, SETTINGS), {
      mediaUpload: mediaUploadBlockEditor,
      __experimentalFetchLinkSuggestions: (search, searchOptions) => (0, core_data_1.__experimentalFetchLinkSuggestions)(search, searchOptions),
      __experimentalFetchRichUrlData: core_data_1.__experimentalFetchUrlData
    });
  }, [hasUploadPermissions]);
};
exports["default"] = useBlockEditorSettings;

/***/ }),

/***/ "./resources/ts/components/DayMonthPicker/DayMonthPicker.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DayMonthPicker/DayMonthPicker.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const FormField_1 = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
const DayMonthPicker = props => {
  const {
    required
  } = (0, FormField_1.useFieldContext)();
  return react_1.default.createElement(components_1.TextControl, Object.assign({}, props, {
    pattern: "((0[1-9]|[12][0-9]|3[01])\\.(0[13578]|1[02])|(0[1-9]|[12][0-9]|30)\\.(0[469]|11)|(0[1-9]|1[0-9]|2[0-8])\\.02)\\.",
    placeholder: "TT.MM.",
    className: "c-day-month-picker",
    "aria-required": required
  }));
};
exports["default"] = DayMonthPicker;

/***/ }),

/***/ "./resources/ts/components/DayMonthPicker/index.ts":
/*!*********************************************************!*\
  !*** ./resources/ts/components/DayMonthPicker/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! ./styles.scss */ "./resources/ts/components/DayMonthPicker/styles.scss");
var DayMonthPicker_1 = __webpack_require__(/*! ./DayMonthPicker */ "./resources/ts/components/DayMonthPicker/DayMonthPicker.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(DayMonthPicker_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/DegreeProgramCombinations.tsx":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/DegreeProgramCombinations.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const FormField_1 = tslib_1.__importDefault(__webpack_require__(/*! components/FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx"));
const useConditionalFields_1 = __webpack_require__(/*! hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
const useDegreeProgramProperty_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../hooks/useDegreeProgramProperty */ "./resources/ts/hooks/useDegreeProgramProperty.ts"));
const RelatedDegreePrograms_1 = tslib_1.__importDefault(__webpack_require__(/*! ./RelatedDegreePrograms */ "./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx"));
function DegreeProgramCombinations() {
  const enabled = (0, useConditionalFields_1.useCombinationOfDegreeProgramEnabled)();
  const [combinations, setCombinations] = (0, useDegreeProgramProperty_1.default)('combinations');
  const [limitedCombinations, setLimitedCombinations] = (0, useDegreeProgramProperty_1.default)('limited_combinations');
  if (!enabled) {
    return null;
  }
  if (combinations === undefined || limitedCombinations === undefined) {
    return react_1.default.createElement(components_1.Flex, null, react_1.default.createElement(components_1.FlexBlock, null, react_1.default.createElement(components_1.Spinner, null)));
  }
  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(FormField_1.default, {
    name: "combinations",
    label: (0, i18n_1._x)('Combinations', 'backoffice: field label', 'fau-degree-program')
  }, react_1.default.createElement(RelatedDegreePrograms_1.default, {
    relatedDegreeProgramIds: combinations,
    setRelatedDegreePrograms: setCombinations,
    messages: {
      added: (0, i18n_1._x)('Combination added', 'backoffice: field label', 'fau-degree-program'),
      removed: (0, i18n_1._x)('Combination removed', 'backoffice: field label', 'fau-degree-program'),
      remove: (0, i18n_1._x)('Remove combination', 'backoffice: field label', 'fau-degree-program'),
      __experimentalInvalid: (0, i18n_1._x)('Invalid combination', 'backoffice: field label', 'fau-degree-program')
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "limited_combinations",
    label: (0, i18n_1._x)('Limited Combinations', 'backoffice: field label', 'fau-degree-program')
  }, react_1.default.createElement(RelatedDegreePrograms_1.default, {
    relatedDegreeProgramIds: limitedCombinations,
    setRelatedDegreePrograms: setLimitedCombinations,
    messages: {
      added: (0, i18n_1._x)('Limited combination added', 'backoffice: field label', 'fau-degree-program'),
      removed: (0, i18n_1._x)('Limited combination removed', 'backoffice: field label', 'fau-degree-program'),
      remove: (0, i18n_1._x)('Remove limited combination', 'backoffice: field label', 'fau-degree-program'),
      __experimentalInvalid: (0, i18n_1._x)('Invalid limited combination', 'backoffice: field label', 'fau-degree-program')
    }
  })));
}
exports["default"] = DegreeProgramCombinations;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx":
/*!*************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
const html_entities_1 = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
const EntitySelector_1 = tslib_1.__importDefault(__webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts"));
const hoc_1 = __webpack_require__(/*! ./hoc */ "./resources/ts/components/DegreeProgramCombinations/hoc/index.ts");
const withRelatedDegreeProgramProps = (0, compose_1.createHigherOrderComponent)(WrappedComponent => _a => {
  var {
      setRelatedDegreePrograms
    } = _a,
    others = tslib_1.__rest(_a, ["setRelatedDegreePrograms"]);
  return react_1.default.createElement(WrappedComponent, Object.assign({
    entityToToken: post => `${(0, html_entities_1.decodeEntities)(post.degree_program.title.de)} (${post.degree_program.degree.abbreviation.de})`,
    onChange: posts => {
      setRelatedDegreePrograms(posts.map(post => post.id));
    },
    maxSuggestions: 300
  }, others));
}, 'withRelatedDegreeProgramProps');
exports["default"] = (0, compose_1.compose)(withRelatedDegreeProgramProps, hoc_1.withDegreeProgramPosts, hoc_1.withSearchedDegreeProgramPosts)(EntitySelector_1.default);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/hoc/index.ts":
/*!************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/hoc/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withSearchedDegreeProgramPosts = exports.withDegreeProgramPosts = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const withDegreeProgramPosts_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withDegreeProgramPosts */ "./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts"));
exports.withDegreeProgramPosts = withDegreeProgramPosts_1.default;
const withSearchedDegreeProgramPosts_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withSearchedDegreeProgramPosts */ "./resources/ts/components/DegreeProgramCombinations/hoc/withSearchedDegreeProgramPosts.ts"));
exports.withSearchedDegreeProgramPosts = withSearchedDegreeProgramPosts_1.default;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
const withDegreeProgramPosts = (0, data_1.withSelect)((select, ownProps) => {
  var _a;
  const {
    getEntityRecords
  } = select(core_data_1.store.name);
  if (ownProps.relatedDegreeProgramIds.length === 0) {
    return {
      entities: []
    };
  }
  const query = Object.assign({
    per_page: -1,
    orderby: 'include',
    _fields: 'id,degree_program',
    context: 'view'
  }, {
    include: ownProps.relatedDegreeProgramIds.join(',')
  });
  return {
    entities: (_a = getEntityRecords('postType', (0, serverData_1.default)().postType, query)) !== null && _a !== void 0 ? _a : []
  };
});
exports["default"] = withDegreeProgramPosts;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/hoc/withSearchedDegreeProgramPosts.ts":
/*!*************************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/hoc/withSearchedDegreeProgramPosts.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = __webpack_require__(/*! react */ "react");
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const editor_1 = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
const withSearchedDegreeProgramPosts = (0, data_1.withSelect)((select, ownProps) => {
  const [search, setSearch] = (0, react_1.useState)('');
  const {
    getCurrentPost
  } = select(editor_1.store.name);
  const {
    getEntityRecords
  } = select(core_data_1.store.name);
  const currentPost = getCurrentPost();
  const posts = getEntityRecords('postType', (0, serverData_1.default)().postType, Object.assign(Object.assign({
    per_page: ownProps.maxSuggestions,
    orderby: 'title',
    order: 'asc',
    _fields: 'id,degree_program',
    context: 'view'
  }, {
    search
  }), currentPost ? {
    exclude: currentPost.id
  } : {}));
  return {
    searchedEntities: posts !== null && posts !== void 0 ? posts : [],
    setSearch
  };
});
exports["default"] = withSearchedDegreeProgramPosts;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/index.ts":
/*!********************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/index.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var DegreeProgramCombinations_1 = __webpack_require__(/*! ./DegreeProgramCombinations */ "./resources/ts/components/DegreeProgramCombinations/DegreeProgramCombinations.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(DegreeProgramCombinations_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/AdmissionRequirements.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/AdmissionRequirements.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const FormField_1 = tslib_1.__importDefault(__webpack_require__(/*! components/FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx"));
const FormWrapper_1 = tslib_1.__importDefault(__webpack_require__(/*! components/Layouts/FormWrapper */ "./resources/ts/components/Layouts/FormWrapper.tsx"));
const TermSelector_1 = tslib_1.__importDefault(__webpack_require__(/*! components/TermSelector */ "./resources/ts/components/TermSelector/index.ts"));
const DegreeProgramEditFormProvider_1 = __webpack_require__(/*! contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
const constants_1 = __webpack_require__(/*! hooks/constants */ "./resources/ts/hooks/constants.ts");
const useConditionalFields_1 = __webpack_require__(/*! hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
const transforms_1 = __webpack_require__(/*! util/transforms */ "./resources/ts/util/transforms.ts");
const ContentField_1 = tslib_1.__importDefault(__webpack_require__(/*! ../ContentField */ "./resources/ts/components/ContentField/index.ts"));
const DayMonthPicker_1 = tslib_1.__importDefault(__webpack_require__(/*! ../DayMonthPicker */ "./resources/ts/components/DayMonthPicker/index.ts"));
const FormSeparator_1 = tslib_1.__importDefault(__webpack_require__(/*! ../Layouts/FormSeparator */ "./resources/ts/components/Layouts/FormSeparator.tsx"));
const MultilingualContainer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx"));
const AdmissionRequirements = () => {
  const {
    values,
    handleChange
  } = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)();
  const bachelorOrTeachingEnabled = (0, useConditionalFields_1.useAdmissionRequirementsForBachelorAndTeachingDegreesEnable)();
  const teachingDegreeHigherSemesterEnabled = (0, useConditionalFields_1.useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled)();
  const mastersEnabled = (0, useConditionalFields_1.useAdmissionRequirementsForMastersDegree)();
  const humanitiesFacultyLanguageSkillsEnabled = (0, useConditionalFields_1.useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled)();
  const applicationSummerDeadlineEnabled = (0, useConditionalFields_1.useApplicationDeadlineSummerSemesterEnabled)();
  const applicationWinterDeadlineEnabled = (0, useConditionalFields_1.useApplicationDeadlineWinterSemesterEnabled)();
  return react_1.default.createElement(components_1.Panel, null, react_1.default.createElement(components_1.PanelBody, null, react_1.default.createElement(FormWrapper_1.default, null, (bachelorOrTeachingEnabled || teachingDegreeHigherSemesterEnabled) && react_1.default.createElement(react_1.default.Fragment, null, bachelorOrTeachingEnabled && react_1.default.createElement(FormField_1.default, {
    name: "admission_requirements.bachelor_or_teaching_degree",
    label: (0, i18n_1._x)("Admission requirements for Bachelor's/teaching degrees", 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: values.degree.name.de !== constants_1.ADDITIONAL_DEGREE_NAME
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "bachelor_teaching_admission_requirement",
    taxonomy: "bachelorOrTeachingDegreeAdmissionRequirement",
    value: values.admission_requirements.bachelor_or_teaching_degree.id,
    childOnly: true,
    onChange: term => {
      handleChange('admission_requirements.bachelor_or_teaching_degree', (0, transforms_1.transformTermToAdmissionRequirement)(term));
    }
  })), teachingDegreeHigherSemesterEnabled && react_1.default.createElement(FormField_1.default, {
    name: "admission_requirements.teaching_degree_higher_semester",
    label: (0, i18n_1._x)("Admission requirements for entering a Bachelor's/teaching degree at a higher semester", 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: values.degree.name.de !== constants_1.ADDITIONAL_DEGREE_NAME
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "teaching_higher_semester_admission_requirement",
    taxonomy: "teachingDegreeHigherSemesterAdmissionRequirement",
    value: values.admission_requirements.teaching_degree_higher_semester.id,
    childOnly: true,
    onChange: term => {
      handleChange('admission_requirements.teaching_degree_higher_semester', (0, transforms_1.transformTermToAdmissionRequirement)(term));
    }
  })), react_1.default.createElement(FormSeparator_1.default, null)), mastersEnabled && react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(FormField_1.default, {
    name: "admission_requirements.master",
    label: (0, i18n_1._x)("Admission requirements for Master's degree", 'backoffice: degree program edit form', 'fau-degree-program'),
    required: true
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "master_admission_requirement",
    taxonomy: "masterDegreeAdmissionRequirement",
    value: values.admission_requirements.master.id,
    childOnly: true,
    onChange: term => {
      handleChange('admission_requirements.master', (0, transforms_1.transformTermToAdmissionRequirement)(term));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "content_related_master_requirements",
    label: (0, i18n_1._x)("Content-related admission requirements for Master's degree", 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "vorausgegangene Bachelorstudieng\u00E4nge, Qualifikationswerte, etc.",
    required: true
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.content_related_master_requirements
  }, (languageCode, required) => react_1.default.createElement(ContentField_1.default, {
    key: `content_related_master_requirements.${languageCode}`,
    onChange: value => {
      handleChange(`content_related_master_requirements.${languageCode}`, value);
    },
    content: values.content_related_master_requirements[languageCode],
    required: required
  }))), react_1.default.createElement(FormSeparator_1.default, null)), applicationWinterDeadlineEnabled && react_1.default.createElement(FormField_1.default, {
    name: "application_deadline_winter_semester",
    label: (0, i18n_1._x)('Application deadline winter semester', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Datum im Format TT.MM. angeben. Weitere Termine k\u00F6nnen im Feld \u201EDetails und Anmerkungen\u201C eingetragen werden."
  }, react_1.default.createElement(DayMonthPicker_1.default, {
    onChange: value => {
      handleChange('application_deadline_winter_semester', value);
    },
    value: values.application_deadline_winter_semester
  })), applicationSummerDeadlineEnabled && react_1.default.createElement(FormField_1.default, {
    name: "application_deadline_summer_semester",
    label: (0, i18n_1._x)('Application deadline summer semester', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Datum im Format TT.MM. angeben. Weitere Termine k\u00F6nnen im Feld \u201EDetails und Anmerkungen\u201C eingetragen werden."
  }, react_1.default.createElement(DayMonthPicker_1.default, {
    onChange: value => {
      handleChange('application_deadline_summer_semester', value);
    },
    value: values.application_deadline_summer_semester
  })), (applicationWinterDeadlineEnabled || applicationSummerDeadlineEnabled) && react_1.default.createElement(FormSeparator_1.default, null), react_1.default.createElement(FormField_1.default, {
    name: "details_and_notes",
    label: (0, i18n_1._x)('Details and notes', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "evtl. zus\u00E4tzliche Infos zu Bewerbung und Einschreibung."
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.details_and_notes
  }, (languageCode, required) => react_1.default.createElement(ContentField_1.default, {
    key: `details_and_notes.${languageCode}`,
    onChange: value => {
      handleChange(`details_and_notes.${languageCode}`, value);
    },
    content: values.details_and_notes[languageCode],
    required: required
  }))), react_1.default.createElement(FormField_1.default, {
    name: "language_skills",
    label: (0, i18n_1._x)('Language skills', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Sprachkenntnisse, die f\u00FCr den Studiengang erforderlich sind."
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.language_skills
  }, (languageCode, required) => react_1.default.createElement(ContentField_1.default, {
    key: `language_skills.${languageCode}`,
    onChange: value => {
      handleChange(`language_skills.${languageCode}`, value);
    },
    content: values.language_skills[languageCode],
    required: required
  }))), humanitiesFacultyLanguageSkillsEnabled && react_1.default.createElement(FormField_1.default, {
    name: "language_skills_humanities_faculty",
    label: (0, i18n_1._x)('Language skills for Faculty of Humanities, Social Sciences, and Theology only', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Sprachkenntnisse, die auch in den ersten Semestern noch erworben werden k\u00F6nnen."
  }, react_1.default.createElement(ContentField_1.default, {
    key: "language_skills_humanities_faculty",
    onChange: value => {
      handleChange('language_skills_humanities_faculty', value);
    },
    content: values.language_skills_humanities_faculty
  })), react_1.default.createElement(FormField_1.default, {
    name: "german_language_skills_for_international_students",
    label: (0, i18n_1._x)('Language certificates/German language skills for international applicants', 'backoffice: degree program edit form', 'fau-degree-program'),
    required: true
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "german_language_skills_for_international_students",
    taxonomy: "germanLanguageSkillsForInternationalStudents",
    value: values.german_language_skills_for_international_students.id,
    onChange: term => {
      handleChange('german_language_skills_for_international_students', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  })))));
};
exports["default"] = AdmissionRequirements;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/Content.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/Content.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const FormField_1 = tslib_1.__importDefault(__webpack_require__(/*! components/FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx"));
const FormWrapper_1 = tslib_1.__importDefault(__webpack_require__(/*! components/Layouts/FormWrapper */ "./resources/ts/components/Layouts/FormWrapper.tsx"));
const DegreeProgramEditFormProvider_1 = __webpack_require__(/*! contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
const ContentField_1 = tslib_1.__importDefault(__webpack_require__(/*! ../ContentField */ "./resources/ts/components/ContentField/index.ts"));
const DegreeProgramCombinations_1 = tslib_1.__importDefault(__webpack_require__(/*! ../DegreeProgramCombinations */ "./resources/ts/components/DegreeProgramCombinations/index.ts"));
const MultilingualContainer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx"));
const CONTENT_ITEMS = {
  about: 'kurze Beschreibung des Studiengangs allgemein; ±200 Wörter',
  structure: 'Vorstellung des Fachs und der Studieninhalte; ±200 Wörter',
  specializations: 'Spezialisierungsmöglichkeiten und Schwerpunkte während des Studiums; ±200 Wörter',
  qualities_and_skills: 'Fähigkeiten und Vorlieben der Studieninteressierten, nicht formelle Voraussetzungen; ±200 Wörter',
  why_should_study: 'Einzigartigkeit bzw. Besonderheiten (z. B. Kooperationspartner, Verbundstudiumsangebot) des Studiengangs an der FAU; ±200 Wörter',
  career_prospects: 'mögliche Tätigkeitsfelder nach Abschluss des Studiums; ±200 Wörter',
  special_features: 'Möglichkeiten von Auslandsaufenthalten, Kooperationen mit Forschungsprojekten, etc.; ±200 Wörter'
};
const REQUIRED_FIELDS = ['about', 'structure'];
const Content = () => {
  const {
    values,
    handleChange
  } = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)();
  return react_1.default.createElement(components_1.Panel, null, react_1.default.createElement(components_1.PanelBody, null, react_1.default.createElement(FormWrapper_1.default, null, Object.keys(CONTENT_ITEMS).map(item => react_1.default.createElement(FormField_1.default, {
    key: item,
    name: `content.${item}.description`,
    label: `${values.content[item].title.de} ${values.content[item].title.en ? `(${values.content[item].title.en})` : ''}`,
    help: CONTENT_ITEMS[item],
    required: REQUIRED_FIELDS.includes(item)
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.content[item].description
  }, (languageCode, required) => react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(ContentField_1.default, {
    key: `content.${item}.description.${languageCode}`,
    content: values.content[item].description[languageCode],
    onChange: content => handleChange(`content.${item}.description.${languageCode}`, content),
    required: required
  }))))), react_1.default.createElement(DegreeProgramCombinations_1.default, null))));
};
exports["default"] = Content;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/DegreeProgramEditForm.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/DegreeProgramEditForm.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const Providers_1 = tslib_1.__importDefault(__webpack_require__(/*! contexts/Providers */ "./resources/ts/contexts/Providers.tsx"));
const Tabs_1 = tslib_1.__importDefault(__webpack_require__(/*! ../Tabs */ "./resources/ts/components/Tabs/index.ts"));
const AdmissionRequirements_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AdmissionRequirements */ "./resources/ts/components/DegreeProgramEditForm/AdmissionRequirements.tsx"));
const Content_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Content */ "./resources/ts/components/DegreeProgramEditForm/Content.tsx"));
const FormHeading_1 = tslib_1.__importDefault(__webpack_require__(/*! ./FormHeading */ "./resources/ts/components/DegreeProgramEditForm/FormHeading.tsx"));
const General_1 = tslib_1.__importDefault(__webpack_require__(/*! ./General */ "./resources/ts/components/DegreeProgramEditForm/General.tsx"));
const OrganizationalLinks_1 = tslib_1.__importDefault(__webpack_require__(/*! ./OrganizationalLinks */ "./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx"));
const TabTitle_1 = tslib_1.__importDefault(__webpack_require__(/*! ./TabTitle */ "./resources/ts/components/DegreeProgramEditForm/TabTitle.tsx"));
const DegreeProgramEditForm = () => {
  return react_1.default.createElement(Providers_1.default, null, react_1.default.createElement(FormHeading_1.default, null), react_1.default.createElement(Tabs_1.default, {
    tabs: [{
      name: 'general',
      title: react_1.default.createElement(TabTitle_1.default, {
        name: "general",
        title: (0, i18n_1._x)('At a glance', 'backoffice: Degree program edit form', 'fau-degree-program')
      }),
      component: react_1.default.createElement(General_1.default, null)
    }, {
      name: 'content',
      title: react_1.default.createElement(TabTitle_1.default, {
        name: "content",
        title: (0, i18n_1._x)('Content', 'backoffice: Degree program edit form', 'fau-degree-program')
      }),
      component: react_1.default.createElement(Content_1.default, null)
    }, {
      name: 'admission-requirements',
      title: react_1.default.createElement(TabTitle_1.default, {
        name: "admission-requirements",
        title: (0, i18n_1._x)('Admission requirements, application and enrollment', 'backoffice: Degree program edit form', 'fau-degree-program')
      }),
      component: react_1.default.createElement(AdmissionRequirements_1.default, null)
    }, {
      name: 'organizational-links',
      title: react_1.default.createElement(TabTitle_1.default, {
        name: "organizational-links",
        title: (0, i18n_1._x)('Organizational notes/links', 'backoffice: Degree program edit form', 'fau-degree-program')
      }),
      component: react_1.default.createElement(OrganizationalLinks_1.default, null)
    }]
  }));
};
exports["default"] = DegreeProgramEditForm;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/FormHeading.tsx":
/*!***********************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/FormHeading.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const DegreeProgramEditFormProvider_1 = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
const StyledHeading = styled_components_1.default.h1`
    font-size: 1.5rem;
`;
const FormHeading = () => {
  const {
    values
  } = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)();
  return react_1.default.createElement(StyledHeading, null, values.title.de, " ", react_1.default.createElement("br", null), react_1.default.createElement("small", null, values.title.en));
};
exports["default"] = FormHeading;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/General.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/General.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const FormField_1 = tslib_1.__importDefault(__webpack_require__(/*! components/FormField */ "./resources/ts/components/FormField/index.ts"));
const ImageField_1 = tslib_1.__importDefault(__webpack_require__(/*! components/ImageField */ "./resources/ts/components/ImageField/index.ts"));
const FormWrapper_1 = tslib_1.__importDefault(__webpack_require__(/*! components/Layouts/FormWrapper */ "./resources/ts/components/Layouts/FormWrapper.tsx"));
const LimitedInputControl_1 = tslib_1.__importDefault(__webpack_require__(/*! components/LimitedInputControl */ "./resources/ts/components/LimitedInputControl/index.ts"));
const TermSelector_1 = __webpack_require__(/*! components/TermSelector */ "./resources/ts/components/TermSelector/index.ts");
const TermSelector_2 = tslib_1.__importDefault(__webpack_require__(/*! components/TermSelector/TermSelector */ "./resources/ts/components/TermSelector/TermSelector.tsx"));
const TextControlCollection_1 = tslib_1.__importDefault(__webpack_require__(/*! components/TextControlCollection */ "./resources/ts/components/TextControlCollection/index.ts"));
const DegreeProgramEditFormProvider_1 = __webpack_require__(/*! contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
const idHelpers_1 = __webpack_require__(/*! util/idHelpers */ "./resources/ts/util/idHelpers.ts");
const transforms_1 = __webpack_require__(/*! util/transforms */ "./resources/ts/util/transforms.ts");
const ContentField_1 = tslib_1.__importDefault(__webpack_require__(/*! ../ContentField */ "./resources/ts/components/ContentField/index.ts"));
const FieldContextAwareTextareaControl_1 = tslib_1.__importDefault(__webpack_require__(/*! ../FormField/FieldContextAwareTextareaControl */ "./resources/ts/components/FormField/FieldContextAwareTextareaControl.tsx"));
const MultilingualContainer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx"));
const General = () => {
  const {
    values,
    handleChange
  } = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)();
  return react_1.default.createElement(components_1.Panel, null, react_1.default.createElement(components_1.PanelBody, null, react_1.default.createElement(FormWrapper_1.default, null, react_1.default.createElement(FormField_1.default, {
    name: "title",
    label: (0, i18n_1._x)('Title', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Studiengangsbezeichnung, ohne Abschluss.",
    fill: "half",
    required: true
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.title
  }, (languageCode, required) => react_1.default.createElement(components_1.TextControl, {
    onChange: value => {
      handleChange(`title.${languageCode}`, value);
    },
    value: values.title[languageCode],
    "aria-required": required
  }))), react_1.default.createElement(FormField_1.default, {
    name: "subtitle",
    label: (0, i18n_1._x)('Subtitle', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Z. B. Aufz\u00E4hlung der Studienschwerpunkte bei Wirtschaftswissenschaften.",
    fill: "half"
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.subtitle
  }, (languageCode, required) => react_1.default.createElement(components_1.TextControl, {
    onChange: value => {
      handleChange(`subtitle.${languageCode}`, value);
    },
    value: values.subtitle[languageCode],
    "aria-required": required
  }))), react_1.default.createElement(FormField_1.default, {
    name: "featured_image",
    fill: "half",
    label: (0, i18n_1._x)('Featured image', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Wird f\u00FCr die Detailansicht verwendet. Gr\u00F6\u00DFe: 1400 \u00D7 350 px.",
    required: true
  }, react_1.default.createElement(ImageField_1.default, {
    path: "featured_image"
  })), react_1.default.createElement(FormField_1.default, {
    name: "teaser_image",
    fill: "half",
    label: (0, i18n_1._x)('Teaser Image', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Wird f\u00FCr die Kacheln auf der Auswahlseite verwendet. Gr\u00F6\u00DFe: 500 \u00D7 500 px.",
    required: true
  }, react_1.default.createElement(ImageField_1.default, {
    path: "teaser_image"
  })), react_1.default.createElement(FormField_1.default, {
    name: "entry_text",
    fill: "full",
    label: (0, i18n_1._x)('Entry text (promotional)', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Ca. 300 Zeichen.",
    required: true
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.entry_text
  }, (languageCode, required) => react_1.default.createElement(ContentField_1.default, {
    key: `entry_text.${languageCode}`,
    content: values.entry_text[languageCode],
    onChange: content => {
      handleChange(`entry_text.${languageCode}`, content);
    },
    required: required
  }))), react_1.default.createElement(FormField_1.default, {
    name: "area_of_study",
    fill: "third",
    label: (0, i18n_1._x)('Area of study', 'backoffice: degree program edit form', 'fau-degree-program'),
    required: true
  }, react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "area_of_study",
    taxonomy: "areaOfStudy",
    value: values.area_of_study.map(term => term.id),
    onChange: terms => {
      handleChange('area_of_study', terms.map(transforms_1.transformTermToMultilingualLink));
    }
  })), react_1.default.createElement(FormField_1.default, {
    label: (0, i18n_1._x)('Start of degree program', 'backoffice: degree program edit form', 'fau-degree-program'),
    name: "start",
    fill: "third",
    required: true
  }, react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "semester",
    taxonomy: "semester",
    value: values.start.map(term => term.id),
    onChange: terms => {
      handleChange('start', terms.map(transforms_1.transformTermToMultilingualString));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "number_of_students",
    label: (0, i18n_1._x)('Number of students', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Gesamtzahl der Studierenden, nicht nur Erstsemester.",
    fill: "third",
    required: true
  }, react_1.default.createElement(TermSelector_2.default, {
    id: "number_of_students",
    taxonomy: "numberOfStudents",
    value: values.number_of_students.id,
    onChange: term => {
      handleChange('number_of_students', term ? {
        id: (0, idHelpers_1.propertyId)('term', term.id),
        name: term.name,
        description: term.description
      } : {
        id: '',
        name: '',
        description: ''
      });
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "teaching_language",
    label: (0, i18n_1._x)('Teaching language', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react_1.default.createElement(TermSelector_2.default, {
    id: "teaching-language",
    taxonomy: "teachingLanguage",
    value: values.teaching_language.id,
    onChange: term => {
      handleChange('teaching_language', (0, transforms_1.transformTermToMultilingualString)(term));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "attributes",
    label: (0, i18n_1._x)('Attributes', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third"
  }, react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "attribute",
    taxonomy: "attribute",
    value: values.attributes.map(term => term.id),
    onChange: terms => {
      handleChange('attributes', terms.map(transforms_1.transformTermToMultilingualString));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "degree",
    label: (0, i18n_1._x)('Degree', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react_1.default.createElement(TermSelector_2.default, {
    id: "degree",
    taxonomy: "degree",
    value: values.degree.id,
    childOnly: true,
    onChange: term => {
      handleChange('degree', (0, transforms_1.transformTermToDegree)(term));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "faculty",
    label: (0, i18n_1._x)('Faculty', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "faculty",
    taxonomy: "faculty",
    value: values.faculty.map(term => term.id),
    onChange: terms => {
      handleChange('faculty', terms.map(transforms_1.transformTermToMultilingualLink));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "location",
    label: (0, i18n_1._x)('Study location', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "study-location",
    taxonomy: "studyLocation",
    value: values.location.map(term => term.id),
    onChange: terms => {
      handleChange('location', terms.map(transforms_1.transformTermToMultilingualString));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "subject_groups",
    label: (0, i18n_1._x)('Subject groups', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "subject-group",
    taxonomy: "subjectGroup",
    value: values.subject_groups.map(term => term.id),
    onChange: terms => {
      handleChange('subject_groups', terms.map(transforms_1.transformTermToMultilingualString));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "keywords",
    label: (0, i18n_1._x)('Keywords', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "keywords",
    taxonomy: "keyword",
    value: values.keywords.map(term => term.id),
    onChange: terms => {
      handleChange('keywords', terms.map(transforms_1.transformTermToMultilingualString));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "videos",
    label: (0, i18n_1._x)('Videos', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Videos \u00FCber den Studiengang, das Studienfach, ein Thema des Fachs (z. B. 2-Minuten-Wissen), Erfahrungsberichte.",
    fill: "full",
    required: true
  }, react_1.default.createElement(TextControlCollection_1.default, {
    value: values.videos,
    onChange: value => {
      handleChange('videos', value);
    },
    type: "url",
    maxItems: 3
  })), react_1.default.createElement(FormField_1.default, {
    name: "standard_duration",
    label: (0, i18n_1._x)('Duration of studies in semester', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Nur Zahl.",
    fill: "full",
    required: true
  }, react_1.default.createElement(FieldContextAwareTextareaControl_1.default, {
    onChange: value => {
      handleChange('standard_duration', value);
    },
    value: values.standard_duration
  })), react_1.default.createElement(FormField_1.default, {
    name: "meta_description",
    label: (0, i18n_1._x)('Meta description', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Text f\u00FCr die Anzeige bei Suchmaschinen.",
    fill: "full",
    required: true
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.meta_description
  }, (languageCode, required) => react_1.default.createElement(LimitedInputControl_1.default, {
    value: values.meta_description[languageCode],
    maxChars: 160,
    required: required
  }, _ref => {
    let {
      updatedValue,
      required: controlRequired
    } = _ref;
    return react_1.default.createElement(components_1.TextareaControl, {
      value: values.meta_description[languageCode],
      onChange: text => {
        handleChange(`meta_description.${languageCode}`, updatedValue(text));
      },
      "aria-required": controlRequired
    });
  }))))));
};
exports["default"] = General;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
const FormField_1 = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
const tabs = Object.keys((0, serverData_1.default)().languages).map(languageCode => {
  const languageName = (0, serverData_1.default)().languages[languageCode];
  return {
    name: languageCode,
    title: languageName
  };
});
const MultilingualContainer = _ref => {
  let {
    children,
    value
  } = _ref;
  const {
    required
  } = (0, FormField_1.useFieldContext)();
  return react_1.default.createElement(components_1.TabPanel, {
    tabs: tabs.map(tab => {
      const isEmpty = tab.name !== 'de' && !value[tab.name];
      return Object.assign(Object.assign({}, tab), {
        title: isEmpty ? react_1.default.createElement(react_1.default.Fragment, null, tab.title, react_1.default.createElement("small", null, "\u00A0 (", (0, i18n_1._x)('empty', 'backoffice: Multilingual container', 'fau-degree-program'), ")")) : tab.title,
        className: isEmpty ? 'is-empty' : ''
      });
    }),
    className: "component-multilingual-container"
  }, tab => react_1.default.createElement(react_1.default.Fragment, null, children(tab.name, required)));
};
exports["default"] = MultilingualContainer;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const FieldContextAwareTextControl_1 = tslib_1.__importDefault(__webpack_require__(/*! components/FormField/FieldContextAwareTextControl */ "./resources/ts/components/FormField/FieldContextAwareTextControl.ts"));
const FormField_1 = tslib_1.__importDefault(__webpack_require__(/*! components/FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx"));
const FormWrapper_1 = tslib_1.__importDefault(__webpack_require__(/*! components/Layouts/FormWrapper */ "./resources/ts/components/Layouts/FormWrapper.tsx"));
const TermSelector_1 = tslib_1.__importDefault(__webpack_require__(/*! components/TermSelector */ "./resources/ts/components/TermSelector/index.ts"));
const DegreeProgramEditFormProvider_1 = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
const useConditionalFields_1 = __webpack_require__(/*! ../../hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
const transforms_1 = __webpack_require__(/*! ../../util/transforms */ "./resources/ts/util/transforms.ts");
const MultilingualContainer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx"));
const OrganizationalLinks = () => {
  const {
    values,
    handleChange
  } = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)();
  const degreeFeesEnabled = (0, useConditionalFields_1.useDegreeFeesEnabled)();
  return react_1.default.createElement(components_1.Panel, null, react_1.default.createElement(components_1.PanelBody, null, react_1.default.createElement(FormWrapper_1.default, null, react_1.default.createElement(FormField_1.default, {
    name: "apply_now_link",
    label: (0, i18n_1._x)('"Apply now" link', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "apply_now_link",
    taxonomy: "applyNowLink",
    value: values.apply_now_link.id,
    onChange: term => {
      handleChange('apply_now_link', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "examinations_office",
    label: (0, i18n_1._x)('Examinations Office', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "examinations_office",
    taxonomy: "examinationsOffice",
    value: values.examinations_office.id,
    onChange: term => {
      handleChange('examinations_office', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "module_handbook",
    label: (0, i18n_1._x)('Module handbook (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react_1.default.createElement(FieldContextAwareTextControl_1.default, {
    id: "module_handbook",
    onChange: handbook => {
      handleChange('module_handbook', handbook);
    },
    value: values.module_handbook,
    type: "url"
  })), react_1.default.createElement(FormField_1.default, {
    name: "url",
    label: (0, i18n_1._x)('Degree program (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.url
  }, (languageCode, required) => react_1.default.createElement(components_1.TextControl, {
    onChange: value => {
      handleChange(`url.${languageCode}`, value);
    },
    value: values.url[languageCode],
    type: "url",
    "aria-required": required
  }))), react_1.default.createElement(FormField_1.default, {
    name: "department",
    label: (0, i18n_1._x)('Department/Institute (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.department
  }, (languageCode, required) => react_1.default.createElement(components_1.TextControl, {
    onChange: value => {
      handleChange(`department.${languageCode}`, value);
    },
    value: values.department[languageCode],
    type: "url",
    "aria-required": required
  }))), react_1.default.createElement(FormField_1.default, {
    name: "subject_specific_advice",
    label: (0, i18n_1._x)('Subject-specific advice', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "subject_specific_advice",
    taxonomy: "subjectSpecificAdvice",
    value: values.subject_specific_advice.id,
    onChange: term => {
      handleChange('subject_specific_advice', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  })), react_1.default.createElement(FormField_1.default, {
    name: "info_brochure",
    label: (0, i18n_1._x)('Info brochure degree program (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third"
  }, react_1.default.createElement(FieldContextAwareTextControl_1.default, {
    id: "info_brochure",
    onChange: representatives => {
      handleChange('info_brochure', representatives);
    },
    value: values.info_brochure,
    type: "url"
  })), react_1.default.createElement(FormField_1.default, {
    name: "examination_regulations",
    label: (0, i18n_1._x)('Degree program and examination regulations (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react_1.default.createElement(FieldContextAwareTextControl_1.default, {
    onChange: value => {
      handleChange(`examination_regulations`, value);
    },
    value: values.examination_regulations,
    type: "url"
  })), react_1.default.createElement(FormField_1.default, {
    name: "fee_required",
    label: (0, i18n_1._x)('Fee required', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "full"
  }, react_1.default.createElement(components_1.ToggleControl, {
    checked: values.fee_required,
    onChange: checked => {
      handleChange('fee_required', checked);
    }
  })), degreeFeesEnabled && react_1.default.createElement(FormField_1.default, {
    name: "degree_program_fees",
    label: (0, i18n_1._x)('Degree Program Fees', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Studiengangsgeb\u00FChren, nicht Semesterbeitr\u00E4ge.",
    required: true
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.degree_program_fees
  }, (languageCode, required) => react_1.default.createElement(components_1.TextControl, {
    onChange: degreeProgramFees => {
      handleChange(`degree_program_fees.${languageCode}`, degreeProgramFees);
    },
    value: values.degree_program_fees[languageCode],
    "aria-required": required
  }))))));
};
exports["default"] = OrganizationalLinks;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/TabTitle.tsx":
/*!********************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/TabTitle.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const DegreeProgramValidationProvider_1 = __webpack_require__(/*! contexts/DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");
const constants_1 = __webpack_require__(/*! ./constants */ "./resources/ts/components/DegreeProgramEditForm/constants.ts");
const ErrorWrapper = styled_components_1.default.span`
    color: #cc1818;
`;
function useTabHasError(tabName) {
  var _a;
  const fields = (_a = constants_1.FIELDS_BY_TABS[tabName]) !== null && _a !== void 0 ? _a : [];
  const {
    fieldHasErrors
  } = (0, DegreeProgramValidationProvider_1.useValidation)();
  for (let i = 0; i < fields.length; i += 1) {
    if (fieldHasErrors(fields[i])) {
      return true;
    }
  }
  return false;
}
const TabTitle = _ref => {
  let {
    name,
    title
  } = _ref;
  const hasErrors = useTabHasError(name);
  if (!hasErrors) {
    return react_1.default.createElement(react_1.default.Fragment, null, title);
  }
  return react_1.default.createElement(ErrorWrapper, null, title);
};
exports["default"] = TabTitle;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/constants.ts":
/*!********************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/constants.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FIELDS_BY_TABS = void 0;
exports.FIELDS_BY_TABS = {
  general: ['title', 'subtitle', 'featured_image', 'teaser_image', 'entry_text', 'area_of_study', 'start', 'number_of_students', 'teaching_language', 'attributes', 'degree', 'faculty', 'location', 'subject_groups', 'keywords', 'videos', 'standard_duration'],
  content: ['content'],
  'admission-requirements': ['admission_requirements', 'content_related_master_requirements', 'application_deadline_winter_semester', 'application_deadline_summer_semester', 'details_and_notes', 'language_skills', 'language_skills_humanities_faculty', 'german_language_skills_for_international_students'],
  'organizational-links': ['apply_now_link', 'examinations_office', 'module_handbook', 'url', 'department', 'subject_specific_advice', 'info_brochure', 'examination_regulations', 'fee_required', 'degree_program_fees']
};
exports["default"] = {};

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/index.ts":
/*!****************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
__webpack_require__(/*! ./styles.scss */ "./resources/ts/components/DegreeProgramEditForm/styles.scss");
var DegreeProgramEditForm_1 = __webpack_require__(/*! ./DegreeProgramEditForm */ "./resources/ts/components/DegreeProgramEditForm/DegreeProgramEditForm.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(DegreeProgramEditForm_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/EntitySelector/EntitySelector.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/EntitySelector/EntitySelector.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const FormField_1 = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
__webpack_require__(/*! ./styles.scss */ "./resources/ts/components/EntitySelector/styles.scss");
function EntitySelector(_ref) {
  let {
    label = '',
    messages,
    maxLength,
    onChange,
    entityToToken,
    maxSuggestions,
    entities,
    searchedEntities,
    setSearch,
    childOnly
  } = _ref;
  const [isFocused, setIsFocused] = (0, react_1.useState)(false);
  const [values, setValues] = (0, react_1.useState)([]);
  const wrapperRef = (0, react_1.useRef)(null);
  const debouncedSearch = (0, compose_1.useDebounce)(setSearch, 500);
  (0, react_1.useEffect)(() => {
    if (entities.length > 0) {
      const newValues = entities.map(entityToToken);
      setValues(newValues);
    }
  }, [entities]);
  const suggestions = (0, react_1.useMemo)(() => {
    if (maxLength && values.length >= maxLength) {
      return [];
    }
    let results = [];
    const topLevelEntities = searchedEntities.filter(entity => !(entity === null || entity === void 0 ? void 0 : entity.parent));
    topLevelEntities.forEach(entity => {
      const children = searchedEntities.filter(childEntity => childEntity.parent === entity.id);
      results = [...results, entity, ...children];
    });
    return results.map(entityToToken);
  }, [searchedEntities, values]);
  const onChangeTokens = tokens => {
    const availableEntities = [...entities, ...searchedEntities];
    const uniqueTokens = (0, lodash_1.uniq)(tokens);
    setValues(uniqueTokens);
    const newEntities = uniqueTokens.map(token => (0, lodash_1.find)(availableEntities, entity => entityToToken(entity) === token));
    onChange(newEntities);
    setSearch('');
  };
  const isTokenValid = token => {
    const availableEntities = [...entities, ...searchedEntities];
    const foundEntity = (0, lodash_1.find)(availableEntities, entity => entityToToken(entity) === token);
    return childOnly ? foundEntity && (foundEntity === null || foundEntity === void 0 ? void 0 : foundEntity.parent) : foundEntity;
  };
  (0, react_1.useEffect)(() => {
    if (!wrapperRef.current || !isFocused) {
      return;
    }
    const suggestionsList = wrapperRef.current.querySelector('.components-form-token-field__suggestions-list');
    if (!suggestionsList) {
      return;
    }
    suggestionsList.tabIndex = -1;
  }, [isFocused]);
  return react_1.default.createElement("div", {
    className: "entity-selector",
    ref: wrapperRef
  }, react_1.default.createElement("div", {
    tabIndex: -1,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    role: "listbox",
    "aria-required": (0, FormField_1.useFieldContext)().required
  }, react_1.default.createElement(components_1.FormTokenField, {
    label: label,
    messages: messages,
    maxLength: maxLength,
    value: values,
    suggestions: suggestions,
    onChange: onChangeTokens,
    onInputChange: debouncedSearch,
    onFocus: () => setIsFocused(true),
    maxSuggestions: maxSuggestions,
    __experimentalShowHowTo: false,
    __experimentalValidateInput: isTokenValid,
    __experimentalExpandOnFocus: true
  })), isFocused && maxLength && values.length >= maxLength && react_1.default.createElement("p", {
    className: "entity-selector__max-items-notice"
  }, (0, i18n_1.sprintf)((0, i18n_1._nx)('You can only select %d item', 'You can only select %d items', maxLength, 'backoffice: selector message', 'fau-degree-program'), maxLength)));
}
exports["default"] = EntitySelector;

/***/ }),

/***/ "./resources/ts/components/EntitySelector/index.ts":
/*!*********************************************************!*\
  !*** ./resources/ts/components/EntitySelector/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var EntitySelector_1 = __webpack_require__(/*! ./EntitySelector */ "./resources/ts/components/EntitySelector/EntitySelector.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(EntitySelector_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/FormField/FieldContextAwareTextControl.ts":
/*!***************************************************************************!*\
  !*** ./resources/ts/components/FormField/FieldContextAwareTextControl.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const withAriaRequired_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withAriaRequired */ "./resources/ts/components/FormField/withAriaRequired.tsx"));
exports["default"] = (0, withAriaRequired_1.default)(components_1.TextControl);

/***/ }),

/***/ "./resources/ts/components/FormField/FieldContextAwareTextareaControl.tsx":
/*!********************************************************************************!*\
  !*** ./resources/ts/components/FormField/FieldContextAwareTextareaControl.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const withAriaRequired_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withAriaRequired */ "./resources/ts/components/FormField/withAriaRequired.tsx"));
exports["default"] = (0, withAriaRequired_1.default)(components_1.TextareaControl);

/***/ }),

/***/ "./resources/ts/components/FormField/FieldError.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/components/FormField/FieldError.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const nanoid_1 = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const StyledErrorWrapper = styled_components_1.default.p`
    color: #cc1818;
    font-size: 12px;
    margin: 5px 0 0;
    font-family: var(--default-font);
`;
const FieldError = _ref => {
  let {
    errors
  } = _ref;
  if (!errors.size) {
    return null;
  }
  return react_1.default.createElement(react_1.default.Fragment, null, Array.from(errors).map(_ref2 => {
    let [, error] = _ref2;
    return react_1.default.createElement(StyledErrorWrapper, {
      key: (0, nanoid_1.nanoid)()
    }, error.message);
  }));
};
exports["default"] = FieldError;

/***/ }),

/***/ "./resources/ts/components/FormField/FormField.tsx":
/*!*********************************************************!*\
  !*** ./resources/ts/components/FormField/FormField.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useFieldContext = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const FormFieldLabel_1 = tslib_1.__importDefault(__webpack_require__(/*! components/Layouts/FormFieldLabel */ "./resources/ts/components/Layouts/FormFieldLabel.tsx"));
const FormFieldWrapper_1 = tslib_1.__importDefault(__webpack_require__(/*! components/Layouts/FormFieldWrapper */ "./resources/ts/components/Layouts/FormFieldWrapper.tsx"));
const DegreeProgramValidationProvider_1 = __webpack_require__(/*! contexts/DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");
const FieldError_1 = tslib_1.__importDefault(__webpack_require__(/*! ./FieldError */ "./resources/ts/components/FormField/FieldError.tsx"));
const FormFieldContext = (0, react_1.createContext)({
  required: false
});
const useFieldContext = () => (0, react_1.useContext)(FormFieldContext);
exports.useFieldContext = useFieldContext;
const FormField = _a => {
  var {
      name,
      fill,
      children,
      label,
      help,
      wrapBaseControl = true,
      displayError = true,
      required = false
    } = _a,
    others = tslib_1.__rest(_a, ["name", "fill", "children", "label", "help", "wrapBaseControl", "displayError", "required"]);
  const {
    getFieldErrors
  } = (0, DegreeProgramValidationProvider_1.useValidation)();
  const suffixedLabel = required ? label : `${label} ${(0, i18n_1._x)('(optional)', 'backoffice: degree program edit form', 'fau-degree-program')}`;
  return react_1.default.createElement(FormFieldWrapper_1.default, Object.assign({
    fill: fill
  }, others), react_1.default.createElement(FormFieldContext.Provider, {
    value: {
      required
    }
  }, wrapBaseControl ? react_1.default.createElement(components_1.BaseControl, {
    label: react_1.default.createElement(FormFieldLabel_1.default, {
      label: suffixedLabel,
      help: help
    })
  }, children) : react_1.default.createElement(react_1.default.Fragment, null, children)), displayError && react_1.default.createElement(FieldError_1.default, {
    errors: getFieldErrors(name)
  }));
};
exports["default"] = FormField;

/***/ }),

/***/ "./resources/ts/components/FormField/defs.ts":
/*!***************************************************!*\
  !*** ./resources/ts/components/FormField/defs.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/components/FormField/index.ts":
/*!****************************************************!*\
  !*** ./resources/ts/components/FormField/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./defs */ "./resources/ts/components/FormField/defs.ts"), exports);
var FormField_1 = __webpack_require__(/*! ./FormField */ "./resources/ts/components/FormField/FormField.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return tslib_1.__importDefault(FormField_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/FormField/withAriaRequired.tsx":
/*!****************************************************************!*\
  !*** ./resources/ts/components/FormField/withAriaRequired.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
const FormField_1 = __webpack_require__(/*! ./FormField */ "./resources/ts/components/FormField/FormField.tsx");
const withAriaRequired = (0, compose_1.createHigherOrderComponent)(WrappedComponent => props => {
  const {
    required
  } = (0, FormField_1.useFieldContext)();
  return react_1.default.createElement(WrappedComponent, Object.assign({
    "aria-required": required
  }, props));
}, 'withAriaRequired');
exports["default"] = withAriaRequired;

/***/ }),

/***/ "./resources/ts/components/ImageField/ImageField.tsx":
/*!***********************************************************!*\
  !*** ./resources/ts/components/ImageField/ImageField.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const styled_components_1 = tslib_1.__importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const blob_1 = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
const block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const DegreeProgramEditFormProvider_1 = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
const FormField_1 = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
const useMedia_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMedia */ "./resources/ts/components/ImageField/useMedia.ts"));
const THUMBNAIL_SIZE = 150;
const StyledWrapper = styled_components_1.default.div`
    .components-placeholder__fieldset {
        ${_ref => {
  let {
    hasImage
  } = _ref;
  return hasImage ? (0, styled_components_1.css)`
                      .components-form-file-upload,
                      .block-editor-media-placeholder__cancel-button,
                      .components-button.is-tertiary {
                          display: none;
                      }
                  ` : '';
}}
        };
    }
`;
function ImageField(_ref2) {
  let {
    path,
    title = ''
  } = _ref2;
  const [isLoading, setIsLoading] = (0, react_1.useState)(false);
  const {
    values,
    handleChange
  } = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)();
  const selectedMedia = (0, useMedia_1.default)(values[path].id);
  const Preview = () => {
    var _a, _b, _c, _d;
    if (isLoading) {
      return react_1.default.createElement(components_1.Spinner, null);
    }
    if (!values[path].url) {
      return null;
    }
    return !selectedMedia ? react_1.default.createElement("div", {
      style: {
        width: THUMBNAIL_SIZE,
        height: THUMBNAIL_SIZE
      },
      className: "loader-card"
    }) : react_1.default.createElement("img", {
      width: THUMBNAIL_SIZE,
      src: (_d = (_c = (_b = (_a = selectedMedia === null || selectedMedia === void 0 ? void 0 : selectedMedia.media_details) === null || _a === void 0 ? void 0 : _a.sizes) === null || _b === void 0 ? void 0 : _b.thumbnail) === null || _c === void 0 ? void 0 : _c.source_url) !== null && _d !== void 0 ? _d : values[path].url,
      alt: "preview"
    });
  };
  const handleOnCancel = () => {
    handleChange(path, {
      id: 0,
      url: ''
    });
  };
  const handleOnSelect = _ref3 => {
    let {
      id,
      url
    } = _ref3;
    if ((0, blob_1.isBlobURL)(url)) {
      setIsLoading(true);
      return;
    }
    handleChange(path, {
      id,
      url
    });
    setIsLoading(false);
  };
  const hasMedia = () => !isLoading && !!(selectedMedia === null || selectedMedia === void 0 ? void 0 : selectedMedia.id);
  return react_1.default.createElement(block_editor_1.MediaUploadCheck, null, react_1.default.createElement(StyledWrapper, {
    hasImage: hasMedia(),
    "aria-required": (0, FormField_1.useFieldContext)().required,
    role: "combobox"
  }, react_1.default.createElement(block_editor_1.MediaPlaceholder, {
    value: [values[path].id],
    onSelect: handleOnSelect,
    onCancel: hasMedia() ? handleOnCancel : undefined,
    allowedTypes: ['image'],
    multiple: false,
    labels: {
      title
    },
    mediaPreview: react_1.default.createElement(Preview, null)
  }, hasMedia() && react_1.default.createElement(components_1.Flex, {
    gap: 4,
    justify: "flex-start"
  }, react_1.default.createElement(block_editor_1.MediaReplaceFlow, {
    mediaUrl: values[path].url,
    mediaId: values[path].id,
    allowedTypes: ['image'],
    onSelect: handleOnSelect
  }), react_1.default.createElement(components_1.Button, {
    variant: "primary",
    isDestructive: true,
    onClick: handleOnCancel
  }, (0, i18n_1.__)('Remove image'))))));
}
exports["default"] = ImageField;
ImageField.defaultProps = {
  title: ''
};

/***/ }),

/***/ "./resources/ts/components/ImageField/index.ts":
/*!*****************************************************!*\
  !*** ./resources/ts/components/ImageField/index.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var ImageField_1 = __webpack_require__(/*! ./ImageField */ "./resources/ts/components/ImageField/ImageField.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(ImageField_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/ImageField/useMedia.ts":
/*!********************************************************!*\
  !*** ./resources/ts/components/ImageField/useMedia.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
function useMedia(mediaId) {
  const media = (0, data_1.useSelect)(select => {
    return select('core').getMedia(mediaId);
  }, [mediaId]);
  return media;
}
exports["default"] = useMedia;

/***/ }),

/***/ "./resources/ts/components/Layouts/FormFieldLabel.tsx":
/*!************************************************************!*\
  !*** ./resources/ts/components/Layouts/FormFieldLabel.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const StyledLabel = styled_components_1.default.span`
    display: block;
`;
const StyledHelpText = styled_components_1.default.p`
    margin: 0;
    margin-top: 4px;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    color: rgb(117, 117, 117);
`;
const FormFieldLabel = _ref => {
  let {
    label,
    help
  } = _ref;
  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(StyledLabel, null, label), !!help && react_1.default.createElement(StyledHelpText, null, help));
};
FormFieldLabel.defaultProps = {
  help: undefined
};
exports["default"] = FormFieldLabel;

/***/ }),

/***/ "./resources/ts/components/Layouts/FormFieldWrapper.tsx":
/*!**************************************************************!*\
  !*** ./resources/ts/components/Layouts/FormFieldWrapper.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const style_definitions_1 = __webpack_require__(/*! ./style-definitions */ "./resources/ts/components/Layouts/style-definitions.tsx");
const FormFieldWrapper = _a => {
  var {
      children,
      fill = 'full'
    } = _a,
    others = tslib_1.__rest(_a, ["children", "fill"]);
  return react_1.default.createElement(style_definitions_1.StyledFormFieldWrapper, Object.assign({
    isBlock: fill === 'auto' || undefined,
    fill: fill
  }, others), children);
};
exports["default"] = FormFieldWrapper;

/***/ }),

/***/ "./resources/ts/components/Layouts/FormSeparator.tsx":
/*!***********************************************************!*\
  !*** ./resources/ts/components/Layouts/FormSeparator.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const style_definitions_1 = __webpack_require__(/*! ./style-definitions */ "./resources/ts/components/Layouts/style-definitions.tsx");
const FormSeparator = () => {
  return react_1.default.createElement(style_definitions_1.StyledFormFieldWrapper, {
    isBlock: undefined,
    fill: "full"
  }, react_1.default.createElement("hr", null));
};
exports["default"] = FormSeparator;

/***/ }),

/***/ "./resources/ts/components/Layouts/FormWrapper.tsx":
/*!*********************************************************!*\
  !*** ./resources/ts/components/Layouts/FormWrapper.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const style_definitions_1 = __webpack_require__(/*! ./style-definitions */ "./resources/ts/components/Layouts/style-definitions.tsx");
const FormWrapper = _a => {
  var {
      children
    } = _a,
    others = tslib_1.__rest(_a, ["children"]);
  return react_1.default.createElement(style_definitions_1.StyledFormWrapper, Object.assign({
    wrap: true,
    gap: 0,
    align: "flex-start"
  }, others), children);
};
exports["default"] = FormWrapper;

/***/ }),

/***/ "./resources/ts/components/Layouts/style-definitions.tsx":
/*!***************************************************************!*\
  !*** ./resources/ts/components/Layouts/style-definitions.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StyledFormWrapper = exports.StyledFormFieldWrapper = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const GAP_COLUMN = '15px';
const GAP_ROW = '15px';
exports.StyledFormFieldWrapper = (0, styled_components_1.default)(components_1.FlexItem)`
    padding-left: ${GAP_COLUMN};
    padding-right: ${GAP_COLUMN};
    margin-bottom: ${GAP_ROW};

    ${_ref => {
  let {
    fill
  } = _ref;
  return fill === 'full' && `
        width: 100%;
        flex: 0 0 100%;
    `;
}}

    ${_ref2 => {
  let {
    fill
  } = _ref2;
  return fill === 'half' && `
        width: 50%;
        flex: 0 0 50%;
    `;
}}

    ${_ref3 => {
  let {
    fill
  } = _ref3;
  return fill === 'third' && `
        width: 33.333333333%;
        flex: 0 0 33.333333333%;
    `;
}}
`;
exports.StyledFormWrapper = (0, styled_components_1.default)(components_1.Flex)`
    margin: 0 -${GAP_COLUMN};
`;

/***/ }),

/***/ "./resources/ts/components/LimitedInputControl/LimitedInputControl.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/ts/components/LimitedInputControl/LimitedInputControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const CircularProgress_1 = tslib_1.__importDefault(__webpack_require__(/*! components/CircularProgress */ "./resources/ts/components/CircularProgress/index.ts"));
const LimitedInputControl = _ref => {
  let {
    maxChars,
    children,
    value,
    required = false
  } = _ref;
  const [charsLeft, setCharsLeft] = (0, react_1.useState)(maxChars);
  (0, react_1.useEffect)(() => {
    setCharsLeft(maxChars - value.length);
  }, [value, maxChars]);
  const updatedValue = text => {
    return text.length <= maxChars ? text : text.substring(0, maxChars);
  };
  return react_1.default.createElement(react_1.default.Fragment, null, children({
    updatedValue,
    maxChars,
    required
  }), react_1.default.createElement(components_1.Flex, {
    justify: "flex-start"
  }, react_1.default.createElement(CircularProgress_1.default, {
    percentage: charsLeft * 100 / maxChars,
    squareSize: 16
  }), react_1.default.createElement("small", null, (0, i18n_1._x)('%s characters left', 'backoffice: limited text input', 'fau-degree-program').replace('%s', charsLeft.toString()))));
};
LimitedInputControl.defaultProps = {
  required: false
};
exports["default"] = LimitedInputControl;

/***/ }),

/***/ "./resources/ts/components/LimitedInputControl/index.ts":
/*!**************************************************************!*\
  !*** ./resources/ts/components/LimitedInputControl/index.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var LimitedInputControl_1 = __webpack_require__(/*! ./LimitedInputControl */ "./resources/ts/components/LimitedInputControl/LimitedInputControl.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(LimitedInputControl_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/Tabs/Tabs.tsx":
/*!***********************************************!*\
  !*** ./resources/ts/components/Tabs/Tabs.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const Tabs = _ref => {
  let {
    tabs
  } = _ref;
  return react_1.default.createElement(components_1.TabPanel, {
    tabs: tabs
  }, tab => react_1.default.createElement(react_1.default.Fragment, null, tab.component));
};
exports["default"] = Tabs;

/***/ }),

/***/ "./resources/ts/components/Tabs/defs.ts":
/*!**********************************************!*\
  !*** ./resources/ts/components/Tabs/defs.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/components/Tabs/index.ts":
/*!***********************************************!*\
  !*** ./resources/ts/components/Tabs/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./defs */ "./resources/ts/components/Tabs/defs.ts"), exports);
var Tabs_1 = __webpack_require__(/*! ./Tabs */ "./resources/ts/components/Tabs/Tabs.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return tslib_1.__importDefault(Tabs_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/TermSelector/MultiTermSelector.tsx":
/*!********************************************************************!*\
  !*** ./resources/ts/components/TermSelector/MultiTermSelector.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
const EntitySelector_1 = tslib_1.__importDefault(__webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts"));
const hoc_1 = __webpack_require__(/*! ./hoc */ "./resources/ts/components/TermSelector/hoc/index.ts");
exports["default"] = (0, compose_1.compose)(hoc_1.withTermSelectorProps, hoc_1.withDegreeProgramTerms, hoc_1.withSearchedDegreeProgramTerms)(EntitySelector_1.default);

/***/ }),

/***/ "./resources/ts/components/TermSelector/TermSelector.tsx":
/*!***************************************************************!*\
  !*** ./resources/ts/components/TermSelector/TermSelector.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
const EntitySelector_1 = tslib_1.__importDefault(__webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts"));
const hoc_1 = __webpack_require__(/*! ./hoc */ "./resources/ts/components/TermSelector/hoc/index.ts");
const withSingleTermSelectorProps = (0, compose_1.createHigherOrderComponent)(WrappedComponent => _a => {
  var {
      onChange
    } = _a,
    others = tslib_1.__rest(_a, ["onChange"]);
  return react_1.default.createElement(WrappedComponent, Object.assign({
    onChange: terms => {
      if (terms.length === 0) {
        onChange(null);
        return;
      }
      onChange(terms[0]);
    },
    maxLength: 1
  }, others));
}, 'withSingleTermSelectorProps');
exports["default"] = (0, compose_1.compose)(withSingleTermSelectorProps, hoc_1.withTermSelectorProps, hoc_1.withDegreeProgramTerms, hoc_1.withSearchedDegreeProgramTerms)(EntitySelector_1.default);

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/index.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withTermSelectorProps = exports.withSearchedDegreeProgramTerms = exports.withDegreeProgramTerms = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const withDegreeProgramTerms_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withDegreeProgramTerms */ "./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts"));
exports.withDegreeProgramTerms = withDegreeProgramTerms_1.default;
const withSearchedDegreeProgramTerms_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withSearchedDegreeProgramTerms */ "./resources/ts/components/TermSelector/hoc/withSearchedDegreeProgramTerms.ts"));
exports.withSearchedDegreeProgramTerms = withSearchedDegreeProgramTerms_1.default;
const withTermSelectorProps_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withTermSelectorProps */ "./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx"));
exports.withTermSelectorProps = withTermSelectorProps_1.default;

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts":
/*!****************************************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const idHelpers_1 = __webpack_require__(/*! util/idHelpers */ "./resources/ts/util/idHelpers.ts");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
const withDegreeProgramTerms = (0, data_1.withSelect)((select, ownProps) => {
  var _a;
  const {
    getEntityRecords
  } = select(core_data_1.store.name);
  if ((0, lodash_1.isEmpty)(ownProps.value)) {
    return {
      entities: []
    };
  }
  const ids = ((0, lodash_1.isArray)(ownProps.value) ? ownProps.value : [ownProps.value]).map(idHelpers_1.entityId);
  const query = Object.assign({
    per_page: -1,
    orderby: 'include',
    context: 'view'
  }, {
    include: ids.join(',')
  });
  return {
    entities: (_a = getEntityRecords('taxonomy', (0, serverData_1.default)().taxonomySlugs[ownProps.taxonomy], query)) !== null && _a !== void 0 ? _a : []
  };
});
exports["default"] = withDegreeProgramTerms;

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/withSearchedDegreeProgramTerms.ts":
/*!************************************************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/withSearchedDegreeProgramTerms.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = __webpack_require__(/*! react */ "react");
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
const withSearchedDegreeProgramTerms = (0, data_1.withSelect)((select, ownProps) => {
  const [search, setSearch] = (0, react_1.useState)('');
  const {
    getEntityRecords
  } = select(core_data_1.store.name);
  const terms = getEntityRecords('taxonomy', (0, serverData_1.default)().taxonomySlugs[ownProps.taxonomy], Object.assign({
    per_page: ownProps.maxSuggestions,
    orderby: 'name',
    order: 'asc',
    context: 'view'
  }, {
    search
  }));
  return {
    searchedEntities: terms !== null && terms !== void 0 ? terms : [],
    setSearch
  };
});
exports["default"] = withSearchedDegreeProgramTerms;

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx":
/*!****************************************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
const html_entities_1 = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
const withTermSelectorProps = (0, compose_1.createHigherOrderComponent)(WrappedComponent => _a => {
  var {
      id,
      help
    } = _a,
    others = tslib_1.__rest(_a, ["id", "help"]);
  return react_1.default.createElement(components_1.BaseControl, {
    id: id,
    help: help !== null && help !== void 0 ? help : ''
  }, react_1.default.createElement(WrappedComponent, Object.assign({
    entityToToken: term => {
      if (term.parent) {
        return `--- ${(0, html_entities_1.decodeEntities)(term.name)}`;
      }
      return (0, html_entities_1.decodeEntities)(term.name);
    },
    maxSuggestions: 100
  }, others)));
}, 'withSelectorProps');
exports["default"] = withTermSelectorProps;

/***/ }),

/***/ "./resources/ts/components/TermSelector/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/components/TermSelector/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.MultiTermSelector = void 0;
var MultiTermSelector_1 = __webpack_require__(/*! ./MultiTermSelector */ "./resources/ts/components/TermSelector/MultiTermSelector.tsx");
Object.defineProperty(exports, "MultiTermSelector", ({
  enumerable: true,
  get: function () {
    return __importDefault(MultiTermSelector_1).default;
  }
}));
var TermSelector_1 = __webpack_require__(/*! ./TermSelector */ "./resources/ts/components/TermSelector/TermSelector.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(TermSelector_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/components/TextControlCollection/TextControlCollection.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/TextControlCollection/TextControlCollection.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const immer_1 = tslib_1.__importDefault(__webpack_require__(/*! immer */ "./node_modules/immer/dist/index.js"));
const nanoid_1 = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
const components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const FormField_1 = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
const transformRawValue = value => {
  return value.map(str => ({
    value: str,
    id: (0, nanoid_1.nanoid)()
  }));
};
const StyledFieldRow = (0, styled_components_1.default)(components_1.Flex)`
    align-items: stretch;
    margin-bottom: 5px;

    > .components-base-control {
        flex: 1;

        .components-base-control__field,
        .components-text-control__input {
            margin-bottom: 0;
            height: 100%;
        }
    }
`;
const StyledNoItemsMessage = styled_components_1.default.p`
    background-color: #eee;
    padding: 10px;
    border-radius: 2px;
`;
const TextControlCollection = _ref => {
  let {
    emptyMessage = undefined,
    value,
    onChange,
    type = 'text',
    maxItems
  } = _ref;
  const initialValue = value.length ? value : [''];
  const [fields, setFields] = (0, react_1.useState)(transformRawValue(initialValue));
  (0, react_1.useEffect)(() => {
    onChange(fields.filter(f => !!f.value).map(f => f.value));
  }, [fields]);
  const {
    required
  } = (0, FormField_1.useFieldContext)();
  return react_1.default.createElement("div", null, fields.map((field, index) => react_1.default.createElement(StyledFieldRow, {
    key: field.id
  }, react_1.default.createElement(components_1.TextControl, {
    value: field.value,
    onChange: text => {
      setFields((0, immer_1.default)(fields, draft => {
        draft[index].value = text;
      }));
    },
    type: type,
    "aria-required": required
  }), react_1.default.createElement(components_1.Button, {
    isDestructive: true,
    onClick: () => {
      setFields([...fields.filter(f => f.id !== field.id)]);
    }
  }, react_1.default.createElement(components_1.Icon, {
    icon: "no"
  }), react_1.default.createElement(components_1.VisuallyHidden, null, (0, i18n_1._x)('Remove', 'backoffice: TextControlCollection', 'fau-degree-program'))))), fields.length === 0 && react_1.default.createElement(StyledNoItemsMessage, null, emptyMessage !== null && emptyMessage !== void 0 ? emptyMessage : (0, i18n_1._x)('No items added yet', 'backoffice: text control collection', 'fau-degree-program')), (!maxItems || fields.length < maxItems) && react_1.default.createElement(components_1.Button, {
    onClick: () => {
      setFields((0, immer_1.default)(fields, draft => {
        draft.push({
          id: (0, nanoid_1.nanoid)(),
          value: ''
        });
      }));
    },
    variant: "primary"
  }, (0, i18n_1._x)('Add', 'backoffice: TextControlCollection', 'fau-degree-program')));
};
TextControlCollection.defaultProps = {
  emptyMessage: undefined,
  type: 'text'
};
exports["default"] = TextControlCollection;

/***/ }),

/***/ "./resources/ts/components/TextControlCollection/index.ts":
/*!****************************************************************!*\
  !*** ./resources/ts/components/TextControlCollection/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var TextControlCollection_1 = __webpack_require__(/*! ./TextControlCollection */ "./resources/ts/components/TextControlCollection/TextControlCollection.tsx");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return __importDefault(TextControlCollection_1).default;
  }
}));

/***/ }),

/***/ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx":
/*!*****************************************************************!*\
  !*** ./resources/ts/contexts/DegreeProgramEditFormProvider.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useEditDegreeProgram = exports.DegreeProgramEditFormContext = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const immer_1 = tslib_1.__importDefault(__webpack_require__(/*! immer */ "./node_modules/immer/dist/index.js"));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const editor_1 = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
const DegreeProgramValidationProvider_1 = __webpack_require__(/*! ./DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");
exports.DegreeProgramEditFormContext = (0, react_1.createContext)({});
const DegreeProgramEditFormProvider = _ref => {
  let {
    children
  } = _ref;
  const [degreeProgramData, setDegreeProgramData] = (0, core_data_1.useEntityProp)('postType', (0, serverData_1.default)().postType, (0, serverData_1.default)().propertyName);
  const {
    removeError
  } = (0, DegreeProgramValidationProvider_1.useValidation)();
  const {
    editPost
  } = (0, data_1.useDispatch)(editor_1.store);
  const enablePostPublishButton = (path, val) => {
    if (path === 'title.de' && typeof val === 'string') {
      editPost({
        excerpt: val
      });
    }
  };
  const handleChange = (0, react_1.useCallback)((path, val) => {
    removeError(path);
    setDegreeProgramData((0, immer_1.default)(degreeProgramData, draft => (0, lodash_1.set)(draft, path, val)));
    enablePostPublishButton(path, val);
  }, [setDegreeProgramData, degreeProgramData, removeError]);
  return react_1.default.createElement(exports.DegreeProgramEditFormContext.Provider, {
    value: {
      handleChange,
      values: degreeProgramData
    }
  }, children);
};
const useEditDegreeProgram = () => (0, react_1.useContext)(exports.DegreeProgramEditFormContext);
exports.useEditDegreeProgram = useEditDegreeProgram;
exports["default"] = DegreeProgramEditFormProvider;

/***/ }),

/***/ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/contexts/DegreeProgramValidationProvider.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useValidation = exports.DegreeProgramValidationContext = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
const editor_1 = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
const errorTransforms_1 = __webpack_require__(/*! util/errorTransforms */ "./resources/ts/util/errorTransforms.ts");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
exports.DegreeProgramValidationContext = (0, react_1.createContext)({});
const transformServerError = serverError => {
  var _a;
  const errors = new Map();
  if (serverError.code !== 'rest_invalid_param') {
    return errors;
  }
  const errorDetails = (_a = serverError.data) === null || _a === void 0 ? void 0 : _a.params;
  if (typeof errorDetails === 'undefined') {
    return errors;
  }
  Object.entries(errorDetails).forEach(detail => {
    const error = {
      errorCode: detail[1].code || '',
      message: detail[1].message
    };
    errors.set(detail[0], Object.assign(Object.assign({}, error), {
      message: (0, errorTransforms_1.transformErrorMessage)(detail[0], error)
    }));
  });
  return errors;
};
const DegreeProgramValidationProvider = _ref => {
  let {
    children
  } = _ref;
  const [errors, setErrors] = (0, react_1.useState)(new Map());
  const [isSaving, setIsSaving] = (0, react_1.useState)(false);
  const postId = (0, data_1.useSelect)(selectCb => {
    const {
      getCurrentPostId
    } = selectCb(editor_1.store);
    return getCurrentPostId();
  }, []);
  const {
    editPost
  } = (0, data_1.useDispatch)(editor_1.store);
  const getFieldErrors = fieldId => {
    return new Map(Array.from(errors).filter(_ref2 => {
      let [key] = _ref2;
      const isOnSameRootFieldName = key.split('.')[0] === fieldId.split('.')[0];
      return isOnSameRootFieldName && key.substring(0, fieldId.length) === fieldId;
    }));
  };
  const fieldHasErrors = (0, react_1.useCallback)(fieldId => {
    const fieldErrors = getFieldErrors(fieldId);
    return fieldErrors.size > 0;
  }, [getFieldErrors]);
  const removeError = fieldId => {
    setErrors(prevErrors => {
      const newErrors = new Map(prevErrors);
      newErrors.delete(fieldId);
      newErrors.delete(`${fieldId}.id`);
      return newErrors;
    });
  };
  (0, data_1.subscribe)(() => {
    const {
      isSavingPost,
      isAutosavingPost
    } = (0, data_1.select)(editor_1.store);
    setIsSaving(isSavingPost() && !isAutosavingPost());
  });
  (0, react_1.useEffect)(() => {
    if (isSaving) {
      return;
    }
    if (!postId) {
      return;
    }
    const serverErrors = (0, data_1.select)(core_data_1.store).getLastEntitySaveError('postType', (0, serverData_1.default)().postType, postId);
    if (!serverErrors) {
      setErrors(new Map());
      return;
    }
    editPost({
      status: 'draft'
    }, {
      undoIgnore: true
    });
    setErrors(new Map([...transformServerError(serverErrors)]));
  }, [isSaving, postId]);
  return react_1.default.createElement(exports.DegreeProgramValidationContext.Provider, {
    value: {
      errors,
      getFieldErrors,
      removeError,
      fieldHasErrors
    }
  }, children);
};
const useValidation = () => (0, react_1.useContext)(exports.DegreeProgramValidationContext);
exports.useValidation = useValidation;
exports["default"] = DegreeProgramValidationProvider;

/***/ }),

/***/ "./resources/ts/contexts/Providers.tsx":
/*!*********************************************!*\
  !*** ./resources/ts/contexts/Providers.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const DegreeProgramEditFormProvider_1 = tslib_1.__importDefault(__webpack_require__(/*! ./DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx"));
const DegreeProgramValidationProvider_1 = tslib_1.__importDefault(__webpack_require__(/*! ./DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx"));
const Providers = _ref => {
  let {
    children
  } = _ref;
  return react_1.default.createElement(DegreeProgramValidationProvider_1.default, null, react_1.default.createElement(DegreeProgramEditFormProvider_1.default, null, children));
};
exports["default"] = Providers;

/***/ }),

/***/ "./resources/ts/defs.ts":
/*!******************************!*\
  !*** ./resources/ts/defs.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./defs/common */ "./resources/ts/defs/common.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/core-data */ "./resources/ts/defs/core-data.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/degree-program-data */ "./resources/ts/defs/degree-program-data.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/entity-selector */ "./resources/ts/defs/entity-selector.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/errors */ "./resources/ts/defs/errors.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/generic */ "./resources/ts/defs/generic.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/server-data */ "./resources/ts/defs/server-data.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/term */ "./resources/ts/defs/term.ts"), exports);

/***/ }),

/***/ "./resources/ts/defs/common.ts":
/*!*************************************!*\
  !*** ./resources/ts/defs/common.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/core-data.ts":
/*!****************************************!*\
  !*** ./resources/ts/defs/core-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/degree-program-data.ts":
/*!**************************************************!*\
  !*** ./resources/ts/defs/degree-program-data.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEGREE_ABBREVIATION_GERMAN = void 0;
exports.DEGREE_ABBREVIATION_GERMAN = {
  BACHELOR: 'BA',
  MASTERS: 'MA',
  TEACHING_DEGREE: 'LA'
};

/***/ }),

/***/ "./resources/ts/defs/entity-selector.ts":
/*!**********************************************!*\
  !*** ./resources/ts/defs/entity-selector.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/errors.ts":
/*!*************************************!*\
  !*** ./resources/ts/defs/errors.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/generic.ts":
/*!**************************************!*\
  !*** ./resources/ts/defs/generic.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/server-data.ts":
/*!******************************************!*\
  !*** ./resources/ts/defs/server-data.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/term.ts":
/*!***********************************!*\
  !*** ./resources/ts/defs/term.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/hooks/constants.ts":
/*!*****************************************!*\
  !*** ./resources/ts/hooks/constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ADDITIONAL_DEGREE_NAME = exports.ADMISSION_REQUIREMENT_FREE = exports.SEMESTER_WINTER = exports.SEMESTER_SUMMER = exports.FACULTY_NATURAL_SCIENCES = exports.FACULTY_PHILOSOPHY = void 0;
exports.FACULTY_PHILOSOPHY = 'phil';
exports.FACULTY_NATURAL_SCIENCES = 'nat';
exports.SEMESTER_SUMMER = 'Sommersemester';
exports.SEMESTER_WINTER = 'Wintersemester';
exports.ADMISSION_REQUIREMENT_FREE = 'frei';
exports.ADDITIONAL_DEGREE_NAME = 'Weiteres';

/***/ }),

/***/ "./resources/ts/hooks/useConditionalFields.ts":
/*!****************************************************!*\
  !*** ./resources/ts/hooks/useConditionalFields.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useApplicationDeadlineWinterSemesterEnabled = exports.useApplicationDeadlineSummerSemesterEnabled = exports.useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled = exports.useAdmissionRequirementsForMastersDegree = exports.useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled = exports.useAdmissionRequirementsForBachelorAndTeachingDegreesEnable = exports.useCombinationOfDegreeProgramEnabled = exports.useDegreeFeesEnabled = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const useTaxonomyTerm_1 = __webpack_require__(/*! hooks/useTaxonomyTerm */ "./resources/ts/hooks/useTaxonomyTerm.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./resources/ts/hooks/constants.ts");
const useDegreeProgramProperty_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useDegreeProgramProperty */ "./resources/ts/hooks/useDegreeProgramProperty.ts"));
const defs_1 = __webpack_require__(/*! defs */ "./resources/ts/defs.ts");
const ALLOWED_FACULTY_SLUGS_FOR_COMBINATION = [constants_1.FACULTY_PHILOSOPHY, constants_1.FACULTY_NATURAL_SCIENCES];
function isBachelorContext(degree) {
  var _a, _b, _c;
  const parentDegree = (_c = (_b = (_a = degree.parent) === null || _a === void 0 ? void 0 : _a.abbreviation) === null || _b === void 0 ? void 0 : _b.de) !== null && _c !== void 0 ? _c : '';
  return degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.BACHELOR || parentDegree === defs_1.DEGREE_ABBREVIATION_GERMAN.BACHELOR || degree.name.de === constants_1.ADDITIONAL_DEGREE_NAME;
}
function isTeachingDegreeContext(degree) {
  var _a, _b, _c;
  const parentDegree = (_c = (_b = (_a = degree.parent) === null || _a === void 0 ? void 0 : _a.abbreviation) === null || _b === void 0 ? void 0 : _b.de) !== null && _c !== void 0 ? _c : '';
  return degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE || parentDegree === defs_1.DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE;
}
function useDegreeFeesEnabled() {
  const [feeRequired] = (0, useDegreeProgramProperty_1.default)('fee_required');
  return !!feeRequired;
}
exports.useDegreeFeesEnabled = useDegreeFeesEnabled;
function useCombinationOfDegreeProgramEnabled() {
  const facultyTerms = (0, useTaxonomyTerm_1.useFacultyTerms)();
  const [degree] = (0, useDegreeProgramProperty_1.default)('degree');
  if (!facultyTerms.length || !degree) {
    return false;
  }
  return !!facultyTerms.find(facultyItem => ALLOWED_FACULTY_SLUGS_FOR_COMBINATION.includes(facultyItem.slug)) && isBachelorContext(degree);
}
exports.useCombinationOfDegreeProgramEnabled = useCombinationOfDegreeProgramEnabled;
function useAdmissionRequirementsForBachelorAndTeachingDegreesEnable() {
  const [degree] = (0, useDegreeProgramProperty_1.default)('degree');
  if (!degree) {
    return false;
  }
  return isBachelorContext(degree) || isTeachingDegreeContext(degree);
}
exports.useAdmissionRequirementsForBachelorAndTeachingDegreesEnable = useAdmissionRequirementsForBachelorAndTeachingDegreesEnable;
function useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled() {
  var _a, _b;
  const enabled = useAdmissionRequirementsForBachelorAndTeachingDegreesEnable();
  const [bachelorOrTeachingAdmissionRequirement] = (0, useDegreeProgramProperty_1.default)('admission_requirements.bachelor_or_teaching_degree');
  if (!bachelorOrTeachingAdmissionRequirement) {
    return false;
  }
  return enabled && bachelorOrTeachingAdmissionRequirement.name.de !== constants_1.ADMISSION_REQUIREMENT_FREE && ((_b = (_a = bachelorOrTeachingAdmissionRequirement === null || bachelorOrTeachingAdmissionRequirement === void 0 ? void 0 : bachelorOrTeachingAdmissionRequirement.parent) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.de) !== constants_1.ADMISSION_REQUIREMENT_FREE;
}
exports.useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled = useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled;
function useAdmissionRequirementsForMastersDegree() {
  var _a, _b;
  const [degree] = (0, useDegreeProgramProperty_1.default)('degree');
  if (!degree) {
    return false;
  }
  return degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.MASTERS || ((_b = (_a = degree === null || degree === void 0 ? void 0 : degree.parent) === null || _a === void 0 ? void 0 : _a.abbreviation) === null || _b === void 0 ? void 0 : _b.de) === defs_1.DEGREE_ABBREVIATION_GERMAN.MASTERS;
}
exports.useAdmissionRequirementsForMastersDegree = useAdmissionRequirementsForMastersDegree;
function useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled() {
  const [degree] = (0, useDegreeProgramProperty_1.default)('degree');
  const facultyTerms = (0, useTaxonomyTerm_1.useFacultyTerms)();
  if (!degree || !facultyTerms.length) {
    return false;
  }
  return (isBachelorContext(degree) || isTeachingDegreeContext(degree)) && !!facultyTerms.find(facultyItem => facultyItem.slug === constants_1.FACULTY_PHILOSOPHY);
}
exports.useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled = useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled;
function useSemestersContain(name) {
  const [semesters] = (0, useDegreeProgramProperty_1.default)('start');
  if (!semesters) {
    return false;
  }
  return !!semesters.find(semester => semester.de === name);
}
function useApplicationDeadlineSummerSemesterEnabled() {
  return useSemestersContain(constants_1.SEMESTER_SUMMER);
}
exports.useApplicationDeadlineSummerSemesterEnabled = useApplicationDeadlineSummerSemesterEnabled;
function useApplicationDeadlineWinterSemesterEnabled() {
  return useSemestersContain(constants_1.SEMESTER_WINTER);
}
exports.useApplicationDeadlineWinterSemesterEnabled = useApplicationDeadlineWinterSemesterEnabled;

/***/ }),

/***/ "./resources/ts/hooks/useDegreeProgramProperty.ts":
/*!********************************************************!*\
  !*** ./resources/ts/hooks/useDegreeProgramProperty.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const immer_1 = tslib_1.__importDefault(__webpack_require__(/*! immer */ "./node_modules/immer/dist/index.js"));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const DegreeProgramValidationProvider_1 = __webpack_require__(/*! contexts/DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
function useDegreeProgramProperty(path) {
  const [degreeProgramData, setDegreeProgramData] = (0, core_data_1.useEntityProp)('postType', (0, serverData_1.default)().postType, (0, serverData_1.default)().propertyName);
  const {
    removeError
  } = (0, DegreeProgramValidationProvider_1.useValidation)();
  return [(0, lodash_1.get)(degreeProgramData, path), val => {
    removeError(path);
    setDegreeProgramData((0, immer_1.default)(degreeProgramData, draft => (0, lodash_1.set)(draft, path, val)));
  }];
}
exports["default"] = useDegreeProgramProperty;

/***/ }),

/***/ "./resources/ts/hooks/useTaxonomyTerm.ts":
/*!***********************************************!*\
  !*** ./resources/ts/hooks/useTaxonomyTerm.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useFacultyTerms = exports.useTaxonomyTerms = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
const idHelpers_1 = __webpack_require__(/*! util/idHelpers */ "./resources/ts/util/idHelpers.ts");
const serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
const useDegreeProgramProperty_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useDegreeProgramProperty */ "./resources/ts/hooks/useDegreeProgramProperty.ts"));
function useTaxonomyTerm(id, taxonomy) {
  const termId = (0, idHelpers_1.entityId)(id);
  const {
    record,
    isResolving
  } = (0, core_data_1.useEntityRecord)('taxonomy', taxonomy, termId);
  if (isResolving) {
    return null;
  }
  return record;
}
exports["default"] = useTaxonomyTerm;
function useTaxonomyTerms(ids, taxonomy) {
  const termIds = ids.map(id => (0, idHelpers_1.entityId)(id));
  const {
    records,
    isResolving
  } = (0, core_data_1.useEntityRecords)('taxonomy', taxonomy, {
    include: termIds,
    per_page: -1
  });
  if (!termIds.length || !records || isResolving) {
    return [];
  }
  return records;
}
exports.useTaxonomyTerms = useTaxonomyTerms;
function useFacultyTerms() {
  var _a;
  const [faculty] = (0, useDegreeProgramProperty_1.default)('faculty');
  const facultyTerms = useTaxonomyTerms((_a = faculty === null || faculty === void 0 ? void 0 : faculty.map(facultyItem => facultyItem.id)) !== null && _a !== void 0 ? _a : [], (0, serverData_1.default)().taxonomySlugs.faculty);
  return facultyTerms;
}
exports.useFacultyTerms = useFacultyTerms;

/***/ }),

/***/ "./resources/ts/lib/immer.ts":
/*!***********************************!*\
  !*** ./resources/ts/lib/immer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const immer_1 = __webpack_require__(/*! immer */ "./node_modules/immer/dist/index.js");
(0, immer_1.enableMapSet)();

/***/ }),

/***/ "./resources/ts/util/errorTransforms.ts":
/*!**********************************************!*\
  !*** ./resources/ts/util/errorTransforms.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.transformErrorMessage = exports.transformBasedOnErrorCode = void 0;
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const transformedErrorMessages_1 = __webpack_require__(/*! ./transformedErrorMessages */ "./resources/ts/util/transformedErrorMessages.ts");
function transformBasedOnErrorCode(fieldId, error) {
  var _a;
  let {
    errorCode
  } = error;
  if (fieldId.match(/\.en$/i)) {
    errorCode += '_en';
  }
  if (errorCode === 'rest_too_many_items') {
    return error.message.replace(fieldId, (0, i18n_1.__)('Field', 'fau-degree-program'));
  }
  return (_a = transformedErrorMessages_1.transformedErrorMessagesBasedOnErrorCode[errorCode]) !== null && _a !== void 0 ? _a : error.message;
}
exports.transformBasedOnErrorCode = transformBasedOnErrorCode;
function transformErrorMessage(fieldId, error) {
  var _a;
  return (_a = transformedErrorMessages_1.transformedErrorMessages[fieldId]) !== null && _a !== void 0 ? _a : transformBasedOnErrorCode(fieldId, error);
}
exports.transformErrorMessage = transformErrorMessage;

/***/ }),

/***/ "./resources/ts/util/idHelpers.ts":
/*!****************************************!*\
  !*** ./resources/ts/util/idHelpers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.entityId = exports.propertyId = void 0;
function propertyId(type, id) {
  let subField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const parts = [type, id];
  if (subField) {
    parts.push(subField);
  }
  return parts.join(':');
}
exports.propertyId = propertyId;
function entityId(id) {
  var _a;
  return parseInt((_a = id.split(':')[1]) !== null && _a !== void 0 ? _a : 0, 10);
}
exports.entityId = entityId;

/***/ }),

/***/ "./resources/ts/util/serverData.ts":
/*!*****************************************!*\
  !*** ./resources/ts/util/serverData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
function serverData() {
  if (window.DegreeProgramEditorServerData === undefined) {
    throw new Error('Server data could not be loaded.');
  }
  return window.DegreeProgramEditorServerData;
}
exports["default"] = serverData;

/***/ }),

/***/ "./resources/ts/util/transformedErrorMessages.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/util/transformedErrorMessages.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.transformedErrorMessagesBasedOnErrorCode = exports.transformedErrorMessages = void 0;
const i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
const transformedErrorMessages = {
  'featured_image.id': (0, i18n_1.__)('Please select a featured image.', 'fau-degree-program'),
  'teaser_image.id': (0, i18n_1.__)('Please select a teaser image.', 'fau-degree-program')
};
exports.transformedErrorMessages = transformedErrorMessages;
const transformedErrorMessagesBasedOnErrorCode = {
  rest_too_short: (0, i18n_1.__)('This field can not be empty.', 'fau-degree-program'),
  rest_too_short_en: (0, i18n_1.__)('English variant of this field can not be empty.', 'fau-degree-program'),
  rest_too_few_items: (0, i18n_1.__)('Please select at least one item.', 'fau-degree-program'),
  rest_invalid_pattern: (0, i18n_1.__)('Field does not match pattern.', 'fau-degree-program')
};
exports.transformedErrorMessagesBasedOnErrorCode = transformedErrorMessagesBasedOnErrorCode;

/***/ }),

/***/ "./resources/ts/util/transforms.ts":
/*!*****************************************!*\
  !*** ./resources/ts/util/transforms.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.transformTermToAdmissionRequirement = exports.transformTermToDegree = exports.transformTermToMultilingualLink = exports.transformTermToMultilingualString = void 0;
const idHelpers_1 = __webpack_require__(/*! ./idHelpers */ "./resources/ts/util/idHelpers.ts");
const EMPTY_MULTILINGUAL_STRING = {
  id: '',
  de: '',
  en: ''
};
function transformTermToMultilingualString(term) {
  var _a;
  return term ? {
    en: (_a = term.meta.name_en) !== null && _a !== void 0 ? _a : '',
    de: term.name,
    id: (0, idHelpers_1.propertyId)('term', term.id, 'name')
  } : Object.assign({}, EMPTY_MULTILINGUAL_STRING);
}
exports.transformTermToMultilingualString = transformTermToMultilingualString;
function transformTermToMultilingualLink(term) {
  var _a, _b, _c, _d, _e;
  return term ? {
    id: (0, idHelpers_1.propertyId)('term', term.id),
    name: {
      id: (0, idHelpers_1.propertyId)('term', term.id, 'name'),
      de: term.name,
      en: (_a = term.meta.name_en) !== null && _a !== void 0 ? _a : ''
    },
    link_text: {
      id: (0, idHelpers_1.propertyId)('term_meta', term.id, 'link_text'),
      de: (_b = term.meta.link_text) !== null && _b !== void 0 ? _b : '',
      en: (_c = term.meta.link_text_en) !== null && _c !== void 0 ? _c : ''
    },
    link_url: {
      id: (0, idHelpers_1.propertyId)('term_meta', term.id, 'link_url'),
      de: (_d = term.meta.link_url) !== null && _d !== void 0 ? _d : '',
      en: (_e = term.meta.link_url_en) !== null && _e !== void 0 ? _e : ''
    }
  } : {
    id: '',
    name: Object.assign({}, EMPTY_MULTILINGUAL_STRING),
    link_text: Object.assign({}, EMPTY_MULTILINGUAL_STRING),
    link_url: Object.assign({}, EMPTY_MULTILINGUAL_STRING)
  };
}
exports.transformTermToMultilingualLink = transformTermToMultilingualLink;
function transformTermToDegree(term) {
  var _a, _b, _c, _d;
  return term ? {
    id: (0, idHelpers_1.propertyId)('term', term.id),
    abbreviation: {
      id: (0, idHelpers_1.propertyId)('term_meta', term.id, 'abbreviation'),
      de: (_a = term.meta.abbreviation) !== null && _a !== void 0 ? _a : '',
      en: (_b = term.meta.abbreviation_en) !== null && _b !== void 0 ? _b : ''
    },
    name: {
      id: (0, idHelpers_1.propertyId)('term', term.id, 'name'),
      de: term.name,
      en: (_c = term.meta.name_en) !== null && _c !== void 0 ? _c : ''
    },
    parent: (_d = term.parent_object) !== null && _d !== void 0 ? _d : null
  } : {
    id: '',
    abbreviation: Object.assign({}, EMPTY_MULTILINGUAL_STRING),
    name: Object.assign({}, EMPTY_MULTILINGUAL_STRING),
    parent: null
  };
}
exports.transformTermToDegree = transformTermToDegree;
function transformTermToAdmissionRequirement(term) {
  var _a;
  const admissionRequirement = transformTermToMultilingualLink(term);
  if (!term) {
    return admissionRequirement;
  }
  admissionRequirement.parent = (_a = term.parent_object) !== null && _a !== void 0 ? _a : null;
  return admissionRequirement;
}
exports.transformTermToAdmissionRequirement = transformTermToAdmissionRequirement;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/immer/dist/immer.cjs.development.js":
/*!**********************************************************!*\
  !*** ./node_modules/immer/dist/immer.cjs.development.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _ref;

// Should be no imports here!
// Some things that should be evaluated before all else...
// We only want to know if non-polyfilled symbols are available
var hasSymbol = typeof Symbol !== "undefined" && typeof
/*#__PURE__*/
Symbol("x") === "symbol";
var hasMap = typeof Map !== "undefined";
var hasSet = typeof Set !== "undefined";
var hasProxies = typeof Proxy !== "undefined" && typeof Proxy.revocable !== "undefined" && typeof Reflect !== "undefined";
/**
 * The sentinel value returned by producers to replace the draft with undefined.
 */

var NOTHING = hasSymbol ?
/*#__PURE__*/
Symbol.for("immer-nothing") : (_ref = {}, _ref["immer-nothing"] = true, _ref);
/**
 * To let Immer treat your class instances as plain immutable objects
 * (albeit with a custom prototype), you must define either an instance property
 * or a static property on each of your custom classes.
 *
 * Otherwise, your class instance will never be drafted, which means it won't be
 * safe to mutate in a produce callback.
 */

var DRAFTABLE = hasSymbol ?
/*#__PURE__*/
Symbol.for("immer-draftable") : "__$immer_draftable";
var DRAFT_STATE = hasSymbol ?
/*#__PURE__*/
Symbol.for("immer-state") : "__$immer_state"; // Even a polyfilled Symbol might provide Symbol.iterator

var iteratorSymbol = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";

var errors = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function _(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function _(path) {
    return "Cannot apply patch, path doesn't resolve: " + path;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function _(op) {
    return "Unsupported patch operation: " + op;
  },
  18: function _(plugin) {
    return "The plugin for '" + plugin + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + plugin + "()` when initializing your application.";
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
  21: function _(thing) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + thing + "'";
  },
  22: function _(thing) {
    return "'current' expects a draft, got: " + thing;
  },
  23: function _(thing) {
    return "'original' expects a draft, got: " + thing;
  },
  24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
};
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  {
    var e = errors[error];
    var msg = !e ? "unknown error nr: " + error : typeof e === "function" ? e.apply(null, args) : e;
    throw new Error("[Immer] " + msg);
  }
}

/** Returns true if the given value is an Immer draft */

/*#__PURE__*/

function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
/** Returns true if the given value can be drafted by Immer */

/*#__PURE__*/

function isDraftable(value) {
  var _value$constructor;

  if (!value) return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor[DRAFTABLE]) || isMap(value) || isSet(value);
}
var objectCtorString =
/*#__PURE__*/
Object.prototype.constructor.toString();
/*#__PURE__*/

function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;
  var proto = Object.getPrototypeOf(value);

  if (proto === null) {
    return true;
  }

  var Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object) return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value)) die(23, value);
  return value[DRAFT_STATE].base_;
}
/*#__PURE__*/

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {};
  ownKeys(target).forEach(function (key) {
    res[key] = Object.getOwnPropertyDescriptor(target, key);
  });
  return res;
};
function each(obj, iter, enumerableOnly) {
  if (enumerableOnly === void 0) {
    enumerableOnly = false;
  }

  if (getArchtype(obj) === 0
  /* Object */
  ) {
      (enumerableOnly ? Object.keys : ownKeys)(obj).forEach(function (key) {
        if (!enumerableOnly || typeof key !== "symbol") iter(key, obj[key], obj);
      });
    } else {
    obj.forEach(function (entry, index) {
      return iter(index, entry, obj);
    });
  }
}
/*#__PURE__*/

function getArchtype(thing) {
  /* istanbul ignore next */
  var state = thing[DRAFT_STATE];
  return state ? state.type_ > 3 ? state.type_ - 4 // cause Object and Array map back from 4 and 5
  : state.type_ // others are the same
  : Array.isArray(thing) ? 1
  /* Array */
  : isMap(thing) ? 2
  /* Map */
  : isSet(thing) ? 3
  /* Set */
  : 0
  /* Object */
  ;
}
/*#__PURE__*/

function has(thing, prop) {
  return getArchtype(thing) === 2
  /* Map */
  ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
/*#__PURE__*/

function get(thing, prop) {
  // @ts-ignore
  return getArchtype(thing) === 2
  /* Map */
  ? thing.get(prop) : thing[prop];
}
/*#__PURE__*/

function set(thing, propOrOldValue, value) {
  var t = getArchtype(thing);
  if (t === 2
  /* Map */
  ) thing.set(propOrOldValue, value);else if (t === 3
  /* Set */
  ) {
      thing.delete(propOrOldValue);
      thing.add(value);
    } else thing[propOrOldValue] = value;
}
/*#__PURE__*/

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
/*#__PURE__*/

function isMap(target) {
  return hasMap && target instanceof Map;
}
/*#__PURE__*/

function isSet(target) {
  return hasSet && target instanceof Set;
}
/*#__PURE__*/

function latest(state) {
  return state.copy_ || state.base_;
}
/*#__PURE__*/

function shallowCopy(base) {
  if (Array.isArray(base)) return Array.prototype.slice.call(base);
  var descriptors = getOwnPropertyDescriptors(base);
  delete descriptors[DRAFT_STATE];
  var keys = ownKeys(descriptors);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var desc = descriptors[key];

    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    } // like object.assign, we will read any _own_, get/set accessors. This helps in dealing
    // with libraries that trap values, like mobx or vue
    // unlike object.assign, non-enumerables will be copied as well


    if (desc.get || desc.set) descriptors[key] = {
      configurable: true,
      writable: true,
      enumerable: desc.enumerable,
      value: base[key]
    };
  }

  return Object.create(Object.getPrototypeOf(base), descriptors);
}
function freeze(obj, deep) {
  if (deep === void 0) {
    deep = false;
  }

  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;

  if (getArchtype(obj) > 1
  /* Map or Set */
  ) {
      obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
    }

  Object.freeze(obj);
  if (deep) each(obj, function (key, value) {
    return freeze(value, true);
  }, true);
  return obj;
}

function dontMutateFrozenCollections() {
  die(2);
}

function isFrozen(obj) {
  if (obj == null || typeof obj !== "object") return true; // See #600, IE dies on non-objects in Object.isFrozen

  return Object.isFrozen(obj);
}

/** Plugin utilities */

var plugins = {};
function getPlugin(pluginKey) {
  var plugin = plugins[pluginKey];

  if (!plugin) {
    die(18, pluginKey);
  } // @ts-ignore


  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}

var currentScope;
function getCurrentScope() {
  if ( !currentScope) die(0);
  return currentScope;
}

function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_: parent_,
    immer_: immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}

function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches"); // assert we have the plugin

    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft); // @ts-ignore

  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer) {
  return currentScope = createScope(currentScope, immer);
}

function revokeDraft(draft) {
  var state = draft[DRAFT_STATE];
  if (state.type_ === 0
  /* ProxyObject */
  || state.type_ === 1
  /* ProxyArray */
  ) state.revoke_();else state.revoked_ = true;
}

function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  var baseDraft = scope.drafts_[0];
  var isReplaced = result !== undefined && result !== baseDraft;
  if (!scope.immer_.useProxies_) getPlugin("ES5").willFinalizeES5_(scope, result, isReplaced);

  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }

    if (isDraftable(result)) {
      // Finalize the result in case it contains (or is) a subset of the draft.
      result = finalize(scope, result);
      if (!scope.parent_) maybeFreeze(scope, result);
    }

    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
    }
  } else {
    // Finalize the base draft.
    result = finalize(scope, baseDraft, []);
  }

  revokeScope(scope);

  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }

  return result !== NOTHING ? result : undefined;
}

function finalize(rootScope, value, path) {
  // Don't recurse in tho recursive data structures
  if (isFrozen(value)) return value;
  var state = value[DRAFT_STATE]; // A plain object, might need freezing, might contain drafts

  if (!state) {
    each(value, function (key, childValue) {
      return finalizeProperty(rootScope, state, value, key, childValue, path);
    }, true // See #590, don't recurse into non-enumerable of non drafted objects
    );
    return value;
  } // Never finalize drafts owned by another scope.


  if (state.scope_ !== rootScope) return value; // Unmodified draft, return the (frozen) original

  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  } // Not finalized yet, let's do that now


  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    var result = // For ES5, create a good copy from the draft first, with added keys and without deleted keys.
    state.type_ === 4
    /* ES5Object */
    || state.type_ === 5
    /* ES5Array */
    ? state.copy_ = shallowCopy(state.draft_) : state.copy_; // Finalize all children of the copy
    // For sets we clone before iterating, otherwise we can get in endless loop due to modifying during iteration, see #628
    // Although the original test case doesn't seem valid anyway, so if this in the way we can turn the next line
    // back to each(result, ....)

    each(state.type_ === 3
    /* Set */
    ? new Set(result) : result, function (key, childValue) {
      return finalizeProperty(rootScope, state, result, key, childValue, path);
    }); // everything inside is frozen, we can freeze here

    maybeFreeze(rootScope, result, false); // first time finalizing, let's create those patches

    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
    }
  }

  return state.copy_;
}

function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath) {
  if ( childValue === targetObject) die(5);

  if (isDraft(childValue)) {
    var path = rootPath && parentState && parentState.type_ !== 3
    /* Set */
    && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) // Skip deep patches for assigned keys.
    ? rootPath.concat(prop) : undefined; // Drafts owned by `scope` are finalized here.

    var res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res); // Drafts from another scope must prevented to be frozen
    // if we got a draft back from finalize, we're in a nested produce and shouldn't freeze

    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else return;
  } // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.


  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      // optimization: if an object is not a draft, and we don't have to
      // deepfreeze everything, and we are sure that no drafts are left in the remaining object
      // cause we saw and finalized all drafts already; we can stop visiting the rest of the tree.
      // This benefits especially adding large data tree's without further processing.
      // See add-data.js perf test
      return;
    }

    finalize(rootScope, childValue); // immer deep freezes plain objects, so if there is no parent state, we freeze as well

    if (!parentState || !parentState.scope_.parent_) maybeFreeze(rootScope, childValue);
  }
}

function maybeFreeze(scope, value, deep) {
  if (deep === void 0) {
    deep = false;
  }

  if (scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

/**
 * Returns a new draft of the `base` object.
 *
 * The second argument is the parent draft-state (used internally).
 */

function createProxyProxy(base, parent) {
  var isArray = Array.isArray(base);
  var state = {
    type_: isArray ? 1
    /* ProxyArray */
    : 0
    /* ProxyObject */
    ,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  }; // the traps must target something, a bit like the 'real' base.
  // but also, we need to be able to determine from the target what the relevant state is
  // (to avoid creating traps per instance to capture the state in closure,
  // and to avoid creating weird hidden properties as well)
  // So the trick is to use 'state' as the actual 'target'! (and make sure we intercept everything)
  // Note that in the case of an array, we put the state in an array to have better Reflect defaults ootb

  var target = state;
  var traps = objectTraps;

  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }

  var _Proxy$revocable = Proxy.revocable(target, traps),
      revoke = _Proxy$revocable.revoke,
      proxy = _Proxy$revocable.proxy;

  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
/**
 * Object drafts
 */

var objectTraps = {
  get: function get(state, prop) {
    if (prop === DRAFT_STATE) return state;
    var source = latest(state);

    if (!has(source, prop)) {
      // non-existing or non-own property...
      return readPropFromProto(state, source, prop);
    }

    var value = source[prop];

    if (state.finalized_ || !isDraftable(value)) {
      return value;
    } // Check for existing draft in modified state.
    // Assigned values are never drafted. This catches any drafts we created, too.


    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(state.scope_.immer_, value, state);
    }

    return value;
  },
  has: function has(state, prop) {
    return prop in latest(state);
  },
  ownKeys: function ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set: function set(state, prop
  /* strictly not, but helps TS */
  , value) {
    var desc = getDescriptorFromProto(latest(state), prop);

    if (desc === null || desc === void 0 ? void 0 : desc.set) {
      // special case: if this write is captured by a setter, we have
      // to trigger it with the correct context
      desc.set.call(state.draft_, value);
      return true;
    }

    if (!state.modified_) {
      // the last check is because we need to be able to distinguish setting a non-existing to undefined (which is a change)
      // from setting an existing property with value undefined to undefined (which is not a change)
      var current = peek(latest(state), prop); // special case, if we assigning the original value to a draft, we can ignore the assignment

      var currentState = current === null || current === void 0 ? void 0 : current[DRAFT_STATE];

      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }

      if (is(value, current) && (value !== undefined || has(state.base_, prop))) return true;
      prepareCopy(state);
      markChanged(state);
    }

    if (state.copy_[prop] === value && ( // special case: handle new props with value 'undefined'
    value !== undefined || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true; // @ts-ignore

    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty: function deleteProperty(state, prop) {
    // The `undefined` check is a fast path for pre-existing keys.
    if (peek(state.base_, prop) !== undefined || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      // if an originally not assigned property was deleted
      delete state.assigned_[prop];
    } // @ts-ignore


    if (state.copy_) delete state.copy_[prop];
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(state, prop) {
    var owner = latest(state);
    var desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc) return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1
      /* ProxyArray */
      || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty: function defineProperty() {
    die(11);
  },
  getPrototypeOf: function getPrototypeOf(state) {
    return Object.getPrototypeOf(state.base_);
  },
  setPrototypeOf: function setPrototypeOf() {
    die(12);
  }
};
/**
 * Array drafts
 */

var arrayTraps = {};
each(objectTraps, function (key, fn) {
  // @ts-ignore
  arrayTraps[key] = function () {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});

arrayTraps.deleteProperty = function (state, prop) {
  if ( isNaN(parseInt(prop))) die(13); // @ts-ignore

  return arrayTraps.set.call(this, state, prop, undefined);
};

arrayTraps.set = function (state, prop, value) {
  if ( prop !== "length" && isNaN(parseInt(prop))) die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
}; // Access a property without creating an Immer draft.


function peek(draft, prop) {
  var state = draft[DRAFT_STATE];
  var source = state ? latest(state) : draft;
  return source[prop];
}

function readPropFromProto(state, source, prop) {
  var _desc$get;

  var desc = getDescriptorFromProto(source, prop);
  return desc ? "value" in desc ? desc.value : // This is a very special case, if the prop is a getter defined by the
  // prototype, we should invoke it with the draft as context!
  (_desc$get = desc.get) === null || _desc$get === void 0 ? void 0 : _desc$get.call(state.draft_) : undefined;
}

function getDescriptorFromProto(source, prop) {
  // 'in' checks proto!
  if (!(prop in source)) return undefined;
  var proto = Object.getPrototypeOf(source);

  while (proto) {
    var desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc) return desc;
    proto = Object.getPrototypeOf(proto);
  }

  return undefined;
}

function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;

    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(state.base_);
  }
}

var Immer =
/*#__PURE__*/
function () {
  function Immer(config) {
    var _this = this;

    this.useProxies_ = hasProxies;
    this.autoFreeze_ = true;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */

    this.produce = function (base, recipe, patchListener) {
      // curried invocation
      if (typeof base === "function" && typeof recipe !== "function") {
        var defaultBase = recipe;
        recipe = base;
        var self = _this;
        return function curriedProduce(base) {
          var _this2 = this;

          if (base === void 0) {
            base = defaultBase;
          }

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return self.produce(base, function (draft) {
            var _recipe;

            return (_recipe = recipe).call.apply(_recipe, [_this2, draft].concat(args));
          }); // prettier-ignore
        };
      }

      if (typeof recipe !== "function") die(6);
      if (patchListener !== undefined && typeof patchListener !== "function") die(7);
      var result; // Only plain objects, arrays, and "immerable classes" are drafted.

      if (isDraftable(base)) {
        var scope = enterScope(_this);
        var proxy = createProxy(_this, base, undefined);
        var hasError = true;

        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          // finally instead of catch + rethrow better preserves original stack
          if (hasError) revokeScope(scope);else leaveScope(scope);
        }

        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then(function (result) {
            usePatchesInScope(scope, patchListener);
            return processResult(result, scope);
          }, function (error) {
            revokeScope(scope);
            throw error;
          });
        }

        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === undefined) result = base;
        if (result === NOTHING) result = undefined;
        if (_this.autoFreeze_) freeze(result, true);

        if (patchListener) {
          var p = [];
          var ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }

        return result;
      } else die(21, base);
    };

    this.produceWithPatches = function (base, recipe) {
      // curried invocation
      if (typeof base === "function") {
        return function (state) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return _this.produceWithPatches(state, function (draft) {
            return base.apply(void 0, [draft].concat(args));
          });
        };
      }

      var patches, inversePatches;

      var result = _this.produce(base, recipe, function (p, ip) {
        patches = p;
        inversePatches = ip;
      });

      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then(function (nextState) {
          return [nextState, patches, inversePatches];
        });
      }

      return [result, patches, inversePatches];
    };

    if (typeof (config === null || config === void 0 ? void 0 : config.useProxies) === "boolean") this.setUseProxies(config.useProxies);
    if (typeof (config === null || config === void 0 ? void 0 : config.autoFreeze) === "boolean") this.setAutoFreeze(config.autoFreeze);
  }

  var _proto = Immer.prototype;

  _proto.createDraft = function createDraft(base) {
    if (!isDraftable(base)) die(8);
    if (isDraft(base)) base = current(base);
    var scope = enterScope(this);
    var proxy = createProxy(this, base, undefined);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  };

  _proto.finishDraft = function finishDraft(draft, patchListener) {
    var state = draft && draft[DRAFT_STATE];

    {
      if (!state || !state.isManual_) die(9);
      if (state.finalized_) die(10);
    }

    var scope = state.scope_;
    usePatchesInScope(scope, patchListener);
    return processResult(undefined, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  ;

  _proto.setAutoFreeze = function setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
   * always faster than using ES5 proxies.
   *
   * By default, feature detection is used, so calling this is rarely necessary.
   */
  ;

  _proto.setUseProxies = function setUseProxies(value) {
    if (value && !hasProxies) {
      die(20);
    }

    this.useProxies_ = value;
  };

  _proto.applyPatches = function applyPatches(base, patches) {
    // If a patch replaces the entire state, take that replacement as base
    // before applying patches
    var i;

    for (i = patches.length - 1; i >= 0; i--) {
      var patch = patches[i];

      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    } // If there was a patch that replaced the entire state, start from the
    // patch after that.


    if (i > -1) {
      patches = patches.slice(i + 1);
    }

    var applyPatchesImpl = getPlugin("Patches").applyPatches_;

    if (isDraft(base)) {
      // N.B: never hits if some patch a replacement, patches are never drafts
      return applyPatchesImpl(base, patches);
    } // Otherwise, produce a copy of the base state.


    return this.produce(base, function (draft) {
      return applyPatchesImpl(draft, patches);
    });
  };

  return Immer;
}();
function createProxy(immer, value, parent) {
  // precondition: createProxy should be guarded by isDraftable, so we know we can safely draft
  var draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : immer.useProxies_ ? createProxyProxy(value, parent) : getPlugin("ES5").createES5Proxy_(value, parent);
  var scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

function current(value) {
  if (!isDraft(value)) die(22, value);
  return currentImpl(value);
}

function currentImpl(value) {
  if (!isDraftable(value)) return value;
  var state = value[DRAFT_STATE];
  var copy;
  var archType = getArchtype(value);

  if (state) {
    if (!state.modified_ && (state.type_ < 4 || !getPlugin("ES5").hasChanges_(state))) return state.base_; // Optimization: avoid generating new drafts during copying

    state.finalized_ = true;
    copy = copyHelper(value, archType);
    state.finalized_ = false;
  } else {
    copy = copyHelper(value, archType);
  }

  each(copy, function (key, childValue) {
    if (state && get(state.base_, key) === childValue) return; // no need to copy or search in something that didn't change

    set(copy, key, currentImpl(childValue));
  }); // In the future, we might consider freezing here, based on the current settings

  return archType === 3
  /* Set */
  ? new Set(copy) : copy;
}

function copyHelper(value, archType) {
  // creates a shallow copy, even if it is a map or set
  switch (archType) {
    case 2
    /* Map */
    :
      return new Map(value);

    case 3
    /* Set */
    :
      // Set will be cloned as array temporarily, so that we can replace individual items
      return Array.from(value);
  }

  return shallowCopy(value);
}

function enableES5() {
  function willFinalizeES5_(scope, result, isReplaced) {
    if (!isReplaced) {
      if (scope.patches_) {
        markChangesRecursively(scope.drafts_[0]);
      } // This is faster when we don't care about which attributes changed.


      markChangesSweep(scope.drafts_);
    } // When a child draft is returned, look for changes.
    else if (isDraft(result) && result[DRAFT_STATE].scope_ === scope) {
        markChangesSweep(scope.drafts_);
      }
  }

  function createES5Draft(isArray, base) {
    if (isArray) {
      var draft = new Array(base.length);

      for (var i = 0; i < base.length; i++) {
        Object.defineProperty(draft, "" + i, proxyProperty(i, true));
      }

      return draft;
    } else {
      var _descriptors = getOwnPropertyDescriptors(base);

      delete _descriptors[DRAFT_STATE];
      var keys = ownKeys(_descriptors);

      for (var _i = 0; _i < keys.length; _i++) {
        var key = keys[_i];
        _descriptors[key] = proxyProperty(key, isArray || !!_descriptors[key].enumerable);
      }

      return Object.create(Object.getPrototypeOf(base), _descriptors);
    }
  }

  function createES5Proxy_(base, parent) {
    var isArray = Array.isArray(base);
    var draft = createES5Draft(isArray, base);
    var state = {
      type_: isArray ? 5
      /* ES5Array */
      : 4
      /* ES5Object */
      ,
      scope_: parent ? parent.scope_ : getCurrentScope(),
      modified_: false,
      finalized_: false,
      assigned_: {},
      parent_: parent,
      // base is the object we are drafting
      base_: base,
      // draft is the draft object itself, that traps all reads and reads from either the base (if unmodified) or copy (if modified)
      draft_: draft,
      copy_: null,
      revoked_: false,
      isManual_: false
    };
    Object.defineProperty(draft, DRAFT_STATE, {
      value: state,
      // enumerable: false <- the default
      writable: true
    });
    return draft;
  } // property descriptors are recycled to make sure we don't create a get and set closure per property,
  // but share them all instead


  var descriptors = {};

  function proxyProperty(prop, enumerable) {
    var desc = descriptors[prop];

    if (desc) {
      desc.enumerable = enumerable;
    } else {
      descriptors[prop] = desc = {
        configurable: true,
        enumerable: enumerable,
        get: function get() {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state); // @ts-ignore

          return objectTraps.get(state, prop);
        },
        set: function set(value) {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state); // @ts-ignore

          objectTraps.set(state, prop, value);
        }
      };
    }

    return desc;
  } // This looks expensive, but only proxies are visited, and only objects without known changes are scanned.


  function markChangesSweep(drafts) {
    // The natural order of drafts in the `scope` array is based on when they
    // were accessed. By processing drafts in reverse natural order, we have a
    // better chance of processing leaf nodes first. When a leaf node is known to
    // have changed, we can avoid any traversal of its ancestor nodes.
    for (var i = drafts.length - 1; i >= 0; i--) {
      var state = drafts[i][DRAFT_STATE];

      if (!state.modified_) {
        switch (state.type_) {
          case 5
          /* ES5Array */
          :
            if (hasArrayChanges(state)) markChanged(state);
            break;

          case 4
          /* ES5Object */
          :
            if (hasObjectChanges(state)) markChanged(state);
            break;
        }
      }
    }
  }

  function markChangesRecursively(object) {
    if (!object || typeof object !== "object") return;
    var state = object[DRAFT_STATE];
    if (!state) return;
    var base_ = state.base_,
        draft_ = state.draft_,
        assigned_ = state.assigned_,
        type_ = state.type_;

    if (type_ === 4
    /* ES5Object */
    ) {
        // Look for added keys.
        // probably there is a faster way to detect changes, as sweep + recurse seems to do some
        // unnecessary work.
        // also: probably we can store the information we detect here, to speed up tree finalization!
        each(draft_, function (key) {
          if (key === DRAFT_STATE) return; // The `undefined` check is a fast path for pre-existing keys.

          if (base_[key] === undefined && !has(base_, key)) {
            assigned_[key] = true;
            markChanged(state);
          } else if (!assigned_[key]) {
            // Only untouched properties trigger recursion.
            markChangesRecursively(draft_[key]);
          }
        }); // Look for removed keys.

        each(base_, function (key) {
          // The `undefined` check is a fast path for pre-existing keys.
          if (draft_[key] === undefined && !has(draft_, key)) {
            assigned_[key] = false;
            markChanged(state);
          }
        });
      } else if (type_ === 5
    /* ES5Array */
    ) {
        if (hasArrayChanges(state)) {
          markChanged(state);
          assigned_.length = true;
        }

        if (draft_.length < base_.length) {
          for (var i = draft_.length; i < base_.length; i++) {
            assigned_[i] = false;
          }
        } else {
          for (var _i2 = base_.length; _i2 < draft_.length; _i2++) {
            assigned_[_i2] = true;
          }
        } // Minimum count is enough, the other parts has been processed.


        var min = Math.min(draft_.length, base_.length);

        for (var _i3 = 0; _i3 < min; _i3++) {
          // Only untouched indices trigger recursion.
          if (!draft_.hasOwnProperty(_i3)) {
            assigned_[_i3] = true;
          }

          if (assigned_[_i3] === undefined) markChangesRecursively(draft_[_i3]);
        }
      }
  }

  function hasObjectChanges(state) {
    var base_ = state.base_,
        draft_ = state.draft_; // Search for added keys and changed keys. Start at the back, because
    // non-numeric keys are ordered by time of definition on the object.

    var keys = ownKeys(draft_);

    for (var i = keys.length - 1; i >= 0; i--) {
      var key = keys[i];
      if (key === DRAFT_STATE) continue;
      var baseValue = base_[key]; // The `undefined` check is a fast path for pre-existing keys.

      if (baseValue === undefined && !has(base_, key)) {
        return true;
      } // Once a base key is deleted, future changes go undetected, because its
      // descriptor is erased. This branch detects any missed changes.
      else {
          var value = draft_[key];

          var _state = value && value[DRAFT_STATE];

          if (_state ? _state.base_ !== baseValue : !is(value, baseValue)) {
            return true;
          }
        }
    } // At this point, no keys were added or changed.
    // Compare key count to determine if keys were deleted.


    var baseIsDraft = !!base_[DRAFT_STATE];
    return keys.length !== ownKeys(base_).length + (baseIsDraft ? 0 : 1); // + 1 to correct for DRAFT_STATE
  }

  function hasArrayChanges(state) {
    var draft_ = state.draft_;
    if (draft_.length !== state.base_.length) return true; // See #116
    // If we first shorten the length, our array interceptors will be removed.
    // If after that new items are added, result in the same original length,
    // those last items will have no intercepting property.
    // So if there is no own descriptor on the last position, we know that items were removed and added
    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
    // the last one
    // last descriptor can be not a trap, if the array was extended

    var descriptor = Object.getOwnPropertyDescriptor(draft_, draft_.length - 1); // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)

    if (descriptor && !descriptor.get) return true; // if we miss a property, it has been deleted, so array probobaly changed

    for (var i = 0; i < draft_.length; i++) {
      if (!draft_.hasOwnProperty(i)) return true;
    } // For all other cases, we don't have to compare, as they would have been picked up by the index setters


    return false;
  }

  function hasChanges_(state) {
    return state.type_ === 4
    /* ES5Object */
    ? hasObjectChanges(state) : hasArrayChanges(state);
  }

  function assertUnrevoked(state
  /*ES5State | MapState | SetState*/
  ) {
    if (state.revoked_) die(3, JSON.stringify(latest(state)));
  }

  loadPlugin("ES5", {
    createES5Proxy_: createES5Proxy_,
    willFinalizeES5_: willFinalizeES5_,
    hasChanges_: hasChanges_
  });
}

function enablePatches() {
  var REPLACE = "replace";
  var ADD = "add";
  var REMOVE = "remove";

  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0
      /* ProxyObject */
      :
      case 4
      /* ES5Object */
      :
      case 2
      /* Map */
      :
        return generatePatchesFromAssigned(state, basePath, patches, inversePatches);

      case 5
      /* ES5Array */
      :
      case 1
      /* ProxyArray */
      :
        return generateArrayPatches(state, basePath, patches, inversePatches);

      case 3
      /* Set */
      :
        return generateSetPatches(state, basePath, patches, inversePatches);
    }
  }

  function generateArrayPatches(state, basePath, patches, inversePatches) {
    var base_ = state.base_,
        assigned_ = state.assigned_;
    var copy_ = state.copy_; // Reduce complexity by ensuring `base` is never longer.

    if (copy_.length < base_.length) {
      var _ref = [copy_, base_];
      base_ = _ref[0];
      copy_ = _ref[1];
      var _ref2 = [inversePatches, patches];
      patches = _ref2[0];
      inversePatches = _ref2[1];
    } // Process replaced indices.


    for (var i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        var path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path: path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path: path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    } // Process added indices.


    for (var _i = base_.length; _i < copy_.length; _i++) {
      var _path = basePath.concat([_i]);

      patches.push({
        op: ADD,
        path: _path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[_i])
      });
    }

    if (base_.length < copy_.length) {
      inversePatches.push({
        op: REPLACE,
        path: basePath.concat(["length"]),
        value: base_.length
      });
    }
  } // This is used for both Map objects and normal objects.


  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    var base_ = state.base_,
        copy_ = state.copy_;
    each(state.assigned_, function (key, assignedValue) {
      var origValue = get(base_, key);
      var value = get(copy_, key);
      var op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE) return;
      var path = basePath.concat(key);
      patches.push(op === REMOVE ? {
        op: op,
        path: path
      } : {
        op: op,
        path: path,
        value: value
      });
      inversePatches.push(op === ADD ? {
        op: REMOVE,
        path: path
      } : op === REMOVE ? {
        op: ADD,
        path: path,
        value: clonePatchValueIfNeeded(origValue)
      } : {
        op: REPLACE,
        path: path,
        value: clonePatchValueIfNeeded(origValue)
      });
    });
  }

  function generateSetPatches(state, basePath, patches, inversePatches) {
    var base_ = state.base_,
        copy_ = state.copy_;
    var i = 0;
    base_.forEach(function (value) {
      if (!copy_.has(value)) {
        var path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path: path,
          value: value
        });
        inversePatches.unshift({
          op: ADD,
          path: path,
          value: value
        });
      }

      i++;
    });
    i = 0;
    copy_.forEach(function (value) {
      if (!base_.has(value)) {
        var path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path: path,
          value: value
        });
        inversePatches.unshift({
          op: REMOVE,
          path: path,
          value: value
        });
      }

      i++;
    });
  }

  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? undefined : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }

  function applyPatches_(draft, patches) {
    patches.forEach(function (patch) {
      var path = patch.path,
          op = patch.op;
      var base = draft;

      for (var i = 0; i < path.length - 1; i++) {
        var parentType = getArchtype(base);
        var p = "" + path[i]; // See #738, avoid prototype pollution

        if ((parentType === 0
        /* Object */
        || parentType === 1
        /* Array */
        ) && (p === "__proto__" || p === "constructor")) die(24);
        if (typeof base === "function" && p === "prototype") die(24);
        base = get(base, p);
        if (typeof base !== "object") die(15, path.join("/"));
      }

      var type = getArchtype(base);
      var value = deepClonePatchValue(patch.value); // used to clone patch to ensure original patch is not modified, see #411

      var key = path[path.length - 1];

      switch (op) {
        case REPLACE:
          switch (type) {
            case 2
            /* Map */
            :
              return base.set(key, value);

            /* istanbul ignore next */

            case 3
            /* Set */
            :
              die(16);

            default:
              // if value is an object, then it's assigned by reference
              // in the following add or remove ops, the value field inside the patch will also be modifyed
              // so we use value from the cloned patch
              // @ts-ignore
              return base[key] = value;
          }

        case ADD:
          switch (type) {
            case 1
            /* Array */
            :
              return key === "-" ? base.push(value) : base.splice(key, 0, value);

            case 2
            /* Map */
            :
              return base.set(key, value);

            case 3
            /* Set */
            :
              return base.add(value);

            default:
              return base[key] = value;
          }

        case REMOVE:
          switch (type) {
            case 1
            /* Array */
            :
              return base.splice(key, 1);

            case 2
            /* Map */
            :
              return base.delete(key);

            case 3
            /* Set */
            :
              return base.delete(patch.value);

            default:
              return delete base[key];
          }

        default:
          die(17, op);
      }
    });
    return draft;
  }

  function deepClonePatchValue(obj) {
    if (!isDraftable(obj)) return obj;
    if (Array.isArray(obj)) return obj.map(deepClonePatchValue);
    if (isMap(obj)) return new Map(Array.from(obj.entries()).map(function (_ref3) {
      var k = _ref3[0],
          v = _ref3[1];
      return [k, deepClonePatchValue(v)];
    }));
    if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
    var cloned = Object.create(Object.getPrototypeOf(obj));

    for (var key in obj) {
      cloned[key] = deepClonePatchValue(obj[key]);
    }

    if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }

  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else return obj;
  }

  loadPlugin("Patches", {
    applyPatches_: applyPatches_,
    generatePatches_: generatePatches_,
    generateReplacementPatches_: generateReplacementPatches_
  });
}

// types only!
function enableMapSet() {
  /* istanbul ignore next */
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  }; // Ugly hack to resolve #502 and inherit built in Map / Set


  function __extends(d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = ( // @ts-ignore
    __.prototype = b.prototype, new __());
  }

  var DraftMap = function (_super) {
    __extends(DraftMap, _super); // Create class manually, cause #502


    function DraftMap(target, parent) {
      this[DRAFT_STATE] = {
        type_: 2
        /* Map */
        ,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: undefined,
        assigned_: undefined,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
      return this;
    }

    var p = DraftMap.prototype;
    Object.defineProperty(p, "size", {
      get: function get() {
        return latest(this[DRAFT_STATE]).size;
      } // enumerable: false,
      // configurable: true

    });

    p.has = function (key) {
      return latest(this[DRAFT_STATE]).has(key);
    };

    p.set = function (key, value) {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state);

      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }

      return this;
    };

    p.delete = function (key) {
      if (!this.has(key)) {
        return false;
      }

      var state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);

      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }

      state.copy_.delete(key);
      return true;
    };

    p.clear = function () {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state);

      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = new Map();
        each(state.base_, function (key) {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    };

    p.forEach = function (cb, thisArg) {
      var _this = this;

      var state = this[DRAFT_STATE];
      latest(state).forEach(function (_value, key, _map) {
        cb.call(thisArg, _this.get(key), key, _this);
      });
    };

    p.get = function (key) {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state);
      var value = latest(state).get(key);

      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }

      if (value !== state.base_.get(key)) {
        return value; // either already drafted or reassigned
      } // despite what it looks, this creates a draft only once, see above condition


      var draft = createProxy(state.scope_.immer_, value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    };

    p.keys = function () {
      return latest(this[DRAFT_STATE]).keys();
    };

    p.values = function () {
      var _this2 = this,
          _ref;

      var iterator = this.keys();
      return _ref = {}, _ref[iteratorSymbol] = function () {
        return _this2.values();
      }, _ref.next = function next() {
        var r = iterator.next();
        /* istanbul ignore next */

        if (r.done) return r;

        var value = _this2.get(r.value);

        return {
          done: false,
          value: value
        };
      }, _ref;
    };

    p.entries = function () {
      var _this3 = this,
          _ref2;

      var iterator = this.keys();
      return _ref2 = {}, _ref2[iteratorSymbol] = function () {
        return _this3.entries();
      }, _ref2.next = function next() {
        var r = iterator.next();
        /* istanbul ignore next */

        if (r.done) return r;

        var value = _this3.get(r.value);

        return {
          done: false,
          value: [r.value, value]
        };
      }, _ref2;
    };

    p[iteratorSymbol] = function () {
      return this.entries();
    };

    return DraftMap;
  }(Map);

  function proxyMap_(target, parent) {
    // @ts-ignore
    return new DraftMap(target, parent);
  }

  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = new Map();
      state.copy_ = new Map(state.base_);
    }
  }

  var DraftSet = function (_super) {
    __extends(DraftSet, _super); // Create class manually, cause #502


    function DraftSet(target, parent) {
      this[DRAFT_STATE] = {
        type_: 3
        /* Set */
        ,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: undefined,
        base_: target,
        draft_: this,
        drafts_: new Map(),
        revoked_: false,
        isManual_: false
      };
      return this;
    }

    var p = DraftSet.prototype;
    Object.defineProperty(p, "size", {
      get: function get() {
        return latest(this[DRAFT_STATE]).size;
      } // enumerable: true,

    });

    p.has = function (value) {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state); // bit of trickery here, to be able to recognize both the value, and the draft of its value

      if (!state.copy_) {
        return state.base_.has(value);
      }

      if (state.copy_.has(value)) return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
      return false;
    };

    p.add = function (value) {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state);

      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }

      return this;
    };

    p.delete = function (value) {
      if (!this.has(value)) {
        return false;
      }

      var state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) :
      /* istanbul ignore next */
      false);
    };

    p.clear = function () {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state);

      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    };

    p.values = function () {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    };

    p.entries = function entries() {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    };

    p.keys = function () {
      return this.values();
    };

    p[iteratorSymbol] = function () {
      return this.values();
    };

    p.forEach = function forEach(cb, thisArg) {
      var iterator = this.values();
      var result = iterator.next();

      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    };

    return DraftSet;
  }(Set);

  function proxySet_(target, parent) {
    // @ts-ignore
    return new DraftSet(target, parent);
  }

  function prepareSetCopy(state) {
    if (!state.copy_) {
      // create drafts for all entries to preserve insertion order
      state.copy_ = new Set();
      state.base_.forEach(function (value) {
        if (isDraftable(value)) {
          var draft = createProxy(state.scope_.immer_, value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }

  function assertUnrevoked(state
  /*ES5State | MapState | SetState*/
  ) {
    if (state.revoked_) die(3, JSON.stringify(latest(state)));
  }

  loadPlugin("MapSet", {
    proxyMap_: proxyMap_,
    proxySet_: proxySet_
  });
}

function enableAllPlugins() {
  enableES5();
  enableMapSet();
  enablePatches();
}

var immer =
/*#__PURE__*/
new Immer();
/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */

var produce = immer.produce;
/**
 * Like `produce`, but `produceWithPatches` always returns a tuple
 * [nextState, patches, inversePatches] (instead of just the next state)
 */

var produceWithPatches =
/*#__PURE__*/
immer.produceWithPatches.bind(immer);
/**
 * Pass true to automatically freeze all copies created by Immer.
 *
 * Always freeze by default, even in production mode
 */

var setAutoFreeze =
/*#__PURE__*/
immer.setAutoFreeze.bind(immer);
/**
 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
 * always faster than using ES5 proxies.
 *
 * By default, feature detection is used, so calling this is rarely necessary.
 */

var setUseProxies =
/*#__PURE__*/
immer.setUseProxies.bind(immer);
/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */

var applyPatches =
/*#__PURE__*/
immer.applyPatches.bind(immer);
/**
 * Create an Immer draft from the given base state, which may be a draft itself.
 * The draft can be modified until you finalize it with the `finishDraft` function.
 */

var createDraft =
/*#__PURE__*/
immer.createDraft.bind(immer);
/**
 * Finalize an Immer draft from a `createDraft` call, returning the base state
 * (if no changes were made) or a modified copy. The draft must *not* be
 * mutated afterwards.
 *
 * Pass a function as the 2nd argument to generate Immer patches based on the
 * changes that were made.
 */

var finishDraft =
/*#__PURE__*/
immer.finishDraft.bind(immer);
/**
 * This function is actually a no-op, but can be used to cast an immutable type
 * to an draft type and make TypeScript happy
 *
 * @param value
 */

function castDraft(value) {
  return value;
}
/**
 * This function is actually a no-op, but can be used to cast a mutable type
 * to an immutable type and make TypeScript happy
 * @param value
 */

function castImmutable(value) {
  return value;
}

exports.Immer = Immer;
exports.applyPatches = applyPatches;
exports.castDraft = castDraft;
exports.castImmutable = castImmutable;
exports.createDraft = createDraft;
exports.current = current;
exports["default"] = produce;
exports.enableAllPlugins = enableAllPlugins;
exports.enableES5 = enableES5;
exports.enableMapSet = enableMapSet;
exports.enablePatches = enablePatches;
exports.finishDraft = finishDraft;
exports.freeze = freeze;
exports.immerable = DRAFTABLE;
exports.isDraft = isDraft;
exports.isDraftable = isDraftable;
exports.nothing = NOTHING;
exports.original = original;
exports.produce = produce;
exports.produceWithPatches = produceWithPatches;
exports.setAutoFreeze = setAutoFreeze;
exports.setUseProxies = setUseProxies;
//# sourceMappingURL=immer.cjs.development.js.map


/***/ }),

/***/ "./node_modules/immer/dist/index.js":
/*!******************************************!*\
  !*** ./node_modules/immer/dist/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (false) {} else {
  module.exports = __webpack_require__(/*! ./immer.cjs.development.js */ "./node_modules/immer/dist/immer.cjs.development.js")
}


/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/admin.scss":
/*!************************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/admin.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/ts/components/ContentField/styles.scss":
/*!**********************************************************!*\
  !*** ./resources/ts/components/ContentField/styles.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/ts/components/DayMonthPicker/styles.scss":
/*!************************************************************!*\
  !*** ./resources/ts/components/DayMonthPicker/styles.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/styles.scss":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/styles.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/ts/components/EntitySelector/styles.scss":
/*!************************************************************!*\
  !*** ./resources/ts/components/EntitySelector/styles.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStyleSheet": () => (/* binding */ Je),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ le),
/* harmony export */   "StyleSheetContext": () => (/* binding */ ue),
/* harmony export */   "StyleSheetManager": () => (/* binding */ ye),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Le),
/* harmony export */   "ThemeContext": () => (/* binding */ Ge),
/* harmony export */   "ThemeProvider": () => (/* binding */ Fe),
/* harmony export */   "__PRIVATE__": () => (/* binding */ Ke),
/* harmony export */   "createGlobalStyle": () => (/* binding */ We),
/* harmony export */   "css": () => (/* binding */ Ce),
/* harmony export */   "isStyledComponent": () => (/* binding */ N),
/* harmony export */   "keyframes": () => (/* binding */ Ue),
/* harmony export */   "useTheme": () => (/* binding */ Ze),
/* harmony export */   "version": () => (/* binding */ C),
/* harmony export */   "withTheme": () => (/* binding */ Xe)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.6",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x=new Map,k=new Map,V=1,B=function(e){if(x.has(e))return x.get(e);for(;k.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),x.set(e,t),k.set(t,e),t},z=function(e){return k.get(e)},M=function(e,t){t>=V&&(V=t+1),x.set(e,t),k.set(t,e)},G="style["+A+'][data-styled-version="5.3.6"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return true?__webpack_require__.nc:0},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.6");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.6"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n))}catch(e){Ie.test(e.message)&&Pe.delete(n)}finally{console.error=r}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a)}return e}var Ge=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),Le=Ge.Consumer;function Fe(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Ge.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.6"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Re(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ce.apply(void 0,[e].concat(n)),a="sc-global-"+xe(JSON.stringify(i)),u=new $e(i,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(l,e,t,o,n),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){if(!t.server)return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Re(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Oe(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function Ue(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=xe(o);return new ve(s,o)}var Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),i=e.defaultProps,a=Re(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Ze=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge)},Ke={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (isPropValid);


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["richText"];

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/block.json":
/*!************************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/block.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/degree-program-form","title":"Degree program editor","category":"theme","icon":"welcome-learn-more","description":"Displays degree program editor form.","version":"1.0.0","textdomain":"fau-degree-program","supports":{"lock":false,"html":false,"inserter":false,"multiple":false,"reusable":false,"customClassName":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-details/block.json":
/*!************************************************************!*\
  !*** ./resources/ts/blocks/description-details/block.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/description-details","title":"Description Details","category":"theme","parent":["fau/description-list"],"icon":"editor-help","version":"1.0.0","textdomain":"fau-degree-program","attributes":{"content":{"type":"string","source":"html","selector":"dd","default":""}},"supports":{"lock":false,"html":false,"reusable":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-list/block.json":
/*!*********************************************************!*\
  !*** ./resources/ts/blocks/description-list/block.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/description-list","title":"Description List","category":"theme","icon":"admin-page","version":"1.0.0","textdomain":"fau-degree-program","supports":{"lock":false,"html":false,"reusable":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-term/block.json":
/*!*********************************************************!*\
  !*** ./resources/ts/blocks/description-term/block.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/description-term","title":"Description Term","category":"theme","parent":["fau/description-list"],"icon":"info","version":"1.0.0","textdomain":"fau-degree-program","attributes":{"content":{"type":"string","source":"html","selector":"dt","default":""}},"supports":{"lock":false,"html":false,"reusable":false}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!***********************************************!*\
  !*** ./resources/ts/degree-program-editor.ts ***!
  \***********************************************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! ./lib/immer */ "./resources/ts/lib/immer.ts");
__webpack_require__(/*! ./blocks */ "./resources/ts/blocks/index.ts");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMvZGVncmVlLXByb2dyYW0tZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDUnZCO0FBQ0E7QUFDQSwwS0FBMEssTUFBTTtBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsT0FBTztBQUM1QiwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJHQUEyRzs7QUFFM0c7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0EsR0FBRyxHQUFHOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUixLQUFLOztBQUVMO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsYUFBYSxLQUFLO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixrQkFBZTtBQUNmLHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsY0FBYztBQUNkLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCOzs7Ozs7Ozs7Ozs7O0FDbmhFWTs7QUFFWixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsNEhBQXNEO0FBQ3hEOzs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSTtBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQUwsbUJBQUFBLENBQUFBLGdEQUFBQTtBQUNBQSxtQkFBQUEsQ0FBQUEsZ0RBQUFBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVncmVlLXByb2dyYW0tZm9ybS9FZGl0LnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVncmVlLXByb2dyYW0tZm9ybS9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tZGV0YWlscy9FZGl0LnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tZGV0YWlscy9TYXZlLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tZGV0YWlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tbGlzdC9FZGl0LnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tbGlzdC9TYXZlLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tbGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tdGVybS9FZGl0LnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tdGVybS9TYXZlLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tdGVybS9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZmlsdGVycy9hZGRIZWFkaW5nQmxvY2tWYXJpYXRpb25zLnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9maWx0ZXJzL2FkZFNob3J0Y29kZUJsb2NrVmFyaWF0aW9ucy50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZmlsdGVycy9kZWZhdWx0SW1hZ2VTaXplLnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9maWx0ZXJzL2luZGV4LnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9maWx0ZXJzL3Jlc3RyaWN0QWxsb3dlZFRleHRGb3JtYXRzLnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvQ2lyY3VsYXJQcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzL2luZGV4LnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvQ29udGVudEZpZWxkL0NvbnRlbnRGaWVsZC50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9Db250ZW50RmllbGQvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvQ29udGVudEZpZWxkL2luZGV4LnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvQ29udGVudEZpZWxkL3VzZUJsb2NrRWRpdG9yU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EYXlNb250aFBpY2tlci9EYXlNb250aFBpY2tlci50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EYXlNb250aFBpY2tlci9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMvRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucy50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zL1JlbGF0ZWREZWdyZWVQcm9ncmFtcy50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zL2hvYy9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMvaG9jL3dpdGhEZWdyZWVQcm9ncmFtUG9zdHMudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zL2hvYy93aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtL0FkbWlzc2lvblJlcXVpcmVtZW50cy50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vRGVncmVlUHJvZ3JhbUVkaXRGb3JtLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9Gb3JtSGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vR2VuZXJhbC50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vTXVsdGlsaW5ndWFsQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9Pcmdhbml6YXRpb25hbExpbmtzLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9UYWJUaXRsZS50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vY29uc3RhbnRzLnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtL2luZGV4LnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRW50aXR5U2VsZWN0b3IvRW50aXR5U2VsZWN0b3IudHN4Iiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRW50aXR5U2VsZWN0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9Gb3JtRmllbGQvRmllbGRDb250ZXh0QXdhcmVUZXh0Q29udHJvbC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0Zvcm1GaWVsZC9GaWVsZENvbnRleHRBd2FyZVRleHRhcmVhQ29udHJvbC50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9Gb3JtRmllbGQvRmllbGRFcnJvci50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9Gb3JtRmllbGQvRm9ybUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0Zvcm1GaWVsZC9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0Zvcm1GaWVsZC93aXRoQXJpYVJlcXVpcmVkLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0ltYWdlRmllbGQvSW1hZ2VGaWVsZC50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9JbWFnZUZpZWxkL2luZGV4LnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvSW1hZ2VGaWVsZC91c2VNZWRpYS50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0xheW91dHMvRm9ybUZpZWxkTGFiZWwudHN4Iiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvTGF5b3V0cy9Gb3JtRmllbGRXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0xheW91dHMvRm9ybVNlcGFyYXRvci50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9MYXlvdXRzL0Zvcm1XcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0xheW91dHMvc3R5bGUtZGVmaW5pdGlvbnMudHN4Iiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvTGltaXRlZElucHV0Q29udHJvbC9MaW1pdGVkSW5wdXRDb250cm9sLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0xpbWl0ZWRJbnB1dENvbnRyb2wvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UYWJzL1RhYnMudHN4Iiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGFicy9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1Rlcm1TZWxlY3Rvci9NdWx0aVRlcm1TZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvVGVybVNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1Rlcm1TZWxlY3Rvci9ob2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvaG9jL3dpdGhEZWdyZWVQcm9ncmFtVGVybXMudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvaG9jL3dpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcy50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1Rlcm1TZWxlY3Rvci9ob2Mvd2l0aFRlcm1TZWxlY3RvclByb3BzLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1Rlcm1TZWxlY3Rvci9pbmRleC50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1RleHRDb250cm9sQ29sbGVjdGlvbi9UZXh0Q29udHJvbENvbGxlY3Rpb24udHN4Iiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGV4dENvbnRyb2xDb2xsZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbnRleHRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb250ZXh0cy9EZWdyZWVQcm9ncmFtVmFsaWRhdGlvblByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9jb250ZXh0cy9Qcm92aWRlcnMudHN4Iiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2RlZnMudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvZGVmcy9kZWdyZWUtcHJvZ3JhbS1kYXRhLnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2hvb2tzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ob29rcy91c2VDb25kaXRpb25hbEZpZWxkcy50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy9ob29rcy91c2VEZWdyZWVQcm9ncmFtUHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvaG9va3MvdXNlVGF4b25vbXlUZXJtLnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2xpYi9pbW1lci50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy91dGlsL2Vycm9yVHJhbnNmb3Jtcy50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy91dGlsL2lkSGVscGVycy50cyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL3Jlc291cmNlcy90cy91dGlsL3NlcnZlckRhdGEudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvdXRpbC90cmFuc2Zvcm1lZEVycm9yTWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvdXRpbC90cmFuc2Zvcm1zLnRzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2RlZ3JlZS1wcm9ncmFtLWZvcm0vYWRtaW4uc2Nzcz8zY2UxIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvQ29udGVudEZpZWxkL3N0eWxlcy5zY3NzPzU4ZjQiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EYXlNb250aFBpY2tlci9zdHlsZXMuc2Nzcz81NGVjIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtL3N0eWxlcy5zY3NzP2QxNGYiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9FbnRpdHlTZWxlY3Rvci9zdHlsZXMuc2Nzcz9iODY5Iiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5lc20uanMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vZXh0ZXJuYWwgd2luZG93IFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9iXCJdIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja3NcIl0iLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvcmVEYXRhXCJdIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRvbVJlYWR5XCJdIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWRpdG9yXCJdIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJodG1sRW50aXRpZXNcIl0iLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwibWVkaWFVdGlsc1wiXSIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInJpY2hUZXh0XCJdIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BycnplL2ZhdS1zdHVkaXVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AcnJ6ZS9mYXUtc3R1ZGl1bS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vQHJyemUvZmF1LXN0dWRpdW0vLi9yZXNvdXJjZXMvdHMvZGVncmVlLXByb2dyYW0tZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQgRGVncmVlUHJvZ3JhbUVkaXRGb3JtIGZyb20gJ2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtJztcblxuaW1wb3J0ICcuL2FkbWluLnNjc3MnO1xuXG5jb25zdCBFZGl0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHsuLi5ibG9ja1Byb3BzfT5cbiAgICAgICAgICAgIDxEZWdyZWVQcm9ncmFtRWRpdEZvcm0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgRWRpdCBmcm9tICcuL0VkaXQnO1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YS5uYW1lLCB7XG4gICAgLi4ubWV0YWRhdGEsXG4gICAgZWRpdDogRWRpdCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUmljaFRleHQsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IEJsb2NrIH0gZnJvbSAnLi4vLi4vZGVmcy9jb21tb24nO1xuXG5jb25zdCBFZGl0ID0gKHsgYXR0cmlidXRlczogeyBjb250ZW50IH0sIHNldEF0dHJpYnV0ZXMgfTogQmxvY2s8eyBjb250ZW50OiBzdHJpbmcgfT4pID0+IHtcbiAgICBjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJpY2hUZXh0XG4gICAgICAgICAgICB7Li4uYmxvY2tQcm9wc31cbiAgICAgICAgICAgIHRhZ05hbWU9XCJkZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KG5leHRDb250ZW50KSA9PiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogbmV4dENvbnRlbnQgfSl9XG4gICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXygnRGVzY3JpcHRpb24gZGV0YWlscyDigKYnLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyl9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSaWNoVGV4dCwgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHsgQmxvY2sgfSBmcm9tICcuLi8uLi9kZWZzL2NvbW1vbic7XG5cbmNvbnN0IFNhdmUgPSAoeyBhdHRyaWJ1dGVzOiB7IGNvbnRlbnQgfSB9OiBCbG9jazx7IGNvbnRlbnQ6IHN0cmluZyB9PikgPT4ge1xuICAgIGNvbnN0IHNhdmVCbG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcy5zYXZlKCk7XG4gICAgcmV0dXJuIDxSaWNoVGV4dC5Db250ZW50IHsuLi5zYXZlQmxvY2tQcm9wc30gdGFnTmFtZT1cImRkXCIgdmFsdWU9e2NvbnRlbnR9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vRWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL1NhdmUnO1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YS5uYW1lLCB7XG4gICAgLi4ubWV0YWRhdGEsXG4gICAgZWRpdDogRWRpdCxcbiAgICBzYXZlOiBTYXZlLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbm5lckJsb2NrcywgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbJ2ZhdS9kZXNjcmlwdGlvbi10ZXJtJywgJ2ZhdS9kZXNjcmlwdGlvbi1kZXRhaWxzJ107XG5jb25zdCBURU1QTEFURSA9IFtbJ2ZhdS9kZXNjcmlwdGlvbi10ZXJtJ10sIFsnZmF1L2Rlc2NyaXB0aW9uLWRldGFpbHMnXV07XG5cbmNvbnN0IEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkbCB7Li4uYmxvY2tQcm9wc30+XG4gICAgICAgICAgICA8SW5uZXJCbG9ja3NcbiAgICAgICAgICAgICAgICBhbGxvd2VkQmxvY2tzPXtBTExPV0VEX0JMT0NLU31cbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZT17VEVNUExBVEV9XG4gICAgICAgICAgICAgICAgcmVuZGVyQXBwZW5kZXI9e0lubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2RsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5uZXJCbG9ja3MsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmNvbnN0IFNhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMuc2F2ZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRsIHsuLi5ibG9ja1Byb3BzfT5cbiAgICAgICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG4gICAgICAgIDwvZGw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmU7XG4iLCJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgRWRpdCBmcm9tICcuL0VkaXQnO1xuaW1wb3J0IFNhdmUgZnJvbSAnLi9TYXZlJztcblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuICAgIC4uLm1ldGFkYXRhLFxuICAgIGVkaXQ6IEVkaXQsXG4gICAgc2F2ZTogU2F2ZSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUmljaFRleHQsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IEJsb2NrIH0gZnJvbSAnLi4vLi4vZGVmcy9jb21tb24nO1xuXG5jb25zdCBFZGl0ID0gKHsgYXR0cmlidXRlczogeyBjb250ZW50IH0sIHNldEF0dHJpYnV0ZXMgfTogQmxvY2s8eyBjb250ZW50OiBzdHJpbmcgfT4pID0+IHtcbiAgICBjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJpY2hUZXh0XG4gICAgICAgICAgICB7Li4uYmxvY2tQcm9wc31cbiAgICAgICAgICAgIHRhZ05hbWU9XCJkdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KG5leHRDb250ZW50KSA9PiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogbmV4dENvbnRlbnQgfSl9XG4gICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXygnRGVzY3JpcHRpb24gdGVybSDigKYnLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyl9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSaWNoVGV4dCwgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHsgQmxvY2sgfSBmcm9tICcuLi8uLi9kZWZzL2NvbW1vbic7XG5cbmNvbnN0IFNhdmUgPSAoeyBhdHRyaWJ1dGVzOiB7IGNvbnRlbnQgfSB9OiBCbG9jazx7IGNvbnRlbnQ6IHN0cmluZyB9PikgPT4ge1xuICAgIGNvbnN0IHNhdmVCbG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcy5zYXZlKCk7XG4gICAgcmV0dXJuIDxSaWNoVGV4dC5Db250ZW50IHsuLi5zYXZlQmxvY2tQcm9wc30gdGFnTmFtZT1cImR0XCIgdmFsdWU9e2NvbnRlbnR9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vRWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL1NhdmUnO1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YS5uYW1lLCB7XG4gICAgLi4ubWV0YWRhdGEsXG4gICAgZWRpdDogRWRpdCxcbiAgICBzYXZlOiBTYXZlLFxufSk7XG4iLCJpbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuZnVuY3Rpb24gYWRkSGVhZGluZ0Jsb2NrVmFyaWF0aW9ucyhzZXR0aW5ncywgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSAnY29yZS9oZWFkaW5nJykge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICAgIHZhcmlhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSDMnLFxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0gzJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IGxldmVsOiAzIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdINCcsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdINCcsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyBsZXZlbDogNCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSDUnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSDUnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgbGV2ZWw6IDUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfTtcbn1cblxuYWRkRmlsdGVyKCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLCAnZmF1L3ZhcmlhdGlvbnMvaGVhZGluZycsIGFkZEhlYWRpbmdCbG9ja1ZhcmlhdGlvbnMpO1xuIiwiaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmZ1bmN0aW9uIGFkZFNob3J0Y29kZUJsb2NrVmFyaWF0aW9ucyhzZXR0aW5ncywgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSAnY29yZS9zaG9ydGNvZGUnKSB7XG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICAgICAgdmFyaWF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdBbGVydCcsXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdGV4dDogJ1thbGVydF0nIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDb250YWN0JyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdGV4dDogJ1tjb250YWN0XScgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1ZpZGVvJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZpZGVvJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHRleHQ6ICdbZmF1LXZpZGVvXScgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfTtcbn1cblxuYWRkRmlsdGVyKCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLCAnZmF1L3ZhcmlhdGlvbnMvc2hvcnRjb2RlJywgYWRkU2hvcnRjb2RlQmxvY2tWYXJpYXRpb25zKTtcbiIsImltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5jb25zdCBERUZBVUxUX1NJWkUgPSAndGh1bWJuYWlsJztcblxuYWRkRmlsdGVyKFxuICAgICdlZGl0b3IuUG9zdEZlYXR1cmVkSW1hZ2UuaW1hZ2VTaXplJyxcbiAgICAnZmF1L2RlZ3JlZS1wcm9ncmFtLWltYWdlLXNpemUnLFxuICAgICgpID0+IERFRkFVTFRfU0laRSxcbik7XG4iLCJpbXBvcnQgJy4vZGVmYXVsdEltYWdlU2l6ZSc7XG5pbXBvcnQgJy4vYWRkSGVhZGluZ0Jsb2NrVmFyaWF0aW9ucyc7XG5pbXBvcnQgJy4vYWRkU2hvcnRjb2RlQmxvY2tWYXJpYXRpb25zJztcbmltcG9ydCAnLi9yZXN0cmljdEFsbG93ZWRUZXh0Rm9ybWF0cyc7XG4iLCJpbXBvcnQgeyBkaXNwYXRjaCwgc2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCBkb21SZWFkeSBmcm9tICdAd29yZHByZXNzL2RvbS1yZWFkeSc7XG5pbXBvcnQgeyBzdG9yZSBhcyByaWNoVGV4dFN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9yaWNoLXRleHQnO1xuXG5pbnRlcmZhY2UgRm9ybWF0VHlwZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmNvbnN0IEFMTE9XRURfRk9STUFUUyA9IFsnY29yZS9ib2xkJywgJ2NvcmUvbGluayddO1xuXG5kb21SZWFkeSgoKSA9PiB7XG4gICAgY29uc3QgcmVnaXN0ZXJlZEZvcm1hdHMgPSBzZWxlY3QocmljaFRleHRTdG9yZSkuZ2V0Rm9ybWF0VHlwZXMoKSBhcyBBcnJheTxGb3JtYXRUeXBlPjtcbiAgICBjb25zdCBmb3JtYXROYW1lc1RvRGlzYWJsZSA9IDxBcnJheTxzdHJpbmc+PltdO1xuICAgIHJlZ2lzdGVyZWRGb3JtYXRzLmZvckVhY2goKGZvcm1hdFR5cGUpID0+IHtcbiAgICAgICAgaWYgKEFMTE9XRURfRk9STUFUUy5pbmNsdWRlcyhmb3JtYXRUeXBlLm5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXROYW1lc1RvRGlzYWJsZS5wdXNoKGZvcm1hdFR5cGUubmFtZSk7XG4gICAgfSk7XG5cbiAgICBkaXNwYXRjaChyaWNoVGV4dFN0b3JlKS5yZW1vdmVGb3JtYXRUeXBlcyhmb3JtYXROYW1lc1RvRGlzYWJsZSk7XG59KTtcbiIsImltcG9ydCAnLi9kZWdyZWUtcHJvZ3JhbS1mb3JtJztcbmltcG9ydCAnLi9kZXNjcmlwdGlvbi1kZXRhaWxzJztcbmltcG9ydCAnLi9kZXNjcmlwdGlvbi1saXN0JztcbmltcG9ydCAnLi9kZXNjcmlwdGlvbi10ZXJtJztcbmltcG9ydCAnLi9maWx0ZXJzJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLyoqXG4gKiBPcmlnaW5hbCBjb21wb25lbnQ6XG4gKiBAbGluayBodHRwczovL2NvZGVwZW4uaW8vYmJyYWR5L3Blbi9vek1qS0VcbiAqL1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgICBzcXVhcmVTaXplPzogbnVtYmVyO1xuICAgIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCBERUZBVUxUX1NRVUFSRV9TSVpFID0gMTAwO1xuY29uc3QgREVGQVVMVF9TVFJPS0VfV0lEVEggPSAyO1xuXG5jb25zdCBTdHlsZWRTdmdDaXJjbGUgPSBzdHlsZWQuc3ZnYFxuICAgIHN0cm9rZTogdmFyKC0td3AtYWRtaW4tdGhlbWUtY29sb3IsICMwMDdjYmEpO1xuYDtcblxuY29uc3QgQ2lyY3VsYXJQcm9ncmVzc0JhciA9ICh7XG4gICAgcGVyY2VudGFnZSxcbiAgICBzcXVhcmVTaXplID0gREVGQVVMVF9TUVVBUkVfU0laRSxcbiAgICBzdHJva2VXaWR0aCA9IERFRkFVTFRfU1RST0tFX1dJRFRILFxufTogUHJvcHMpID0+IHtcbiAgICBjb25zdCByYWRpdXMgPSAoc3F1YXJlU2l6ZSAtIHN0cm9rZVdpZHRoKSAvIDI7XG4gICAgY29uc3Qgdmlld0JveCA9IGAwIDAgJHtzcXVhcmVTaXplfSAke3NxdWFyZVNpemV9YDtcbiAgICBjb25zdCBkYXNoQXJyYXkgPSByYWRpdXMgKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCBkYXNoT2Zmc2V0ID0gZGFzaEFycmF5IC0gKGRhc2hBcnJheSAqIHBlcmNlbnRhZ2UpIC8gMTAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFN2Z0NpcmNsZSB3aWR0aD17c3F1YXJlU2l6ZX0gaGVpZ2h0PXtzcXVhcmVTaXplfSB2aWV3Qm94PXt2aWV3Qm94fT5cbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgY3g9e3NxdWFyZVNpemUgLyAyfVxuICAgICAgICAgICAgICAgIGN5PXtzcXVhcmVTaXplIC8gMn1cbiAgICAgICAgICAgICAgICByPXtyYWRpdXN9XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2Ake3N0cm9rZVdpZHRofXB4YH1cbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwicmdiYSgxNjcsIDE1MiwgMTgxLCAwLjMpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLXByb2dyZXNzXCJcbiAgICAgICAgICAgICAgICBjeD17c3F1YXJlU2l6ZSAvIDJ9XG4gICAgICAgICAgICAgICAgY3k9e3NxdWFyZVNpemUgLyAyfVxuICAgICAgICAgICAgICAgIHI9e3JhZGl1c31cbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2Ake3N0cm9rZVdpZHRofXB4YH1cbiAgICAgICAgICAgICAgICAvLyBTdGFydCBwcm9ncmVzcyBtYXJrZXIgYXQgMTIgTydDbG9ja1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgJHtzcXVhcmVTaXplIC8gMn0gJHtzcXVhcmVTaXplIC8gMn0pYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6IGRhc2hBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogZGFzaE9mZnNldCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRTdmdDaXJjbGU+XG4gICAgKTtcbn07XG5cbkNpcmN1bGFyUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHNxdWFyZVNpemU6IERFRkFVTFRfU1FVQVJFX1NJWkUsXG4gICAgc3Ryb2tlV2lkdGg6IERFRkFVTFRfU1RST0tFX1dJRFRILFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2lyY3VsYXJQcm9ncmVzc0JhcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlZk9iamVjdCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gICAgQmxvY2tFZGl0b3JLZXlib2FyZFNob3J0Y3V0cyxcbiAgICBCbG9ja0VkaXRvclByb3ZpZGVyLFxuICAgIEJsb2NrTGlzdCxcbiAgICBCbG9ja1Rvb2xzLFxuICAgIERlZmF1bHRCbG9ja0FwcGVuZGVyLFxuICAgIE9ic2VydmVUeXBpbmcsXG4gICAgc3RvcmUgYXMgYmxvY2tFZGl0b3JTdG9yZSxcbiAgICBXcml0aW5nRmxvdyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgcGFyc2UsIHNlcmlhbGl6ZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7IFBvcG92ZXIsIFNsb3RGaWxsUHJvdmlkZXIgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyB1c2VGaWVsZENvbnRleHQgfSBmcm9tICcuLi9Gb3JtRmllbGQvRm9ybUZpZWxkJztcbmltcG9ydCB1c2VCbG9ja0VkaXRvclNldHRpbmdzIGZyb20gJy4vdXNlQmxvY2tFZGl0b3JTZXR0aW5ncyc7XG5cbmludGVyZmFjZSBDb250ZW50RmllbGRQcm9wcyB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzXG4gICAga2V5OiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIG9uQ2hhbmdlKGNvbnRlbnQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgcmVxdWlyZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRFZGl0b3JXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDAgMCAxMnB4ICFpbXBvcnRhbnQ7XG5cbiAgICAuY29udGVudC1maWVsZC1ibG9ja3MtbGlzdCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NTc1NzU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuYDtcblxuY29uc3QgQmxvY2tEZXNlbGVjdExpc3RlbmVyID0gKHsgZWRpdG9yUmVmIH06IHsgZWRpdG9yUmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+IH0pID0+IHtcbiAgICBjb25zdCB7IGNsZWFyU2VsZWN0ZWRCbG9jayB9ID0gdXNlRGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSk7XG5cbiAgICBjb25zdCBibHVyTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFlZGl0b3JSZWYuY3VycmVudCB8fCBlZGl0b3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyU2VsZWN0ZWRCbG9jaygpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmx1ckxpc3RlbmVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBibHVyTGlzdGVuZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogUHJvdmlkZXMgcmVzdHJpY3RlZCBCbG9jayBFZGl0b3IgVUkuXG4gKiBBbGxvd2VkIGJsb2NrcyBhbmQgZm9ybWF0dGluZyBvcHRpb25zIGFyZSBsaW1pdGVkLlxuICpcbiAqIEBwYXJhbSBjb250ZW50IFNlcmlhbGl6ZWQgYmxvY2tzIHN0cmluZ1xuICogQHBhcmFtIG9uQ2hhbmdlIENhbGxiYWNrIHRvIHVwZGF0ZSBjb250ZW50XG4gKiBAcGFyYW0gcmVxdWlyZWQgSXMgcmVxdWlyZWQ/XG4gKi9cbmNvbnN0IENvbnRlbnRGaWVsZCA9ICh7IGNvbnRlbnQsIG9uQ2hhbmdlLCByZXF1aXJlZCB9OiBDb250ZW50RmllbGRQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50QmxvY2tzLCBzZXRDdXJyZW50QmxvY2tzXSA9IHVzZVN0YXRlKHBhcnNlKGNvbnRlbnQpKTtcbiAgICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBvbkNoYW5nZWAgY2FsbGJhY2sgaXMgZmlyZWQgb25seSB3aGVuIGNoYW5nZXMgYXJlIGNvbnNpZGVyZWQgZmluYWwsXG4gICAgICogaS5lLiwgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyB0byBhbm90aGVyIGJsb2NrLlxuICAgICAqIFRvIHByZXZlbnQgaW5jb21wbGV0ZSBwZXJzaXN0aW5nLCB3ZSBoYXZlIHRvIHNlcmlhbGl6ZSB0aGUgYmxvY2tzIGBvbklucHV0YC5cbiAgICAgKiBCdXQgc2luY2UgdGhlIGNhbGxiYWNrIHJ1bnMgb24gZXZlcnkgYXR0cmlidXRlIGNoYW5nZSxcbiAgICAgKiBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvbiBmb3IgaW1wcm92ZWQgcGVyZm9ybWFuY2UgZXhpc3RlZCBidXQgd2FzIHJlbW92ZWQgZHVlIHRvIGlzc3Vlcy5cbiAgICAgKiBUT0RPOiBCcmluZyBiYWNrIHBlcmZvcm1hbmNlIGNvbnNpZGVyYXRpb25zIHVzaW5nIGEgZGVib3VuY2VkIHVwZGF0ZVxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZVZhbHVlID0gKGJsb2NrcykgPT4ge1xuICAgICAgICBvbkNoYW5nZShzZXJpYWxpemUoYmxvY2tzKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHRpbmdzID0gdXNlQmxvY2tFZGl0b3JTZXR0aW5ncygpO1xuICAgIGNvbnN0IHsgcmVxdWlyZWQ6IGZpZWxkUmVxdWlyZWQgfSA9IHVzZUZpZWxkQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJsb2NrRWRpdG9yUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50QmxvY2tzfVxuICAgICAgICAgICAgb25JbnB1dD17KGJsb2NrcykgPT4ge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRCbG9ja3MoYmxvY2tzKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZShibG9ja3MpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoYmxvY2tzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEJsb2NrcyhibG9ja3MpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGJsb2Nrcyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17ZWRpdG9yUmVmfSBjbGFzc05hbWU9XCJmYXUtY29udGVudC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxTbG90RmlsbFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRWRpdG9yV3JhcHBlciBjbGFzc05hbWU9XCJlZGl0b3Itc3R5bGVzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0VkaXRvcktleWJvYXJkU2hvcnRjdXRzLlJlZ2lzdGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tUb29scz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V3JpdGluZ0Zsb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPYnNlcnZlVHlwaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGV4dGJveFwiIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkID8/IGZpZWxkUmVxdWlyZWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXBwZW5kZXI9e0RlZmF1bHRCbG9ja0FwcGVuZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LWZpZWxkLWJsb2Nrcy1saXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0Rlc2VsZWN0TGlzdGVuZXIgZWRpdG9yUmVmPXtlZGl0b3JSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PYnNlcnZlVHlwaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV3JpdGluZ0Zsb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jsb2NrVG9vbHM+XG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRWRpdG9yV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIuU2xvdCAvPlxuICAgICAgICAgICAgICAgIDwvU2xvdEZpbGxQcm92aWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jsb2NrRWRpdG9yUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbkNvbnRlbnRGaWVsZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudEZpZWxkO1xuIiwiZXhwb3J0IGNvbnN0IEFMTE9XRURfQkxPQ0tfVFlQRVMgPSBbXG4gICAgJ2NvcmUvcGFyYWdyYXBoJyxcbiAgICAnY29yZS9pbWFnZScsXG4gICAgJ2NvcmUvbGlzdCcsXG4gICAgJ2NvcmUvbGlzdC1pdGVtJyxcbiAgICAnY29yZS9oZWFkaW5nJyxcbiAgICAnY29yZS9zaG9ydGNvZGUnLFxuICAgICdmYXUvZGVzY3JpcHRpb24tbGlzdCcsXG4gICAgJ2ZhdS9kZXNjcmlwdGlvbi10ZXJtJyxcbiAgICAnZmF1L2Rlc2NyaXB0aW9uLWRldGFpbHMnLFxuXTtcblxuZXhwb3J0IGNvbnN0IEFMTE9XRURfTUlNRV9UWVBFUyA9IHtcbiAgICAnanBnfGpwZWd8anBlJzogJ2ltYWdlL2pwZWcnLFxuICAgIGdpZjogJ2ltYWdlL2dpZicsXG4gICAgcG5nOiAnaW1hZ2UvcG5nJyxcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250ZW50RmllbGQnO1xuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgICBfX2V4cGVyaW1lbnRhbEZldGNoTGlua1N1Z2dlc3Rpb25zIGFzIGZldGNoTGlua1N1Z2dlc3Rpb25zLFxuICAgIF9fZXhwZXJpbWVudGFsRmV0Y2hVcmxEYXRhIGFzIGZldGNoVXJsRGF0YSxcbiAgICBzdG9yZSBhcyBjb3JlU3RvcmUsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyB1cGxvYWRNZWRpYSB9IGZyb20gJ0B3b3JkcHJlc3MvbWVkaWEtdXRpbHMnO1xuXG5pbXBvcnQgeyBBTExPV0VEX0JMT0NLX1RZUEVTLCBBTExPV0VEX01JTUVfVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IFNFVFRJTkdTID0ge1xuICAgIGFsbG93ZWRCbG9ja1R5cGVzOiBBTExPV0VEX0JMT0NLX1RZUEVTLFxuICAgIGNvZGVFZGl0aW5nRW5hYmxlZDogZmFsc2UsXG59O1xuXG5jb25zdCB1c2VCbG9ja0VkaXRvclNldHRpbmdzID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhc1VwbG9hZFBlcm1pc3Npb25zID0gdXNlU2VsZWN0KFxuICAgICAgICAoc2VsZWN0KSA9PiBzZWxlY3QoY29yZVN0b3JlKS5jYW5Vc2VyKCdjcmVhdGUnLCAnbWVkaWEnKSA/PyBmYWxzZSxcbiAgICAgICAgW10sXG4gICAgKTtcblxuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgbGV0IG1lZGlhVXBsb2FkQmxvY2tFZGl0b3I7XG4gICAgICAgIGlmIChoYXNVcGxvYWRQZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgbWVkaWFVcGxvYWRCbG9ja0VkaXRvciA9ICh7IG9uRXJyb3IsIC4uLmFyZ3VtZW50c09iamVjdCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkTWVkaWEoe1xuICAgICAgICAgICAgICAgICAgICB3cEFsbG93ZWRNaW1lVHlwZXM6IEFMTE9XRURfTUlNRV9UWVBFUyxcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogKHsgbWVzc2FnZSB9KSA9PiBvbkVycm9yKG1lc3NhZ2UpLFxuICAgICAgICAgICAgICAgICAgICAuLi5hcmd1bWVudHNPYmplY3QsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLlNFVFRJTkdTLFxuICAgICAgICAgICAgbWVkaWFVcGxvYWQ6IG1lZGlhVXBsb2FkQmxvY2tFZGl0b3IsXG4gICAgICAgICAgICBfX2V4cGVyaW1lbnRhbEZldGNoTGlua1N1Z2dlc3Rpb25zOiAoc2VhcmNoLCBzZWFyY2hPcHRpb25zKSA9PlxuICAgICAgICAgICAgICAgIGZldGNoTGlua1N1Z2dlc3Rpb25zKHNlYXJjaCwgc2VhcmNoT3B0aW9ucyksXG4gICAgICAgICAgICBfX2V4cGVyaW1lbnRhbEZldGNoUmljaFVybERhdGE6IGZldGNoVXJsRGF0YSxcbiAgICAgICAgfTtcbiAgICB9LCBbaGFzVXBsb2FkUGVybWlzc2lvbnNdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUJsb2NrRWRpdG9yU2V0dGluZ3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBUZXh0Q29udHJvbFByb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzL2J1aWxkLXR5cGVzL3RleHQtY29udHJvbC90eXBlcyc7XG5cbmltcG9ydCB7IHVzZUZpZWxkQ29udGV4dCB9IGZyb20gJy4uL0Zvcm1GaWVsZC9Gb3JtRmllbGQnO1xuXG5jb25zdCBEYXlNb250aFBpY2tlciA9IChwcm9wczogVGV4dENvbnRyb2xQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcmVxdWlyZWQgfSA9IHVzZUZpZWxkQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAvLyBUaGUgcGF0dGVybiBkZXNjcmliZXMgdmFsaWQgZGF5IGFuZCBtb250aCBjb21iaW5hdGlvbnMgZXhlcHQgMjkuMDIuXG4gICAgICAgICAgICBwYXR0ZXJuPVwiKCgwWzEtOV18WzEyXVswLTldfDNbMDFdKVxcLigwWzEzNTc4XXwxWzAyXSl8KDBbMS05XXxbMTJdWzAtOV18MzApXFwuKDBbNDY5XXwxMSl8KDBbMS05XXwxWzAtOV18MlswLThdKVxcLjAyKVxcLlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRULk1NLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjLWRheS1tb250aC1waWNrZXJcIlxuICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERheU1vbnRoUGlja2VyO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGF5TW9udGhQaWNrZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRmxleCwgRmxleEJsb2NrLCBTcGlubmVyIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IEZvcm1GaWVsZCBmcm9tICdjb21wb25lbnRzL0Zvcm1GaWVsZC9Gb3JtRmllbGQnO1xuaW1wb3J0IHsgdXNlQ29tYmluYXRpb25PZkRlZ3JlZVByb2dyYW1FbmFibGVkIH0gZnJvbSAnaG9va3MvdXNlQ29uZGl0aW9uYWxGaWVsZHMnO1xuXG5pbXBvcnQgdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5IGZyb20gJy4uLy4uL2hvb2tzL3VzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eSc7XG5pbXBvcnQgUmVsYXRlZERlZ3JlZVByb2dyYW1zIGZyb20gJy4vUmVsYXRlZERlZ3JlZVByb2dyYW1zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucygpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICAgIGNvbnN0IGVuYWJsZWQgPSB1c2VDb21iaW5hdGlvbk9mRGVncmVlUHJvZ3JhbUVuYWJsZWQoKTtcbiAgICBjb25zdCBbY29tYmluYXRpb25zLCBzZXRDb21iaW5hdGlvbnNdID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PEFycmF5PG51bWJlcj4+KCdjb21iaW5hdGlvbnMnKTtcbiAgICBjb25zdCBbbGltaXRlZENvbWJpbmF0aW9ucywgc2V0TGltaXRlZENvbWJpbmF0aW9uc10gPVxuICAgICAgICB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8QXJyYXk8bnVtYmVyPj4oJ2xpbWl0ZWRfY29tYmluYXRpb25zJyk7XG5cbiAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGNvbWJpbmF0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IGxpbWl0ZWRDb21iaW5hdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgPEZsZXhCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXhCbG9jaz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb21iaW5hdGlvbnNcIlxuICAgICAgICAgICAgICAgIGxhYmVsPXtfeCgnQ29tYmluYXRpb25zJywgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxSZWxhdGVkRGVncmVlUHJvZ3JhbXNcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZERlZ3JlZVByb2dyYW1JZHM9e2NvbWJpbmF0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgc2V0UmVsYXRlZERlZ3JlZVByb2dyYW1zPXtzZXRDb21iaW5hdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRlZDogX3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbWJpbmF0aW9uIGFkZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb21iaW5hdGlvbiByZW1vdmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogX3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbW92ZSBjb21iaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2V4cGVyaW1lbnRhbEludmFsaWQ6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIGNvbWJpbmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxpbWl0ZWRfY29tYmluYXRpb25zXCJcbiAgICAgICAgICAgICAgICBsYWJlbD17X3goJ0xpbWl0ZWQgQ29tYmluYXRpb25zJywgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxSZWxhdGVkRGVncmVlUHJvZ3JhbXNcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZERlZ3JlZVByb2dyYW1JZHM9e2xpbWl0ZWRDb21iaW5hdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHNldFJlbGF0ZWREZWdyZWVQcm9ncmFtcz17c2V0TGltaXRlZENvbWJpbmF0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZGVkOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTGltaXRlZCBjb21iaW5hdGlvbiBhZGRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTGltaXRlZCBjb21iaW5hdGlvbiByZW1vdmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogX3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbW92ZSBsaW1pdGVkIGNvbWJpbmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsSW52YWxpZDogX3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgbGltaXRlZCBjb21iaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltbXV0YWJsZSB9IGZyb20gJ2ltbWVyJztcblxuaW1wb3J0IHsgY29tcG9zZSwgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IGRlY29kZUVudGl0aWVzIH0gZnJvbSAnQHdvcmRwcmVzcy9odG1sLWVudGl0aWVzJztcblxuaW1wb3J0IHsgRGVncmVlUHJvZ3JhbVBvc3QgfSBmcm9tICcuLi8uLi9kZWZzL2RlZ3JlZS1wcm9ncmFtLWRhdGEnO1xuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm9wcyB9IGZyb20gJy4uLy4uL2RlZnMvZW50aXR5LXNlbGVjdG9yJztcbmltcG9ydCBFbnRpdHlTZWxlY3RvciBmcm9tICcuLi9FbnRpdHlTZWxlY3Rvcic7XG5pbXBvcnQgeyB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzLCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMgfSBmcm9tICcuL2hvYyc7XG5cbmV4cG9ydCB0eXBlIFJlbGF0ZWREZWdyZWVQcm9ncmFtc1Byb3BzID0gUGljazxFbnRpdHlTZWxlY3RvclByb3BzLCAnbGFiZWwnIHwgJ21lc3NhZ2VzJz4gJiB7XG4gICAgcmVsYXRlZERlZ3JlZVByb2dyYW1JZHM6IEltbXV0YWJsZTxBcnJheTxudW1iZXI+PjtcbiAgICBzZXRSZWxhdGVkRGVncmVlUHJvZ3JhbXModmFsdWU6IEFycmF5PG51bWJlcj4pOiB2b2lkO1xufTtcblxuY29uc3Qgd2l0aFJlbGF0ZWREZWdyZWVQcm9ncmFtUHJvcHMgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChcbiAgICAoV3JhcHBlZENvbXBvbmVudDogUmVhY3QuRkM8UGFydGlhbDxFbnRpdHlTZWxlY3RvclByb3BzPj4pID0+XG4gICAgICAgICh7IHNldFJlbGF0ZWREZWdyZWVQcm9ncmFtcywgLi4ub3RoZXJzIH06IFJlbGF0ZWREZWdyZWVQcm9ncmFtc1Byb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eVRvVG9rZW49eyhwb3N0OiBEZWdyZWVQcm9ncmFtUG9zdCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlY29kZUVudGl0aWVzKHBvc3QuZGVncmVlX3Byb2dyYW0udGl0bGUuZGUpfSAoJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmRlZ3JlZV9wcm9ncmFtLmRlZ3JlZS5hYmJyZXZpYXRpb24uZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pYFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocG9zdHM6IEFycmF5PFBvc3Q+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWxhdGVkRGVncmVlUHJvZ3JhbXMocG9zdHMubWFwKChwb3N0KSA9PiBwb3N0LmlkKSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG1heFN1Z2dlc3Rpb25zPXszMDB9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgJ3dpdGhSZWxhdGVkRGVncmVlUHJvZ3JhbVByb3BzJyxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFJlbGF0ZWREZWdyZWVQcm9ncmFtUHJvcHMsXG4gICAgd2l0aERlZ3JlZVByb2dyYW1Qb3N0cyxcbiAgICB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMsXG4pKEVudGl0eVNlbGVjdG9yKSBhcyBSZWFjdC5GQzxSZWxhdGVkRGVncmVlUHJvZ3JhbXNQcm9wcz47XG4iLCJpbXBvcnQgd2l0aERlZ3JlZVByb2dyYW1Qb3N0cyBmcm9tICcuL3dpdGhEZWdyZWVQcm9ncmFtUG9zdHMnO1xuaW1wb3J0IHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1Qb3N0cyBmcm9tICcuL3dpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1Qb3N0cyc7XG5cbmV4cG9ydCB7IHdpdGhEZWdyZWVQcm9ncmFtUG9zdHMsIHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1Qb3N0cyB9O1xuIiwiaW1wb3J0IHsgUG9zdCwgc3RvcmUgYXMgY29yZVN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IFJlbGF0ZWREZWdyZWVQcm9ncmFtc1Byb3BzIH0gZnJvbSAnLi4vZGVmcyc7XG5cbmNvbnN0IHdpdGhEZWdyZWVQcm9ncmFtUG9zdHMgPSB3aXRoU2VsZWN0KFxuICAgIChzZWxlY3QsIG93blByb3BzOiBSZWxhdGVkRGVncmVlUHJvZ3JhbXNQcm9wcyk6IHsgZW50aXRpZXM6IEFycmF5PFBvc3Q8J3ZpZXcnPj4gfSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZ2V0RW50aXR5UmVjb3JkcyB9ID0gc2VsZWN0KGNvcmVTdG9yZS5uYW1lKTtcblxuICAgICAgICBpZiAob3duUHJvcHMucmVsYXRlZERlZ3JlZVByb2dyYW1JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVudGl0aWVzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgICBwZXJfcGFnZTogLTEsXG4gICAgICAgICAgICAgICAgb3JkZXJieTogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIF9maWVsZHM6ICdpZCxkZWdyZWVfcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgY29udGV4dDogJ3ZpZXcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IG93blByb3BzLnJlbGF0ZWREZWdyZWVQcm9ncmFtSWRzLmpvaW4oJywnKSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW50aXRpZXM6IGdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgc2VydmVyRGF0YSgpLnBvc3RUeXBlLCBxdWVyeSkgPz8gW10sXG4gICAgICAgIH07XG4gICAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEZWdyZWVQcm9ncmFtUG9zdHM7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUG9zdCwgc3RvcmUgYXMgY29yZVN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBzdG9yZSBhcyBlZGl0b3JTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxuaW1wb3J0IHNlcnZlckRhdGEgZnJvbSAndXRpbC9zZXJ2ZXJEYXRhJztcblxuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm9wcyB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMgPSB3aXRoU2VsZWN0KFxuICAgIChcbiAgICAgICAgc2VsZWN0LFxuICAgICAgICBvd25Qcm9wczogRW50aXR5U2VsZWN0b3JQcm9wczxQb3N0PCd2aWV3Jz4+LFxuICAgICk6IFBhcnRpYWw8RW50aXR5U2VsZWN0b3JQcm9wczxQb3N0PCd2aWV3Jz4+PiA9PiB7XG4gICAgICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgICAgIGNvbnN0IHsgZ2V0Q3VycmVudFBvc3QgfSA9IHNlbGVjdChlZGl0b3JTdG9yZS5uYW1lKTtcbiAgICAgICAgY29uc3QgeyBnZXRFbnRpdHlSZWNvcmRzIH0gPSBzZWxlY3QoY29yZVN0b3JlLm5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3N0ID0gZ2V0Q3VycmVudFBvc3QoKTtcblxuICAgICAgICBjb25zdCBwb3N0cyA9IGdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgc2VydmVyRGF0YSgpLnBvc3RUeXBlLCB7XG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IG93blByb3BzLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAgICAgIG9yZGVyYnk6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgb3JkZXI6ICdhc2MnLFxuICAgICAgICAgICAgICAgIF9maWVsZHM6ICdpZCxkZWdyZWVfcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgY29udGV4dDogJ3ZpZXcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaCxcbiAgICAgICAgICAgIC4uLihjdXJyZW50UG9zdCA/IHsgZXhjbHVkZTogY3VycmVudFBvc3QuaWQgfSA6IHt9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlYXJjaGVkRW50aXRpZXM6IHBvc3RzID8/IFtdLFxuICAgICAgICAgICAgc2V0U2VhcmNoLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHM7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBhbmVsLCBQYW5lbEJvZHkgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX3ggfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJ2NvbXBvbmVudHMvRm9ybUZpZWxkL0Zvcm1GaWVsZCc7XG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXRzL0Zvcm1XcmFwcGVyJztcbmltcG9ydCBUZXJtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9UZXJtU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlRWRpdERlZ3JlZVByb2dyYW0gfSBmcm9tICdjb250ZXh0cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcic7XG5pbXBvcnQgeyBBRERJVElPTkFMX0RFR1JFRV9OQU1FIH0gZnJvbSAnaG9va3MvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gICAgdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yQmFjaGVsb3JBbmRUZWFjaGluZ0RlZ3JlZXNFbmFibGUsXG4gICAgdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yTWFzdGVyc0RlZ3JlZSxcbiAgICB1c2VBZG1pc3Npb25SZXF1aXJlbWVudHNUZWFjaGluZ0RlZ3JlZUF0SGlnaGVyU2VtZXN0ZXJFbmFibGVkLFxuICAgIHVzZUFwcGxpY2F0aW9uRGVhZGxpbmVTdW1tZXJTZW1lc3RlckVuYWJsZWQsXG4gICAgdXNlQXBwbGljYXRpb25EZWFkbGluZVdpbnRlclNlbWVzdGVyRW5hYmxlZCxcbiAgICB1c2VMYW5ndWFnZVNraWxsc0ZvckZhY3VsdHlPZkh1bWFuaXRpZXNPbmx5RW5hYmxlZCxcbn0gZnJvbSAnaG9va3MvdXNlQ29uZGl0aW9uYWxGaWVsZHMnO1xuaW1wb3J0IHtcbiAgICB0cmFuc2Zvcm1UZXJtVG9BZG1pc3Npb25SZXF1aXJlbWVudCxcbiAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rLFxufSBmcm9tICd1dGlsL3RyYW5zZm9ybXMnO1xuXG5pbXBvcnQgQ29udGVudEZpZWxkIGZyb20gJy4uL0NvbnRlbnRGaWVsZCc7XG5pbXBvcnQgRGF5TW9udGhQaWNrZXIgZnJvbSAnLi4vRGF5TW9udGhQaWNrZXInO1xuaW1wb3J0IEZvcm1TZXBhcmF0b3IgZnJvbSAnLi4vTGF5b3V0cy9Gb3JtU2VwYXJhdG9yJztcbmltcG9ydCBNdWx0aWxpbmd1YWxDb250YWluZXIgZnJvbSAnLi9NdWx0aWxpbmd1YWxDb250YWluZXInO1xuXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxMaW5rIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IEFkbWlzc2lvblJlcXVpcmVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlIH0gPSB1c2VFZGl0RGVncmVlUHJvZ3JhbSgpO1xuICAgIGNvbnN0IGJhY2hlbG9yT3JUZWFjaGluZ0VuYWJsZWQgPSB1c2VBZG1pc3Npb25SZXF1aXJlbWVudHNGb3JCYWNoZWxvckFuZFRlYWNoaW5nRGVncmVlc0VuYWJsZSgpO1xuICAgIGNvbnN0IHRlYWNoaW5nRGVncmVlSGlnaGVyU2VtZXN0ZXJFbmFibGVkID1cbiAgICAgICAgdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzVGVhY2hpbmdEZWdyZWVBdEhpZ2hlclNlbWVzdGVyRW5hYmxlZCgpO1xuICAgIGNvbnN0IG1hc3RlcnNFbmFibGVkID0gdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yTWFzdGVyc0RlZ3JlZSgpO1xuICAgIGNvbnN0IGh1bWFuaXRpZXNGYWN1bHR5TGFuZ3VhZ2VTa2lsbHNFbmFibGVkID1cbiAgICAgICAgdXNlTGFuZ3VhZ2VTa2lsbHNGb3JGYWN1bHR5T2ZIdW1hbml0aWVzT25seUVuYWJsZWQoKTtcbiAgICBjb25zdCBhcHBsaWNhdGlvblN1bW1lckRlYWRsaW5lRW5hYmxlZCA9IHVzZUFwcGxpY2F0aW9uRGVhZGxpbmVTdW1tZXJTZW1lc3RlckVuYWJsZWQoKTtcbiAgICBjb25zdCBhcHBsaWNhdGlvbldpbnRlckRlYWRsaW5lRW5hYmxlZCA9IHVzZUFwcGxpY2F0aW9uRGVhZGxpbmVXaW50ZXJTZW1lc3RlckVuYWJsZWQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgIDxQYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgPEZvcm1XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICB7KGJhY2hlbG9yT3JUZWFjaGluZ0VuYWJsZWQgfHwgdGVhY2hpbmdEZWdyZWVIaWdoZXJTZW1lc3RlckVuYWJsZWQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhY2hlbG9yT3JUZWFjaGluZ0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRtaXNzaW9uX3JlcXVpcmVtZW50cy5iYWNoZWxvcl9vcl90ZWFjaGluZ19kZWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRtaXNzaW9uIHJlcXVpcmVtZW50cyBmb3IgQmFjaGVsb3Incy90ZWFjaGluZyBkZWdyZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImhhbGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3ZhbHVlcy5kZWdyZWUubmFtZS5kZSAhPT0gQURESVRJT05BTF9ERUdSRUVfTkFNRX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFjaGVsb3JfdGVhY2hpbmdfYWRtaXNzaW9uX3JlcXVpcmVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cImJhY2hlbG9yT3JUZWFjaGluZ0RlZ3JlZUFkbWlzc2lvblJlcXVpcmVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5hZG1pc3Npb25fcmVxdWlyZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYmFjaGVsb3Jfb3JfdGVhY2hpbmdfZGVncmVlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkT25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRtaXNzaW9uX3JlcXVpcmVtZW50cy5iYWNoZWxvcl9vcl90ZWFjaGluZ19kZWdyZWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVGVybVRvQWRtaXNzaW9uUmVxdWlyZW1lbnQodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVhY2hpbmdEZWdyZWVIaWdoZXJTZW1lc3RlckVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRtaXNzaW9uX3JlcXVpcmVtZW50cy50ZWFjaGluZ19kZWdyZWVfaGlnaGVyX3NlbWVzdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFkbWlzc2lvbiByZXF1aXJlbWVudHMgZm9yIGVudGVyaW5nIGEgQmFjaGVsb3Incy90ZWFjaGluZyBkZWdyZWUgYXQgYSBoaWdoZXIgc2VtZXN0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiaGFsZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dmFsdWVzLmRlZ3JlZS5uYW1lLmRlICE9PSBBRERJVElPTkFMX0RFR1JFRV9OQU1FfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWFjaGluZ19oaWdoZXJfc2VtZXN0ZXJfYWRtaXNzaW9uX3JlcXVpcmVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cInRlYWNoaW5nRGVncmVlSGlnaGVyU2VtZXN0ZXJBZG1pc3Npb25SZXF1aXJlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuYWRtaXNzaW9uX3JlcXVpcmVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRlYWNoaW5nX2RlZ3JlZV9oaWdoZXJfc2VtZXN0ZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxMaW5rPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZG1pc3Npb25fcmVxdWlyZW1lbnRzLnRlYWNoaW5nX2RlZ3JlZV9oaWdoZXJfc2VtZXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVGVybVRvQWRtaXNzaW9uUmVxdWlyZW1lbnQodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZXBhcmF0b3IgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHttYXN0ZXJzRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkbWlzc2lvbl9yZXF1aXJlbWVudHMubWFzdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZG1pc3Npb24gcmVxdWlyZW1lbnRzIGZvciBNYXN0ZXIncyBkZWdyZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1hc3Rlcl9hZG1pc3Npb25fcmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJtYXN0ZXJEZWdyZWVBZG1pc3Npb25SZXF1aXJlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmFkbWlzc2lvbl9yZXF1aXJlbWVudHMubWFzdGVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZG1pc3Npb25fcmVxdWlyZW1lbnRzLm1hc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVRlcm1Ub0FkbWlzc2lvblJlcXVpcmVtZW50KHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGVudF9yZWxhdGVkX21hc3Rlcl9yZXF1aXJlbWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtcmVsYXRlZCBhZG1pc3Npb24gcmVxdWlyZW1lbnRzIGZvciBNYXN0ZXIncyBkZWdyZWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJ2b3JhdXNnZWdhbmdlbmUgQmFjaGVsb3JzdHVkaWVuZ8OkbmdlLCBRdWFsaWZpa2F0aW9uc3dlcnRlLCBldGMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29udGVudF9yZWxhdGVkX21hc3Rlcl9yZXF1aXJlbWVudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobGFuZ3VhZ2VDb2RlLCByZXF1aXJlZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgY29udGVudF9yZWxhdGVkX21hc3Rlcl9yZXF1aXJlbWVudHMuJHtsYW5ndWFnZUNvZGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgY29udGVudF9yZWxhdGVkX21hc3Rlcl9yZXF1aXJlbWVudHMuJHtsYW5ndWFnZUNvZGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmNvbnRlbnRfcmVsYXRlZF9tYXN0ZXJfcmVxdWlyZW1lbnRzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlQ29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZXBhcmF0b3IgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHthcHBsaWNhdGlvbldpbnRlckRlYWRsaW5lRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFwcGxpY2F0aW9uX2RlYWRsaW5lX3dpbnRlcl9zZW1lc3RlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXBwbGljYXRpb24gZGVhZGxpbmUgd2ludGVyIHNlbWVzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkRhdHVtIGltIEZvcm1hdCBUVC5NTS4gYW5nZWJlbi4gV2VpdGVyZSBUZXJtaW5lIGvDtm5uZW4gaW0gRmVsZCDigJ5EZXRhaWxzIHVuZCBBbm1lcmt1bmdlbuKAnCBlaW5nZXRyYWdlbiB3ZXJkZW4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5TW9udGhQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXBwbGljYXRpb25fZGVhZGxpbmVfd2ludGVyX3NlbWVzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYXBwbGljYXRpb25fZGVhZGxpbmVfd2ludGVyX3NlbWVzdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7YXBwbGljYXRpb25TdW1tZXJEZWFkbGluZUVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhcHBsaWNhdGlvbl9kZWFkbGluZV9zdW1tZXJfc2VtZXN0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FwcGxpY2F0aW9uIGRlYWRsaW5lIHN1bW1lciBzZW1lc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJEYXR1bSBpbSBGb3JtYXQgVFQuTU0uIGFuZ2ViZW4uIFdlaXRlcmUgVGVybWluZSBrw7ZubmVuIGltIEZlbGQg4oCeRGV0YWlscyB1bmQgQW5tZXJrdW5nZW7igJwgZWluZ2V0cmFnZW4gd2VyZGVuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheU1vbnRoUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uX2RlYWRsaW5lX3N1bW1lcl9zZW1lc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmFwcGxpY2F0aW9uX2RlYWRsaW5lX3N1bW1lcl9zZW1lc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgeyhhcHBsaWNhdGlvbldpbnRlckRlYWRsaW5lRW5hYmxlZCB8fCBhcHBsaWNhdGlvblN1bW1lckRlYWRsaW5lRW5hYmxlZCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TZXBhcmF0b3IgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGV0YWlsc19hbmRfbm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZXRhaWxzIGFuZCBub3RlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cImV2dGwuIHp1c8OkdHpsaWNoZSBJbmZvcyB6dSBCZXdlcmJ1bmcgdW5kIEVpbnNjaHJlaWJ1bmcuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpbGluZ3VhbENvbnRhaW5lciB2YWx1ZT17dmFsdWVzLmRldGFpbHNfYW5kX25vdGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZSwgcmVxdWlyZWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgZGV0YWlsc19hbmRfbm90ZXMuJHtsYW5ndWFnZUNvZGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGV0YWlsc19hbmRfbm90ZXMuJHtsYW5ndWFnZUNvZGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZXMuZGV0YWlsc19hbmRfbm90ZXNbbGFuZ3VhZ2VDb2RlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZV9za2lsbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZSBza2lsbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJTcHJhY2hrZW5udG5pc3NlLCBkaWUgZsO8ciBkZW4gU3R1ZGllbmdhbmcgZXJmb3JkZXJsaWNoIHNpbmQuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpbGluZ3VhbENvbnRhaW5lciB2YWx1ZT17dmFsdWVzLmxhbmd1YWdlX3NraWxsc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUsIHJlcXVpcmVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGxhbmd1YWdlX3NraWxscy4ke2xhbmd1YWdlQ29kZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBsYW5ndWFnZV9za2lsbHMuJHtsYW5ndWFnZUNvZGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZXMubGFuZ3VhZ2Vfc2tpbGxzW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICB7aHVtYW5pdGllc0ZhY3VsdHlMYW5ndWFnZVNraWxsc0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZV9za2lsbHNfaHVtYW5pdGllc19mYWN1bHR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZSBza2lsbHMgZm9yIEZhY3VsdHkgb2YgSHVtYW5pdGllcywgU29jaWFsIFNjaWVuY2VzLCBhbmQgVGhlb2xvZ3kgb25seScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJTcHJhY2hrZW5udG5pc3NlLCBkaWUgYXVjaCBpbiBkZW4gZXJzdGVuIFNlbWVzdGVybiBub2NoIGVyd29yYmVuIHdlcmRlbiBrw7ZubmVuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJsYW5ndWFnZV9za2lsbHNfaHVtYW5pdGllc19mYWN1bHR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFuZ3VhZ2Vfc2tpbGxzX2h1bWFuaXRpZXNfZmFjdWx0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZXMubGFuZ3VhZ2Vfc2tpbGxzX2h1bWFuaXRpZXNfZmFjdWx0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlcm1hbl9sYW5ndWFnZV9za2lsbHNfZm9yX2ludGVybmF0aW9uYWxfc3R1ZGVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZSBjZXJ0aWZpY2F0ZXMvR2VybWFuIGxhbmd1YWdlIHNraWxscyBmb3IgaW50ZXJuYXRpb25hbCBhcHBsaWNhbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJnZXJtYW5fbGFuZ3VhZ2Vfc2tpbGxzX2Zvcl9pbnRlcm5hdGlvbmFsX3N0dWRlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cImdlcm1hbkxhbmd1YWdlU2tpbGxzRm9ySW50ZXJuYXRpb25hbFN0dWRlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmdlcm1hbl9sYW5ndWFnZV9za2lsbHNfZm9yX2ludGVybmF0aW9uYWxfc3R1ZGVudHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxMaW5rPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZXJtYW5fbGFuZ3VhZ2Vfc2tpbGxzX2Zvcl9pbnRlcm5hdGlvbmFsX3N0dWRlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPC9QYW5lbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRtaXNzaW9uUmVxdWlyZW1lbnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGFuZWwsIFBhbmVsQm9keSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnY29tcG9uZW50cy9Gb3JtRmllbGQvRm9ybUZpZWxkJztcbmltcG9ydCBGb3JtV3JhcHBlciBmcm9tICdjb21wb25lbnRzL0xheW91dHMvRm9ybVdyYXBwZXInO1xuaW1wb3J0IHsgdXNlRWRpdERlZ3JlZVByb2dyYW0gfSBmcm9tICdjb250ZXh0cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcic7XG5cbmltcG9ydCBDb250ZW50RmllbGQgZnJvbSAnLi4vQ29udGVudEZpZWxkJztcbmltcG9ydCBEZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zIGZyb20gJy4uL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMnO1xuaW1wb3J0IE11bHRpbGluZ3VhbENvbnRhaW5lciBmcm9tICcuL011bHRpbGluZ3VhbENvbnRhaW5lcic7XG5cbmltcG9ydCB7IERlZ3JlZVByb2dyYW1EYXRhLCBMYW5ndWFnZUNvZGUgfSBmcm9tICdkZWZzJztcblxuY29uc3QgQ09OVEVOVF9JVEVNUyA9IHtcbiAgICBhYm91dDogJ2t1cnplIEJlc2NocmVpYnVuZyBkZXMgU3R1ZGllbmdhbmdzIGFsbGdlbWVpbjsgwrEyMDAgV8O2cnRlcicsXG4gICAgc3RydWN0dXJlOiAnVm9yc3RlbGx1bmcgZGVzIEZhY2hzIHVuZCBkZXIgU3R1ZGllbmluaGFsdGU7IMKxMjAwIFfDtnJ0ZXInLFxuICAgIHNwZWNpYWxpemF0aW9uczpcbiAgICAgICAgJ1NwZXppYWxpc2llcnVuZ3Ntw7ZnbGljaGtlaXRlbiB1bmQgU2Nod2VycHVua3RlIHfDpGhyZW5kIGRlcyBTdHVkaXVtczsgwrEyMDAgV8O2cnRlcicsXG4gICAgcXVhbGl0aWVzX2FuZF9za2lsbHM6XG4gICAgICAgICdGw6RoaWdrZWl0ZW4gdW5kIFZvcmxpZWJlbiBkZXIgU3R1ZGllbmludGVyZXNzaWVydGVuLCBuaWNodCBmb3JtZWxsZSBWb3JhdXNzZXR6dW5nZW47IMKxMjAwIFfDtnJ0ZXInLFxuICAgIHdoeV9zaG91bGRfc3R1ZHk6XG4gICAgICAgICdFaW56aWdhcnRpZ2tlaXQgYnp3LiBCZXNvbmRlcmhlaXRlbiAoei4gQi4gS29vcGVyYXRpb25zcGFydG5lciwgVmVyYnVuZHN0dWRpdW1zYW5nZWJvdCkgZGVzIFN0dWRpZW5nYW5ncyBhbiBkZXIgRkFVOyDCsTIwMCBXw7ZydGVyJyxcbiAgICBjYXJlZXJfcHJvc3BlY3RzOiAnbcO2Z2xpY2hlIFTDpHRpZ2tlaXRzZmVsZGVyIG5hY2ggQWJzY2hsdXNzIGRlcyBTdHVkaXVtczsgwrEyMDAgV8O2cnRlcicsXG4gICAgc3BlY2lhbF9mZWF0dXJlczpcbiAgICAgICAgJ03DtmdsaWNoa2VpdGVuIHZvbiBBdXNsYW5kc2F1ZmVudGhhbHRlbiwgS29vcGVyYXRpb25lbiBtaXQgRm9yc2NodW5nc3Byb2pla3RlbiwgZXRjLjsgwrEyMDAgV8O2cnRlcicsXG59IGFzIFJlY29yZDxrZXlvZiBEZWdyZWVQcm9ncmFtRGF0YVsnY29udGVudCddLCBzdHJpbmc+O1xuXG5jb25zdCBSRVFVSVJFRF9GSUVMRFMgPSBbJ2Fib3V0JywgJ3N0cnVjdHVyZSddO1xuXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVDaGFuZ2UgfSA9IHVzZUVkaXREZWdyZWVQcm9ncmFtKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICA8UGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgeyhPYmplY3Qua2V5cyhDT05URU5UX0lURU1TKSBhcyBBcnJheTxrZXlvZiB0eXBlb2YgQ09OVEVOVF9JVEVNUz4pLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Bjb250ZW50LiR7aXRlbX0uZGVzY3JpcHRpb25gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YCR7dmFsdWVzLmNvbnRlbnRbaXRlbV0udGl0bGUuZGV9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuY29udGVudFtpdGVtXS50aXRsZS5lblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCgke3ZhbHVlcy5jb250ZW50W2l0ZW1dLnRpdGxlLmVufSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD17Q09OVEVOVF9JVEVNU1tpdGVtXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e1JFUVVJUkVEX0ZJRUxEUy5pbmNsdWRlcyhpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy5jb250ZW50W2l0ZW1dLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobGFuZ3VhZ2VDb2RlOiBMYW5ndWFnZUNvZGUsIHJlcXVpcmVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgY29udGVudC4ke2l0ZW19LmRlc2NyaXB0aW9uLiR7bGFuZ3VhZ2VDb2RlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuY29udGVudFtpdGVtXS5kZXNjcmlwdGlvbltsYW5ndWFnZUNvZGVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNvbnRlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjb250ZW50LiR7aXRlbX0uZGVzY3JpcHRpb24uJHtsYW5ndWFnZUNvZGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L011bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxEZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8L1BhbmVsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgX3ggfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ2NvbnRleHRzL1Byb3ZpZGVycyc7XG5cbmltcG9ydCBUYWJzIGZyb20gJy4uL1RhYnMnO1xuaW1wb3J0IEFkbWlzc2lvblJlcXVpcmVtZW50cyBmcm9tICcuL0FkbWlzc2lvblJlcXVpcmVtZW50cyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xuaW1wb3J0IEZvcm1IZWFkaW5nIGZyb20gJy4vRm9ybUhlYWRpbmcnO1xuaW1wb3J0IEdlbmVyYWwgZnJvbSAnLi9HZW5lcmFsJztcbmltcG9ydCBPcmdhbml6YXRpb25hbExpbmtzIGZyb20gJy4vT3JnYW5pemF0aW9uYWxMaW5rcyc7XG5pbXBvcnQgVGFiVGl0bGUgZnJvbSAnLi9UYWJUaXRsZSc7XG5cbmNvbnN0IERlZ3JlZVByb2dyYW1FZGl0Rm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXJzPlxuICAgICAgICAgICAgPEZvcm1IZWFkaW5nIC8+XG4gICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgIHRhYnM9e1tcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dlbmVyYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmVyYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXQgYSBnbGFuY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IERlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogPEdlbmVyYWwgLz4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IERlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogPENvbnRlbnQgLz4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZG1pc3Npb24tcmVxdWlyZW1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZG1pc3Npb24tcmVxdWlyZW1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FkbWlzc2lvbiByZXF1aXJlbWVudHMsIGFwcGxpY2F0aW9uIGFuZCBlbnJvbGxtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBEZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IDxBZG1pc3Npb25SZXF1aXJlbWVudHMgLz4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcmdhbml6YXRpb25hbC1saW5rcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3JnYW5pemF0aW9uYWwtbGlua3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT3JnYW5pemF0aW9uYWwgbm90ZXMvbGlua3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IERlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogPE9yZ2FuaXphdGlvbmFsTGlua3MgLz4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvUHJvdmlkZXJzPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWdyZWVQcm9ncmFtRWRpdEZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZUVkaXREZWdyZWVQcm9ncmFtIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXInO1xuXG5jb25zdCBTdHlsZWRIZWFkaW5nID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuYDtcblxuY29uc3QgRm9ybUhlYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZXMgfSA9IHVzZUVkaXREZWdyZWVQcm9ncmFtKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkSGVhZGluZz5cbiAgICAgICAgICAgIHt2YWx1ZXMudGl0bGUuZGV9IDxiciAvPlxuICAgICAgICAgICAgPHNtYWxsPnt2YWx1ZXMudGl0bGUuZW59PC9zbWFsbD5cbiAgICAgICAgPC9TdHlsZWRIZWFkaW5nPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtSGVhZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBhbmVsLCBQYW5lbEJvZHksIFRleHRhcmVhQ29udHJvbCwgVGV4dENvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX3ggfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJ2NvbXBvbmVudHMvRm9ybUZpZWxkJztcbmltcG9ydCBJbWFnZUZpZWxkIGZyb20gJ2NvbXBvbmVudHMvSW1hZ2VGaWVsZCc7XG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXRzL0Zvcm1XcmFwcGVyJztcbmltcG9ydCBMaW1pdGVkSW5wdXRDb250cm9sIGZyb20gJ2NvbXBvbmVudHMvTGltaXRlZElucHV0Q29udHJvbCc7XG5pbXBvcnQgeyBNdWx0aVRlcm1TZWxlY3RvciB9IGZyb20gJ2NvbXBvbmVudHMvVGVybVNlbGVjdG9yJztcbmltcG9ydCBUZXJtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvVGVybVNlbGVjdG9yJztcbmltcG9ydCBUZXh0Q29udHJvbENvbGxlY3Rpb24gZnJvbSAnY29tcG9uZW50cy9UZXh0Q29udHJvbENvbGxlY3Rpb24nO1xuaW1wb3J0IHsgdXNlRWRpdERlZ3JlZVByb2dyYW0gfSBmcm9tICdjb250ZXh0cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcic7XG5pbXBvcnQgeyBwcm9wZXJ0eUlkIH0gZnJvbSAndXRpbC9pZEhlbHBlcnMnO1xuaW1wb3J0IHtcbiAgICB0cmFuc2Zvcm1UZXJtVG9EZWdyZWUsXG4gICAgdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsTGluayxcbiAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcsXG59IGZyb20gJ3V0aWwvdHJhbnNmb3Jtcyc7XG5cbmltcG9ydCBDb250ZW50RmllbGQgZnJvbSAnLi4vQ29udGVudEZpZWxkJztcbmltcG9ydCBUZXh0YXJlYUNvbnRyb2xGb3JtRmllbGQgZnJvbSAnLi4vRm9ybUZpZWxkL0ZpZWxkQ29udGV4dEF3YXJlVGV4dGFyZWFDb250cm9sJztcbmltcG9ydCBNdWx0aWxpbmd1YWxDb250YWluZXIgZnJvbSAnLi9NdWx0aWxpbmd1YWxDb250YWluZXInO1xuXG5pbXBvcnQgeyBEZWdyZWUsIE11bHRpbGluZ3VhbExpbmssIE11bHRpbGluZ3VhbFN0cmluZyB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCBHZW5lcmFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVDaGFuZ2UgfSA9IHVzZUVkaXREZWdyZWVQcm9ncmFtKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICA8UGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJTdHVkaWVuZ2FuZ3NiZXplaWNobnVuZywgb2huZSBBYnNjaGx1c3MuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUsIHJlcXVpcmVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oYHRpdGxlLiR7bGFuZ3VhZ2VDb2RlfWAsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRpdGxlW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdWJ0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlouIEIuIEF1ZnrDpGhsdW5nIGRlciBTdHVkaWVuc2Nod2VycHVua3RlIGJlaSBXaXJ0c2NoYWZ0c3dpc3NlbnNjaGFmdGVuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiaGFsZlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUsIHJlcXVpcmVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oYHN1YnRpdGxlLiR7bGFuZ3VhZ2VDb2RlfWAsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN1YnRpdGxlW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmZWF0dXJlZF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiaGFsZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZlYXR1cmVkIGltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2lyZCBmw7xyIGRpZSBEZXRhaWxhbnNpY2h0IHZlcndlbmRldC4gR3LDtsOfZTogMTQwMCDDlyAzNTAgcHguXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZUZpZWxkIHBhdGg9XCJmZWF0dXJlZF9pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVhc2VyX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVGVhc2VyIEltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2lyZCBmw7xyIGRpZSBLYWNoZWxuIGF1ZiBkZXIgQXVzd2FobHNlaXRlIHZlcndlbmRldC4gR3LDtsOfZTogNTAwIMOXIDUwMCBweC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRmllbGQgcGF0aD1cInRlYXNlcl9pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbnRyeV90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRW50cnkgdGV4dCAocHJvbW90aW9uYWwpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiQ2EuIDMwMCBaZWljaGVuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlsaW5ndWFsQ29udGFpbmVyIHZhbHVlPXt2YWx1ZXMuZW50cnlfdGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUsIHJlcXVpcmVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGVudHJ5X3RleHQuJHtsYW5ndWFnZUNvZGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3ZhbHVlcy5lbnRyeV90ZXh0W2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KGBlbnRyeV90ZXh0LiR7bGFuZ3VhZ2VDb2RlfWAsIGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhcmVhX29mX3N0dWR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0aGlyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FyZWEgb2Ygc3R1ZHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXJlYV9vZl9zdHVkeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJhcmVhT2ZTdHVkeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hcmVhX29mX3N0dWR5Lm1hcCgodGVybSkgPT4gdGVybS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGlua1tdPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcmVhX29mX3N0dWR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdGFydCBvZiBkZWdyZWUgcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0aGlyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlbWVzdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cInNlbWVzdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN0YXJ0Lm1hcCgodGVybSkgPT4gdGVybS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsU3RyaW5nW10+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm51bWJlcl9vZl9zdHVkZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ051bWJlciBvZiBzdHVkZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkdlc2FtdHphaGwgZGVyIFN0dWRpZXJlbmRlbiwgbmljaHQgbnVyIEVyc3RzZW1lc3Rlci5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRoaXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm51bWJlcl9vZl9zdHVkZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJudW1iZXJPZlN0dWRlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm51bWJlcl9vZl9zdHVkZW50cy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nIH0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ251bWJlcl9vZl9zdHVkZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCB0ZXJtLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZXJtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRlcm0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVhY2hpbmdfbGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUZWFjaGluZyBsYW5ndWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRoaXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlYWNoaW5nLWxhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cInRlYWNoaW5nTGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGVhY2hpbmdfbGFuZ3VhZ2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxTdHJpbmc+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RlYWNoaW5nX2xhbmd1YWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbFN0cmluZyh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXR0cmlidXRlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRoaXJkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpVGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhdHRyaWJ1dGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmF0dHJpYnV0ZXMubWFwKCh0ZXJtKSA9PiB0ZXJtLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxTdHJpbmdbXT4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXR0cmlidXRlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtcy5tYXAodHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsU3RyaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWdyZWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0aGlyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiZGVncmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlZ3JlZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPERlZ3JlZT4oJ2RlZ3JlZScsIHRyYW5zZm9ybVRlcm1Ub0RlZ3JlZSh0ZXJtKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmFjdWx0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZhY3VsdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmFjdWx0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJmYWN1bHR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmZhY3VsdHkubWFwKCh0ZXJtKSA9PiB0ZXJtLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxMaW5rW10+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhY3VsdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybXMubWFwKHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmspLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3R1ZHkgbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3R1ZHktbG9jYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwic3R1ZHlMb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5sb2NhdGlvbi5tYXAoKHRlcm0pID0+IHRlcm0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbFN0cmluZ1tdPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsb2NhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtcy5tYXAodHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsU3RyaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0X2dyb3Vwc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1YmplY3QgZ3JvdXBzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiaGFsZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN1YmplY3QtZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwic3ViamVjdEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN1YmplY3RfZ3JvdXBzLm1hcCgodGVybSkgPT4gdGVybS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsU3RyaW5nW10+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N1YmplY3RfZ3JvdXBzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnS2V5d29yZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwia2V5d29yZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwia2V5d29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5rZXl3b3Jkcy5tYXAoKHRlcm0pID0+IHRlcm0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbFN0cmluZ1tdPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdrZXl3b3JkcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtcy5tYXAodHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsU3RyaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWRlb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdWaWRlb3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJWaWRlb3Mgw7xiZXIgZGVuIFN0dWRpZW5nYW5nLCBkYXMgU3R1ZGllbmZhY2gsIGVpbiBUaGVtYSBkZXMgRmFjaHMgKHouIEIuIDItTWludXRlbi1XaXNzZW4pLCBFcmZhaHJ1bmdzYmVyaWNodGUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbENvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnZpZGVvc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmdbXT4oJ3ZpZGVvcycsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEl0ZW1zPXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YW5kYXJkX2R1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRHVyYXRpb24gb2Ygc3R1ZGllcyBpbiBzZW1lc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIk51ciBaYWhsLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFDb250cm9sRm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KCdzdGFuZGFyZF9kdXJhdGlvbicsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RhbmRhcmRfZHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWV0YV9kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01ldGEgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJUZXh0IGbDvHIgZGllIEFuemVpZ2UgYmVpIFN1Y2htYXNjaGluZW4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy5tZXRhX2Rlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZSwgcmVxdWlyZWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbWl0ZWRJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubWV0YV9kZXNjcmlwdGlvbltsYW5ndWFnZUNvZGVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Q2hhcnM9ezE2MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IHVwZGF0ZWRWYWx1ZSwgcmVxdWlyZWQ6IGNvbnRyb2xSZXF1aXJlZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1ldGFfZGVzY3JpcHRpb25bbGFuZ3VhZ2VDb2RlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBtZXRhX2Rlc2NyaXB0aW9uLiR7bGFuZ3VhZ2VDb2RlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlKHRleHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17Y29udHJvbFJlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbWl0ZWRJbnB1dENvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICA8L0Zvcm1XcmFwcGVyPlxuICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgIDwvUGFuZWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBUYWJQYW5lbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IExhbmd1YWdlQ29kZSB9IGZyb20gJy4uLy4uL2RlZnMvY29tbW9uJztcbmltcG9ydCB7IHVzZUZpZWxkQ29udGV4dCB9IGZyb20gJy4uL0Zvcm1GaWVsZC9Gb3JtRmllbGQnO1xuaW1wb3J0IHsgVGFiSXRlbSB9IGZyb20gJy4uL1RhYnMnO1xuXG50eXBlIE11bHRpbGluZ3VhbENvbnRhaW5lclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiAobGFuZ3VhZ2VDb2RlOiBMYW5ndWFnZUNvZGUsIHJlcXVpcmVkOiBib29sZWFuKSA9PiBSZWFjdE5vZGU7XG4gICAgdmFsdWU6IFJlY29yZDxMYW5ndWFnZUNvZGUsIHN0cmluZz47XG59O1xuXG5jb25zdCB0YWJzOiBUYWJQYW5lbC5UYWJbXSA9IChPYmplY3Qua2V5cyhzZXJ2ZXJEYXRhKCkubGFuZ3VhZ2VzKSBhcyBBcnJheTxMYW5ndWFnZUNvZGU+KS5tYXAoXG4gICAgKGxhbmd1YWdlQ29kZTogTGFuZ3VhZ2VDb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlTmFtZSA9IHNlcnZlckRhdGEoKS5sYW5ndWFnZXNbbGFuZ3VhZ2VDb2RlXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbGFuZ3VhZ2VDb2RlLFxuICAgICAgICAgICAgdGl0bGU6IGxhbmd1YWdlTmFtZSxcbiAgICAgICAgfTtcbiAgICB9LFxuKTtcblxuY29uc3QgTXVsdGlsaW5ndWFsQ29udGFpbmVyID0gKHsgY2hpbGRyZW4sIHZhbHVlIH06IE11bHRpbGluZ3VhbENvbnRhaW5lclByb3BzKSA9PiB7XG4gICAgY29uc3QgeyByZXF1aXJlZCB9ID0gdXNlRmllbGRDb250ZXh0KCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRhYlBhbmVsXG4gICAgICAgICAgICB0YWJzPXt0YWJzLm1hcCgodGFiOiB7IG5hbWU6IExhbmd1YWdlQ29kZTsgdGl0bGU6IHN0cmluZzsgY2xhc3NOYW1lOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzRW1wdHkgPSB0YWIubmFtZSAhPT0gJ2RlJyAmJiAhdmFsdWVbdGFiLm5hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGlzRW1wdHkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW1wdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IE11bHRpbGluZ3VhbCBjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBpc0VtcHR5ID8gJ2lzLWVtcHR5JyA6ICcnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudC1tdWx0aWxpbmd1YWwtY29udGFpbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgeyh0YWI6IFRhYkl0ZW0pID0+IDw+e2NoaWxkcmVuKHRhYi5uYW1lIGFzIExhbmd1YWdlQ29kZSwgcmVxdWlyZWQpfTwvPn1cbiAgICAgICAgPC9UYWJQYW5lbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlsaW5ndWFsQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGFuZWwsIFBhbmVsQm9keSwgVGV4dENvbnRyb2wsIFRvZ2dsZUNvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX3ggfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgVGV4dENvbnRyb2xGb3JtRmllbGQgZnJvbSAnY29tcG9uZW50cy9Gb3JtRmllbGQvRmllbGRDb250ZXh0QXdhcmVUZXh0Q29udHJvbCc7XG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gJ2NvbXBvbmVudHMvRm9ybUZpZWxkL0Zvcm1GaWVsZCc7XG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXRzL0Zvcm1XcmFwcGVyJztcbmltcG9ydCBUZXJtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9UZXJtU2VsZWN0b3InO1xuXG5pbXBvcnQgeyB1c2VFZGl0RGVncmVlUHJvZ3JhbSB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyJztcbmltcG9ydCB7IE11bHRpbGluZ3VhbExpbmsgfSBmcm9tICcuLi8uLi9kZWZzJztcbmltcG9ydCB7IHVzZURlZ3JlZUZlZXNFbmFibGVkIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQ29uZGl0aW9uYWxGaWVsZHMnO1xuaW1wb3J0IHsgdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsTGluayB9IGZyb20gJy4uLy4uL3V0aWwvdHJhbnNmb3Jtcyc7XG5pbXBvcnQgTXVsdGlsaW5ndWFsQ29udGFpbmVyIGZyb20gJy4vTXVsdGlsaW5ndWFsQ29udGFpbmVyJztcblxuY29uc3QgT3JnYW5pemF0aW9uYWxMaW5rcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlIH0gPSB1c2VFZGl0RGVncmVlUHJvZ3JhbSgpO1xuICAgIGNvbnN0IGRlZ3JlZUZlZXNFbmFibGVkID0gdXNlRGVncmVlRmVlc0VuYWJsZWQoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgIDxQYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgPEZvcm1XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXBwbHlfbm93X2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIkFwcGx5IG5vd1wiIGxpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0aGlyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcHBseV9ub3dfbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJhcHBseU5vd0xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYXBwbHlfbm93X2xpbmsuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxMaW5rPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhcHBseV9ub3dfbGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV4YW1pbmF0aW9uc19vZmZpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFeGFtaW5hdGlvbnMgT2ZmaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidGhpcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhhbWluYXRpb25zX29mZmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJleGFtaW5hdGlvbnNPZmZpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZXhhbWluYXRpb25zX29mZmljZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbExpbms+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V4YW1pbmF0aW9uc19vZmZpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsTGluayh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2R1bGVfaGFuZGJvb2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNb2R1bGUgaGFuZGJvb2sgKFVSTCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0aGlyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1vZHVsZV9oYW5kYm9va1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhoYW5kYm9vazogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KCdtb2R1bGVfaGFuZGJvb2snLCBoYW5kYm9vayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1vZHVsZV9oYW5kYm9va31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVncmVlIHByb2dyYW0gKFVSTCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobGFuZ3VhZ2VDb2RlLCByZXF1aXJlZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KGB1cmwuJHtsYW5ndWFnZUNvZGV9YCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXJsW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L011bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXBhcnRtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVwYXJ0bWVudC9JbnN0aXR1dGUgKFVSTCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJoYWxmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy5kZXBhcnRtZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZSwgcmVxdWlyZWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihgZGVwYXJ0bWVudC4ke2xhbmd1YWdlQ29kZX1gLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZXBhcnRtZW50W2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L011bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0X3NwZWNpZmljX2FkdmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1YmplY3Qtc3BlY2lmaWMgYWR2aWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidGhpcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3ViamVjdF9zcGVjaWZpY19hZHZpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwic3ViamVjdFNwZWNpZmljQWR2aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN1YmplY3Rfc3BlY2lmaWNfYWR2aWNlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3ViamVjdF9zcGVjaWZpY19hZHZpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsTGluayh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbmZvX2Jyb2NodXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW5mbyBicm9jaHVyZSBkZWdyZWUgcHJvZ3JhbSAoVVJMKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRoaXJkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sRm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbmZvX2Jyb2NodXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHJlcHJlc2VudGF0aXZlczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KCdpbmZvX2Jyb2NodXJlJywgcmVwcmVzZW50YXRpdmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuaW5mb19icm9jaHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXhhbWluYXRpb25fcmVndWxhdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWdyZWUgcHJvZ3JhbSBhbmQgZXhhbWluYXRpb24gcmVndWxhdGlvbnMgKFVSTCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0aGlyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oYGV4YW1pbmF0aW9uX3JlZ3VsYXRpb25zYCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5leGFtaW5hdGlvbl9yZWd1bGF0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmZWVfcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGZWUgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZXMuZmVlX3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8Ym9vbGVhbj4oJ2ZlZV9yZXF1aXJlZCcsIGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICB7ZGVncmVlRmVlc0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWdyZWVfcHJvZ3JhbV9mZWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWdyZWUgUHJvZ3JhbSBGZWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlN0dWRpZW5nYW5nc2dlYsO8aHJlbiwgbmljaHQgU2VtZXN0ZXJiZWl0csOkZ2UuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy5kZWdyZWVfcHJvZ3JhbV9mZWVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUsIHJlcXVpcmVkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRlZ3JlZVByb2dyYW1GZWVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGVncmVlX3Byb2dyYW1fZmVlcy4ke2xhbmd1YWdlQ29kZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVncmVlUHJvZ3JhbUZlZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlZ3JlZV9wcm9ncmFtX2ZlZXNbbGFuZ3VhZ2VDb2RlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0Zvcm1XcmFwcGVyPlxuICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgIDwvUGFuZWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZ2FuaXphdGlvbmFsTGlua3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICdjb250ZXh0cy9EZWdyZWVQcm9ncmFtVmFsaWRhdGlvblByb3ZpZGVyJztcblxuaW1wb3J0IHsgRklFTERTX0JZX1RBQlMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IFRhYk5hbWVzIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IEVycm9yV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICAgIGNvbG9yOiAjY2MxODE4O1xuYDtcblxuZnVuY3Rpb24gdXNlVGFiSGFzRXJyb3IodGFiTmFtZTogVGFiTmFtZXMpIHtcbiAgICBjb25zdCBmaWVsZHMgPSBGSUVMRFNfQllfVEFCU1t0YWJOYW1lXSA/PyBbXTtcbiAgICBjb25zdCB7IGZpZWxkSGFzRXJyb3JzIH0gPSB1c2VWYWxpZGF0aW9uKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZmllbGRIYXNFcnJvcnMoZmllbGRzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IFRhYlRpdGxlID0gKHsgbmFtZSwgdGl0bGUgfTogeyBuYW1lOiBUYWJOYW1lczsgdGl0bGU6IHN0cmluZyB9KSA9PiB7XG4gICAgY29uc3QgaGFzRXJyb3JzID0gdXNlVGFiSGFzRXJyb3IobmFtZSk7XG4gICAgaWYgKCFoYXNFcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIDw+e3RpdGxlfTwvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gPEVycm9yV3JhcHBlcj57dGl0bGV9PC9FcnJvcldyYXBwZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiVGl0bGU7XG4iLCJpbXBvcnQgeyBUYWJOYW1lcyB9IGZyb20gJ2RlZnMvY29tbW9uJztcbmltcG9ydCB7IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMgfSBmcm9tICdkZWZzL2RlZ3JlZS1wcm9ncmFtLWRhdGEnO1xuXG5leHBvcnQgY29uc3QgRklFTERTX0JZX1RBQlM6IFJlY29yZDxUYWJOYW1lcywgQXJyYXk8RGVncmVlUHJvZ3JhbURhdGFQYXRocz4+ID0ge1xuICAgIGdlbmVyYWw6IFtcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ3N1YnRpdGxlJyxcbiAgICAgICAgJ2ZlYXR1cmVkX2ltYWdlJyxcbiAgICAgICAgJ3RlYXNlcl9pbWFnZScsXG4gICAgICAgICdlbnRyeV90ZXh0JyxcbiAgICAgICAgJ2FyZWFfb2Zfc3R1ZHknLFxuICAgICAgICAnc3RhcnQnLFxuICAgICAgICAnbnVtYmVyX29mX3N0dWRlbnRzJyxcbiAgICAgICAgJ3RlYWNoaW5nX2xhbmd1YWdlJyxcbiAgICAgICAgJ2F0dHJpYnV0ZXMnLFxuICAgICAgICAnZGVncmVlJyxcbiAgICAgICAgJ2ZhY3VsdHknLFxuICAgICAgICAnbG9jYXRpb24nLFxuICAgICAgICAnc3ViamVjdF9ncm91cHMnLFxuICAgICAgICAna2V5d29yZHMnLFxuICAgICAgICAndmlkZW9zJyxcbiAgICAgICAgJ3N0YW5kYXJkX2R1cmF0aW9uJyxcbiAgICBdLFxuICAgIGNvbnRlbnQ6IFsnY29udGVudCddLFxuICAgICdhZG1pc3Npb24tcmVxdWlyZW1lbnRzJzogW1xuICAgICAgICAnYWRtaXNzaW9uX3JlcXVpcmVtZW50cycsXG4gICAgICAgICdjb250ZW50X3JlbGF0ZWRfbWFzdGVyX3JlcXVpcmVtZW50cycsXG4gICAgICAgICdhcHBsaWNhdGlvbl9kZWFkbGluZV93aW50ZXJfc2VtZXN0ZXInLFxuICAgICAgICAnYXBwbGljYXRpb25fZGVhZGxpbmVfc3VtbWVyX3NlbWVzdGVyJyxcbiAgICAgICAgJ2RldGFpbHNfYW5kX25vdGVzJyxcbiAgICAgICAgJ2xhbmd1YWdlX3NraWxscycsXG4gICAgICAgICdsYW5ndWFnZV9za2lsbHNfaHVtYW5pdGllc19mYWN1bHR5JyxcbiAgICAgICAgJ2dlcm1hbl9sYW5ndWFnZV9za2lsbHNfZm9yX2ludGVybmF0aW9uYWxfc3R1ZGVudHMnLFxuICAgIF0sXG4gICAgJ29yZ2FuaXphdGlvbmFsLWxpbmtzJzogW1xuICAgICAgICAnYXBwbHlfbm93X2xpbmsnLFxuICAgICAgICAnZXhhbWluYXRpb25zX29mZmljZScsXG4gICAgICAgICdtb2R1bGVfaGFuZGJvb2snLFxuICAgICAgICAndXJsJyxcbiAgICAgICAgJ2RlcGFydG1lbnQnLFxuICAgICAgICAnc3ViamVjdF9zcGVjaWZpY19hZHZpY2UnLFxuICAgICAgICAnaW5mb19icm9jaHVyZScsXG4gICAgICAgICdleGFtaW5hdGlvbl9yZWd1bGF0aW9ucycsXG4gICAgICAgICdmZWVfcmVxdWlyZWQnLFxuICAgICAgICAnZGVncmVlX3Byb2dyYW1fZmVlcycsXG4gICAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVncmVlUHJvZ3JhbUVkaXRGb3JtJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kLCB1bmlxIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgRm9ybVRva2VuRmllbGQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuaW1wb3J0IHsgX254LCBzcHJpbnRmIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgdXNlRmllbGRDb250ZXh0IH0gZnJvbSAnLi4vRm9ybUZpZWxkL0Zvcm1GaWVsZCc7XG5cbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvcHMgfSBmcm9tICdkZWZzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxudHlwZSBHZW5lcmljRW50aXR5ID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgcGFyZW50PzogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBFbnRpdHkgc2VsZWN0b3IuXG4gKiBIZWF2aWx5IGJhc2VkIG9uIEZsYXRUZXJtU2VsZWN0b3IuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvYmxvYi9jMDI0MjFmOGNkNmU5MDk2NmI3ZThjZDQ4N2QzMTFlZTMxYTZhYWRhL3BhY2thZ2VzL2VkaXRvci9zcmMvY29tcG9uZW50cy9wb3N0LXRheG9ub21pZXMvZmxhdC10ZXJtLXNlbGVjdG9yLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudGl0eVNlbGVjdG9yPEVudGl0eSBleHRlbmRzIEdlbmVyaWNFbnRpdHk+KHtcbiAgICBsYWJlbCA9ICcnLFxuICAgIG1lc3NhZ2VzLFxuICAgIG1heExlbmd0aCxcbiAgICBvbkNoYW5nZSxcbiAgICBlbnRpdHlUb1Rva2VuLFxuICAgIG1heFN1Z2dlc3Rpb25zLFxuICAgIGVudGl0aWVzLFxuICAgIHNlYXJjaGVkRW50aXRpZXMsXG4gICAgc2V0U2VhcmNoLFxuICAgIGNoaWxkT25seSxcbn06IEVudGl0eVNlbGVjdG9yUHJvcHM8RW50aXR5Pikge1xuICAgIGNvbnN0IFtpc0ZvY3VzZWQsIHNldElzRm9jdXNlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKTtcbiAgICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBkZWJvdW5jZWRTZWFyY2ggPSB1c2VEZWJvdW5jZShzZXRTZWFyY2gsIDUwMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZW50aXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWVzID0gZW50aXRpZXMubWFwKGVudGl0eVRvVG9rZW4pO1xuICAgICAgICAgICAgc2V0VmFsdWVzKG5ld1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9LCBbZW50aXRpZXNdKTtcblxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdXNlTWVtbzxBcnJheTxzdHJpbmc+PigoKSA9PiB7XG4gICAgICAgIGlmIChtYXhMZW5ndGggJiYgdmFsdWVzLmxlbmd0aCA+PSBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRzOiBBcnJheTxFbnRpdHk+ID0gW107XG4gICAgICAgIGNvbnN0IHRvcExldmVsRW50aXRpZXMgPSBzZWFyY2hlZEVudGl0aWVzLmZpbHRlcigoZW50aXR5KSA9PiAhZW50aXR5Py5wYXJlbnQpO1xuXG4gICAgICAgIHRvcExldmVsRW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNlYXJjaGVkRW50aXRpZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChjaGlsZEVudGl0eSkgPT4gY2hpbGRFbnRpdHkucGFyZW50ID09PSBlbnRpdHkuaWQsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXN1bHRzID0gWy4uLnJlc3VsdHMsIGVudGl0eSwgLi4uY2hpbGRyZW5dO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cy5tYXAoZW50aXR5VG9Ub2tlbik7XG4gICAgfSwgW3NlYXJjaGVkRW50aXRpZXMsIHZhbHVlc10pO1xuXG4gICAgY29uc3Qgb25DaGFuZ2VUb2tlbnMgPSAodG9rZW5zKSA9PiB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZUVudGl0aWVzID0gWy4uLmVudGl0aWVzLCAuLi5zZWFyY2hlZEVudGl0aWVzXTtcbiAgICAgICAgY29uc3QgdW5pcXVlVG9rZW5zID0gdW5pcSh0b2tlbnMpO1xuXG4gICAgICAgIHNldFZhbHVlcyh1bmlxdWVUb2tlbnMpO1xuICAgICAgICBjb25zdCBuZXdFbnRpdGllcyA9IHVuaXF1ZVRva2Vucy5tYXAoKHRva2VuKSA9PlxuICAgICAgICAgICAgZmluZChhdmFpbGFibGVFbnRpdGllcywgKGVudGl0eSkgPT4gZW50aXR5VG9Ub2tlbihlbnRpdHkpID09PSB0b2tlbiksXG4gICAgICAgICk7XG4gICAgICAgIG9uQ2hhbmdlKG5ld0VudGl0aWVzKTtcbiAgICAgICAgc2V0U2VhcmNoKCcnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNUb2tlblZhbGlkID0gKHRva2VuOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlRW50aXRpZXMgPSBbLi4uZW50aXRpZXMsIC4uLnNlYXJjaGVkRW50aXRpZXNdO1xuICAgICAgICBjb25zdCBmb3VuZEVudGl0eSA9IGZpbmQoYXZhaWxhYmxlRW50aXRpZXMsIChlbnRpdHkpID0+IGVudGl0eVRvVG9rZW4oZW50aXR5KSA9PT0gdG9rZW4pO1xuICAgICAgICByZXR1cm4gY2hpbGRPbmx5ID8gZm91bmRFbnRpdHkgJiYgZm91bmRFbnRpdHk/LnBhcmVudCA6IGZvdW5kRW50aXR5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRvIGZpeCBhIGJ1ZyBpbiBGaXJlZm94IHdoZXJlIGVsZW1lbnRzIHRoYXQgYXJlIHNjcm9sbGVkIGdldCBmb2N1cyxcbiAgICAgKiBUaGlzIGNhdXNlcyBhIHByb2JsZW0gd2hlcmUgdGhlIGZvY3VzIGlzIG5vdCBtb3ZlZCB0byBuZXh0IGlucHV0IHdoZW4gcHJlc3Npbmcga2V5Ym9hcmQgYHRhYmAga2V5XG4gICAgICpcbiAgICAgKiBAbGluayBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MTY1OTRcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXdyYXBwZXJSZWYuY3VycmVudCB8fCAhaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWdnZXN0aW9uc0xpc3QgPSB3cmFwcGVyUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcjxIVE1MVUxpc3RFbGVtZW50PihcbiAgICAgICAgICAgICcuY29tcG9uZW50cy1mb3JtLXRva2VuLWZpZWxkX19zdWdnZXN0aW9ucy1saXN0JyxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXN1Z2dlc3Rpb25zTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VnZ2VzdGlvbnNMaXN0LnRhYkluZGV4ID0gLTE7XG4gICAgfSwgW2lzRm9jdXNlZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRpdHktc2VsZWN0b3JcIiByZWY9e3dyYXBwZXJSZWZ9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc0ZvY3VzZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRJc0ZvY3VzZWQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXt1c2VGaWVsZENvbnRleHQoKS5yZXF1aXJlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybVRva2VuRmllbGRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcz17bWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucz17c3VnZ2VzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRva2Vuc31cbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17ZGVib3VuY2VkU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc0ZvY3VzZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgIG1heFN1Z2dlc3Rpb25zPXttYXhTdWdnZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgX19leHBlcmltZW50YWxTaG93SG93VG89e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBfX2V4cGVyaW1lbnRhbFZhbGlkYXRlSW5wdXQ9e2lzVG9rZW5WYWxpZH1cbiAgICAgICAgICAgICAgICAgICAgX19leHBlcmltZW50YWxFeHBhbmRPbkZvY3VzXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aXNGb2N1c2VkICYmIG1heExlbmd0aCAmJiB2YWx1ZXMubGVuZ3RoID49IG1heExlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW50aXR5LXNlbGVjdG9yX19tYXgtaXRlbXMtbm90aWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzcHJpbnRmKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNsYXRvcnM6ICVkIGlzIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRoYXQgY2FuIGJlIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBfbngoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdSBjYW4gb25seSBzZWxlY3QgJWQgaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdSBjYW4gb25seSBzZWxlY3QgJWQgaXRlbXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogc2VsZWN0b3IgbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9FbnRpdHlTZWxlY3Rvcic7XG4iLCJpbXBvcnQgeyBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB3aXRoQXJpYVJlcXVpcmVkIGZyb20gJy4vd2l0aEFyaWFSZXF1aXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcmlhUmVxdWlyZWQoVGV4dENvbnRyb2wpO1xuIiwiaW1wb3J0IHsgVGV4dGFyZWFDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHdpdGhBcmlhUmVxdWlyZWQgZnJvbSAnLi93aXRoQXJpYVJlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFyaWFSZXF1aXJlZChUZXh0YXJlYUNvbnRyb2wpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRm9ybVZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdkZWZzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBlcnJvcnM6IEZvcm1WYWxpZGF0aW9uRXJyb3JzO1xufVxuXG5jb25zdCBTdHlsZWRFcnJvcldyYXBwZXIgPSBzdHlsZWQucGBcbiAgICBjb2xvcjogI2NjMTgxODtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiA1cHggMCAwO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xuYDtcblxuY29uc3QgRmllbGRFcnJvciA9ICh7IGVycm9ycyB9OiBQcm9wcykgPT4ge1xuICAgIGlmICghZXJyb3JzLnNpemUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKGVycm9ycykubWFwKChbLCBlcnJvcl0pID0+IChcbiAgICAgICAgICAgICAgICA8U3R5bGVkRXJyb3JXcmFwcGVyIGtleT17bmFub2lkKCl9PntlcnJvci5tZXNzYWdlfTwvU3R5bGVkRXJyb3JXcmFwcGVyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZEVycm9yO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCYXNlQ29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCBGb3JtRmllbGRMYWJlbCBmcm9tICdjb21wb25lbnRzL0xheW91dHMvRm9ybUZpZWxkTGFiZWwnO1xuaW1wb3J0IEZvcm1GaWVsZFdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9MYXlvdXRzL0Zvcm1GaWVsZFdyYXBwZXInO1xuaW1wb3J0IHsgdXNlVmFsaWRhdGlvbiB9IGZyb20gJ2NvbnRleHRzL0RlZ3JlZVByb2dyYW1WYWxpZGF0aW9uUHJvdmlkZXInO1xuXG5pbXBvcnQgeyBGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4vZGVmcyc7XG5pbXBvcnQgRmllbGRFcnJvciBmcm9tICcuL0ZpZWxkRXJyb3InO1xuXG5jb25zdCBGb3JtRmllbGRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IHJlcXVpcmVkOiBmYWxzZSB9KTtcbmV4cG9ydCBjb25zdCB1c2VGaWVsZENvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KEZvcm1GaWVsZENvbnRleHQpO1xuXG5jb25zdCBGb3JtRmllbGQ6IFJlYWN0LkZDPFByb3BzV2l0aENoaWxkcmVuPEZvcm1GaWVsZFByb3BzPj4gPSAoe1xuICAgIG5hbWUsXG4gICAgZmlsbCxcbiAgICBjaGlsZHJlbixcbiAgICBsYWJlbCxcbiAgICBoZWxwLFxuICAgIHdyYXBCYXNlQ29udHJvbCA9IHRydWUsXG4gICAgZGlzcGxheUVycm9yID0gdHJ1ZSxcbiAgICByZXF1aXJlZCA9IGZhbHNlLFxuICAgIC4uLm90aGVyc1xufSkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0RmllbGRFcnJvcnMgfSA9IHVzZVZhbGlkYXRpb24oKTtcblxuICAgIGNvbnN0IHN1ZmZpeGVkTGFiZWwgPSByZXF1aXJlZFxuICAgICAgICA/IGxhYmVsXG4gICAgICAgIDogYCR7bGFiZWx9ICR7X3goXG4gICAgICAgICAgICAgICcob3B0aW9uYWwpJyxcbiAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICl9YDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRmllbGRXcmFwcGVyIGZpbGw9e2ZpbGx9IHsuLi5vdGhlcnN9PlxuICAgICAgICAgICAgPEZvcm1GaWVsZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcmVxdWlyZWQgfX0+XG4gICAgICAgICAgICAgICAge3dyYXBCYXNlQ29udHJvbCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEJhc2VDb250cm9sIGxhYmVsPXs8Rm9ybUZpZWxkTGFiZWwgbGFiZWw9e3N1ZmZpeGVkTGFiZWx9IGhlbHA9e2hlbHB9IC8+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9CYXNlQ29udHJvbD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PntjaGlsZHJlbn08Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Gb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgICAgICAgICB7ZGlzcGxheUVycm9yICYmIDxGaWVsZEVycm9yIGVycm9ycz17Z2V0RmllbGRFcnJvcnMobmFtZSl9IC8+fVxuICAgICAgICA8L0Zvcm1GaWVsZFdyYXBwZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZDtcbiIsImV4cG9ydCAqIGZyb20gJy4vZGVmcyc7XG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Gb3JtRmllbGQnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG5pbXBvcnQgeyB1c2VGaWVsZENvbnRleHQgfSBmcm9tICcuL0Zvcm1GaWVsZCc7XG5cbmNvbnN0IHdpdGhBcmlhUmVxdWlyZWQgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChcbiAgICAoV3JhcHBlZENvbXBvbmVudDogUmVhY3QuRkMpID0+IChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCB7IHJlcXVpcmVkIH0gPSB1c2VGaWVsZENvbnRleHQoKTtcbiAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IGFyaWEtcmVxdWlyZWQ9e3JlcXVpcmVkfSB7Li4ucHJvcHN9IC8+O1xuICAgIH0sXG4gICAgJ3dpdGhBcmlhUmVxdWlyZWQnLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFyaWFSZXF1aXJlZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBpc0Jsb2JVUkwgfSBmcm9tICdAd29yZHByZXNzL2Jsb2InO1xuaW1wb3J0IHsgTWVkaWFQbGFjZWhvbGRlciwgTWVkaWFSZXBsYWNlRmxvdywgTWVkaWFVcGxvYWRDaGVjayB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IEJ1dHRvbiwgRmxleCwgU3Bpbm5lciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IHVzZUVkaXREZWdyZWVQcm9ncmFtIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlRmllbGRDb250ZXh0IH0gZnJvbSAnLi4vRm9ybUZpZWxkL0Zvcm1GaWVsZCc7XG5pbXBvcnQgdXNlTWVkaWEgZnJvbSAnLi91c2VNZWRpYSc7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnZGVmcyc7XG5cbnR5cGUgSW1hZ2VGaWVsZFByb3BzID0ge1xuICAgIHBhdGg6ICd0ZWFzZXJfaW1hZ2UnIHwgJ2ZlYXR1cmVkX2ltYWdlJztcbiAgICB0aXRsZT86IHN0cmluZztcbn07XG5cbmNvbnN0IFRIVU1CTkFJTF9TSVpFID0gMTUwO1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGhhc0ltYWdlOiBib29sZWFuIH0+YFxuICAgIC5jb21wb25lbnRzLXBsYWNlaG9sZGVyX19maWVsZHNldCB7XG4gICAgICAgICR7KHsgaGFzSW1hZ2UgfSkgPT5cbiAgICAgICAgICAgIGhhc0ltYWdlXG4gICAgICAgICAgICAgICAgPyBjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbXBvbmVudHMtZm9ybS1maWxlLXVwbG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAuYmxvY2stZWRpdG9yLW1lZGlhLXBsYWNlaG9sZGVyX19jYW5jZWwtYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgIC5jb21wb25lbnRzLWJ1dHRvbi5pcy10ZXJ0aWFyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogJyd9XG4gICAgICAgIH07XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VGaWVsZCh7IHBhdGgsIHRpdGxlID0gJycgfTogSW1hZ2VGaWVsZFByb3BzKSB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlIH0gPSB1c2VFZGl0RGVncmVlUHJvZ3JhbSgpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRNZWRpYSA9IHVzZU1lZGlhKHZhbHVlc1twYXRoXS5pZCk7XG5cbiAgICBjb25zdCBQcmV2aWV3ID0gKCk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdmFsdWVzW3BhdGhdLnVybCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIXNlbGVjdGVkTWVkaWEgPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFRIVU1CTkFJTF9TSVpFLCBoZWlnaHQ6IFRIVU1CTkFJTF9TSVpFIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9hZGVyLWNhcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICB3aWR0aD17VEhVTUJOQUlMX1NJWkV9XG4gICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZE1lZGlhPy5tZWRpYV9kZXRhaWxzPy5zaXplcz8udGh1bWJuYWlsPy5zb3VyY2VfdXJsID8/IHZhbHVlc1twYXRoXS51cmx9XG4gICAgICAgICAgICAgICAgYWx0PVwicHJldmlld1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVPbkNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgaGFuZGxlQ2hhbmdlPEltYWdlPihwYXRoLCB7XG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVPblNlbGVjdCA9ICh7IGlkLCB1cmwgfSkgPT4ge1xuICAgICAgICBpZiAoaXNCbG9iVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZUNoYW5nZTxJbWFnZT4ocGF0aCwge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYXNNZWRpYSA9ICgpID0+ICFpc0xvYWRpbmcgJiYgISFzZWxlY3RlZE1lZGlhPy5pZDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgPFN0eWxlZFdyYXBwZXJcbiAgICAgICAgICAgICAgICBoYXNJbWFnZT17aGFzTWVkaWEoKX1cbiAgICAgICAgICAgICAgICBhcmlhLXJlcXVpcmVkPXt1c2VGaWVsZENvbnRleHQoKS5yZXF1aXJlZH1cbiAgICAgICAgICAgICAgICByb2xlPVwiY29tYm9ib3hcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZWRpYVBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtbdmFsdWVzW3BhdGhdLmlkXX1cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZU9uU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFzTWVkaWEoKSA/IGhhbmRsZU9uQ2FuY2VsIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM9e3sgdGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgbWVkaWFQcmV2aWV3PXs8UHJldmlldyAvPn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNNZWRpYSgpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGdhcD17NH0ganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFSZXBsYWNlRmxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVVybD17dmFsdWVzW3BhdGhdLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFJZD17dmFsdWVzW3BhdGhdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZU9uU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGlzRGVzdHJ1Y3RpdmUgb25DbGljaz17aGFuZGxlT25DYW5jZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X18oJ1JlbW92ZSBpbWFnZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTWVkaWFQbGFjZWhvbGRlcj5cbiAgICAgICAgICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgICAgICAgPC9NZWRpYVVwbG9hZENoZWNrPlxuICAgICk7XG59XG5cbkltYWdlRmllbGQuZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlOiAnJyxcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbWFnZUZpZWxkJztcbiIsImltcG9ydCB7IE1lZGlhVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhL2J1aWxkLXR5cGVzL2VudGl0eS10eXBlcy9oZWxwZXJzJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7IENvcmVEYXRhU2VsZWN0b3JzLCBNYXBTZWxlY3QsIFdwTWVkaWEsIFdwTWVkaWFJbWFnZSB9IGZyb20gJ2RlZnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNZWRpYTxUIGV4dGVuZHMgTWVkaWFUeXBlID0gJ2ltYWdlJz4obWVkaWFJZDogbnVtYmVyKSB7XG4gICAgY29uc3QgbWVkaWE6IChUIGV4dGVuZHMgJ2ltYWdlJyA/IFdwTWVkaWFJbWFnZSA6IFdwTWVkaWEpIHwgdW5kZWZpbmVkID0gdXNlU2VsZWN0PFxuICAgICAgICBNYXBTZWxlY3Q8Q29yZURhdGFTZWxlY3RvcnM+XG4gICAgPihcbiAgICAgICAgKHNlbGVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdCgnY29yZScpLmdldE1lZGlhKG1lZGlhSWQpO1xuICAgICAgICB9LFxuICAgICAgICBbbWVkaWFJZF0sXG4gICAgKTtcblxuICAgIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBsYWJlbDogUmVhY3ROb2RlO1xuICAgIGhlbHA/OiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLnNwYW5gXG4gICAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5jb25zdCBTdHlsZWRIZWxwVGV4dCA9IHN0eWxlZC5wYFxuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XG5gO1xuXG5jb25zdCBGb3JtRmllbGRMYWJlbCA9ICh7IGxhYmVsLCBoZWxwIH06IFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTdHlsZWRMYWJlbD57bGFiZWx9PC9TdHlsZWRMYWJlbD5cbiAgICAgICAgICAgIHshIWhlbHAgJiYgPFN0eWxlZEhlbHBUZXh0PntoZWxwfTwvU3R5bGVkSGVscFRleHQ+fVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuRm9ybUZpZWxkTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlbHA6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZExhYmVsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBGb3JtRmllbGRXcmFwcGVyUHJvcHMgfSBmcm9tICcuL2RlZnMnO1xuaW1wb3J0IHsgU3R5bGVkRm9ybUZpZWxkV3JhcHBlciB9IGZyb20gJy4vc3R5bGUtZGVmaW5pdGlvbnMnO1xuXG5jb25zdCBGb3JtRmllbGRXcmFwcGVyOiBSZWFjdC5GQzxQcm9wc1dpdGhDaGlsZHJlbjxGb3JtRmllbGRXcmFwcGVyUHJvcHM+PiA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgZmlsbCA9ICdmdWxsJyxcbiAgICAuLi5vdGhlcnNcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRm9ybUZpZWxkV3JhcHBlciBpc0Jsb2NrPXtmaWxsID09PSAnYXV0bycgfHwgdW5kZWZpbmVkfSBmaWxsPXtmaWxsfSB7Li4ub3RoZXJzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TdHlsZWRGb3JtRmllbGRXcmFwcGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgeyBGb3JtRmllbGRXcmFwcGVyUHJvcHMgfTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU3R5bGVkRm9ybUZpZWxkV3JhcHBlciB9IGZyb20gJy4vc3R5bGUtZGVmaW5pdGlvbnMnO1xuXG5jb25zdCBGb3JtU2VwYXJhdG9yOiBSZWFjdC5GQzxQcm9wc1dpdGhDaGlsZHJlbjx1bmtub3duPj4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEZvcm1GaWVsZFdyYXBwZXIgaXNCbG9jaz17dW5kZWZpbmVkfSBmaWxsPVwiZnVsbFwiPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvU3R5bGVkRm9ybUZpZWxkV3JhcHBlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybVNlcGFyYXRvcjtcbiIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcywgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFN0eWxlZEZvcm1XcmFwcGVyIH0gZnJvbSAnLi9zdHlsZS1kZWZpbml0aW9ucyc7XG5cbmNvbnN0IEZvcm1XcmFwcGVyOiBSZWFjdC5GQzxQcm9wc1dpdGhDaGlsZHJlbjxIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4+PiA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgLi4ub3RoZXJzXG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEZvcm1XcmFwcGVyIHdyYXAgZ2FwPXswfSBhbGlnbj1cImZsZXgtc3RhcnRcIiB7Li4ub3RoZXJzfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TdHlsZWRGb3JtV3JhcHBlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybVdyYXBwZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxleCwgRmxleEl0ZW0gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGb3JtRmllbGRXcmFwcGVyUHJvcHMgfSBmcm9tICcuL2RlZnMnO1xuXG5jb25zdCBHQVBfQ09MVU1OID0gJzE1cHgnO1xuY29uc3QgR0FQX1JPVyA9ICcxNXB4JztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZvcm1GaWVsZFdyYXBwZXIgPSBzdHlsZWQoRmxleEl0ZW0pPHsgZmlsbDogRm9ybUZpZWxkV3JhcHBlclByb3BzWydmaWxsJ10gfT5gXG4gICAgcGFkZGluZy1sZWZ0OiAke0dBUF9DT0xVTU59O1xuICAgIHBhZGRpbmctcmlnaHQ6ICR7R0FQX0NPTFVNTn07XG4gICAgbWFyZ2luLWJvdHRvbTogJHtHQVBfUk9XfTtcblxuICAgICR7KHsgZmlsbCB9KSA9PlxuICAgICAgICBmaWxsID09PSAnZnVsbCcgJiZcbiAgICAgICAgYFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgYH1cblxuICAgICR7KHsgZmlsbCB9KSA9PlxuICAgICAgICBmaWxsID09PSAnaGFsZicgJiZcbiAgICAgICAgYFxuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBmbGV4OiAwIDAgNTAlO1xuICAgIGB9XG5cbiAgICAkeyh7IGZpbGwgfSkgPT5cbiAgICAgICAgZmlsbCA9PT0gJ3RoaXJkJyAmJlxuICAgICAgICBgXG4gICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMlO1xuICAgICAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMzMzJTtcbiAgICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZvcm1XcmFwcGVyID0gc3R5bGVkKEZsZXgpYFxuICAgIG1hcmdpbjogMCAtJHtHQVBfQ09MVU1OfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBtYXhDaGFyczogbnVtYmVyO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGNoaWxkcmVuOiAoe1xuICAgICAgICBtYXhDaGFycyxcbiAgICAgICAgdXBkYXRlZFZhbHVlLFxuICAgICAgICByZXF1aXJlZCxcbiAgICB9OiB7XG4gICAgICAgIG1heENoYXJzOiBudW1iZXI7XG4gICAgICAgIHVwZGF0ZWRWYWx1ZTogKHRleHQ6IHN0cmluZykgPT4gc3RyaW5nO1xuICAgICAgICByZXF1aXJlZDogYm9vbGVhbjtcbiAgICB9KSA9PiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IExpbWl0ZWRJbnB1dENvbnRyb2wgPSAoeyBtYXhDaGFycywgY2hpbGRyZW4sIHZhbHVlLCByZXF1aXJlZCA9IGZhbHNlIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2NoYXJzTGVmdCwgc2V0Q2hhcnNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4obWF4Q2hhcnMpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q2hhcnNMZWZ0KG1heENoYXJzIC0gdmFsdWUubGVuZ3RoKTtcbiAgICB9LCBbdmFsdWUsIG1heENoYXJzXSk7XG5cbiAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiB0ZXh0Lmxlbmd0aCA8PSBtYXhDaGFycyA/IHRleHQgOiB0ZXh0LnN1YnN0cmluZygwLCBtYXhDaGFycyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2hpbGRyZW4oeyB1cGRhdGVkVmFsdWUsIG1heENoYXJzLCByZXF1aXJlZCB9KX1cblxuICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBwZXJjZW50YWdlPXsoY2hhcnNMZWZ0ICogMTAwKSAvIG1heENoYXJzfSBzcXVhcmVTaXplPXsxNn0gLz5cblxuICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAge194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJyVzIGNoYXJhY3RlcnMgbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogbGltaXRlZCB0ZXh0IGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLnJlcGxhY2UoJyVzJywgY2hhcnNMZWZ0LnRvU3RyaW5nKCkpfVxuICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5MaW1pdGVkSW5wdXRDb250cm9sLmRlZmF1bHRQcm9wcyA9IHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW1pdGVkSW5wdXRDb250cm9sO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTGltaXRlZElucHV0Q29udHJvbCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBUYWJQYW5lbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IFRhYkl0ZW0gfSBmcm9tICcuL2RlZnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHRhYnM6IFRhYkl0ZW1bXTtcbn1cblxuY29uc3QgVGFicyA9ICh7IHRhYnMgfTogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gPFRhYlBhbmVsIHRhYnM9e3RhYnN9PnsodGFiOiBUYWJJdGVtKSA9PiA8Pnt0YWIuY29tcG9uZW50fTwvPn08L1RhYlBhbmVsPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG4iLCJleHBvcnQgKiBmcm9tICcuL2RlZnMnO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGFicyc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuaW1wb3J0IEVudGl0eVNlbGVjdG9yIGZyb20gJy4uL0VudGl0eVNlbGVjdG9yJztcbmltcG9ydCB7IE11bHRpVGVybVNlbGVjdG9yUHJvcHMgfSBmcm9tICcuL2RlZnMnO1xuaW1wb3J0IHtcbiAgICB3aXRoRGVncmVlUHJvZ3JhbVRlcm1zLFxuICAgIHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcyxcbiAgICB3aXRoVGVybVNlbGVjdG9yUHJvcHMsXG59IGZyb20gJy4vaG9jJztcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgICB3aXRoVGVybVNlbGVjdG9yUHJvcHMsXG4gICAgd2l0aERlZ3JlZVByb2dyYW1UZXJtcyxcbiAgICB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMsXG4pKEVudGl0eVNlbGVjdG9yKSBhcyBSZWFjdC5GQzxNdWx0aVRlcm1TZWxlY3RvclByb3BzPjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbXBvc2UsIGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuaW1wb3J0IEVudGl0eVNlbGVjdG9yIGZyb20gJy4uL0VudGl0eVNlbGVjdG9yJztcbmltcG9ydCB7IFRlcm1TZWxlY3RvclByb3BzIH0gZnJvbSAnLi9kZWZzJztcbmltcG9ydCB7XG4gICAgd2l0aERlZ3JlZVByb2dyYW1UZXJtcyxcbiAgICB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMsXG4gICAgd2l0aFRlcm1TZWxlY3RvclByb3BzLFxufSBmcm9tICcuL2hvYyc7XG5cbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvcHMsIFdwVGVybSB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCB3aXRoU2luZ2xlVGVybVNlbGVjdG9yUHJvcHMgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChcbiAgICAoV3JhcHBlZENvbXBvbmVudDogUmVhY3QuRkM8UGFydGlhbDxFbnRpdHlTZWxlY3RvclByb3BzPj4pID0+XG4gICAgICAgICh7IG9uQ2hhbmdlLCAuLi5vdGhlcnMgfTogVGVybVNlbGVjdG9yUHJvcHMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtczogQXJyYXk8V3BUZXJtPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodGVybXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgJ3dpdGhTaW5nbGVUZXJtU2VsZWN0b3JQcm9wcycsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICAgIHdpdGhTaW5nbGVUZXJtU2VsZWN0b3JQcm9wcyxcbiAgICB3aXRoVGVybVNlbGVjdG9yUHJvcHMsXG4gICAgd2l0aERlZ3JlZVByb2dyYW1UZXJtcyxcbiAgICB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMsXG4pKEVudGl0eVNlbGVjdG9yKSBhcyBSZWFjdC5GQzxUZXJtU2VsZWN0b3JQcm9wcz47XG4iLCJpbXBvcnQgd2l0aERlZ3JlZVByb2dyYW1UZXJtcyBmcm9tICcuL3dpdGhEZWdyZWVQcm9ncmFtVGVybXMnO1xuaW1wb3J0IHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcyBmcm9tICcuL3dpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcyc7XG5pbXBvcnQgd2l0aFRlcm1TZWxlY3RvclByb3BzIGZyb20gJy4vd2l0aFRlcm1TZWxlY3RvclByb3BzJztcblxuZXhwb3J0IHsgd2l0aERlZ3JlZVByb2dyYW1UZXJtcywgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zLCB3aXRoVGVybVNlbGVjdG9yUHJvcHMgfTtcbiIsImltcG9ydCB7IGlzQXJyYXksIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBQb3N0LCBzdG9yZSBhcyBjb3JlU3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YSc7XG5pbXBvcnQgeyB3aXRoU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHsgZW50aXR5SWQgfSBmcm9tICd1dGlsL2lkSGVscGVycyc7XG5pbXBvcnQgc2VydmVyRGF0YSBmcm9tICd1dGlsL3NlcnZlckRhdGEnO1xuXG5pbXBvcnQgeyBNdWx0aVRlcm1TZWxlY3RvclByb3BzLCBUZXJtU2VsZWN0b3JQcm9wcyB9IGZyb20gJy4uL2RlZnMnO1xuXG5jb25zdCB3aXRoRGVncmVlUHJvZ3JhbVRlcm1zID0gd2l0aFNlbGVjdChcbiAgICAoXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgb3duUHJvcHM6IFRlcm1TZWxlY3RvclByb3BzIHwgTXVsdGlUZXJtU2VsZWN0b3JQcm9wcyxcbiAgICApOiB7IGVudGl0aWVzOiBBcnJheTxQb3N0PCd2aWV3Jz4+IH0gPT4ge1xuICAgICAgICBjb25zdCB7IGdldEVudGl0eVJlY29yZHMgfSA9IHNlbGVjdChjb3JlU3RvcmUubmFtZSk7XG5cbiAgICAgICAgaWYgKGlzRW1wdHkob3duUHJvcHMudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVudGl0aWVzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpZHMgPSAoXG4gICAgICAgICAgICAoaXNBcnJheShvd25Qcm9wcy52YWx1ZSkgPyBvd25Qcm9wcy52YWx1ZSA6IFtvd25Qcm9wcy52YWx1ZV0pIGFzIEFycmF5PHN0cmluZz5cbiAgICAgICAgKS5tYXAoZW50aXR5SWQpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHBlcl9wYWdlOiAtMSxcbiAgICAgICAgICAgICAgICBvcmRlcmJ5OiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgY29udGV4dDogJ3ZpZXcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IGlkcy5qb2luKCcsJyksXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVudGl0aWVzOlxuICAgICAgICAgICAgICAgIGdldEVudGl0eVJlY29yZHMoXG4gICAgICAgICAgICAgICAgICAgICd0YXhvbm9teScsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlckRhdGEoKS50YXhvbm9teVNsdWdzW293blByb3BzLnRheG9ub215XSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgKSA/PyBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERlZ3JlZVByb2dyYW1UZXJtcztcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzdG9yZSBhcyBjb3JlU3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YSc7XG5pbXBvcnQgeyB3aXRoU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHNlcnZlckRhdGEgZnJvbSAndXRpbC9zZXJ2ZXJEYXRhJztcblxuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm9wcywgV3BUZXJtIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcyA9IHdpdGhTZWxlY3QoXG4gICAgKFxuICAgICAgICBzZWxlY3QsXG4gICAgICAgIG93blByb3BzOiB7IHRheG9ub215OiBzdHJpbmc7IG1heFN1Z2dlc3Rpb25zOiBudW1iZXIgfSxcbiAgICApOiBQYXJ0aWFsPEVudGl0eVNlbGVjdG9yUHJvcHM8V3BUZXJtPj4gPT4ge1xuICAgICAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICAgICAgICBjb25zdCB7IGdldEVudGl0eVJlY29yZHMgfSA9IHNlbGVjdChjb3JlU3RvcmUubmFtZSk7XG5cbiAgICAgICAgY29uc3QgdGVybXMgPSBnZXRFbnRpdHlSZWNvcmRzKCd0YXhvbm9teScsIHNlcnZlckRhdGEoKS50YXhvbm9teVNsdWdzW293blByb3BzLnRheG9ub215XSwge1xuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHBlcl9wYWdlOiBvd25Qcm9wcy5tYXhTdWdnZXN0aW9ucyxcbiAgICAgICAgICAgICAgICBvcmRlcmJ5OiAnbmFtZScsXG4gICAgICAgICAgICAgICAgb3JkZXI6ICdhc2MnLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICd2aWV3JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWFyY2gsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWFyY2hlZEVudGl0aWVzOiB0ZXJtcyA/PyBbXSxcbiAgICAgICAgICAgIHNldFNlYXJjaCxcbiAgICAgICAgfTtcbiAgICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuaW1wb3J0IHsgZGVjb2RlRW50aXRpZXMgfSBmcm9tICdAd29yZHByZXNzL2h0bWwtZW50aXRpZXMnO1xuXG5pbXBvcnQgeyBTZWxlY3RvclByb3BzIH0gZnJvbSAnLi4vZGVmcyc7XG5cbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvcHMsIFdwVGVybSB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCB3aXRoVGVybVNlbGVjdG9yUHJvcHMgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChcbiAgICAoV3JhcHBlZENvbXBvbmVudDogUmVhY3QuRkM8UGFydGlhbDxFbnRpdHlTZWxlY3RvclByb3BzPj4pID0+XG4gICAgICAgICh7IGlkLCBoZWxwLCAuLi5vdGhlcnMgfTogU2VsZWN0b3JQcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2wgaWQ9e2lkfSBoZWxwPXtoZWxwID8/ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVRvVG9rZW49eyh0ZXJtOiBXcFRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVybS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAtLS0gJHtkZWNvZGVFbnRpdGllcyh0ZXJtLm5hbWUpfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZUVudGl0aWVzKHRlcm0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3VnZ2VzdGlvbnM9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9CYXNlQ29udHJvbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgJ3dpdGhTZWxlY3RvclByb3BzJyxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUZXJtU2VsZWN0b3JQcm9wcztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTXVsdGlUZXJtU2VsZWN0b3IgfSBmcm9tICcuL011bHRpVGVybVNlbGVjdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Rlcm1TZWxlY3Rvcic7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgRmxleCwgSWNvbiwgVGV4dENvbnRyb2wsIFZpc3VhbGx5SGlkZGVuIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgdXNlRmllbGRDb250ZXh0IH0gZnJvbSAnLi4vRm9ybUZpZWxkL0Zvcm1GaWVsZCc7XG5cbmludGVyZmFjZSBGaWVsZEl0ZW0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nW107XG4gICAgZW1wdHlNZXNzYWdlPzogc3RyaW5nO1xuICAgIG9uQ2hhbmdlKHZhbDogc3RyaW5nW10pOiB2b2lkO1xuICAgIHR5cGU/OiAndGV4dCcgfCAndXJsJztcbiAgICBtYXhJdGVtcz86IG51bWJlcjtcbn1cblxuY29uc3QgdHJhbnNmb3JtUmF3VmFsdWUgPSAodmFsdWU6IHN0cmluZ1tdKTogRmllbGRJdGVtW10gPT4ge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoKHN0cikgPT4gKHtcbiAgICAgICAgdmFsdWU6IHN0cixcbiAgICAgICAgaWQ6IG5hbm9pZCgpLFxuICAgIH0pKTtcbn07XG5cbmNvbnN0IFN0eWxlZEZpZWxkUm93ID0gc3R5bGVkKEZsZXgpYFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgID4gLmNvbXBvbmVudHMtYmFzZS1jb250cm9sIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAuY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkLFxuICAgICAgICAuY29tcG9uZW50cy10ZXh0LWNvbnRyb2xfX2lucHV0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBTdHlsZWROb0l0ZW1zTWVzc2FnZSA9IHN0eWxlZC5wYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG5gO1xuXG5jb25zdCBUZXh0Q29udHJvbENvbGxlY3Rpb24gPSAoe1xuICAgIGVtcHR5TWVzc2FnZSA9IHVuZGVmaW5lZCxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgICB0eXBlID0gJ3RleHQnLFxuICAgIG1heEl0ZW1zLFxufTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB2YWx1ZS5sZW5ndGggPyB2YWx1ZSA6IFsnJ107XG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlPEZpZWxkSXRlbVtdPih0cmFuc2Zvcm1SYXdWYWx1ZShpbml0aWFsVmFsdWUpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIEZpbHRlci1vdXQgZW1wdHkgdmFsdWVzXG4gICAgICAgIG9uQ2hhbmdlKGZpZWxkcy5maWx0ZXIoKGYpID0+ICEhZi52YWx1ZSkubWFwKChmKSA9PiBmLnZhbHVlKSk7XG4gICAgfSwgW2ZpZWxkc10pO1xuXG4gICAgY29uc3QgeyByZXF1aXJlZCB9ID0gdXNlRmllbGRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRGaWVsZFJvdyBrZXk9e2ZpZWxkLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjZShmaWVsZHMsIChkcmFmdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnRbaW5kZXhdLnZhbHVlID0gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1yZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXN0cnVjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkcyhbLi4uZmllbGRzLmZpbHRlcigoZikgPT4gZi5pZCAhPT0gZmllbGQuaWQpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwibm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpc3VhbGx5SGlkZGVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbW92ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBUZXh0Q29udHJvbENvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXN1YWxseUhpZGRlbj5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRGaWVsZFJvdz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICB7ZmllbGRzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZE5vSXRlbXNNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICB7ZW1wdHlNZXNzYWdlID8/XG4gICAgICAgICAgICAgICAgICAgICAgICBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTm8gaXRlbXMgYWRkZWQgeWV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogdGV4dCBjb250cm9sIGNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1N0eWxlZE5vSXRlbXNNZXNzYWdlPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgeyghbWF4SXRlbXMgfHwgZmllbGRzLmxlbmd0aCA8IG1heEl0ZW1zKSAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjZShmaWVsZHMsIChkcmFmdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFmdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBuYW5vaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7X3goJ0FkZCcsICdiYWNrb2ZmaWNlOiBUZXh0Q29udHJvbENvbGxlY3Rpb24nLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuVGV4dENvbnRyb2xDb2xsZWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBlbXB0eU1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICB0eXBlOiAndGV4dCcsXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0Q29udHJvbENvbGxlY3Rpb247XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UZXh0Q29udHJvbENvbGxlY3Rpb24nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBzZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyB1c2VFbnRpdHlQcm9wIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgc3RvcmUgYXMgZWRpdG9yU3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5cbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICcuL0RlZ3JlZVByb2dyYW1WYWxpZGF0aW9uUHJvdmlkZXInO1xuXG5pbXBvcnQgeyBEZWdyZWVQcm9ncmFtRGF0YSwgRGVncmVlUHJvZ3JhbURhdGFQYXRocyB9IGZyb20gJ2RlZnMnO1xuXG5pbnRlcmZhY2UgQ29udGV4dFZhbHVlIHtcbiAgICB2YWx1ZXM6IERlZ3JlZVByb2dyYW1EYXRhO1xuICAgIGhhbmRsZUNoYW5nZTogPFZhbHVlPihwYXRoOiBEZWdyZWVQcm9ncmFtRGF0YVBhdGhzLCB2YWw6IFZhbHVlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVncmVlUHJvZ3JhbUVkaXRGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlPih7fSBhcyBDb250ZXh0VmFsdWUpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IERlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbZGVncmVlUHJvZ3JhbURhdGEsIHNldERlZ3JlZVByb2dyYW1EYXRhXSA9IHVzZUVudGl0eVByb3AoXG4gICAgICAgICdwb3N0VHlwZScsXG4gICAgICAgIHNlcnZlckRhdGEoKS5wb3N0VHlwZSxcbiAgICAgICAgc2VydmVyRGF0YSgpLnByb3BlcnR5TmFtZSxcbiAgICApIGFzIFtEZWdyZWVQcm9ncmFtRGF0YSwgKHZhbDogRGVncmVlUHJvZ3JhbURhdGEpID0+IHZvaWQsIHVua25vd25dO1xuICAgIGNvbnN0IHsgcmVtb3ZlRXJyb3IgfSA9IHVzZVZhbGlkYXRpb24oKTtcblxuICAgIGNvbnN0IHsgZWRpdFBvc3QgfSA9IHVzZURpc3BhdGNoKGVkaXRvclN0b3JlKTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgYSB3b3JrYXJvdW5kIHRvIGVuYWJsZSB0aGUgXCJQdWJsaXNoXCIgYnV0dG9uIGZvciBuZXcgZGVncmVlIHByb2dyYW1zLlxuICAgICAqIEd1dGVuYmVyZyBtYXJrcyBuZXcgcG9zdHMgYXMgdW5zYXZhYmxlXG4gICAgICogaWYgbm8gdGl0bGUsIGV4Y2VycHQsIG9yIGNvbnRlbnQgY2hhbmdlcyBhcmUgZGV0ZWN0ZWQuXG4gICAgICogV2UgY2Fubm90IHVwZGF0ZSB0aGUgdGl0bGUgYmVjYXVzZSBpdCBjYXVzZXMgYSBKUyBlcnJvcixcbiAgICAgKiBzbyB3ZSBtdXN0IHVwZGF0ZSB0aGUgZXhjZXJwdCB0byBjaGFuZ2UgdGhlIHBvc3QgcmVjb3JkLlxuICAgICAqXG4gICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvYmxvYi81NWZiZGQ5NmFhMjY0MmRmZjE5NGNiNjllYmUwMmMzNjY5ZWViYWUwL3BhY2thZ2VzL2VkaXRvci9zcmMvY29tcG9uZW50cy9wb3N0LXB1Ymxpc2gtYnV0dG9uL2luZGV4LmpzI0wxMjQtTDEyOVxuICAgICAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL2Jsb2IvYzMwZTJmNmE4M2FiM2Q0NThmNWMzMTU2MGI3NjYyMTZmYzQ5OWUxMC9wYWNrYWdlcy9lZGl0b3Ivc3JjL3N0b3JlL3NlbGVjdG9ycy5qcyNMNDc2LUw0OTdcbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGNvbnN0IGVuYWJsZVBvc3RQdWJsaXNoQnV0dG9uID0gKHBhdGg6IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMsIHZhbDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChwYXRoID09PSAndGl0bGUuZGUnICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlZGl0UG9zdCh7IGV4Y2VycHQ6IHZhbCB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgPFZhbHVlLD4ocGF0aDogRGVncmVlUHJvZ3JhbURhdGFQYXRocywgdmFsOiBWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRXJyb3IocGF0aCk7XG4gICAgICAgICAgICBzZXREZWdyZWVQcm9ncmFtRGF0YShwcm9kdWNlKGRlZ3JlZVByb2dyYW1EYXRhLCAoZHJhZnQpID0+IHNldChkcmFmdCwgcGF0aCwgdmFsKSkpO1xuICAgICAgICAgICAgZW5hYmxlUG9zdFB1Ymxpc2hCdXR0b24ocGF0aCwgdmFsKTtcbiAgICAgICAgfSxcbiAgICAgICAgW3NldERlZ3JlZVByb2dyYW1EYXRhLCBkZWdyZWVQcm9ncmFtRGF0YSwgcmVtb3ZlRXJyb3JdLFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RGVncmVlUHJvZ3JhbUVkaXRGb3JtQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBkZWdyZWVQcm9ncmFtRGF0YSxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Db250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlRWRpdERlZ3JlZVByb2dyYW0gPSAoKSA9PiB1c2VDb250ZXh0KERlZ3JlZVByb2dyYW1FZGl0Rm9ybUNvbnRleHQpO1xuXG5leHBvcnQgZGVmYXVsdCBEZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcjtcbiIsImltcG9ydCBSZWFjdCwge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgUmVhY3ROb2RlLFxuICAgIHVzZUNhbGxiYWNrLFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHN0b3JlIGFzIGNvcmVTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IHNlbGVjdCwgc3Vic2NyaWJlLCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IHN0b3JlIGFzIGVkaXRvclN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuXG5pbXBvcnQgeyB0cmFuc2Zvcm1FcnJvck1lc3NhZ2UgfSBmcm9tICd1dGlsL2Vycm9yVHJhbnNmb3Jtcyc7XG5pbXBvcnQgc2VydmVyRGF0YSBmcm9tICd1dGlsL3NlcnZlckRhdGEnO1xuXG5pbXBvcnQge1xuICAgIERlZ3JlZVByb2dyYW1EYXRhUGF0aHMsXG4gICAgRWRpdG9yU3RvcmVTZWxlY3RvcnMsXG4gICAgRm9ybVZhbGlkYXRpb25FcnJvcixcbiAgICBGb3JtVmFsaWRhdGlvbkVycm9ycyxcbiAgICBNYXBTZWxlY3QsXG59IGZyb20gJ2RlZnMnO1xuXG5pbnRlcmZhY2UgQ29udGV4dFZhbHVlIHtcbiAgICBlcnJvcnM6IEZvcm1WYWxpZGF0aW9uRXJyb3JzO1xuICAgIGdldEZpZWxkRXJyb3JzOiAoZmllbGRJZDogRGVncmVlUHJvZ3JhbURhdGFQYXRocykgPT4gRm9ybVZhbGlkYXRpb25FcnJvcnM7XG4gICAgcmVtb3ZlRXJyb3IoZmllbGRJZDogRGVncmVlUHJvZ3JhbURhdGFQYXRocyk6IHZvaWQ7XG4gICAgZmllbGRIYXNFcnJvcnMoZmllbGRJZDogRGVncmVlUHJvZ3JhbURhdGFQYXRocyk6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBTZXJ2ZXJFcnJvciA9IHtcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgZGF0YToge1xuICAgICAgICBwYXJhbXM6IFJlY29yZDxEZWdyZWVQcm9ncmFtRGF0YVBhdGhzLCB7IG1lc3NhZ2U6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+O1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgRGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWU+KHt9IGFzIENvbnRleHRWYWx1ZSk7XG5cbmNvbnN0IHRyYW5zZm9ybVNlcnZlckVycm9yID0gKHNlcnZlckVycm9yOiBTZXJ2ZXJFcnJvcik6IEZvcm1WYWxpZGF0aW9uRXJyb3JzID0+IHtcbiAgICBjb25zdCBlcnJvcnM6IEZvcm1WYWxpZGF0aW9uRXJyb3JzID0gbmV3IE1hcCgpO1xuXG4gICAgaWYgKHNlcnZlckVycm9yLmNvZGUgIT09ICdyZXN0X2ludmFsaWRfcGFyYW0nKSB7XG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JEZXRhaWxzOlxuICAgICAgICB8IFJlY29yZDxEZWdyZWVQcm9ncmFtRGF0YVBhdGhzLCB7IG1lc3NhZ2U6IHN0cmluZzsgY29kZTogc3RyaW5nIH0+XG4gICAgICAgIHwgdW5kZWZpbmVkID0gc2VydmVyRXJyb3IuZGF0YT8ucGFyYW1zO1xuXG4gICAgaWYgKHR5cGVvZiBlcnJvckRldGFpbHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfVxuXG4gICAgT2JqZWN0LmVudHJpZXMoZXJyb3JEZXRhaWxzKS5mb3JFYWNoKChkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3I6IEZvcm1WYWxpZGF0aW9uRXJyb3IgPSB7XG4gICAgICAgICAgICBlcnJvckNvZGU6IGRldGFpbFsxXS5jb2RlIHx8ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogZGV0YWlsWzFdLm1lc3NhZ2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgZXJyb3JzLnNldChkZXRhaWxbMF0gYXMgRGVncmVlUHJvZ3JhbURhdGFQYXRocywge1xuICAgICAgICAgICAgLi4uZXJyb3IsXG4gICAgICAgICAgICBtZXNzYWdlOiB0cmFuc2Zvcm1FcnJvck1lc3NhZ2UoZGV0YWlsWzBdIGFzIERlZ3JlZVByb2dyYW1EYXRhUGF0aHMsIGVycm9yKSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXJyb3JzO1xufTtcblxuY29uc3QgRGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlPEZvcm1WYWxpZGF0aW9uRXJyb3JzPihuZXcgTWFwKCkpO1xuICAgIGNvbnN0IFtpc1NhdmluZywgc2V0SXNTYXZpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IHBvc3RJZCA9IHVzZVNlbGVjdDxNYXBTZWxlY3Q8RWRpdG9yU3RvcmVTZWxlY3RvcnM+Pigoc2VsZWN0Q2IpID0+IHtcbiAgICAgICAgY29uc3QgeyBnZXRDdXJyZW50UG9zdElkIH0gPSBzZWxlY3RDYihlZGl0b3JTdG9yZSk7XG5cbiAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRQb3N0SWQoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB7IGVkaXRQb3N0IH0gPSB1c2VEaXNwYXRjaChlZGl0b3JTdG9yZSk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYW4gYXJyYXkgb2YgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCBhIGZpZWxkXG4gICAgICogRm9yIGV4YW1wbGUgSWYgeW91IHBhc3MgYHRpdGxlYCB5b3UnbGwgYWxzbyBnZXQgZXJyb3JzXG4gICAgICogd2l0aCBgdGl0bGUuZW5gIGFuZCBgdGl0bGUuZGVgIGFuZCBhbnkgb3RoZXIgc3ViZmllbGQgZXJyb3JcbiAgICAgKi9cbiAgICBjb25zdCBnZXRGaWVsZEVycm9ycyA9IChmaWVsZElkOiBEZWdyZWVQcm9ncmFtRGF0YVBhdGhzKTogRm9ybVZhbGlkYXRpb25FcnJvcnMgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IE1hcChcbiAgICAgICAgICAgIEFycmF5LmZyb20oZXJyb3JzKS5maWx0ZXIoKFtrZXldKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNPblNhbWVSb290RmllbGROYW1lID0ga2V5LnNwbGl0KCcuJylbMF0gPT09IGZpZWxkSWQuc3BsaXQoJy4nKVswXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBpc09uU2FtZVJvb3RGaWVsZE5hbWUgJiYga2V5LnN1YnN0cmluZygwLCBmaWVsZElkLmxlbmd0aCkgPT09IGZpZWxkSWQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmllbGRIYXNFcnJvcnMgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGZpZWxkSWQ6IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkRXJyb3JzID0gZ2V0RmllbGRFcnJvcnMoZmllbGRJZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWVsZEVycm9ycy5zaXplID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgW2dldEZpZWxkRXJyb3JzXSxcbiAgICApO1xuXG4gICAgY29uc3QgcmVtb3ZlRXJyb3IgPSAoZmllbGRJZDogRGVncmVlUHJvZ3JhbURhdGFQYXRocykgPT4ge1xuICAgICAgICBzZXRFcnJvcnMoKHByZXZFcnJvcnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Vycm9ycyA9IG5ldyBNYXAocHJldkVycm9ycyk7XG4gICAgICAgICAgICBuZXdFcnJvcnMuZGVsZXRlKGZpZWxkSWQpO1xuICAgICAgICAgICAgbmV3RXJyb3JzLmRlbGV0ZShgJHtmaWVsZElkfS5pZGAgYXMgRGVncmVlUHJvZ3JhbURhdGFQYXRocyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3RXJyb3JzO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpc1NhdmluZ1Bvc3QsIGlzQXV0b3NhdmluZ1Bvc3QgfSA9IHNlbGVjdChlZGl0b3JTdG9yZSk7XG4gICAgICAgIHNldElzU2F2aW5nKGlzU2F2aW5nUG9zdCgpICYmICFpc0F1dG9zYXZpbmdQb3N0KCkpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHNlcnZlciBlcnJvcnMgd2hlbiBwb3N0IGlzIHNhdmVkLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc1NhdmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwb3N0SWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlcnZlckVycm9ycyA9IHNlbGVjdChjb3JlU3RvcmUpLmdldExhc3RFbnRpdHlTYXZlRXJyb3IoXG4gICAgICAgICAgICAncG9zdFR5cGUnLFxuICAgICAgICAgICAgc2VydmVyRGF0YSgpLnBvc3RUeXBlLFxuICAgICAgICAgICAgcG9zdElkLFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghc2VydmVyRXJyb3JzKSB7XG4gICAgICAgICAgICBzZXRFcnJvcnMobmV3IE1hcCgpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgaW5jb25zaXN0ZW50IGJsb2NrIGVkaXRvciBiZWhhdmlvci5cbiAgICAgICAgICogVGhlIFwiUHVibGlzaFwiIGJ1dHRvbiBjaGFuZ2VzIHRoZSBwb3N0IHN0YXR1cywgd2hpbGUgdGhlIFwiU2F2ZSBkcmFmdFwiIGJ1dHRvbiBkb2Vzbid0LlxuICAgICAgICAgKiBCdXQgaWYgeW91IHRyaWVkIHRvIHB1Ymxpc2ggdGhlIHBvc3QgYW5kIGdvdCBhbiBlcnJvcixcbiAgICAgICAgICogYW5kIHRoZW4gY2xpY2sgXCJTYXZlIGRyYWZ0XCIsIHRoZSBwb3N0IGlzIHB1Ymxpc2hlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvYmxvYi9mZWRmNDI2ZThiZjZmMzJjYTZlZjBiNjBjZjI2ZWNjODFmOTE3ZTAzL3BhY2thZ2VzL2VkaXRvci9zcmMvY29tcG9uZW50cy9wb3N0LXB1Ymxpc2gtYnV0dG9uL2luZGV4LmpzI0wyNTZcbiAgICAgICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvYmxvYi9mZWRmNDI2ZThiZjZmMzJjYTZlZjBiNjBjZjI2ZWNjODFmOTE3ZTAzL3BhY2thZ2VzL2VkaXRvci9zcmMvY29tcG9uZW50cy9wb3N0LXNhdmVkLXN0YXRlL2luZGV4LmpzI0wxNTNcbiAgICAgICAgICovXG4gICAgICAgIGVkaXRQb3N0KHsgc3RhdHVzOiAnZHJhZnQnIH0sIHsgdW5kb0lnbm9yZTogdHJ1ZSB9KTtcblxuICAgICAgICBzZXRFcnJvcnMobmV3IE1hcChbLi4udHJhbnNmb3JtU2VydmVyRXJyb3Ioc2VydmVyRXJyb3JzKV0pKTtcbiAgICB9LCBbaXNTYXZpbmcsIHBvc3RJZF0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxEZWdyZWVQcm9ncmFtVmFsaWRhdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7IGVycm9ycywgZ2V0RmllbGRFcnJvcnMsIHJlbW92ZUVycm9yLCBmaWVsZEhhc0Vycm9ycyB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVmFsaWRhdGlvbiA9ICgpID0+IHVzZUNvbnRleHQoRGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Db250ZXh0KTtcblxuZXhwb3J0IGRlZmF1bHQgRGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Qcm92aWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBEZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlciBmcm9tICcuL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyJztcbmltcG9ydCBEZWdyZWVQcm9ncmFtVmFsaWRhdGlvblByb3ZpZGVyIGZyb20gJy4vRGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Qcm92aWRlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuY29uc3QgUHJvdmlkZXJzID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Qcm92aWRlcj5cbiAgICAgICAgICAgIDxEZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcj57Y2hpbGRyZW59PC9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcj5cbiAgICAgICAgPC9EZWdyZWVQcm9ncmFtVmFsaWRhdGlvblByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlcnM7XG4iLCJleHBvcnQgKiBmcm9tICcuL2RlZnMvY29tbW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZGVmcy9jb3JlLWRhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZzL2RlZ3JlZS1wcm9ncmFtLWRhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZzL2VudGl0eS1zZWxlY3Rvcic7XG5leHBvcnQgKiBmcm9tICcuL2RlZnMvZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vZGVmcy9nZW5lcmljJztcbmV4cG9ydCAqIGZyb20gJy4vZGVmcy9zZXJ2ZXItZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RlZnMvdGVybSc7XG4iLCJpbXBvcnQgeyBQb3N0IH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuXG5pbXBvcnQgeyBPYmplY3RWYWx1ZXMsIFBhdGhzIH0gZnJvbSAnLi9nZW5lcmljJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWdyZWVQcm9ncmFtRGF0YSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBmZWF0dXJlZF9pbWFnZTogSW1hZ2U7XG4gICAgdGVhc2VyX2ltYWdlOiBJbWFnZTtcbiAgICB0aXRsZTogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIHN1YnRpdGxlOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgc3RhbmRhcmRfZHVyYXRpb246IHN0cmluZztcbiAgICBmZWVfcmVxdWlyZWQ6IGJvb2xlYW47XG4gICAgc3RhcnQ6IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgbnVtYmVyX29mX3N0dWRlbnRzOiB7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgfTtcbiAgICB0ZWFjaGluZ19sYW5ndWFnZTogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGF0dHJpYnV0ZXM6IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgZGVncmVlOiBEZWdyZWU7XG4gICAgZmFjdWx0eTogQXJyYXk8TXVsdGlsaW5ndWFsTGluaz47XG4gICAgbG9jYXRpb246IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgc3ViamVjdF9ncm91cHM6IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgdmlkZW9zOiBzdHJpbmdbXTtcbiAgICBtZXRhX2Rlc2NyaXB0aW9uOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgY29udGVudDoge1xuICAgICAgICBhYm91dDogQ29udGVudEl0ZW07XG4gICAgICAgIHN0cnVjdHVyZTogQ29udGVudEl0ZW07XG4gICAgICAgIHNwZWNpYWxpemF0aW9uczogQ29udGVudEl0ZW07XG4gICAgICAgIHF1YWxpdGllc19hbmRfc2tpbGxzOiBDb250ZW50SXRlbTtcbiAgICAgICAgd2h5X3Nob3VsZF9zdHVkeTogQ29udGVudEl0ZW07XG4gICAgICAgIGNhcmVlcl9wcm9zcGVjdHM6IENvbnRlbnRJdGVtO1xuICAgICAgICBzcGVjaWFsX2ZlYXR1cmVzOiBDb250ZW50SXRlbTtcbiAgICAgICAgdGVzdGltb25pYWxzOiBDb250ZW50SXRlbTtcbiAgICB9O1xuICAgIGFkbWlzc2lvbl9yZXF1aXJlbWVudHM6IHtcbiAgICAgICAgYmFjaGVsb3Jfb3JfdGVhY2hpbmdfZGVncmVlOiBBZG1pc3Npb25SZXF1aXJlbWVudDtcbiAgICAgICAgdGVhY2hpbmdfZGVncmVlX2hpZ2hlcl9zZW1lc3RlcjogQWRtaXNzaW9uUmVxdWlyZW1lbnQ7XG4gICAgICAgIG1hc3RlcjogQWRtaXNzaW9uUmVxdWlyZW1lbnQ7XG4gICAgfTtcbiAgICBjb250ZW50X3JlbGF0ZWRfbWFzdGVyX3JlcXVpcmVtZW50czogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uX2RlYWRsaW5lX3dpbnRlcl9zZW1lc3Rlcjogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uX2RlYWRsaW5lX3N1bW1lcl9zZW1lc3Rlcjogc3RyaW5nO1xuICAgIGRldGFpbHNfYW5kX25vdGVzOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgbGFuZ3VhZ2Vfc2tpbGxzOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgbGFuZ3VhZ2Vfc2tpbGxzX2h1bWFuaXRpZXNfZmFjdWx0eTogc3RyaW5nO1xuICAgIGdlcm1hbl9sYW5ndWFnZV9za2lsbHNfZm9yX2ludGVybmF0aW9uYWxfc3R1ZGVudHM6IE11bHRpbGluZ3VhbExpbms7XG4gICAgcmVhZG9ubHkgc3RhcnRfb2Zfc2VtZXN0ZXI6IE11bHRpbGluZ3VhbExpbms7XG4gICAgcmVhZG9ubHkgc2VtZXN0ZXJfZGF0ZXM6IE11bHRpbGluZ3VhbExpbms7XG4gICAgZXhhbWluYXRpb25zX29mZmljZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICBleGFtaW5hdGlvbl9yZWd1bGF0aW9uczogc3RyaW5nO1xuICAgIG1vZHVsZV9oYW5kYm9vazogc3RyaW5nO1xuICAgIHVybDogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIHJlYWRvbmx5IGRlcGFydG1lbnQ6IE11bHRpbGluZ3VhbFN0cmluZztcbiAgICByZWFkb25seSBzdHVkZW50X2FkdmljZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICBzdWJqZWN0X3NwZWNpZmljX2FkdmljZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICByZWFkb25seSBzZXJ2aWNlX2NlbnRlcnM6IE11bHRpbGluZ3VhbExpbms7XG4gICAgaW5mb19icm9jaHVyZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlbWVzdGVyX2ZlZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICBkZWdyZWVfcHJvZ3JhbV9mZWVzOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgcmVhZG9ubHkgYWJyb2FkX29wcG9ydHVuaXRpZXM6IE11bHRpbGluZ3VhbExpbms7XG4gICAga2V5d29yZHM6IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgYXJlYV9vZl9zdHVkeTogQXJyYXk8TXVsdGlsaW5ndWFsTGluaz47XG4gICAgY29tYmluYXRpb25zOiBBcnJheTxudW1iZXI+O1xuICAgIGxpbWl0ZWRfY29tYmluYXRpb25zOiBBcnJheTxudW1iZXI+O1xuICAgIG5vdGVzX2Zvcl9pbnRlcm5hdGlvbmFsX2FwcGxpY2FudHM6IE11bHRpbGluZ3VhbExpbms7XG4gICAgc3R1ZGVudF9pbml0aWF0aXZlczogTXVsdGlsaW5ndWFsTGluaztcbiAgICBhcHBseV9ub3dfbGluazogTXVsdGlsaW5ndWFsTGluaztcbiAgICBlbnRyeV90ZXh0OiBNdWx0aWxpbmd1YWxTdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUdSRUVfQUJCUkVWSUFUSU9OX0dFUk1BTiA9IHtcbiAgICBCQUNIRUxPUjogJ0JBJyxcbiAgICBNQVNURVJTOiAnTUEnLFxuICAgIFRFQUNISU5HX0RFR1JFRTogJ0xBJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIERlZ3JlZUFiYnJldmlhdGlvbkdlcm1hbiA9IE9iamVjdFZhbHVlczx0eXBlb2YgREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4+IHwgJyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVncmVlUHJvZ3JhbUFiYnJldmlhdGlvbiBleHRlbmRzIE11bHRpbGluZ3VhbFN0cmluZyB7XG4gICAgZW46IHN0cmluZztcbiAgICBkZTogRGVncmVlQWJicmV2aWF0aW9uR2VybWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZ3JlZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgYWJicmV2aWF0aW9uOiBEZWdyZWVQcm9ncmFtQWJicmV2aWF0aW9uO1xuICAgIHBhcmVudDogRGVncmVlIHwgbnVsbDtcbn1cblxuZXhwb3J0IHR5cGUgSW1hZ2UgPSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB1cmw6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIE11bHRpbGluZ3VhbFN0cmluZyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRlOiBzdHJpbmc7XG4gICAgZW46IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIE11bHRpbGluZ3VhbExpbmsgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgbGlua190ZXh0OiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgbGlua191cmw6IE11bHRpbGluZ3VhbFN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENvbnRlbnRJdGVtID0ge1xuICAgIHJlYWRvbmx5IHRpdGxlOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IE11bHRpbGluZ3VhbFN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIERlZ3JlZVByb2dyYW1EYXRhUGF0aHMgPSBQYXRoczxEZWdyZWVQcm9ncmFtRGF0YSwgMz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVncmVlUHJvZ3JhbVBvc3QgZXh0ZW5kcyBQb3N0IHtcbiAgICBkZWdyZWVfcHJvZ3JhbTogRGVncmVlUHJvZ3JhbURhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRtaXNzaW9uUmVxdWlyZW1lbnQgZXh0ZW5kcyBNdWx0aWxpbmd1YWxMaW5rIHtcbiAgICBwYXJlbnQ6IEFkbWlzc2lvblJlcXVpcmVtZW50IHwgbnVsbDtcbn1cbiIsImV4cG9ydCBjb25zdCBGQUNVTFRZX1BISUxPU09QSFkgPSAncGhpbCc7XG5leHBvcnQgY29uc3QgRkFDVUxUWV9OQVRVUkFMX1NDSUVOQ0VTID0gJ25hdCc7XG5leHBvcnQgY29uc3QgU0VNRVNURVJfU1VNTUVSID0gJ1NvbW1lcnNlbWVzdGVyJztcbmV4cG9ydCBjb25zdCBTRU1FU1RFUl9XSU5URVIgPSAnV2ludGVyc2VtZXN0ZXInO1xuZXhwb3J0IGNvbnN0IEFETUlTU0lPTl9SRVFVSVJFTUVOVF9GUkVFID0gJ2ZyZWknO1xuZXhwb3J0IGNvbnN0IEFERElUSU9OQUxfREVHUkVFX05BTUUgPSAnV2VpdGVyZXMnO1xuIiwiaW1wb3J0IHsgdXNlRmFjdWx0eVRlcm1zIH0gZnJvbSAnaG9va3MvdXNlVGF4b25vbXlUZXJtJztcblxuaW1wb3J0IHtcbiAgICBBRERJVElPTkFMX0RFR1JFRV9OQU1FLFxuICAgIEFETUlTU0lPTl9SRVFVSVJFTUVOVF9GUkVFLFxuICAgIEZBQ1VMVFlfTkFUVVJBTF9TQ0lFTkNFUyxcbiAgICBGQUNVTFRZX1BISUxPU09QSFksXG4gICAgU0VNRVNURVJfU1VNTUVSLFxuICAgIFNFTUVTVEVSX1dJTlRFUixcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eSBmcm9tICcuL3VzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eSc7XG5cbmltcG9ydCB7IEFkbWlzc2lvblJlcXVpcmVtZW50LCBEZWdyZWUsIERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOLCBNdWx0aWxpbmd1YWxTdHJpbmcgfSBmcm9tICdkZWZzJztcblxuY29uc3QgQUxMT1dFRF9GQUNVTFRZX1NMVUdTX0ZPUl9DT01CSU5BVElPTiA9IFtGQUNVTFRZX1BISUxPU09QSFksIEZBQ1VMVFlfTkFUVVJBTF9TQ0lFTkNFU107XG5cbmZ1bmN0aW9uIGlzQmFjaGVsb3JDb250ZXh0KGRlZ3JlZTogRGVncmVlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGFyZW50RGVncmVlID0gZGVncmVlLnBhcmVudD8uYWJicmV2aWF0aW9uPy5kZSA/PyAnJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIGRlZ3JlZS5hYmJyZXZpYXRpb24uZGUgPT09IERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOLkJBQ0hFTE9SIHx8XG4gICAgICAgIHBhcmVudERlZ3JlZSA9PT0gREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4uQkFDSEVMT1IgfHxcbiAgICAgICAgZGVncmVlLm5hbWUuZGUgPT09IEFERElUSU9OQUxfREVHUkVFX05BTUVcbiAgICApO1xufVxuXG5mdW5jdGlvbiBpc1RlYWNoaW5nRGVncmVlQ29udGV4dChkZWdyZWU6IERlZ3JlZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHBhcmVudERlZ3JlZSA9IGRlZ3JlZS5wYXJlbnQ/LmFiYnJldmlhdGlvbj8uZGUgPz8gJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBkZWdyZWUuYWJicmV2aWF0aW9uLmRlID09PSBERUdSRUVfQUJCUkVWSUFUSU9OX0dFUk1BTi5URUFDSElOR19ERUdSRUUgfHxcbiAgICAgICAgcGFyZW50RGVncmVlID09PSBERUdSRUVfQUJCUkVWSUFUSU9OX0dFUk1BTi5URUFDSElOR19ERUdSRUVcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVncmVlRmVlc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgW2ZlZVJlcXVpcmVkXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxib29sZWFuPignZmVlX3JlcXVpcmVkJyk7XG5cbiAgICByZXR1cm4gISFmZWVSZXF1aXJlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbWJpbmF0aW9uT2ZEZWdyZWVQcm9ncmFtRW5hYmxlZCgpIHtcbiAgICBjb25zdCBmYWN1bHR5VGVybXMgPSB1c2VGYWN1bHR5VGVybXMoKTtcbiAgICBjb25zdCBbZGVncmVlXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxEZWdyZWU+KCdkZWdyZWUnKTtcblxuICAgIGlmICghZmFjdWx0eVRlcm1zLmxlbmd0aCB8fCAhZGVncmVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAhIWZhY3VsdHlUZXJtcy5maW5kKChmYWN1bHR5SXRlbSkgPT5cbiAgICAgICAgICAgIEFMTE9XRURfRkFDVUxUWV9TTFVHU19GT1JfQ09NQklOQVRJT04uaW5jbHVkZXMoZmFjdWx0eUl0ZW0uc2x1ZyksXG4gICAgICAgICkgJiYgaXNCYWNoZWxvckNvbnRleHQoZGVncmVlKVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBZG1pc3Npb25SZXF1aXJlbWVudHNGb3JCYWNoZWxvckFuZFRlYWNoaW5nRGVncmVlc0VuYWJsZSgpIHtcbiAgICBjb25zdCBbZGVncmVlXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxEZWdyZWU+KCdkZWdyZWUnKTtcblxuICAgIGlmICghZGVncmVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNCYWNoZWxvckNvbnRleHQoZGVncmVlKSB8fCBpc1RlYWNoaW5nRGVncmVlQ29udGV4dChkZWdyZWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzVGVhY2hpbmdEZWdyZWVBdEhpZ2hlclNlbWVzdGVyRW5hYmxlZCgpIHtcbiAgICBjb25zdCBlbmFibGVkID0gdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yQmFjaGVsb3JBbmRUZWFjaGluZ0RlZ3JlZXNFbmFibGUoKTtcbiAgICBjb25zdCBbYmFjaGVsb3JPclRlYWNoaW5nQWRtaXNzaW9uUmVxdWlyZW1lbnRdID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PEFkbWlzc2lvblJlcXVpcmVtZW50PihcbiAgICAgICAgJ2FkbWlzc2lvbl9yZXF1aXJlbWVudHMuYmFjaGVsb3Jfb3JfdGVhY2hpbmdfZGVncmVlJyxcbiAgICApO1xuXG4gICAgaWYgKCFiYWNoZWxvck9yVGVhY2hpbmdBZG1pc3Npb25SZXF1aXJlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgZW5hYmxlZCAmJlxuICAgICAgICBiYWNoZWxvck9yVGVhY2hpbmdBZG1pc3Npb25SZXF1aXJlbWVudC5uYW1lLmRlICE9PSBBRE1JU1NJT05fUkVRVUlSRU1FTlRfRlJFRSAmJlxuICAgICAgICBiYWNoZWxvck9yVGVhY2hpbmdBZG1pc3Npb25SZXF1aXJlbWVudD8ucGFyZW50Py5uYW1lPy5kZSAhPT0gQURNSVNTSU9OX1JFUVVJUkVNRU5UX0ZSRUVcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yTWFzdGVyc0RlZ3JlZSgpIHtcbiAgICBjb25zdCBbZGVncmVlXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxEZWdyZWU+KCdkZWdyZWUnKTtcblxuICAgIGlmICghZGVncmVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBkZWdyZWUuYWJicmV2aWF0aW9uLmRlID09PSBERUdSRUVfQUJCUkVWSUFUSU9OX0dFUk1BTi5NQVNURVJTIHx8XG4gICAgICAgIGRlZ3JlZT8ucGFyZW50Py5hYmJyZXZpYXRpb24/LmRlID09PSBERUdSRUVfQUJCUkVWSUFUSU9OX0dFUk1BTi5NQVNURVJTXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlU2tpbGxzRm9yRmFjdWx0eU9mSHVtYW5pdGllc09ubHlFbmFibGVkKCkge1xuICAgIGNvbnN0IFtkZWdyZWVdID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PERlZ3JlZT4oJ2RlZ3JlZScpO1xuICAgIGNvbnN0IGZhY3VsdHlUZXJtcyA9IHVzZUZhY3VsdHlUZXJtcygpO1xuXG4gICAgaWYgKCFkZWdyZWUgfHwgIWZhY3VsdHlUZXJtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIChpc0JhY2hlbG9yQ29udGV4dChkZWdyZWUpIHx8IGlzVGVhY2hpbmdEZWdyZWVDb250ZXh0KGRlZ3JlZSkpICYmXG4gICAgICAgICEhZmFjdWx0eVRlcm1zLmZpbmQoKGZhY3VsdHlJdGVtKSA9PiBmYWN1bHR5SXRlbS5zbHVnID09PSBGQUNVTFRZX1BISUxPU09QSFkpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gdXNlU2VtZXN0ZXJzQ29udGFpbihuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBbc2VtZXN0ZXJzXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxNdWx0aWxpbmd1YWxTdHJpbmdbXT4oJ3N0YXJ0Jyk7XG5cbiAgICBpZiAoIXNlbWVzdGVycykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhc2VtZXN0ZXJzLmZpbmQoKHNlbWVzdGVyKSA9PiBzZW1lc3Rlci5kZSA9PT0gbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBsaWNhdGlvbkRlYWRsaW5lU3VtbWVyU2VtZXN0ZXJFbmFibGVkKCkge1xuICAgIHJldHVybiB1c2VTZW1lc3RlcnNDb250YWluKFNFTUVTVEVSX1NVTU1FUik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBsaWNhdGlvbkRlYWRsaW5lV2ludGVyU2VtZXN0ZXJFbmFibGVkKCkge1xuICAgIHJldHVybiB1c2VTZW1lc3RlcnNDb250YWluKFNFTUVTVEVSX1dJTlRFUik7XG59XG4iLCJpbXBvcnQgcHJvZHVjZSwgeyBJbW11dGFibGUgfSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHVzZUVudGl0eVByb3AgfSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YSc7XG5cbmltcG9ydCB7IHVzZVZhbGlkYXRpb24gfSBmcm9tICdjb250ZXh0cy9EZWdyZWVQcm9ncmFtVmFsaWRhdGlvblByb3ZpZGVyJztcbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBIb29rIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYW5kIGEgc2V0dGVyIGZvciB0aGVcbiAqIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY3VycmVudCBEZWdyZWVQcm9ncmFtRGF0YS5cbiAqIFNob3VsZCBiZSB1c2VkIG9ubHkgZm9yIHNpbmdsZSBEZWdyZWVQcm9ncmFtIGVkaXQgc2NyZWVuLlxuICpcbiAqIFRvIG1ha2UgaW1tdXRhYmxlIGNoYW5nZXMgZWFzeSwgSW1tZXIgbGlicmFyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSBwYXRoIFBhdGggdG8gRGVncmVlUHJvZ3JhbURhdGEgdmFsdWUuXG4gKiBAdHlwZVBhcmFtIFZhbHVlIERlZmluaXRpb24gb2YgcmV0dXJuZWQgRGVncmVlUHJvZ3JhbURhdGEgcHJvcGVydHkuXG4gKiBAcmV0dXJucyBBbiBhcnJheSB3aGVyZSB0aGUgZmlyc3QgaXRlbSBpcyB0aGUgcHJvcGVydHkgdmFsdWUsIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSBzZXR0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICogZnVuY3Rpb24gTXVsdGlsaW5ndWFsSW5wdXQoKSB7XG4gKiAgICAgY29uc3QgW2VuZ2xpc2hUaXRsZSwgc2V0RW5nbGlzaFRpdGxlXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxNdWx0aWxpbmd1YWxTdHJpbmc+KCd0aXRsZS5lbicpO1xuICogICAgIHJldHVybiA8SW5wdXQgZGVzY3JpcHRpb249XCJFbmdsaXNoIHRpdGxlXCJcbiAqICAgICAgICAgICAgdmFsdWU9e2VuZ2xpc2hUaXRsZX1cbiAqICAgICAgICAgICAgb25DbGljaz17c2V0RW5nbGlzaFRpdGxlfSAvPlxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxWYWx1ZT4oXG4gICAgcGF0aDogRGVncmVlUHJvZ3JhbURhdGFQYXRocyxcbik6IFtJbW11dGFibGU8dW5kZWZpbmVkIHwgVmFsdWU+LCAodmFsdWU6IFZhbHVlKSA9PiB2b2lkXSB7XG4gICAgY29uc3QgW2RlZ3JlZVByb2dyYW1EYXRhLCBzZXREZWdyZWVQcm9ncmFtRGF0YV0gPSB1c2VFbnRpdHlQcm9wKFxuICAgICAgICAncG9zdFR5cGUnLFxuICAgICAgICBzZXJ2ZXJEYXRhKCkucG9zdFR5cGUsXG4gICAgICAgIHNlcnZlckRhdGEoKS5wcm9wZXJ0eU5hbWUsXG4gICAgKTtcbiAgICBjb25zdCB7IHJlbW92ZUVycm9yIH0gPSB1c2VWYWxpZGF0aW9uKCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBnZXQoZGVncmVlUHJvZ3JhbURhdGEsIHBhdGgpLFxuICAgICAgICAodmFsOiBWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRXJyb3IocGF0aCk7XG4gICAgICAgICAgICBzZXREZWdyZWVQcm9ncmFtRGF0YShcbiAgICAgICAgICAgICAgICBwcm9kdWNlPFZhbHVlPihkZWdyZWVQcm9ncmFtRGF0YSwgKGRyYWZ0KSA9PiBzZXQoZHJhZnQsIHBhdGgsIHZhbCkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICBdO1xufVxuIiwiaW1wb3J0IHsgdXNlRW50aXR5UmVjb3JkLCB1c2VFbnRpdHlSZWNvcmRzIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuXG5pbXBvcnQgeyBlbnRpdHlJZCB9IGZyb20gJ3V0aWwvaWRIZWxwZXJzJztcbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHkgZnJvbSAnLi91c2VEZWdyZWVQcm9ncmFtUHJvcGVydHknO1xuXG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxMaW5rLCBUYXhvbm9teVNsdWcsIFdwVGVybSB9IGZyb20gJ2RlZnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUYXhvbm9teVRlcm0oaWQ6IHN0cmluZywgdGF4b25vbXk6IFRheG9ub215U2x1Zyk6IFdwVGVybSB8IG51bGwge1xuICAgIGNvbnN0IHRlcm1JZCA9IGVudGl0eUlkKGlkKTtcbiAgICBjb25zdCB7IHJlY29yZCwgaXNSZXNvbHZpbmcgfSA9IHVzZUVudGl0eVJlY29yZCgndGF4b25vbXknLCB0YXhvbm9teSwgdGVybUlkKTtcblxuICAgIGlmIChpc1Jlc29sdmluZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjb3JkIGFzIFdwVGVybTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRheG9ub215VGVybXMoaWRzOiBzdHJpbmdbXSwgdGF4b25vbXk6IFRheG9ub215U2x1Zyk6IFdwVGVybVtdIHtcbiAgICBjb25zdCB0ZXJtSWRzID0gaWRzLm1hcCgoaWQpID0+IGVudGl0eUlkKGlkKSk7XG4gICAgY29uc3QgeyByZWNvcmRzLCBpc1Jlc29sdmluZyB9ID0gdXNlRW50aXR5UmVjb3JkcygndGF4b25vbXknLCB0YXhvbm9teSwge1xuICAgICAgICBpbmNsdWRlOiB0ZXJtSWRzLFxuICAgICAgICBwZXJfcGFnZTogLTEsXG4gICAgfSk7XG5cbiAgICBpZiAoIXRlcm1JZHMubGVuZ3RoIHx8ICFyZWNvcmRzIHx8IGlzUmVzb2x2aW5nKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjb3JkcyBhcyBXcFRlcm1bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZhY3VsdHlUZXJtcygpOiBXcFRlcm1bXSB7XG4gICAgY29uc3QgW2ZhY3VsdHldID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PE11bHRpbGluZ3VhbExpbmtbXT4oJ2ZhY3VsdHknKTtcbiAgICBjb25zdCBmYWN1bHR5VGVybXMgPSB1c2VUYXhvbm9teVRlcm1zKFxuICAgICAgICBmYWN1bHR5Py5tYXAoKGZhY3VsdHlJdGVtKSA9PiBmYWN1bHR5SXRlbS5pZCkgPz8gW10sXG4gICAgICAgIHNlcnZlckRhdGEoKS50YXhvbm9teVNsdWdzLmZhY3VsdHkgYXMgVGF4b25vbXlTbHVnLFxuICAgICk7XG5cbiAgICByZXR1cm4gZmFjdWx0eVRlcm1zO1xufVxuIiwiaW1wb3J0IHsgZW5hYmxlTWFwU2V0IH0gZnJvbSAnaW1tZXInO1xuXG5lbmFibGVNYXBTZXQoKTtcbiIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHtcbiAgICB0cmFuc2Zvcm1lZEVycm9yTWVzc2FnZXMsXG4gICAgdHJhbnNmb3JtZWRFcnJvck1lc3NhZ2VzQmFzZWRPbkVycm9yQ29kZSxcbn0gZnJvbSAnLi90cmFuc2Zvcm1lZEVycm9yTWVzc2FnZXMnO1xuXG5pbXBvcnQgeyBEZWdyZWVQcm9ncmFtRGF0YVBhdGhzLCBGb3JtVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnZGVmcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1CYXNlZE9uRXJyb3JDb2RlKFxuICAgIGZpZWxkSWQ6IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMsXG4gICAgZXJyb3I6IEZvcm1WYWxpZGF0aW9uRXJyb3IsXG4pOiBzdHJpbmcge1xuICAgIGxldCB7IGVycm9yQ29kZSB9ID0gZXJyb3I7XG5cbiAgICBpZiAoZmllbGRJZC5tYXRjaCgvXFwuZW4kL2kpKSB7XG4gICAgICAgIGVycm9yQ29kZSArPSAnX2VuJztcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JDb2RlID09PSAncmVzdF90b29fbWFueV9pdGVtcycpIHtcbiAgICAgICAgLy8gdmlkZW9zIG11c3QgY29udGFpbiBhdCBtb3N0IDMgaXRlbXMuIC0+IEZpZWxkIG11c3QgY29udGFpbiBhdCBtb3N0IDMgaXRlbXMuXG4gICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlLnJlcGxhY2UoZmllbGRJZCwgX18oJ0ZpZWxkJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRFcnJvck1lc3NhZ2VzQmFzZWRPbkVycm9yQ29kZVtlcnJvckNvZGVdID8/IGVycm9yLm1lc3NhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1FcnJvck1lc3NhZ2UoXG4gICAgZmllbGRJZDogRGVncmVlUHJvZ3JhbURhdGFQYXRocyxcbiAgICBlcnJvcjogRm9ybVZhbGlkYXRpb25FcnJvcixcbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkRXJyb3JNZXNzYWdlc1tmaWVsZElkXSA/PyB0cmFuc2Zvcm1CYXNlZE9uRXJyb3JDb2RlKGZpZWxkSWQsIGVycm9yKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUlkKFxuICAgIHR5cGU6ICd0ZXJtJyB8ICdvcHRpb24nIHwgJ3Bvc3RfbWV0YScgfCAncG9zdCcgfCAndGVybV9tZXRhJyxcbiAgICBpZDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHN1YkZpZWxkID0gJycsXG4pIHtcbiAgICBjb25zdCBwYXJ0cyA9IFt0eXBlLCBpZF07XG4gICAgaWYgKHN1YkZpZWxkKSB7XG4gICAgICAgIHBhcnRzLnB1c2goc3ViRmllbGQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHMuam9pbignOicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5SWQoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGlkLnNwbGl0KCc6JylbMV0gPz8gMCwgMTApO1xufVxuIiwiaW1wb3J0IHsgRGVncmVlUHJvZ3JhbUVkaXRvclNlcnZlckRhdGFUeXBlIH0gZnJvbSAnLi4vZGVmcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgRGVncmVlUHJvZ3JhbUVkaXRvclNlcnZlckRhdGE6IERlZ3JlZVByb2dyYW1FZGl0b3JTZXJ2ZXJEYXRhVHlwZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcnZlckRhdGEoKSB7XG4gICAgaWYgKHdpbmRvdy5EZWdyZWVQcm9ncmFtRWRpdG9yU2VydmVyRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIGRhdGEgY291bGQgbm90IGJlIGxvYWRlZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93LkRlZ3JlZVByb2dyYW1FZGl0b3JTZXJ2ZXJEYXRhIGFzIERlZ3JlZVByb2dyYW1FZGl0b3JTZXJ2ZXJEYXRhVHlwZTtcbn1cbiIsImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgRGVncmVlUHJvZ3JhbURhdGFQYXRocyB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCB0cmFuc2Zvcm1lZEVycm9yTWVzc2FnZXM6IFBhcnRpYWw8UmVjb3JkPERlZ3JlZVByb2dyYW1EYXRhUGF0aHMsIHN0cmluZz4+ID0ge1xuICAgICdmZWF0dXJlZF9pbWFnZS5pZCc6IF9fKCdQbGVhc2Ugc2VsZWN0IGEgZmVhdHVyZWQgaW1hZ2UuJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpLFxuICAgICd0ZWFzZXJfaW1hZ2UuaWQnOiBfXygnUGxlYXNlIHNlbGVjdCBhIHRlYXNlciBpbWFnZS4nLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyksXG59O1xuXG5jb25zdCB0cmFuc2Zvcm1lZEVycm9yTWVzc2FnZXNCYXNlZE9uRXJyb3JDb2RlOiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICAgIHJlc3RfdG9vX3Nob3J0OiBfXygnVGhpcyBmaWVsZCBjYW4gbm90IGJlIGVtcHR5LicsICdmYXUtZGVncmVlLXByb2dyYW0nKSxcbiAgICByZXN0X3Rvb19zaG9ydF9lbjogX18oJ0VuZ2xpc2ggdmFyaWFudCBvZiB0aGlzIGZpZWxkIGNhbiBub3QgYmUgZW1wdHkuJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpLFxuICAgIHJlc3RfdG9vX2Zld19pdGVtczogX18oJ1BsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIGl0ZW0uJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpLFxuICAgIHJlc3RfaW52YWxpZF9wYXR0ZXJuOiBfXygnRmllbGQgZG9lcyBub3QgbWF0Y2ggcGF0dGVybi4nLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyksXG59O1xuXG5leHBvcnQgeyB0cmFuc2Zvcm1lZEVycm9yTWVzc2FnZXMsIHRyYW5zZm9ybWVkRXJyb3JNZXNzYWdlc0Jhc2VkT25FcnJvckNvZGUgfTtcbiIsImltcG9ydCB7IHByb3BlcnR5SWQgfSBmcm9tICcuL2lkSGVscGVycyc7XG5cbmltcG9ydCB7XG4gICAgQWRtaXNzaW9uUmVxdWlyZW1lbnQsXG4gICAgRGVncmVlLFxuICAgIERlZ3JlZUFiYnJldmlhdGlvbkdlcm1hbixcbiAgICBNdWx0aWxpbmd1YWxMaW5rLFxuICAgIE11bHRpbGluZ3VhbFN0cmluZyxcbn0gZnJvbSAnZGVmcyc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxMaW5rTWV0YSwgV3BUZXJtIH0gZnJvbSAnZGVmcy90ZXJtJztcblxuY29uc3QgRU1QVFlfTVVMVElMSU5HVUFMX1NUUklORyA9IHtcbiAgICBpZDogJycsXG4gICAgZGU6ICcnIGFzIERlZ3JlZUFiYnJldmlhdGlvbkdlcm1hbixcbiAgICBlbjogJycsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsU3RyaW5nKFxuICAgIHRlcm06IFdwVGVybTx7IG5hbWVfZW46IHN0cmluZyB9PiB8IG51bGwsXG4pOiBNdWx0aWxpbmd1YWxTdHJpbmcge1xuICAgIHJldHVybiB0ZXJtXG4gICAgICAgID8ge1xuICAgICAgICAgICAgICBlbjogdGVybS5tZXRhLm5hbWVfZW4gPz8gJycsXG4gICAgICAgICAgICAgIGRlOiB0ZXJtLm5hbWUsXG4gICAgICAgICAgICAgIGlkOiBwcm9wZXJ0eUlkKCd0ZXJtJywgdGVybS5pZCwgJ25hbWUnKSxcbiAgICAgICAgICB9XG4gICAgICAgIDogeyAuLi5FTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rPFBhcmVudFR5cGUgPSBuZXZlcj4oXG4gICAgdGVybTogV3BUZXJtPE11bHRpbGluZ3VhbExpbmtNZXRhLCBQYXJlbnRUeXBlPiB8IG51bGwsXG4pOiBNdWx0aWxpbmd1YWxMaW5rIHtcbiAgICByZXR1cm4gdGVybVxuICAgICAgICA/IHtcbiAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCB0ZXJtLmlkKSxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCB0ZXJtLmlkLCAnbmFtZScpLFxuICAgICAgICAgICAgICAgICAgZGU6IHRlcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGVuOiB0ZXJtLm1ldGEubmFtZV9lbiA/PyAnJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGlua190ZXh0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybV9tZXRhJywgdGVybS5pZCwgJ2xpbmtfdGV4dCcpLFxuICAgICAgICAgICAgICAgICAgZGU6IHRlcm0ubWV0YS5saW5rX3RleHQgPz8gJycsXG4gICAgICAgICAgICAgICAgICBlbjogdGVybS5tZXRhLmxpbmtfdGV4dF9lbiA/PyAnJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGlua191cmw6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBwcm9wZXJ0eUlkKCd0ZXJtX21ldGEnLCB0ZXJtLmlkLCAnbGlua191cmwnKSxcbiAgICAgICAgICAgICAgICAgIGRlOiB0ZXJtLm1ldGEubGlua191cmwgPz8gJycsXG4gICAgICAgICAgICAgICAgICBlbjogdGVybS5tZXRhLmxpbmtfdXJsX2VuID8/ICcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICAgbmFtZTogeyAuLi5FTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIH0sXG4gICAgICAgICAgICAgIGxpbmtfdGV4dDogeyAuLi5FTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIH0sXG4gICAgICAgICAgICAgIGxpbmtfdXJsOiB7IC4uLkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkcgfSxcbiAgICAgICAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVGVybVRvRGVncmVlKFxuICAgIHRlcm06IFdwVGVybTxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZV9lbjogc3RyaW5nO1xuICAgICAgICAgICAgYWJicmV2aWF0aW9uOiBEZWdyZWVBYmJyZXZpYXRpb25HZXJtYW47XG4gICAgICAgICAgICBhYmJyZXZpYXRpb25fZW46IHN0cmluZztcbiAgICAgICAgfSxcbiAgICAgICAgRGVncmVlXG4gICAgPiB8IG51bGwsXG4pOiBEZWdyZWUge1xuICAgIHJldHVybiB0ZXJtXG4gICAgICAgID8ge1xuICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybScsIHRlcm0uaWQpLFxuICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBwcm9wZXJ0eUlkKCd0ZXJtX21ldGEnLCB0ZXJtLmlkLCAnYWJicmV2aWF0aW9uJyksXG4gICAgICAgICAgICAgICAgICBkZTogdGVybS5tZXRhLmFiYnJldmlhdGlvbiA/PyAnJyxcbiAgICAgICAgICAgICAgICAgIGVuOiB0ZXJtLm1ldGEuYWJicmV2aWF0aW9uX2VuID8/ICcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybScsIHRlcm0uaWQsICduYW1lJyksXG4gICAgICAgICAgICAgICAgICBkZTogdGVybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZW46IHRlcm0ubWV0YS5uYW1lX2VuID8/ICcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYXJlbnQ6IHRlcm0ucGFyZW50X29iamVjdCA/PyBudWxsLFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiB7IC4uLkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkcgfSxcbiAgICAgICAgICAgICAgbmFtZTogeyAuLi5FTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIH0sXG4gICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVGVybVRvQWRtaXNzaW9uUmVxdWlyZW1lbnQoXG4gICAgdGVybTogV3BUZXJtPE11bHRpbGluZ3VhbExpbmtNZXRhLCBBZG1pc3Npb25SZXF1aXJlbWVudD4gfCBudWxsLFxuKTogQWRtaXNzaW9uUmVxdWlyZW1lbnQge1xuICAgIGNvbnN0IGFkbWlzc2lvblJlcXVpcmVtZW50ID0gdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsTGluayh0ZXJtKSBhcyBBZG1pc3Npb25SZXF1aXJlbWVudDtcblxuICAgIGlmICghdGVybSkge1xuICAgICAgICByZXR1cm4gYWRtaXNzaW9uUmVxdWlyZW1lbnQ7XG4gICAgfVxuXG4gICAgYWRtaXNzaW9uUmVxdWlyZW1lbnQucGFyZW50ID0gdGVybS5wYXJlbnRfb2JqZWN0ID8/IG51bGw7XG5cbiAgICByZXR1cm4gYWRtaXNzaW9uUmVxdWlyZW1lbnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfcmVmO1xuXG4vLyBTaG91bGQgYmUgbm8gaW1wb3J0cyBoZXJlIVxuLy8gU29tZSB0aGluZ3MgdGhhdCBzaG91bGQgYmUgZXZhbHVhdGVkIGJlZm9yZSBhbGwgZWxzZS4uLlxuLy8gV2Ugb25seSB3YW50IHRvIGtub3cgaWYgbm9uLXBvbHlmaWxsZWQgc3ltYm9scyBhcmUgYXZhaWxhYmxlXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Zcbi8qI19fUFVSRV9fKi9cblN5bWJvbChcInhcIikgPT09IFwic3ltYm9sXCI7XG52YXIgaGFzTWFwID0gdHlwZW9mIE1hcCAhPT0gXCJ1bmRlZmluZWRcIjtcbnZhciBoYXNTZXQgPSB0eXBlb2YgU2V0ICE9PSBcInVuZGVmaW5lZFwiO1xudmFyIGhhc1Byb3hpZXMgPSB0eXBlb2YgUHJveHkgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIFByb3h5LnJldm9jYWJsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIjtcbi8qKlxyXG4gKiBUaGUgc2VudGluZWwgdmFsdWUgcmV0dXJuZWQgYnkgcHJvZHVjZXJzIHRvIHJlcGxhY2UgdGhlIGRyYWZ0IHdpdGggdW5kZWZpbmVkLlxyXG4gKi9cblxudmFyIE5PVEhJTkcgPSBoYXNTeW1ib2wgP1xuLyojX19QVVJFX18qL1xuU3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIikgOiAoX3JlZiA9IHt9LCBfcmVmW1wiaW1tZXItbm90aGluZ1wiXSA9IHRydWUsIF9yZWYpO1xuLyoqXHJcbiAqIFRvIGxldCBJbW1lciB0cmVhdCB5b3VyIGNsYXNzIGluc3RhbmNlcyBhcyBwbGFpbiBpbW11dGFibGUgb2JqZWN0c1xyXG4gKiAoYWxiZWl0IHdpdGggYSBjdXN0b20gcHJvdG90eXBlKSwgeW91IG11c3QgZGVmaW5lIGVpdGhlciBhbiBpbnN0YW5jZSBwcm9wZXJ0eVxyXG4gKiBvciBhIHN0YXRpYyBwcm9wZXJ0eSBvbiBlYWNoIG9mIHlvdXIgY3VzdG9tIGNsYXNzZXMuXHJcbiAqXHJcbiAqIE90aGVyd2lzZSwgeW91ciBjbGFzcyBpbnN0YW5jZSB3aWxsIG5ldmVyIGJlIGRyYWZ0ZWQsIHdoaWNoIG1lYW5zIGl0IHdvbid0IGJlXHJcbiAqIHNhZmUgdG8gbXV0YXRlIGluIGEgcHJvZHVjZSBjYWxsYmFjay5cclxuICovXG5cbnZhciBEUkFGVEFCTEUgPSBoYXNTeW1ib2wgP1xuLyojX19QVVJFX18qL1xuU3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKSA6IFwiX18kaW1tZXJfZHJhZnRhYmxlXCI7XG52YXIgRFJBRlRfU1RBVEUgPSBoYXNTeW1ib2wgP1xuLyojX19QVVJFX18qL1xuU3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpIDogXCJfXyRpbW1lcl9zdGF0ZVwiOyAvLyBFdmVuIGEgcG9seWZpbGxlZCBTeW1ib2wgbWlnaHQgcHJvdmlkZSBTeW1ib2wuaXRlcmF0b3JcblxudmFyIGl0ZXJhdG9yU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcblxudmFyIGVycm9ycyA9IHtcbiAgMDogXCJJbGxlZ2FsIHN0YXRlXCIsXG4gIDE6IFwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIixcbiAgMjogXCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLFxuICAzOiBmdW5jdGlvbiBfKGRhdGEpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiICsgZGF0YTtcbiAgfSxcbiAgNDogXCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLFxuICA1OiBcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLFxuICA2OiBcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLFxuICA3OiBcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLFxuICA4OiBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIixcbiAgOTogXCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsXG4gIDEwOiBcIlRoZSBnaXZlbiBkcmFmdCBpcyBhbHJlYWR5IGZpbmFsaXplZFwiLFxuICAxMTogXCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICAxMjogXCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLFxuICAxMzogXCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIixcbiAgMTQ6IFwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLFxuICAxNTogZnVuY3Rpb24gXyhwYXRoKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIgKyBwYXRoO1xuICB9LFxuICAxNjogJ1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLFxuICAxNzogZnVuY3Rpb24gXyhvcCkge1xuICAgIHJldHVybiBcIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIgKyBvcDtcbiAgfSxcbiAgMTg6IGZ1bmN0aW9uIF8ocGx1Z2luKSB7XG4gICAgcmV0dXJuIFwiVGhlIHBsdWdpbiBmb3IgJ1wiICsgcGx1Z2luICsgXCInIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBgZW5hYmxlXCIgKyBwbHVnaW4gKyBcIigpYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLlwiO1xuICB9LFxuICAyMDogXCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCIsXG4gIDIxOiBmdW5jdGlvbiBfKHRoaW5nKSB7XG4gICAgcmV0dXJuIFwicHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnXCIgKyB0aGluZyArIFwiJ1wiO1xuICB9LFxuICAyMjogZnVuY3Rpb24gXyh0aGluZykge1xuICAgIHJldHVybiBcIidjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIgKyB0aGluZztcbiAgfSxcbiAgMjM6IGZ1bmN0aW9uIF8odGhpbmcpIHtcbiAgICByZXR1cm4gXCInb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIiArIHRoaW5nO1xuICB9LFxuICAyNDogXCJQYXRjaGluZyByZXNlcnZlZCBhdHRyaWJ1dGVzIGxpa2UgX19wcm90b19fLCBwcm90b3R5cGUgYW5kIGNvbnN0cnVjdG9yIGlzIG5vdCBhbGxvd2VkXCJcbn07XG5mdW5jdGlvbiBkaWUoZXJyb3IpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAge1xuICAgIHZhciBlID0gZXJyb3JzW2Vycm9yXTtcbiAgICB2YXIgbXNnID0gIWUgPyBcInVua25vd24gZXJyb3IgbnI6IFwiICsgZXJyb3IgOiB0eXBlb2YgZSA9PT0gXCJmdW5jdGlvblwiID8gZS5hcHBseShudWxsLCBhcmdzKSA6IGU7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW0ltbWVyXSBcIiArIG1zZyk7XG4gIH1cbn1cblxuLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gSW1tZXIgZHJhZnQgKi9cblxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBpc0RyYWZ0KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICEhdmFsdWVbRFJBRlRfU1RBVEVdO1xufVxuLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgY2FuIGJlIGRyYWZ0ZWQgYnkgSW1tZXIgKi9cblxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBpc0RyYWZ0YWJsZSh2YWx1ZSkge1xuICB2YXIgX3ZhbHVlJGNvbnN0cnVjdG9yO1xuXG4gIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QodmFsdWUpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICEhdmFsdWVbRFJBRlRBQkxFXSB8fCAhISgoX3ZhbHVlJGNvbnN0cnVjdG9yID0gdmFsdWUuY29uc3RydWN0b3IpID09PSBudWxsIHx8IF92YWx1ZSRjb25zdHJ1Y3RvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ZhbHVlJGNvbnN0cnVjdG9yW0RSQUZUQUJMRV0pIHx8IGlzTWFwKHZhbHVlKSB8fCBpc1NldCh2YWx1ZSk7XG59XG52YXIgb2JqZWN0Q3RvclN0cmluZyA9XG4vKiNfX1BVUkVfXyovXG5PYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcblxuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBDdG9yID0gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocHJvdG8sIFwiY29uc3RydWN0b3JcIikgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIGlmIChDdG9yID09PSBPYmplY3QpIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gXCJmdW5jdGlvblwiICYmIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoQ3RvcikgPT09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5mdW5jdGlvbiBvcmlnaW5hbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKSBkaWUoMjMsIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlW0RSQUZUX1NUQVRFXS5iYXNlXztcbn1cbi8qI19fUFVSRV9fKi9cblxudmFyIG93bktleXMgPSB0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0Lm93bktleXMgPyBSZWZsZWN0Lm93bktleXMgOiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gXCJ1bmRlZmluZWRcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKSk7XG59IDpcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQpIHtcbiAgLy8gUG9seWZpbGwgbmVlZGVkIGZvciBIZXJtZXMgYW5kIElFLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2hlcm1lcy9pc3N1ZXMvMjc0XG4gIHZhciByZXMgPSB7fTtcbiAgb3duS2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHJlc1trZXldID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufTtcbmZ1bmN0aW9uIGVhY2gob2JqLCBpdGVyLCBlbnVtZXJhYmxlT25seSkge1xuICBpZiAoZW51bWVyYWJsZU9ubHkgPT09IHZvaWQgMCkge1xuICAgIGVudW1lcmFibGVPbmx5ID0gZmFsc2U7XG4gIH1cblxuICBpZiAoZ2V0QXJjaHR5cGUob2JqKSA9PT0gMFxuICAvKiBPYmplY3QgKi9cbiAgKSB7XG4gICAgICAoZW51bWVyYWJsZU9ubHkgPyBPYmplY3Qua2V5cyA6IG93bktleXMpKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghZW51bWVyYWJsZU9ubHkgfHwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIikgaXRlcihrZXksIG9ialtrZXldLCBvYmopO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoZW50cnksIGluZGV4KSB7XG4gICAgICByZXR1cm4gaXRlcihpbmRleCwgZW50cnksIG9iaik7XG4gICAgfSk7XG4gIH1cbn1cbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gZ2V0QXJjaHR5cGUodGhpbmcpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgdmFyIHN0YXRlID0gdGhpbmdbRFJBRlRfU1RBVEVdO1xuICByZXR1cm4gc3RhdGUgPyBzdGF0ZS50eXBlXyA+IDMgPyBzdGF0ZS50eXBlXyAtIDQgLy8gY2F1c2UgT2JqZWN0IGFuZCBBcnJheSBtYXAgYmFjayBmcm9tIDQgYW5kIDVcbiAgOiBzdGF0ZS50eXBlXyAvLyBvdGhlcnMgYXJlIHRoZSBzYW1lXG4gIDogQXJyYXkuaXNBcnJheSh0aGluZykgPyAxXG4gIC8qIEFycmF5ICovXG4gIDogaXNNYXAodGhpbmcpID8gMlxuICAvKiBNYXAgKi9cbiAgOiBpc1NldCh0aGluZykgPyAzXG4gIC8qIFNldCAqL1xuICA6IDBcbiAgLyogT2JqZWN0ICovXG4gIDtcbn1cbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gaGFzKHRoaW5nLCBwcm9wKSB7XG4gIHJldHVybiBnZXRBcmNodHlwZSh0aGluZykgPT09IDJcbiAgLyogTWFwICovXG4gID8gdGhpbmcuaGFzKHByb3ApIDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaW5nLCBwcm9wKTtcbn1cbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gZ2V0KHRoaW5nLCBwcm9wKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMlxuICAvKiBNYXAgKi9cbiAgPyB0aGluZy5nZXQocHJvcCkgOiB0aGluZ1twcm9wXTtcbn1cbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gc2V0KHRoaW5nLCBwcm9wT3JPbGRWYWx1ZSwgdmFsdWUpIHtcbiAgdmFyIHQgPSBnZXRBcmNodHlwZSh0aGluZyk7XG4gIGlmICh0ID09PSAyXG4gIC8qIE1hcCAqL1xuICApIHRoaW5nLnNldChwcm9wT3JPbGRWYWx1ZSwgdmFsdWUpO2Vsc2UgaWYgKHQgPT09IDNcbiAgLyogU2V0ICovXG4gICkge1xuICAgICAgdGhpbmcuZGVsZXRlKHByb3BPck9sZFZhbHVlKTtcbiAgICAgIHRoaW5nLmFkZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHRoaW5nW3Byb3BPck9sZFZhbHVlXSA9IHZhbHVlO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIEZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvYzY5OTA0YTUxMWI5MDAyNjY5MzUxNjgyMjMwNjNkZDg3NzJkZmM0MC9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qc1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGlzTWFwKHRhcmdldCkge1xuICByZXR1cm4gaGFzTWFwICYmIHRhcmdldCBpbnN0YW5jZW9mIE1hcDtcbn1cbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gaXNTZXQodGFyZ2V0KSB7XG4gIHJldHVybiBoYXNTZXQgJiYgdGFyZ2V0IGluc3RhbmNlb2YgU2V0O1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBsYXRlc3Qoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmNvcHlfIHx8IHN0YXRlLmJhc2VfO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBzaGFsbG93Q29weShiYXNlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGJhc2UpKSByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYmFzZSk7XG4gIHZhciBkZXNjcmlwdG9ycyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSk7XG4gIGRlbGV0ZSBkZXNjcmlwdG9yc1tEUkFGVF9TVEFURV07XG4gIHZhciBrZXlzID0gb3duS2V5cyhkZXNjcmlwdG9ycyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGRlc2MgPSBkZXNjcmlwdG9yc1trZXldO1xuXG4gICAgaWYgKGRlc2Mud3JpdGFibGUgPT09IGZhbHNlKSB7XG4gICAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICB9IC8vIGxpa2Ugb2JqZWN0LmFzc2lnbiwgd2Ugd2lsbCByZWFkIGFueSBfb3duXywgZ2V0L3NldCBhY2Nlc3NvcnMuIFRoaXMgaGVscHMgaW4gZGVhbGluZ1xuICAgIC8vIHdpdGggbGlicmFyaWVzIHRoYXQgdHJhcCB2YWx1ZXMsIGxpa2UgbW9ieCBvciB2dWVcbiAgICAvLyB1bmxpa2Ugb2JqZWN0LmFzc2lnbiwgbm9uLWVudW1lcmFibGVzIHdpbGwgYmUgY29waWVkIGFzIHdlbGxcblxuXG4gICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSBkZXNjcmlwdG9yc1trZXldID0ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICB2YWx1ZTogYmFzZVtrZXldXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSwgZGVzY3JpcHRvcnMpO1xufVxuZnVuY3Rpb24gZnJlZXplKG9iaiwgZGVlcCkge1xuICBpZiAoZGVlcCA9PT0gdm9pZCAwKSB7XG4gICAgZGVlcCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRnJvemVuKG9iaikgfHwgaXNEcmFmdChvYmopIHx8ICFpc0RyYWZ0YWJsZShvYmopKSByZXR1cm4gb2JqO1xuXG4gIGlmIChnZXRBcmNodHlwZShvYmopID4gMVxuICAvKiBNYXAgb3IgU2V0ICovXG4gICkge1xuICAgICAgb2JqLnNldCA9IG9iai5hZGQgPSBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zO1xuICAgIH1cblxuICBPYmplY3QuZnJlZXplKG9iaik7XG4gIGlmIChkZWVwKSBlYWNoKG9iaiwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZnJlZXplKHZhbHVlLCB0cnVlKTtcbiAgfSwgdHJ1ZSk7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucygpIHtcbiAgZGllKDIpO1xufVxuXG5mdW5jdGlvbiBpc0Zyb3plbihvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHJldHVybiB0cnVlOyAvLyBTZWUgIzYwMCwgSUUgZGllcyBvbiBub24tb2JqZWN0cyBpbiBPYmplY3QuaXNGcm96ZW5cblxuICByZXR1cm4gT2JqZWN0LmlzRnJvemVuKG9iaik7XG59XG5cbi8qKiBQbHVnaW4gdXRpbGl0aWVzICovXG5cbnZhciBwbHVnaW5zID0ge307XG5mdW5jdGlvbiBnZXRQbHVnaW4ocGx1Z2luS2V5KSB7XG4gIHZhciBwbHVnaW4gPSBwbHVnaW5zW3BsdWdpbktleV07XG5cbiAgaWYgKCFwbHVnaW4pIHtcbiAgICBkaWUoMTgsIHBsdWdpbktleSk7XG4gIH0gLy8gQHRzLWlnbm9yZVxuXG5cbiAgcmV0dXJuIHBsdWdpbjtcbn1cbmZ1bmN0aW9uIGxvYWRQbHVnaW4ocGx1Z2luS2V5LCBpbXBsZW1lbnRhdGlvbikge1xuICBpZiAoIXBsdWdpbnNbcGx1Z2luS2V5XSkgcGx1Z2luc1twbHVnaW5LZXldID0gaW1wbGVtZW50YXRpb247XG59XG5cbnZhciBjdXJyZW50U2NvcGU7XG5mdW5jdGlvbiBnZXRDdXJyZW50U2NvcGUoKSB7XG4gIGlmICggIWN1cnJlbnRTY29wZSkgZGllKDApO1xuICByZXR1cm4gY3VycmVudFNjb3BlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTY29wZShwYXJlbnRfLCBpbW1lcl8pIHtcbiAgcmV0dXJuIHtcbiAgICBkcmFmdHNfOiBbXSxcbiAgICBwYXJlbnRfOiBwYXJlbnRfLFxuICAgIGltbWVyXzogaW1tZXJfLFxuICAgIC8vIFdoZW5ldmVyIHRoZSBtb2RpZmllZCBkcmFmdCBjb250YWlucyBhIGRyYWZ0IGZyb20gYW5vdGhlciBzY29wZSwgd2VcbiAgICAvLyBuZWVkIHRvIHByZXZlbnQgYXV0by1mcmVlemluZyBzbyB0aGUgdW5vd25lZCBkcmFmdCBjYW4gYmUgZmluYWxpemVkLlxuICAgIGNhbkF1dG9GcmVlemVfOiB0cnVlLFxuICAgIHVuZmluYWxpemVkRHJhZnRzXzogMFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcikge1xuICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIik7IC8vIGFzc2VydCB3ZSBoYXZlIHRoZSBwbHVnaW5cblxuICAgIHNjb3BlLnBhdGNoZXNfID0gW107XG4gICAgc2NvcGUuaW52ZXJzZVBhdGNoZXNfID0gW107XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8gPSBwYXRjaExpc3RlbmVyO1xuICB9XG59XG5mdW5jdGlvbiByZXZva2VTY29wZShzY29wZSkge1xuICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgc2NvcGUuZHJhZnRzXy5mb3JFYWNoKHJldm9rZURyYWZ0KTsgLy8gQHRzLWlnbm9yZVxuXG4gIHNjb3BlLmRyYWZ0c18gPSBudWxsO1xufVxuZnVuY3Rpb24gbGVhdmVTY29wZShzY29wZSkge1xuICBpZiAoc2NvcGUgPT09IGN1cnJlbnRTY29wZSkge1xuICAgIGN1cnJlbnRTY29wZSA9IHNjb3BlLnBhcmVudF87XG4gIH1cbn1cbmZ1bmN0aW9uIGVudGVyU2NvcGUoaW1tZXIpIHtcbiAgcmV0dXJuIGN1cnJlbnRTY29wZSA9IGNyZWF0ZVNjb3BlKGN1cnJlbnRTY29wZSwgaW1tZXIpO1xufVxuXG5mdW5jdGlvbiByZXZva2VEcmFmdChkcmFmdCkge1xuICB2YXIgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIGlmIChzdGF0ZS50eXBlXyA9PT0gMFxuICAvKiBQcm94eU9iamVjdCAqL1xuICB8fCBzdGF0ZS50eXBlXyA9PT0gMVxuICAvKiBQcm94eUFycmF5ICovXG4gICkgc3RhdGUucmV2b2tlXygpO2Vsc2Ugc3RhdGUucmV2b2tlZF8gPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzUmVzdWx0KHJlc3VsdCwgc2NvcGUpIHtcbiAgc2NvcGUudW5maW5hbGl6ZWREcmFmdHNfID0gc2NvcGUuZHJhZnRzXy5sZW5ndGg7XG4gIHZhciBiYXNlRHJhZnQgPSBzY29wZS5kcmFmdHNfWzBdO1xuICB2YXIgaXNSZXBsYWNlZCA9IHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdCAhPT0gYmFzZURyYWZ0O1xuICBpZiAoIXNjb3BlLmltbWVyXy51c2VQcm94aWVzXykgZ2V0UGx1Z2luKFwiRVM1XCIpLndpbGxGaW5hbGl6ZUVTNV8oc2NvcGUsIHJlc3VsdCwgaXNSZXBsYWNlZCk7XG5cbiAgaWYgKGlzUmVwbGFjZWQpIHtcbiAgICBpZiAoYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5tb2RpZmllZF8pIHtcbiAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgIGRpZSg0KTtcbiAgICB9XG5cbiAgICBpZiAoaXNEcmFmdGFibGUocmVzdWx0KSkge1xuICAgICAgLy8gRmluYWxpemUgdGhlIHJlc3VsdCBpbiBjYXNlIGl0IGNvbnRhaW5zIChvciBpcykgYSBzdWJzZXQgb2YgdGhlIGRyYWZ0LlxuICAgICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgICBpZiAoIXNjb3BlLnBhcmVudF8pIG1heWJlRnJlZXplKHNjb3BlLCByZXN1bHQpO1xuICAgIH1cblxuICAgIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZURyYWZ0W0RSQUZUX1NUQVRFXS5iYXNlXywgcmVzdWx0LCBzY29wZS5wYXRjaGVzXywgc2NvcGUuaW52ZXJzZVBhdGNoZXNfKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRmluYWxpemUgdGhlIGJhc2UgZHJhZnQuXG4gICAgcmVzdWx0ID0gZmluYWxpemUoc2NvcGUsIGJhc2VEcmFmdCwgW10pO1xuICB9XG5cbiAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuXG4gIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgIHNjb3BlLnBhdGNoTGlzdGVuZXJfKHNjb3BlLnBhdGNoZXNfLCBzY29wZS5pbnZlcnNlUGF0Y2hlc18pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCAhPT0gTk9USElORyA/IHJlc3VsdCA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluYWxpemUocm9vdFNjb3BlLCB2YWx1ZSwgcGF0aCkge1xuICAvLyBEb24ndCByZWN1cnNlIGluIHRobyByZWN1cnNpdmUgZGF0YSBzdHJ1Y3R1cmVzXG4gIGlmIChpc0Zyb3plbih2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgdmFyIHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdOyAvLyBBIHBsYWluIG9iamVjdCwgbWlnaHQgbmVlZCBmcmVlemluZywgbWlnaHQgY29udGFpbiBkcmFmdHNcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgZWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgY2hpbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBzdGF0ZSwgdmFsdWUsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aCk7XG4gICAgfSwgdHJ1ZSAvLyBTZWUgIzU5MCwgZG9uJ3QgcmVjdXJzZSBpbnRvIG5vbi1lbnVtZXJhYmxlIG9mIG5vbiBkcmFmdGVkIG9iamVjdHNcbiAgICApO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSAvLyBOZXZlciBmaW5hbGl6ZSBkcmFmdHMgb3duZWQgYnkgYW5vdGhlciBzY29wZS5cblxuXG4gIGlmIChzdGF0ZS5zY29wZV8gIT09IHJvb3RTY29wZSkgcmV0dXJuIHZhbHVlOyAvLyBVbm1vZGlmaWVkIGRyYWZ0LCByZXR1cm4gdGhlIChmcm96ZW4pIG9yaWdpbmFsXG5cbiAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHN0YXRlLmJhc2VfLCB0cnVlKTtcbiAgICByZXR1cm4gc3RhdGUuYmFzZV87XG4gIH0gLy8gTm90IGZpbmFsaXplZCB5ZXQsIGxldCdzIGRvIHRoYXQgbm93XG5cblxuICBpZiAoIXN0YXRlLmZpbmFsaXplZF8pIHtcbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBzdGF0ZS5zY29wZV8udW5maW5hbGl6ZWREcmFmdHNfLS07XG4gICAgdmFyIHJlc3VsdCA9IC8vIEZvciBFUzUsIGNyZWF0ZSBhIGdvb2QgY29weSBmcm9tIHRoZSBkcmFmdCBmaXJzdCwgd2l0aCBhZGRlZCBrZXlzIGFuZCB3aXRob3V0IGRlbGV0ZWQga2V5cy5cbiAgICBzdGF0ZS50eXBlXyA9PT0gNFxuICAgIC8qIEVTNU9iamVjdCAqL1xuICAgIHx8IHN0YXRlLnR5cGVfID09PSA1XG4gICAgLyogRVM1QXJyYXkgKi9cbiAgICA/IHN0YXRlLmNvcHlfID0gc2hhbGxvd0NvcHkoc3RhdGUuZHJhZnRfKSA6IHN0YXRlLmNvcHlfOyAvLyBGaW5hbGl6ZSBhbGwgY2hpbGRyZW4gb2YgdGhlIGNvcHlcbiAgICAvLyBGb3Igc2V0cyB3ZSBjbG9uZSBiZWZvcmUgaXRlcmF0aW5nLCBvdGhlcndpc2Ugd2UgY2FuIGdldCBpbiBlbmRsZXNzIGxvb3AgZHVlIHRvIG1vZGlmeWluZyBkdXJpbmcgaXRlcmF0aW9uLCBzZWUgIzYyOFxuICAgIC8vIEFsdGhvdWdoIHRoZSBvcmlnaW5hbCB0ZXN0IGNhc2UgZG9lc24ndCBzZWVtIHZhbGlkIGFueXdheSwgc28gaWYgdGhpcyBpbiB0aGUgd2F5IHdlIGNhbiB0dXJuIHRoZSBuZXh0IGxpbmVcbiAgICAvLyBiYWNrIHRvIGVhY2gocmVzdWx0LCAuLi4uKVxuXG4gICAgZWFjaChzdGF0ZS50eXBlXyA9PT0gM1xuICAgIC8qIFNldCAqL1xuICAgID8gbmV3IFNldChyZXN1bHQpIDogcmVzdWx0LCBmdW5jdGlvbiAoa2V5LCBjaGlsZFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCByZXN1bHQsIGtleSwgY2hpbGRWYWx1ZSwgcGF0aCk7XG4gICAgfSk7IC8vIGV2ZXJ5dGhpbmcgaW5zaWRlIGlzIGZyb3plbiwgd2UgY2FuIGZyZWV6ZSBoZXJlXG5cbiAgICBtYXliZUZyZWV6ZShyb290U2NvcGUsIHJlc3VsdCwgZmFsc2UpOyAvLyBmaXJzdCB0aW1lIGZpbmFsaXppbmcsIGxldCdzIGNyZWF0ZSB0aG9zZSBwYXRjaGVzXG5cbiAgICBpZiAocGF0aCAmJiByb290U2NvcGUucGF0Y2hlc18pIHtcbiAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVQYXRjaGVzXyhzdGF0ZSwgcGF0aCwgcm9vdFNjb3BlLnBhdGNoZXNfLCByb290U2NvcGUuaW52ZXJzZVBhdGNoZXNfKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGUuY29weV87XG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplUHJvcGVydHkocm9vdFNjb3BlLCBwYXJlbnRTdGF0ZSwgdGFyZ2V0T2JqZWN0LCBwcm9wLCBjaGlsZFZhbHVlLCByb290UGF0aCkge1xuICBpZiAoIGNoaWxkVmFsdWUgPT09IHRhcmdldE9iamVjdCkgZGllKDUpO1xuXG4gIGlmIChpc0RyYWZ0KGNoaWxkVmFsdWUpKSB7XG4gICAgdmFyIHBhdGggPSByb290UGF0aCAmJiBwYXJlbnRTdGF0ZSAmJiBwYXJlbnRTdGF0ZS50eXBlXyAhPT0gM1xuICAgIC8qIFNldCAqL1xuICAgICYmIC8vIFNldCBvYmplY3RzIGFyZSBhdG9taWMgc2luY2UgdGhleSBoYXZlIG5vIGtleXMuXG4gICAgIWhhcyhwYXJlbnRTdGF0ZS5hc3NpZ25lZF8sIHByb3ApIC8vIFNraXAgZGVlcCBwYXRjaGVzIGZvciBhc3NpZ25lZCBrZXlzLlxuICAgID8gcm9vdFBhdGguY29uY2F0KHByb3ApIDogdW5kZWZpbmVkOyAvLyBEcmFmdHMgb3duZWQgYnkgYHNjb3BlYCBhcmUgZmluYWxpemVkIGhlcmUuXG5cbiAgICB2YXIgcmVzID0gZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlLCBwYXRoKTtcbiAgICBzZXQodGFyZ2V0T2JqZWN0LCBwcm9wLCByZXMpOyAvLyBEcmFmdHMgZnJvbSBhbm90aGVyIHNjb3BlIG11c3QgcHJldmVudGVkIHRvIGJlIGZyb3plblxuICAgIC8vIGlmIHdlIGdvdCBhIGRyYWZ0IGJhY2sgZnJvbSBmaW5hbGl6ZSwgd2UncmUgaW4gYSBuZXN0ZWQgcHJvZHVjZSBhbmQgc2hvdWxkbid0IGZyZWV6ZVxuXG4gICAgaWYgKGlzRHJhZnQocmVzKSkge1xuICAgICAgcm9vdFNjb3BlLmNhbkF1dG9GcmVlemVfID0gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybjtcbiAgfSAvLyBTZWFyY2ggbmV3IG9iamVjdHMgZm9yIHVuZmluYWxpemVkIGRyYWZ0cy4gRnJvemVuIG9iamVjdHMgc2hvdWxkIG5ldmVyIGNvbnRhaW4gZHJhZnRzLlxuXG5cbiAgaWYgKGlzRHJhZnRhYmxlKGNoaWxkVmFsdWUpICYmICFpc0Zyb3plbihjaGlsZFZhbHVlKSkge1xuICAgIGlmICghcm9vdFNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiByb290U2NvcGUudW5maW5hbGl6ZWREcmFmdHNfIDwgMSkge1xuICAgICAgLy8gb3B0aW1pemF0aW9uOiBpZiBhbiBvYmplY3QgaXMgbm90IGEgZHJhZnQsIGFuZCB3ZSBkb24ndCBoYXZlIHRvXG4gICAgICAvLyBkZWVwZnJlZXplIGV2ZXJ5dGhpbmcsIGFuZCB3ZSBhcmUgc3VyZSB0aGF0IG5vIGRyYWZ0cyBhcmUgbGVmdCBpbiB0aGUgcmVtYWluaW5nIG9iamVjdFxuICAgICAgLy8gY2F1c2Ugd2Ugc2F3IGFuZCBmaW5hbGl6ZWQgYWxsIGRyYWZ0cyBhbHJlYWR5OyB3ZSBjYW4gc3RvcCB2aXNpdGluZyB0aGUgcmVzdCBvZiB0aGUgdHJlZS5cbiAgICAgIC8vIFRoaXMgYmVuZWZpdHMgZXNwZWNpYWxseSBhZGRpbmcgbGFyZ2UgZGF0YSB0cmVlJ3Mgd2l0aG91dCBmdXJ0aGVyIHByb2Nlc3NpbmcuXG4gICAgICAvLyBTZWUgYWRkLWRhdGEuanMgcGVyZiB0ZXN0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmluYWxpemUocm9vdFNjb3BlLCBjaGlsZFZhbHVlKTsgLy8gaW1tZXIgZGVlcCBmcmVlemVzIHBsYWluIG9iamVjdHMsIHNvIGlmIHRoZXJlIGlzIG5vIHBhcmVudCBzdGF0ZSwgd2UgZnJlZXplIGFzIHdlbGxcblxuICAgIGlmICghcGFyZW50U3RhdGUgfHwgIXBhcmVudFN0YXRlLnNjb3BlXy5wYXJlbnRfKSBtYXliZUZyZWV6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1heWJlRnJlZXplKHNjb3BlLCB2YWx1ZSwgZGVlcCkge1xuICBpZiAoZGVlcCA9PT0gdm9pZCAwKSB7XG4gICAgZGVlcCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHNjb3BlLmltbWVyXy5hdXRvRnJlZXplXyAmJiBzY29wZS5jYW5BdXRvRnJlZXplXykge1xuICAgIGZyZWV6ZSh2YWx1ZSwgZGVlcCk7XG4gIH1cbn1cblxuLyoqXHJcbiAqIFJldHVybnMgYSBuZXcgZHJhZnQgb2YgdGhlIGBiYXNlYCBvYmplY3QuXHJcbiAqXHJcbiAqIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgdGhlIHBhcmVudCBkcmFmdC1zdGF0ZSAodXNlZCBpbnRlcm5hbGx5KS5cclxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3h5UHJveHkoYmFzZSwgcGFyZW50KSB7XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShiYXNlKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIHR5cGVfOiBpc0FycmF5ID8gMVxuICAgIC8qIFByb3h5QXJyYXkgKi9cbiAgICA6IDBcbiAgICAvKiBQcm94eU9iamVjdCAqL1xuICAgICxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9kdWNlIGNhbGwgdGhpcyBpcyBhc3NvY2lhdGVkIHdpdGguXG4gICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgLy8gVHJ1ZSBmb3IgYm90aCBzaGFsbG93IGFuZCBkZWVwIGNoYW5nZXMuXG4gICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAvLyBVc2VkIGR1cmluZyBmaW5hbGl6YXRpb24uXG4gICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgLy8gVHJhY2sgd2hpY2ggcHJvcGVydGllcyBoYXZlIGJlZW4gYXNzaWduZWQgKHRydWUpIG9yIGRlbGV0ZWQgKGZhbHNlKS5cbiAgICBhc3NpZ25lZF86IHt9LFxuICAgIC8vIFRoZSBwYXJlbnQgZHJhZnQgc3RhdGUuXG4gICAgcGFyZW50XzogcGFyZW50LFxuICAgIC8vIFRoZSBiYXNlIHN0YXRlLlxuICAgIGJhc2VfOiBiYXNlLFxuICAgIC8vIFRoZSBiYXNlIHByb3h5LlxuICAgIGRyYWZ0XzogbnVsbCxcbiAgICAvLyBUaGUgYmFzZSBjb3B5IHdpdGggYW55IHVwZGF0ZWQgdmFsdWVzLlxuICAgIGNvcHlfOiBudWxsLFxuICAgIC8vIENhbGxlZCBieSB0aGUgYHByb2R1Y2VgIGZ1bmN0aW9uLlxuICAgIHJldm9rZV86IG51bGwsXG4gICAgaXNNYW51YWxfOiBmYWxzZVxuICB9OyAvLyB0aGUgdHJhcHMgbXVzdCB0YXJnZXQgc29tZXRoaW5nLCBhIGJpdCBsaWtlIHRoZSAncmVhbCcgYmFzZS5cbiAgLy8gYnV0IGFsc28sIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgZnJvbSB0aGUgdGFyZ2V0IHdoYXQgdGhlIHJlbGV2YW50IHN0YXRlIGlzXG4gIC8vICh0byBhdm9pZCBjcmVhdGluZyB0cmFwcyBwZXIgaW5zdGFuY2UgdG8gY2FwdHVyZSB0aGUgc3RhdGUgaW4gY2xvc3VyZSxcbiAgLy8gYW5kIHRvIGF2b2lkIGNyZWF0aW5nIHdlaXJkIGhpZGRlbiBwcm9wZXJ0aWVzIGFzIHdlbGwpXG4gIC8vIFNvIHRoZSB0cmljayBpcyB0byB1c2UgJ3N0YXRlJyBhcyB0aGUgYWN0dWFsICd0YXJnZXQnISAoYW5kIG1ha2Ugc3VyZSB3ZSBpbnRlcmNlcHQgZXZlcnl0aGluZylcbiAgLy8gTm90ZSB0aGF0IGluIHRoZSBjYXNlIG9mIGFuIGFycmF5LCB3ZSBwdXQgdGhlIHN0YXRlIGluIGFuIGFycmF5IHRvIGhhdmUgYmV0dGVyIFJlZmxlY3QgZGVmYXVsdHMgb290YlxuXG4gIHZhciB0YXJnZXQgPSBzdGF0ZTtcbiAgdmFyIHRyYXBzID0gb2JqZWN0VHJhcHM7XG5cbiAgaWYgKGlzQXJyYXkpIHtcbiAgICB0YXJnZXQgPSBbc3RhdGVdO1xuICAgIHRyYXBzID0gYXJyYXlUcmFwcztcbiAgfVxuXG4gIHZhciBfUHJveHkkcmV2b2NhYmxlID0gUHJveHkucmV2b2NhYmxlKHRhcmdldCwgdHJhcHMpLFxuICAgICAgcmV2b2tlID0gX1Byb3h5JHJldm9jYWJsZS5yZXZva2UsXG4gICAgICBwcm94eSA9IF9Qcm94eSRyZXZvY2FibGUucHJveHk7XG5cbiAgc3RhdGUuZHJhZnRfID0gcHJveHk7XG4gIHN0YXRlLnJldm9rZV8gPSByZXZva2U7XG4gIHJldHVybiBwcm94eTtcbn1cbi8qKlxyXG4gKiBPYmplY3QgZHJhZnRzXHJcbiAqL1xuXG52YXIgb2JqZWN0VHJhcHMgPSB7XG4gIGdldDogZnVuY3Rpb24gZ2V0KHN0YXRlLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09IERSQUZUX1NUQVRFKSByZXR1cm4gc3RhdGU7XG4gICAgdmFyIHNvdXJjZSA9IGxhdGVzdChzdGF0ZSk7XG5cbiAgICBpZiAoIWhhcyhzb3VyY2UsIHByb3ApKSB7XG4gICAgICAvLyBub24tZXhpc3Rpbmcgb3Igbm9uLW93biBwcm9wZXJ0eS4uLlxuICAgICAgcmV0dXJuIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcblxuICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IC8vIENoZWNrIGZvciBleGlzdGluZyBkcmFmdCBpbiBtb2RpZmllZCBzdGF0ZS5cbiAgICAvLyBBc3NpZ25lZCB2YWx1ZXMgYXJlIG5ldmVyIGRyYWZ0ZWQuIFRoaXMgY2F0Y2hlcyBhbnkgZHJhZnRzIHdlIGNyZWF0ZWQsIHRvby5cblxuXG4gICAgaWYgKHZhbHVlID09PSBwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSkge1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfW3Byb3BdID0gY3JlYXRlUHJveHkoc3RhdGUuc2NvcGVfLmltbWVyXywgdmFsdWUsIHN0YXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGhhczogZnVuY3Rpb24gaGFzKHN0YXRlLCBwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AgaW4gbGF0ZXN0KHN0YXRlKTtcbiAgfSxcbiAgb3duS2V5czogZnVuY3Rpb24gb3duS2V5cyhzdGF0ZSkge1xuICAgIHJldHVybiBSZWZsZWN0Lm93bktleXMobGF0ZXN0KHN0YXRlKSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlLCBwcm9wXG4gIC8qIHN0cmljdGx5IG5vdCwgYnV0IGhlbHBzIFRTICovXG4gICwgdmFsdWUpIHtcbiAgICB2YXIgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8obGF0ZXN0KHN0YXRlKSwgcHJvcCk7XG5cbiAgICBpZiAoZGVzYyA9PT0gbnVsbCB8fCBkZXNjID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZXNjLnNldCkge1xuICAgICAgLy8gc3BlY2lhbCBjYXNlOiBpZiB0aGlzIHdyaXRlIGlzIGNhcHR1cmVkIGJ5IGEgc2V0dGVyLCB3ZSBoYXZlXG4gICAgICAvLyB0byB0cmlnZ2VyIGl0IHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuICAgICAgZGVzYy5zZXQuY2FsbChzdGF0ZS5kcmFmdF8sIHZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUubW9kaWZpZWRfKSB7XG4gICAgICAvLyB0aGUgbGFzdCBjaGVjayBpcyBiZWNhdXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBkaXN0aW5ndWlzaCBzZXR0aW5nIGEgbm9uLWV4aXN0aW5nIHRvIHVuZGVmaW5lZCAod2hpY2ggaXMgYSBjaGFuZ2UpXG4gICAgICAvLyBmcm9tIHNldHRpbmcgYW4gZXhpc3RpbmcgcHJvcGVydHkgd2l0aCB2YWx1ZSB1bmRlZmluZWQgdG8gdW5kZWZpbmVkICh3aGljaCBpcyBub3QgYSBjaGFuZ2UpXG4gICAgICB2YXIgY3VycmVudCA9IHBlZWsobGF0ZXN0KHN0YXRlKSwgcHJvcCk7IC8vIHNwZWNpYWwgY2FzZSwgaWYgd2UgYXNzaWduaW5nIHRoZSBvcmlnaW5hbCB2YWx1ZSB0byBhIGRyYWZ0LCB3ZSBjYW4gaWdub3JlIHRoZSBhc3NpZ25tZW50XG5cbiAgICAgIHZhciBjdXJyZW50U3RhdGUgPSBjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRbRFJBRlRfU1RBVEVdO1xuXG4gICAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS5iYXNlXyA9PT0gdmFsdWUpIHtcbiAgICAgICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXModmFsdWUsIGN1cnJlbnQpICYmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGhhcyhzdGF0ZS5iYXNlXywgcHJvcCkpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHByZXBhcmVDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuY29weV9bcHJvcF0gPT09IHZhbHVlICYmICggLy8gc3BlY2lhbCBjYXNlOiBoYW5kbGUgbmV3IHByb3BzIHdpdGggdmFsdWUgJ3VuZGVmaW5lZCdcbiAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHByb3AgaW4gc3RhdGUuY29weV8pIHx8IC8vIHNwZWNpYWwgY2FzZTogTmFOXG4gICAgTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNOYU4oc3RhdGUuY29weV9bcHJvcF0pKSByZXR1cm4gdHJ1ZTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgc3RhdGUuY29weV9bcHJvcF0gPSB2YWx1ZTtcbiAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkoc3RhdGUsIHByb3ApIHtcbiAgICAvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuICAgIGlmIChwZWVrKHN0YXRlLmJhc2VfLCBwcm9wKSAhPT0gdW5kZWZpbmVkIHx8IHByb3AgaW4gc3RhdGUuYmFzZV8pIHtcbiAgICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IGZhbHNlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBhbiBvcmlnaW5hbGx5IG5vdCBhc3NpZ25lZCBwcm9wZXJ0eSB3YXMgZGVsZXRlZFxuICAgICAgZGVsZXRlIHN0YXRlLmFzc2lnbmVkX1twcm9wXTtcbiAgICB9IC8vIEB0cy1pZ25vcmVcblxuXG4gICAgaWYgKHN0YXRlLmNvcHlfKSBkZWxldGUgc3RhdGUuY29weV9bcHJvcF07XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIC8vIE5vdGU6IFdlIG5ldmVyIGNvZXJjZSBgZGVzYy52YWx1ZWAgaW50byBhbiBJbW1lciBkcmFmdCwgYmVjYXVzZSB3ZSBjYW4ndCBtYWtlXG4gIC8vIHRoZSBzYW1lIGd1YXJhbnRlZSBpbiBFUzUgbW9kZS5cbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3RhdGUsIHByb3ApIHtcbiAgICB2YXIgb3duZXIgPSBsYXRlc3Qoc3RhdGUpO1xuICAgIHZhciBkZXNjID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob3duZXIsIHByb3ApO1xuICAgIGlmICghZGVzYykgcmV0dXJuIGRlc2M7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiBzdGF0ZS50eXBlXyAhPT0gMVxuICAgICAgLyogUHJveHlBcnJheSAqL1xuICAgICAgfHwgcHJvcCAhPT0gXCJsZW5ndGhcIixcbiAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgIHZhbHVlOiBvd25lcltwcm9wXVxuICAgIH07XG4gIH0sXG4gIGRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSgpIHtcbiAgICBkaWUoMTEpO1xuICB9LFxuICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2Yoc3RhdGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHN0YXRlLmJhc2VfKTtcbiAgfSxcbiAgc2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKCkge1xuICAgIGRpZSgxMik7XG4gIH1cbn07XG4vKipcclxuICogQXJyYXkgZHJhZnRzXHJcbiAqL1xuXG52YXIgYXJyYXlUcmFwcyA9IHt9O1xuZWFjaChvYmplY3RUcmFwcywgZnVuY3Rpb24gKGtleSwgZm4pIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBhcnJheVRyYXBzW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdWzBdO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSk7XG5cbmFycmF5VHJhcHMuZGVsZXRlUHJvcGVydHkgPSBmdW5jdGlvbiAoc3RhdGUsIHByb3ApIHtcbiAgaWYgKCBpc05hTihwYXJzZUludChwcm9wKSkpIGRpZSgxMyk7IC8vIEB0cy1pZ25vcmVcblxuICByZXR1cm4gYXJyYXlUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZSwgcHJvcCwgdW5kZWZpbmVkKTtcbn07XG5cbmFycmF5VHJhcHMuc2V0ID0gZnVuY3Rpb24gKHN0YXRlLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAoIHByb3AgIT09IFwibGVuZ3RoXCIgJiYgaXNOYU4ocGFyc2VJbnQocHJvcCkpKSBkaWUoMTQpO1xuICByZXR1cm4gb2JqZWN0VHJhcHMuc2V0LmNhbGwodGhpcywgc3RhdGVbMF0sIHByb3AsIHZhbHVlLCBzdGF0ZVswXSk7XG59OyAvLyBBY2Nlc3MgYSBwcm9wZXJ0eSB3aXRob3V0IGNyZWF0aW5nIGFuIEltbWVyIGRyYWZ0LlxuXG5cbmZ1bmN0aW9uIHBlZWsoZHJhZnQsIHByb3ApIHtcbiAgdmFyIHN0YXRlID0gZHJhZnRbRFJBRlRfU1RBVEVdO1xuICB2YXIgc291cmNlID0gc3RhdGUgPyBsYXRlc3Qoc3RhdGUpIDogZHJhZnQ7XG4gIHJldHVybiBzb3VyY2VbcHJvcF07XG59XG5cbmZ1bmN0aW9uIHJlYWRQcm9wRnJvbVByb3RvKHN0YXRlLCBzb3VyY2UsIHByb3ApIHtcbiAgdmFyIF9kZXNjJGdldDtcblxuICB2YXIgZGVzYyA9IGdldERlc2NyaXB0b3JGcm9tUHJvdG8oc291cmNlLCBwcm9wKTtcbiAgcmV0dXJuIGRlc2MgPyBcInZhbHVlXCIgaW4gZGVzYyA/IGRlc2MudmFsdWUgOiAvLyBUaGlzIGlzIGEgdmVyeSBzcGVjaWFsIGNhc2UsIGlmIHRoZSBwcm9wIGlzIGEgZ2V0dGVyIGRlZmluZWQgYnkgdGhlXG4gIC8vIHByb3RvdHlwZSwgd2Ugc2hvdWxkIGludm9rZSBpdCB3aXRoIHRoZSBkcmFmdCBhcyBjb250ZXh0IVxuICAoX2Rlc2MkZ2V0ID0gZGVzYy5nZXQpID09PSBudWxsIHx8IF9kZXNjJGdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Rlc2MkZ2V0LmNhbGwoc3RhdGUuZHJhZnRfKSA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApIHtcbiAgLy8gJ2luJyBjaGVja3MgcHJvdG8hXG4gIGlmICghKHByb3AgaW4gc291cmNlKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG5cbiAgd2hpbGUgKHByb3RvKSB7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBwcm9wKTtcbiAgICBpZiAoZGVzYykgcmV0dXJuIGRlc2M7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gbWFya0NoYW5nZWQoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICBzdGF0ZS5tb2RpZmllZF8gPSB0cnVlO1xuXG4gICAgaWYgKHN0YXRlLnBhcmVudF8pIHtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlLnBhcmVudF8pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcHJlcGFyZUNvcHkoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgIHN0YXRlLmNvcHlfID0gc2hhbGxvd0NvcHkoc3RhdGUuYmFzZV8pO1xuICB9XG59XG5cbnZhciBJbW1lciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEltbWVyKGNvbmZpZykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLnVzZVByb3hpZXNfID0gaGFzUHJveGllcztcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdHJ1ZTtcbiAgICAvKipcclxuICAgICAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxyXG4gICAgICogcmV0dXJuIHZhbHVlIG9mdGVuIGRlcGVuZHMgb24gdGhlIGJhc2Ugc3RhdGUpLiBUaGUgcmVjaXBlIGZ1bmN0aW9uIGlzXHJcbiAgICAgKiBmcmVlIHRvIG11dGF0ZSBpdHMgZmlyc3QgYXJndW1lbnQgaG93ZXZlciBpdCB3YW50cy4gQWxsIG11dGF0aW9ucyBhcmVcclxuICAgICAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXHJcbiAgICAgKlxyXG4gICAgICogUGFzcyBvbmx5IGEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgXCJjdXJyaWVkIHByb2R1Y2VyXCIgd2hpY2ggcmVsaWV2ZXMgeW91XHJcbiAgICAgKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxyXG4gICAgICpcclxuICAgICAqIE9ubHkgcGxhaW4gb2JqZWN0cyBhbmQgYXJyYXlzIGFyZSBtYWRlIG11dGFibGUuIEFsbCBvdGhlciBvYmplY3RzIGFyZVxyXG4gICAgICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxyXG4gICAgICpcclxuICAgICAqIE5vdGU6IFRoaXMgZnVuY3Rpb24gaXMgX19ib3VuZF9fIHRvIGl0cyBgSW1tZXJgIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YW55fSBiYXNlIC0gdGhlIGluaXRpYWwgc3RhdGVcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHByb2R1Y2VyIC0gZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIHByb3h5IG9mIHRoZSBiYXNlIHN0YXRlIGFzIGZpcnN0IGFyZ3VtZW50IGFuZCB3aGljaCBjYW4gYmUgZnJlZWx5IG1vZGlmaWVkXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXRjaExpc3RlbmVyIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGFsbCB0aGUgcGF0Y2hlcyBwcm9kdWNlZCBoZXJlXHJcbiAgICAgKiBAcmV0dXJucyB7YW55fSBhIG5ldyBzdGF0ZSwgb3IgdGhlIGluaXRpYWwgc3RhdGUgaWYgbm90aGluZyB3YXMgbW9kaWZpZWRcclxuICAgICAqL1xuXG4gICAgdGhpcy5wcm9kdWNlID0gZnVuY3Rpb24gKGJhc2UsIHJlY2lwZSwgcGF0Y2hMaXN0ZW5lcikge1xuICAgICAgLy8gY3VycmllZCBpbnZvY2F0aW9uXG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgcmVjaXBlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRCYXNlID0gcmVjaXBlO1xuICAgICAgICByZWNpcGUgPSBiYXNlO1xuICAgICAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY3VycmllZFByb2R1Y2UoYmFzZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgYmFzZSA9IGRlZmF1bHRCYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzZWxmLnByb2R1Y2UoYmFzZSwgZnVuY3Rpb24gKGRyYWZ0KSB7XG4gICAgICAgICAgICB2YXIgX3JlY2lwZTtcblxuICAgICAgICAgICAgcmV0dXJuIChfcmVjaXBlID0gcmVjaXBlKS5jYWxsLmFwcGx5KF9yZWNpcGUsIFtfdGhpczIsIGRyYWZ0XS5jb25jYXQoYXJncykpO1xuICAgICAgICAgIH0pOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikgZGllKDYpO1xuICAgICAgaWYgKHBhdGNoTGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGF0Y2hMaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSBkaWUoNyk7XG4gICAgICB2YXIgcmVzdWx0OyAvLyBPbmx5IHBsYWluIG9iamVjdHMsIGFycmF5cywgYW5kIFwiaW1tZXJhYmxlIGNsYXNzZXNcIiBhcmUgZHJhZnRlZC5cblxuICAgICAgaWYgKGlzRHJhZnRhYmxlKGJhc2UpKSB7XG4gICAgICAgIHZhciBzY29wZSA9IGVudGVyU2NvcGUoX3RoaXMpO1xuICAgICAgICB2YXIgcHJveHkgPSBjcmVhdGVQcm94eShfdGhpcywgYmFzZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgdmFyIGhhc0Vycm9yID0gdHJ1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlY2lwZShwcm94eSk7XG4gICAgICAgICAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAvLyBmaW5hbGx5IGluc3RlYWQgb2YgY2F0Y2ggKyByZXRocm93IGJldHRlciBwcmVzZXJ2ZXMgb3JpZ2luYWwgc3RhY2tcbiAgICAgICAgICBpZiAoaGFzRXJyb3IpIHJldm9rZVNjb3BlKHNjb3BlKTtlbHNlIGxlYXZlU2NvcGUoc2NvcGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICByZXZva2VTY29wZShzY29wZSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSk7XG4gICAgICB9IGVsc2UgaWYgKCFiYXNlIHx8IHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlY2lwZShiYXNlKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSByZXN1bHQgPSBiYXNlO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBOT1RISU5HKSByZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChfdGhpcy5hdXRvRnJlZXplXykgZnJlZXplKHJlc3VsdCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHBhdGNoTGlzdGVuZXIpIHtcbiAgICAgICAgICB2YXIgcCA9IFtdO1xuICAgICAgICAgIHZhciBpcCA9IFtdO1xuICAgICAgICAgIGdldFBsdWdpbihcIlBhdGNoZXNcIikuZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfKGJhc2UsIHJlc3VsdCwgcCwgaXApO1xuICAgICAgICAgIHBhdGNoTGlzdGVuZXIocCwgaXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZSBkaWUoMjEsIGJhc2UpO1xuICAgIH07XG5cbiAgICB0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyA9IGZ1bmN0aW9uIChiYXNlLCByZWNpcGUpIHtcbiAgICAgIC8vIGN1cnJpZWQgaW52b2NhdGlvblxuICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXMoc3RhdGUsIGZ1bmN0aW9uIChkcmFmdCkge1xuICAgICAgICAgICAgcmV0dXJuIGJhc2UuYXBwbHkodm9pZCAwLCBbZHJhZnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcztcblxuICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLnByb2R1Y2UoYmFzZSwgcmVjaXBlLCBmdW5jdGlvbiAocCwgaXApIHtcbiAgICAgICAgcGF0Y2hlcyA9IHA7XG4gICAgICAgIGludmVyc2VQYXRjaGVzID0gaXA7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKGZ1bmN0aW9uIChuZXh0U3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gW25leHRTdGF0ZSwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtyZXN1bHQsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzXTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiAoY29uZmlnID09PSBudWxsIHx8IGNvbmZpZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uZmlnLnVzZVByb3hpZXMpID09PSBcImJvb2xlYW5cIikgdGhpcy5zZXRVc2VQcm94aWVzKGNvbmZpZy51c2VQcm94aWVzKTtcbiAgICBpZiAodHlwZW9mIChjb25maWcgPT09IG51bGwgfHwgY29uZmlnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25maWcuYXV0b0ZyZWV6ZSkgPT09IFwiYm9vbGVhblwiKSB0aGlzLnNldEF1dG9GcmVlemUoY29uZmlnLmF1dG9GcmVlemUpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEltbWVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY3JlYXRlRHJhZnQgPSBmdW5jdGlvbiBjcmVhdGVEcmFmdChiYXNlKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShiYXNlKSkgZGllKDgpO1xuICAgIGlmIChpc0RyYWZ0KGJhc2UpKSBiYXNlID0gY3VycmVudChiYXNlKTtcbiAgICB2YXIgc2NvcGUgPSBlbnRlclNjb3BlKHRoaXMpO1xuICAgIHZhciBwcm94eSA9IGNyZWF0ZVByb3h5KHRoaXMsIGJhc2UsIHVuZGVmaW5lZCk7XG4gICAgcHJveHlbRFJBRlRfU1RBVEVdLmlzTWFudWFsXyA9IHRydWU7XG4gICAgbGVhdmVTY29wZShzY29wZSk7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xuXG4gIF9wcm90by5maW5pc2hEcmFmdCA9IGZ1bmN0aW9uIGZpbmlzaERyYWZ0KGRyYWZ0LCBwYXRjaExpc3RlbmVyKSB7XG4gICAgdmFyIHN0YXRlID0gZHJhZnQgJiYgZHJhZnRbRFJBRlRfU1RBVEVdO1xuXG4gICAge1xuICAgICAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUuaXNNYW51YWxfKSBkaWUoOSk7XG4gICAgICBpZiAoc3RhdGUuZmluYWxpemVkXykgZGllKDEwKTtcbiAgICB9XG5cbiAgICB2YXIgc2NvcGUgPSBzdGF0ZS5zY29wZV87XG4gICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgIHJldHVybiBwcm9jZXNzUmVzdWx0KHVuZGVmaW5lZCwgc2NvcGUpO1xuICB9XG4gIC8qKlxyXG4gICAqIFBhc3MgdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IGZyZWV6ZSBhbGwgY29waWVzIGNyZWF0ZWQgYnkgSW1tZXIuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBhdXRvLWZyZWV6aW5nIGlzIGVuYWJsZWQuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0QXV0b0ZyZWV6ZSA9IGZ1bmN0aW9uIHNldEF1dG9GcmVlemUodmFsdWUpIHtcbiAgICB0aGlzLmF1dG9GcmVlemVfID0gdmFsdWU7XG4gIH1cbiAgLyoqXHJcbiAgICogUGFzcyB0cnVlIHRvIHVzZSB0aGUgRVMyMDE1IGBQcm94eWAgY2xhc3Mgd2hlbiBjcmVhdGluZyBkcmFmdHMsIHdoaWNoIGlzXHJcbiAgICogYWx3YXlzIGZhc3RlciB0aGFuIHVzaW5nIEVTNSBwcm94aWVzLlxyXG4gICAqXHJcbiAgICogQnkgZGVmYXVsdCwgZmVhdHVyZSBkZXRlY3Rpb24gaXMgdXNlZCwgc28gY2FsbGluZyB0aGlzIGlzIHJhcmVseSBuZWNlc3NhcnkuXHJcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0VXNlUHJveGllcyA9IGZ1bmN0aW9uIHNldFVzZVByb3hpZXModmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgIWhhc1Byb3hpZXMpIHtcbiAgICAgIGRpZSgyMCk7XG4gICAgfVxuXG4gICAgdGhpcy51c2VQcm94aWVzXyA9IHZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5hcHBseVBhdGNoZXMgPSBmdW5jdGlvbiBhcHBseVBhdGNoZXMoYmFzZSwgcGF0Y2hlcykge1xuICAgIC8vIElmIGEgcGF0Y2ggcmVwbGFjZXMgdGhlIGVudGlyZSBzdGF0ZSwgdGFrZSB0aGF0IHJlcGxhY2VtZW50IGFzIGJhc2VcbiAgICAvLyBiZWZvcmUgYXBwbHlpbmcgcGF0Y2hlc1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gcGF0Y2hlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIHBhdGNoID0gcGF0Y2hlc1tpXTtcblxuICAgICAgaWYgKHBhdGNoLnBhdGgubGVuZ3RoID09PSAwICYmIHBhdGNoLm9wID09PSBcInJlcGxhY2VcIikge1xuICAgICAgICBiYXNlID0gcGF0Y2gudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gLy8gSWYgdGhlcmUgd2FzIGEgcGF0Y2ggdGhhdCByZXBsYWNlZCB0aGUgZW50aXJlIHN0YXRlLCBzdGFydCBmcm9tIHRoZVxuICAgIC8vIHBhdGNoIGFmdGVyIHRoYXQuXG5cblxuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIHBhdGNoZXMgPSBwYXRjaGVzLnNsaWNlKGkgKyAxKTtcbiAgICB9XG5cbiAgICB2YXIgYXBwbHlQYXRjaGVzSW1wbCA9IGdldFBsdWdpbihcIlBhdGNoZXNcIikuYXBwbHlQYXRjaGVzXztcblxuICAgIGlmIChpc0RyYWZ0KGJhc2UpKSB7XG4gICAgICAvLyBOLkI6IG5ldmVyIGhpdHMgaWYgc29tZSBwYXRjaCBhIHJlcGxhY2VtZW50LCBwYXRjaGVzIGFyZSBuZXZlciBkcmFmdHNcbiAgICAgIHJldHVybiBhcHBseVBhdGNoZXNJbXBsKGJhc2UsIHBhdGNoZXMpO1xuICAgIH0gLy8gT3RoZXJ3aXNlLCBwcm9kdWNlIGEgY29weSBvZiB0aGUgYmFzZSBzdGF0ZS5cblxuXG4gICAgcmV0dXJuIHRoaXMucHJvZHVjZShiYXNlLCBmdW5jdGlvbiAoZHJhZnQpIHtcbiAgICAgIHJldHVybiBhcHBseVBhdGNoZXNJbXBsKGRyYWZ0LCBwYXRjaGVzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSW1tZXI7XG59KCk7XG5mdW5jdGlvbiBjcmVhdGVQcm94eShpbW1lciwgdmFsdWUsIHBhcmVudCkge1xuICAvLyBwcmVjb25kaXRpb246IGNyZWF0ZVByb3h5IHNob3VsZCBiZSBndWFyZGVkIGJ5IGlzRHJhZnRhYmxlLCBzbyB3ZSBrbm93IHdlIGNhbiBzYWZlbHkgZHJhZnRcbiAgdmFyIGRyYWZ0ID0gaXNNYXAodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5TWFwXyh2YWx1ZSwgcGFyZW50KSA6IGlzU2V0KHZhbHVlKSA/IGdldFBsdWdpbihcIk1hcFNldFwiKS5wcm94eVNldF8odmFsdWUsIHBhcmVudCkgOiBpbW1lci51c2VQcm94aWVzXyA/IGNyZWF0ZVByb3h5UHJveHkodmFsdWUsIHBhcmVudCkgOiBnZXRQbHVnaW4oXCJFUzVcIikuY3JlYXRlRVM1UHJveHlfKHZhbHVlLCBwYXJlbnQpO1xuICB2YXIgc2NvcGUgPSBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCk7XG4gIHNjb3BlLmRyYWZ0c18ucHVzaChkcmFmdCk7XG4gIHJldHVybiBkcmFmdDtcbn1cblxuZnVuY3Rpb24gY3VycmVudCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnQodmFsdWUpKSBkaWUoMjIsIHZhbHVlKTtcbiAgcmV0dXJuIGN1cnJlbnRJbXBsKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY3VycmVudEltcGwodmFsdWUpIHtcbiAgaWYgKCFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgdmFyIHN0YXRlID0gdmFsdWVbRFJBRlRfU1RBVEVdO1xuICB2YXIgY29weTtcbiAgdmFyIGFyY2hUeXBlID0gZ2V0QXJjaHR5cGUodmFsdWUpO1xuXG4gIGlmIChzdGF0ZSkge1xuICAgIGlmICghc3RhdGUubW9kaWZpZWRfICYmIChzdGF0ZS50eXBlXyA8IDQgfHwgIWdldFBsdWdpbihcIkVTNVwiKS5oYXNDaGFuZ2VzXyhzdGF0ZSkpKSByZXR1cm4gc3RhdGUuYmFzZV87IC8vIE9wdGltaXphdGlvbjogYXZvaWQgZ2VuZXJhdGluZyBuZXcgZHJhZnRzIGR1cmluZyBjb3B5aW5nXG5cbiAgICBzdGF0ZS5maW5hbGl6ZWRfID0gdHJ1ZTtcbiAgICBjb3B5ID0gY29weUhlbHBlcih2YWx1ZSwgYXJjaFR5cGUpO1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb3B5ID0gY29weUhlbHBlcih2YWx1ZSwgYXJjaFR5cGUpO1xuICB9XG5cbiAgZWFjaChjb3B5LCBmdW5jdGlvbiAoa2V5LCBjaGlsZFZhbHVlKSB7XG4gICAgaWYgKHN0YXRlICYmIGdldChzdGF0ZS5iYXNlXywga2V5KSA9PT0gY2hpbGRWYWx1ZSkgcmV0dXJuOyAvLyBubyBuZWVkIHRvIGNvcHkgb3Igc2VhcmNoIGluIHNvbWV0aGluZyB0aGF0IGRpZG4ndCBjaGFuZ2VcblxuICAgIHNldChjb3B5LCBrZXksIGN1cnJlbnRJbXBsKGNoaWxkVmFsdWUpKTtcbiAgfSk7IC8vIEluIHRoZSBmdXR1cmUsIHdlIG1pZ2h0IGNvbnNpZGVyIGZyZWV6aW5nIGhlcmUsIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNldHRpbmdzXG5cbiAgcmV0dXJuIGFyY2hUeXBlID09PSAzXG4gIC8qIFNldCAqL1xuICA/IG5ldyBTZXQoY29weSkgOiBjb3B5O1xufVxuXG5mdW5jdGlvbiBjb3B5SGVscGVyKHZhbHVlLCBhcmNoVHlwZSkge1xuICAvLyBjcmVhdGVzIGEgc2hhbGxvdyBjb3B5LCBldmVuIGlmIGl0IGlzIGEgbWFwIG9yIHNldFxuICBzd2l0Y2ggKGFyY2hUeXBlKSB7XG4gICAgY2FzZSAyXG4gICAgLyogTWFwICovXG4gICAgOlxuICAgICAgcmV0dXJuIG5ldyBNYXAodmFsdWUpO1xuXG4gICAgY2FzZSAzXG4gICAgLyogU2V0ICovXG4gICAgOlxuICAgICAgLy8gU2V0IHdpbGwgYmUgY2xvbmVkIGFzIGFycmF5IHRlbXBvcmFyaWx5LCBzbyB0aGF0IHdlIGNhbiByZXBsYWNlIGluZGl2aWR1YWwgaXRlbXNcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBzaGFsbG93Q29weSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUVTNSgpIHtcbiAgZnVuY3Rpb24gd2lsbEZpbmFsaXplRVM1XyhzY29wZSwgcmVzdWx0LCBpc1JlcGxhY2VkKSB7XG4gICAgaWYgKCFpc1JlcGxhY2VkKSB7XG4gICAgICBpZiAoc2NvcGUucGF0Y2hlc18pIHtcbiAgICAgICAgbWFya0NoYW5nZXNSZWN1cnNpdmVseShzY29wZS5kcmFmdHNfWzBdKTtcbiAgICAgIH0gLy8gVGhpcyBpcyBmYXN0ZXIgd2hlbiB3ZSBkb24ndCBjYXJlIGFib3V0IHdoaWNoIGF0dHJpYnV0ZXMgY2hhbmdlZC5cblxuXG4gICAgICBtYXJrQ2hhbmdlc1N3ZWVwKHNjb3BlLmRyYWZ0c18pO1xuICAgIH0gLy8gV2hlbiBhIGNoaWxkIGRyYWZ0IGlzIHJldHVybmVkLCBsb29rIGZvciBjaGFuZ2VzLlxuICAgIGVsc2UgaWYgKGlzRHJhZnQocmVzdWx0KSAmJiByZXN1bHRbRFJBRlRfU1RBVEVdLnNjb3BlXyA9PT0gc2NvcGUpIHtcbiAgICAgICAgbWFya0NoYW5nZXNTd2VlcChzY29wZS5kcmFmdHNfKTtcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVTNURyYWZ0KGlzQXJyYXksIGJhc2UpIHtcbiAgICBpZiAoaXNBcnJheSkge1xuICAgICAgdmFyIGRyYWZ0ID0gbmV3IEFycmF5KGJhc2UubGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYXNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkcmFmdCwgXCJcIiArIGksIHByb3h5UHJvcGVydHkoaSwgdHJ1ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZHJhZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVzY3JpcHRvcnMgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGJhc2UpO1xuXG4gICAgICBkZWxldGUgX2Rlc2NyaXB0b3JzW0RSQUZUX1NUQVRFXTtcbiAgICAgIHZhciBrZXlzID0gb3duS2V5cyhfZGVzY3JpcHRvcnMpO1xuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwga2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbX2ldO1xuICAgICAgICBfZGVzY3JpcHRvcnNba2V5XSA9IHByb3h5UHJvcGVydHkoa2V5LCBpc0FycmF5IHx8ICEhX2Rlc2NyaXB0b3JzW2tleV0uZW51bWVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSwgX2Rlc2NyaXB0b3JzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFUzVQcm94eV8oYmFzZSwgcGFyZW50KSB7XG4gICAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpO1xuICAgIHZhciBkcmFmdCA9IGNyZWF0ZUVTNURyYWZ0KGlzQXJyYXksIGJhc2UpO1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHR5cGVfOiBpc0FycmF5ID8gNVxuICAgICAgLyogRVM1QXJyYXkgKi9cbiAgICAgIDogNFxuICAgICAgLyogRVM1T2JqZWN0ICovXG4gICAgICAsXG4gICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgIGFzc2lnbmVkXzoge30sXG4gICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAvLyBiYXNlIGlzIHRoZSBvYmplY3Qgd2UgYXJlIGRyYWZ0aW5nXG4gICAgICBiYXNlXzogYmFzZSxcbiAgICAgIC8vIGRyYWZ0IGlzIHRoZSBkcmFmdCBvYmplY3QgaXRzZWxmLCB0aGF0IHRyYXBzIGFsbCByZWFkcyBhbmQgcmVhZHMgZnJvbSBlaXRoZXIgdGhlIGJhc2UgKGlmIHVubW9kaWZpZWQpIG9yIGNvcHkgKGlmIG1vZGlmaWVkKVxuICAgICAgZHJhZnRfOiBkcmFmdCxcbiAgICAgIGNvcHlfOiBudWxsLFxuICAgICAgcmV2b2tlZF86IGZhbHNlLFxuICAgICAgaXNNYW51YWxfOiBmYWxzZVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRyYWZ0LCBEUkFGVF9TVEFURSwge1xuICAgICAgdmFsdWU6IHN0YXRlLFxuICAgICAgLy8gZW51bWVyYWJsZTogZmFsc2UgPC0gdGhlIGRlZmF1bHRcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWZ0O1xuICB9IC8vIHByb3BlcnR5IGRlc2NyaXB0b3JzIGFyZSByZWN5Y2xlZCB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgY3JlYXRlIGEgZ2V0IGFuZCBzZXQgY2xvc3VyZSBwZXIgcHJvcGVydHksXG4gIC8vIGJ1dCBzaGFyZSB0aGVtIGFsbCBpbnN0ZWFkXG5cblxuICB2YXIgZGVzY3JpcHRvcnMgPSB7fTtcblxuICBmdW5jdGlvbiBwcm94eVByb3BlcnR5KHByb3AsIGVudW1lcmFibGUpIHtcbiAgICB2YXIgZGVzYyA9IGRlc2NyaXB0b3JzW3Byb3BdO1xuXG4gICAgaWYgKGRlc2MpIHtcbiAgICAgIGRlc2MuZW51bWVyYWJsZSA9IGVudW1lcmFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2NyaXB0b3JzW3Byb3BdID0gZGVzYyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBlbnVtZXJhYmxlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpOyAvLyBAdHMtaWdub3JlXG5cbiAgICAgICAgICByZXR1cm4gb2JqZWN0VHJhcHMuZ2V0KHN0YXRlLCBwcm9wKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpOyAvLyBAdHMtaWdub3JlXG5cbiAgICAgICAgICBvYmplY3RUcmFwcy5zZXQoc3RhdGUsIHByb3AsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzYztcbiAgfSAvLyBUaGlzIGxvb2tzIGV4cGVuc2l2ZSwgYnV0IG9ubHkgcHJveGllcyBhcmUgdmlzaXRlZCwgYW5kIG9ubHkgb2JqZWN0cyB3aXRob3V0IGtub3duIGNoYW5nZXMgYXJlIHNjYW5uZWQuXG5cblxuICBmdW5jdGlvbiBtYXJrQ2hhbmdlc1N3ZWVwKGRyYWZ0cykge1xuICAgIC8vIFRoZSBuYXR1cmFsIG9yZGVyIG9mIGRyYWZ0cyBpbiB0aGUgYHNjb3BlYCBhcnJheSBpcyBiYXNlZCBvbiB3aGVuIHRoZXlcbiAgICAvLyB3ZXJlIGFjY2Vzc2VkLiBCeSBwcm9jZXNzaW5nIGRyYWZ0cyBpbiByZXZlcnNlIG5hdHVyYWwgb3JkZXIsIHdlIGhhdmUgYVxuICAgIC8vIGJldHRlciBjaGFuY2Ugb2YgcHJvY2Vzc2luZyBsZWFmIG5vZGVzIGZpcnN0LiBXaGVuIGEgbGVhZiBub2RlIGlzIGtub3duIHRvXG4gICAgLy8gaGF2ZSBjaGFuZ2VkLCB3ZSBjYW4gYXZvaWQgYW55IHRyYXZlcnNhbCBvZiBpdHMgYW5jZXN0b3Igbm9kZXMuXG4gICAgZm9yICh2YXIgaSA9IGRyYWZ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIHN0YXRlID0gZHJhZnRzW2ldW0RSQUZUX1NUQVRFXTtcblxuICAgICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZS50eXBlXykge1xuICAgICAgICAgIGNhc2UgNVxuICAgICAgICAgIC8qIEVTNUFycmF5ICovXG4gICAgICAgICAgOlxuICAgICAgICAgICAgaWYgKGhhc0FycmF5Q2hhbmdlcyhzdGF0ZSkpIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSA0XG4gICAgICAgICAgLyogRVM1T2JqZWN0ICovXG4gICAgICAgICAgOlxuICAgICAgICAgICAgaWYgKGhhc09iamVjdENoYW5nZXMoc3RhdGUpKSBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkob2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICAgIHZhciBzdGF0ZSA9IG9iamVjdFtEUkFGVF9TVEFURV07XG4gICAgaWYgKCFzdGF0ZSkgcmV0dXJuO1xuICAgIHZhciBiYXNlXyA9IHN0YXRlLmJhc2VfLFxuICAgICAgICBkcmFmdF8gPSBzdGF0ZS5kcmFmdF8sXG4gICAgICAgIGFzc2lnbmVkXyA9IHN0YXRlLmFzc2lnbmVkXyxcbiAgICAgICAgdHlwZV8gPSBzdGF0ZS50eXBlXztcblxuICAgIGlmICh0eXBlXyA9PT0gNFxuICAgIC8qIEVTNU9iamVjdCAqL1xuICAgICkge1xuICAgICAgICAvLyBMb29rIGZvciBhZGRlZCBrZXlzLlxuICAgICAgICAvLyBwcm9iYWJseSB0aGVyZSBpcyBhIGZhc3RlciB3YXkgdG8gZGV0ZWN0IGNoYW5nZXMsIGFzIHN3ZWVwICsgcmVjdXJzZSBzZWVtcyB0byBkbyBzb21lXG4gICAgICAgIC8vIHVubmVjZXNzYXJ5IHdvcmsuXG4gICAgICAgIC8vIGFsc286IHByb2JhYmx5IHdlIGNhbiBzdG9yZSB0aGUgaW5mb3JtYXRpb24gd2UgZGV0ZWN0IGhlcmUsIHRvIHNwZWVkIHVwIHRyZWUgZmluYWxpemF0aW9uIVxuICAgICAgICBlYWNoKGRyYWZ0XywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmIChrZXkgPT09IERSQUZUX1NUQVRFKSByZXR1cm47IC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG5cbiAgICAgICAgICBpZiAoYmFzZV9ba2V5XSA9PT0gdW5kZWZpbmVkICYmICFoYXMoYmFzZV8sIGtleSkpIHtcbiAgICAgICAgICAgIGFzc2lnbmVkX1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFhc3NpZ25lZF9ba2V5XSkge1xuICAgICAgICAgICAgLy8gT25seSB1bnRvdWNoZWQgcHJvcGVydGllcyB0cmlnZ2VyIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIG1hcmtDaGFuZ2VzUmVjdXJzaXZlbHkoZHJhZnRfW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIExvb2sgZm9yIHJlbW92ZWQga2V5cy5cblxuICAgICAgICBlYWNoKGJhc2VfLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgLy8gVGhlIGB1bmRlZmluZWRgIGNoZWNrIGlzIGEgZmFzdCBwYXRoIGZvciBwcmUtZXhpc3Rpbmcga2V5cy5cbiAgICAgICAgICBpZiAoZHJhZnRfW2tleV0gPT09IHVuZGVmaW5lZCAmJiAhaGFzKGRyYWZ0Xywga2V5KSkge1xuICAgICAgICAgICAgYXNzaWduZWRfW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlXyA9PT0gNVxuICAgIC8qIEVTNUFycmF5ICovXG4gICAgKSB7XG4gICAgICAgIGlmIChoYXNBcnJheUNoYW5nZXMoc3RhdGUpKSB7XG4gICAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICAgIGFzc2lnbmVkXy5sZW5ndGggPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRyYWZ0Xy5sZW5ndGggPCBiYXNlXy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gZHJhZnRfLmxlbmd0aDsgaSA8IGJhc2VfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhc3NpZ25lZF9baV0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kyID0gYmFzZV8ubGVuZ3RoOyBfaTIgPCBkcmFmdF8ubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgYXNzaWduZWRfW19pMl0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBNaW5pbXVtIGNvdW50IGlzIGVub3VnaCwgdGhlIG90aGVyIHBhcnRzIGhhcyBiZWVuIHByb2Nlc3NlZC5cblxuXG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihkcmFmdF8ubGVuZ3RoLCBiYXNlXy5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IG1pbjsgX2kzKyspIHtcbiAgICAgICAgICAvLyBPbmx5IHVudG91Y2hlZCBpbmRpY2VzIHRyaWdnZXIgcmVjdXJzaW9uLlxuICAgICAgICAgIGlmICghZHJhZnRfLmhhc093blByb3BlcnR5KF9pMykpIHtcbiAgICAgICAgICAgIGFzc2lnbmVkX1tfaTNdID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXNzaWduZWRfW19pM10gPT09IHVuZGVmaW5lZCkgbWFya0NoYW5nZXNSZWN1cnNpdmVseShkcmFmdF9bX2kzXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc09iamVjdENoYW5nZXMoc3RhdGUpIHtcbiAgICB2YXIgYmFzZV8gPSBzdGF0ZS5iYXNlXyxcbiAgICAgICAgZHJhZnRfID0gc3RhdGUuZHJhZnRfOyAvLyBTZWFyY2ggZm9yIGFkZGVkIGtleXMgYW5kIGNoYW5nZWQga2V5cy4gU3RhcnQgYXQgdGhlIGJhY2ssIGJlY2F1c2VcbiAgICAvLyBub24tbnVtZXJpYyBrZXlzIGFyZSBvcmRlcmVkIGJ5IHRpbWUgb2YgZGVmaW5pdGlvbiBvbiB0aGUgb2JqZWN0LlxuXG4gICAgdmFyIGtleXMgPSBvd25LZXlzKGRyYWZ0Xyk7XG5cbiAgICBmb3IgKHZhciBpID0ga2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoa2V5ID09PSBEUkFGVF9TVEFURSkgY29udGludWU7XG4gICAgICB2YXIgYmFzZVZhbHVlID0gYmFzZV9ba2V5XTsgLy8gVGhlIGB1bmRlZmluZWRgIGNoZWNrIGlzIGEgZmFzdCBwYXRoIGZvciBwcmUtZXhpc3Rpbmcga2V5cy5cblxuICAgICAgaWYgKGJhc2VWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICFoYXMoYmFzZV8sIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IC8vIE9uY2UgYSBiYXNlIGtleSBpcyBkZWxldGVkLCBmdXR1cmUgY2hhbmdlcyBnbyB1bmRldGVjdGVkLCBiZWNhdXNlIGl0c1xuICAgICAgLy8gZGVzY3JpcHRvciBpcyBlcmFzZWQuIFRoaXMgYnJhbmNoIGRldGVjdHMgYW55IG1pc3NlZCBjaGFuZ2VzLlxuICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZHJhZnRfW2tleV07XG5cbiAgICAgICAgICB2YXIgX3N0YXRlID0gdmFsdWUgJiYgdmFsdWVbRFJBRlRfU1RBVEVdO1xuXG4gICAgICAgICAgaWYgKF9zdGF0ZSA/IF9zdGF0ZS5iYXNlXyAhPT0gYmFzZVZhbHVlIDogIWlzKHZhbHVlLCBiYXNlVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IC8vIEF0IHRoaXMgcG9pbnQsIG5vIGtleXMgd2VyZSBhZGRlZCBvciBjaGFuZ2VkLlxuICAgIC8vIENvbXBhcmUga2V5IGNvdW50IHRvIGRldGVybWluZSBpZiBrZXlzIHdlcmUgZGVsZXRlZC5cblxuXG4gICAgdmFyIGJhc2VJc0RyYWZ0ID0gISFiYXNlX1tEUkFGVF9TVEFURV07XG4gICAgcmV0dXJuIGtleXMubGVuZ3RoICE9PSBvd25LZXlzKGJhc2VfKS5sZW5ndGggKyAoYmFzZUlzRHJhZnQgPyAwIDogMSk7IC8vICsgMSB0byBjb3JyZWN0IGZvciBEUkFGVF9TVEFURVxuICB9XG5cbiAgZnVuY3Rpb24gaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKSB7XG4gICAgdmFyIGRyYWZ0XyA9IHN0YXRlLmRyYWZ0XztcbiAgICBpZiAoZHJhZnRfLmxlbmd0aCAhPT0gc3RhdGUuYmFzZV8ubGVuZ3RoKSByZXR1cm4gdHJ1ZTsgLy8gU2VlICMxMTZcbiAgICAvLyBJZiB3ZSBmaXJzdCBzaG9ydGVuIHRoZSBsZW5ndGgsIG91ciBhcnJheSBpbnRlcmNlcHRvcnMgd2lsbCBiZSByZW1vdmVkLlxuICAgIC8vIElmIGFmdGVyIHRoYXQgbmV3IGl0ZW1zIGFyZSBhZGRlZCwgcmVzdWx0IGluIHRoZSBzYW1lIG9yaWdpbmFsIGxlbmd0aCxcbiAgICAvLyB0aG9zZSBsYXN0IGl0ZW1zIHdpbGwgaGF2ZSBubyBpbnRlcmNlcHRpbmcgcHJvcGVydHkuXG4gICAgLy8gU28gaWYgdGhlcmUgaXMgbm8gb3duIGRlc2NyaXB0b3Igb24gdGhlIGxhc3QgcG9zaXRpb24sIHdlIGtub3cgdGhhdCBpdGVtcyB3ZXJlIHJlbW92ZWQgYW5kIGFkZGVkXG4gICAgLy8gTi5CLjogc3BsaWNlLCB1bnNoaWZ0LCBldGMgb25seSBzaGlmdCB2YWx1ZXMgYXJvdW5kLCBidXQgbm90IHByb3AgZGVzY3JpcHRvcnMsIHNvIHdlIG9ubHkgaGF2ZSB0byBjaGVja1xuICAgIC8vIHRoZSBsYXN0IG9uZVxuICAgIC8vIGxhc3QgZGVzY3JpcHRvciBjYW4gYmUgbm90IGEgdHJhcCwgaWYgdGhlIGFycmF5IHdhcyBleHRlbmRlZFxuXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRyYWZ0XywgZHJhZnRfLmxlbmd0aCAtIDEpOyAvLyBkZXNjcmlwdG9yIGNhbiBiZSBudWxsLCBidXQgb25seSBmb3IgbmV3bHkgY3JlYXRlZCBzcGFyc2UgYXJyYXlzLCBlZy4gbmV3IEFycmF5KDEwKVxuXG4gICAgaWYgKGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3IuZ2V0KSByZXR1cm4gdHJ1ZTsgLy8gaWYgd2UgbWlzcyBhIHByb3BlcnR5LCBpdCBoYXMgYmVlbiBkZWxldGVkLCBzbyBhcnJheSBwcm9ib2JhbHkgY2hhbmdlZFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkcmFmdF8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghZHJhZnRfLmhhc093blByb3BlcnR5KGkpKSByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIEZvciBhbGwgb3RoZXIgY2FzZXMsIHdlIGRvbid0IGhhdmUgdG8gY29tcGFyZSwgYXMgdGhleSB3b3VsZCBoYXZlIGJlZW4gcGlja2VkIHVwIGJ5IHRoZSBpbmRleCBzZXR0ZXJzXG5cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NoYW5nZXNfKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnR5cGVfID09PSA0XG4gICAgLyogRVM1T2JqZWN0ICovXG4gICAgPyBoYXNPYmplY3RDaGFuZ2VzKHN0YXRlKSA6IGhhc0FycmF5Q2hhbmdlcyhzdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnRVbnJldm9rZWQoc3RhdGVcbiAgLypFUzVTdGF0ZSB8IE1hcFN0YXRlIHwgU2V0U3RhdGUqL1xuICApIHtcbiAgICBpZiAoc3RhdGUucmV2b2tlZF8pIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSk7XG4gIH1cblxuICBsb2FkUGx1Z2luKFwiRVM1XCIsIHtcbiAgICBjcmVhdGVFUzVQcm94eV86IGNyZWF0ZUVTNVByb3h5XyxcbiAgICB3aWxsRmluYWxpemVFUzVfOiB3aWxsRmluYWxpemVFUzVfLFxuICAgIGhhc0NoYW5nZXNfOiBoYXNDaGFuZ2VzX1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlUGF0Y2hlcygpIHtcbiAgdmFyIFJFUExBQ0UgPSBcInJlcGxhY2VcIjtcbiAgdmFyIEFERCA9IFwiYWRkXCI7XG4gIHZhciBSRU1PVkUgPSBcInJlbW92ZVwiO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUGF0Y2hlc18oc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHN3aXRjaCAoc3RhdGUudHlwZV8pIHtcbiAgICAgIGNhc2UgMFxuICAgICAgLyogUHJveHlPYmplY3QgKi9cbiAgICAgIDpcbiAgICAgIGNhc2UgNFxuICAgICAgLyogRVM1T2JqZWN0ICovXG4gICAgICA6XG4gICAgICBjYXNlIDJcbiAgICAgIC8qIE1hcCAqL1xuICAgICAgOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpO1xuXG4gICAgICBjYXNlIDVcbiAgICAgIC8qIEVTNUFycmF5ICovXG4gICAgICA6XG4gICAgICBjYXNlIDFcbiAgICAgIC8qIFByb3h5QXJyYXkgKi9cbiAgICAgIDpcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpO1xuXG4gICAgICBjYXNlIDNcbiAgICAgIC8qIFNldCAqL1xuICAgICAgOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVTZXRQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQXJyYXlQYXRjaGVzKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICB2YXIgYmFzZV8gPSBzdGF0ZS5iYXNlXyxcbiAgICAgICAgYXNzaWduZWRfID0gc3RhdGUuYXNzaWduZWRfO1xuICAgIHZhciBjb3B5XyA9IHN0YXRlLmNvcHlfOyAvLyBSZWR1Y2UgY29tcGxleGl0eSBieSBlbnN1cmluZyBgYmFzZWAgaXMgbmV2ZXIgbG9uZ2VyLlxuXG4gICAgaWYgKGNvcHlfLmxlbmd0aCA8IGJhc2VfLmxlbmd0aCkge1xuICAgICAgdmFyIF9yZWYgPSBbY29weV8sIGJhc2VfXTtcbiAgICAgIGJhc2VfID0gX3JlZlswXTtcbiAgICAgIGNvcHlfID0gX3JlZlsxXTtcbiAgICAgIHZhciBfcmVmMiA9IFtpbnZlcnNlUGF0Y2hlcywgcGF0Y2hlc107XG4gICAgICBwYXRjaGVzID0gX3JlZjJbMF07XG4gICAgICBpbnZlcnNlUGF0Y2hlcyA9IF9yZWYyWzFdO1xuICAgIH0gLy8gUHJvY2VzcyByZXBsYWNlZCBpbmRpY2VzLlxuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2VfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXNzaWduZWRfW2ldICYmIGNvcHlfW2ldICE9PSBiYXNlX1tpXSkge1xuICAgICAgICB2YXIgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgICAgLy8gZHVlIHRvIHRoZSBiYXNlL2NvcHkgaW52ZXJzaW9uIGF0IHRoZSBzdGFydCBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW2ldKVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoYmFzZV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gLy8gUHJvY2VzcyBhZGRlZCBpbmRpY2VzLlxuXG5cbiAgICBmb3IgKHZhciBfaSA9IGJhc2VfLmxlbmd0aDsgX2kgPCBjb3B5Xy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbX2ldKTtcblxuICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgb3A6IEFERCxcbiAgICAgICAgcGF0aDogX3BhdGgsXG4gICAgICAgIC8vIE5lZWQgdG8gbWF5YmUgY2xvbmUgaXQsIGFzIGl0IGNhbiBpbiBmYWN0IGJlIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKGNvcHlfW19pXSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChiYXNlXy5sZW5ndGggPCBjb3B5Xy5sZW5ndGgpIHtcbiAgICAgIGludmVyc2VQYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgcGF0aDogYmFzZVBhdGguY29uY2F0KFtcImxlbmd0aFwiXSksXG4gICAgICAgIHZhbHVlOiBiYXNlXy5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSAvLyBUaGlzIGlzIHVzZWQgZm9yIGJvdGggTWFwIG9iamVjdHMgYW5kIG5vcm1hbCBvYmplY3RzLlxuXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkKHN0YXRlLCBiYXNlUGF0aCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICB2YXIgYmFzZV8gPSBzdGF0ZS5iYXNlXyxcbiAgICAgICAgY29weV8gPSBzdGF0ZS5jb3B5XztcbiAgICBlYWNoKHN0YXRlLmFzc2lnbmVkXywgZnVuY3Rpb24gKGtleSwgYXNzaWduZWRWYWx1ZSkge1xuICAgICAgdmFyIG9yaWdWYWx1ZSA9IGdldChiYXNlXywga2V5KTtcbiAgICAgIHZhciB2YWx1ZSA9IGdldChjb3B5Xywga2V5KTtcbiAgICAgIHZhciBvcCA9ICFhc3NpZ25lZFZhbHVlID8gUkVNT1ZFIDogaGFzKGJhc2VfLCBrZXkpID8gUkVQTEFDRSA6IEFERDtcbiAgICAgIGlmIChvcmlnVmFsdWUgPT09IHZhbHVlICYmIG9wID09PSBSRVBMQUNFKSByZXR1cm47XG4gICAgICB2YXIgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChrZXkpO1xuICAgICAgcGF0Y2hlcy5wdXNoKG9wID09PSBSRU1PVkUgPyB7XG4gICAgICAgIG9wOiBvcCxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSA6IHtcbiAgICAgICAgb3A6IG9wLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaChvcCA9PT0gQUREID8ge1xuICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9IDogb3AgPT09IFJFTU9WRSA/IHtcbiAgICAgICAgb3A6IEFERCxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgdmFsdWU6IGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9yaWdWYWx1ZSlcbiAgICAgIH0gOiB7XG4gICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVNldFBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHZhciBiYXNlXyA9IHN0YXRlLmJhc2VfLFxuICAgICAgICBjb3B5XyA9IHN0YXRlLmNvcHlfO1xuICAgIHZhciBpID0gMDtcbiAgICBiYXNlXy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKCFjb3B5Xy5oYXModmFsdWUpKSB7XG4gICAgICAgIHZhciBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFTU9WRSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMudW5zaGlmdCh7XG4gICAgICAgICAgb3A6IEFERCxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIGkgPSAwO1xuICAgIGNvcHlfLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoIWJhc2VfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZVZhbHVlLCByZXBsYWNlbWVudCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXMpIHtcbiAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIHZhbHVlOiByZXBsYWNlbWVudCA9PT0gTk9USElORyA/IHVuZGVmaW5lZCA6IHJlcGxhY2VtZW50XG4gICAgfSk7XG4gICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IGJhc2VWYWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlQYXRjaGVzXyhkcmFmdCwgcGF0Y2hlcykge1xuICAgIHBhdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAocGF0Y2gpIHtcbiAgICAgIHZhciBwYXRoID0gcGF0Y2gucGF0aCxcbiAgICAgICAgICBvcCA9IHBhdGNoLm9wO1xuICAgICAgdmFyIGJhc2UgPSBkcmFmdDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB2YXIgcGFyZW50VHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgICB2YXIgcCA9IFwiXCIgKyBwYXRoW2ldOyAvLyBTZWUgIzczOCwgYXZvaWQgcHJvdG90eXBlIHBvbGx1dGlvblxuXG4gICAgICAgIGlmICgocGFyZW50VHlwZSA9PT0gMFxuICAgICAgICAvKiBPYmplY3QgKi9cbiAgICAgICAgfHwgcGFyZW50VHlwZSA9PT0gMVxuICAgICAgICAvKiBBcnJheSAqL1xuICAgICAgICApICYmIChwID09PSBcIl9fcHJvdG9fX1wiIHx8IHAgPT09IFwiY29uc3RydWN0b3JcIikpIGRpZSgyNCk7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHAgPT09IFwicHJvdG90eXBlXCIpIGRpZSgyNCk7XG4gICAgICAgIGJhc2UgPSBnZXQoYmFzZSwgcCk7XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSAhPT0gXCJvYmplY3RcIikgZGllKDE1LCBwYXRoLmpvaW4oXCIvXCIpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGUgPSBnZXRBcmNodHlwZShiYXNlKTtcbiAgICAgIHZhciB2YWx1ZSA9IGRlZXBDbG9uZVBhdGNoVmFsdWUocGF0Y2gudmFsdWUpOyAvLyB1c2VkIHRvIGNsb25lIHBhdGNoIHRvIGVuc3VyZSBvcmlnaW5hbCBwYXRjaCBpcyBub3QgbW9kaWZpZWQsIHNlZSAjNDExXG5cbiAgICAgIHZhciBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG5cbiAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgY2FzZSBSRVBMQUNFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAyXG4gICAgICAgICAgICAvKiBNYXAgKi9cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gICAgICAgICAgICBjYXNlIDNcbiAgICAgICAgICAgIC8qIFNldCAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICBkaWUoMTYpO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBhbiBvYmplY3QsIHRoZW4gaXQncyBhc3NpZ25lZCBieSByZWZlcmVuY2VcbiAgICAgICAgICAgICAgLy8gaW4gdGhlIGZvbGxvd2luZyBhZGQgb3IgcmVtb3ZlIG9wcywgdGhlIHZhbHVlIGZpZWxkIGluc2lkZSB0aGUgcGF0Y2ggd2lsbCBhbHNvIGJlIG1vZGlmeWVkXG4gICAgICAgICAgICAgIC8vIHNvIHdlIHVzZSB2YWx1ZSBmcm9tIHRoZSBjbG9uZWQgcGF0Y2hcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICByZXR1cm4gYmFzZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQUREOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxXG4gICAgICAgICAgICAvKiBBcnJheSAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4ga2V5ID09PSBcIi1cIiA/IGJhc2UucHVzaCh2YWx1ZSkgOiBiYXNlLnNwbGljZShrZXksIDAsIHZhbHVlKTtcblxuICAgICAgICAgICAgY2FzZSAyXG4gICAgICAgICAgICAvKiBNYXAgKi9cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2Uuc2V0KGtleSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBjYXNlIDNcbiAgICAgICAgICAgIC8qIFNldCAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5hZGQodmFsdWUpO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUkVNT1ZFOlxuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAxXG4gICAgICAgICAgICAvKiBBcnJheSAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zcGxpY2Uoa2V5LCAxKTtcblxuICAgICAgICAgICAgY2FzZSAyXG4gICAgICAgICAgICAvKiBNYXAgKi9cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKGtleSk7XG5cbiAgICAgICAgICAgIGNhc2UgM1xuICAgICAgICAgICAgLyogU2V0ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmRlbGV0ZShwYXRjaC52YWx1ZSk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBkZWxldGUgYmFzZVtrZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGRpZSgxNywgb3ApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkcmFmdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKSB7XG4gICAgaWYgKCFpc0RyYWZ0YWJsZShvYmopKSByZXR1cm4gb2JqO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBvYmoubWFwKGRlZXBDbG9uZVBhdGNoVmFsdWUpO1xuICAgIGlmIChpc01hcChvYmopKSByZXR1cm4gbmV3IE1hcChBcnJheS5mcm9tKG9iai5lbnRyaWVzKCkpLm1hcChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBrID0gX3JlZjNbMF0sXG4gICAgICAgICAgdiA9IF9yZWYzWzFdO1xuICAgICAgcmV0dXJuIFtrLCBkZWVwQ2xvbmVQYXRjaFZhbHVlKHYpXTtcbiAgICB9KSk7XG4gICAgaWYgKGlzU2V0KG9iaikpIHJldHVybiBuZXcgU2V0KEFycmF5LmZyb20ob2JqKS5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSkpO1xuICAgIHZhciBjbG9uZWQgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGNsb25lZFtrZXldID0gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmpba2V5XSk7XG4gICAgfVxuXG4gICAgaWYgKGhhcyhvYmosIERSQUZUQUJMRSkpIGNsb25lZFtEUkFGVEFCTEVdID0gb2JqW0RSQUZUQUJMRV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lUGF0Y2hWYWx1ZUlmTmVlZGVkKG9iaikge1xuICAgIGlmIChpc0RyYWZ0KG9iaikpIHtcbiAgICAgIHJldHVybiBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9iaik7XG4gICAgfSBlbHNlIHJldHVybiBvYmo7XG4gIH1cblxuICBsb2FkUGx1Z2luKFwiUGF0Y2hlc1wiLCB7XG4gICAgYXBwbHlQYXRjaGVzXzogYXBwbHlQYXRjaGVzXyxcbiAgICBnZW5lcmF0ZVBhdGNoZXNfOiBnZW5lcmF0ZVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXzogZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfXG4gIH0pO1xufVxuXG4vLyB0eXBlcyBvbmx5IVxuZnVuY3Rpb24gZW5hYmxlTWFwU2V0KCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgX2V4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiBleHRlbmRTdGF0aWNzKGQsIGIpIHtcbiAgICBfZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCB7XG4gICAgICBfX3Byb3RvX186IFtdXG4gICAgfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICBkLl9fcHJvdG9fXyA9IGI7XG4gICAgfSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgZm9yICh2YXIgcCBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF9leHRlbmRTdGF0aWNzKGQsIGIpO1xuICB9OyAvLyBVZ2x5IGhhY2sgdG8gcmVzb2x2ZSAjNTAyIGFuZCBpbmhlcml0IGJ1aWx0IGluIE1hcCAvIFNldFxuXG5cbiAgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgICBfZXh0ZW5kU3RhdGljcyhkLCBiKTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7XG4gICAgfVxuXG4gICAgZC5wcm90b3R5cGUgPSAoIC8vIEB0cy1pZ25vcmVcbiAgICBfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICB9XG5cbiAgdmFyIERyYWZ0TWFwID0gZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEcmFmdE1hcCwgX3N1cGVyKTsgLy8gQ3JlYXRlIGNsYXNzIG1hbnVhbGx5LCBjYXVzZSAjNTAyXG5cblxuICAgIGZ1bmN0aW9uIERyYWZ0TWFwKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICB0aGlzW0RSQUZUX1NUQVRFXSA9IHtcbiAgICAgICAgdHlwZV86IDJcbiAgICAgICAgLyogTWFwICovXG4gICAgICAgICxcbiAgICAgICAgcGFyZW50XzogcGFyZW50LFxuICAgICAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgICAgZmluYWxpemVkXzogZmFsc2UsXG4gICAgICAgIGNvcHlfOiB1bmRlZmluZWQsXG4gICAgICAgIGFzc2lnbmVkXzogdW5kZWZpbmVkLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGlzTWFudWFsXzogZmFsc2UsXG4gICAgICAgIHJldm9rZWRfOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBwID0gRHJhZnRNYXAucHJvdG90eXBlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcInNpemVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgICB9IC8vIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgLy8gY29uZmlndXJhYmxlOiB0cnVlXG5cbiAgICB9KTtcblxuICAgIHAuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuaGFzKGtleSk7XG4gICAgfTtcblxuICAgIHAuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcblxuICAgICAgaWYgKCFsYXRlc3Qoc3RhdGUpLmhhcyhrZXkpIHx8IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSkgIT09IHZhbHVlKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLnNldChrZXksIHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgcC5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG5cbiAgICAgIGlmIChzdGF0ZS5iYXNlXy5oYXMoa2V5KSkge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuYXNzaWduZWRfLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5jb3B5Xy5kZWxldGUoa2V5KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBwLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuXG4gICAgICBpZiAobGF0ZXN0KHN0YXRlKS5zaXplKSB7XG4gICAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8gPSBuZXcgTWFwKCk7XG4gICAgICAgIGVhY2goc3RhdGUuYmFzZV8sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcC5mb3JFYWNoID0gZnVuY3Rpb24gKGNiLCB0aGlzQXJnKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGxhdGVzdChzdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoX3ZhbHVlLCBrZXksIF9tYXApIHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCBfdGhpcy5nZXQoa2V5KSwga2V5LCBfdGhpcyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcC5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICB2YXIgdmFsdWUgPSBsYXRlc3Qoc3RhdGUpLmdldChrZXkpO1xuXG4gICAgICBpZiAoc3RhdGUuZmluYWxpemVkXyB8fCAhaXNEcmFmdGFibGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZS5iYXNlXy5nZXQoa2V5KSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7IC8vIGVpdGhlciBhbHJlYWR5IGRyYWZ0ZWQgb3IgcmVhc3NpZ25lZFxuICAgICAgfSAvLyBkZXNwaXRlIHdoYXQgaXQgbG9va3MsIHRoaXMgY3JlYXRlcyBhIGRyYWZ0IG9ubHkgb25jZSwgc2VlIGFib3ZlIGNvbmRpdGlvblxuXG5cbiAgICAgIHZhciBkcmFmdCA9IGNyZWF0ZVByb3h5KHN0YXRlLnNjb3BlXy5pbW1lcl8sIHZhbHVlLCBzdGF0ZSk7XG4gICAgICBwcmVwYXJlTWFwQ29weShzdGF0ZSk7XG4gICAgICBzdGF0ZS5jb3B5Xy5zZXQoa2V5LCBkcmFmdCk7XG4gICAgICByZXR1cm4gZHJhZnQ7XG4gICAgfTtcblxuICAgIHAua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLmtleXMoKTtcbiAgICB9O1xuXG4gICAgcC52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgICBfcmVmO1xuXG4gICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLmtleXMoKTtcbiAgICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnZhbHVlcygpO1xuICAgICAgfSwgX3JlZi5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgICAgICAgaWYgKHIuZG9uZSkgcmV0dXJuIHI7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMyLmdldChyLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSwgX3JlZjtcbiAgICB9O1xuXG4gICAgcC5lbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXMsXG4gICAgICAgICAgX3JlZjI7XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIF9yZWYyID0ge30sIF9yZWYyW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5lbnRyaWVzKCk7XG4gICAgICB9LCBfcmVmMi5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIHIgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgICAgICAgaWYgKHIuZG9uZSkgcmV0dXJuIHI7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMzLmdldChyLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBbci52YWx1ZSwgdmFsdWVdXG4gICAgICAgIH07XG4gICAgICB9LCBfcmVmMjtcbiAgICB9O1xuXG4gICAgcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBEcmFmdE1hcDtcbiAgfShNYXApO1xuXG4gIGZ1bmN0aW9uIHByb3h5TWFwXyh0YXJnZXQsIHBhcmVudCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gbmV3IERyYWZ0TWFwKHRhcmdldCwgcGFyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVNYXBDb3B5KHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfID0gbmV3IE1hcCgpO1xuICAgICAgc3RhdGUuY29weV8gPSBuZXcgTWFwKHN0YXRlLmJhc2VfKTtcbiAgICB9XG4gIH1cblxuICB2YXIgRHJhZnRTZXQgPSBmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERyYWZ0U2V0LCBfc3VwZXIpOyAvLyBDcmVhdGUgY2xhc3MgbWFudWFsbHksIGNhdXNlICM1MDJcblxuXG4gICAgZnVuY3Rpb24gRHJhZnRTZXQodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogM1xuICAgICAgICAvKiBTZXQgKi9cbiAgICAgICAgLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHVuZGVmaW5lZCxcbiAgICAgICAgYmFzZV86IHRhcmdldCxcbiAgICAgICAgZHJhZnRfOiB0aGlzLFxuICAgICAgICBkcmFmdHNfOiBuZXcgTWFwKCksXG4gICAgICAgIHJldm9rZWRfOiBmYWxzZSxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBwID0gRHJhZnRTZXQucHJvdG90eXBlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCBcInNpemVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBsYXRlc3QodGhpc1tEUkFGVF9TVEFURV0pLnNpemU7XG4gICAgICB9IC8vIGVudW1lcmFibGU6IHRydWUsXG5cbiAgICB9KTtcblxuICAgIHAuaGFzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7IC8vIGJpdCBvZiB0cmlja2VyeSBoZXJlLCB0byBiZSBhYmxlIHRvIHJlY29nbml6ZSBib3RoIHRoZSB2YWx1ZSwgYW5kIHRoZSBkcmFmdCBvZiBpdHMgdmFsdWVcblxuICAgICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgICByZXR1cm4gc3RhdGUuYmFzZV8uaGFzKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmNvcHlfLmhhcyh2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSAmJiBzdGF0ZS5jb3B5Xy5oYXMoc3RhdGUuZHJhZnRzXy5nZXQodmFsdWUpKSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHAuYWRkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG5cbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHByZXBhcmVTZXRDb3B5KHN0YXRlKTtcbiAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgcC5kZWxldGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmRlbGV0ZSh2YWx1ZSkgfHwgKHN0YXRlLmRyYWZ0c18uaGFzKHZhbHVlKSA/IHN0YXRlLmNvcHlfLmRlbGV0ZShzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpIDpcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBmYWxzZSk7XG4gICAgfTtcblxuICAgIHAuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG5cbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHAudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLnZhbHVlcygpO1xuICAgIH07XG5cbiAgICBwLmVudHJpZXMgPSBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgcmV0dXJuIHN0YXRlLmNvcHlfLmVudHJpZXMoKTtcbiAgICB9O1xuXG4gICAgcC5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfTtcblxuICAgIHBbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfTtcblxuICAgIHAuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2IsIHRoaXNBcmcpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMudmFsdWVzKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIGNiLmNhbGwodGhpc0FyZywgcmVzdWx0LnZhbHVlLCByZXN1bHQudmFsdWUsIHRoaXMpO1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBEcmFmdFNldDtcbiAgfShTZXQpO1xuXG4gIGZ1bmN0aW9uIHByb3h5U2V0Xyh0YXJnZXQsIHBhcmVudCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gbmV3IERyYWZ0U2V0KHRhcmdldCwgcGFyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVTZXRDb3B5KHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5jb3B5Xykge1xuICAgICAgLy8gY3JlYXRlIGRyYWZ0cyBmb3IgYWxsIGVudHJpZXMgdG8gcHJlc2VydmUgaW5zZXJ0aW9uIG9yZGVyXG4gICAgICBzdGF0ZS5jb3B5XyA9IG5ldyBTZXQoKTtcbiAgICAgIHN0YXRlLmJhc2VfLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICB2YXIgZHJhZnQgPSBjcmVhdGVQcm94eShzdGF0ZS5zY29wZV8uaW1tZXJfLCB2YWx1ZSwgc3RhdGUpO1xuICAgICAgICAgIHN0YXRlLmRyYWZ0c18uc2V0KHZhbHVlLCBkcmFmdCk7XG4gICAgICAgICAgc3RhdGUuY29weV8uYWRkKGRyYWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnRVbnJldm9rZWQoc3RhdGVcbiAgLypFUzVTdGF0ZSB8IE1hcFN0YXRlIHwgU2V0U3RhdGUqL1xuICApIHtcbiAgICBpZiAoc3RhdGUucmV2b2tlZF8pIGRpZSgzLCBKU09OLnN0cmluZ2lmeShsYXRlc3Qoc3RhdGUpKSk7XG4gIH1cblxuICBsb2FkUGx1Z2luKFwiTWFwU2V0XCIsIHtcbiAgICBwcm94eU1hcF86IHByb3h5TWFwXyxcbiAgICBwcm94eVNldF86IHByb3h5U2V0X1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQWxsUGx1Z2lucygpIHtcbiAgZW5hYmxlRVM1KCk7XG4gIGVuYWJsZU1hcFNldCgpO1xuICBlbmFibGVQYXRjaGVzKCk7XG59XG5cbnZhciBpbW1lciA9XG4vKiNfX1BVUkVfXyovXG5uZXcgSW1tZXIoKTtcbi8qKlxyXG4gKiBUaGUgYHByb2R1Y2VgIGZ1bmN0aW9uIHRha2VzIGEgdmFsdWUgYW5kIGEgXCJyZWNpcGUgZnVuY3Rpb25cIiAod2hvc2VcclxuICogcmV0dXJuIHZhbHVlIG9mdGVuIGRlcGVuZHMgb24gdGhlIGJhc2Ugc3RhdGUpLiBUaGUgcmVjaXBlIGZ1bmN0aW9uIGlzXHJcbiAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxyXG4gKiBvbmx5IGV2ZXIgYXBwbGllZCB0byBhIF9fY29weV9fIG9mIHRoZSBiYXNlIHN0YXRlLlxyXG4gKlxyXG4gKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcclxuICogZnJvbSBwYXNzaW5nIHRoZSByZWNpcGUgZnVuY3Rpb24gZXZlcnkgdGltZS5cclxuICpcclxuICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXHJcbiAqIGNvbnNpZGVyZWQgdW5jb3B5YWJsZS5cclxuICpcclxuICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSBiYXNlIC0gdGhlIGluaXRpYWwgc3RhdGVcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvZHVjZXIgLSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgcHJveHkgb2YgdGhlIGJhc2Ugc3RhdGUgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHdoaWNoIGNhbiBiZSBmcmVlbHkgbW9kaWZpZWRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGF0Y2hMaXN0ZW5lciAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhbGwgdGhlIHBhdGNoZXMgcHJvZHVjZWQgaGVyZVxyXG4gKiBAcmV0dXJucyB7YW55fSBhIG5ldyBzdGF0ZSwgb3IgdGhlIGluaXRpYWwgc3RhdGUgaWYgbm90aGluZyB3YXMgbW9kaWZpZWRcclxuICovXG5cbnZhciBwcm9kdWNlID0gaW1tZXIucHJvZHVjZTtcbi8qKlxyXG4gKiBMaWtlIGBwcm9kdWNlYCwgYnV0IGBwcm9kdWNlV2l0aFBhdGNoZXNgIGFsd2F5cyByZXR1cm5zIGEgdHVwbGVcclxuICogW25leHRTdGF0ZSwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdIChpbnN0ZWFkIG9mIGp1c3QgdGhlIG5leHQgc3RhdGUpXHJcbiAqL1xuXG52YXIgcHJvZHVjZVdpdGhQYXRjaGVzID1cbi8qI19fUFVSRV9fKi9cbmltbWVyLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKGltbWVyKTtcbi8qKlxyXG4gKiBQYXNzIHRydWUgdG8gYXV0b21hdGljYWxseSBmcmVlemUgYWxsIGNvcGllcyBjcmVhdGVkIGJ5IEltbWVyLlxyXG4gKlxyXG4gKiBBbHdheXMgZnJlZXplIGJ5IGRlZmF1bHQsIGV2ZW4gaW4gcHJvZHVjdGlvbiBtb2RlXHJcbiAqL1xuXG52YXIgc2V0QXV0b0ZyZWV6ZSA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5zZXRBdXRvRnJlZXplLmJpbmQoaW1tZXIpO1xuLyoqXHJcbiAqIFBhc3MgdHJ1ZSB0byB1c2UgdGhlIEVTMjAxNSBgUHJveHlgIGNsYXNzIHdoZW4gY3JlYXRpbmcgZHJhZnRzLCB3aGljaCBpc1xyXG4gKiBhbHdheXMgZmFzdGVyIHRoYW4gdXNpbmcgRVM1IHByb3hpZXMuXHJcbiAqXHJcbiAqIEJ5IGRlZmF1bHQsIGZlYXR1cmUgZGV0ZWN0aW9uIGlzIHVzZWQsIHNvIGNhbGxpbmcgdGhpcyBpcyByYXJlbHkgbmVjZXNzYXJ5LlxyXG4gKi9cblxudmFyIHNldFVzZVByb3hpZXMgPVxuLyojX19QVVJFX18qL1xuaW1tZXIuc2V0VXNlUHJveGllcy5iaW5kKGltbWVyKTtcbi8qKlxyXG4gKiBBcHBseSBhbiBhcnJheSBvZiBJbW1lciBwYXRjaGVzIHRvIHRoZSBmaXJzdCBhcmd1bWVudC5cclxuICpcclxuICogVGhpcyBmdW5jdGlvbiBpcyBhIHByb2R1Y2VyLCB3aGljaCBtZWFucyBjb3B5LW9uLXdyaXRlIGlzIGluIGVmZmVjdC5cclxuICovXG5cbnZhciBhcHBseVBhdGNoZXMgPVxuLyojX19QVVJFX18qL1xuaW1tZXIuYXBwbHlQYXRjaGVzLmJpbmQoaW1tZXIpO1xuLyoqXHJcbiAqIENyZWF0ZSBhbiBJbW1lciBkcmFmdCBmcm9tIHRoZSBnaXZlbiBiYXNlIHN0YXRlLCB3aGljaCBtYXkgYmUgYSBkcmFmdCBpdHNlbGYuXHJcbiAqIFRoZSBkcmFmdCBjYW4gYmUgbW9kaWZpZWQgdW50aWwgeW91IGZpbmFsaXplIGl0IHdpdGggdGhlIGBmaW5pc2hEcmFmdGAgZnVuY3Rpb24uXHJcbiAqL1xuXG52YXIgY3JlYXRlRHJhZnQgPVxuLyojX19QVVJFX18qL1xuaW1tZXIuY3JlYXRlRHJhZnQuYmluZChpbW1lcik7XG4vKipcclxuICogRmluYWxpemUgYW4gSW1tZXIgZHJhZnQgZnJvbSBhIGBjcmVhdGVEcmFmdGAgY2FsbCwgcmV0dXJuaW5nIHRoZSBiYXNlIHN0YXRlXHJcbiAqIChpZiBubyBjaGFuZ2VzIHdlcmUgbWFkZSkgb3IgYSBtb2RpZmllZCBjb3B5LiBUaGUgZHJhZnQgbXVzdCAqbm90KiBiZVxyXG4gKiBtdXRhdGVkIGFmdGVyd2FyZHMuXHJcbiAqXHJcbiAqIFBhc3MgYSBmdW5jdGlvbiBhcyB0aGUgMm5kIGFyZ3VtZW50IHRvIGdlbmVyYXRlIEltbWVyIHBhdGNoZXMgYmFzZWQgb24gdGhlXHJcbiAqIGNoYW5nZXMgdGhhdCB3ZXJlIG1hZGUuXHJcbiAqL1xuXG52YXIgZmluaXNoRHJhZnQgPVxuLyojX19QVVJFX18qL1xuaW1tZXIuZmluaXNoRHJhZnQuYmluZChpbW1lcik7XG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSBhIG5vLW9wLCBidXQgY2FuIGJlIHVzZWQgdG8gY2FzdCBhbiBpbW11dGFibGUgdHlwZVxyXG4gKiB0byBhbiBkcmFmdCB0eXBlIGFuZCBtYWtlIFR5cGVTY3JpcHQgaGFwcHlcclxuICpcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqL1xuXG5mdW5jdGlvbiBjYXN0RHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgYWN0dWFsbHkgYSBuby1vcCwgYnV0IGNhbiBiZSB1c2VkIHRvIGNhc3QgYSBtdXRhYmxlIHR5cGVcclxuICogdG8gYW4gaW1tdXRhYmxlIHR5cGUgYW5kIG1ha2UgVHlwZVNjcmlwdCBoYXBweVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXG5cbmZ1bmN0aW9uIGNhc3RJbW11dGFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnRzLkltbWVyID0gSW1tZXI7XG5leHBvcnRzLmFwcGx5UGF0Y2hlcyA9IGFwcGx5UGF0Y2hlcztcbmV4cG9ydHMuY2FzdERyYWZ0ID0gY2FzdERyYWZ0O1xuZXhwb3J0cy5jYXN0SW1tdXRhYmxlID0gY2FzdEltbXV0YWJsZTtcbmV4cG9ydHMuY3JlYXRlRHJhZnQgPSBjcmVhdGVEcmFmdDtcbmV4cG9ydHMuY3VycmVudCA9IGN1cnJlbnQ7XG5leHBvcnRzLmRlZmF1bHQgPSBwcm9kdWNlO1xuZXhwb3J0cy5lbmFibGVBbGxQbHVnaW5zID0gZW5hYmxlQWxsUGx1Z2lucztcbmV4cG9ydHMuZW5hYmxlRVM1ID0gZW5hYmxlRVM1O1xuZXhwb3J0cy5lbmFibGVNYXBTZXQgPSBlbmFibGVNYXBTZXQ7XG5leHBvcnRzLmVuYWJsZVBhdGNoZXMgPSBlbmFibGVQYXRjaGVzO1xuZXhwb3J0cy5maW5pc2hEcmFmdCA9IGZpbmlzaERyYWZ0O1xuZXhwb3J0cy5mcmVlemUgPSBmcmVlemU7XG5leHBvcnRzLmltbWVyYWJsZSA9IERSQUZUQUJMRTtcbmV4cG9ydHMuaXNEcmFmdCA9IGlzRHJhZnQ7XG5leHBvcnRzLmlzRHJhZnRhYmxlID0gaXNEcmFmdGFibGU7XG5leHBvcnRzLm5vdGhpbmcgPSBOT1RISU5HO1xuZXhwb3J0cy5vcmlnaW5hbCA9IG9yaWdpbmFsO1xuZXhwb3J0cy5wcm9kdWNlID0gcHJvZHVjZTtcbmV4cG9ydHMucHJvZHVjZVdpdGhQYXRjaGVzID0gcHJvZHVjZVdpdGhQYXRjaGVzO1xuZXhwb3J0cy5zZXRBdXRvRnJlZXplID0gc2V0QXV0b0ZyZWV6ZTtcbmV4cG9ydHMuc2V0VXNlUHJveGllcyA9IHNldFVzZVByb3hpZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbW1lci5janMuZGV2ZWxvcG1lbnQuanMubWFwXG4iLCJcbid1c2Ugc3RyaWN0J1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW1tZXIuY2pzLnByb2R1Y3Rpb24ubWluLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbW1lci5janMuZGV2ZWxvcG1lbnQuanMnKVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiaW1wb3J0e3R5cGVPZiBhcyBlLGlzRWxlbWVudCBhcyB0LGlzVmFsaWRFbGVtZW50VHlwZSBhcyBufWZyb21cInJlYWN0LWlzXCI7aW1wb3J0IHIse3VzZVN0YXRlIGFzIG8sdXNlQ29udGV4dCBhcyBzLHVzZU1lbW8gYXMgaSx1c2VFZmZlY3QgYXMgYSx1c2VSZWYgYXMgYyxjcmVhdGVFbGVtZW50IGFzIHUsdXNlRGVidWdWYWx1ZSBhcyBsLHVzZUxheW91dEVmZmVjdCBhcyBkfWZyb21cInJlYWN0XCI7aW1wb3J0IGggZnJvbVwic2hhbGxvd2VxdWFsXCI7aW1wb3J0IHAgZnJvbVwiQGVtb3Rpb24vc3R5bGlzXCI7aW1wb3J0IGYgZnJvbVwiQGVtb3Rpb24vdW5pdGxlc3NcIjtpbXBvcnQgbSBmcm9tXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7aW1wb3J0IHkgZnJvbVwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjtmdW5jdGlvbiB2KCl7cmV0dXJuKHY9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn0sUz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09KHQudG9TdHJpbmc/dC50b1N0cmluZygpOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSkmJiFlKHQpfSx3PU9iamVjdC5mcmVlemUoW10pLEU9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gYihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBOKGUpe3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgZS5zdHlsZWRDb21wb25lbnRJZH12YXIgQT1cInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19BVFRSfHxwcm9jZXNzLmVudi5TQ19BVFRSKXx8XCJkYXRhLXN0eWxlZFwiLEM9XCI1LjMuNlwiLEk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJIVE1MRWxlbWVudFwiaW4gd2luZG93LFA9Qm9vbGVhbihcImJvb2xlYW5cIj09dHlwZW9mIFNDX0RJU0FCTEVfU1BFRURZP1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZOlwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpLE89e30sUj1cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3sxOlwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLDI6XCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIiwzOlwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsNDpcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsNTpcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsNjpcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsNzonVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFwidGhlbWVcIiBwcm9wIGZ1bmN0aW9uLCBlLmcuXFxuXFxuYGBganNcXG50aGVtZT17KCkgPT4gKHt9KX1cXG5gYGBcXG5cXG4nLDg6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXCJ0aGVtZVwiIHByb3AgYW4gb2JqZWN0LlxcblxcbicsOTpcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIiwxMDpcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsMTE6XCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLDEyOlwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsMTM6XCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsMTQ6J1RoZW1lUHJvdmlkZXI6IFwidGhlbWVcIiBwcm9wIGlzIHJlcXVpcmVkLlxcblxcbicsMTU6XCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIiwxNjpcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLDE3OlwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwifTp7fTtmdW5jdGlvbiBEKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTA/dm9pZCAwOmFyZ3VtZW50c1swXSx0PVtdLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rPTEpdC5wdXNoKG48MHx8YXJndW1lbnRzLmxlbmd0aDw9bj92b2lkIDA6YXJndW1lbnRzW25dKTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlPWUucmVwbGFjZSgvJVthLXpdLyx0KX0pKSxlfWZ1bmN0aW9uIGooZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3Rocm93XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVj9uZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0LmlvL0pVSWFFI1wiK2UrXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIrKG4ubGVuZ3RoPjA/XCIgQXJnczogXCIrbi5qb2luKFwiLCBcIik6XCJcIikpOm5ldyBFcnJvcihELmFwcGx5KHZvaWQgMCxbUltlXV0uY29uY2F0KG4pKS50cmltKCkpfXZhciBUPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5kZXhPZkdyb3VwPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtuPGU7bisrKXQrPXRoaXMuZ3JvdXBTaXplc1tuXTtyZXR1cm4gdH0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQpe2lmKGU+PXRoaXMuZ3JvdXBTaXplcy5sZW5ndGgpe2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXMscj1uLmxlbmd0aCxvPXI7ZT49bzspKG88PD0xKTwwJiZqKDE2LFwiXCIrZSk7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheShvKSx0aGlzLmdyb3VwU2l6ZXMuc2V0KG4pLHRoaXMubGVuZ3RoPW87Zm9yKHZhciBzPXI7czxvO3MrKyl0aGlzLmdyb3VwU2l6ZXNbc109MH1mb3IodmFyIGk9dGhpcy5pbmRleE9mR3JvdXAoZSsxKSxhPTAsYz10Lmxlbmd0aDthPGM7YSsrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W2FdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LHQuY2xlYXJHcm91cD1mdW5jdGlvbihlKXtpZihlPHRoaXMubGVuZ3RoKXt2YXIgdD10aGlzLmdyb3VwU2l6ZXNbZV0sbj10aGlzLmluZGV4T2ZHcm91cChlKSxyPW4rdDt0aGlzLmdyb3VwU2l6ZXNbZV09MDtmb3IodmFyIG89bjtvPHI7bysrKXRoaXMudGFnLmRlbGV0ZVJ1bGUobil9fSx0LmdldEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7aWYoZT49dGhpcy5sZW5ndGh8fDA9PT10aGlzLmdyb3VwU2l6ZXNbZV0pcmV0dXJuIHQ7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplc1tlXSxyPXRoaXMuaW5kZXhPZkdyb3VwKGUpLG89cituLHM9cjtzPG87cysrKXQrPXRoaXMudGFnLmdldFJ1bGUocykrXCIvKiFzYyovXFxuXCI7cmV0dXJuIHR9LGV9KCkseD1uZXcgTWFwLGs9bmV3IE1hcCxWPTEsQj1mdW5jdGlvbihlKXtpZih4LmhhcyhlKSlyZXR1cm4geC5nZXQoZSk7Zm9yKDtrLmhhcyhWKTspVisrO3ZhciB0PVYrKztyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoKDB8dCk8MHx8dD4xPDwzMCkmJmooMTYsXCJcIit0KSx4LnNldChlLHQpLGsuc2V0KHQsZSksdH0sej1mdW5jdGlvbihlKXtyZXR1cm4gay5nZXQoZSl9LE09ZnVuY3Rpb24oZSx0KXt0Pj1WJiYoVj10KzEpLHguc2V0KGUsdCksay5zZXQodCxlKX0sRz1cInN0eWxlW1wiK0ErJ11bZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMy42XCJdJyxMPW5ldyBSZWdFeHAoXCJeXCIrQSsnXFxcXC5nKFxcXFxkKylcXFxcW2lkPVwiKFtcXFxcd1xcXFxkLV0rKVwiXFxcXF0uKj9cIihbXlwiXSopJyksRj1mdW5jdGlvbihlLHQsbil7Zm9yKHZhciByLG89bi5zcGxpdChcIixcIikscz0wLGk9by5sZW5ndGg7czxpO3MrKykocj1vW3NdKSYmZS5yZWdpc3Rlck5hbWUodCxyKX0sWT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0odC50ZXh0Q29udGVudHx8XCJcIikuc3BsaXQoXCIvKiFzYyovXFxuXCIpLHI9W10sbz0wLHM9bi5sZW5ndGg7bzxzO28rKyl7dmFyIGk9bltvXS50cmltKCk7aWYoaSl7dmFyIGE9aS5tYXRjaChMKTtpZihhKXt2YXIgYz0wfHBhcnNlSW50KGFbMV0sMTApLHU9YVsyXTswIT09YyYmKE0odSxjKSxGKGUsdSxhWzNdKSxlLmdldFRhZygpLmluc2VydFJ1bGVzKGMscikpLHIubGVuZ3RoPTB9ZWxzZSByLnB1c2goaSl9fX0scT1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsfSxIPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmhlYWQsbj1lfHx0LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hpbGROb2RlcyxuPXQubGVuZ3RoO24+PTA7bi0tKXt2YXIgcj10W25dO2lmKHImJjE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShBKSlyZXR1cm4gcn19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoQSxcImFjdGl2ZVwiKSxyLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVkLXZlcnNpb25cIixcIjUuMy42XCIpO3ZhciBpPXEoKTtyZXR1cm4gaSYmci5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGkpLG4uaW5zZXJ0QmVmb3JlKHIscykscn0sJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5zaGVldD1mdW5jdGlvbihlKXtpZihlLnNoZWV0KXJldHVybiBlLnNoZWV0O2Zvcih2YXIgdD1kb2N1bWVudC5zdHlsZVNoZWV0cyxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO2lmKG8ub3duZXJOb2RlPT09ZSlyZXR1cm4gb31qKDE3KX0odCksdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuc2hlZXQuZGVsZXRlUnVsZShlKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zaGVldC5jc3NSdWxlc1tlXTtyZXR1cm4gdm9pZCAwIT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuY3NzVGV4dD90LmNzc1RleHQ6XCJcIn0sZX0oKSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0aGlzLm5vZGVzPXQuY2hpbGROb2Rlcyx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkscj10aGlzLm5vZGVzW2VdO3JldHVybiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4scnx8bnVsbCksdGhpcy5sZW5ndGgrKywhMH1yZXR1cm4hMX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ub2Rlc1tlXS50ZXh0Q29udGVudDpcIlwifSxlfSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMucnVsZXM9W10sdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5ydWxlcy5zcGxpY2UoZSwxKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ydWxlc1tlXTpcIlwifSxlfSgpLEo9SSxYPXtpc1NlcnZlcjohSSx1c2VDU1NPTUluamVjdGlvbjohUH0sWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpLHZvaWQgMD09PXQmJih0PXt9KSx0aGlzLm9wdGlvbnM9dih7fSxYLHt9LGUpLHRoaXMuZ3M9dCx0aGlzLm5hbWVzPW5ldyBNYXAobiksdGhpcy5zZXJ2ZXI9ISFlLmlzU2VydmVyLCF0aGlzLnNlcnZlciYmSSYmSiYmKEo9ITEsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoRyksbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtvJiZcImFjdGl2ZVwiIT09by5nZXRBdHRyaWJ1dGUoQSkmJihZKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpfWUucmVnaXN0ZXJJZD1mdW5jdGlvbihlKXtyZXR1cm4gQihlKX07dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucz1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksbmV3IGUodih7fSx0aGlzLm9wdGlvbnMse30sdCksdGhpcy5ncyxuJiZ0aGlzLm5hbWVzfHx2b2lkIDApfSx0LmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5nZXRUYWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWd8fCh0aGlzLnRhZz0obj0odD10aGlzLm9wdGlvbnMpLmlzU2VydmVyLHI9dC51c2VDU1NPTUluamVjdGlvbixvPXQudGFyZ2V0LGU9bj9uZXcgVShvKTpyP25ldyAkKG8pOm5ldyBXKG8pLG5ldyBUKGUpKSk7dmFyIGUsdCxuLHIsb30sdC5oYXNOYW1lRm9ySWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmhhcyh0KX0sdC5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZihCKGUpLHRoaXMubmFtZXMuaGFzKGUpKXRoaXMubmFtZXMuZ2V0KGUpLmFkZCh0KTtlbHNle3ZhciBuPW5ldyBTZXQ7bi5hZGQodCksdGhpcy5uYW1lcy5zZXQoZSxuKX19LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0LG4pe3RoaXMucmVnaXN0ZXJOYW1lKGUsdCksdGhpcy5nZXRUYWcoKS5pbnNlcnRSdWxlcyhCKGUpLG4pfSx0LmNsZWFyTmFtZXM9ZnVuY3Rpb24oZSl7dGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmNsZWFyKCl9LHQuY2xlYXJSdWxlcz1mdW5jdGlvbihlKXt0aGlzLmdldFRhZygpLmNsZWFyR3JvdXAoQihlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LmNsZWFyVGFnPWZ1bmN0aW9uKCl7dGhpcy50YWc9dm9pZCAwfSx0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmdldFRhZygpLG49dC5sZW5ndGgscj1cIlwiLG89MDtvPG47bysrKXt2YXIgcz16KG8pO2lmKHZvaWQgMCE9PXMpe3ZhciBpPWUubmFtZXMuZ2V0KHMpLGE9dC5nZXRHcm91cChvKTtpZihpJiZhJiZpLnNpemUpe3ZhciBjPUErXCIuZ1wiK28rJ1tpZD1cIicrcysnXCJdJyx1PVwiXCI7dm9pZCAwIT09aSYmaS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmxlbmd0aD4wJiYodSs9ZStcIixcIil9KSkscis9XCJcIithK2MrJ3tjb250ZW50OlwiJyt1KydcIn0vKiFzYyovXFxuJ319fXJldHVybiByfSh0aGlzKX0sZX0oKSxLPS8oYSkoZCkvZ2ksUT1mdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKyhlPjI1PzM5Ojk3KSl9O2Z1bmN0aW9uIGVlKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PjUyO3Q9dC81MnwwKW49USh0JTUyKStuO3JldHVybihRKHQlNTIpK24pLnJlcGxhY2UoSyxcIiQxLSQyXCIpfXZhciB0ZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10Lmxlbmd0aDtuOyllPTMzKmVedC5jaGFyQ29kZUF0KC0tbik7cmV0dXJuIGV9LG5lPWZ1bmN0aW9uKGUpe3JldHVybiB0ZSg1MzgxLGUpfTtmdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBuPWVbdF07aWYoYihuKSYmIU4obikpcmV0dXJuITF9cmV0dXJuITB9dmFyIG9lPW5lKFwiNS4zLjZcIiksc2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJnJlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPXRlKG9lLHQpLHRoaXMuYmFzZVN0eWxlPW4sWi5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5jb21wb25lbnRJZCxvPVtdO2lmKHRoaXMuYmFzZVN0eWxlJiZvLnB1c2godGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pKSx0aGlzLmlzU3RhdGljJiYhbi5oYXNoKWlmKHRoaXMuc3RhdGljUnVsZXNJZCYmdC5oYXNOYW1lRm9ySWQocix0aGlzLnN0YXRpY1J1bGVzSWQpKW8ucHVzaCh0aGlzLnN0YXRpY1J1bGVzSWQpO2Vsc2V7dmFyIHM9TmUodGhpcy5ydWxlcyxlLHQsbikuam9pbihcIlwiKSxpPWVlKHRlKHRoaXMuYmFzZUhhc2gscyk+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixpKSl7dmFyIGE9bihzLFwiLlwiK2ksdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixpLGEpfW8ucHVzaChpKSx0aGlzLnN0YXRpY1J1bGVzSWQ9aX1lbHNle2Zvcih2YXIgYz10aGlzLnJ1bGVzLmxlbmd0aCx1PXRlKHRoaXMuYmFzZUhhc2gsbi5oYXNoKSxsPVwiXCIsZD0wO2Q8YztkKyspe3ZhciBoPXRoaXMucnVsZXNbZF07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGgpbCs9aCxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodT10ZSh1LGgrZCkpO2Vsc2UgaWYoaCl7dmFyIHA9TmUoaCxlLHQsbiksZj1BcnJheS5pc0FycmF5KHApP3Auam9pbihcIlwiKTpwO3U9dGUodSxmK2QpLGwrPWZ9fWlmKGwpe3ZhciBtPWVlKHU+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixtKSl7dmFyIHk9bihsLFwiLlwiK20sdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixtLHkpfW8ucHVzaChtKX19cmV0dXJuIG8uam9pbihcIiBcIil9LGV9KCksaWU9L15cXHMqXFwvXFwvLiokL2dtLGFlPVtcIjpcIixcIltcIixcIi5cIixcIiNcIl07ZnVuY3Rpb24gY2UoZSl7dmFyIHQsbixyLG8scz12b2lkIDA9PT1lP0U6ZSxpPXMub3B0aW9ucyxhPXZvaWQgMD09PWk/RTppLGM9cy5wbHVnaW5zLHU9dm9pZCAwPT09Yz93OmMsbD1uZXcgcChhKSxkPVtdLGg9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXtpZih0KXRyeXtlKHQrXCJ9XCIpfWNhdGNoKGUpe319cmV0dXJuIGZ1bmN0aW9uKG4scixvLHMsaSxhLGMsdSxsLGQpe3N3aXRjaChuKXtjYXNlIDE6aWYoMD09PWwmJjY0PT09ci5jaGFyQ29kZUF0KDApKXJldHVybiBlKHIrXCI7XCIpLFwiXCI7YnJlYWs7Y2FzZSAyOmlmKDA9PT11KXJldHVybiByK1wiLyp8Ki9cIjticmVhaztjYXNlIDM6c3dpdGNoKHUpe2Nhc2UgMTAyOmNhc2UgMTEyOnJldHVybiBlKG9bMF0rciksXCJcIjtkZWZhdWx0OnJldHVybiByKygwPT09ZD9cIi8qfCovXCI6XCJcIil9Y2FzZS0yOnIuc3BsaXQoXCIvKnwqL31cIikuZm9yRWFjaCh0KX19fSgoZnVuY3Rpb24oZSl7ZC5wdXNoKGUpfSkpLGY9ZnVuY3Rpb24oZSxyLHMpe3JldHVybiAwPT09ciYmLTEhPT1hZS5pbmRleE9mKHNbbi5sZW5ndGhdKXx8cy5tYXRjaChvKT9lOlwiLlwiK3R9O2Z1bmN0aW9uIG0oZSxzLGksYSl7dm9pZCAwPT09YSYmKGE9XCImXCIpO3ZhciBjPWUucmVwbGFjZShpZSxcIlwiKSx1PXMmJmk/aStcIiBcIitzK1wiIHsgXCIrYytcIiB9XCI6YztyZXR1cm4gdD1hLG49cyxyPW5ldyBSZWdFeHAoXCJcXFxcXCIrbitcIlxcXFxiXCIsXCJnXCIpLG89bmV3IFJlZ0V4cChcIihcXFxcXCIrbitcIlxcXFxiKXsyLH1cIiksbChpfHwhcz9cIlwiOnMsdSl9cmV0dXJuIGwudXNlKFtdLmNvbmNhdCh1LFtmdW5jdGlvbihlLHQsbyl7Mj09PWUmJm8ubGVuZ3RoJiZvWzBdLmxhc3RJbmRleE9mKG4pPjAmJihvWzBdPW9bMF0ucmVwbGFjZShyLGYpKX0saCxmdW5jdGlvbihlKXtpZigtMj09PWUpe3ZhciB0PWQ7cmV0dXJuIGQ9W10sdH19XSkpLG0uaGFzaD11Lmxlbmd0aD91LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lfHxqKDE1KSx0ZShlLHQubmFtZSl9KSw1MzgxKS50b1N0cmluZygpOlwiXCIsbX12YXIgdWU9ci5jcmVhdGVDb250ZXh0KCksbGU9dWUuQ29uc3VtZXIsZGU9ci5jcmVhdGVDb250ZXh0KCksaGU9KGRlLkNvbnN1bWVyLG5ldyBaKSxwZT1jZSgpO2Z1bmN0aW9uIGZlKCl7cmV0dXJuIHModWUpfHxoZX1mdW5jdGlvbiBtZSgpe3JldHVybiBzKGRlKXx8cGV9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9byhlLnN0eWxpc1BsdWdpbnMpLG49dFswXSxzPXRbMV0sYz1mZSgpLHU9aSgoZnVuY3Rpb24oKXt2YXIgdD1jO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0pLFtlLmRpc2FibGVDU1NPTUluamVjdGlvbixlLnNoZWV0LGUudGFyZ2V0XSksbD1pKChmdW5jdGlvbigpe3JldHVybiBjZSh7b3B0aW9uczp7cHJlZml4OiFlLmRpc2FibGVWZW5kb3JQcmVmaXhlc30scGx1Z2luczpufSl9KSxbZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsbl0pO3JldHVybiBhKChmdW5jdGlvbigpe2gobixlLnN0eWxpc1BsdWdpbnMpfHxzKGUuc3R5bGlzUGx1Z2lucyl9KSxbZS5zdHlsaXNQbHVnaW5zXSksci5jcmVhdGVFbGVtZW50KHVlLlByb3ZpZGVyLHt2YWx1ZTp1fSxyLmNyZWF0ZUVsZW1lbnQoZGUuUHJvdmlkZXIse3ZhbHVlOmx9LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ci5DaGlsZHJlbi5vbmx5KGUuY2hpbGRyZW4pOmUuY2hpbGRyZW4pKX12YXIgdmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIG49dGhpczt0aGlzLmluamVjdD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXBlKTt2YXIgcj1uLm5hbWUrdC5oYXNoO2UuaGFzTmFtZUZvcklkKG4uaWQscil8fGUuaW5zZXJ0UnVsZXMobi5pZCxyLHQobi5ydWxlcyxyLFwiQGtleWZyYW1lc1wiKSl9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gaigxMixTdHJpbmcobi5uYW1lKSl9LHRoaXMubmFtZT1lLHRoaXMuaWQ9XCJzYy1rZXlmcmFtZXMtXCIrZSx0aGlzLnJ1bGVzPXR9cmV0dXJuIGUucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXBlKSx0aGlzLm5hbWUrZS5oYXNofSxlfSgpLGdlPS8oW0EtWl0pLyxTZT0vKFtBLVpdKS9nLHdlPS9ebXMtLyxFZT1mdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9O2Z1bmN0aW9uIGJlKGUpe3JldHVybiBnZS50ZXN0KGUpP2UucmVwbGFjZShTZSxFZSkucmVwbGFjZSh3ZSxcIi1tcy1cIik6ZX12YXIgX2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fCExPT09ZXx8XCJcIj09PWV9O2Z1bmN0aW9uIE5lKGUsbixyLG8pe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcyxpPVtdLGE9MCxjPWUubGVuZ3RoO2E8YzthKz0xKVwiXCIhPT0ocz1OZShlW2FdLG4scixvKSkmJihBcnJheS5pc0FycmF5KHMpP2kucHVzaC5hcHBseShpLHMpOmkucHVzaChzKSk7cmV0dXJuIGl9aWYoX2UoZSkpcmV0dXJuXCJcIjtpZihOKGUpKXJldHVyblwiLlwiK2Uuc3R5bGVkQ29tcG9uZW50SWQ7aWYoYihlKSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YobD1lKXx8bC5wcm90b3R5cGUmJmwucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR8fCFuKXJldHVybiBlO3ZhciB1PWUobik7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdCh1KSYmY29uc29sZS53YXJuKF8oZSkrXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKSxOZSh1LG4scixvKX12YXIgbDtyZXR1cm4gZSBpbnN0YW5jZW9mIHZlP3I/KGUuaW5qZWN0KHIsbyksZS5nZXROYW1lKG8pKTplOlMoZSk/ZnVuY3Rpb24gZSh0LG4pe3ZhciByLG8scz1bXTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYhX2UodFtpXSkmJihBcnJheS5pc0FycmF5KHRbaV0pJiZ0W2ldLmlzQ3NzfHxiKHRbaV0pP3MucHVzaChiZShpKStcIjpcIix0W2ldLFwiO1wiKTpTKHRbaV0pP3MucHVzaC5hcHBseShzLGUodFtpXSxpKSk6cy5wdXNoKGJlKGkpK1wiOiBcIisocj1pLG51bGw9PShvPXRbaV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIG98fFwiXCI9PT1vP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIG98fDA9PT1vfHxyIGluIGY/U3RyaW5nKG8pLnRyaW0oKTpvK1wicHhcIikrXCI7XCIpKTtyZXR1cm4gbj9bbitcIiB7XCJdLmNvbmNhdChzLFtcIn1cIl0pOnN9KGUpOmUudG9TdHJpbmcoKX12YXIgQWU9ZnVuY3Rpb24oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSkmJihlLmlzQ3NzPSEwKSxlfTtmdW5jdGlvbiBDZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07cmV0dXJuIGIoZSl8fFMoZSk/QWUoTmUoZyh3LFtlXS5jb25jYXQobikpKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6QWUoTmUoZyhlLG4pKSl9dmFyIEllPS9pbnZhbGlkIGhvb2sgY2FsbC9pLFBlPW5ldyBTZXQsT2U9ZnVuY3Rpb24oZSx0KXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgbj1cIlRoZSBjb21wb25lbnQgXCIrZSsodD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIikrXCIgaGFzIGJlZW4gY3JlYXRlZCBkeW5hbWljYWxseS5cXG5Zb3UgbWF5IHNlZSB0aGlzIHdhcm5pbmcgYmVjYXVzZSB5b3UndmUgY2FsbGVkIHN0eWxlZCBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXFxuVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC5cIixyPWNvbnNvbGUuZXJyb3I7dHJ5e3ZhciBvPSEwO2NvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oZSl7aWYoSWUudGVzdChlKSlvPSExLFBlLmRlbGV0ZShuKTtlbHNle2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHM9bmV3IEFycmF5KHQ+MT90LTE6MCksaT0xO2k8dDtpKyspc1tpLTFdPWFyZ3VtZW50c1tpXTtyLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KHMpKX19LGMoKSxvJiYhUGUuaGFzKG4pJiYoY29uc29sZS53YXJuKG4pLFBlLmFkZChuKSl9Y2F0Y2goZSl7SWUudGVzdChlLm1lc3NhZ2UpJiZQZS5kZWxldGUobil9ZmluYWxseXtjb25zb2xlLmVycm9yPXJ9fX0sUmU9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sRGU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxqZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIFRlKGUpe3JldHVybiBlLnJlcGxhY2UoRGUsXCItXCIpLnJlcGxhY2UoamUsXCJcIil9dmFyIHhlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiBrZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LEJlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gemUoZSx0LG4pe3ZhciByPWVbbl07VmUodCkmJlZlKHIpP01lKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIE1lKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoVmUoaSkpZm9yKHZhciBhIGluIGkpQmUoYSkmJnplKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgR2U9ci5jcmVhdGVDb250ZXh0KCksTGU9R2UuQ29uc3VtZXI7ZnVuY3Rpb24gRmUoZSl7dmFyIHQ9cyhHZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KEdlLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBZZT17fTtmdW5jdGlvbiBxZShlLHQsbil7dmFyIG89TihlKSxpPSFrZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOlRlKGUpO1llW25dPShZZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK3hlKFwiNS4zLjZcIituK1llW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIGtlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/VGUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyLG8pe3JldHVybiBlLnNob3VsZEZvcndhcmRQcm9wKG4scixvKSYmdC5zaG91bGRGb3J3YXJkUHJvcChuLHIsbyl9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IHNlKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMsaT1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLHMsaT1lO2Zvcih0IGluIGIoaSkmJihpPWkocikpLGkpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0scz1pW3RdLG4mJnM/bitcIiBcIitzOm58fHMpOmlbdF19KSksW3Isb119KFJlKHQscyhHZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxzPW1lKCksaT10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLHMpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIoaSksaX0oaSxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPWtlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSxfKTohTnx8bShJKSkmJihDW0ldPUFbSV0pKTtyZXR1cm4gdC5zdHlsZSYmZy5zdHlsZSE9PXQuc3R5bGUmJihDLnN0eWxlPXYoe30sdC5zdHlsZSx7fSxnLnN0eWxlKSksQy5jbGFzc05hbWU9QXJyYXkucHJvdG90eXBlLmNvbmNhdChjLGgsUyE9PWg/UzpudWxsLHQuY2xhc3NOYW1lLGcuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksQy5yZWY9dyx1KF8sQyl9KEMsZSx0LFApfTtyZXR1cm4gTy5kaXNwbGF5TmFtZT1mLChDPXIuZm9yd2FyZFJlZihPKSkuYXR0cnM9UyxDLmNvbXBvbmVudFN0eWxlPUksQy5kaXNwbGF5TmFtZT1mLEMuc2hvdWxkRm9yd2FyZFByb3A9QSxDLmZvbGRlZENvbXBvbmVudElkcz1vP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5mb2xkZWRDb21wb25lbnRJZHMsZS5zdHlsZWRDb21wb25lbnRJZCk6dyxDLnN0eWxlZENvbXBvbmVudElkPWcsQy50YXJnZXQ9bz9lLnRhcmdldDplLEMud2l0aENvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgcj10LmNvbXBvbmVudElkLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciBuLHIsbz17fSxzPU9iamVjdC5rZXlzKGUpO2ZvcihyPTA7cjxzLmxlbmd0aDtyKyspbj1zW3JdLHQuaW5kZXhPZihuKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KHQsW1wiY29tcG9uZW50SWRcIl0pLHM9ciYmcitcIi1cIisoa2UoZSk/ZTpUZShfKGUpKSk7cmV0dXJuIHFlKGUsdih7fSxvLHthdHRyczpTLGNvbXBvbmVudElkOnN9KSxuKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJkZWZhdWx0UHJvcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcz1vP01lKHt9LGUuZGVmYXVsdFByb3BzLHQpOnR9fSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKE9lKGYsZyksQy53YXJuVG9vTWFueUNsYXNzZXM9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fSxyPSExO3JldHVybiBmdW5jdGlvbihvKXtpZighciYmKG5bb109ITAsT2JqZWN0LmtleXMobikubGVuZ3RoPj0yMDApKXt2YXIgcz10Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgMjAwIGNsYXNzZXMgd2VyZSBnZW5lcmF0ZWQgZm9yIGNvbXBvbmVudCBcIitlK3MrXCIuXFxuQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG5FeGFtcGxlOlxcbiAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbiAgICBzdHlsZToge1xcbiAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuICAgIH0sXFxuICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbiAgPENvbXBvbmVudCAvPlwiKSxyPSEwLG49e319fX0oZixnKSksQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiLlwiK0Muc3R5bGVkQ29tcG9uZW50SWR9LGkmJnkoQyxlLHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwLHdpdGhDb21wb25lbnQ6ITB9KSxDfXZhciBIZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbyl7aWYodm9pZCAwPT09byYmKG89RSksIW4ocikpcmV0dXJuIGooMSxTdHJpbmcocikpO3ZhciBzPWZ1bmN0aW9uKCl7cmV0dXJuIHQocixvLENlLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpKX07cmV0dXJuIHMud2l0aENvbmZpZz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHt9LG4pKX0scy5hdHRycz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHthdHRyczpBcnJheS5wcm90b3R5cGUuY29uY2F0KG8uYXR0cnMsbikuZmlsdGVyKEJvb2xlYW4pfSkpfSxzfShxZSxlKX07W1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkXCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWFycXVlZVwiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRpdGxlXCIsXCJ0clwiLFwidHJhY2tcIixcInVcIixcInVsXCIsXCJ2YXJcIixcInZpZGVvXCIsXCJ3YnJcIixcImNpcmNsZVwiLFwiY2xpcFBhdGhcIixcImRlZnNcIixcImVsbGlwc2VcIixcImZvcmVpZ25PYmplY3RcIixcImdcIixcImltYWdlXCIsXCJsaW5lXCIsXCJsaW5lYXJHcmFkaWVudFwiLFwibWFya2VyXCIsXCJtYXNrXCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwb2x5Z29uXCIsXCJwb2x5bGluZVwiLFwicmFkaWFsR3JhZGllbnRcIixcInJlY3RcIixcInN0b3BcIixcInN2Z1wiLFwidGV4dFwiLFwidGV4dFBhdGhcIixcInRzcGFuXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe0hlW2VdPUhlKGUpfSkpO3ZhciAkZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnJ1bGVzPWUsdGhpcy5jb21wb25lbnRJZD10LHRoaXMuaXNTdGF0aWM9cmUoZSksWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY3JlYXRlU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXIoTmUodGhpcy5ydWxlcyx0LG4scikuam9pbihcIlwiKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sdC5yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oZSx0KXt0LmNsZWFyUnVsZXModGhpcy5jb21wb25lbnRJZCtlKX0sdC5yZW5kZXJTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7ZT4yJiZaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpO2Z1bmN0aW9uIFdlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgaT1DZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSksYT1cInNjLWdsb2JhbC1cIit4ZShKU09OLnN0cmluZ2lmeShpKSksdT1uZXcgJGUoaSxhKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWZlKCksbj1tZSgpLG89cyhHZSksbD1jKHQuYWxsb2NhdGVHU0luc3RhbmNlKGEpKS5jdXJyZW50O3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnIuQ2hpbGRyZW4uY291bnQoZS5jaGlsZHJlbikmJmNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiK2ErXCIgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLlwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9PWUuaW5kZXhPZihcIkBpbXBvcnRcIil9KSkmJmNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpLHQuc2VydmVyJiZoKGwsZSx0LG8sbiksZCgoZnVuY3Rpb24oKXtpZighdC5zZXJ2ZXIpcmV0dXJuIGgobCxlLHQsbyxuKSxmdW5jdGlvbigpe3JldHVybiB1LnJlbW92ZVN0eWxlcyhsLHQpfX0pLFtsLGUsdCxvLG5dKSxudWxsfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtpZih1LmlzU3RhdGljKXUucmVuZGVyU3R5bGVzKGUsTyxuLG8pO2Vsc2V7dmFyIHM9dih7fSx0LHt0aGVtZTpSZSh0LHIsbC5kZWZhdWx0UHJvcHMpfSk7dS5yZW5kZXJTdHlsZXMoZSxzLG4sbyl9fXJldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJk9lKGEpLHIubWVtbyhsKX1mdW5jdGlvbiBVZShlKXtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz1DZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSkuam9pbihcIlwiKSxzPXhlKG8pO3JldHVybiBuZXcgdmUocyxvKX12YXIgSmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpczt0aGlzLl9lbWl0U2hlZXRDU1M9ZnVuY3Rpb24oKXt2YXIgdD1lLmluc3RhbmNlLnRvU3RyaW5nKCk7aWYoIXQpcmV0dXJuXCJcIjt2YXIgbj1xKCk7cmV0dXJuXCI8c3R5bGUgXCIrW24mJidub25jZT1cIicrbisnXCInLEErJz1cInRydWVcIicsJ2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjMuNlwiJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpK1wiPlwiK3QrXCI8L3N0eWxlPlwifSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe3JldHVybiBlLnNlYWxlZD9qKDIpOmUuX2VtaXRTaGVldENTUygpfSx0aGlzLmdldFN0eWxlRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKGUuc2VhbGVkKXJldHVybiBqKDIpO3ZhciBuPSgodD17fSlbQV09XCJcIix0W1wiZGF0YS1zdHlsZWQtdmVyc2lvblwiXT1cIjUuMy42XCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1xKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHYoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWih7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9qKDIpOnIuY3JlYXRlRWxlbWVudCh5ZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBqKDMpfSxlfSgpLFhlPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1zKEdlKSxpPWUuZGVmYXVsdFByb3BzLGE9UmUodCxvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK18oZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUsdih7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiB5KHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitfKGUpK1wiKVwiLHR9LFplPWZ1bmN0aW9uKCl7cmV0dXJuIHMoR2UpfSxLZT17U3R5bGVTaGVldDpaLG1hc3RlclNoZWV0OmhlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgSGU7ZXhwb3J0e0plIGFzIFNlcnZlclN0eWxlU2hlZXQsbGUgYXMgU3R5bGVTaGVldENvbnN1bWVyLHVlIGFzIFN0eWxlU2hlZXRDb250ZXh0LHllIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLExlIGFzIFRoZW1lQ29uc3VtZXIsR2UgYXMgVGhlbWVDb250ZXh0LEZlIGFzIFRoZW1lUHJvdmlkZXIsS2UgYXMgX19QUklWQVRFX18sV2UgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQ2UgYXMgY3NzLE4gYXMgaXNTdHlsZWRDb21wb25lbnQsVWUgYXMga2V5ZnJhbWVzLFplIGFzIHVzZVRoZW1lLEMgYXMgdmVyc2lvbixYZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFiYnJ8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8ZW50ZXJLZXlIaW50fGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHJhbnNsYXRlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5jcmVtZW50YWx8ZmFsbGJhY2t8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufG9wdGlvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpc1Byb3BWYWxpZCA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNQcm9wVmFsaWQ7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wibG9kYXNoXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9iXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb3JlRGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZG9tUmVhZHlcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImh0bWxFbnRpdGllc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wibWVkaWFVdGlsc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicmljaFRleHRcIl07IiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnQgY29uc3QgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9saWIvaW1tZXInO1xuaW1wb3J0ICcuL2Jsb2Nrcyc7XG4iXSwibmFtZXMiOlsicmVxdWlyZSIsIkVkaXQiLCJibG9ja1Byb3BzIiwicmVhY3RfMSIsIkRlZ3JlZVByb2dyYW1FZGl0Rm9ybV8xIiwiZXhwb3J0cyIsImJsb2NrX2pzb25fMSIsIm5hbWUiLCJlZGl0IiwiRWRpdF8xIiwiYXR0cmlidXRlcyIsImNvbnRlbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYmxvY2tfZWRpdG9yXzEiLCJ0YWdOYW1lIiwib25DaGFuZ2UiLCJuZXh0Q29udGVudCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJTYXZlIiwic2F2ZUJsb2NrUHJvcHMiLCJzYXZlIiwiQ29udGVudCIsIlNhdmVfMSIsIkFMTE9XRURfQkxPQ0tTIiwiVEVNUExBVEUiLCJhbGxvd2VkQmxvY2tzIiwidGVtcGxhdGUiLCJyZW5kZXJBcHBlbmRlciIsIkJ1dHRvbkJsb2NrQXBwZW5kZXIiLCJhZGRIZWFkaW5nQmxvY2tWYXJpYXRpb25zIiwic2V0dGluZ3MiLCJ2YXJpYXRpb25zIiwiaXNEZWZhdWx0IiwidGl0bGUiLCJsZXZlbCIsImFkZFNob3J0Y29kZUJsb2NrVmFyaWF0aW9ucyIsInRleHQiLCJERUZBVUxUX1NJWkUiLCJBTExPV0VEX0ZPUk1BVFMiLCJyZWdpc3RlcmVkRm9ybWF0cyIsInJpY2hfdGV4dF8xIiwiZ2V0Rm9ybWF0VHlwZXMiLCJmb3JtYXROYW1lc1RvRGlzYWJsZSIsImZvckVhY2giLCJmb3JtYXRUeXBlIiwiaW5jbHVkZXMiLCJwdXNoIiwicmVtb3ZlRm9ybWF0VHlwZXMiLCJERUZBVUxUX1NRVUFSRV9TSVpFIiwiREVGQVVMVF9TVFJPS0VfV0lEVEgiLCJTdHlsZWRTdmdDaXJjbGUiLCJzdHlsZWRfY29tcG9uZW50c18xIiwic3ZnIiwiQ2lyY3VsYXJQcm9ncmVzc0JhciIsInBlcmNlbnRhZ2UiLCJzcXVhcmVTaXplIiwic3Ryb2tlV2lkdGgiLCJyYWRpdXMiLCJ2aWV3Qm94IiwiZGFzaEFycmF5IiwiTWF0aCIsIlBJIiwiZGFzaE9mZnNldCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiY3giLCJjeSIsInIiLCJmaWxsIiwic3Ryb2tlIiwidHJhbnNmb3JtIiwic3R5bGUiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0IiwiZGVmYXVsdFByb3BzIiwiT2JqZWN0IiwiZW51bWVyYWJsZSIsImdldCIsIlN0eWxlZEVkaXRvcldyYXBwZXIiLCJkaXYiLCJCbG9ja0Rlc2VsZWN0TGlzdGVuZXIiLCJlZGl0b3JSZWYiLCJjbGVhclNlbGVjdGVkQmxvY2siLCJibHVyTGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXB0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbnRlbnRGaWVsZCIsInJlcXVpcmVkIiwiY3VycmVudEJsb2NrcyIsInNldEN1cnJlbnRCbG9ja3MiLCJ1cGRhdGVWYWx1ZSIsImJsb2NrcyIsImZpZWxkUmVxdWlyZWQiLCJvbklucHV0IiwicmVmIiwiY29tcG9uZW50c18xIiwiUmVnaXN0ZXIiLCJyb2xlIiwiU2xvdCIsImdpZiIsInBuZyIsIlNFVFRJTkdTIiwiYWxsb3dlZEJsb2NrVHlwZXMiLCJjb25zdGFudHNfMSIsImNvZGVFZGl0aW5nRW5hYmxlZCIsInVzZUJsb2NrRWRpdG9yU2V0dGluZ3MiLCJoYXNVcGxvYWRQZXJtaXNzaW9ucyIsInNlbGVjdCIsImNvcmVfZGF0YV8xIiwiY2FuVXNlciIsIm1lZGlhVXBsb2FkQmxvY2tFZGl0b3IiLCJfYSIsIm9uRXJyb3IiLCJhcmd1bWVudHNPYmplY3QiLCJ3cEFsbG93ZWRNaW1lVHlwZXMiLCJtZXNzYWdlIiwibWVkaWFVcGxvYWQiLCJfX2V4cGVyaW1lbnRhbEZldGNoTGlua1N1Z2dlc3Rpb25zIiwic2VhcmNoIiwic2VhcmNoT3B0aW9ucyIsIl9fZXhwZXJpbWVudGFsRmV0Y2hSaWNoVXJsRGF0YSIsIkRheU1vbnRoUGlja2VyIiwicHJvcHMiLCJwYXR0ZXJuIiwiRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucyIsImVuYWJsZWQiLCJjb21iaW5hdGlvbnMiLCJzZXRDb21iaW5hdGlvbnMiLCJsaW1pdGVkQ29tYmluYXRpb25zIiwic2V0TGltaXRlZENvbWJpbmF0aW9ucyIsInVuZGVmaW5lZCIsIkZvcm1GaWVsZF8xIiwibGFiZWwiLCJSZWxhdGVkRGVncmVlUHJvZ3JhbXNfMSIsInJlbGF0ZWREZWdyZWVQcm9ncmFtSWRzIiwic2V0UmVsYXRlZERlZ3JlZVByb2dyYW1zIiwibWVzc2FnZXMiLCJhZGRlZCIsInJlbW92ZWQiLCJyZW1vdmUiLCJfX2V4cGVyaW1lbnRhbEludmFsaWQiLCJ3aXRoUmVsYXRlZERlZ3JlZVByb2dyYW1Qcm9wcyIsIldyYXBwZWRDb21wb25lbnQiLCJvdGhlcnMiLCJlbnRpdHlUb1Rva2VuIiwicG9zdCIsImRlZ3JlZV9wcm9ncmFtIiwiZGUiLCJkZWdyZWUiLCJhYmJyZXZpYXRpb24iLCJwb3N0cyIsIm1hcCIsImlkIiwibWF4U3VnZ2VzdGlvbnMiLCJob2NfMSIsIkVudGl0eVNlbGVjdG9yXzEiLCJ3aXRoRGVncmVlUHJvZ3JhbVBvc3RzXzEiLCJ3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHNfMSIsIndpdGhEZWdyZWVQcm9ncmFtUG9zdHMiLCJvd25Qcm9wcyIsImdldEVudGl0eVJlY29yZHMiLCJsZW5ndGgiLCJlbnRpdGllcyIsInF1ZXJ5IiwicGVyX3BhZ2UiLCJvcmRlcmJ5IiwiX2ZpZWxkcyIsImNvbnRleHQiLCJpbmNsdWRlIiwiam9pbiIsInBvc3RUeXBlIiwid2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVBvc3RzIiwic2V0U2VhcmNoIiwiZ2V0Q3VycmVudFBvc3QiLCJlZGl0b3JfMSIsImN1cnJlbnRQb3N0Iiwib3JkZXIiLCJleGNsdWRlIiwic2VhcmNoZWRFbnRpdGllcyIsIkFkbWlzc2lvblJlcXVpcmVtZW50cyIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImJhY2hlbG9yT3JUZWFjaGluZ0VuYWJsZWQiLCJ0ZWFjaGluZ0RlZ3JlZUhpZ2hlclNlbWVzdGVyRW5hYmxlZCIsIm1hc3RlcnNFbmFibGVkIiwiaHVtYW5pdGllc0ZhY3VsdHlMYW5ndWFnZVNraWxsc0VuYWJsZWQiLCJhcHBsaWNhdGlvblN1bW1lckRlYWRsaW5lRW5hYmxlZCIsImFwcGxpY2F0aW9uV2ludGVyRGVhZGxpbmVFbmFibGVkIiwiRm9ybVdyYXBwZXJfMSIsIlRlcm1TZWxlY3Rvcl8xIiwidGF4b25vbXkiLCJhZG1pc3Npb25fcmVxdWlyZW1lbnRzIiwiYmFjaGVsb3Jfb3JfdGVhY2hpbmdfZGVncmVlIiwiY2hpbGRPbmx5IiwidGVybSIsInRlYWNoaW5nX2RlZ3JlZV9oaWdoZXJfc2VtZXN0ZXIiLCJGb3JtU2VwYXJhdG9yXzEiLCJtYXN0ZXIiLCJoZWxwIiwiTXVsdGlsaW5ndWFsQ29udGFpbmVyXzEiLCJjb250ZW50X3JlbGF0ZWRfbWFzdGVyX3JlcXVpcmVtZW50cyIsImxhbmd1YWdlQ29kZSIsIkNvbnRlbnRGaWVsZF8xIiwia2V5IiwiRGF5TW9udGhQaWNrZXJfMSIsImFwcGxpY2F0aW9uX2RlYWRsaW5lX3dpbnRlcl9zZW1lc3RlciIsImFwcGxpY2F0aW9uX2RlYWRsaW5lX3N1bW1lcl9zZW1lc3RlciIsImRldGFpbHNfYW5kX25vdGVzIiwibGFuZ3VhZ2Vfc2tpbGxzIiwibGFuZ3VhZ2Vfc2tpbGxzX2h1bWFuaXRpZXNfZmFjdWx0eSIsImdlcm1hbl9sYW5ndWFnZV9za2lsbHNfZm9yX2ludGVybmF0aW9uYWxfc3R1ZGVudHMiLCJDT05URU5UX0lURU1TIiwiYWJvdXQiLCJzdHJ1Y3R1cmUiLCJzcGVjaWFsaXphdGlvbnMiLCJxdWFsaXRpZXNfYW5kX3NraWxscyIsIndoeV9zaG91bGRfc3R1ZHkiLCJjYXJlZXJfcHJvc3BlY3RzIiwic3BlY2lhbF9mZWF0dXJlcyIsIlJFUVVJUkVEX0ZJRUxEUyIsImtleXMiLCJpdGVtIiwiZW4iLCJkZXNjcmlwdGlvbiIsIkRlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnNfMSIsIkRlZ3JlZVByb2dyYW1FZGl0Rm9ybSIsIlByb3ZpZGVyc18xIiwiRm9ybUhlYWRpbmdfMSIsIlRhYnNfMSIsInRhYnMiLCJUYWJUaXRsZV8xIiwiY29tcG9uZW50IiwiR2VuZXJhbF8xIiwiQ29udGVudF8xIiwiQWRtaXNzaW9uUmVxdWlyZW1lbnRzXzEiLCJPcmdhbml6YXRpb25hbExpbmtzXzEiLCJTdHlsZWRIZWFkaW5nIiwiaDEiLCJGb3JtSGVhZGluZyIsIkdlbmVyYWwiLCJzdWJ0aXRsZSIsIkltYWdlRmllbGRfMSIsInBhdGgiLCJlbnRyeV90ZXh0IiwiYXJlYV9vZl9zdHVkeSIsInRlcm1zIiwidHJhbnNmb3Jtc18xIiwic3RhcnQiLCJUZXJtU2VsZWN0b3JfMiIsIm51bWJlcl9vZl9zdHVkZW50cyIsInRlYWNoaW5nX2xhbmd1YWdlIiwiZmFjdWx0eSIsImxvY2F0aW9uIiwic3ViamVjdF9ncm91cHMiLCJrZXl3b3JkcyIsIlRleHRDb250cm9sQ29sbGVjdGlvbl8xIiwidmlkZW9zIiwidHlwZSIsIm1heEl0ZW1zIiwiRmllbGRDb250ZXh0QXdhcmVUZXh0YXJlYUNvbnRyb2xfMSIsInN0YW5kYXJkX2R1cmF0aW9uIiwibWV0YV9kZXNjcmlwdGlvbiIsIkxpbWl0ZWRJbnB1dENvbnRyb2xfMSIsIm1heENoYXJzIiwidXBkYXRlZFZhbHVlIiwiY29udHJvbFJlcXVpcmVkIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2VOYW1lIiwiTXVsdGlsaW5ndWFsQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJ0YWIiLCJpc0VtcHR5IiwiT3JnYW5pemF0aW9uYWxMaW5rcyIsImRlZ3JlZUZlZXNFbmFibGVkIiwiYXBwbHlfbm93X2xpbmsiLCJleGFtaW5hdGlvbnNfb2ZmaWNlIiwiRmllbGRDb250ZXh0QXdhcmVUZXh0Q29udHJvbF8xIiwiaGFuZGJvb2siLCJtb2R1bGVfaGFuZGJvb2siLCJ1cmwiLCJkZXBhcnRtZW50Iiwic3ViamVjdF9zcGVjaWZpY19hZHZpY2UiLCJyZXByZXNlbnRhdGl2ZXMiLCJpbmZvX2Jyb2NodXJlIiwiZXhhbWluYXRpb25fcmVndWxhdGlvbnMiLCJjaGVja2VkIiwiZmVlX3JlcXVpcmVkIiwiZGVncmVlX3Byb2dyYW1fZmVlcyIsImRlZ3JlZVByb2dyYW1GZWVzIiwiRXJyb3JXcmFwcGVyIiwic3BhbiIsInVzZVRhYkhhc0Vycm9yIiwidGFiTmFtZSIsImZpZWxkcyIsImZpZWxkSGFzRXJyb3JzIiwiaSIsIlRhYlRpdGxlIiwiaGFzRXJyb3JzIiwiZ2VuZXJhbCIsIkVudGl0eVNlbGVjdG9yIiwibWF4TGVuZ3RoIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwic2V0VmFsdWVzIiwid3JhcHBlclJlZiIsImRlYm91bmNlZFNlYXJjaCIsIm5ld1ZhbHVlcyIsInN1Z2dlc3Rpb25zIiwicmVzdWx0cyIsInRvcExldmVsRW50aXRpZXMiLCJmaWx0ZXIiLCJlbnRpdHkiLCJwYXJlbnQiLCJjaGlsZEVudGl0eSIsIm9uQ2hhbmdlVG9rZW5zIiwidG9rZW5zIiwiYXZhaWxhYmxlRW50aXRpZXMiLCJ1bmlxdWVUb2tlbnMiLCJuZXdFbnRpdGllcyIsInRva2VuIiwiaXNUb2tlblZhbGlkIiwiZm91bmRFbnRpdHkiLCJzdWdnZXN0aW9uc0xpc3QiLCJxdWVyeVNlbGVjdG9yIiwidGFiSW5kZXgiLCJvbkZvY3VzIiwib25CbHVyIiwib25JbnB1dENoYW5nZSIsIl9fZXhwZXJpbWVudGFsU2hvd0hvd1RvIiwiX19leHBlcmltZW50YWxWYWxpZGF0ZUlucHV0IiwiX19leHBlcmltZW50YWxFeHBhbmRPbkZvY3VzIiwiU3R5bGVkRXJyb3JXcmFwcGVyIiwicCIsIkZpZWxkRXJyb3IiLCJlcnJvcnMiLCJzaXplIiwiQXJyYXkiLCJmcm9tIiwiZXJyb3IiLCJGb3JtRmllbGRDb250ZXh0IiwidXNlRmllbGRDb250ZXh0IiwiRm9ybUZpZWxkIiwid3JhcEJhc2VDb250cm9sIiwiZGlzcGxheUVycm9yIiwiZ2V0RmllbGRFcnJvcnMiLCJzdWZmaXhlZExhYmVsIiwiRm9ybUZpZWxkV3JhcHBlcl8xIiwiUHJvdmlkZXIiLCJGb3JtRmllbGRMYWJlbF8xIiwiRmllbGRFcnJvcl8xIiwidHNsaWJfMSIsIndpdGhBcmlhUmVxdWlyZWQiLCJUSFVNQk5BSUxfU0laRSIsIlN0eWxlZFdyYXBwZXIiLCJoYXNJbWFnZSIsIkltYWdlRmllbGQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZWxlY3RlZE1lZGlhIiwiUHJldmlldyIsInNyYyIsIm1lZGlhX2RldGFpbHMiLCJzaXplcyIsInRodW1ibmFpbCIsInNvdXJjZV91cmwiLCJhbHQiLCJoYW5kbGVPbkNhbmNlbCIsImhhbmRsZU9uU2VsZWN0IiwiaGFzTWVkaWEiLCJvblNlbGVjdCIsIm9uQ2FuY2VsIiwiYWxsb3dlZFR5cGVzIiwibXVsdGlwbGUiLCJsYWJlbHMiLCJtZWRpYVByZXZpZXciLCJnYXAiLCJqdXN0aWZ5IiwibWVkaWFVcmwiLCJtZWRpYUlkIiwidmFyaWFudCIsImlzRGVzdHJ1Y3RpdmUiLCJvbkNsaWNrIiwidXNlTWVkaWEiLCJtZWRpYSIsImdldE1lZGlhIiwiU3R5bGVkTGFiZWwiLCJTdHlsZWRIZWxwVGV4dCIsIkZvcm1GaWVsZExhYmVsIiwiRm9ybUZpZWxkV3JhcHBlciIsInN0eWxlX2RlZmluaXRpb25zXzEiLCJpc0Jsb2NrIiwiRm9ybVNlcGFyYXRvciIsIkZvcm1XcmFwcGVyIiwid3JhcCIsImFsaWduIiwiR0FQX0NPTFVNTiIsIkdBUF9ST1ciLCJMaW1pdGVkSW5wdXRDb250cm9sIiwiY2hhcnNMZWZ0Iiwic2V0Q2hhcnNMZWZ0Iiwic3Vic3RyaW5nIiwiQ2lyY3VsYXJQcm9ncmVzc18xIiwicmVwbGFjZSIsInRvU3RyaW5nIiwiVGFicyIsIndpdGhTaW5nbGVUZXJtU2VsZWN0b3JQcm9wcyIsIndpdGhEZWdyZWVQcm9ncmFtVGVybXNfMSIsIndpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtc18xIiwid2l0aFRlcm1TZWxlY3RvclByb3BzXzEiLCJ3aXRoRGVncmVlUHJvZ3JhbVRlcm1zIiwiaWRzIiwiaWRIZWxwZXJzXzEiLCJ0YXhvbm9teVNsdWdzIiwid2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zIiwid2l0aFRlcm1TZWxlY3RvclByb3BzIiwidHJhbnNmb3JtUmF3VmFsdWUiLCJzdHIiLCJTdHlsZWRGaWVsZFJvdyIsIlN0eWxlZE5vSXRlbXNNZXNzYWdlIiwiVGV4dENvbnRyb2xDb2xsZWN0aW9uIiwiZW1wdHlNZXNzYWdlIiwiaW5pdGlhbFZhbHVlIiwic2V0RmllbGRzIiwiZiIsImZpZWxkIiwiaW5kZXgiLCJkcmFmdCIsImljb24iLCJEZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlciIsImRlZ3JlZVByb2dyYW1EYXRhIiwic2V0RGVncmVlUHJvZ3JhbURhdGEiLCJwcm9wZXJ0eU5hbWUiLCJyZW1vdmVFcnJvciIsImVkaXRQb3N0IiwiZW5hYmxlUG9zdFB1Ymxpc2hCdXR0b24iLCJ2YWwiLCJleGNlcnB0IiwidXNlRWRpdERlZ3JlZVByb2dyYW0iLCJ0cmFuc2Zvcm1TZXJ2ZXJFcnJvciIsInNlcnZlckVycm9yIiwiTWFwIiwiY29kZSIsImVycm9yRGV0YWlscyIsImRhdGEiLCJwYXJhbXMiLCJlbnRyaWVzIiwiZGV0YWlsIiwiZXJyb3JDb2RlIiwic2V0IiwiRGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Qcm92aWRlciIsInNldEVycm9ycyIsImlzU2F2aW5nIiwic2V0SXNTYXZpbmciLCJwb3N0SWQiLCJzZWxlY3RDYiIsImdldEN1cnJlbnRQb3N0SWQiLCJmaWVsZElkIiwiaXNPblNhbWVSb290RmllbGROYW1lIiwic3BsaXQiLCJmaWVsZEVycm9ycyIsInByZXZFcnJvcnMiLCJuZXdFcnJvcnMiLCJkZWxldGUiLCJpc1NhdmluZ1Bvc3QiLCJpc0F1dG9zYXZpbmdQb3N0Iiwic2VydmVyRXJyb3JzIiwiZ2V0TGFzdEVudGl0eVNhdmVFcnJvciIsInN0YXR1cyIsInVuZG9JZ25vcmUiLCJ1c2VWYWxpZGF0aW9uIiwiUHJvdmlkZXJzIiwiRGVncmVlUHJvZ3JhbVZhbGlkYXRpb25Qcm92aWRlcl8xIiwiRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXJfMSIsIkJBQ0hFTE9SIiwiTUFTVEVSUyIsIlRFQUNISU5HX0RFR1JFRSIsIkFMTE9XRURfRkFDVUxUWV9TTFVHU19GT1JfQ09NQklOQVRJT04iLCJpc0JhY2hlbG9yQ29udGV4dCIsInBhcmVudERlZ3JlZSIsImRlZnNfMSIsImlzVGVhY2hpbmdEZWdyZWVDb250ZXh0IiwidXNlRGVncmVlRmVlc0VuYWJsZWQiLCJmZWVSZXF1aXJlZCIsInVzZUNvbWJpbmF0aW9uT2ZEZWdyZWVQcm9ncmFtRW5hYmxlZCIsImZhY3VsdHlUZXJtcyIsImZpbmQiLCJmYWN1bHR5SXRlbSIsInNsdWciLCJ1c2VBZG1pc3Npb25SZXF1aXJlbWVudHNGb3JCYWNoZWxvckFuZFRlYWNoaW5nRGVncmVlc0VuYWJsZSIsInVzZUFkbWlzc2lvblJlcXVpcmVtZW50c1RlYWNoaW5nRGVncmVlQXRIaWdoZXJTZW1lc3RlckVuYWJsZWQiLCJiYWNoZWxvck9yVGVhY2hpbmdBZG1pc3Npb25SZXF1aXJlbWVudCIsInVzZUFkbWlzc2lvblJlcXVpcmVtZW50c0Zvck1hc3RlcnNEZWdyZWUiLCJ1c2VMYW5ndWFnZVNraWxsc0ZvckZhY3VsdHlPZkh1bWFuaXRpZXNPbmx5RW5hYmxlZCIsInVzZVNlbWVzdGVyc0NvbnRhaW4iLCJzZW1lc3RlcnMiLCJzZW1lc3RlciIsInVzZUFwcGxpY2F0aW9uRGVhZGxpbmVTdW1tZXJTZW1lc3RlckVuYWJsZWQiLCJ1c2VBcHBsaWNhdGlvbkRlYWRsaW5lV2ludGVyU2VtZXN0ZXJFbmFibGVkIiwidXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5IiwidXNlVGF4b25vbXlUZXJtIiwidGVybUlkIiwicmVjb3JkIiwiaXNSZXNvbHZpbmciLCJ1c2VUYXhvbm9teVRlcm1zIiwidGVybUlkcyIsInJlY29yZHMiLCJ1c2VGYWN1bHR5VGVybXMiLCJ0cmFuc2Zvcm1CYXNlZE9uRXJyb3JDb2RlIiwibWF0Y2giLCJ0cmFuc2Zvcm1FcnJvck1lc3NhZ2UiLCJwcm9wZXJ0eUlkIiwic3ViRmllbGQiLCJwYXJ0cyIsImVudGl0eUlkIiwicGFyc2VJbnQiLCJzZXJ2ZXJEYXRhIiwid2luZG93IiwiRGVncmVlUHJvZ3JhbUVkaXRvclNlcnZlckRhdGEiLCJFcnJvciIsInRyYW5zZm9ybWVkRXJyb3JNZXNzYWdlcyIsInRyYW5zZm9ybWVkRXJyb3JNZXNzYWdlc0Jhc2VkT25FcnJvckNvZGUiLCJyZXN0X3Rvb19zaG9ydCIsInJlc3RfdG9vX3Nob3J0X2VuIiwicmVzdF90b29fZmV3X2l0ZW1zIiwicmVzdF9pbnZhbGlkX3BhdHRlcm4iLCJFTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIiwidHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsU3RyaW5nIiwibWV0YSIsIm5hbWVfZW4iLCJ0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rIiwibGlua190ZXh0IiwibGlua190ZXh0X2VuIiwibGlua191cmwiLCJsaW5rX3VybF9lbiIsInRyYW5zZm9ybVRlcm1Ub0RlZ3JlZSIsImFiYnJldmlhdGlvbl9lbiIsInBhcmVudF9vYmplY3QiLCJ0cmFuc2Zvcm1UZXJtVG9BZG1pc3Npb25SZXF1aXJlbWVudCIsImFkbWlzc2lvblJlcXVpcmVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/Edit.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/Edit.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DegreeProgramEditForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DegreeProgramEditForm */ "./resources/ts/components/DegreeProgramEditForm/index.ts");
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.scss */ "./resources/ts/blocks/degree-program-form/admin.scss");





var Edit = function () {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, blockProps), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DegreeProgramEditForm__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/index.ts":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./resources/ts/blocks/degree-program-form/block.json");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./resources/ts/blocks/degree-program-form/Edit.tsx");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, _block_json__WEBPACK_IMPORTED_MODULE_1__), {
  edit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./resources/ts/blocks/description-details/Edit.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/description-details/Edit.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




var Edit = function (_a) {
  var content = _a.attributes.content,
    setAttributes = _a.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, blockProps, {
    tagName: "dd",
    onChange: function (nextContent) {
      return setAttributes({
        content: nextContent
      });
    },
    value: content,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description details …', 'fau-degree-program')
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./resources/ts/blocks/description-details/Save.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/description-details/Save.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var Save = function (_a) {
  var content = _a.attributes.content;
  var saveBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, saveBlockProps, {
    tagName: "dd",
    value: content
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./resources/ts/blocks/description-details/index.ts":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/description-details/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-details/block.json");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-details/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-details/Save.tsx");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, _block_json__WEBPACK_IMPORTED_MODULE_1__), {
  edit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./resources/ts/blocks/description-list/Edit.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-list/Edit.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var ALLOWED_BLOCKS = ['fau/description-term', 'fau/description-details'];
var TEMPLATE = [['fau/description-term'], ['fau/description-details']];
var Edit = function () {
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, blockProps), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./resources/ts/blocks/description-list/Save.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-list/Save.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var Save = function () {
  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, blockProps), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./resources/ts/blocks/description-list/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-list/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-list/block.json");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-list/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-list/Save.tsx");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, _block_json__WEBPACK_IMPORTED_MODULE_1__), {
  edit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./resources/ts/blocks/description-term/Edit.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-term/Edit.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




var Edit = function (_a) {
  var content = _a.attributes.content,
    setAttributes = _a.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, blockProps, {
    tagName: "dt",
    onChange: function (nextContent) {
      return setAttributes({
        content: nextContent
      });
    },
    value: content,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description term …', 'fau-degree-program')
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./resources/ts/blocks/description-term/Save.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-term/Save.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var Save = function (_a) {
  var content = _a.attributes.content;
  var saveBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, saveBlockProps, {
    tagName: "dt",
    value: content
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./resources/ts/blocks/description-term/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-term/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-term/block.json");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-term/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-term/Save.tsx");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, _block_json__WEBPACK_IMPORTED_MODULE_1__), {
  edit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./resources/ts/blocks/filters/addHeadingBlockVariations.ts":
/*!******************************************************************!*\
  !*** ./resources/ts/blocks/filters/addHeadingBlockVariations.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);


function addHeadingBlockVariations(settings, name) {
  if (name !== 'core/heading') {
    return settings;
  }
  return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, settings), {
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
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'fau/variations/heading', addHeadingBlockVariations);

/***/ }),

/***/ "./resources/ts/blocks/filters/addShortcodeBlockVariations.ts":
/*!********************************************************************!*\
  !*** ./resources/ts/blocks/filters/addShortcodeBlockVariations.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);


function addShortcodeBlockVariations(settings, name) {
  if (name !== 'core/shortcode') {
    return settings;
  }
  return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, settings), {
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
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'fau/variations/shortcode', addShortcodeBlockVariations);

/***/ }),

/***/ "./resources/ts/blocks/filters/defaultImageSize.ts":
/*!*********************************************************!*\
  !*** ./resources/ts/blocks/filters/defaultImageSize.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_SIZE = 'thumbnail';
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.PostFeaturedImage.imageSize', 'fau/degree-program-image-size', function () {
  return DEFAULT_SIZE;
});

/***/ }),

/***/ "./resources/ts/blocks/filters/index.ts":
/*!**********************************************!*\
  !*** ./resources/ts/blocks/filters/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultImageSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultImageSize */ "./resources/ts/blocks/filters/defaultImageSize.ts");
/* harmony import */ var _addHeadingBlockVariations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addHeadingBlockVariations */ "./resources/ts/blocks/filters/addHeadingBlockVariations.ts");
/* harmony import */ var _addShortcodeBlockVariations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addShortcodeBlockVariations */ "./resources/ts/blocks/filters/addShortcodeBlockVariations.ts");
/* harmony import */ var _restrictAllowedTextFormats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restrictAllowedTextFormats */ "./resources/ts/blocks/filters/restrictAllowedTextFormats.ts");





/***/ }),

/***/ "./resources/ts/blocks/filters/restrictAllowedTextFormats.ts":
/*!*******************************************************************!*\
  !*** ./resources/ts/blocks/filters/restrictAllowedTextFormats.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);



var ALLOWED_FORMATS = ['core/bold', 'core/link'];
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  var registeredFormats = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.store).getFormatTypes();
  var formatNamesToDisable = [];
  registeredFormats.forEach(function (formatType) {
    if (ALLOWED_FORMATS.includes(formatType.name)) {
      return;
    }
    formatNamesToDisable.push(formatType.name);
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__.store).removeFormatTypes(formatNamesToDisable);
});

/***/ }),

/***/ "./resources/ts/blocks/index.ts":
/*!**************************************!*\
  !*** ./resources/ts/blocks/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _degree_program_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./degree-program-form */ "./resources/ts/blocks/degree-program-form/index.ts");
/* harmony import */ var _description_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description-details */ "./resources/ts/blocks/description-details/index.ts");
/* harmony import */ var _description_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description-list */ "./resources/ts/blocks/description-list/index.ts");
/* harmony import */ var _description_term__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description-term */ "./resources/ts/blocks/description-term/index.ts");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters */ "./resources/ts/blocks/filters/index.ts");






/***/ }),

/***/ "./resources/ts/components/CircularProgress/CircularProgress.tsx":
/*!***********************************************************************!*\
  !*** ./resources/ts/components/CircularProgress/CircularProgress.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var DEFAULT_SQUARE_SIZE = 100;
var DEFAULT_STROKE_WIDTH = 2;
var StyledSvgCircle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].svg(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__makeTemplateObject)(["\n\tstroke: var( --wp-admin-theme-color, #007cba );\n"], ["\n\tstroke: var( --wp-admin-theme-color, #007cba );\n"])));
var CircularProgressBar = function (_a) {
  var percentage = _a.percentage,
    _b = _a.squareSize,
    squareSize = _b === void 0 ? DEFAULT_SQUARE_SIZE : _b,
    _c = _a.strokeWidth,
    strokeWidth = _c === void 0 ? DEFAULT_STROKE_WIDTH : _c;
  var radius = (squareSize - strokeWidth) / 2;
  var viewBox = "0 0 ".concat(squareSize, " ").concat(squareSize);
  var dashArray = radius * Math.PI * 2;
  var dashOffset = dashArray - dashArray * percentage / 100;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledSvgCircle, {
    width: squareSize,
    height: squareSize,
    viewBox: viewBox
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    className: "circle-background",
    cx: squareSize / 2,
    cy: squareSize / 2,
    r: radius,
    strokeWidth: "".concat(strokeWidth, "px"),
    fill: "none",
    stroke: "rgba(167, 152, 181, 0.3)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    className: "circle-progress",
    cx: squareSize / 2,
    cy: squareSize / 2,
    r: radius,
    fill: "none",
    strokeWidth: "".concat(strokeWidth, "px"),
    transform: "rotate(-90 ".concat(squareSize / 2, " ").concat(squareSize / 2, ")"),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircularProgressBar);
var templateObject_1;

/***/ }),

/***/ "./resources/ts/components/CircularProgress/index.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/components/CircularProgress/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CircularProgress__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircularProgress */ "./resources/ts/components/CircularProgress/CircularProgress.tsx");


/***/ }),

/***/ "./resources/ts/components/ContentField/ContentField.tsx":
/*!***************************************************************!*\
  !*** ./resources/ts/components/ContentField/ContentField.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
/* harmony import */ var _useBlockEditorSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useBlockEditorSettings */ "./resources/ts/components/ContentField/useBlockEditorSettings.ts");









var StyledEditorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__makeTemplateObject)(["\n\tmargin: 0 0 12px !important;\n\n\t.content-field-blocks-list {\n\t\tborder: 1px solid #757575;\n\t\tpadding: 10px;\n\t}\n"], ["\n\tmargin: 0 0 12px !important;\n\n\t.content-field-blocks-list {\n\t\tborder: 1px solid #757575;\n\t\tpadding: 10px;\n\t}\n"])));
var BlockDeselectListener = function (_a) {
  var editorRef = _a.editorRef;
  var clearSelectedBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).clearSelectedBlock;
  var blurListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (!editorRef.current || editorRef.current.contains(event.target)) {
      return;
    }
    clearSelectedBlock();
  }, [editorRef, clearSelectedBlock]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.body.addEventListener('click', blurListener, {
      capture: true
    });
    return function () {
      return document.body.removeEventListener('click', blurListener, {
        capture: true
      });
    };
  }, [blurListener]);
  return null;
};
var ContentField = function (_a) {
  var content = _a.content,
    onChange = _a.onChange,
    required = _a.required;
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.parse)(content)), 2),
    currentBlocks = _b[0],
    setCurrentBlocks = _b[1];
  var editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var updateValue = function (blocks) {
    onChange((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.serialize)(blocks));
  };
  var settings = (0,_useBlockEditorSettings__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var fieldRequired = (0,_FormField_FormField__WEBPACK_IMPORTED_MODULE_5__.useFieldContext)().required;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockEditorProvider, {
    value: currentBlocks,
    onInput: function (blocks) {
      setCurrentBlocks(blocks);
      updateValue(blocks);
    },
    onChange: function (blocks) {
      setCurrentBlocks(blocks);
      updateValue(blocks);
    },
    settings: settings
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: editorRef,
    className: "fau-content-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SlotFillProvider, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledEditorWrapper, {
    className: "editor-styles-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockEditorKeyboardShortcuts.Register, null), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockTools, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.WritingFlow, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ObserveTyping, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    role: "textbox",
    "aria-required": required !== null && required !== void 0 ? required : fieldRequired
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockList, {
    renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.DefaultBlockAppender,
    className: "content-field-blocks-list"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockDeselectListener, {
    editorRef: editorRef
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover.Slot, null))));
};
ContentField.defaultProps = {
  required: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentField);
var templateObject_1;

/***/ }),

/***/ "./resources/ts/components/ContentField/constants.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/components/ContentField/constants.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALLOWED_BLOCK_TYPES: () => (/* binding */ ALLOWED_BLOCK_TYPES),
/* harmony export */   ALLOWED_MIME_TYPES: () => (/* binding */ ALLOWED_MIME_TYPES)
/* harmony export */ });
var ALLOWED_BLOCK_TYPES = ['core/paragraph', 'core/image', 'core/list', 'core/list-item', 'core/heading', 'core/shortcode', 'core/quote', 'fau/description-list', 'fau/description-term', 'fau/description-details', 'fau/faudir-block', 'fau-degree-program/shares'];
var ALLOWED_MIME_TYPES = {
  'jpg|jpeg|jpe': 'image/jpeg',
  gif: 'image/gif',
  png: 'image/png'
};

/***/ }),

/***/ "./resources/ts/components/ContentField/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/components/ContentField/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ContentField__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./resources/ts/components/ContentField/styles.scss");
/* harmony import */ var _ContentField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentField */ "./resources/ts/components/ContentField/ContentField.tsx");



/***/ }),

/***/ "./resources/ts/components/ContentField/useBlockEditorSettings.ts":
/*!************************************************************************!*\
  !*** ./resources/ts/components/ContentField/useBlockEditorSettings.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./resources/ts/components/ContentField/constants.ts");






var SETTINGS = {
  allowedBlockTypes: _constants__WEBPACK_IMPORTED_MODULE_4__.ALLOWED_BLOCK_TYPES,
  codeEditingEnabled: false
};
var useBlockEditorSettings = function () {
  var hasUploadPermissions = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
    var _a;
    return (_a = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).canUser('create', 'media')) !== null && _a !== void 0 ? _a : false;
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var mediaUploadBlockEditor;
    if (hasUploadPermissions) {
      mediaUploadBlockEditor = function (_a) {
        var onError = _a.onError,
          argumentsObject = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(_a, ["onError"]);
        (0,_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_3__.uploadMedia)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({
          wpAllowedMimeTypes: _constants__WEBPACK_IMPORTED_MODULE_4__.ALLOWED_MIME_TYPES,
          onError: function (_a) {
            var message = _a.message;
            return onError(message);
          }
        }, argumentsObject));
      };
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, SETTINGS), {
      mediaUpload: mediaUploadBlockEditor,
      __experimentalFetchLinkSuggestions: function (search, searchOptions) {
        return (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.__experimentalFetchLinkSuggestions)(search, searchOptions);
      },
      __experimentalFetchRichUrlData: _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.__experimentalFetchUrlData
    });
  }, [hasUploadPermissions]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBlockEditorSettings);

/***/ }),

/***/ "./resources/ts/components/DayMonthPicker/DayMonthPicker.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DayMonthPicker/DayMonthPicker.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");




var DayMonthPicker = function (props) {
  var required = (0,_FormField_FormField__WEBPACK_IMPORTED_MODULE_2__.useFieldContext)().required;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, props, {
    pattern: "((0[1-9]|[12][0-9]|3[01])\\.(0[13578]|1[02])|(0[1-9]|[12][0-9]|30)\\.(0[469]|11)|(0[1-9]|1[0-9]|2[0-8])\\.02)\\.",
    placeholder: "TT.MM.",
    className: "c-day-month-picker",
    "aria-required": required
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DayMonthPicker);

/***/ }),

/***/ "./resources/ts/components/DayMonthPicker/index.ts":
/*!*********************************************************!*\
  !*** ./resources/ts/components/DayMonthPicker/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DayMonthPicker__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./resources/ts/components/DayMonthPicker/styles.scss");
/* harmony import */ var _DayMonthPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DayMonthPicker */ "./resources/ts/components/DayMonthPicker/DayMonthPicker.tsx");



/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/DegreeProgramCombinations.tsx":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/DegreeProgramCombinations.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DegreeProgramCombinations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
/* harmony import */ var _hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
/* harmony import */ var _hooks_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useDegreeProgramProperty */ "./resources/ts/hooks/useDegreeProgramProperty.ts");
/* harmony import */ var _RelatedDegreePrograms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RelatedDegreePrograms */ "./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx");








function DegreeProgramCombinations() {
  var enabled = (0,_hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_4__.useCombinationOfDegreeProgramEnabled)();
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)((0,_hooks_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_5__["default"])('combinations'), 2),
    combinations = _a[0],
    setCombinations = _a[1];
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)((0,_hooks_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_5__["default"])('limited_combinations'), 2),
    limitedCombinations = _b[0],
    setLimitedCombinations = _b[1];
  if (!enabled) {
    return null;
  }
  if (combinations === undefined || limitedCombinations === undefined) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)));
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "combinations",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Combinations', 'backoffice: field label', 'fau-degree-program')
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RelatedDegreePrograms__WEBPACK_IMPORTED_MODULE_6__["default"], {
    relatedDegreeProgramIds: combinations,
    setRelatedDegreePrograms: setCombinations,
    messages: {
      added: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Combination added', 'backoffice: field label', 'fau-degree-program'),
      removed: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Combination removed', 'backoffice: field label', 'fau-degree-program'),
      remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Remove combination', 'backoffice: field label', 'fau-degree-program'),
      __experimentalInvalid: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Invalid combination', 'backoffice: field label', 'fau-degree-program')
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "limited_combinations",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Limited Combinations', 'backoffice: field label', 'fau-degree-program')
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RelatedDegreePrograms__WEBPACK_IMPORTED_MODULE_6__["default"], {
    relatedDegreeProgramIds: limitedCombinations,
    setRelatedDegreePrograms: setLimitedCombinations,
    messages: {
      added: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Limited combination added', 'backoffice: field label', 'fau-degree-program'),
      removed: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Limited combination removed', 'backoffice: field label', 'fau-degree-program'),
      remove: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Remove limited combination', 'backoffice: field label', 'fau-degree-program'),
      __experimentalInvalid: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Invalid limited combination', 'backoffice: field label', 'fau-degree-program')
    }
  })));
}

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx":
/*!*************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EntitySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts");
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hoc */ "./resources/ts/components/DegreeProgramCombinations/hoc/index.ts");






var withRelatedDegreeProgramProps = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(function (WrappedComponent) {
  return function (_a) {
    var setRelatedDegreePrograms = _a.setRelatedDegreePrograms,
      others = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(_a, ["setRelatedDegreePrograms"]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({
      entityToToken: function (post) {
        return "".concat((0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(post.degree_program.title.de), " (").concat(post.degree_program.degree.abbreviation.de, ")");
      },
      onChange: function (posts) {
        setRelatedDegreePrograms(posts.map(function (post) {
          return post.id;
        }));
      },
      maxSuggestions: 300
    }, others));
  };
}, 'withRelatedDegreeProgramProps');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)(withRelatedDegreeProgramProps, _hoc__WEBPACK_IMPORTED_MODULE_4__.withDegreeProgramPosts, _hoc__WEBPACK_IMPORTED_MODULE_4__.withSearchedDegreeProgramPosts)(_EntitySelector__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/hoc/index.ts":
/*!************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/hoc/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withDegreeProgramPosts: () => (/* reexport safe */ _withDegreeProgramPosts__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   withSearchedDegreeProgramPosts: () => (/* reexport safe */ _withSearchedDegreeProgramPosts__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _withDegreeProgramPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withDegreeProgramPosts */ "./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts");
/* harmony import */ var _withSearchedDegreeProgramPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withSearchedDegreeProgramPosts */ "./resources/ts/components/DegreeProgramCombinations/hoc/withSearchedDegreeProgramPosts.ts");




/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/serverData */ "./resources/ts/util/serverData.ts");




var withDegreeProgramPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(function (select, ownProps) {
  var _a;
  if (ownProps.relatedDegreeProgramIds.length === 0) {
    return {
      entities: []
    };
  }
  var getEntityRecords = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store.name).getEntityRecords;
  var query = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({
    per_page: -1,
    orderby: 'include',
    _fields: 'id,degree_program',
    context: 'view'
  }, {
    include: ownProps.relatedDegreeProgramIds.join(',')
  });
  return {
    entities: (_a = getEntityRecords('postType', (0,_util_serverData__WEBPACK_IMPORTED_MODULE_2__["default"])().postType, query)) !== null && _a !== void 0 ? _a : []
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withDegreeProgramPosts);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/hoc/withSearchedDegreeProgramPosts.ts":
/*!*************************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/hoc/withSearchedDegreeProgramPosts.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/serverData */ "./resources/ts/util/serverData.ts");






var withSearchedDegreeProgramPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(function (select, ownProps) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), 2),
    search = _a[0],
    setSearch = _a[1];
  var getCurrentPost = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store.name).getCurrentPost;
  var getEntityRecords = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store.name).getEntityRecords;
  var currentPost = getCurrentPost();
  var posts = getEntityRecords('postType', (0,_util_serverData__WEBPACK_IMPORTED_MODULE_4__["default"])().postType, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({
    per_page: ownProps.maxSuggestions,
    orderby: 'title',
    order: 'asc',
    _fields: 'id,degree_program',
    context: 'view'
  }, {
    search: search
  }), currentPost ? {
    exclude: currentPost.id
  } : {}));
  return {
    searchedEntities: posts !== null && posts !== void 0 ? posts : [],
    setSearch: setSearch
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSearchedDegreeProgramPosts);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/index.ts":
/*!********************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DegreeProgramCombinations__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DegreeProgramCombinations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DegreeProgramCombinations */ "./resources/ts/components/DegreeProgramCombinations/DegreeProgramCombinations.tsx");


/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/AdmissionRequirements.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/AdmissionRequirements.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
/* harmony import */ var _Layouts_FormWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layouts/FormWrapper */ "./resources/ts/components/Layouts/FormWrapper.tsx");
/* harmony import */ var _TermSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TermSelector */ "./resources/ts/components/TermSelector/index.ts");
/* harmony import */ var _contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
/* harmony import */ var _hooks_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/constants */ "./resources/ts/hooks/constants.ts");
/* harmony import */ var _hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
/* harmony import */ var _util_transforms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/transforms */ "./resources/ts/util/transforms.ts");
/* harmony import */ var _ContentField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ContentField */ "./resources/ts/components/ContentField/index.ts");
/* harmony import */ var _DayMonthPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DayMonthPicker */ "./resources/ts/components/DayMonthPicker/index.ts");
/* harmony import */ var _Layouts_FormSeparator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Layouts/FormSeparator */ "./resources/ts/components/Layouts/FormSeparator.tsx");
/* harmony import */ var _MultilingualContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx");














var AdmissionRequirements = function () {
  var _a = (0,_contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_6__.useEditDegreeProgram)(),
    values = _a.values,
    handleChange = _a.handleChange;
  var bachelorOrTeachingEnabled = (0,_hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__.useAdmissionRequirementsForBachelorAndTeachingDegreesEnable)();
  var teachingDegreeHigherSemesterEnabled = (0,_hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__.useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled)();
  var mastersEnabled = (0,_hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__.useAdmissionRequirementsForMastersDegree)();
  var humanitiesFacultyLanguageSkillsEnabled = (0,_hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__.useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled)();
  var applicationSummerDeadlineEnabled = (0,_hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__.useApplicationDeadlineSummerSemesterEnabled)();
  var applicationWinterDeadlineEnabled = (0,_hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__.useApplicationDeadlineWinterSemesterEnabled)();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_FormWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], null, (bachelorOrTeachingEnabled || teachingDegreeHigherSemesterEnabled) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, bachelorOrTeachingEnabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "admission_requirements.bachelor_or_teaching_degree",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)("Admission requirements for Bachelor's/teaching degrees", 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: values.degree.name.de !== _hooks_constants__WEBPACK_IMPORTED_MODULE_7__.ADDITIONAL_DEGREE_NAME
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "bachelor_teaching_admission_requirement",
    taxonomy: "bachelorOrTeachingDegreeAdmissionRequirement",
    value: values.admission_requirements.bachelor_or_teaching_degree.id,
    childOnly: true,
    onChange: function (term) {
      handleChange('admission_requirements.bachelor_or_teaching_degree', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_9__.transformTermToAdmissionRequirement)(term));
    }
  })), teachingDegreeHigherSemesterEnabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "admission_requirements.teaching_degree_higher_semester",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)("Admission requirements for entering a Bachelor's/teaching degree at a higher semester", 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: values.degree.name.de !== _hooks_constants__WEBPACK_IMPORTED_MODULE_7__.ADDITIONAL_DEGREE_NAME
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "teaching_higher_semester_admission_requirement",
    taxonomy: "teachingDegreeHigherSemesterAdmissionRequirement",
    value: values.admission_requirements.teaching_degree_higher_semester.id,
    childOnly: true,
    onChange: function (term) {
      handleChange('admission_requirements.teaching_degree_higher_semester', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_9__.transformTermToAdmissionRequirement)(term));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_FormSeparator__WEBPACK_IMPORTED_MODULE_12__["default"], null)), mastersEnabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "admission_requirements.master",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)("Admission requirements for Master's degree", 'backoffice: degree program edit form', 'fau-degree-program'),
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "master_admission_requirement",
    taxonomy: "masterDegreeAdmissionRequirement",
    value: values.admission_requirements.master.id,
    childOnly: true,
    onChange: function (term) {
      handleChange('admission_requirements.master', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_9__.transformTermToAdmissionRequirement)(term));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "content_related_master_requirements",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)("Content-related admission requirements for Master's degree", 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "vorausgegangene Bachelorstudieng\u00E4nge, Qualifikationswerte, etc.",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: values.content_related_master_requirements
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "content_related_master_requirements.".concat(languageCode),
      onChange: function (value) {
        handleChange("content_related_master_requirements.".concat(languageCode), value);
      },
      content: values.content_related_master_requirements[languageCode],
      required: required
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_FormSeparator__WEBPACK_IMPORTED_MODULE_12__["default"], null)), applicationWinterDeadlineEnabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "application_deadline_winter_semester",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Application deadline winter semester', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Datum im Format TT.MM. angeben. Weitere Termine k\u00F6nnen im Feld \u201EDetails und Anmerkungen\u201C eingetragen werden."
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DayMonthPicker__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onChange: function (value) {
      handleChange('application_deadline_winter_semester', value);
    },
    value: values.application_deadline_winter_semester
  })), applicationSummerDeadlineEnabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "application_deadline_summer_semester",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Application deadline summer semester', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Datum im Format TT.MM. angeben. Weitere Termine k\u00F6nnen im Feld \u201EDetails und Anmerkungen\u201C eingetragen werden."
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DayMonthPicker__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onChange: function (value) {
      handleChange('application_deadline_summer_semester', value);
    },
    value: values.application_deadline_summer_semester
  })), (applicationWinterDeadlineEnabled || applicationSummerDeadlineEnabled) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_FormSeparator__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "details_and_notes",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Details and notes', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "evtl. zus\u00E4tzliche Infos zu Bewerbung und Einschreibung."
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: values.details_and_notes
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "details_and_notes.".concat(languageCode),
      onChange: function (value) {
        handleChange("details_and_notes.".concat(languageCode), value);
      },
      content: values.details_and_notes[languageCode],
      required: required
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "language_skills",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Language skills', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Sprachkenntnisse, die f\u00FCr den Studiengang erforderlich sind."
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: values.language_skills
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "language_skills.".concat(languageCode),
      onChange: function (value) {
        handleChange("language_skills.".concat(languageCode), value);
      },
      content: values.language_skills[languageCode],
      required: required
    });
  })), humanitiesFacultyLanguageSkillsEnabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "language_skills_humanities_faculty",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Language skills for Faculty of Humanities, Social Sciences, and Theology only', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Sprachkenntnisse, die auch in den ersten Semestern noch erworben werden k\u00F6nnen."
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "language_skills_humanities_faculty",
    onChange: function (value) {
      handleChange('language_skills_humanities_faculty', value);
    },
    content: values.language_skills_humanities_faculty
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "german_language_skills_for_international_students",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Language certificates/German language skills for international applicants', 'backoffice: degree program edit form', 'fau-degree-program'),
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "german_language_skills_for_international_students",
    taxonomy: "germanLanguageSkillsForInternationalStudents",
    value: values.german_language_skills_for_international_students.id,
    onChange: function (term) {
      handleChange('german_language_skills_for_international_students', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_9__.transformTermToMultilingualLink)(term));
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdmissionRequirements);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/Content.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/Content.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
/* harmony import */ var _Layouts_FormWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layouts/FormWrapper */ "./resources/ts/components/Layouts/FormWrapper.tsx");
/* harmony import */ var _contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
/* harmony import */ var _ContentField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ContentField */ "./resources/ts/components/ContentField/index.ts");
/* harmony import */ var _DegreeProgramCombinations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DegreeProgramCombinations */ "./resources/ts/components/DegreeProgramCombinations/index.ts");
/* harmony import */ var _MultilingualContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx");








var CONTENT_ITEMS = {
  about: 'kurze Beschreibung des Studiengangs allgemein; ±200 Wörter',
  structure: 'Vorstellung des Fachs und der Studieninhalte; ±200 Wörter',
  specializations: 'Spezialisierungsmöglichkeiten und Schwerpunkte während des Studiums; ±200 Wörter',
  qualities_and_skills: 'Fähigkeiten und Vorlieben der Studieninteressierten, nicht formelle Voraussetzungen; ±200 Wörter',
  why_should_study: 'Einzigartigkeit bzw. Besonderheiten (z. B. Kooperationspartner, Verbundstudiumsangebot) des Studiengangs an der FAU; ±200 Wörter',
  career_prospects: 'mögliche Tätigkeitsfelder nach Abschluss des Studiums; ±200 Wörter',
  special_features: 'Möglichkeiten von Auslandsaufenthalten, Kooperationen mit Forschungsprojekten, etc.; ±200 Wörter'
};
var REQUIRED_FIELDS = ['about', 'structure'];
var Content = function () {
  var _a = (0,_contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_4__.useEditDegreeProgram)(),
    values = _a.values,
    handleChange = _a.handleChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_FormWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, Object.keys(CONTENT_ITEMS).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item,
      name: "content.".concat(item, ".description"),
      label: "".concat(values.content[item].title.de, " ").concat(values.content[item].title.en ? "(".concat(values.content[item].title.en, ")") : ''),
      help: CONTENT_ITEMS[item],
      required: REQUIRED_FIELDS.includes(item)
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: values.content[item].description
    }, function (languageCode, required) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: "content.".concat(item, ".description.").concat(languageCode),
        content: values.content[item].description[languageCode],
        onChange: function (content) {
          return handleChange("content.".concat(item, ".description.").concat(languageCode), content);
        },
        required: required
      }));
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DegreeProgramCombinations__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/DegreeProgramEditForm.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/DegreeProgramEditForm.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_Providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/Providers */ "./resources/ts/contexts/Providers.tsx");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tabs */ "./resources/ts/components/Tabs/index.ts");
/* harmony import */ var _AdmissionRequirements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdmissionRequirements */ "./resources/ts/components/DegreeProgramEditForm/AdmissionRequirements.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./resources/ts/components/DegreeProgramEditForm/Content.tsx");
/* harmony import */ var _FormHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormHeading */ "./resources/ts/components/DegreeProgramEditForm/FormHeading.tsx");
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./General */ "./resources/ts/components/DegreeProgramEditForm/General.tsx");
/* harmony import */ var _OrganizationalLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OrganizationalLinks */ "./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx");
/* harmony import */ var _TabTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TabTitle */ "./resources/ts/components/DegreeProgramEditForm/TabTitle.tsx");










var DegreeProgramEditForm = function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts_Providers__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormHeading__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tabs: [{
      name: 'general',
      title: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TabTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "general",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('At a glance', 'backoffice: Degree program edit form', 'fau-degree-program')
      }),
      component: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_General__WEBPACK_IMPORTED_MODULE_7__["default"], null)
    }, {
      name: 'content',
      title: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TabTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "content",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Content', 'backoffice: Degree program edit form', 'fau-degree-program')
      }),
      component: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], null)
    }, {
      name: 'admission-requirements',
      title: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TabTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "admission-requirements",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Admission requirements, application and enrollment', 'backoffice: Degree program edit form', 'fau-degree-program')
      }),
      component: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AdmissionRequirements__WEBPACK_IMPORTED_MODULE_4__["default"], null)
    }, {
      name: 'organizational-links',
      title: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TabTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "organizational-links",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Organizational notes/links', 'backoffice: Degree program edit form', 'fau-degree-program')
      }),
      component: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrganizationalLinks__WEBPACK_IMPORTED_MODULE_8__["default"], null)
    }]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DegreeProgramEditForm);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/FormHeading.tsx":
/*!***********************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/FormHeading.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");




var StyledHeading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__makeTemplateObject)(["\n\tfont-size: 1.5rem;\n"], ["\n\tfont-size: 1.5rem;\n"])));
var FormHeading = function () {
  var values = (0,_contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_1__.useEditDegreeProgram)().values;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledHeading, null, values.title.de, " ", react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, values.title.en));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormHeading);
var templateObject_1;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/General.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/General.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FormField */ "./resources/ts/components/FormField/index.ts");
/* harmony import */ var _components_ImageField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImageField */ "./resources/ts/components/ImageField/index.ts");
/* harmony import */ var _components_Layouts_FormWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layouts/FormWrapper */ "./resources/ts/components/Layouts/FormWrapper.tsx");
/* harmony import */ var _components_LimitedInputControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LimitedInputControl */ "./resources/ts/components/LimitedInputControl/index.ts");
/* harmony import */ var _components_TermSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/TermSelector */ "./resources/ts/components/TermSelector/index.ts");
/* harmony import */ var _components_TermSelector_TermSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TermSelector/TermSelector */ "./resources/ts/components/TermSelector/TermSelector.tsx");
/* harmony import */ var _components_TextControlCollection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/TextControlCollection */ "./resources/ts/components/TextControlCollection/index.ts");
/* harmony import */ var _contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
/* harmony import */ var _util_idHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/idHelpers */ "./resources/ts/util/idHelpers.ts");
/* harmony import */ var _util_transforms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/transforms */ "./resources/ts/util/transforms.ts");
/* harmony import */ var _ContentField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ContentField */ "./resources/ts/components/ContentField/index.ts");
/* harmony import */ var _MultilingualContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx");















var General = function () {
  var _a = (0,_contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_10__.useEditDegreeProgram)(),
    values = _a.values,
    handleChange = _a.handleChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layouts_FormWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "title",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Title', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Studiengangsbezeichnung, ohne Abschluss.",
    fill: "half",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: values.title
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      onChange: function (value) {
        handleChange("title.".concat(languageCode), value);
      },
      value: values.title[languageCode],
      "aria-required": required
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "subtitle",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Subtitle', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Z. B. Aufz\u00E4hlung der Studienschwerpunkte bei Wirtschaftswissenschaften.",
    fill: "half"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: values.subtitle
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      onChange: function (value) {
        handleChange("subtitle.".concat(languageCode), value);
      },
      value: values.subtitle[languageCode],
      "aria-required": required
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "featured_image",
    fill: "half",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Featured image', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Wird f\u00FCr die Detailansicht verwendet. Gr\u00F6\u00DFe: 1400 \u00D7 350 px.",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ImageField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: "featured_image"
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "teaser_image",
    fill: "half",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Teaser Image', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Wird f\u00FCr die Kacheln auf der Auswahlseite verwendet. Gr\u00F6\u00DFe: 500 \u00D7 500 px.",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ImageField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: "teaser_image"
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "entry_text",
    fill: "full",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Entry text (promotional)', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Ca. 300 Zeichen.",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: values.entry_text
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContentField__WEBPACK_IMPORTED_MODULE_13__["default"], {
      key: "entry_text.".concat(languageCode),
      content: values.entry_text[languageCode],
      onChange: function (content) {
        handleChange("entry_text.".concat(languageCode), content);
      },
      required: required
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "area_of_study",
    fill: "third",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Area of study', 'backoffice: degree program edit form', 'fau-degree-program'),
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector__WEBPACK_IMPORTED_MODULE_7__.MultiTermSelector, {
    id: "area_of_study",
    taxonomy: "areaOfStudy",
    value: values.area_of_study.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('area_of_study', terms.map(_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToMultilingualLink));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Start of degree program', 'backoffice: degree program edit form', 'fau-degree-program'),
    name: "start",
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector__WEBPACK_IMPORTED_MODULE_7__.MultiTermSelector, {
    id: "semester",
    taxonomy: "semester",
    value: values.start.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('start', terms.map(_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToMultilingualString));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "number_of_students",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Number of students', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Gesamtzahl der Studierenden, nicht nur Erstsemester.",
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector_TermSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "number_of_students",
    taxonomy: "numberOfStudents",
    value: values.number_of_students.id,
    onChange: function (term) {
      handleChange('number_of_students', term ? {
        id: (0,_util_idHelpers__WEBPACK_IMPORTED_MODULE_11__.propertyId)('term', term.id),
        name: term.name,
        description: term.description
      } : {
        id: '',
        name: '',
        description: ''
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "teaching_language",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Teaching language', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector_TermSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "teaching-language",
    taxonomy: "teachingLanguage",
    value: values.teaching_language.id,
    onChange: function (term) {
      handleChange('teaching_language', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToMultilingualString)(term));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "attributes",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Attributes', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector__WEBPACK_IMPORTED_MODULE_7__.MultiTermSelector, {
    id: "attribute",
    taxonomy: "attribute",
    value: values.attributes.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('attributes', terms.map(_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToMultilingualString));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "degree",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Degree', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector_TermSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "degree",
    taxonomy: "degree",
    value: values.degree.id,
    childOnly: true,
    onChange: function (term) {
      handleChange('degree', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToDegree)(term));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "faculty",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Faculty', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector__WEBPACK_IMPORTED_MODULE_7__.MultiTermSelector, {
    id: "faculty",
    taxonomy: "faculty",
    value: values.faculty.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('faculty', terms.map(_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToMultilingualLink));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "location",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Study location', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector__WEBPACK_IMPORTED_MODULE_7__.MultiTermSelector, {
    id: "study-location",
    taxonomy: "studyLocation",
    value: values.location.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('location', terms.map(_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToMultilingualString));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "subject_groups",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Subject groups', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector__WEBPACK_IMPORTED_MODULE_7__.MultiTermSelector, {
    id: "subject-group",
    taxonomy: "subjectGroup",
    value: values.subject_groups.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('subject_groups', terms.map(_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToMultilingualString));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "keywords",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Keywords', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TermSelector__WEBPACK_IMPORTED_MODULE_7__.MultiTermSelector, {
    id: "keywords",
    taxonomy: "keyword",
    value: values.keywords.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('keywords', terms.map(_util_transforms__WEBPACK_IMPORTED_MODULE_12__.transformTermToMultilingualString));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "videos",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Videos', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Videos \u00FCber den Studiengang, das Studienfach, ein Thema des Fachs (z. B. 2-Minuten-Wissen), Erfahrungsberichte.",
    fill: "full",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TextControlCollection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: values.videos,
    onChange: function (value) {
      handleChange('videos', value);
    },
    type: "url",
    maxItems: 3
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "standard_duration",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Duration of studies in semester', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Nur Zahl.",
    fill: "full",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    onChange: function (value) {
      handleChange('standard_duration', value);
    },
    value: values.standard_duration
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "meta_description",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Meta description', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Text f\u00FCr die Anzeige bei Suchmaschinen.",
    fill: "full",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: values.meta_description
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LimitedInputControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: values.meta_description[languageCode],
      maxChars: 160,
      required: required
    }, function (_a) {
      var updatedValue = _a.updatedValue,
        controlRequired = _a.required;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
        value: values.meta_description[languageCode],
        onChange: function (text) {
          handleChange("meta_description.".concat(languageCode), updatedValue(text));
        },
        "aria-required": controlRequired
      });
    });
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/serverData */ "./resources/ts/util/serverData.ts");
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");






var tabs = Object.keys((0,_util_serverData__WEBPACK_IMPORTED_MODULE_3__["default"])().languages).map(function (languageCode) {
  var languageName = (0,_util_serverData__WEBPACK_IMPORTED_MODULE_3__["default"])().languages[languageCode];
  return {
    name: languageCode,
    title: languageName
  };
});
var MultilingualContainer = function (_a) {
  var children = _a.children,
    value = _a.value;
  var required = (0,_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__.useFieldContext)().required;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    tabs: tabs.map(function (tab) {
      var isEmpty = tab.name !== 'de' && !value[tab.name];
      return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, tab), {
        title: isEmpty ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, tab.title, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "\u00A0 (", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('empty', 'backoffice: Multilingual container', 'fau-degree-program'), ")")) : tab.title,
        className: isEmpty ? 'is-empty' : ''
      });
    }),
    className: "component-multilingual-container"
  }, function (tab) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children(tab.name, required));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultilingualContainer);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormField_FieldContextAwareTextControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormField/FieldContextAwareTextControl */ "./resources/ts/components/FormField/FieldContextAwareTextControl.ts");
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
/* harmony import */ var _Layouts_FormWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layouts/FormWrapper */ "./resources/ts/components/Layouts/FormWrapper.tsx");
/* harmony import */ var _TermSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TermSelector */ "./resources/ts/components/TermSelector/index.ts");
/* harmony import */ var _contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
/* harmony import */ var _hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
/* harmony import */ var _util_transforms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/transforms */ "./resources/ts/util/transforms.ts");
/* harmony import */ var _MultilingualContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx");











var OrganizationalLinks = function () {
  var _a = (0,_contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_7__.useEditDegreeProgram)(),
    values = _a.values,
    handleChange = _a.handleChange;
  var degreeFeesEnabled = (0,_hooks_useConditionalFields__WEBPACK_IMPORTED_MODULE_8__.useDegreeFeesEnabled)();
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_FormWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "apply_now_link",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('"Apply now" link', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "apply_now_link",
    taxonomy: "applyNowLink",
    value: values.apply_now_link.id,
    onChange: function (term) {
      handleChange('apply_now_link', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_9__.transformTermToMultilingualLink)(term));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "examinations_office",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Examinations Office', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "examinations_office",
    taxonomy: "examinationsOffice",
    value: values.examinations_office.id,
    onChange: function (term) {
      handleChange('examinations_office', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_9__.transformTermToMultilingualLink)(term));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "module_handbook",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Module handbook (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FieldContextAwareTextControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "module_handbook",
    onChange: function (handbook) {
      handleChange('module_handbook', handbook);
    },
    value: values.module_handbook,
    type: "url"
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "url",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Degree program (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: values.url
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      onChange: function (value) {
        handleChange("url.".concat(languageCode), value);
      },
      value: values.url[languageCode],
      type: "url",
      "aria-required": required
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "department",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Department/Institute (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "half",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: values.department
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      onChange: function (value) {
        handleChange("department.".concat(languageCode), value);
      },
      value: values.department[languageCode],
      type: "url",
      "aria-required": required
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "subject_specific_advice",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Subject-specific advice', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TermSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "subject_specific_advice",
    taxonomy: "subjectSpecificAdvice",
    value: values.subject_specific_advice.id,
    onChange: function (term) {
      handleChange('subject_specific_advice', (0,_util_transforms__WEBPACK_IMPORTED_MODULE_9__.transformTermToMultilingualLink)(term));
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "info_brochure",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Info brochure degree program (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FieldContextAwareTextControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "info_brochure",
    onChange: function (representatives) {
      handleChange('info_brochure', representatives);
    },
    value: values.info_brochure,
    type: "url"
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "examination_regulations",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Degree program and examination regulations (URL)', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "third",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FieldContextAwareTextControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: function (value) {
      handleChange("examination_regulations", value);
    },
    value: values.examination_regulations,
    type: "url"
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "fee_required",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Fee required', 'backoffice: degree program edit form', 'fau-degree-program'),
    fill: "full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: values.fee_required,
    onChange: function (checked) {
      handleChange('fee_required', checked);
    }
  })), degreeFeesEnabled && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormField_FormField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "degree_program_fees",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Degree Program Fees', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Studiengangsgeb\u00FChren, nicht Semesterbeitr\u00E4ge.",
    required: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MultilingualContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: values.degree_program_fees
  }, function (languageCode, required) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      onChange: function (degreeProgramFees) {
        handleChange("degree_program_fees.".concat(languageCode), degreeProgramFees);
      },
      value: values.degree_program_fees[languageCode],
      "aria-required": required
    });
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrganizationalLinks);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/TabTitle.tsx":
/*!********************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/TabTitle.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _contexts_DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./resources/ts/components/DegreeProgramEditForm/constants.ts");





var ErrorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__makeTemplateObject)(["\n\tcolor: #cc1818;\n"], ["\n\tcolor: #cc1818;\n"])));
function useTabHasError(tabName) {
  var _a;
  var fields = (_a = _constants__WEBPACK_IMPORTED_MODULE_2__.FIELDS_BY_TABS[tabName]) !== null && _a !== void 0 ? _a : [];
  var fieldHasErrors = (0,_contexts_DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_1__.useValidation)().fieldHasErrors;
  for (var i = 0; i < fields.length; i += 1) {
    if (fieldHasErrors(fields[i])) {
      return true;
    }
  }
  return false;
}
var TabTitle = function (_a) {
  var name = _a.name,
    title = _a.title;
  var hasErrors = useTabHasError(name);
  if (!hasErrors) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, title);
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorWrapper, null, title);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabTitle);
var templateObject_1;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/constants.ts":
/*!********************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/constants.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIELDS_BY_TABS: () => (/* binding */ FIELDS_BY_TABS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var FIELDS_BY_TABS = {
  general: ['title', 'subtitle', 'featured_image', 'teaser_image', 'entry_text', 'area_of_study', 'start', 'number_of_students', 'teaching_language', 'attributes', 'degree', 'faculty', 'location', 'subject_groups', 'keywords', 'videos', 'standard_duration'],
  content: ['content'],
  'admission-requirements': ['admission_requirements', 'content_related_master_requirements', 'application_deadline_winter_semester', 'application_deadline_summer_semester', 'details_and_notes', 'language_skills', 'language_skills_humanities_faculty', 'german_language_skills_for_international_students'],
  'organizational-links': ['apply_now_link', 'examinations_office', 'module_handbook', 'url', 'department', 'subject_specific_advice', 'info_brochure', 'examination_regulations', 'fee_required', 'degree_program_fees']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/index.ts":
/*!****************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _DegreeProgramEditForm__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./resources/ts/components/DegreeProgramEditForm/styles.scss");
/* harmony import */ var _DegreeProgramEditForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DegreeProgramEditForm */ "./resources/ts/components/DegreeProgramEditForm/DegreeProgramEditForm.tsx");



/***/ }),

/***/ "./resources/ts/components/EntitySelector/EntitySelector.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/EntitySelector/EntitySelector.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EntitySelector)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./resources/ts/components/EntitySelector/styles.scss");








function EntitySelector(_a) {
  var _b = _a.label,
    label = _b === void 0 ? '' : _b,
    messages = _a.messages,
    maxLength = _a.maxLength,
    onChange = _a.onChange,
    entityToToken = _a.entityToToken,
    maxSuggestions = _a.maxSuggestions,
    entities = _a.entities,
    searchedEntities = _a.searchedEntities,
    setSearch = _a.setSearch,
    childOnly = _a.childOnly;
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    isFocused = _c[0],
    setIsFocused = _c[1];
  var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), 2),
    values = _d[0],
    setValues = _d[1];
  var wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var debouncedSearch = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(setSearch, 500);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (entities.length > 0) {
      var newValues = entities.map(entityToToken);
      setValues(newValues);
    }
  }, [entities, entityToToken]);
  var suggestions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (maxLength && values.length >= maxLength) {
      return [];
    }
    var results = [];
    var topLevelEntities = searchedEntities.filter(function (entity) {
      return !(entity === null || entity === void 0 ? void 0 : entity.parent);
    });
    topLevelEntities.forEach(function (entity) {
      var children = searchedEntities.filter(function (childEntity) {
        return childEntity.parent === entity.id;
      });
      results = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)(results), false), [entity], false), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)(children), false);
    });
    return results.map(entityToToken);
  }, [searchedEntities, values, entityToToken, maxLength]);
  var onChangeTokens = function (tokens) {
    var availableEntities = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)(entities), false), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)(searchedEntities), false);
    var uniqueTokens = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(tokens);
    setValues(uniqueTokens);
    var newEntities = uniqueTokens.map(function (token) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(availableEntities, function (entity) {
        return entityToToken(entity) === token;
      });
    });
    onChange(newEntities);
    setSearch('');
  };
  var isTokenValid = function (token) {
    var availableEntities = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)(entities), false), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)(searchedEntities), false);
    var foundEntity = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(availableEntities, function (entity) {
      return entityToToken(entity) === token;
    });
    return childOnly ? foundEntity && (foundEntity === null || foundEntity === void 0 ? void 0 : foundEntity.parent) : foundEntity;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!wrapperRef.current || !isFocused) {
      return;
    }
    var suggestionsList = wrapperRef.current.querySelector('.components-form-token-field__suggestions-list');
    if (!suggestionsList) {
      return;
    }
    suggestionsList.tabIndex = -1;
  }, [isFocused]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "entity-selector",
    ref: wrapperRef
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    tabIndex: -1,
    onFocus: function () {
      return setIsFocused(true);
    },
    onBlur: function () {
      return setIsFocused(false);
    },
    role: "listbox",
    "aria-required": (0,_FormField_FormField__WEBPACK_IMPORTED_MODULE_5__.useFieldContext)().required
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
    label: label,
    messages: messages,
    maxLength: maxLength,
    value: values,
    suggestions: suggestions,
    onChange: onChangeTokens,
    onInputChange: debouncedSearch,
    onFocus: function () {
      return setIsFocused(true);
    },
    maxSuggestions: maxSuggestions,
    __experimentalShowHowTo: false,
    __experimentalValidateInput: isTokenValid,
    __experimentalExpandOnFocus: true
  })), isFocused && maxLength && values.length >= maxLength && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "entity-selector__max-items-notice"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__._nx)('You can only select %d item', 'You can only select %d items', maxLength, 'backoffice: selector message', 'fau-degree-program'), maxLength)));
}

/***/ }),

/***/ "./resources/ts/components/EntitySelector/index.ts":
/*!*********************************************************!*\
  !*** ./resources/ts/components/EntitySelector/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _EntitySelector__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _EntitySelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntitySelector */ "./resources/ts/components/EntitySelector/EntitySelector.tsx");


/***/ }),

/***/ "./resources/ts/components/FormField/FieldContextAwareTextControl.ts":
/*!***************************************************************************!*\
  !*** ./resources/ts/components/FormField/FieldContextAwareTextControl.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withAriaRequired__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withAriaRequired */ "./resources/ts/components/FormField/withAriaRequired.tsx");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withAriaRequired__WEBPACK_IMPORTED_MODULE_1__["default"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl));

/***/ }),

/***/ "./resources/ts/components/FormField/FieldError.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/components/FormField/FieldError.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var StyledErrorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__makeTemplateObject)(["\n\tcolor: #cc1818;\n\tfont-size: 12px;\n\tmargin: 5px 0 0;\n\tfont-family: var( --default-font );\n"], ["\n\tcolor: #cc1818;\n\tfont-size: 12px;\n\tmargin: 5px 0 0;\n\tfont-family: var( --default-font );\n"])));
var FieldError = function (_a) {
  var errors = _a.errors;
  if (!errors.size) {
    return null;
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, Array.from(errors).map(function (_a) {
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(_a, 2),
      error = _b[1];
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledErrorWrapper, {
      key: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)()
    }, error.message);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldError);
var templateObject_1;

/***/ }),

/***/ "./resources/ts/components/FormField/FormField.tsx":
/*!*********************************************************!*\
  !*** ./resources/ts/components/FormField/FormField.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFieldContext: () => (/* binding */ useFieldContext)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layouts_FormFieldLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layouts/FormFieldLabel */ "./resources/ts/components/Layouts/FormFieldLabel.tsx");
/* harmony import */ var _Layouts_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layouts/FormFieldWrapper */ "./resources/ts/components/Layouts/FormFieldWrapper.tsx");
/* harmony import */ var _contexts_DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FieldError */ "./resources/ts/components/FormField/FieldError.tsx");








var FormFieldContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  required: false
});
var useFieldContext = function () {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormFieldContext);
};
var FormField = function (_a) {
  var name = _a.name,
    fill = _a.fill,
    children = _a.children,
    label = _a.label,
    help = _a.help,
    _b = _a.wrapBaseControl,
    wrapBaseControl = _b === void 0 ? true : _b,
    _c = _a.displayError,
    displayError = _c === void 0 ? true : _c,
    _d = _a.required,
    required = _d === void 0 ? false : _d,
    others = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(_a, ["name", "fill", "children", "label", "help", "wrapBaseControl", "displayError", "required"]);
  var getFieldErrors = (0,_contexts_DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_5__.useValidation)().getFieldErrors;
  var suffixedLabel = required ? label : "".concat(label, " ").concat((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('(optional)', 'backoffice: degree program edit form', 'fau-degree-program'));
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({
    fill: fill
  }, others), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormFieldContext.Provider, {
    value: {
      required: required
    }
  }, wrapBaseControl ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layouts_FormFieldLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: suffixedLabel,
      help: help
    })
  }, children) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children)), displayError && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FieldError__WEBPACK_IMPORTED_MODULE_6__["default"], {
    errors: getFieldErrors(name)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormField);

/***/ }),

/***/ "./resources/ts/components/FormField/defs.ts":
/*!***************************************************!*\
  !*** ./resources/ts/components/FormField/defs.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/components/FormField/index.ts":
/*!****************************************************!*\
  !*** ./resources/ts/components/FormField/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _FormField__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "./resources/ts/components/FormField/defs.ts");
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormField */ "./resources/ts/components/FormField/FormField.tsx");



/***/ }),

/***/ "./resources/ts/components/FormField/withAriaRequired.tsx":
/*!****************************************************************!*\
  !*** ./resources/ts/components/FormField/withAriaRequired.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormField */ "./resources/ts/components/FormField/FormField.tsx");




var withAriaRequired = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(function (WrappedComponent) {
  return function (props) {
    var required = (0,_FormField__WEBPACK_IMPORTED_MODULE_2__.useFieldContext)().required;
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({
      "aria-required": required
    }, props));
  };
}, 'withAriaRequired');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAriaRequired);

/***/ }),

/***/ "./resources/ts/components/ImageField/ImageField.tsx":
/*!***********************************************************!*\
  !*** ./resources/ts/components/ImageField/ImageField.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageField)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");
/* harmony import */ var _useMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useMedia */ "./resources/ts/components/ImageField/useMedia.ts");










var THUMBNAIL_SIZE = 150;
var StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(templateObject_2 || (templateObject_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__makeTemplateObject)(["\n\t.components-placeholder__fieldset {\n\t\t", "\n\t\t};\n\t}\n"], ["\n\t.components-placeholder__fieldset {\n\t\t", "\n\t\t};\n\t}\n"])), function (_a) {
  var hasImage = _a.hasImage;
  return hasImage ? (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.css)(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__makeTemplateObject)(["\n\t\t\t\t\t\t.components-form-file-upload,\n\t\t\t\t\t\t.block-editor-media-placeholder__cancel-button,\n\t\t\t\t\t\t.components-button.is-tertiary {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\t\t\t\t  "], ["\n\t\t\t\t\t\t.components-form-file-upload,\n\t\t\t\t\t\t.block-editor-media-placeholder__cancel-button,\n\t\t\t\t\t\t.components-button.is-tertiary {\n\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t}\n\t\t\t\t  "]))) : '';
});
function ImageField(_a) {
  var path = _a.path,
    _b = _a.title,
    title = _b === void 0 ? '' : _b;
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    isLoading = _c[0],
    setIsLoading = _c[1];
  var _d = (0,_contexts_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_5__.useEditDegreeProgram)(),
    values = _d.values,
    handleChange = _d.handleChange;
  var selectedMedia = (0,_useMedia__WEBPACK_IMPORTED_MODULE_7__["default"])(values[path].id);
  var Preview = function () {
    var _a, _b, _c, _d;
    if (isLoading) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null);
    }
    if (!values[path].url) {
      return null;
    }
    return !selectedMedia ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: THUMBNAIL_SIZE,
        height: THUMBNAIL_SIZE
      },
      className: "loader-card"
    }) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      width: THUMBNAIL_SIZE,
      src: (_d = (_c = (_b = (_a = selectedMedia === null || selectedMedia === void 0 ? void 0 : selectedMedia.media_details) === null || _a === void 0 ? void 0 : _a.sizes) === null || _b === void 0 ? void 0 : _b.thumbnail) === null || _c === void 0 ? void 0 : _c.source_url) !== null && _d !== void 0 ? _d : values[path].url,
      alt: "preview"
    });
  };
  var handleOnCancel = function () {
    handleChange(path, {
      id: 0,
      url: ''
    });
  };
  var handleOnSelect = function (_a) {
    var id = _a.id,
      url = _a.url;
    if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_1__.isBlobURL)(url)) {
      setIsLoading(true);
      return;
    }
    handleChange(path, {
      id: id,
      url: url
    });
    setIsLoading(false);
  };
  var hasMedia = function () {
    return !isLoading && !!(selectedMedia === null || selectedMedia === void 0 ? void 0 : selectedMedia.id);
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledWrapper, {
    hasImage: hasMedia(),
    "aria-required": (0,_FormField_FormField__WEBPACK_IMPORTED_MODULE_6__.useFieldContext)().required,
    role: "combobox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
    value: [values[path].id],
    onSelect: handleOnSelect,
    onCancel: hasMedia() ? handleOnCancel : undefined,
    allowedTypes: ['image'],
    multiple: false,
    labels: {
      title: title
    },
    mediaPreview: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Preview, null)
  }, hasMedia() && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    gap: 4,
    justify: "flex-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaReplaceFlow, {
    mediaUrl: values[path].url,
    mediaId: values[path].id,
    allowedTypes: ['image'],
    onSelect: handleOnSelect
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    isDestructive: true,
    onClick: handleOnCancel
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Remove image'))))));
}
ImageField.defaultProps = {
  title: ''
};
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./resources/ts/components/ImageField/index.ts":
/*!*****************************************************!*\
  !*** ./resources/ts/components/ImageField/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ImageField__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ImageField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageField */ "./resources/ts/components/ImageField/ImageField.tsx");


/***/ }),

/***/ "./resources/ts/components/ImageField/useMedia.ts":
/*!********************************************************!*\
  !*** ./resources/ts/components/ImageField/useMedia.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMedia)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

function useMedia(mediaId) {
  var media = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
    return select('core').getMedia(mediaId);
  }, [mediaId]);
  return media;
}

/***/ }),

/***/ "./resources/ts/components/Layouts/FormFieldLabel.tsx":
/*!************************************************************!*\
  !*** ./resources/ts/components/Layouts/FormFieldLabel.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__makeTemplateObject)(["\n\tdisplay: block;\n"], ["\n\tdisplay: block;\n"])));
var StyledHelpText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(templateObject_2 || (templateObject_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__makeTemplateObject)(["\n\tmargin: 0;\n\tmargin-top: 4px;\n\tfont-size: 12px;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tcolor: rgb( 117, 117, 117 );\n"], ["\n\tmargin: 0;\n\tmargin-top: 4px;\n\tfont-size: 12px;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tcolor: rgb( 117, 117, 117 );\n"])));
var FormFieldLabel = function (_a) {
  var label = _a.label,
    help = _a.help;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledLabel, null, label), !!help && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledHelpText, null, help));
};
FormFieldLabel.defaultProps = {
  help: undefined
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFieldLabel);
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./resources/ts/components/Layouts/FormFieldWrapper.tsx":
/*!**************************************************************!*\
  !*** ./resources/ts/components/Layouts/FormFieldWrapper.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-definitions */ "./resources/ts/components/Layouts/style-definitions.tsx");



var FormFieldWrapper = function (_a) {
  var children = _a.children,
    _b = _a.fill,
    fill = _b === void 0 ? 'full' : _b,
    others = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["children", "fill"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_definitions__WEBPACK_IMPORTED_MODULE_1__.StyledFormFieldWrapper, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
    isBlock: fill === 'auto' || undefined,
    fill: fill
  }, others), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFieldWrapper);

/***/ }),

/***/ "./resources/ts/components/Layouts/FormSeparator.tsx":
/*!***********************************************************!*\
  !*** ./resources/ts/components/Layouts/FormSeparator.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-definitions */ "./resources/ts/components/Layouts/style-definitions.tsx");


var FormSeparator = function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_definitions__WEBPACK_IMPORTED_MODULE_1__.StyledFormFieldWrapper, {
    isBlock: undefined,
    fill: "full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSeparator);

/***/ }),

/***/ "./resources/ts/components/Layouts/FormWrapper.tsx":
/*!*********************************************************!*\
  !*** ./resources/ts/components/Layouts/FormWrapper.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-definitions */ "./resources/ts/components/Layouts/style-definitions.tsx");



var FormWrapper = function (_a) {
  var children = _a.children,
    others = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["children"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_definitions__WEBPACK_IMPORTED_MODULE_1__.StyledFormWrapper, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
    wrap: true,
    gap: 0,
    align: "flex-start"
  }, others), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormWrapper);

/***/ }),

/***/ "./resources/ts/components/Layouts/style-definitions.tsx":
/*!***************************************************************!*\
  !*** ./resources/ts/components/Layouts/style-definitions.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledFormFieldWrapper: () => (/* binding */ StyledFormFieldWrapper),
/* harmony export */   StyledFormWrapper: () => (/* binding */ StyledFormWrapper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);



var GAP_COLUMN = '15px';
var GAP_ROW = '15px';
var StyledFormFieldWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem)(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__makeTemplateObject)(["\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tmargin-bottom: ", ";\n\n\t", "\n\n\t", "\n\n\t", "\n"], ["\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tmargin-bottom: ", ";\n\n\t", "\n\n\t", "\n\n\t", "\n"])), GAP_COLUMN, GAP_COLUMN, GAP_ROW, function (_a) {
  var fill = _a.fill;
  return fill === 'full' && "\n\t\twidth: 100%;\n\t\tflex: 0 0 100%;\n\t";
}, function (_a) {
  var fill = _a.fill;
  return fill === 'half' && "\n\t\twidth: 50%;\n\t\tflex: 0 0 50%;\n\t";
}, function (_a) {
  var fill = _a.fill;
  return fill === 'third' && "\n\t\twidth: 33.333333333%;\n\t\tflex: 0 0 33.333333333%;\n\t";
});
var StyledFormWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex)(templateObject_2 || (templateObject_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__makeTemplateObject)(["\n\tmargin: 0 -", ";\n"], ["\n\tmargin: 0 -", ";\n"])), GAP_COLUMN);
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./resources/ts/components/LimitedInputControl/LimitedInputControl.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/ts/components/LimitedInputControl/LimitedInputControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CircularProgress */ "./resources/ts/components/CircularProgress/index.ts");





var LimitedInputControl = function (_a) {
  var maxChars = _a.maxChars,
    children = _a.children,
    value = _a.value,
    _b = _a.required,
    required = _b === void 0 ? false : _b;
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(maxChars), 2),
    charsLeft = _c[0],
    setCharsLeft = _c[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCharsLeft(maxChars - value.length);
  }, [value, maxChars]);
  var updatedValue = function (text) {
    return text.length <= maxChars ? text : text.substring(0, maxChars);
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children({
    updatedValue: updatedValue,
    maxChars: maxChars,
    required: required
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: "flex-start"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
    percentage: charsLeft * 100 / maxChars,
    squareSize: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('%s characters left', 'backoffice: limited text input', 'fau-degree-program').replace('%s', charsLeft.toString()))));
};
LimitedInputControl.defaultProps = {
  required: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LimitedInputControl);

/***/ }),

/***/ "./resources/ts/components/LimitedInputControl/index.ts":
/*!**************************************************************!*\
  !*** ./resources/ts/components/LimitedInputControl/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _LimitedInputControl__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _LimitedInputControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LimitedInputControl */ "./resources/ts/components/LimitedInputControl/LimitedInputControl.tsx");


/***/ }),

/***/ "./resources/ts/components/Tabs/Tabs.tsx":
/*!***********************************************!*\
  !*** ./resources/ts/components/Tabs/Tabs.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var Tabs = function (_a) {
  var tabs = _a.tabs;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    tabs: tabs
  }, function (tab) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, tab.component);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./resources/ts/components/Tabs/defs.ts":
/*!**********************************************!*\
  !*** ./resources/ts/components/Tabs/defs.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/components/Tabs/index.ts":
/*!***********************************************!*\
  !*** ./resources/ts/components/Tabs/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Tabs__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "./resources/ts/components/Tabs/defs.ts");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs */ "./resources/ts/components/Tabs/Tabs.tsx");



/***/ }),

/***/ "./resources/ts/components/TermSelector/MultiTermSelector.tsx":
/*!********************************************************************!*\
  !*** ./resources/ts/components/TermSelector/MultiTermSelector.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EntitySelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts");
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoc */ "./resources/ts/components/TermSelector/hoc/index.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.compose)(_hoc__WEBPACK_IMPORTED_MODULE_2__.withTermSelectorProps, _hoc__WEBPACK_IMPORTED_MODULE_2__.withDegreeProgramTerms, _hoc__WEBPACK_IMPORTED_MODULE_2__.withSearchedDegreeProgramTerms)(_EntitySelector__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./resources/ts/components/TermSelector/TermSelector.tsx":
/*!***************************************************************!*\
  !*** ./resources/ts/components/TermSelector/TermSelector.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EntitySelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts");
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoc */ "./resources/ts/components/TermSelector/hoc/index.ts");





var withSingleTermSelectorProps = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(function (WrappedComponent) {
  return function (_a) {
    var onChange = _a.onChange,
      others = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["onChange"]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({
      onChange: function (terms) {
        if (terms.length === 0) {
          onChange(null);
          return;
        }
        onChange(terms[0]);
      },
      maxLength: 1
    }, others));
  };
}, 'withSingleTermSelectorProps');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.compose)(withSingleTermSelectorProps, _hoc__WEBPACK_IMPORTED_MODULE_3__.withTermSelectorProps, _hoc__WEBPACK_IMPORTED_MODULE_3__.withDegreeProgramTerms, _hoc__WEBPACK_IMPORTED_MODULE_3__.withSearchedDegreeProgramTerms)(_EntitySelector__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/index.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withDegreeProgramTerms: () => (/* reexport safe */ _withDegreeProgramTerms__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   withSearchedDegreeProgramTerms: () => (/* reexport safe */ _withSearchedDegreeProgramTerms__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   withTermSelectorProps: () => (/* reexport safe */ _withTermSelectorProps__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _withDegreeProgramTerms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withDegreeProgramTerms */ "./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts");
/* harmony import */ var _withSearchedDegreeProgramTerms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withSearchedDegreeProgramTerms */ "./resources/ts/components/TermSelector/hoc/withSearchedDegreeProgramTerms.ts");
/* harmony import */ var _withTermSelectorProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withTermSelectorProps */ "./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx");





/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts":
/*!****************************************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_idHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/idHelpers */ "./resources/ts/util/idHelpers.ts");
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/serverData */ "./resources/ts/util/serverData.ts");






var withDegreeProgramTerms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(function (select, ownProps) {
  var _a;
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(ownProps.value)) {
    return {
      entities: []
    };
  }
  var getEntityRecords = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store.name).getEntityRecords;
  var ids = ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(ownProps.value) ? ownProps.value : [ownProps.value]).map(_util_idHelpers__WEBPACK_IMPORTED_MODULE_3__.entityId);
  var query = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({
    per_page: -1,
    orderby: 'include',
    context: 'view'
  }, {
    include: ids.join(',')
  });
  return {
    entities: (_a = getEntityRecords('taxonomy', (0,_util_serverData__WEBPACK_IMPORTED_MODULE_4__["default"])().taxonomySlugs[ownProps.taxonomy], query)) !== null && _a !== void 0 ? _a : []
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withDegreeProgramTerms);

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/withSearchedDegreeProgramTerms.ts":
/*!************************************************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/withSearchedDegreeProgramTerms.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/serverData */ "./resources/ts/util/serverData.ts");





var withSearchedDegreeProgramTerms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(function (select, ownProps) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), 2),
    search = _a[0],
    setSearch = _a[1];
  var getEntityRecords = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store.name).getEntityRecords;
  var terms = getEntityRecords('taxonomy', (0,_util_serverData__WEBPACK_IMPORTED_MODULE_3__["default"])().taxonomySlugs[ownProps.taxonomy], (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({
    per_page: ownProps.maxSuggestions,
    orderby: 'name',
    order: 'asc',
    context: 'view'
  }, {
    search: search
  }));
  return {
    searchedEntities: terms !== null && terms !== void 0 ? terms : [],
    setSearch: setSearch
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSearchedDegreeProgramTerms);

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx":
/*!****************************************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);





var withTermSelectorProps = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(function (WrappedComponent) {
  return function (_a) {
    var id = _a.id,
      help = _a.help,
      others = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["id", "help"]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
      id: id,
      help: help !== null && help !== void 0 ? help : ''
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({
      entityToToken: function (term) {
        if (term.parent) {
          return "--- ".concat((0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(term.name));
        }
        return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(term.name);
      },
      maxSuggestions: 100
    }, others)));
  };
}, 'withSelectorProps');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withTermSelectorProps);

/***/ }),

/***/ "./resources/ts/components/TermSelector/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/components/TermSelector/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiTermSelector: () => (/* reexport safe */ _MultiTermSelector__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _TermSelector__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _MultiTermSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiTermSelector */ "./resources/ts/components/TermSelector/MultiTermSelector.tsx");
/* harmony import */ var _TermSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TermSelector */ "./resources/ts/components/TermSelector/TermSelector.tsx");



/***/ }),

/***/ "./resources/ts/components/TextControlCollection/TextControlCollection.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/TextControlCollection/TextControlCollection.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormField_FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormField/FormField */ "./resources/ts/components/FormField/FormField.tsx");








var transformRawValue = function (value) {
  return value.map(function (str) {
    return {
      value: str,
      id: (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)()
    };
  });
};
var StyledFieldRow = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex)(templateObject_1 || (templateObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__makeTemplateObject)(["\n\talign-items: stretch;\n\tmargin-bottom: 5px;\n\n\t> .components-base-control {\n\t\tflex: 1;\n\n\t\t.components-base-control__field,\n\t\t.components-text-control__input {\n\t\t\tmargin-bottom: 0;\n\t\t\theight: 100%;\n\t\t}\n\t}\n"], ["\n\talign-items: stretch;\n\tmargin-bottom: 5px;\n\n\t> .components-base-control {\n\t\tflex: 1;\n\n\t\t.components-base-control__field,\n\t\t.components-text-control__input {\n\t\t\tmargin-bottom: 0;\n\t\t\theight: 100%;\n\t\t}\n\t}\n"])));
var StyledNoItemsMessage = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p(templateObject_2 || (templateObject_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__makeTemplateObject)(["\n\tbackground-color: #eee;\n\tpadding: 10px;\n\tborder-radius: 2px;\n"], ["\n\tbackground-color: #eee;\n\tpadding: 10px;\n\tborder-radius: 2px;\n"])));
var TextControlCollection = function (_a) {
  var _b = _a.emptyMessage,
    emptyMessage = _b === void 0 ? undefined : _b,
    value = _a.value,
    onChange = _a.onChange,
    _c = _a.type,
    type = _c === void 0 ? 'text' : _c,
    maxItems = _a.maxItems;
  var initialValue = value.length ? value : [''];
  var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(transformRawValue(initialValue)), 2),
    fields = _d[0],
    setFields = _d[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onChange(fields.filter(function (f) {
      return !!f.value;
    }).map(function (f) {
      return f.value;
    }));
  }, [fields]);
  var required = (0,_FormField_FormField__WEBPACK_IMPORTED_MODULE_3__.useFieldContext)().required;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, fields.map(function (field, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledFieldRow, {
      key: field.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      value: field.value,
      onChange: function (text) {
        setFields((0,immer__WEBPACK_IMPORTED_MODULE_7__["default"])(fields, function (draft) {
          draft[index].value = text;
        }));
      },
      type: type,
      "aria-required": required
    }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isDestructive: true,
      onClick: function () {
        setFields((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)(fields.filter(function (f) {
          return f.id !== field.id;
        })), false));
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: "no"
    }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Remove', 'backoffice: TextControlCollection', 'fau-degree-program'))));
  }), fields.length === 0 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledNoItemsMessage, null, emptyMessage !== null && emptyMessage !== void 0 ? emptyMessage : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('No items added yet', 'backoffice: text control collection', 'fau-degree-program')), (!maxItems || fields.length < maxItems) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: function () {
      setFields((0,immer__WEBPACK_IMPORTED_MODULE_7__["default"])(fields, function (draft) {
        draft.push({
          id: (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)(),
          value: ''
        });
      }));
    },
    variant: "primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Add', 'backoffice: TextControlCollection', 'fau-degree-program')));
};
TextControlCollection.defaultProps = {
  emptyMessage: undefined,
  type: 'text'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextControlCollection);
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./resources/ts/components/TextControlCollection/index.ts":
/*!****************************************************************!*\
  !*** ./resources/ts/components/TextControlCollection/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TextControlCollection__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TextControlCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextControlCollection */ "./resources/ts/components/TextControlCollection/TextControlCollection.tsx");


/***/ }),

/***/ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx":
/*!*****************************************************************!*\
  !*** ./resources/ts/contexts/DegreeProgramEditFormProvider.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DegreeProgramEditFormContext: () => (/* binding */ DegreeProgramEditFormContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useEditDegreeProgram: () => (/* binding */ useEditDegreeProgram)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/serverData */ "./resources/ts/util/serverData.ts");
/* harmony import */ var _DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");









var DegreeProgramEditFormContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var DegreeProgramEditFormProvider = function (_a) {
  var children = _a.children;
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__read)((0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.useEntityProp)('postType', (0,_util_serverData__WEBPACK_IMPORTED_MODULE_5__["default"])().postType, (0,_util_serverData__WEBPACK_IMPORTED_MODULE_5__["default"])().propertyName), 2),
    degreeProgramData = _b[0],
    setDegreeProgramData = _b[1];
  var removeError = (0,_DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_6__.useValidation)().removeError;
  var editPost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).editPost;
  var enablePostPublishButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (path, val) {
    if (path === 'title.de' && typeof val === 'string') {
      editPost({
        excerpt: val
      });
    }
  }, [editPost]);
  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (path, val) {
    removeError(path);
    setDegreeProgramData((0,immer__WEBPACK_IMPORTED_MODULE_8__["default"])(degreeProgramData, function (draft) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(draft, path, val);
    }));
    enablePostPublishButton(path, val);
  }, [setDegreeProgramData, degreeProgramData, removeError, enablePostPublishButton]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DegreeProgramEditFormContext.Provider, {
    value: {
      handleChange: handleChange,
      values: degreeProgramData
    }
  }, children);
};
var useEditDegreeProgram = function () {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DegreeProgramEditFormContext);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DegreeProgramEditFormProvider);

/***/ }),

/***/ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/contexts/DegreeProgramValidationProvider.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DegreeProgramValidationContext: () => (/* binding */ DegreeProgramValidationContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useValidation: () => (/* binding */ useValidation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_errorTransforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/errorTransforms */ "./resources/ts/util/errorTransforms.ts");
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/serverData */ "./resources/ts/util/serverData.ts");







var DegreeProgramValidationContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var transformServerError = function (serverError) {
  var _a;
  var errors = new Map();
  if (serverError.code !== 'rest_invalid_param') {
    return errors;
  }
  var errorDetails = (_a = serverError.data) === null || _a === void 0 ? void 0 : _a.params;
  if (typeof errorDetails === 'undefined') {
    return errors;
  }
  Object.entries(errorDetails).forEach(function (detail) {
    var error = {
      errorCode: detail[1].code || '',
      message: detail[1].message
    };
    errors.set(detail[0], (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, error), {
      message: (0,_util_errorTransforms__WEBPACK_IMPORTED_MODULE_4__.transformErrorMessage)(detail[0], error)
    }));
  });
  return errors;
};
var DegreeProgramValidationProvider = function (_a) {
  var children = _a.children;
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Map()), 2),
    errors = _b[0],
    setErrors = _b[1];
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    isSaving = _c[0],
    setIsSaving = _c[1];
  var postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (selectCb) {
    var getCurrentPostId = selectCb(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentPostId;
    return getCurrentPostId();
  }, []);
  var editPost = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).editPost;
  var getFieldErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (fieldId) {
    return new Map(Array.from(errors).filter(function (_a) {
      var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)(_a, 1),
        key = _b[0];
      var isOnSameRootFieldName = key.split('.')[0] === fieldId.split('.')[0];
      return isOnSameRootFieldName && key.substring(0, fieldId.length) === fieldId;
    }));
  }, [errors]);
  var fieldHasErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (fieldId) {
    var fieldErrors = getFieldErrors(fieldId);
    return fieldErrors.size > 0;
  }, [getFieldErrors]);
  var removeError = function (fieldId) {
    setErrors(function (prevErrors) {
      var newErrors = new Map(prevErrors);
      newErrors.delete(fieldId);
      newErrors.delete("".concat(fieldId, ".id"));
      return newErrors;
    });
  };
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.subscribe)(function () {
    var selectEditorStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    var isSavingPost = selectEditorStore.isSavingPost,
      isAutosavingPost = selectEditorStore.isAutosavingPost;
    setIsSaving(isSavingPost() && !isAutosavingPost());
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isSaving) {
      return;
    }
    if (!postId) {
      return;
    }
    var selectCoreStore = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    var serverErrors = selectCoreStore.getLastEntitySaveError('postType', (0,_util_serverData__WEBPACK_IMPORTED_MODULE_5__["default"])().postType, postId);
    if (!serverErrors) {
      setErrors(new Map());
      return;
    }
    editPost({
      status: 'draft'
    }, {
      undoIgnore: true
    });
    setErrors(new Map((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)(transformServerError(serverErrors)), false)));
  }, [isSaving, postId, editPost]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DegreeProgramValidationContext.Provider, {
    value: {
      errors: errors,
      getFieldErrors: getFieldErrors,
      removeError: removeError,
      fieldHasErrors: fieldHasErrors
    }
  }, children);
};
var useValidation = function () {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DegreeProgramValidationContext);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DegreeProgramValidationProvider);

/***/ }),

/***/ "./resources/ts/contexts/Providers.tsx":
/*!*********************************************!*\
  !*** ./resources/ts/contexts/Providers.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
/* harmony import */ var _DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");



var Providers = function (_a) {
  var children = _a.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DegreeProgramEditFormProvider__WEBPACK_IMPORTED_MODULE_1__["default"], null, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);

/***/ }),

/***/ "./resources/ts/defs.ts":
/*!******************************!*\
  !*** ./resources/ts/defs.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEGREE_ABBREVIATION_GERMAN: () => (/* reexport safe */ _defs_degree_program_data__WEBPACK_IMPORTED_MODULE_2__.DEGREE_ABBREVIATION_GERMAN)
/* harmony export */ });
/* harmony import */ var _defs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs/common */ "./resources/ts/defs/common.ts");
/* harmony import */ var _defs_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defs/core-data */ "./resources/ts/defs/core-data.ts");
/* harmony import */ var _defs_degree_program_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defs/degree-program-data */ "./resources/ts/defs/degree-program-data.ts");
/* harmony import */ var _defs_entity_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defs/entity-selector */ "./resources/ts/defs/entity-selector.ts");
/* harmony import */ var _defs_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defs/errors */ "./resources/ts/defs/errors.ts");
/* harmony import */ var _defs_generic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defs/generic */ "./resources/ts/defs/generic.ts");
/* harmony import */ var _defs_server_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defs/server-data */ "./resources/ts/defs/server-data.ts");
/* harmony import */ var _defs_term__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defs/term */ "./resources/ts/defs/term.ts");









/***/ }),

/***/ "./resources/ts/defs/common.ts":
/*!*************************************!*\
  !*** ./resources/ts/defs/common.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/defs/core-data.ts":
/*!****************************************!*\
  !*** ./resources/ts/defs/core-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/defs/degree-program-data.ts":
/*!**************************************************!*\
  !*** ./resources/ts/defs/degree-program-data.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEGREE_ABBREVIATION_GERMAN: () => (/* binding */ DEGREE_ABBREVIATION_GERMAN)
/* harmony export */ });
var DEGREE_ABBREVIATION_GERMAN = {
  BACHELOR: 'BA',
  MASTERS: 'MA',
  TEACHING_DEGREE: 'LA'
};

/***/ }),

/***/ "./resources/ts/defs/entity-selector.ts":
/*!**********************************************!*\
  !*** ./resources/ts/defs/entity-selector.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/defs/errors.ts":
/*!*************************************!*\
  !*** ./resources/ts/defs/errors.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/defs/generic.ts":
/*!**************************************!*\
  !*** ./resources/ts/defs/generic.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/defs/server-data.ts":
/*!******************************************!*\
  !*** ./resources/ts/defs/server-data.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/defs/term.ts":
/*!***********************************!*\
  !*** ./resources/ts/defs/term.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./resources/ts/hooks/constants.ts":
/*!*****************************************!*\
  !*** ./resources/ts/hooks/constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADDITIONAL_DEGREE_NAME: () => (/* binding */ ADDITIONAL_DEGREE_NAME),
/* harmony export */   ADMISSION_REQUIREMENT_FREE: () => (/* binding */ ADMISSION_REQUIREMENT_FREE),
/* harmony export */   FACULTY_NATURAL_SCIENCES: () => (/* binding */ FACULTY_NATURAL_SCIENCES),
/* harmony export */   FACULTY_PHILOSOPHY: () => (/* binding */ FACULTY_PHILOSOPHY),
/* harmony export */   SEMESTER_SUMMER: () => (/* binding */ SEMESTER_SUMMER),
/* harmony export */   SEMESTER_WINTER: () => (/* binding */ SEMESTER_WINTER)
/* harmony export */ });
var FACULTY_PHILOSOPHY = 'phil';
var FACULTY_NATURAL_SCIENCES = 'nat';
var SEMESTER_SUMMER = 'Sommersemester';
var SEMESTER_WINTER = 'Wintersemester';
var ADMISSION_REQUIREMENT_FREE = 'frei';
var ADDITIONAL_DEGREE_NAME = 'Weiteres';

/***/ }),

/***/ "./resources/ts/hooks/useConditionalFields.ts":
/*!****************************************************!*\
  !*** ./resources/ts/hooks/useConditionalFields.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAdmissionRequirementsForBachelorAndTeachingDegreesEnable: () => (/* binding */ useAdmissionRequirementsForBachelorAndTeachingDegreesEnable),
/* harmony export */   useAdmissionRequirementsForMastersDegree: () => (/* binding */ useAdmissionRequirementsForMastersDegree),
/* harmony export */   useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled: () => (/* binding */ useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled),
/* harmony export */   useApplicationDeadlineSummerSemesterEnabled: () => (/* binding */ useApplicationDeadlineSummerSemesterEnabled),
/* harmony export */   useApplicationDeadlineWinterSemesterEnabled: () => (/* binding */ useApplicationDeadlineWinterSemesterEnabled),
/* harmony export */   useCombinationOfDegreeProgramEnabled: () => (/* binding */ useCombinationOfDegreeProgramEnabled),
/* harmony export */   useDegreeFeesEnabled: () => (/* binding */ useDegreeFeesEnabled),
/* harmony export */   useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled: () => (/* binding */ useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useTaxonomyTerm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTaxonomyTerm */ "./resources/ts/hooks/useTaxonomyTerm.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./resources/ts/hooks/constants.ts");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defs */ "./resources/ts/defs.ts");
/* harmony import */ var _useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDegreeProgramProperty */ "./resources/ts/hooks/useDegreeProgramProperty.ts");





var ALLOWED_FACULTY_SLUGS_FOR_COMBINATION = [_constants__WEBPACK_IMPORTED_MODULE_1__.FACULTY_PHILOSOPHY, _constants__WEBPACK_IMPORTED_MODULE_1__.FACULTY_NATURAL_SCIENCES];
function isBachelorContext(degree) {
  var _a, _b, _c;
  var parentDegree = (_c = (_b = (_a = degree.parent) === null || _a === void 0 ? void 0 : _a.abbreviation) === null || _b === void 0 ? void 0 : _b.de) !== null && _c !== void 0 ? _c : '';
  return degree.abbreviation.de === _defs__WEBPACK_IMPORTED_MODULE_2__.DEGREE_ABBREVIATION_GERMAN.BACHELOR || parentDegree === _defs__WEBPACK_IMPORTED_MODULE_2__.DEGREE_ABBREVIATION_GERMAN.BACHELOR || degree.name.de === _constants__WEBPACK_IMPORTED_MODULE_1__.ADDITIONAL_DEGREE_NAME;
}
function isTeachingDegreeContext(degree) {
  var _a, _b, _c;
  var parentDegree = (_c = (_b = (_a = degree.parent) === null || _a === void 0 ? void 0 : _a.abbreviation) === null || _b === void 0 ? void 0 : _b.de) !== null && _c !== void 0 ? _c : '';
  return degree.abbreviation.de === _defs__WEBPACK_IMPORTED_MODULE_2__.DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE || parentDegree === _defs__WEBPACK_IMPORTED_MODULE_2__.DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE;
}
function useDegreeFeesEnabled() {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__["default"])('fee_required'), 1),
    feeRequired = _a[0];
  return !!feeRequired;
}
function useCombinationOfDegreeProgramEnabled() {
  var facultyTerms = (0,_useTaxonomyTerm__WEBPACK_IMPORTED_MODULE_0__.useFacultyTerms)();
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__["default"])('degree'), 1),
    degree = _a[0];
  if (!facultyTerms.length || !degree) {
    return false;
  }
  return !!facultyTerms.find(function (facultyItem) {
    return ALLOWED_FACULTY_SLUGS_FOR_COMBINATION.includes(facultyItem.slug);
  }) && isBachelorContext(degree);
}
function useAdmissionRequirementsForBachelorAndTeachingDegreesEnable() {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__["default"])('degree'), 1),
    degree = _a[0];
  if (!degree) {
    return false;
  }
  return isBachelorContext(degree) || isTeachingDegreeContext(degree);
}
function useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled() {
  var _a, _b;
  var enabled = useAdmissionRequirementsForBachelorAndTeachingDegreesEnable();
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__["default"])('admission_requirements.bachelor_or_teaching_degree'), 1),
    bachelorOrTeachingAdmissionRequirement = _c[0];
  if (!bachelorOrTeachingAdmissionRequirement) {
    return false;
  }
  return enabled && bachelorOrTeachingAdmissionRequirement.name.de !== _constants__WEBPACK_IMPORTED_MODULE_1__.ADMISSION_REQUIREMENT_FREE && ((_b = (_a = bachelorOrTeachingAdmissionRequirement === null || bachelorOrTeachingAdmissionRequirement === void 0 ? void 0 : bachelorOrTeachingAdmissionRequirement.parent) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.de) !== _constants__WEBPACK_IMPORTED_MODULE_1__.ADMISSION_REQUIREMENT_FREE;
}
function useAdmissionRequirementsForMastersDegree() {
  var _a, _b;
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__["default"])('degree'), 1),
    degree = _c[0];
  if (!degree) {
    return false;
  }
  return degree.abbreviation.de === _defs__WEBPACK_IMPORTED_MODULE_2__.DEGREE_ABBREVIATION_GERMAN.MASTERS || ((_b = (_a = degree === null || degree === void 0 ? void 0 : degree.parent) === null || _a === void 0 ? void 0 : _a.abbreviation) === null || _b === void 0 ? void 0 : _b.de) === _defs__WEBPACK_IMPORTED_MODULE_2__.DEGREE_ABBREVIATION_GERMAN.MASTERS;
}
function useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled() {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__["default"])('degree'), 1),
    degree = _a[0];
  var facultyTerms = (0,_useTaxonomyTerm__WEBPACK_IMPORTED_MODULE_0__.useFacultyTerms)();
  if (!degree || !facultyTerms.length) {
    return false;
  }
  return (isBachelorContext(degree) || isTeachingDegreeContext(degree)) && !!facultyTerms.find(function (facultyItem) {
    return facultyItem.slug === _constants__WEBPACK_IMPORTED_MODULE_1__.FACULTY_PHILOSOPHY;
  });
}
function useSemestersContain(name) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__["default"])('start'), 1),
    semesters = _a[0];
  if (!semesters) {
    return false;
  }
  return !!semesters.find(function (semester) {
    return semester.de === name;
  });
}
function useApplicationDeadlineSummerSemesterEnabled() {
  return useSemestersContain(_constants__WEBPACK_IMPORTED_MODULE_1__.SEMESTER_SUMMER);
}
function useApplicationDeadlineWinterSemesterEnabled() {
  return useSemestersContain(_constants__WEBPACK_IMPORTED_MODULE_1__.SEMESTER_WINTER);
}

/***/ }),

/***/ "./resources/ts/hooks/useDegreeProgramProperty.ts":
/*!********************************************************!*\
  !*** ./resources/ts/hooks/useDegreeProgramProperty.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useDegreeProgramProperty)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/DegreeProgramValidationProvider */ "./resources/ts/contexts/DegreeProgramValidationProvider.tsx");
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/serverData */ "./resources/ts/util/serverData.ts");






function useDegreeProgramProperty(path) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('postType', (0,_util_serverData__WEBPACK_IMPORTED_MODULE_3__["default"])().postType, (0,_util_serverData__WEBPACK_IMPORTED_MODULE_3__["default"])().propertyName), 2),
    degreeProgramData = _a[0],
    setDegreeProgramData = _a[1];
  var removeError = (0,_contexts_DegreeProgramValidationProvider__WEBPACK_IMPORTED_MODULE_2__.useValidation)().removeError;
  return [(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(degreeProgramData, path), function (val) {
    removeError(path);
    setDegreeProgramData((0,immer__WEBPACK_IMPORTED_MODULE_5__["default"])(degreeProgramData, function (draft) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.set)(draft, path, val);
    }));
  }];
}

/***/ }),

/***/ "./resources/ts/hooks/useTaxonomyTerm.ts":
/*!***********************************************!*\
  !*** ./resources/ts/hooks/useTaxonomyTerm.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTaxonomyTerm),
/* harmony export */   useFacultyTerms: () => (/* binding */ useFacultyTerms),
/* harmony export */   useTaxonomyTerms: () => (/* binding */ useTaxonomyTerms)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_idHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/idHelpers */ "./resources/ts/util/idHelpers.ts");
/* harmony import */ var _util_serverData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/serverData */ "./resources/ts/util/serverData.ts");
/* harmony import */ var _useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDegreeProgramProperty */ "./resources/ts/hooks/useDegreeProgramProperty.ts");





function useTaxonomyTerm(id, taxonomy) {
  var termId = (0,_util_idHelpers__WEBPACK_IMPORTED_MODULE_1__.entityId)(id);
  var _a = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.useEntityRecord)('taxonomy', taxonomy, termId),
    record = _a.record,
    isResolving = _a.isResolving;
  if (isResolving) {
    return null;
  }
  return record;
}
function useTaxonomyTerms(ids, taxonomy) {
  var termIds = ids.map(function (id) {
    return (0,_util_idHelpers__WEBPACK_IMPORTED_MODULE_1__.entityId)(id);
  });
  var _a = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.useEntityRecords)('taxonomy', taxonomy, {
      include: termIds,
      per_page: -1
    }),
    records = _a.records,
    isResolving = _a.isResolving;
  if (!termIds.length || !records || isResolving) {
    return [];
  }
  return records;
}
function useFacultyTerms() {
  var _a;
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,_useDegreeProgramProperty__WEBPACK_IMPORTED_MODULE_3__["default"])('faculty'), 1),
    faculty = _b[0];
  var facultyTerms = useTaxonomyTerms((_a = faculty === null || faculty === void 0 ? void 0 : faculty.map(function (facultyItem) {
    return facultyItem.id;
  })) !== null && _a !== void 0 ? _a : [], (0,_util_serverData__WEBPACK_IMPORTED_MODULE_2__["default"])().taxonomySlugs.faculty);
  return facultyTerms;
}

/***/ }),

/***/ "./resources/ts/lib/immer.ts":
/*!***********************************!*\
  !*** ./resources/ts/lib/immer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");

(0,immer__WEBPACK_IMPORTED_MODULE_0__.enableMapSet)();

/***/ }),

/***/ "./resources/ts/util/errorTransforms.ts":
/*!**********************************************!*\
  !*** ./resources/ts/util/errorTransforms.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformBasedOnErrorCode: () => (/* binding */ transformBasedOnErrorCode),
/* harmony export */   transformErrorMessage: () => (/* binding */ transformErrorMessage)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transformedErrorMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transformedErrorMessages */ "./resources/ts/util/transformedErrorMessages.ts");


function transformBasedOnErrorCode(fieldId, error) {
  var _a;
  var errorCode = error.errorCode;
  if (fieldId.match(/\.en$/i)) {
    errorCode += '_en';
  }
  if (errorCode === 'rest_too_many_items') {
    return error.message.replace(fieldId, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Field', 'fau-degree-program'));
  }
  return (_a = _transformedErrorMessages__WEBPACK_IMPORTED_MODULE_1__.transformedErrorMessagesBasedOnErrorCode[errorCode]) !== null && _a !== void 0 ? _a : error.message;
}
function transformErrorMessage(fieldId, error) {
  var _a;
  return (_a = _transformedErrorMessages__WEBPACK_IMPORTED_MODULE_1__.transformedErrorMessages[fieldId]) !== null && _a !== void 0 ? _a : transformBasedOnErrorCode(fieldId, error);
}

/***/ }),

/***/ "./resources/ts/util/idHelpers.ts":
/*!****************************************!*\
  !*** ./resources/ts/util/idHelpers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entityId: () => (/* binding */ entityId),
/* harmony export */   propertyId: () => (/* binding */ propertyId)
/* harmony export */ });
function propertyId(type, id, subField) {
  if (subField === void 0) {
    subField = '';
  }
  var parts = [type, id];
  if (subField) {
    parts.push(subField);
  }
  return parts.join(':');
}
function entityId(id) {
  var _a;
  return parseInt((_a = id.split(':')[1]) !== null && _a !== void 0 ? _a : 0, 10);
}

/***/ }),

/***/ "./resources/ts/util/serverData.ts":
/*!*****************************************!*\
  !*** ./resources/ts/util/serverData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ serverData)
/* harmony export */ });
function serverData() {
  if (window.DegreeProgramEditorServerData === undefined) {
    throw new Error('Server data could not be loaded.');
  }
  return window.DegreeProgramEditorServerData;
}

/***/ }),

/***/ "./resources/ts/util/transformedErrorMessages.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/util/transformedErrorMessages.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformedErrorMessages: () => (/* binding */ transformedErrorMessages),
/* harmony export */   transformedErrorMessagesBasedOnErrorCode: () => (/* binding */ transformedErrorMessagesBasedOnErrorCode)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var transformedErrorMessages = {
  'featured_image.id': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please select a featured image.', 'fau-degree-program'),
  'teaser_image.id': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please select a teaser image.', 'fau-degree-program')
};
var transformedErrorMessagesBasedOnErrorCode = {
  rest_too_short: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This field can not be empty.', 'fau-degree-program'),
  rest_too_short_en: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('English variant of this field can not be empty.', 'fau-degree-program'),
  rest_too_few_items: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please select at least one item.', 'fau-degree-program'),
  rest_invalid_pattern: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Field does not match pattern.', 'fau-degree-program')
};


/***/ }),

/***/ "./resources/ts/util/transforms.ts":
/*!*****************************************!*\
  !*** ./resources/ts/util/transforms.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformTermToAdmissionRequirement: () => (/* binding */ transformTermToAdmissionRequirement),
/* harmony export */   transformTermToDegree: () => (/* binding */ transformTermToDegree),
/* harmony export */   transformTermToMultilingualLink: () => (/* binding */ transformTermToMultilingualLink),
/* harmony export */   transformTermToMultilingualString: () => (/* binding */ transformTermToMultilingualString)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _idHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idHelpers */ "./resources/ts/util/idHelpers.ts");


var EMPTY_MULTILINGUAL_STRING = {
  id: '',
  de: '',
  en: ''
};
function transformTermToMultilingualString(term) {
  var _a;
  return term ? {
    en: (_a = term.meta.name_en) !== null && _a !== void 0 ? _a : '',
    de: term.name,
    id: (0,_idHelpers__WEBPACK_IMPORTED_MODULE_0__.propertyId)('term', term.id, 'name')
  } : (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, EMPTY_MULTILINGUAL_STRING);
}
function transformTermToMultilingualLink(term) {
  var _a, _b, _c, _d, _e, _f;
  return term ? {
    id: (0,_idHelpers__WEBPACK_IMPORTED_MODULE_0__.propertyId)('term', term.id),
    name: {
      id: (0,_idHelpers__WEBPACK_IMPORTED_MODULE_0__.propertyId)('term', term.id, 'name'),
      de: term.name,
      en: (_a = term.meta.name_en) !== null && _a !== void 0 ? _a : ''
    },
    link_text: {
      id: (0,_idHelpers__WEBPACK_IMPORTED_MODULE_0__.propertyId)('term_meta', term.id, 'link_text'),
      de: (_b = term.meta.link_text) !== null && _b !== void 0 ? _b : '',
      en: (_c = term.meta.link_text_en) !== null && _c !== void 0 ? _c : ''
    },
    link_url: {
      id: (0,_idHelpers__WEBPACK_IMPORTED_MODULE_0__.propertyId)('term_meta', term.id, 'link_url'),
      de: (_d = term.meta.link_url) !== null && _d !== void 0 ? _d : '',
      en: (_e = term.meta.link_url_en) !== null && _e !== void 0 ? _e : ''
    },
    parent: (_f = term.parent_object) !== null && _f !== void 0 ? _f : null
  } : {
    id: '',
    name: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, EMPTY_MULTILINGUAL_STRING),
    link_text: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, EMPTY_MULTILINGUAL_STRING),
    link_url: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, EMPTY_MULTILINGUAL_STRING),
    parent: null
  };
}
function transformTermToDegree(term) {
  var _a, _b, _c, _d;
  return term ? {
    id: (0,_idHelpers__WEBPACK_IMPORTED_MODULE_0__.propertyId)('term', term.id),
    abbreviation: {
      id: (0,_idHelpers__WEBPACK_IMPORTED_MODULE_0__.propertyId)('term_meta', term.id, 'abbreviation'),
      de: (_a = term.meta.abbreviation) !== null && _a !== void 0 ? _a : '',
      en: (_b = term.meta.abbreviation_en) !== null && _b !== void 0 ? _b : ''
    },
    name: {
      id: (0,_idHelpers__WEBPACK_IMPORTED_MODULE_0__.propertyId)('term', term.id, 'name'),
      de: term.name,
      en: (_c = term.meta.name_en) !== null && _c !== void 0 ? _c : ''
    },
    parent: (_d = term.parent_object) !== null && _d !== void 0 ? _d : null
  } : {
    id: '',
    abbreviation: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, EMPTY_MULTILINGUAL_STRING),
    name: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, EMPTY_MULTILINGUAL_STRING),
    parent: null
  };
}
function transformTermToAdmissionRequirement(term) {
  var _a;
  var admissionRequirement = transformTermToMultilingualLink(term);
  admissionRequirement.slug = (_a = term === null || term === void 0 ? void 0 : term.slug) !== null && _a !== void 0 ? _a : '';
  return admissionRequirement;
}

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
/* harmony export */   ServerStyleSheet: () => (/* binding */ Je),
/* harmony export */   StyleSheetConsumer: () => (/* binding */ le),
/* harmony export */   StyleSheetContext: () => (/* binding */ ue),
/* harmony export */   StyleSheetManager: () => (/* binding */ ye),
/* harmony export */   ThemeConsumer: () => (/* binding */ Le),
/* harmony export */   ThemeContext: () => (/* binding */ Ge),
/* harmony export */   ThemeProvider: () => (/* binding */ Fe),
/* harmony export */   __PRIVATE__: () => (/* binding */ Ke),
/* harmony export */   createGlobalStyle: () => (/* binding */ We),
/* harmony export */   css: () => (/* binding */ Ce),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isStyledComponent: () => (/* binding */ N),
/* harmony export */   keyframes: () => (/* binding */ Ue),
/* harmony export */   useTheme: () => (/* binding */ Ze),
/* harmony export */   version: () => (/* binding */ C),
/* harmony export */   withTheme: () => (/* binding */ Xe)
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
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.6",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x=new Map,k=new Map,V=1,B=function(e){if(x.has(e))return x.get(e);for(;k.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),x.set(e,t),k.set(t,e),t},z=function(e){return k.get(e)},M=function(e,t){t>=V&&(V=t+1),x.set(e,t),k.set(t,e)},G="style["+A+'][data-styled-version="5.3.6"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return true?__webpack_require__.nc:0},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.6");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.6"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n))}catch(e){Ie.test(e.message)&&Pe.delete(n)}finally{console.error=r}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a)}return e}var Ge=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),Le=Ge.Consumer;function Fe(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Ge.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.6"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Re(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],_):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ce.apply(void 0,[e].concat(n)),a="sc-global-"+xe(JSON.stringify(i)),u=new $e(i,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(l,e,t,o,n),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){if(!t.server)return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Re(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Oe(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function Ue(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=xe(o);return new ve(s,o)}var Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge),i=e.defaultProps,a=Re(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Ze=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ge)},Ke={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPropValid);


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
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

/***/ "./node_modules/immer/dist/immer.esm.mjs":
/*!***********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ un),
/* harmony export */   applyPatches: () => (/* binding */ pn),
/* harmony export */   castDraft: () => (/* binding */ K),
/* harmony export */   castImmutable: () => (/* binding */ $),
/* harmony export */   createDraft: () => (/* binding */ ln),
/* harmony export */   current: () => (/* binding */ R),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enableAllPlugins: () => (/* binding */ J),
/* harmony export */   enableES5: () => (/* binding */ F),
/* harmony export */   enableMapSet: () => (/* binding */ C),
/* harmony export */   enablePatches: () => (/* binding */ T),
/* harmony export */   finishDraft: () => (/* binding */ dn),
/* harmony export */   freeze: () => (/* binding */ d),
/* harmony export */   immerable: () => (/* binding */ L),
/* harmony export */   isDraft: () => (/* binding */ r),
/* harmony export */   isDraftable: () => (/* binding */ t),
/* harmony export */   nothing: () => (/* binding */ H),
/* harmony export */   original: () => (/* binding */ e),
/* harmony export */   produce: () => (/* binding */ fn),
/* harmony export */   produceWithPatches: () => (/* binding */ cn),
/* harmony export */   setAutoFreeze: () => (/* binding */ sn),
/* harmony export */   setUseProxies: () => (/* binding */ vn)
/* harmony export */ });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").N(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.D&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function N(n,r,t){var e=s(r)?b("MapSet").F(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function R(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.R,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.R=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=N(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.R.set(n,!0),t.o.set(n,r),t.R.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.R.set(n,!1):r.R.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.R=new Map,i(n.t,(function(r){n.R.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=N(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{F:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){F(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),
/* harmony export */   customRandom: () => (/* binding */ customRandom),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
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
/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)
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
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/degree-program-form","title":"Degree program editor","category":"theme","icon":"welcome-learn-more","description":"Displays degree program editor form.","version":"1.0.0","textdomain":"fau-degree-program","supports":{"lock":false,"html":false,"inserter":false,"multiple":false,"reusable":false,"customClassName":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-details/block.json":
/*!************************************************************!*\
  !*** ./resources/ts/blocks/description-details/block.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/description-details","title":"Description Details","category":"theme","parent":["fau/description-list"],"icon":"editor-help","version":"1.0.0","textdomain":"fau-degree-program","attributes":{"content":{"type":"string","source":"html","selector":"dd","default":""}},"supports":{"lock":false,"html":false,"reusable":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-list/block.json":
/*!*********************************************************!*\
  !*** ./resources/ts/blocks/description-list/block.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/description-list","title":"Description List","category":"theme","icon":"admin-page","version":"1.0.0","textdomain":"fau-degree-program","supports":{"lock":false,"html":false,"reusable":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-term/block.json":
/*!*********************************************************!*\
  !*** ./resources/ts/blocks/description-term/block.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/description-term","title":"Description Term","category":"theme","parent":["fau/description-list"],"icon":"info","version":"1.0.0","textdomain":"fau-degree-program","attributes":{"content":{"type":"string","source":"html","selector":"dt","default":""}},"supports":{"lock":false,"html":false,"reusable":false}}');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/*!***********************************************!*\
  !*** ./resources/ts/degree-program-editor.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/immer */ "./resources/ts/lib/immer.ts");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks */ "./resources/ts/blocks/index.ts");


})();

/******/ })()
;
//# sourceMappingURL=degree-program-editor.js.map
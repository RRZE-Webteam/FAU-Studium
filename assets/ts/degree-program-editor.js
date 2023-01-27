/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var DegreeProgramEditForm_1 = tslib_1.__importDefault(__webpack_require__(/*! components/DegreeProgramEditForm */ "./resources/ts/components/DegreeProgramEditForm/index.ts"));
__webpack_require__(/*! ./admin.scss */ "./resources/ts/blocks/degree-program-form/admin.scss");
var Edit = function () {
  var blockProps = (0, block_editor_1.useBlockProps)();
  return react_1.default.createElement("div", tslib_1.__assign({}, blockProps), react_1.default.createElement(DegreeProgramEditForm_1.default, null));
};
exports["default"] = Edit;

/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/index.ts":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
var block_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./block.json */ "./resources/ts/blocks/degree-program-form/block.json"));
var Edit_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Edit */ "./resources/ts/blocks/degree-program-form/Edit.tsx"));
(0, blocks_1.registerBlockType)(block_json_1.default.name, tslib_1.__assign(tslib_1.__assign({}, block_json_1.default), {
  edit: Edit_1.default
}));

/***/ }),

/***/ "./resources/ts/blocks/description-details/Edit.tsx":
/*!**********************************************************!*\
  !*** ./resources/ts/blocks/description-details/Edit.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var Edit = function (_a) {
  var content = _a.attributes.content,
    setAttributes = _a.setAttributes;
  var blockProps = (0, block_editor_1.useBlockProps)();
  return react_1.default.createElement(block_editor_1.RichText, tslib_1.__assign({}, blockProps, {
    tagName: "dd",
    onChange: function (nextContent) {
      return setAttributes({
        content: nextContent
      });
    },
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var Save = function (_a) {
  var content = _a.attributes.content;
  var saveBlockProps = block_editor_1.useBlockProps.save();
  return react_1.default.createElement(block_editor_1.RichText.Content, tslib_1.__assign({}, saveBlockProps, {
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
var block_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-details/block.json"));
var Edit_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-details/Edit.tsx"));
var Save_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-details/Save.tsx"));
(0, blocks_1.registerBlockType)(block_json_1.default.name, tslib_1.__assign(tslib_1.__assign({}, block_json_1.default), {
  edit: Edit_1.default,
  save: Save_1.default
}));

/***/ }),

/***/ "./resources/ts/blocks/description-list/Edit.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-list/Edit.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var ALLOWED_BLOCKS = ['fau/description-term', 'fau/description-details'];
var TEMPLATE = [['fau/description-term'], ['fau/description-details']];
var Edit = function () {
  var blockProps = (0, block_editor_1.useBlockProps)();
  return react_1.default.createElement("dl", tslib_1.__assign({}, blockProps), react_1.default.createElement(block_editor_1.InnerBlocks, {
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var Save = function () {
  var blockProps = block_editor_1.useBlockProps.save();
  return react_1.default.createElement("dl", tslib_1.__assign({}, blockProps), react_1.default.createElement(block_editor_1.InnerBlocks.Content, null));
};
exports["default"] = Save;

/***/ }),

/***/ "./resources/ts/blocks/description-list/index.ts":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-list/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
var block_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-list/block.json"));
var Edit_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-list/Edit.tsx"));
var Save_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-list/Save.tsx"));
(0, blocks_1.registerBlockType)(block_json_1.default.name, tslib_1.__assign(tslib_1.__assign({}, block_json_1.default), {
  edit: Edit_1.default,
  save: Save_1.default
}));

/***/ }),

/***/ "./resources/ts/blocks/description-term/Edit.tsx":
/*!*******************************************************!*\
  !*** ./resources/ts/blocks/description-term/Edit.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var Edit = function (_a) {
  var content = _a.attributes.content,
    setAttributes = _a.setAttributes;
  var blockProps = (0, block_editor_1.useBlockProps)();
  return react_1.default.createElement(block_editor_1.RichText, tslib_1.__assign({}, blockProps, {
    tagName: "dt",
    onChange: function (nextContent) {
      return setAttributes({
        content: nextContent
      });
    },
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var Save = function (_a) {
  var content = _a.attributes.content;
  var saveBlockProps = block_editor_1.useBlockProps.save();
  return react_1.default.createElement(block_editor_1.RichText.Content, tslib_1.__assign({}, saveBlockProps, {
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
var block_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./block.json */ "./resources/ts/blocks/description-term/block.json"));
var Edit_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Edit */ "./resources/ts/blocks/description-term/Edit.tsx"));
var Save_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Save */ "./resources/ts/blocks/description-term/Save.tsx"));
(0, blocks_1.registerBlockType)(block_json_1.default.name, tslib_1.__assign(tslib_1.__assign({}, block_json_1.default), {
  edit: Edit_1.default,
  save: Save_1.default
}));

/***/ }),

/***/ "./resources/ts/blocks/filters/addHeadingBlockVariations.ts":
/*!******************************************************************!*\
  !*** ./resources/ts/blocks/filters/addHeadingBlockVariations.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var hooks_1 = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
function addHeadingBlockVariations(settings, name) {
  if (name !== 'core/heading') {
    return settings;
  }
  return tslib_1.__assign(tslib_1.__assign({}, settings), {
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var hooks_1 = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
function addShortcodeBlockVariations(settings, name) {
  if (name !== 'core/shortcode') {
    return settings;
  }
  return tslib_1.__assign(tslib_1.__assign({}, settings), {
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var hooks_1 = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
var DEFAULT_SIZE = 'thumbnail';
(0, hooks_1.addFilter)('editor.PostFeaturedImage.imageSize', 'fau/degree-program-image-size', function () {
  return DEFAULT_SIZE;
});

/***/ }),

/***/ "./resources/ts/blocks/filters/index.ts":
/*!**********************************************!*\
  !*** ./resources/ts/blocks/filters/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var dom_ready_1 = tslib_1.__importDefault(__webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready"));
var rich_text_1 = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
var ALLOWED_FORMATS = ['core/bold', 'core/link'];
(0, dom_ready_1.default)(function () {
  var registeredFormats = (0, data_1.select)(rich_text_1.store).getFormatTypes();
  var formatNamesToDisable = [];
  registeredFormats.forEach(function (formatType) {
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var DEFAULT_SQUARE_SIZE = 100;
var DEFAULT_STROKE_WIDTH = 2;
var StyledSvgCircle = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    stroke: var(--wp-admin-theme-color, #007cba);\n"], ["\n    stroke: var(--wp-admin-theme-color, #007cba);\n"])));
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
  return react_1.default.createElement(StyledSvgCircle, {
    width: squareSize,
    height: squareSize,
    viewBox: viewBox
  }, react_1.default.createElement("circle", {
    className: "circle-background",
    cx: squareSize / 2,
    cy: squareSize / 2,
    r: radius,
    strokeWidth: "".concat(strokeWidth, "px"),
    fill: "none",
    stroke: "rgba(167, 152, 181, 0.3)"
  }), react_1.default.createElement("circle", {
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
exports["default"] = CircularProgressBar;
var templateObject_1;

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var blocks_1 = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
var useBlockEditorSettings_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useBlockEditorSettings */ "./resources/ts/components/ContentField/useBlockEditorSettings.ts"));
var StyledEditorWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    border: 1px solid #757575;\n    padding: 10px;\n"], ["\n    border: 1px solid #757575;\n    padding: 10px;\n"])));
var ContentField = function (_a) {
  var content = _a.content,
    onChange = _a.onChange;
  var _b = (0, react_1.useState)((0, blocks_1.parse)(content)),
    currentBlocks = _b[0],
    setCurrentBlocks = _b[1];
  var updateValue = (0, react_1.useCallback)(function (blocks) {
    onChange((0, blocks_1.serialize)(blocks));
  }, []);
  var updateValueDebounced = (0, compose_1.useDebounce)(updateValue, 500);
  var settings = (0, useBlockEditorSettings_1.default)();
  return react_1.default.createElement(block_editor_1.BlockEditorProvider, {
    value: currentBlocks,
    onInput: function (blocks) {
      setCurrentBlocks(blocks);
      updateValueDebounced(blocks);
    },
    onChange: function (blocks) {
      setCurrentBlocks(blocks);
      updateValue(blocks);
    },
    settings: settings
  }, react_1.default.createElement(components_1.SlotFillProvider, null, react_1.default.createElement(block_editor_1.BlockTools, null, react_1.default.createElement(block_editor_1.WritingFlow, null, react_1.default.createElement(block_editor_1.ObserveTyping, null, react_1.default.createElement(StyledEditorWrapper, null, react_1.default.createElement(block_editor_1.BlockList, null))))), react_1.default.createElement(components_1.Popover.Slot, null)));
};
exports["default"] = ContentField;
var templateObject_1;

/***/ }),

/***/ "./resources/ts/components/ContentField/constants.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/components/ContentField/constants.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

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
__webpack_require__(/*! ./hide-toolbar-buttons.scss */ "./resources/ts/components/ContentField/hide-toolbar-buttons.scss");
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = __webpack_require__(/*! react */ "react");
var core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var media_utils_1 = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
var constants_1 = __webpack_require__(/*! ./constants */ "./resources/ts/components/ContentField/constants.ts");
var SETTINGS = {
  allowedBlockTypes: constants_1.ALLOWED_BLOCK_TYPES
};
var useBlockEditorSettings = function () {
  var hasUploadPermissions = (0, data_1.useSelect)(function (select) {
    var _a;
    return (_a = select(core_data_1.store).canUser('create', 'media')) !== null && _a !== void 0 ? _a : false;
  }, []);
  return (0, react_1.useMemo)(function () {
    var mediaUploadBlockEditor;
    if (hasUploadPermissions) {
      mediaUploadBlockEditor = function (_a) {
        var onError = _a.onError,
          argumentsObject = tslib_1.__rest(_a, ["onError"]);
        (0, media_utils_1.uploadMedia)(tslib_1.__assign({
          wpAllowedMimeTypes: constants_1.ALLOWED_MIME_TYPES,
          onError: function (_a) {
            var message = _a.message;
            return onError(message);
          }
        }, argumentsObject));
      };
    }
    return tslib_1.__assign(tslib_1.__assign({}, SETTINGS), {
      mediaUpload: mediaUploadBlockEditor,
      __experimentalFetchLinkSuggestions: function (search, searchOptions) {
        return (0, core_data_1.__experimentalFetchLinkSuggestions)(search, searchOptions);
      },
      __experimentalFetchRichUrlData: core_data_1.__experimentalFetchUrlData
    });
  }, [hasUploadPermissions]);
};
exports["default"] = useBlockEditorSettings;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/DegreeProgramCombinations.tsx":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/DegreeProgramCombinations.tsx ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var useConditionalFields_1 = __webpack_require__(/*! hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
var useDegreeProgramProperty_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../hooks/useDegreeProgramProperty */ "./resources/ts/hooks/useDegreeProgramProperty.ts"));
var RelatedDegreePrograms_1 = tslib_1.__importDefault(__webpack_require__(/*! ./RelatedDegreePrograms */ "./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx"));
function DegreeProgramCombinations() {
  var enabled = (0, useConditionalFields_1.useCombinationOfDegreeProgramEnabled)();
  var _a = (0, useDegreeProgramProperty_1.default)('combinations'),
    combinations = _a[0],
    setCombinations = _a[1];
  var _b = (0, useDegreeProgramProperty_1.default)('limited_combinations'),
    limitedCombinations = _b[0],
    setLimitedCombinations = _b[1];
  if (!enabled) {
    return null;
  }
  if (combinations === undefined || limitedCombinations === undefined) {
    return react_1.default.createElement(components_1.Flex, null, react_1.default.createElement(components_1.FlexBlock, null, react_1.default.createElement(components_1.Spinner, null)));
  }
  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(RelatedDegreePrograms_1.default, {
    relatedDegreeProgramIds: combinations,
    setRelatedDegreePrograms: setCombinations,
    label: (0, i18n_1._x)('Combinations', 'backoffice: field label', 'fau-degree-program'),
    messages: {
      added: (0, i18n_1._x)('Combination added', 'backoffice: field label', 'fau-degree-program'),
      removed: (0, i18n_1._x)('Combination removed', 'backoffice: field label', 'fau-degree-program'),
      remove: (0, i18n_1._x)('Remove combination', 'backoffice: field label', 'fau-degree-program'),
      __experimentalInvalid: (0, i18n_1._x)('Invalid combination', 'backoffice: field label', 'fau-degree-program')
    }
  }), react_1.default.createElement(RelatedDegreePrograms_1.default, {
    relatedDegreeProgramIds: limitedCombinations,
    setRelatedDegreePrograms: setLimitedCombinations,
    label: (0, i18n_1._x)('Limited Combinations', 'backoffice: field label', 'fau-degree-program'),
    messages: {
      added: (0, i18n_1._x)('Limited combination added', 'backoffice: field label', 'fau-degree-program'),
      removed: (0, i18n_1._x)('Limited combination removed', 'backoffice: field label', 'fau-degree-program'),
      remove: (0, i18n_1._x)('Remove limited combination', 'backoffice: field label', 'fau-degree-program'),
      __experimentalInvalid: (0, i18n_1._x)('Invalid limited combination', 'backoffice: field label', 'fau-degree-program')
    }
  }));
}
exports["default"] = DegreeProgramCombinations;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx":
/*!*************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/RelatedDegreePrograms.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
var EntitySelector_1 = tslib_1.__importDefault(__webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts"));
var hoc_1 = __webpack_require__(/*! ./hoc */ "./resources/ts/components/DegreeProgramCombinations/hoc/index.ts");
var withRelatedDegreeProgramProps = (0, compose_1.createHigherOrderComponent)(function (WrappedComponent) {
  return function (_a) {
    var setRelatedDegreePrograms = _a.setRelatedDegreePrograms,
      others = tslib_1.__rest(_a, ["setRelatedDegreePrograms"]);
    return react_1.default.createElement(WrappedComponent, tslib_1.__assign({
      entityToToken: function (post) {
        return post.degree_program.title.de;
      },
      onChange: function (posts) {
        setRelatedDegreePrograms(posts.map(function (post) {
          return post.id;
        }));
      },
      maxSuggestions: 20
    }, others));
  };
}, 'withRelatedDegreeProgramProps');
exports["default"] = (0, compose_1.compose)(withRelatedDegreeProgramProps, hoc_1.withDegreeProgramPosts, hoc_1.withSearchedDegreeProgramPosts)(EntitySelector_1.default);

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/hoc/index.ts":
/*!************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/hoc/index.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withSearchedDegreeProgramPosts = exports.withDegreeProgramPosts = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var withDegreeProgramPosts_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withDegreeProgramPosts */ "./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts"));
exports.withDegreeProgramPosts = withDegreeProgramPosts_1.default;
var withSearchedDegreeProgramPosts_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withSearchedDegreeProgramPosts */ "./resources/ts/components/DegreeProgramCombinations/hoc/withSearchedDegreeProgramPosts.ts"));
exports.withSearchedDegreeProgramPosts = withSearchedDegreeProgramPosts_1.default;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts":
/*!*****************************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramCombinations/hoc/withDegreeProgramPosts.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
var withDegreeProgramPosts = (0, data_1.withSelect)(function (select, ownProps) {
  var _a;
  var getEntityRecords = select(core_data_1.store.name).getEntityRecords;
  if (ownProps.relatedDegreeProgramIds.length === 0) {
    return {
      entities: []
    };
  }
  var query = tslib_1.__assign({
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = __webpack_require__(/*! react */ "react");
var core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var editor_1 = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
var serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
var withSearchedDegreeProgramPosts = (0, data_1.withSelect)(function (select, ownProps) {
  var _a = (0, react_1.useState)(''),
    search = _a[0],
    setSearch = _a[1];
  var getCurrentPost = select(editor_1.store.name).getCurrentPost;
  var getEntityRecords = select(core_data_1.store.name).getEntityRecords;
  if (search.length === 0) {
    return {
      searchedEntities: [],
      setSearch: setSearch
    };
  }
  var currentPost = getCurrentPost();
  var posts = getEntityRecords('postType', (0, serverData_1.default)().postType, tslib_1.__assign(tslib_1.__assign({
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var TermSelector_1 = tslib_1.__importDefault(__webpack_require__(/*! components/TermSelector */ "./resources/ts/components/TermSelector/index.ts"));
var DegreeProgramEditFormProvider_1 = __webpack_require__(/*! contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
var useConditionalFields_1 = __webpack_require__(/*! hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
var transforms_1 = __webpack_require__(/*! util/transforms */ "./resources/ts/util/transforms.ts");
var ContentField_1 = tslib_1.__importDefault(__webpack_require__(/*! ../ContentField */ "./resources/ts/components/ContentField/index.ts"));
var MultilingualContainer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx"));
var StyledHeading = (0, styled_components_1.default)(components_1.__experimentalHeading)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    margin-bottom: 12px;\n"], ["\n    margin-bottom: 12px;\n"])));
var AdmissionRequirements = function () {
  var _a = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)(),
    values = _a.values,
    handleChange = _a.handleChange;
  var bachelorOrTeachingEnabled = (0, useConditionalFields_1.useAdmissionRequirementsForBachelorAndTeachingDegreesEnable)();
  var teachingDegreeHigherSemesterEnabled = (0, useConditionalFields_1.useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled)();
  var mastersEnabled = (0, useConditionalFields_1.useAdmissionRequirementsForMastersDegree)();
  var humanitiesFacultyLanguageSkillsEnabled = (0, useConditionalFields_1.useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled)();
  var applicationSummerDeadlineEnabled = (0, useConditionalFields_1.useApplicationDeadlineSummerSemesterEnabled)();
  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("div", null, react_1.default.createElement(StyledHeading, {
    level: 4
  }, "Bachelor/Lehramt"), bachelorOrTeachingEnabled && react_1.default.createElement("div", {
    "data-testid": "bacholar-teaching-admission-requirement"
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "bachelor_teaching_admission_requirement",
    label: (0, i18n_1._x)("Admission requirements for Bachelor's/teaching degrees", 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "bachelorOrTeachingDegreeAdmissionRequirement",
    value: values.admission_requirements.bachelor_or_teaching_degree.id,
    onChange: function (term) {
      handleChange('admission_requirements.bachelor_or_teaching_degree', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  })), teachingDegreeHigherSemesterEnabled && react_1.default.createElement("div", {
    "data-testid": "teaching-higher-semester-admission-requirement"
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "teaching_higher_semester_admission_requirement",
    label: (0, i18n_1._x)('Admission requirements for entering a teaching degree at a higher semester', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "teachingDegreeHigherSemesterAdmissionRequirement",
    value: values.admission_requirements.teaching_degree_higher_semester.id,
    onChange: function (term) {
      handleChange('admission_requirements.teaching_degree_higher_semester', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  }))), react_1.default.createElement("div", null, react_1.default.createElement(StyledHeading, {
    level: 4
  }, "Master"), mastersEnabled && react_1.default.createElement("div", {
    "data-testid": "masters-admission-requirement"
  }, react_1.default.createElement(TermSelector_1.default, {
    id: "master_admission_requirement",
    label: (0, i18n_1._x)("Admission requirements for Master's degree", 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "masterDegreeAdmissionRequirement",
    value: values.admission_requirements.master.id,
    onChange: function (term) {
      handleChange('admission_requirements.master', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  })), react_1.default.createElement(components_1.BaseControl, {
    label: (0, i18n_1._x)("Content-related admission requirements for Master's degree", 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "vorausgegangene Bachelorstudieng\u00E4nge, Qualifikationswerte, etc."
  }, react_1.default.createElement(MultilingualContainer_1.default, null, function (languageCode) {
    return react_1.default.createElement(ContentField_1.default, {
      onChange: function (value) {
        handleChange("content_related_master_requirements.".concat(languageCode), value);
      },
      content: values.content_related_master_requirements[languageCode]
    });
  })), react_1.default.createElement(components_1.BaseControl, {
    label: (0, i18n_1._x)('Application deadline winter semester', 'backoffice: degree program edit form', 'fau-degree-program')
  }, react_1.default.createElement(ContentField_1.default, {
    onChange: function (value) {
      handleChange('application_deadline_winter_semester', value);
    },
    content: values.application_deadline_winter_semester
  })), applicationSummerDeadlineEnabled && react_1.default.createElement(components_1.BaseControl, {
    "data-testid": "application-deadline-summer",
    label: (0, i18n_1._x)('Application deadline summer semester', 'backoffice: degree program edit form', 'fau-degree-program')
  }, react_1.default.createElement(ContentField_1.default, {
    onChange: function (value) {
      handleChange('application_deadline_summer_semester', value);
    },
    content: values.application_deadline_summer_semester
  }))), react_1.default.createElement("div", null, react_1.default.createElement(StyledHeading, {
    level: 4
  }, "F\u00FCr Bachelor/Lehramt/Master"), react_1.default.createElement(components_1.BaseControl, {
    label: (0, i18n_1._x)('Details and notes', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "evtl. zus\u00E4tzliche Infos zu Bewerbung und Einschreibung."
  }, react_1.default.createElement(MultilingualContainer_1.default, null, function (languageCode) {
    return react_1.default.createElement(ContentField_1.default, {
      onChange: function (value) {
        handleChange("details_and_notes.".concat(languageCode), value);
      },
      content: values.details_and_notes[languageCode]
    });
  })), react_1.default.createElement(components_1.BaseControl, {
    label: (0, i18n_1._x)('Language skills', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Sprachkenntnisse, die f\u00FCr den Studiengang erforderlich sind."
  }, react_1.default.createElement(MultilingualContainer_1.default, null, function (languageCode) {
    return react_1.default.createElement(ContentField_1.default, {
      onChange: function (value) {
        handleChange("language_skills.".concat(languageCode), value);
      },
      content: values.language_skills[languageCode]
    });
  })), humanitiesFacultyLanguageSkillsEnabled && react_1.default.createElement(components_1.BaseControl, {
    "data-testid": "language-skills-humanities-faculty",
    label: (0, i18n_1._x)('Language skills for Faculty of Humanities, Social Sciences, and Theology only', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Sprachkenntnisse, die auch in den ersten Semestern noch erworben werden k\u00F6nnen."
  }, react_1.default.createElement(ContentField_1.default, {
    onChange: function (value) {
      handleChange('language_skills_humanities_faculty', value);
    },
    content: values.language_skills_humanities_faculty
  })), react_1.default.createElement(TermSelector_1.default, {
    id: "german_language_skills_for_international_students",
    label: (0, i18n_1._x)('Language certificates/German language skills for international applicants', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "germanLanguageSkillsForInternationalStudents",
    value: values.german_language_skills_for_international_students.id,
    onChange: function (term) {
      handleChange('german_language_skills_for_international_students', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  })));
};
exports["default"] = AdmissionRequirements;
var templateObject_1;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/Content.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/Content.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var DegreeProgramEditFormProvider_1 = __webpack_require__(/*! contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
var ContentField_1 = tslib_1.__importDefault(__webpack_require__(/*! ../ContentField */ "./resources/ts/components/ContentField/index.ts"));
var DegreeProgramCombinations_1 = tslib_1.__importDefault(__webpack_require__(/*! ../DegreeProgramCombinations */ "./resources/ts/components/DegreeProgramCombinations/index.ts"));
var MultilingualContainer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx"));
var CONTENT_ITEMS = ['about', 'structure', 'specializations', 'qualities_and_skills', 'why_should_study', 'career_prospects', 'special_features', 'testimonials'];
var Content = function () {
  var _a = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)(),
    values = _a.values,
    handleChange = _a.handleChange;
  return react_1.default.createElement(components_1.Panel, null, react_1.default.createElement(components_1.PanelBody, null, CONTENT_ITEMS.map(function (item) {
    return react_1.default.createElement(components_1.BaseControl, {
      key: item,
      label: "".concat(values.content[item].title.de, " (").concat(values.content[item].title.en, ")")
    }, react_1.default.createElement(MultilingualContainer_1.default, null, function (languageCode) {
      return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(ContentField_1.default, {
        content: values.content[item].description[languageCode],
        onChange: function (content) {
          return handleChange("content.".concat(item, ".description.").concat(languageCode), content);
        }
      }));
    }));
  }), react_1.default.createElement(DegreeProgramCombinations_1.default, null)));
};
exports["default"] = Content;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/DegreeProgramEditForm.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/DegreeProgramEditForm.tsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var DegreeProgramEditFormProvider_1 = tslib_1.__importDefault(__webpack_require__(/*! contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx"));
var Tabs_1 = tslib_1.__importDefault(__webpack_require__(/*! ../Tabs */ "./resources/ts/components/Tabs/index.ts"));
var AdmissionRequirements_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AdmissionRequirements */ "./resources/ts/components/DegreeProgramEditForm/AdmissionRequirements.tsx"));
var Content_1 = tslib_1.__importDefault(__webpack_require__(/*! ./Content */ "./resources/ts/components/DegreeProgramEditForm/Content.tsx"));
var FormHeading_1 = tslib_1.__importDefault(__webpack_require__(/*! ./FormHeading */ "./resources/ts/components/DegreeProgramEditForm/FormHeading.tsx"));
var General_1 = tslib_1.__importDefault(__webpack_require__(/*! ./General */ "./resources/ts/components/DegreeProgramEditForm/General.tsx"));
var OrganizationalLinks_1 = tslib_1.__importDefault(__webpack_require__(/*! ./OrganizationalLinks */ "./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx"));
var DegreeProgramEditForm = function () {
  return react_1.default.createElement(DegreeProgramEditFormProvider_1.default, null, react_1.default.createElement(FormHeading_1.default, null), react_1.default.createElement(Tabs_1.default, {
    tabs: [{
      name: 'general',
      title: (0, i18n_1._x)('At a glance', 'backoffice: Degree program edit form', 'fau-degree-program'),
      component: react_1.default.createElement(General_1.default, null)
    }, {
      name: 'content',
      title: (0, i18n_1._x)('Content', 'backoffice: Degree program edit form', 'fau-degree-program'),
      component: react_1.default.createElement(Content_1.default, null)
    }, {
      name: 'admission-requirements',
      title: (0, i18n_1._x)('Admission requirements, application and enrollment', 'backoffice: Degree program edit form', 'fau-degree-program'),
      component: react_1.default.createElement(AdmissionRequirements_1.default, null)
    }, {
      name: 'organizational-links',
      title: (0, i18n_1._x)('Organizational notes/links', 'backoffice: Degree program edit form', 'fau-degree-program'),
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var DegreeProgramEditFormProvider_1 = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
var FormHeading = function () {
  var values = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)().values;
  return react_1.default.createElement("h1", null, "".concat(values.title.de, " (").concat(values.title.en, ")"));
};
exports["default"] = FormHeading;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/General.tsx":
/*!*******************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/General.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var ImageField_1 = tslib_1.__importDefault(__webpack_require__(/*! components/ImageField */ "./resources/ts/components/ImageField/index.ts"));
var LimitedInputControl_1 = tslib_1.__importDefault(__webpack_require__(/*! components/LimitedInputControl */ "./resources/ts/components/LimitedInputControl/index.ts"));
var TermSelector_1 = __webpack_require__(/*! components/TermSelector */ "./resources/ts/components/TermSelector/index.ts");
var TermSelector_2 = tslib_1.__importDefault(__webpack_require__(/*! components/TermSelector/TermSelector */ "./resources/ts/components/TermSelector/TermSelector.tsx"));
var TextControlCollection_1 = tslib_1.__importDefault(__webpack_require__(/*! components/TextControlCollection */ "./resources/ts/components/TextControlCollection/index.ts"));
var DegreeProgramEditFormProvider_1 = __webpack_require__(/*! contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
var idHelpers_1 = __webpack_require__(/*! util/idHelpers */ "./resources/ts/util/idHelpers.ts");
var transforms_1 = __webpack_require__(/*! util/transforms */ "./resources/ts/util/transforms.ts");
var MultilingualContainer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx"));
var General = function () {
  var _a = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)(),
    values = _a.values,
    handleChange = _a.handleChange;
  return react_1.default.createElement(components_1.Panel, null, react_1.default.createElement(components_1.PanelBody, null, react_1.default.createElement(components_1.BaseControl, {
    id: "featured_image",
    help: "Wird f\u00FCr die Detailansicht verwendet.",
    label: (0, i18n_1._x)('Featured image', 'backoffice: degree program edit form', 'fau-degree-program')
  }, react_1.default.createElement(ImageField_1.default, {
    path: "featured_image",
    title: (0, i18n_1._x)('Featured image', 'backoffice: degree program edit form', 'fau-degree-program')
  })), react_1.default.createElement(components_1.BaseControl, {
    id: "teaser_image",
    help: "Wird f\u00FCr die Kacheln auf der Auswahlseite verwendet.",
    label: (0, i18n_1._x)('Teaser Image', 'backoffice: degree program edit form', 'fau-degree-program')
  }, react_1.default.createElement(ImageField_1.default, {
    path: "teaser_image",
    title: (0, i18n_1._x)('Teaser image', 'backoffice: degree program edit form', 'fau-degree-program')
  })), react_1.default.createElement(components_1.BaseControl, {
    id: "title",
    label: (0, i18n_1._x)('Title', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Studiengangsbezeichnung, ohne Abschluss."
  }, react_1.default.createElement(MultilingualContainer_1.default, null, function (languageCode) {
    return react_1.default.createElement(components_1.TextControl, {
      onChange: function (value) {
        handleChange("title.".concat(languageCode), value);
      },
      value: values.title[languageCode]
    });
  })), react_1.default.createElement(components_1.BaseControl, {
    id: "subtitle",
    label: (0, i18n_1._x)('Subtitle', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Z. B. Aufz\u00E4hlung der Studienschwerpunkte bei Wirtschaftswissenschaften."
  }, react_1.default.createElement(MultilingualContainer_1.default, null, function (languageCode) {
    return react_1.default.createElement(components_1.TextControl, {
      onChange: function (value) {
        handleChange("subtitle.".concat(languageCode), value);
      },
      value: values.subtitle[languageCode]
    });
  })), react_1.default.createElement(components_1.__experimentalNumberControl, {
    onChange: function (value) {
      handleChange('standard_duration', parseInt(value, 10));
    },
    value: values.standard_duration,
    label: (0, i18n_1._x)('Standard duration of study', 'backoffice: degree program edit form', 'fau-degree-program'),
    min: 0
  }), react_1.default.createElement(components_1.BaseControl, {
    id: "fee_required",
    label: (0, i18n_1._x)('Fee required', 'backoffice: degree program edit form', 'fau-degree-program')
  }, react_1.default.createElement("div", null, react_1.default.createElement(components_1.ToggleControl, {
    checked: values.fee_required,
    onChange: function (checked) {
      handleChange('fee_required', checked);
    }
  }))), react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "semester",
    label: (0, i18n_1._x)('Start of degree program', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "semester",
    value: values.start.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('start', terms.map(transforms_1.transformTermToMultilingualString));
    }
  }), react_1.default.createElement(TermSelector_2.default, {
    id: "number_of_students",
    label: (0, i18n_1._x)('Number of students', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Gesamtzahl der Studierenden, nicht nur Erstsemester.",
    taxonomy: "numberOfStudents",
    value: values.number_of_students.id,
    onChange: function (term) {
      handleChange('number_of_students', term ? {
        id: (0, idHelpers_1.propertyId)('term', term.id),
        description: term.description
      } : {
        id: '',
        description: ''
      });
    }
  }), react_1.default.createElement(TermSelector_2.default, {
    id: "teaching-language",
    label: (0, i18n_1._x)('Teaching language', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "teachingLanguage",
    value: values.teaching_language.id,
    onChange: function (term) {
      handleChange('teaching_language', (0, transforms_1.transformTermToMultilingualString)(term));
    }
  }), react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "attribute",
    label: (0, i18n_1._x)('Attributes', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "attribute",
    value: values.attributes.map(function (term) {
      return term.id;
    }),
    onChange: function (terms) {
      handleChange('attributes', terms.map(transforms_1.transformTermToMultilingualString));
    }
  }), react_1.default.createElement(TermSelector_2.default, {
    id: "degree",
    label: (0, i18n_1._x)('Degree', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "degree",
    value: values.degree.id,
    onChange: function (term) {
      handleChange('degree', (0, transforms_1.transformTermToDegree)(term));
    }
  }), react_1.default.createElement(TermSelector_2.default, {
    id: "faculty",
    label: (0, i18n_1._x)('Faculty', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "faculty",
    value: values.faculty.id,
    onChange: function (term) {
      handleChange('faculty', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  }), react_1.default.createElement(TermSelector_2.default, {
    id: "study-location",
    label: (0, i18n_1._x)('Study location', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "studyLocation",
    value: values.location.id,
    onChange: function (term) {
      handleChange('location', (0, transforms_1.transformTermToMultilingualString)(term));
    }
  }), react_1.default.createElement(TermSelector_1.MultiTermSelector, {
    id: "subject-group",
    label: (0, i18n_1._x)('Subject groups', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "subjectGroup",
    value: values.subject_groups.map(function (t) {
      return t.id;
    }),
    onChange: function (terms) {
      handleChange('subject_groups', terms.map(transforms_1.transformTermToMultilingualString));
    }
  }), react_1.default.createElement(components_1.BaseControl, {
    id: "videos",
    label: (0, i18n_1._x)('Videos', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Videos \u00FCber den Studiengang, das Studienfach, ein Thema des Fachs (z. B. 2-Minuten-Wissen), Erfahrungsberichte."
  }, react_1.default.createElement(TextControlCollection_1.default, {
    value: values.videos,
    onChange: function (value) {
      handleChange('videos', value);
    }
  })), react_1.default.createElement(LimitedInputControl_1.default, {
    value: values.meta_description.de,
    maxChars: 160
  }, function (maxChars) {
    return react_1.default.createElement(components_1.TextareaControl, {
      label: (0, i18n_1._x)('Meta description', 'backoffice: degree program edit form', 'fau-degree-program'),
      help: "Text f\u00FCr die Anzeige bei Suchmaschinen.",
      value: values.meta_description.de,
      onChange: function (text) {
        if (text.length <= maxChars) {
          handleChange('meta_description.de', text);
        }
      }
    });
  })));
};
exports["default"] = General;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx":
/*!*********************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
var tabs = Object.keys((0, serverData_1.default)().languages).map(function (languageCode) {
  var languageName = (0, serverData_1.default)().languages[languageCode];
  return {
    name: languageCode,
    title: languageName
  };
});
var MultilingualContainer = function (_a) {
  var children = _a.children;
  return react_1.default.createElement(components_1.TabPanel, {
    tabs: tabs
  }, function (tab) {
    return react_1.default.createElement(react_1.default.Fragment, null, children(tab.name));
  });
};
exports["default"] = MultilingualContainer;

/***/ }),

/***/ "./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/ts/components/DegreeProgramEditForm/OrganizationalLinks.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var DegreeProgramEditFormProvider_1 = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
var useConditionalFields_1 = __webpack_require__(/*! ../../hooks/useConditionalFields */ "./resources/ts/hooks/useConditionalFields.ts");
var transforms_1 = __webpack_require__(/*! ../../util/transforms */ "./resources/ts/util/transforms.ts");
var TermSelector_1 = tslib_1.__importDefault(__webpack_require__(/*! ../TermSelector */ "./resources/ts/components/TermSelector/index.ts"));
var MultilingualContainer_1 = tslib_1.__importDefault(__webpack_require__(/*! ./MultilingualContainer */ "./resources/ts/components/DegreeProgramEditForm/MultilingualContainer.tsx"));
var OrganizationalLinks = function () {
  var _a = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)(),
    values = _a.values,
    handleChange = _a.handleChange;
  var degreeFeesEnabled = (0, useConditionalFields_1.useDegreeFeesEnabled)();
  return react_1.default.createElement(components_1.Panel, null, react_1.default.createElement(components_1.PanelBody, null, react_1.default.createElement(TermSelector_1.default, {
    id: "examinations_office",
    label: (0, i18n_1._x)('Examinations Office', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "examinationsOffice",
    value: values.examinations_office.id,
    onChange: function (term) {
      handleChange('examinations_office', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  }), react_1.default.createElement(TermSelector_1.default, {
    id: "examination_regulations",
    label: (0, i18n_1._x)('Degree program and examination regulations', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "examinationRegulations",
    value: values.examination_regulations.id,
    onChange: function (term) {
      handleChange('examination_regulations', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  }), react_1.default.createElement(components_1.TextControl, {
    id: "module_handbook",
    label: (0, i18n_1._x)('Module handbook', 'backoffice: degree program edit form', 'fau-degree-program'),
    onChange: function (handbook) {
      handleChange('module_handbook', handbook);
    },
    value: values.module_handbook
  }), react_1.default.createElement(components_1.BaseControl, {
    id: "url",
    label: (0, i18n_1._x)('Degree program URL', 'backoffice: degree program edit form', 'fau-degree-program')
  }, react_1.default.createElement(MultilingualContainer_1.default, null, function (languageCode) {
    return react_1.default.createElement(components_1.TextControl, {
      onChange: function (value) {
        handleChange("url.".concat(languageCode), value);
      },
      value: values.url[languageCode],
      type: "url"
    });
  })), react_1.default.createElement(TermSelector_1.default, {
    id: "subject_specific_advice",
    label: (0, i18n_1._x)('Subject-specific advice', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "subjectSpecificAdvice",
    value: values.subject_specific_advice.id,
    onChange: function (term) {
      handleChange('subject_specific_advice', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  }), react_1.default.createElement(components_1.TextControl, {
    id: "student_representatives",
    label: (0, i18n_1._x)('Student’s Representatives/FSI', 'backoffice: degree program edit form', 'fau-degree-program'),
    onChange: function (representatives) {
      handleChange('student_representatives', representatives);
    },
    value: values.student_representatives
  }), degreeFeesEnabled && react_1.default.createElement(components_1.BaseControl, {
    label: (0, i18n_1._x)('Degree Program Fees', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Studiengangsgeb\u00FChren, nicht Semesterbeitr\u00E4ge."
  }, react_1.default.createElement(MultilingualContainer_1.default, null, function (languageCode) {
    return react_1.default.createElement(components_1.TextControl, {
      onChange: function (degreeProgramFees) {
        handleChange("degree_program_fees.".concat(languageCode), degreeProgramFees);
      },
      value: values.degree_program_fees[languageCode]
    });
  }))));
};
exports["default"] = OrganizationalLinks;

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
function EntitySelector(_a) {
  var label = _a.label,
    messages = _a.messages,
    maxLength = _a.maxLength,
    onChange = _a.onChange,
    entityToToken = _a.entityToToken,
    maxSuggestions = _a.maxSuggestions,
    entities = _a.entities,
    searchedEntities = _a.searchedEntities,
    setSearch = _a.setSearch;
  var _b = (0, react_1.useState)([]),
    values = _b[0],
    setValues = _b[1];
  var debouncedSearch = (0, compose_1.useDebounce)(setSearch, 500);
  (0, react_1.useEffect)(function () {
    if (entities.length > 0) {
      var newValues = entities.map(entityToToken);
      setValues(newValues);
    }
  }, [entities]);
  var suggestions = (0, react_1.useMemo)(function () {
    return searchedEntities.map(entityToToken);
  }, [searchedEntities]);
  var onChangeTokens = function (tokens) {
    var availableEntities = tslib_1.__spreadArray(tslib_1.__spreadArray([], entities, true), searchedEntities, true);
    var uniqueTokens = (0, lodash_1.uniq)(tokens);
    setValues(uniqueTokens);
    var newEntities = uniqueTokens.map(function (token) {
      return (0, lodash_1.find)(availableEntities, function (entity) {
        return entityToToken(entity) === token;
      });
    });
    onChange(newEntities);
  };
  var isTokenValid = function (token) {
    var availableEntities = tslib_1.__spreadArray(tslib_1.__spreadArray([], entities, true), searchedEntities, true);
    return (0, lodash_1.find)(availableEntities, function (entity) {
      return entityToToken(entity) === token;
    });
  };
  return react_1.default.createElement(components_1.FormTokenField, {
    label: label,
    messages: messages,
    maxLength: maxLength,
    value: values,
    suggestions: suggestions,
    onChange: onChangeTokens,
    onInputChange: debouncedSearch,
    maxSuggestions: maxSuggestions,
    __experimentalShowHowTo: false,
    __experimentalValidateInput: isTokenValid
  });
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

/***/ "./resources/ts/components/ImageField/ImageField.tsx":
/*!***********************************************************!*\
  !*** ./resources/ts/components/ImageField/ImageField.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var blob_1 = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var DegreeProgramEditFormProvider_1 = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
var useMedia_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMedia */ "./resources/ts/components/ImageField/useMedia.ts"));
function ImageField(_a) {
  var path = _a.path,
    title = _a.title;
  var _b = (0, react_1.useState)(false),
    isLoading = _b[0],
    setIsLoading = _b[1];
  var _c = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)(),
    values = _c.values,
    handleChange = _c.handleChange;
  var selectedMedia = (0, useMedia_1.default)(values[path].id);
  var Preview = function () {
    var _a, _b, _c, _d;
    if (isLoading) {
      return react_1.default.createElement(components_1.Spinner, null);
    }
    if (!values[path].url) {
      return null;
    }
    return react_1.default.createElement("img", {
      src: (_d = (_c = (_b = (_a = selectedMedia === null || selectedMedia === void 0 ? void 0 : selectedMedia.media_details) === null || _a === void 0 ? void 0 : _a.sizes) === null || _b === void 0 ? void 0 : _b.thumbnail) === null || _c === void 0 ? void 0 : _c.source_url) !== null && _d !== void 0 ? _d : values[path].url,
      alt: "preview"
    });
  };
  return react_1.default.createElement(block_editor_1.MediaUploadCheck, null, react_1.default.createElement(block_editor_1.MediaPlaceholder, {
    value: [values[path].id],
    onSelect: function (_a) {
      var id = _a.id,
        url = _a.url;
      if ((0, blob_1.isBlobURL)(url)) {
        setIsLoading(true);
        return;
      }
      handleChange(path, {
        id: id,
        url: url
      });
      setIsLoading(false);
    },
    onCancel: function () {
      handleChange(path, {
        id: 0,
        url: ''
      });
    },
    allowedTypes: ['image'],
    multiple: false,
    labels: {
      title: title
    },
    mediaPreview: react_1.default.createElement(Preview, null)
  }));
}
exports["default"] = ImageField;

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
function useMedia(mediaId) {
  var media = (0, data_1.useSelect)(function (select) {
    return select('core').getMedia(mediaId);
  }, [mediaId]);
  return media;
}
exports["default"] = useMedia;

/***/ }),

/***/ "./resources/ts/components/LimitedInputControl/LimitedInputControl.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/ts/components/LimitedInputControl/LimitedInputControl.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var CircularProgress_1 = tslib_1.__importDefault(__webpack_require__(/*! components/CircularProgress */ "./resources/ts/components/CircularProgress/index.ts"));
var LimitedInputControl = function (_a) {
  var maxChars = _a.maxChars,
    children = _a.children,
    value = _a.value;
  var _b = (0, react_1.useState)(maxChars),
    charsLeft = _b[0],
    setCharsLeft = _b[1];
  (0, react_1.useEffect)(function () {
    setCharsLeft(maxChars - value.length);
  }, [value, maxChars]);
  return react_1.default.createElement(react_1.default.Fragment, null, children(maxChars), react_1.default.createElement(components_1.Flex, {
    justify: "flex-start"
  }, react_1.default.createElement(CircularProgress_1.default, {
    percentage: charsLeft * 100 / maxChars,
    squareSize: 16
  }), react_1.default.createElement("small", null, (0, i18n_1._x)('%s characters left', 'backoffice: limited text input', 'fau-degree-program').replace('%s', charsLeft.toString()))));
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var Tabs = function (_a) {
  var tabs = _a.tabs;
  return react_1.default.createElement(components_1.TabPanel, {
    tabs: tabs
  }, function (tab) {
    return react_1.default.createElement(react_1.default.Fragment, null, tab.component);
  });
};
exports["default"] = Tabs;

/***/ }),

/***/ "./resources/ts/components/Tabs/defs.ts":
/*!**********************************************!*\
  !*** ./resources/ts/components/Tabs/defs.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/components/Tabs/index.ts":
/*!***********************************************!*\
  !*** ./resources/ts/components/Tabs/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
var EntitySelector_1 = tslib_1.__importDefault(__webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts"));
var hoc_1 = __webpack_require__(/*! ./hoc */ "./resources/ts/components/TermSelector/hoc/index.ts");
exports["default"] = (0, compose_1.compose)(hoc_1.withTermSelectorProps, hoc_1.withDegreeProgramTerms, hoc_1.withSearchedDegreeProgramTerms)(EntitySelector_1.default);

/***/ }),

/***/ "./resources/ts/components/TermSelector/TermSelector.tsx":
/*!***************************************************************!*\
  !*** ./resources/ts/components/TermSelector/TermSelector.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
var EntitySelector_1 = tslib_1.__importDefault(__webpack_require__(/*! ../EntitySelector */ "./resources/ts/components/EntitySelector/index.ts"));
var hoc_1 = __webpack_require__(/*! ./hoc */ "./resources/ts/components/TermSelector/hoc/index.ts");
var withSingleTermSelectorProps = (0, compose_1.createHigherOrderComponent)(function (WrappedComponent) {
  return function (_a) {
    var onChange = _a.onChange,
      others = tslib_1.__rest(_a, ["onChange"]);
    return react_1.default.createElement(WrappedComponent, tslib_1.__assign({
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
exports["default"] = (0, compose_1.compose)(withSingleTermSelectorProps, hoc_1.withTermSelectorProps, hoc_1.withDegreeProgramTerms, hoc_1.withSearchedDegreeProgramTerms)(EntitySelector_1.default);

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/index.ts":
/*!***********************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/index.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withTermSelectorProps = exports.withSearchedDegreeProgramTerms = exports.withDegreeProgramTerms = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var withDegreeProgramTerms_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withDegreeProgramTerms */ "./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts"));
exports.withDegreeProgramTerms = withDegreeProgramTerms_1.default;
var withSearchedDegreeProgramTerms_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withSearchedDegreeProgramTerms */ "./resources/ts/components/TermSelector/hoc/withSearchedDegreeProgramTerms.ts"));
exports.withSearchedDegreeProgramTerms = withSearchedDegreeProgramTerms_1.default;
var withTermSelectorProps_1 = tslib_1.__importDefault(__webpack_require__(/*! ./withTermSelectorProps */ "./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx"));
exports.withTermSelectorProps = withTermSelectorProps_1.default;

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts":
/*!****************************************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/withDegreeProgramTerms.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var idHelpers_1 = __webpack_require__(/*! util/idHelpers */ "./resources/ts/util/idHelpers.ts");
var serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
var withDegreeProgramTerms = (0, data_1.withSelect)(function (select, ownProps) {
  var _a;
  var getEntityRecords = select(core_data_1.store.name).getEntityRecords;
  if ((0, lodash_1.isEmpty)(ownProps.value)) {
    return {
      entities: []
    };
  }
  var ids = ((0, lodash_1.isArray)(ownProps.value) ? ownProps.value : [ownProps.value]).map(idHelpers_1.entityId);
  var query = tslib_1.__assign({
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = __webpack_require__(/*! react */ "react");
var core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
var data_1 = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
var serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
var withSearchedDegreeProgramTerms = (0, data_1.withSelect)(function (select, ownProps) {
  var _a = (0, react_1.useState)(''),
    search = _a[0],
    setSearch = _a[1];
  var getEntityRecords = select(core_data_1.store.name).getEntityRecords;
  if (search.length === 0) {
    return {
      searchedEntities: [],
      setSearch: setSearch
    };
  }
  var terms = getEntityRecords('taxonomy', (0, serverData_1.default)().taxonomySlugs[ownProps.taxonomy], tslib_1.__assign({
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
exports["default"] = withSearchedDegreeProgramTerms;

/***/ }),

/***/ "./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx":
/*!****************************************************************************!*\
  !*** ./resources/ts/components/TermSelector/hoc/withTermSelectorProps.tsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var compose_1 = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
var withTermSelectorProps = (0, compose_1.createHigherOrderComponent)(function (WrappedComponent) {
  return function (_a) {
    var id = _a.id,
      help = _a.help,
      others = tslib_1.__rest(_a, ["id", "help"]);
    return react_1.default.createElement(components_1.BaseControl, {
      id: id,
      help: help !== null && help !== void 0 ? help : ''
    }, react_1.default.createElement(WrappedComponent, tslib_1.__assign({
      entityToToken: function (term) {
        return term.name;
      },
      maxSuggestions: 20
    }, others)));
  };
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var immer_1 = tslib_1.__importDefault(__webpack_require__(/*! immer */ "./node_modules/immer/dist/index.js"));
var nanoid_1 = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
var styled_components_1 = tslib_1.__importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var transformRawValue = function (value) {
  return value.map(function (str) {
    return {
      value: str,
      id: (0, nanoid_1.nanoid)()
    };
  });
};
var StyledFieldRow = (0, styled_components_1.default)(components_1.Flex)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    align-items: stretch;\n    margin-bottom: 5px;\n\n    > .components-base-control {\n        flex: 1;\n\n        .components-base-control__field,\n        .components-text-control__input {\n            margin-bottom: 0;\n            height: 100%;\n        }\n    }\n"], ["\n    align-items: stretch;\n    margin-bottom: 5px;\n\n    > .components-base-control {\n        flex: 1;\n\n        .components-base-control__field,\n        .components-text-control__input {\n            margin-bottom: 0;\n            height: 100%;\n        }\n    }\n"])));
var TextControlCollection = function (_a) {
  var value = _a.value,
    onChange = _a.onChange;
  var _b = (0, react_1.useState)(transformRawValue(value)),
    fields = _b[0],
    setFields = _b[1];
  (0, react_1.useEffect)(function () {
    onChange(fields.filter(function (f) {
      return !!f.value;
    }).map(function (f) {
      return f.value;
    }));
  }, [fields]);
  return react_1.default.createElement("div", null, react_1.default.createElement(components_1.BaseControl, null, fields.map(function (field, index) {
    return react_1.default.createElement(StyledFieldRow, {
      key: field.id
    }, react_1.default.createElement(components_1.TextControl, {
      value: field.value,
      onChange: function (text) {
        setFields((0, immer_1.default)(fields, function (draft) {
          draft[index].value = text;
        }));
      }
    }), react_1.default.createElement(components_1.Button, {
      isDestructive: true,
      onClick: function () {
        setFields(tslib_1.__spreadArray([], fields.filter(function (f) {
          return f.id !== field.id;
        }), true));
      }
    }, react_1.default.createElement(components_1.Icon, {
      icon: "no"
    })));
  })), react_1.default.createElement(components_1.Button, {
    onClick: function () {
      setFields((0, immer_1.default)(fields, function (draft) {
        draft.push({
          id: (0, nanoid_1.nanoid)(),
          value: ''
        });
      }));
    },
    variant: "primary"
  }, (0, i18n_1._x)('Add', 'backoffice: TextControlCollection', 'fau-degree-program')));
};
exports["default"] = TextControlCollection;
var templateObject_1;

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useEditDegreeProgram = exports.DegreeProgramEditFormContext = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var immer_1 = tslib_1.__importDefault(__webpack_require__(/*! immer */ "./node_modules/immer/dist/index.js"));
var lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
var serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
exports.DegreeProgramEditFormContext = (0, react_1.createContext)({});
var DegreeProgramEditFormProvider = function (_a) {
  var children = _a.children;
  var _b = (0, react_1.useState)({}),
    errors = _b[0],
    setErrors = _b[1];
  var _c = (0, core_data_1.useEntityProp)('postType', (0, serverData_1.default)().postType, (0, serverData_1.default)().propertyName),
    degreeProgramData = _c[0],
    setDegreeProgramData = _c[1];
  var handleChange = (0, react_1.useCallback)(function (path, val) {
    setDegreeProgramData((0, immer_1.default)(degreeProgramData, function (draft) {
      return (0, lodash_1.set)(draft, path, val);
    }));
  }, [setDegreeProgramData, degreeProgramData]);
  var addError = (0, react_1.useCallback)(function (field, errorMessage) {
    setErrors(function (prevErrors) {
      var _a;
      return tslib_1.__assign(tslib_1.__assign({}, prevErrors), (_a = {}, _a[field] = errorMessage, _a));
    });
  }, []);
  var removeError = (0, react_1.useCallback)(function (field) {
    setErrors(function (prevErrors) {
      return (0, immer_1.default)(prevErrors, function (draft) {
        delete draft[field];
      });
    });
  }, []);
  return react_1.default.createElement(exports.DegreeProgramEditFormContext.Provider, {
    value: {
      handleChange: handleChange,
      values: degreeProgramData,
      errors: errors,
      addError: addError,
      removeError: removeError
    }
  }, children);
};
var useEditDegreeProgram = function () {
  return (0, react_1.useContext)(exports.DegreeProgramEditFormContext);
};
exports.useEditDegreeProgram = useEditDegreeProgram;
exports["default"] = DegreeProgramEditFormProvider;

/***/ }),

/***/ "./resources/ts/defs.ts":
/*!******************************!*\
  !*** ./resources/ts/defs.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./defs/common */ "./resources/ts/defs/common.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/core-data */ "./resources/ts/defs/core-data.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/degree-program-data */ "./resources/ts/defs/degree-program-data.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/entity-selector */ "./resources/ts/defs/entity-selector.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/generic */ "./resources/ts/defs/generic.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/server-data */ "./resources/ts/defs/server-data.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./defs/term */ "./resources/ts/defs/term.ts"), exports);

/***/ }),

/***/ "./resources/ts/defs/common.ts":
/*!*************************************!*\
  !*** ./resources/ts/defs/common.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/core-data.ts":
/*!****************************************!*\
  !*** ./resources/ts/defs/core-data.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/degree-program-data.ts":
/*!**************************************************!*\
  !*** ./resources/ts/defs/degree-program-data.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEGREE_ABBREVIATION_GERMAN = exports.DEGREE_ABBREVIATION_ENGLISH = void 0;
exports.DEGREE_ABBREVIATION_ENGLISH = {
  BACHELOR: 'B.A.',
  MASTERS: 'M.A.',
  TEACHING_DEGREE: 'B.S.E.'
};
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
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/generic.ts":
/*!**************************************!*\
  !*** ./resources/ts/defs/generic.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/server-data.ts":
/*!******************************************!*\
  !*** ./resources/ts/defs/server-data.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/defs/term.ts":
/*!***********************************!*\
  !*** ./resources/ts/defs/term.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./resources/ts/hooks/constants.ts":
/*!*****************************************!*\
  !*** ./resources/ts/hooks/constants.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ADMISSION_REQUIREMENT_FREE = exports.SEMESTER_SUMMER = exports.FACULTY_NATURAL_SCIENCES = exports.FACULTY_PHILOSOPHY = void 0;
exports.FACULTY_PHILOSOPHY = 'Phil';
exports.FACULTY_NATURAL_SCIENCES = 'Nat';
exports.SEMESTER_SUMMER = 'Sommersemester';
exports.ADMISSION_REQUIREMENT_FREE = 'frei';

/***/ }),

/***/ "./resources/ts/hooks/useConditionalFields.ts":
/*!****************************************************!*\
  !*** ./resources/ts/hooks/useConditionalFields.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useApplicationDeadlineSummerSemesterEnabled = exports.useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled = exports.useAdmissionRequirementsForMastersDegree = exports.useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled = exports.useAdmissionRequirementsForBachelorAndTeachingDegreesEnable = exports.useCombinationOfDegreeProgramEnabled = exports.useDegreeFeesEnabled = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./resources/ts/hooks/constants.ts");
var useDegreeProgramProperty_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useDegreeProgramProperty */ "./resources/ts/hooks/useDegreeProgramProperty.ts"));
var defs_1 = __webpack_require__(/*! defs */ "./resources/ts/defs.ts");
var ALLOWED_FACULTIES_FOR_COMBINATION = [constants_1.FACULTY_PHILOSOPHY, constants_1.FACULTY_NATURAL_SCIENCES];
function useDegreeFeesEnabled() {
  var feeRequired = (0, useDegreeProgramProperty_1.default)('fee_required')[0];
  return !!feeRequired;
}
exports.useDegreeFeesEnabled = useDegreeFeesEnabled;
function useCombinationOfDegreeProgramEnabled() {
  var faculty = (0, useDegreeProgramProperty_1.default)('faculty')[0];
  var degree = (0, useDegreeProgramProperty_1.default)('degree')[0];
  if (!faculty || !degree) {
    return false;
  }
  return ALLOWED_FACULTIES_FOR_COMBINATION.includes(faculty.name.de) && degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.BACHELOR;
}
exports.useCombinationOfDegreeProgramEnabled = useCombinationOfDegreeProgramEnabled;
function useAdmissionRequirementsForBachelorAndTeachingDegreesEnable() {
  var degree = (0, useDegreeProgramProperty_1.default)('degree')[0];
  if (!degree) {
    return false;
  }
  return degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.BACHELOR || degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE;
}
exports.useAdmissionRequirementsForBachelorAndTeachingDegreesEnable = useAdmissionRequirementsForBachelorAndTeachingDegreesEnable;
function useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled() {
  var bachelorOrTeachingAdmissionRequirement = (0, useDegreeProgramProperty_1.default)('admission_requirements.bachelor_or_teaching_degree')[0];
  if (!bachelorOrTeachingAdmissionRequirement) {
    return false;
  }
  return bachelorOrTeachingAdmissionRequirement.name.de !== constants_1.ADMISSION_REQUIREMENT_FREE;
}
exports.useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled = useAdmissionRequirementsTeachingDegreeAtHigherSemesterEnabled;
function useAdmissionRequirementsForMastersDegree() {
  var degree = (0, useDegreeProgramProperty_1.default)('degree')[0];
  if (!degree) {
    return false;
  }
  return degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.MASTERS;
}
exports.useAdmissionRequirementsForMastersDegree = useAdmissionRequirementsForMastersDegree;
function useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled() {
  var degree = (0, useDegreeProgramProperty_1.default)('degree')[0];
  var faculty = (0, useDegreeProgramProperty_1.default)('faculty')[0];
  if (!degree || !faculty) {
    return false;
  }
  return (degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.BACHELOR || degree.abbreviation.de === defs_1.DEGREE_ABBREVIATION_GERMAN.TEACHING_DEGREE) && faculty.name.de === constants_1.FACULTY_PHILOSOPHY;
}
exports.useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled = useLanguageSkillsForFacultyOfHumanitiesOnlyEnabled;
function useApplicationDeadlineSummerSemesterEnabled() {
  var semester = (0, useDegreeProgramProperty_1.default)('semester_dates')[0];
  if (!semester) {
    return false;
  }
  return semester.name.de === constants_1.SEMESTER_SUMMER;
}
exports.useApplicationDeadlineSummerSemesterEnabled = useApplicationDeadlineSummerSemesterEnabled;

/***/ }),

/***/ "./resources/ts/hooks/useDegreeProgramProperty.ts":
/*!********************************************************!*\
  !*** ./resources/ts/hooks/useDegreeProgramProperty.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var immer_1 = tslib_1.__importDefault(__webpack_require__(/*! immer */ "./node_modules/immer/dist/index.js"));
var lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var core_data_1 = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
var serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
function useDegreeProgramProperty(path) {
  var _a = (0, core_data_1.useEntityProp)('postType', (0, serverData_1.default)().postType, (0, serverData_1.default)().propertyName),
    degreeProgramData = _a[0],
    setDegreeProgramData = _a[1];
  return [(0, lodash_1.get)(degreeProgramData, path), function (val) {
    return setDegreeProgramData((0, immer_1.default)(degreeProgramData, function (draft) {
      return (0, lodash_1.set)(draft, path, val);
    }));
  }];
}
exports["default"] = useDegreeProgramProperty;

/***/ }),

/***/ "./resources/ts/util/idHelpers.ts":
/*!****************************************!*\
  !*** ./resources/ts/util/idHelpers.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.entityId = exports.propertyId = void 0;
function propertyId(type, id) {
  return "".concat(type, ":").concat(id);
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
/***/ (function(__unused_webpack_module, exports) {

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

/***/ "./resources/ts/util/transforms.ts":
/*!*****************************************!*\
  !*** ./resources/ts/util/transforms.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.transformTermToDegree = exports.transformTermToMultilingualLink = exports.transformTermToMultilingualString = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var idHelpers_1 = __webpack_require__(/*! ./idHelpers */ "./resources/ts/util/idHelpers.ts");
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
    id: (0, idHelpers_1.propertyId)('term', term.id)
  } : tslib_1.__assign({}, EMPTY_MULTILINGUAL_STRING);
}
exports.transformTermToMultilingualString = transformTermToMultilingualString;
function transformTermToMultilingualLink(term) {
  var _a, _b, _c, _d, _e;
  return term ? {
    id: (0, idHelpers_1.propertyId)('term', term.id),
    name: {
      id: (0, idHelpers_1.propertyId)('term', "".concat(term.id, ".name")),
      de: term.name,
      en: (_a = term.meta.name_en) !== null && _a !== void 0 ? _a : ''
    },
    link_text: {
      id: (0, idHelpers_1.propertyId)('term', "".concat(term.id, ".link_text")),
      de: (_b = term.meta.link_text) !== null && _b !== void 0 ? _b : '',
      en: (_c = term.meta.link_text_en) !== null && _c !== void 0 ? _c : ''
    },
    link_url: {
      id: (0, idHelpers_1.propertyId)('term', "".concat(term.id, ".link_url")),
      de: (_d = term.meta.link_url) !== null && _d !== void 0 ? _d : '',
      en: (_e = term.meta.link_url_en) !== null && _e !== void 0 ? _e : ''
    }
  } : {
    id: '',
    name: tslib_1.__assign({}, EMPTY_MULTILINGUAL_STRING),
    link_text: tslib_1.__assign({}, EMPTY_MULTILINGUAL_STRING),
    link_url: tslib_1.__assign({}, EMPTY_MULTILINGUAL_STRING)
  };
}
exports.transformTermToMultilingualLink = transformTermToMultilingualLink;
function transformTermToDegree(term) {
  var _a, _b, _c;
  return term ? {
    id: (0, idHelpers_1.propertyId)('term', term.id),
    abbreviation: {
      id: (0, idHelpers_1.propertyId)('term', "".concat(term.id, ".abbreviation")),
      de: (_a = term.meta.abbreviation) !== null && _a !== void 0 ? _a : '',
      en: (_b = term.meta.abbreviation_en) !== null && _b !== void 0 ? _b : ''
    },
    name: {
      id: (0, idHelpers_1.propertyId)('term', "".concat(term.id, ".name")),
      de: term.name,
      en: (_c = term.meta.name_en) !== null && _c !== void 0 ? _c : ''
    }
  } : {
    id: '',
    abbreviation: tslib_1.__assign({}, EMPTY_MULTILINGUAL_STRING),
    name: tslib_1.__assign({}, EMPTY_MULTILINGUAL_STRING)
  };
}
exports.transformTermToDegree = transformTermToDegree;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

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

/***/ "./node_modules/immer/dist/immer.cjs.development.js":
/*!**********************************************************!*\
  !*** ./node_modules/immer/dist/immer.cjs.development.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";



if (false) {} else {
  module.exports = __webpack_require__(/*! ./immer.cjs.development.js */ "./node_modules/immer/dist/immer.cjs.development.js")
}


/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/admin.scss":
/*!************************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/admin.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/ts/components/ContentField/hide-toolbar-buttons.scss":
/*!************************************************************************!*\
  !*** ./resources/ts/components/ContentField/hide-toolbar-buttons.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

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

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ (function(module) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStyleSheet": function() { return /* binding */ Je; },
/* harmony export */   "StyleSheetConsumer": function() { return /* binding */ le; },
/* harmony export */   "StyleSheetContext": function() { return /* binding */ ue; },
/* harmony export */   "StyleSheetManager": function() { return /* binding */ ye; },
/* harmony export */   "ThemeConsumer": function() { return /* binding */ Le; },
/* harmony export */   "ThemeContext": function() { return /* binding */ Ge; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ Fe; },
/* harmony export */   "__PRIVATE__": function() { return /* binding */ Ke; },
/* harmony export */   "createGlobalStyle": function() { return /* binding */ We; },
/* harmony export */   "css": function() { return /* binding */ Ce; },
/* harmony export */   "isStyledComponent": function() { return /* binding */ N; },
/* harmony export */   "keyframes": function() { return /* binding */ Ue; },
/* harmony export */   "useTheme": function() { return /* binding */ Ze; },
/* harmony export */   "version": function() { return /* binding */ C; },
/* harmony export */   "withTheme": function() { return /* binding */ Xe; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldIn": function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__values": function() { return /* binding */ __values; }
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
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["richText"];

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": function() { return /* binding */ customAlphabet; },
/* harmony export */   "customRandom": function() { return /* binding */ customRandom; },
/* harmony export */   "nanoid": function() { return /* binding */ nanoid; },
/* harmony export */   "random": function() { return /* binding */ random; },
/* harmony export */   "urlAlphabet": function() { return /* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet; }
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
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": function() { return /* binding */ urlAlphabet; }
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ }),

/***/ "./resources/ts/blocks/degree-program-form/block.json":
/*!************************************************************!*\
  !*** ./resources/ts/blocks/degree-program-form/block.json ***!
  \************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/degree-program-form","title":"Degree program editor","category":"theme","icon":"welcome-learn-more","description":"Displays degree program editor form.","version":"1.0.0","textdomain":"fau-degree-program","supports":{"lock":false,"html":false,"inserter":false,"multiple":false,"reusable":false,"customClassName":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-details/block.json":
/*!************************************************************!*\
  !*** ./resources/ts/blocks/description-details/block.json ***!
  \************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/description-details","title":"Description Details","category":"theme","parent":["fau/description-list"],"icon":"editor-help","version":"1.0.0","textdomain":"fau-degree-program","attributes":{"content":{"type":"string","source":"html","selector":"dd","default":""}},"supports":{"lock":false,"html":false,"reusable":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-list/block.json":
/*!*********************************************************!*\
  !*** ./resources/ts/blocks/description-list/block.json ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"fau/description-list","title":"Description List","category":"theme","icon":"admin-page","version":"1.0.0","textdomain":"fau-degree-program","supports":{"lock":false,"html":false,"reusable":false}}');

/***/ }),

/***/ "./resources/ts/blocks/description-term/block.json":
/*!*********************************************************!*\
  !*** ./resources/ts/blocks/description-term/block.json ***!
  \*********************************************************/
/***/ (function(module) {

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var exports = __webpack_exports__;
/*!***********************************************!*\
  !*** ./resources/ts/degree-program-editor.ts ***!
  \***********************************************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! ./blocks */ "./resources/ts/blocks/index.ts");
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMvZGVncmVlLXByb2dyYW0tZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDUnZCO0FBQ0E7QUFDQSwwS0FBMEssTUFBTTtBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsT0FBTztBQUM1QiwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFEO0FBQzlDO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSTtBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBTCxtQkFBQUEsQ0FBQUEsZ0RBQUFBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5lc20uanMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxpcy9kaXN0L3N0eWxpcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2RlZ3JlZS1wcm9ncmFtLWZvcm0vRWRpdC50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9kZWdyZWUtcHJvZ3JhbS1mb3JtL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tZGV0YWlscy9FZGl0LnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2Rlc2NyaXB0aW9uLWRldGFpbHMvU2F2ZS50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9kZXNjcmlwdGlvbi1kZXRhaWxzL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tbGlzdC9FZGl0LnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2Rlc2NyaXB0aW9uLWxpc3QvU2F2ZS50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9kZXNjcmlwdGlvbi1saXN0L2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tdGVybS9FZGl0LnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2Rlc2NyaXB0aW9uLXRlcm0vU2F2ZS50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9kZXNjcmlwdGlvbi10ZXJtL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZmlsdGVycy9hZGRIZWFkaW5nQmxvY2tWYXJpYXRpb25zLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZmlsdGVycy9hZGRTaG9ydGNvZGVCbG9ja1ZhcmlhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9maWx0ZXJzL2RlZmF1bHRJbWFnZVNpemUudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9maWx0ZXJzL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZmlsdGVycy9yZXN0cmljdEFsbG93ZWRUZXh0Rm9ybWF0cy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvQ2lyY3VsYXJQcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzcy9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9Db250ZW50RmllbGQvQ29udGVudEZpZWxkLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9Db250ZW50RmllbGQvY29uc3RhbnRzLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0NvbnRlbnRGaWVsZC9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9Db250ZW50RmllbGQvdXNlQmxvY2tFZGl0b3JTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMvUmVsYXRlZERlZ3JlZVByb2dyYW1zLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zL2hvYy9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zL2hvYy93aXRoRGVncmVlUHJvZ3JhbVBvc3RzLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMvaG9jL3dpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1Qb3N0cy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9BZG1pc3Npb25SZXF1aXJlbWVudHMudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9Db250ZW50LnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vRGVncmVlUHJvZ3JhbUVkaXRGb3JtLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vRm9ybUhlYWRpbmcudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9HZW5lcmFsLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vTXVsdGlsaW5ndWFsQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vT3JnYW5pemF0aW9uYWxMaW5rcy50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0VudGl0eVNlbGVjdG9yL0VudGl0eVNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9FbnRpdHlTZWxlY3Rvci9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9JbWFnZUZpZWxkL0ltYWdlRmllbGQudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0ltYWdlRmllbGQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvSW1hZ2VGaWVsZC91c2VNZWRpYS50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9MaW1pdGVkSW5wdXRDb250cm9sL0xpbWl0ZWRJbnB1dENvbnRyb2wudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0xpbWl0ZWRJbnB1dENvbnRyb2wvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGFicy9UYWJzLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UYWJzL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1Rlcm1TZWxlY3Rvci9NdWx0aVRlcm1TZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGVybVNlbGVjdG9yL1Rlcm1TZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGVybVNlbGVjdG9yL2hvYy9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvaG9jL3dpdGhEZWdyZWVQcm9ncmFtVGVybXMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGVybVNlbGVjdG9yL2hvYy93aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGVybVNlbGVjdG9yL2hvYy93aXRoVGVybVNlbGVjdG9yUHJvcHMudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1Rlcm1TZWxlY3Rvci9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXh0Q29udHJvbENvbGxlY3Rpb24vVGV4dENvbnRyb2xDb2xsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXh0Q29udHJvbENvbGxlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbnRleHRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvZGVmcy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvZGVmcy9kZWdyZWUtcHJvZ3JhbS1kYXRhLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ob29rcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2hvb2tzL3VzZUNvbmRpdGlvbmFsRmllbGRzLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ob29rcy91c2VEZWdyZWVQcm9ncmFtUHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL3V0aWwvaWRIZWxwZXJzLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy91dGlsL3NlcnZlckRhdGEudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL3V0aWwvdHJhbnNmb3Jtcy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuY2pzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVncmVlLXByb2dyYW0tZm9ybS9hZG1pbi5zY3NzPzNjZTEiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvQ29udGVudEZpZWxkL2hpZGUtdG9vbGJhci1idXR0b25zLnNjc3M/NDExNCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9kaXN0L3N0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtY29tcG9uZW50cy9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5lc20uanMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvYlwiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja3NcIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvcmVEYXRhXCJdIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZG9tUmVhZHlcIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWRpdG9yXCJdIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwibWVkaWFVdGlsc1wiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJyaWNoVGV4dFwiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2RlZ3JlZS1wcm9ncmFtLWVkaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJmdW5jdGlvbiBzdHlsaXNfbWluIChXKSB7XG4gIGZ1bmN0aW9uIE0oZCwgYywgZSwgaCwgYSkge1xuICAgIGZvciAodmFyIG0gPSAwLCBiID0gMCwgdiA9IDAsIG4gPSAwLCBxLCBnLCB4ID0gMCwgSyA9IDAsIGssIHUgPSBrID0gcSA9IDAsIGwgPSAwLCByID0gMCwgSSA9IDAsIHQgPSAwLCBCID0gZS5sZW5ndGgsIEogPSBCIC0gMSwgeSwgZiA9ICcnLCBwID0gJycsIEYgPSAnJywgRyA9ICcnLCBDOyBsIDwgQjspIHtcbiAgICAgIGcgPSBlLmNoYXJDb2RlQXQobCk7XG4gICAgICBsID09PSBKICYmIDAgIT09IGIgKyBuICsgdiArIG0gJiYgKDAgIT09IGIgJiYgKGcgPSA0NyA9PT0gYiA/IDEwIDogNDcpLCBuID0gdiA9IG0gPSAwLCBCKyssIEorKyk7XG5cbiAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgIGlmIChsID09PSBKICYmICgwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpLCAwIDwgZi50cmltKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGYgKz0gZS5jaGFyQXQobCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZyA9IDU5O1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICBmID0gZi50cmltKCk7XG4gICAgICAgICAgICBxID0gZi5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGZvciAodCA9ICsrbDsgbCA8IEI7KSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICAgICAgICAgIGstLTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSBsICsgMTsgdSA8IEo7ICsrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY2hhckNvZGVBdCh1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDIgPT09IGcgJiYgNDIgPT09IGUuY2hhckNvZGVBdCh1IC0gMSkgJiYgbCArIDIgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDcgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICBmb3IgKDsgbCsrIDwgSiAmJiBlLmNoYXJDb2RlQXQobCkgIT09IGc7KSB7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgwID09PSBrKSBicmVhaztcbiAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrID0gZS5zdWJzdHJpbmcodCwgbCk7XG4gICAgICAgICAgICAwID09PSBxICYmIChxID0gKGYgPSBmLnJlcGxhY2UoY2EsICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHEpIHtcbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpO1xuICAgICAgICAgICAgICAgIGcgPSBmLmNoYXJDb2RlQXQoMSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgciA9IE87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgayA9IE0oYywgciwgaywgZywgYSArIDEpO1xuICAgICAgICAgICAgICAgIHQgPSBrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAwIDwgQSAmJiAociA9IFgoTywgZiwgSSksIEMgPSBIKDMsIGssIHIsIGMsIEQsIHosIHQsIGcsIGEsIGgpLCBmID0gci5qb2luKCcnKSwgdm9pZCAwICE9PSBDICYmIDAgPT09ICh0ID0gKGsgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZyA9IDAsIGsgPSAnJykpO1xuICAgICAgICAgICAgICAgIGlmICgwIDwgdCkgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShkYSwgZWEpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZmEsICckMSAkMicpO1xuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGsgPSAxID09PSB3IHx8IDIgPT09IHcgJiYgTCgnQCcgKyBrLCAzKSA/ICdALXdlYmtpdC0nICsgayArICdAJyArIGsgOiAnQCcgKyBrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyBrLCAxMTIgPT09IGggJiYgKGsgPSAocCArPSBrLCAnJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBrID0gTShjLCBYKGMsIGYsIEkpLCBrLCBoLCBhICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYgKz0gaztcbiAgICAgICAgICAgIGsgPSBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGYgPSAoMCA8IHIgPyBmLnJlcGxhY2UoTiwgJycpIDogZikudHJpbSgpO1xuICAgICAgICAgICAgaWYgKDEgPCAodCA9IGYubGVuZ3RoKSkgc3dpdGNoICgwID09PSB1ICYmIChxID0gZi5jaGFyQ29kZUF0KDApLCA0NSA9PT0gcSB8fCA5NiA8IHEgJiYgMTIzID4gcSkgJiYgKHQgPSAoZiA9IGYucmVwbGFjZSgnICcsICc6JykpLmxlbmd0aCksIDAgPCBBICYmIHZvaWQgMCAhPT0gKEMgPSBIKDEsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKSkgJiYgMCA9PT0gKHQgPSAoZiA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChmID0gJ1xceDAwXFx4MDAnKSwgcSA9IGYuY2hhckNvZGVBdCgwKSwgZyA9IGYuY2hhckNvZGVBdCgxKSwgcSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICBpZiAoMTA1ID09PSBnIHx8IDk5ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICBHICs9IGYgKyBlLmNoYXJBdChsKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIDU4ICE9PSBmLmNoYXJDb2RlQXQodCAtIDEpICYmIChwICs9IFAoZiwgcSwgZywgZi5jaGFyQ29kZUF0KDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICA0NyA9PT0gYiA/IGIgPSAwIDogMCA9PT0gMSArIHEgJiYgMTA3ICE9PSBoICYmIDAgPCBmLmxlbmd0aCAmJiAociA9IDEsIGYgKz0gJ1xceDAwJyk7XG4gICAgICAgICAgMCA8IEEgKiBZICYmIEgoMCwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpO1xuICAgICAgICAgIHogPSAxO1xuICAgICAgICAgIEQrKztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU5OlxuICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICAgICAgeisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeisrO1xuICAgICAgICAgIHkgPSBlLmNoYXJBdChsKTtcblxuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBtICsgYikgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgMzIgIT09IGcgJiYgKHkgPSAnICcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXDAnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcZic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFx2JztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAociA9IEkgPSAxLCB5ID0gJ1xcZicgKyB5KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtICsgRSAmJiAwIDwgdSkgc3dpdGNoIChsIC0gdSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIDExMiA9PT0geCAmJiA1OCA9PT0gZS5jaGFyQ29kZUF0KGwgLSAzKSAmJiAoRSA9IHgpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgMTExID09PSBLICYmIChFID0gSyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAodSA9IGwpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSAmJiAociA9IDEsIHkgKz0gJ1xccicpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgIDAgPT09IGIgJiYgKG4gPSBuID09PSBnID8gMCA6IDAgPT09IG4gPyBnIDogbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbSsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0tLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiB2LS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHEpIHN3aXRjaCAoMiAqIHggKyAzICogSykge1xuICAgICAgICAgICAgICAgICAgY2FzZSA1MzM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBxID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdisrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gKyB1ICsgayAmJiAoayA9IDEpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgIGlmICghKDAgPCBuICsgbSArIHYpKSBzd2l0Y2ggKGIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKDIgKiBnICsgMyAqIGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzU6XG4gICAgICAgICAgICAgICAgICAgICAgYiA9IDQ3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgICAgICAgICAgIHQgPSBsLCBiID0gNDI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgIDQ3ID09PSBnICYmIDQyID09PSB4ICYmIHQgKyAyICE9PSBsICYmICgzMyA9PT0gZS5jaGFyQ29kZUF0KHQgKyAyKSAmJiAocCArPSBlLnN1YnN0cmluZyh0LCBsICsgMSkpLCB5ID0gJycsIGIgPSAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDAgPT09IGIgJiYgKGYgKz0geSk7XG4gICAgICB9XG5cbiAgICAgIEsgPSB4O1xuICAgICAgeCA9IGc7XG4gICAgICBsKys7XG4gICAgfVxuXG4gICAgdCA9IHAubGVuZ3RoO1xuXG4gICAgaWYgKDAgPCB0KSB7XG4gICAgICByID0gYztcbiAgICAgIGlmICgwIDwgQSAmJiAoQyA9IEgoMiwgcCwgciwgZCwgRCwgeiwgdCwgaCwgYSwgaCksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAocCA9IEMpLmxlbmd0aCkpIHJldHVybiBHICsgcCArIEY7XG4gICAgICBwID0gci5qb2luKCcsJykgKyAneycgKyBwICsgJ30nO1xuXG4gICAgICBpZiAoMCAhPT0gdyAqIEUpIHtcbiAgICAgICAgMiAhPT0gdyB8fCBMKHAsIDIpIHx8IChFID0gMCk7XG5cbiAgICAgICAgc3dpdGNoIChFKSB7XG4gICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKGhhLCAnOi1tb3otJDEnKSArIHA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShRLCAnOjotd2Via2l0LWlucHV0LSQxJykgKyBwLnJlcGxhY2UoUSwgJzo6LW1vei0kMScpICsgcC5yZXBsYWNlKFEsICc6LW1zLWlucHV0LSQxJykgKyBwO1xuICAgICAgICB9XG5cbiAgICAgICAgRSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEcgKyBwICsgRjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFgoZCwgYywgZSkge1xuICAgIHZhciBoID0gYy50cmltKCkuc3BsaXQoaWEpO1xuICAgIGMgPSBoO1xuICAgIHZhciBhID0gaC5sZW5ndGgsXG4gICAgICAgIG0gPSBkLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICB2YXIgYiA9IDA7XG5cbiAgICAgICAgZm9yIChkID0gMCA9PT0gbSA/ICcnIDogZFswXSArICcgJzsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGNbYl0gPSBaKGQsIGNbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdiA9IGIgPSAwO1xuXG4gICAgICAgIGZvciAoYyA9IFtdOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtOyArK24pIHtcbiAgICAgICAgICAgIGNbdisrXSA9IFooZFtuXSArICcgJywgaFtiXSwgZSkudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBmdW5jdGlvbiBaKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAzMyA+IGggJiYgKGggPSAoYyA9IGMudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgIHN3aXRjaCAoaCkge1xuICAgICAgY2FzZSAzODpcbiAgICAgICAgcmV0dXJuIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICByZXR1cm4gZC50cmltKCkgKyBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKDAgPCAxICogZSAmJiAwIDwgYy5pbmRleE9mKCdcXGYnKSkgcmV0dXJuIGMucmVwbGFjZShGLCAoNTggPT09IGQuY2hhckNvZGVBdCgwKSA/ICcnIDogJyQxJykgKyBkLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQgKyBjO1xuICB9XG5cbiAgZnVuY3Rpb24gUChkLCBjLCBlLCBoKSB7XG4gICAgdmFyIGEgPSBkICsgJzsnLFxuICAgICAgICBtID0gMiAqIGMgKyAzICogZSArIDQgKiBoO1xuXG4gICAgaWYgKDk0NCA9PT0gbSkge1xuICAgICAgZCA9IGEuaW5kZXhPZignOicsIDkpICsgMTtcbiAgICAgIHZhciBiID0gYS5zdWJzdHJpbmcoZCwgYS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICBiID0gYS5zdWJzdHJpbmcoMCwgZCkudHJpbSgpICsgYiArICc7JztcbiAgICAgIHJldHVybiAxID09PSB3IHx8IDIgPT09IHcgJiYgTChiLCAxKSA/ICctd2Via2l0LScgKyBiICsgYiA6IGI7XG4gICAgfVxuXG4gICAgaWYgKDAgPT09IHcgfHwgMiA9PT0gdyAmJiAhTChhLCAxKSkgcmV0dXJuIGE7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMTAxNTpcbiAgICAgICAgcmV0dXJuIDk3ID09PSBhLmNoYXJDb2RlQXQoMTApID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NTE6XG4gICAgICAgIHJldHVybiAxMTYgPT09IGEuY2hhckNvZGVBdCgzKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTYzOlxuICAgICAgICByZXR1cm4gMTEwID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDEwMDk6XG4gICAgICAgIGlmICgxMDAgIT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTY5OlxuICAgICAgY2FzZSA5NDI6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTc4OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAxOTpcbiAgICAgIGNhc2UgOTgzOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDg4MzpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoOCkpIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG4gICAgICAgIGlmICgwIDwgYS5pbmRleE9mKCdpbWFnZS1zZXQoJywgMTEpKSByZXR1cm4gYS5yZXBsYWNlKGphLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5MzI6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDQpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg1KSkge1xuICAgICAgICAgIGNhc2UgMTAzOlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC0nICsgYS5yZXBsYWNlKCctZ3JvdycsICcnKSArICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdncm93JywgJ3Bvc2l0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ3NocmluaycsICduZWdhdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk2NDpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDIzOlxuICAgICAgICBpZiAoOTkgIT09IGEuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZyhhLmluZGV4T2YoJzonLCAxNSkpLnJlcGxhY2UoJ2ZsZXgtJywgJycpLnJlcGxhY2UoJ3NwYWNlLWJldHdlZW4nLCAnanVzdGlmeScpO1xuICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LXBhY2snICsgYiArICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LXBhY2snICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAwNTpcbiAgICAgICAgcmV0dXJuIGthLnRlc3QoYSkgPyBhLnJlcGxhY2UoYWEsICc6LXdlYmtpdC0nKSArIGEucmVwbGFjZShhYSwgJzotbW96LScpICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMWUzOlxuICAgICAgICBiID0gYS5zdWJzdHJpbmcoMTMpLnRyaW0oKTtcbiAgICAgICAgYyA9IGIuaW5kZXhPZignLScpICsgMTtcblxuICAgICAgICBzd2l0Y2ggKGIuY2hhckNvZGVBdCgwKSArIGIuY2hhckNvZGVBdChjKSkge1xuICAgICAgICAgIGNhc2UgMjI2OlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMzI6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0Yi1ybCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ2xyJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMTc6XG4gICAgICAgIGlmICgtMSA9PT0gYS5pbmRleE9mKCdzdGlja3knLCA5KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTc1OlxuICAgICAgICBjID0gKGEgPSBkKS5sZW5ndGggLSAxMDtcbiAgICAgICAgYiA9ICgzMyA9PT0gYS5jaGFyQ29kZUF0KGMpID8gYS5zdWJzdHJpbmcoMCwgYykgOiBhKS5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JywgNykgKyAxKS50cmltKCk7XG5cbiAgICAgICAgc3dpdGNoIChtID0gYi5jaGFyQ29kZUF0KDApICsgKGIuY2hhckNvZGVBdCg3KSB8IDApKSB7XG4gICAgICAgICAgY2FzZSAyMDM6XG4gICAgICAgICAgICBpZiAoMTExID4gYi5jaGFyQ29kZUF0KDgpKSBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIwNzpcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArICgxMDIgPCBtID8gJ2lubGluZS0nIDogJycpICsgJ2JveCcpICsgJzsnICsgYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGEucmVwbGFjZShiLCAnLW1zLScgKyBiICsgJ2JveCcpICsgJzsnICsgYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhICsgJzsnO1xuXG4gICAgICBjYXNlIDkzODpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNSkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDYpKSB7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICByZXR1cm4gYiA9IGEucmVwbGFjZSgnLWl0ZW1zJywgJycpLCAnLXdlYmtpdC0nICsgYSArICctd2Via2l0LWJveC0nICsgYiArICctbXMtZmxleC0nICsgYiArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1pdGVtLScgKyBhLnJlcGxhY2UoYmEsICcnKSArIGE7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWxpbmUtcGFjaycgKyBhLnJlcGxhY2UoJ2FsaWduLWNvbnRlbnQnLCAnJykucmVwbGFjZShiYSwgJycpICsgYTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NzM6XG4gICAgICBjYXNlIDk4OTpcbiAgICAgICAgaWYgKDQ1ICE9PSBhLmNoYXJDb2RlQXQoMykgfHwgMTIyID09PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMTpcbiAgICAgIGNhc2UgOTUzOlxuICAgICAgICBpZiAoITAgPT09IGxhLnRlc3QoZCkpIHJldHVybiAxMTUgPT09IChiID0gZC5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JykgKyAxKSkuY2hhckNvZGVBdCgwKSA/IFAoZC5yZXBsYWNlKCdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGMsIGUsIGgpLnJlcGxhY2UoJzpmaWxsLWF2YWlsYWJsZScsICc6c3RyZXRjaCcpIDogYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArIGEucmVwbGFjZShiLCAnLW1vei0nICsgYi5yZXBsYWNlKCdmaWxsLScsICcnKSkgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NjI6XG4gICAgICAgIGlmIChhID0gJy13ZWJraXQtJyArIGEgKyAoMTAyID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLW1zLScgKyBhIDogJycpICsgYSwgMjExID09PSBlICsgaCAmJiAxMDUgPT09IGEuY2hhckNvZGVBdCgxMykgJiYgMCA8IGEuaW5kZXhPZigndHJhbnNmb3JtJywgMTApKSByZXR1cm4gYS5zdWJzdHJpbmcoMCwgYS5pbmRleE9mKCc7JywgMjcpICsgMSkucmVwbGFjZShtYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEwoZCwgYykge1xuICAgIHZhciBlID0gZC5pbmRleE9mKDEgPT09IGMgPyAnOicgOiAneycpLFxuICAgICAgICBoID0gZC5zdWJzdHJpbmcoMCwgMyAhPT0gYyA/IGUgOiAxMCk7XG4gICAgZSA9IGQuc3Vic3RyaW5nKGUgKyAxLCBkLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBSKDIgIT09IGMgPyBoIDogaC5yZXBsYWNlKG5hLCAnJDEnKSwgZSwgYyk7XG4gIH1cblxuICBmdW5jdGlvbiBlYShkLCBjKSB7XG4gICAgdmFyIGUgPSBQKGMsIGMuY2hhckNvZGVBdCgwKSwgYy5jaGFyQ29kZUF0KDEpLCBjLmNoYXJDb2RlQXQoMikpO1xuICAgIHJldHVybiBlICE9PSBjICsgJzsnID8gZS5yZXBsYWNlKG9hLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcgKyBjICsgJyknO1xuICB9XG5cbiAgZnVuY3Rpb24gSChkLCBjLCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSB7XG4gICAgZm9yICh2YXIgZyA9IDAsIHggPSBjLCB3OyBnIDwgQTsgKytnKSB7XG4gICAgICBzd2l0Y2ggKHcgPSBTW2ddLmNhbGwoQiwgZCwgeCwgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkpIHtcbiAgICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICAgIGNhc2UgITE6XG4gICAgICAgIGNhc2UgITA6XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHggPSB3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICE9PSBjKSByZXR1cm4geDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFQoZCkge1xuICAgIHN3aXRjaCAoZCkge1xuICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIEEgPSBTLmxlbmd0aCA9IDA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGQpIFNbQSsrXSA9IGQ7ZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkKSBmb3IgKHZhciBjID0gMCwgZSA9IGQubGVuZ3RoOyBjIDwgZTsgKytjKSB7XG4gICAgICAgICAgVChkW2NdKTtcbiAgICAgICAgfSBlbHNlIFkgPSAhIWQgfCAwO1xuICAgIH1cblxuICAgIHJldHVybiBUO1xuICB9XG5cbiAgZnVuY3Rpb24gVShkKSB7XG4gICAgZCA9IGQucHJlZml4O1xuICAgIHZvaWQgMCAhPT0gZCAmJiAoUiA9IG51bGwsIGQgPyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZCA/IHcgPSAxIDogKHcgPSAyLCBSID0gZCkgOiB3ID0gMCk7XG4gICAgcmV0dXJuIFU7XG4gIH1cblxuICBmdW5jdGlvbiBCKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQ7XG4gICAgMzMgPiBlLmNoYXJDb2RlQXQoMCkgJiYgKGUgPSBlLnRyaW0oKSk7XG4gICAgViA9IGU7XG4gICAgZSA9IFtWXTtcblxuICAgIGlmICgwIDwgQSkge1xuICAgICAgdmFyIGggPSBIKC0xLCBjLCBlLCBlLCBELCB6LCAwLCAwLCAwLCAwKTtcbiAgICAgIHZvaWQgMCAhPT0gaCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGggJiYgKGMgPSBoKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IE0oTywgZSwgYywgMCwgMCk7XG4gICAgMCA8IEEgJiYgKGggPSBIKC0yLCBhLCBlLCBlLCBELCB6LCBhLmxlbmd0aCwgMCwgMCwgMCksIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGgpKTtcbiAgICBWID0gJyc7XG4gICAgRSA9IDA7XG4gICAgeiA9IEQgPSAxO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGNhID0gL15cXDArL2csXG4gICAgICBOID0gL1tcXDBcXHJcXGZdL2csXG4gICAgICBhYSA9IC86ICovZyxcbiAgICAgIGthID0gL3pvb3xncmEvLFxuICAgICAgbWEgPSAvKFssOiBdKSh0cmFuc2Zvcm0pL2csXG4gICAgICBpYSA9IC8sXFxyKz8vZyxcbiAgICAgIEYgPSAvKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyxcbiAgICAgIGZhID0gL0Aoa1xcdyspXFxzKihcXFMqKVxccyovLFxuICAgICAgUSA9IC86OihwbGFjZSkvZyxcbiAgICAgIGhhID0gLzoocmVhZC1vbmx5KS9nLFxuICAgICAgRyA9IC9bc3ZoXVxcdystW3RibHJdezJ9LyxcbiAgICAgIGRhID0gL1xcKFxccyooLiopXFxzKlxcKS9nLFxuICAgICAgb2EgPSAvKFtcXHNcXFNdKj8pOy9nLFxuICAgICAgYmEgPSAvLXNlbGZ8ZmxleC0vZyxcbiAgICAgIG5hID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLFxuICAgICAgbGEgPSAvc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLFxuICAgICAgamEgPSAvKFteLV0pKGltYWdlLXNldFxcKCkvLFxuICAgICAgeiA9IDEsXG4gICAgICBEID0gMSxcbiAgICAgIEUgPSAwLFxuICAgICAgdyA9IDEsXG4gICAgICBPID0gW10sXG4gICAgICBTID0gW10sXG4gICAgICBBID0gMCxcbiAgICAgIFIgPSBudWxsLFxuICAgICAgWSA9IDAsXG4gICAgICBWID0gJyc7XG4gIEIudXNlID0gVDtcbiAgQi5zZXQgPSBVO1xuICB2b2lkIDAgIT09IFcgJiYgVShXKTtcbiAgcmV0dXJuIEI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpc19taW47XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IERlZ3JlZVByb2dyYW1FZGl0Rm9ybSBmcm9tICdjb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybSc7XG5cbmltcG9ydCAnLi9hZG1pbi5zY3NzJztcblxuY29uc3QgRWRpdCA9ICgpID0+IHtcbiAgICBjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiB7Li4uYmxvY2tQcm9wc30+XG4gICAgICAgICAgICA8RGVncmVlUHJvZ3JhbUVkaXRGb3JtIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9FZGl0JztcblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuICAgIC4uLm1ldGFkYXRhLFxuICAgIGVkaXQ6IEVkaXQsXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFJpY2hUZXh0LCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJy4uLy4uL2RlZnMvY29tbW9uJztcblxuY29uc3QgRWRpdCA9ICh7IGF0dHJpYnV0ZXM6IHsgY29udGVudCB9LCBzZXRBdHRyaWJ1dGVzIH06IEJsb2NrPHsgY29udGVudDogc3RyaW5nIH0+KSA9PiB7XG4gICAgY29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgICAgey4uLmJsb2NrUHJvcHN9XG4gICAgICAgICAgICB0YWdOYW1lPVwiZGRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXh0Q29udGVudCkgPT4gc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IG5leHRDb250ZW50IH0pfVxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ0Rlc2NyaXB0aW9uIGRldGFpbHMg4oCmJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUmljaFRleHQsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7IEJsb2NrIH0gZnJvbSAnLi4vLi4vZGVmcy9jb21tb24nO1xuXG5jb25zdCBTYXZlID0gKHsgYXR0cmlidXRlczogeyBjb250ZW50IH0gfTogQmxvY2s8eyBjb250ZW50OiBzdHJpbmcgfT4pID0+IHtcbiAgICBjb25zdCBzYXZlQmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMuc2F2ZSgpO1xuICAgIHJldHVybiA8UmljaFRleHQuQ29udGVudCB7Li4uc2F2ZUJsb2NrUHJvcHN9IHRhZ05hbWU9XCJkZFwiIHZhbHVlPXtjb250ZW50fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmU7XG4iLCJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgRWRpdCBmcm9tICcuL0VkaXQnO1xuaW1wb3J0IFNhdmUgZnJvbSAnLi9TYXZlJztcblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuICAgIC4uLm1ldGFkYXRhLFxuICAgIGVkaXQ6IEVkaXQsXG4gICAgc2F2ZTogU2F2ZSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5uZXJCbG9ja3MsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWydmYXUvZGVzY3JpcHRpb24tdGVybScsICdmYXUvZGVzY3JpcHRpb24tZGV0YWlscyddO1xuY29uc3QgVEVNUExBVEUgPSBbWydmYXUvZGVzY3JpcHRpb24tdGVybSddLCBbJ2ZhdS9kZXNjcmlwdGlvbi1kZXRhaWxzJ11dO1xuXG5jb25zdCBFZGl0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGwgey4uLmJsb2NrUHJvcHN9PlxuICAgICAgICAgICAgPElubmVyQmxvY2tzXG4gICAgICAgICAgICAgICAgYWxsb3dlZEJsb2Nrcz17QUxMT1dFRF9CTE9DS1N9XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU9e1RFTVBMQVRFfVxuICAgICAgICAgICAgICAgIHJlbmRlckFwcGVuZGVyPXtJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IElubmVyQmxvY2tzLCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5jb25zdCBTYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzLnNhdmUoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkbCB7Li4uYmxvY2tQcm9wc30+XG4gICAgICAgICAgICA8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuICAgICAgICA8L2RsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9FZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vU2F2ZSc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhLm5hbWUsIHtcbiAgICAuLi5tZXRhZGF0YSxcbiAgICBlZGl0OiBFZGl0LFxuICAgIHNhdmU6IFNhdmUsXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFJpY2hUZXh0LCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJy4uLy4uL2RlZnMvY29tbW9uJztcblxuY29uc3QgRWRpdCA9ICh7IGF0dHJpYnV0ZXM6IHsgY29udGVudCB9LCBzZXRBdHRyaWJ1dGVzIH06IEJsb2NrPHsgY29udGVudDogc3RyaW5nIH0+KSA9PiB7XG4gICAgY29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgICAgey4uLmJsb2NrUHJvcHN9XG4gICAgICAgICAgICB0YWdOYW1lPVwiZHRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXh0Q29udGVudCkgPT4gc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IG5leHRDb250ZW50IH0pfVxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ0Rlc2NyaXB0aW9uIHRlcm0g4oCmJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpfVxuICAgICAgICAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUmljaFRleHQsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7IEJsb2NrIH0gZnJvbSAnLi4vLi4vZGVmcy9jb21tb24nO1xuXG5jb25zdCBTYXZlID0gKHsgYXR0cmlidXRlczogeyBjb250ZW50IH0gfTogQmxvY2s8eyBjb250ZW50OiBzdHJpbmcgfT4pID0+IHtcbiAgICBjb25zdCBzYXZlQmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMuc2F2ZSgpO1xuICAgIHJldHVybiA8UmljaFRleHQuQ29udGVudCB7Li4uc2F2ZUJsb2NrUHJvcHN9IHRhZ05hbWU9XCJkdFwiIHZhbHVlPXtjb250ZW50fSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmU7XG4iLCJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgRWRpdCBmcm9tICcuL0VkaXQnO1xuaW1wb3J0IFNhdmUgZnJvbSAnLi9TYXZlJztcblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuICAgIC4uLm1ldGFkYXRhLFxuICAgIGVkaXQ6IEVkaXQsXG4gICAgc2F2ZTogU2F2ZSxcbn0pO1xuIiwiaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmZ1bmN0aW9uIGFkZEhlYWRpbmdCbG9ja1ZhcmlhdGlvbnMoc2V0dGluZ3MsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gJ2NvcmUvaGVhZGluZycpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgICB2YXJpYXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0gzJyxcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIMycsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyBsZXZlbDogMyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSDQnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSDQnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgbGV2ZWw6IDQgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0g1JyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0g1JyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IGxldmVsOiA1IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG59XG5cbmFkZEZpbHRlcignYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJywgJ2ZhdS92YXJpYXRpb25zL2hlYWRpbmcnLCBhZGRIZWFkaW5nQmxvY2tWYXJpYXRpb25zKTtcbiIsImltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5mdW5jdGlvbiBhZGRTaG9ydGNvZGVCbG9ja1ZhcmlhdGlvbnMoc2V0dGluZ3MsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gJ2NvcmUvc2hvcnRjb2RlJykge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICAgIHZhcmlhdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQWxlcnQnLFxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHRleHQ6ICdbYWxlcnRdJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ29udGFjdCcsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb250YWN0JyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHRleHQ6ICdbY29udGFjdF0nIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdWaWRlbycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWaWRlbycsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyB0ZXh0OiAnW2ZhdS12aWRlb10nIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG59XG5cbmFkZEZpbHRlcignYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJywgJ2ZhdS92YXJpYXRpb25zL3Nob3J0Y29kZScsIGFkZFNob3J0Y29kZUJsb2NrVmFyaWF0aW9ucyk7XG4iLCJpbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuY29uc3QgREVGQVVMVF9TSVpFID0gJ3RodW1ibmFpbCc7XG5cbmFkZEZpbHRlcihcbiAgICAnZWRpdG9yLlBvc3RGZWF0dXJlZEltYWdlLmltYWdlU2l6ZScsXG4gICAgJ2ZhdS9kZWdyZWUtcHJvZ3JhbS1pbWFnZS1zaXplJyxcbiAgICAoKSA9PiBERUZBVUxUX1NJWkUsXG4pO1xuIiwiaW1wb3J0ICcuL2RlZmF1bHRJbWFnZVNpemUnO1xuaW1wb3J0ICcuL2FkZEhlYWRpbmdCbG9ja1ZhcmlhdGlvbnMnO1xuaW1wb3J0ICcuL2FkZFNob3J0Y29kZUJsb2NrVmFyaWF0aW9ucyc7XG5pbXBvcnQgJy4vcmVzdHJpY3RBbGxvd2VkVGV4dEZvcm1hdHMnO1xuIiwiaW1wb3J0IHsgZGlzcGF0Y2gsIHNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgZG9tUmVhZHkgZnJvbSAnQHdvcmRwcmVzcy9kb20tcmVhZHknO1xuaW1wb3J0IHsgc3RvcmUgYXMgcmljaFRleHRTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvcmljaC10ZXh0JztcblxuaW50ZXJmYWNlIEZvcm1hdFR5cGUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufVxuXG5jb25zdCBBTExPV0VEX0ZPUk1BVFMgPSBbJ2NvcmUvYm9sZCcsICdjb3JlL2xpbmsnXTtcblxuZG9tUmVhZHkoKCkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRGb3JtYXRzID0gc2VsZWN0KHJpY2hUZXh0U3RvcmUpLmdldEZvcm1hdFR5cGVzKCkgYXMgQXJyYXk8Rm9ybWF0VHlwZT47XG4gICAgY29uc3QgZm9ybWF0TmFtZXNUb0Rpc2FibGUgPSA8QXJyYXk8c3RyaW5nPj5bXTtcbiAgICByZWdpc3RlcmVkRm9ybWF0cy5mb3JFYWNoKChmb3JtYXRUeXBlKSA9PiB7XG4gICAgICAgIGlmIChBTExPV0VEX0ZPUk1BVFMuaW5jbHVkZXMoZm9ybWF0VHlwZS5uYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0TmFtZXNUb0Rpc2FibGUucHVzaChmb3JtYXRUeXBlLm5hbWUpO1xuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2gocmljaFRleHRTdG9yZSkucmVtb3ZlRm9ybWF0VHlwZXMoZm9ybWF0TmFtZXNUb0Rpc2FibGUpO1xufSk7XG4iLCJpbXBvcnQgJy4vZGVncmVlLXByb2dyYW0tZm9ybSc7XG5pbXBvcnQgJy4vZGVzY3JpcHRpb24tZGV0YWlscyc7XG5pbXBvcnQgJy4vZGVzY3JpcHRpb24tbGlzdCc7XG5pbXBvcnQgJy4vZGVzY3JpcHRpb24tdGVybSc7XG5pbXBvcnQgJy4vZmlsdGVycyc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qKlxuICogT3JpZ2luYWwgY29tcG9uZW50OlxuICogQGxpbmsgaHR0cHM6Ly9jb2RlcGVuLmlvL2JicmFkeS9wZW4vb3pNaktFXG4gKi9cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBwZXJjZW50YWdlOiBudW1iZXI7XG4gICAgc3F1YXJlU2l6ZT86IG51bWJlcjtcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbn1cblxuY29uc3QgREVGQVVMVF9TUVVBUkVfU0laRSA9IDEwMDtcbmNvbnN0IERFRkFVTFRfU1RST0tFX1dJRFRIID0gMjtcblxuY29uc3QgU3R5bGVkU3ZnQ2lyY2xlID0gc3R5bGVkLnN2Z2BcbiAgICBzdHJva2U6IHZhcigtLXdwLWFkbWluLXRoZW1lLWNvbG9yLCAjMDA3Y2JhKTtcbmA7XG5cbmNvbnN0IENpcmN1bGFyUHJvZ3Jlc3NCYXIgPSAoe1xuICAgIHBlcmNlbnRhZ2UsXG4gICAgc3F1YXJlU2l6ZSA9IERFRkFVTFRfU1FVQVJFX1NJWkUsXG4gICAgc3Ryb2tlV2lkdGggPSBERUZBVUxUX1NUUk9LRV9XSURUSCxcbn06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgcmFkaXVzID0gKHNxdWFyZVNpemUgLSBzdHJva2VXaWR0aCkgLyAyO1xuICAgIGNvbnN0IHZpZXdCb3ggPSBgMCAwICR7c3F1YXJlU2l6ZX0gJHtzcXVhcmVTaXplfWA7XG4gICAgY29uc3QgZGFzaEFycmF5ID0gcmFkaXVzICogTWF0aC5QSSAqIDI7XG4gICAgY29uc3QgZGFzaE9mZnNldCA9IGRhc2hBcnJheSAtIChkYXNoQXJyYXkgKiBwZXJjZW50YWdlKSAvIDEwMDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRTdmdDaXJjbGUgd2lkdGg9e3NxdWFyZVNpemV9IGhlaWdodD17c3F1YXJlU2l6ZX0gdmlld0JveD17dmlld0JveH0+XG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLWJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgIGN4PXtzcXVhcmVTaXplIC8gMn1cbiAgICAgICAgICAgICAgICBjeT17c3F1YXJlU2l6ZSAvIDJ9XG4gICAgICAgICAgICAgICAgcj17cmFkaXVzfVxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtgJHtzdHJva2VXaWR0aH1weGB9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cInJnYmEoMTY3LCAxNTIsIDE4MSwgMC4zKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1wcm9ncmVzc1wiXG4gICAgICAgICAgICAgICAgY3g9e3NxdWFyZVNpemUgLyAyfVxuICAgICAgICAgICAgICAgIGN5PXtzcXVhcmVTaXplIC8gMn1cbiAgICAgICAgICAgICAgICByPXtyYWRpdXN9XG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtgJHtzdHJva2VXaWR0aH1weGB9XG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgcHJvZ3Jlc3MgbWFya2VyIGF0IDEyIE8nQ2xvY2tcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2Byb3RhdGUoLTkwICR7c3F1YXJlU2l6ZSAvIDJ9ICR7c3F1YXJlU2l6ZSAvIDJ9KWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBkYXNoQXJyYXksXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGRhc2hPZmZzZXQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvU3R5bGVkU3ZnQ2lyY2xlPlxuICAgICk7XG59O1xuXG5DaXJjdWxhclByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzcXVhcmVTaXplOiBERUZBVUxUX1NRVUFSRV9TSVpFLFxuICAgIHN0cm9rZVdpZHRoOiBERUZBVUxUX1NUUk9LRV9XSURUSCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENpcmN1bGFyUHJvZ3Jlc3NCYXI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DaXJjdWxhclByb2dyZXNzJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgICBCbG9ja0VkaXRvclByb3ZpZGVyLFxuICAgIEJsb2NrTGlzdCxcbiAgICBCbG9ja1Rvb2xzLFxuICAgIE9ic2VydmVUeXBpbmcsXG4gICAgV3JpdGluZ0Zsb3csXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHBhcnNlLCBzZXJpYWxpemUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgeyBQb3BvdmVyLCBTbG90RmlsbFByb3ZpZGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuaW1wb3J0IHVzZUJsb2NrRWRpdG9yU2V0dGluZ3MgZnJvbSAnLi91c2VCbG9ja0VkaXRvclNldHRpbmdzJztcblxuaW50ZXJmYWNlIENvbnRlbnRGaWVsZFByb3BzIHtcbiAgICBjb250ZW50OiBzdHJpbmc7XG5cbiAgICBvbkNoYW5nZShjb250ZW50OiBzdHJpbmcpOiB2b2lkO1xufVxuXG5jb25zdCBTdHlsZWRFZGl0b3JXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzU3NTc1O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5gO1xuXG4vKipcbiAqIFByb3ZpZGVzIHJlc3RyaWN0ZWQgQmxvY2sgRWRpdG9yIFVJLlxuICogQWxsb3dlZCBibG9ja3MgYW5kIGZvcm1hdHRpbmcgb3B0aW9ucyBhcmUgbGltaXRlZC5cbiAqXG4gKiBAcGFyYW0gY29udGVudCBTZXJpYWxpemVkIGJsb2NrcyBzdHJpbmdcbiAqIEBwYXJhbSBvbkNoYW5nZSBDYWxsYmFjayB0byB1cGRhdGUgY29udGVudFxuICovXG5jb25zdCBDb250ZW50RmllbGQgPSAoeyBjb250ZW50LCBvbkNoYW5nZSB9OiBDb250ZW50RmllbGRQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50QmxvY2tzLCBzZXRDdXJyZW50QmxvY2tzXSA9IHVzZVN0YXRlKHBhcnNlKGNvbnRlbnQpKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgb25DaGFuZ2VgIGNhbGxiYWNrIGlzIGZpcmVkIG9ubHkgd2hlbiBjaGFuZ2VzIGFyZSBjb25zaWRlcmVkIGZpbmFsLFxuICAgICAqIGkuZS4sIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgdG8gYW5vdGhlciBibG9jay5cbiAgICAgKiBUbyBwcmV2ZW50IGluY29tcGxldGUgcGVyc2lzdGluZywgd2UgaGF2ZSB0byBzZXJpYWxpemUgdGhlIGJsb2NrcyBgb25JbnB1dGAuXG4gICAgICogQnV0IHNpbmNlIHRoZSBjYWxsYmFjayBydW5zIG9uIGV2ZXJ5IGF0dHJpYnV0ZSBjaGFuZ2UsXG4gICAgICogdGhlIGRlYm91bmNlZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvbiBpcyB1c2VkIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuXG4gICAgICovXG4gICAgY29uc3QgdXBkYXRlVmFsdWUgPSB1c2VDYWxsYmFjaygoYmxvY2tzKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHNlcmlhbGl6ZShibG9ja3MpKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXBkYXRlVmFsdWVEZWJvdW5jZWQgPSB1c2VEZWJvdW5jZSh1cGRhdGVWYWx1ZSwgNTAwKTtcblxuICAgIGNvbnN0IHNldHRpbmdzID0gdXNlQmxvY2tFZGl0b3JTZXR0aW5ncygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJsb2NrRWRpdG9yUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50QmxvY2tzfVxuICAgICAgICAgICAgb25JbnB1dD17KGJsb2NrcykgPT4ge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRCbG9ja3MoYmxvY2tzKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZURlYm91bmNlZChibG9ja3MpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoYmxvY2tzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEJsb2NrcyhibG9ja3MpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGJsb2Nrcyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICA+XG4gICAgICAgICAgICA8U2xvdEZpbGxQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8QmxvY2tUb29scz5cbiAgICAgICAgICAgICAgICAgICAgPFdyaXRpbmdGbG93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE9ic2VydmVUeXBpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEVkaXRvcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja0xpc3QgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZEVkaXRvcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L09ic2VydmVUeXBpbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvV3JpdGluZ0Zsb3c+XG4gICAgICAgICAgICAgICAgPC9CbG9ja1Rvb2xzPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyLlNsb3QgLz5cbiAgICAgICAgICAgIDwvU2xvdEZpbGxQcm92aWRlcj5cbiAgICAgICAgPC9CbG9ja0VkaXRvclByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50RmllbGQ7XG4iLCJleHBvcnQgY29uc3QgQUxMT1dFRF9CTE9DS19UWVBFUyA9IFtcbiAgICAnY29yZS9wYXJhZ3JhcGgnLFxuICAgICdjb3JlL2ltYWdlJyxcbiAgICAnY29yZS9saXN0JyxcbiAgICAnY29yZS9saXN0LWl0ZW0nLFxuICAgICdjb3JlL2hlYWRpbmcnLFxuICAgICdjb3JlL3Nob3J0Y29kZScsXG4gICAgJ2ZhdS9kZXNjcmlwdGlvbi1saXN0JyxcbiAgICAnZmF1L2Rlc2NyaXB0aW9uLXRlcm0nLFxuICAgICdmYXUvZGVzY3JpcHRpb24tZGV0YWlscycsXG5dO1xuXG5leHBvcnQgY29uc3QgQUxMT1dFRF9NSU1FX1RZUEVTID0ge1xuICAgICdqcGd8anBlZ3xqcGUnOiAnaW1hZ2UvanBlZycsXG4gICAgZ2lmOiAnaW1hZ2UvZ2lmJyxcbiAgICBwbmc6ICdpbWFnZS9wbmcnLFxufTtcbiIsImltcG9ydCAnLi9oaWRlLXRvb2xiYXItYnV0dG9ucy5zY3NzJztcblxuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGVudEZpZWxkJztcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgX19leHBlcmltZW50YWxGZXRjaExpbmtTdWdnZXN0aW9ucyBhcyBmZXRjaExpbmtTdWdnZXN0aW9ucyxcbiAgICBfX2V4cGVyaW1lbnRhbEZldGNoVXJsRGF0YSBhcyBmZXRjaFVybERhdGEsXG4gICAgc3RvcmUgYXMgY29yZVN0b3JlLFxufSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YSc7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXBsb2FkTWVkaWEgfSBmcm9tICdAd29yZHByZXNzL21lZGlhLXV0aWxzJztcblxuaW1wb3J0IHsgQUxMT1dFRF9CTE9DS19UWVBFUywgQUxMT1dFRF9NSU1FX1RZUEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBhbGxvd2VkQmxvY2tUeXBlczogQUxMT1dFRF9CTE9DS19UWVBFUyxcbn07XG5cbmNvbnN0IHVzZUJsb2NrRWRpdG9yU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFzVXBsb2FkUGVybWlzc2lvbnMgPSB1c2VTZWxlY3QoXG4gICAgICAgIChzZWxlY3QpID0+IHNlbGVjdChjb3JlU3RvcmUpLmNhblVzZXIoJ2NyZWF0ZScsICdtZWRpYScpID8/IGZhbHNlLFxuICAgICAgICBbXSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgbWVkaWFVcGxvYWRCbG9ja0VkaXRvcjtcbiAgICAgICAgaWYgKGhhc1VwbG9hZFBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgICBtZWRpYVVwbG9hZEJsb2NrRWRpdG9yID0gKHsgb25FcnJvciwgLi4uYXJndW1lbnRzT2JqZWN0IH0pID0+IHtcbiAgICAgICAgICAgICAgICB1cGxvYWRNZWRpYSh7XG4gICAgICAgICAgICAgICAgICAgIHdwQWxsb3dlZE1pbWVUeXBlczogQUxMT1dFRF9NSU1FX1RZUEVTLFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAoeyBtZXNzYWdlIH0pID0+IG9uRXJyb3IobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgICAgIC4uLmFyZ3VtZW50c09iamVjdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uU0VUVElOR1MsXG4gICAgICAgICAgICBtZWRpYVVwbG9hZDogbWVkaWFVcGxvYWRCbG9ja0VkaXRvcixcbiAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsRmV0Y2hMaW5rU3VnZ2VzdGlvbnM6IChzZWFyY2gsIHNlYXJjaE9wdGlvbnMpID0+XG4gICAgICAgICAgICAgICAgZmV0Y2hMaW5rU3VnZ2VzdGlvbnMoc2VhcmNoLCBzZWFyY2hPcHRpb25zKSxcbiAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsRmV0Y2hSaWNoVXJsRGF0YTogZmV0Y2hVcmxEYXRhLFxuICAgICAgICB9O1xuICAgIH0sIFtoYXNVcGxvYWRQZXJtaXNzaW9uc10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQmxvY2tFZGl0b3JTZXR0aW5ncztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZsZXgsIEZsZXhCbG9jaywgU3Bpbm5lciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IHVzZUNvbWJpbmF0aW9uT2ZEZWdyZWVQcm9ncmFtRW5hYmxlZCB9IGZyb20gJ2hvb2tzL3VzZUNvbmRpdGlvbmFsRmllbGRzJztcblxuaW1wb3J0IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eSBmcm9tICcuLi8uLi9ob29rcy91c2VEZWdyZWVQcm9ncmFtUHJvcGVydHknO1xuaW1wb3J0IFJlbGF0ZWREZWdyZWVQcm9ncmFtcyBmcm9tICcuL1JlbGF0ZWREZWdyZWVQcm9ncmFtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMoKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgICBjb25zdCBlbmFibGVkID0gdXNlQ29tYmluYXRpb25PZkRlZ3JlZVByb2dyYW1FbmFibGVkKCk7XG4gICAgY29uc3QgW2NvbWJpbmF0aW9ucywgc2V0Q29tYmluYXRpb25zXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxBcnJheTxudW1iZXI+PignY29tYmluYXRpb25zJyk7XG4gICAgY29uc3QgW2xpbWl0ZWRDb21iaW5hdGlvbnMsIHNldExpbWl0ZWRDb21iaW5hdGlvbnNdID1cbiAgICAgICAgdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PEFycmF5PG51bWJlcj4+KCdsaW1pdGVkX2NvbWJpbmF0aW9ucycpO1xuXG4gICAgaWYgKCFlbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb21iaW5hdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBsaW1pdGVkQ29tYmluYXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4QmxvY2s+XG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4QmxvY2s+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxSZWxhdGVkRGVncmVlUHJvZ3JhbXNcbiAgICAgICAgICAgICAgICByZWxhdGVkRGVncmVlUHJvZ3JhbUlkcz17Y29tYmluYXRpb25zfVxuICAgICAgICAgICAgICAgIHNldFJlbGF0ZWREZWdyZWVQcm9ncmFtcz17c2V0Q29tYmluYXRpb25zfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfeCgnQ29tYmluYXRpb25zJywgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXt7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkOiBfeCgnQ29tYmluYXRpb24gYWRkZWQnLCAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyksXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbWJpbmF0aW9uIHJlbW92ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbW92ZSBjb21iaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsSW52YWxpZDogX3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBjb21iaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVsYXRlZERlZ3JlZVByb2dyYW1zXG4gICAgICAgICAgICAgICAgcmVsYXRlZERlZ3JlZVByb2dyYW1JZHM9e2xpbWl0ZWRDb21iaW5hdGlvbnN9XG4gICAgICAgICAgICAgICAgc2V0UmVsYXRlZERlZ3JlZVByb2dyYW1zPXtzZXRMaW1pdGVkQ29tYmluYXRpb25zfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfeCgnTGltaXRlZCBDb21iaW5hdGlvbnMnLCAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyl9XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgYWRkZWQ6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xpbWl0ZWQgY29tYmluYXRpb24gYWRkZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdMaW1pdGVkIGNvbWJpbmF0aW9uIHJlbW92ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbW92ZSBsaW1pdGVkIGNvbWJpbmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBmaWVsZCBsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX19leHBlcmltZW50YWxJbnZhbGlkOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIGxpbWl0ZWQgY29tYmluYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltbXV0YWJsZSB9IGZyb20gJ2ltbWVyJztcblxuaW1wb3J0IHsgY29tcG9zZSwgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcblxuaW1wb3J0IHsgRGVncmVlUHJvZ3JhbVBvc3QgfSBmcm9tICcuLi8uLi9kZWZzL2RlZ3JlZS1wcm9ncmFtLWRhdGEnO1xuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm9wcyB9IGZyb20gJy4uLy4uL2RlZnMvZW50aXR5LXNlbGVjdG9yJztcbmltcG9ydCBFbnRpdHlTZWxlY3RvciBmcm9tICcuLi9FbnRpdHlTZWxlY3Rvcic7XG5pbXBvcnQgeyB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzLCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMgfSBmcm9tICcuL2hvYyc7XG5cbmV4cG9ydCB0eXBlIFJlbGF0ZWREZWdyZWVQcm9ncmFtc1Byb3BzID0gUGljazxFbnRpdHlTZWxlY3RvclByb3BzLCAnbGFiZWwnIHwgJ21lc3NhZ2VzJz4gJiB7XG4gICAgcmVsYXRlZERlZ3JlZVByb2dyYW1JZHM6IEltbXV0YWJsZTxBcnJheTxudW1iZXI+PjtcbiAgICBzZXRSZWxhdGVkRGVncmVlUHJvZ3JhbXModmFsdWU6IEFycmF5PG51bWJlcj4pOiB2b2lkO1xufTtcblxuY29uc3Qgd2l0aFJlbGF0ZWREZWdyZWVQcm9ncmFtUHJvcHMgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChcbiAgICAoV3JhcHBlZENvbXBvbmVudDogUmVhY3QuRkM8UGFydGlhbDxFbnRpdHlTZWxlY3RvclByb3BzPj4pID0+XG4gICAgICAgICh7IHNldFJlbGF0ZWREZWdyZWVQcm9ncmFtcywgLi4ub3RoZXJzIH06IFJlbGF0ZWREZWdyZWVQcm9ncmFtc1Byb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eVRvVG9rZW49eyhwb3N0OiBEZWdyZWVQcm9ncmFtUG9zdCkgPT4gcG9zdC5kZWdyZWVfcHJvZ3JhbS50aXRsZS5kZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwb3N0czogQXJyYXk8UG9zdD4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbGF0ZWREZWdyZWVQcm9ncmFtcyhwb3N0cy5tYXAoKHBvc3QpID0+IHBvc3QuaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbWF4U3VnZ2VzdGlvbnM9ezIwfVxuICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICd3aXRoUmVsYXRlZERlZ3JlZVByb2dyYW1Qcm9wcycsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICAgIHdpdGhSZWxhdGVkRGVncmVlUHJvZ3JhbVByb3BzLFxuICAgIHdpdGhEZWdyZWVQcm9ncmFtUG9zdHMsXG4gICAgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVBvc3RzLFxuKShFbnRpdHlTZWxlY3RvcikgYXMgUmVhY3QuRkM8UmVsYXRlZERlZ3JlZVByb2dyYW1zUHJvcHM+O1xuIiwiaW1wb3J0IHdpdGhEZWdyZWVQcm9ncmFtUG9zdHMgZnJvbSAnLi93aXRoRGVncmVlUHJvZ3JhbVBvc3RzJztcbmltcG9ydCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMgZnJvbSAnLi93aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMnO1xuXG5leHBvcnQgeyB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzLCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMgfTtcbiIsImltcG9ydCB7IFBvc3QsIHN0b3JlIGFzIGNvcmVTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgc2VydmVyRGF0YSBmcm9tICd1dGlsL3NlcnZlckRhdGEnO1xuXG5pbXBvcnQgeyBSZWxhdGVkRGVncmVlUHJvZ3JhbXNQcm9wcyB9IGZyb20gJy4uL2RlZnMnO1xuXG5jb25zdCB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzID0gd2l0aFNlbGVjdChcbiAgICAoc2VsZWN0LCBvd25Qcm9wczogUmVsYXRlZERlZ3JlZVByb2dyYW1zUHJvcHMpOiB7IGVudGl0aWVzOiBBcnJheTxQb3N0PCd2aWV3Jz4+IH0gPT4ge1xuICAgICAgICBjb25zdCB7IGdldEVudGl0eVJlY29yZHMgfSA9IHNlbGVjdChjb3JlU3RvcmUubmFtZSk7XG5cbiAgICAgICAgaWYgKG93blByb3BzLnJlbGF0ZWREZWdyZWVQcm9ncmFtSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbnRpdGllczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IC0xLFxuICAgICAgICAgICAgICAgIG9yZGVyYnk6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBfZmllbGRzOiAnaWQsZGVncmVlX3Byb2dyYW0nLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICd2aWV3JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiBvd25Qcm9wcy5yZWxhdGVkRGVncmVlUHJvZ3JhbUlkcy5qb2luKCcsJyksXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVudGl0aWVzOiBnZXRFbnRpdHlSZWNvcmRzKCdwb3N0VHlwZScsIHNlcnZlckRhdGEoKS5wb3N0VHlwZSwgcXVlcnkpID8/IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBvc3QsIHN0b3JlIGFzIGNvcmVTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgc3RvcmUgYXMgZWRpdG9yU3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5cbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvcHMgfSBmcm9tICdkZWZzJztcblxuY29uc3Qgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVBvc3RzID0gd2l0aFNlbGVjdChcbiAgICAoXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgb3duUHJvcHM6IEVudGl0eVNlbGVjdG9yUHJvcHM8UG9zdDwndmlldyc+PixcbiAgICApOiBQYXJ0aWFsPEVudGl0eVNlbGVjdG9yUHJvcHM8UG9zdDwndmlldyc+Pj4gPT4ge1xuICAgICAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICAgICAgICBjb25zdCB7IGdldEN1cnJlbnRQb3N0IH0gPSBzZWxlY3QoZWRpdG9yU3RvcmUubmFtZSk7XG4gICAgICAgIGNvbnN0IHsgZ2V0RW50aXR5UmVjb3JkcyB9ID0gc2VsZWN0KGNvcmVTdG9yZS5uYW1lKTtcbiAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoZWRFbnRpdGllczogW10sXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3N0ID0gZ2V0Q3VycmVudFBvc3QoKTtcblxuICAgICAgICBjb25zdCBwb3N0cyA9IGdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgc2VydmVyRGF0YSgpLnBvc3RUeXBlLCB7XG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IG93blByb3BzLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAgICAgIG9yZGVyYnk6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgb3JkZXI6ICdhc2MnLFxuICAgICAgICAgICAgICAgIF9maWVsZHM6ICdpZCxkZWdyZWVfcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgY29udGV4dDogJ3ZpZXcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaCxcbiAgICAgICAgICAgIC4uLihjdXJyZW50UG9zdCA/IHsgZXhjbHVkZTogY3VycmVudFBvc3QuaWQgfSA6IHt9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlYXJjaGVkRW50aXRpZXM6IHBvc3RzID8/IFtdLFxuICAgICAgICAgICAgc2V0U2VhcmNoLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHM7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX19leHBlcmltZW50YWxIZWFkaW5nIGFzIEhlYWRpbmcsIEJhc2VDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IFRlcm1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL1Rlcm1TZWxlY3Rvcic7XG5pbXBvcnQgeyB1c2VFZGl0RGVncmVlUHJvZ3JhbSB9IGZyb20gJ2NvbnRleHRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyJztcbmltcG9ydCB7XG4gICAgdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yQmFjaGVsb3JBbmRUZWFjaGluZ0RlZ3JlZXNFbmFibGUsXG4gICAgdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yTWFzdGVyc0RlZ3JlZSxcbiAgICB1c2VBZG1pc3Npb25SZXF1aXJlbWVudHNUZWFjaGluZ0RlZ3JlZUF0SGlnaGVyU2VtZXN0ZXJFbmFibGVkLFxuICAgIHVzZUFwcGxpY2F0aW9uRGVhZGxpbmVTdW1tZXJTZW1lc3RlckVuYWJsZWQsXG4gICAgdXNlTGFuZ3VhZ2VTa2lsbHNGb3JGYWN1bHR5T2ZIdW1hbml0aWVzT25seUVuYWJsZWQsXG59IGZyb20gJ2hvb2tzL3VzZUNvbmRpdGlvbmFsRmllbGRzJztcbmltcG9ydCB7IHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsgfSBmcm9tICd1dGlsL3RyYW5zZm9ybXMnO1xuXG5pbXBvcnQgQ29udGVudEZpZWxkIGZyb20gJy4uL0NvbnRlbnRGaWVsZCc7XG5pbXBvcnQgTXVsdGlsaW5ndWFsQ29udGFpbmVyIGZyb20gJy4vTXVsdGlsaW5ndWFsQ29udGFpbmVyJztcblxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTGluayB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCBTdHlsZWRIZWFkaW5nID0gc3R5bGVkKEhlYWRpbmcpYFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5gO1xuXG5jb25zdCBBZG1pc3Npb25SZXF1aXJlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZXMsIGhhbmRsZUNoYW5nZSB9ID0gdXNlRWRpdERlZ3JlZVByb2dyYW0oKTtcbiAgICBjb25zdCBiYWNoZWxvck9yVGVhY2hpbmdFbmFibGVkID0gdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yQmFjaGVsb3JBbmRUZWFjaGluZ0RlZ3JlZXNFbmFibGUoKTtcbiAgICBjb25zdCB0ZWFjaGluZ0RlZ3JlZUhpZ2hlclNlbWVzdGVyRW5hYmxlZCA9XG4gICAgICAgIHVzZUFkbWlzc2lvblJlcXVpcmVtZW50c1RlYWNoaW5nRGVncmVlQXRIaWdoZXJTZW1lc3RlckVuYWJsZWQoKTtcbiAgICBjb25zdCBtYXN0ZXJzRW5hYmxlZCA9IHVzZUFkbWlzc2lvblJlcXVpcmVtZW50c0Zvck1hc3RlcnNEZWdyZWUoKTtcbiAgICBjb25zdCBodW1hbml0aWVzRmFjdWx0eUxhbmd1YWdlU2tpbGxzRW5hYmxlZCA9XG4gICAgICAgIHVzZUxhbmd1YWdlU2tpbGxzRm9yRmFjdWx0eU9mSHVtYW5pdGllc09ubHlFbmFibGVkKCk7XG4gICAgY29uc3QgYXBwbGljYXRpb25TdW1tZXJEZWFkbGluZUVuYWJsZWQgPSB1c2VBcHBsaWNhdGlvbkRlYWRsaW5lU3VtbWVyU2VtZXN0ZXJFbmFibGVkKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSGVhZGluZyBsZXZlbD17NH0+QmFjaGVsb3IvTGVocmFtdDwvU3R5bGVkSGVhZGluZz5cblxuICAgICAgICAgICAgICAgIHtiYWNoZWxvck9yVGVhY2hpbmdFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cImJhY2hvbGFyLXRlYWNoaW5nLWFkbWlzc2lvbi1yZXF1aXJlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFjaGVsb3JfdGVhY2hpbmdfYWRtaXNzaW9uX3JlcXVpcmVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRtaXNzaW9uIHJlcXVpcmVtZW50cyBmb3IgQmFjaGVsb3Incy90ZWFjaGluZyBkZWdyZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiYmFjaGVsb3JPclRlYWNoaW5nRGVncmVlQWRtaXNzaW9uUmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYWRtaXNzaW9uX3JlcXVpcmVtZW50cy5iYWNoZWxvcl9vcl90ZWFjaGluZ19kZWdyZWUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxMaW5rPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZG1pc3Npb25fcmVxdWlyZW1lbnRzLmJhY2hlbG9yX29yX3RlYWNoaW5nX2RlZ3JlZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3RlYWNoaW5nRGVncmVlSGlnaGVyU2VtZXN0ZXJFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cInRlYWNoaW5nLWhpZ2hlci1zZW1lc3Rlci1hZG1pc3Npb24tcmVxdWlyZW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlYWNoaW5nX2hpZ2hlcl9zZW1lc3Rlcl9hZG1pc3Npb25fcmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FkbWlzc2lvbiByZXF1aXJlbWVudHMgZm9yIGVudGVyaW5nIGEgdGVhY2hpbmcgZGVncmVlIGF0IGEgaGlnaGVyIHNlbWVzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJ0ZWFjaGluZ0RlZ3JlZUhpZ2hlclNlbWVzdGVyQWRtaXNzaW9uUmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYWRtaXNzaW9uX3JlcXVpcmVtZW50cy50ZWFjaGluZ19kZWdyZWVfaGlnaGVyX3NlbWVzdGVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRtaXNzaW9uX3JlcXVpcmVtZW50cy50ZWFjaGluZ19kZWdyZWVfaGlnaGVyX3NlbWVzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSGVhZGluZyBsZXZlbD17NH0+TWFzdGVyPC9TdHlsZWRIZWFkaW5nPlxuXG4gICAgICAgICAgICAgICAge21hc3RlcnNFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cIm1hc3RlcnMtYWRtaXNzaW9uLXJlcXVpcmVtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXN0ZXJfYWRtaXNzaW9uX3JlcXVpcmVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRtaXNzaW9uIHJlcXVpcmVtZW50cyBmb3IgTWFzdGVyJ3MgZGVncmVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwibWFzdGVyRGVncmVlQWRtaXNzaW9uUmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYWRtaXNzaW9uX3JlcXVpcmVtZW50cy5tYXN0ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxMaW5rPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZG1pc3Npb25fcmVxdWlyZW1lbnRzLm1hc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1yZWxhdGVkIGFkbWlzc2lvbiByZXF1aXJlbWVudHMgZm9yIE1hc3RlcidzIGRlZ3JlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cInZvcmF1c2dlZ2FuZ2VuZSBCYWNoZWxvcnN0dWRpZW5nw6RuZ2UsIFF1YWxpZmlrYXRpb25zd2VydGUsIGV0Yy5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE11bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsobGFuZ3VhZ2VDb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjb250ZW50X3JlbGF0ZWRfbWFzdGVyX3JlcXVpcmVtZW50cy4ke2xhbmd1YWdlQ29kZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dmFsdWVzLmNvbnRlbnRfcmVsYXRlZF9tYXN0ZXJfcmVxdWlyZW1lbnRzW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FwcGxpY2F0aW9uIGRlYWRsaW5lIHdpbnRlciBzZW1lc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oJ2FwcGxpY2F0aW9uX2RlYWRsaW5lX3dpbnRlcl9zZW1lc3RlcicsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZXMuYXBwbGljYXRpb25fZGVhZGxpbmVfd2ludGVyX3NlbWVzdGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgICB7YXBwbGljYXRpb25TdW1tZXJEZWFkbGluZUVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYXBwbGljYXRpb24tZGVhZGxpbmUtc3VtbWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXBwbGljYXRpb24gZGVhZGxpbmUgc3VtbWVyIHNlbWVzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oJ2FwcGxpY2F0aW9uX2RlYWRsaW5lX3N1bW1lcl9zZW1lc3RlcicsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3ZhbHVlcy5hcHBsaWNhdGlvbl9kZWFkbGluZV9zdW1tZXJfc2VtZXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSGVhZGluZyBsZXZlbD17NH0+RsO8ciBCYWNoZWxvci9MZWhyYW10L01hc3RlcjwvU3R5bGVkSGVhZGluZz5cblxuICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnRGV0YWlscyBhbmQgbm90ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cImV2dGwuIHp1c8OkdHpsaWNoZSBJbmZvcyB6dSBCZXdlcmJ1bmcgdW5kIEVpbnNjaHJlaWJ1bmcuXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGV0YWlsc19hbmRfbm90ZXMuJHtsYW5ndWFnZUNvZGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3ZhbHVlcy5kZXRhaWxzX2FuZF9ub3Rlc1tsYW5ndWFnZUNvZGVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L011bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuXG4gICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZSBza2lsbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cIlNwcmFjaGtlbm50bmlzc2UsIGRpZSBmw7xyIGRlbiBTdHVkaWVuZ2FuZyBlcmZvcmRlcmxpY2ggc2luZC5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE11bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsobGFuZ3VhZ2VDb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KGBsYW5ndWFnZV9za2lsbHMuJHtsYW5ndWFnZUNvZGV9YCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZXMubGFuZ3VhZ2Vfc2tpbGxzW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgICB7aHVtYW5pdGllc0ZhY3VsdHlMYW5ndWFnZVNraWxsc0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibGFuZ3VhZ2Utc2tpbGxzLWh1bWFuaXRpZXMtZmFjdWx0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlIHNraWxscyBmb3IgRmFjdWx0eSBvZiBIdW1hbml0aWVzLCBTb2NpYWwgU2NpZW5jZXMsIGFuZCBUaGVvbG9neSBvbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiU3ByYWNoa2VubnRuaXNzZSwgZGllIGF1Y2ggaW4gZGVuIGVyc3RlbiBTZW1lc3Rlcm4gbm9jaCBlcndvcmJlbiB3ZXJkZW4ga8O2bm5lbi5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KCdsYW5ndWFnZV9za2lsbHNfaHVtYW5pdGllc19mYWN1bHR5JywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dmFsdWVzLmxhbmd1YWdlX3NraWxsc19odW1hbml0aWVzX2ZhY3VsdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ2VybWFuX2xhbmd1YWdlX3NraWxsc19mb3JfaW50ZXJuYXRpb25hbF9zdHVkZW50c1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZSBjZXJ0aWZpY2F0ZXMvR2VybWFuIGxhbmd1YWdlIHNraWxscyBmb3IgaW50ZXJuYXRpb25hbCBhcHBsaWNhbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiZ2VybWFuTGFuZ3VhZ2VTa2lsbHNGb3JJbnRlcm5hdGlvbmFsU3R1ZGVudHNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmdlcm1hbl9sYW5ndWFnZV9za2lsbHNfZm9yX2ludGVybmF0aW9uYWxfc3R1ZGVudHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbExpbms+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZXJtYW5fbGFuZ3VhZ2Vfc2tpbGxzX2Zvcl9pbnRlcm5hdGlvbmFsX3N0dWRlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZG1pc3Npb25SZXF1aXJlbWVudHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCYXNlQ29udHJvbCwgUGFuZWwsIFBhbmVsQm9keSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZUVkaXREZWdyZWVQcm9ncmFtIH0gZnJvbSAnY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXInO1xuXG5pbXBvcnQgQ29udGVudEZpZWxkIGZyb20gJy4uL0NvbnRlbnRGaWVsZCc7XG5pbXBvcnQgRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucyBmcm9tICcuLi9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zJztcbmltcG9ydCBNdWx0aWxpbmd1YWxDb250YWluZXIgZnJvbSAnLi9NdWx0aWxpbmd1YWxDb250YWluZXInO1xuXG5pbXBvcnQgeyBEZWdyZWVQcm9ncmFtRGF0YSwgTGFuZ3VhZ2VDb2RlIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IENPTlRFTlRfSVRFTVMgPSBbXG4gICAgJ2Fib3V0JyxcbiAgICAnc3RydWN0dXJlJyxcbiAgICAnc3BlY2lhbGl6YXRpb25zJyxcbiAgICAncXVhbGl0aWVzX2FuZF9za2lsbHMnLFxuICAgICd3aHlfc2hvdWxkX3N0dWR5JyxcbiAgICAnY2FyZWVyX3Byb3NwZWN0cycsXG4gICAgJ3NwZWNpYWxfZmVhdHVyZXMnLFxuICAgICd0ZXN0aW1vbmlhbHMnLFxuXSBhcyBBcnJheTxrZXlvZiBEZWdyZWVQcm9ncmFtRGF0YVsnY29udGVudCddPjtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlIH0gPSB1c2VFZGl0RGVncmVlUHJvZ3JhbSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgPFBhbmVsQm9keT5cbiAgICAgICAgICAgICAgICB7Q09OVEVOVF9JVEVNUy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YCR7dmFsdWVzLmNvbnRlbnRbaXRlbV0udGl0bGUuZGV9ICgke3ZhbHVlcy5jb250ZW50W2l0ZW1dLnRpdGxlLmVufSlgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobGFuZ3VhZ2VDb2RlOiBMYW5ndWFnZUNvZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZXMuY29udGVudFtpdGVtXS5kZXNjcmlwdGlvbltsYW5ndWFnZUNvZGVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY29udGVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgY29udGVudC4ke2l0ZW19LmRlc2NyaXB0aW9uLiR7bGFuZ3VhZ2VDb2RlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxEZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zIC8+XG4gICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPC9QYW5lbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IERlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyIGZyb20gJ2NvbnRleHRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyJztcblxuaW1wb3J0IFRhYnMgZnJvbSAnLi4vVGFicyc7XG5pbXBvcnQgQWRtaXNzaW9uUmVxdWlyZW1lbnRzIGZyb20gJy4vQWRtaXNzaW9uUmVxdWlyZW1lbnRzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XG5pbXBvcnQgRm9ybUhlYWRpbmcgZnJvbSAnLi9Gb3JtSGVhZGluZyc7XG5pbXBvcnQgR2VuZXJhbCBmcm9tICcuL0dlbmVyYWwnO1xuaW1wb3J0IE9yZ2FuaXphdGlvbmFsTGlua3MgZnJvbSAnLi9Pcmdhbml6YXRpb25hbExpbmtzJztcblxuY29uc3QgRGVncmVlUHJvZ3JhbUVkaXRGb3JtID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxEZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcj5cbiAgICAgICAgICAgIDxGb3JtSGVhZGluZyAvPlxuICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICB0YWJzPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdnZW5lcmFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXQgYSBnbGFuY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBEZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogPEdlbmVyYWwgLz4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IERlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiA8Q29udGVudCAvPixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkbWlzc2lvbi1yZXF1aXJlbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBZG1pc3Npb24gcmVxdWlyZW1lbnRzLCBhcHBsaWNhdGlvbiBhbmQgZW5yb2xsbWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IERlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiA8QWRtaXNzaW9uUmVxdWlyZW1lbnRzIC8+LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3JnYW5pemF0aW9uYWwtbGlua3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdPcmdhbml6YXRpb25hbCBub3Rlcy9saW5rcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IERlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiA8T3JnYW5pemF0aW9uYWxMaW5rcyAvPixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVncmVlUHJvZ3JhbUVkaXRGb3JtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlRWRpdERlZ3JlZVByb2dyYW0gfSBmcm9tICcuLi8uLi9jb250ZXh0cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcic7XG5cbmNvbnN0IEZvcm1IZWFkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB1c2VFZGl0RGVncmVlUHJvZ3JhbSgpO1xuXG4gICAgcmV0dXJuIDxoMT57YCR7dmFsdWVzLnRpdGxlLmRlfSAoJHt2YWx1ZXMudGl0bGUuZW59KWB9PC9oMT47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtSGVhZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIGFzIE51bWJlckNvbnRyb2wsXG4gICAgQmFzZUNvbnRyb2wsXG4gICAgUGFuZWwsXG4gICAgUGFuZWxCb2R5LFxuICAgIFRleHRhcmVhQ29udHJvbCxcbiAgICBUZXh0Q29udHJvbCxcbiAgICBUb2dnbGVDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX3ggfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgSW1hZ2VGaWVsZCBmcm9tICdjb21wb25lbnRzL0ltYWdlRmllbGQnO1xuaW1wb3J0IExpbWl0ZWRJbnB1dENvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9MaW1pdGVkSW5wdXRDb250cm9sJztcbmltcG9ydCB7IE11bHRpVGVybVNlbGVjdG9yIH0gZnJvbSAnY29tcG9uZW50cy9UZXJtU2VsZWN0b3InO1xuaW1wb3J0IFRlcm1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL1Rlcm1TZWxlY3Rvci9UZXJtU2VsZWN0b3InO1xuaW1wb3J0IFRleHRDb250cm9sQ29sbGVjdGlvbiBmcm9tICdjb21wb25lbnRzL1RleHRDb250cm9sQ29sbGVjdGlvbic7XG5pbXBvcnQgeyB1c2VFZGl0RGVncmVlUHJvZ3JhbSB9IGZyb20gJ2NvbnRleHRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyJztcbmltcG9ydCB7IHByb3BlcnR5SWQgfSBmcm9tICd1dGlsL2lkSGVscGVycyc7XG5pbXBvcnQge1xuICAgIHRyYW5zZm9ybVRlcm1Ub0RlZ3JlZSxcbiAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rLFxuICAgIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbFN0cmluZyxcbn0gZnJvbSAndXRpbC90cmFuc2Zvcm1zJztcblxuaW1wb3J0IE11bHRpbGluZ3VhbENvbnRhaW5lciBmcm9tICcuL011bHRpbGluZ3VhbENvbnRhaW5lcic7XG5cbmltcG9ydCB7IERlZ3JlZSwgTXVsdGlsaW5ndWFsTGluaywgTXVsdGlsaW5ndWFsU3RyaW5nIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IEdlbmVyYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZXMsIGhhbmRsZUNoYW5nZSB9ID0gdXNlRWRpdERlZ3JlZVByb2dyYW0oKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgIDxQYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmVhdHVyZWRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2lyZCBmw7xyIGRpZSBEZXRhaWxhbnNpY2h0IHZlcndlbmRldC5cIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnRmVhdHVyZWQgaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiZmVhdHVyZWRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdGZWF0dXJlZCBpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGVhc2VyX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVscD1cIldpcmQgZsO8ciBkaWUgS2FjaGVsbiBhdWYgZGVyIEF1c3dhaGxzZWl0ZSB2ZXJ3ZW5kZXQuXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RlYXNlciBJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJ0ZWFzZXJfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUZWFzZXIgaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuXG4gICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cIlN0dWRpZW5nYW5nc2JlemVpY2hudW5nLCBvaG5lIEFic2NobHVzcy5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE11bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsobGFuZ3VhZ2VDb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oYHRpdGxlLiR7bGFuZ3VhZ2VDb2RlfWAsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy50aXRsZVtsYW5ndWFnZUNvZGVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L011bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuXG4gICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3VidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3VidGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cIlouIEIuIEF1ZnrDpGhsdW5nIGRlciBTdHVkaWVuc2Nod2VycHVua3RlIGJlaSBXaXJ0c2NoYWZ0c3dpc3NlbnNjaGFmdGVuLlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihgc3VidGl0bGUuJHtsYW5ndWFnZUNvZGV9YCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN1YnRpdGxlW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgICA8TnVtYmVyQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxudW1iZXI+KCdzdGFuZGFyZF9kdXJhdGlvbicsIHBhcnNlSW50KHZhbHVlLCAxMCkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN0YW5kYXJkX2R1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3RhbmRhcmQgZHVyYXRpb24gb2Ygc3R1ZHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWVfcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnRmVlIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZXMuZmVlX3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8Ym9vbGVhbj4oJ2ZlZV9yZXF1aXJlZCcsIGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuXG4gICAgICAgICAgICAgICAgPE11bHRpVGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VtZXN0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3RhcnQgb2YgZGVncmVlIHByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJzZW1lc3RlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RhcnQubWFwKCh0ZXJtKSA9PiB0ZXJtLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbFN0cmluZ1tdPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJudW1iZXJfb2Zfc3R1ZGVudHNcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnTnVtYmVyIG9mIHN0dWRlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGhlbHA9XCJHZXNhbXR6YWhsIGRlciBTdHVkaWVyZW5kZW4sIG5pY2h0IG51ciBFcnN0c2VtZXN0ZXIuXCJcbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJudW1iZXJPZlN0dWRlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5udW1iZXJfb2Zfc3R1ZGVudHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHsgaWQ6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9PihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbnVtYmVyX29mX3N0dWRlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybScsIHRlcm0uaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGVybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWFjaGluZy1sYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdUZWFjaGluZyBsYW5ndWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cInRlYWNoaW5nTGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRlYWNoaW5nX2xhbmd1YWdlLmlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxTdHJpbmc+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZWFjaGluZ19sYW5ndWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsU3RyaW5nKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxNdWx0aVRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBpZD1cImF0dHJpYnV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdHRyaWJ1dGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hdHRyaWJ1dGVzLm1hcCgodGVybSkgPT4gdGVybS5pZCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxTdHJpbmdbXT4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0dHJpYnV0ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnRGVncmVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiZGVncmVlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZWdyZWUuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPERlZ3JlZT4oJ2RlZ3JlZScsIHRyYW5zZm9ybVRlcm1Ub0RlZ3JlZSh0ZXJtKSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmFjdWx0eVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdGYWN1bHR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiZmFjdWx0eVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmFjdWx0eS5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhY3VsdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0dWR5LWxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1N0dWR5IGxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwic3R1ZHlMb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubG9jYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbFN0cmluZz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE11bHRpVGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3ViamVjdC1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdTdWJqZWN0IGdyb3VwcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cInN1YmplY3RHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3ViamVjdF9ncm91cHMubWFwKCh0KSA9PiB0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbFN0cmluZ1tdPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3ViamVjdF9ncm91cHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBpZD1cInZpZGVvc1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdWaWRlb3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cIlZpZGVvcyDDvGJlciBkZW4gU3R1ZGllbmdhbmcsIGRhcyBTdHVkaWVuZmFjaCwgZWluIFRoZW1hIGRlcyBGYWNocyAoei4gQi4gMi1NaW51dGVuLVdpc3NlbiksIEVyZmFocnVuZ3NiZXJpY2h0ZS5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy52aWRlb3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZ1tdPigndmlkZW9zJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgICAgIDxMaW1pdGVkSW5wdXRDb250cm9sIHZhbHVlPXt2YWx1ZXMubWV0YV9kZXNjcmlwdGlvbi5kZX0gbWF4Q2hhcnM9ezE2MH0+XG4gICAgICAgICAgICAgICAgICAgIHsobWF4Q2hhcnMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdNZXRhIGRlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRleHQgZsO8ciBkaWUgQW56ZWlnZSBiZWkgU3VjaG1hc2NoaW5lbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubWV0YV9kZXNjcmlwdGlvbi5kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5sZW5ndGggPD0gbWF4Q2hhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KCdtZXRhX2Rlc2NyaXB0aW9uLmRlJywgdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0xpbWl0ZWRJbnB1dENvbnRyb2w+XG4gICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPC9QYW5lbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhbDtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFRhYlBhbmVsIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHNlcnZlckRhdGEgZnJvbSAndXRpbC9zZXJ2ZXJEYXRhJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2VDb2RlIH0gZnJvbSAnLi4vLi4vZGVmcy9jb21tb24nO1xuaW1wb3J0IHsgVGFiSXRlbSB9IGZyb20gJy4uL1RhYnMnO1xuXG50eXBlIE11bHRpbGluZ3VhbENvbnRhaW5lclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiAobGFuZ3VhZ2VDb2RlOiBMYW5ndWFnZUNvZGUpID0+IFJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IHRhYnM6IFRhYlBhbmVsLlRhYltdID0gKE9iamVjdC5rZXlzKHNlcnZlckRhdGEoKS5sYW5ndWFnZXMpIGFzIEFycmF5PExhbmd1YWdlQ29kZT4pLm1hcChcbiAgICAobGFuZ3VhZ2VDb2RlOiBMYW5ndWFnZUNvZGUpID0+IHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VOYW1lID0gc2VydmVyRGF0YSgpLmxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBsYW5ndWFnZUNvZGUsXG4gICAgICAgICAgICB0aXRsZTogbGFuZ3VhZ2VOYW1lLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5jb25zdCBNdWx0aWxpbmd1YWxDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9OiBNdWx0aWxpbmd1YWxDb250YWluZXJQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUYWJQYW5lbCB0YWJzPXt0YWJzfT5cbiAgICAgICAgICAgIHsodGFiOiBUYWJJdGVtKSA9PiA8PntjaGlsZHJlbih0YWIubmFtZSBhcyBMYW5ndWFnZUNvZGUpfTwvPn1cbiAgICAgICAgPC9UYWJQYW5lbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlsaW5ndWFsQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIFBhbmVsLCBQYW5lbEJvZHksIFRleHRDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgdXNlRWRpdERlZ3JlZVByb2dyYW0gfSBmcm9tICcuLi8uLi9jb250ZXh0cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcic7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxMaW5rIH0gZnJvbSAnLi4vLi4vZGVmcyc7XG5pbXBvcnQgeyB1c2VEZWdyZWVGZWVzRW5hYmxlZCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNvbmRpdGlvbmFsRmllbGRzJztcbmltcG9ydCB7IHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsgfSBmcm9tICcuLi8uLi91dGlsL3RyYW5zZm9ybXMnO1xuaW1wb3J0IFRlcm1TZWxlY3RvciBmcm9tICcuLi9UZXJtU2VsZWN0b3InO1xuaW1wb3J0IE11bHRpbGluZ3VhbENvbnRhaW5lciBmcm9tICcuL011bHRpbGluZ3VhbENvbnRhaW5lcic7XG5cbmNvbnN0IE9yZ2FuaXphdGlvbmFsTGlua3MgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZXMsIGhhbmRsZUNoYW5nZSB9ID0gdXNlRWRpdERlZ3JlZVByb2dyYW0oKTtcbiAgICBjb25zdCBkZWdyZWVGZWVzRW5hYmxlZCA9IHVzZURlZ3JlZUZlZXNFbmFibGVkKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICA8UGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtaW5hdGlvbnNfb2ZmaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0V4YW1pbmF0aW9ucyBPZmZpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJleGFtaW5hdGlvbnNPZmZpY2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmV4YW1pbmF0aW9uc19vZmZpY2UuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbExpbms+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdleGFtaW5hdGlvbnNfb2ZmaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtaW5hdGlvbl9yZWd1bGF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdEZWdyZWUgcHJvZ3JhbSBhbmQgZXhhbWluYXRpb24gcmVndWxhdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJleGFtaW5hdGlvblJlZ3VsYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5leGFtaW5hdGlvbl9yZWd1bGF0aW9ucy5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V4YW1pbmF0aW9uX3JlZ3VsYXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vZHVsZV9oYW5kYm9va1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdNb2R1bGUgaGFuZGJvb2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhoYW5kYm9vazogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPignbW9kdWxlX2hhbmRib29rJywgaGFuZGJvb2spO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1vZHVsZV9oYW5kYm9va31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBpZD1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdEZWdyZWUgcHJvZ3JhbSBVUkwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KGB1cmwuJHtsYW5ndWFnZUNvZGV9YCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVybFtsYW5ndWFnZUNvZGVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9CYXNlQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3ViamVjdF9zcGVjaWZpY19hZHZpY2VcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3ViamVjdC1zcGVjaWZpYyBhZHZpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJzdWJqZWN0U3BlY2lmaWNBZHZpY2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN1YmplY3Rfc3BlY2lmaWNfYWR2aWNlLmlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxMaW5rPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3ViamVjdF9zcGVjaWZpY19hZHZpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3R1ZGVudF9yZXByZXNlbnRhdGl2ZXNcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3R1ZGVudOKAmXMgUmVwcmVzZW50YXRpdmVzL0ZTSScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHJlcHJlc2VudGF0aXZlczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPignc3R1ZGVudF9yZXByZXNlbnRhdGl2ZXMnLCByZXByZXNlbnRhdGl2ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN0dWRlbnRfcmVwcmVzZW50YXRpdmVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2RlZ3JlZUZlZXNFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RlZ3JlZSBQcm9ncmFtIEZlZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJTdHVkaWVuZ2FuZ3NnZWLDvGhyZW4sIG5pY2h0IFNlbWVzdGVyYmVpdHLDpGdlLlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRlZ3JlZVByb2dyYW1GZWVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGRlZ3JlZV9wcm9ncmFtX2ZlZXMuJHtsYW5ndWFnZUNvZGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVncmVlUHJvZ3JhbUZlZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlZ3JlZV9wcm9ncmFtX2ZlZXNbbGFuZ3VhZ2VDb2RlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8L1BhbmVsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25hbExpbmtzO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVncmVlUHJvZ3JhbUVkaXRGb3JtJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZCwgdW5pcSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEZvcm1Ub2tlbkZpZWxkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm9wcyB9IGZyb20gJ2RlZnMnO1xuXG4vKipcbiAqIEVudGl0eSBzZWxlY3Rvci5cbiAqIEhlYXZpbHkgYmFzZWQgb24gRmxhdFRlcm1TZWxlY3Rvci5cbiAqXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL2d1dGVuYmVyZy9ibG9iL2MwMjQyMWY4Y2Q2ZTkwOTY2YjdlOGNkNDg3ZDMxMWVlMzFhNmFhZGEvcGFja2FnZXMvZWRpdG9yL3NyYy9jb21wb25lbnRzL3Bvc3QtdGF4b25vbWllcy9mbGF0LXRlcm0tc2VsZWN0b3IuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRW50aXR5U2VsZWN0b3Ioe1xuICAgIGxhYmVsLFxuICAgIG1lc3NhZ2VzLFxuICAgIG1heExlbmd0aCxcbiAgICBvbkNoYW5nZSxcbiAgICBlbnRpdHlUb1Rva2VuLFxuICAgIG1heFN1Z2dlc3Rpb25zLFxuICAgIGVudGl0aWVzLFxuICAgIHNlYXJjaGVkRW50aXRpZXMsXG4gICAgc2V0U2VhcmNoLFxufTogRW50aXR5U2VsZWN0b3JQcm9wcykge1xuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZTxBcnJheTxzdHJpbmc+PihbXSk7XG4gICAgY29uc3QgZGVib3VuY2VkU2VhcmNoID0gdXNlRGVib3VuY2Uoc2V0U2VhcmNoLCA1MDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGVudGl0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IGVudGl0aWVzLm1hcChlbnRpdHlUb1Rva2VuKTtcbiAgICAgICAgICAgIHNldFZhbHVlcyhuZXdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgfSwgW2VudGl0aWVzXSk7XG5cbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHVzZU1lbW88QXJyYXk8c3RyaW5nPj4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2VhcmNoZWRFbnRpdGllcy5tYXAoZW50aXR5VG9Ub2tlbik7XG4gICAgfSwgW3NlYXJjaGVkRW50aXRpZXNdKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlVG9rZW5zID0gKHRva2VucykgPT4ge1xuICAgICAgICBjb25zdCBhdmFpbGFibGVFbnRpdGllcyA9IFsuLi5lbnRpdGllcywgLi4uc2VhcmNoZWRFbnRpdGllc107XG4gICAgICAgIGNvbnN0IHVuaXF1ZVRva2VucyA9IHVuaXEodG9rZW5zKTtcblxuICAgICAgICBzZXRWYWx1ZXModW5pcXVlVG9rZW5zKTtcbiAgICAgICAgY29uc3QgbmV3RW50aXRpZXMgPSB1bmlxdWVUb2tlbnMubWFwKCh0b2tlbikgPT5cbiAgICAgICAgICAgIGZpbmQoYXZhaWxhYmxlRW50aXRpZXMsIChlbnRpdHkpID0+IGVudGl0eVRvVG9rZW4oZW50aXR5KSA9PT0gdG9rZW4pLFxuICAgICAgICApO1xuICAgICAgICBvbkNoYW5nZShuZXdFbnRpdGllcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzVG9rZW5WYWxpZCA9ICh0b2tlbjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZUVudGl0aWVzID0gWy4uLmVudGl0aWVzLCAuLi5zZWFyY2hlZEVudGl0aWVzXTtcbiAgICAgICAgcmV0dXJuIGZpbmQoYXZhaWxhYmxlRW50aXRpZXMsIChlbnRpdHkpID0+IGVudGl0eVRvVG9rZW4oZW50aXR5KSA9PT0gdG9rZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybVRva2VuRmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIG1lc3NhZ2VzPXttZXNzYWdlc31cbiAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlc31cbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zPXtzdWdnZXN0aW9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRva2Vuc31cbiAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2RlYm91bmNlZFNlYXJjaH1cbiAgICAgICAgICAgIG1heFN1Z2dlc3Rpb25zPXttYXhTdWdnZXN0aW9uc31cbiAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsU2hvd0hvd1RvPXtmYWxzZX1cbiAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsVmFsaWRhdGVJbnB1dD17aXNUb2tlblZhbGlkfVxuICAgICAgICAvPlxuICAgICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9FbnRpdHlTZWxlY3Rvcic7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGlzQmxvYlVSTCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvYic7XG5pbXBvcnQgeyBNZWRpYVBsYWNlaG9sZGVyLCBNZWRpYVVwbG9hZENoZWNrIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZUVkaXREZWdyZWVQcm9ncmFtIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXInO1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gJy4vdXNlTWVkaWEnO1xuXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2RlZnMnO1xuXG50eXBlIEltYWdlRmllbGRQcm9wcyA9IHtcbiAgICBwYXRoOiAndGVhc2VyX2ltYWdlJyB8ICdmZWF0dXJlZF9pbWFnZSc7XG4gICAgdGl0bGU6IHN0cmluZztcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUZpZWxkKHsgcGF0aCwgdGl0bGUgfTogSW1hZ2VGaWVsZFByb3BzKSB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlIH0gPSB1c2VFZGl0RGVncmVlUHJvZ3JhbSgpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRNZWRpYSA9IHVzZU1lZGlhKHZhbHVlc1twYXRoXS5pZCk7XG5cbiAgICBjb25zdCBQcmV2aWV3ID0gKCk6IEpTWC5FbGVtZW50IHwgbnVsbCA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdmFsdWVzW3BhdGhdLnVybCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRNZWRpYT8ubWVkaWFfZGV0YWlscz8uc2l6ZXM/LnRodW1ibmFpbD8uc291cmNlX3VybCA/PyB2YWx1ZXNbcGF0aF0udXJsfVxuICAgICAgICAgICAgICAgIGFsdD1cInByZXZpZXdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICA8TWVkaWFQbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXtbdmFsdWVzW3BhdGhdLmlkXX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KHsgaWQsIHVybCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Jsb2JVUkwodXJsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPEltYWdlPihwYXRoLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8SW1hZ2U+KHBhdGgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cbiAgICAgICAgICAgICAgICBtdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgbGFiZWxzPXt7IHRpdGxlIH19XG4gICAgICAgICAgICAgICAgbWVkaWFQcmV2aWV3PXs8UHJldmlldyAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvTWVkaWFVcGxvYWRDaGVjaz5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW1hZ2VGaWVsZCc7XG4iLCJpbXBvcnQgeyBNZWRpYVR5cGUgfSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YS9idWlsZC10eXBlcy9lbnRpdHktdHlwZXMvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBDb3JlRGF0YVNlbGVjdG9ycywgTWFwU2VsZWN0LCBXcE1lZGlhLCBXcE1lZGlhSW1hZ2UgfSBmcm9tICdkZWZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWVkaWE8VCBleHRlbmRzIE1lZGlhVHlwZSA9ICdpbWFnZSc+KG1lZGlhSWQ6IG51bWJlcikge1xuICAgIGNvbnN0IG1lZGlhOiBUIGV4dGVuZHMgJ2ltYWdlJyA/IFdwTWVkaWFJbWFnZSA6IFdwTWVkaWEgPSB1c2VTZWxlY3Q8XG4gICAgICAgIE1hcFNlbGVjdDxDb3JlRGF0YVNlbGVjdG9ycz5cbiAgICA+KFxuICAgICAgICAoc2VsZWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0KCdjb3JlJykuZ2V0TWVkaWEobWVkaWFJZCk7XG4gICAgICAgIH0sXG4gICAgICAgIFttZWRpYUlkXSxcbiAgICApO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgbWF4Q2hhcnM6IG51bWJlcjtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGNoaWxkcmVuOiAobWF4Q2hhcnM6IG51bWJlcikgPT4gUmVhY3ROb2RlO1xufVxuXG5jb25zdCBMaW1pdGVkSW5wdXRDb250cm9sID0gKHsgbWF4Q2hhcnMsIGNoaWxkcmVuLCB2YWx1ZSB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtjaGFyc0xlZnQsIHNldENoYXJzTGVmdF0gPSB1c2VTdGF0ZTxudW1iZXI+KG1heENoYXJzKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENoYXJzTGVmdChtYXhDaGFycyAtIHZhbHVlLmxlbmd0aCk7XG4gICAgfSwgW3ZhbHVlLCBtYXhDaGFyc10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjaGlsZHJlbihtYXhDaGFycyl9XG5cbiAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgcGVyY2VudGFnZT17KGNoYXJzTGVmdCAqIDEwMCkgLyBtYXhDaGFyc30gc3F1YXJlU2l6ZT17MTZ9IC8+XG5cbiAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgIHtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICclcyBjaGFyYWN0ZXJzIGxlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGxpbWl0ZWQgdGV4dCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKS5yZXBsYWNlKCclcycsIGNoYXJzTGVmdC50b1N0cmluZygpKX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGltaXRlZElucHV0Q29udHJvbDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xpbWl0ZWRJbnB1dENvbnRyb2wnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVGFiUGFuZWwgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBUYWJJdGVtIH0gZnJvbSAnLi9kZWZzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICB0YWJzOiBUYWJJdGVtW107XG59XG5cbmNvbnN0IFRhYnMgPSAoeyB0YWJzIH06IFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxUYWJQYW5lbCB0YWJzPXt0YWJzfT57KHRhYjogVGFiSXRlbSkgPT4gPD57dGFiLmNvbXBvbmVudH08Lz59PC9UYWJQYW5lbD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9kZWZzJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RhYnMnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbmltcG9ydCBFbnRpdHlTZWxlY3RvciBmcm9tICcuLi9FbnRpdHlTZWxlY3Rvcic7XG5pbXBvcnQgeyBNdWx0aVRlcm1TZWxlY3RvclByb3BzIH0gZnJvbSAnLi9kZWZzJztcbmltcG9ydCB7XG4gICAgd2l0aERlZ3JlZVByb2dyYW1UZXJtcyxcbiAgICB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMsXG4gICAgd2l0aFRlcm1TZWxlY3RvclByb3BzLFxufSBmcm9tICcuL2hvYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFRlcm1TZWxlY3RvclByb3BzLFxuICAgIHdpdGhEZWdyZWVQcm9ncmFtVGVybXMsXG4gICAgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zLFxuKShFbnRpdHlTZWxlY3RvcikgYXMgUmVhY3QuRkM8TXVsdGlUZXJtU2VsZWN0b3JQcm9wcz47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb21wb3NlLCBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbmltcG9ydCBFbnRpdHlTZWxlY3RvciBmcm9tICcuLi9FbnRpdHlTZWxlY3Rvcic7XG5pbXBvcnQgeyBUZXJtU2VsZWN0b3JQcm9wcyB9IGZyb20gJy4vZGVmcyc7XG5pbXBvcnQge1xuICAgIHdpdGhEZWdyZWVQcm9ncmFtVGVybXMsXG4gICAgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zLFxuICAgIHdpdGhUZXJtU2VsZWN0b3JQcm9wcyxcbn0gZnJvbSAnLi9ob2MnO1xuXG5pbXBvcnQgeyBFbnRpdHlTZWxlY3RvclByb3BzLCBXcFRlcm0gfSBmcm9tICdkZWZzJztcblxuY29uc3Qgd2l0aFNpbmdsZVRlcm1TZWxlY3RvclByb3BzID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoXG4gICAgKFdyYXBwZWRDb21wb25lbnQ6IFJlYWN0LkZDPFBhcnRpYWw8RW50aXR5U2VsZWN0b3JQcm9wcz4+KSA9PlxuICAgICAgICAoeyBvbkNoYW5nZSwgLi4ub3RoZXJzIH06IFRlcm1TZWxlY3RvclByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybXM6IEFycmF5PFdwVGVybT4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXJtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHRlcm1zWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICd3aXRoU2luZ2xlVGVybVNlbGVjdG9yUHJvcHMnLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgICB3aXRoU2luZ2xlVGVybVNlbGVjdG9yUHJvcHMsXG4gICAgd2l0aFRlcm1TZWxlY3RvclByb3BzLFxuICAgIHdpdGhEZWdyZWVQcm9ncmFtVGVybXMsXG4gICAgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zLFxuKShFbnRpdHlTZWxlY3RvcikgYXMgUmVhY3QuRkM8VGVybVNlbGVjdG9yUHJvcHM+O1xuIiwiaW1wb3J0IHdpdGhEZWdyZWVQcm9ncmFtVGVybXMgZnJvbSAnLi93aXRoRGVncmVlUHJvZ3JhbVRlcm1zJztcbmltcG9ydCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMgZnJvbSAnLi93aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMnO1xuaW1wb3J0IHdpdGhUZXJtU2VsZWN0b3JQcm9wcyBmcm9tICcuL3dpdGhUZXJtU2VsZWN0b3JQcm9wcyc7XG5cbmV4cG9ydCB7IHdpdGhEZWdyZWVQcm9ncmFtVGVybXMsIHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcywgd2l0aFRlcm1TZWxlY3RvclByb3BzIH07XG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgUG9zdCwgc3RvcmUgYXMgY29yZVN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7IGVudGl0eUlkIH0gZnJvbSAndXRpbC9pZEhlbHBlcnMnO1xuaW1wb3J0IHNlcnZlckRhdGEgZnJvbSAndXRpbC9zZXJ2ZXJEYXRhJztcblxuaW1wb3J0IHsgTXVsdGlUZXJtU2VsZWN0b3JQcm9wcywgVGVybVNlbGVjdG9yUHJvcHMgfSBmcm9tICcuLi9kZWZzJztcblxuY29uc3Qgd2l0aERlZ3JlZVByb2dyYW1UZXJtcyA9IHdpdGhTZWxlY3QoXG4gICAgKFxuICAgICAgICBzZWxlY3QsXG4gICAgICAgIG93blByb3BzOiBUZXJtU2VsZWN0b3JQcm9wcyB8IE11bHRpVGVybVNlbGVjdG9yUHJvcHMsXG4gICAgKTogeyBlbnRpdGllczogQXJyYXk8UG9zdDwndmlldyc+PiB9ID0+IHtcbiAgICAgICAgY29uc3QgeyBnZXRFbnRpdHlSZWNvcmRzIH0gPSBzZWxlY3QoY29yZVN0b3JlLm5hbWUpO1xuXG4gICAgICAgIGlmIChpc0VtcHR5KG93blByb3BzLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbnRpdGllczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaWRzID0gKFxuICAgICAgICAgICAgKGlzQXJyYXkob3duUHJvcHMudmFsdWUpID8gb3duUHJvcHMudmFsdWUgOiBbb3duUHJvcHMudmFsdWVdKSBhcyBBcnJheTxzdHJpbmc+XG4gICAgICAgICkubWFwKGVudGl0eUlkKTtcblxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgICBwZXJfcGFnZTogLTEsXG4gICAgICAgICAgICAgICAgb3JkZXJieTogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICd2aWV3JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiBpZHMuam9pbignLCcpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRpdGllczpcbiAgICAgICAgICAgICAgICBnZXRFbnRpdHlSZWNvcmRzKFxuICAgICAgICAgICAgICAgICAgICAndGF4b25vbXknLFxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJEYXRhKCkudGF4b25vbXlTbHVnc1tvd25Qcm9wcy50YXhvbm9teV0sXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICkgPz8gW10sXG4gICAgICAgIH07XG4gICAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEZWdyZWVQcm9ncmFtVGVybXM7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc3RvcmUgYXMgY29yZVN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvcHMsIFdwVGVybSB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMgPSB3aXRoU2VsZWN0KFxuICAgIChcbiAgICAgICAgc2VsZWN0LFxuICAgICAgICBvd25Qcm9wczogeyB0YXhvbm9teTogc3RyaW5nOyBtYXhTdWdnZXN0aW9uczogbnVtYmVyIH0sXG4gICAgKTogUGFydGlhbDxFbnRpdHlTZWxlY3RvclByb3BzPFdwVGVybT4+ID0+IHtcbiAgICAgICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgICAgICAgY29uc3QgeyBnZXRFbnRpdHlSZWNvcmRzIH0gPSBzZWxlY3QoY29yZVN0b3JlLm5hbWUpO1xuICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hlZEVudGl0aWVzOiBbXSxcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2gsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGVybXMgPSBnZXRFbnRpdHlSZWNvcmRzKCd0YXhvbm9teScsIHNlcnZlckRhdGEoKS50YXhvbm9teVNsdWdzW293blByb3BzLnRheG9ub215XSwge1xuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIHBlcl9wYWdlOiBvd25Qcm9wcy5tYXhTdWdnZXN0aW9ucyxcbiAgICAgICAgICAgICAgICBvcmRlcmJ5OiAnbmFtZScsXG4gICAgICAgICAgICAgICAgb3JkZXI6ICdhc2MnLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICd2aWV3JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWFyY2gsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWFyY2hlZEVudGl0aWVzOiB0ZXJtcyA/PyBbXSxcbiAgICAgICAgICAgIHNldFNlYXJjaCxcbiAgICAgICAgfTtcbiAgICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG5pbXBvcnQgeyBTZWxlY3RvclByb3BzIH0gZnJvbSAnLi4vZGVmcyc7XG5cbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvcHMsIFdwVGVybSB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCB3aXRoVGVybVNlbGVjdG9yUHJvcHMgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChcbiAgICAoV3JhcHBlZENvbXBvbmVudDogUmVhY3QuRkM8UGFydGlhbDxFbnRpdHlTZWxlY3RvclByb3BzPj4pID0+XG4gICAgICAgICh7IGlkLCBoZWxwLCAuLi5vdGhlcnMgfTogU2VsZWN0b3JQcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2wgaWQ9e2lkfSBoZWxwPXtoZWxwID8/ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVRvVG9rZW49eyh0ZXJtOiBXcFRlcm0pID0+IHRlcm0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFN1Z2dlc3Rpb25zPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9CYXNlQ29udHJvbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgJ3dpdGhTZWxlY3RvclByb3BzJyxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUZXJtU2VsZWN0b3JQcm9wcztcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTXVsdGlUZXJtU2VsZWN0b3IgfSBmcm9tICcuL011bHRpVGVybVNlbGVjdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Rlcm1TZWxlY3Rvcic7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJhc2VDb250cm9sLCBCdXR0b24sIEZsZXgsIEljb24sIFRleHRDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW50ZXJmYWNlIEZpZWxkSXRlbSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB2YWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdbXTtcbiAgICBvbkNoYW5nZSh2YWw6IHN0cmluZ1tdKTogdm9pZDtcbn1cblxuY29uc3QgdHJhbnNmb3JtUmF3VmFsdWUgPSAodmFsdWU6IHN0cmluZ1tdKTogRmllbGRJdGVtW10gPT4ge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoKHN0cikgPT4gKHtcbiAgICAgICAgdmFsdWU6IHN0cixcbiAgICAgICAgaWQ6IG5hbm9pZCgpLFxuICAgIH0pKTtcbn07XG5cbmNvbnN0IFN0eWxlZEZpZWxkUm93ID0gc3R5bGVkKEZsZXgpYFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgID4gLmNvbXBvbmVudHMtYmFzZS1jb250cm9sIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAuY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkLFxuICAgICAgICAuY29tcG9uZW50cy10ZXh0LWNvbnRyb2xfX2lucHV0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBUZXh0Q29udHJvbENvbGxlY3Rpb24gPSAoeyB2YWx1ZSwgb25DaGFuZ2UgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGU8RmllbGRJdGVtW10+KHRyYW5zZm9ybVJhd1ZhbHVlKHZhbHVlKSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBGaWx0ZXItb3V0IGVtcHR5IHZhbHVlc1xuICAgICAgICBvbkNoYW5nZShmaWVsZHMuZmlsdGVyKChmKSA9PiAhIWYudmFsdWUpLm1hcCgoZikgPT4gZi52YWx1ZSkpO1xuICAgIH0sIFtmaWVsZHNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmFzZUNvbnRyb2w+XG4gICAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRmllbGRSb3cga2V5PXtmaWVsZC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmllbGQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjZShmaWVsZHMsIChkcmFmdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0W2luZGV4XS52YWx1ZSA9IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVzdHJ1Y3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkcyhbLi4uZmllbGRzLmZpbHRlcigoZikgPT4gZi5pZCAhPT0gZmllbGQuaWQpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwibm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRmllbGRSb3c+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZHMoXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWNlKGZpZWxkcywgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBuYW5vaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge194KCdBZGQnLCAnYmFja29mZmljZTogVGV4dENvbnRyb2xDb2xsZWN0aW9uJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0Q29udHJvbENvbGxlY3Rpb247XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UZXh0Q29udHJvbENvbGxlY3Rpb24nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgdXNlRW50aXR5UHJvcCB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcblxuaW1wb3J0IHNlcnZlckRhdGEgZnJvbSAndXRpbC9zZXJ2ZXJEYXRhJztcblxuaW1wb3J0IHsgRGVncmVlUHJvZ3JhbURhdGEsIERlZ3JlZVByb2dyYW1EYXRhUGF0aHMgfSBmcm9tICdkZWZzJztcblxuaW50ZXJmYWNlIENvbnRleHRWYWx1ZSB7XG4gICAgdmFsdWVzOiBEZWdyZWVQcm9ncmFtRGF0YTtcbiAgICBoYW5kbGVDaGFuZ2U6IDxWYWx1ZT4ocGF0aDogRGVncmVlUHJvZ3JhbURhdGFQYXRocywgdmFsOiBWYWx1ZSkgPT4gdm9pZDtcbiAgICBlcnJvcnM6IFBhcnRpYWw8UmVjb3JkPGtleW9mIERlZ3JlZVByb2dyYW1EYXRhLCBzdHJpbmc+PjtcbiAgICBhZGRFcnJvcjogKGZpZWxkOiBrZXlvZiBEZWdyZWVQcm9ncmFtRGF0YSwgZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgcmVtb3ZlRXJyb3I6IChmaWVsZDoga2V5b2YgRGVncmVlUHJvZ3JhbURhdGEpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBEZWdyZWVQcm9ncmFtRWRpdEZvcm1Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0VmFsdWU+KHt9IGFzIENvbnRleHRWYWx1ZSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuY29uc3QgRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZTxQYXJ0aWFsPFJlY29yZDxrZXlvZiBEZWdyZWVQcm9ncmFtRGF0YSwgc3RyaW5nPj4+KHt9KTtcbiAgICBjb25zdCBbZGVncmVlUHJvZ3JhbURhdGEsIHNldERlZ3JlZVByb2dyYW1EYXRhXSA9IHVzZUVudGl0eVByb3AoXG4gICAgICAgICdwb3N0VHlwZScsXG4gICAgICAgIHNlcnZlckRhdGEoKS5wb3N0VHlwZSxcbiAgICAgICAgc2VydmVyRGF0YSgpLnByb3BlcnR5TmFtZSxcbiAgICApIGFzIFtEZWdyZWVQcm9ncmFtRGF0YSwgKHZhbDogRGVncmVlUHJvZ3JhbURhdGEpID0+IHZvaWQsIHVua25vd25dO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIDxWYWx1ZSw+KHBhdGg6IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMsIHZhbDogVmFsdWUpID0+IHtcbiAgICAgICAgICAgIHNldERlZ3JlZVByb2dyYW1EYXRhKHByb2R1Y2UoZGVncmVlUHJvZ3JhbURhdGEsIChkcmFmdCkgPT4gc2V0KGRyYWZ0LCBwYXRoLCB2YWwpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIFtzZXREZWdyZWVQcm9ncmFtRGF0YSwgZGVncmVlUHJvZ3JhbURhdGFdLFxuICAgICk7XG5cbiAgICBjb25zdCBhZGRFcnJvciA9IHVzZUNhbGxiYWNrKChmaWVsZDoga2V5b2YgRGVncmVlUHJvZ3JhbURhdGEsIGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEVycm9ycygocHJldkVycm9ycykgPT4gKHsgLi4ucHJldkVycm9ycywgW2ZpZWxkXTogZXJyb3JNZXNzYWdlIH0pKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCByZW1vdmVFcnJvciA9IHVzZUNhbGxiYWNrKChmaWVsZDoga2V5b2YgRGVncmVlUHJvZ3JhbURhdGEpID0+IHtcbiAgICAgICAgc2V0RXJyb3JzKChwcmV2RXJyb3JzKSA9PlxuICAgICAgICAgICAgcHJvZHVjZShwcmV2RXJyb3JzLCAoZHJhZnQpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZHJhZnRbZmllbGRdO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERlZ3JlZVByb2dyYW1FZGl0Rm9ybUNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHZhbHVlczogZGVncmVlUHJvZ3JhbURhdGEsXG4gICAgICAgICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgICAgICAgIGFkZEVycm9yLFxuICAgICAgICAgICAgICAgIHJlbW92ZUVycm9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0RlZ3JlZVByb2dyYW1FZGl0Rm9ybUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VFZGl0RGVncmVlUHJvZ3JhbSA9ICgpID0+IHVzZUNvbnRleHQoRGVncmVlUHJvZ3JhbUVkaXRGb3JtQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IERlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9kZWZzL2NvbW1vbic7XG5leHBvcnQgKiBmcm9tICcuL2RlZnMvY29yZS1kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGVmcy9kZWdyZWUtcHJvZ3JhbS1kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGVmcy9lbnRpdHktc2VsZWN0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZzL2dlbmVyaWMnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZzL3NlcnZlci1kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZGVmcy90ZXJtJztcbiIsImltcG9ydCB7IFBvc3QgfSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YSc7XG5cbmltcG9ydCB7IE9iamVjdFZhbHVlcywgUGF0aHMgfSBmcm9tICcuL2dlbmVyaWMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZ3JlZVByb2dyYW1EYXRhIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGZlYXR1cmVkX2ltYWdlOiBJbWFnZTtcbiAgICB0ZWFzZXJfaW1hZ2U6IEltYWdlO1xuICAgIHRpdGxlOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgc3VidGl0bGU6IE11bHRpbGluZ3VhbFN0cmluZztcbiAgICBzdGFuZGFyZF9kdXJhdGlvbjogbnVtYmVyO1xuICAgIGZlZV9yZXF1aXJlZDogYm9vbGVhbjtcbiAgICBzdGFydDogQXJyYXk8TXVsdGlsaW5ndWFsU3RyaW5nPjtcbiAgICBudW1iZXJfb2Zfc3R1ZGVudHM6IHtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB9O1xuICAgIHRlYWNoaW5nX2xhbmd1YWdlOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgYXR0cmlidXRlczogQXJyYXk8TXVsdGlsaW5ndWFsU3RyaW5nPjtcbiAgICBkZWdyZWU6IERlZ3JlZTtcbiAgICBmYWN1bHR5OiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIGxvY2F0aW9uOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgc3ViamVjdF9ncm91cHM6IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgdmlkZW9zOiBzdHJpbmdbXTtcbiAgICBtZXRhX2Rlc2NyaXB0aW9uOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgY29udGVudDoge1xuICAgICAgICBhYm91dDogQ29udGVudEl0ZW07XG4gICAgICAgIHN0cnVjdHVyZTogQ29udGVudEl0ZW07XG4gICAgICAgIHNwZWNpYWxpemF0aW9uczogQ29udGVudEl0ZW07XG4gICAgICAgIHF1YWxpdGllc19hbmRfc2tpbGxzOiBDb250ZW50SXRlbTtcbiAgICAgICAgd2h5X3Nob3VsZF9zdHVkeTogQ29udGVudEl0ZW07XG4gICAgICAgIGNhcmVlcl9wcm9zcGVjdHM6IENvbnRlbnRJdGVtO1xuICAgICAgICBzcGVjaWFsX2ZlYXR1cmVzOiBDb250ZW50SXRlbTtcbiAgICAgICAgdGVzdGltb25pYWxzOiBDb250ZW50SXRlbTtcbiAgICB9O1xuICAgIGFkbWlzc2lvbl9yZXF1aXJlbWVudHM6IHtcbiAgICAgICAgYmFjaGVsb3Jfb3JfdGVhY2hpbmdfZGVncmVlOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgICAgICB0ZWFjaGluZ19kZWdyZWVfaGlnaGVyX3NlbWVzdGVyOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgICAgICBtYXN0ZXI6IE11bHRpbGluZ3VhbExpbms7XG4gICAgfTtcbiAgICBjb250ZW50X3JlbGF0ZWRfbWFzdGVyX3JlcXVpcmVtZW50czogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uX2RlYWRsaW5lX3dpbnRlcl9zZW1lc3Rlcjogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uX2RlYWRsaW5lX3N1bW1lcl9zZW1lc3Rlcjogc3RyaW5nO1xuICAgIGRldGFpbHNfYW5kX25vdGVzOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgbGFuZ3VhZ2Vfc2tpbGxzOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgbGFuZ3VhZ2Vfc2tpbGxzX2h1bWFuaXRpZXNfZmFjdWx0eTogc3RyaW5nO1xuICAgIGdlcm1hbl9sYW5ndWFnZV9za2lsbHNfZm9yX2ludGVybmF0aW9uYWxfc3R1ZGVudHM6IE11bHRpbGluZ3VhbExpbms7XG4gICAgcmVhZG9ubHkgc3RhcnRfb2Zfc2VtZXN0ZXI6IE11bHRpbGluZ3VhbExpbms7XG4gICAgcmVhZG9ubHkgc2VtZXN0ZXJfZGF0ZXM6IE11bHRpbGluZ3VhbExpbms7XG4gICAgZXhhbWluYXRpb25zX29mZmljZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICBleGFtaW5hdGlvbl9yZWd1bGF0aW9uczogTXVsdGlsaW5ndWFsTGluaztcbiAgICBtb2R1bGVfaGFuZGJvb2s6IHN0cmluZztcbiAgICB1cmw6IE11bHRpbGluZ3VhbFN0cmluZztcbiAgICByZWFkb25seSBkZXBhcnRtZW50OiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIHJlYWRvbmx5IHN0dWRlbnRfYWR2aWNlOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIHN1YmplY3Rfc3BlY2lmaWNfYWR2aWNlOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIHJlYWRvbmx5IHNlcnZpY2VfY2VudGVyczogTXVsdGlsaW5ndWFsTGluaztcbiAgICBzdHVkZW50X3JlcHJlc2VudGF0aXZlczogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlbWVzdGVyX2ZlZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICBkZWdyZWVfcHJvZ3JhbV9mZWVzOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgcmVhZG9ubHkgYWJyb2FkX29wcG9ydHVuaXRpZXM6IE11bHRpbGluZ3VhbExpbms7XG4gICAga2V5d29yZHM6IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgYXJlYV9vZl9zdHVkeTogQXJyYXk8TXVsdGlsaW5ndWFsTGluaz47XG4gICAgY29tYmluYXRpb25zOiBBcnJheTxudW1iZXI+O1xuICAgIGxpbWl0ZWRfY29tYmluYXRpb25zOiBBcnJheTxudW1iZXI+O1xufVxuXG5leHBvcnQgY29uc3QgREVHUkVFX0FCQlJFVklBVElPTl9FTkdMSVNIID0ge1xuICAgIEJBQ0hFTE9SOiAnQi5BLicsXG4gICAgTUFTVEVSUzogJ00uQS4nLFxuICAgIFRFQUNISU5HX0RFR1JFRTogJ0IuUy5FLicsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4gPSB7XG4gICAgQkFDSEVMT1I6ICdCQScsXG4gICAgTUFTVEVSUzogJ01BJyxcbiAgICBURUFDSElOR19ERUdSRUU6ICdMQScsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBEZWdyZWVBYmJyZXZpYXRpb25FbmdsaXNoID0gT2JqZWN0VmFsdWVzPHR5cGVvZiBERUdSRUVfQUJCUkVWSUFUSU9OX0VOR0xJU0g+IHwgJyc7XG5leHBvcnQgdHlwZSBEZWdyZWVBYmJyZXZpYXRpb25HZXJtYW4gPSBPYmplY3RWYWx1ZXM8dHlwZW9mIERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOPiB8ICcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZ3JlZVByb2dyYW1BYmJyZXZpYXRpb24gZXh0ZW5kcyBNdWx0aWxpbmd1YWxTdHJpbmcge1xuICAgIGVuOiBEZWdyZWVBYmJyZXZpYXRpb25FbmdsaXNoO1xuICAgIGRlOiBEZWdyZWVBYmJyZXZpYXRpb25HZXJtYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVncmVlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IE11bHRpbGluZ3VhbFN0cmluZztcbiAgICBhYmJyZXZpYXRpb246IERlZ3JlZVByb2dyYW1BYmJyZXZpYXRpb247XG59XG5cbmV4cG9ydCB0eXBlIEltYWdlID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBNdWx0aWxpbmd1YWxTdHJpbmcgPSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkZTogc3RyaW5nO1xuICAgIGVuOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBNdWx0aWxpbmd1YWxMaW5rID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGxpbmtfdGV4dDogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGxpbmtfdXJsOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBDb250ZW50SXRlbSA9IHtcbiAgICByZWFkb25seSB0aXRsZTogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBEZWdyZWVQcm9ncmFtRGF0YVBhdGhzID0gUGF0aHM8RGVncmVlUHJvZ3JhbURhdGEsIDM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZ3JlZVByb2dyYW1Qb3N0IGV4dGVuZHMgUG9zdCB7XG4gICAgZGVncmVlX3Byb2dyYW06IERlZ3JlZVByb2dyYW1EYXRhO1xufVxuIiwiZXhwb3J0IGNvbnN0IEZBQ1VMVFlfUEhJTE9TT1BIWSA9ICdQaGlsJztcbmV4cG9ydCBjb25zdCBGQUNVTFRZX05BVFVSQUxfU0NJRU5DRVMgPSAnTmF0JztcbmV4cG9ydCBjb25zdCBTRU1FU1RFUl9TVU1NRVIgPSAnU29tbWVyc2VtZXN0ZXInO1xuZXhwb3J0IGNvbnN0IEFETUlTU0lPTl9SRVFVSVJFTUVOVF9GUkVFID0gJ2ZyZWknO1xuIiwiaW1wb3J0IHtcbiAgICBBRE1JU1NJT05fUkVRVUlSRU1FTlRfRlJFRSxcbiAgICBGQUNVTFRZX05BVFVSQUxfU0NJRU5DRVMsXG4gICAgRkFDVUxUWV9QSElMT1NPUEhZLFxuICAgIFNFTUVTVEVSX1NVTU1FUixcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eSBmcm9tICcuL3VzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eSc7XG5cbmltcG9ydCB7IERlZ3JlZSwgREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4sIE11bHRpbGluZ3VhbExpbmsgfSBmcm9tICdkZWZzJztcblxuY29uc3QgQUxMT1dFRF9GQUNVTFRJRVNfRk9SX0NPTUJJTkFUSU9OID0gW0ZBQ1VMVFlfUEhJTE9TT1BIWSwgRkFDVUxUWV9OQVRVUkFMX1NDSUVOQ0VTXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURlZ3JlZUZlZXNFbmFibGVkKCkge1xuICAgIGNvbnN0IFtmZWVSZXF1aXJlZF0gPSB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8Ym9vbGVhbj4oJ2ZlZV9yZXF1aXJlZCcpO1xuXG4gICAgcmV0dXJuICEhZmVlUmVxdWlyZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5hdGlvbk9mRGVncmVlUHJvZ3JhbUVuYWJsZWQoKSB7XG4gICAgY29uc3QgW2ZhY3VsdHldID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PE11bHRpbGluZ3VhbExpbms+KCdmYWN1bHR5Jyk7XG4gICAgY29uc3QgW2RlZ3JlZV0gPSB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8RGVncmVlPignZGVncmVlJyk7XG5cbiAgICBpZiAoIWZhY3VsdHkgfHwgIWRlZ3JlZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgQUxMT1dFRF9GQUNVTFRJRVNfRk9SX0NPTUJJTkFUSU9OLmluY2x1ZGVzKGZhY3VsdHkubmFtZS5kZSkgJiZcbiAgICAgICAgZGVncmVlLmFiYnJldmlhdGlvbi5kZSA9PT0gREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4uQkFDSEVMT1JcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yQmFjaGVsb3JBbmRUZWFjaGluZ0RlZ3JlZXNFbmFibGUoKSB7XG4gICAgY29uc3QgW2RlZ3JlZV0gPSB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8RGVncmVlPignZGVncmVlJyk7XG5cbiAgICBpZiAoIWRlZ3JlZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgZGVncmVlLmFiYnJldmlhdGlvbi5kZSA9PT0gREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4uQkFDSEVMT1IgfHxcbiAgICAgICAgZGVncmVlLmFiYnJldmlhdGlvbi5kZSA9PT0gREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4uVEVBQ0hJTkdfREVHUkVFXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkbWlzc2lvblJlcXVpcmVtZW50c1RlYWNoaW5nRGVncmVlQXRIaWdoZXJTZW1lc3RlckVuYWJsZWQoKSB7XG4gICAgY29uc3QgW2JhY2hlbG9yT3JUZWFjaGluZ0FkbWlzc2lvblJlcXVpcmVtZW50XSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxNdWx0aWxpbmd1YWxMaW5rPihcbiAgICAgICAgJ2FkbWlzc2lvbl9yZXF1aXJlbWVudHMuYmFjaGVsb3Jfb3JfdGVhY2hpbmdfZGVncmVlJyxcbiAgICApO1xuXG4gICAgaWYgKCFiYWNoZWxvck9yVGVhY2hpbmdBZG1pc3Npb25SZXF1aXJlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhY2hlbG9yT3JUZWFjaGluZ0FkbWlzc2lvblJlcXVpcmVtZW50Lm5hbWUuZGUgIT09IEFETUlTU0lPTl9SRVFVSVJFTUVOVF9GUkVFO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yTWFzdGVyc0RlZ3JlZSgpIHtcbiAgICBjb25zdCBbZGVncmVlXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxEZWdyZWU+KCdkZWdyZWUnKTtcblxuICAgIGlmICghZGVncmVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVncmVlLmFiYnJldmlhdGlvbi5kZSA9PT0gREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4uTUFTVEVSUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlU2tpbGxzRm9yRmFjdWx0eU9mSHVtYW5pdGllc09ubHlFbmFibGVkKCkge1xuICAgIGNvbnN0IFtkZWdyZWVdID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PERlZ3JlZT4oJ2RlZ3JlZScpO1xuICAgIGNvbnN0IFtmYWN1bHR5XSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxNdWx0aWxpbmd1YWxMaW5rPignZmFjdWx0eScpO1xuXG4gICAgaWYgKCFkZWdyZWUgfHwgIWZhY3VsdHkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIChkZWdyZWUuYWJicmV2aWF0aW9uLmRlID09PSBERUdSRUVfQUJCUkVWSUFUSU9OX0dFUk1BTi5CQUNIRUxPUiB8fFxuICAgICAgICAgICAgZGVncmVlLmFiYnJldmlhdGlvbi5kZSA9PT0gREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4uVEVBQ0hJTkdfREVHUkVFKSAmJlxuICAgICAgICBmYWN1bHR5Lm5hbWUuZGUgPT09IEZBQ1VMVFlfUEhJTE9TT1BIWVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBsaWNhdGlvbkRlYWRsaW5lU3VtbWVyU2VtZXN0ZXJFbmFibGVkKCkge1xuICAgIGNvbnN0IFtzZW1lc3Rlcl0gPSB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8RGVncmVlPignc2VtZXN0ZXJfZGF0ZXMnKTtcblxuICAgIGlmICghc2VtZXN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBzZW1lc3Rlci5uYW1lLmRlID09PSBTRU1FU1RFUl9TVU1NRVI7XG59XG4iLCJpbXBvcnQgcHJvZHVjZSwgeyBJbW11dGFibGUgfSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHVzZUVudGl0eVByb3AgfSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YSc7XG5cbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMgfSBmcm9tICcuLi9kZWZzJztcblxuLyoqXG4gKiBIb29rIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYW5kIGEgc2V0dGVyIGZvciB0aGVcbiAqIHNwZWNpZmllZCBwcm9wZXJ0eSBvZiB0aGUgY3VycmVudCBEZWdyZWVQcm9ncmFtRGF0YS5cbiAqIFNob3VsZCBiZSB1c2VkIG9ubHkgZm9yIHNpbmdsZSBEZWdyZWVQcm9ncmFtIGVkaXQgc2NyZWVuLlxuICpcbiAqIFRvIG1ha2UgaW1tdXRhYmxlIGNoYW5nZXMgZWFzeSwgSW1tZXIgbGlicmFyeSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSBwYXRoIFBhdGggdG8gRGVncmVlUHJvZ3JhbURhdGEgdmFsdWUuXG4gKiBAdHlwZVBhcmFtIFZhbHVlIERlZmluaXRpb24gb2YgcmV0dXJuZWQgRGVncmVlUHJvZ3JhbURhdGEgcHJvcGVydHkuXG4gKiBAcmV0dXJucyBBbiBhcnJheSB3aGVyZSB0aGUgZmlyc3QgaXRlbSBpcyB0aGUgcHJvcGVydHkgdmFsdWUsIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSBzZXR0ZXIuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYFxuICogZnVuY3Rpb24gTXVsdGlsaW5ndWFsSW5wdXQoKSB7XG4gKiAgICAgY29uc3QgW2VuZ2xpc2hUaXRsZSwgc2V0RW5nbGlzaFRpdGxlXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxNdWx0aWxpbmd1YWxTdHJpbmc+KCd0aXRsZS5lbicpO1xuICogICAgIHJldHVybiA8SW5wdXQgZGVzY3JpcHRpb249XCJFbmdsaXNoIHRpdGxlXCJcbiAqICAgICAgICAgICAgdmFsdWU9e2VuZ2xpc2hUaXRsZX1cbiAqICAgICAgICAgICAgb25DbGljaz17c2V0RW5nbGlzaFRpdGxlfSAvPlxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxWYWx1ZT4oXG4gICAgcGF0aDogRGVncmVlUHJvZ3JhbURhdGFQYXRocyxcbik6IFtJbW11dGFibGU8dW5kZWZpbmVkIHwgVmFsdWU+LCAodmFsdWU6IFZhbHVlKSA9PiB2b2lkXSB7XG4gICAgY29uc3QgW2RlZ3JlZVByb2dyYW1EYXRhLCBzZXREZWdyZWVQcm9ncmFtRGF0YV0gPSB1c2VFbnRpdHlQcm9wKFxuICAgICAgICAncG9zdFR5cGUnLFxuICAgICAgICBzZXJ2ZXJEYXRhKCkucG9zdFR5cGUsXG4gICAgICAgIHNlcnZlckRhdGEoKS5wcm9wZXJ0eU5hbWUsXG4gICAgKTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIGdldChkZWdyZWVQcm9ncmFtRGF0YSwgcGF0aCksXG4gICAgICAgICh2YWw6IFZhbHVlKSA9PlxuICAgICAgICAgICAgc2V0RGVncmVlUHJvZ3JhbURhdGEoXG4gICAgICAgICAgICAgICAgcHJvZHVjZTxWYWx1ZT4oZGVncmVlUHJvZ3JhbURhdGEsIChkcmFmdCkgPT4gc2V0KGRyYWZ0LCBwYXRoLCB2YWwpKSxcbiAgICAgICAgICAgICksXG4gICAgXTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eUlkKHR5cGU6ICd0ZXJtJyB8ICdvcHRpb24nIHwgJ3Bvc3RfbWV0YScgfCAncG9zdCcsIGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7dHlwZX06JHtpZH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5SWQoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGlkLnNwbGl0KCc6JylbMV0gPz8gMCwgMTApO1xufVxuIiwiaW1wb3J0IHsgRGVncmVlUHJvZ3JhbUVkaXRvclNlcnZlckRhdGFUeXBlIH0gZnJvbSAnLi4vZGVmcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgRGVncmVlUHJvZ3JhbUVkaXRvclNlcnZlckRhdGE6IERlZ3JlZVByb2dyYW1FZGl0b3JTZXJ2ZXJEYXRhVHlwZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcnZlckRhdGEoKSB7XG4gICAgaWYgKHdpbmRvdy5EZWdyZWVQcm9ncmFtRWRpdG9yU2VydmVyRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIGRhdGEgY291bGQgbm90IGJlIGxvYWRlZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93LkRlZ3JlZVByb2dyYW1FZGl0b3JTZXJ2ZXJEYXRhIGFzIERlZ3JlZVByb2dyYW1FZGl0b3JTZXJ2ZXJEYXRhVHlwZTtcbn1cbiIsImltcG9ydCB7IHByb3BlcnR5SWQgfSBmcm9tICcuL2lkSGVscGVycyc7XG5cbmltcG9ydCB7XG4gICAgRGVncmVlLFxuICAgIERlZ3JlZUFiYnJldmlhdGlvbkVuZ2xpc2gsXG4gICAgRGVncmVlQWJicmV2aWF0aW9uR2VybWFuLFxuICAgIE11bHRpbGluZ3VhbExpbmssXG4gICAgTXVsdGlsaW5ndWFsU3RyaW5nLFxufSBmcm9tICdkZWZzJztcbmltcG9ydCB7IE11bHRpbGluZ3VhbExpbmtNZXRhLCBXcFRlcm0gfSBmcm9tICdkZWZzL3Rlcm0nO1xuXG5jb25zdCBFTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HID0ge1xuICAgIGlkOiAnJyxcbiAgICBkZTogJycgYXMgRGVncmVlQWJicmV2aWF0aW9uR2VybWFuLFxuICAgIGVuOiAnJyBhcyBEZWdyZWVBYmJyZXZpYXRpb25FbmdsaXNoLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbFN0cmluZyhcbiAgICB0ZXJtOiBXcFRlcm08eyBuYW1lX2VuOiBzdHJpbmcgfT4gfCBudWxsLFxuKTogTXVsdGlsaW5ndWFsU3RyaW5nIHtcbiAgICByZXR1cm4gdGVybVxuICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZW46IHRlcm0ubWV0YS5uYW1lX2VuID8/ICcnLFxuICAgICAgICAgICAgICBkZTogdGVybS5uYW1lLFxuICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybScsIHRlcm0uaWQpLFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7IC4uLkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsoXG4gICAgdGVybTogV3BUZXJtPE11bHRpbGluZ3VhbExpbmtNZXRhPiB8IG51bGwsXG4pOiBNdWx0aWxpbmd1YWxMaW5rIHtcbiAgICByZXR1cm4gdGVybVxuICAgICAgICA/IHtcbiAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCB0ZXJtLmlkKSxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCBgJHt0ZXJtLmlkfS5uYW1lYCksXG4gICAgICAgICAgICAgICAgICBkZTogdGVybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZW46IHRlcm0ubWV0YS5uYW1lX2VuID8/ICcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsaW5rX3RleHQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBwcm9wZXJ0eUlkKCd0ZXJtJywgYCR7dGVybS5pZH0ubGlua190ZXh0YCksXG4gICAgICAgICAgICAgICAgICBkZTogdGVybS5tZXRhLmxpbmtfdGV4dCA/PyAnJyxcbiAgICAgICAgICAgICAgICAgIGVuOiB0ZXJtLm1ldGEubGlua190ZXh0X2VuID8/ICcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsaW5rX3VybDoge1xuICAgICAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCBgJHt0ZXJtLmlkfS5saW5rX3VybGApLFxuICAgICAgICAgICAgICAgICAgZGU6IHRlcm0ubWV0YS5saW5rX3VybCA/PyAnJyxcbiAgICAgICAgICAgICAgICAgIGVuOiB0ZXJtLm1ldGEubGlua191cmxfZW4gPz8gJycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICBuYW1lOiB7IC4uLkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkcgfSxcbiAgICAgICAgICAgICAgbGlua190ZXh0OiB7IC4uLkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkcgfSxcbiAgICAgICAgICAgICAgbGlua191cmw6IHsgLi4uRU1QVFlfTVVMVElMSU5HVUFMX1NUUklORyB9LFxuICAgICAgICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1UZXJtVG9EZWdyZWUoXG4gICAgdGVybTogV3BUZXJtPHtcbiAgICAgICAgbmFtZV9lbjogc3RyaW5nO1xuICAgICAgICBhYmJyZXZpYXRpb246IERlZ3JlZUFiYnJldmlhdGlvbkdlcm1hbjtcbiAgICAgICAgYWJicmV2aWF0aW9uX2VuOiBEZWdyZWVBYmJyZXZpYXRpb25FbmdsaXNoO1xuICAgIH0+IHwgbnVsbCxcbik6IERlZ3JlZSB7XG4gICAgcmV0dXJuIHRlcm1cbiAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGlkOiBwcm9wZXJ0eUlkKCd0ZXJtJywgdGVybS5pZCksXG4gICAgICAgICAgICAgIGFiYnJldmlhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCBgJHt0ZXJtLmlkfS5hYmJyZXZpYXRpb25gKSxcbiAgICAgICAgICAgICAgICAgIGRlOiB0ZXJtLm1ldGEuYWJicmV2aWF0aW9uID8/ICcnLFxuICAgICAgICAgICAgICAgICAgZW46IHRlcm0ubWV0YS5hYmJyZXZpYXRpb25fZW4gPz8gJycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBwcm9wZXJ0eUlkKCd0ZXJtJywgYCR7dGVybS5pZH0ubmFtZWApLFxuICAgICAgICAgICAgICAgICAgZGU6IHRlcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGVuOiB0ZXJtLm1ldGEubmFtZV9lbiA/PyAnJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgIGFiYnJldmlhdGlvbjogeyAuLi5FTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIH0sXG4gICAgICAgICAgICAgIG5hbWU6IHsgLi4uRU1QVFlfTVVMVElMSU5HVUFMX1NUUklORyB9LFxuICAgICAgICAgIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF9yZWY7XG5cbi8vIFNob3VsZCBiZSBubyBpbXBvcnRzIGhlcmUhXG4vLyBTb21lIHRoaW5ncyB0aGF0IHNob3VsZCBiZSBldmFsdWF0ZWQgYmVmb3JlIGFsbCBlbHNlLi4uXG4vLyBXZSBvbmx5IHdhbnQgdG8ga25vdyBpZiBub24tcG9seWZpbGxlZCBzeW1ib2xzIGFyZSBhdmFpbGFibGVcbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZlxuLyojX19QVVJFX18qL1xuU3ltYm9sKFwieFwiKSA9PT0gXCJzeW1ib2xcIjtcbnZhciBoYXNNYXAgPSB0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiO1xudmFyIGhhc1NldCA9IHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgaGFzUHJveGllcyA9IHR5cGVvZiBQcm94eSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgUHJveHkucmV2b2NhYmxlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiO1xuLyoqXHJcbiAqIFRoZSBzZW50aW5lbCB2YWx1ZSByZXR1cm5lZCBieSBwcm9kdWNlcnMgdG8gcmVwbGFjZSB0aGUgZHJhZnQgd2l0aCB1bmRlZmluZWQuXHJcbiAqL1xuXG52YXIgTk9USElORyA9IGhhc1N5bWJvbCA/XG4vKiNfX1BVUkVfXyovXG5TeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKSA6IChfcmVmID0ge30sIF9yZWZbXCJpbW1lci1ub3RoaW5nXCJdID0gdHJ1ZSwgX3JlZik7XG4vKipcclxuICogVG8gbGV0IEltbWVyIHRyZWF0IHlvdXIgY2xhc3MgaW5zdGFuY2VzIGFzIHBsYWluIGltbXV0YWJsZSBvYmplY3RzXHJcbiAqIChhbGJlaXQgd2l0aCBhIGN1c3RvbSBwcm90b3R5cGUpLCB5b3UgbXVzdCBkZWZpbmUgZWl0aGVyIGFuIGluc3RhbmNlIHByb3BlcnR5XHJcbiAqIG9yIGEgc3RhdGljIHByb3BlcnR5IG9uIGVhY2ggb2YgeW91ciBjdXN0b20gY2xhc3Nlcy5cclxuICpcclxuICogT3RoZXJ3aXNlLCB5b3VyIGNsYXNzIGluc3RhbmNlIHdpbGwgbmV2ZXIgYmUgZHJhZnRlZCwgd2hpY2ggbWVhbnMgaXQgd29uJ3QgYmVcclxuICogc2FmZSB0byBtdXRhdGUgaW4gYSBwcm9kdWNlIGNhbGxiYWNrLlxyXG4gKi9cblxudmFyIERSQUZUQUJMRSA9IGhhc1N5bWJvbCA/XG4vKiNfX1BVUkVfXyovXG5TeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpIDogXCJfXyRpbW1lcl9kcmFmdGFibGVcIjtcbnZhciBEUkFGVF9TVEFURSA9IGhhc1N5bWJvbCA/XG4vKiNfX1BVUkVfXyovXG5TeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIikgOiBcIl9fJGltbWVyX3N0YXRlXCI7IC8vIEV2ZW4gYSBwb2x5ZmlsbGVkIFN5bWJvbCBtaWdodCBwcm92aWRlIFN5bWJvbC5pdGVyYXRvclxuXG52YXIgaXRlcmF0b3JTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuXG52YXIgZXJyb3JzID0ge1xuICAwOiBcIklsbGVnYWwgc3RhdGVcIixcbiAgMTogXCJJbW1lciBkcmFmdHMgY2Fubm90IGhhdmUgY29tcHV0ZWQgcHJvcGVydGllc1wiLFxuICAyOiBcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsXG4gIDM6IGZ1bmN0aW9uIF8oZGF0YSkge1xuICAgIHJldHVybiBcIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIgKyBkYXRhO1xuICB9LFxuICA0OiBcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsXG4gIDU6IFwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsXG4gIDY6IFwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsXG4gIDc6IFwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsXG4gIDg6IFwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLFxuICA5OiBcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIixcbiAgMTA6IFwiVGhlIGdpdmVuIGRyYWZ0IGlzIGFscmVhZHkgZmluYWxpemVkXCIsXG4gIDExOiBcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIDEyOiBcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIDEzOiBcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLFxuICAxNDogXCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsXG4gIDE1OiBmdW5jdGlvbiBfKHBhdGgpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIiArIHBhdGg7XG4gIH0sXG4gIDE2OiAnU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsXG4gIDE3OiBmdW5jdGlvbiBfKG9wKSB7XG4gICAgcmV0dXJuIFwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIiArIG9wO1xuICB9LFxuICAxODogZnVuY3Rpb24gXyhwbHVnaW4pIHtcbiAgICByZXR1cm4gXCJUaGUgcGx1Z2luIGZvciAnXCIgKyBwbHVnaW4gKyBcIicgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIGBlbmFibGVcIiArIHBsdWdpbiArIFwiKClgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uXCI7XG4gIH0sXG4gIDIwOiBcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIixcbiAgMjE6IGZ1bmN0aW9uIF8odGhpbmcpIHtcbiAgICByZXR1cm4gXCJwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICdcIiArIHRoaW5nICsgXCInXCI7XG4gIH0sXG4gIDIyOiBmdW5jdGlvbiBfKHRoaW5nKSB7XG4gICAgcmV0dXJuIFwiJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIiArIHRoaW5nO1xuICB9LFxuICAyMzogZnVuY3Rpb24gXyh0aGluZykge1xuICAgIHJldHVybiBcIidvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiICsgdGhpbmc7XG4gIH0sXG4gIDI0OiBcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIlxufTtcbmZ1bmN0aW9uIGRpZShlcnJvcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB7XG4gICAgdmFyIGUgPSBlcnJvcnNbZXJyb3JdO1xuICAgIHZhciBtc2cgPSAhZSA/IFwidW5rbm93biBlcnJvciBucjogXCIgKyBlcnJvciA6IHR5cGVvZiBlID09PSBcImZ1bmN0aW9uXCIgPyBlLmFwcGx5KG51bGwsIGFyZ3MpIDogZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbSW1tZXJdIFwiICsgbXNnKTtcbiAgfVxufVxuXG4vKiogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBJbW1lciBkcmFmdCAqL1xuXG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGlzRHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgISF2YWx1ZVtEUkFGVF9TVEFURV07XG59XG4vKiogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBjYW4gYmUgZHJhZnRlZCBieSBJbW1lciAqL1xuXG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGlzRHJhZnRhYmxlKHZhbHVlKSB7XG4gIHZhciBfdmFsdWUkY29uc3RydWN0b3I7XG5cbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgISF2YWx1ZVtEUkFGVEFCTEVdIHx8ICEhKChfdmFsdWUkY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX3ZhbHVlJGNvbnN0cnVjdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdmFsdWUkY29uc3RydWN0b3JbRFJBRlRBQkxFXSkgfHwgaXNNYXAodmFsdWUpIHx8IGlzU2V0KHZhbHVlKTtcbn1cbnZhciBvYmplY3RDdG9yU3RyaW5nID1cbi8qI19fUFVSRV9fKi9cbk9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuXG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIEN0b3IgPSBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgaWYgKEN0b3IgPT09IE9iamVjdCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSBcImZ1bmN0aW9uXCIgJiYgRnVuY3Rpb24udG9TdHJpbmcuY2FsbChDdG9yKSA9PT0gb2JqZWN0Q3RvclN0cmluZztcbn1cbmZ1bmN0aW9uIG9yaWdpbmFsKHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpIGRpZSgyMywgdmFsdWUpO1xuICByZXR1cm4gdmFsdWVbRFJBRlRfU1RBVEVdLmJhc2VfO1xufVxuLyojX19QVVJFX18qL1xuXG52YXIgb3duS2V5cyA9IHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Qub3duS2V5cyA/IFJlZmxlY3Qub3duS2V5cyA6IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSBcInVuZGVmaW5lZFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKTtcbn0gOlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCkge1xuICAvLyBQb2x5ZmlsbCBuZWVkZWQgZm9yIEhlcm1lcyBhbmQgSUUsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svaGVybWVzL2lzc3Vlcy8yNzRcbiAgdmFyIHJlcyA9IHt9O1xuICBvd25LZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmVzW2tleV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59O1xuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXIsIGVudW1lcmFibGVPbmx5KSB7XG4gIGlmIChlbnVtZXJhYmxlT25seSA9PT0gdm9pZCAwKSB7XG4gICAgZW51bWVyYWJsZU9ubHkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChnZXRBcmNodHlwZShvYmopID09PSAwXG4gIC8qIE9iamVjdCAqL1xuICApIHtcbiAgICAgIChlbnVtZXJhYmxlT25seSA/IE9iamVjdC5rZXlzIDogb3duS2V5cykob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFlbnVtZXJhYmxlT25seSB8fCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiKSBpdGVyKGtleSwgb2JqW2tleV0sIG9iaik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBpdGVyKGluZGV4LCBlbnRyeSwgb2JqKTtcbiAgICB9KTtcbiAgfVxufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBnZXRBcmNodHlwZSh0aGluZykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgc3RhdGUgPSB0aGluZ1tEUkFGVF9TVEFURV07XG4gIHJldHVybiBzdGF0ZSA/IHN0YXRlLnR5cGVfID4gMyA/IHN0YXRlLnR5cGVfIC0gNCAvLyBjYXVzZSBPYmplY3QgYW5kIEFycmF5IG1hcCBiYWNrIGZyb20gNCBhbmQgNVxuICA6IHN0YXRlLnR5cGVfIC8vIG90aGVycyBhcmUgdGhlIHNhbWVcbiAgOiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IDFcbiAgLyogQXJyYXkgKi9cbiAgOiBpc01hcCh0aGluZykgPyAyXG4gIC8qIE1hcCAqL1xuICA6IGlzU2V0KHRoaW5nKSA/IDNcbiAgLyogU2V0ICovXG4gIDogMFxuICAvKiBPYmplY3QgKi9cbiAgO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBoYXModGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMlxuICAvKiBNYXAgKi9cbiAgPyB0aGluZy5oYXMocHJvcCkgOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpbmcsIHByb3ApO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBnZXQodGhpbmcsIHByb3ApIHtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSAyXG4gIC8qIE1hcCAqL1xuICA/IHRoaW5nLmdldChwcm9wKSA6IHRoaW5nW3Byb3BdO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBzZXQodGhpbmcsIHByb3BPck9sZFZhbHVlLCB2YWx1ZSkge1xuICB2YXIgdCA9IGdldEFyY2h0eXBlKHRoaW5nKTtcbiAgaWYgKHQgPT09IDJcbiAgLyogTWFwICovXG4gICkgdGhpbmcuc2V0KHByb3BPck9sZFZhbHVlLCB2YWx1ZSk7ZWxzZSBpZiAodCA9PT0gM1xuICAvKiBTZXQgKi9cbiAgKSB7XG4gICAgICB0aGluZy5kZWxldGUocHJvcE9yT2xkVmFsdWUpO1xuICAgICAgdGhpbmcuYWRkKHZhbHVlKTtcbiAgICB9IGVsc2UgdGhpbmdbcHJvcE9yT2xkVmFsdWVdID0gdmFsdWU7XG59XG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9jNjk5MDRhNTExYjkwMDI2NjkzNTE2ODIyMzA2M2RkODc3MmRmYzQwL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvc2hhbGxvd0VxdWFsLmpzXG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gaXNNYXAodGFyZ2V0KSB7XG4gIHJldHVybiBoYXNNYXAgJiYgdGFyZ2V0IGluc3RhbmNlb2YgTWFwO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBpc1NldCh0YXJnZXQpIHtcbiAgcmV0dXJuIGhhc1NldCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBTZXQ7XG59XG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGxhdGVzdChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuY29weV8gfHwgc3RhdGUuYmFzZV87XG59XG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KGJhc2UpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZSkpIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiYXNlKTtcbiAgdmFyIGRlc2NyaXB0b3JzID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiYXNlKTtcbiAgZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFXTtcbiAgdmFyIGtleXMgPSBvd25LZXlzKGRlc2NyaXB0b3JzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgZGVzYyA9IGRlc2NyaXB0b3JzW2tleV07XG5cbiAgICBpZiAoZGVzYy53cml0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICAgICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIH0gLy8gbGlrZSBvYmplY3QuYXNzaWduLCB3ZSB3aWxsIHJlYWQgYW55IF9vd25fLCBnZXQvc2V0IGFjY2Vzc29ycy4gVGhpcyBoZWxwcyBpbiBkZWFsaW5nXG4gICAgLy8gd2l0aCBsaWJyYXJpZXMgdGhhdCB0cmFwIHZhbHVlcywgbGlrZSBtb2J4IG9yIHZ1ZVxuICAgIC8vIHVubGlrZSBvYmplY3QuYXNzaWduLCBub24tZW51bWVyYWJsZXMgd2lsbCBiZSBjb3BpZWQgYXMgd2VsbFxuXG5cbiAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIGRlc2NyaXB0b3JzW2tleV0gPSB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgIHZhbHVlOiBiYXNlW2tleV1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2UpLCBkZXNjcmlwdG9ycyk7XG59XG5mdW5jdGlvbiBmcmVlemUob2JqLCBkZWVwKSB7XG4gIGlmIChkZWVwID09PSB2b2lkIDApIHtcbiAgICBkZWVwID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNGcm96ZW4ob2JqKSB8fCBpc0RyYWZ0KG9iaikgfHwgIWlzRHJhZnRhYmxlKG9iaikpIHJldHVybiBvYmo7XG5cbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPiAxXG4gIC8qIE1hcCBvciBTZXQgKi9cbiAgKSB7XG4gICAgICBvYmouc2V0ID0gb2JqLmFkZCA9IG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnM7XG4gICAgfVxuXG4gIE9iamVjdC5mcmVlemUob2JqKTtcbiAgaWYgKGRlZXApIGVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBmcmVlemUodmFsdWUsIHRydWUpO1xuICB9LCB0cnVlKTtcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zKCkge1xuICBkaWUoMik7XG59XG5cbmZ1bmN0aW9uIGlzRnJvemVuKG9iaikge1xuICBpZiAob2JqID09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHRydWU7IC8vIFNlZSAjNjAwLCBJRSBkaWVzIG9uIG5vbi1vYmplY3RzIGluIE9iamVjdC5pc0Zyb3plblxuXG4gIHJldHVybiBPYmplY3QuaXNGcm96ZW4ob2JqKTtcbn1cblxuLyoqIFBsdWdpbiB1dGlsaXRpZXMgKi9cblxudmFyIHBsdWdpbnMgPSB7fTtcbmZ1bmN0aW9uIGdldFBsdWdpbihwbHVnaW5LZXkpIHtcbiAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbcGx1Z2luS2V5XTtcblxuICBpZiAoIXBsdWdpbikge1xuICAgIGRpZSgxOCwgcGx1Z2luS2V5KTtcbiAgfSAvLyBAdHMtaWdub3JlXG5cblxuICByZXR1cm4gcGx1Z2luO1xufVxuZnVuY3Rpb24gbG9hZFBsdWdpbihwbHVnaW5LZXksIGltcGxlbWVudGF0aW9uKSB7XG4gIGlmICghcGx1Z2luc1twbHVnaW5LZXldKSBwbHVnaW5zW3BsdWdpbktleV0gPSBpbXBsZW1lbnRhdGlvbjtcbn1cblxudmFyIGN1cnJlbnRTY29wZTtcbmZ1bmN0aW9uIGdldEN1cnJlbnRTY29wZSgpIHtcbiAgaWYgKCAhY3VycmVudFNjb3BlKSBkaWUoMCk7XG4gIHJldHVybiBjdXJyZW50U2NvcGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjb3BlKHBhcmVudF8sIGltbWVyXykge1xuICByZXR1cm4ge1xuICAgIGRyYWZ0c186IFtdLFxuICAgIHBhcmVudF86IHBhcmVudF8sXG4gICAgaW1tZXJfOiBpbW1lcl8sXG4gICAgLy8gV2hlbmV2ZXIgdGhlIG1vZGlmaWVkIGRyYWZ0IGNvbnRhaW5zIGEgZHJhZnQgZnJvbSBhbm90aGVyIHNjb3BlLCB3ZVxuICAgIC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG4gICAgY2FuQXV0b0ZyZWV6ZV86IHRydWUsXG4gICAgdW5maW5hbGl6ZWREcmFmdHNfOiAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKSB7XG4gIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKTsgLy8gYXNzZXJ0IHdlIGhhdmUgdGhlIHBsdWdpblxuXG4gICAgc2NvcGUucGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyA9IHBhdGNoTGlzdGVuZXI7XG4gIH1cbn1cbmZ1bmN0aW9uIHJldm9rZVNjb3BlKHNjb3BlKSB7XG4gIGxlYXZlU2NvcGUoc2NvcGUpO1xuICBzY29wZS5kcmFmdHNfLmZvckVhY2gocmV2b2tlRHJhZnQpOyAvLyBAdHMtaWdub3JlXG5cbiAgc2NvcGUuZHJhZnRzXyA9IG51bGw7XG59XG5mdW5jdGlvbiBsZWF2ZVNjb3BlKHNjb3BlKSB7XG4gIGlmIChzY29wZSA9PT0gY3VycmVudFNjb3BlKSB7XG4gICAgY3VycmVudFNjb3BlID0gc2NvcGUucGFyZW50XztcbiAgfVxufVxuZnVuY3Rpb24gZW50ZXJTY29wZShpbW1lcikge1xuICByZXR1cm4gY3VycmVudFNjb3BlID0gY3JlYXRlU2NvcGUoY3VycmVudFNjb3BlLCBpbW1lcik7XG59XG5cbmZ1bmN0aW9uIHJldm9rZURyYWZ0KGRyYWZ0KSB7XG4gIHZhciBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgaWYgKHN0YXRlLnR5cGVfID09PSAwXG4gIC8qIFByb3h5T2JqZWN0ICovXG4gIHx8IHN0YXRlLnR5cGVfID09PSAxXG4gIC8qIFByb3h5QXJyYXkgKi9cbiAgKSBzdGF0ZS5yZXZva2VfKCk7ZWxzZSBzdGF0ZS5yZXZva2VkXyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSkge1xuICBzY29wZS51bmZpbmFsaXplZERyYWZ0c18gPSBzY29wZS5kcmFmdHNfLmxlbmd0aDtcbiAgdmFyIGJhc2VEcmFmdCA9IHNjb3BlLmRyYWZ0c19bMF07XG4gIHZhciBpc1JlcGxhY2VkID0gcmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBiYXNlRHJhZnQ7XG4gIGlmICghc2NvcGUuaW1tZXJfLnVzZVByb3hpZXNfKSBnZXRQbHVnaW4oXCJFUzVcIikud2lsbEZpbmFsaXplRVM1XyhzY29wZSwgcmVzdWx0LCBpc1JlcGxhY2VkKTtcblxuICBpZiAoaXNSZXBsYWNlZCkge1xuICAgIGlmIChiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLm1vZGlmaWVkXykge1xuICAgICAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICAgICAgZGllKDQpO1xuICAgIH1cblxuICAgIGlmIChpc0RyYWZ0YWJsZShyZXN1bHQpKSB7XG4gICAgICAvLyBGaW5hbGl6ZSB0aGUgcmVzdWx0IGluIGNhc2UgaXQgY29udGFpbnMgKG9yIGlzKSBhIHN1YnNldCBvZiB0aGUgZHJhZnQuXG4gICAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgcmVzdWx0KTtcbiAgICAgIGlmICghc2NvcGUucGFyZW50XykgbWF5YmVGcmVlemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLmJhc2VfLCByZXN1bHQsIHNjb3BlLnBhdGNoZXNfLCBzY29wZS5pbnZlcnNlUGF0Y2hlc18pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5hbGl6ZSB0aGUgYmFzZSBkcmFmdC5cbiAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgYmFzZURyYWZ0LCBbXSk7XG4gIH1cblxuICByZXZva2VTY29wZShzY29wZSk7XG5cbiAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8oc2NvcGUucGF0Y2hlc18sIHNjb3BlLmludmVyc2VQYXRjaGVzXyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5hbGl6ZShyb290U2NvcGUsIHZhbHVlLCBwYXRoKSB7XG4gIC8vIERvbid0IHJlY3Vyc2UgaW4gdGhvIHJlY3Vyc2l2ZSBkYXRhIHN0cnVjdHVyZXNcbiAgaWYgKGlzRnJvemVuKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICB2YXIgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07IC8vIEEgcGxhaW4gb2JqZWN0LCBtaWdodCBuZWVkIGZyZWV6aW5nLCBtaWdodCBjb250YWluIGRyYWZ0c1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICBlYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCBjaGlsZFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCB2YWx1ZSwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKTtcbiAgICB9LCB0cnVlIC8vIFNlZSAjNTkwLCBkb24ndCByZWN1cnNlIGludG8gbm9uLWVudW1lcmFibGUgb2Ygbm9uIGRyYWZ0ZWQgb2JqZWN0c1xuICAgICk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IC8vIE5ldmVyIGZpbmFsaXplIGRyYWZ0cyBvd25lZCBieSBhbm90aGVyIHNjb3BlLlxuXG5cbiAgaWYgKHN0YXRlLnNjb3BlXyAhPT0gcm9vdFNjb3BlKSByZXR1cm4gdmFsdWU7IC8vIFVubW9kaWZpZWQgZHJhZnQsIHJldHVybiB0aGUgKGZyb3plbikgb3JpZ2luYWxcblxuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgc3RhdGUuYmFzZV8sIHRydWUpO1xuICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgfSAvLyBOb3QgZmluYWxpemVkIHlldCwgbGV0J3MgZG8gdGhhdCBub3dcblxuXG4gIGlmICghc3RhdGUuZmluYWxpemVkXykge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIHN0YXRlLnNjb3BlXy51bmZpbmFsaXplZERyYWZ0c18tLTtcbiAgICB2YXIgcmVzdWx0ID0gLy8gRm9yIEVTNSwgY3JlYXRlIGEgZ29vZCBjb3B5IGZyb20gdGhlIGRyYWZ0IGZpcnN0LCB3aXRoIGFkZGVkIGtleXMgYW5kIHdpdGhvdXQgZGVsZXRlZCBrZXlzLlxuICAgIHN0YXRlLnR5cGVfID09PSA0XG4gICAgLyogRVM1T2JqZWN0ICovXG4gICAgfHwgc3RhdGUudHlwZV8gPT09IDVcbiAgICAvKiBFUzVBcnJheSAqL1xuICAgID8gc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShzdGF0ZS5kcmFmdF8pIDogc3RhdGUuY29weV87IC8vIEZpbmFsaXplIGFsbCBjaGlsZHJlbiBvZiB0aGUgY29weVxuICAgIC8vIEZvciBzZXRzIHdlIGNsb25lIGJlZm9yZSBpdGVyYXRpbmcsIG90aGVyd2lzZSB3ZSBjYW4gZ2V0IGluIGVuZGxlc3MgbG9vcCBkdWUgdG8gbW9kaWZ5aW5nIGR1cmluZyBpdGVyYXRpb24sIHNlZSAjNjI4XG4gICAgLy8gQWx0aG91Z2ggdGhlIG9yaWdpbmFsIHRlc3QgY2FzZSBkb2Vzbid0IHNlZW0gdmFsaWQgYW55d2F5LCBzbyBpZiB0aGlzIGluIHRoZSB3YXkgd2UgY2FuIHR1cm4gdGhlIG5leHQgbGluZVxuICAgIC8vIGJhY2sgdG8gZWFjaChyZXN1bHQsIC4uLi4pXG5cbiAgICBlYWNoKHN0YXRlLnR5cGVfID09PSAzXG4gICAgLyogU2V0ICovXG4gICAgPyBuZXcgU2V0KHJlc3VsdCkgOiByZXN1bHQsIGZ1bmN0aW9uIChrZXksIGNoaWxkVmFsdWUpIHtcbiAgICAgIHJldHVybiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHJlc3VsdCwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKTtcbiAgICB9KTsgLy8gZXZlcnl0aGluZyBpbnNpZGUgaXMgZnJvemVuLCB3ZSBjYW4gZnJlZXplIGhlcmVcblxuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgcmVzdWx0LCBmYWxzZSk7IC8vIGZpcnN0IHRpbWUgZmluYWxpemluZywgbGV0J3MgY3JlYXRlIHRob3NlIHBhdGNoZXNcblxuICAgIGlmIChwYXRoICYmIHJvb3RTY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVBhdGNoZXNfKHN0YXRlLCBwYXRoLCByb290U2NvcGUucGF0Y2hlc18sIHJvb3RTY29wZS5pbnZlcnNlUGF0Y2hlc18pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5jb3B5Xztcbn1cblxuZnVuY3Rpb24gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHBhcmVudFN0YXRlLCB0YXJnZXRPYmplY3QsIHByb3AsIGNoaWxkVmFsdWUsIHJvb3RQYXRoKSB7XG4gIGlmICggY2hpbGRWYWx1ZSA9PT0gdGFyZ2V0T2JqZWN0KSBkaWUoNSk7XG5cbiAgaWYgKGlzRHJhZnQoY2hpbGRWYWx1ZSkpIHtcbiAgICB2YXIgcGF0aCA9IHJvb3RQYXRoICYmIHBhcmVudFN0YXRlICYmIHBhcmVudFN0YXRlLnR5cGVfICE9PSAzXG4gICAgLyogU2V0ICovXG4gICAgJiYgLy8gU2V0IG9iamVjdHMgYXJlIGF0b21pYyBzaW5jZSB0aGV5IGhhdmUgbm8ga2V5cy5cbiAgICAhaGFzKHBhcmVudFN0YXRlLmFzc2lnbmVkXywgcHJvcCkgLy8gU2tpcCBkZWVwIHBhdGNoZXMgZm9yIGFzc2lnbmVkIGtleXMuXG4gICAgPyByb290UGF0aC5jb25jYXQocHJvcCkgOiB1bmRlZmluZWQ7IC8vIERyYWZ0cyBvd25lZCBieSBgc2NvcGVgIGFyZSBmaW5hbGl6ZWQgaGVyZS5cblxuICAgIHZhciByZXMgPSBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUsIHBhdGgpO1xuICAgIHNldCh0YXJnZXRPYmplY3QsIHByb3AsIHJlcyk7IC8vIERyYWZ0cyBmcm9tIGFub3RoZXIgc2NvcGUgbXVzdCBwcmV2ZW50ZWQgdG8gYmUgZnJvemVuXG4gICAgLy8gaWYgd2UgZ290IGEgZHJhZnQgYmFjayBmcm9tIGZpbmFsaXplLCB3ZSdyZSBpbiBhIG5lc3RlZCBwcm9kdWNlIGFuZCBzaG91bGRuJ3QgZnJlZXplXG5cbiAgICBpZiAoaXNEcmFmdChyZXMpKSB7XG4gICAgICByb290U2NvcGUuY2FuQXV0b0ZyZWV6ZV8gPSBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuO1xuICB9IC8vIFNlYXJjaCBuZXcgb2JqZWN0cyBmb3IgdW5maW5hbGl6ZWQgZHJhZnRzLiBGcm96ZW4gb2JqZWN0cyBzaG91bGQgbmV2ZXIgY29udGFpbiBkcmFmdHMuXG5cblxuICBpZiAoaXNEcmFmdGFibGUoY2hpbGRWYWx1ZSkgJiYgIWlzRnJvemVuKGNoaWxkVmFsdWUpKSB7XG4gICAgaWYgKCFyb290U2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHJvb3RTY29wZS51bmZpbmFsaXplZERyYWZ0c18gPCAxKSB7XG4gICAgICAvLyBvcHRpbWl6YXRpb246IGlmIGFuIG9iamVjdCBpcyBub3QgYSBkcmFmdCwgYW5kIHdlIGRvbid0IGhhdmUgdG9cbiAgICAgIC8vIGRlZXBmcmVlemUgZXZlcnl0aGluZywgYW5kIHdlIGFyZSBzdXJlIHRoYXQgbm8gZHJhZnRzIGFyZSBsZWZ0IGluIHRoZSByZW1haW5pbmcgb2JqZWN0XG4gICAgICAvLyBjYXVzZSB3ZSBzYXcgYW5kIGZpbmFsaXplZCBhbGwgZHJhZnRzIGFscmVhZHk7IHdlIGNhbiBzdG9wIHZpc2l0aW5nIHRoZSByZXN0IG9mIHRoZSB0cmVlLlxuICAgICAgLy8gVGhpcyBiZW5lZml0cyBlc3BlY2lhbGx5IGFkZGluZyBsYXJnZSBkYXRhIHRyZWUncyB3aXRob3V0IGZ1cnRoZXIgcHJvY2Vzc2luZy5cbiAgICAgIC8vIFNlZSBhZGQtZGF0YS5qcyBwZXJmIHRlc3RcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpOyAvLyBpbW1lciBkZWVwIGZyZWV6ZXMgcGxhaW4gb2JqZWN0cywgc28gaWYgdGhlcmUgaXMgbm8gcGFyZW50IHN0YXRlLCB3ZSBmcmVlemUgYXMgd2VsbFxuXG4gICAgaWYgKCFwYXJlbnRTdGF0ZSB8fCAhcGFyZW50U3RhdGUuc2NvcGVfLnBhcmVudF8pIG1heWJlRnJlZXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVGcmVlemUoc2NvcGUsIHZhbHVlLCBkZWVwKSB7XG4gIGlmIChkZWVwID09PSB2b2lkIDApIHtcbiAgICBkZWVwID0gZmFsc2U7XG4gIH1cblxuICBpZiAoc2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHNjb3BlLmNhbkF1dG9GcmVlemVfKSB7XG4gICAgZnJlZXplKHZhbHVlLCBkZWVwKTtcbiAgfVxufVxuXG4vKipcclxuICogUmV0dXJucyBhIG5ldyBkcmFmdCBvZiB0aGUgYGJhc2VgIG9iamVjdC5cclxuICpcclxuICogVGhlIHNlY29uZCBhcmd1bWVudCBpcyB0aGUgcGFyZW50IGRyYWZ0LXN0YXRlICh1c2VkIGludGVybmFsbHkpLlxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUHJveHlQcm94eShiYXNlLCBwYXJlbnQpIHtcbiAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgdHlwZV86IGlzQXJyYXkgPyAxXG4gICAgLyogUHJveHlBcnJheSAqL1xuICAgIDogMFxuICAgIC8qIFByb3h5T2JqZWN0ICovXG4gICAgLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAvLyBUcnVlIGZvciBib3RoIHNoYWxsb3cgYW5kIGRlZXAgY2hhbmdlcy5cbiAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgIC8vIFVzZWQgZHVyaW5nIGZpbmFsaXphdGlvbi5cbiAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBhc3NpZ25lZCAodHJ1ZSkgb3IgZGVsZXRlZCAoZmFsc2UpLlxuICAgIGFzc2lnbmVkXzoge30sXG4gICAgLy8gVGhlIHBhcmVudCBkcmFmdCBzdGF0ZS5cbiAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgLy8gVGhlIGJhc2Ugc3RhdGUuXG4gICAgYmFzZV86IGJhc2UsXG4gICAgLy8gVGhlIGJhc2UgcHJveHkuXG4gICAgZHJhZnRfOiBudWxsLFxuICAgIC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG4gICAgY29weV86IG51bGwsXG4gICAgLy8gQ2FsbGVkIGJ5IHRoZSBgcHJvZHVjZWAgZnVuY3Rpb24uXG4gICAgcmV2b2tlXzogbnVsbCxcbiAgICBpc01hbnVhbF86IGZhbHNlXG4gIH07IC8vIHRoZSB0cmFwcyBtdXN0IHRhcmdldCBzb21ldGhpbmcsIGEgYml0IGxpa2UgdGhlICdyZWFsJyBiYXNlLlxuICAvLyBidXQgYWxzbywgd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRldGVybWluZSBmcm9tIHRoZSB0YXJnZXQgd2hhdCB0aGUgcmVsZXZhbnQgc3RhdGUgaXNcbiAgLy8gKHRvIGF2b2lkIGNyZWF0aW5nIHRyYXBzIHBlciBpbnN0YW5jZSB0byBjYXB0dXJlIHRoZSBzdGF0ZSBpbiBjbG9zdXJlLFxuICAvLyBhbmQgdG8gYXZvaWQgY3JlYXRpbmcgd2VpcmQgaGlkZGVuIHByb3BlcnRpZXMgYXMgd2VsbClcbiAgLy8gU28gdGhlIHRyaWNrIGlzIHRvIHVzZSAnc3RhdGUnIGFzIHRoZSBhY3R1YWwgJ3RhcmdldCchIChhbmQgbWFrZSBzdXJlIHdlIGludGVyY2VwdCBldmVyeXRoaW5nKVxuICAvLyBOb3RlIHRoYXQgaW4gdGhlIGNhc2Ugb2YgYW4gYXJyYXksIHdlIHB1dCB0aGUgc3RhdGUgaW4gYW4gYXJyYXkgdG8gaGF2ZSBiZXR0ZXIgUmVmbGVjdCBkZWZhdWx0cyBvb3RiXG5cbiAgdmFyIHRhcmdldCA9IHN0YXRlO1xuICB2YXIgdHJhcHMgPSBvYmplY3RUcmFwcztcblxuICBpZiAoaXNBcnJheSkge1xuICAgIHRhcmdldCA9IFtzdGF0ZV07XG4gICAgdHJhcHMgPSBhcnJheVRyYXBzO1xuICB9XG5cbiAgdmFyIF9Qcm94eSRyZXZvY2FibGUgPSBQcm94eS5yZXZvY2FibGUodGFyZ2V0LCB0cmFwcyksXG4gICAgICByZXZva2UgPSBfUHJveHkkcmV2b2NhYmxlLnJldm9rZSxcbiAgICAgIHByb3h5ID0gX1Byb3h5JHJldm9jYWJsZS5wcm94eTtcblxuICBzdGF0ZS5kcmFmdF8gPSBwcm94eTtcbiAgc3RhdGUucmV2b2tlXyA9IHJldm9rZTtcbiAgcmV0dXJuIHByb3h5O1xufVxuLyoqXHJcbiAqIE9iamVjdCBkcmFmdHNcclxuICovXG5cbnZhciBvYmplY3RUcmFwcyA9IHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoc3RhdGUsIHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gRFJBRlRfU1RBVEUpIHJldHVybiBzdGF0ZTtcbiAgICB2YXIgc291cmNlID0gbGF0ZXN0KHN0YXRlKTtcblxuICAgIGlmICghaGFzKHNvdXJjZSwgcHJvcCkpIHtcbiAgICAgIC8vIG5vbi1leGlzdGluZyBvciBub24tb3duIHByb3BlcnR5Li4uXG4gICAgICByZXR1cm4gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gc291cmNlW3Byb3BdO1xuXG4gICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gLy8gQ2hlY2sgZm9yIGV4aXN0aW5nIGRyYWZ0IGluIG1vZGlmaWVkIHN0YXRlLlxuICAgIC8vIEFzc2lnbmVkIHZhbHVlcyBhcmUgbmV2ZXIgZHJhZnRlZC4gVGhpcyBjYXRjaGVzIGFueSBkcmFmdHMgd2UgY3JlYXRlZCwgdG9vLlxuXG5cbiAgICBpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApKSB7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV9bcHJvcF0gPSBjcmVhdGVQcm94eShzdGF0ZS5zY29wZV8uaW1tZXJfLCB2YWx1ZSwgc3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbiBoYXMoc3RhdGUsIHByb3ApIHtcbiAgICByZXR1cm4gcHJvcCBpbiBsYXRlc3Qoc3RhdGUpO1xuICB9LFxuICBvd25LZXlzOiBmdW5jdGlvbiBvd25LZXlzKHN0YXRlKSB7XG4gICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyhsYXRlc3Qoc3RhdGUpKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUsIHByb3BcbiAgLyogc3RyaWN0bHkgbm90LCBidXQgaGVscHMgVFMgKi9cbiAgLCB2YWx1ZSkge1xuICAgIHZhciBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhsYXRlc3Qoc3RhdGUpLCBwcm9wKTtcblxuICAgIGlmIChkZXNjID09PSBudWxsIHx8IGRlc2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlc2Muc2V0KSB7XG4gICAgICAvLyBzcGVjaWFsIGNhc2U6IGlmIHRoaXMgd3JpdGUgaXMgY2FwdHVyZWQgYnkgYSBzZXR0ZXIsIHdlIGhhdmVcbiAgICAgIC8vIHRvIHRyaWdnZXIgaXQgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gICAgICBkZXNjLnNldC5jYWxsKHN0YXRlLmRyYWZ0XywgdmFsdWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICAgIC8vIHRoZSBsYXN0IGNoZWNrIGlzIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRpc3Rpbmd1aXNoIHNldHRpbmcgYSBub24tZXhpc3RpbmcgdG8gdW5kZWZpbmVkICh3aGljaCBpcyBhIGNoYW5nZSlcbiAgICAgIC8vIGZyb20gc2V0dGluZyBhbiBleGlzdGluZyBwcm9wZXJ0eSB3aXRoIHZhbHVlIHVuZGVmaW5lZCB0byB1bmRlZmluZWQgKHdoaWNoIGlzIG5vdCBhIGNoYW5nZSlcbiAgICAgIHZhciBjdXJyZW50ID0gcGVlayhsYXRlc3Qoc3RhdGUpLCBwcm9wKTsgLy8gc3BlY2lhbCBjYXNlLCBpZiB3ZSBhc3NpZ25pbmcgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIGEgZHJhZnQsIHdlIGNhbiBpZ25vcmUgdGhlIGFzc2lnbm1lbnRcblxuICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFtEUkFGVF9TVEFURV07XG5cbiAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLmJhc2VfID09PSB2YWx1ZSkge1xuICAgICAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpcyh2YWx1ZSwgY3VycmVudCkgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQgfHwgaGFzKHN0YXRlLmJhc2VfLCBwcm9wKSkpIHJldHVybiB0cnVlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jb3B5X1twcm9wXSA9PT0gdmFsdWUgJiYgKCAvLyBzcGVjaWFsIGNhc2U6IGhhbmRsZSBuZXcgcHJvcHMgd2l0aCB2YWx1ZSAndW5kZWZpbmVkJ1xuICAgIHZhbHVlICE9PSB1bmRlZmluZWQgfHwgcHJvcCBpbiBzdGF0ZS5jb3B5XykgfHwgLy8gc3BlY2lhbCBjYXNlOiBOYU5cbiAgICBOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc05hTihzdGF0ZS5jb3B5X1twcm9wXSkpIHJldHVybiB0cnVlOyAvLyBAdHMtaWdub3JlXG5cbiAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eShzdGF0ZSwgcHJvcCkge1xuICAgIC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG4gICAgaWYgKHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApICE9PSB1bmRlZmluZWQgfHwgcHJvcCBpbiBzdGF0ZS5iYXNlXykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFuIG9yaWdpbmFsbHkgbm90IGFzc2lnbmVkIHByb3BlcnR5IHdhcyBkZWxldGVkXG4gICAgICBkZWxldGUgc3RhdGUuYXNzaWduZWRfW3Byb3BdO1xuICAgIH0gLy8gQHRzLWlnbm9yZVxuXG5cbiAgICBpZiAoc3RhdGUuY29weV8pIGRlbGV0ZSBzdGF0ZS5jb3B5X1twcm9wXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gTm90ZTogV2UgbmV2ZXIgY29lcmNlIGBkZXNjLnZhbHVlYCBpbnRvIGFuIEltbWVyIGRyYWZ0LCBiZWNhdXNlIHdlIGNhbid0IG1ha2VcbiAgLy8gdGhlIHNhbWUgZ3VhcmFudGVlIGluIEVTNSBtb2RlLlxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzdGF0ZSwgcHJvcCkge1xuICAgIHZhciBvd25lciA9IGxhdGVzdChzdGF0ZSk7XG4gICAgdmFyIGRlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvd25lciwgcHJvcCk7XG4gICAgaWYgKCFkZXNjKSByZXR1cm4gZGVzYztcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHN0YXRlLnR5cGVfICE9PSAxXG4gICAgICAvKiBQcm94eUFycmF5ICovXG4gICAgICB8fCBwcm9wICE9PSBcImxlbmd0aFwiLFxuICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgdmFsdWU6IG93bmVyW3Byb3BdXG4gICAgfTtcbiAgfSxcbiAgZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KCkge1xuICAgIGRpZSgxMSk7XG4gIH0sXG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihzdGF0ZSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc3RhdGUuYmFzZV8pO1xuICB9LFxuICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoKSB7XG4gICAgZGllKDEyKTtcbiAgfVxufTtcbi8qKlxyXG4gKiBBcnJheSBkcmFmdHNcclxuICovXG5cbnZhciBhcnJheVRyYXBzID0ge307XG5lYWNoKG9iamVjdFRyYXBzLCBmdW5jdGlvbiAoa2V5LCBmbikge1xuICAvLyBAdHMtaWdub3JlXG4gIGFycmF5VHJhcHNba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICBhcmd1bWVudHNbMF0gPSBhcmd1bWVudHNbMF1bMF07XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KTtcblxuYXJyYXlUcmFwcy5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChzdGF0ZSwgcHJvcCkge1xuICBpZiAoIGlzTmFOKHBhcnNlSW50KHByb3ApKSkgZGllKDEzKTsgLy8gQHRzLWlnbm9yZVxuXG4gIHJldHVybiBhcnJheVRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlLCBwcm9wLCB1bmRlZmluZWQpO1xufTtcblxuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbiAoc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gIGlmICggcHJvcCAhPT0gXCJsZW5ndGhcIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpIGRpZSgxNCk7XG4gIHJldHVybiBvYmplY3RUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZVswXSwgcHJvcCwgdmFsdWUsIHN0YXRlWzBdKTtcbn07IC8vIEFjY2VzcyBhIHByb3BlcnR5IHdpdGhvdXQgY3JlYXRpbmcgYW4gSW1tZXIgZHJhZnQuXG5cblxuZnVuY3Rpb24gcGVlayhkcmFmdCwgcHJvcCkge1xuICB2YXIgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIHZhciBzb3VyY2UgPSBzdGF0ZSA/IGxhdGVzdChzdGF0ZSkgOiBkcmFmdDtcbiAgcmV0dXJuIHNvdXJjZVtwcm9wXTtcbn1cblxuZnVuY3Rpb24gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCkge1xuICB2YXIgX2Rlc2MkZ2V0O1xuXG4gIHZhciBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApO1xuICByZXR1cm4gZGVzYyA/IFwidmFsdWVcIiBpbiBkZXNjID8gZGVzYy52YWx1ZSA6IC8vIFRoaXMgaXMgYSB2ZXJ5IHNwZWNpYWwgY2FzZSwgaWYgdGhlIHByb3AgaXMgYSBnZXR0ZXIgZGVmaW5lZCBieSB0aGVcbiAgLy8gcHJvdG90eXBlLCB3ZSBzaG91bGQgaW52b2tlIGl0IHdpdGggdGhlIGRyYWZ0IGFzIGNvbnRleHQhXG4gIChfZGVzYyRnZXQgPSBkZXNjLmdldCkgPT09IG51bGwgfHwgX2Rlc2MkZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVzYyRnZXQuY2FsbChzdGF0ZS5kcmFmdF8pIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCkge1xuICAvLyAnaW4nIGNoZWNrcyBwcm90byFcbiAgaWYgKCEocHJvcCBpbiBzb3VyY2UpKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKTtcblxuICB3aGlsZSAocHJvdG8pIHtcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIHByb3ApO1xuICAgIGlmIChkZXNjKSByZXR1cm4gZGVzYztcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBtYXJrQ2hhbmdlZChzdGF0ZSkge1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIHN0YXRlLm1vZGlmaWVkXyA9IHRydWU7XG5cbiAgICBpZiAoc3RhdGUucGFyZW50Xykge1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUucGFyZW50Xyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwcmVwYXJlQ29weShzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShzdGF0ZS5iYXNlXyk7XG4gIH1cbn1cblxudmFyIEltbWVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW1tZXIoY29uZmlnKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMudXNlUHJveGllc18gPSBoYXNQcm94aWVzO1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB0cnVlO1xuICAgIC8qKlxyXG4gICAgICogVGhlIGBwcm9kdWNlYCBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlIGFuZCBhIFwicmVjaXBlIGZ1bmN0aW9uXCIgKHdob3NlXHJcbiAgICAgKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcclxuICAgICAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxyXG4gICAgICogb25seSBldmVyIGFwcGxpZWQgdG8gYSBfX2NvcHlfXyBvZiB0aGUgYmFzZSBzdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcclxuICAgICAqIGZyb20gcGFzc2luZyB0aGUgcmVjaXBlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUuXHJcbiAgICAgKlxyXG4gICAgICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXHJcbiAgICAgKiBjb25zaWRlcmVkIHVuY29weWFibGUuXHJcbiAgICAgKlxyXG4gICAgICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvZHVjZXIgLSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgcHJveHkgb2YgdGhlIGJhc2Ugc3RhdGUgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHdoaWNoIGNhbiBiZSBmcmVlbHkgbW9kaWZpZWRcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhdGNoTGlzdGVuZXIgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYWxsIHRoZSBwYXRjaGVzIHByb2R1Y2VkIGhlcmVcclxuICAgICAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxyXG4gICAgICovXG5cbiAgICB0aGlzLnByb2R1Y2UgPSBmdW5jdGlvbiAoYmFzZSwgcmVjaXBlLCBwYXRjaExpc3RlbmVyKSB7XG4gICAgICAvLyBjdXJyaWVkIGludm9jYXRpb25cbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgZGVmYXVsdEJhc2UgPSByZWNpcGU7XG4gICAgICAgIHJlY2lwZSA9IGJhc2U7XG4gICAgICAgIHZhciBzZWxmID0gX3RoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkUHJvZHVjZShiYXNlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBiYXNlID0gZGVmYXVsdEJhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNlbGYucHJvZHVjZShiYXNlLCBmdW5jdGlvbiAoZHJhZnQpIHtcbiAgICAgICAgICAgIHZhciBfcmVjaXBlO1xuXG4gICAgICAgICAgICByZXR1cm4gKF9yZWNpcGUgPSByZWNpcGUpLmNhbGwuYXBwbHkoX3JlY2lwZSwgW190aGlzMiwgZHJhZnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgfSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKSBkaWUoNik7XG4gICAgICBpZiAocGF0Y2hMaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXRjaExpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIGRpZSg3KTtcbiAgICAgIHZhciByZXN1bHQ7IC8vIE9ubHkgcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBhbmQgXCJpbW1lcmFibGUgY2xhc3Nlc1wiIGFyZSBkcmFmdGVkLlxuXG4gICAgICBpZiAoaXNEcmFmdGFibGUoYmFzZSkpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gZW50ZXJTY29wZShfdGhpcyk7XG4gICAgICAgIHZhciBwcm94eSA9IGNyZWF0ZVByb3h5KF90aGlzLCBiYXNlLCB1bmRlZmluZWQpO1xuICAgICAgICB2YXIgaGFzRXJyb3IgPSB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVjaXBlKHByb3h5KTtcbiAgICAgICAgICBoYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIC8vIGZpbmFsbHkgaW5zdGVhZCBvZiBjYXRjaCArIHJldGhyb3cgYmV0dGVyIHByZXNlcnZlcyBvcmlnaW5hbCBzdGFja1xuICAgICAgICAgIGlmIChoYXNFcnJvcikgcmV2b2tlU2NvcGUoc2NvcGUpO2Vsc2UgbGVhdmVTY29wZShzY29wZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWJhc2UgfHwgdHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjaXBlKGJhc2UpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHJlc3VsdCA9IGJhc2U7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IE5PVEhJTkcpIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKF90aGlzLmF1dG9GcmVlemVfKSBmcmVlemUocmVzdWx0LCB0cnVlKTtcblxuICAgICAgICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgICAgICAgIHZhciBwID0gW107XG4gICAgICAgICAgdmFyIGlwID0gW107XG4gICAgICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZSwgcmVzdWx0LCBwLCBpcCk7XG4gICAgICAgICAgcGF0Y2hMaXN0ZW5lcihwLCBpcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlIGRpZSgyMSwgYmFzZSk7XG4gICAgfTtcblxuICAgIHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzID0gZnVuY3Rpb24gKGJhc2UsIHJlY2lwZSkge1xuICAgICAgLy8gY3VycmllZCBpbnZvY2F0aW9uXG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF90aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyhzdGF0ZSwgZnVuY3Rpb24gKGRyYWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZS5hcHBseSh2b2lkIDAsIFtkcmFmdF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gX3RoaXMucHJvZHVjZShiYXNlLCByZWNpcGUsIGZ1bmN0aW9uIChwLCBpcCkge1xuICAgICAgICBwYXRjaGVzID0gcDtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMgPSBpcDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKG5leHRTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiBbbmV4dFN0YXRlLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc107XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW3Jlc3VsdCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIChjb25maWcgPT09IG51bGwgfHwgY29uZmlnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25maWcudXNlUHJveGllcykgPT09IFwiYm9vbGVhblwiKSB0aGlzLnNldFVzZVByb3hpZXMoY29uZmlnLnVzZVByb3hpZXMpO1xuICAgIGlmICh0eXBlb2YgKGNvbmZpZyA9PT0gbnVsbCB8fCBjb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmZpZy5hdXRvRnJlZXplKSA9PT0gXCJib29sZWFuXCIpIHRoaXMuc2V0QXV0b0ZyZWV6ZShjb25maWcuYXV0b0ZyZWV6ZSk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW1tZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVEcmFmdCA9IGZ1bmN0aW9uIGNyZWF0ZURyYWZ0KGJhc2UpIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKGJhc2UpKSBkaWUoOCk7XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpIGJhc2UgPSBjdXJyZW50KGJhc2UpO1xuICAgIHZhciBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgdmFyIHByb3h5ID0gY3JlYXRlUHJveHkodGhpcywgYmFzZSwgdW5kZWZpbmVkKTtcbiAgICBwcm94eVtEUkFGVF9TVEFURV0uaXNNYW51YWxfID0gdHJ1ZTtcbiAgICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmlzaERyYWZ0ID0gZnVuY3Rpb24gZmluaXNoRHJhZnQoZHJhZnQsIHBhdGNoTGlzdGVuZXIpIHtcbiAgICB2YXIgc3RhdGUgPSBkcmFmdCAmJiBkcmFmdFtEUkFGVF9TVEFURV07XG5cbiAgICB7XG4gICAgICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5pc01hbnVhbF8pIGRpZSg5KTtcbiAgICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfKSBkaWUoMTApO1xuICAgIH1cblxuICAgIHZhciBzY29wZSA9IHN0YXRlLnNjb3BlXztcbiAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQodW5kZWZpbmVkLCBzY29wZSk7XG4gIH1cbiAgLyoqXHJcbiAgICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQsIGF1dG8tZnJlZXppbmcgaXMgZW5hYmxlZC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRBdXRvRnJlZXplID0gZnVuY3Rpb24gc2V0QXV0b0ZyZWV6ZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB2YWx1ZTtcbiAgfVxuICAvKipcclxuICAgKiBQYXNzIHRydWUgdG8gdXNlIHRoZSBFUzIwMTUgYFByb3h5YCBjbGFzcyB3aGVuIGNyZWF0aW5nIGRyYWZ0cywgd2hpY2ggaXNcclxuICAgKiBhbHdheXMgZmFzdGVyIHRoYW4gdXNpbmcgRVM1IHByb3hpZXMuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBmZWF0dXJlIGRldGVjdGlvbiBpcyB1c2VkLCBzbyBjYWxsaW5nIHRoaXMgaXMgcmFyZWx5IG5lY2Vzc2FyeS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRVc2VQcm94aWVzID0gZnVuY3Rpb24gc2V0VXNlUHJveGllcyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiAhaGFzUHJveGllcykge1xuICAgICAgZGllKDIwKTtcbiAgICB9XG5cbiAgICB0aGlzLnVzZVByb3hpZXNfID0gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLmFwcGx5UGF0Y2hlcyA9IGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyhiYXNlLCBwYXRjaGVzKSB7XG4gICAgLy8gSWYgYSBwYXRjaCByZXBsYWNlcyB0aGUgZW50aXJlIHN0YXRlLCB0YWtlIHRoYXQgcmVwbGFjZW1lbnQgYXMgYmFzZVxuICAgIC8vIGJlZm9yZSBhcHBseWluZyBwYXRjaGVzXG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSBwYXRjaGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuXG4gICAgICBpZiAocGF0Y2gucGF0aC5sZW5ndGggPT09IDAgJiYgcGF0Y2gub3AgPT09IFwicmVwbGFjZVwiKSB7XG4gICAgICAgIGJhc2UgPSBwYXRjaC52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSAvLyBJZiB0aGVyZSB3YXMgYSBwYXRjaCB0aGF0IHJlcGxhY2VkIHRoZSBlbnRpcmUgc3RhdGUsIHN0YXJ0IGZyb20gdGhlXG4gICAgLy8gcGF0Y2ggYWZ0ZXIgdGhhdC5cblxuXG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgcGF0Y2hlcyA9IHBhdGNoZXMuc2xpY2UoaSArIDEpO1xuICAgIH1cblxuICAgIHZhciBhcHBseVBhdGNoZXNJbXBsID0gZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5hcHBseVBhdGNoZXNfO1xuXG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpIHtcbiAgICAgIC8vIE4uQjogbmV2ZXIgaGl0cyBpZiBzb21lIHBhdGNoIGEgcmVwbGFjZW1lbnQsIHBhdGNoZXMgYXJlIG5ldmVyIGRyYWZ0c1xuICAgICAgcmV0dXJuIGFwcGx5UGF0Y2hlc0ltcGwoYmFzZSwgcGF0Y2hlcyk7XG4gICAgfSAvLyBPdGhlcndpc2UsIHByb2R1Y2UgYSBjb3B5IG9mIHRoZSBiYXNlIHN0YXRlLlxuXG5cbiAgICByZXR1cm4gdGhpcy5wcm9kdWNlKGJhc2UsIGZ1bmN0aW9uIChkcmFmdCkge1xuICAgICAgcmV0dXJuIGFwcGx5UGF0Y2hlc0ltcGwoZHJhZnQsIHBhdGNoZXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJbW1lcjtcbn0oKTtcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5KGltbWVyLCB2YWx1ZSwgcGFyZW50KSB7XG4gIC8vIHByZWNvbmRpdGlvbjogY3JlYXRlUHJveHkgc2hvdWxkIGJlIGd1YXJkZWQgYnkgaXNEcmFmdGFibGUsIHNvIHdlIGtub3cgd2UgY2FuIHNhZmVseSBkcmFmdFxuICB2YXIgZHJhZnQgPSBpc01hcCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlNYXBfKHZhbHVlLCBwYXJlbnQpIDogaXNTZXQodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5U2V0Xyh2YWx1ZSwgcGFyZW50KSA6IGltbWVyLnVzZVByb3hpZXNfID8gY3JlYXRlUHJveHlQcm94eSh2YWx1ZSwgcGFyZW50KSA6IGdldFBsdWdpbihcIkVTNVwiKS5jcmVhdGVFUzVQcm94eV8odmFsdWUsIHBhcmVudCk7XG4gIHZhciBzY29wZSA9IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKTtcbiAgc2NvcGUuZHJhZnRzXy5wdXNoKGRyYWZ0KTtcbiAgcmV0dXJuIGRyYWZ0O1xufVxuXG5mdW5jdGlvbiBjdXJyZW50KHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpIGRpZSgyMiwgdmFsdWUpO1xuICByZXR1cm4gY3VycmVudEltcGwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50SW1wbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnRhYmxlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICB2YXIgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIHZhciBjb3B5O1xuICB2YXIgYXJjaFR5cGUgPSBnZXRBcmNodHlwZSh2YWx1ZSk7XG5cbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8gJiYgKHN0YXRlLnR5cGVfIDwgNCB8fCAhZ2V0UGx1Z2luKFwiRVM1XCIpLmhhc0NoYW5nZXNfKHN0YXRlKSkpIHJldHVybiBzdGF0ZS5iYXNlXzsgLy8gT3B0aW1pemF0aW9uOiBhdm9pZCBnZW5lcmF0aW5nIG5ldyBkcmFmdHMgZHVyaW5nIGNvcHlpbmdcblxuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIGNvcHkgPSBjb3B5SGVscGVyKHZhbHVlLCBhcmNoVHlwZSk7XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvcHkgPSBjb3B5SGVscGVyKHZhbHVlLCBhcmNoVHlwZSk7XG4gIH1cblxuICBlYWNoKGNvcHksIGZ1bmN0aW9uIChrZXksIGNoaWxkVmFsdWUpIHtcbiAgICBpZiAoc3RhdGUgJiYgZ2V0KHN0YXRlLmJhc2VfLCBrZXkpID09PSBjaGlsZFZhbHVlKSByZXR1cm47IC8vIG5vIG5lZWQgdG8gY29weSBvciBzZWFyY2ggaW4gc29tZXRoaW5nIHRoYXQgZGlkbid0IGNoYW5nZVxuXG4gICAgc2V0KGNvcHksIGtleSwgY3VycmVudEltcGwoY2hpbGRWYWx1ZSkpO1xuICB9KTsgLy8gSW4gdGhlIGZ1dHVyZSwgd2UgbWlnaHQgY29uc2lkZXIgZnJlZXppbmcgaGVyZSwgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2V0dGluZ3NcblxuICByZXR1cm4gYXJjaFR5cGUgPT09IDNcbiAgLyogU2V0ICovXG4gID8gbmV3IFNldChjb3B5KSA6IGNvcHk7XG59XG5cbmZ1bmN0aW9uIGNvcHlIZWxwZXIodmFsdWUsIGFyY2hUeXBlKSB7XG4gIC8vIGNyZWF0ZXMgYSBzaGFsbG93IGNvcHksIGV2ZW4gaWYgaXQgaXMgYSBtYXAgb3Igc2V0XG4gIHN3aXRjaCAoYXJjaFR5cGUpIHtcbiAgICBjYXNlIDJcbiAgICAvKiBNYXAgKi9cbiAgICA6XG4gICAgICByZXR1cm4gbmV3IE1hcCh2YWx1ZSk7XG5cbiAgICBjYXNlIDNcbiAgICAvKiBTZXQgKi9cbiAgICA6XG4gICAgICAvLyBTZXQgd2lsbCBiZSBjbG9uZWQgYXMgYXJyYXkgdGVtcG9yYXJpbHksIHNvIHRoYXQgd2UgY2FuIHJlcGxhY2UgaW5kaXZpZHVhbCBpdGVtc1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWxsb3dDb3B5KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRVM1KCkge1xuICBmdW5jdGlvbiB3aWxsRmluYWxpemVFUzVfKHNjb3BlLCByZXN1bHQsIGlzUmVwbGFjZWQpIHtcbiAgICBpZiAoIWlzUmVwbGFjZWQpIHtcbiAgICAgIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgICAgICBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KHNjb3BlLmRyYWZ0c19bMF0pO1xuICAgICAgfSAvLyBUaGlzIGlzIGZhc3RlciB3aGVuIHdlIGRvbid0IGNhcmUgYWJvdXQgd2hpY2ggYXR0cmlidXRlcyBjaGFuZ2VkLlxuXG5cbiAgICAgIG1hcmtDaGFuZ2VzU3dlZXAoc2NvcGUuZHJhZnRzXyk7XG4gICAgfSAvLyBXaGVuIGEgY2hpbGQgZHJhZnQgaXMgcmV0dXJuZWQsIGxvb2sgZm9yIGNoYW5nZXMuXG4gICAgZWxzZSBpZiAoaXNEcmFmdChyZXN1bHQpICYmIHJlc3VsdFtEUkFGVF9TVEFURV0uc2NvcGVfID09PSBzY29wZSkge1xuICAgICAgICBtYXJrQ2hhbmdlc1N3ZWVwKHNjb3BlLmRyYWZ0c18pO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRVM1RHJhZnQoaXNBcnJheSwgYmFzZSkge1xuICAgIGlmIChpc0FycmF5KSB7XG4gICAgICB2YXIgZHJhZnQgPSBuZXcgQXJyYXkoYmFzZS5sZW5ndGgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRyYWZ0LCBcIlwiICsgaSwgcHJveHlQcm9wZXJ0eShpLCB0cnVlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkcmFmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZXNjcmlwdG9ycyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSk7XG5cbiAgICAgIGRlbGV0ZSBfZGVzY3JpcHRvcnNbRFJBRlRfU1RBVEVdO1xuICAgICAgdmFyIGtleXMgPSBvd25LZXlzKF9kZXNjcmlwdG9ycyk7XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tfaV07XG4gICAgICAgIF9kZXNjcmlwdG9yc1trZXldID0gcHJveHlQcm9wZXJ0eShrZXksIGlzQXJyYXkgfHwgISFfZGVzY3JpcHRvcnNba2V5XS5lbnVtZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2UpLCBfZGVzY3JpcHRvcnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVTNVByb3h5XyhiYXNlLCBwYXJlbnQpIHtcbiAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmFzZSk7XG4gICAgdmFyIGRyYWZ0ID0gY3JlYXRlRVM1RHJhZnQoaXNBcnJheSwgYmFzZSk7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgdHlwZV86IGlzQXJyYXkgPyA1XG4gICAgICAvKiBFUzVBcnJheSAqL1xuICAgICAgOiA0XG4gICAgICAvKiBFUzVPYmplY3QgKi9cbiAgICAgICxcbiAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgYXNzaWduZWRfOiB7fSxcbiAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgIC8vIGJhc2UgaXMgdGhlIG9iamVjdCB3ZSBhcmUgZHJhZnRpbmdcbiAgICAgIGJhc2VfOiBiYXNlLFxuICAgICAgLy8gZHJhZnQgaXMgdGhlIGRyYWZ0IG9iamVjdCBpdHNlbGYsIHRoYXQgdHJhcHMgYWxsIHJlYWRzIGFuZCByZWFkcyBmcm9tIGVpdGhlciB0aGUgYmFzZSAoaWYgdW5tb2RpZmllZCkgb3IgY29weSAoaWYgbW9kaWZpZWQpXG4gICAgICBkcmFmdF86IGRyYWZ0LFxuICAgICAgY29weV86IG51bGwsXG4gICAgICByZXZva2VkXzogZmFsc2UsXG4gICAgICBpc01hbnVhbF86IGZhbHNlXG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZHJhZnQsIERSQUZUX1NUQVRFLCB7XG4gICAgICB2YWx1ZTogc3RhdGUsXG4gICAgICAvLyBlbnVtZXJhYmxlOiBmYWxzZSA8LSB0aGUgZGVmYXVsdFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZHJhZnQ7XG4gIH0gLy8gcHJvcGVydHkgZGVzY3JpcHRvcnMgYXJlIHJlY3ljbGVkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBjcmVhdGUgYSBnZXQgYW5kIHNldCBjbG9zdXJlIHBlciBwcm9wZXJ0eSxcbiAgLy8gYnV0IHNoYXJlIHRoZW0gYWxsIGluc3RlYWRcblxuXG4gIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHByb3h5UHJvcGVydHkocHJvcCwgZW51bWVyYWJsZSkge1xuICAgIHZhciBkZXNjID0gZGVzY3JpcHRvcnNbcHJvcF07XG5cbiAgICBpZiAoZGVzYykge1xuICAgICAgZGVzYy5lbnVtZXJhYmxlID0gZW51bWVyYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRvcnNbcHJvcF0gPSBkZXNjID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGVudW1lcmFibGUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7IC8vIEB0cy1pZ25vcmVcblxuICAgICAgICAgIHJldHVybiBvYmplY3RUcmFwcy5nZXQoc3RhdGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7IC8vIEB0cy1pZ25vcmVcblxuICAgICAgICAgIG9iamVjdFRyYXBzLnNldChzdGF0ZSwgcHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjO1xuICB9IC8vIFRoaXMgbG9va3MgZXhwZW5zaXZlLCBidXQgb25seSBwcm94aWVzIGFyZSB2aXNpdGVkLCBhbmQgb25seSBvYmplY3RzIHdpdGhvdXQga25vd24gY2hhbmdlcyBhcmUgc2Nhbm5lZC5cblxuXG4gIGZ1bmN0aW9uIG1hcmtDaGFuZ2VzU3dlZXAoZHJhZnRzKSB7XG4gICAgLy8gVGhlIG5hdHVyYWwgb3JkZXIgb2YgZHJhZnRzIGluIHRoZSBgc2NvcGVgIGFycmF5IGlzIGJhc2VkIG9uIHdoZW4gdGhleVxuICAgIC8vIHdlcmUgYWNjZXNzZWQuIEJ5IHByb2Nlc3NpbmcgZHJhZnRzIGluIHJldmVyc2UgbmF0dXJhbCBvcmRlciwgd2UgaGF2ZSBhXG4gICAgLy8gYmV0dGVyIGNoYW5jZSBvZiBwcm9jZXNzaW5nIGxlYWYgbm9kZXMgZmlyc3QuIFdoZW4gYSBsZWFmIG5vZGUgaXMga25vd24gdG9cbiAgICAvLyBoYXZlIGNoYW5nZWQsIHdlIGNhbiBhdm9pZCBhbnkgdHJhdmVyc2FsIG9mIGl0cyBhbmNlc3RvciBub2Rlcy5cbiAgICBmb3IgKHZhciBpID0gZHJhZnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgc3RhdGUgPSBkcmFmdHNbaV1bRFJBRlRfU1RBVEVdO1xuXG4gICAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlLnR5cGVfKSB7XG4gICAgICAgICAgY2FzZSA1XG4gICAgICAgICAgLyogRVM1QXJyYXkgKi9cbiAgICAgICAgICA6XG4gICAgICAgICAgICBpZiAoaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKSkgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDRcbiAgICAgICAgICAvKiBFUzVPYmplY3QgKi9cbiAgICAgICAgICA6XG4gICAgICAgICAgICBpZiAoaGFzT2JqZWN0Q2hhbmdlcyhzdGF0ZSkpIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFya0NoYW5nZXNSZWN1cnNpdmVseShvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgdmFyIHN0YXRlID0gb2JqZWN0W0RSQUZUX1NUQVRFXTtcbiAgICBpZiAoIXN0YXRlKSByZXR1cm47XG4gICAgdmFyIGJhc2VfID0gc3RhdGUuYmFzZV8sXG4gICAgICAgIGRyYWZ0XyA9IHN0YXRlLmRyYWZ0XyxcbiAgICAgICAgYXNzaWduZWRfID0gc3RhdGUuYXNzaWduZWRfLFxuICAgICAgICB0eXBlXyA9IHN0YXRlLnR5cGVfO1xuXG4gICAgaWYgKHR5cGVfID09PSA0XG4gICAgLyogRVM1T2JqZWN0ICovXG4gICAgKSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGFkZGVkIGtleXMuXG4gICAgICAgIC8vIHByb2JhYmx5IHRoZXJlIGlzIGEgZmFzdGVyIHdheSB0byBkZXRlY3QgY2hhbmdlcywgYXMgc3dlZXAgKyByZWN1cnNlIHNlZW1zIHRvIGRvIHNvbWVcbiAgICAgICAgLy8gdW5uZWNlc3Nhcnkgd29yay5cbiAgICAgICAgLy8gYWxzbzogcHJvYmFibHkgd2UgY2FuIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiB3ZSBkZXRlY3QgaGVyZSwgdG8gc3BlZWQgdXAgdHJlZSBmaW5hbGl6YXRpb24hXG4gICAgICAgIGVhY2goZHJhZnRfLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKGtleSA9PT0gRFJBRlRfU1RBVEUpIHJldHVybjsgLy8gVGhlIGB1bmRlZmluZWRgIGNoZWNrIGlzIGEgZmFzdCBwYXRoIGZvciBwcmUtZXhpc3Rpbmcga2V5cy5cblxuICAgICAgICAgIGlmIChiYXNlX1trZXldID09PSB1bmRlZmluZWQgJiYgIWhhcyhiYXNlXywga2V5KSkge1xuICAgICAgICAgICAgYXNzaWduZWRfW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWFzc2lnbmVkX1trZXldKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHVudG91Y2hlZCBwcm9wZXJ0aWVzIHRyaWdnZXIgcmVjdXJzaW9uLlxuICAgICAgICAgICAgbWFya0NoYW5nZXNSZWN1cnNpdmVseShkcmFmdF9ba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTsgLy8gTG9vayBmb3IgcmVtb3ZlZCBrZXlzLlxuXG4gICAgICAgIGVhY2goYmFzZV8sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuICAgICAgICAgIGlmIChkcmFmdF9ba2V5XSA9PT0gdW5kZWZpbmVkICYmICFoYXMoZHJhZnRfLCBrZXkpKSB7XG4gICAgICAgICAgICBhc3NpZ25lZF9ba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVfID09PSA1XG4gICAgLyogRVM1QXJyYXkgKi9cbiAgICApIHtcbiAgICAgICAgaWYgKGhhc0FycmF5Q2hhbmdlcyhzdGF0ZSkpIHtcbiAgICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgICAgYXNzaWduZWRfLmxlbmd0aCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHJhZnRfLmxlbmd0aCA8IGJhc2VfLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSBkcmFmdF8ubGVuZ3RoOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFzc2lnbmVkX1tpXSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBfaTIgPSBiYXNlXy5sZW5ndGg7IF9pMiA8IGRyYWZ0Xy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICBhc3NpZ25lZF9bX2kyXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIE1pbmltdW0gY291bnQgaXMgZW5vdWdoLCB0aGUgb3RoZXIgcGFydHMgaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXG5cbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKGRyYWZ0Xy5sZW5ndGgsIGJhc2VfLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgbWluOyBfaTMrKykge1xuICAgICAgICAgIC8vIE9ubHkgdW50b3VjaGVkIGluZGljZXMgdHJpZ2dlciByZWN1cnNpb24uXG4gICAgICAgICAgaWYgKCFkcmFmdF8uaGFzT3duUHJvcGVydHkoX2kzKSkge1xuICAgICAgICAgICAgYXNzaWduZWRfW19pM10gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhc3NpZ25lZF9bX2kzXSA9PT0gdW5kZWZpbmVkKSBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KGRyYWZ0X1tfaTNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFzT2JqZWN0Q2hhbmdlcyhzdGF0ZSkge1xuICAgIHZhciBiYXNlXyA9IHN0YXRlLmJhc2VfLFxuICAgICAgICBkcmFmdF8gPSBzdGF0ZS5kcmFmdF87IC8vIFNlYXJjaCBmb3IgYWRkZWQga2V5cyBhbmQgY2hhbmdlZCBrZXlzLiBTdGFydCBhdCB0aGUgYmFjaywgYmVjYXVzZVxuICAgIC8vIG5vbi1udW1lcmljIGtleXMgYXJlIG9yZGVyZWQgYnkgdGltZSBvZiBkZWZpbml0aW9uIG9uIHRoZSBvYmplY3QuXG5cbiAgICB2YXIga2V5cyA9IG93bktleXMoZHJhZnRfKTtcblxuICAgIGZvciAodmFyIGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgPT09IERSQUZUX1NUQVRFKSBjb250aW51ZTtcbiAgICAgIHZhciBiYXNlVmFsdWUgPSBiYXNlX1trZXldOyAvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuXG4gICAgICBpZiAoYmFzZVZhbHVlID09PSB1bmRlZmluZWQgJiYgIWhhcyhiYXNlXywga2V5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gLy8gT25jZSBhIGJhc2Uga2V5IGlzIGRlbGV0ZWQsIGZ1dHVyZSBjaGFuZ2VzIGdvIHVuZGV0ZWN0ZWQsIGJlY2F1c2UgaXRzXG4gICAgICAvLyBkZXNjcmlwdG9yIGlzIGVyYXNlZC4gVGhpcyBicmFuY2ggZGV0ZWN0cyBhbnkgbWlzc2VkIGNoYW5nZXMuXG4gICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBkcmFmdF9ba2V5XTtcblxuICAgICAgICAgIHZhciBfc3RhdGUgPSB2YWx1ZSAmJiB2YWx1ZVtEUkFGVF9TVEFURV07XG5cbiAgICAgICAgICBpZiAoX3N0YXRlID8gX3N0YXRlLmJhc2VfICE9PSBiYXNlVmFsdWUgOiAhaXModmFsdWUsIGJhc2VWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gLy8gQXQgdGhpcyBwb2ludCwgbm8ga2V5cyB3ZXJlIGFkZGVkIG9yIGNoYW5nZWQuXG4gICAgLy8gQ29tcGFyZSBrZXkgY291bnQgdG8gZGV0ZXJtaW5lIGlmIGtleXMgd2VyZSBkZWxldGVkLlxuXG5cbiAgICB2YXIgYmFzZUlzRHJhZnQgPSAhIWJhc2VfW0RSQUZUX1NUQVRFXTtcbiAgICByZXR1cm4ga2V5cy5sZW5ndGggIT09IG93bktleXMoYmFzZV8pLmxlbmd0aCArIChiYXNlSXNEcmFmdCA/IDAgOiAxKTsgLy8gKyAxIHRvIGNvcnJlY3QgZm9yIERSQUZUX1NUQVRFXG4gIH1cblxuICBmdW5jdGlvbiBoYXNBcnJheUNoYW5nZXMoc3RhdGUpIHtcbiAgICB2YXIgZHJhZnRfID0gc3RhdGUuZHJhZnRfO1xuICAgIGlmIChkcmFmdF8ubGVuZ3RoICE9PSBzdGF0ZS5iYXNlXy5sZW5ndGgpIHJldHVybiB0cnVlOyAvLyBTZWUgIzExNlxuICAgIC8vIElmIHdlIGZpcnN0IHNob3J0ZW4gdGhlIGxlbmd0aCwgb3VyIGFycmF5IGludGVyY2VwdG9ycyB3aWxsIGJlIHJlbW92ZWQuXG4gICAgLy8gSWYgYWZ0ZXIgdGhhdCBuZXcgaXRlbXMgYXJlIGFkZGVkLCByZXN1bHQgaW4gdGhlIHNhbWUgb3JpZ2luYWwgbGVuZ3RoLFxuICAgIC8vIHRob3NlIGxhc3QgaXRlbXMgd2lsbCBoYXZlIG5vIGludGVyY2VwdGluZyBwcm9wZXJ0eS5cbiAgICAvLyBTbyBpZiB0aGVyZSBpcyBubyBvd24gZGVzY3JpcHRvciBvbiB0aGUgbGFzdCBwb3NpdGlvbiwgd2Uga25vdyB0aGF0IGl0ZW1zIHdlcmUgcmVtb3ZlZCBhbmQgYWRkZWRcbiAgICAvLyBOLkIuOiBzcGxpY2UsIHVuc2hpZnQsIGV0YyBvbmx5IHNoaWZ0IHZhbHVlcyBhcm91bmQsIGJ1dCBub3QgcHJvcCBkZXNjcmlwdG9ycywgc28gd2Ugb25seSBoYXZlIHRvIGNoZWNrXG4gICAgLy8gdGhlIGxhc3Qgb25lXG4gICAgLy8gbGFzdCBkZXNjcmlwdG9yIGNhbiBiZSBub3QgYSB0cmFwLCBpZiB0aGUgYXJyYXkgd2FzIGV4dGVuZGVkXG5cbiAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZHJhZnRfLCBkcmFmdF8ubGVuZ3RoIC0gMSk7IC8vIGRlc2NyaXB0b3IgY2FuIGJlIG51bGwsIGJ1dCBvbmx5IGZvciBuZXdseSBjcmVhdGVkIHNwYXJzZSBhcnJheXMsIGVnLiBuZXcgQXJyYXkoMTApXG5cbiAgICBpZiAoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5nZXQpIHJldHVybiB0cnVlOyAvLyBpZiB3ZSBtaXNzIGEgcHJvcGVydHksIGl0IGhhcyBiZWVuIGRlbGV0ZWQsIHNvIGFycmF5IHByb2JvYmFseSBjaGFuZ2VkXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRyYWZ0Xy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFkcmFmdF8uaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiB0cnVlO1xuICAgIH0gLy8gRm9yIGFsbCBvdGhlciBjYXNlcywgd2UgZG9uJ3QgaGF2ZSB0byBjb21wYXJlLCBhcyB0aGV5IHdvdWxkIGhhdmUgYmVlbiBwaWNrZWQgdXAgYnkgdGhlIGluZGV4IHNldHRlcnNcblxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQ2hhbmdlc18oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUudHlwZV8gPT09IDRcbiAgICAvKiBFUzVPYmplY3QgKi9cbiAgICA/IGhhc09iamVjdENoYW5nZXMoc3RhdGUpIDogaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZVxuICAvKkVTNVN0YXRlIHwgTWFwU3RhdGUgfCBTZXRTdGF0ZSovXG4gICkge1xuICAgIGlmIChzdGF0ZS5yZXZva2VkXykgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKTtcbiAgfVxuXG4gIGxvYWRQbHVnaW4oXCJFUzVcIiwge1xuICAgIGNyZWF0ZUVTNVByb3h5XzogY3JlYXRlRVM1UHJveHlfLFxuICAgIHdpbGxGaW5hbGl6ZUVTNV86IHdpbGxGaW5hbGl6ZUVTNV8sXG4gICAgaGFzQ2hhbmdlc186IGhhc0NoYW5nZXNfXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmFibGVQYXRjaGVzKCkge1xuICB2YXIgUkVQTEFDRSA9IFwicmVwbGFjZVwiO1xuICB2YXIgQUREID0gXCJhZGRcIjtcbiAgdmFyIFJFTU9WRSA9IFwicmVtb3ZlXCI7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzXyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgc3dpdGNoIChzdGF0ZS50eXBlXykge1xuICAgICAgY2FzZSAwXG4gICAgICAvKiBQcm94eU9iamVjdCAqL1xuICAgICAgOlxuICAgICAgY2FzZSA0XG4gICAgICAvKiBFUzVPYmplY3QgKi9cbiAgICAgIDpcbiAgICAgIGNhc2UgMlxuICAgICAgLyogTWFwICovXG4gICAgICA6XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG5cbiAgICAgIGNhc2UgNVxuICAgICAgLyogRVM1QXJyYXkgKi9cbiAgICAgIDpcbiAgICAgIGNhc2UgMVxuICAgICAgLyogUHJveHlBcnJheSAqL1xuICAgICAgOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG5cbiAgICAgIGNhc2UgM1xuICAgICAgLyogU2V0ICovXG4gICAgICA6XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVNldFBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHZhciBiYXNlXyA9IHN0YXRlLmJhc2VfLFxuICAgICAgICBhc3NpZ25lZF8gPSBzdGF0ZS5hc3NpZ25lZF87XG4gICAgdmFyIGNvcHlfID0gc3RhdGUuY29weV87IC8vIFJlZHVjZSBjb21wbGV4aXR5IGJ5IGVuc3VyaW5nIGBiYXNlYCBpcyBuZXZlciBsb25nZXIuXG5cbiAgICBpZiAoY29weV8ubGVuZ3RoIDwgYmFzZV8ubGVuZ3RoKSB7XG4gICAgICB2YXIgX3JlZiA9IFtjb3B5XywgYmFzZV9dO1xuICAgICAgYmFzZV8gPSBfcmVmWzBdO1xuICAgICAgY29weV8gPSBfcmVmWzFdO1xuICAgICAgdmFyIF9yZWYyID0gW2ludmVyc2VQYXRjaGVzLCBwYXRjaGVzXTtcbiAgICAgIHBhdGNoZXMgPSBfcmVmMlswXTtcbiAgICAgIGludmVyc2VQYXRjaGVzID0gX3JlZjJbMV07XG4gICAgfSAvLyBQcm9jZXNzIHJlcGxhY2VkIGluZGljZXMuXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhc3NpZ25lZF9baV0gJiYgY29weV9baV0gIT09IGJhc2VfW2ldKSB7XG4gICAgICAgIHZhciBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChiYXNlX1tpXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvLyBQcm9jZXNzIGFkZGVkIGluZGljZXMuXG5cblxuICAgIGZvciAodmFyIF9pID0gYmFzZV8ubGVuZ3RoOyBfaSA8IGNvcHlfLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9wYXRoID0gYmFzZVBhdGguY29uY2F0KFtfaV0pO1xuXG4gICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogQURELFxuICAgICAgICBwYXRoOiBfcGF0aCxcbiAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9bX2ldKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGJhc2VfLmxlbmd0aCA8IGNvcHlfLmxlbmd0aCkge1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICBwYXRoOiBiYXNlUGF0aC5jb25jYXQoW1wibGVuZ3RoXCJdKSxcbiAgICAgICAgdmFsdWU6IGJhc2VfLmxlbmd0aFxuICAgICAgfSk7XG4gICAgfVxuICB9IC8vIFRoaXMgaXMgdXNlZCBmb3IgYm90aCBNYXAgb2JqZWN0cyBhbmQgbm9ybWFsIG9iamVjdHMuXG5cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHZhciBiYXNlXyA9IHN0YXRlLmJhc2VfLFxuICAgICAgICBjb3B5XyA9IHN0YXRlLmNvcHlfO1xuICAgIGVhY2goc3RhdGUuYXNzaWduZWRfLCBmdW5jdGlvbiAoa2V5LCBhc3NpZ25lZFZhbHVlKSB7XG4gICAgICB2YXIgb3JpZ1ZhbHVlID0gZ2V0KGJhc2VfLCBrZXkpO1xuICAgICAgdmFyIHZhbHVlID0gZ2V0KGNvcHlfLCBrZXkpO1xuICAgICAgdmFyIG9wID0gIWFzc2lnbmVkVmFsdWUgPyBSRU1PVkUgOiBoYXMoYmFzZV8sIGtleSkgPyBSRVBMQUNFIDogQUREO1xuICAgICAgaWYgKG9yaWdWYWx1ZSA9PT0gdmFsdWUgJiYgb3AgPT09IFJFUExBQ0UpIHJldHVybjtcbiAgICAgIHZhciBwYXRoID0gYmFzZVBhdGguY29uY2F0KGtleSk7XG4gICAgICBwYXRjaGVzLnB1c2gob3AgPT09IFJFTU9WRSA/IHtcbiAgICAgICAgb3A6IG9wLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9IDoge1xuICAgICAgICBvcDogb3AsXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKG9wID09PSBBREQgPyB7XG4gICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0gOiBvcCA9PT0gUkVNT1ZFID8ge1xuICAgICAgICBvcDogQURELFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKVxuICAgICAgfSA6IHtcbiAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlU2V0UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgdmFyIGJhc2VfID0gc3RhdGUuYmFzZV8sXG4gICAgICAgIGNvcHlfID0gc3RhdGUuY29weV87XG4gICAgdmFyIGkgPSAwO1xuICAgIGJhc2VfLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoIWNvcHlfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgaSA9IDA7XG4gICAgY29weV8uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICghYmFzZV8uaGFzKHZhbHVlKSkge1xuICAgICAgICB2YXIgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlVmFsdWUsIHJlcGxhY2VtZW50LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IHJlcGxhY2VtZW50ID09PSBOT1RISU5HID8gdW5kZWZpbmVkIDogcmVwbGFjZW1lbnRcbiAgICB9KTtcbiAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgcGF0aDogW10sXG4gICAgICB2YWx1ZTogYmFzZVZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoZXNfKGRyYWZ0LCBwYXRjaGVzKSB7XG4gICAgcGF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXRjaCkge1xuICAgICAgdmFyIHBhdGggPSBwYXRjaC5wYXRoLFxuICAgICAgICAgIG9wID0gcGF0Y2gub3A7XG4gICAgICB2YXIgYmFzZSA9IGRyYWZ0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJlbnRUeXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICAgIHZhciBwID0gXCJcIiArIHBhdGhbaV07IC8vIFNlZSAjNzM4LCBhdm9pZCBwcm90b3R5cGUgcG9sbHV0aW9uXG5cbiAgICAgICAgaWYgKChwYXJlbnRUeXBlID09PSAwXG4gICAgICAgIC8qIE9iamVjdCAqL1xuICAgICAgICB8fCBwYXJlbnRUeXBlID09PSAxXG4gICAgICAgIC8qIEFycmF5ICovXG4gICAgICAgICkgJiYgKHAgPT09IFwiX19wcm90b19fXCIgfHwgcCA9PT0gXCJjb25zdHJ1Y3RvclwiKSkgZGllKDI0KTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgcCA9PT0gXCJwcm90b3R5cGVcIikgZGllKDI0KTtcbiAgICAgICAgYmFzZSA9IGdldChiYXNlLCBwKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSBkaWUoMTUsIHBhdGguam9pbihcIi9cIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgdmFyIHZhbHVlID0gZGVlcENsb25lUGF0Y2hWYWx1ZShwYXRjaC52YWx1ZSk7IC8vIHVzZWQgdG8gY2xvbmUgcGF0Y2ggdG8gZW5zdXJlIG9yaWdpbmFsIHBhdGNoIGlzIG5vdCBtb2RpZmllZCwgc2VlICM0MTFcblxuICAgICAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcblxuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIFJFUExBQ0U6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDJcbiAgICAgICAgICAgIC8qIE1hcCAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgICAgICAgICAgIGNhc2UgM1xuICAgICAgICAgICAgLyogU2V0ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIGRpZSgxNik7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIGFuIG9iamVjdCwgdGhlbiBpdCdzIGFzc2lnbmVkIGJ5IHJlZmVyZW5jZVxuICAgICAgICAgICAgICAvLyBpbiB0aGUgZm9sbG93aW5nIGFkZCBvciByZW1vdmUgb3BzLCB0aGUgdmFsdWUgZmllbGQgaW5zaWRlIHRoZSBwYXRjaCB3aWxsIGFsc28gYmUgbW9kaWZ5ZWRcbiAgICAgICAgICAgICAgLy8gc28gd2UgdXNlIHZhbHVlIGZyb20gdGhlIGNsb25lZCBwYXRjaFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBBREQ6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDFcbiAgICAgICAgICAgIC8qIEFycmF5ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwiLVwiID8gYmFzZS5wdXNoKHZhbHVlKSA6IGJhc2Uuc3BsaWNlKGtleSwgMCwgdmFsdWUpO1xuXG4gICAgICAgICAgICBjYXNlIDJcbiAgICAgICAgICAgIC8qIE1hcCAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNhc2UgM1xuICAgICAgICAgICAgLyogU2V0ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmFkZCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSRU1PVkU6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDFcbiAgICAgICAgICAgIC8qIEFycmF5ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNwbGljZShrZXksIDEpO1xuXG4gICAgICAgICAgICBjYXNlIDJcbiAgICAgICAgICAgIC8qIE1hcCAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5kZWxldGUoa2V5KTtcblxuICAgICAgICAgICAgY2FzZSAzXG4gICAgICAgICAgICAvKiBTZXQgKi9cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKHBhdGNoLnZhbHVlKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZSBiYXNlW2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGllKDE3LCBvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWZ0O1xuICB9XG5cbiAgZnVuY3Rpb24gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKG9iaikpIHJldHVybiBvYmo7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSk7XG4gICAgaWYgKGlzTWFwKG9iaikpIHJldHVybiBuZXcgTWFwKEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSkubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIGsgPSBfcmVmM1swXSxcbiAgICAgICAgICB2ID0gX3JlZjNbMV07XG4gICAgICByZXR1cm4gW2ssIGRlZXBDbG9uZVBhdGNoVmFsdWUodildO1xuICAgIH0pKTtcbiAgICBpZiAoaXNTZXQob2JqKSkgcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShvYmopLm1hcChkZWVwQ2xvbmVQYXRjaFZhbHVlKSk7XG4gICAgdmFyIGNsb25lZCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgY2xvbmVkW2tleV0gPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9ialtrZXldKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzKG9iaiwgRFJBRlRBQkxFKSkgY2xvbmVkW0RSQUZUQUJMRV0gPSBvYmpbRFJBRlRBQkxFXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob2JqKSB7XG4gICAgaWYgKGlzRHJhZnQob2JqKSkge1xuICAgICAgcmV0dXJuIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKTtcbiAgICB9IGVsc2UgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGxvYWRQbHVnaW4oXCJQYXRjaGVzXCIsIHtcbiAgICBhcHBseVBhdGNoZXNfOiBhcHBseVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUGF0Y2hlc186IGdlbmVyYXRlUGF0Y2hlc18sXG4gICAgZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfOiBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc19cbiAgfSk7XG59XG5cbi8vIHR5cGVzIG9ubHkhXG5mdW5jdGlvbiBlbmFibGVNYXBTZXQoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciBfZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIGV4dGVuZFN0YXRpY3MoZCwgYikge1xuICAgIF9leHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IHtcbiAgICAgIF9fcHJvdG9fXzogW11cbiAgICB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgIGQuX19wcm90b19fID0gYjtcbiAgICB9IHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICBmb3IgKHZhciBwIGluIGIpIHtcbiAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZFN0YXRpY3MoZCwgYik7XG4gIH07IC8vIFVnbHkgaGFjayB0byByZXNvbHZlICM1MDIgYW5kIGluaGVyaXQgYnVpbHQgaW4gTWFwIC8gU2V0XG5cblxuICBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICAgIF9leHRlbmRTdGF0aWNzKGQsIGIpO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZDtcbiAgICB9XG5cbiAgICBkLnByb3RvdHlwZSA9ICggLy8gQHRzLWlnbm9yZVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gIH1cblxuICB2YXIgRHJhZnRNYXAgPSBmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERyYWZ0TWFwLCBfc3VwZXIpOyAvLyBDcmVhdGUgY2xhc3MgbWFudWFsbHksIGNhdXNlICM1MDJcblxuXG4gICAgZnVuY3Rpb24gRHJhZnRNYXAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMlxuICAgICAgICAvKiBNYXAgKi9cbiAgICAgICAgLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHVuZGVmaW5lZCxcbiAgICAgICAgYXNzaWduZWRfOiB1bmRlZmluZWQsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHAgPSBEcmFmdE1hcC5wcm90b3R5cGU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwic2l6ZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICAgIH0gLy8gZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAvLyBjb25maWd1cmFibGU6IHRydWVcblxuICAgIH0pO1xuXG4gICAgcC5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5oYXMoa2V5KTtcbiAgICB9O1xuXG4gICAgcC5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuXG4gICAgICBpZiAoIWxhdGVzdChzdGF0ZSkuaGFzKGtleSkgfHwgbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KSAhPT0gdmFsdWUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgICAgc3RhdGUuY29weV8uc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBwLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcblxuICAgICAgaWYgKHN0YXRlLmJhc2VfLmhhcyhrZXkpKSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uZGVsZXRlKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmNvcHlfLmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHAuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG5cbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZWFjaChzdGF0ZS5iYXNlXywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwLmZvckVhY2ggPSBmdW5jdGlvbiAoY2IsIHRoaXNBcmcpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgbGF0ZXN0KHN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChfdmFsdWUsIGtleSwgX21hcCkge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIF90aGlzLmdldChrZXkpLCBrZXksIF90aGlzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHZhciB2YWx1ZSA9IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSk7XG5cbiAgICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgIT09IHN0YXRlLmJhc2VfLmdldChrZXkpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTsgLy8gZWl0aGVyIGFscmVhZHkgZHJhZnRlZCBvciByZWFzc2lnbmVkXG4gICAgICB9IC8vIGRlc3BpdGUgd2hhdCBpdCBsb29rcywgdGhpcyBjcmVhdGVzIGEgZHJhZnQgb25seSBvbmNlLCBzZWUgYWJvdmUgY29uZGl0aW9uXG5cblxuICAgICAgdmFyIGRyYWZ0ID0gY3JlYXRlUHJveHkoc3RhdGUuc2NvcGVfLmltbWVyXywgdmFsdWUsIHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIGRyYWZ0KTtcbiAgICAgIHJldHVybiBkcmFmdDtcbiAgICB9O1xuXG4gICAgcC5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkua2V5cygpO1xuICAgIH07XG5cbiAgICBwLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICAgIF9yZWY7XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIudmFsdWVzKCk7XG4gICAgICB9LCBfcmVmLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICAgICAgICBpZiAoci5kb25lKSByZXR1cm4gcjtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfdGhpczIuZ2V0KHIudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LCBfcmVmO1xuICAgIH07XG5cbiAgICBwLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcyxcbiAgICAgICAgICBfcmVmMjtcblxuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4gX3JlZjIgPSB7fSwgX3JlZjJbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLmVudHJpZXMoKTtcbiAgICAgIH0sIF9yZWYyLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICAgICAgICBpZiAoci5kb25lKSByZXR1cm4gcjtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfdGhpczMuZ2V0KHIudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IFtyLnZhbHVlLCB2YWx1ZV1cbiAgICAgICAgfTtcbiAgICAgIH0sIF9yZWYyO1xuICAgIH07XG5cbiAgICBwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERyYWZ0TWFwO1xuICB9KE1hcCk7XG5cbiAgZnVuY3Rpb24gcHJveHlNYXBfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBuZXcgRHJhZnRNYXAodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZU1hcENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF8gPSBuZXcgTWFwKCk7XG4gICAgICBzdGF0ZS5jb3B5XyA9IG5ldyBNYXAoc3RhdGUuYmFzZV8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBEcmFmdFNldCA9IGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRHJhZnRTZXQsIF9zdXBlcik7IC8vIENyZWF0ZSBjbGFzcyBtYW51YWxseSwgY2F1c2UgIzUwMlxuXG5cbiAgICBmdW5jdGlvbiBEcmFmdFNldCh0YXJnZXQsIHBhcmVudCkge1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAzXG4gICAgICAgIC8qIFNldCAqL1xuICAgICAgICAsXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5XzogdW5kZWZpbmVkLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGRyYWZ0c186IG5ldyBNYXAoKSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHAgPSBEcmFmdFNldC5wcm90b3R5cGU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwic2l6ZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICAgIH0gLy8gZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgIH0pO1xuXG4gICAgcC5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTsgLy8gYml0IG9mIHRyaWNrZXJ5IGhlcmUsIHRvIGJlIGFibGUgdG8gcmVjb2duaXplIGJvdGggdGhlIHZhbHVlLCBhbmQgdGhlIGRyYWZ0IG9mIGl0cyB2YWx1ZVxuXG4gICAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5iYXNlXy5oYXModmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuY29weV8uaGFzKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpICYmIHN0YXRlLmNvcHlfLmhhcyhzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcC5hZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcblxuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBwLmRlbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZGVsZXRlKHZhbHVlKSB8fCAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpID8gc3RhdGUuY29weV8uZGVsZXRlKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkgOlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcblxuICAgICAgaWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcC52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8udmFsdWVzKCk7XG4gICAgfTtcblxuICAgIHAuZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZW50cmllcygpO1xuICAgIH07XG5cbiAgICBwLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9O1xuXG4gICAgcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9O1xuXG4gICAgcC5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYiwgdGhpc0FyZykge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy52YWx1ZXMoKTtcbiAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCByZXN1bHQudmFsdWUsIHJlc3VsdC52YWx1ZSwgdGhpcyk7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIERyYWZ0U2V0O1xuICB9KFNldCk7XG5cbiAgZnVuY3Rpb24gcHJveHlTZXRfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBuZXcgRHJhZnRTZXQodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVNldENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICAvLyBjcmVhdGUgZHJhZnRzIGZvciBhbGwgZW50cmllcyB0byBwcmVzZXJ2ZSBpbnNlcnRpb24gb3JkZXJcbiAgICAgIHN0YXRlLmNvcHlfID0gbmV3IFNldCgpO1xuICAgICAgc3RhdGUuYmFzZV8uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKGlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgICAgIHZhciBkcmFmdCA9IGNyZWF0ZVByb3h5KHN0YXRlLnNjb3BlXy5pbW1lcl8sIHZhbHVlLCBzdGF0ZSk7XG4gICAgICAgICAgc3RhdGUuZHJhZnRzXy5zZXQodmFsdWUsIGRyYWZ0KTtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQoZHJhZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZVxuICAvKkVTNVN0YXRlIHwgTWFwU3RhdGUgfCBTZXRTdGF0ZSovXG4gICkge1xuICAgIGlmIChzdGF0ZS5yZXZva2VkXykgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKTtcbiAgfVxuXG4gIGxvYWRQbHVnaW4oXCJNYXBTZXRcIiwge1xuICAgIHByb3h5TWFwXzogcHJveHlNYXBfLFxuICAgIHByb3h5U2V0XzogcHJveHlTZXRfXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmFibGVBbGxQbHVnaW5zKCkge1xuICBlbmFibGVFUzUoKTtcbiAgZW5hYmxlTWFwU2V0KCk7XG4gIGVuYWJsZVBhdGNoZXMoKTtcbn1cblxudmFyIGltbWVyID1cbi8qI19fUFVSRV9fKi9cbm5ldyBJbW1lcigpO1xuLyoqXHJcbiAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxyXG4gKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcclxuICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXHJcbiAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXHJcbiAqXHJcbiAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxyXG4gKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxyXG4gKlxyXG4gKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcclxuICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxyXG4gKlxyXG4gKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cclxuICpcclxuICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9kdWNlciAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXRjaExpc3RlbmVyIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGFsbCB0aGUgcGF0Y2hlcyBwcm9kdWNlZCBoZXJlXHJcbiAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxyXG4gKi9cblxudmFyIHByb2R1Y2UgPSBpbW1lci5wcm9kdWNlO1xuLyoqXHJcbiAqIExpa2UgYHByb2R1Y2VgLCBidXQgYHByb2R1Y2VXaXRoUGF0Y2hlc2AgYWx3YXlzIHJldHVybnMgYSB0dXBsZVxyXG4gKiBbbmV4dFN0YXRlLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc10gKGluc3RlYWQgb2YganVzdCB0aGUgbmV4dCBzdGF0ZSlcclxuICovXG5cbnZhciBwcm9kdWNlV2l0aFBhdGNoZXMgPVxuLyojX19QVVJFX18qL1xuaW1tZXIucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoaW1tZXIpO1xuLyoqXHJcbiAqIFBhc3MgdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IGZyZWV6ZSBhbGwgY29waWVzIGNyZWF0ZWQgYnkgSW1tZXIuXHJcbiAqXHJcbiAqIEFsd2F5cyBmcmVlemUgYnkgZGVmYXVsdCwgZXZlbiBpbiBwcm9kdWN0aW9uIG1vZGVcclxuICovXG5cbnZhciBzZXRBdXRvRnJlZXplID1cbi8qI19fUFVSRV9fKi9cbmltbWVyLnNldEF1dG9GcmVlemUuYmluZChpbW1lcik7XG4vKipcclxuICogUGFzcyB0cnVlIHRvIHVzZSB0aGUgRVMyMDE1IGBQcm94eWAgY2xhc3Mgd2hlbiBjcmVhdGluZyBkcmFmdHMsIHdoaWNoIGlzXHJcbiAqIGFsd2F5cyBmYXN0ZXIgdGhhbiB1c2luZyBFUzUgcHJveGllcy5cclxuICpcclxuICogQnkgZGVmYXVsdCwgZmVhdHVyZSBkZXRlY3Rpb24gaXMgdXNlZCwgc28gY2FsbGluZyB0aGlzIGlzIHJhcmVseSBuZWNlc3NhcnkuXHJcbiAqL1xuXG52YXIgc2V0VXNlUHJveGllcyA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5zZXRVc2VQcm94aWVzLmJpbmQoaW1tZXIpO1xuLyoqXHJcbiAqIEFwcGx5IGFuIGFycmF5IG9mIEltbWVyIHBhdGNoZXMgdG8gdGhlIGZpcnN0IGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGEgcHJvZHVjZXIsIHdoaWNoIG1lYW5zIGNvcHktb24td3JpdGUgaXMgaW4gZWZmZWN0LlxyXG4gKi9cblxudmFyIGFwcGx5UGF0Y2hlcyA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5hcHBseVBhdGNoZXMuYmluZChpbW1lcik7XG4vKipcclxuICogQ3JlYXRlIGFuIEltbWVyIGRyYWZ0IGZyb20gdGhlIGdpdmVuIGJhc2Ugc3RhdGUsIHdoaWNoIG1heSBiZSBhIGRyYWZ0IGl0c2VsZi5cclxuICogVGhlIGRyYWZ0IGNhbiBiZSBtb2RpZmllZCB1bnRpbCB5b3UgZmluYWxpemUgaXQgd2l0aCB0aGUgYGZpbmlzaERyYWZ0YCBmdW5jdGlvbi5cclxuICovXG5cbnZhciBjcmVhdGVEcmFmdCA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5jcmVhdGVEcmFmdC5iaW5kKGltbWVyKTtcbi8qKlxyXG4gKiBGaW5hbGl6ZSBhbiBJbW1lciBkcmFmdCBmcm9tIGEgYGNyZWF0ZURyYWZ0YCBjYWxsLCByZXR1cm5pbmcgdGhlIGJhc2Ugc3RhdGVcclxuICogKGlmIG5vIGNoYW5nZXMgd2VyZSBtYWRlKSBvciBhIG1vZGlmaWVkIGNvcHkuIFRoZSBkcmFmdCBtdXN0ICpub3QqIGJlXHJcbiAqIG11dGF0ZWQgYWZ0ZXJ3YXJkcy5cclxuICpcclxuICogUGFzcyBhIGZ1bmN0aW9uIGFzIHRoZSAybmQgYXJndW1lbnQgdG8gZ2VuZXJhdGUgSW1tZXIgcGF0Y2hlcyBiYXNlZCBvbiB0aGVcclxuICogY2hhbmdlcyB0aGF0IHdlcmUgbWFkZS5cclxuICovXG5cbnZhciBmaW5pc2hEcmFmdCA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5maW5pc2hEcmFmdC5iaW5kKGltbWVyKTtcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGEgbm8tb3AsIGJ1dCBjYW4gYmUgdXNlZCB0byBjYXN0IGFuIGltbXV0YWJsZSB0eXBlXHJcbiAqIHRvIGFuIGRyYWZ0IHR5cGUgYW5kIG1ha2UgVHlwZVNjcmlwdCBoYXBweVxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXG5cbmZ1bmN0aW9uIGNhc3REcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSBhIG5vLW9wLCBidXQgY2FuIGJlIHVzZWQgdG8gY2FzdCBhIG11dGFibGUgdHlwZVxyXG4gKiB0byBhbiBpbW11dGFibGUgdHlwZSBhbmQgbWFrZSBUeXBlU2NyaXB0IGhhcHB5XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKi9cblxuZnVuY3Rpb24gY2FzdEltbXV0YWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMuSW1tZXIgPSBJbW1lcjtcbmV4cG9ydHMuYXBwbHlQYXRjaGVzID0gYXBwbHlQYXRjaGVzO1xuZXhwb3J0cy5jYXN0RHJhZnQgPSBjYXN0RHJhZnQ7XG5leHBvcnRzLmNhc3RJbW11dGFibGUgPSBjYXN0SW1tdXRhYmxlO1xuZXhwb3J0cy5jcmVhdGVEcmFmdCA9IGNyZWF0ZURyYWZ0O1xuZXhwb3J0cy5jdXJyZW50ID0gY3VycmVudDtcbmV4cG9ydHMuZGVmYXVsdCA9IHByb2R1Y2U7XG5leHBvcnRzLmVuYWJsZUFsbFBsdWdpbnMgPSBlbmFibGVBbGxQbHVnaW5zO1xuZXhwb3J0cy5lbmFibGVFUzUgPSBlbmFibGVFUzU7XG5leHBvcnRzLmVuYWJsZU1hcFNldCA9IGVuYWJsZU1hcFNldDtcbmV4cG9ydHMuZW5hYmxlUGF0Y2hlcyA9IGVuYWJsZVBhdGNoZXM7XG5leHBvcnRzLmZpbmlzaERyYWZ0ID0gZmluaXNoRHJhZnQ7XG5leHBvcnRzLmZyZWV6ZSA9IGZyZWV6ZTtcbmV4cG9ydHMuaW1tZXJhYmxlID0gRFJBRlRBQkxFO1xuZXhwb3J0cy5pc0RyYWZ0ID0gaXNEcmFmdDtcbmV4cG9ydHMuaXNEcmFmdGFibGUgPSBpc0RyYWZ0YWJsZTtcbmV4cG9ydHMubm90aGluZyA9IE5PVEhJTkc7XG5leHBvcnRzLm9yaWdpbmFsID0gb3JpZ2luYWw7XG5leHBvcnRzLnByb2R1Y2UgPSBwcm9kdWNlO1xuZXhwb3J0cy5wcm9kdWNlV2l0aFBhdGNoZXMgPSBwcm9kdWNlV2l0aFBhdGNoZXM7XG5leHBvcnRzLnNldEF1dG9GcmVlemUgPSBzZXRBdXRvRnJlZXplO1xuZXhwb3J0cy5zZXRVc2VQcm94aWVzID0gc2V0VXNlUHJveGllcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmNqcy5kZXZlbG9wbWVudC5qcy5tYXBcbiIsIlxuJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbW1lci5janMucHJvZHVjdGlvbi5taW4uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcycpXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiaW1wb3J0e3R5cGVPZiBhcyBlLGlzRWxlbWVudCBhcyB0LGlzVmFsaWRFbGVtZW50VHlwZSBhcyBufWZyb21cInJlYWN0LWlzXCI7aW1wb3J0IHIse3VzZVN0YXRlIGFzIG8sdXNlQ29udGV4dCBhcyBzLHVzZU1lbW8gYXMgaSx1c2VFZmZlY3QgYXMgYSx1c2VSZWYgYXMgYyxjcmVhdGVFbGVtZW50IGFzIHUsdXNlRGVidWdWYWx1ZSBhcyBsLHVzZUxheW91dEVmZmVjdCBhcyBkfWZyb21cInJlYWN0XCI7aW1wb3J0IGggZnJvbVwic2hhbGxvd2VxdWFsXCI7aW1wb3J0IHAgZnJvbVwiQGVtb3Rpb24vc3R5bGlzXCI7aW1wb3J0IGYgZnJvbVwiQGVtb3Rpb24vdW5pdGxlc3NcIjtpbXBvcnQgbSBmcm9tXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7aW1wb3J0IHkgZnJvbVwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjtmdW5jdGlvbiB2KCl7cmV0dXJuKHY9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn0sUz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09KHQudG9TdHJpbmc/dC50b1N0cmluZygpOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSkmJiFlKHQpfSx3PU9iamVjdC5mcmVlemUoW10pLEU9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gYihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBOKGUpe3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgZS5zdHlsZWRDb21wb25lbnRJZH12YXIgQT1cInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19BVFRSfHxwcm9jZXNzLmVudi5TQ19BVFRSKXx8XCJkYXRhLXN0eWxlZFwiLEM9XCI1LjMuNlwiLEk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJIVE1MRWxlbWVudFwiaW4gd2luZG93LFA9Qm9vbGVhbihcImJvb2xlYW5cIj09dHlwZW9mIFNDX0RJU0FCTEVfU1BFRURZP1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZOlwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpLE89e30sUj1cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3sxOlwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLDI6XCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIiwzOlwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsNDpcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsNTpcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsNjpcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsNzonVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFwidGhlbWVcIiBwcm9wIGZ1bmN0aW9uLCBlLmcuXFxuXFxuYGBganNcXG50aGVtZT17KCkgPT4gKHt9KX1cXG5gYGBcXG5cXG4nLDg6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXCJ0aGVtZVwiIHByb3AgYW4gb2JqZWN0LlxcblxcbicsOTpcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIiwxMDpcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsMTE6XCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLDEyOlwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsMTM6XCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsMTQ6J1RoZW1lUHJvdmlkZXI6IFwidGhlbWVcIiBwcm9wIGlzIHJlcXVpcmVkLlxcblxcbicsMTU6XCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIiwxNjpcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLDE3OlwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwifTp7fTtmdW5jdGlvbiBEKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTA/dm9pZCAwOmFyZ3VtZW50c1swXSx0PVtdLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rPTEpdC5wdXNoKG48MHx8YXJndW1lbnRzLmxlbmd0aDw9bj92b2lkIDA6YXJndW1lbnRzW25dKTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlPWUucmVwbGFjZSgvJVthLXpdLyx0KX0pKSxlfWZ1bmN0aW9uIGooZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3Rocm93XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVj9uZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0LmlvL0pVSWFFI1wiK2UrXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIrKG4ubGVuZ3RoPjA/XCIgQXJnczogXCIrbi5qb2luKFwiLCBcIik6XCJcIikpOm5ldyBFcnJvcihELmFwcGx5KHZvaWQgMCxbUltlXV0uY29uY2F0KG4pKS50cmltKCkpfXZhciBUPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5kZXhPZkdyb3VwPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtuPGU7bisrKXQrPXRoaXMuZ3JvdXBTaXplc1tuXTtyZXR1cm4gdH0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQpe2lmKGU+PXRoaXMuZ3JvdXBTaXplcy5sZW5ndGgpe2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXMscj1uLmxlbmd0aCxvPXI7ZT49bzspKG88PD0xKTwwJiZqKDE2LFwiXCIrZSk7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheShvKSx0aGlzLmdyb3VwU2l6ZXMuc2V0KG4pLHRoaXMubGVuZ3RoPW87Zm9yKHZhciBzPXI7czxvO3MrKyl0aGlzLmdyb3VwU2l6ZXNbc109MH1mb3IodmFyIGk9dGhpcy5pbmRleE9mR3JvdXAoZSsxKSxhPTAsYz10Lmxlbmd0aDthPGM7YSsrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W2FdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LHQuY2xlYXJHcm91cD1mdW5jdGlvbihlKXtpZihlPHRoaXMubGVuZ3RoKXt2YXIgdD10aGlzLmdyb3VwU2l6ZXNbZV0sbj10aGlzLmluZGV4T2ZHcm91cChlKSxyPW4rdDt0aGlzLmdyb3VwU2l6ZXNbZV09MDtmb3IodmFyIG89bjtvPHI7bysrKXRoaXMudGFnLmRlbGV0ZVJ1bGUobil9fSx0LmdldEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7aWYoZT49dGhpcy5sZW5ndGh8fDA9PT10aGlzLmdyb3VwU2l6ZXNbZV0pcmV0dXJuIHQ7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplc1tlXSxyPXRoaXMuaW5kZXhPZkdyb3VwKGUpLG89cituLHM9cjtzPG87cysrKXQrPXRoaXMudGFnLmdldFJ1bGUocykrXCIvKiFzYyovXFxuXCI7cmV0dXJuIHR9LGV9KCkseD1uZXcgTWFwLGs9bmV3IE1hcCxWPTEsQj1mdW5jdGlvbihlKXtpZih4LmhhcyhlKSlyZXR1cm4geC5nZXQoZSk7Zm9yKDtrLmhhcyhWKTspVisrO3ZhciB0PVYrKztyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoKDB8dCk8MHx8dD4xPDwzMCkmJmooMTYsXCJcIit0KSx4LnNldChlLHQpLGsuc2V0KHQsZSksdH0sej1mdW5jdGlvbihlKXtyZXR1cm4gay5nZXQoZSl9LE09ZnVuY3Rpb24oZSx0KXt0Pj1WJiYoVj10KzEpLHguc2V0KGUsdCksay5zZXQodCxlKX0sRz1cInN0eWxlW1wiK0ErJ11bZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMy42XCJdJyxMPW5ldyBSZWdFeHAoXCJeXCIrQSsnXFxcXC5nKFxcXFxkKylcXFxcW2lkPVwiKFtcXFxcd1xcXFxkLV0rKVwiXFxcXF0uKj9cIihbXlwiXSopJyksRj1mdW5jdGlvbihlLHQsbil7Zm9yKHZhciByLG89bi5zcGxpdChcIixcIikscz0wLGk9by5sZW5ndGg7czxpO3MrKykocj1vW3NdKSYmZS5yZWdpc3Rlck5hbWUodCxyKX0sWT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0odC50ZXh0Q29udGVudHx8XCJcIikuc3BsaXQoXCIvKiFzYyovXFxuXCIpLHI9W10sbz0wLHM9bi5sZW5ndGg7bzxzO28rKyl7dmFyIGk9bltvXS50cmltKCk7aWYoaSl7dmFyIGE9aS5tYXRjaChMKTtpZihhKXt2YXIgYz0wfHBhcnNlSW50KGFbMV0sMTApLHU9YVsyXTswIT09YyYmKE0odSxjKSxGKGUsdSxhWzNdKSxlLmdldFRhZygpLmluc2VydFJ1bGVzKGMscikpLHIubGVuZ3RoPTB9ZWxzZSByLnB1c2goaSl9fX0scT1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsfSxIPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmhlYWQsbj1lfHx0LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hpbGROb2RlcyxuPXQubGVuZ3RoO24+PTA7bi0tKXt2YXIgcj10W25dO2lmKHImJjE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShBKSlyZXR1cm4gcn19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoQSxcImFjdGl2ZVwiKSxyLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVkLXZlcnNpb25cIixcIjUuMy42XCIpO3ZhciBpPXEoKTtyZXR1cm4gaSYmci5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGkpLG4uaW5zZXJ0QmVmb3JlKHIscykscn0sJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5zaGVldD1mdW5jdGlvbihlKXtpZihlLnNoZWV0KXJldHVybiBlLnNoZWV0O2Zvcih2YXIgdD1kb2N1bWVudC5zdHlsZVNoZWV0cyxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO2lmKG8ub3duZXJOb2RlPT09ZSlyZXR1cm4gb31qKDE3KX0odCksdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuc2hlZXQuZGVsZXRlUnVsZShlKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zaGVldC5jc3NSdWxlc1tlXTtyZXR1cm4gdm9pZCAwIT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuY3NzVGV4dD90LmNzc1RleHQ6XCJcIn0sZX0oKSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0aGlzLm5vZGVzPXQuY2hpbGROb2Rlcyx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkscj10aGlzLm5vZGVzW2VdO3JldHVybiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4scnx8bnVsbCksdGhpcy5sZW5ndGgrKywhMH1yZXR1cm4hMX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ub2Rlc1tlXS50ZXh0Q29udGVudDpcIlwifSxlfSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMucnVsZXM9W10sdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5ydWxlcy5zcGxpY2UoZSwxKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ydWxlc1tlXTpcIlwifSxlfSgpLEo9SSxYPXtpc1NlcnZlcjohSSx1c2VDU1NPTUluamVjdGlvbjohUH0sWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpLHZvaWQgMD09PXQmJih0PXt9KSx0aGlzLm9wdGlvbnM9dih7fSxYLHt9LGUpLHRoaXMuZ3M9dCx0aGlzLm5hbWVzPW5ldyBNYXAobiksdGhpcy5zZXJ2ZXI9ISFlLmlzU2VydmVyLCF0aGlzLnNlcnZlciYmSSYmSiYmKEo9ITEsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoRyksbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtvJiZcImFjdGl2ZVwiIT09by5nZXRBdHRyaWJ1dGUoQSkmJihZKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpfWUucmVnaXN0ZXJJZD1mdW5jdGlvbihlKXtyZXR1cm4gQihlKX07dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucz1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksbmV3IGUodih7fSx0aGlzLm9wdGlvbnMse30sdCksdGhpcy5ncyxuJiZ0aGlzLm5hbWVzfHx2b2lkIDApfSx0LmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5nZXRUYWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWd8fCh0aGlzLnRhZz0obj0odD10aGlzLm9wdGlvbnMpLmlzU2VydmVyLHI9dC51c2VDU1NPTUluamVjdGlvbixvPXQudGFyZ2V0LGU9bj9uZXcgVShvKTpyP25ldyAkKG8pOm5ldyBXKG8pLG5ldyBUKGUpKSk7dmFyIGUsdCxuLHIsb30sdC5oYXNOYW1lRm9ySWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmhhcyh0KX0sdC5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZihCKGUpLHRoaXMubmFtZXMuaGFzKGUpKXRoaXMubmFtZXMuZ2V0KGUpLmFkZCh0KTtlbHNle3ZhciBuPW5ldyBTZXQ7bi5hZGQodCksdGhpcy5uYW1lcy5zZXQoZSxuKX19LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0LG4pe3RoaXMucmVnaXN0ZXJOYW1lKGUsdCksdGhpcy5nZXRUYWcoKS5pbnNlcnRSdWxlcyhCKGUpLG4pfSx0LmNsZWFyTmFtZXM9ZnVuY3Rpb24oZSl7dGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmNsZWFyKCl9LHQuY2xlYXJSdWxlcz1mdW5jdGlvbihlKXt0aGlzLmdldFRhZygpLmNsZWFyR3JvdXAoQihlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LmNsZWFyVGFnPWZ1bmN0aW9uKCl7dGhpcy50YWc9dm9pZCAwfSx0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmdldFRhZygpLG49dC5sZW5ndGgscj1cIlwiLG89MDtvPG47bysrKXt2YXIgcz16KG8pO2lmKHZvaWQgMCE9PXMpe3ZhciBpPWUubmFtZXMuZ2V0KHMpLGE9dC5nZXRHcm91cChvKTtpZihpJiZhJiZpLnNpemUpe3ZhciBjPUErXCIuZ1wiK28rJ1tpZD1cIicrcysnXCJdJyx1PVwiXCI7dm9pZCAwIT09aSYmaS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmxlbmd0aD4wJiYodSs9ZStcIixcIil9KSkscis9XCJcIithK2MrJ3tjb250ZW50OlwiJyt1KydcIn0vKiFzYyovXFxuJ319fXJldHVybiByfSh0aGlzKX0sZX0oKSxLPS8oYSkoZCkvZ2ksUT1mdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKyhlPjI1PzM5Ojk3KSl9O2Z1bmN0aW9uIGVlKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PjUyO3Q9dC81MnwwKW49USh0JTUyKStuO3JldHVybihRKHQlNTIpK24pLnJlcGxhY2UoSyxcIiQxLSQyXCIpfXZhciB0ZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10Lmxlbmd0aDtuOyllPTMzKmVedC5jaGFyQ29kZUF0KC0tbik7cmV0dXJuIGV9LG5lPWZ1bmN0aW9uKGUpe3JldHVybiB0ZSg1MzgxLGUpfTtmdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBuPWVbdF07aWYoYihuKSYmIU4obikpcmV0dXJuITF9cmV0dXJuITB9dmFyIG9lPW5lKFwiNS4zLjZcIiksc2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJnJlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPXRlKG9lLHQpLHRoaXMuYmFzZVN0eWxlPW4sWi5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5jb21wb25lbnRJZCxvPVtdO2lmKHRoaXMuYmFzZVN0eWxlJiZvLnB1c2godGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pKSx0aGlzLmlzU3RhdGljJiYhbi5oYXNoKWlmKHRoaXMuc3RhdGljUnVsZXNJZCYmdC5oYXNOYW1lRm9ySWQocix0aGlzLnN0YXRpY1J1bGVzSWQpKW8ucHVzaCh0aGlzLnN0YXRpY1J1bGVzSWQpO2Vsc2V7dmFyIHM9TmUodGhpcy5ydWxlcyxlLHQsbikuam9pbihcIlwiKSxpPWVlKHRlKHRoaXMuYmFzZUhhc2gscyk+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixpKSl7dmFyIGE9bihzLFwiLlwiK2ksdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixpLGEpfW8ucHVzaChpKSx0aGlzLnN0YXRpY1J1bGVzSWQ9aX1lbHNle2Zvcih2YXIgYz10aGlzLnJ1bGVzLmxlbmd0aCx1PXRlKHRoaXMuYmFzZUhhc2gsbi5oYXNoKSxsPVwiXCIsZD0wO2Q8YztkKyspe3ZhciBoPXRoaXMucnVsZXNbZF07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGgpbCs9aCxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodT10ZSh1LGgrZCkpO2Vsc2UgaWYoaCl7dmFyIHA9TmUoaCxlLHQsbiksZj1BcnJheS5pc0FycmF5KHApP3Auam9pbihcIlwiKTpwO3U9dGUodSxmK2QpLGwrPWZ9fWlmKGwpe3ZhciBtPWVlKHU+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixtKSl7dmFyIHk9bihsLFwiLlwiK20sdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixtLHkpfW8ucHVzaChtKX19cmV0dXJuIG8uam9pbihcIiBcIil9LGV9KCksaWU9L15cXHMqXFwvXFwvLiokL2dtLGFlPVtcIjpcIixcIltcIixcIi5cIixcIiNcIl07ZnVuY3Rpb24gY2UoZSl7dmFyIHQsbixyLG8scz12b2lkIDA9PT1lP0U6ZSxpPXMub3B0aW9ucyxhPXZvaWQgMD09PWk/RTppLGM9cy5wbHVnaW5zLHU9dm9pZCAwPT09Yz93OmMsbD1uZXcgcChhKSxkPVtdLGg9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXtpZih0KXRyeXtlKHQrXCJ9XCIpfWNhdGNoKGUpe319cmV0dXJuIGZ1bmN0aW9uKG4scixvLHMsaSxhLGMsdSxsLGQpe3N3aXRjaChuKXtjYXNlIDE6aWYoMD09PWwmJjY0PT09ci5jaGFyQ29kZUF0KDApKXJldHVybiBlKHIrXCI7XCIpLFwiXCI7YnJlYWs7Y2FzZSAyOmlmKDA9PT11KXJldHVybiByK1wiLyp8Ki9cIjticmVhaztjYXNlIDM6c3dpdGNoKHUpe2Nhc2UgMTAyOmNhc2UgMTEyOnJldHVybiBlKG9bMF0rciksXCJcIjtkZWZhdWx0OnJldHVybiByKygwPT09ZD9cIi8qfCovXCI6XCJcIil9Y2FzZS0yOnIuc3BsaXQoXCIvKnwqL31cIikuZm9yRWFjaCh0KX19fSgoZnVuY3Rpb24oZSl7ZC5wdXNoKGUpfSkpLGY9ZnVuY3Rpb24oZSxyLHMpe3JldHVybiAwPT09ciYmLTEhPT1hZS5pbmRleE9mKHNbbi5sZW5ndGhdKXx8cy5tYXRjaChvKT9lOlwiLlwiK3R9O2Z1bmN0aW9uIG0oZSxzLGksYSl7dm9pZCAwPT09YSYmKGE9XCImXCIpO3ZhciBjPWUucmVwbGFjZShpZSxcIlwiKSx1PXMmJmk/aStcIiBcIitzK1wiIHsgXCIrYytcIiB9XCI6YztyZXR1cm4gdD1hLG49cyxyPW5ldyBSZWdFeHAoXCJcXFxcXCIrbitcIlxcXFxiXCIsXCJnXCIpLG89bmV3IFJlZ0V4cChcIihcXFxcXCIrbitcIlxcXFxiKXsyLH1cIiksbChpfHwhcz9cIlwiOnMsdSl9cmV0dXJuIGwudXNlKFtdLmNvbmNhdCh1LFtmdW5jdGlvbihlLHQsbyl7Mj09PWUmJm8ubGVuZ3RoJiZvWzBdLmxhc3RJbmRleE9mKG4pPjAmJihvWzBdPW9bMF0ucmVwbGFjZShyLGYpKX0saCxmdW5jdGlvbihlKXtpZigtMj09PWUpe3ZhciB0PWQ7cmV0dXJuIGQ9W10sdH19XSkpLG0uaGFzaD11Lmxlbmd0aD91LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lfHxqKDE1KSx0ZShlLHQubmFtZSl9KSw1MzgxKS50b1N0cmluZygpOlwiXCIsbX12YXIgdWU9ci5jcmVhdGVDb250ZXh0KCksbGU9dWUuQ29uc3VtZXIsZGU9ci5jcmVhdGVDb250ZXh0KCksaGU9KGRlLkNvbnN1bWVyLG5ldyBaKSxwZT1jZSgpO2Z1bmN0aW9uIGZlKCl7cmV0dXJuIHModWUpfHxoZX1mdW5jdGlvbiBtZSgpe3JldHVybiBzKGRlKXx8cGV9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9byhlLnN0eWxpc1BsdWdpbnMpLG49dFswXSxzPXRbMV0sYz1mZSgpLHU9aSgoZnVuY3Rpb24oKXt2YXIgdD1jO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0pLFtlLmRpc2FibGVDU1NPTUluamVjdGlvbixlLnNoZWV0LGUudGFyZ2V0XSksbD1pKChmdW5jdGlvbigpe3JldHVybiBjZSh7b3B0aW9uczp7cHJlZml4OiFlLmRpc2FibGVWZW5kb3JQcmVmaXhlc30scGx1Z2luczpufSl9KSxbZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsbl0pO3JldHVybiBhKChmdW5jdGlvbigpe2gobixlLnN0eWxpc1BsdWdpbnMpfHxzKGUuc3R5bGlzUGx1Z2lucyl9KSxbZS5zdHlsaXNQbHVnaW5zXSksci5jcmVhdGVFbGVtZW50KHVlLlByb3ZpZGVyLHt2YWx1ZTp1fSxyLmNyZWF0ZUVsZW1lbnQoZGUuUHJvdmlkZXIse3ZhbHVlOmx9LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ci5DaGlsZHJlbi5vbmx5KGUuY2hpbGRyZW4pOmUuY2hpbGRyZW4pKX12YXIgdmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIG49dGhpczt0aGlzLmluamVjdD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXBlKTt2YXIgcj1uLm5hbWUrdC5oYXNoO2UuaGFzTmFtZUZvcklkKG4uaWQscil8fGUuaW5zZXJ0UnVsZXMobi5pZCxyLHQobi5ydWxlcyxyLFwiQGtleWZyYW1lc1wiKSl9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gaigxMixTdHJpbmcobi5uYW1lKSl9LHRoaXMubmFtZT1lLHRoaXMuaWQ9XCJzYy1rZXlmcmFtZXMtXCIrZSx0aGlzLnJ1bGVzPXR9cmV0dXJuIGUucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXBlKSx0aGlzLm5hbWUrZS5oYXNofSxlfSgpLGdlPS8oW0EtWl0pLyxTZT0vKFtBLVpdKS9nLHdlPS9ebXMtLyxFZT1mdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9O2Z1bmN0aW9uIGJlKGUpe3JldHVybiBnZS50ZXN0KGUpP2UucmVwbGFjZShTZSxFZSkucmVwbGFjZSh3ZSxcIi1tcy1cIik6ZX12YXIgX2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fCExPT09ZXx8XCJcIj09PWV9O2Z1bmN0aW9uIE5lKGUsbixyLG8pe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcyxpPVtdLGE9MCxjPWUubGVuZ3RoO2E8YzthKz0xKVwiXCIhPT0ocz1OZShlW2FdLG4scixvKSkmJihBcnJheS5pc0FycmF5KHMpP2kucHVzaC5hcHBseShpLHMpOmkucHVzaChzKSk7cmV0dXJuIGl9aWYoX2UoZSkpcmV0dXJuXCJcIjtpZihOKGUpKXJldHVyblwiLlwiK2Uuc3R5bGVkQ29tcG9uZW50SWQ7aWYoYihlKSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YobD1lKXx8bC5wcm90b3R5cGUmJmwucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR8fCFuKXJldHVybiBlO3ZhciB1PWUobik7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdCh1KSYmY29uc29sZS53YXJuKF8oZSkrXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKSxOZSh1LG4scixvKX12YXIgbDtyZXR1cm4gZSBpbnN0YW5jZW9mIHZlP3I/KGUuaW5qZWN0KHIsbyksZS5nZXROYW1lKG8pKTplOlMoZSk/ZnVuY3Rpb24gZSh0LG4pe3ZhciByLG8scz1bXTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYhX2UodFtpXSkmJihBcnJheS5pc0FycmF5KHRbaV0pJiZ0W2ldLmlzQ3NzfHxiKHRbaV0pP3MucHVzaChiZShpKStcIjpcIix0W2ldLFwiO1wiKTpTKHRbaV0pP3MucHVzaC5hcHBseShzLGUodFtpXSxpKSk6cy5wdXNoKGJlKGkpK1wiOiBcIisocj1pLG51bGw9PShvPXRbaV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIG98fFwiXCI9PT1vP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIG98fDA9PT1vfHxyIGluIGY/U3RyaW5nKG8pLnRyaW0oKTpvK1wicHhcIikrXCI7XCIpKTtyZXR1cm4gbj9bbitcIiB7XCJdLmNvbmNhdChzLFtcIn1cIl0pOnN9KGUpOmUudG9TdHJpbmcoKX12YXIgQWU9ZnVuY3Rpb24oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSkmJihlLmlzQ3NzPSEwKSxlfTtmdW5jdGlvbiBDZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07cmV0dXJuIGIoZSl8fFMoZSk/QWUoTmUoZyh3LFtlXS5jb25jYXQobikpKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6QWUoTmUoZyhlLG4pKSl9dmFyIEllPS9pbnZhbGlkIGhvb2sgY2FsbC9pLFBlPW5ldyBTZXQsT2U9ZnVuY3Rpb24oZSx0KXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgbj1cIlRoZSBjb21wb25lbnQgXCIrZSsodD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIikrXCIgaGFzIGJlZW4gY3JlYXRlZCBkeW5hbWljYWxseS5cXG5Zb3UgbWF5IHNlZSB0aGlzIHdhcm5pbmcgYmVjYXVzZSB5b3UndmUgY2FsbGVkIHN0eWxlZCBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXFxuVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC5cIixyPWNvbnNvbGUuZXJyb3I7dHJ5e3ZhciBvPSEwO2NvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oZSl7aWYoSWUudGVzdChlKSlvPSExLFBlLmRlbGV0ZShuKTtlbHNle2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHM9bmV3IEFycmF5KHQ+MT90LTE6MCksaT0xO2k8dDtpKyspc1tpLTFdPWFyZ3VtZW50c1tpXTtyLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KHMpKX19LGMoKSxvJiYhUGUuaGFzKG4pJiYoY29uc29sZS53YXJuKG4pLFBlLmFkZChuKSl9Y2F0Y2goZSl7SWUudGVzdChlLm1lc3NhZ2UpJiZQZS5kZWxldGUobil9ZmluYWxseXtjb25zb2xlLmVycm9yPXJ9fX0sUmU9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sRGU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxqZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIFRlKGUpe3JldHVybiBlLnJlcGxhY2UoRGUsXCItXCIpLnJlcGxhY2UoamUsXCJcIil9dmFyIHhlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiBrZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LEJlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gemUoZSx0LG4pe3ZhciByPWVbbl07VmUodCkmJlZlKHIpP01lKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIE1lKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoVmUoaSkpZm9yKHZhciBhIGluIGkpQmUoYSkmJnplKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgR2U9ci5jcmVhdGVDb250ZXh0KCksTGU9R2UuQ29uc3VtZXI7ZnVuY3Rpb24gRmUoZSl7dmFyIHQ9cyhHZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KEdlLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBZZT17fTtmdW5jdGlvbiBxZShlLHQsbil7dmFyIG89TihlKSxpPSFrZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOlRlKGUpO1llW25dPShZZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK3hlKFwiNS4zLjZcIituK1llW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIGtlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/VGUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyLG8pe3JldHVybiBlLnNob3VsZEZvcndhcmRQcm9wKG4scixvKSYmdC5zaG91bGRGb3J3YXJkUHJvcChuLHIsbyl9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IHNlKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMsaT1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLHMsaT1lO2Zvcih0IGluIGIoaSkmJihpPWkocikpLGkpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0scz1pW3RdLG4mJnM/bitcIiBcIitzOm58fHMpOmlbdF19KSksW3Isb119KFJlKHQscyhHZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxzPW1lKCksaT10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLHMpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIoaSksaX0oaSxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPWtlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSxfKTohTnx8bShJKSkmJihDW0ldPUFbSV0pKTtyZXR1cm4gdC5zdHlsZSYmZy5zdHlsZSE9PXQuc3R5bGUmJihDLnN0eWxlPXYoe30sdC5zdHlsZSx7fSxnLnN0eWxlKSksQy5jbGFzc05hbWU9QXJyYXkucHJvdG90eXBlLmNvbmNhdChjLGgsUyE9PWg/UzpudWxsLHQuY2xhc3NOYW1lLGcuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksQy5yZWY9dyx1KF8sQyl9KEMsZSx0LFApfTtyZXR1cm4gTy5kaXNwbGF5TmFtZT1mLChDPXIuZm9yd2FyZFJlZihPKSkuYXR0cnM9UyxDLmNvbXBvbmVudFN0eWxlPUksQy5kaXNwbGF5TmFtZT1mLEMuc2hvdWxkRm9yd2FyZFByb3A9QSxDLmZvbGRlZENvbXBvbmVudElkcz1vP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5mb2xkZWRDb21wb25lbnRJZHMsZS5zdHlsZWRDb21wb25lbnRJZCk6dyxDLnN0eWxlZENvbXBvbmVudElkPWcsQy50YXJnZXQ9bz9lLnRhcmdldDplLEMud2l0aENvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgcj10LmNvbXBvbmVudElkLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciBuLHIsbz17fSxzPU9iamVjdC5rZXlzKGUpO2ZvcihyPTA7cjxzLmxlbmd0aDtyKyspbj1zW3JdLHQuaW5kZXhPZihuKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KHQsW1wiY29tcG9uZW50SWRcIl0pLHM9ciYmcitcIi1cIisoa2UoZSk/ZTpUZShfKGUpKSk7cmV0dXJuIHFlKGUsdih7fSxvLHthdHRyczpTLGNvbXBvbmVudElkOnN9KSxuKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJkZWZhdWx0UHJvcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcz1vP01lKHt9LGUuZGVmYXVsdFByb3BzLHQpOnR9fSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKE9lKGYsZyksQy53YXJuVG9vTWFueUNsYXNzZXM9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fSxyPSExO3JldHVybiBmdW5jdGlvbihvKXtpZighciYmKG5bb109ITAsT2JqZWN0LmtleXMobikubGVuZ3RoPj0yMDApKXt2YXIgcz10Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgMjAwIGNsYXNzZXMgd2VyZSBnZW5lcmF0ZWQgZm9yIGNvbXBvbmVudCBcIitlK3MrXCIuXFxuQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG5FeGFtcGxlOlxcbiAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbiAgICBzdHlsZToge1xcbiAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuICAgIH0sXFxuICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbiAgPENvbXBvbmVudCAvPlwiKSxyPSEwLG49e319fX0oZixnKSksQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiLlwiK0Muc3R5bGVkQ29tcG9uZW50SWR9LGkmJnkoQyxlLHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwLHdpdGhDb21wb25lbnQ6ITB9KSxDfXZhciBIZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbyl7aWYodm9pZCAwPT09byYmKG89RSksIW4ocikpcmV0dXJuIGooMSxTdHJpbmcocikpO3ZhciBzPWZ1bmN0aW9uKCl7cmV0dXJuIHQocixvLENlLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpKX07cmV0dXJuIHMud2l0aENvbmZpZz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHt9LG4pKX0scy5hdHRycz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHthdHRyczpBcnJheS5wcm90b3R5cGUuY29uY2F0KG8uYXR0cnMsbikuZmlsdGVyKEJvb2xlYW4pfSkpfSxzfShxZSxlKX07W1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkXCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWFycXVlZVwiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRpdGxlXCIsXCJ0clwiLFwidHJhY2tcIixcInVcIixcInVsXCIsXCJ2YXJcIixcInZpZGVvXCIsXCJ3YnJcIixcImNpcmNsZVwiLFwiY2xpcFBhdGhcIixcImRlZnNcIixcImVsbGlwc2VcIixcImZvcmVpZ25PYmplY3RcIixcImdcIixcImltYWdlXCIsXCJsaW5lXCIsXCJsaW5lYXJHcmFkaWVudFwiLFwibWFya2VyXCIsXCJtYXNrXCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwb2x5Z29uXCIsXCJwb2x5bGluZVwiLFwicmFkaWFsR3JhZGllbnRcIixcInJlY3RcIixcInN0b3BcIixcInN2Z1wiLFwidGV4dFwiLFwidGV4dFBhdGhcIixcInRzcGFuXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe0hlW2VdPUhlKGUpfSkpO3ZhciAkZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnJ1bGVzPWUsdGhpcy5jb21wb25lbnRJZD10LHRoaXMuaXNTdGF0aWM9cmUoZSksWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY3JlYXRlU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXIoTmUodGhpcy5ydWxlcyx0LG4scikuam9pbihcIlwiKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sdC5yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oZSx0KXt0LmNsZWFyUnVsZXModGhpcy5jb21wb25lbnRJZCtlKX0sdC5yZW5kZXJTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7ZT4yJiZaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpO2Z1bmN0aW9uIFdlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgaT1DZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSksYT1cInNjLWdsb2JhbC1cIit4ZShKU09OLnN0cmluZ2lmeShpKSksdT1uZXcgJGUoaSxhKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWZlKCksbj1tZSgpLG89cyhHZSksbD1jKHQuYWxsb2NhdGVHU0luc3RhbmNlKGEpKS5jdXJyZW50O3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnIuQ2hpbGRyZW4uY291bnQoZS5jaGlsZHJlbikmJmNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiK2ErXCIgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLlwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9PWUuaW5kZXhPZihcIkBpbXBvcnRcIil9KSkmJmNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpLHQuc2VydmVyJiZoKGwsZSx0LG8sbiksZCgoZnVuY3Rpb24oKXtpZighdC5zZXJ2ZXIpcmV0dXJuIGgobCxlLHQsbyxuKSxmdW5jdGlvbigpe3JldHVybiB1LnJlbW92ZVN0eWxlcyhsLHQpfX0pLFtsLGUsdCxvLG5dKSxudWxsfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtpZih1LmlzU3RhdGljKXUucmVuZGVyU3R5bGVzKGUsTyxuLG8pO2Vsc2V7dmFyIHM9dih7fSx0LHt0aGVtZTpSZSh0LHIsbC5kZWZhdWx0UHJvcHMpfSk7dS5yZW5kZXJTdHlsZXMoZSxzLG4sbyl9fXJldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJk9lKGEpLHIubWVtbyhsKX1mdW5jdGlvbiBVZShlKXtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz1DZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSkuam9pbihcIlwiKSxzPXhlKG8pO3JldHVybiBuZXcgdmUocyxvKX12YXIgSmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpczt0aGlzLl9lbWl0U2hlZXRDU1M9ZnVuY3Rpb24oKXt2YXIgdD1lLmluc3RhbmNlLnRvU3RyaW5nKCk7aWYoIXQpcmV0dXJuXCJcIjt2YXIgbj1xKCk7cmV0dXJuXCI8c3R5bGUgXCIrW24mJidub25jZT1cIicrbisnXCInLEErJz1cInRydWVcIicsJ2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjMuNlwiJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpK1wiPlwiK3QrXCI8L3N0eWxlPlwifSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe3JldHVybiBlLnNlYWxlZD9qKDIpOmUuX2VtaXRTaGVldENTUygpfSx0aGlzLmdldFN0eWxlRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKGUuc2VhbGVkKXJldHVybiBqKDIpO3ZhciBuPSgodD17fSlbQV09XCJcIix0W1wiZGF0YS1zdHlsZWQtdmVyc2lvblwiXT1cIjUuMy42XCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1xKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHYoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWih7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9qKDIpOnIuY3JlYXRlRWxlbWVudCh5ZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBqKDMpfSxlfSgpLFhlPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1zKEdlKSxpPWUuZGVmYXVsdFByb3BzLGE9UmUodCxvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK18oZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUsdih7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiB5KHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitfKGUpK1wiKVwiLHR9LFplPWZ1bmN0aW9uKCl7cmV0dXJuIHMoR2UpfSxLZT17U3R5bGVTaGVldDpaLG1hc3RlclNoZWV0OmhlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgSGU7ZXhwb3J0e0plIGFzIFNlcnZlclN0eWxlU2hlZXQsbGUgYXMgU3R5bGVTaGVldENvbnN1bWVyLHVlIGFzIFN0eWxlU2hlZXRDb250ZXh0LHllIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLExlIGFzIFRoZW1lQ29uc3VtZXIsR2UgYXMgVGhlbWVDb250ZXh0LEZlIGFzIFRoZW1lUHJvdmlkZXIsS2UgYXMgX19QUklWQVRFX18sV2UgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQ2UgYXMgY3NzLE4gYXMgaXNTdHlsZWRDb21wb25lbnQsVWUgYXMga2V5ZnJhbWVzLFplIGFzIHVzZVRoZW1lLEMgYXMgdmVyc2lvbixYZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFiYnJ8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8ZW50ZXJLZXlIaW50fGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHJhbnNsYXRlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5jcmVtZW50YWx8ZmFsbGJhY2t8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufG9wdGlvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpc1Byb3BWYWxpZCA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNQcm9wVmFsaWQ7XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wibG9kYXNoXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9iXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb3JlRGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZG9tUmVhZHlcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcIm1lZGlhVXRpbHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInJpY2hUZXh0XCJdOyIsImV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuIiwiZXhwb3J0IGNvbnN0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYmxvY2tzJztcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRWRpdCIsImJsb2NrUHJvcHMiLCJyZWFjdF8xIiwiRGVncmVlUHJvZ3JhbUVkaXRGb3JtXzEiLCJleHBvcnRzIiwiYmxvY2tfanNvbl8xIiwibmFtZSIsImVkaXQiLCJFZGl0XzEiLCJfYSIsImNvbnRlbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYmxvY2tfZWRpdG9yXzEiLCJ0YWdOYW1lIiwib25DaGFuZ2UiLCJuZXh0Q29udGVudCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJTYXZlIiwic2F2ZUJsb2NrUHJvcHMiLCJzYXZlIiwiQ29udGVudCIsIlNhdmVfMSIsIkFMTE9XRURfQkxPQ0tTIiwiVEVNUExBVEUiLCJhbGxvd2VkQmxvY2tzIiwidGVtcGxhdGUiLCJyZW5kZXJBcHBlbmRlciIsIkJ1dHRvbkJsb2NrQXBwZW5kZXIiLCJhZGRIZWFkaW5nQmxvY2tWYXJpYXRpb25zIiwic2V0dGluZ3MiLCJ2YXJpYXRpb25zIiwiaXNEZWZhdWx0IiwidGl0bGUiLCJhdHRyaWJ1dGVzIiwibGV2ZWwiLCJhZGRTaG9ydGNvZGVCbG9ja1ZhcmlhdGlvbnMiLCJ0ZXh0IiwiREVGQVVMVF9TSVpFIiwiQUxMT1dFRF9GT1JNQVRTIiwicmVnaXN0ZXJlZEZvcm1hdHMiLCJyaWNoX3RleHRfMSIsImdldEZvcm1hdFR5cGVzIiwiZm9ybWF0TmFtZXNUb0Rpc2FibGUiLCJmb3JFYWNoIiwiZm9ybWF0VHlwZSIsImluY2x1ZGVzIiwicHVzaCIsInJlbW92ZUZvcm1hdFR5cGVzIiwiREVGQVVMVF9TUVVBUkVfU0laRSIsIkRFRkFVTFRfU1RST0tFX1dJRFRIIiwiU3R5bGVkU3ZnQ2lyY2xlIiwic3R5bGVkX2NvbXBvbmVudHNfMSIsInN2ZyIsIkNpcmN1bGFyUHJvZ3Jlc3NCYXIiLCJwZXJjZW50YWdlIiwiX2IiLCJzcXVhcmVTaXplIiwiX2MiLCJzdHJva2VXaWR0aCIsInJhZGl1cyIsInZpZXdCb3giLCJkYXNoQXJyYXkiLCJNYXRoIiwiUEkiLCJkYXNoT2Zmc2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJjeCIsImN5IiwiciIsImZpbGwiLCJzdHJva2UiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJkZWZhdWx0UHJvcHMiLCJPYmplY3QiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiU3R5bGVkRWRpdG9yV3JhcHBlciIsImRpdiIsIkNvbnRlbnRGaWVsZCIsImN1cnJlbnRCbG9ja3MiLCJzZXRDdXJyZW50QmxvY2tzIiwidXBkYXRlVmFsdWUiLCJibG9ja3MiLCJ1cGRhdGVWYWx1ZURlYm91bmNlZCIsIm9uSW5wdXQiLCJjb21wb25lbnRzXzEiLCJTbG90IiwiZ2lmIiwicG5nIiwiU0VUVElOR1MiLCJhbGxvd2VkQmxvY2tUeXBlcyIsImNvbnN0YW50c18xIiwidXNlQmxvY2tFZGl0b3JTZXR0aW5ncyIsImhhc1VwbG9hZFBlcm1pc3Npb25zIiwic2VsZWN0IiwiY29yZV9kYXRhXzEiLCJjYW5Vc2VyIiwibWVkaWFVcGxvYWRCbG9ja0VkaXRvciIsImFyZ3VtZW50c09iamVjdCIsIndwQWxsb3dlZE1pbWVUeXBlcyIsIm9uRXJyb3IiLCJtZXNzYWdlIiwibWVkaWFVcGxvYWQiLCJfX2V4cGVyaW1lbnRhbEZldGNoTGlua1N1Z2dlc3Rpb25zIiwic2VhcmNoIiwic2VhcmNoT3B0aW9ucyIsIl9fZXhwZXJpbWVudGFsRmV0Y2hSaWNoVXJsRGF0YSIsIkRlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMiLCJlbmFibGVkIiwiY29tYmluYXRpb25zIiwic2V0Q29tYmluYXRpb25zIiwibGltaXRlZENvbWJpbmF0aW9ucyIsInNldExpbWl0ZWRDb21iaW5hdGlvbnMiLCJ1bmRlZmluZWQiLCJSZWxhdGVkRGVncmVlUHJvZ3JhbXNfMSIsInJlbGF0ZWREZWdyZWVQcm9ncmFtSWRzIiwic2V0UmVsYXRlZERlZ3JlZVByb2dyYW1zIiwibGFiZWwiLCJtZXNzYWdlcyIsImFkZGVkIiwicmVtb3ZlZCIsInJlbW92ZSIsIl9fZXhwZXJpbWVudGFsSW52YWxpZCIsIndpdGhSZWxhdGVkRGVncmVlUHJvZ3JhbVByb3BzIiwiV3JhcHBlZENvbXBvbmVudCIsIm90aGVycyIsImVudGl0eVRvVG9rZW4iLCJwb3N0IiwiZGVncmVlX3Byb2dyYW0iLCJkZSIsInBvc3RzIiwibWFwIiwiaWQiLCJtYXhTdWdnZXN0aW9ucyIsImhvY18xIiwiRW50aXR5U2VsZWN0b3JfMSIsIndpdGhEZWdyZWVQcm9ncmFtUG9zdHNfMSIsIndpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1Qb3N0c18xIiwid2l0aERlZ3JlZVByb2dyYW1Qb3N0cyIsIm93blByb3BzIiwibGVuZ3RoIiwiZW50aXRpZXMiLCJxdWVyeSIsInBlcl9wYWdlIiwib3JkZXJieSIsIl9maWVsZHMiLCJjb250ZXh0IiwiaW5jbHVkZSIsImpvaW4iLCJwb3N0VHlwZSIsIndpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1Qb3N0cyIsInNldFNlYXJjaCIsImVkaXRvcl8xIiwic2VhcmNoZWRFbnRpdGllcyIsImN1cnJlbnRQb3N0IiwiZ2V0Q3VycmVudFBvc3QiLCJnZXRFbnRpdHlSZWNvcmRzIiwib3JkZXIiLCJleGNsdWRlIiwiU3R5bGVkSGVhZGluZyIsIkFkbWlzc2lvblJlcXVpcmVtZW50cyIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImJhY2hlbG9yT3JUZWFjaGluZ0VuYWJsZWQiLCJ0ZWFjaGluZ0RlZ3JlZUhpZ2hlclNlbWVzdGVyRW5hYmxlZCIsIm1hc3RlcnNFbmFibGVkIiwiaHVtYW5pdGllc0ZhY3VsdHlMYW5ndWFnZVNraWxsc0VuYWJsZWQiLCJhcHBsaWNhdGlvblN1bW1lckRlYWRsaW5lRW5hYmxlZCIsIlRlcm1TZWxlY3Rvcl8xIiwidGF4b25vbXkiLCJhZG1pc3Npb25fcmVxdWlyZW1lbnRzIiwiYmFjaGVsb3Jfb3JfdGVhY2hpbmdfZGVncmVlIiwidGVybSIsInRlYWNoaW5nX2RlZ3JlZV9oaWdoZXJfc2VtZXN0ZXIiLCJtYXN0ZXIiLCJoZWxwIiwiTXVsdGlsaW5ndWFsQ29udGFpbmVyXzEiLCJsYW5ndWFnZUNvZGUiLCJDb250ZW50RmllbGRfMSIsImNvbnRlbnRfcmVsYXRlZF9tYXN0ZXJfcmVxdWlyZW1lbnRzIiwiYXBwbGljYXRpb25fZGVhZGxpbmVfd2ludGVyX3NlbWVzdGVyIiwiYXBwbGljYXRpb25fZGVhZGxpbmVfc3VtbWVyX3NlbWVzdGVyIiwiZGV0YWlsc19hbmRfbm90ZXMiLCJsYW5ndWFnZV9za2lsbHMiLCJsYW5ndWFnZV9za2lsbHNfaHVtYW5pdGllc19mYWN1bHR5IiwiZ2VybWFuX2xhbmd1YWdlX3NraWxsc19mb3JfaW50ZXJuYXRpb25hbF9zdHVkZW50cyIsIkNPTlRFTlRfSVRFTVMiLCJpdGVtIiwia2V5IiwiZW4iLCJkZXNjcmlwdGlvbiIsIkRlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnNfMSIsIkRlZ3JlZVByb2dyYW1FZGl0Rm9ybSIsIkRlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyXzEiLCJGb3JtSGVhZGluZ18xIiwiVGFic18xIiwidGFicyIsImNvbXBvbmVudCIsIkdlbmVyYWxfMSIsIkNvbnRlbnRfMSIsIkFkbWlzc2lvblJlcXVpcmVtZW50c18xIiwiT3JnYW5pemF0aW9uYWxMaW5rc18xIiwiRm9ybUhlYWRpbmciLCJHZW5lcmFsIiwiSW1hZ2VGaWVsZF8xIiwicGF0aCIsInN1YnRpdGxlIiwicGFyc2VJbnQiLCJzdGFuZGFyZF9kdXJhdGlvbiIsIm1pbiIsImNoZWNrZWQiLCJmZWVfcmVxdWlyZWQiLCJzdGFydCIsInRlcm1zIiwidHJhbnNmb3Jtc18xIiwiVGVybVNlbGVjdG9yXzIiLCJudW1iZXJfb2Zfc3R1ZGVudHMiLCJ0ZWFjaGluZ19sYW5ndWFnZSIsImRlZ3JlZSIsImZhY3VsdHkiLCJsb2NhdGlvbiIsInN1YmplY3RfZ3JvdXBzIiwidCIsIlRleHRDb250cm9sQ29sbGVjdGlvbl8xIiwidmlkZW9zIiwiTGltaXRlZElucHV0Q29udHJvbF8xIiwibWV0YV9kZXNjcmlwdGlvbiIsIm1heENoYXJzIiwia2V5cyIsImxhbmd1YWdlcyIsImxhbmd1YWdlTmFtZSIsIk11bHRpbGluZ3VhbENvbnRhaW5lciIsImNoaWxkcmVuIiwidGFiIiwiT3JnYW5pemF0aW9uYWxMaW5rcyIsImRlZ3JlZUZlZXNFbmFibGVkIiwiZXhhbWluYXRpb25zX29mZmljZSIsImV4YW1pbmF0aW9uX3JlZ3VsYXRpb25zIiwiaGFuZGJvb2siLCJtb2R1bGVfaGFuZGJvb2siLCJ1cmwiLCJ0eXBlIiwic3ViamVjdF9zcGVjaWZpY19hZHZpY2UiLCJyZXByZXNlbnRhdGl2ZXMiLCJzdHVkZW50X3JlcHJlc2VudGF0aXZlcyIsImRlZ3JlZVByb2dyYW1GZWVzIiwiZGVncmVlX3Byb2dyYW1fZmVlcyIsIkVudGl0eVNlbGVjdG9yIiwibWF4TGVuZ3RoIiwic2V0VmFsdWVzIiwiZGVib3VuY2VkU2VhcmNoIiwibmV3VmFsdWVzIiwic3VnZ2VzdGlvbnMiLCJvbkNoYW5nZVRva2VucyIsInRva2VucyIsImF2YWlsYWJsZUVudGl0aWVzIiwidW5pcXVlVG9rZW5zIiwibmV3RW50aXRpZXMiLCJ0b2tlbiIsImVudGl0eSIsImlzVG9rZW5WYWxpZCIsIm9uSW5wdXRDaGFuZ2UiLCJfX2V4cGVyaW1lbnRhbFNob3dIb3dUbyIsIl9fZXhwZXJpbWVudGFsVmFsaWRhdGVJbnB1dCIsIkltYWdlRmllbGQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZWxlY3RlZE1lZGlhIiwiUHJldmlldyIsInNyYyIsIm1lZGlhX2RldGFpbHMiLCJzaXplcyIsInRodW1ibmFpbCIsInNvdXJjZV91cmwiLCJhbHQiLCJvblNlbGVjdCIsIm9uQ2FuY2VsIiwiYWxsb3dlZFR5cGVzIiwibXVsdGlwbGUiLCJsYWJlbHMiLCJtZWRpYVByZXZpZXciLCJ1c2VNZWRpYSIsIm1lZGlhSWQiLCJtZWRpYSIsImdldE1lZGlhIiwiTGltaXRlZElucHV0Q29udHJvbCIsImNoYXJzTGVmdCIsInNldENoYXJzTGVmdCIsImp1c3RpZnkiLCJDaXJjdWxhclByb2dyZXNzXzEiLCJyZXBsYWNlIiwidG9TdHJpbmciLCJUYWJzIiwidHNsaWJfMSIsIndpdGhTaW5nbGVUZXJtU2VsZWN0b3JQcm9wcyIsIndpdGhEZWdyZWVQcm9ncmFtVGVybXNfMSIsIndpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtc18xIiwid2l0aFRlcm1TZWxlY3RvclByb3BzXzEiLCJ3aXRoRGVncmVlUHJvZ3JhbVRlcm1zIiwiaWRzIiwiaWRIZWxwZXJzXzEiLCJ0YXhvbm9teVNsdWdzIiwid2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zIiwid2l0aFRlcm1TZWxlY3RvclByb3BzIiwidHJhbnNmb3JtUmF3VmFsdWUiLCJzdHIiLCJTdHlsZWRGaWVsZFJvdyIsIlRleHRDb250cm9sQ29sbGVjdGlvbiIsImZpZWxkcyIsInNldEZpZWxkcyIsImZpbHRlciIsImYiLCJmaWVsZCIsImluZGV4IiwiZHJhZnQiLCJpc0Rlc3RydWN0aXZlIiwib25DbGljayIsImljb24iLCJ2YXJpYW50IiwiRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXIiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJwcm9wZXJ0eU5hbWUiLCJkZWdyZWVQcm9ncmFtRGF0YSIsInNldERlZ3JlZVByb2dyYW1EYXRhIiwidmFsIiwiYWRkRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJwcmV2RXJyb3JzIiwicmVtb3ZlRXJyb3IiLCJQcm92aWRlciIsInVzZUVkaXREZWdyZWVQcm9ncmFtIiwiQkFDSEVMT1IiLCJNQVNURVJTIiwiVEVBQ0hJTkdfREVHUkVFIiwiQUxMT1dFRF9GQUNVTFRJRVNfRk9SX0NPTUJJTkFUSU9OIiwidXNlRGVncmVlRmVlc0VuYWJsZWQiLCJmZWVSZXF1aXJlZCIsInVzZUNvbWJpbmF0aW9uT2ZEZWdyZWVQcm9ncmFtRW5hYmxlZCIsImFiYnJldmlhdGlvbiIsImRlZnNfMSIsInVzZUFkbWlzc2lvblJlcXVpcmVtZW50c0ZvckJhY2hlbG9yQW5kVGVhY2hpbmdEZWdyZWVzRW5hYmxlIiwidXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzVGVhY2hpbmdEZWdyZWVBdEhpZ2hlclNlbWVzdGVyRW5hYmxlZCIsImJhY2hlbG9yT3JUZWFjaGluZ0FkbWlzc2lvblJlcXVpcmVtZW50IiwidXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yTWFzdGVyc0RlZ3JlZSIsInVzZUxhbmd1YWdlU2tpbGxzRm9yRmFjdWx0eU9mSHVtYW5pdGllc09ubHlFbmFibGVkIiwidXNlQXBwbGljYXRpb25EZWFkbGluZVN1bW1lclNlbWVzdGVyRW5hYmxlZCIsInNlbWVzdGVyIiwidXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5IiwicHJvcGVydHlJZCIsImVudGl0eUlkIiwic3BsaXQiLCJzZXJ2ZXJEYXRhIiwid2luZG93IiwiRGVncmVlUHJvZ3JhbUVkaXRvclNlcnZlckRhdGEiLCJFcnJvciIsIkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkciLCJ0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmciLCJtZXRhIiwibmFtZV9lbiIsInRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsiLCJsaW5rX3RleHQiLCJsaW5rX3RleHRfZW4iLCJsaW5rX3VybCIsImxpbmtfdXJsX2VuIiwidHJhbnNmb3JtVGVybVRvRGVncmVlIiwiYWJicmV2aWF0aW9uX2VuIl0sInNvdXJjZVJvb3QiOiIifQ==
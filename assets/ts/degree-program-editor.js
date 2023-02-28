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
var StyledEditorWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    margin: 0 0 12px !important;\n\n    .content-field-blocks-list {\n        border: 1px solid #757575;\n        padding: 10px;\n    }\n"], ["\n    margin: 0 0 12px !important;\n\n    .content-field-blocks-list {\n        border: 1px solid #757575;\n        padding: 10px;\n    }\n"])));
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
  }, react_1.default.createElement(components_1.SlotFillProvider, null, react_1.default.createElement(StyledEditorWrapper, {
    className: "editor-styles-wrapper"
  }, react_1.default.createElement(block_editor_1.BlockEditorKeyboardShortcuts.Register, null), react_1.default.createElement(block_editor_1.BlockTools, null, react_1.default.createElement(block_editor_1.WritingFlow, null, react_1.default.createElement(block_editor_1.ObserveTyping, null, react_1.default.createElement(block_editor_1.BlockList, {
    renderAppender: block_editor_1.DefaultBlockAppender,
    className: "content-field-blocks-list"
  })))), react_1.default.createElement(block_editor_1.BlockBreadcrumb, null)), react_1.default.createElement(components_1.Popover.Slot, null)));
};
exports["default"] = react_1.default.memo(ContentField, function (prevProps, nextProps) {
  return prevProps.content === nextProps.content;
});
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
  }, "Bachelor/Lehramt"), bachelorOrTeachingEnabled && react_1.default.createElement(TermSelector_1.default, {
    id: "bachelor_teaching_admission_requirement",
    label: (0, i18n_1._x)("Admission requirements for Bachelor's/teaching degrees", 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "bachelorOrTeachingDegreeAdmissionRequirement",
    value: values.admission_requirements.bachelor_or_teaching_degree.id,
    onChange: function (term) {
      handleChange('admission_requirements.bachelor_or_teaching_degree', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  }), teachingDegreeHigherSemesterEnabled && react_1.default.createElement(TermSelector_1.default, {
    id: "teaching_higher_semester_admission_requirement",
    label: (0, i18n_1._x)('Admission requirements for entering a teaching degree at a higher semester', 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "teachingDegreeHigherSemesterAdmissionRequirement",
    value: values.admission_requirements.teaching_degree_higher_semester.id,
    onChange: function (term) {
      handleChange('admission_requirements.teaching_degree_higher_semester', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  })), react_1.default.createElement("div", null, react_1.default.createElement(StyledHeading, {
    level: 4
  }, "Master"), mastersEnabled && react_1.default.createElement(TermSelector_1.default, {
    id: "master_admission_requirement",
    label: (0, i18n_1._x)("Admission requirements for Master's degree", 'backoffice: degree program edit form', 'fau-degree-program'),
    taxonomy: "masterDegreeAdmissionRequirement",
    value: values.admission_requirements.master.id,
    onChange: function (term) {
      handleChange('admission_requirements.master', (0, transforms_1.transformTermToMultilingualLink)(term));
    }
  }), react_1.default.createElement(components_1.BaseControl, {
    label: (0, i18n_1._x)("Content-related admission requirements for Master's degree", 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "vorausgegangene Bachelorstudieng\u00E4nge, Qualifikationswerte, etc."
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.content_related_master_requirements
  }, function (languageCode) {
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
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.details_and_notes
  }, function (languageCode) {
    return react_1.default.createElement(ContentField_1.default, {
      onChange: function (value) {
        handleChange("details_and_notes.".concat(languageCode), value);
      },
      content: values.details_and_notes[languageCode]
    });
  })), react_1.default.createElement(components_1.BaseControl, {
    label: (0, i18n_1._x)('Language skills', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Sprachkenntnisse, die f\u00FCr den Studiengang erforderlich sind."
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.language_skills
  }, function (languageCode) {
    return react_1.default.createElement(ContentField_1.default, {
      onChange: function (value) {
        handleChange("language_skills.".concat(languageCode), value);
      },
      content: values.language_skills[languageCode]
    });
  })), humanitiesFacultyLanguageSkillsEnabled && react_1.default.createElement(components_1.BaseControl, {
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
      label: "".concat(values.content[item].title.de, " ").concat(values.content[item].title.en ? "(".concat(values.content[item].title.en, ")") : '')
    }, react_1.default.createElement(MultilingualContainer_1.default, {
      value: values.content[item].description
    }, function (languageCode) {
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
  return react_1.default.createElement("h1", null, values.title.de, !!values.title.en && " (".concat(values.title.en, ")"));
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
    path: "featured_image"
  })), react_1.default.createElement(components_1.BaseControl, {
    id: "teaser_image",
    help: "Wird f\u00FCr die Kacheln auf der Auswahlseite verwendet.",
    label: (0, i18n_1._x)('Teaser Image', 'backoffice: degree program edit form', 'fau-degree-program')
  }, react_1.default.createElement(ImageField_1.default, {
    path: "teaser_image"
  })), react_1.default.createElement(components_1.BaseControl, {
    id: "title",
    label: (0, i18n_1._x)('Title', 'backoffice: degree program edit form', 'fau-degree-program'),
    help: "Studiengangsbezeichnung, ohne Abschluss."
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.title
  }, function (languageCode) {
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
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.subtitle
  }, function (languageCode) {
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
    value: values.standard_duration || undefined,
    label: (0, i18n_1._x)('Standard duration of study', 'backoffice: degree program edit form', 'fau-degree-program'),
    min: 1
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
  }, function (_a) {
    var updatedValue = _a.updatedValue;
    return react_1.default.createElement(components_1.TextareaControl, {
      label: (0, i18n_1._x)('Meta description', 'backoffice: degree program edit form', 'fau-degree-program'),
      help: "Text f\u00FCr die Anzeige bei Suchmaschinen.",
      value: values.meta_description.de,
      onChange: function (text) {
        handleChange('meta_description.de', updatedValue(text));
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
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var serverData_1 = tslib_1.__importDefault(__webpack_require__(/*! util/serverData */ "./resources/ts/util/serverData.ts"));
var tabs = Object.keys((0, serverData_1.default)().languages).map(function (languageCode) {
  var languageName = (0, serverData_1.default)().languages[languageCode];
  return {
    name: languageCode,
    title: languageName
  };
});
var MultilingualContainer = function (_a) {
  var children = _a.children,
    value = _a.value;
  return react_1.default.createElement(components_1.TabPanel, {
    tabs: tabs.map(function (tab) {
      var isEmpty = tab.name !== 'de' && !value[tab.name];
      return tslib_1.__assign(tslib_1.__assign({}, tab), {
        title: isEmpty ? react_1.default.createElement(react_1.default.Fragment, null, tab.title, react_1.default.createElement("small", null, "\u00A0 (", (0, i18n_1._x)('no content', 'backoffice: Multilingual container', 'fau-degree-program'), ")")) : tab.title,
        className: isEmpty ? 'is-empty' : ''
      });
    })
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
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.url
  }, function (languageCode) {
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
  }, react_1.default.createElement(MultilingualContainer_1.default, {
    value: values.degree_program_fees
  }, function (languageCode) {
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
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
__webpack_require__(/*! ./styles.scss */ "./resources/ts/components/EntitySelector/styles.scss");
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
    if (maxLength && values.length >= maxLength) {
      return [];
    }
    return searchedEntities.map(entityToToken);
  }, [searchedEntities, values]);
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
    setSearch('');
  };
  var isTokenValid = function (token) {
    var availableEntities = tslib_1.__spreadArray(tslib_1.__spreadArray([], entities, true), searchedEntities, true);
    return (0, lodash_1.find)(availableEntities, function (entity) {
      return entityToToken(entity) === token;
    });
  };
  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(components_1.FormTokenField, {
    label: label,
    messages: messages,
    maxLength: maxLength,
    value: values,
    suggestions: suggestions,
    onChange: onChangeTokens,
    onInputChange: debouncedSearch,
    maxSuggestions: maxSuggestions,
    __experimentalShowHowTo: false,
    __experimentalValidateInput: isTokenValid,
    __experimentalExpandOnFocus: true
  }), maxLength && values.length >= maxLength && react_1.default.createElement("p", {
    className: "entity-selector--max-items-notice"
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
var styled_components_1 = tslib_1.__importStar(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var blob_1 = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
var block_editor_1 = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
var components_1 = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
var i18n_1 = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
var DegreeProgramEditFormProvider_1 = __webpack_require__(/*! ../../contexts/DegreeProgramEditFormProvider */ "./resources/ts/contexts/DegreeProgramEditFormProvider.tsx");
var useMedia_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMedia */ "./resources/ts/components/ImageField/useMedia.ts"));
var THUMBNAIL_SIZE = 150;
var StyledWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    .components-placeholder__fieldset {\n        ", "\n        };\n    }\n"], ["\n    .components-placeholder__fieldset {\n        ", "\n        };\n    }\n"])), function (_a) {
  var hasImage = _a.hasImage;
  return hasImage ? (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n                      .components-form-file-upload,\n                      .block-editor-media-placeholder__cancel-button,\n                      .components-button.is-tertiary {\n                          display: none;\n                      }\n                  "], ["\n                      .components-form-file-upload,\n                      .block-editor-media-placeholder__cancel-button,\n                      .components-button.is-tertiary {\n                          display: none;\n                      }\n                  "]))) : '';
});
function ImageField(_a) {
  var path = _a.path,
    _b = _a.title,
    title = _b === void 0 ? '' : _b;
  var _c = (0, react_1.useState)(false),
    isLoading = _c[0],
    setIsLoading = _c[1];
  var _d = (0, DegreeProgramEditFormProvider_1.useEditDegreeProgram)(),
    values = _d.values,
    handleChange = _d.handleChange;
  var selectedMedia = (0, useMedia_1.default)(values[path].id);
  var Preview = function () {
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
  var handleOnCancel = function () {
    handleChange(path, {
      id: 0,
      url: ''
    });
  };
  var handleOnSelect = function (_a) {
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
  };
  var hasMedia = function () {
    return !isLoading && !!(selectedMedia === null || selectedMedia === void 0 ? void 0 : selectedMedia.id);
  };
  return react_1.default.createElement(block_editor_1.MediaUploadCheck, null, react_1.default.createElement(StyledWrapper, {
    hasImage: hasMedia()
  }, react_1.default.createElement(block_editor_1.MediaPlaceholder, {
    value: [values[path].id],
    onSelect: handleOnSelect,
    onCancel: hasMedia() ? handleOnCancel : undefined,
    allowedTypes: ['image'],
    multiple: false,
    labels: {
      title: title
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
var templateObject_1, templateObject_2;

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
  var updatedValue = function (text) {
    return text.length <= maxChars ? text : text.substring(0, maxChars);
  };
  return react_1.default.createElement(react_1.default.Fragment, null, children({
    updatedValue: updatedValue,
    maxChars: maxChars
  }), react_1.default.createElement(components_1.Flex, {
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
    }), react_1.default.createElement(components_1.VisuallyHidden, null, (0, i18n_1._x)('Remove', 'backoffice: TextControlCollection', 'fau-degree-program'))));
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
    id: (0, idHelpers_1.propertyId)('term', term.id, 'name')
  } : tslib_1.__assign({}, EMPTY_MULTILINGUAL_STRING);
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
      id: (0, idHelpers_1.propertyId)('term_meta', term.id, 'abbreviation'),
      de: (_a = term.meta.abbreviation) !== null && _a !== void 0 ? _a : '',
      en: (_b = term.meta.abbreviation_en) !== null && _b !== void 0 ? _b : ''
    },
    name: {
      id: (0, idHelpers_1.propertyId)('term', term.id, 'name'),
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

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


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

/***/ "./resources/ts/components/ContentField/styles.scss":
/*!**********************************************************!*\
  !*** ./resources/ts/components/ContentField/styles.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/ts/components/EntitySelector/styles.scss":
/*!************************************************************!*\
  !*** ./resources/ts/components/EntitySelector/styles.scss ***!
  \************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMvZGVncmVlLXByb2dyYW0tZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDUnZCO0FBQ0E7QUFDQSwwS0FBMEssTUFBTTtBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsT0FBTztBQUM1QiwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFlBQVk7QUFDWixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNwTGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLHFLQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixhQUFhO0FBQ3RHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUixLQUFLOztBQUVMO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsYUFBYSxLQUFLO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUFMLG1CQUFBQSxDQUFBQSxnREFBQUEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGlzL2Rpc3Qvc3R5bGlzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVncmVlLXByb2dyYW0tZm9ybS9FZGl0LnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2RlZ3JlZS1wcm9ncmFtLWZvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9kZXNjcmlwdGlvbi1kZXRhaWxzL0VkaXQudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tZGV0YWlscy9TYXZlLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2Rlc2NyaXB0aW9uLWRldGFpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9kZXNjcmlwdGlvbi1saXN0L0VkaXQudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tbGlzdC9TYXZlLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2Rlc2NyaXB0aW9uLWxpc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9kZXNjcmlwdGlvbi10ZXJtL0VkaXQudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvZGVzY3JpcHRpb24tdGVybS9TYXZlLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2Rlc2NyaXB0aW9uLXRlcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9maWx0ZXJzL2FkZEhlYWRpbmdCbG9ja1ZhcmlhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9maWx0ZXJzL2FkZFNob3J0Y29kZUJsb2NrVmFyaWF0aW9ucy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2ZpbHRlcnMvZGVmYXVsdEltYWdlU2l6ZS50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2ZpbHRlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2Jsb2Nrcy9maWx0ZXJzL3Jlc3RyaWN0QWxsb3dlZFRleHRGb3JtYXRzLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9ibG9ja3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzcy9DaXJjdWxhclByb2dyZXNzLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0NvbnRlbnRGaWVsZC9Db250ZW50RmllbGQudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0NvbnRlbnRGaWVsZC9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvQ29udGVudEZpZWxkL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0NvbnRlbnRGaWVsZC91c2VCbG9ja0VkaXRvclNldHRpbmdzLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMvRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucy50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucy9SZWxhdGVkRGVncmVlUHJvZ3JhbXMudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMvaG9jL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMvaG9jL3dpdGhEZWdyZWVQcm9ncmFtUG9zdHMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucy9ob2Mvd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVBvc3RzLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtL0FkbWlzc2lvblJlcXVpcmVtZW50cy50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtL0NvbnRlbnQudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9EZWdyZWVQcm9ncmFtRWRpdEZvcm0udHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9Gb3JtSGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtL0dlbmVyYWwudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9NdWx0aWxpbmd1YWxDb250YWluZXIudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybS9Pcmdhbml6YXRpb25hbExpbmtzLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvRW50aXR5U2VsZWN0b3IvRW50aXR5U2VsZWN0b3IudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0VudGl0eVNlbGVjdG9yL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0ltYWdlRmllbGQvSW1hZ2VGaWVsZC50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvSW1hZ2VGaWVsZC9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9JbWFnZUZpZWxkL3VzZU1lZGlhLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0xpbWl0ZWRJbnB1dENvbnRyb2wvTGltaXRlZElucHV0Q29udHJvbC50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvTGltaXRlZElucHV0Q29udHJvbC9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UYWJzL1RhYnMudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1RhYnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGVybVNlbGVjdG9yL011bHRpVGVybVNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvVGVybVNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvaG9jL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1Rlcm1TZWxlY3Rvci9ob2Mvd2l0aERlZ3JlZVByb2dyYW1UZXJtcy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvaG9jL3dpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IvaG9jL3dpdGhUZXJtU2VsZWN0b3JQcm9wcy50c3giLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2NvbXBvbmVudHMvVGVybVNlbGVjdG9yL2luZGV4LnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1RleHRDb250cm9sQ29sbGVjdGlvbi9UZXh0Q29udHJvbENvbGxlY3Rpb24udHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL1RleHRDb250cm9sQ29sbGVjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXIudHN4Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9kZWZzLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9kZWZzL2RlZ3JlZS1wcm9ncmFtLWRhdGEudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2hvb2tzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvaG9va3MvdXNlQ29uZGl0aW9uYWxGaWVsZHMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL2hvb2tzL3VzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvdXRpbC9pZEhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vcmVzb3VyY2VzL3RzL3V0aWwvc2VydmVyRGF0YS50cyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvdXRpbC90cmFuc2Zvcm1zLnRzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9yZXNvdXJjZXMvdHMvYmxvY2tzL2RlZ3JlZS1wcm9ncmFtLWZvcm0vYWRtaW4uc2Nzcz8zY2UxIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0NvbnRlbnRGaWVsZC9zdHlsZXMuc2Nzcz81OGY0Iiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9jb21wb25lbnRzL0VudGl0eVNlbGVjdG9yL3N0eWxlcy5zY3NzP2I4NjkiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9lbW90aW9uLWlzLXByb3AtdmFsaWQuZXNtLmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBcImxvZGFzaFwiIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2JcIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb3JlRGF0YVwiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRvbVJlYWR5XCJdIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVkaXRvclwiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcIm1lZGlhVXRpbHNcIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicmljaFRleHRcIl0iLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGlucHN5ZGUvZmF1LWRlZ3JlZS1wcm9ncmFtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AaW5wc3lkZS9mYXUtZGVncmVlLXByb2dyYW0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0BpbnBzeWRlL2ZhdS1kZWdyZWUtcHJvZ3JhbS8uL3Jlc291cmNlcy90cy9kZWdyZWUtcHJvZ3JhbS1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCBEZWdyZWVQcm9ncmFtRWRpdEZvcm0gZnJvbSAnY29tcG9uZW50cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm0nO1xuXG5pbXBvcnQgJy4vYWRtaW4uc2Nzcyc7XG5cbmNvbnN0IEVkaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgey4uLmJsb2NrUHJvcHN9PlxuICAgICAgICAgICAgPERlZ3JlZVByb2dyYW1FZGl0Rm9ybSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vRWRpdCc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhLm5hbWUsIHtcbiAgICAuLi5tZXRhZGF0YSxcbiAgICBlZGl0OiBFZGl0LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSaWNoVGV4dCwgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgQmxvY2sgfSBmcm9tICcuLi8uLi9kZWZzL2NvbW1vbic7XG5cbmNvbnN0IEVkaXQgPSAoeyBhdHRyaWJ1dGVzOiB7IGNvbnRlbnQgfSwgc2V0QXR0cmlidXRlcyB9OiBCbG9jazx7IGNvbnRlbnQ6IHN0cmluZyB9PikgPT4ge1xuICAgIGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmljaFRleHRcbiAgICAgICAgICAgIHsuLi5ibG9ja1Byb3BzfVxuICAgICAgICAgICAgdGFnTmFtZT1cImRkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dENvbnRlbnQpID0+IHNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBuZXh0Q29udGVudCB9KX1cbiAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e19fKCdEZXNjcmlwdGlvbiBkZXRhaWxzIOKApicsICdmYXUtZGVncmVlLXByb2dyYW0nKX1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFJpY2hUZXh0LCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJy4uLy4uL2RlZnMvY29tbW9uJztcblxuY29uc3QgU2F2ZSA9ICh7IGF0dHJpYnV0ZXM6IHsgY29udGVudCB9IH06IEJsb2NrPHsgY29udGVudDogc3RyaW5nIH0+KSA9PiB7XG4gICAgY29uc3Qgc2F2ZUJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzLnNhdmUoKTtcbiAgICByZXR1cm4gPFJpY2hUZXh0LkNvbnRlbnQgey4uLnNhdmVCbG9ja1Byb3BzfSB0YWdOYW1lPVwiZGRcIiB2YWx1ZT17Y29udGVudH0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9FZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vU2F2ZSc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhLm5hbWUsIHtcbiAgICAuLi5tZXRhZGF0YSxcbiAgICBlZGl0OiBFZGl0LFxuICAgIHNhdmU6IFNhdmUsXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IElubmVyQmxvY2tzLCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5jb25zdCBBTExPV0VEX0JMT0NLUyA9IFsnZmF1L2Rlc2NyaXB0aW9uLXRlcm0nLCAnZmF1L2Rlc2NyaXB0aW9uLWRldGFpbHMnXTtcbmNvbnN0IFRFTVBMQVRFID0gW1snZmF1L2Rlc2NyaXB0aW9uLXRlcm0nXSwgWydmYXUvZGVzY3JpcHRpb24tZGV0YWlscyddXTtcblxuY29uc3QgRWRpdCA9ICgpID0+IHtcbiAgICBjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRsIHsuLi5ibG9ja1Byb3BzfT5cbiAgICAgICAgICAgIDxJbm5lckJsb2Nrc1xuICAgICAgICAgICAgICAgIGFsbG93ZWRCbG9ja3M9e0FMTE9XRURfQkxPQ0tTfVxuICAgICAgICAgICAgICAgIHRlbXBsYXRlPXtURU1QTEFURX1cbiAgICAgICAgICAgICAgICByZW5kZXJBcHBlbmRlcj17SW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbm5lckJsb2NrcywgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuY29uc3QgU2F2ZSA9ICgpID0+IHtcbiAgICBjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcy5zYXZlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGwgey4uLmJsb2NrUHJvcHN9PlxuICAgICAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cbiAgICAgICAgPC9kbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2F2ZTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vRWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL1NhdmUnO1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YS5uYW1lLCB7XG4gICAgLi4ubWV0YWRhdGEsXG4gICAgZWRpdDogRWRpdCxcbiAgICBzYXZlOiBTYXZlLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSaWNoVGV4dCwgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgQmxvY2sgfSBmcm9tICcuLi8uLi9kZWZzL2NvbW1vbic7XG5cbmNvbnN0IEVkaXQgPSAoeyBhdHRyaWJ1dGVzOiB7IGNvbnRlbnQgfSwgc2V0QXR0cmlidXRlcyB9OiBCbG9jazx7IGNvbnRlbnQ6IHN0cmluZyB9PikgPT4ge1xuICAgIGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmljaFRleHRcbiAgICAgICAgICAgIHsuLi5ibG9ja1Byb3BzfVxuICAgICAgICAgICAgdGFnTmFtZT1cImR0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dENvbnRlbnQpID0+IHNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBuZXh0Q29udGVudCB9KX1cbiAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e19fKCdEZXNjcmlwdGlvbiB0ZXJtIOKApicsICdmYXUtZGVncmVlLXByb2dyYW0nKX1cbiAgICAgICAgLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFJpY2hUZXh0LCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJy4uLy4uL2RlZnMvY29tbW9uJztcblxuY29uc3QgU2F2ZSA9ICh7IGF0dHJpYnV0ZXM6IHsgY29udGVudCB9IH06IEJsb2NrPHsgY29udGVudDogc3RyaW5nIH0+KSA9PiB7XG4gICAgY29uc3Qgc2F2ZUJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzLnNhdmUoKTtcbiAgICByZXR1cm4gPFJpY2hUZXh0LkNvbnRlbnQgey4uLnNhdmVCbG9ja1Byb3BzfSB0YWdOYW1lPVwiZHRcIiB2YWx1ZT17Y29udGVudH0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYXZlO1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9FZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vU2F2ZSc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhLm5hbWUsIHtcbiAgICAuLi5tZXRhZGF0YSxcbiAgICBlZGl0OiBFZGl0LFxuICAgIHNhdmU6IFNhdmUsXG59KTtcbiIsImltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5mdW5jdGlvbiBhZGRIZWFkaW5nQmxvY2tWYXJpYXRpb25zKHNldHRpbmdzLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09ICdjb3JlL2hlYWRpbmcnKSB7XG4gICAgICAgIHJldHVybiBzZXR0aW5ncztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICAgICAgdmFyaWF0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdIMycsXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSDMnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgbGV2ZWw6IDMgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0g0JyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0g0JyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IGxldmVsOiA0IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdINScsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdINScsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyBsZXZlbDogNSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9O1xufVxuXG5hZGRGaWx0ZXIoJ2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsICdmYXUvdmFyaWF0aW9ucy9oZWFkaW5nJywgYWRkSGVhZGluZ0Jsb2NrVmFyaWF0aW9ucyk7XG4iLCJpbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuZnVuY3Rpb24gYWRkU2hvcnRjb2RlQmxvY2tWYXJpYXRpb25zKHNldHRpbmdzLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09ICdjb3JlL3Nob3J0Y29kZScpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgICB2YXJpYXRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBbGVydCcsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyB0ZXh0OiAnW2FsZXJ0XScgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29udGFjdCcsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogeyB0ZXh0OiAnW2NvbnRhY3RdJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnVmlkZW8nLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmlkZW8nLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdGV4dDogJ1tmYXUtdmlkZW9dJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9O1xufVxuXG5hZGRGaWx0ZXIoJ2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsICdmYXUvdmFyaWF0aW9ucy9zaG9ydGNvZGUnLCBhZGRTaG9ydGNvZGVCbG9ja1ZhcmlhdGlvbnMpO1xuIiwiaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmNvbnN0IERFRkFVTFRfU0laRSA9ICd0aHVtYm5haWwnO1xuXG5hZGRGaWx0ZXIoXG4gICAgJ2VkaXRvci5Qb3N0RmVhdHVyZWRJbWFnZS5pbWFnZVNpemUnLFxuICAgICdmYXUvZGVncmVlLXByb2dyYW0taW1hZ2Utc2l6ZScsXG4gICAgKCkgPT4gREVGQVVMVF9TSVpFLFxuKTtcbiIsImltcG9ydCAnLi9kZWZhdWx0SW1hZ2VTaXplJztcbmltcG9ydCAnLi9hZGRIZWFkaW5nQmxvY2tWYXJpYXRpb25zJztcbmltcG9ydCAnLi9hZGRTaG9ydGNvZGVCbG9ja1ZhcmlhdGlvbnMnO1xuaW1wb3J0ICcuL3Jlc3RyaWN0QWxsb3dlZFRleHRGb3JtYXRzJztcbiIsImltcG9ydCB7IGRpc3BhdGNoLCBzZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IGRvbVJlYWR5IGZyb20gJ0B3b3JkcHJlc3MvZG9tLXJlYWR5JztcbmltcG9ydCB7IHN0b3JlIGFzIHJpY2hUZXh0U3RvcmUgfSBmcm9tICdAd29yZHByZXNzL3JpY2gtdGV4dCc7XG5cbmludGVyZmFjZSBGb3JtYXRUeXBlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuY29uc3QgQUxMT1dFRF9GT1JNQVRTID0gWydjb3JlL2JvbGQnLCAnY29yZS9saW5rJ107XG5cbmRvbVJlYWR5KCgpID0+IHtcbiAgICBjb25zdCByZWdpc3RlcmVkRm9ybWF0cyA9IHNlbGVjdChyaWNoVGV4dFN0b3JlKS5nZXRGb3JtYXRUeXBlcygpIGFzIEFycmF5PEZvcm1hdFR5cGU+O1xuICAgIGNvbnN0IGZvcm1hdE5hbWVzVG9EaXNhYmxlID0gPEFycmF5PHN0cmluZz4+W107XG4gICAgcmVnaXN0ZXJlZEZvcm1hdHMuZm9yRWFjaCgoZm9ybWF0VHlwZSkgPT4ge1xuICAgICAgICBpZiAoQUxMT1dFRF9GT1JNQVRTLmluY2x1ZGVzKGZvcm1hdFR5cGUubmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdE5hbWVzVG9EaXNhYmxlLnB1c2goZm9ybWF0VHlwZS5uYW1lKTtcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKHJpY2hUZXh0U3RvcmUpLnJlbW92ZUZvcm1hdFR5cGVzKGZvcm1hdE5hbWVzVG9EaXNhYmxlKTtcbn0pO1xuIiwiaW1wb3J0ICcuL2RlZ3JlZS1wcm9ncmFtLWZvcm0nO1xuaW1wb3J0ICcuL2Rlc2NyaXB0aW9uLWRldGFpbHMnO1xuaW1wb3J0ICcuL2Rlc2NyaXB0aW9uLWxpc3QnO1xuaW1wb3J0ICcuL2Rlc2NyaXB0aW9uLXRlcm0nO1xuaW1wb3J0ICcuL2ZpbHRlcnMnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vKipcbiAqIE9yaWdpbmFsIGNvbXBvbmVudDpcbiAqIEBsaW5rIGh0dHBzOi8vY29kZXBlbi5pby9iYnJhZHkvcGVuL296TWpLRVxuICovXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcGVyY2VudGFnZTogbnVtYmVyO1xuICAgIHNxdWFyZVNpemU/OiBudW1iZXI7XG4gICAgc3Ryb2tlV2lkdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IERFRkFVTFRfU1FVQVJFX1NJWkUgPSAxMDA7XG5jb25zdCBERUZBVUxUX1NUUk9LRV9XSURUSCA9IDI7XG5cbmNvbnN0IFN0eWxlZFN2Z0NpcmNsZSA9IHN0eWxlZC5zdmdgXG4gICAgc3Ryb2tlOiB2YXIoLS13cC1hZG1pbi10aGVtZS1jb2xvciwgIzAwN2NiYSk7XG5gO1xuXG5jb25zdCBDaXJjdWxhclByb2dyZXNzQmFyID0gKHtcbiAgICBwZXJjZW50YWdlLFxuICAgIHNxdWFyZVNpemUgPSBERUZBVUxUX1NRVUFSRV9TSVpFLFxuICAgIHN0cm9rZVdpZHRoID0gREVGQVVMVF9TVFJPS0VfV0lEVEgsXG59OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IChzcXVhcmVTaXplIC0gc3Ryb2tlV2lkdGgpIC8gMjtcbiAgICBjb25zdCB2aWV3Qm94ID0gYDAgMCAke3NxdWFyZVNpemV9ICR7c3F1YXJlU2l6ZX1gO1xuICAgIGNvbnN0IGRhc2hBcnJheSA9IHJhZGl1cyAqIE1hdGguUEkgKiAyO1xuICAgIGNvbnN0IGRhc2hPZmZzZXQgPSBkYXNoQXJyYXkgLSAoZGFzaEFycmF5ICogcGVyY2VudGFnZSkgLyAxMDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkU3ZnQ2lyY2xlIHdpZHRoPXtzcXVhcmVTaXplfSBoZWlnaHQ9e3NxdWFyZVNpemV9IHZpZXdCb3g9e3ZpZXdCb3h9PlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS1iYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICBjeD17c3F1YXJlU2l6ZSAvIDJ9XG4gICAgICAgICAgICAgICAgY3k9e3NxdWFyZVNpemUgLyAyfVxuICAgICAgICAgICAgICAgIHI9e3JhZGl1c31cbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17YCR7c3Ryb2tlV2lkdGh9cHhgfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJyZ2JhKDE2NywgMTUyLCAxODEsIDAuMylcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtcHJvZ3Jlc3NcIlxuICAgICAgICAgICAgICAgIGN4PXtzcXVhcmVTaXplIC8gMn1cbiAgICAgICAgICAgICAgICBjeT17c3F1YXJlU2l6ZSAvIDJ9XG4gICAgICAgICAgICAgICAgcj17cmFkaXVzfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17YCR7c3Ryb2tlV2lkdGh9cHhgfVxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHByb2dyZXNzIG1hcmtlciBhdCAxMiBPJ0Nsb2NrXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgcm90YXRlKC05MCAke3NxdWFyZVNpemUgLyAyfSAke3NxdWFyZVNpemUgLyAyfSlgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogZGFzaEFycmF5LFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBkYXNoT2Zmc2V0LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1N0eWxlZFN2Z0NpcmNsZT5cbiAgICApO1xufTtcblxuQ2lyY3VsYXJQcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3F1YXJlU2l6ZTogREVGQVVMVF9TUVVBUkVfU0laRSxcbiAgICBzdHJva2VXaWR0aDogREVGQVVMVF9TVFJPS0VfV0lEVEgsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaXJjdWxhclByb2dyZXNzQmFyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2lyY3VsYXJQcm9ncmVzcyc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gICAgQmxvY2tCcmVhZGNydW1iLFxuICAgIEJsb2NrRWRpdG9yS2V5Ym9hcmRTaG9ydGN1dHMsXG4gICAgQmxvY2tFZGl0b3JQcm92aWRlcixcbiAgICBCbG9ja0xpc3QsXG4gICAgQmxvY2tUb29scyxcbiAgICBEZWZhdWx0QmxvY2tBcHBlbmRlcixcbiAgICBPYnNlcnZlVHlwaW5nLFxuICAgIFdyaXRpbmdGbG93LFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBwYXJzZSwgc2VyaWFsaXplIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHsgUG9wb3ZlciwgU2xvdEZpbGxQcm92aWRlciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbmltcG9ydCB1c2VCbG9ja0VkaXRvclNldHRpbmdzIGZyb20gJy4vdXNlQmxvY2tFZGl0b3JTZXR0aW5ncyc7XG5cbmludGVyZmFjZSBDb250ZW50RmllbGRQcm9wcyB7XG4gICAgY29udGVudDogc3RyaW5nO1xuXG4gICAgb25DaGFuZ2UoY29udGVudDogc3RyaW5nKTogdm9pZDtcbn1cblxuY29uc3QgU3R5bGVkRWRpdG9yV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiAwIDAgMTJweCAhaW1wb3J0YW50O1xuXG4gICAgLmNvbnRlbnQtZmllbGQtYmxvY2tzLWxpc3Qge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzU3NTc1O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbmA7XG5cbi8qKlxuICogUHJvdmlkZXMgcmVzdHJpY3RlZCBCbG9jayBFZGl0b3IgVUkuXG4gKiBBbGxvd2VkIGJsb2NrcyBhbmQgZm9ybWF0dGluZyBvcHRpb25zIGFyZSBsaW1pdGVkLlxuICpcbiAqIEBwYXJhbSBjb250ZW50IFNlcmlhbGl6ZWQgYmxvY2tzIHN0cmluZ1xuICogQHBhcmFtIG9uQ2hhbmdlIENhbGxiYWNrIHRvIHVwZGF0ZSBjb250ZW50XG4gKi9cbmNvbnN0IENvbnRlbnRGaWVsZCA9ICh7IGNvbnRlbnQsIG9uQ2hhbmdlIH06IENvbnRlbnRGaWVsZFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRCbG9ja3MsIHNldEN1cnJlbnRCbG9ja3NdID0gdXNlU3RhdGUocGFyc2UoY29udGVudCkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBvbkNoYW5nZWAgY2FsbGJhY2sgaXMgZmlyZWQgb25seSB3aGVuIGNoYW5nZXMgYXJlIGNvbnNpZGVyZWQgZmluYWwsXG4gICAgICogaS5lLiwgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyB0byBhbm90aGVyIGJsb2NrLlxuICAgICAqIFRvIHByZXZlbnQgaW5jb21wbGV0ZSBwZXJzaXN0aW5nLCB3ZSBoYXZlIHRvIHNlcmlhbGl6ZSB0aGUgYmxvY2tzIGBvbklucHV0YC5cbiAgICAgKiBCdXQgc2luY2UgdGhlIGNhbGxiYWNrIHJ1bnMgb24gZXZlcnkgYXR0cmlidXRlIGNoYW5nZSxcbiAgICAgKiB0aGUgZGVib3VuY2VkIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5cbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVWYWx1ZSA9IHVzZUNhbGxiYWNrKChibG9ja3MpID0+IHtcbiAgICAgICAgb25DaGFuZ2Uoc2VyaWFsaXplKGJsb2NrcykpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB1cGRhdGVWYWx1ZURlYm91bmNlZCA9IHVzZURlYm91bmNlKHVwZGF0ZVZhbHVlLCA1MDApO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB1c2VCbG9ja0VkaXRvclNldHRpbmdzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmxvY2tFZGl0b3JQcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRCbG9ja3N9XG4gICAgICAgICAgICBvbklucHV0PXsoYmxvY2tzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEJsb2NrcyhibG9ja3MpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlRGVib3VuY2VkKGJsb2Nrcyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhibG9ja3MpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50QmxvY2tzKGJsb2Nrcyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoYmxvY2tzKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17c2V0dGluZ3N9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxTbG90RmlsbFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRFZGl0b3JXcmFwcGVyIGNsYXNzTmFtZT1cImVkaXRvci1zdHlsZXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8QmxvY2tFZGl0b3JLZXlib2FyZFNob3J0Y3V0cy5SZWdpc3RlciAvPlxuICAgICAgICAgICAgICAgICAgICA8QmxvY2tUb29scz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXcml0aW5nRmxvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T2JzZXJ2ZVR5cGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXBwZW5kZXI9e0RlZmF1bHRCbG9ja0FwcGVuZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1maWVsZC1ibG9ja3MtbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PYnNlcnZlVHlwaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Xcml0aW5nRmxvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9CbG9ja1Rvb2xzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCbG9ja0JyZWFkY3J1bWIgLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEVkaXRvcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXIuU2xvdCAvPlxuICAgICAgICAgICAgPC9TbG90RmlsbFByb3ZpZGVyPlxuICAgICAgICA8L0Jsb2NrRWRpdG9yUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oXG4gICAgQ29udGVudEZpZWxkLFxuICAgIChwcmV2UHJvcHMsIG5leHRQcm9wcykgPT4gcHJldlByb3BzLmNvbnRlbnQgPT09IG5leHRQcm9wcy5jb250ZW50LFxuKTtcbiIsImV4cG9ydCBjb25zdCBBTExPV0VEX0JMT0NLX1RZUEVTID0gW1xuICAgICdjb3JlL3BhcmFncmFwaCcsXG4gICAgJ2NvcmUvaW1hZ2UnLFxuICAgICdjb3JlL2xpc3QnLFxuICAgICdjb3JlL2xpc3QtaXRlbScsXG4gICAgJ2NvcmUvaGVhZGluZycsXG4gICAgJ2NvcmUvc2hvcnRjb2RlJyxcbiAgICAnZmF1L2Rlc2NyaXB0aW9uLWxpc3QnLFxuICAgICdmYXUvZGVzY3JpcHRpb24tdGVybScsXG4gICAgJ2ZhdS9kZXNjcmlwdGlvbi1kZXRhaWxzJyxcbl07XG5cbmV4cG9ydCBjb25zdCBBTExPV0VEX01JTUVfVFlQRVMgPSB7XG4gICAgJ2pwZ3xqcGVnfGpwZSc6ICdpbWFnZS9qcGVnJyxcbiAgICBnaWY6ICdpbWFnZS9naWYnLFxuICAgIHBuZzogJ2ltYWdlL3BuZycsXG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGVudEZpZWxkJztcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gICAgX19leHBlcmltZW50YWxGZXRjaExpbmtTdWdnZXN0aW9ucyBhcyBmZXRjaExpbmtTdWdnZXN0aW9ucyxcbiAgICBfX2V4cGVyaW1lbnRhbEZldGNoVXJsRGF0YSBhcyBmZXRjaFVybERhdGEsXG4gICAgc3RvcmUgYXMgY29yZVN0b3JlLFxufSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YSc7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXBsb2FkTWVkaWEgfSBmcm9tICdAd29yZHByZXNzL21lZGlhLXV0aWxzJztcblxuaW1wb3J0IHsgQUxMT1dFRF9CTE9DS19UWVBFUywgQUxMT1dFRF9NSU1FX1RZUEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgICBhbGxvd2VkQmxvY2tUeXBlczogQUxMT1dFRF9CTE9DS19UWVBFUyxcbn07XG5cbmNvbnN0IHVzZUJsb2NrRWRpdG9yU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFzVXBsb2FkUGVybWlzc2lvbnMgPSB1c2VTZWxlY3QoXG4gICAgICAgIChzZWxlY3QpID0+IHNlbGVjdChjb3JlU3RvcmUpLmNhblVzZXIoJ2NyZWF0ZScsICdtZWRpYScpID8/IGZhbHNlLFxuICAgICAgICBbXSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgbWVkaWFVcGxvYWRCbG9ja0VkaXRvcjtcbiAgICAgICAgaWYgKGhhc1VwbG9hZFBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgICBtZWRpYVVwbG9hZEJsb2NrRWRpdG9yID0gKHsgb25FcnJvciwgLi4uYXJndW1lbnRzT2JqZWN0IH0pID0+IHtcbiAgICAgICAgICAgICAgICB1cGxvYWRNZWRpYSh7XG4gICAgICAgICAgICAgICAgICAgIHdwQWxsb3dlZE1pbWVUeXBlczogQUxMT1dFRF9NSU1FX1RZUEVTLFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAoeyBtZXNzYWdlIH0pID0+IG9uRXJyb3IobWVzc2FnZSksXG4gICAgICAgICAgICAgICAgICAgIC4uLmFyZ3VtZW50c09iamVjdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uU0VUVElOR1MsXG4gICAgICAgICAgICBtZWRpYVVwbG9hZDogbWVkaWFVcGxvYWRCbG9ja0VkaXRvcixcbiAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsRmV0Y2hMaW5rU3VnZ2VzdGlvbnM6IChzZWFyY2gsIHNlYXJjaE9wdGlvbnMpID0+XG4gICAgICAgICAgICAgICAgZmV0Y2hMaW5rU3VnZ2VzdGlvbnMoc2VhcmNoLCBzZWFyY2hPcHRpb25zKSxcbiAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsRmV0Y2hSaWNoVXJsRGF0YTogZmV0Y2hVcmxEYXRhLFxuICAgICAgICB9O1xuICAgIH0sIFtoYXNVcGxvYWRQZXJtaXNzaW9uc10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQmxvY2tFZGl0b3JTZXR0aW5ncztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZsZXgsIEZsZXhCbG9jaywgU3Bpbm5lciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IHVzZUNvbWJpbmF0aW9uT2ZEZWdyZWVQcm9ncmFtRW5hYmxlZCB9IGZyb20gJ2hvb2tzL3VzZUNvbmRpdGlvbmFsRmllbGRzJztcblxuaW1wb3J0IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eSBmcm9tICcuLi8uLi9ob29rcy91c2VEZWdyZWVQcm9ncmFtUHJvcGVydHknO1xuaW1wb3J0IFJlbGF0ZWREZWdyZWVQcm9ncmFtcyBmcm9tICcuL1JlbGF0ZWREZWdyZWVQcm9ncmFtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlZ3JlZVByb2dyYW1Db21iaW5hdGlvbnMoKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgICBjb25zdCBlbmFibGVkID0gdXNlQ29tYmluYXRpb25PZkRlZ3JlZVByb2dyYW1FbmFibGVkKCk7XG4gICAgY29uc3QgW2NvbWJpbmF0aW9ucywgc2V0Q29tYmluYXRpb25zXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxBcnJheTxudW1iZXI+PignY29tYmluYXRpb25zJyk7XG4gICAgY29uc3QgW2xpbWl0ZWRDb21iaW5hdGlvbnMsIHNldExpbWl0ZWRDb21iaW5hdGlvbnNdID1cbiAgICAgICAgdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PEFycmF5PG51bWJlcj4+KCdsaW1pdGVkX2NvbWJpbmF0aW9ucycpO1xuXG4gICAgaWYgKCFlbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb21iaW5hdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBsaW1pdGVkQ29tYmluYXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxGbGV4QmxvY2s+XG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4QmxvY2s+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxSZWxhdGVkRGVncmVlUHJvZ3JhbXNcbiAgICAgICAgICAgICAgICByZWxhdGVkRGVncmVlUHJvZ3JhbUlkcz17Y29tYmluYXRpb25zfVxuICAgICAgICAgICAgICAgIHNldFJlbGF0ZWREZWdyZWVQcm9ncmFtcz17c2V0Q29tYmluYXRpb25zfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfeCgnQ29tYmluYXRpb25zJywgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJywgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScpfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXt7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkOiBfeCgnQ29tYmluYXRpb24gYWRkZWQnLCAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyksXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbWJpbmF0aW9uIHJlbW92ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbW92ZSBjb21iaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsSW52YWxpZDogX3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBjb21iaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVsYXRlZERlZ3JlZVByb2dyYW1zXG4gICAgICAgICAgICAgICAgcmVsYXRlZERlZ3JlZVByb2dyYW1JZHM9e2xpbWl0ZWRDb21iaW5hdGlvbnN9XG4gICAgICAgICAgICAgICAgc2V0UmVsYXRlZERlZ3JlZVByb2dyYW1zPXtzZXRMaW1pdGVkQ29tYmluYXRpb25zfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtfeCgnTGltaXRlZCBDb21iaW5hdGlvbnMnLCAnYmFja29mZmljZTogZmllbGQgbGFiZWwnLCAnZmF1LWRlZ3JlZS1wcm9ncmFtJyl9XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgYWRkZWQ6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xpbWl0ZWQgY29tYmluYXRpb24gYWRkZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdMaW1pdGVkIGNvbWJpbmF0aW9uIHJlbW92ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IF94KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JlbW92ZSBsaW1pdGVkIGNvbWJpbmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBmaWVsZCBsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX19leHBlcmltZW50YWxJbnZhbGlkOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbnZhbGlkIGxpbWl0ZWQgY29tYmluYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGZpZWxkIGxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltbXV0YWJsZSB9IGZyb20gJ2ltbWVyJztcblxuaW1wb3J0IHsgY29tcG9zZSwgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcblxuaW1wb3J0IHsgRGVncmVlUHJvZ3JhbVBvc3QgfSBmcm9tICcuLi8uLi9kZWZzL2RlZ3JlZS1wcm9ncmFtLWRhdGEnO1xuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm9wcyB9IGZyb20gJy4uLy4uL2RlZnMvZW50aXR5LXNlbGVjdG9yJztcbmltcG9ydCBFbnRpdHlTZWxlY3RvciBmcm9tICcuLi9FbnRpdHlTZWxlY3Rvcic7XG5pbXBvcnQgeyB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzLCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMgfSBmcm9tICcuL2hvYyc7XG5cbmV4cG9ydCB0eXBlIFJlbGF0ZWREZWdyZWVQcm9ncmFtc1Byb3BzID0gUGljazxFbnRpdHlTZWxlY3RvclByb3BzLCAnbGFiZWwnIHwgJ21lc3NhZ2VzJz4gJiB7XG4gICAgcmVsYXRlZERlZ3JlZVByb2dyYW1JZHM6IEltbXV0YWJsZTxBcnJheTxudW1iZXI+PjtcbiAgICBzZXRSZWxhdGVkRGVncmVlUHJvZ3JhbXModmFsdWU6IEFycmF5PG51bWJlcj4pOiB2b2lkO1xufTtcblxuY29uc3Qgd2l0aFJlbGF0ZWREZWdyZWVQcm9ncmFtUHJvcHMgPSBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChcbiAgICAoV3JhcHBlZENvbXBvbmVudDogUmVhY3QuRkM8UGFydGlhbDxFbnRpdHlTZWxlY3RvclByb3BzPj4pID0+XG4gICAgICAgICh7IHNldFJlbGF0ZWREZWdyZWVQcm9ncmFtcywgLi4ub3RoZXJzIH06IFJlbGF0ZWREZWdyZWVQcm9ncmFtc1Byb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eVRvVG9rZW49eyhwb3N0OiBEZWdyZWVQcm9ncmFtUG9zdCkgPT4gcG9zdC5kZWdyZWVfcHJvZ3JhbS50aXRsZS5kZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwb3N0czogQXJyYXk8UG9zdD4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlbGF0ZWREZWdyZWVQcm9ncmFtcyhwb3N0cy5tYXAoKHBvc3QpID0+IHBvc3QuaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbWF4U3VnZ2VzdGlvbnM9ezIwfVxuICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICd3aXRoUmVsYXRlZERlZ3JlZVByb2dyYW1Qcm9wcycsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICAgIHdpdGhSZWxhdGVkRGVncmVlUHJvZ3JhbVByb3BzLFxuICAgIHdpdGhEZWdyZWVQcm9ncmFtUG9zdHMsXG4gICAgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVBvc3RzLFxuKShFbnRpdHlTZWxlY3RvcikgYXMgUmVhY3QuRkM8UmVsYXRlZERlZ3JlZVByb2dyYW1zUHJvcHM+O1xuIiwiaW1wb3J0IHdpdGhEZWdyZWVQcm9ncmFtUG9zdHMgZnJvbSAnLi93aXRoRGVncmVlUHJvZ3JhbVBvc3RzJztcbmltcG9ydCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMgZnJvbSAnLi93aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMnO1xuXG5leHBvcnQgeyB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzLCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHMgfTtcbiIsImltcG9ydCB7IFBvc3QsIHN0b3JlIGFzIGNvcmVTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgc2VydmVyRGF0YSBmcm9tICd1dGlsL3NlcnZlckRhdGEnO1xuXG5pbXBvcnQgeyBSZWxhdGVkRGVncmVlUHJvZ3JhbXNQcm9wcyB9IGZyb20gJy4uL2RlZnMnO1xuXG5jb25zdCB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzID0gd2l0aFNlbGVjdChcbiAgICAoc2VsZWN0LCBvd25Qcm9wczogUmVsYXRlZERlZ3JlZVByb2dyYW1zUHJvcHMpOiB7IGVudGl0aWVzOiBBcnJheTxQb3N0PCd2aWV3Jz4+IH0gPT4ge1xuICAgICAgICBjb25zdCB7IGdldEVudGl0eVJlY29yZHMgfSA9IHNlbGVjdChjb3JlU3RvcmUubmFtZSk7XG5cbiAgICAgICAgaWYgKG93blByb3BzLnJlbGF0ZWREZWdyZWVQcm9ncmFtSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbnRpdGllczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IC0xLFxuICAgICAgICAgICAgICAgIG9yZGVyYnk6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBfZmllbGRzOiAnaWQsZGVncmVlX3Byb2dyYW0nLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICd2aWV3JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiBvd25Qcm9wcy5yZWxhdGVkRGVncmVlUHJvZ3JhbUlkcy5qb2luKCcsJyksXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVudGl0aWVzOiBnZXRFbnRpdHlSZWNvcmRzKCdwb3N0VHlwZScsIHNlcnZlckRhdGEoKS5wb3N0VHlwZSwgcXVlcnkpID8/IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGVncmVlUHJvZ3JhbVBvc3RzO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBvc3QsIHN0b3JlIGFzIGNvcmVTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgc3RvcmUgYXMgZWRpdG9yU3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2VkaXRvcic7XG5cbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvcHMgfSBmcm9tICdkZWZzJztcblxuY29uc3Qgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVBvc3RzID0gd2l0aFNlbGVjdChcbiAgICAoXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgb3duUHJvcHM6IEVudGl0eVNlbGVjdG9yUHJvcHM8UG9zdDwndmlldyc+PixcbiAgICApOiBQYXJ0aWFsPEVudGl0eVNlbGVjdG9yUHJvcHM8UG9zdDwndmlldyc+Pj4gPT4ge1xuICAgICAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICAgICAgICBjb25zdCB7IGdldEN1cnJlbnRQb3N0IH0gPSBzZWxlY3QoZWRpdG9yU3RvcmUubmFtZSk7XG4gICAgICAgIGNvbnN0IHsgZ2V0RW50aXR5UmVjb3JkcyB9ID0gc2VsZWN0KGNvcmVTdG9yZS5uYW1lKTtcbiAgICAgICAgaWYgKHNlYXJjaC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoZWRFbnRpdGllczogW10sXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3N0ID0gZ2V0Q3VycmVudFBvc3QoKTtcblxuICAgICAgICBjb25zdCBwb3N0cyA9IGdldEVudGl0eVJlY29yZHMoJ3Bvc3RUeXBlJywgc2VydmVyRGF0YSgpLnBvc3RUeXBlLCB7XG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IG93blByb3BzLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAgICAgIG9yZGVyYnk6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgb3JkZXI6ICdhc2MnLFxuICAgICAgICAgICAgICAgIF9maWVsZHM6ICdpZCxkZWdyZWVfcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgY29udGV4dDogJ3ZpZXcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaCxcbiAgICAgICAgICAgIC4uLihjdXJyZW50UG9zdCA/IHsgZXhjbHVkZTogY3VycmVudFBvc3QuaWQgfSA6IHt9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlYXJjaGVkRW50aXRpZXM6IHBvc3RzID8/IFtdLFxuICAgICAgICAgICAgc2V0U2VhcmNoLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtUG9zdHM7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX19leHBlcmltZW50YWxIZWFkaW5nIGFzIEhlYWRpbmcsIEJhc2VDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IFRlcm1TZWxlY3RvciBmcm9tICdjb21wb25lbnRzL1Rlcm1TZWxlY3Rvcic7XG5pbXBvcnQgeyB1c2VFZGl0RGVncmVlUHJvZ3JhbSB9IGZyb20gJ2NvbnRleHRzL0RlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyJztcbmltcG9ydCB7XG4gICAgdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yQmFjaGVsb3JBbmRUZWFjaGluZ0RlZ3JlZXNFbmFibGUsXG4gICAgdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yTWFzdGVyc0RlZ3JlZSxcbiAgICB1c2VBZG1pc3Npb25SZXF1aXJlbWVudHNUZWFjaGluZ0RlZ3JlZUF0SGlnaGVyU2VtZXN0ZXJFbmFibGVkLFxuICAgIHVzZUFwcGxpY2F0aW9uRGVhZGxpbmVTdW1tZXJTZW1lc3RlckVuYWJsZWQsXG4gICAgdXNlTGFuZ3VhZ2VTa2lsbHNGb3JGYWN1bHR5T2ZIdW1hbml0aWVzT25seUVuYWJsZWQsXG59IGZyb20gJ2hvb2tzL3VzZUNvbmRpdGlvbmFsRmllbGRzJztcbmltcG9ydCB7IHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsgfSBmcm9tICd1dGlsL3RyYW5zZm9ybXMnO1xuXG5pbXBvcnQgQ29udGVudEZpZWxkIGZyb20gJy4uL0NvbnRlbnRGaWVsZCc7XG5pbXBvcnQgTXVsdGlsaW5ndWFsQ29udGFpbmVyIGZyb20gJy4vTXVsdGlsaW5ndWFsQ29udGFpbmVyJztcblxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTGluayB9IGZyb20gJ2RlZnMnO1xuXG5jb25zdCBTdHlsZWRIZWFkaW5nID0gc3R5bGVkKEhlYWRpbmcpYFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5gO1xuXG5jb25zdCBBZG1pc3Npb25SZXF1aXJlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZXMsIGhhbmRsZUNoYW5nZSB9ID0gdXNlRWRpdERlZ3JlZVByb2dyYW0oKTtcbiAgICBjb25zdCBiYWNoZWxvck9yVGVhY2hpbmdFbmFibGVkID0gdXNlQWRtaXNzaW9uUmVxdWlyZW1lbnRzRm9yQmFjaGVsb3JBbmRUZWFjaGluZ0RlZ3JlZXNFbmFibGUoKTtcbiAgICBjb25zdCB0ZWFjaGluZ0RlZ3JlZUhpZ2hlclNlbWVzdGVyRW5hYmxlZCA9XG4gICAgICAgIHVzZUFkbWlzc2lvblJlcXVpcmVtZW50c1RlYWNoaW5nRGVncmVlQXRIaWdoZXJTZW1lc3RlckVuYWJsZWQoKTtcbiAgICBjb25zdCBtYXN0ZXJzRW5hYmxlZCA9IHVzZUFkbWlzc2lvblJlcXVpcmVtZW50c0Zvck1hc3RlcnNEZWdyZWUoKTtcbiAgICBjb25zdCBodW1hbml0aWVzRmFjdWx0eUxhbmd1YWdlU2tpbGxzRW5hYmxlZCA9XG4gICAgICAgIHVzZUxhbmd1YWdlU2tpbGxzRm9yRmFjdWx0eU9mSHVtYW5pdGllc09ubHlFbmFibGVkKCk7XG4gICAgY29uc3QgYXBwbGljYXRpb25TdW1tZXJEZWFkbGluZUVuYWJsZWQgPSB1c2VBcHBsaWNhdGlvbkRlYWRsaW5lU3VtbWVyU2VtZXN0ZXJFbmFibGVkKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSGVhZGluZyBsZXZlbD17NH0+QmFjaGVsb3IvTGVocmFtdDwvU3R5bGVkSGVhZGluZz5cblxuICAgICAgICAgICAgICAgIHtiYWNoZWxvck9yVGVhY2hpbmdFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYWNoZWxvcl90ZWFjaGluZ19hZG1pc3Npb25fcmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRtaXNzaW9uIHJlcXVpcmVtZW50cyBmb3IgQmFjaGVsb3Incy90ZWFjaGluZyBkZWdyZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJiYWNoZWxvck9yVGVhY2hpbmdEZWdyZWVBZG1pc3Npb25SZXF1aXJlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmFkbWlzc2lvbl9yZXF1aXJlbWVudHMuYmFjaGVsb3Jfb3JfdGVhY2hpbmdfZGVncmVlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbExpbms+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRtaXNzaW9uX3JlcXVpcmVtZW50cy5iYWNoZWxvcl9vcl90ZWFjaGluZ19kZWdyZWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7dGVhY2hpbmdEZWdyZWVIaWdoZXJTZW1lc3RlckVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlYWNoaW5nX2hpZ2hlcl9zZW1lc3Rlcl9hZG1pc3Npb25fcmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBZG1pc3Npb24gcmVxdWlyZW1lbnRzIGZvciBlbnRlcmluZyBhIHRlYWNoaW5nIGRlZ3JlZSBhdCBhIGhpZ2hlciBzZW1lc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJ0ZWFjaGluZ0RlZ3JlZUhpZ2hlclNlbWVzdGVyQWRtaXNzaW9uUmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hZG1pc3Npb25fcmVxdWlyZW1lbnRzLnRlYWNoaW5nX2RlZ3JlZV9oaWdoZXJfc2VtZXN0ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhZG1pc3Npb25fcmVxdWlyZW1lbnRzLnRlYWNoaW5nX2RlZ3JlZV9oaWdoZXJfc2VtZXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSGVhZGluZyBsZXZlbD17NH0+TWFzdGVyPC9TdHlsZWRIZWFkaW5nPlxuXG4gICAgICAgICAgICAgICAge21hc3RlcnNFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXN0ZXJfYWRtaXNzaW9uX3JlcXVpcmVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFkbWlzc2lvbiByZXF1aXJlbWVudHMgZm9yIE1hc3RlcidzIGRlZ3JlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwibWFzdGVyRGVncmVlQWRtaXNzaW9uUmVxdWlyZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hZG1pc3Npb25fcmVxdWlyZW1lbnRzLm1hc3Rlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxMaW5rPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkbWlzc2lvbl9yZXF1aXJlbWVudHMubWFzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsTGluayh0ZXJtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1yZWxhdGVkIGFkbWlzc2lvbiByZXF1aXJlbWVudHMgZm9yIE1hc3RlcidzIGRlZ3JlZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cInZvcmF1c2dlZ2FuZ2VuZSBCYWNoZWxvcnN0dWRpZW5nw6RuZ2UsIFF1YWxpZmlrYXRpb25zd2VydGUsIGV0Yy5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE11bHRpbGluZ3VhbENvbnRhaW5lciB2YWx1ZT17dmFsdWVzLmNvbnRlbnRfcmVsYXRlZF9tYXN0ZXJfcmVxdWlyZW1lbnRzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsobGFuZ3VhZ2VDb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjb250ZW50X3JlbGF0ZWRfbWFzdGVyX3JlcXVpcmVtZW50cy4ke2xhbmd1YWdlQ29kZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dmFsdWVzLmNvbnRlbnRfcmVsYXRlZF9tYXN0ZXJfcmVxdWlyZW1lbnRzW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FwcGxpY2F0aW9uIGRlYWRsaW5lIHdpbnRlciBzZW1lc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oJ2FwcGxpY2F0aW9uX2RlYWRsaW5lX3dpbnRlcl9zZW1lc3RlcicsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZXMuYXBwbGljYXRpb25fZGVhZGxpbmVfd2ludGVyX3NlbWVzdGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgICB7YXBwbGljYXRpb25TdW1tZXJEZWFkbGluZUVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXBwbGljYXRpb24gZGVhZGxpbmUgc3VtbWVyIHNlbWVzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oJ2FwcGxpY2F0aW9uX2RlYWRsaW5lX3N1bW1lcl9zZW1lc3RlcicsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3ZhbHVlcy5hcHBsaWNhdGlvbl9kZWFkbGluZV9zdW1tZXJfc2VtZXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSGVhZGluZyBsZXZlbD17NH0+RsO8ciBCYWNoZWxvci9MZWhyYW10L01hc3RlcjwvU3R5bGVkSGVhZGluZz5cblxuICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnRGV0YWlscyBhbmQgbm90ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cImV2dGwuIHp1c8OkdHpsaWNoZSBJbmZvcyB6dSBCZXdlcmJ1bmcgdW5kIEVpbnNjaHJlaWJ1bmcuXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy5kZXRhaWxzX2FuZF9ub3Rlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGV0YWlsc19hbmRfbm90ZXMuJHtsYW5ndWFnZUNvZGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3ZhbHVlcy5kZXRhaWxzX2FuZF9ub3Rlc1tsYW5ndWFnZUNvZGVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L011bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuXG4gICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZSBza2lsbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cIlNwcmFjaGtlbm50bmlzc2UsIGRpZSBmw7xyIGRlbiBTdHVkaWVuZ2FuZyBlcmZvcmRlcmxpY2ggc2luZC5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE11bHRpbGluZ3VhbENvbnRhaW5lciB2YWx1ZT17dmFsdWVzLmxhbmd1YWdlX3NraWxsc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihgbGFuZ3VhZ2Vfc2tpbGxzLiR7bGFuZ3VhZ2VDb2RlfWAsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dmFsdWVzLmxhbmd1YWdlX3NraWxsc1tsYW5ndWFnZUNvZGVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L011bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuXG4gICAgICAgICAgICAgICAge2h1bWFuaXRpZXNGYWN1bHR5TGFuZ3VhZ2VTa2lsbHNFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlIHNraWxscyBmb3IgRmFjdWx0eSBvZiBIdW1hbml0aWVzLCBTb2NpYWwgU2NpZW5jZXMsIGFuZCBUaGVvbG9neSBvbmx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiU3ByYWNoa2VubnRuaXNzZSwgZGllIGF1Y2ggaW4gZGVuIGVyc3RlbiBTZW1lc3Rlcm4gbm9jaCBlcndvcmJlbiB3ZXJkZW4ga8O2bm5lbi5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KCdsYW5ndWFnZV9za2lsbHNfaHVtYW5pdGllc19mYWN1bHR5JywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dmFsdWVzLmxhbmd1YWdlX3NraWxsc19odW1hbml0aWVzX2ZhY3VsdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ2VybWFuX2xhbmd1YWdlX3NraWxsc19mb3JfaW50ZXJuYXRpb25hbF9zdHVkZW50c1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZSBjZXJ0aWZpY2F0ZXMvR2VybWFuIGxhbmd1YWdlIHNraWxscyBmb3IgaW50ZXJuYXRpb25hbCBhcHBsaWNhbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiZ2VybWFuTGFuZ3VhZ2VTa2lsbHNGb3JJbnRlcm5hdGlvbmFsU3R1ZGVudHNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmdlcm1hbl9sYW5ndWFnZV9za2lsbHNfZm9yX2ludGVybmF0aW9uYWxfc3R1ZGVudHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbExpbms+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZXJtYW5fbGFuZ3VhZ2Vfc2tpbGxzX2Zvcl9pbnRlcm5hdGlvbmFsX3N0dWRlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZG1pc3Npb25SZXF1aXJlbWVudHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCYXNlQ29udHJvbCwgUGFuZWwsIFBhbmVsQm9keSB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZUVkaXREZWdyZWVQcm9ncmFtIH0gZnJvbSAnY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXInO1xuXG5pbXBvcnQgQ29udGVudEZpZWxkIGZyb20gJy4uL0NvbnRlbnRGaWVsZCc7XG5pbXBvcnQgRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucyBmcm9tICcuLi9EZWdyZWVQcm9ncmFtQ29tYmluYXRpb25zJztcbmltcG9ydCBNdWx0aWxpbmd1YWxDb250YWluZXIgZnJvbSAnLi9NdWx0aWxpbmd1YWxDb250YWluZXInO1xuXG5pbXBvcnQgeyBEZWdyZWVQcm9ncmFtRGF0YSwgTGFuZ3VhZ2VDb2RlIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IENPTlRFTlRfSVRFTVMgPSBbXG4gICAgJ2Fib3V0JyxcbiAgICAnc3RydWN0dXJlJyxcbiAgICAnc3BlY2lhbGl6YXRpb25zJyxcbiAgICAncXVhbGl0aWVzX2FuZF9za2lsbHMnLFxuICAgICd3aHlfc2hvdWxkX3N0dWR5JyxcbiAgICAnY2FyZWVyX3Byb3NwZWN0cycsXG4gICAgJ3NwZWNpYWxfZmVhdHVyZXMnLFxuICAgICd0ZXN0aW1vbmlhbHMnLFxuXSBhcyBBcnJheTxrZXlvZiBEZWdyZWVQcm9ncmFtRGF0YVsnY29udGVudCddPjtcblxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlIH0gPSB1c2VFZGl0RGVncmVlUHJvZ3JhbSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgPFBhbmVsQm9keT5cbiAgICAgICAgICAgICAgICB7Q09OVEVOVF9JVEVNUy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJhc2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YCR7dmFsdWVzLmNvbnRlbnRbaXRlbV0udGl0bGUuZGV9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmNvbnRlbnRbaXRlbV0udGl0bGUuZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgKCR7dmFsdWVzLmNvbnRlbnRbaXRlbV0udGl0bGUuZW59KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy5jb250ZW50W2l0ZW1dLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZTogTGFuZ3VhZ2VDb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dmFsdWVzLmNvbnRlbnRbaXRlbV0uZGVzY3JpcHRpb25bbGFuZ3VhZ2VDb2RlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNvbnRlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNvbnRlbnQuJHtpdGVtfS5kZXNjcmlwdGlvbi4ke2xhbmd1YWdlQ29kZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L011bHRpbGluZ3VhbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9CYXNlQ29udHJvbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8RGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucyAvPlxuICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgIDwvUGFuZWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCBEZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlciBmcm9tICdjb250ZXh0cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcic7XG5cbmltcG9ydCBUYWJzIGZyb20gJy4uL1RhYnMnO1xuaW1wb3J0IEFkbWlzc2lvblJlcXVpcmVtZW50cyBmcm9tICcuL0FkbWlzc2lvblJlcXVpcmVtZW50cyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xuaW1wb3J0IEZvcm1IZWFkaW5nIGZyb20gJy4vRm9ybUhlYWRpbmcnO1xuaW1wb3J0IEdlbmVyYWwgZnJvbSAnLi9HZW5lcmFsJztcbmltcG9ydCBPcmdhbml6YXRpb25hbExpbmtzIGZyb20gJy4vT3JnYW5pemF0aW9uYWxMaW5rcyc7XG5cbmNvbnN0IERlZ3JlZVByb2dyYW1FZGl0Rm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXI+XG4gICAgICAgICAgICA8Rm9ybUhlYWRpbmcgLz5cbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgdGFicz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ2VuZXJhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F0IGEgZ2xhbmNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogRGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IDxHZW5lcmFsIC8+LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBEZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogPENvbnRlbnQgLz4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZG1pc3Npb24tcmVxdWlyZW1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWRtaXNzaW9uIHJlcXVpcmVtZW50cywgYXBwbGljYXRpb24gYW5kIGVucm9sbG1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBEZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogPEFkbWlzc2lvblJlcXVpcmVtZW50cyAvPixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29yZ2FuaXphdGlvbmFsLWxpbmtzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT3JnYW5pemF0aW9uYWwgbm90ZXMvbGlua3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBEZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogPE9yZ2FuaXphdGlvbmFsTGlua3MgLz4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZ3JlZVByb2dyYW1FZGl0Rm9ybTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZUVkaXREZWdyZWVQcm9ncmFtIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXInO1xuXG5jb25zdCBGb3JtSGVhZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlcyB9ID0gdXNlRWRpdERlZ3JlZVByb2dyYW0oKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt2YWx1ZXMudGl0bGUuZGV9XG4gICAgICAgICAgICB7ISF2YWx1ZXMudGl0bGUuZW4gJiYgYCAoJHt2YWx1ZXMudGl0bGUuZW59KWB9XG4gICAgICAgIDwvaDE+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1IZWFkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wgYXMgTnVtYmVyQ29udHJvbCxcbiAgICBCYXNlQ29udHJvbCxcbiAgICBQYW5lbCxcbiAgICBQYW5lbEJvZHksXG4gICAgVGV4dGFyZWFDb250cm9sLFxuICAgIFRleHRDb250cm9sLFxuICAgIFRvZ2dsZUNvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCBJbWFnZUZpZWxkIGZyb20gJ2NvbXBvbmVudHMvSW1hZ2VGaWVsZCc7XG5pbXBvcnQgTGltaXRlZElucHV0Q29udHJvbCBmcm9tICdjb21wb25lbnRzL0xpbWl0ZWRJbnB1dENvbnRyb2wnO1xuaW1wb3J0IHsgTXVsdGlUZXJtU2VsZWN0b3IgfSBmcm9tICdjb21wb25lbnRzL1Rlcm1TZWxlY3Rvcic7XG5pbXBvcnQgVGVybVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvVGVybVNlbGVjdG9yL1Rlcm1TZWxlY3Rvcic7XG5pbXBvcnQgVGV4dENvbnRyb2xDb2xsZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvVGV4dENvbnRyb2xDb2xsZWN0aW9uJztcbmltcG9ydCB7IHVzZUVkaXREZWdyZWVQcm9ncmFtIH0gZnJvbSAnY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXInO1xuaW1wb3J0IHsgcHJvcGVydHlJZCB9IGZyb20gJ3V0aWwvaWRIZWxwZXJzJztcbmltcG9ydCB7XG4gICAgdHJhbnNmb3JtVGVybVRvRGVncmVlLFxuICAgIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmssXG4gICAgdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsU3RyaW5nLFxufSBmcm9tICd1dGlsL3RyYW5zZm9ybXMnO1xuXG5pbXBvcnQgTXVsdGlsaW5ndWFsQ29udGFpbmVyIGZyb20gJy4vTXVsdGlsaW5ndWFsQ29udGFpbmVyJztcblxuaW1wb3J0IHsgRGVncmVlLCBNdWx0aWxpbmd1YWxMaW5rLCBNdWx0aWxpbmd1YWxTdHJpbmcgfSBmcm9tICdkZWZzJztcblxuY29uc3QgR2VuZXJhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlQ2hhbmdlIH0gPSB1c2VFZGl0RGVncmVlUHJvZ3JhbSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgPFBhbmVsQm9keT5cbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWF0dXJlZF9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaXJkIGbDvHIgZGllIERldGFpbGFuc2ljaHQgdmVyd2VuZGV0LlwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdGZWF0dXJlZCBpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlRmllbGQgcGF0aD1cImZlYXR1cmVkX2ltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBpZD1cInRlYXNlcl9pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaXJkIGbDvHIgZGllIEthY2hlbG4gYXVmIGRlciBBdXN3YWhsc2VpdGUgdmVyd2VuZGV0LlwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdUZWFzZXIgSW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZUZpZWxkIHBhdGg9XCJ0ZWFzZXJfaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBoZWxwPVwiU3R1ZGllbmdhbmdzYmV6ZWljaG51bmcsIG9obmUgQWJzY2hsdXNzLlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TXVsdGlsaW5ndWFsQ29udGFpbmVyIHZhbHVlPXt2YWx1ZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihgdGl0bGUuJHtsYW5ndWFnZUNvZGV9YCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRpdGxlW2xhbmd1YWdlQ29kZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG5cbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdTdWJ0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBoZWxwPVwiWi4gQi4gQXVmesOkaGx1bmcgZGVyIFN0dWRpZW5zY2h3ZXJwdW5rdGUgYmVpIFdpcnRzY2hhZnRzd2lzc2Vuc2NoYWZ0ZW4uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KGxhbmd1YWdlQ29kZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KGBzdWJ0aXRsZS4ke2xhbmd1YWdlQ29kZX1gLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3VidGl0bGVbbGFuZ3VhZ2VDb2RlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9CYXNlQ29udHJvbD5cblxuICAgICAgICAgICAgICAgIDxOdW1iZXJDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPG51bWJlcj4oJ3N0YW5kYXJkX2R1cmF0aW9uJywgcGFyc2VJbnQodmFsdWUsIDEwKSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RhbmRhcmRfZHVyYXRpb24gfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3RhbmRhcmQgZHVyYXRpb24gb2Ygc3R1ZHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsxfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8QmFzZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWVfcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnRmVlIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZXMuZmVlX3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8Ym9vbGVhbj4oJ2ZlZV9yZXF1aXJlZCcsIGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuXG4gICAgICAgICAgICAgICAgPE11bHRpVGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VtZXN0ZXJcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3RhcnQgb2YgZGVncmVlIHByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJzZW1lc3RlclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RhcnQubWFwKCh0ZXJtKSA9PiB0ZXJtLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbFN0cmluZ1tdPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJudW1iZXJfb2Zfc3R1ZGVudHNcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnTnVtYmVyIG9mIHN0dWRlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGhlbHA9XCJHZXNhbXR6YWhsIGRlciBTdHVkaWVyZW5kZW4sIG5pY2h0IG51ciBFcnN0c2VtZXN0ZXIuXCJcbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJudW1iZXJPZlN0dWRlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5udW1iZXJfb2Zfc3R1ZGVudHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHsgaWQ6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9PihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbnVtYmVyX29mX3N0dWRlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybScsIHRlcm0uaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGVybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWFjaGluZy1sYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdUZWFjaGluZyBsYW5ndWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cInRlYWNoaW5nTGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRlYWNoaW5nX2xhbmd1YWdlLmlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxTdHJpbmc+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZWFjaGluZ19sYW5ndWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsU3RyaW5nKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxNdWx0aVRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBpZD1cImF0dHJpYnV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdHRyaWJ1dGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hdHRyaWJ1dGVzLm1hcCgodGVybSkgPT4gdGVybS5pZCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxNdWx0aWxpbmd1YWxTdHJpbmdbXT4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0dHJpYnV0ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWdyZWVcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnRGVncmVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiZGVncmVlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5kZWdyZWUuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPERlZ3JlZT4oJ2RlZ3JlZScsIHRyYW5zZm9ybVRlcm1Ub0RlZ3JlZSh0ZXJtKSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmFjdWx0eVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdGYWN1bHR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwiZmFjdWx0eVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmFjdWx0eS5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhY3VsdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0dWR5LWxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1N0dWR5IGxvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwic3R1ZHlMb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubG9jYXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbFN0cmluZz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcodGVybSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPE11bHRpVGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3ViamVjdC1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdTdWJqZWN0IGdyb3VwcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB0YXhvbm9teT1cInN1YmplY3RHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3ViamVjdF9ncm91cHMubWFwKCh0KSA9PiB0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbFN0cmluZ1tdPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3ViamVjdF9ncm91cHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLm1hcCh0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBpZD1cInZpZGVvc1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdWaWRlb3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD1cIlZpZGVvcyDDvGJlciBkZW4gU3R1ZGllbmdhbmcsIGRhcyBTdHVkaWVuZmFjaCwgZWluIFRoZW1hIGRlcyBGYWNocyAoei4gQi4gMi1NaW51dGVuLVdpc3NlbiksIEVyZmFocnVuZ3NiZXJpY2h0ZS5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy52aWRlb3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZ1tdPigndmlkZW9zJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgICAgIDxMaW1pdGVkSW5wdXRDb250cm9sIHZhbHVlPXt2YWx1ZXMubWV0YV9kZXNjcmlwdGlvbi5kZX0gbWF4Q2hhcnM9ezE2MH0+XG4gICAgICAgICAgICAgICAgICAgIHsoeyB1cGRhdGVkVmFsdWUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ01ldGEgZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGV4dCBmw7xyIGRpZSBBbnplaWdlIGJlaSBTdWNobWFzY2hpbmVuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5tZXRhX2Rlc2NyaXB0aW9uLmRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTxzdHJpbmc+KCdtZXRhX2Rlc2NyaXB0aW9uLmRlJywgdXBkYXRlZFZhbHVlKHRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0xpbWl0ZWRJbnB1dENvbnRyb2w+XG4gICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPC9QYW5lbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhbDtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFRhYlBhbmVsIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHNlcnZlckRhdGEgZnJvbSAndXRpbC9zZXJ2ZXJEYXRhJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2VDb2RlIH0gZnJvbSAnLi4vLi4vZGVmcy9jb21tb24nO1xuaW1wb3J0IHsgVGFiSXRlbSB9IGZyb20gJy4uL1RhYnMnO1xuXG50eXBlIE11bHRpbGluZ3VhbENvbnRhaW5lclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiAobGFuZ3VhZ2VDb2RlOiBMYW5ndWFnZUNvZGUpID0+IFJlYWN0Tm9kZTtcbiAgICB2YWx1ZTogUmVjb3JkPExhbmd1YWdlQ29kZSwgc3RyaW5nPjtcbn07XG5cbmNvbnN0IHRhYnM6IFRhYlBhbmVsLlRhYltdID0gKE9iamVjdC5rZXlzKHNlcnZlckRhdGEoKS5sYW5ndWFnZXMpIGFzIEFycmF5PExhbmd1YWdlQ29kZT4pLm1hcChcbiAgICAobGFuZ3VhZ2VDb2RlOiBMYW5ndWFnZUNvZGUpID0+IHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VOYW1lID0gc2VydmVyRGF0YSgpLmxhbmd1YWdlc1tsYW5ndWFnZUNvZGVdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBsYW5ndWFnZUNvZGUsXG4gICAgICAgICAgICB0aXRsZTogbGFuZ3VhZ2VOYW1lLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5jb25zdCBNdWx0aWxpbmd1YWxDb250YWluZXIgPSAoeyBjaGlsZHJlbiwgdmFsdWUgfTogTXVsdGlsaW5ndWFsQ29udGFpbmVyUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGFiUGFuZWxcbiAgICAgICAgICAgIHRhYnM9e3RhYnMubWFwKCh0YWI6IHsgbmFtZTogTGFuZ3VhZ2VDb2RlOyB0aXRsZTogc3RyaW5nOyBjbGFzc05hbWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNFbXB0eSA9IHRhYi5uYW1lICE9PSAnZGUnICYmICF2YWx1ZVt0YWIubmFtZV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXNFbXB0eSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdubyBjb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBNdWx0aWxpbmd1YWwgY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmYXUtZGVncmVlLXByb2dyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogaXNFbXB0eSA/ICdpcy1lbXB0eScgOiAnJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsodGFiOiBUYWJJdGVtKSA9PiA8PntjaGlsZHJlbih0YWIubmFtZSBhcyBMYW5ndWFnZUNvZGUpfTwvPn1cbiAgICAgICAgPC9UYWJQYW5lbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlsaW5ndWFsQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIFBhbmVsLCBQYW5lbEJvZHksIFRleHRDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgdXNlRWRpdERlZ3JlZVByb2dyYW0gfSBmcm9tICcuLi8uLi9jb250ZXh0cy9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcic7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxMaW5rIH0gZnJvbSAnLi4vLi4vZGVmcyc7XG5pbXBvcnQgeyB1c2VEZWdyZWVGZWVzRW5hYmxlZCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNvbmRpdGlvbmFsRmllbGRzJztcbmltcG9ydCB7IHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsgfSBmcm9tICcuLi8uLi91dGlsL3RyYW5zZm9ybXMnO1xuaW1wb3J0IFRlcm1TZWxlY3RvciBmcm9tICcuLi9UZXJtU2VsZWN0b3InO1xuaW1wb3J0IE11bHRpbGluZ3VhbENvbnRhaW5lciBmcm9tICcuL011bHRpbGluZ3VhbENvbnRhaW5lcic7XG5cbmNvbnN0IE9yZ2FuaXphdGlvbmFsTGlua3MgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZXMsIGhhbmRsZUNoYW5nZSB9ID0gdXNlRWRpdERlZ3JlZVByb2dyYW0oKTtcbiAgICBjb25zdCBkZWdyZWVGZWVzRW5hYmxlZCA9IHVzZURlZ3JlZUZlZXNFbmFibGVkKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICA8UGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtaW5hdGlvbnNfb2ZmaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0V4YW1pbmF0aW9ucyBPZmZpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJleGFtaW5hdGlvbnNPZmZpY2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmV4YW1pbmF0aW9uc19vZmZpY2UuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGVybSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPE11bHRpbGluZ3VhbExpbms+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdleGFtaW5hdGlvbnNfb2ZmaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtaW5hdGlvbl9yZWd1bGF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdEZWdyZWUgcHJvZ3JhbSBhbmQgZXhhbWluYXRpb24gcmVndWxhdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXk9XCJleGFtaW5hdGlvblJlZ3VsYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5leGFtaW5hdGlvbl9yZWd1bGF0aW9ucy5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V4YW1pbmF0aW9uX3JlZ3VsYXRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vZHVsZV9oYW5kYm9va1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdNb2R1bGUgaGFuZGJvb2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhoYW5kYm9vazogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPignbW9kdWxlX2hhbmRib29rJywgaGFuZGJvb2spO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm1vZHVsZV9oYW5kYm9va31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBpZD1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfeChcbiAgICAgICAgICAgICAgICAgICAgICAgICdEZWdyZWUgcHJvZ3JhbSBVUkwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNdWx0aWxpbmd1YWxDb250YWluZXIgdmFsdWU9e3ZhbHVlcy51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihgdXJsLiR7bGFuZ3VhZ2VDb2RlfWAsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51cmxbbGFuZ3VhZ2VDb2RlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvTXVsdGlsaW5ndWFsQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN1YmplY3Rfc3BlY2lmaWNfYWR2aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1N1YmplY3Qtc3BlY2lmaWMgYWR2aWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBkZWdyZWUgcHJvZ3JhbSBlZGl0IGZvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215PVwic3ViamVjdFNwZWNpZmljQWR2aWNlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdWJqZWN0X3NwZWNpZmljX2FkdmljZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N1YmplY3Rfc3BlY2lmaWNfYWR2aWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxMaW5rKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0dWRlbnRfcmVwcmVzZW50YXRpdmVzXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1N0dWRlbnTigJlzIFJlcHJlc2VudGF0aXZlcy9GU0knLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tvZmZpY2U6IGRlZ3JlZSBwcm9ncmFtIGVkaXQgZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhyZXByZXNlbnRhdGl2ZXM6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPHN0cmluZz4oJ3N0dWRlbnRfcmVwcmVzZW50YXRpdmVzJywgcmVwcmVzZW50YXRpdmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5zdHVkZW50X3JlcHJlc2VudGF0aXZlc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtkZWdyZWVGZWVzRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e194KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdEZWdyZWUgUHJvZ3JhbSBGZWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja29mZmljZTogZGVncmVlIHByb2dyYW0gZWRpdCBmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiU3R1ZGllbmdhbmdzZ2Viw7xocmVuLCBuaWNodCBTZW1lc3RlcmJlaXRyw6RnZS5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlsaW5ndWFsQ29udGFpbmVyIHZhbHVlPXt2YWx1ZXMuZGVncmVlX3Byb2dyYW1fZmVlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhsYW5ndWFnZUNvZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRlZ3JlZVByb2dyYW1GZWVzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U8c3RyaW5nPihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGRlZ3JlZV9wcm9ncmFtX2ZlZXMuJHtsYW5ndWFnZUNvZGV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVncmVlUHJvZ3JhbUZlZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlZ3JlZV9wcm9ncmFtX2ZlZXNbbGFuZ3VhZ2VDb2RlXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWx0aWxpbmd1YWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQmFzZUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8L1BhbmVsPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25hbExpbmtzO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGVncmVlUHJvZ3JhbUVkaXRGb3JtJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZCwgdW5pcSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEZvcm1Ub2tlbkZpZWxkIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcbmltcG9ydCB7IF9ueCwgc3ByaW50ZiB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IEVudGl0eVNlbGVjdG9yUHJvcHMgfSBmcm9tICdkZWZzJztcblxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcblxuLyoqXG4gKiBFbnRpdHkgc2VsZWN0b3IuXG4gKiBIZWF2aWx5IGJhc2VkIG9uIEZsYXRUZXJtU2VsZWN0b3IuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvYmxvYi9jMDI0MjFmOGNkNmU5MDk2NmI3ZThjZDQ4N2QzMTFlZTMxYTZhYWRhL3BhY2thZ2VzL2VkaXRvci9zcmMvY29tcG9uZW50cy9wb3N0LXRheG9ub21pZXMvZmxhdC10ZXJtLXNlbGVjdG9yLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudGl0eVNlbGVjdG9yKHtcbiAgICBsYWJlbCxcbiAgICBtZXNzYWdlcyxcbiAgICBtYXhMZW5ndGgsXG4gICAgb25DaGFuZ2UsXG4gICAgZW50aXR5VG9Ub2tlbixcbiAgICBtYXhTdWdnZXN0aW9ucyxcbiAgICBlbnRpdGllcyxcbiAgICBzZWFyY2hlZEVudGl0aWVzLFxuICAgIHNldFNlYXJjaCxcbn06IEVudGl0eVNlbGVjdG9yUHJvcHMpIHtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGU8QXJyYXk8c3RyaW5nPj4oW10pO1xuICAgIGNvbnN0IGRlYm91bmNlZFNlYXJjaCA9IHVzZURlYm91bmNlKHNldFNlYXJjaCwgNTAwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChlbnRpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBlbnRpdGllcy5tYXAoZW50aXR5VG9Ub2tlbik7XG4gICAgICAgICAgICBzZXRWYWx1ZXMobmV3VmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH0sIFtlbnRpdGllc10pO1xuXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB1c2VNZW1vPEFycmF5PHN0cmluZz4+KCgpID0+IHtcbiAgICAgICAgaWYgKG1heExlbmd0aCAmJiB2YWx1ZXMubGVuZ3RoID49IG1heExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaGVkRW50aXRpZXMubWFwKGVudGl0eVRvVG9rZW4pO1xuICAgIH0sIFtzZWFyY2hlZEVudGl0aWVzLCB2YWx1ZXNdKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlVG9rZW5zID0gKHRva2VucykgPT4ge1xuICAgICAgICBjb25zdCBhdmFpbGFibGVFbnRpdGllcyA9IFsuLi5lbnRpdGllcywgLi4uc2VhcmNoZWRFbnRpdGllc107XG4gICAgICAgIGNvbnN0IHVuaXF1ZVRva2VucyA9IHVuaXEodG9rZW5zKTtcblxuICAgICAgICBzZXRWYWx1ZXModW5pcXVlVG9rZW5zKTtcbiAgICAgICAgY29uc3QgbmV3RW50aXRpZXMgPSB1bmlxdWVUb2tlbnMubWFwKCh0b2tlbikgPT5cbiAgICAgICAgICAgIGZpbmQoYXZhaWxhYmxlRW50aXRpZXMsIChlbnRpdHkpID0+IGVudGl0eVRvVG9rZW4oZW50aXR5KSA9PT0gdG9rZW4pLFxuICAgICAgICApO1xuICAgICAgICBvbkNoYW5nZShuZXdFbnRpdGllcyk7XG4gICAgICAgIHNldFNlYXJjaCgnJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzVG9rZW5WYWxpZCA9ICh0b2tlbjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZUVudGl0aWVzID0gWy4uLmVudGl0aWVzLCAuLi5zZWFyY2hlZEVudGl0aWVzXTtcbiAgICAgICAgcmV0dXJuIGZpbmQoYXZhaWxhYmxlRW50aXRpZXMsIChlbnRpdHkpID0+IGVudGl0eVRvVG9rZW4oZW50aXR5KSA9PT0gdG9rZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEZvcm1Ub2tlbkZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzPXttZXNzYWdlc31cbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzfVxuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zPXtzdWdnZXN0aW9uc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb2tlbnN9XG4gICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17ZGVib3VuY2VkU2VhcmNofVxuICAgICAgICAgICAgICAgIG1heFN1Z2dlc3Rpb25zPXttYXhTdWdnZXN0aW9uc31cbiAgICAgICAgICAgICAgICBfX2V4cGVyaW1lbnRhbFNob3dIb3dUbz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgX19leHBlcmltZW50YWxWYWxpZGF0ZUlucHV0PXtpc1Rva2VuVmFsaWR9XG4gICAgICAgICAgICAgICAgX19leHBlcmltZW50YWxFeHBhbmRPbkZvY3VzXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7bWF4TGVuZ3RoICYmIHZhbHVlcy5sZW5ndGggPj0gbWF4TGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlbnRpdHktc2VsZWN0b3ItLW1heC1pdGVtcy1ub3RpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3NwcmludGYoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2xhdG9yczogJWQgaXMgbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdGhhdCBjYW4gYmUgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ueChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91IGNhbiBvbmx5IHNlbGVjdCAlZCBpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91IGNhbiBvbmx5IHNlbGVjdCAlZCBpdGVtcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBzZWxlY3RvciBtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmF1LWRlZ3JlZS1wcm9ncmFtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0VudGl0eVNlbGVjdG9yJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBpc0Jsb2JVUkwgfSBmcm9tICdAd29yZHByZXNzL2Jsb2InO1xuaW1wb3J0IHsgTWVkaWFQbGFjZWhvbGRlciwgTWVkaWFSZXBsYWNlRmxvdywgTWVkaWFVcGxvYWRDaGVjayB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IEJ1dHRvbiwgRmxleCwgU3Bpbm5lciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IHVzZUVkaXREZWdyZWVQcm9ncmFtIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXInO1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gJy4vdXNlTWVkaWEnO1xuXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2RlZnMnO1xuXG50eXBlIEltYWdlRmllbGRQcm9wcyA9IHtcbiAgICBwYXRoOiAndGVhc2VyX2ltYWdlJyB8ICdmZWF0dXJlZF9pbWFnZSc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBUSFVNQk5BSUxfU0laRSA9IDE1MDtcblxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBoYXNJbWFnZTogYm9vbGVhbiB9PmBcbiAgICAuY29tcG9uZW50cy1wbGFjZWhvbGRlcl9fZmllbGRzZXQge1xuICAgICAgICAkeyh7IGhhc0ltYWdlIH0pID0+XG4gICAgICAgICAgICBoYXNJbWFnZVxuICAgICAgICAgICAgICAgID8gY3NzYFxuICAgICAgICAgICAgICAgICAgICAgIC5jb21wb25lbnRzLWZvcm0tZmlsZS11cGxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgLmJsb2NrLWVkaXRvci1tZWRpYS1wbGFjZWhvbGRlcl9fY2FuY2VsLWJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAuY29tcG9uZW50cy1idXR0b24uaXMtdGVydGlhcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICB9O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlRmllbGQoeyBwYXRoLCB0aXRsZSA9ICcnIH06IEltYWdlRmllbGRQcm9wcykge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB2YWx1ZXMsIGhhbmRsZUNoYW5nZSB9ID0gdXNlRWRpdERlZ3JlZVByb2dyYW0oKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkTWVkaWEgPSB1c2VNZWRpYSh2YWx1ZXNbcGF0aF0uaWQpO1xuXG4gICAgY29uc3QgUHJldmlldyA9ICgpOiBKU1guRWxlbWVudCB8IG51bGwgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbHVlc1twYXRoXS51cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFzZWxlY3RlZE1lZGlhID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBUSFVNQk5BSUxfU0laRSwgaGVpZ2h0OiBUSFVNQk5BSUxfU0laRSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvYWRlci1jYXJkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgd2lkdGg9e1RIVU1CTkFJTF9TSVpFfVxuICAgICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRNZWRpYT8ubWVkaWFfZGV0YWlscz8uc2l6ZXM/LnRodW1ibmFpbD8uc291cmNlX3VybCA/PyB2YWx1ZXNbcGF0aF0udXJsfVxuICAgICAgICAgICAgICAgIGFsdD1cInByZXZpZXdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlT25DYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIGhhbmRsZUNoYW5nZTxJbWFnZT4ocGF0aCwge1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlT25TZWxlY3QgPSAoeyBpZCwgdXJsIH0pID0+IHtcbiAgICAgICAgaWYgKGlzQmxvYlVSTCh1cmwpKSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGVDaGFuZ2U8SW1hZ2U+KHBhdGgsIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdXJsLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFzTWVkaWEgPSAoKSA9PiAhaXNMb2FkaW5nICYmICEhc2VsZWN0ZWRNZWRpYT8uaWQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgIDxTdHlsZWRXcmFwcGVyIGhhc0ltYWdlPXtoYXNNZWRpYSgpfT5cbiAgICAgICAgICAgICAgICA8TWVkaWFQbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17W3ZhbHVlc1twYXRoXS5pZF19XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVPblNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2hhc01lZGlhKCkgPyBoYW5kbGVPbkNhbmNlbCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXtbJ2ltYWdlJ119XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzPXt7IHRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhUHJldmlldz17PFByZXZpZXcgLz59XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aGFzTWVkaWEoKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBnYXA9ezR9IGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhUmVwbGFjZUZsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFVcmw9e3ZhbHVlc1twYXRoXS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhSWQ9e3ZhbHVlc1twYXRoXS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXtbJ2ltYWdlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVPblNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBpc0Rlc3RydWN0aXZlIG9uQ2xpY2s9e2hhbmRsZU9uQ2FuY2VsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19fKCdSZW1vdmUgaW1hZ2UnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L01lZGlhUGxhY2Vob2xkZXI+XG4gICAgICAgICAgICA8L1N0eWxlZFdyYXBwZXI+XG4gICAgICAgIDwvTWVkaWFVcGxvYWRDaGVjaz5cbiAgICApO1xufVxuXG5JbWFnZUZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZTogJycsXG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW1hZ2VGaWVsZCc7XG4iLCJpbXBvcnQgeyBNZWRpYVR5cGUgfSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YS9idWlsZC10eXBlcy9lbnRpdHktdHlwZXMvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBDb3JlRGF0YVNlbGVjdG9ycywgTWFwU2VsZWN0LCBXcE1lZGlhLCBXcE1lZGlhSW1hZ2UgfSBmcm9tICdkZWZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWVkaWE8VCBleHRlbmRzIE1lZGlhVHlwZSA9ICdpbWFnZSc+KG1lZGlhSWQ6IG51bWJlcikge1xuICAgIGNvbnN0IG1lZGlhOiAoVCBleHRlbmRzICdpbWFnZScgPyBXcE1lZGlhSW1hZ2UgOiBXcE1lZGlhKSB8IHVuZGVmaW5lZCA9IHVzZVNlbGVjdDxcbiAgICAgICAgTWFwU2VsZWN0PENvcmVEYXRhU2VsZWN0b3JzPlxuICAgID4oXG4gICAgICAgIChzZWxlY3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3QoJ2NvcmUnKS5nZXRNZWRpYShtZWRpYUlkKTtcbiAgICAgICAgfSxcbiAgICAgICAgW21lZGlhSWRdLFxuICAgICk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBtYXhDaGFyczogbnVtYmVyO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgY2hpbGRyZW46ICh7XG4gICAgICAgIG1heENoYXJzLFxuICAgICAgICB1cGRhdGVkVmFsdWUsXG4gICAgfToge1xuICAgICAgICBtYXhDaGFyczogbnVtYmVyO1xuICAgICAgICB1cGRhdGVkVmFsdWU6ICh0ZXh0OiBzdHJpbmcpID0+IHN0cmluZztcbiAgICB9KSA9PiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IExpbWl0ZWRJbnB1dENvbnRyb2wgPSAoeyBtYXhDaGFycywgY2hpbGRyZW4sIHZhbHVlIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2NoYXJzTGVmdCwgc2V0Q2hhcnNMZWZ0XSA9IHVzZVN0YXRlPG51bWJlcj4obWF4Q2hhcnMpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q2hhcnNMZWZ0KG1heENoYXJzIC0gdmFsdWUubGVuZ3RoKTtcbiAgICB9LCBbdmFsdWUsIG1heENoYXJzXSk7XG5cbiAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiB0ZXh0Lmxlbmd0aCA8PSBtYXhDaGFycyA/IHRleHQgOiB0ZXh0LnN1YnN0cmluZygwLCBtYXhDaGFycyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2hpbGRyZW4oeyB1cGRhdGVkVmFsdWUsIG1heENoYXJzIH0pfVxuXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHBlcmNlbnRhZ2U9eyhjaGFyc0xlZnQgKiAxMDApIC8gbWF4Q2hhcnN9IHNxdWFyZVNpemU9ezE2fSAvPlxuXG4gICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICB7X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAnJXMgY2hhcmFjdGVycyBsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBsaW1pdGVkIHRleHQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICkucmVwbGFjZSgnJXMnLCBjaGFyc0xlZnQudG9TdHJpbmcoKSl9XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbWl0ZWRJbnB1dENvbnRyb2w7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MaW1pdGVkSW5wdXRDb250cm9sJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFRhYlBhbmVsIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgVGFiSXRlbSB9IGZyb20gJy4vZGVmcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdGFiczogVGFiSXRlbVtdO1xufVxuXG5jb25zdCBUYWJzID0gKHsgdGFicyB9OiBQcm9wcykgPT4ge1xuICAgIHJldHVybiA8VGFiUGFuZWwgdGFicz17dGFic30+eyh0YWI6IFRhYkl0ZW0pID0+IDw+e3RhYi5jb21wb25lbnR9PC8+fTwvVGFiUGFuZWw+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImV4cG9ydCAqIGZyb20gJy4vZGVmcyc7XG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UYWJzJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG5pbXBvcnQgRW50aXR5U2VsZWN0b3IgZnJvbSAnLi4vRW50aXR5U2VsZWN0b3InO1xuaW1wb3J0IHsgTXVsdGlUZXJtU2VsZWN0b3JQcm9wcyB9IGZyb20gJy4vZGVmcyc7XG5pbXBvcnQge1xuICAgIHdpdGhEZWdyZWVQcm9ncmFtVGVybXMsXG4gICAgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zLFxuICAgIHdpdGhUZXJtU2VsZWN0b3JQcm9wcyxcbn0gZnJvbSAnLi9ob2MnO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICAgIHdpdGhUZXJtU2VsZWN0b3JQcm9wcyxcbiAgICB3aXRoRGVncmVlUHJvZ3JhbVRlcm1zLFxuICAgIHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcyxcbikoRW50aXR5U2VsZWN0b3IpIGFzIFJlYWN0LkZDPE11bHRpVGVybVNlbGVjdG9yUHJvcHM+O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29tcG9zZSwgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG5pbXBvcnQgRW50aXR5U2VsZWN0b3IgZnJvbSAnLi4vRW50aXR5U2VsZWN0b3InO1xuaW1wb3J0IHsgVGVybVNlbGVjdG9yUHJvcHMgfSBmcm9tICcuL2RlZnMnO1xuaW1wb3J0IHtcbiAgICB3aXRoRGVncmVlUHJvZ3JhbVRlcm1zLFxuICAgIHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcyxcbiAgICB3aXRoVGVybVNlbGVjdG9yUHJvcHMsXG59IGZyb20gJy4vaG9jJztcblxuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm9wcywgV3BUZXJtIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IHdpdGhTaW5nbGVUZXJtU2VsZWN0b3JQcm9wcyA9IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KFxuICAgIChXcmFwcGVkQ29tcG9uZW50OiBSZWFjdC5GQzxQYXJ0aWFsPEVudGl0eVNlbGVjdG9yUHJvcHM+PikgPT5cbiAgICAgICAgKHsgb25DaGFuZ2UsIC4uLm90aGVycyB9OiBUZXJtU2VsZWN0b3JQcm9wcykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRlcm1zOiBBcnJheTxXcFRlcm0+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVybXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh0ZXJtc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAnd2l0aFNpbmdsZVRlcm1TZWxlY3RvclByb3BzJyxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFNpbmdsZVRlcm1TZWxlY3RvclByb3BzLFxuICAgIHdpdGhUZXJtU2VsZWN0b3JQcm9wcyxcbiAgICB3aXRoRGVncmVlUHJvZ3JhbVRlcm1zLFxuICAgIHdpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcyxcbikoRW50aXR5U2VsZWN0b3IpIGFzIFJlYWN0LkZDPFRlcm1TZWxlY3RvclByb3BzPjtcbiIsImltcG9ydCB3aXRoRGVncmVlUHJvZ3JhbVRlcm1zIGZyb20gJy4vd2l0aERlZ3JlZVByb2dyYW1UZXJtcyc7XG5pbXBvcnQgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zIGZyb20gJy4vd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zJztcbmltcG9ydCB3aXRoVGVybVNlbGVjdG9yUHJvcHMgZnJvbSAnLi93aXRoVGVybVNlbGVjdG9yUHJvcHMnO1xuXG5leHBvcnQgeyB3aXRoRGVncmVlUHJvZ3JhbVRlcm1zLCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXMsIHdpdGhUZXJtU2VsZWN0b3JQcm9wcyB9O1xuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFBvc3QsIHN0b3JlIGFzIGNvcmVTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBlbnRpdHlJZCB9IGZyb20gJ3V0aWwvaWRIZWxwZXJzJztcbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IE11bHRpVGVybVNlbGVjdG9yUHJvcHMsIFRlcm1TZWxlY3RvclByb3BzIH0gZnJvbSAnLi4vZGVmcyc7XG5cbmNvbnN0IHdpdGhEZWdyZWVQcm9ncmFtVGVybXMgPSB3aXRoU2VsZWN0KFxuICAgIChcbiAgICAgICAgc2VsZWN0LFxuICAgICAgICBvd25Qcm9wczogVGVybVNlbGVjdG9yUHJvcHMgfCBNdWx0aVRlcm1TZWxlY3RvclByb3BzLFxuICAgICk6IHsgZW50aXRpZXM6IEFycmF5PFBvc3Q8J3ZpZXcnPj4gfSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZ2V0RW50aXR5UmVjb3JkcyB9ID0gc2VsZWN0KGNvcmVTdG9yZS5uYW1lKTtcblxuICAgICAgICBpZiAoaXNFbXB0eShvd25Qcm9wcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW50aXRpZXM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlkcyA9IChcbiAgICAgICAgICAgIChpc0FycmF5KG93blByb3BzLnZhbHVlKSA/IG93blByb3BzLnZhbHVlIDogW293blByb3BzLnZhbHVlXSkgYXMgQXJyYXk8c3RyaW5nPlxuICAgICAgICApLm1hcChlbnRpdHlJZCk7XG5cbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IC0xLFxuICAgICAgICAgICAgICAgIG9yZGVyYnk6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiAndmlldycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5jbHVkZTogaWRzLmpvaW4oJywnKSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW50aXRpZXM6XG4gICAgICAgICAgICAgICAgZ2V0RW50aXR5UmVjb3JkcyhcbiAgICAgICAgICAgICAgICAgICAgJ3RheG9ub215JyxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyRGF0YSgpLnRheG9ub215U2x1Z3Nbb3duUHJvcHMudGF4b25vbXldLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICApID8/IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGVncmVlUHJvZ3JhbVRlcm1zO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHN0b3JlIGFzIGNvcmVTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvY29yZS1kYXRhJztcbmltcG9ydCB7IHdpdGhTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgc2VydmVyRGF0YSBmcm9tICd1dGlsL3NlcnZlckRhdGEnO1xuXG5pbXBvcnQgeyBFbnRpdHlTZWxlY3RvclByb3BzLCBXcFRlcm0gfSBmcm9tICdkZWZzJztcblxuY29uc3Qgd2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVRlcm1zID0gd2l0aFNlbGVjdChcbiAgICAoXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgb3duUHJvcHM6IHsgdGF4b25vbXk6IHN0cmluZzsgbWF4U3VnZ2VzdGlvbnM6IG51bWJlciB9LFxuICAgICk6IFBhcnRpYWw8RW50aXR5U2VsZWN0b3JQcm9wczxXcFRlcm0+PiA9PiB7XG4gICAgICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgICAgIGNvbnN0IHsgZ2V0RW50aXR5UmVjb3JkcyB9ID0gc2VsZWN0KGNvcmVTdG9yZS5uYW1lKTtcblxuICAgICAgICBjb25zdCB0ZXJtcyA9IGdldEVudGl0eVJlY29yZHMoJ3RheG9ub215Jywgc2VydmVyRGF0YSgpLnRheG9ub215U2x1Z3Nbb3duUHJvcHMudGF4b25vbXldLCB7XG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IG93blByb3BzLm1heFN1Z2dlc3Rpb25zLFxuICAgICAgICAgICAgICAgIG9yZGVyYnk6ICduYW1lJyxcbiAgICAgICAgICAgICAgICBvcmRlcjogJ2FzYycsXG4gICAgICAgICAgICAgICAgY29udGV4dDogJ3ZpZXcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlYXJjaGVkRW50aXRpZXM6IHRlcm1zID8/IFtdLFxuICAgICAgICAgICAgc2V0U2VhcmNoLFxuICAgICAgICB9O1xuICAgIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCYXNlQ29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbmltcG9ydCB7IFNlbGVjdG9yUHJvcHMgfSBmcm9tICcuLi9kZWZzJztcblxuaW1wb3J0IHsgRW50aXR5U2VsZWN0b3JQcm9wcywgV3BUZXJtIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IHdpdGhUZXJtU2VsZWN0b3JQcm9wcyA9IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KFxuICAgIChXcmFwcGVkQ29tcG9uZW50OiBSZWFjdC5GQzxQYXJ0aWFsPEVudGl0eVNlbGVjdG9yUHJvcHM+PikgPT5cbiAgICAgICAgKHsgaWQsIGhlbHAsIC4uLm90aGVycyB9OiBTZWxlY3RvclByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCYXNlQ29udHJvbCBpZD17aWR9IGhlbHA9e2hlbHAgPz8gJyd9PlxuICAgICAgICAgICAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5VG9Ub2tlbj17KHRlcm06IFdwVGVybSkgPT4gdGVybS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3VnZ2VzdGlvbnM9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Jhc2VDb250cm9sPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAnd2l0aFNlbGVjdG9yUHJvcHMnLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRlcm1TZWxlY3RvclByb3BzO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBNdWx0aVRlcm1TZWxlY3RvciB9IGZyb20gJy4vTXVsdGlUZXJtU2VsZWN0b3InO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGVybVNlbGVjdG9yJztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gJ25hbm9pZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgICBCYXNlQ29udHJvbCxcbiAgICBCdXR0b24sXG4gICAgRmxleCxcbiAgICBJY29uLFxuICAgIFRleHRDb250cm9sLFxuICAgIFZpc3VhbGx5SGlkZGVuLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgX3ggfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbnRlcmZhY2UgRmllbGRJdGVtIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1tdO1xuICAgIG9uQ2hhbmdlKHZhbDogc3RyaW5nW10pOiB2b2lkO1xufVxuXG5jb25zdCB0cmFuc2Zvcm1SYXdWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nW10pOiBGaWVsZEl0ZW1bXSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcCgoc3RyKSA9PiAoe1xuICAgICAgICB2YWx1ZTogc3RyLFxuICAgICAgICBpZDogbmFub2lkKCksXG4gICAgfSkpO1xufTtcblxuY29uc3QgU3R5bGVkRmllbGRSb3cgPSBzdHlsZWQoRmxleClgXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgPiAuY29tcG9uZW50cy1iYXNlLWNvbnRyb2wge1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5jb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGQsXG4gICAgICAgIC5jb21wb25lbnRzLXRleHQtY29udHJvbF9faW5wdXQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IFRleHRDb250cm9sQ29sbGVjdGlvbiA9ICh7IHZhbHVlLCBvbkNoYW5nZSB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZTxGaWVsZEl0ZW1bXT4odHJhbnNmb3JtUmF3VmFsdWUodmFsdWUpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIEZpbHRlci1vdXQgZW1wdHkgdmFsdWVzXG4gICAgICAgIG9uQ2hhbmdlKGZpZWxkcy5maWx0ZXIoKGYpID0+ICEhZi52YWx1ZSkubWFwKChmKSA9PiBmLnZhbHVlKSk7XG4gICAgfSwgW2ZpZWxkc10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCYXNlQ29udHJvbD5cbiAgICAgICAgICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRGaWVsZFJvdyBrZXk9e2ZpZWxkLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWNlKGZpZWxkcywgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZnRbaW5kZXhdLnZhbHVlID0gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZXN0cnVjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRzKFsuLi5maWVsZHMuZmlsdGVyKChmKSA9PiBmLmlkICE9PSBmaWVsZC5pZCldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJub1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc3VhbGx5SGlkZGVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUmVtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrb2ZmaWNlOiBUZXh0Q29udHJvbENvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZhdS1kZWdyZWUtcHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXN1YWxseUhpZGRlbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZEZpZWxkUm93PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9CYXNlQ29udHJvbD5cblxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjZShmaWVsZHMsIChkcmFmdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWZ0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbmFub2lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtfeCgnQWRkJywgJ2JhY2tvZmZpY2U6IFRleHRDb250cm9sQ29sbGVjdGlvbicsICdmYXUtZGVncmVlLXByb2dyYW0nKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dENvbnRyb2xDb2xsZWN0aW9uO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGV4dENvbnRyb2xDb2xsZWN0aW9uJztcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcbmltcG9ydCB7IHNldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHVzZUVudGl0eVByb3AgfSBmcm9tICdAd29yZHByZXNzL2NvcmUtZGF0YSc7XG5cbmltcG9ydCBzZXJ2ZXJEYXRhIGZyb20gJ3V0aWwvc2VydmVyRGF0YSc7XG5cbmltcG9ydCB7IERlZ3JlZVByb2dyYW1EYXRhLCBEZWdyZWVQcm9ncmFtRGF0YVBhdGhzIH0gZnJvbSAnZGVmcyc7XG5cbmludGVyZmFjZSBDb250ZXh0VmFsdWUge1xuICAgIHZhbHVlczogRGVncmVlUHJvZ3JhbURhdGE7XG4gICAgaGFuZGxlQ2hhbmdlOiA8VmFsdWU+KHBhdGg6IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMsIHZhbDogVmFsdWUpID0+IHZvaWQ7XG4gICAgZXJyb3JzOiBQYXJ0aWFsPFJlY29yZDxrZXlvZiBEZWdyZWVQcm9ncmFtRGF0YSwgc3RyaW5nPj47XG4gICAgYWRkRXJyb3I6IChmaWVsZDoga2V5b2YgRGVncmVlUHJvZ3JhbURhdGEsIGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHJlbW92ZUVycm9yOiAoZmllbGQ6IGtleW9mIERlZ3JlZVByb2dyYW1EYXRhKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVncmVlUHJvZ3JhbUVkaXRGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dFZhbHVlPih7fSBhcyBDb250ZXh0VmFsdWUpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmNvbnN0IERlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGU8UGFydGlhbDxSZWNvcmQ8a2V5b2YgRGVncmVlUHJvZ3JhbURhdGEsIHN0cmluZz4+Pih7fSk7XG4gICAgY29uc3QgW2RlZ3JlZVByb2dyYW1EYXRhLCBzZXREZWdyZWVQcm9ncmFtRGF0YV0gPSB1c2VFbnRpdHlQcm9wKFxuICAgICAgICAncG9zdFR5cGUnLFxuICAgICAgICBzZXJ2ZXJEYXRhKCkucG9zdFR5cGUsXG4gICAgICAgIHNlcnZlckRhdGEoKS5wcm9wZXJ0eU5hbWUsXG4gICAgKSBhcyBbRGVncmVlUHJvZ3JhbURhdGEsICh2YWw6IERlZ3JlZVByb2dyYW1EYXRhKSA9PiB2b2lkLCB1bmtub3duXTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICA8VmFsdWUsPihwYXRoOiBEZWdyZWVQcm9ncmFtRGF0YVBhdGhzLCB2YWw6IFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzZXREZWdyZWVQcm9ncmFtRGF0YShwcm9kdWNlKGRlZ3JlZVByb2dyYW1EYXRhLCAoZHJhZnQpID0+IHNldChkcmFmdCwgcGF0aCwgdmFsKSkpO1xuICAgICAgICB9LFxuICAgICAgICBbc2V0RGVncmVlUHJvZ3JhbURhdGEsIGRlZ3JlZVByb2dyYW1EYXRhXSxcbiAgICApO1xuXG4gICAgY29uc3QgYWRkRXJyb3IgPSB1c2VDYWxsYmFjaygoZmllbGQ6IGtleW9mIERlZ3JlZVByb2dyYW1EYXRhLCBlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRFcnJvcnMoKHByZXZFcnJvcnMpID0+ICh7IC4uLnByZXZFcnJvcnMsIFtmaWVsZF06IGVycm9yTWVzc2FnZSB9KSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgcmVtb3ZlRXJyb3IgPSB1c2VDYWxsYmFjaygoZmllbGQ6IGtleW9mIERlZ3JlZVByb2dyYW1EYXRhKSA9PiB7XG4gICAgICAgIHNldEVycm9ycygocHJldkVycm9ycykgPT5cbiAgICAgICAgICAgIHByb2R1Y2UocHJldkVycm9ycywgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGRyYWZ0W2ZpZWxkXTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxEZWdyZWVQcm9ncmFtRWRpdEZvcm1Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IGRlZ3JlZVByb2dyYW1EYXRhLFxuICAgICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgICBhZGRFcnJvcixcbiAgICAgICAgICAgICAgICByZW1vdmVFcnJvcixcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9EZWdyZWVQcm9ncmFtRWRpdEZvcm1Db250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlRWRpdERlZ3JlZVByb2dyYW0gPSAoKSA9PiB1c2VDb250ZXh0KERlZ3JlZVByb2dyYW1FZGl0Rm9ybUNvbnRleHQpO1xuXG5leHBvcnQgZGVmYXVsdCBEZWdyZWVQcm9ncmFtRWRpdEZvcm1Qcm92aWRlcjtcbiIsImV4cG9ydCAqIGZyb20gJy4vZGVmcy9jb21tb24nO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZzL2NvcmUtZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RlZnMvZGVncmVlLXByb2dyYW0tZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RlZnMvZW50aXR5LXNlbGVjdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vZGVmcy9nZW5lcmljJztcbmV4cG9ydCAqIGZyb20gJy4vZGVmcy9zZXJ2ZXItZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2RlZnMvdGVybSc7XG4iLCJpbXBvcnQgeyBQb3N0IH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuXG5pbXBvcnQgeyBPYmplY3RWYWx1ZXMsIFBhdGhzIH0gZnJvbSAnLi9nZW5lcmljJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWdyZWVQcm9ncmFtRGF0YSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBmZWF0dXJlZF9pbWFnZTogSW1hZ2U7XG4gICAgdGVhc2VyX2ltYWdlOiBJbWFnZTtcbiAgICB0aXRsZTogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIHN1YnRpdGxlOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgc3RhbmRhcmRfZHVyYXRpb246IG51bWJlcjtcbiAgICBmZWVfcmVxdWlyZWQ6IGJvb2xlYW47XG4gICAgc3RhcnQ6IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgbnVtYmVyX29mX3N0dWRlbnRzOiB7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgfTtcbiAgICB0ZWFjaGluZ19sYW5ndWFnZTogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGF0dHJpYnV0ZXM6IEFycmF5PE11bHRpbGluZ3VhbFN0cmluZz47XG4gICAgZGVncmVlOiBEZWdyZWU7XG4gICAgZmFjdWx0eTogTXVsdGlsaW5ndWFsTGluaztcbiAgICBsb2NhdGlvbjogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIHN1YmplY3RfZ3JvdXBzOiBBcnJheTxNdWx0aWxpbmd1YWxTdHJpbmc+O1xuICAgIHZpZGVvczogc3RyaW5nW107XG4gICAgbWV0YV9kZXNjcmlwdGlvbjogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgYWJvdXQ6IENvbnRlbnRJdGVtO1xuICAgICAgICBzdHJ1Y3R1cmU6IENvbnRlbnRJdGVtO1xuICAgICAgICBzcGVjaWFsaXphdGlvbnM6IENvbnRlbnRJdGVtO1xuICAgICAgICBxdWFsaXRpZXNfYW5kX3NraWxsczogQ29udGVudEl0ZW07XG4gICAgICAgIHdoeV9zaG91bGRfc3R1ZHk6IENvbnRlbnRJdGVtO1xuICAgICAgICBjYXJlZXJfcHJvc3BlY3RzOiBDb250ZW50SXRlbTtcbiAgICAgICAgc3BlY2lhbF9mZWF0dXJlczogQ29udGVudEl0ZW07XG4gICAgICAgIHRlc3RpbW9uaWFsczogQ29udGVudEl0ZW07XG4gICAgfTtcbiAgICBhZG1pc3Npb25fcmVxdWlyZW1lbnRzOiB7XG4gICAgICAgIGJhY2hlbG9yX29yX3RlYWNoaW5nX2RlZ3JlZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICAgICAgdGVhY2hpbmdfZGVncmVlX2hpZ2hlcl9zZW1lc3RlcjogTXVsdGlsaW5ndWFsTGluaztcbiAgICAgICAgbWFzdGVyOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIH07XG4gICAgY29udGVudF9yZWxhdGVkX21hc3Rlcl9yZXF1aXJlbWVudHM6IE11bHRpbGluZ3VhbFN0cmluZztcbiAgICBhcHBsaWNhdGlvbl9kZWFkbGluZV93aW50ZXJfc2VtZXN0ZXI6IHN0cmluZztcbiAgICBhcHBsaWNhdGlvbl9kZWFkbGluZV9zdW1tZXJfc2VtZXN0ZXI6IHN0cmluZztcbiAgICBkZXRhaWxzX2FuZF9ub3RlczogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGxhbmd1YWdlX3NraWxsczogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIGxhbmd1YWdlX3NraWxsc19odW1hbml0aWVzX2ZhY3VsdHk6IHN0cmluZztcbiAgICBnZXJtYW5fbGFuZ3VhZ2Vfc2tpbGxzX2Zvcl9pbnRlcm5hdGlvbmFsX3N0dWRlbnRzOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIHJlYWRvbmx5IHN0YXJ0X29mX3NlbWVzdGVyOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIHJlYWRvbmx5IHNlbWVzdGVyX2RhdGVzOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIGV4YW1pbmF0aW9uc19vZmZpY2U6IE11bHRpbGluZ3VhbExpbms7XG4gICAgZXhhbWluYXRpb25fcmVndWxhdGlvbnM6IE11bHRpbGluZ3VhbExpbms7XG4gICAgbW9kdWxlX2hhbmRib29rOiBzdHJpbmc7XG4gICAgdXJsOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgcmVhZG9ubHkgZGVwYXJ0bWVudDogTXVsdGlsaW5ndWFsTGluaztcbiAgICByZWFkb25seSBzdHVkZW50X2FkdmljZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICBzdWJqZWN0X3NwZWNpZmljX2FkdmljZTogTXVsdGlsaW5ndWFsTGluaztcbiAgICByZWFkb25seSBzZXJ2aWNlX2NlbnRlcnM6IE11bHRpbGluZ3VhbExpbms7XG4gICAgc3R1ZGVudF9yZXByZXNlbnRhdGl2ZXM6IHN0cmluZztcbiAgICByZWFkb25seSBzZW1lc3Rlcl9mZWU6IE11bHRpbGluZ3VhbExpbms7XG4gICAgZGVncmVlX3Byb2dyYW1fZmVlczogTXVsdGlsaW5ndWFsU3RyaW5nO1xuICAgIHJlYWRvbmx5IGFicm9hZF9vcHBvcnR1bml0aWVzOiBNdWx0aWxpbmd1YWxMaW5rO1xuICAgIGtleXdvcmRzOiBBcnJheTxNdWx0aWxpbmd1YWxTdHJpbmc+O1xuICAgIGFyZWFfb2Zfc3R1ZHk6IEFycmF5PE11bHRpbGluZ3VhbExpbms+O1xuICAgIGNvbWJpbmF0aW9uczogQXJyYXk8bnVtYmVyPjtcbiAgICBsaW1pdGVkX2NvbWJpbmF0aW9uczogQXJyYXk8bnVtYmVyPjtcbn1cblxuZXhwb3J0IGNvbnN0IERFR1JFRV9BQkJSRVZJQVRJT05fRU5HTElTSCA9IHtcbiAgICBCQUNIRUxPUjogJ0IuQS4nLFxuICAgIE1BU1RFUlM6ICdNLkEuJyxcbiAgICBURUFDSElOR19ERUdSRUU6ICdCLlMuRS4nLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOID0ge1xuICAgIEJBQ0hFTE9SOiAnQkEnLFxuICAgIE1BU1RFUlM6ICdNQScsXG4gICAgVEVBQ0hJTkdfREVHUkVFOiAnTEEnLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgRGVncmVlQWJicmV2aWF0aW9uRW5nbGlzaCA9IE9iamVjdFZhbHVlczx0eXBlb2YgREVHUkVFX0FCQlJFVklBVElPTl9FTkdMSVNIPiB8ICcnO1xuZXhwb3J0IHR5cGUgRGVncmVlQWJicmV2aWF0aW9uR2VybWFuID0gT2JqZWN0VmFsdWVzPHR5cGVvZiBERUdSRUVfQUJCUkVWSUFUSU9OX0dFUk1BTj4gfCAnJztcblxuZXhwb3J0IGludGVyZmFjZSBEZWdyZWVQcm9ncmFtQWJicmV2aWF0aW9uIGV4dGVuZHMgTXVsdGlsaW5ndWFsU3RyaW5nIHtcbiAgICBlbjogRGVncmVlQWJicmV2aWF0aW9uRW5nbGlzaDtcbiAgICBkZTogRGVncmVlQWJicmV2aWF0aW9uR2VybWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZ3JlZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBNdWx0aWxpbmd1YWxTdHJpbmc7XG4gICAgYWJicmV2aWF0aW9uOiBEZWdyZWVQcm9ncmFtQWJicmV2aWF0aW9uO1xufVxuXG5leHBvcnQgdHlwZSBJbWFnZSA9IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHVybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgTXVsdGlsaW5ndWFsU3RyaW5nID0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZGU6IHN0cmluZztcbiAgICBlbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgTXVsdGlsaW5ndWFsTGluayA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IE11bHRpbGluZ3VhbFN0cmluZztcbiAgICBsaW5rX3RleHQ6IE11bHRpbGluZ3VhbFN0cmluZztcbiAgICBsaW5rX3VybDogTXVsdGlsaW5ndWFsU3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQ29udGVudEl0ZW0gPSB7XG4gICAgcmVhZG9ubHkgdGl0bGU6IE11bHRpbGluZ3VhbFN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogTXVsdGlsaW5ndWFsU3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRGVncmVlUHJvZ3JhbURhdGFQYXRocyA9IFBhdGhzPERlZ3JlZVByb2dyYW1EYXRhLCAzPjtcblxuZXhwb3J0IGludGVyZmFjZSBEZWdyZWVQcm9ncmFtUG9zdCBleHRlbmRzIFBvc3Qge1xuICAgIGRlZ3JlZV9wcm9ncmFtOiBEZWdyZWVQcm9ncmFtRGF0YTtcbn1cbiIsImV4cG9ydCBjb25zdCBGQUNVTFRZX1BISUxPU09QSFkgPSAnUGhpbCc7XG5leHBvcnQgY29uc3QgRkFDVUxUWV9OQVRVUkFMX1NDSUVOQ0VTID0gJ05hdCc7XG5leHBvcnQgY29uc3QgU0VNRVNURVJfU1VNTUVSID0gJ1NvbW1lcnNlbWVzdGVyJztcbmV4cG9ydCBjb25zdCBBRE1JU1NJT05fUkVRVUlSRU1FTlRfRlJFRSA9ICdmcmVpJztcbiIsImltcG9ydCB7XG4gICAgQURNSVNTSU9OX1JFUVVJUkVNRU5UX0ZSRUUsXG4gICAgRkFDVUxUWV9OQVRVUkFMX1NDSUVOQ0VTLFxuICAgIEZBQ1VMVFlfUEhJTE9TT1BIWSxcbiAgICBTRU1FU1RFUl9TVU1NRVIsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHkgZnJvbSAnLi91c2VEZWdyZWVQcm9ncmFtUHJvcGVydHknO1xuXG5pbXBvcnQgeyBEZWdyZWUsIERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOLCBNdWx0aWxpbmd1YWxMaW5rIH0gZnJvbSAnZGVmcyc7XG5cbmNvbnN0IEFMTE9XRURfRkFDVUxUSUVTX0ZPUl9DT01CSU5BVElPTiA9IFtGQUNVTFRZX1BISUxPU09QSFksIEZBQ1VMVFlfTkFUVVJBTF9TQ0lFTkNFU107XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWdyZWVGZWVzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBbZmVlUmVxdWlyZWRdID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PGJvb2xlYW4+KCdmZWVfcmVxdWlyZWQnKTtcblxuICAgIHJldHVybiAhIWZlZVJlcXVpcmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluYXRpb25PZkRlZ3JlZVByb2dyYW1FbmFibGVkKCkge1xuICAgIGNvbnN0IFtmYWN1bHR5XSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxNdWx0aWxpbmd1YWxMaW5rPignZmFjdWx0eScpO1xuICAgIGNvbnN0IFtkZWdyZWVdID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PERlZ3JlZT4oJ2RlZ3JlZScpO1xuXG4gICAgaWYgKCFmYWN1bHR5IHx8ICFkZWdyZWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIEFMTE9XRURfRkFDVUxUSUVTX0ZPUl9DT01CSU5BVElPTi5pbmNsdWRlcyhmYWN1bHR5Lm5hbWUuZGUpICYmXG4gICAgICAgIGRlZ3JlZS5hYmJyZXZpYXRpb24uZGUgPT09IERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOLkJBQ0hFTE9SXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkbWlzc2lvblJlcXVpcmVtZW50c0ZvckJhY2hlbG9yQW5kVGVhY2hpbmdEZWdyZWVzRW5hYmxlKCkge1xuICAgIGNvbnN0IFtkZWdyZWVdID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PERlZ3JlZT4oJ2RlZ3JlZScpO1xuXG4gICAgaWYgKCFkZWdyZWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGRlZ3JlZS5hYmJyZXZpYXRpb24uZGUgPT09IERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOLkJBQ0hFTE9SIHx8XG4gICAgICAgIGRlZ3JlZS5hYmJyZXZpYXRpb24uZGUgPT09IERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOLlRFQUNISU5HX0RFR1JFRVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBZG1pc3Npb25SZXF1aXJlbWVudHNUZWFjaGluZ0RlZ3JlZUF0SGlnaGVyU2VtZXN0ZXJFbmFibGVkKCkge1xuICAgIGNvbnN0IFtiYWNoZWxvck9yVGVhY2hpbmdBZG1pc3Npb25SZXF1aXJlbWVudF0gPSB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8TXVsdGlsaW5ndWFsTGluaz4oXG4gICAgICAgICdhZG1pc3Npb25fcmVxdWlyZW1lbnRzLmJhY2hlbG9yX29yX3RlYWNoaW5nX2RlZ3JlZScsXG4gICAgKTtcblxuICAgIGlmICghYmFjaGVsb3JPclRlYWNoaW5nQWRtaXNzaW9uUmVxdWlyZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBiYWNoZWxvck9yVGVhY2hpbmdBZG1pc3Npb25SZXF1aXJlbWVudC5uYW1lLmRlICE9PSBBRE1JU1NJT05fUkVRVUlSRU1FTlRfRlJFRTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkbWlzc2lvblJlcXVpcmVtZW50c0Zvck1hc3RlcnNEZWdyZWUoKSB7XG4gICAgY29uc3QgW2RlZ3JlZV0gPSB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8RGVncmVlPignZGVncmVlJyk7XG5cbiAgICBpZiAoIWRlZ3JlZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZ3JlZS5hYmJyZXZpYXRpb24uZGUgPT09IERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOLk1BU1RFUlM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYW5ndWFnZVNraWxsc0ZvckZhY3VsdHlPZkh1bWFuaXRpZXNPbmx5RW5hYmxlZCgpIHtcbiAgICBjb25zdCBbZGVncmVlXSA9IHVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eTxEZWdyZWU+KCdkZWdyZWUnKTtcbiAgICBjb25zdCBbZmFjdWx0eV0gPSB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8TXVsdGlsaW5ndWFsTGluaz4oJ2ZhY3VsdHknKTtcblxuICAgIGlmICghZGVncmVlIHx8ICFmYWN1bHR5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAoZGVncmVlLmFiYnJldmlhdGlvbi5kZSA9PT0gREVHUkVFX0FCQlJFVklBVElPTl9HRVJNQU4uQkFDSEVMT1IgfHxcbiAgICAgICAgICAgIGRlZ3JlZS5hYmJyZXZpYXRpb24uZGUgPT09IERFR1JFRV9BQkJSRVZJQVRJT05fR0VSTUFOLlRFQUNISU5HX0RFR1JFRSkgJiZcbiAgICAgICAgZmFjdWx0eS5uYW1lLmRlID09PSBGQUNVTFRZX1BISUxPU09QSFlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwbGljYXRpb25EZWFkbGluZVN1bW1lclNlbWVzdGVyRW5hYmxlZCgpIHtcbiAgICBjb25zdCBbc2VtZXN0ZXJdID0gdXNlRGVncmVlUHJvZ3JhbVByb3BlcnR5PERlZ3JlZT4oJ3NlbWVzdGVyX2RhdGVzJyk7XG5cbiAgICBpZiAoIXNlbWVzdGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VtZXN0ZXIubmFtZS5kZSA9PT0gU0VNRVNURVJfU1VNTUVSO1xufVxuIiwiaW1wb3J0IHByb2R1Y2UsIHsgSW1tdXRhYmxlIH0gZnJvbSAnaW1tZXInO1xuaW1wb3J0IHsgZ2V0LCBzZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyB1c2VFbnRpdHlQcm9wIH0gZnJvbSAnQHdvcmRwcmVzcy9jb3JlLWRhdGEnO1xuXG5pbXBvcnQgc2VydmVyRGF0YSBmcm9tICd1dGlsL3NlcnZlckRhdGEnO1xuXG5pbXBvcnQgeyBEZWdyZWVQcm9ncmFtRGF0YVBhdGhzIH0gZnJvbSAnLi4vZGVmcyc7XG5cbi8qKlxuICogSG9vayB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGFuZCBhIHNldHRlciBmb3IgdGhlXG4gKiBzcGVjaWZpZWQgcHJvcGVydHkgb2YgdGhlIGN1cnJlbnQgRGVncmVlUHJvZ3JhbURhdGEuXG4gKiBTaG91bGQgYmUgdXNlZCBvbmx5IGZvciBzaW5nbGUgRGVncmVlUHJvZ3JhbSBlZGl0IHNjcmVlbi5cbiAqXG4gKiBUbyBtYWtlIGltbXV0YWJsZSBjaGFuZ2VzIGVhc3ksIEltbWVyIGxpYnJhcnkgaXMgdXNlZC5cbiAqXG4gKiBAcGFyYW0gcGF0aCBQYXRoIHRvIERlZ3JlZVByb2dyYW1EYXRhIHZhbHVlLlxuICogQHR5cGVQYXJhbSBWYWx1ZSBEZWZpbml0aW9uIG9mIHJldHVybmVkIERlZ3JlZVByb2dyYW1EYXRhIHByb3BlcnR5LlxuICogQHJldHVybnMgQW4gYXJyYXkgd2hlcmUgdGhlIGZpcnN0IGl0ZW0gaXMgdGhlIHByb3BlcnR5IHZhbHVlLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgc2V0dGVyLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBcbiAqIGZ1bmN0aW9uIE11bHRpbGluZ3VhbElucHV0KCkge1xuICogICAgIGNvbnN0IFtlbmdsaXNoVGl0bGUsIHNldEVuZ2xpc2hUaXRsZV0gPSB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8TXVsdGlsaW5ndWFsU3RyaW5nPigndGl0bGUuZW4nKTtcbiAqICAgICByZXR1cm4gPElucHV0IGRlc2NyaXB0aW9uPVwiRW5nbGlzaCB0aXRsZVwiXG4gKiAgICAgICAgICAgIHZhbHVlPXtlbmdsaXNoVGl0bGV9XG4gKiAgICAgICAgICAgIG9uQ2xpY2s9e3NldEVuZ2xpc2hUaXRsZX0gLz5cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEZWdyZWVQcm9ncmFtUHJvcGVydHk8VmFsdWU+KFxuICAgIHBhdGg6IERlZ3JlZVByb2dyYW1EYXRhUGF0aHMsXG4pOiBbSW1tdXRhYmxlPHVuZGVmaW5lZCB8IFZhbHVlPiwgKHZhbHVlOiBWYWx1ZSkgPT4gdm9pZF0ge1xuICAgIGNvbnN0IFtkZWdyZWVQcm9ncmFtRGF0YSwgc2V0RGVncmVlUHJvZ3JhbURhdGFdID0gdXNlRW50aXR5UHJvcChcbiAgICAgICAgJ3Bvc3RUeXBlJyxcbiAgICAgICAgc2VydmVyRGF0YSgpLnBvc3RUeXBlLFxuICAgICAgICBzZXJ2ZXJEYXRhKCkucHJvcGVydHlOYW1lLFxuICAgICk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICBnZXQoZGVncmVlUHJvZ3JhbURhdGEsIHBhdGgpLFxuICAgICAgICAodmFsOiBWYWx1ZSkgPT5cbiAgICAgICAgICAgIHNldERlZ3JlZVByb2dyYW1EYXRhKFxuICAgICAgICAgICAgICAgIHByb2R1Y2U8VmFsdWU+KGRlZ3JlZVByb2dyYW1EYXRhLCAoZHJhZnQpID0+IHNldChkcmFmdCwgcGF0aCwgdmFsKSksXG4gICAgICAgICAgICApLFxuICAgIF07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcHJvcGVydHlJZChcbiAgICB0eXBlOiAndGVybScgfCAnb3B0aW9uJyB8ICdwb3N0X21ldGEnIHwgJ3Bvc3QnIHwgJ3Rlcm1fbWV0YScsXG4gICAgaWQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBzdWJGaWVsZCA9ICcnLFxuKSB7XG4gICAgY29uc3QgcGFydHMgPSBbdHlwZSwgaWRdO1xuICAgIGlmIChzdWJGaWVsZCkge1xuICAgICAgICBwYXJ0cy5wdXNoKHN1YkZpZWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzLmpvaW4oJzonKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUlkKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUludChpZC5zcGxpdCgnOicpWzFdID8/IDAsIDEwKTtcbn1cbiIsImltcG9ydCB7IERlZ3JlZVByb2dyYW1FZGl0b3JTZXJ2ZXJEYXRhVHlwZSB9IGZyb20gJy4uL2RlZnMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIERlZ3JlZVByb2dyYW1FZGl0b3JTZXJ2ZXJEYXRhOiBEZWdyZWVQcm9ncmFtRWRpdG9yU2VydmVyRGF0YVR5cGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXJ2ZXJEYXRhKCkge1xuICAgIGlmICh3aW5kb3cuRGVncmVlUHJvZ3JhbUVkaXRvclNlcnZlckRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZlciBkYXRhIGNvdWxkIG5vdCBiZSBsb2FkZWQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5EZWdyZWVQcm9ncmFtRWRpdG9yU2VydmVyRGF0YSBhcyBEZWdyZWVQcm9ncmFtRWRpdG9yU2VydmVyRGF0YVR5cGU7XG59XG4iLCJpbXBvcnQgeyBwcm9wZXJ0eUlkIH0gZnJvbSAnLi9pZEhlbHBlcnMnO1xuXG5pbXBvcnQge1xuICAgIERlZ3JlZSxcbiAgICBEZWdyZWVBYmJyZXZpYXRpb25FbmdsaXNoLFxuICAgIERlZ3JlZUFiYnJldmlhdGlvbkdlcm1hbixcbiAgICBNdWx0aWxpbmd1YWxMaW5rLFxuICAgIE11bHRpbGluZ3VhbFN0cmluZyxcbn0gZnJvbSAnZGVmcyc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxMaW5rTWV0YSwgV3BUZXJtIH0gZnJvbSAnZGVmcy90ZXJtJztcblxuY29uc3QgRU1QVFlfTVVMVElMSU5HVUFMX1NUUklORyA9IHtcbiAgICBpZDogJycsXG4gICAgZGU6ICcnIGFzIERlZ3JlZUFiYnJldmlhdGlvbkdlcm1hbixcbiAgICBlbjogJycgYXMgRGVncmVlQWJicmV2aWF0aW9uRW5nbGlzaCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1UZXJtVG9NdWx0aWxpbmd1YWxTdHJpbmcoXG4gICAgdGVybTogV3BUZXJtPHsgbmFtZV9lbjogc3RyaW5nIH0+IHwgbnVsbCxcbik6IE11bHRpbGluZ3VhbFN0cmluZyB7XG4gICAgcmV0dXJuIHRlcm1cbiAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGVuOiB0ZXJtLm1ldGEubmFtZV9lbiA/PyAnJyxcbiAgICAgICAgICAgICAgZGU6IHRlcm0ubmFtZSxcbiAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCB0ZXJtLmlkLCAnbmFtZScpLFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7IC4uLkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkcgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbExpbmsoXG4gICAgdGVybTogV3BUZXJtPE11bHRpbGluZ3VhbExpbmtNZXRhPiB8IG51bGwsXG4pOiBNdWx0aWxpbmd1YWxMaW5rIHtcbiAgICByZXR1cm4gdGVybVxuICAgICAgICA/IHtcbiAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCB0ZXJtLmlkKSxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgaWQ6IHByb3BlcnR5SWQoJ3Rlcm0nLCB0ZXJtLmlkLCAnbmFtZScpLFxuICAgICAgICAgICAgICAgICAgZGU6IHRlcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGVuOiB0ZXJtLm1ldGEubmFtZV9lbiA/PyAnJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGlua190ZXh0OiB7XG4gICAgICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybV9tZXRhJywgdGVybS5pZCwgJ2xpbmtfdGV4dCcpLFxuICAgICAgICAgICAgICAgICAgZGU6IHRlcm0ubWV0YS5saW5rX3RleHQgPz8gJycsXG4gICAgICAgICAgICAgICAgICBlbjogdGVybS5tZXRhLmxpbmtfdGV4dF9lbiA/PyAnJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGlua191cmw6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBwcm9wZXJ0eUlkKCd0ZXJtX21ldGEnLCB0ZXJtLmlkLCAnbGlua191cmwnKSxcbiAgICAgICAgICAgICAgICAgIGRlOiB0ZXJtLm1ldGEubGlua191cmwgPz8gJycsXG4gICAgICAgICAgICAgICAgICBlbjogdGVybS5tZXRhLmxpbmtfdXJsX2VuID8/ICcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICAgbmFtZTogeyAuLi5FTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIH0sXG4gICAgICAgICAgICAgIGxpbmtfdGV4dDogeyAuLi5FTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIH0sXG4gICAgICAgICAgICAgIGxpbmtfdXJsOiB7IC4uLkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkcgfSxcbiAgICAgICAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVGVybVRvRGVncmVlKFxuICAgIHRlcm06IFdwVGVybTx7XG4gICAgICAgIG5hbWVfZW46IHN0cmluZztcbiAgICAgICAgYWJicmV2aWF0aW9uOiBEZWdyZWVBYmJyZXZpYXRpb25HZXJtYW47XG4gICAgICAgIGFiYnJldmlhdGlvbl9lbjogRGVncmVlQWJicmV2aWF0aW9uRW5nbGlzaDtcbiAgICB9PiB8IG51bGwsXG4pOiBEZWdyZWUge1xuICAgIHJldHVybiB0ZXJtXG4gICAgICAgID8ge1xuICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybScsIHRlcm0uaWQpLFxuICAgICAgICAgICAgICBhYmJyZXZpYXRpb246IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBwcm9wZXJ0eUlkKCd0ZXJtX21ldGEnLCB0ZXJtLmlkLCAnYWJicmV2aWF0aW9uJyksXG4gICAgICAgICAgICAgICAgICBkZTogdGVybS5tZXRhLmFiYnJldmlhdGlvbiA/PyAnJyxcbiAgICAgICAgICAgICAgICAgIGVuOiB0ZXJtLm1ldGEuYWJicmV2aWF0aW9uX2VuID8/ICcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICBpZDogcHJvcGVydHlJZCgndGVybScsIHRlcm0uaWQsICduYW1lJyksXG4gICAgICAgICAgICAgICAgICBkZTogdGVybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZW46IHRlcm0ubWV0YS5uYW1lX2VuID8/ICcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICAgYWJicmV2aWF0aW9uOiB7IC4uLkVNUFRZX01VTFRJTElOR1VBTF9TVFJJTkcgfSxcbiAgICAgICAgICAgICAgbmFtZTogeyAuLi5FTVBUWV9NVUxUSUxJTkdVQUxfU1RSSU5HIH0sXG4gICAgICAgICAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF9yZWY7XG5cbi8vIFNob3VsZCBiZSBubyBpbXBvcnRzIGhlcmUhXG4vLyBTb21lIHRoaW5ncyB0aGF0IHNob3VsZCBiZSBldmFsdWF0ZWQgYmVmb3JlIGFsbCBlbHNlLi4uXG4vLyBXZSBvbmx5IHdhbnQgdG8ga25vdyBpZiBub24tcG9seWZpbGxlZCBzeW1ib2xzIGFyZSBhdmFpbGFibGVcbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZlxuLyojX19QVVJFX18qL1xuU3ltYm9sKFwieFwiKSA9PT0gXCJzeW1ib2xcIjtcbnZhciBoYXNNYXAgPSB0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiO1xudmFyIGhhc1NldCA9IHR5cGVvZiBTZXQgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgaGFzUHJveGllcyA9IHR5cGVvZiBQcm94eSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgUHJveHkucmV2b2NhYmxlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiO1xuLyoqXHJcbiAqIFRoZSBzZW50aW5lbCB2YWx1ZSByZXR1cm5lZCBieSBwcm9kdWNlcnMgdG8gcmVwbGFjZSB0aGUgZHJhZnQgd2l0aCB1bmRlZmluZWQuXHJcbiAqL1xuXG52YXIgTk9USElORyA9IGhhc1N5bWJvbCA/XG4vKiNfX1BVUkVfXyovXG5TeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKSA6IChfcmVmID0ge30sIF9yZWZbXCJpbW1lci1ub3RoaW5nXCJdID0gdHJ1ZSwgX3JlZik7XG4vKipcclxuICogVG8gbGV0IEltbWVyIHRyZWF0IHlvdXIgY2xhc3MgaW5zdGFuY2VzIGFzIHBsYWluIGltbXV0YWJsZSBvYmplY3RzXHJcbiAqIChhbGJlaXQgd2l0aCBhIGN1c3RvbSBwcm90b3R5cGUpLCB5b3UgbXVzdCBkZWZpbmUgZWl0aGVyIGFuIGluc3RhbmNlIHByb3BlcnR5XHJcbiAqIG9yIGEgc3RhdGljIHByb3BlcnR5IG9uIGVhY2ggb2YgeW91ciBjdXN0b20gY2xhc3Nlcy5cclxuICpcclxuICogT3RoZXJ3aXNlLCB5b3VyIGNsYXNzIGluc3RhbmNlIHdpbGwgbmV2ZXIgYmUgZHJhZnRlZCwgd2hpY2ggbWVhbnMgaXQgd29uJ3QgYmVcclxuICogc2FmZSB0byBtdXRhdGUgaW4gYSBwcm9kdWNlIGNhbGxiYWNrLlxyXG4gKi9cblxudmFyIERSQUZUQUJMRSA9IGhhc1N5bWJvbCA/XG4vKiNfX1BVUkVfXyovXG5TeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpIDogXCJfXyRpbW1lcl9kcmFmdGFibGVcIjtcbnZhciBEUkFGVF9TVEFURSA9IGhhc1N5bWJvbCA/XG4vKiNfX1BVUkVfXyovXG5TeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIikgOiBcIl9fJGltbWVyX3N0YXRlXCI7IC8vIEV2ZW4gYSBwb2x5ZmlsbGVkIFN5bWJvbCBtaWdodCBwcm92aWRlIFN5bWJvbC5pdGVyYXRvclxuXG52YXIgaXRlcmF0b3JTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuXG52YXIgZXJyb3JzID0ge1xuICAwOiBcIklsbGVnYWwgc3RhdGVcIixcbiAgMTogXCJJbW1lciBkcmFmdHMgY2Fubm90IGhhdmUgY29tcHV0ZWQgcHJvcGVydGllc1wiLFxuICAyOiBcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsXG4gIDM6IGZ1bmN0aW9uIF8oZGF0YSkge1xuICAgIHJldHVybiBcIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIgKyBkYXRhO1xuICB9LFxuICA0OiBcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsXG4gIDU6IFwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsXG4gIDY6IFwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsXG4gIDc6IFwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsXG4gIDg6IFwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLFxuICA5OiBcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIixcbiAgMTA6IFwiVGhlIGdpdmVuIGRyYWZ0IGlzIGFscmVhZHkgZmluYWxpemVkXCIsXG4gIDExOiBcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIDEyOiBcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsXG4gIDEzOiBcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLFxuICAxNDogXCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsXG4gIDE1OiBmdW5jdGlvbiBfKHBhdGgpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIiArIHBhdGg7XG4gIH0sXG4gIDE2OiAnU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsXG4gIDE3OiBmdW5jdGlvbiBfKG9wKSB7XG4gICAgcmV0dXJuIFwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIiArIG9wO1xuICB9LFxuICAxODogZnVuY3Rpb24gXyhwbHVnaW4pIHtcbiAgICByZXR1cm4gXCJUaGUgcGx1Z2luIGZvciAnXCIgKyBwbHVnaW4gKyBcIicgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIGBlbmFibGVcIiArIHBsdWdpbiArIFwiKClgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uXCI7XG4gIH0sXG4gIDIwOiBcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIixcbiAgMjE6IGZ1bmN0aW9uIF8odGhpbmcpIHtcbiAgICByZXR1cm4gXCJwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICdcIiArIHRoaW5nICsgXCInXCI7XG4gIH0sXG4gIDIyOiBmdW5jdGlvbiBfKHRoaW5nKSB7XG4gICAgcmV0dXJuIFwiJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIiArIHRoaW5nO1xuICB9LFxuICAyMzogZnVuY3Rpb24gXyh0aGluZykge1xuICAgIHJldHVybiBcIidvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiICsgdGhpbmc7XG4gIH0sXG4gIDI0OiBcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIlxufTtcbmZ1bmN0aW9uIGRpZShlcnJvcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB7XG4gICAgdmFyIGUgPSBlcnJvcnNbZXJyb3JdO1xuICAgIHZhciBtc2cgPSAhZSA/IFwidW5rbm93biBlcnJvciBucjogXCIgKyBlcnJvciA6IHR5cGVvZiBlID09PSBcImZ1bmN0aW9uXCIgPyBlLmFwcGx5KG51bGwsIGFyZ3MpIDogZTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbSW1tZXJdIFwiICsgbXNnKTtcbiAgfVxufVxuXG4vKiogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBJbW1lciBkcmFmdCAqL1xuXG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGlzRHJhZnQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgISF2YWx1ZVtEUkFGVF9TVEFURV07XG59XG4vKiogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBjYW4gYmUgZHJhZnRlZCBieSBJbW1lciAqL1xuXG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGlzRHJhZnRhYmxlKHZhbHVlKSB7XG4gIHZhciBfdmFsdWUkY29uc3RydWN0b3I7XG5cbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNQbGFpbk9iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgISF2YWx1ZVtEUkFGVEFCTEVdIHx8ICEhKChfdmFsdWUkY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX3ZhbHVlJGNvbnN0cnVjdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdmFsdWUkY29uc3RydWN0b3JbRFJBRlRBQkxFXSkgfHwgaXNNYXAodmFsdWUpIHx8IGlzU2V0KHZhbHVlKTtcbn1cbnZhciBvYmplY3RDdG9yU3RyaW5nID1cbi8qI19fUFVSRV9fKi9cbk9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IudG9TdHJpbmcoKTtcbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuXG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIEN0b3IgPSBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgaWYgKEN0b3IgPT09IE9iamVjdCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSBcImZ1bmN0aW9uXCIgJiYgRnVuY3Rpb24udG9TdHJpbmcuY2FsbChDdG9yKSA9PT0gb2JqZWN0Q3RvclN0cmluZztcbn1cbmZ1bmN0aW9uIG9yaWdpbmFsKHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpIGRpZSgyMywgdmFsdWUpO1xuICByZXR1cm4gdmFsdWVbRFJBRlRfU1RBVEVdLmJhc2VfO1xufVxuLyojX19QVVJFX18qL1xuXG52YXIgb3duS2V5cyA9IHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Qub3duS2V5cyA/IFJlZmxlY3Qub3duS2V5cyA6IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICE9PSBcInVuZGVmaW5lZFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKTtcbn0gOlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCkge1xuICAvLyBQb2x5ZmlsbCBuZWVkZWQgZm9yIEhlcm1lcyBhbmQgSUUsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svaGVybWVzL2lzc3Vlcy8yNzRcbiAgdmFyIHJlcyA9IHt9O1xuICBvd25LZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmVzW2tleV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXM7XG59O1xuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXIsIGVudW1lcmFibGVPbmx5KSB7XG4gIGlmIChlbnVtZXJhYmxlT25seSA9PT0gdm9pZCAwKSB7XG4gICAgZW51bWVyYWJsZU9ubHkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChnZXRBcmNodHlwZShvYmopID09PSAwXG4gIC8qIE9iamVjdCAqL1xuICApIHtcbiAgICAgIChlbnVtZXJhYmxlT25seSA/IE9iamVjdC5rZXlzIDogb3duS2V5cykob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFlbnVtZXJhYmxlT25seSB8fCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiKSBpdGVyKGtleSwgb2JqW2tleV0sIG9iaik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBpdGVyKGluZGV4LCBlbnRyeSwgb2JqKTtcbiAgICB9KTtcbiAgfVxufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBnZXRBcmNodHlwZSh0aGluZykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgc3RhdGUgPSB0aGluZ1tEUkFGVF9TVEFURV07XG4gIHJldHVybiBzdGF0ZSA/IHN0YXRlLnR5cGVfID4gMyA/IHN0YXRlLnR5cGVfIC0gNCAvLyBjYXVzZSBPYmplY3QgYW5kIEFycmF5IG1hcCBiYWNrIGZyb20gNCBhbmQgNVxuICA6IHN0YXRlLnR5cGVfIC8vIG90aGVycyBhcmUgdGhlIHNhbWVcbiAgOiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IDFcbiAgLyogQXJyYXkgKi9cbiAgOiBpc01hcCh0aGluZykgPyAyXG4gIC8qIE1hcCAqL1xuICA6IGlzU2V0KHRoaW5nKSA/IDNcbiAgLyogU2V0ICovXG4gIDogMFxuICAvKiBPYmplY3QgKi9cbiAgO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBoYXModGhpbmcsIHByb3ApIHtcbiAgcmV0dXJuIGdldEFyY2h0eXBlKHRoaW5nKSA9PT0gMlxuICAvKiBNYXAgKi9cbiAgPyB0aGluZy5oYXMocHJvcCkgOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpbmcsIHByb3ApO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBnZXQodGhpbmcsIHByb3ApIHtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gZ2V0QXJjaHR5cGUodGhpbmcpID09PSAyXG4gIC8qIE1hcCAqL1xuICA/IHRoaW5nLmdldChwcm9wKSA6IHRoaW5nW3Byb3BdO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBzZXQodGhpbmcsIHByb3BPck9sZFZhbHVlLCB2YWx1ZSkge1xuICB2YXIgdCA9IGdldEFyY2h0eXBlKHRoaW5nKTtcbiAgaWYgKHQgPT09IDJcbiAgLyogTWFwICovXG4gICkgdGhpbmcuc2V0KHByb3BPck9sZFZhbHVlLCB2YWx1ZSk7ZWxzZSBpZiAodCA9PT0gM1xuICAvKiBTZXQgKi9cbiAgKSB7XG4gICAgICB0aGluZy5kZWxldGUocHJvcE9yT2xkVmFsdWUpO1xuICAgICAgdGhpbmcuYWRkKHZhbHVlKTtcbiAgICB9IGVsc2UgdGhpbmdbcHJvcE9yT2xkVmFsdWVdID0gdmFsdWU7XG59XG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9jNjk5MDRhNTExYjkwMDI2NjkzNTE2ODIyMzA2M2RkODc3MmRmYzQwL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvc2hhbGxvd0VxdWFsLmpzXG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cbi8qI19fUFVSRV9fKi9cblxuZnVuY3Rpb24gaXNNYXAodGFyZ2V0KSB7XG4gIHJldHVybiBoYXNNYXAgJiYgdGFyZ2V0IGluc3RhbmNlb2YgTWFwO1xufVxuLyojX19QVVJFX18qL1xuXG5mdW5jdGlvbiBpc1NldCh0YXJnZXQpIHtcbiAgcmV0dXJuIGhhc1NldCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBTZXQ7XG59XG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIGxhdGVzdChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuY29weV8gfHwgc3RhdGUuYmFzZV87XG59XG4vKiNfX1BVUkVfXyovXG5cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5KGJhc2UpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZSkpIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChiYXNlKTtcbiAgdmFyIGRlc2NyaXB0b3JzID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiYXNlKTtcbiAgZGVsZXRlIGRlc2NyaXB0b3JzW0RSQUZUX1NUQVRFXTtcbiAgdmFyIGtleXMgPSBvd25LZXlzKGRlc2NyaXB0b3JzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgZGVzYyA9IGRlc2NyaXB0b3JzW2tleV07XG5cbiAgICBpZiAoZGVzYy53cml0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICAgICAgZGVzYy5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIH0gLy8gbGlrZSBvYmplY3QuYXNzaWduLCB3ZSB3aWxsIHJlYWQgYW55IF9vd25fLCBnZXQvc2V0IGFjY2Vzc29ycy4gVGhpcyBoZWxwcyBpbiBkZWFsaW5nXG4gICAgLy8gd2l0aCBsaWJyYXJpZXMgdGhhdCB0cmFwIHZhbHVlcywgbGlrZSBtb2J4IG9yIHZ1ZVxuICAgIC8vIHVubGlrZSBvYmplY3QuYXNzaWduLCBub24tZW51bWVyYWJsZXMgd2lsbCBiZSBjb3BpZWQgYXMgd2VsbFxuXG5cbiAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIGRlc2NyaXB0b3JzW2tleV0gPSB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGRlc2MuZW51bWVyYWJsZSxcbiAgICAgIHZhbHVlOiBiYXNlW2tleV1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2UpLCBkZXNjcmlwdG9ycyk7XG59XG5mdW5jdGlvbiBmcmVlemUob2JqLCBkZWVwKSB7XG4gIGlmIChkZWVwID09PSB2b2lkIDApIHtcbiAgICBkZWVwID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNGcm96ZW4ob2JqKSB8fCBpc0RyYWZ0KG9iaikgfHwgIWlzRHJhZnRhYmxlKG9iaikpIHJldHVybiBvYmo7XG5cbiAgaWYgKGdldEFyY2h0eXBlKG9iaikgPiAxXG4gIC8qIE1hcCBvciBTZXQgKi9cbiAgKSB7XG4gICAgICBvYmouc2V0ID0gb2JqLmFkZCA9IG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBkb250TXV0YXRlRnJvemVuQ29sbGVjdGlvbnM7XG4gICAgfVxuXG4gIE9iamVjdC5mcmVlemUob2JqKTtcbiAgaWYgKGRlZXApIGVhY2gob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBmcmVlemUodmFsdWUsIHRydWUpO1xuICB9LCB0cnVlKTtcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zKCkge1xuICBkaWUoMik7XG59XG5cbmZ1bmN0aW9uIGlzRnJvemVuKG9iaikge1xuICBpZiAob2JqID09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHRydWU7IC8vIFNlZSAjNjAwLCBJRSBkaWVzIG9uIG5vbi1vYmplY3RzIGluIE9iamVjdC5pc0Zyb3plblxuXG4gIHJldHVybiBPYmplY3QuaXNGcm96ZW4ob2JqKTtcbn1cblxuLyoqIFBsdWdpbiB1dGlsaXRpZXMgKi9cblxudmFyIHBsdWdpbnMgPSB7fTtcbmZ1bmN0aW9uIGdldFBsdWdpbihwbHVnaW5LZXkpIHtcbiAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbcGx1Z2luS2V5XTtcblxuICBpZiAoIXBsdWdpbikge1xuICAgIGRpZSgxOCwgcGx1Z2luS2V5KTtcbiAgfSAvLyBAdHMtaWdub3JlXG5cblxuICByZXR1cm4gcGx1Z2luO1xufVxuZnVuY3Rpb24gbG9hZFBsdWdpbihwbHVnaW5LZXksIGltcGxlbWVudGF0aW9uKSB7XG4gIGlmICghcGx1Z2luc1twbHVnaW5LZXldKSBwbHVnaW5zW3BsdWdpbktleV0gPSBpbXBsZW1lbnRhdGlvbjtcbn1cblxudmFyIGN1cnJlbnRTY29wZTtcbmZ1bmN0aW9uIGdldEN1cnJlbnRTY29wZSgpIHtcbiAgaWYgKCAhY3VycmVudFNjb3BlKSBkaWUoMCk7XG4gIHJldHVybiBjdXJyZW50U2NvcGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjb3BlKHBhcmVudF8sIGltbWVyXykge1xuICByZXR1cm4ge1xuICAgIGRyYWZ0c186IFtdLFxuICAgIHBhcmVudF86IHBhcmVudF8sXG4gICAgaW1tZXJfOiBpbW1lcl8sXG4gICAgLy8gV2hlbmV2ZXIgdGhlIG1vZGlmaWVkIGRyYWZ0IGNvbnRhaW5zIGEgZHJhZnQgZnJvbSBhbm90aGVyIHNjb3BlLCB3ZVxuICAgIC8vIG5lZWQgdG8gcHJldmVudCBhdXRvLWZyZWV6aW5nIHNvIHRoZSB1bm93bmVkIGRyYWZ0IGNhbiBiZSBmaW5hbGl6ZWQuXG4gICAgY2FuQXV0b0ZyZWV6ZV86IHRydWUsXG4gICAgdW5maW5hbGl6ZWREcmFmdHNfOiAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVBhdGNoZXNJblNjb3BlKHNjb3BlLCBwYXRjaExpc3RlbmVyKSB7XG4gIGlmIChwYXRjaExpc3RlbmVyKSB7XG4gICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKTsgLy8gYXNzZXJ0IHdlIGhhdmUgdGhlIHBsdWdpblxuXG4gICAgc2NvcGUucGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5pbnZlcnNlUGF0Y2hlc18gPSBbXTtcbiAgICBzY29wZS5wYXRjaExpc3RlbmVyXyA9IHBhdGNoTGlzdGVuZXI7XG4gIH1cbn1cbmZ1bmN0aW9uIHJldm9rZVNjb3BlKHNjb3BlKSB7XG4gIGxlYXZlU2NvcGUoc2NvcGUpO1xuICBzY29wZS5kcmFmdHNfLmZvckVhY2gocmV2b2tlRHJhZnQpOyAvLyBAdHMtaWdub3JlXG5cbiAgc2NvcGUuZHJhZnRzXyA9IG51bGw7XG59XG5mdW5jdGlvbiBsZWF2ZVNjb3BlKHNjb3BlKSB7XG4gIGlmIChzY29wZSA9PT0gY3VycmVudFNjb3BlKSB7XG4gICAgY3VycmVudFNjb3BlID0gc2NvcGUucGFyZW50XztcbiAgfVxufVxuZnVuY3Rpb24gZW50ZXJTY29wZShpbW1lcikge1xuICByZXR1cm4gY3VycmVudFNjb3BlID0gY3JlYXRlU2NvcGUoY3VycmVudFNjb3BlLCBpbW1lcik7XG59XG5cbmZ1bmN0aW9uIHJldm9rZURyYWZ0KGRyYWZ0KSB7XG4gIHZhciBzdGF0ZSA9IGRyYWZ0W0RSQUZUX1NUQVRFXTtcbiAgaWYgKHN0YXRlLnR5cGVfID09PSAwXG4gIC8qIFByb3h5T2JqZWN0ICovXG4gIHx8IHN0YXRlLnR5cGVfID09PSAxXG4gIC8qIFByb3h5QXJyYXkgKi9cbiAgKSBzdGF0ZS5yZXZva2VfKCk7ZWxzZSBzdGF0ZS5yZXZva2VkXyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZXN1bHQocmVzdWx0LCBzY29wZSkge1xuICBzY29wZS51bmZpbmFsaXplZERyYWZ0c18gPSBzY29wZS5kcmFmdHNfLmxlbmd0aDtcbiAgdmFyIGJhc2VEcmFmdCA9IHNjb3BlLmRyYWZ0c19bMF07XG4gIHZhciBpc1JlcGxhY2VkID0gcmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0ICE9PSBiYXNlRHJhZnQ7XG4gIGlmICghc2NvcGUuaW1tZXJfLnVzZVByb3hpZXNfKSBnZXRQbHVnaW4oXCJFUzVcIikud2lsbEZpbmFsaXplRVM1XyhzY29wZSwgcmVzdWx0LCBpc1JlcGxhY2VkKTtcblxuICBpZiAoaXNSZXBsYWNlZCkge1xuICAgIGlmIChiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLm1vZGlmaWVkXykge1xuICAgICAgcmV2b2tlU2NvcGUoc2NvcGUpO1xuICAgICAgZGllKDQpO1xuICAgIH1cblxuICAgIGlmIChpc0RyYWZ0YWJsZShyZXN1bHQpKSB7XG4gICAgICAvLyBGaW5hbGl6ZSB0aGUgcmVzdWx0IGluIGNhc2UgaXQgY29udGFpbnMgKG9yIGlzKSBhIHN1YnNldCBvZiB0aGUgZHJhZnQuXG4gICAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgcmVzdWx0KTtcbiAgICAgIGlmICghc2NvcGUucGFyZW50XykgbWF5YmVGcmVlemUoc2NvcGUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgICBnZXRQbHVnaW4oXCJQYXRjaGVzXCIpLmdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlRHJhZnRbRFJBRlRfU1RBVEVdLmJhc2VfLCByZXN1bHQsIHNjb3BlLnBhdGNoZXNfLCBzY29wZS5pbnZlcnNlUGF0Y2hlc18pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5hbGl6ZSB0aGUgYmFzZSBkcmFmdC5cbiAgICByZXN1bHQgPSBmaW5hbGl6ZShzY29wZSwgYmFzZURyYWZ0LCBbXSk7XG4gIH1cblxuICByZXZva2VTY29wZShzY29wZSk7XG5cbiAgaWYgKHNjb3BlLnBhdGNoZXNfKSB7XG4gICAgc2NvcGUucGF0Y2hMaXN0ZW5lcl8oc2NvcGUucGF0Y2hlc18sIHNjb3BlLmludmVyc2VQYXRjaGVzXyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICE9PSBOT1RISU5HID8gcmVzdWx0IDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5hbGl6ZShyb290U2NvcGUsIHZhbHVlLCBwYXRoKSB7XG4gIC8vIERvbid0IHJlY3Vyc2UgaW4gdGhvIHJlY3Vyc2l2ZSBkYXRhIHN0cnVjdHVyZXNcbiAgaWYgKGlzRnJvemVuKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICB2YXIgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07IC8vIEEgcGxhaW4gb2JqZWN0LCBtaWdodCBuZWVkIGZyZWV6aW5nLCBtaWdodCBjb250YWluIGRyYWZ0c1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICBlYWNoKHZhbHVlLCBmdW5jdGlvbiAoa2V5LCBjaGlsZFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHN0YXRlLCB2YWx1ZSwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKTtcbiAgICB9LCB0cnVlIC8vIFNlZSAjNTkwLCBkb24ndCByZWN1cnNlIGludG8gbm9uLWVudW1lcmFibGUgb2Ygbm9uIGRyYWZ0ZWQgb2JqZWN0c1xuICAgICk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IC8vIE5ldmVyIGZpbmFsaXplIGRyYWZ0cyBvd25lZCBieSBhbm90aGVyIHNjb3BlLlxuXG5cbiAgaWYgKHN0YXRlLnNjb3BlXyAhPT0gcm9vdFNjb3BlKSByZXR1cm4gdmFsdWU7IC8vIFVubW9kaWZpZWQgZHJhZnQsIHJldHVybiB0aGUgKGZyb3plbikgb3JpZ2luYWxcblxuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgc3RhdGUuYmFzZV8sIHRydWUpO1xuICAgIHJldHVybiBzdGF0ZS5iYXNlXztcbiAgfSAvLyBOb3QgZmluYWxpemVkIHlldCwgbGV0J3MgZG8gdGhhdCBub3dcblxuXG4gIGlmICghc3RhdGUuZmluYWxpemVkXykge1xuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIHN0YXRlLnNjb3BlXy51bmZpbmFsaXplZERyYWZ0c18tLTtcbiAgICB2YXIgcmVzdWx0ID0gLy8gRm9yIEVTNSwgY3JlYXRlIGEgZ29vZCBjb3B5IGZyb20gdGhlIGRyYWZ0IGZpcnN0LCB3aXRoIGFkZGVkIGtleXMgYW5kIHdpdGhvdXQgZGVsZXRlZCBrZXlzLlxuICAgIHN0YXRlLnR5cGVfID09PSA0XG4gICAgLyogRVM1T2JqZWN0ICovXG4gICAgfHwgc3RhdGUudHlwZV8gPT09IDVcbiAgICAvKiBFUzVBcnJheSAqL1xuICAgID8gc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShzdGF0ZS5kcmFmdF8pIDogc3RhdGUuY29weV87IC8vIEZpbmFsaXplIGFsbCBjaGlsZHJlbiBvZiB0aGUgY29weVxuICAgIC8vIEZvciBzZXRzIHdlIGNsb25lIGJlZm9yZSBpdGVyYXRpbmcsIG90aGVyd2lzZSB3ZSBjYW4gZ2V0IGluIGVuZGxlc3MgbG9vcCBkdWUgdG8gbW9kaWZ5aW5nIGR1cmluZyBpdGVyYXRpb24sIHNlZSAjNjI4XG4gICAgLy8gQWx0aG91Z2ggdGhlIG9yaWdpbmFsIHRlc3QgY2FzZSBkb2Vzbid0IHNlZW0gdmFsaWQgYW55d2F5LCBzbyBpZiB0aGlzIGluIHRoZSB3YXkgd2UgY2FuIHR1cm4gdGhlIG5leHQgbGluZVxuICAgIC8vIGJhY2sgdG8gZWFjaChyZXN1bHQsIC4uLi4pXG5cbiAgICBlYWNoKHN0YXRlLnR5cGVfID09PSAzXG4gICAgLyogU2V0ICovXG4gICAgPyBuZXcgU2V0KHJlc3VsdCkgOiByZXN1bHQsIGZ1bmN0aW9uIChrZXksIGNoaWxkVmFsdWUpIHtcbiAgICAgIHJldHVybiBmaW5hbGl6ZVByb3BlcnR5KHJvb3RTY29wZSwgc3RhdGUsIHJlc3VsdCwga2V5LCBjaGlsZFZhbHVlLCBwYXRoKTtcbiAgICB9KTsgLy8gZXZlcnl0aGluZyBpbnNpZGUgaXMgZnJvemVuLCB3ZSBjYW4gZnJlZXplIGhlcmVcblxuICAgIG1heWJlRnJlZXplKHJvb3RTY29wZSwgcmVzdWx0LCBmYWxzZSk7IC8vIGZpcnN0IHRpbWUgZmluYWxpemluZywgbGV0J3MgY3JlYXRlIHRob3NlIHBhdGNoZXNcblxuICAgIGlmIChwYXRoICYmIHJvb3RTY29wZS5wYXRjaGVzXykge1xuICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVBhdGNoZXNfKHN0YXRlLCBwYXRoLCByb290U2NvcGUucGF0Y2hlc18sIHJvb3RTY29wZS5pbnZlcnNlUGF0Y2hlc18pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5jb3B5Xztcbn1cblxuZnVuY3Rpb24gZmluYWxpemVQcm9wZXJ0eShyb290U2NvcGUsIHBhcmVudFN0YXRlLCB0YXJnZXRPYmplY3QsIHByb3AsIGNoaWxkVmFsdWUsIHJvb3RQYXRoKSB7XG4gIGlmICggY2hpbGRWYWx1ZSA9PT0gdGFyZ2V0T2JqZWN0KSBkaWUoNSk7XG5cbiAgaWYgKGlzRHJhZnQoY2hpbGRWYWx1ZSkpIHtcbiAgICB2YXIgcGF0aCA9IHJvb3RQYXRoICYmIHBhcmVudFN0YXRlICYmIHBhcmVudFN0YXRlLnR5cGVfICE9PSAzXG4gICAgLyogU2V0ICovXG4gICAgJiYgLy8gU2V0IG9iamVjdHMgYXJlIGF0b21pYyBzaW5jZSB0aGV5IGhhdmUgbm8ga2V5cy5cbiAgICAhaGFzKHBhcmVudFN0YXRlLmFzc2lnbmVkXywgcHJvcCkgLy8gU2tpcCBkZWVwIHBhdGNoZXMgZm9yIGFzc2lnbmVkIGtleXMuXG4gICAgPyByb290UGF0aC5jb25jYXQocHJvcCkgOiB1bmRlZmluZWQ7IC8vIERyYWZ0cyBvd25lZCBieSBgc2NvcGVgIGFyZSBmaW5hbGl6ZWQgaGVyZS5cblxuICAgIHZhciByZXMgPSBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUsIHBhdGgpO1xuICAgIHNldCh0YXJnZXRPYmplY3QsIHByb3AsIHJlcyk7IC8vIERyYWZ0cyBmcm9tIGFub3RoZXIgc2NvcGUgbXVzdCBwcmV2ZW50ZWQgdG8gYmUgZnJvemVuXG4gICAgLy8gaWYgd2UgZ290IGEgZHJhZnQgYmFjayBmcm9tIGZpbmFsaXplLCB3ZSdyZSBpbiBhIG5lc3RlZCBwcm9kdWNlIGFuZCBzaG91bGRuJ3QgZnJlZXplXG5cbiAgICBpZiAoaXNEcmFmdChyZXMpKSB7XG4gICAgICByb290U2NvcGUuY2FuQXV0b0ZyZWV6ZV8gPSBmYWxzZTtcbiAgICB9IGVsc2UgcmV0dXJuO1xuICB9IC8vIFNlYXJjaCBuZXcgb2JqZWN0cyBmb3IgdW5maW5hbGl6ZWQgZHJhZnRzLiBGcm96ZW4gb2JqZWN0cyBzaG91bGQgbmV2ZXIgY29udGFpbiBkcmFmdHMuXG5cblxuICBpZiAoaXNEcmFmdGFibGUoY2hpbGRWYWx1ZSkgJiYgIWlzRnJvemVuKGNoaWxkVmFsdWUpKSB7XG4gICAgaWYgKCFyb290U2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHJvb3RTY29wZS51bmZpbmFsaXplZERyYWZ0c18gPCAxKSB7XG4gICAgICAvLyBvcHRpbWl6YXRpb246IGlmIGFuIG9iamVjdCBpcyBub3QgYSBkcmFmdCwgYW5kIHdlIGRvbid0IGhhdmUgdG9cbiAgICAgIC8vIGRlZXBmcmVlemUgZXZlcnl0aGluZywgYW5kIHdlIGFyZSBzdXJlIHRoYXQgbm8gZHJhZnRzIGFyZSBsZWZ0IGluIHRoZSByZW1haW5pbmcgb2JqZWN0XG4gICAgICAvLyBjYXVzZSB3ZSBzYXcgYW5kIGZpbmFsaXplZCBhbGwgZHJhZnRzIGFscmVhZHk7IHdlIGNhbiBzdG9wIHZpc2l0aW5nIHRoZSByZXN0IG9mIHRoZSB0cmVlLlxuICAgICAgLy8gVGhpcyBiZW5lZml0cyBlc3BlY2lhbGx5IGFkZGluZyBsYXJnZSBkYXRhIHRyZWUncyB3aXRob3V0IGZ1cnRoZXIgcHJvY2Vzc2luZy5cbiAgICAgIC8vIFNlZSBhZGQtZGF0YS5qcyBwZXJmIHRlc3RcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaW5hbGl6ZShyb290U2NvcGUsIGNoaWxkVmFsdWUpOyAvLyBpbW1lciBkZWVwIGZyZWV6ZXMgcGxhaW4gb2JqZWN0cywgc28gaWYgdGhlcmUgaXMgbm8gcGFyZW50IHN0YXRlLCB3ZSBmcmVlemUgYXMgd2VsbFxuXG4gICAgaWYgKCFwYXJlbnRTdGF0ZSB8fCAhcGFyZW50U3RhdGUuc2NvcGVfLnBhcmVudF8pIG1heWJlRnJlZXplKHJvb3RTY29wZSwgY2hpbGRWYWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVGcmVlemUoc2NvcGUsIHZhbHVlLCBkZWVwKSB7XG4gIGlmIChkZWVwID09PSB2b2lkIDApIHtcbiAgICBkZWVwID0gZmFsc2U7XG4gIH1cblxuICBpZiAoc2NvcGUuaW1tZXJfLmF1dG9GcmVlemVfICYmIHNjb3BlLmNhbkF1dG9GcmVlemVfKSB7XG4gICAgZnJlZXplKHZhbHVlLCBkZWVwKTtcbiAgfVxufVxuXG4vKipcclxuICogUmV0dXJucyBhIG5ldyBkcmFmdCBvZiB0aGUgYGJhc2VgIG9iamVjdC5cclxuICpcclxuICogVGhlIHNlY29uZCBhcmd1bWVudCBpcyB0aGUgcGFyZW50IGRyYWZ0LXN0YXRlICh1c2VkIGludGVybmFsbHkpLlxyXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUHJveHlQcm94eShiYXNlLCBwYXJlbnQpIHtcbiAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGJhc2UpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgdHlwZV86IGlzQXJyYXkgPyAxXG4gICAgLyogUHJveHlBcnJheSAqL1xuICAgIDogMFxuICAgIC8qIFByb3h5T2JqZWN0ICovXG4gICAgLFxuICAgIC8vIFRyYWNrIHdoaWNoIHByb2R1Y2UgY2FsbCB0aGlzIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICBzY29wZV86IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKSxcbiAgICAvLyBUcnVlIGZvciBib3RoIHNoYWxsb3cgYW5kIGRlZXAgY2hhbmdlcy5cbiAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgIC8vIFVzZWQgZHVyaW5nIGZpbmFsaXphdGlvbi5cbiAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAvLyBUcmFjayB3aGljaCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBhc3NpZ25lZCAodHJ1ZSkgb3IgZGVsZXRlZCAoZmFsc2UpLlxuICAgIGFzc2lnbmVkXzoge30sXG4gICAgLy8gVGhlIHBhcmVudCBkcmFmdCBzdGF0ZS5cbiAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgLy8gVGhlIGJhc2Ugc3RhdGUuXG4gICAgYmFzZV86IGJhc2UsXG4gICAgLy8gVGhlIGJhc2UgcHJveHkuXG4gICAgZHJhZnRfOiBudWxsLFxuICAgIC8vIFRoZSBiYXNlIGNvcHkgd2l0aCBhbnkgdXBkYXRlZCB2YWx1ZXMuXG4gICAgY29weV86IG51bGwsXG4gICAgLy8gQ2FsbGVkIGJ5IHRoZSBgcHJvZHVjZWAgZnVuY3Rpb24uXG4gICAgcmV2b2tlXzogbnVsbCxcbiAgICBpc01hbnVhbF86IGZhbHNlXG4gIH07IC8vIHRoZSB0cmFwcyBtdXN0IHRhcmdldCBzb21ldGhpbmcsIGEgYml0IGxpa2UgdGhlICdyZWFsJyBiYXNlLlxuICAvLyBidXQgYWxzbywgd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRldGVybWluZSBmcm9tIHRoZSB0YXJnZXQgd2hhdCB0aGUgcmVsZXZhbnQgc3RhdGUgaXNcbiAgLy8gKHRvIGF2b2lkIGNyZWF0aW5nIHRyYXBzIHBlciBpbnN0YW5jZSB0byBjYXB0dXJlIHRoZSBzdGF0ZSBpbiBjbG9zdXJlLFxuICAvLyBhbmQgdG8gYXZvaWQgY3JlYXRpbmcgd2VpcmQgaGlkZGVuIHByb3BlcnRpZXMgYXMgd2VsbClcbiAgLy8gU28gdGhlIHRyaWNrIGlzIHRvIHVzZSAnc3RhdGUnIGFzIHRoZSBhY3R1YWwgJ3RhcmdldCchIChhbmQgbWFrZSBzdXJlIHdlIGludGVyY2VwdCBldmVyeXRoaW5nKVxuICAvLyBOb3RlIHRoYXQgaW4gdGhlIGNhc2Ugb2YgYW4gYXJyYXksIHdlIHB1dCB0aGUgc3RhdGUgaW4gYW4gYXJyYXkgdG8gaGF2ZSBiZXR0ZXIgUmVmbGVjdCBkZWZhdWx0cyBvb3RiXG5cbiAgdmFyIHRhcmdldCA9IHN0YXRlO1xuICB2YXIgdHJhcHMgPSBvYmplY3RUcmFwcztcblxuICBpZiAoaXNBcnJheSkge1xuICAgIHRhcmdldCA9IFtzdGF0ZV07XG4gICAgdHJhcHMgPSBhcnJheVRyYXBzO1xuICB9XG5cbiAgdmFyIF9Qcm94eSRyZXZvY2FibGUgPSBQcm94eS5yZXZvY2FibGUodGFyZ2V0LCB0cmFwcyksXG4gICAgICByZXZva2UgPSBfUHJveHkkcmV2b2NhYmxlLnJldm9rZSxcbiAgICAgIHByb3h5ID0gX1Byb3h5JHJldm9jYWJsZS5wcm94eTtcblxuICBzdGF0ZS5kcmFmdF8gPSBwcm94eTtcbiAgc3RhdGUucmV2b2tlXyA9IHJldm9rZTtcbiAgcmV0dXJuIHByb3h5O1xufVxuLyoqXHJcbiAqIE9iamVjdCBkcmFmdHNcclxuICovXG5cbnZhciBvYmplY3RUcmFwcyA9IHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoc3RhdGUsIHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gRFJBRlRfU1RBVEUpIHJldHVybiBzdGF0ZTtcbiAgICB2YXIgc291cmNlID0gbGF0ZXN0KHN0YXRlKTtcblxuICAgIGlmICghaGFzKHNvdXJjZSwgcHJvcCkpIHtcbiAgICAgIC8vIG5vbi1leGlzdGluZyBvciBub24tb3duIHByb3BlcnR5Li4uXG4gICAgICByZXR1cm4gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gc291cmNlW3Byb3BdO1xuXG4gICAgaWYgKHN0YXRlLmZpbmFsaXplZF8gfHwgIWlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gLy8gQ2hlY2sgZm9yIGV4aXN0aW5nIGRyYWZ0IGluIG1vZGlmaWVkIHN0YXRlLlxuICAgIC8vIEFzc2lnbmVkIHZhbHVlcyBhcmUgbmV2ZXIgZHJhZnRlZC4gVGhpcyBjYXRjaGVzIGFueSBkcmFmdHMgd2UgY3JlYXRlZCwgdG9vLlxuXG5cbiAgICBpZiAodmFsdWUgPT09IHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApKSB7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV9bcHJvcF0gPSBjcmVhdGVQcm94eShzdGF0ZS5zY29wZV8uaW1tZXJfLCB2YWx1ZSwgc3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbiBoYXMoc3RhdGUsIHByb3ApIHtcbiAgICByZXR1cm4gcHJvcCBpbiBsYXRlc3Qoc3RhdGUpO1xuICB9LFxuICBvd25LZXlzOiBmdW5jdGlvbiBvd25LZXlzKHN0YXRlKSB7XG4gICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyhsYXRlc3Qoc3RhdGUpKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUsIHByb3BcbiAgLyogc3RyaWN0bHkgbm90LCBidXQgaGVscHMgVFMgKi9cbiAgLCB2YWx1ZSkge1xuICAgIHZhciBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhsYXRlc3Qoc3RhdGUpLCBwcm9wKTtcblxuICAgIGlmIChkZXNjID09PSBudWxsIHx8IGRlc2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlc2Muc2V0KSB7XG4gICAgICAvLyBzcGVjaWFsIGNhc2U6IGlmIHRoaXMgd3JpdGUgaXMgY2FwdHVyZWQgYnkgYSBzZXR0ZXIsIHdlIGhhdmVcbiAgICAgIC8vIHRvIHRyaWdnZXIgaXQgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gICAgICBkZXNjLnNldC5jYWxsKHN0YXRlLmRyYWZ0XywgdmFsdWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8pIHtcbiAgICAgIC8vIHRoZSBsYXN0IGNoZWNrIGlzIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGRpc3Rpbmd1aXNoIHNldHRpbmcgYSBub24tZXhpc3RpbmcgdG8gdW5kZWZpbmVkICh3aGljaCBpcyBhIGNoYW5nZSlcbiAgICAgIC8vIGZyb20gc2V0dGluZyBhbiBleGlzdGluZyBwcm9wZXJ0eSB3aXRoIHZhbHVlIHVuZGVmaW5lZCB0byB1bmRlZmluZWQgKHdoaWNoIGlzIG5vdCBhIGNoYW5nZSlcbiAgICAgIHZhciBjdXJyZW50ID0gcGVlayhsYXRlc3Qoc3RhdGUpLCBwcm9wKTsgLy8gc3BlY2lhbCBjYXNlLCBpZiB3ZSBhc3NpZ25pbmcgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIGEgZHJhZnQsIHdlIGNhbiBpZ25vcmUgdGhlIGFzc2lnbm1lbnRcblxuICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFtEUkFGVF9TVEFURV07XG5cbiAgICAgIGlmIChjdXJyZW50U3RhdGUgJiYgY3VycmVudFN0YXRlLmJhc2VfID09PSB2YWx1ZSkge1xuICAgICAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF9bcHJvcF0gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpcyh2YWx1ZSwgY3VycmVudCkgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQgfHwgaGFzKHN0YXRlLmJhc2VfLCBwcm9wKSkpIHJldHVybiB0cnVlO1xuICAgICAgcHJlcGFyZUNvcHkoc3RhdGUpO1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jb3B5X1twcm9wXSA9PT0gdmFsdWUgJiYgKCAvLyBzcGVjaWFsIGNhc2U6IGhhbmRsZSBuZXcgcHJvcHMgd2l0aCB2YWx1ZSAndW5kZWZpbmVkJ1xuICAgIHZhbHVlICE9PSB1bmRlZmluZWQgfHwgcHJvcCBpbiBzdGF0ZS5jb3B5XykgfHwgLy8gc3BlY2lhbCBjYXNlOiBOYU5cbiAgICBOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc05hTihzdGF0ZS5jb3B5X1twcm9wXSkpIHJldHVybiB0cnVlOyAvLyBAdHMtaWdub3JlXG5cbiAgICBzdGF0ZS5jb3B5X1twcm9wXSA9IHZhbHVlO1xuICAgIHN0YXRlLmFzc2lnbmVkX1twcm9wXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eShzdGF0ZSwgcHJvcCkge1xuICAgIC8vIFRoZSBgdW5kZWZpbmVkYCBjaGVjayBpcyBhIGZhc3QgcGF0aCBmb3IgcHJlLWV4aXN0aW5nIGtleXMuXG4gICAgaWYgKHBlZWsoc3RhdGUuYmFzZV8sIHByb3ApICE9PSB1bmRlZmluZWQgfHwgcHJvcCBpbiBzdGF0ZS5iYXNlXykge1xuICAgICAgc3RhdGUuYXNzaWduZWRfW3Byb3BdID0gZmFsc2U7XG4gICAgICBwcmVwYXJlQ29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFuIG9yaWdpbmFsbHkgbm90IGFzc2lnbmVkIHByb3BlcnR5IHdhcyBkZWxldGVkXG4gICAgICBkZWxldGUgc3RhdGUuYXNzaWduZWRfW3Byb3BdO1xuICAgIH0gLy8gQHRzLWlnbm9yZVxuXG5cbiAgICBpZiAoc3RhdGUuY29weV8pIGRlbGV0ZSBzdGF0ZS5jb3B5X1twcm9wXTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gTm90ZTogV2UgbmV2ZXIgY29lcmNlIGBkZXNjLnZhbHVlYCBpbnRvIGFuIEltbWVyIGRyYWZ0LCBiZWNhdXNlIHdlIGNhbid0IG1ha2VcbiAgLy8gdGhlIHNhbWUgZ3VhcmFudGVlIGluIEVTNSBtb2RlLlxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzdGF0ZSwgcHJvcCkge1xuICAgIHZhciBvd25lciA9IGxhdGVzdChzdGF0ZSk7XG4gICAgdmFyIGRlc2MgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvd25lciwgcHJvcCk7XG4gICAgaWYgKCFkZXNjKSByZXR1cm4gZGVzYztcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHN0YXRlLnR5cGVfICE9PSAxXG4gICAgICAvKiBQcm94eUFycmF5ICovXG4gICAgICB8fCBwcm9wICE9PSBcImxlbmd0aFwiLFxuICAgICAgZW51bWVyYWJsZTogZGVzYy5lbnVtZXJhYmxlLFxuICAgICAgdmFsdWU6IG93bmVyW3Byb3BdXG4gICAgfTtcbiAgfSxcbiAgZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KCkge1xuICAgIGRpZSgxMSk7XG4gIH0sXG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihzdGF0ZSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc3RhdGUuYmFzZV8pO1xuICB9LFxuICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoKSB7XG4gICAgZGllKDEyKTtcbiAgfVxufTtcbi8qKlxyXG4gKiBBcnJheSBkcmFmdHNcclxuICovXG5cbnZhciBhcnJheVRyYXBzID0ge307XG5lYWNoKG9iamVjdFRyYXBzLCBmdW5jdGlvbiAoa2V5LCBmbikge1xuICAvLyBAdHMtaWdub3JlXG4gIGFycmF5VHJhcHNba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICBhcmd1bWVudHNbMF0gPSBhcmd1bWVudHNbMF1bMF07XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KTtcblxuYXJyYXlUcmFwcy5kZWxldGVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChzdGF0ZSwgcHJvcCkge1xuICBpZiAoIGlzTmFOKHBhcnNlSW50KHByb3ApKSkgZGllKDEzKTsgLy8gQHRzLWlnbm9yZVxuXG4gIHJldHVybiBhcnJheVRyYXBzLnNldC5jYWxsKHRoaXMsIHN0YXRlLCBwcm9wLCB1bmRlZmluZWQpO1xufTtcblxuYXJyYXlUcmFwcy5zZXQgPSBmdW5jdGlvbiAoc3RhdGUsIHByb3AsIHZhbHVlKSB7XG4gIGlmICggcHJvcCAhPT0gXCJsZW5ndGhcIiAmJiBpc05hTihwYXJzZUludChwcm9wKSkpIGRpZSgxNCk7XG4gIHJldHVybiBvYmplY3RUcmFwcy5zZXQuY2FsbCh0aGlzLCBzdGF0ZVswXSwgcHJvcCwgdmFsdWUsIHN0YXRlWzBdKTtcbn07IC8vIEFjY2VzcyBhIHByb3BlcnR5IHdpdGhvdXQgY3JlYXRpbmcgYW4gSW1tZXIgZHJhZnQuXG5cblxuZnVuY3Rpb24gcGVlayhkcmFmdCwgcHJvcCkge1xuICB2YXIgc3RhdGUgPSBkcmFmdFtEUkFGVF9TVEFURV07XG4gIHZhciBzb3VyY2UgPSBzdGF0ZSA/IGxhdGVzdChzdGF0ZSkgOiBkcmFmdDtcbiAgcmV0dXJuIHNvdXJjZVtwcm9wXTtcbn1cblxuZnVuY3Rpb24gcmVhZFByb3BGcm9tUHJvdG8oc3RhdGUsIHNvdXJjZSwgcHJvcCkge1xuICB2YXIgX2Rlc2MkZ2V0O1xuXG4gIHZhciBkZXNjID0gZ2V0RGVzY3JpcHRvckZyb21Qcm90byhzb3VyY2UsIHByb3ApO1xuICByZXR1cm4gZGVzYyA/IFwidmFsdWVcIiBpbiBkZXNjID8gZGVzYy52YWx1ZSA6IC8vIFRoaXMgaXMgYSB2ZXJ5IHNwZWNpYWwgY2FzZSwgaWYgdGhlIHByb3AgaXMgYSBnZXR0ZXIgZGVmaW5lZCBieSB0aGVcbiAgLy8gcHJvdG90eXBlLCB3ZSBzaG91bGQgaW52b2tlIGl0IHdpdGggdGhlIGRyYWZ0IGFzIGNvbnRleHQhXG4gIChfZGVzYyRnZXQgPSBkZXNjLmdldCkgPT09IG51bGwgfHwgX2Rlc2MkZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVzYyRnZXQuY2FsbChzdGF0ZS5kcmFmdF8pIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjcmlwdG9yRnJvbVByb3RvKHNvdXJjZSwgcHJvcCkge1xuICAvLyAnaW4nIGNoZWNrcyBwcm90byFcbiAgaWYgKCEocHJvcCBpbiBzb3VyY2UpKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKTtcblxuICB3aGlsZSAocHJvdG8pIHtcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIHByb3ApO1xuICAgIGlmIChkZXNjKSByZXR1cm4gZGVzYztcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBtYXJrQ2hhbmdlZChzdGF0ZSkge1xuICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgIHN0YXRlLm1vZGlmaWVkXyA9IHRydWU7XG5cbiAgICBpZiAoc3RhdGUucGFyZW50Xykge1xuICAgICAgbWFya0NoYW5nZWQoc3RhdGUucGFyZW50Xyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwcmVwYXJlQ29weShzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgc3RhdGUuY29weV8gPSBzaGFsbG93Q29weShzdGF0ZS5iYXNlXyk7XG4gIH1cbn1cblxudmFyIEltbWVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW1tZXIoY29uZmlnKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMudXNlUHJveGllc18gPSBoYXNQcm94aWVzO1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB0cnVlO1xuICAgIC8qKlxyXG4gICAgICogVGhlIGBwcm9kdWNlYCBmdW5jdGlvbiB0YWtlcyBhIHZhbHVlIGFuZCBhIFwicmVjaXBlIGZ1bmN0aW9uXCIgKHdob3NlXHJcbiAgICAgKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcclxuICAgICAqIGZyZWUgdG8gbXV0YXRlIGl0cyBmaXJzdCBhcmd1bWVudCBob3dldmVyIGl0IHdhbnRzLiBBbGwgbXV0YXRpb25zIGFyZVxyXG4gICAgICogb25seSBldmVyIGFwcGxpZWQgdG8gYSBfX2NvcHlfXyBvZiB0aGUgYmFzZSBzdGF0ZS5cclxuICAgICAqXHJcbiAgICAgKiBQYXNzIG9ubHkgYSBmdW5jdGlvbiB0byBjcmVhdGUgYSBcImN1cnJpZWQgcHJvZHVjZXJcIiB3aGljaCByZWxpZXZlcyB5b3VcclxuICAgICAqIGZyb20gcGFzc2luZyB0aGUgcmVjaXBlIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUuXHJcbiAgICAgKlxyXG4gICAgICogT25seSBwbGFpbiBvYmplY3RzIGFuZCBhcnJheXMgYXJlIG1hZGUgbXV0YWJsZS4gQWxsIG90aGVyIG9iamVjdHMgYXJlXHJcbiAgICAgKiBjb25zaWRlcmVkIHVuY29weWFibGUuXHJcbiAgICAgKlxyXG4gICAgICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyBfX2JvdW5kX18gdG8gaXRzIGBJbW1lcmAgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvZHVjZXIgLSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGEgcHJveHkgb2YgdGhlIGJhc2Ugc3RhdGUgYXMgZmlyc3QgYXJndW1lbnQgYW5kIHdoaWNoIGNhbiBiZSBmcmVlbHkgbW9kaWZpZWRcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhdGNoTGlzdGVuZXIgLSBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdpdGggYWxsIHRoZSBwYXRjaGVzIHByb2R1Y2VkIGhlcmVcclxuICAgICAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxyXG4gICAgICovXG5cbiAgICB0aGlzLnByb2R1Y2UgPSBmdW5jdGlvbiAoYmFzZSwgcmVjaXBlLCBwYXRjaExpc3RlbmVyKSB7XG4gICAgICAvLyBjdXJyaWVkIGludm9jYXRpb25cbiAgICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiByZWNpcGUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgZGVmYXVsdEJhc2UgPSByZWNpcGU7XG4gICAgICAgIHJlY2lwZSA9IGJhc2U7XG4gICAgICAgIHZhciBzZWxmID0gX3RoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkUHJvZHVjZShiYXNlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBiYXNlID0gZGVmYXVsdEJhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNlbGYucHJvZHVjZShiYXNlLCBmdW5jdGlvbiAoZHJhZnQpIHtcbiAgICAgICAgICAgIHZhciBfcmVjaXBlO1xuXG4gICAgICAgICAgICByZXR1cm4gKF9yZWNpcGUgPSByZWNpcGUpLmNhbGwuYXBwbHkoX3JlY2lwZSwgW190aGlzMiwgZHJhZnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgfSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJlY2lwZSAhPT0gXCJmdW5jdGlvblwiKSBkaWUoNik7XG4gICAgICBpZiAocGF0Y2hMaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXRjaExpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIGRpZSg3KTtcbiAgICAgIHZhciByZXN1bHQ7IC8vIE9ubHkgcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBhbmQgXCJpbW1lcmFibGUgY2xhc3Nlc1wiIGFyZSBkcmFmdGVkLlxuXG4gICAgICBpZiAoaXNEcmFmdGFibGUoYmFzZSkpIHtcbiAgICAgICAgdmFyIHNjb3BlID0gZW50ZXJTY29wZShfdGhpcyk7XG4gICAgICAgIHZhciBwcm94eSA9IGNyZWF0ZVByb3h5KF90aGlzLCBiYXNlLCB1bmRlZmluZWQpO1xuICAgICAgICB2YXIgaGFzRXJyb3IgPSB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVjaXBlKHByb3h5KTtcbiAgICAgICAgICBoYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIC8vIGZpbmFsbHkgaW5zdGVhZCBvZiBjYXRjaCArIHJldGhyb3cgYmV0dGVyIHByZXNlcnZlcyBvcmlnaW5hbCBzdGFja1xuICAgICAgICAgIGlmIChoYXNFcnJvcikgcmV2b2tlU2NvcGUoc2NvcGUpO2Vsc2UgbGVhdmVTY29wZShzY29wZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldm9rZVNjb3BlKHNjb3BlKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXNlUGF0Y2hlc0luU2NvcGUoc2NvcGUsIHBhdGNoTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1Jlc3VsdChyZXN1bHQsIHNjb3BlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWJhc2UgfHwgdHlwZW9mIGJhc2UgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjaXBlKGJhc2UpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHJlc3VsdCA9IGJhc2U7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IE5PVEhJTkcpIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKF90aGlzLmF1dG9GcmVlemVfKSBmcmVlemUocmVzdWx0LCB0cnVlKTtcblxuICAgICAgICBpZiAocGF0Y2hMaXN0ZW5lcikge1xuICAgICAgICAgIHZhciBwID0gW107XG4gICAgICAgICAgdmFyIGlwID0gW107XG4gICAgICAgICAgZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5nZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18oYmFzZSwgcmVzdWx0LCBwLCBpcCk7XG4gICAgICAgICAgcGF0Y2hMaXN0ZW5lcihwLCBpcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlIGRpZSgyMSwgYmFzZSk7XG4gICAgfTtcblxuICAgIHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzID0gZnVuY3Rpb24gKGJhc2UsIHJlY2lwZSkge1xuICAgICAgLy8gY3VycmllZCBpbnZvY2F0aW9uXG4gICAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF90aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcyhzdGF0ZSwgZnVuY3Rpb24gKGRyYWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZS5hcHBseSh2b2lkIDAsIFtkcmFmdF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gX3RoaXMucHJvZHVjZShiYXNlLCByZWNpcGUsIGZ1bmN0aW9uIChwLCBpcCkge1xuICAgICAgICBwYXRjaGVzID0gcDtcbiAgICAgICAgaW52ZXJzZVBhdGNoZXMgPSBpcDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKG5leHRTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiBbbmV4dFN0YXRlLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc107XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW3Jlc3VsdCwgcGF0Y2hlcywgaW52ZXJzZVBhdGNoZXNdO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIChjb25maWcgPT09IG51bGwgfHwgY29uZmlnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25maWcudXNlUHJveGllcykgPT09IFwiYm9vbGVhblwiKSB0aGlzLnNldFVzZVByb3hpZXMoY29uZmlnLnVzZVByb3hpZXMpO1xuICAgIGlmICh0eXBlb2YgKGNvbmZpZyA9PT0gbnVsbCB8fCBjb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmZpZy5hdXRvRnJlZXplKSA9PT0gXCJib29sZWFuXCIpIHRoaXMuc2V0QXV0b0ZyZWV6ZShjb25maWcuYXV0b0ZyZWV6ZSk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW1tZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jcmVhdGVEcmFmdCA9IGZ1bmN0aW9uIGNyZWF0ZURyYWZ0KGJhc2UpIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKGJhc2UpKSBkaWUoOCk7XG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpIGJhc2UgPSBjdXJyZW50KGJhc2UpO1xuICAgIHZhciBzY29wZSA9IGVudGVyU2NvcGUodGhpcyk7XG4gICAgdmFyIHByb3h5ID0gY3JlYXRlUHJveHkodGhpcywgYmFzZSwgdW5kZWZpbmVkKTtcbiAgICBwcm94eVtEUkFGVF9TVEFURV0uaXNNYW51YWxfID0gdHJ1ZTtcbiAgICBsZWF2ZVNjb3BlKHNjb3BlKTtcbiAgICByZXR1cm4gcHJveHk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmlzaERyYWZ0ID0gZnVuY3Rpb24gZmluaXNoRHJhZnQoZHJhZnQsIHBhdGNoTGlzdGVuZXIpIHtcbiAgICB2YXIgc3RhdGUgPSBkcmFmdCAmJiBkcmFmdFtEUkFGVF9TVEFURV07XG5cbiAgICB7XG4gICAgICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5pc01hbnVhbF8pIGRpZSg5KTtcbiAgICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfKSBkaWUoMTApO1xuICAgIH1cblxuICAgIHZhciBzY29wZSA9IHN0YXRlLnNjb3BlXztcbiAgICB1c2VQYXRjaGVzSW5TY29wZShzY29wZSwgcGF0Y2hMaXN0ZW5lcik7XG4gICAgcmV0dXJuIHByb2Nlc3NSZXN1bHQodW5kZWZpbmVkLCBzY29wZSk7XG4gIH1cbiAgLyoqXHJcbiAgICogUGFzcyB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgZnJlZXplIGFsbCBjb3BpZXMgY3JlYXRlZCBieSBJbW1lci5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQsIGF1dG8tZnJlZXppbmcgaXMgZW5hYmxlZC5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRBdXRvRnJlZXplID0gZnVuY3Rpb24gc2V0QXV0b0ZyZWV6ZSh2YWx1ZSkge1xuICAgIHRoaXMuYXV0b0ZyZWV6ZV8gPSB2YWx1ZTtcbiAgfVxuICAvKipcclxuICAgKiBQYXNzIHRydWUgdG8gdXNlIHRoZSBFUzIwMTUgYFByb3h5YCBjbGFzcyB3aGVuIGNyZWF0aW5nIGRyYWZ0cywgd2hpY2ggaXNcclxuICAgKiBhbHdheXMgZmFzdGVyIHRoYW4gdXNpbmcgRVM1IHByb3hpZXMuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBmZWF0dXJlIGRldGVjdGlvbiBpcyB1c2VkLCBzbyBjYWxsaW5nIHRoaXMgaXMgcmFyZWx5IG5lY2Vzc2FyeS5cclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRVc2VQcm94aWVzID0gZnVuY3Rpb24gc2V0VXNlUHJveGllcyh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiAhaGFzUHJveGllcykge1xuICAgICAgZGllKDIwKTtcbiAgICB9XG5cbiAgICB0aGlzLnVzZVByb3hpZXNfID0gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLmFwcGx5UGF0Y2hlcyA9IGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyhiYXNlLCBwYXRjaGVzKSB7XG4gICAgLy8gSWYgYSBwYXRjaCByZXBsYWNlcyB0aGUgZW50aXJlIHN0YXRlLCB0YWtlIHRoYXQgcmVwbGFjZW1lbnQgYXMgYmFzZVxuICAgIC8vIGJlZm9yZSBhcHBseWluZyBwYXRjaGVzXG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSBwYXRjaGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuXG4gICAgICBpZiAocGF0Y2gucGF0aC5sZW5ndGggPT09IDAgJiYgcGF0Y2gub3AgPT09IFwicmVwbGFjZVwiKSB7XG4gICAgICAgIGJhc2UgPSBwYXRjaC52YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSAvLyBJZiB0aGVyZSB3YXMgYSBwYXRjaCB0aGF0IHJlcGxhY2VkIHRoZSBlbnRpcmUgc3RhdGUsIHN0YXJ0IGZyb20gdGhlXG4gICAgLy8gcGF0Y2ggYWZ0ZXIgdGhhdC5cblxuXG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgcGF0Y2hlcyA9IHBhdGNoZXMuc2xpY2UoaSArIDEpO1xuICAgIH1cblxuICAgIHZhciBhcHBseVBhdGNoZXNJbXBsID0gZ2V0UGx1Z2luKFwiUGF0Y2hlc1wiKS5hcHBseVBhdGNoZXNfO1xuXG4gICAgaWYgKGlzRHJhZnQoYmFzZSkpIHtcbiAgICAgIC8vIE4uQjogbmV2ZXIgaGl0cyBpZiBzb21lIHBhdGNoIGEgcmVwbGFjZW1lbnQsIHBhdGNoZXMgYXJlIG5ldmVyIGRyYWZ0c1xuICAgICAgcmV0dXJuIGFwcGx5UGF0Y2hlc0ltcGwoYmFzZSwgcGF0Y2hlcyk7XG4gICAgfSAvLyBPdGhlcndpc2UsIHByb2R1Y2UgYSBjb3B5IG9mIHRoZSBiYXNlIHN0YXRlLlxuXG5cbiAgICByZXR1cm4gdGhpcy5wcm9kdWNlKGJhc2UsIGZ1bmN0aW9uIChkcmFmdCkge1xuICAgICAgcmV0dXJuIGFwcGx5UGF0Y2hlc0ltcGwoZHJhZnQsIHBhdGNoZXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJbW1lcjtcbn0oKTtcbmZ1bmN0aW9uIGNyZWF0ZVByb3h5KGltbWVyLCB2YWx1ZSwgcGFyZW50KSB7XG4gIC8vIHByZWNvbmRpdGlvbjogY3JlYXRlUHJveHkgc2hvdWxkIGJlIGd1YXJkZWQgYnkgaXNEcmFmdGFibGUsIHNvIHdlIGtub3cgd2UgY2FuIHNhZmVseSBkcmFmdFxuICB2YXIgZHJhZnQgPSBpc01hcCh2YWx1ZSkgPyBnZXRQbHVnaW4oXCJNYXBTZXRcIikucHJveHlNYXBfKHZhbHVlLCBwYXJlbnQpIDogaXNTZXQodmFsdWUpID8gZ2V0UGx1Z2luKFwiTWFwU2V0XCIpLnByb3h5U2V0Xyh2YWx1ZSwgcGFyZW50KSA6IGltbWVyLnVzZVByb3hpZXNfID8gY3JlYXRlUHJveHlQcm94eSh2YWx1ZSwgcGFyZW50KSA6IGdldFBsdWdpbihcIkVTNVwiKS5jcmVhdGVFUzVQcm94eV8odmFsdWUsIHBhcmVudCk7XG4gIHZhciBzY29wZSA9IHBhcmVudCA/IHBhcmVudC5zY29wZV8gOiBnZXRDdXJyZW50U2NvcGUoKTtcbiAgc2NvcGUuZHJhZnRzXy5wdXNoKGRyYWZ0KTtcbiAgcmV0dXJuIGRyYWZ0O1xufVxuXG5mdW5jdGlvbiBjdXJyZW50KHZhbHVlKSB7XG4gIGlmICghaXNEcmFmdCh2YWx1ZSkpIGRpZSgyMiwgdmFsdWUpO1xuICByZXR1cm4gY3VycmVudEltcGwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50SW1wbCh2YWx1ZSkge1xuICBpZiAoIWlzRHJhZnRhYmxlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICB2YXIgc3RhdGUgPSB2YWx1ZVtEUkFGVF9TVEFURV07XG4gIHZhciBjb3B5O1xuICB2YXIgYXJjaFR5cGUgPSBnZXRBcmNodHlwZSh2YWx1ZSk7XG5cbiAgaWYgKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5tb2RpZmllZF8gJiYgKHN0YXRlLnR5cGVfIDwgNCB8fCAhZ2V0UGx1Z2luKFwiRVM1XCIpLmhhc0NoYW5nZXNfKHN0YXRlKSkpIHJldHVybiBzdGF0ZS5iYXNlXzsgLy8gT3B0aW1pemF0aW9uOiBhdm9pZCBnZW5lcmF0aW5nIG5ldyBkcmFmdHMgZHVyaW5nIGNvcHlpbmdcblxuICAgIHN0YXRlLmZpbmFsaXplZF8gPSB0cnVlO1xuICAgIGNvcHkgPSBjb3B5SGVscGVyKHZhbHVlLCBhcmNoVHlwZSk7XG4gICAgc3RhdGUuZmluYWxpemVkXyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvcHkgPSBjb3B5SGVscGVyKHZhbHVlLCBhcmNoVHlwZSk7XG4gIH1cblxuICBlYWNoKGNvcHksIGZ1bmN0aW9uIChrZXksIGNoaWxkVmFsdWUpIHtcbiAgICBpZiAoc3RhdGUgJiYgZ2V0KHN0YXRlLmJhc2VfLCBrZXkpID09PSBjaGlsZFZhbHVlKSByZXR1cm47IC8vIG5vIG5lZWQgdG8gY29weSBvciBzZWFyY2ggaW4gc29tZXRoaW5nIHRoYXQgZGlkbid0IGNoYW5nZVxuXG4gICAgc2V0KGNvcHksIGtleSwgY3VycmVudEltcGwoY2hpbGRWYWx1ZSkpO1xuICB9KTsgLy8gSW4gdGhlIGZ1dHVyZSwgd2UgbWlnaHQgY29uc2lkZXIgZnJlZXppbmcgaGVyZSwgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2V0dGluZ3NcblxuICByZXR1cm4gYXJjaFR5cGUgPT09IDNcbiAgLyogU2V0ICovXG4gID8gbmV3IFNldChjb3B5KSA6IGNvcHk7XG59XG5cbmZ1bmN0aW9uIGNvcHlIZWxwZXIodmFsdWUsIGFyY2hUeXBlKSB7XG4gIC8vIGNyZWF0ZXMgYSBzaGFsbG93IGNvcHksIGV2ZW4gaWYgaXQgaXMgYSBtYXAgb3Igc2V0XG4gIHN3aXRjaCAoYXJjaFR5cGUpIHtcbiAgICBjYXNlIDJcbiAgICAvKiBNYXAgKi9cbiAgICA6XG4gICAgICByZXR1cm4gbmV3IE1hcCh2YWx1ZSk7XG5cbiAgICBjYXNlIDNcbiAgICAvKiBTZXQgKi9cbiAgICA6XG4gICAgICAvLyBTZXQgd2lsbCBiZSBjbG9uZWQgYXMgYXJyYXkgdGVtcG9yYXJpbHksIHNvIHRoYXQgd2UgY2FuIHJlcGxhY2UgaW5kaXZpZHVhbCBpdGVtc1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWxsb3dDb3B5KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRVM1KCkge1xuICBmdW5jdGlvbiB3aWxsRmluYWxpemVFUzVfKHNjb3BlLCByZXN1bHQsIGlzUmVwbGFjZWQpIHtcbiAgICBpZiAoIWlzUmVwbGFjZWQpIHtcbiAgICAgIGlmIChzY29wZS5wYXRjaGVzXykge1xuICAgICAgICBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KHNjb3BlLmRyYWZ0c19bMF0pO1xuICAgICAgfSAvLyBUaGlzIGlzIGZhc3RlciB3aGVuIHdlIGRvbid0IGNhcmUgYWJvdXQgd2hpY2ggYXR0cmlidXRlcyBjaGFuZ2VkLlxuXG5cbiAgICAgIG1hcmtDaGFuZ2VzU3dlZXAoc2NvcGUuZHJhZnRzXyk7XG4gICAgfSAvLyBXaGVuIGEgY2hpbGQgZHJhZnQgaXMgcmV0dXJuZWQsIGxvb2sgZm9yIGNoYW5nZXMuXG4gICAgZWxzZSBpZiAoaXNEcmFmdChyZXN1bHQpICYmIHJlc3VsdFtEUkFGVF9TVEFURV0uc2NvcGVfID09PSBzY29wZSkge1xuICAgICAgICBtYXJrQ2hhbmdlc1N3ZWVwKHNjb3BlLmRyYWZ0c18pO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRVM1RHJhZnQoaXNBcnJheSwgYmFzZSkge1xuICAgIGlmIChpc0FycmF5KSB7XG4gICAgICB2YXIgZHJhZnQgPSBuZXcgQXJyYXkoYmFzZS5sZW5ndGgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRyYWZ0LCBcIlwiICsgaSwgcHJveHlQcm9wZXJ0eShpLCB0cnVlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkcmFmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZXNjcmlwdG9ycyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYmFzZSk7XG5cbiAgICAgIGRlbGV0ZSBfZGVzY3JpcHRvcnNbRFJBRlRfU1RBVEVdO1xuICAgICAgdmFyIGtleXMgPSBvd25LZXlzKF9kZXNjcmlwdG9ycyk7XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tfaV07XG4gICAgICAgIF9kZXNjcmlwdG9yc1trZXldID0gcHJveHlQcm9wZXJ0eShrZXksIGlzQXJyYXkgfHwgISFfZGVzY3JpcHRvcnNba2V5XS5lbnVtZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2UpLCBfZGVzY3JpcHRvcnMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVTNVByb3h5XyhiYXNlLCBwYXJlbnQpIHtcbiAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYmFzZSk7XG4gICAgdmFyIGRyYWZ0ID0gY3JlYXRlRVM1RHJhZnQoaXNBcnJheSwgYmFzZSk7XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgdHlwZV86IGlzQXJyYXkgPyA1XG4gICAgICAvKiBFUzVBcnJheSAqL1xuICAgICAgOiA0XG4gICAgICAvKiBFUzVPYmplY3QgKi9cbiAgICAgICxcbiAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgbW9kaWZpZWRfOiBmYWxzZSxcbiAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgYXNzaWduZWRfOiB7fSxcbiAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgIC8vIGJhc2UgaXMgdGhlIG9iamVjdCB3ZSBhcmUgZHJhZnRpbmdcbiAgICAgIGJhc2VfOiBiYXNlLFxuICAgICAgLy8gZHJhZnQgaXMgdGhlIGRyYWZ0IG9iamVjdCBpdHNlbGYsIHRoYXQgdHJhcHMgYWxsIHJlYWRzIGFuZCByZWFkcyBmcm9tIGVpdGhlciB0aGUgYmFzZSAoaWYgdW5tb2RpZmllZCkgb3IgY29weSAoaWYgbW9kaWZpZWQpXG4gICAgICBkcmFmdF86IGRyYWZ0LFxuICAgICAgY29weV86IG51bGwsXG4gICAgICByZXZva2VkXzogZmFsc2UsXG4gICAgICBpc01hbnVhbF86IGZhbHNlXG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZHJhZnQsIERSQUZUX1NUQVRFLCB7XG4gICAgICB2YWx1ZTogc3RhdGUsXG4gICAgICAvLyBlbnVtZXJhYmxlOiBmYWxzZSA8LSB0aGUgZGVmYXVsdFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZHJhZnQ7XG4gIH0gLy8gcHJvcGVydHkgZGVzY3JpcHRvcnMgYXJlIHJlY3ljbGVkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBjcmVhdGUgYSBnZXQgYW5kIHNldCBjbG9zdXJlIHBlciBwcm9wZXJ0eSxcbiAgLy8gYnV0IHNoYXJlIHRoZW0gYWxsIGluc3RlYWRcblxuXG4gIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHByb3h5UHJvcGVydHkocHJvcCwgZW51bWVyYWJsZSkge1xuICAgIHZhciBkZXNjID0gZGVzY3JpcHRvcnNbcHJvcF07XG5cbiAgICBpZiAoZGVzYykge1xuICAgICAgZGVzYy5lbnVtZXJhYmxlID0gZW51bWVyYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRvcnNbcHJvcF0gPSBkZXNjID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGVudW1lcmFibGUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7IC8vIEB0cy1pZ25vcmVcblxuICAgICAgICAgIHJldHVybiBvYmplY3RUcmFwcy5nZXQoc3RhdGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7IC8vIEB0cy1pZ25vcmVcblxuICAgICAgICAgIG9iamVjdFRyYXBzLnNldChzdGF0ZSwgcHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjO1xuICB9IC8vIFRoaXMgbG9va3MgZXhwZW5zaXZlLCBidXQgb25seSBwcm94aWVzIGFyZSB2aXNpdGVkLCBhbmQgb25seSBvYmplY3RzIHdpdGhvdXQga25vd24gY2hhbmdlcyBhcmUgc2Nhbm5lZC5cblxuXG4gIGZ1bmN0aW9uIG1hcmtDaGFuZ2VzU3dlZXAoZHJhZnRzKSB7XG4gICAgLy8gVGhlIG5hdHVyYWwgb3JkZXIgb2YgZHJhZnRzIGluIHRoZSBgc2NvcGVgIGFycmF5IGlzIGJhc2VkIG9uIHdoZW4gdGhleVxuICAgIC8vIHdlcmUgYWNjZXNzZWQuIEJ5IHByb2Nlc3NpbmcgZHJhZnRzIGluIHJldmVyc2UgbmF0dXJhbCBvcmRlciwgd2UgaGF2ZSBhXG4gICAgLy8gYmV0dGVyIGNoYW5jZSBvZiBwcm9jZXNzaW5nIGxlYWYgbm9kZXMgZmlyc3QuIFdoZW4gYSBsZWFmIG5vZGUgaXMga25vd24gdG9cbiAgICAvLyBoYXZlIGNoYW5nZWQsIHdlIGNhbiBhdm9pZCBhbnkgdHJhdmVyc2FsIG9mIGl0cyBhbmNlc3RvciBub2Rlcy5cbiAgICBmb3IgKHZhciBpID0gZHJhZnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgc3RhdGUgPSBkcmFmdHNbaV1bRFJBRlRfU1RBVEVdO1xuXG4gICAgICBpZiAoIXN0YXRlLm1vZGlmaWVkXykge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlLnR5cGVfKSB7XG4gICAgICAgICAgY2FzZSA1XG4gICAgICAgICAgLyogRVM1QXJyYXkgKi9cbiAgICAgICAgICA6XG4gICAgICAgICAgICBpZiAoaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKSkgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDRcbiAgICAgICAgICAvKiBFUzVPYmplY3QgKi9cbiAgICAgICAgICA6XG4gICAgICAgICAgICBpZiAoaGFzT2JqZWN0Q2hhbmdlcyhzdGF0ZSkpIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFya0NoYW5nZXNSZWN1cnNpdmVseShvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gICAgdmFyIHN0YXRlID0gb2JqZWN0W0RSQUZUX1NUQVRFXTtcbiAgICBpZiAoIXN0YXRlKSByZXR1cm47XG4gICAgdmFyIGJhc2VfID0gc3RhdGUuYmFzZV8sXG4gICAgICAgIGRyYWZ0XyA9IHN0YXRlLmRyYWZ0XyxcbiAgICAgICAgYXNzaWduZWRfID0gc3RhdGUuYXNzaWduZWRfLFxuICAgICAgICB0eXBlXyA9IHN0YXRlLnR5cGVfO1xuXG4gICAgaWYgKHR5cGVfID09PSA0XG4gICAgLyogRVM1T2JqZWN0ICovXG4gICAgKSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGFkZGVkIGtleXMuXG4gICAgICAgIC8vIHByb2JhYmx5IHRoZXJlIGlzIGEgZmFzdGVyIHdheSB0byBkZXRlY3QgY2hhbmdlcywgYXMgc3dlZXAgKyByZWN1cnNlIHNlZW1zIHRvIGRvIHNvbWVcbiAgICAgICAgLy8gdW5uZWNlc3Nhcnkgd29yay5cbiAgICAgICAgLy8gYWxzbzogcHJvYmFibHkgd2UgY2FuIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiB3ZSBkZXRlY3QgaGVyZSwgdG8gc3BlZWQgdXAgdHJlZSBmaW5hbGl6YXRpb24hXG4gICAgICAgIGVhY2goZHJhZnRfLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKGtleSA9PT0gRFJBRlRfU1RBVEUpIHJldHVybjsgLy8gVGhlIGB1bmRlZmluZWRgIGNoZWNrIGlzIGEgZmFzdCBwYXRoIGZvciBwcmUtZXhpc3Rpbmcga2V5cy5cblxuICAgICAgICAgIGlmIChiYXNlX1trZXldID09PSB1bmRlZmluZWQgJiYgIWhhcyhiYXNlXywga2V5KSkge1xuICAgICAgICAgICAgYXNzaWduZWRfW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWFzc2lnbmVkX1trZXldKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHVudG91Y2hlZCBwcm9wZXJ0aWVzIHRyaWdnZXIgcmVjdXJzaW9uLlxuICAgICAgICAgICAgbWFya0NoYW5nZXNSZWN1cnNpdmVseShkcmFmdF9ba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTsgLy8gTG9vayBmb3IgcmVtb3ZlZCBrZXlzLlxuXG4gICAgICAgIGVhY2goYmFzZV8sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuICAgICAgICAgIGlmIChkcmFmdF9ba2V5XSA9PT0gdW5kZWZpbmVkICYmICFoYXMoZHJhZnRfLCBrZXkpKSB7XG4gICAgICAgICAgICBhc3NpZ25lZF9ba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgbWFya0NoYW5nZWQoc3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVfID09PSA1XG4gICAgLyogRVM1QXJyYXkgKi9cbiAgICApIHtcbiAgICAgICAgaWYgKGhhc0FycmF5Q2hhbmdlcyhzdGF0ZSkpIHtcbiAgICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgICAgYXNzaWduZWRfLmxlbmd0aCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHJhZnRfLmxlbmd0aCA8IGJhc2VfLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSBkcmFmdF8ubGVuZ3RoOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFzc2lnbmVkX1tpXSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBfaTIgPSBiYXNlXy5sZW5ndGg7IF9pMiA8IGRyYWZ0Xy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICBhc3NpZ25lZF9bX2kyXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIE1pbmltdW0gY291bnQgaXMgZW5vdWdoLCB0aGUgb3RoZXIgcGFydHMgaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXG5cbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKGRyYWZ0Xy5sZW5ndGgsIGJhc2VfLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yICh2YXIgX2kzID0gMDsgX2kzIDwgbWluOyBfaTMrKykge1xuICAgICAgICAgIC8vIE9ubHkgdW50b3VjaGVkIGluZGljZXMgdHJpZ2dlciByZWN1cnNpb24uXG4gICAgICAgICAgaWYgKCFkcmFmdF8uaGFzT3duUHJvcGVydHkoX2kzKSkge1xuICAgICAgICAgICAgYXNzaWduZWRfW19pM10gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhc3NpZ25lZF9bX2kzXSA9PT0gdW5kZWZpbmVkKSBtYXJrQ2hhbmdlc1JlY3Vyc2l2ZWx5KGRyYWZ0X1tfaTNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFzT2JqZWN0Q2hhbmdlcyhzdGF0ZSkge1xuICAgIHZhciBiYXNlXyA9IHN0YXRlLmJhc2VfLFxuICAgICAgICBkcmFmdF8gPSBzdGF0ZS5kcmFmdF87IC8vIFNlYXJjaCBmb3IgYWRkZWQga2V5cyBhbmQgY2hhbmdlZCBrZXlzLiBTdGFydCBhdCB0aGUgYmFjaywgYmVjYXVzZVxuICAgIC8vIG5vbi1udW1lcmljIGtleXMgYXJlIG9yZGVyZWQgYnkgdGltZSBvZiBkZWZpbml0aW9uIG9uIHRoZSBvYmplY3QuXG5cbiAgICB2YXIga2V5cyA9IG93bktleXMoZHJhZnRfKTtcblxuICAgIGZvciAodmFyIGkgPSBrZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgPT09IERSQUZUX1NUQVRFKSBjb250aW51ZTtcbiAgICAgIHZhciBiYXNlVmFsdWUgPSBiYXNlX1trZXldOyAvLyBUaGUgYHVuZGVmaW5lZGAgY2hlY2sgaXMgYSBmYXN0IHBhdGggZm9yIHByZS1leGlzdGluZyBrZXlzLlxuXG4gICAgICBpZiAoYmFzZVZhbHVlID09PSB1bmRlZmluZWQgJiYgIWhhcyhiYXNlXywga2V5KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gLy8gT25jZSBhIGJhc2Uga2V5IGlzIGRlbGV0ZWQsIGZ1dHVyZSBjaGFuZ2VzIGdvIHVuZGV0ZWN0ZWQsIGJlY2F1c2UgaXRzXG4gICAgICAvLyBkZXNjcmlwdG9yIGlzIGVyYXNlZC4gVGhpcyBicmFuY2ggZGV0ZWN0cyBhbnkgbWlzc2VkIGNoYW5nZXMuXG4gICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBkcmFmdF9ba2V5XTtcblxuICAgICAgICAgIHZhciBfc3RhdGUgPSB2YWx1ZSAmJiB2YWx1ZVtEUkFGVF9TVEFURV07XG5cbiAgICAgICAgICBpZiAoX3N0YXRlID8gX3N0YXRlLmJhc2VfICE9PSBiYXNlVmFsdWUgOiAhaXModmFsdWUsIGJhc2VWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gLy8gQXQgdGhpcyBwb2ludCwgbm8ga2V5cyB3ZXJlIGFkZGVkIG9yIGNoYW5nZWQuXG4gICAgLy8gQ29tcGFyZSBrZXkgY291bnQgdG8gZGV0ZXJtaW5lIGlmIGtleXMgd2VyZSBkZWxldGVkLlxuXG5cbiAgICB2YXIgYmFzZUlzRHJhZnQgPSAhIWJhc2VfW0RSQUZUX1NUQVRFXTtcbiAgICByZXR1cm4ga2V5cy5sZW5ndGggIT09IG93bktleXMoYmFzZV8pLmxlbmd0aCArIChiYXNlSXNEcmFmdCA/IDAgOiAxKTsgLy8gKyAxIHRvIGNvcnJlY3QgZm9yIERSQUZUX1NUQVRFXG4gIH1cblxuICBmdW5jdGlvbiBoYXNBcnJheUNoYW5nZXMoc3RhdGUpIHtcbiAgICB2YXIgZHJhZnRfID0gc3RhdGUuZHJhZnRfO1xuICAgIGlmIChkcmFmdF8ubGVuZ3RoICE9PSBzdGF0ZS5iYXNlXy5sZW5ndGgpIHJldHVybiB0cnVlOyAvLyBTZWUgIzExNlxuICAgIC8vIElmIHdlIGZpcnN0IHNob3J0ZW4gdGhlIGxlbmd0aCwgb3VyIGFycmF5IGludGVyY2VwdG9ycyB3aWxsIGJlIHJlbW92ZWQuXG4gICAgLy8gSWYgYWZ0ZXIgdGhhdCBuZXcgaXRlbXMgYXJlIGFkZGVkLCByZXN1bHQgaW4gdGhlIHNhbWUgb3JpZ2luYWwgbGVuZ3RoLFxuICAgIC8vIHRob3NlIGxhc3QgaXRlbXMgd2lsbCBoYXZlIG5vIGludGVyY2VwdGluZyBwcm9wZXJ0eS5cbiAgICAvLyBTbyBpZiB0aGVyZSBpcyBubyBvd24gZGVzY3JpcHRvciBvbiB0aGUgbGFzdCBwb3NpdGlvbiwgd2Uga25vdyB0aGF0IGl0ZW1zIHdlcmUgcmVtb3ZlZCBhbmQgYWRkZWRcbiAgICAvLyBOLkIuOiBzcGxpY2UsIHVuc2hpZnQsIGV0YyBvbmx5IHNoaWZ0IHZhbHVlcyBhcm91bmQsIGJ1dCBub3QgcHJvcCBkZXNjcmlwdG9ycywgc28gd2Ugb25seSBoYXZlIHRvIGNoZWNrXG4gICAgLy8gdGhlIGxhc3Qgb25lXG4gICAgLy8gbGFzdCBkZXNjcmlwdG9yIGNhbiBiZSBub3QgYSB0cmFwLCBpZiB0aGUgYXJyYXkgd2FzIGV4dGVuZGVkXG5cbiAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZHJhZnRfLCBkcmFmdF8ubGVuZ3RoIC0gMSk7IC8vIGRlc2NyaXB0b3IgY2FuIGJlIG51bGwsIGJ1dCBvbmx5IGZvciBuZXdseSBjcmVhdGVkIHNwYXJzZSBhcnJheXMsIGVnLiBuZXcgQXJyYXkoMTApXG5cbiAgICBpZiAoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5nZXQpIHJldHVybiB0cnVlOyAvLyBpZiB3ZSBtaXNzIGEgcHJvcGVydHksIGl0IGhhcyBiZWVuIGRlbGV0ZWQsIHNvIGFycmF5IHByb2JvYmFseSBjaGFuZ2VkXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRyYWZ0Xy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFkcmFmdF8uaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiB0cnVlO1xuICAgIH0gLy8gRm9yIGFsbCBvdGhlciBjYXNlcywgd2UgZG9uJ3QgaGF2ZSB0byBjb21wYXJlLCBhcyB0aGV5IHdvdWxkIGhhdmUgYmVlbiBwaWNrZWQgdXAgYnkgdGhlIGluZGV4IHNldHRlcnNcblxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQ2hhbmdlc18oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUudHlwZV8gPT09IDRcbiAgICAvKiBFUzVPYmplY3QgKi9cbiAgICA/IGhhc09iamVjdENoYW5nZXMoc3RhdGUpIDogaGFzQXJyYXlDaGFuZ2VzKHN0YXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZVxuICAvKkVTNVN0YXRlIHwgTWFwU3RhdGUgfCBTZXRTdGF0ZSovXG4gICkge1xuICAgIGlmIChzdGF0ZS5yZXZva2VkXykgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKTtcbiAgfVxuXG4gIGxvYWRQbHVnaW4oXCJFUzVcIiwge1xuICAgIGNyZWF0ZUVTNVByb3h5XzogY3JlYXRlRVM1UHJveHlfLFxuICAgIHdpbGxGaW5hbGl6ZUVTNV86IHdpbGxGaW5hbGl6ZUVTNV8sXG4gICAgaGFzQ2hhbmdlc186IGhhc0NoYW5nZXNfXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmFibGVQYXRjaGVzKCkge1xuICB2YXIgUkVQTEFDRSA9IFwicmVwbGFjZVwiO1xuICB2YXIgQUREID0gXCJhZGRcIjtcbiAgdmFyIFJFTU9WRSA9IFwicmVtb3ZlXCI7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVQYXRjaGVzXyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgc3dpdGNoIChzdGF0ZS50eXBlXykge1xuICAgICAgY2FzZSAwXG4gICAgICAvKiBQcm94eU9iamVjdCAqL1xuICAgICAgOlxuICAgICAgY2FzZSA0XG4gICAgICAvKiBFUzVPYmplY3QgKi9cbiAgICAgIDpcbiAgICAgIGNhc2UgMlxuICAgICAgLyogTWFwICovXG4gICAgICA6XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG5cbiAgICAgIGNhc2UgNVxuICAgICAgLyogRVM1QXJyYXkgKi9cbiAgICAgIDpcbiAgICAgIGNhc2UgMVxuICAgICAgLyogUHJveHlBcnJheSAqL1xuICAgICAgOlxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG5cbiAgICAgIGNhc2UgM1xuICAgICAgLyogU2V0ICovXG4gICAgICA6XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVNldFBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVBcnJheVBhdGNoZXMoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHZhciBiYXNlXyA9IHN0YXRlLmJhc2VfLFxuICAgICAgICBhc3NpZ25lZF8gPSBzdGF0ZS5hc3NpZ25lZF87XG4gICAgdmFyIGNvcHlfID0gc3RhdGUuY29weV87IC8vIFJlZHVjZSBjb21wbGV4aXR5IGJ5IGVuc3VyaW5nIGBiYXNlYCBpcyBuZXZlciBsb25nZXIuXG5cbiAgICBpZiAoY29weV8ubGVuZ3RoIDwgYmFzZV8ubGVuZ3RoKSB7XG4gICAgICB2YXIgX3JlZiA9IFtjb3B5XywgYmFzZV9dO1xuICAgICAgYmFzZV8gPSBfcmVmWzBdO1xuICAgICAgY29weV8gPSBfcmVmWzFdO1xuICAgICAgdmFyIF9yZWYyID0gW2ludmVyc2VQYXRjaGVzLCBwYXRjaGVzXTtcbiAgICAgIHBhdGNoZXMgPSBfcmVmMlswXTtcbiAgICAgIGludmVyc2VQYXRjaGVzID0gX3JlZjJbMV07XG4gICAgfSAvLyBQcm9jZXNzIHJlcGxhY2VkIGluZGljZXMuXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZV8ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhc3NpZ25lZF9baV0gJiYgY29weV9baV0gIT09IGJhc2VfW2ldKSB7XG4gICAgICAgIHZhciBwYXRoID0gYmFzZVBhdGguY29uY2F0KFtpXSk7XG4gICAgICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAvLyBOZWVkIHRvIG1heWJlIGNsb25lIGl0LCBhcyBpdCBjYW4gaW4gZmFjdCBiZSB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgICAvLyBkdWUgdG8gdGhlIGJhc2UvY29weSBpbnZlcnNpb24gYXQgdGhlIHN0YXJ0IG9mIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9baV0pXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVQTEFDRSxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChiYXNlX1tpXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSAvLyBQcm9jZXNzIGFkZGVkIGluZGljZXMuXG5cblxuICAgIGZvciAodmFyIF9pID0gYmFzZV8ubGVuZ3RoOyBfaSA8IGNvcHlfLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9wYXRoID0gYmFzZVBhdGguY29uY2F0KFtfaV0pO1xuXG4gICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICBvcDogQURELFxuICAgICAgICBwYXRoOiBfcGF0aCxcbiAgICAgICAgLy8gTmVlZCB0byBtYXliZSBjbG9uZSBpdCwgYXMgaXQgY2FuIGluIGZhY3QgYmUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgIC8vIGR1ZSB0byB0aGUgYmFzZS9jb3B5IGludmVyc2lvbiBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvblxuICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQoY29weV9bX2ldKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGJhc2VfLmxlbmd0aCA8IGNvcHlfLmxlbmd0aCkge1xuICAgICAgaW52ZXJzZVBhdGNoZXMucHVzaCh7XG4gICAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgICBwYXRoOiBiYXNlUGF0aC5jb25jYXQoW1wibGVuZ3RoXCJdKSxcbiAgICAgICAgdmFsdWU6IGJhc2VfLmxlbmd0aFxuICAgICAgfSk7XG4gICAgfVxuICB9IC8vIFRoaXMgaXMgdXNlZCBmb3IgYm90aCBNYXAgb2JqZWN0cyBhbmQgbm9ybWFsIG9iamVjdHMuXG5cblxuICBmdW5jdGlvbiBnZW5lcmF0ZVBhdGNoZXNGcm9tQXNzaWduZWQoc3RhdGUsIGJhc2VQYXRoLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHZhciBiYXNlXyA9IHN0YXRlLmJhc2VfLFxuICAgICAgICBjb3B5XyA9IHN0YXRlLmNvcHlfO1xuICAgIGVhY2goc3RhdGUuYXNzaWduZWRfLCBmdW5jdGlvbiAoa2V5LCBhc3NpZ25lZFZhbHVlKSB7XG4gICAgICB2YXIgb3JpZ1ZhbHVlID0gZ2V0KGJhc2VfLCBrZXkpO1xuICAgICAgdmFyIHZhbHVlID0gZ2V0KGNvcHlfLCBrZXkpO1xuICAgICAgdmFyIG9wID0gIWFzc2lnbmVkVmFsdWUgPyBSRU1PVkUgOiBoYXMoYmFzZV8sIGtleSkgPyBSRVBMQUNFIDogQUREO1xuICAgICAgaWYgKG9yaWdWYWx1ZSA9PT0gdmFsdWUgJiYgb3AgPT09IFJFUExBQ0UpIHJldHVybjtcbiAgICAgIHZhciBwYXRoID0gYmFzZVBhdGguY29uY2F0KGtleSk7XG4gICAgICBwYXRjaGVzLnB1c2gob3AgPT09IFJFTU9WRSA/IHtcbiAgICAgICAgb3A6IG9wLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9IDoge1xuICAgICAgICBvcDogb3AsXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKG9wID09PSBBREQgPyB7XG4gICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0gOiBvcCA9PT0gUkVNT1ZFID8ge1xuICAgICAgICBvcDogQURELFxuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICB2YWx1ZTogY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob3JpZ1ZhbHVlKVxuICAgICAgfSA6IHtcbiAgICAgICAgb3A6IFJFUExBQ0UsXG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIHZhbHVlOiBjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZChvcmlnVmFsdWUpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlU2V0UGF0Y2hlcyhzdGF0ZSwgYmFzZVBhdGgsIHBhdGNoZXMsIGludmVyc2VQYXRjaGVzKSB7XG4gICAgdmFyIGJhc2VfID0gc3RhdGUuYmFzZV8sXG4gICAgICAgIGNvcHlfID0gc3RhdGUuY29weV87XG4gICAgdmFyIGkgPSAwO1xuICAgIGJhc2VfLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoIWNvcHlfLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIHBhdGggPSBiYXNlUGF0aC5jb25jYXQoW2ldKTtcbiAgICAgICAgcGF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICBvcDogUkVNT1ZFLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpbnZlcnNlUGF0Y2hlcy51bnNoaWZ0KHtcbiAgICAgICAgICBvcDogQURELFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgaSA9IDA7XG4gICAgY29weV8uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICghYmFzZV8uaGFzKHZhbHVlKSkge1xuICAgICAgICB2YXIgcGF0aCA9IGJhc2VQYXRoLmNvbmNhdChbaV0pO1xuICAgICAgICBwYXRjaGVzLnB1c2goe1xuICAgICAgICAgIG9wOiBBREQsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGludmVyc2VQYXRjaGVzLnVuc2hpZnQoe1xuICAgICAgICAgIG9wOiBSRU1PVkUsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUmVwbGFjZW1lbnRQYXRjaGVzXyhiYXNlVmFsdWUsIHJlcGxhY2VtZW50LCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlcykge1xuICAgIHBhdGNoZXMucHVzaCh7XG4gICAgICBvcDogUkVQTEFDRSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgdmFsdWU6IHJlcGxhY2VtZW50ID09PSBOT1RISU5HID8gdW5kZWZpbmVkIDogcmVwbGFjZW1lbnRcbiAgICB9KTtcbiAgICBpbnZlcnNlUGF0Y2hlcy5wdXNoKHtcbiAgICAgIG9wOiBSRVBMQUNFLFxuICAgICAgcGF0aDogW10sXG4gICAgICB2YWx1ZTogYmFzZVZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoZXNfKGRyYWZ0LCBwYXRjaGVzKSB7XG4gICAgcGF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXRjaCkge1xuICAgICAgdmFyIHBhdGggPSBwYXRjaC5wYXRoLFxuICAgICAgICAgIG9wID0gcGF0Y2gub3A7XG4gICAgICB2YXIgYmFzZSA9IGRyYWZ0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJlbnRUeXBlID0gZ2V0QXJjaHR5cGUoYmFzZSk7XG4gICAgICAgIHZhciBwID0gXCJcIiArIHBhdGhbaV07IC8vIFNlZSAjNzM4LCBhdm9pZCBwcm90b3R5cGUgcG9sbHV0aW9uXG5cbiAgICAgICAgaWYgKChwYXJlbnRUeXBlID09PSAwXG4gICAgICAgIC8qIE9iamVjdCAqL1xuICAgICAgICB8fCBwYXJlbnRUeXBlID09PSAxXG4gICAgICAgIC8qIEFycmF5ICovXG4gICAgICAgICkgJiYgKHAgPT09IFwiX19wcm90b19fXCIgfHwgcCA9PT0gXCJjb25zdHJ1Y3RvclwiKSkgZGllKDI0KTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSBcImZ1bmN0aW9uXCIgJiYgcCA9PT0gXCJwcm90b3R5cGVcIikgZGllKDI0KTtcbiAgICAgICAgYmFzZSA9IGdldChiYXNlLCBwKTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlICE9PSBcIm9iamVjdFwiKSBkaWUoMTUsIHBhdGguam9pbihcIi9cIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZSA9IGdldEFyY2h0eXBlKGJhc2UpO1xuICAgICAgdmFyIHZhbHVlID0gZGVlcENsb25lUGF0Y2hWYWx1ZShwYXRjaC52YWx1ZSk7IC8vIHVzZWQgdG8gY2xvbmUgcGF0Y2ggdG8gZW5zdXJlIG9yaWdpbmFsIHBhdGNoIGlzIG5vdCBtb2RpZmllZCwgc2VlICM0MTFcblxuICAgICAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcblxuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIFJFUExBQ0U6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDJcbiAgICAgICAgICAgIC8qIE1hcCAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgICAgICAgICAgIGNhc2UgM1xuICAgICAgICAgICAgLyogU2V0ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIGRpZSgxNik7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIGFuIG9iamVjdCwgdGhlbiBpdCdzIGFzc2lnbmVkIGJ5IHJlZmVyZW5jZVxuICAgICAgICAgICAgICAvLyBpbiB0aGUgZm9sbG93aW5nIGFkZCBvciByZW1vdmUgb3BzLCB0aGUgdmFsdWUgZmllbGQgaW5zaWRlIHRoZSBwYXRjaCB3aWxsIGFsc28gYmUgbW9kaWZ5ZWRcbiAgICAgICAgICAgICAgLy8gc28gd2UgdXNlIHZhbHVlIGZyb20gdGhlIGNsb25lZCBwYXRjaFxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBBREQ6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDFcbiAgICAgICAgICAgIC8qIEFycmF5ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwiLVwiID8gYmFzZS5wdXNoKHZhbHVlKSA6IGJhc2Uuc3BsaWNlKGtleSwgMCwgdmFsdWUpO1xuXG4gICAgICAgICAgICBjYXNlIDJcbiAgICAgICAgICAgIC8qIE1hcCAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5zZXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNhc2UgM1xuICAgICAgICAgICAgLyogU2V0ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLmFkZCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSRU1PVkU6XG4gICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDFcbiAgICAgICAgICAgIC8qIEFycmF5ICovXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHJldHVybiBiYXNlLnNwbGljZShrZXksIDEpO1xuXG4gICAgICAgICAgICBjYXNlIDJcbiAgICAgICAgICAgIC8qIE1hcCAqL1xuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICByZXR1cm4gYmFzZS5kZWxldGUoa2V5KTtcblxuICAgICAgICAgICAgY2FzZSAzXG4gICAgICAgICAgICAvKiBTZXQgKi9cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuZGVsZXRlKHBhdGNoLnZhbHVlKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZSBiYXNlW2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGllKDE3LCBvcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRyYWZ0O1xuICB9XG5cbiAgZnVuY3Rpb24gZGVlcENsb25lUGF0Y2hWYWx1ZShvYmopIHtcbiAgICBpZiAoIWlzRHJhZnRhYmxlKG9iaikpIHJldHVybiBvYmo7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5tYXAoZGVlcENsb25lUGF0Y2hWYWx1ZSk7XG4gICAgaWYgKGlzTWFwKG9iaikpIHJldHVybiBuZXcgTWFwKEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSkubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIGsgPSBfcmVmM1swXSxcbiAgICAgICAgICB2ID0gX3JlZjNbMV07XG4gICAgICByZXR1cm4gW2ssIGRlZXBDbG9uZVBhdGNoVmFsdWUodildO1xuICAgIH0pKTtcbiAgICBpZiAoaXNTZXQob2JqKSkgcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShvYmopLm1hcChkZWVwQ2xvbmVQYXRjaFZhbHVlKSk7XG4gICAgdmFyIGNsb25lZCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgY2xvbmVkW2tleV0gPSBkZWVwQ2xvbmVQYXRjaFZhbHVlKG9ialtrZXldKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzKG9iaiwgRFJBRlRBQkxFKSkgY2xvbmVkW0RSQUZUQUJMRV0gPSBvYmpbRFJBRlRBQkxFXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVQYXRjaFZhbHVlSWZOZWVkZWQob2JqKSB7XG4gICAgaWYgKGlzRHJhZnQob2JqKSkge1xuICAgICAgcmV0dXJuIGRlZXBDbG9uZVBhdGNoVmFsdWUob2JqKTtcbiAgICB9IGVsc2UgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGxvYWRQbHVnaW4oXCJQYXRjaGVzXCIsIHtcbiAgICBhcHBseVBhdGNoZXNfOiBhcHBseVBhdGNoZXNfLFxuICAgIGdlbmVyYXRlUGF0Y2hlc186IGdlbmVyYXRlUGF0Y2hlc18sXG4gICAgZ2VuZXJhdGVSZXBsYWNlbWVudFBhdGNoZXNfOiBnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc19cbiAgfSk7XG59XG5cbi8vIHR5cGVzIG9ubHkhXG5mdW5jdGlvbiBlbmFibGVNYXBTZXQoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciBfZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIGV4dGVuZFN0YXRpY3MoZCwgYikge1xuICAgIF9leHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IHtcbiAgICAgIF9fcHJvdG9fXzogW11cbiAgICB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgIGQuX19wcm90b19fID0gYjtcbiAgICB9IHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICBmb3IgKHZhciBwIGluIGIpIHtcbiAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZFN0YXRpY3MoZCwgYik7XG4gIH07IC8vIFVnbHkgaGFjayB0byByZXNvbHZlICM1MDIgYW5kIGluaGVyaXQgYnVpbHQgaW4gTWFwIC8gU2V0XG5cblxuICBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICAgIF9leHRlbmRTdGF0aWNzKGQsIGIpO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZDtcbiAgICB9XG5cbiAgICBkLnByb3RvdHlwZSA9ICggLy8gQHRzLWlnbm9yZVxuICAgIF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gIH1cblxuICB2YXIgRHJhZnRNYXAgPSBmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERyYWZ0TWFwLCBfc3VwZXIpOyAvLyBDcmVhdGUgY2xhc3MgbWFudWFsbHksIGNhdXNlICM1MDJcblxuXG4gICAgZnVuY3Rpb24gRHJhZnRNYXAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgIHRoaXNbRFJBRlRfU1RBVEVdID0ge1xuICAgICAgICB0eXBlXzogMlxuICAgICAgICAvKiBNYXAgKi9cbiAgICAgICAgLFxuICAgICAgICBwYXJlbnRfOiBwYXJlbnQsXG4gICAgICAgIHNjb3BlXzogcGFyZW50ID8gcGFyZW50LnNjb3BlXyA6IGdldEN1cnJlbnRTY29wZSgpLFxuICAgICAgICBtb2RpZmllZF86IGZhbHNlLFxuICAgICAgICBmaW5hbGl6ZWRfOiBmYWxzZSxcbiAgICAgICAgY29weV86IHVuZGVmaW5lZCxcbiAgICAgICAgYXNzaWduZWRfOiB1bmRlZmluZWQsXG4gICAgICAgIGJhc2VfOiB0YXJnZXQsXG4gICAgICAgIGRyYWZ0XzogdGhpcyxcbiAgICAgICAgaXNNYW51YWxfOiBmYWxzZSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHAgPSBEcmFmdE1hcC5wcm90b3R5cGU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwic2l6ZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICAgIH0gLy8gZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAvLyBjb25maWd1cmFibGU6IHRydWVcblxuICAgIH0pO1xuXG4gICAgcC5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbGF0ZXN0KHRoaXNbRFJBRlRfU1RBVEVdKS5oYXMoa2V5KTtcbiAgICB9O1xuXG4gICAgcC5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpc1tEUkFGVF9TVEFURV07XG4gICAgICBhc3NlcnRVbnJldm9rZWQoc3RhdGUpO1xuXG4gICAgICBpZiAoIWxhdGVzdChzdGF0ZSkuaGFzKGtleSkgfHwgbGF0ZXN0KHN0YXRlKS5nZXQoa2V5KSAhPT0gdmFsdWUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCB0cnVlKTtcbiAgICAgICAgc3RhdGUuY29weV8uc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uc2V0KGtleSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBwLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcblxuICAgICAgaWYgKHN0YXRlLmJhc2VfLmhhcyhrZXkpKSB7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5hc3NpZ25lZF8uZGVsZXRlKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmNvcHlfLmRlbGV0ZShrZXkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHAuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG5cbiAgICAgIGlmIChsYXRlc3Qoc3RhdGUpLnNpemUpIHtcbiAgICAgICAgcHJlcGFyZU1hcENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmFzc2lnbmVkXyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZWFjaChzdGF0ZS5iYXNlXywgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHN0YXRlLmFzc2lnbmVkXy5zZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS5jb3B5Xy5jbGVhcigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwLmZvckVhY2ggPSBmdW5jdGlvbiAoY2IsIHRoaXNBcmcpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgbGF0ZXN0KHN0YXRlKS5mb3JFYWNoKGZ1bmN0aW9uIChfdmFsdWUsIGtleSwgX21hcCkge1xuICAgICAgICBjYi5jYWxsKHRoaXNBcmcsIF90aGlzLmdldChrZXkpLCBrZXksIF90aGlzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcbiAgICAgIHZhciB2YWx1ZSA9IGxhdGVzdChzdGF0ZSkuZ2V0KGtleSk7XG5cbiAgICAgIGlmIChzdGF0ZS5maW5hbGl6ZWRfIHx8ICFpc0RyYWZ0YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgIT09IHN0YXRlLmJhc2VfLmdldChrZXkpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTsgLy8gZWl0aGVyIGFscmVhZHkgZHJhZnRlZCBvciByZWFzc2lnbmVkXG4gICAgICB9IC8vIGRlc3BpdGUgd2hhdCBpdCBsb29rcywgdGhpcyBjcmVhdGVzIGEgZHJhZnQgb25seSBvbmNlLCBzZWUgYWJvdmUgY29uZGl0aW9uXG5cblxuICAgICAgdmFyIGRyYWZ0ID0gY3JlYXRlUHJveHkoc3RhdGUuc2NvcGVfLmltbWVyXywgdmFsdWUsIHN0YXRlKTtcbiAgICAgIHByZXBhcmVNYXBDb3B5KHN0YXRlKTtcbiAgICAgIHN0YXRlLmNvcHlfLnNldChrZXksIGRyYWZ0KTtcbiAgICAgIHJldHVybiBkcmFmdDtcbiAgICB9O1xuXG4gICAgcC5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkua2V5cygpO1xuICAgIH07XG5cbiAgICBwLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICAgIF9yZWY7XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IHRoaXMua2V5cygpO1xuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIudmFsdWVzKCk7XG4gICAgICB9LCBfcmVmLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICAgICAgICBpZiAoci5kb25lKSByZXR1cm4gcjtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfdGhpczIuZ2V0KHIudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9LCBfcmVmO1xuICAgIH07XG5cbiAgICBwLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcyxcbiAgICAgICAgICBfcmVmMjtcblxuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5rZXlzKCk7XG4gICAgICByZXR1cm4gX3JlZjIgPSB7fSwgX3JlZjJbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLmVudHJpZXMoKTtcbiAgICAgIH0sIF9yZWYyLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICAgICAgICBpZiAoci5kb25lKSByZXR1cm4gcjtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfdGhpczMuZ2V0KHIudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IFtyLnZhbHVlLCB2YWx1ZV1cbiAgICAgICAgfTtcbiAgICAgIH0sIF9yZWYyO1xuICAgIH07XG5cbiAgICBwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERyYWZ0TWFwO1xuICB9KE1hcCk7XG5cbiAgZnVuY3Rpb24gcHJveHlNYXBfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBuZXcgRHJhZnRNYXAodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZU1hcENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICBzdGF0ZS5hc3NpZ25lZF8gPSBuZXcgTWFwKCk7XG4gICAgICBzdGF0ZS5jb3B5XyA9IG5ldyBNYXAoc3RhdGUuYmFzZV8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBEcmFmdFNldCA9IGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRHJhZnRTZXQsIF9zdXBlcik7IC8vIENyZWF0ZSBjbGFzcyBtYW51YWxseSwgY2F1c2UgIzUwMlxuXG5cbiAgICBmdW5jdGlvbiBEcmFmdFNldCh0YXJnZXQsIHBhcmVudCkge1xuICAgICAgdGhpc1tEUkFGVF9TVEFURV0gPSB7XG4gICAgICAgIHR5cGVfOiAzXG4gICAgICAgIC8qIFNldCAqL1xuICAgICAgICAsXG4gICAgICAgIHBhcmVudF86IHBhcmVudCxcbiAgICAgICAgc2NvcGVfOiBwYXJlbnQgPyBwYXJlbnQuc2NvcGVfIDogZ2V0Q3VycmVudFNjb3BlKCksXG4gICAgICAgIG1vZGlmaWVkXzogZmFsc2UsXG4gICAgICAgIGZpbmFsaXplZF86IGZhbHNlLFxuICAgICAgICBjb3B5XzogdW5kZWZpbmVkLFxuICAgICAgICBiYXNlXzogdGFyZ2V0LFxuICAgICAgICBkcmFmdF86IHRoaXMsXG4gICAgICAgIGRyYWZ0c186IG5ldyBNYXAoKSxcbiAgICAgICAgcmV2b2tlZF86IGZhbHNlLFxuICAgICAgICBpc01hbnVhbF86IGZhbHNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHAgPSBEcmFmdFNldC5wcm90b3R5cGU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsIFwic2l6ZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGxhdGVzdCh0aGlzW0RSQUZUX1NUQVRFXSkuc2l6ZTtcbiAgICAgIH0gLy8gZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgIH0pO1xuXG4gICAgcC5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTsgLy8gYml0IG9mIHRyaWNrZXJ5IGhlcmUsIHRvIGJlIGFibGUgdG8gcmVjb2duaXplIGJvdGggdGhlIHZhbHVlLCBhbmQgdGhlIGRyYWZ0IG9mIGl0cyB2YWx1ZVxuXG4gICAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5iYXNlXy5oYXModmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuY29weV8uaGFzKHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpICYmIHN0YXRlLmNvcHlfLmhhcyhzdGF0ZS5kcmFmdHNfLmdldCh2YWx1ZSkpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcC5hZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcblxuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcHJlcGFyZVNldENvcHkoc3RhdGUpO1xuICAgICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBwLmRlbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICBtYXJrQ2hhbmdlZChzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZGVsZXRlKHZhbHVlKSB8fCAoc3RhdGUuZHJhZnRzXy5oYXModmFsdWUpID8gc3RhdGUuY29weV8uZGVsZXRlKHN0YXRlLmRyYWZ0c18uZ2V0KHZhbHVlKSkgOlxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXNbRFJBRlRfU1RBVEVdO1xuICAgICAgYXNzZXJ0VW5yZXZva2VkKHN0YXRlKTtcblxuICAgICAgaWYgKGxhdGVzdChzdGF0ZSkuc2l6ZSkge1xuICAgICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICAgIG1hcmtDaGFuZ2VkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUuY29weV8uY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcC52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8udmFsdWVzKCk7XG4gICAgfTtcblxuICAgIHAuZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzW0RSQUZUX1NUQVRFXTtcbiAgICAgIGFzc2VydFVucmV2b2tlZChzdGF0ZSk7XG4gICAgICBwcmVwYXJlU2V0Q29weShzdGF0ZSk7XG4gICAgICByZXR1cm4gc3RhdGUuY29weV8uZW50cmllcygpO1xuICAgIH07XG5cbiAgICBwLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9O1xuXG4gICAgcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9O1xuXG4gICAgcC5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChjYiwgdGhpc0FyZykge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy52YWx1ZXMoKTtcbiAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgY2IuY2FsbCh0aGlzQXJnLCByZXN1bHQudmFsdWUsIHJlc3VsdC52YWx1ZSwgdGhpcyk7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIERyYWZ0U2V0O1xuICB9KFNldCk7XG5cbiAgZnVuY3Rpb24gcHJveHlTZXRfKHRhcmdldCwgcGFyZW50KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBuZXcgRHJhZnRTZXQodGFyZ2V0LCBwYXJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVNldENvcHkoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLmNvcHlfKSB7XG4gICAgICAvLyBjcmVhdGUgZHJhZnRzIGZvciBhbGwgZW50cmllcyB0byBwcmVzZXJ2ZSBpbnNlcnRpb24gb3JkZXJcbiAgICAgIHN0YXRlLmNvcHlfID0gbmV3IFNldCgpO1xuICAgICAgc3RhdGUuYmFzZV8uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKGlzRHJhZnRhYmxlKHZhbHVlKSkge1xuICAgICAgICAgIHZhciBkcmFmdCA9IGNyZWF0ZVByb3h5KHN0YXRlLnNjb3BlXy5pbW1lcl8sIHZhbHVlLCBzdGF0ZSk7XG4gICAgICAgICAgc3RhdGUuZHJhZnRzXy5zZXQodmFsdWUsIGRyYWZ0KTtcbiAgICAgICAgICBzdGF0ZS5jb3B5Xy5hZGQoZHJhZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmNvcHlfLmFkZCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydFVucmV2b2tlZChzdGF0ZVxuICAvKkVTNVN0YXRlIHwgTWFwU3RhdGUgfCBTZXRTdGF0ZSovXG4gICkge1xuICAgIGlmIChzdGF0ZS5yZXZva2VkXykgZGllKDMsIEpTT04uc3RyaW5naWZ5KGxhdGVzdChzdGF0ZSkpKTtcbiAgfVxuXG4gIGxvYWRQbHVnaW4oXCJNYXBTZXRcIiwge1xuICAgIHByb3h5TWFwXzogcHJveHlNYXBfLFxuICAgIHByb3h5U2V0XzogcHJveHlTZXRfXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmFibGVBbGxQbHVnaW5zKCkge1xuICBlbmFibGVFUzUoKTtcbiAgZW5hYmxlTWFwU2V0KCk7XG4gIGVuYWJsZVBhdGNoZXMoKTtcbn1cblxudmFyIGltbWVyID1cbi8qI19fUFVSRV9fKi9cbm5ldyBJbW1lcigpO1xuLyoqXHJcbiAqIFRoZSBgcHJvZHVjZWAgZnVuY3Rpb24gdGFrZXMgYSB2YWx1ZSBhbmQgYSBcInJlY2lwZSBmdW5jdGlvblwiICh3aG9zZVxyXG4gKiByZXR1cm4gdmFsdWUgb2Z0ZW4gZGVwZW5kcyBvbiB0aGUgYmFzZSBzdGF0ZSkuIFRoZSByZWNpcGUgZnVuY3Rpb24gaXNcclxuICogZnJlZSB0byBtdXRhdGUgaXRzIGZpcnN0IGFyZ3VtZW50IGhvd2V2ZXIgaXQgd2FudHMuIEFsbCBtdXRhdGlvbnMgYXJlXHJcbiAqIG9ubHkgZXZlciBhcHBsaWVkIHRvIGEgX19jb3B5X18gb2YgdGhlIGJhc2Ugc3RhdGUuXHJcbiAqXHJcbiAqIFBhc3Mgb25seSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFwiY3VycmllZCBwcm9kdWNlclwiIHdoaWNoIHJlbGlldmVzIHlvdVxyXG4gKiBmcm9tIHBhc3NpbmcgdGhlIHJlY2lwZSBmdW5jdGlvbiBldmVyeSB0aW1lLlxyXG4gKlxyXG4gKiBPbmx5IHBsYWluIG9iamVjdHMgYW5kIGFycmF5cyBhcmUgbWFkZSBtdXRhYmxlLiBBbGwgb3RoZXIgb2JqZWN0cyBhcmVcclxuICogY29uc2lkZXJlZCB1bmNvcHlhYmxlLlxyXG4gKlxyXG4gKiBOb3RlOiBUaGlzIGZ1bmN0aW9uIGlzIF9fYm91bmRfXyB0byBpdHMgYEltbWVyYCBpbnN0YW5jZS5cclxuICpcclxuICogQHBhcmFtIHthbnl9IGJhc2UgLSB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9kdWNlciAtIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYSBwcm94eSBvZiB0aGUgYmFzZSBzdGF0ZSBhcyBmaXJzdCBhcmd1bWVudCBhbmQgd2hpY2ggY2FuIGJlIGZyZWVseSBtb2RpZmllZFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXRjaExpc3RlbmVyIC0gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aXRoIGFsbCB0aGUgcGF0Y2hlcyBwcm9kdWNlZCBoZXJlXHJcbiAqIEByZXR1cm5zIHthbnl9IGEgbmV3IHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZSBpZiBub3RoaW5nIHdhcyBtb2RpZmllZFxyXG4gKi9cblxudmFyIHByb2R1Y2UgPSBpbW1lci5wcm9kdWNlO1xuLyoqXHJcbiAqIExpa2UgYHByb2R1Y2VgLCBidXQgYHByb2R1Y2VXaXRoUGF0Y2hlc2AgYWx3YXlzIHJldHVybnMgYSB0dXBsZVxyXG4gKiBbbmV4dFN0YXRlLCBwYXRjaGVzLCBpbnZlcnNlUGF0Y2hlc10gKGluc3RlYWQgb2YganVzdCB0aGUgbmV4dCBzdGF0ZSlcclxuICovXG5cbnZhciBwcm9kdWNlV2l0aFBhdGNoZXMgPVxuLyojX19QVVJFX18qL1xuaW1tZXIucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQoaW1tZXIpO1xuLyoqXHJcbiAqIFBhc3MgdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IGZyZWV6ZSBhbGwgY29waWVzIGNyZWF0ZWQgYnkgSW1tZXIuXHJcbiAqXHJcbiAqIEFsd2F5cyBmcmVlemUgYnkgZGVmYXVsdCwgZXZlbiBpbiBwcm9kdWN0aW9uIG1vZGVcclxuICovXG5cbnZhciBzZXRBdXRvRnJlZXplID1cbi8qI19fUFVSRV9fKi9cbmltbWVyLnNldEF1dG9GcmVlemUuYmluZChpbW1lcik7XG4vKipcclxuICogUGFzcyB0cnVlIHRvIHVzZSB0aGUgRVMyMDE1IGBQcm94eWAgY2xhc3Mgd2hlbiBjcmVhdGluZyBkcmFmdHMsIHdoaWNoIGlzXHJcbiAqIGFsd2F5cyBmYXN0ZXIgdGhhbiB1c2luZyBFUzUgcHJveGllcy5cclxuICpcclxuICogQnkgZGVmYXVsdCwgZmVhdHVyZSBkZXRlY3Rpb24gaXMgdXNlZCwgc28gY2FsbGluZyB0aGlzIGlzIHJhcmVseSBuZWNlc3NhcnkuXHJcbiAqL1xuXG52YXIgc2V0VXNlUHJveGllcyA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5zZXRVc2VQcm94aWVzLmJpbmQoaW1tZXIpO1xuLyoqXHJcbiAqIEFwcGx5IGFuIGFycmF5IG9mIEltbWVyIHBhdGNoZXMgdG8gdGhlIGZpcnN0IGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGEgcHJvZHVjZXIsIHdoaWNoIG1lYW5zIGNvcHktb24td3JpdGUgaXMgaW4gZWZmZWN0LlxyXG4gKi9cblxudmFyIGFwcGx5UGF0Y2hlcyA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5hcHBseVBhdGNoZXMuYmluZChpbW1lcik7XG4vKipcclxuICogQ3JlYXRlIGFuIEltbWVyIGRyYWZ0IGZyb20gdGhlIGdpdmVuIGJhc2Ugc3RhdGUsIHdoaWNoIG1heSBiZSBhIGRyYWZ0IGl0c2VsZi5cclxuICogVGhlIGRyYWZ0IGNhbiBiZSBtb2RpZmllZCB1bnRpbCB5b3UgZmluYWxpemUgaXQgd2l0aCB0aGUgYGZpbmlzaERyYWZ0YCBmdW5jdGlvbi5cclxuICovXG5cbnZhciBjcmVhdGVEcmFmdCA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5jcmVhdGVEcmFmdC5iaW5kKGltbWVyKTtcbi8qKlxyXG4gKiBGaW5hbGl6ZSBhbiBJbW1lciBkcmFmdCBmcm9tIGEgYGNyZWF0ZURyYWZ0YCBjYWxsLCByZXR1cm5pbmcgdGhlIGJhc2Ugc3RhdGVcclxuICogKGlmIG5vIGNoYW5nZXMgd2VyZSBtYWRlKSBvciBhIG1vZGlmaWVkIGNvcHkuIFRoZSBkcmFmdCBtdXN0ICpub3QqIGJlXHJcbiAqIG11dGF0ZWQgYWZ0ZXJ3YXJkcy5cclxuICpcclxuICogUGFzcyBhIGZ1bmN0aW9uIGFzIHRoZSAybmQgYXJndW1lbnQgdG8gZ2VuZXJhdGUgSW1tZXIgcGF0Y2hlcyBiYXNlZCBvbiB0aGVcclxuICogY2hhbmdlcyB0aGF0IHdlcmUgbWFkZS5cclxuICovXG5cbnZhciBmaW5pc2hEcmFmdCA9XG4vKiNfX1BVUkVfXyovXG5pbW1lci5maW5pc2hEcmFmdC5iaW5kKGltbWVyKTtcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGEgbm8tb3AsIGJ1dCBjYW4gYmUgdXNlZCB0byBjYXN0IGFuIGltbXV0YWJsZSB0eXBlXHJcbiAqIHRvIGFuIGRyYWZ0IHR5cGUgYW5kIG1ha2UgVHlwZVNjcmlwdCBoYXBweVxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXG5cbmZ1bmN0aW9uIGNhc3REcmFmdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyBhY3R1YWxseSBhIG5vLW9wLCBidXQgY2FuIGJlIHVzZWQgdG8gY2FzdCBhIG11dGFibGUgdHlwZVxyXG4gKiB0byBhbiBpbW11dGFibGUgdHlwZSBhbmQgbWFrZSBUeXBlU2NyaXB0IGhhcHB5XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKi9cblxuZnVuY3Rpb24gY2FzdEltbXV0YWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMuSW1tZXIgPSBJbW1lcjtcbmV4cG9ydHMuYXBwbHlQYXRjaGVzID0gYXBwbHlQYXRjaGVzO1xuZXhwb3J0cy5jYXN0RHJhZnQgPSBjYXN0RHJhZnQ7XG5leHBvcnRzLmNhc3RJbW11dGFibGUgPSBjYXN0SW1tdXRhYmxlO1xuZXhwb3J0cy5jcmVhdGVEcmFmdCA9IGNyZWF0ZURyYWZ0O1xuZXhwb3J0cy5jdXJyZW50ID0gY3VycmVudDtcbmV4cG9ydHMuZGVmYXVsdCA9IHByb2R1Y2U7XG5leHBvcnRzLmVuYWJsZUFsbFBsdWdpbnMgPSBlbmFibGVBbGxQbHVnaW5zO1xuZXhwb3J0cy5lbmFibGVFUzUgPSBlbmFibGVFUzU7XG5leHBvcnRzLmVuYWJsZU1hcFNldCA9IGVuYWJsZU1hcFNldDtcbmV4cG9ydHMuZW5hYmxlUGF0Y2hlcyA9IGVuYWJsZVBhdGNoZXM7XG5leHBvcnRzLmZpbmlzaERyYWZ0ID0gZmluaXNoRHJhZnQ7XG5leHBvcnRzLmZyZWV6ZSA9IGZyZWV6ZTtcbmV4cG9ydHMuaW1tZXJhYmxlID0gRFJBRlRBQkxFO1xuZXhwb3J0cy5pc0RyYWZ0ID0gaXNEcmFmdDtcbmV4cG9ydHMuaXNEcmFmdGFibGUgPSBpc0RyYWZ0YWJsZTtcbmV4cG9ydHMubm90aGluZyA9IE5PVEhJTkc7XG5leHBvcnRzLm9yaWdpbmFsID0gb3JpZ2luYWw7XG5leHBvcnRzLnByb2R1Y2UgPSBwcm9kdWNlO1xuZXhwb3J0cy5wcm9kdWNlV2l0aFBhdGNoZXMgPSBwcm9kdWNlV2l0aFBhdGNoZXM7XG5leHBvcnRzLnNldEF1dG9GcmVlemUgPSBzZXRBdXRvRnJlZXplO1xuZXhwb3J0cy5zZXRVc2VQcm94aWVzID0gc2V0VXNlUHJveGllcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmNqcy5kZXZlbG9wbWVudC5qcy5tYXBcbiIsIlxuJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbW1lci5janMucHJvZHVjdGlvbi5taW4uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ltbWVyLmNqcy5kZXZlbG9wbWVudC5qcycpXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCLCBjb21wYXJlLCBjb21wYXJlQ29udGV4dCkge1xuICB2YXIgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgb2JqQSwgb2JqQikgOiB2b2lkIDA7XG5cbiAgaWYgKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuICEhcmV0O1xuICB9XG5cbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCAhb2JqQSB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcbiAgICB2YXIga2V5ID0ga2V5c0FbaWR4XTtcblxuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVBID0gb2JqQVtrZXldO1xuICAgIHZhciB2YWx1ZUIgPSBvYmpCW2tleV07XG5cbiAgICByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCB2YWx1ZUEsIHZhbHVlQiwga2V5KSA6IHZvaWQgMDtcblxuICAgIGlmIChyZXQgPT09IGZhbHNlIHx8IChyZXQgPT09IHZvaWQgMCAmJiB2YWx1ZUEgIT09IHZhbHVlQikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCJpbXBvcnR7dHlwZU9mIGFzIGUsaXNFbGVtZW50IGFzIHQsaXNWYWxpZEVsZW1lbnRUeXBlIGFzIG59ZnJvbVwicmVhY3QtaXNcIjtpbXBvcnQgcix7dXNlU3RhdGUgYXMgbyx1c2VDb250ZXh0IGFzIHMsdXNlTWVtbyBhcyBpLHVzZUVmZmVjdCBhcyBhLHVzZVJlZiBhcyBjLGNyZWF0ZUVsZW1lbnQgYXMgdSx1c2VEZWJ1Z1ZhbHVlIGFzIGwsdXNlTGF5b3V0RWZmZWN0IGFzIGR9ZnJvbVwicmVhY3RcIjtpbXBvcnQgaCBmcm9tXCJzaGFsbG93ZXF1YWxcIjtpbXBvcnQgcCBmcm9tXCJAZW1vdGlvbi9zdHlsaXNcIjtpbXBvcnQgZiBmcm9tXCJAZW1vdGlvbi91bml0bGVzc1wiO2ltcG9ydCBtIGZyb21cIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIjtpbXBvcnQgeSBmcm9tXCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiO2Z1bmN0aW9uIHYoKXtyZXR1cm4odj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scikmJihlW3JdPW5bcl0pfXJldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBnPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtlWzBdXSxyPTAsbz10Lmxlbmd0aDtyPG87cis9MSluLnB1c2godFtyXSxlW3IrMV0pO3JldHVybiBufSxTPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT09dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJlwiW29iamVjdCBPYmplY3RdXCI9PT0odC50b1N0cmluZz90LnRvU3RyaW5nKCk6T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKSYmIWUodCl9LHc9T2JqZWN0LmZyZWV6ZShbXSksRT1PYmplY3QuZnJlZXplKHt9KTtmdW5jdGlvbiBiKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9ZnVuY3Rpb24gXyhlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmZXx8ZS5kaXNwbGF5TmFtZXx8ZS5uYW1lfHxcIkNvbXBvbmVudFwifWZ1bmN0aW9uIE4oZSl7cmV0dXJuIGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLnN0eWxlZENvbXBvbmVudElkfXZhciBBPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiYocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0FUVFJ8fHByb2Nlc3MuZW52LlNDX0FUVFIpfHxcImRhdGEtc3R5bGVkXCIsQz1cIjUuMy42XCIsST1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcIkhUTUxFbGVtZW50XCJpbiB3aW5kb3csUD1Cb29sZWFuKFwiYm9vbGVhblwiPT10eXBlb2YgU0NfRElTQUJMRV9TUEVFRFk/U0NfRElTQUJMRV9TUEVFRFk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWT9cImZhbHNlXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWT9cImZhbHNlXCIhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk6XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViksTz17fSxSPVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ezE6XCJDYW5ub3QgY3JlYXRlIHN0eWxlZC1jb21wb25lbnQgZm9yIGNvbXBvbmVudDogJXMuXFxuXFxuXCIsMjpcIkNhbid0IGNvbGxlY3Qgc3R5bGVzIG9uY2UgeW91J3ZlIGNvbnN1bWVkIGEgYFNlcnZlclN0eWxlU2hlZXRgJ3Mgc3R5bGVzISBgU2VydmVyU3R5bGVTaGVldGAgaXMgYSBvbmUgb2ZmIGluc3RhbmNlIGZvciBlYWNoIHNlcnZlci1zaWRlIHJlbmRlciBjeWNsZS5cXG5cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJldXNlIGl0IGFjcm9zcyByZW5kZXJzP1xcbi0gQXJlIHlvdSBhY2NpZGVudGFsbHkgY2FsbGluZyBjb2xsZWN0U3R5bGVzIHR3aWNlP1xcblxcblwiLDM6XCJTdHJlYW1pbmcgU1NSIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudDsgUGxlYXNlIGRvIG5vdCB0cnkgdG8gY2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUgYnJvd3Nlci5cXG5cXG5cIiw0OlwiVGhlIGBTdHlsZVNoZWV0TWFuYWdlcmAgZXhwZWN0cyBhIHZhbGlkIHRhcmdldCBvciBzaGVldCBwcm9wIVxcblxcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBjbGllbnQgYW5kIGlzIHlvdXIgdGFyZ2V0IGZhbHN5P1xcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBzZXJ2ZXIgYW5kIGlzIHRoZSBzaGVldCBmYWxzeT9cXG5cXG5cIiw1OlwiVGhlIGNsb25lIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCBvbiB0aGUgY2xpZW50IVxcblxcbi0gQXJlIHlvdSBydW5uaW5nIGluIGEgY2xpZW50LWxpa2UgZW52aXJvbm1lbnQgb24gdGhlIHNlcnZlcj9cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJ1biBTU1Igb24gdGhlIGNsaWVudD9cXG5cXG5cIiw2OlwiVHJ5aW5nIHRvIGluc2VydCBhIG5ldyBzdHlsZSB0YWcsIGJ1dCB0aGUgZ2l2ZW4gTm9kZSBpcyB1bm1vdW50ZWQhXFxuXFxuLSBBcmUgeW91IHVzaW5nIGEgY3VzdG9tIHRhcmdldCB0aGF0IGlzbid0IG1vdW50ZWQ/XFxuLSBEb2VzIHlvdXIgZG9jdW1lbnQgbm90IGhhdmUgYSB2YWxpZCBoZWFkIGVsZW1lbnQ/XFxuLSBIYXZlIHlvdSBhY2NpZGVudGFsbHkgcmVtb3ZlZCBhIHN0eWxlIHRhZyBtYW51YWxseT9cXG5cXG5cIiw3OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgXCJ0aGVtZVwiIHByb3AgZnVuY3Rpb24sIGUuZy5cXG5cXG5gYGBqc1xcbnRoZW1lPXsoKSA9PiAoe30pfVxcbmBgYFxcblxcbicsODonVGhlbWVQcm92aWRlcjogUGxlYXNlIG1ha2UgeW91ciBcInRoZW1lXCIgcHJvcCBhbiBvYmplY3QuXFxuXFxuJyw5OlwiTWlzc2luZyBkb2N1bWVudCBgPGhlYWQ+YFxcblxcblwiLDEwOlwiQ2Fubm90IGZpbmQgYSBTdHlsZVNoZWV0IGluc3RhbmNlLiBVc3VhbGx5IHRoaXMgaGFwcGVucyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29waWVzIG9mIHN0eWxlZC1jb21wb25lbnRzIGxvYWRlZCBhdCBvbmNlLiBDaGVjayBvdXQgdGhpcyBpc3N1ZSBmb3IgaG93IHRvIHRyb3VibGVzaG9vdCBhbmQgZml4IHRoZSBjb21tb24gY2FzZXMgd2hlcmUgdGhpcyBzaXR1YXRpb24gY2FuIGhhcHBlbjogaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2lzc3Vlcy8xOTQxI2lzc3VlY29tbWVudC00MTc4NjIwMjFcXG5cXG5cIiwxMTpcIl9UaGlzIGVycm9yIHdhcyByZXBsYWNlZCB3aXRoIGEgZGV2LXRpbWUgd2FybmluZywgaXQgd2lsbCBiZSBkZWxldGVkIGZvciB2NCBmaW5hbC5fIFtjcmVhdGVHbG9iYWxTdHlsZV0gcmVjZWl2ZWQgY2hpbGRyZW4gd2hpY2ggd2lsbCBub3QgYmUgcmVuZGVyZWQuIFBsZWFzZSB1c2UgdGhlIGNvbXBvbmVudCB3aXRob3V0IHBhc3NpbmcgY2hpbGRyZW4gZWxlbWVudHMuXFxuXFxuXCIsMTI6XCJJdCBzZWVtcyB5b3UgYXJlIGludGVycG9sYXRpbmcgYSBrZXlmcmFtZSBkZWNsYXJhdGlvbiAoJXMpIGludG8gYW4gdW50YWdnZWQgc3RyaW5nLiBUaGlzIHdhcyBzdXBwb3J0ZWQgaW4gc3R5bGVkLWNvbXBvbmVudHMgdjMsIGJ1dCBpcyBub3QgbG9uZ2VyIHN1cHBvcnRlZCBpbiB2NCBhcyBrZXlmcmFtZXMgYXJlIG5vdyBpbmplY3RlZCBvbi1kZW1hbmQuIFBsZWFzZSB3cmFwIHlvdXIgc3RyaW5nIGluIHRoZSBjc3NcXFxcYFxcXFxgIGhlbHBlciB3aGljaCBlbnN1cmVzIHRoZSBzdHlsZXMgYXJlIGluamVjdGVkIGNvcnJlY3RseS4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjc3NcXG5cXG5cIiwxMzpcIiVzIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cXG5cXG5cIiwxNDonVGhlbWVQcm92aWRlcjogXCJ0aGVtZVwiIHByb3AgaXMgcmVxdWlyZWQuXFxuXFxuJywxNTpcIkEgc3R5bGlzIHBsdWdpbiBoYXMgYmVlbiBzdXBwbGllZCB0aGF0IGlzIG5vdCBuYW1lZC4gV2UgbmVlZCBhIG5hbWUgZm9yIGVhY2ggcGx1Z2luIHRvIGJlIGFibGUgdG8gcHJldmVudCBzdHlsaW5nIGNvbGxpc2lvbnMgYmV0d2VlbiBkaWZmZXJlbnQgc3R5bGlzIGNvbmZpZ3VyYXRpb25zIHdpdGhpbiB0aGUgc2FtZSBhcHAuIEJlZm9yZSB5b3UgcGFzcyB5b3VyIHBsdWdpbiB0byBgPFN0eWxlU2hlZXRNYW5hZ2VyIHN0eWxpc1BsdWdpbnM9e1tdfT5gLCBwbGVhc2UgbWFrZSBzdXJlIGVhY2ggcGx1Z2luIGlzIHVuaXF1ZWx5LW5hbWVkLCBlLmcuXFxuXFxuYGBganNcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaW1wb3J0ZWRQbHVnaW4sICduYW1lJywgeyB2YWx1ZTogJ3NvbWUtdW5pcXVlLW5hbWUnIH0pO1xcbmBgYFxcblxcblwiLDE2OlwiUmVhY2hlZCB0aGUgbGltaXQgb2YgaG93IG1hbnkgc3R5bGVkIGNvbXBvbmVudHMgbWF5IGJlIGNyZWF0ZWQgYXQgZ3JvdXAgJXMuXFxuWW91IG1heSBvbmx5IGNyZWF0ZSB1cCB0byAxLDA3Myw3NDEsODI0IGNvbXBvbmVudHMuIElmIHlvdSdyZSBjcmVhdGluZyBjb21wb25lbnRzIGR5bmFtaWNhbGx5LFxcbmFzIGZvciBpbnN0YW5jZSBpbiB5b3VyIHJlbmRlciBtZXRob2QgdGhlbiB5b3UgbWF5IGJlIHJ1bm5pbmcgaW50byB0aGlzIGxpbWl0YXRpb24uXFxuXFxuXCIsMTc6XCJDU1NTdHlsZVNoZWV0IGNvdWxkIG5vdCBiZSBmb3VuZCBvbiBIVE1MU3R5bGVFbGVtZW50LlxcbkhhcyBzdHlsZWQtY29tcG9uZW50cycgc3R5bGUgdGFnIGJlZW4gdW5tb3VudGVkIG9yIGFsdGVyZWQgYnkgYW5vdGhlciBzY3JpcHQ/XFxuXCJ9Ont9O2Z1bmN0aW9uIEQoKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MD92b2lkIDA6YXJndW1lbnRzWzBdLHQ9W10sbj0xLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bis9MSl0LnB1c2gobjwwfHxhcmd1bWVudHMubGVuZ3RoPD1uP3ZvaWQgMDphcmd1bWVudHNbbl0pO3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe2U9ZS5yZXBsYWNlKC8lW2Etel0vLHQpfSkpLGV9ZnVuY3Rpb24gaihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07dGhyb3dcInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WP25ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXQuaW8vSlVJYUUjXCIrZStcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIisobi5sZW5ndGg+MD9cIiBBcmdzOiBcIituLmpvaW4oXCIsIFwiKTpcIlwiKSk6bmV3IEVycm9yKEQuYXBwbHkodm9pZCAwLFtSW2VdXS5jb25jYXQobikpLnRyaW0oKSl9dmFyIFQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkoNTEyKSx0aGlzLmxlbmd0aD01MTIsdGhpcy50YWc9ZX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbmRleE9mR3JvdXA9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj0wO248ZTtuKyspdCs9dGhpcy5ncm91cFNpemVzW25dO3JldHVybiB0fSx0Lmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCl7aWYoZT49dGhpcy5ncm91cFNpemVzLmxlbmd0aCl7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplcyxyPW4ubGVuZ3RoLG89cjtlPj1vOykobzw8PTEpPDAmJmooMTYsXCJcIitlKTt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KG8pLHRoaXMuZ3JvdXBTaXplcy5zZXQobiksdGhpcy5sZW5ndGg9bztmb3IodmFyIHM9cjtzPG87cysrKXRoaXMuZ3JvdXBTaXplc1tzXT0wfWZvcih2YXIgaT10aGlzLmluZGV4T2ZHcm91cChlKzEpLGE9MCxjPXQubGVuZ3RoO2E8YzthKyspdGhpcy50YWcuaW5zZXJ0UnVsZShpLHRbYV0pJiYodGhpcy5ncm91cFNpemVzW2VdKyssaSsrKX0sdC5jbGVhckdyb3VwPWZ1bmN0aW9uKGUpe2lmKGU8dGhpcy5sZW5ndGgpe3ZhciB0PXRoaXMuZ3JvdXBTaXplc1tlXSxuPXRoaXMuaW5kZXhPZkdyb3VwKGUpLHI9bit0O3RoaXMuZ3JvdXBTaXplc1tlXT0wO2Zvcih2YXIgbz1uO288cjtvKyspdGhpcy50YWcuZGVsZXRlUnVsZShuKX19LHQuZ2V0R3JvdXA9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjtpZihlPj10aGlzLmxlbmd0aHx8MD09PXRoaXMuZ3JvdXBTaXplc1tlXSlyZXR1cm4gdDtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzW2VdLHI9dGhpcy5pbmRleE9mR3JvdXAoZSksbz1yK24scz1yO3M8bztzKyspdCs9dGhpcy50YWcuZ2V0UnVsZShzKStcIi8qIXNjKi9cXG5cIjtyZXR1cm4gdH0sZX0oKSx4PW5ldyBNYXAsaz1uZXcgTWFwLFY9MSxCPWZ1bmN0aW9uKGUpe2lmKHguaGFzKGUpKXJldHVybiB4LmdldChlKTtmb3IoO2suaGFzKFYpOylWKys7dmFyIHQ9VisrO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJigoMHx0KTwwfHx0PjE8PDMwKSYmaigxNixcIlwiK3QpLHguc2V0KGUsdCksay5zZXQodCxlKSx0fSx6PWZ1bmN0aW9uKGUpe3JldHVybiBrLmdldChlKX0sTT1mdW5jdGlvbihlLHQpe3Q+PVYmJihWPXQrMSkseC5zZXQoZSx0KSxrLnNldCh0LGUpfSxHPVwic3R5bGVbXCIrQSsnXVtkYXRhLXN0eWxlZC12ZXJzaW9uPVwiNS4zLjZcIl0nLEw9bmV3IFJlZ0V4cChcIl5cIitBKydcXFxcLmcoXFxcXGQrKVxcXFxbaWQ9XCIoW1xcXFx3XFxcXGQtXSspXCJcXFxcXS4qP1wiKFteXCJdKiknKSxGPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHIsbz1uLnNwbGl0KFwiLFwiKSxzPTAsaT1vLmxlbmd0aDtzPGk7cysrKShyPW9bc10pJiZlLnJlZ2lzdGVyTmFtZSh0LHIpfSxZPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPSh0LnRleHRDb250ZW50fHxcIlwiKS5zcGxpdChcIi8qIXNjKi9cXG5cIikscj1bXSxvPTAscz1uLmxlbmd0aDtvPHM7bysrKXt2YXIgaT1uW29dLnRyaW0oKTtpZihpKXt2YXIgYT1pLm1hdGNoKEwpO2lmKGEpe3ZhciBjPTB8cGFyc2VJbnQoYVsxXSwxMCksdT1hWzJdOzAhPT1jJiYoTSh1LGMpLEYoZSx1LGFbM10pLGUuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoYyxyKSksci5sZW5ndGg9MH1lbHNlIHIucHVzaChpKX19fSxxPWZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIF9fd2VicGFja19ub25jZV9fP19fd2VicGFja19ub25jZV9fOm51bGx9LEg9ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuaGVhZCxuPWV8fHQscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksbz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5jaGlsZE5vZGVzLG49dC5sZW5ndGg7bj49MDtuLS0pe3ZhciByPXRbbl07aWYociYmMT09PXIubm9kZVR5cGUmJnIuaGFzQXR0cmlidXRlKEEpKXJldHVybiByfX0obikscz12b2lkIDAhPT1vP28ubmV4dFNpYmxpbmc6bnVsbDtyLnNldEF0dHJpYnV0ZShBLFwiYWN0aXZlXCIpLHIuc2V0QXR0cmlidXRlKFwiZGF0YS1zdHlsZWQtdmVyc2lvblwiLFwiNS4zLjZcIik7dmFyIGk9cSgpO3JldHVybiBpJiZyLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsaSksbi5pbnNlcnRCZWZvcmUocixzKSxyfSwkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKSx0aGlzLnNoZWV0PWZ1bmN0aW9uKGUpe2lmKGUuc2hlZXQpcmV0dXJuIGUuc2hlZXQ7Zm9yKHZhciB0PWRvY3VtZW50LnN0eWxlU2hlZXRzLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07aWYoby5vd25lck5vZGU9PT1lKXJldHVybiBvfWooMTcpfSh0KSx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXt0cnl7cmV0dXJuIHRoaXMuc2hlZXQuaW5zZXJ0UnVsZSh0LGUpLHRoaXMubGVuZ3RoKyssITB9Y2F0Y2goZSl7cmV0dXJuITF9fSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5zaGVldC5kZWxldGVSdWxlKGUpLHRoaXMubGVuZ3RoLS19LHQuZ2V0UnVsZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnNoZWV0LmNzc1J1bGVzW2VdO3JldHVybiB2b2lkIDAhPT10JiZcInN0cmluZ1wiPT10eXBlb2YgdC5jc3NUZXh0P3QuY3NzVGV4dDpcIlwifSxlfSgpLFc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXMuZWxlbWVudD1IKGUpO3RoaXMubm9kZXM9dC5jaGlsZE5vZGVzLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe2lmKGU8PXRoaXMubGVuZ3RoJiZlPj0wKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSxyPXRoaXMubm9kZXNbZV07cmV0dXJuIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUobixyfHxudWxsKSx0aGlzLmxlbmd0aCsrLCEwfXJldHVybiExfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMubm9kZXNbZV0pLHRoaXMubGVuZ3RoLS19LHQuZ2V0UnVsZT1mdW5jdGlvbihlKXtyZXR1cm4gZTx0aGlzLmxlbmd0aD90aGlzLm5vZGVzW2VdLnRleHRDb250ZW50OlwiXCJ9LGV9KCksVT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ydWxlcz1bXSx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZTw9dGhpcy5sZW5ndGgmJih0aGlzLnJ1bGVzLnNwbGljZShlLDAsdCksdGhpcy5sZW5ndGgrKywhMCl9LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnJ1bGVzLnNwbGljZShlLDEpLHRoaXMubGVuZ3RoLS19LHQuZ2V0UnVsZT1mdW5jdGlvbihlKXtyZXR1cm4gZTx0aGlzLmxlbmd0aD90aGlzLnJ1bGVzW2VdOlwiXCJ9LGV9KCksSj1JLFg9e2lzU2VydmVyOiFJLHVzZUNTU09NSW5qZWN0aW9uOiFQfSxaPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSksdm9pZCAwPT09dCYmKHQ9e30pLHRoaXMub3B0aW9ucz12KHt9LFgse30sZSksdGhpcy5ncz10LHRoaXMubmFtZXM9bmV3IE1hcChuKSx0aGlzLnNlcnZlcj0hIWUuaXNTZXJ2ZXIsIXRoaXMuc2VydmVyJiZJJiZKJiYoSj0hMSxmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChHKSxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO28mJlwiYWN0aXZlXCIhPT1vLmdldEF0dHJpYnV0ZShBKSYmKFkoZSxvKSxvLnBhcmVudE5vZGUmJm8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSl9fSh0aGlzKSl9ZS5yZWdpc3RlcklkPWZ1bmN0aW9uKGUpe3JldHVybiBCKGUpfTt2YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPSEwKSxuZXcgZSh2KHt9LHRoaXMub3B0aW9ucyx7fSx0KSx0aGlzLmdzLG4mJnRoaXMubmFtZXN8fHZvaWQgMCl9LHQuYWxsb2NhdGVHU0luc3RhbmNlPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmdzW2VdPSh0aGlzLmdzW2VdfHwwKSsxfSx0LmdldFRhZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRhZ3x8KHRoaXMudGFnPShuPSh0PXRoaXMub3B0aW9ucykuaXNTZXJ2ZXIscj10LnVzZUNTU09NSW5qZWN0aW9uLG89dC50YXJnZXQsZT1uP25ldyBVKG8pOnI/bmV3ICQobyk6bmV3IFcobyksbmV3IFQoZSkpKTt2YXIgZSx0LG4scixvfSx0Lmhhc05hbWVGb3JJZD1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm5hbWVzLmhhcyhlKSYmdGhpcy5uYW1lcy5nZXQoZSkuaGFzKHQpfSx0LnJlZ2lzdGVyTmFtZT1mdW5jdGlvbihlLHQpe2lmKEIoZSksdGhpcy5uYW1lcy5oYXMoZSkpdGhpcy5uYW1lcy5nZXQoZSkuYWRkKHQpO2Vsc2V7dmFyIG49bmV3IFNldDtuLmFkZCh0KSx0aGlzLm5hbWVzLnNldChlLG4pfX0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQsbil7dGhpcy5yZWdpc3Rlck5hbWUoZSx0KSx0aGlzLmdldFRhZygpLmluc2VydFJ1bGVzKEIoZSksbil9LHQuY2xlYXJOYW1lcz1mdW5jdGlvbihlKXt0aGlzLm5hbWVzLmhhcyhlKSYmdGhpcy5uYW1lcy5nZXQoZSkuY2xlYXIoKX0sdC5jbGVhclJ1bGVzPWZ1bmN0aW9uKGUpe3RoaXMuZ2V0VGFnKCkuY2xlYXJHcm91cChCKGUpKSx0aGlzLmNsZWFyTmFtZXMoZSl9LHQuY2xlYXJUYWc9ZnVuY3Rpb24oKXt0aGlzLnRhZz12b2lkIDB9LHQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuZ2V0VGFnKCksbj10Lmxlbmd0aCxyPVwiXCIsbz0wO288bjtvKyspe3ZhciBzPXoobyk7aWYodm9pZCAwIT09cyl7dmFyIGk9ZS5uYW1lcy5nZXQocyksYT10LmdldEdyb3VwKG8pO2lmKGkmJmEmJmkuc2l6ZSl7dmFyIGM9QStcIi5nXCIrbysnW2lkPVwiJytzKydcIl0nLHU9XCJcIjt2b2lkIDAhPT1pJiZpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UubGVuZ3RoPjAmJih1Kz1lK1wiLFwiKX0pKSxyKz1cIlwiK2ErYysne2NvbnRlbnQ6XCInK3UrJ1wifS8qIXNjKi9cXG4nfX19cmV0dXJuIHJ9KHRoaXMpfSxlfSgpLEs9LyhhKShkKS9naSxRPWZ1bmN0aW9uKGUpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUrKGU+MjU/Mzk6OTcpKX07ZnVuY3Rpb24gZWUoZSl7dmFyIHQsbj1cIlwiO2Zvcih0PU1hdGguYWJzKGUpO3Q+NTI7dD10LzUyfDApbj1RKHQlNTIpK247cmV0dXJuKFEodCU1MikrbikucmVwbGFjZShLLFwiJDEtJDJcIil9dmFyIHRlPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPXQubGVuZ3RoO247KWU9MzMqZV50LmNoYXJDb2RlQXQoLS1uKTtyZXR1cm4gZX0sbmU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRlKDUzODEsZSl9O2Z1bmN0aW9uIHJlKGUpe2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCs9MSl7dmFyIG49ZVt0XTtpZihiKG4pJiYhTihuKSlyZXR1cm4hMX1yZXR1cm4hMH12YXIgb2U9bmUoXCI1LjMuNlwiKSxzZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3RoaXMucnVsZXM9ZSx0aGlzLnN0YXRpY1J1bGVzSWQ9XCJcIix0aGlzLmlzU3RhdGljPVwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih2b2lkIDA9PT1ufHxuLmlzU3RhdGljKSYmcmUoZSksdGhpcy5jb21wb25lbnRJZD10LHRoaXMuYmFzZUhhc2g9dGUob2UsdCksdGhpcy5iYXNlU3R5bGU9bixaLnJlZ2lzdGVySWQodCl9cmV0dXJuIGUucHJvdG90eXBlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLmNvbXBvbmVudElkLG89W107aWYodGhpcy5iYXNlU3R5bGUmJm8ucHVzaCh0aGlzLmJhc2VTdHlsZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhlLHQsbikpLHRoaXMuaXNTdGF0aWMmJiFuLmhhc2gpaWYodGhpcy5zdGF0aWNSdWxlc0lkJiZ0Lmhhc05hbWVGb3JJZChyLHRoaXMuc3RhdGljUnVsZXNJZCkpby5wdXNoKHRoaXMuc3RhdGljUnVsZXNJZCk7ZWxzZXt2YXIgcz1OZSh0aGlzLnJ1bGVzLGUsdCxuKS5qb2luKFwiXCIpLGk9ZWUodGUodGhpcy5iYXNlSGFzaCxzKT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLGkpKXt2YXIgYT1uKHMsXCIuXCIraSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLGksYSl9by5wdXNoKGkpLHRoaXMuc3RhdGljUnVsZXNJZD1pfWVsc2V7Zm9yKHZhciBjPXRoaXMucnVsZXMubGVuZ3RoLHU9dGUodGhpcy5iYXNlSGFzaCxuLmhhc2gpLGw9XCJcIixkPTA7ZDxjO2QrKyl7dmFyIGg9dGhpcy5ydWxlc1tkXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaClsKz1oLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih1PXRlKHUsaCtkKSk7ZWxzZSBpZihoKXt2YXIgcD1OZShoLGUsdCxuKSxmPUFycmF5LmlzQXJyYXkocCk/cC5qb2luKFwiXCIpOnA7dT10ZSh1LGYrZCksbCs9Zn19aWYobCl7dmFyIG09ZWUodT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLG0pKXt2YXIgeT1uKGwsXCIuXCIrbSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLG0seSl9by5wdXNoKG0pfX1yZXR1cm4gby5qb2luKFwiIFwiKX0sZX0oKSxpZT0vXlxccypcXC9cXC8uKiQvZ20sYWU9W1wiOlwiLFwiW1wiLFwiLlwiLFwiI1wiXTtmdW5jdGlvbiBjZShlKXt2YXIgdCxuLHIsbyxzPXZvaWQgMD09PWU/RTplLGk9cy5vcHRpb25zLGE9dm9pZCAwPT09aT9FOmksYz1zLnBsdWdpbnMsdT12b2lkIDA9PT1jP3c6YyxsPW5ldyBwKGEpLGQ9W10saD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe2lmKHQpdHJ5e2UodCtcIn1cIil9Y2F0Y2goZSl7fX1yZXR1cm4gZnVuY3Rpb24obixyLG8scyxpLGEsYyx1LGwsZCl7c3dpdGNoKG4pe2Nhc2UgMTppZigwPT09bCYmNjQ9PT1yLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGUocitcIjtcIiksXCJcIjticmVhaztjYXNlIDI6aWYoMD09PXUpcmV0dXJuIHIrXCIvKnwqL1wiO2JyZWFrO2Nhc2UgMzpzd2l0Y2godSl7Y2FzZSAxMDI6Y2FzZSAxMTI6cmV0dXJuIGUob1swXStyKSxcIlwiO2RlZmF1bHQ6cmV0dXJuIHIrKDA9PT1kP1wiLyp8Ki9cIjpcIlwiKX1jYXNlLTI6ci5zcGxpdChcIi8qfCovfVwiKS5mb3JFYWNoKHQpfX19KChmdW5jdGlvbihlKXtkLnB1c2goZSl9KSksZj1mdW5jdGlvbihlLHIscyl7cmV0dXJuIDA9PT1yJiYtMSE9PWFlLmluZGV4T2Yoc1tuLmxlbmd0aF0pfHxzLm1hdGNoKG8pP2U6XCIuXCIrdH07ZnVuY3Rpb24gbShlLHMsaSxhKXt2b2lkIDA9PT1hJiYoYT1cIiZcIik7dmFyIGM9ZS5yZXBsYWNlKGllLFwiXCIpLHU9cyYmaT9pK1wiIFwiK3MrXCIgeyBcIitjK1wiIH1cIjpjO3JldHVybiB0PWEsbj1zLHI9bmV3IFJlZ0V4cChcIlxcXFxcIituK1wiXFxcXGJcIixcImdcIiksbz1uZXcgUmVnRXhwKFwiKFxcXFxcIituK1wiXFxcXGIpezIsfVwiKSxsKGl8fCFzP1wiXCI6cyx1KX1yZXR1cm4gbC51c2UoW10uY29uY2F0KHUsW2Z1bmN0aW9uKGUsdCxvKXsyPT09ZSYmby5sZW5ndGgmJm9bMF0ubGFzdEluZGV4T2Yobik+MCYmKG9bMF09b1swXS5yZXBsYWNlKHIsZikpfSxoLGZ1bmN0aW9uKGUpe2lmKC0yPT09ZSl7dmFyIHQ9ZDtyZXR1cm4gZD1bXSx0fX1dKSksbS5oYXNoPXUubGVuZ3RoP3UucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiB0Lm5hbWV8fGooMTUpLHRlKGUsdC5uYW1lKX0pLDUzODEpLnRvU3RyaW5nKCk6XCJcIixtfXZhciB1ZT1yLmNyZWF0ZUNvbnRleHQoKSxsZT11ZS5Db25zdW1lcixkZT1yLmNyZWF0ZUNvbnRleHQoKSxoZT0oZGUuQ29uc3VtZXIsbmV3IFopLHBlPWNlKCk7ZnVuY3Rpb24gZmUoKXtyZXR1cm4gcyh1ZSl8fGhlfWZ1bmN0aW9uIG1lKCl7cmV0dXJuIHMoZGUpfHxwZX1mdW5jdGlvbiB5ZShlKXt2YXIgdD1vKGUuc3R5bGlzUGx1Z2lucyksbj10WzBdLHM9dFsxXSxjPWZlKCksdT1pKChmdW5jdGlvbigpe3ZhciB0PWM7cmV0dXJuIGUuc2hlZXQ/dD1lLnNoZWV0OmUudGFyZ2V0JiYodD10LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe3RhcmdldDplLnRhcmdldH0sITEpKSxlLmRpc2FibGVDU1NPTUluamVjdGlvbiYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt1c2VDU1NPTUluamVjdGlvbjohMX0pKSx0fSksW2UuZGlzYWJsZUNTU09NSW5qZWN0aW9uLGUuc2hlZXQsZS50YXJnZXRdKSxsPWkoKGZ1bmN0aW9uKCl7cmV0dXJuIGNlKHtvcHRpb25zOntwcmVmaXg6IWUuZGlzYWJsZVZlbmRvclByZWZpeGVzfSxwbHVnaW5zOm59KX0pLFtlLmRpc2FibGVWZW5kb3JQcmVmaXhlcyxuXSk7cmV0dXJuIGEoKGZ1bmN0aW9uKCl7aChuLGUuc3R5bGlzUGx1Z2lucyl8fHMoZS5zdHlsaXNQbHVnaW5zKX0pLFtlLnN0eWxpc1BsdWdpbnNdKSxyLmNyZWF0ZUVsZW1lbnQodWUuUHJvdmlkZXIse3ZhbHVlOnV9LHIuY3JlYXRlRWxlbWVudChkZS5Qcm92aWRlcix7dmFsdWU6bH0sXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9yLkNoaWxkcmVuLm9ubHkoZS5jaGlsZHJlbik6ZS5jaGlsZHJlbikpfXZhciB2ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt2YXIgbj10aGlzO3RoaXMuaW5qZWN0PWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9cGUpO3ZhciByPW4ubmFtZSt0Lmhhc2g7ZS5oYXNOYW1lRm9ySWQobi5pZCxyKXx8ZS5pbnNlcnRSdWxlcyhuLmlkLHIsdChuLnJ1bGVzLHIsXCJAa2V5ZnJhbWVzXCIpKX0sdGhpcy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBqKDEyLFN0cmluZyhuLm5hbWUpKX0sdGhpcy5uYW1lPWUsdGhpcy5pZD1cInNjLWtleWZyYW1lcy1cIitlLHRoaXMucnVsZXM9dH1yZXR1cm4gZS5wcm90b3R5cGUuZ2V0TmFtZT1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9cGUpLHRoaXMubmFtZStlLmhhc2h9LGV9KCksZ2U9LyhbQS1aXSkvLFNlPS8oW0EtWl0pL2csd2U9L15tcy0vLEVlPWZ1bmN0aW9uKGUpe3JldHVyblwiLVwiK2UudG9Mb3dlckNhc2UoKX07ZnVuY3Rpb24gYmUoZSl7cmV0dXJuIGdlLnRlc3QoZSk/ZS5yZXBsYWNlKFNlLEVlKS5yZXBsYWNlKHdlLFwiLW1zLVwiKTplfXZhciBfZT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ITE9PT1lfHxcIlwiPT09ZX07ZnVuY3Rpb24gTmUoZSxuLHIsbyl7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciBzLGk9W10sYT0wLGM9ZS5sZW5ndGg7YTxjO2ErPTEpXCJcIiE9PShzPU5lKGVbYV0sbixyLG8pKSYmKEFycmF5LmlzQXJyYXkocyk/aS5wdXNoLmFwcGx5KGkscyk6aS5wdXNoKHMpKTtyZXR1cm4gaX1pZihfZShlKSlyZXR1cm5cIlwiO2lmKE4oZSkpcmV0dXJuXCIuXCIrZS5zdHlsZWRDb21wb25lbnRJZDtpZihiKGUpKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZihsPWUpfHxsLnByb3RvdHlwZSYmbC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudHx8IW4pcmV0dXJuIGU7dmFyIHU9ZShuKTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZ0KHUpJiZjb25zb2xlLndhcm4oXyhlKStcIiBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXCIpLE5lKHUsbixyLG8pfXZhciBsO3JldHVybiBlIGluc3RhbmNlb2YgdmU/cj8oZS5pbmplY3QocixvKSxlLmdldE5hbWUobykpOmU6UyhlKT9mdW5jdGlvbiBlKHQsbil7dmFyIHIsbyxzPVtdO2Zvcih2YXIgaSBpbiB0KXQuaGFzT3duUHJvcGVydHkoaSkmJiFfZSh0W2ldKSYmKEFycmF5LmlzQXJyYXkodFtpXSkmJnRbaV0uaXNDc3N8fGIodFtpXSk/cy5wdXNoKGJlKGkpK1wiOlwiLHRbaV0sXCI7XCIpOlModFtpXSk/cy5wdXNoLmFwcGx5KHMsZSh0W2ldLGkpKTpzLnB1c2goYmUoaSkrXCI6IFwiKyhyPWksbnVsbD09KG89dFtpXSl8fFwiYm9vbGVhblwiPT10eXBlb2Ygb3x8XCJcIj09PW8/XCJcIjpcIm51bWJlclwiIT10eXBlb2Ygb3x8MD09PW98fHIgaW4gZj9TdHJpbmcobykudHJpbSgpOm8rXCJweFwiKStcIjtcIikpO3JldHVybiBuP1tuK1wiIHtcIl0uY29uY2F0KHMsW1wifVwiXSk6c30oZSk6ZS50b1N0cmluZygpfXZhciBBZT1mdW5jdGlvbihlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKSYmKGUuaXNDc3M9ITApLGV9O2Z1bmN0aW9uIENlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtyZXR1cm4gYihlKXx8UyhlKT9BZShOZShnKHcsW2VdLmNvbmNhdChuKSkpKTowPT09bi5sZW5ndGgmJjE9PT1lLmxlbmd0aCYmXCJzdHJpbmdcIj09dHlwZW9mIGVbMF0/ZTpBZShOZShnKGUsbikpKX12YXIgSWU9L2ludmFsaWQgaG9vayBjYWxsL2ksUGU9bmV3IFNldCxPZT1mdW5jdGlvbihlLHQpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBuPVwiVGhlIGNvbXBvbmVudCBcIitlKyh0Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiKStcIiBoYXMgYmVlbiBjcmVhdGVkIGR5bmFtaWNhbGx5LlxcbllvdSBtYXkgc2VlIHRoaXMgd2FybmluZyBiZWNhdXNlIHlvdSd2ZSBjYWxsZWQgc3R5bGVkIGluc2lkZSBhbm90aGVyIGNvbXBvbmVudC5cXG5UbyByZXNvbHZlIHRoaXMgb25seSBjcmVhdGUgbmV3IFN0eWxlZENvbXBvbmVudHMgb3V0c2lkZSBvZiBhbnkgcmVuZGVyIG1ldGhvZCBhbmQgZnVuY3Rpb24gY29tcG9uZW50LlwiLHI9Y29uc29sZS5lcnJvcjt0cnl7dmFyIG89ITA7Y29uc29sZS5lcnJvcj1mdW5jdGlvbihlKXtpZihJZS50ZXN0KGUpKW89ITEsUGUuZGVsZXRlKG4pO2Vsc2V7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscz1uZXcgQXJyYXkodD4xP3QtMTowKSxpPTE7aTx0O2krKylzW2ktMV09YXJndW1lbnRzW2ldO3IuYXBwbHkodm9pZCAwLFtlXS5jb25jYXQocykpfX0sYygpLG8mJiFQZS5oYXMobikmJihjb25zb2xlLndhcm4obiksUGUuYWRkKG4pKX1jYXRjaChlKXtJZS50ZXN0KGUubWVzc2FnZSkmJlBlLmRlbGV0ZShuKX1maW5hbGx5e2NvbnNvbGUuZXJyb3I9cn19fSxSZT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPUUpLGUudGhlbWUhPT1uLnRoZW1lJiZlLnRoZW1lfHx0fHxuLnRoZW1lfSxEZT0vWyFcIiMkJSYnKCkqKywuLzo7PD0+P0BbXFxcXFxcXV5ge3x9fi1dKy9nLGplPS8oXi18LSQpL2c7ZnVuY3Rpb24gVGUoZSl7cmV0dXJuIGUucmVwbGFjZShEZSxcIi1cIikucmVwbGFjZShqZSxcIlwiKX12YXIgeGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGVlKG5lKGUpPj4+MCl9O2Z1bmN0aW9uIGtlKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8ZS5jaGFyQXQoMCk9PT1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKX12YXIgVmU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiYhQXJyYXkuaXNBcnJheShlKX0sQmU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJfX3Byb3RvX19cIiE9PWUmJlwiY29uc3RydWN0b3JcIiE9PWUmJlwicHJvdG90eXBlXCIhPT1lfTtmdW5jdGlvbiB6ZShlLHQsbil7dmFyIHI9ZVtuXTtWZSh0KSYmVmUocik/TWUocix0KTplW25dPXR9ZnVuY3Rpb24gTWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO2Zvcih2YXIgbz0wLHM9bjtvPHMubGVuZ3RoO28rKyl7dmFyIGk9c1tvXTtpZihWZShpKSlmb3IodmFyIGEgaW4gaSlCZShhKSYmemUoZSxpW2FdLGEpfXJldHVybiBlfXZhciBHZT1yLmNyZWF0ZUNvbnRleHQoKSxMZT1HZS5Db25zdW1lcjtmdW5jdGlvbiBGZShlKXt2YXIgdD1zKEdlKSxuPWkoKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuIGooMTQpO2lmKGIoZSkpe3ZhciBuPWUodCk7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8bnVsbCE9PW4mJiFBcnJheS5pc0FycmF5KG4pJiZcIm9iamVjdFwiPT10eXBlb2Ygbj9uOmooNyl9cmV0dXJuIEFycmF5LmlzQXJyYXkoZSl8fFwib2JqZWN0XCIhPXR5cGVvZiBlP2ooOCk6dD92KHt9LHQse30sZSk6ZX0oZS50aGVtZSx0KX0pLFtlLnRoZW1lLHRdKTtyZXR1cm4gZS5jaGlsZHJlbj9yLmNyZWF0ZUVsZW1lbnQoR2UuUHJvdmlkZXIse3ZhbHVlOm59LGUuY2hpbGRyZW4pOm51bGx9dmFyIFllPXt9O2Z1bmN0aW9uIHFlKGUsdCxuKXt2YXIgbz1OKGUpLGk9IWtlKGUpLGE9dC5hdHRycyxjPXZvaWQgMD09PWE/dzphLGQ9dC5jb21wb25lbnRJZCxoPXZvaWQgMD09PWQ/ZnVuY3Rpb24oZSx0KXt2YXIgbj1cInN0cmluZ1wiIT10eXBlb2YgZT9cInNjXCI6VGUoZSk7WWVbbl09KFllW25dfHwwKSsxO3ZhciByPW4rXCItXCIreGUoXCI1LjMuNlwiK24rWWVbbl0pO3JldHVybiB0P3QrXCItXCIrcjpyfSh0LmRpc3BsYXlOYW1lLHQucGFyZW50Q29tcG9uZW50SWQpOmQscD10LmRpc3BsYXlOYW1lLGY9dm9pZCAwPT09cD9mdW5jdGlvbihlKXtyZXR1cm4ga2UoZSk/XCJzdHlsZWQuXCIrZTpcIlN0eWxlZChcIitfKGUpK1wiKVwifShlKTpwLGc9dC5kaXNwbGF5TmFtZSYmdC5jb21wb25lbnRJZD9UZSh0LmRpc3BsYXlOYW1lKStcIi1cIit0LmNvbXBvbmVudElkOnQuY29tcG9uZW50SWR8fGgsUz1vJiZlLmF0dHJzP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5hdHRycyxjKS5maWx0ZXIoQm9vbGVhbik6YyxBPXQuc2hvdWxkRm9yd2FyZFByb3A7byYmZS5zaG91bGRGb3J3YXJkUHJvcCYmKEE9dC5zaG91bGRGb3J3YXJkUHJvcD9mdW5jdGlvbihuLHIsbyl7cmV0dXJuIGUuc2hvdWxkRm9yd2FyZFByb3AobixyLG8pJiZ0LnNob3VsZEZvcndhcmRQcm9wKG4scixvKX06ZS5zaG91bGRGb3J3YXJkUHJvcCk7dmFyIEMsST1uZXcgc2UobixnLG8/ZS5jb21wb25lbnRTdHlsZTp2b2lkIDApLFA9SS5pc1N0YXRpYyYmMD09PWMubGVuZ3RoLE89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZS5hdHRycyxpPWUuY29tcG9uZW50U3R5bGUsYT1lLmRlZmF1bHRQcm9wcyxjPWUuZm9sZGVkQ29tcG9uZW50SWRzLGQ9ZS5zaG91bGRGb3J3YXJkUHJvcCxoPWUuc3R5bGVkQ29tcG9uZW50SWQscD1lLnRhcmdldDtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZsKGgpO3ZhciBmPWZ1bmN0aW9uKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKTt2YXIgcj12KHt9LHQse3RoZW1lOmV9KSxvPXt9O3JldHVybiBuLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0LG4scyxpPWU7Zm9yKHQgaW4gYihpKSYmKGk9aShyKSksaSlyW3RdPW9bdF09XCJjbGFzc05hbWVcIj09PXQ/KG49b1t0XSxzPWlbdF0sbiYmcz9uK1wiIFwiK3M6bnx8cyk6aVt0XX0pKSxbcixvXX0oUmUodCxzKEdlKSxhKXx8RSx0LG8pLHk9ZlswXSxnPWZbMV0sUz1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1mZSgpLHM9bWUoKSxpPXQ/ZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFLG8scyk6ZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhuLG8scyk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChpKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYhdCYmciYmcihpKSxpfShpLHIseSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP2Uud2FyblRvb01hbnlDbGFzc2VzOnZvaWQgMCksdz1uLF89Zy4kYXN8fHQuJGFzfHxnLmFzfHx0LmFzfHxwLE49a2UoXyksQT1nIT09dD92KHt9LHQse30sZyk6dCxDPXt9O2Zvcih2YXIgSSBpbiBBKVwiJFwiIT09SVswXSYmXCJhc1wiIT09SSYmKFwiZm9yd2FyZGVkQXNcIj09PUk/Qy5hcz1BW0ldOihkP2QoSSxtLF8pOiFOfHxtKEkpKSYmKENbSV09QVtJXSkpO3JldHVybiB0LnN0eWxlJiZnLnN0eWxlIT09dC5zdHlsZSYmKEMuc3R5bGU9dih7fSx0LnN0eWxlLHt9LGcuc3R5bGUpKSxDLmNsYXNzTmFtZT1BcnJheS5wcm90b3R5cGUuY29uY2F0KGMsaCxTIT09aD9TOm51bGwsdC5jbGFzc05hbWUsZy5jbGFzc05hbWUpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKSxDLnJlZj13LHUoXyxDKX0oQyxlLHQsUCl9O3JldHVybiBPLmRpc3BsYXlOYW1lPWYsKEM9ci5mb3J3YXJkUmVmKE8pKS5hdHRycz1TLEMuY29tcG9uZW50U3R5bGU9SSxDLmRpc3BsYXlOYW1lPWYsQy5zaG91bGRGb3J3YXJkUHJvcD1BLEMuZm9sZGVkQ29tcG9uZW50SWRzPW8/QXJyYXkucHJvdG90eXBlLmNvbmNhdChlLmZvbGRlZENvbXBvbmVudElkcyxlLnN0eWxlZENvbXBvbmVudElkKTp3LEMuc3R5bGVkQ29tcG9uZW50SWQ9ZyxDLnRhcmdldD1vP2UudGFyZ2V0OmUsQy53aXRoQ29tcG9uZW50PWZ1bmN0aW9uKGUpe3ZhciByPXQuY29tcG9uZW50SWQsbz1mdW5jdGlvbihlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIG4scixvPXt9LHM9T2JqZWN0LmtleXMoZSk7Zm9yKHI9MDtyPHMubGVuZ3RoO3IrKyluPXNbcl0sdC5pbmRleE9mKG4pPj0wfHwob1tuXT1lW25dKTtyZXR1cm4gb30odCxbXCJjb21wb25lbnRJZFwiXSkscz1yJiZyK1wiLVwiKyhrZShlKT9lOlRlKF8oZSkpKTtyZXR1cm4gcWUoZSx2KHt9LG8se2F0dHJzOlMsY29tcG9uZW50SWQ6c30pLG4pfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoQyxcImRlZmF1bHRQcm9wc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzPW8/TWUoe30sZS5kZWZhdWx0UHJvcHMsdCk6dH19KSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoT2UoZixnKSxDLndhcm5Ub29NYW55Q2xhc3Nlcz1mdW5jdGlvbihlLHQpe3ZhciBuPXt9LHI9ITE7cmV0dXJuIGZ1bmN0aW9uKG8pe2lmKCFyJiYobltvXT0hMCxPYmplY3Qua2V5cyhuKS5sZW5ndGg+PTIwMCkpe3ZhciBzPXQ/JyB3aXRoIHRoZSBpZCBvZiBcIicrdCsnXCInOlwiXCI7Y29uc29sZS53YXJuKFwiT3ZlciAyMDAgY2xhc3NlcyB3ZXJlIGdlbmVyYXRlZCBmb3IgY29tcG9uZW50IFwiK2UrcytcIi5cXG5Db25zaWRlciB1c2luZyB0aGUgYXR0cnMgbWV0aG9kLCB0b2dldGhlciB3aXRoIGEgc3R5bGUgb2JqZWN0IGZvciBmcmVxdWVudGx5IGNoYW5nZWQgc3R5bGVzLlxcbkV4YW1wbGU6XFxuICBjb25zdCBDb21wb25lbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHByb3BzID0+ICh7XFxuICAgIHN0eWxlOiB7XFxuICAgICAgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCxcXG4gICAgfSxcXG4gIH0pKWB3aWR0aDogMTAwJTtgXFxuXFxuICA8Q29tcG9uZW50IC8+XCIpLHI9ITAsbj17fX19fShmLGcpKSxDLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCIuXCIrQy5zdHlsZWRDb21wb25lbnRJZH0saSYmeShDLGUse2F0dHJzOiEwLGNvbXBvbmVudFN0eWxlOiEwLGRpc3BsYXlOYW1lOiEwLGZvbGRlZENvbXBvbmVudElkczohMCxzaG91bGRGb3J3YXJkUHJvcDohMCxzdHlsZWRDb21wb25lbnRJZDohMCx0YXJnZXQ6ITAsd2l0aENvbXBvbmVudDohMH0pLEN9dmFyIEhlPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbiBlKHQscixvKXtpZih2b2lkIDA9PT1vJiYobz1FKSwhbihyKSlyZXR1cm4gaigxLFN0cmluZyhyKSk7dmFyIHM9ZnVuY3Rpb24oKXtyZXR1cm4gdChyLG8sQ2UuYXBwbHkodm9pZCAwLGFyZ3VtZW50cykpfTtyZXR1cm4gcy53aXRoQ29uZmlnPWZ1bmN0aW9uKG4pe3JldHVybiBlKHQscix2KHt9LG8se30sbikpfSxzLmF0dHJzPWZ1bmN0aW9uKG4pe3JldHVybiBlKHQscix2KHt9LG8se2F0dHJzOkFycmF5LnByb3RvdHlwZS5jb25jYXQoby5hdHRycyxuKS5maWx0ZXIoQm9vbGVhbil9KSl9LHN9KHFlLGUpfTtbXCJhXCIsXCJhYmJyXCIsXCJhZGRyZXNzXCIsXCJhcmVhXCIsXCJhcnRpY2xlXCIsXCJhc2lkZVwiLFwiYXVkaW9cIixcImJcIixcImJhc2VcIixcImJkaVwiLFwiYmRvXCIsXCJiaWdcIixcImJsb2NrcXVvdGVcIixcImJvZHlcIixcImJyXCIsXCJidXR0b25cIixcImNhbnZhc1wiLFwiY2FwdGlvblwiLFwiY2l0ZVwiLFwiY29kZVwiLFwiY29sXCIsXCJjb2xncm91cFwiLFwiZGF0YVwiLFwiZGF0YWxpc3RcIixcImRkXCIsXCJkZWxcIixcImRldGFpbHNcIixcImRmblwiLFwiZGlhbG9nXCIsXCJkaXZcIixcImRsXCIsXCJkdFwiLFwiZW1cIixcImVtYmVkXCIsXCJmaWVsZHNldFwiLFwiZmlnY2FwdGlvblwiLFwiZmlndXJlXCIsXCJmb290ZXJcIixcImZvcm1cIixcImgxXCIsXCJoMlwiLFwiaDNcIixcImg0XCIsXCJoNVwiLFwiaDZcIixcImhlYWRcIixcImhlYWRlclwiLFwiaGdyb3VwXCIsXCJoclwiLFwiaHRtbFwiLFwiaVwiLFwiaWZyYW1lXCIsXCJpbWdcIixcImlucHV0XCIsXCJpbnNcIixcImtiZFwiLFwia2V5Z2VuXCIsXCJsYWJlbFwiLFwibGVnZW5kXCIsXCJsaVwiLFwibGlua1wiLFwibWFpblwiLFwibWFwXCIsXCJtYXJrXCIsXCJtYXJxdWVlXCIsXCJtZW51XCIsXCJtZW51aXRlbVwiLFwibWV0YVwiLFwibWV0ZXJcIixcIm5hdlwiLFwibm9zY3JpcHRcIixcIm9iamVjdFwiLFwib2xcIixcIm9wdGdyb3VwXCIsXCJvcHRpb25cIixcIm91dHB1dFwiLFwicFwiLFwicGFyYW1cIixcInBpY3R1cmVcIixcInByZVwiLFwicHJvZ3Jlc3NcIixcInFcIixcInJwXCIsXCJydFwiLFwicnVieVwiLFwic1wiLFwic2FtcFwiLFwic2NyaXB0XCIsXCJzZWN0aW9uXCIsXCJzZWxlY3RcIixcInNtYWxsXCIsXCJzb3VyY2VcIixcInNwYW5cIixcInN0cm9uZ1wiLFwic3R5bGVcIixcInN1YlwiLFwic3VtbWFyeVwiLFwic3VwXCIsXCJ0YWJsZVwiLFwidGJvZHlcIixcInRkXCIsXCJ0ZXh0YXJlYVwiLFwidGZvb3RcIixcInRoXCIsXCJ0aGVhZFwiLFwidGltZVwiLFwidGl0bGVcIixcInRyXCIsXCJ0cmFja1wiLFwidVwiLFwidWxcIixcInZhclwiLFwidmlkZW9cIixcIndiclwiLFwiY2lyY2xlXCIsXCJjbGlwUGF0aFwiLFwiZGVmc1wiLFwiZWxsaXBzZVwiLFwiZm9yZWlnbk9iamVjdFwiLFwiZ1wiLFwiaW1hZ2VcIixcImxpbmVcIixcImxpbmVhckdyYWRpZW50XCIsXCJtYXJrZXJcIixcIm1hc2tcIixcInBhdGhcIixcInBhdHRlcm5cIixcInBvbHlnb25cIixcInBvbHlsaW5lXCIsXCJyYWRpYWxHcmFkaWVudFwiLFwicmVjdFwiLFwic3RvcFwiLFwic3ZnXCIsXCJ0ZXh0XCIsXCJ0ZXh0UGF0aFwiLFwidHNwYW5cIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7SGVbZV09SGUoZSl9KSk7dmFyICRlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMucnVsZXM9ZSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5pc1N0YXRpYz1yZShlKSxaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCsxKX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jcmVhdGVTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89cihOZSh0aGlzLnJ1bGVzLHQsbixyKS5qb2luKFwiXCIpLFwiXCIpLHM9dGhpcy5jb21wb25lbnRJZCtlO24uaW5zZXJ0UnVsZXMocyxzLG8pfSx0LnJlbW92ZVN0eWxlcz1mdW5jdGlvbihlLHQpe3QuY2xlYXJSdWxlcyh0aGlzLmNvbXBvbmVudElkK2UpfSx0LnJlbmRlclN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXtlPjImJloucmVnaXN0ZXJJZCh0aGlzLmNvbXBvbmVudElkK2UpLHRoaXMucmVtb3ZlU3R5bGVzKGUsbiksdGhpcy5jcmVhdGVTdHlsZXMoZSx0LG4scil9LGV9KCk7ZnVuY3Rpb24gV2UoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyluW28tMV09YXJndW1lbnRzW29dO3ZhciBpPUNlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKSxhPVwic2MtZ2xvYmFsLVwiK3hlKEpTT04uc3RyaW5naWZ5KGkpKSx1PW5ldyAkZShpLGEpO2Z1bmN0aW9uIGwoZSl7dmFyIHQ9ZmUoKSxuPW1lKCksbz1zKEdlKSxsPWModC5hbGxvY2F0ZUdTSW5zdGFuY2UoYSkpLmN1cnJlbnQ7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmci5DaGlsZHJlbi5jb3VudChlLmNoaWxkcmVuKSYmY29uc29sZS53YXJuKFwiVGhlIGdsb2JhbCBzdHlsZSBjb21wb25lbnQgXCIrYStcIiB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmkuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT09ZS5pbmRleE9mKFwiQGltcG9ydFwiKX0pKSYmY29uc29sZS53YXJuKFwiUGxlYXNlIGRvIG5vdCB1c2UgQGltcG9ydCBDU1Mgc3ludGF4IGluIGNyZWF0ZUdsb2JhbFN0eWxlIGF0IHRoaXMgdGltZSwgYXMgdGhlIENTU09NIEFQSXMgd2UgdXNlIGluIHByb2R1Y3Rpb24gZG8gbm90IGhhbmRsZSBpdCB3ZWxsLiBJbnN0ZWFkLCB3ZSByZWNvbW1lbmQgdXNpbmcgYSBsaWJyYXJ5IHN1Y2ggYXMgcmVhY3QtaGVsbWV0IHRvIGluamVjdCBhIHR5cGljYWwgPGxpbms+IG1ldGEgdGFnIHRvIHRoZSBzdHlsZXNoZWV0LCBvciBzaW1wbHkgZW1iZWRkaW5nIGl0IG1hbnVhbGx5IGluIHlvdXIgaW5kZXguaHRtbCA8aGVhZD4gc2VjdGlvbiBmb3IgYSBzaW1wbGVyIGFwcC5cIiksdC5zZXJ2ZXImJmgobCxlLHQsbyxuKSxkKChmdW5jdGlvbigpe2lmKCF0LnNlcnZlcilyZXR1cm4gaChsLGUsdCxvLG4pLGZ1bmN0aW9uKCl7cmV0dXJuIHUucmVtb3ZlU3R5bGVzKGwsdCl9fSksW2wsZSx0LG8sbl0pLG51bGx9ZnVuY3Rpb24gaChlLHQsbixyLG8pe2lmKHUuaXNTdGF0aWMpdS5yZW5kZXJTdHlsZXMoZSxPLG4sbyk7ZWxzZXt2YXIgcz12KHt9LHQse3RoZW1lOlJlKHQscixsLmRlZmF1bHRQcm9wcyl9KTt1LnJlbmRlclN0eWxlcyhlLHMsbixvKX19cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmT2UoYSksci5tZW1vKGwpfWZ1bmN0aW9uIFVlKGUpe1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJga2V5ZnJhbWVzYCBjYW5ub3QgYmUgdXNlZCBvbiBSZWFjdE5hdGl2ZSwgb25seSBvbiB0aGUgd2ViLiBUbyBkbyBhbmltYXRpb24gaW4gUmVhY3ROYXRpdmUgcGxlYXNlIHVzZSBBbmltYXRlZC5cIik7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3ZhciBvPUNlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKS5qb2luKFwiXCIpLHM9eGUobyk7cmV0dXJuIG5ldyB2ZShzLG8pfXZhciBKZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgZT10aGlzO3RoaXMuX2VtaXRTaGVldENTUz1mdW5jdGlvbigpe3ZhciB0PWUuaW5zdGFuY2UudG9TdHJpbmcoKTtpZighdClyZXR1cm5cIlwiO3ZhciBuPXEoKTtyZXR1cm5cIjxzdHlsZSBcIitbbiYmJ25vbmNlPVwiJytuKydcIicsQSsnPVwidHJ1ZVwiJywnZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMy42XCInXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikrXCI+XCIrdCtcIjwvc3R5bGU+XCJ9LHRoaXMuZ2V0U3R5bGVUYWdzPWZ1bmN0aW9uKCl7cmV0dXJuIGUuc2VhbGVkP2ooMik6ZS5fZW1pdFNoZWV0Q1NTKCl9LHRoaXMuZ2V0U3R5bGVFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIHQ7aWYoZS5zZWFsZWQpcmV0dXJuIGooMik7dmFyIG49KCh0PXt9KVtBXT1cIlwiLHRbXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCJdPVwiNS4zLjZcIix0LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtfX2h0bWw6ZS5pbnN0YW5jZS50b1N0cmluZygpfSx0KSxvPXEoKTtyZXR1cm4gbyYmKG4ubm9uY2U9byksW3IuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsdih7fSxuLHtrZXk6XCJzYy0wLTBcIn0pKV19LHRoaXMuc2VhbD1mdW5jdGlvbigpe2Uuc2VhbGVkPSEwfSx0aGlzLmluc3RhbmNlPW5ldyBaKHtpc1NlcnZlcjohMH0pLHRoaXMuc2VhbGVkPSExfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmNvbGxlY3RTdHlsZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2VhbGVkP2ooMik6ci5jcmVhdGVFbGVtZW50KHllLHtzaGVldDp0aGlzLmluc3RhbmNlfSxlKX0sdC5pbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIGooMyl9LGV9KCksWGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ci5mb3J3YXJkUmVmKChmdW5jdGlvbih0LG4pe3ZhciBvPXMoR2UpLGk9ZS5kZWZhdWx0UHJvcHMsYT1SZSh0LG8saSk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdm9pZCAwPT09YSYmY29uc29sZS53YXJuKCdbd2l0aFRoZW1lXSBZb3UgYXJlIG5vdCB1c2luZyBhIFRoZW1lUHJvdmlkZXIgbm9yIHBhc3NpbmcgYSB0aGVtZSBwcm9wIG9yIGEgdGhlbWUgaW4gZGVmYXVsdFByb3BzIGluIGNvbXBvbmVudCBjbGFzcyBcIicrXyhlKSsnXCInKSxyLmNyZWF0ZUVsZW1lbnQoZSx2KHt9LHQse3RoZW1lOmEscmVmOm59KSl9KSk7cmV0dXJuIHkodCxlKSx0LmRpc3BsYXlOYW1lPVwiV2l0aFRoZW1lKFwiK18oZSkrXCIpXCIsdH0sWmU9ZnVuY3Rpb24oKXtyZXR1cm4gcyhHZSl9LEtlPXtTdHlsZVNoZWV0OlosbWFzdGVyU2hlZXQ6aGV9O1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5QZXJoYXBzIHlvdSdyZSBsb29raW5nIHRvIGltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJz9cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9iYXNpY3MjcmVhY3QtbmF0aXZlXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidGVzdFwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXT13aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXXx8MCwxPT09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl0mJmNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgdG8gbm90IHJlbmRlciBwcm9wZXJseSwgZXJyb3JzIGR1cmluZyB0aGUgcmVoeWRyYXRpb24gcHJvY2VzcywgYSBtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGdvb2QgcmVhc29uLlxcblxcblNlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uXCIpLHdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdKz0xKTtleHBvcnQgZGVmYXVsdCBIZTtleHBvcnR7SmUgYXMgU2VydmVyU3R5bGVTaGVldCxsZSBhcyBTdHlsZVNoZWV0Q29uc3VtZXIsdWUgYXMgU3R5bGVTaGVldENvbnRleHQseWUgYXMgU3R5bGVTaGVldE1hbmFnZXIsTGUgYXMgVGhlbWVDb25zdW1lcixHZSBhcyBUaGVtZUNvbnRleHQsRmUgYXMgVGhlbWVQcm92aWRlcixLZSBhcyBfX1BSSVZBVEVfXyxXZSBhcyBjcmVhdGVHbG9iYWxTdHlsZSxDZSBhcyBjc3MsTiBhcyBpc1N0eWxlZENvbXBvbmVudCxVZSBhcyBrZXlmcmFtZXMsWmUgYXMgdXNlVGhlbWUsQyBhcyB2ZXJzaW9uLFhlIGFzIHdpdGhUaGVtZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWJicnxhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxlbnRlcktleUhpbnR8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0cmFuc2xhdGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmNyZW1lbnRhbHxmYWxsYmFja3xpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258b3B0aW9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGlzUHJvcFZhbGlkID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpc1Byb3BWYWxpZDtcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJsb2Rhc2hcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvcmVEYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkb21SZWFkeVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wibWVkaWFVdGlsc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicmljaFRleHRcIl07IiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnQgY29uc3QgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9ibG9ja3MnO1xuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFZGl0IiwiYmxvY2tQcm9wcyIsInJlYWN0XzEiLCJEZWdyZWVQcm9ncmFtRWRpdEZvcm1fMSIsImV4cG9ydHMiLCJibG9ja19qc29uXzEiLCJuYW1lIiwiZWRpdCIsIkVkaXRfMSIsIl9hIiwiY29udGVudCIsInNldEF0dHJpYnV0ZXMiLCJibG9ja19lZGl0b3JfMSIsInRhZ05hbWUiLCJvbkNoYW5nZSIsIm5leHRDb250ZW50IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIlNhdmUiLCJzYXZlQmxvY2tQcm9wcyIsInNhdmUiLCJDb250ZW50IiwiU2F2ZV8xIiwiQUxMT1dFRF9CTE9DS1MiLCJURU1QTEFURSIsImFsbG93ZWRCbG9ja3MiLCJ0ZW1wbGF0ZSIsInJlbmRlckFwcGVuZGVyIiwiQnV0dG9uQmxvY2tBcHBlbmRlciIsImFkZEhlYWRpbmdCbG9ja1ZhcmlhdGlvbnMiLCJzZXR0aW5ncyIsInZhcmlhdGlvbnMiLCJpc0RlZmF1bHQiLCJ0aXRsZSIsImF0dHJpYnV0ZXMiLCJsZXZlbCIsImFkZFNob3J0Y29kZUJsb2NrVmFyaWF0aW9ucyIsInRleHQiLCJERUZBVUxUX1NJWkUiLCJBTExPV0VEX0ZPUk1BVFMiLCJyZWdpc3RlcmVkRm9ybWF0cyIsInJpY2hfdGV4dF8xIiwiZ2V0Rm9ybWF0VHlwZXMiLCJmb3JtYXROYW1lc1RvRGlzYWJsZSIsImZvckVhY2giLCJmb3JtYXRUeXBlIiwiaW5jbHVkZXMiLCJwdXNoIiwicmVtb3ZlRm9ybWF0VHlwZXMiLCJERUZBVUxUX1NRVUFSRV9TSVpFIiwiREVGQVVMVF9TVFJPS0VfV0lEVEgiLCJTdHlsZWRTdmdDaXJjbGUiLCJzdHlsZWRfY29tcG9uZW50c18xIiwic3ZnIiwiQ2lyY3VsYXJQcm9ncmVzc0JhciIsInBlcmNlbnRhZ2UiLCJfYiIsInNxdWFyZVNpemUiLCJfYyIsInN0cm9rZVdpZHRoIiwicmFkaXVzIiwidmlld0JveCIsImRhc2hBcnJheSIsIk1hdGgiLCJQSSIsImRhc2hPZmZzZXQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsImN4IiwiY3kiLCJyIiwiZmlsbCIsInN0cm9rZSIsInRyYW5zZm9ybSIsInN0eWxlIiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlRGFzaG9mZnNldCIsImRlZmF1bHRQcm9wcyIsIk9iamVjdCIsImVudW1lcmFibGUiLCJnZXQiLCJTdHlsZWRFZGl0b3JXcmFwcGVyIiwiZGl2IiwiQ29udGVudEZpZWxkIiwiY3VycmVudEJsb2NrcyIsInNldEN1cnJlbnRCbG9ja3MiLCJ1cGRhdGVWYWx1ZSIsImJsb2NrcyIsInVwZGF0ZVZhbHVlRGVib3VuY2VkIiwib25JbnB1dCIsImNvbXBvbmVudHNfMSIsIlJlZ2lzdGVyIiwiU2xvdCIsIm1lbW8iLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJnaWYiLCJwbmciLCJTRVRUSU5HUyIsImFsbG93ZWRCbG9ja1R5cGVzIiwiY29uc3RhbnRzXzEiLCJ1c2VCbG9ja0VkaXRvclNldHRpbmdzIiwiaGFzVXBsb2FkUGVybWlzc2lvbnMiLCJzZWxlY3QiLCJjb3JlX2RhdGFfMSIsImNhblVzZXIiLCJtZWRpYVVwbG9hZEJsb2NrRWRpdG9yIiwiYXJndW1lbnRzT2JqZWN0Iiwid3BBbGxvd2VkTWltZVR5cGVzIiwib25FcnJvciIsIm1lc3NhZ2UiLCJtZWRpYVVwbG9hZCIsIl9fZXhwZXJpbWVudGFsRmV0Y2hMaW5rU3VnZ2VzdGlvbnMiLCJzZWFyY2giLCJzZWFyY2hPcHRpb25zIiwiX19leHBlcmltZW50YWxGZXRjaFJpY2hVcmxEYXRhIiwiRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9ucyIsImVuYWJsZWQiLCJjb21iaW5hdGlvbnMiLCJzZXRDb21iaW5hdGlvbnMiLCJsaW1pdGVkQ29tYmluYXRpb25zIiwic2V0TGltaXRlZENvbWJpbmF0aW9ucyIsInVuZGVmaW5lZCIsIlJlbGF0ZWREZWdyZWVQcm9ncmFtc18xIiwicmVsYXRlZERlZ3JlZVByb2dyYW1JZHMiLCJzZXRSZWxhdGVkRGVncmVlUHJvZ3JhbXMiLCJsYWJlbCIsIm1lc3NhZ2VzIiwiYWRkZWQiLCJyZW1vdmVkIiwicmVtb3ZlIiwiX19leHBlcmltZW50YWxJbnZhbGlkIiwid2l0aFJlbGF0ZWREZWdyZWVQcm9ncmFtUHJvcHMiLCJXcmFwcGVkQ29tcG9uZW50Iiwib3RoZXJzIiwiZW50aXR5VG9Ub2tlbiIsInBvc3QiLCJkZWdyZWVfcHJvZ3JhbSIsImRlIiwicG9zdHMiLCJtYXAiLCJpZCIsIm1heFN1Z2dlc3Rpb25zIiwiaG9jXzEiLCJFbnRpdHlTZWxlY3Rvcl8xIiwid2l0aERlZ3JlZVByb2dyYW1Qb3N0c18xIiwid2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVBvc3RzXzEiLCJ3aXRoRGVncmVlUHJvZ3JhbVBvc3RzIiwib3duUHJvcHMiLCJsZW5ndGgiLCJlbnRpdGllcyIsInF1ZXJ5IiwicGVyX3BhZ2UiLCJvcmRlcmJ5IiwiX2ZpZWxkcyIsImNvbnRleHQiLCJpbmNsdWRlIiwiam9pbiIsInBvc3RUeXBlIiwid2l0aFNlYXJjaGVkRGVncmVlUHJvZ3JhbVBvc3RzIiwic2V0U2VhcmNoIiwiZWRpdG9yXzEiLCJzZWFyY2hlZEVudGl0aWVzIiwiY3VycmVudFBvc3QiLCJnZXRDdXJyZW50UG9zdCIsImdldEVudGl0eVJlY29yZHMiLCJvcmRlciIsImV4Y2x1ZGUiLCJTdHlsZWRIZWFkaW5nIiwiQWRtaXNzaW9uUmVxdWlyZW1lbnRzIiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiYmFjaGVsb3JPclRlYWNoaW5nRW5hYmxlZCIsInRlYWNoaW5nRGVncmVlSGlnaGVyU2VtZXN0ZXJFbmFibGVkIiwibWFzdGVyc0VuYWJsZWQiLCJodW1hbml0aWVzRmFjdWx0eUxhbmd1YWdlU2tpbGxzRW5hYmxlZCIsImFwcGxpY2F0aW9uU3VtbWVyRGVhZGxpbmVFbmFibGVkIiwiVGVybVNlbGVjdG9yXzEiLCJ0YXhvbm9teSIsImFkbWlzc2lvbl9yZXF1aXJlbWVudHMiLCJiYWNoZWxvcl9vcl90ZWFjaGluZ19kZWdyZWUiLCJ0ZXJtIiwidGVhY2hpbmdfZGVncmVlX2hpZ2hlcl9zZW1lc3RlciIsIm1hc3RlciIsImhlbHAiLCJNdWx0aWxpbmd1YWxDb250YWluZXJfMSIsImNvbnRlbnRfcmVsYXRlZF9tYXN0ZXJfcmVxdWlyZW1lbnRzIiwibGFuZ3VhZ2VDb2RlIiwiQ29udGVudEZpZWxkXzEiLCJhcHBsaWNhdGlvbl9kZWFkbGluZV93aW50ZXJfc2VtZXN0ZXIiLCJhcHBsaWNhdGlvbl9kZWFkbGluZV9zdW1tZXJfc2VtZXN0ZXIiLCJkZXRhaWxzX2FuZF9ub3RlcyIsImxhbmd1YWdlX3NraWxscyIsImxhbmd1YWdlX3NraWxsc19odW1hbml0aWVzX2ZhY3VsdHkiLCJnZXJtYW5fbGFuZ3VhZ2Vfc2tpbGxzX2Zvcl9pbnRlcm5hdGlvbmFsX3N0dWRlbnRzIiwiQ09OVEVOVF9JVEVNUyIsIml0ZW0iLCJrZXkiLCJlbiIsImRlc2NyaXB0aW9uIiwiRGVncmVlUHJvZ3JhbUNvbWJpbmF0aW9uc18xIiwiRGVncmVlUHJvZ3JhbUVkaXRGb3JtIiwiRGVncmVlUHJvZ3JhbUVkaXRGb3JtUHJvdmlkZXJfMSIsIkZvcm1IZWFkaW5nXzEiLCJUYWJzXzEiLCJ0YWJzIiwiY29tcG9uZW50IiwiR2VuZXJhbF8xIiwiQ29udGVudF8xIiwiQWRtaXNzaW9uUmVxdWlyZW1lbnRzXzEiLCJPcmdhbml6YXRpb25hbExpbmtzXzEiLCJGb3JtSGVhZGluZyIsIkdlbmVyYWwiLCJJbWFnZUZpZWxkXzEiLCJwYXRoIiwic3VidGl0bGUiLCJwYXJzZUludCIsInN0YW5kYXJkX2R1cmF0aW9uIiwibWluIiwiY2hlY2tlZCIsImZlZV9yZXF1aXJlZCIsInN0YXJ0IiwidGVybXMiLCJ0cmFuc2Zvcm1zXzEiLCJUZXJtU2VsZWN0b3JfMiIsIm51bWJlcl9vZl9zdHVkZW50cyIsInRlYWNoaW5nX2xhbmd1YWdlIiwiZGVncmVlIiwiZmFjdWx0eSIsImxvY2F0aW9uIiwic3ViamVjdF9ncm91cHMiLCJ0IiwiVGV4dENvbnRyb2xDb2xsZWN0aW9uXzEiLCJ2aWRlb3MiLCJMaW1pdGVkSW5wdXRDb250cm9sXzEiLCJtZXRhX2Rlc2NyaXB0aW9uIiwibWF4Q2hhcnMiLCJ1cGRhdGVkVmFsdWUiLCJrZXlzIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2VOYW1lIiwiTXVsdGlsaW5ndWFsQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJ0YWIiLCJpc0VtcHR5IiwiT3JnYW5pemF0aW9uYWxMaW5rcyIsImRlZ3JlZUZlZXNFbmFibGVkIiwiZXhhbWluYXRpb25zX29mZmljZSIsImV4YW1pbmF0aW9uX3JlZ3VsYXRpb25zIiwiaGFuZGJvb2siLCJtb2R1bGVfaGFuZGJvb2siLCJ1cmwiLCJ0eXBlIiwic3ViamVjdF9zcGVjaWZpY19hZHZpY2UiLCJyZXByZXNlbnRhdGl2ZXMiLCJzdHVkZW50X3JlcHJlc2VudGF0aXZlcyIsImRlZ3JlZV9wcm9ncmFtX2ZlZXMiLCJkZWdyZWVQcm9ncmFtRmVlcyIsIkVudGl0eVNlbGVjdG9yIiwibWF4TGVuZ3RoIiwic2V0VmFsdWVzIiwiZGVib3VuY2VkU2VhcmNoIiwibmV3VmFsdWVzIiwic3VnZ2VzdGlvbnMiLCJvbkNoYW5nZVRva2VucyIsInRva2VucyIsImF2YWlsYWJsZUVudGl0aWVzIiwidW5pcXVlVG9rZW5zIiwibmV3RW50aXRpZXMiLCJ0b2tlbiIsImVudGl0eSIsImlzVG9rZW5WYWxpZCIsIm9uSW5wdXRDaGFuZ2UiLCJfX2V4cGVyaW1lbnRhbFNob3dIb3dUbyIsIl9fZXhwZXJpbWVudGFsVmFsaWRhdGVJbnB1dCIsIl9fZXhwZXJpbWVudGFsRXhwYW5kT25Gb2N1cyIsIlRIVU1CTkFJTF9TSVpFIiwiU3R5bGVkV3JhcHBlciIsImhhc0ltYWdlIiwiSW1hZ2VGaWVsZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNlbGVjdGVkTWVkaWEiLCJQcmV2aWV3Iiwic3JjIiwibWVkaWFfZGV0YWlscyIsInNpemVzIiwidGh1bWJuYWlsIiwic291cmNlX3VybCIsImFsdCIsImhhbmRsZU9uQ2FuY2VsIiwiaGFuZGxlT25TZWxlY3QiLCJoYXNNZWRpYSIsIm9uU2VsZWN0Iiwib25DYW5jZWwiLCJhbGxvd2VkVHlwZXMiLCJtdWx0aXBsZSIsImxhYmVscyIsIm1lZGlhUHJldmlldyIsImdhcCIsImp1c3RpZnkiLCJtZWRpYVVybCIsIm1lZGlhSWQiLCJ2YXJpYW50IiwiaXNEZXN0cnVjdGl2ZSIsIm9uQ2xpY2siLCJ1c2VNZWRpYSIsIm1lZGlhIiwiZ2V0TWVkaWEiLCJMaW1pdGVkSW5wdXRDb250cm9sIiwiY2hhcnNMZWZ0Iiwic2V0Q2hhcnNMZWZ0Iiwic3Vic3RyaW5nIiwiQ2lyY3VsYXJQcm9ncmVzc18xIiwicmVwbGFjZSIsInRvU3RyaW5nIiwiVGFicyIsInRzbGliXzEiLCJ3aXRoU2luZ2xlVGVybVNlbGVjdG9yUHJvcHMiLCJ3aXRoRGVncmVlUHJvZ3JhbVRlcm1zXzEiLCJ3aXRoU2VhcmNoZWREZWdyZWVQcm9ncmFtVGVybXNfMSIsIndpdGhUZXJtU2VsZWN0b3JQcm9wc18xIiwid2l0aERlZ3JlZVByb2dyYW1UZXJtcyIsImlkcyIsImlkSGVscGVyc18xIiwidGF4b25vbXlTbHVncyIsIndpdGhTZWFyY2hlZERlZ3JlZVByb2dyYW1UZXJtcyIsIndpdGhUZXJtU2VsZWN0b3JQcm9wcyIsInRyYW5zZm9ybVJhd1ZhbHVlIiwic3RyIiwiU3R5bGVkRmllbGRSb3ciLCJUZXh0Q29udHJvbENvbGxlY3Rpb24iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJmaWx0ZXIiLCJmIiwiZmllbGQiLCJpbmRleCIsImRyYWZ0IiwiaWNvbiIsIkRlZ3JlZVByb2dyYW1FZGl0Rm9ybVByb3ZpZGVyIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwicHJvcGVydHlOYW1lIiwiZGVncmVlUHJvZ3JhbURhdGEiLCJzZXREZWdyZWVQcm9ncmFtRGF0YSIsInZhbCIsImFkZEVycm9yIiwiZXJyb3JNZXNzYWdlIiwicHJldkVycm9ycyIsInJlbW92ZUVycm9yIiwiUHJvdmlkZXIiLCJ1c2VFZGl0RGVncmVlUHJvZ3JhbSIsIkJBQ0hFTE9SIiwiTUFTVEVSUyIsIlRFQUNISU5HX0RFR1JFRSIsIkFMTE9XRURfRkFDVUxUSUVTX0ZPUl9DT01CSU5BVElPTiIsInVzZURlZ3JlZUZlZXNFbmFibGVkIiwiZmVlUmVxdWlyZWQiLCJ1c2VDb21iaW5hdGlvbk9mRGVncmVlUHJvZ3JhbUVuYWJsZWQiLCJhYmJyZXZpYXRpb24iLCJkZWZzXzEiLCJ1c2VBZG1pc3Npb25SZXF1aXJlbWVudHNGb3JCYWNoZWxvckFuZFRlYWNoaW5nRGVncmVlc0VuYWJsZSIsInVzZUFkbWlzc2lvblJlcXVpcmVtZW50c1RlYWNoaW5nRGVncmVlQXRIaWdoZXJTZW1lc3RlckVuYWJsZWQiLCJiYWNoZWxvck9yVGVhY2hpbmdBZG1pc3Npb25SZXF1aXJlbWVudCIsInVzZUFkbWlzc2lvblJlcXVpcmVtZW50c0Zvck1hc3RlcnNEZWdyZWUiLCJ1c2VMYW5ndWFnZVNraWxsc0ZvckZhY3VsdHlPZkh1bWFuaXRpZXNPbmx5RW5hYmxlZCIsInVzZUFwcGxpY2F0aW9uRGVhZGxpbmVTdW1tZXJTZW1lc3RlckVuYWJsZWQiLCJzZW1lc3RlciIsInVzZURlZ3JlZVByb2dyYW1Qcm9wZXJ0eSIsInByb3BlcnR5SWQiLCJzdWJGaWVsZCIsInBhcnRzIiwiZW50aXR5SWQiLCJzcGxpdCIsInNlcnZlckRhdGEiLCJ3aW5kb3ciLCJEZWdyZWVQcm9ncmFtRWRpdG9yU2VydmVyRGF0YSIsIkVycm9yIiwiRU1QVFlfTVVMVElMSU5HVUFMX1NUUklORyIsInRyYW5zZm9ybVRlcm1Ub011bHRpbGluZ3VhbFN0cmluZyIsIm1ldGEiLCJuYW1lX2VuIiwidHJhbnNmb3JtVGVybVRvTXVsdGlsaW5ndWFsTGluayIsImxpbmtfdGV4dCIsImxpbmtfdGV4dF9lbiIsImxpbmtfdXJsIiwibGlua191cmxfZW4iLCJ0cmFuc2Zvcm1UZXJtVG9EZWdyZWUiLCJhYmJyZXZpYXRpb25fZW4iXSwic291cmNlUm9vdCI6IiJ9
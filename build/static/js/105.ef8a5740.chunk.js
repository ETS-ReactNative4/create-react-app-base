webpackJsonp([105], {
  207: function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      r.d(t, 'default', function() {
        return u
      })
    var n = r(0),
      o = r.n(n),
      a = r(30)
    function c(e) {
      return (c =
        'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    function l(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function i(e, t) {
      return !t || ('object' !== c(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var u = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var r, n, c
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o.a.Component),
        (r = t),
        (n = [
          {
            key: 'render',
            value: function() {
              return o.a.createElement(
                'div',
                null,
                o.a.createElement(a.Badge, { color: 'primary' }, 'Primary'),
                o.a.createElement(a.Badge, { color: 'secondary' }, 'Secondary'),
                o.a.createElement(a.Badge, { color: 'success' }, 'Success'),
                o.a.createElement(a.Badge, { color: 'danger' }, 'Danger'),
                o.a.createElement(a.Badge, { color: 'warning' }, 'Warning'),
                o.a.createElement(a.Badge, { color: 'info' }, 'Info'),
                o.a.createElement(a.Badge, { color: 'light' }, 'Light'),
                o.a.createElement(a.Badge, { color: 'dark' }, 'Dark')
              )
            }
          }
        ]) && l(r.prototype, n),
        c && l(r, c),
        t
      )
    })()
  }
})
//# sourceMappingURL=105.ef8a5740.chunk.js.map

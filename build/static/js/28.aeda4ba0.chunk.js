webpackJsonp([28], {
  284: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return c
      })
    var o = n(0),
      r = n.n(o),
      a = n(30)
    function i(e) {
      return (i =
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
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function u(e, t) {
      return !t || ('object' !== i(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var c = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, o, i
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, r.a.Component),
        (n = t),
        (o = [
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                a.Pagination,
                { size: 'sm' },
                r.a.createElement(
                  a.PaginationItem,
                  null,
                  r.a.createElement(a.PaginationLink, { previous: !0, href: '/' })
                ),
                r.a.createElement(a.PaginationItem, null, r.a.createElement(a.PaginationLink, { href: '/' }, '1')),
                r.a.createElement(a.PaginationItem, null, r.a.createElement(a.PaginationLink, { href: '/' }, '2')),
                r.a.createElement(a.PaginationItem, null, r.a.createElement(a.PaginationLink, { href: '/' }, '3')),
                r.a.createElement(a.PaginationItem, null, r.a.createElement(a.PaginationLink, { next: !0, href: '/' }))
              )
            }
          }
        ]) && l(n.prototype, o),
        i && l(n, i),
        t
      )
    })()
  }
})
//# sourceMappingURL=28.aeda4ba0.chunk.js.map

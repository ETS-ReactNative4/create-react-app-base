webpackJsonp([108], {
  204: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return i
      })
    var r = n(0),
      o = n.n(r),
      a = n(30)
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
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function u(e, t) {
      return !t || ('object' !== c(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var i = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, r, c
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o.a.Component),
        (n = t),
        (r = [
          {
            key: 'render',
            value: function() {
              return o.a.createElement(
                'div',
                null,
                o.a.createElement('h1', null, 'Heading ', o.a.createElement(a.Badge, { color: 'secondary' }, 'New')),
                o.a.createElement('h2', null, 'Heading ', o.a.createElement(a.Badge, { color: 'secondary' }, 'New')),
                o.a.createElement('h3', null, 'Heading ', o.a.createElement(a.Badge, { color: 'secondary' }, 'New')),
                o.a.createElement('h4', null, 'Heading ', o.a.createElement(a.Badge, { color: 'secondary' }, 'New')),
                o.a.createElement('h5', null, 'Heading ', o.a.createElement(a.Badge, { color: 'secondary' }, 'New')),
                o.a.createElement('h6', null, 'Heading ', o.a.createElement(a.Badge, { color: 'secondary' }, 'New'))
              )
            }
          }
        ]) && l(n.prototype, r),
        c && l(n, c),
        t
      )
    })()
  }
})
//# sourceMappingURL=108.12fb1911.chunk.js.map

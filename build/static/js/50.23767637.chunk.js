webpackJsonp([50], {
  262: function(e, t, o) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      o.d(t, 'default', function() {
        return l
      })
    var r = o(0),
      n = o.n(r),
      i = o(30)
    function u(e) {
      return (u =
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
    function c(e, t) {
      for (var o = 0; o < t.length; o++) {
        var r = t[o]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function a(e, t) {
      return !t || ('object' !== u(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var l = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var o, r, u
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, n.a.Component),
        (o = t),
        (r = [
          {
            key: 'render',
            value: function() {
              return n.a.createElement(
                i.ListGroup,
                null,
                n.a.createElement(i.ListGroupItem, { color: 'success' }, 'Cras justo odio'),
                n.a.createElement(i.ListGroupItem, { color: 'info' }, 'Dapibus ac facilisis in'),
                n.a.createElement(i.ListGroupItem, { color: 'warning' }, 'Morbi leo risus'),
                n.a.createElement(i.ListGroupItem, { color: 'danger' }, 'Porta ac consectetur ac')
              )
            }
          }
        ]) && c(o.prototype, r),
        u && c(o, u),
        t
      )
    })()
  }
})
//# sourceMappingURL=50.23767637.chunk.js.map

webpackJsonp([53], {
  259: function(e, t, o) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      o.d(t, 'default', function() {
        return s
      })
    var l = o(0),
      n = o.n(l),
      r = o(30)
    function a(e) {
      return (a =
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
        var l = t[o]
        ;(l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          'value' in l && (l.writable = !0),
          Object.defineProperty(e, l.key, l)
      }
    }
    function u(e, t) {
      return !t || ('object' !== a(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var s = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var o, l, a
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
        (l = [
          {
            key: 'render',
            value: function() {
              return n.a.createElement(
                r.Container,
                null,
                n.a.createElement(r.Row, null, n.a.createElement(r.Col, null, '.col')),
                n.a.createElement(
                  r.Row,
                  null,
                  n.a.createElement(r.Col, null, '.col'),
                  n.a.createElement(r.Col, null, '.col'),
                  n.a.createElement(r.Col, null, '.col'),
                  n.a.createElement(r.Col, null, '.col')
                ),
                n.a.createElement(
                  r.Row,
                  null,
                  n.a.createElement(r.Col, { xs: '3' }, '.col-3'),
                  n.a.createElement(r.Col, { xs: 'auto' }, '.col-auto - variable width content'),
                  n.a.createElement(r.Col, { xs: '3' }, '.col-3')
                ),
                n.a.createElement(
                  r.Row,
                  null,
                  n.a.createElement(r.Col, { xs: '6' }, '.col-6'),
                  n.a.createElement(r.Col, { xs: '6' }, '.col-6')
                ),
                n.a.createElement(
                  r.Row,
                  null,
                  n.a.createElement(r.Col, { xs: '6', sm: '4' }, '.col-6 .col-sm-4'),
                  n.a.createElement(r.Col, { xs: '6', sm: '4' }, '.col-6 .col-sm-4'),
                  n.a.createElement(r.Col, { sm: '4' }, '.col-sm-4')
                ),
                n.a.createElement(
                  r.Row,
                  null,
                  n.a.createElement(
                    r.Col,
                    { sm: { size: 6, order: 2, offset: 1 } },
                    '.col-sm-6 .col-sm-order-2 .col-sm-offset-2'
                  )
                ),
                n.a.createElement(
                  r.Row,
                  null,
                  n.a.createElement(
                    r.Col,
                    { sm: '12', md: { size: 8, offset: 2 } },
                    '.col-sm-12 .col-md-6 .col-md-offset-3'
                  )
                ),
                n.a.createElement(
                  r.Row,
                  null,
                  n.a.createElement(r.Col, { sm: { size: 'auto', offset: 1 } }, '.col-sm .col-sm-offset-1'),
                  n.a.createElement(r.Col, { sm: { size: 'auto', offset: 1 } }, '.col-sm .col-sm-offset-1')
                )
              )
            }
          }
        ]) && c(o.prototype, l),
        a && c(o, a),
        t
      )
    })()
  }
})
//# sourceMappingURL=53.0e5e46c8.chunk.js.map

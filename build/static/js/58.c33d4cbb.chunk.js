webpackJsonp([58], {
  254: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return i
      })
    var o = n(0),
      r = n.n(o),
      l = n(30)
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
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
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
    var i = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, o, a
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
                l.Form,
                null,
                r.a.createElement(l.Input, { placeholder: 'lg', bsSize: 'lg' }),
                r.a.createElement(l.Input, { placeholder: 'default' }),
                r.a.createElement(l.Input, { placeholder: 'sm', bsSize: 'sm' }),
                r.a.createElement(
                  l.Input,
                  { type: 'select', bsSize: 'lg' },
                  r.a.createElement('option', null, 'Large Select')
                ),
                r.a.createElement(l.Input, { type: 'select' }, r.a.createElement('option', null, 'Default Select')),
                r.a.createElement(
                  l.Input,
                  { type: 'select', bsSize: 'sm' },
                  r.a.createElement('option', null, 'Small Select')
                )
              )
            }
          }
        ]) && c(n.prototype, o),
        a && c(n, a),
        t
      )
    })()
  }
})
//# sourceMappingURL=58.c33d4cbb.chunk.js.map

webpackJsonp([228], {
  713: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = n(0),
      o = n.n(r),
      u = n(714)
    t.default = function(e) {
      var t = e.strings
      return o.a.createElement(
        r.Fragment,
        null,
        o.a.createElement('h1', null, t.title),
        o.a.createElement('p', null, t.description),
        o.a.createElement(u.a, null)
      )
    }
  },
  714: function(e, t, n) {
    'use strict'
    n.d(t, 'a', function() {
      return f
    })
    var r = n(0),
      o = n.n(r),
      u = n(30),
      a = n(36)
    function l(e) {
      return (l =
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
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function c(e, t) {
      return !t || ('object' !== l(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var f = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, l, f
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, r['PureComponent']),
        (n = t),
        (l = [
          {
            key: 'render',
            value: function() {
              return o.a.createElement(a.a, {
                stringNames: ['localizationTester'],
                render: function(e) {
                  var t = e.strings,
                    n = e.user
                  return o.a.createElement(
                    r.Fragment,
                    null,
                    o.a.createElement(u.Button, null, t.hello, ' ', n.firstName, ' ', n.lastName),
                    o.a.createElement(u.Button, null, t.hello2)
                  )
                }
              })
            }
          }
        ]) && i(n.prototype, l),
        f && i(n, f),
        t
      )
    })()
  }
})
//# sourceMappingURL=228.b2906a57.chunk.js.map

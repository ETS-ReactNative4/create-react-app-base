webpackJsonp([112], {
  200: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var o = n(0),
      r = n.n(o),
      i = n(30)
    function s(e) {
      return (s =
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
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function u(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    var c = (function(e) {
      function t(e) {
        var n, o, r
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (o = this),
          ((n =
            !(r = (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)) ||
            ('object' !== s(r) && 'function' !== typeof r)
              ? u(o)
              : r).state = { visible: !0 }),
          (n.onDismiss = n.onDismiss.bind(u(n))),
          n
        )
      }
      var n, o, c
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
            key: 'onDismiss',
            value: function() {
              this.setState({ visible: !1 })
            }
          },
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                i.Alert,
                { color: 'info', isOpen: this.state.visible, toggle: this.onDismiss },
                'I am an alert and I can be dismissed!'
              )
            }
          }
        ]) && a(n.prototype, o),
        c && a(n, c),
        t
      )
    })()
    t.default = c
  }
})
//# sourceMappingURL=112.6b3c8544.chunk.js.map

webpackJsonp([72], {
  240: function(e, t, n) {
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
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function l(e) {
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
            ('object' !== i(r) && 'function' !== typeof r)
              ? l(o)
              : r).state = { fadeIn: !0 }),
          (n.toggle = n.toggle.bind(l(n))),
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
            key: 'render',
            value: function() {
              return r.a.createElement(
                'div',
                null,
                r.a.createElement(a.Button, { color: 'primary', onClick: this.toggle }, 'Toggle Fade'),
                r.a.createElement(
                  a.Fade,
                  { in: this.state.fadeIn, tag: 'h5', className: 'mt-3', timeout: 0 },
                  'This content will fade in and out as the button is pressed'
                )
              )
            }
          },
          {
            key: 'toggle',
            value: function() {
              this.setState({ fadeIn: !this.state.fadeIn })
            }
          }
        ]) && u(n.prototype, o),
        c && u(n, c),
        t
      )
    })()
  }
})
//# sourceMappingURL=72.1b316cc0.chunk.js.map

webpackJsonp([8], {
  304: function(t, e, o) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 }),
      o.d(e, 'default', function() {
        return c
      })
    var n = o(0),
      r = o.n(n),
      i = o(30)
    function l(t) {
      return (l =
        'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
          ? function(t) {
              return typeof t
            }
          : function(t) {
              return t && 'function' === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    function a(t, e) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n)
      }
    }
    function u(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return t
    }
    var c = (function(t) {
      function e(t) {
        var o, n, r
        return (
          (function(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
          })(this, e),
          (n = this),
          ((o =
            !(r = (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)) ||
            ('object' !== l(r) && 'function' !== typeof r)
              ? u(n)
              : r).toggle = o.toggle.bind(u(o))),
          (o.state = { tooltipOpen: !1 }),
          o
        )
      }
      var o, n, c
      return (
        (function(t, e) {
          if ('function' !== typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function')
          ;(t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
          })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
        })(e, r.a.Component),
        (o = e),
        (n = [
          {
            key: 'toggle',
            value: function() {
              this.setState({ tooltipOpen: !this.state.tooltipOpen })
            }
          },
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                'div',
                null,
                r.a.createElement(
                  'p',
                  null,
                  'Sometimes you need to allow users to select text within a',
                  ' ',
                  r.a.createElement('a', { href: '/', id: 'DisabledAutoHideTooltipAutoHide' }, 'tooltip'),
                  '.'
                ),
                r.a.createElement(
                  i.Tooltip,
                  {
                    placement: 'top',
                    isOpen: this.state.tooltipOpen,
                    autohide: !1,
                    target: 'DisabledAutoHideTooltipAutoHide',
                    toggle: this.toggle
                  },
                  'Try to select this text!'
                )
              )
            }
          }
        ]) && a(o.prototype, n),
        c && a(o, c),
        e
      )
    })()
  }
})
//# sourceMappingURL=8.459c7280.chunk.js.map

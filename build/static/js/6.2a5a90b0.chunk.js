webpackJsonp([6], {
  306: function(t, e, o) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
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
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }
    function p(t, e) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n)
      }
    }
    function c(t, e, o) {
      return e && p(t.prototype, e), o && p(t, o), t
    }
    function u(t, e) {
      return !e || ('object' !== l(e) && 'function' !== typeof e) ? f(t) : e
    }
    function s(t, e) {
      if ('function' !== typeof e && null !== e)
        throw new TypeError('Super expression must either be null or a function')
      ;(t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
      })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
    }
    function f(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return t
    }
    var m = (function(t) {
        function e(t) {
          var o
          return (
            a(this, e),
            ((o = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))).toggle = o.toggle.bind(f(o))),
            (o.state = { tooltipOpen: !1 }),
            o
          )
        }
        return (
          s(e, r.a.Component),
          c(e, [
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
                  'span',
                  null,
                  r.a.createElement(
                    i.Button,
                    { className: 'mr-1', color: 'secondary', id: 'Tooltip-' + this.props.id },
                    this.props.item.text
                  ),
                  r.a.createElement(
                    i.Tooltip,
                    {
                      placement: this.props.item.placement,
                      isOpen: this.state.tooltipOpen,
                      target: 'Tooltip-' + this.props.id,
                      toggle: this.toggle
                    },
                    'Tooltip Content!'
                  )
                )
              }
            }
          ]),
          e
        )
      })(),
      y = (function(t) {
        function e(t) {
          var o
          return (
            a(this, e),
            ((o = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t))).state = {
              tooltips: [
                { placement: 'top', text: 'Top' },
                { placement: 'bottom', text: 'Bottom' },
                { placement: 'left', text: 'Left' },
                { placement: 'right', text: 'Right' }
              ]
            }),
            o
          )
        }
        return (
          s(e, r.a.Component),
          c(e, [
            {
              key: 'render',
              value: function() {
                return r.a.createElement(
                  'div',
                  null,
                  this.state.tooltips.map(function(t, e) {
                    return r.a.createElement(m, { key: e, item: t, id: e })
                  })
                )
              }
            }
          ]),
          e
        )
      })()
    e.default = y
  }
})
//# sourceMappingURL=6.2a5a90b0.chunk.js.map

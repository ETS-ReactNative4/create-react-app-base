webpackJsonp([26], {
  286: function(e, t, o) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      o.d(t, 'default', function() {
        return c
      })
    var n = o(0),
      r = o.n(n),
      a = o(30)
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
    function u(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function i(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    var c = (function(e) {
      function t(e) {
        var o, n, r
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (n = this),
          ((o =
            !(r = (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)) ||
            ('object' !== l(r) && 'function' !== typeof r)
              ? i(n)
              : r).toggle = o.toggle.bind(i(o))),
          (o.state = { popoverOpen: !1 }),
          o
        )
      }
      var o, n, c
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, r.a.Component),
        (o = t),
        (n = [
          {
            key: 'toggle',
            value: function() {
              this.setState({ popoverOpen: !this.state.popoverOpen })
            }
          },
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                'div',
                null,
                r.a.createElement(a.Button, { id: 'Popover1', onClick: this.toggle }, 'Launch Popover'),
                r.a.createElement(
                  a.Popover,
                  { placement: 'bottom', isOpen: this.state.popoverOpen, target: 'Popover1', toggle: this.toggle },
                  r.a.createElement(a.PopoverHeader, null, 'Popover Title'),
                  r.a.createElement(
                    a.PopoverBody,
                    null,
                    'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
                  )
                )
              )
            }
          }
        ]) && u(o.prototype, n),
        c && u(o, c),
        t
      )
    })()
  }
})
//# sourceMappingURL=26.1ad44245.chunk.js.map

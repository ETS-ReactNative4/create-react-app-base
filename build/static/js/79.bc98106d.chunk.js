webpackJsonp([79], {
  233: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
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
    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function c(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    var u = (function(e) {
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
              ? c(o)
              : r).toggle = n.toggle.bind(c(n))),
          (n.state = { collapse: !1 }),
          n
        )
      }
      var n, u, s
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o['Component']),
        (n = t),
        (u = [
          {
            key: 'toggle',
            value: function() {
              this.setState({ collapse: !this.state.collapse })
            }
          },
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                'div',
                null,
                r.a.createElement(
                  a.Button,
                  { color: 'primary', onClick: this.toggle, style: { marginBottom: '1rem' } },
                  'Toggle'
                ),
                r.a.createElement(
                  a.Collapse,
                  { isOpen: this.state.collapse, timeout: 0 },
                  r.a.createElement(
                    a.Card,
                    null,
                    r.a.createElement(
                      a.CardBody,
                      null,
                      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
                    )
                  )
                )
              )
            }
          }
        ]) && l(n.prototype, u),
        s && l(n, s),
        t
      )
    })()
    t.default = u
  }
})
//# sourceMappingURL=79.bc98106d.chunk.js.map

webpackJsonp([78], {
  234: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var o = n(0),
      i = n.n(o),
      r = n(30)
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
    function s(e, t) {
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
    var u = (function(e) {
      function t(e) {
        var n, o, i
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (o = this),
          ((n =
            !(i = (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)) ||
            ('object' !== a(i) && 'function' !== typeof i)
              ? l(o)
              : i).onEntering = n.onEntering.bind(l(n))),
          (n.onEntered = n.onEntered.bind(l(n))),
          (n.onExiting = n.onExiting.bind(l(n))),
          (n.onExited = n.onExited.bind(l(n))),
          (n.toggle = n.toggle.bind(l(n))),
          (n.state = { collapse: !1, status: 'Closed' }),
          n
        )
      }
      var n, u, c
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
            key: 'onEntering',
            value: function() {
              this.setState({ status: 'Opening...' })
            }
          },
          {
            key: 'onEntered',
            value: function() {
              this.setState({ status: 'Opened' })
            }
          },
          {
            key: 'onExiting',
            value: function() {
              this.setState({ status: 'Closing...' })
            }
          },
          {
            key: 'onExited',
            value: function() {
              this.setState({ status: 'Closed' })
            }
          },
          {
            key: 'toggle',
            value: function() {
              this.setState({ collapse: !this.state.collapse })
            }
          },
          {
            key: 'render',
            value: function() {
              return i.a.createElement(
                'div',
                null,
                i.a.createElement(
                  r.Button,
                  { color: 'primary', onClick: this.toggle, style: { marginBottom: '1rem' } },
                  'Toggle'
                ),
                i.a.createElement('h5', null, 'Current state: ', this.state.status),
                i.a.createElement(
                  r.Collapse,
                  {
                    isOpen: this.state.collapse,
                    onEntering: this.onEntering,
                    onEntered: this.onEntered,
                    onExiting: this.onExiting,
                    onExited: this.onExited,
                    timeout: 0
                  },
                  i.a.createElement(
                    r.Card,
                    null,
                    i.a.createElement(
                      r.CardBody,
                      null,
                      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
                    )
                  )
                )
              )
            }
          }
        ]) && s(n.prototype, u),
        c && s(n, c),
        t
      )
    })()
    t.default = u
  }
})
//# sourceMappingURL=78.a31c111e.chunk.js.map

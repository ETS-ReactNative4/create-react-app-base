webpackJsonp([39], {
  273: function(e, t, o) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
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
    function i(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function u(e) {
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
              ? u(n)
              : r).state = { modal: !1 }),
          (o.toggle = o.toggle.bind(u(o))),
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
              this.setState({ modal: !this.state.modal })
            }
          },
          {
            key: 'render',
            value: function() {
              var e = r.a.createElement(
                'button',
                {
                  className: 'close',
                  style: { position: 'absolute', top: '15px', right: '15px' },
                  onClick: this.toggle
                },
                '\xd7'
              )
              return r.a.createElement(
                'div',
                null,
                r.a.createElement(a.Button, { color: 'danger', onClick: this.toggle }, 'Modal'),
                r.a.createElement(
                  a.Modal,
                  { isOpen: this.state.modal, toggle: this.toggle, external: e },
                  r.a.createElement(a.ModalHeader, null, 'Modal title'),
                  r.a.createElement(
                    a.ModalBody,
                    null,
                    r.a.createElement('b', null, 'Look at the top right of the page/viewport!'),
                    r.a.createElement('br', null),
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  r.a.createElement(
                    a.ModalFooter,
                    null,
                    r.a.createElement(a.Button, { color: 'primary', onClick: this.toggle }, 'Do Something'),
                    ' ',
                    r.a.createElement(a.Button, { color: 'secondary', onClick: this.toggle }, 'Cancel')
                  )
                )
              )
            }
          }
        ]) && i(o.prototype, n),
        c && i(o, c),
        t
      )
    })()
    t.default = c
  }
})
//# sourceMappingURL=39.f39e0e94.chunk.js.map

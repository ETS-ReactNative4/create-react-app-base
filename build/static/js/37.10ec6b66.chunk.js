webpackJsonp([37], {
  275: function(e, t, o) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var l = o(0),
      n = o.n(l),
      a = o(30)
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
    function r(e, t) {
      for (var o = 0; o < t.length; o++) {
        var l = t[o]
        ;(l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          'value' in l && (l.writable = !0),
          Object.defineProperty(e, l.key, l)
      }
    }
    function s(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    var c = (function(e) {
      function t(e) {
        var o, l, n
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          (l = this),
          ((o =
            !(n = (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)) ||
            ('object' !== i(n) && 'function' !== typeof n)
              ? s(l)
              : n).state = { modal: !1, nestedModal: !1, closeAll: !1 }),
          (o.toggle = o.toggle.bind(s(o))),
          (o.toggleNested = o.toggleNested.bind(s(o))),
          (o.toggleAll = o.toggleAll.bind(s(o))),
          o
        )
      }
      var o, l, c
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, n.a.Component),
        (o = t),
        (l = [
          {
            key: 'toggle',
            value: function() {
              this.setState({ modal: !this.state.modal })
            }
          },
          {
            key: 'toggleNested',
            value: function() {
              this.setState({ nestedModal: !this.state.nestedModal, closeAll: !1 })
            }
          },
          {
            key: 'toggleAll',
            value: function() {
              this.setState({ nestedModal: !this.state.nestedModal, closeAll: !0 })
            }
          },
          {
            key: 'render',
            value: function() {
              return n.a.createElement(
                'div',
                null,
                n.a.createElement(a.Button, { color: 'danger', onClick: this.toggle }, 'Modal'),
                n.a.createElement(
                  a.Modal,
                  { isOpen: this.state.modal, toggle: this.toggle },
                  n.a.createElement(a.ModalHeader, { toggle: this.toggle }, 'Modal title'),
                  n.a.createElement(
                    a.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    n.a.createElement('br', null),
                    n.a.createElement(a.Button, { color: 'success', onClick: this.toggleNested }, 'Show Nested Model'),
                    n.a.createElement(
                      a.Modal,
                      {
                        isOpen: this.state.nestedModal,
                        toggle: this.toggleNested,
                        onClosed: this.state.closeAll ? this.toggle : void 0
                      },
                      n.a.createElement(a.ModalHeader, null, 'Nested Modal title'),
                      n.a.createElement(a.ModalBody, null, 'Stuff and things'),
                      n.a.createElement(
                        a.ModalFooter,
                        null,
                        n.a.createElement(a.Button, { color: 'primary', onClick: this.toggleNested }, 'Done'),
                        ' ',
                        n.a.createElement(a.Button, { color: 'secondary', onClick: this.toggleAll }, 'All Done')
                      )
                    )
                  ),
                  n.a.createElement(
                    a.ModalFooter,
                    null,
                    n.a.createElement(a.Button, { color: 'primary', onClick: this.toggle }, 'Do Something'),
                    ' ',
                    n.a.createElement(a.Button, { color: 'secondary', onClick: this.toggle }, 'Cancel')
                  )
                )
              )
            }
          }
        ]) && r(o.prototype, l),
        c && r(o, c),
        t
      )
    })()
    t.default = c
  }
})
//# sourceMappingURL=37.10ec6b66.chunk.js.map

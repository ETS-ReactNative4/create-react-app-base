webpackJsonp([226], {
  50: function(e, t, n) {
    'use strict'
    var r = n(0),
      o = n.n(r),
      a = n(30),
      u = n(35)
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
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function i(e, t) {
      return !t || ('object' !== l(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var p = (function(e) {
      function t() {
        var e, n, r
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var o = arguments.length, a = new Array(o), u = 0; u < o; u++) a[u] = arguments[u]
        return i(
          r,
          ((n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
          (r.state = {}),
          n)
        )
      }
      var n, l, p
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
            key: 'toggle',
            value: function() {
              this.setState(function(e) {
                return { dropdownOpen: !e.dropdownOpen }
              })
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this
              return o.a.createElement(u.b.Consumer, null, function(t) {
                return o.a.createElement(
                  a.Dropdown,
                  {
                    isOpen: e.state.dropdownOpen,
                    toggle: function() {
                      return e.toggle()
                    },
                    nav: e.props.nav,
                    inNavbar: !0
                  },
                  o.a.createElement(
                    a.DropdownToggle,
                    { nav: e.props.nav, caret: !0 },
                    t.state.user.language.toUpperCase()
                  ),
                  o.a.createElement(
                    a.DropdownMenu,
                    { right: e.props.right },
                    o.a.createElement(
                      a.DropdownItem,
                      {
                        onClick: function() {
                          return t.state.updateUserByPropertyValue('language', 'en')
                        }
                      },
                      'English'
                    ),
                    o.a.createElement(
                      a.DropdownItem,
                      {
                        onClick: function() {
                          return t.state.updateUserByPropertyValue('language', 'ja')
                        }
                      },
                      'Japanese'
                    )
                  )
                )
              })
            }
          }
        ]) && c(n.prototype, l),
        p && c(n, p),
        t
      )
    })()
    ;(p.defaultProps = { nav: !0, right: !0 }), (t.a = p)
  },
  51: function(e, t, n) {
    'use strict'
    var r = n(30),
      o = n(0),
      a = n.n(o),
      u = n(35)
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
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function i(e, t) {
      return !t || ('object' !== l(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var p = (function(e) {
      function t() {
        var e, n, r
        !(function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        })(this, t)
        for (var o = arguments.length, a = new Array(o), u = 0; u < o; u++) a[u] = arguments[u]
        return i(
          r,
          ((n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
          (r.state = {}),
          n)
        )
      }
      var n, l, p
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o['PureComponent']),
        (n = t),
        (l = [
          {
            key: 'toggle',
            value: function() {
              this.setState(function(e) {
                return { dropdownOpen: !e.dropdownOpen }
              })
            }
          },
          {
            key: 'render',
            value: function() {
              var e = this
              return a.a.createElement(u.b.Consumer, null, function(t) {
                return a.a.createElement(
                  r.Dropdown,
                  {
                    isOpen: e.state.dropdownOpen,
                    toggle: function() {
                      return e.toggle()
                    }
                  },
                  a.a.createElement(r.DropdownToggle, { caret: !0 }, t.state.user.theme),
                  a.a.createElement(
                    r.DropdownMenu,
                    null,
                    a.a.createElement(
                      r.DropdownItem,
                      {
                        onClick: function() {
                          return t.state.updateUserByPropertyValue('theme', 'custom')
                        }
                      },
                      'Custom'
                    ),
                    a.a.createElement(
                      r.DropdownItem,
                      {
                        onClick: function() {
                          return t.state.updateUserByPropertyValue('theme', 'darkly')
                        }
                      },
                      'Darkly'
                    ),
                    a.a.createElement(
                      r.DropdownItem,
                      {
                        onClick: function() {
                          return t.state.updateUserByPropertyValue('theme', 'original')
                        }
                      },
                      'Original'
                    ),
                    a.a.createElement(
                      r.DropdownItem,
                      {
                        onClick: function() {
                          return t.state.updateUserByPropertyValue('theme', 'yeti')
                        }
                      },
                      'Yeti'
                    )
                  )
                )
              })
            }
          }
        ]) && c(n.prototype, l),
        p && c(n, p),
        t
      )
    })()
    t.a = p
  },
  718: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r = n(0),
      o = n.n(r),
      a = n(30),
      u = n(36),
      l = n(50),
      c = n(51)
    t.default = function() {
      return o.a.createElement(u.a, {
        stringNames: ['userSettings'],
        render: function(e) {
          var t = e.strings
          return (
            e.user,
            o.a.createElement(
              r.Fragment,
              null,
              o.a.createElement('h1', null, t.userSettings),
              o.a.createElement(
                a.Form,
                null,
                o.a.createElement(
                  a.FormGroup,
                  null,
                  o.a.createElement(a.Label, null, t.language),
                  o.a.createElement(l.a, { nav: !1, right: !1 })
                ),
                o.a.createElement(
                  a.FormGroup,
                  null,
                  o.a.createElement(a.Label, null, t.theme),
                  o.a.createElement(c.a, null)
                )
              )
            )
          )
        }
      })
    }
  }
})
//# sourceMappingURL=226.3d245737.chunk.js.map

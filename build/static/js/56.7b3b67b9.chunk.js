webpackJsonp([56], {
  256: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return c
      })
    var r = n(0),
      o = n.n(r),
      a = n(30)
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
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function u(e, t) {
      return !t || ('object' !== l(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var c = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, r, l
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o.a.Component),
        (n = t),
        (r = [
          {
            key: 'render',
            value: function() {
              return o.a.createElement(
                a.Form,
                { inline: !0 },
                o.a.createElement(
                  a.FormGroup,
                  null,
                  o.a.createElement(a.Label, { for: 'exampleEmailFormLabelHidden', hidden: !0 }, 'Email'),
                  o.a.createElement(a.Input, {
                    type: 'email',
                    name: 'email',
                    id: 'exampleEmailFormLabelHidden',
                    placeholder: 'Email'
                  })
                ),
                ' ',
                o.a.createElement(
                  a.FormGroup,
                  null,
                  o.a.createElement(a.Label, { for: 'examplePasswordFormLabelHidden', hidden: !0 }, 'Password'),
                  o.a.createElement(a.Input, {
                    type: 'password',
                    name: 'password',
                    id: 'examplePasswordFormLabelHidden',
                    placeholder: 'Password'
                  })
                ),
                ' ',
                o.a.createElement(a.Button, null, 'Submit')
              )
            }
          }
        ]) && i(n.prototype, r),
        l && i(n, l),
        t
      )
    })()
  }
})
//# sourceMappingURL=56.7b3b67b9.chunk.js.map

webpackJsonp([65], {
  247: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return c
      })
    var r = n(0),
      o = n.n(r),
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
        var r = t[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
    }
    function u(e, t) {
      return !t || ('object' !== i(t) && 'function' !== typeof t)
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
      var n, r, i
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
                null,
                o.a.createElement(
                  a.FormGroup,
                  { row: !0 },
                  o.a.createElement(a.Label, { for: 'exampleEmailFormInputGridSizing1', sm: 2, size: 'lg' }, 'Email'),
                  o.a.createElement(
                    a.Col,
                    { sm: 10 },
                    o.a.createElement(a.Input, {
                      type: 'email',
                      name: 'email',
                      id: 'exampleEmailFormInputGridSizing1',
                      placeholder: 'lg',
                      bsSize: 'lg'
                    })
                  )
                ),
                o.a.createElement(
                  a.FormGroup,
                  { row: !0 },
                  o.a.createElement(a.Label, { for: 'exampleEmailFormInputGridSizing2', sm: 2 }, 'Email'),
                  o.a.createElement(
                    a.Col,
                    { sm: 10 },
                    o.a.createElement(a.Input, {
                      type: 'email',
                      name: 'email',
                      id: 'exampleEmailFormInputGridSizing2',
                      placeholder: 'default'
                    })
                  )
                )
              )
            }
          }
        ]) && l(n.prototype, r),
        i && l(n, i),
        t
      )
    })()
  }
})
//# sourceMappingURL=65.ae909238.chunk.js.map

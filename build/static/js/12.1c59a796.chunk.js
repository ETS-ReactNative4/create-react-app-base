webpackJsonp([12], {
  300: function(e, t, l) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      l.d(t, 'default', function() {
        return b
      })
    var n = l(0),
      a = l.n(n),
      r = l(30)
    function c(e) {
      return (c =
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
    function o(e, t) {
      for (var l = 0; l < t.length; l++) {
        var n = t[l]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n)
      }
    }
    function u(e, t) {
      return !t || ('object' !== c(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var b = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var l, n, c
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, a.a.Component),
        (l = t),
        (n = [
          {
            key: 'render',
            value: function() {
              return a.a.createElement(
                r.Table,
                { responsive: !0 },
                a.a.createElement(
                  'thead',
                  null,
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('th', null, '#'),
                    a.a.createElement('th', null, 'Table heading'),
                    a.a.createElement('th', null, 'Table heading'),
                    a.a.createElement('th', null, 'Table heading'),
                    a.a.createElement('th', null, 'Table heading'),
                    a.a.createElement('th', null, 'Table heading'),
                    a.a.createElement('th', null, 'Table heading')
                  )
                ),
                a.a.createElement(
                  'tbody',
                  null,
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('th', { scope: 'row' }, '1'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell')
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('th', { scope: 'row' }, '2'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell')
                  ),
                  a.a.createElement(
                    'tr',
                    null,
                    a.a.createElement('th', { scope: 'row' }, '3'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell'),
                    a.a.createElement('td', null, 'Table cell')
                  )
                )
              )
            }
          }
        ]) && o(l.prototype, n),
        c && o(l, c),
        t
      )
    })()
  }
})
//# sourceMappingURL=12.1c59a796.chunk.js.map

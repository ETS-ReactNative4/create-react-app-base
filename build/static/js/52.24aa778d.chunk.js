webpackJsonp([52], {
  260: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      n.d(t, 'default', function() {
        return l
      })
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
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n]
        ;(o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function c(e, t) {
      return !t || ('object' !== i(t) && 'function' !== typeof t)
        ? (function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        : t
    }
    var l = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
          c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var n, o, i
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, r.a.Component),
        (n = t),
        (o = [
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                'div',
                null,
                r.a.createElement('h3', null, 'Anchors '),
                r.a.createElement(
                  'p',
                  null,
                  'Be sure to',
                  ' ',
                  r.a.createElement(
                    'strong',
                    null,
                    'not use the standard ',
                    r.a.createElement('code', null, '.btn'),
                    ' classes here'
                  ),
                  '.'
                ),
                r.a.createElement(
                  a.ListGroup,
                  null,
                  r.a.createElement(
                    a.ListGroupItem,
                    { active: !0, tag: 'a', href: '/', action: !0 },
                    'Cras justo odio'
                  ),
                  r.a.createElement(a.ListGroupItem, { tag: 'a', href: '/', action: !0 }, 'Dapibus ac facilisis in'),
                  r.a.createElement(a.ListGroupItem, { tag: 'a', href: '/', action: !0 }, 'Morbi leo risus'),
                  r.a.createElement(a.ListGroupItem, { tag: 'a', href: '/', action: !0 }, 'Porta ac consectetur ac'),
                  r.a.createElement(
                    a.ListGroupItem,
                    { disabled: !0, tag: 'a', href: '/', action: !0 },
                    'Vestibulum at eros'
                  )
                ),
                r.a.createElement('p', null),
                r.a.createElement('h3', null, 'Buttons '),
                r.a.createElement(
                  a.ListGroup,
                  null,
                  r.a.createElement(a.ListGroupItem, { active: !0, tag: 'button', action: !0 }, 'Cras justo odio'),
                  r.a.createElement(a.ListGroupItem, { tag: 'button', action: !0 }, 'Dapibus ac facilisis in'),
                  r.a.createElement(a.ListGroupItem, { tag: 'button', action: !0 }, 'Morbi leo risus'),
                  r.a.createElement(a.ListGroupItem, { tag: 'button', action: !0 }, 'Porta ac consectetur ac'),
                  r.a.createElement(a.ListGroupItem, { disabled: !0, tag: 'button', action: !0 }, 'Vestibulum at eros')
                )
              )
            }
          }
        ]) && u(n.prototype, o),
        i && u(n, i),
        t
      )
    })()
  }
})
//# sourceMappingURL=52.24aa778d.chunk.js.map

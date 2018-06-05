webpackJsonp([57], {
  255: function(e, t, a) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      a.d(t, 'default', function() {
        return c
      })
    var l = a(0),
      r = a.n(l),
      n = a(30)
    function o(e) {
      return (o =
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
    function m(e, t) {
      for (var a = 0; a < t.length; a++) {
        var l = t[a]
        ;(l.enumerable = l.enumerable || !1),
          (l.configurable = !0),
          'value' in l && (l.writable = !0),
          Object.defineProperty(e, l.key, l)
      }
    }
    function p(e, t) {
      return !t || ('object' !== o(t) && 'function' !== typeof t)
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
          p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var a, l, o
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, r.a.Component),
        (a = t),
        (l = [
          {
            key: 'render',
            value: function() {
              return r.a.createElement(
                n.Form,
                null,
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleEmailFormInputType1' }, 'Plain Text (Static)'),
                  r.a.createElement(n.Input, { plaintext: !0 }, 'Some plain text/ static value')
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleEmailFormInputType2' }, 'Email'),
                  r.a.createElement(n.Input, {
                    type: 'email',
                    name: 'email',
                    id: 'exampleEmailFormInputType2',
                    placeholder: 'with a placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'examplePasswordFormInputType' }, 'Password'),
                  r.a.createElement(n.Input, {
                    type: 'password',
                    name: 'password',
                    id: 'examplePasswordFormInputType',
                    placeholder: 'password placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleUrl' }, 'Url'),
                  r.a.createElement(n.Input, {
                    type: 'url',
                    name: 'url',
                    id: 'exampleUrl',
                    placeholder: 'url placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleNumber' }, 'Number'),
                  r.a.createElement(n.Input, {
                    type: 'number',
                    name: 'number',
                    id: 'exampleNumber',
                    placeholder: 'number placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleDatetime' }, 'Datetime'),
                  r.a.createElement(n.Input, {
                    type: 'datetime',
                    name: 'datetime',
                    id: 'exampleDatetime',
                    placeholder: 'datetime placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleDate' }, 'Date'),
                  r.a.createElement(n.Input, {
                    type: 'date',
                    name: 'date',
                    id: 'exampleDate',
                    placeholder: 'date placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleTime' }, 'Time'),
                  r.a.createElement(n.Input, {
                    type: 'time',
                    name: 'time',
                    id: 'exampleTime',
                    placeholder: 'time placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleColor' }, 'Color'),
                  r.a.createElement(n.Input, {
                    type: 'color',
                    name: 'color',
                    id: 'exampleColor',
                    placeholder: 'color placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleSearch' }, 'Search'),
                  r.a.createElement(n.Input, {
                    type: 'search',
                    name: 'search',
                    id: 'exampleSearch',
                    placeholder: 'search placeholder'
                  })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleSelectFormInputType' }, 'Select'),
                  r.a.createElement(
                    n.Input,
                    { type: 'select', name: 'select', id: 'exampleSelectFormInputType' },
                    r.a.createElement('option', null, '1'),
                    r.a.createElement('option', null, '2'),
                    r.a.createElement('option', null, '3'),
                    r.a.createElement('option', null, '4'),
                    r.a.createElement('option', null, '5')
                  )
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleSelectMultiFormInputType' }, 'Select Multiple'),
                  r.a.createElement(
                    n.Input,
                    { type: 'select', name: 'selectMulti', id: 'exampleSelectMultiFormInputType', multiple: !0 },
                    r.a.createElement('option', null, '1'),
                    r.a.createElement('option', null, '2'),
                    r.a.createElement('option', null, '3'),
                    r.a.createElement('option', null, '4'),
                    r.a.createElement('option', null, '5')
                  )
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleTextFormInputType' }, 'Text Area'),
                  r.a.createElement(n.Input, { type: 'textarea', name: 'text', id: 'exampleTextFormInputType' })
                ),
                r.a.createElement(
                  n.FormGroup,
                  null,
                  r.a.createElement(n.Label, { for: 'exampleFileFormInputType' }, 'File'),
                  r.a.createElement(n.Input, { type: 'file', name: 'file', id: 'exampleFileFormInputType' }),
                  r.a.createElement(
                    n.FormText,
                    { color: 'muted' },
                    "This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."
                  )
                ),
                r.a.createElement(
                  n.FormGroup,
                  { check: !0 },
                  r.a.createElement(
                    n.Label,
                    { check: !0 },
                    r.a.createElement(n.Input, { type: 'radio' }),
                    " Option one is this and that\u2014be sure to include why it's great"
                  )
                ),
                r.a.createElement(
                  n.FormGroup,
                  { check: !0 },
                  r.a.createElement(
                    n.Label,
                    { check: !0 },
                    r.a.createElement(n.Input, { type: 'checkbox' }),
                    ' Check me out'
                  )
                )
              )
            }
          }
        ]) && m(a.prototype, l),
        o && m(a, o),
        t
      )
    })()
  }
})
//# sourceMappingURL=57.1c1fba64.chunk.js.map

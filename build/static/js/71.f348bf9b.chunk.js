webpackJsonp([71], {
  241: function(e, t, l) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      l.d(t, 'default', function() {
        return c
      })
    var a = l(0),
      o = l.n(a),
      n = l(30)
    function u(e) {
      return (u =
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
      for (var l = 0; l < t.length; l++) {
        var a = t[l]
        ;(a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          'value' in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a)
      }
    }
    function m(e, t) {
      return !t || ('object' !== u(t) && 'function' !== typeof t)
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
          m(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        )
      }
      var l, a, u
      return (
        (function(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
          })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
        })(t, o.a.Component),
        (l = t),
        (a = [
          {
            key: 'render',
            value: function() {
              return o.a.createElement(
                n.Form,
                null,
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCheckbox' }, 'Checkboxes'),
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(n.CustomInput, {
                      type: 'checkbox',
                      id: 'exampleCustomCheckbox',
                      label: 'Check this custom checkbox'
                    }),
                    o.a.createElement(n.CustomInput, {
                      type: 'checkbox',
                      id: 'exampleCustomCheckbox2',
                      label: 'Or this one'
                    }),
                    o.a.createElement(n.CustomInput, {
                      type: 'checkbox',
                      id: 'exampleCustomCheckbox3',
                      label: 'But not this disabled one',
                      disabled: !0
                    })
                  )
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCheckbox' }, 'Radios'),
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(n.CustomInput, {
                      type: 'radio',
                      id: 'exampleCustomRadio',
                      name: 'customRadio',
                      label: 'Select this custom radio'
                    }),
                    o.a.createElement(n.CustomInput, {
                      type: 'radio',
                      id: 'exampleCustomRadio2',
                      name: 'customRadio',
                      label: 'Or this one'
                    }),
                    o.a.createElement(n.CustomInput, {
                      type: 'radio',
                      id: 'exampleCustomRadio3',
                      label: 'But not this disabled one',
                      disabled: !0
                    })
                  )
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCheckbox' }, 'Inline'),
                  o.a.createElement(
                    'div',
                    null,
                    o.a.createElement(n.CustomInput, {
                      type: 'checkbox',
                      id: 'exampleCustomInline',
                      label: 'An inline custom input',
                      inline: !0
                    }),
                    o.a.createElement(n.CustomInput, {
                      type: 'checkbox',
                      id: 'exampleCustomInline2',
                      label: 'and another one',
                      inline: !0
                    })
                  )
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCustomSelect' }, 'Custom Select'),
                  o.a.createElement(
                    n.CustomInput,
                    { type: 'select', id: 'exampleCustomSelect', name: 'customSelect' },
                    o.a.createElement('option', { value: '' }, 'Select'),
                    o.a.createElement('option', null, 'Value 1'),
                    o.a.createElement('option', null, 'Value 2'),
                    o.a.createElement('option', null, 'Value 3'),
                    o.a.createElement('option', null, 'Value 4'),
                    o.a.createElement('option', null, 'Value 5')
                  )
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCustomMutlipleSelect' }, 'Custom Multiple Select'),
                  o.a.createElement(
                    n.CustomInput,
                    { type: 'select', id: 'exampleCustomMutlipleSelect', name: 'customSelect', multiple: !0 },
                    o.a.createElement('option', { value: '' }, 'Select'),
                    o.a.createElement('option', null, 'Value 1'),
                    o.a.createElement('option', null, 'Value 2'),
                    o.a.createElement('option', null, 'Value 3'),
                    o.a.createElement('option', null, 'Value 4'),
                    o.a.createElement('option', null, 'Value 5')
                  )
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCustomSelectDisabled' }, 'Custom Select Disabled'),
                  o.a.createElement(
                    n.CustomInput,
                    { type: 'select', id: 'exampleCustomSelectDisabled', name: 'customSelect', disabled: !0 },
                    o.a.createElement('option', { value: '' }, 'Select'),
                    o.a.createElement('option', null, 'Value 1'),
                    o.a.createElement('option', null, 'Value 2'),
                    o.a.createElement('option', null, 'Value 3'),
                    o.a.createElement('option', null, 'Value 4'),
                    o.a.createElement('option', null, 'Value 5')
                  )
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(
                    n.Label,
                    { for: 'exampleCustomMutlipleSelectDisabled' },
                    'Custom Multiple Select Disabled'
                  ),
                  o.a.createElement(
                    n.CustomInput,
                    {
                      type: 'select',
                      id: 'exampleCustomMutlipleSelectDisabled',
                      name: 'customSelect',
                      multiple: !0,
                      disabled: !0
                    },
                    o.a.createElement('option', { value: '' }, 'Select'),
                    o.a.createElement('option', null, 'Value 1'),
                    o.a.createElement('option', null, 'Value 2'),
                    o.a.createElement('option', null, 'Value 3'),
                    o.a.createElement('option', null, 'Value 4'),
                    o.a.createElement('option', null, 'Value 5')
                  )
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCustomFileBrowser1' }, 'File Browser'),
                  o.a.createElement(n.CustomInput, {
                    type: 'file',
                    id: 'exampleCustomFileBrowser1',
                    name: 'customFile'
                  })
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCustomFileBrowser2' }, 'File Browser with Custom Label'),
                  o.a.createElement(n.CustomInput, {
                    type: 'file',
                    id: 'exampleCustomFileBrowser2',
                    name: 'customFile',
                    label: 'Yo, pick a file!'
                  })
                ),
                o.a.createElement(
                  n.FormGroup,
                  null,
                  o.a.createElement(n.Label, { for: 'exampleCustomFileBrowser3' }, 'File Browser Disabled'),
                  o.a.createElement(n.CustomInput, {
                    type: 'file',
                    id: 'exampleCustomFileBrowser3',
                    name: 'customFile',
                    disabled: !0
                  })
                )
              )
            }
          }
        ]) && r(l.prototype, a),
        u && r(l, u),
        t
      )
    })()
  }
})
//# sourceMappingURL=71.f348bf9b.chunk.js.map

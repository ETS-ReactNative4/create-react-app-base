webpackJsonp([60], {
  252: function(e, n, t) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 })
    var a = t(0),
      l = t.n(a),
      p = t(30)
    n.default = function(e) {
      return l.a.createElement(
        'div',
        null,
        l.a.createElement(
          p.InputGroup,
          null,
          l.a.createElement(p.InputGroupAddon, { addonType: 'prepend' }, '@'),
          l.a.createElement(p.Input, { placeholder: 'username' })
        ),
        l.a.createElement('br', null),
        l.a.createElement(
          p.InputGroup,
          null,
          l.a.createElement(
            p.InputGroupAddon,
            { addonType: 'prepend' },
            l.a.createElement(
              p.InputGroupText,
              null,
              l.a.createElement(p.Input, {
                addon: !0,
                type: 'checkbox',
                'aria-label': 'Checkbox for following text input'
              })
            )
          ),
          l.a.createElement(p.Input, { placeholder: 'Check it out' })
        ),
        l.a.createElement('br', null),
        l.a.createElement(
          p.InputGroup,
          null,
          l.a.createElement(p.Input, { placeholder: 'username' }),
          l.a.createElement(p.InputGroupAddon, { addonType: 'append' }, '@example.com')
        ),
        l.a.createElement('br', null),
        l.a.createElement(
          p.InputGroup,
          null,
          l.a.createElement(
            p.InputGroupAddon,
            { addonType: 'prepend' },
            l.a.createElement(p.InputGroupText, null, '$'),
            l.a.createElement(p.InputGroupText, null, '$')
          ),
          l.a.createElement(p.Input, { placeholder: 'Dolla dolla billz yo!' }),
          l.a.createElement(
            p.InputGroupAddon,
            { addonType: 'append' },
            l.a.createElement(p.InputGroupText, null, '$'),
            l.a.createElement(p.InputGroupText, null, '$')
          )
        ),
        l.a.createElement('br', null),
        l.a.createElement(
          p.InputGroup,
          null,
          l.a.createElement(p.InputGroupAddon, { addonType: 'prepend' }, '$'),
          l.a.createElement(p.Input, { placeholder: 'Amount', type: 'number', step: '1' }),
          l.a.createElement(p.InputGroupAddon, { addonType: 'append' }, '.00')
        )
      )
    }
  }
})
//# sourceMappingURL=60.2965b074.chunk.js.map

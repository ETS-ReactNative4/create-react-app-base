webpackJsonp([22], {
  290: function(e, a, r) {
    'use strict'
    Object.defineProperty(a, '__esModule', { value: !0 })
    var t = r(0),
      l = r.n(t),
      s = r(30)
    a.default = function(e) {
      return l.a.createElement(
        'div',
        null,
        l.a.createElement('div', { className: 'text-center' }, '0%'),
        l.a.createElement(s.Progress, null),
        l.a.createElement('div', { className: 'text-center' }, '25%'),
        l.a.createElement(s.Progress, { value: '25' }),
        l.a.createElement('div', { className: 'text-center' }, '50%'),
        l.a.createElement(s.Progress, { value: 50 }),
        l.a.createElement('div', { className: 'text-center' }, '75%'),
        l.a.createElement(s.Progress, { value: 75 }),
        l.a.createElement('div', { className: 'text-center' }, '100%'),
        l.a.createElement(s.Progress, { value: '100' }),
        l.a.createElement('div', { className: 'text-center' }, 'Multiple bars'),
        l.a.createElement(
          s.Progress,
          { multi: !0 },
          l.a.createElement(s.Progress, { bar: !0, value: '15' }),
          l.a.createElement(s.Progress, { bar: !0, color: 'success', value: '30' }),
          l.a.createElement(s.Progress, { bar: !0, color: 'info', value: '25' }),
          l.a.createElement(s.Progress, { bar: !0, color: 'warning', value: '20' }),
          l.a.createElement(s.Progress, { bar: !0, color: 'danger', value: '5' })
        )
      )
    }
  }
})
//# sourceMappingURL=22.d6d1d9b6.chunk.js.map

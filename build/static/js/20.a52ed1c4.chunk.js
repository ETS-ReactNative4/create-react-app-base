webpackJsonp([20], {
  292: function(e, a, r) {
    'use strict'
    Object.defineProperty(a, '__esModule', { value: !0 })
    var t = r(0),
      l = r.n(t),
      s = r(30)
    a.default = function(e) {
      return l.a.createElement(
        'div',
        null,
        l.a.createElement('div', { className: 'text-center' }, '1 of 5'),
        l.a.createElement(s.Progress, { value: '1', max: '5' }),
        l.a.createElement('div', { className: 'text-center' }, '50 of 135'),
        l.a.createElement(s.Progress, { value: 50, max: '135' }),
        l.a.createElement('div', { className: 'text-center' }, '75 of 111'),
        l.a.createElement(s.Progress, { value: 75, max: 111 }),
        l.a.createElement('div', { className: 'text-center' }, '463 of 500'),
        l.a.createElement(s.Progress, { value: '463', max: 500 }),
        l.a.createElement('div', { className: 'text-center' }, 'Various (40) of 55'),
        l.a.createElement(
          s.Progress,
          { multi: !0 },
          l.a.createElement(s.Progress, { bar: !0, value: '5', max: 55 }, '5'),
          l.a.createElement(s.Progress, { bar: !0, color: 'success', value: '15', max: 55 }, '15'),
          l.a.createElement(s.Progress, { bar: !0, color: 'warning', value: '10', max: 55 }, '10'),
          l.a.createElement(s.Progress, { bar: !0, color: 'danger', value: '10', max: 55 }, '10')
        )
      )
    }
  }
})
//# sourceMappingURL=20.a52ed1c4.chunk.js.map

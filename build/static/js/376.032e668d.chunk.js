webpackJsonp([376], {
  716: function(e, t, a) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var n = a(0),
      l = a.n(n)
    t.default = function(e) {
      var t = e.strings
      return l.a.createElement(
        n.Fragment,
        null,
        l.a.createElement('h1', null, t.siteMap.displayName),
        l.a.createElement(
          'ul',
          null,
          Object.keys(t).map(function(e) {
            return l.a.createElement('li', { key: e }, l.a.createElement('a', { href: t[e].path }, t[e].displayName))
          })
        )
      )
    }
  }
})
//# sourceMappingURL=376.032e668d.chunk.js.map

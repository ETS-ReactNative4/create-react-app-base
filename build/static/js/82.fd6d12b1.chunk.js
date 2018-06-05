webpackJsonp([82], {
  230: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = n(0),
      o = n.n(i),
      a = n(30)
    function r(e) {
      return (r =
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
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n]
        ;(i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i)
      }
    }
    function l(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return e
    }
    var s = [
        { id: 1, altText: 'Slide 1', caption: 'Slide 1' },
        { id: 2, altText: 'Slide 2', caption: 'Slide 2' },
        { id: 3, altText: 'Slide 3', caption: 'Slide 3' }
      ],
      u = (function(e) {
        function t(e) {
          var n, i, o
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (i = this),
            ((n =
              !(o = (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)) ||
              ('object' !== r(o) && 'function' !== typeof o)
                ? l(i)
                : o).state = { activeIndex: 0 }),
            (n.next = n.next.bind(l(n))),
            (n.previous = n.previous.bind(l(n))),
            (n.goToIndex = n.goToIndex.bind(l(n))),
            (n.onExiting = n.onExiting.bind(l(n))),
            (n.onExited = n.onExited.bind(l(n))),
            n
          )
        }
        var n, u, d
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, i['Component']),
          (n = t),
          (u = [
            {
              key: 'onExiting',
              value: function() {
                this.animating = !0
              }
            },
            {
              key: 'onExited',
              value: function() {
                this.animating = !1
              }
            },
            {
              key: 'next',
              value: function() {
                if (!this.animating) {
                  var e = this.state.activeIndex === s.length - 1 ? 0 : this.state.activeIndex + 1
                  this.setState({ activeIndex: e })
                }
              }
            },
            {
              key: 'previous',
              value: function() {
                if (!this.animating) {
                  var e = 0 === this.state.activeIndex ? s.length - 1 : this.state.activeIndex - 1
                  this.setState({ activeIndex: e })
                }
              }
            },
            {
              key: 'goToIndex',
              value: function(e) {
                this.animating || this.setState({ activeIndex: e })
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.state.activeIndex,
                  n = s.map(function(t) {
                    return o.a.createElement(
                      a.CarouselItem,
                      {
                        className: 'custom-tag',
                        tag: 'div',
                        key: t.id,
                        onExiting: e.onExiting,
                        onExited: e.onExited,
                        timeout: 0
                      },
                      o.a.createElement(a.CarouselCaption, {
                        className: 'text-danger',
                        captionText: t.caption,
                        captionHeader: t.caption
                      })
                    )
                  })
                return o.a.createElement(
                  'div',
                  null,
                  o.a.createElement(
                    'style',
                    null,
                    '.custom-tag {\n                max-width: 100%;\n                height: 500px;\n                background: black;\n              }'
                  ),
                  o.a.createElement(
                    a.Carousel,
                    { activeIndex: t, next: this.next, previous: this.previous, timeout: 0 },
                    o.a.createElement(a.CarouselIndicators, {
                      items: s,
                      activeIndex: t,
                      onClickHandler: this.goToIndex
                    }),
                    n,
                    o.a.createElement(a.CarouselControl, {
                      direction: 'prev',
                      directionText: 'Previous',
                      onClickHandler: this.previous
                    }),
                    o.a.createElement(a.CarouselControl, {
                      direction: 'next',
                      directionText: 'Next',
                      onClickHandler: this.next
                    })
                  )
                )
              }
            }
          ]) && c(n.prototype, u),
          d && c(n, d),
          t
        )
      })()
    t.default = u
  }
})
//# sourceMappingURL=82.fd6d12b1.chunk.js.map

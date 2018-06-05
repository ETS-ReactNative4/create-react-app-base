webpackJsonp(
  [225, 362],
  Array(37).concat([
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.c = e.languages.extend('clike', {
          keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: /-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/]/,
          number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
        })),
          e.languages.insertBefore('c', 'string', {
            macro: {
              pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
              lookbehind: !0,
              alias: 'property',
              inside: {
                string: { pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/, lookbehind: !0 },
                directive: {
                  pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                  lookbehind: !0,
                  alias: 'keyword'
                }
              }
            },
            constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
          }),
          delete e.languages.c['class-name'],
          delete e.languages.c.boolean
      }
      ;(e.exports = o), (o.displayName = 'c'), (o.aliases = [])
    },
    ,
    ,
    function(e, t) {
      e.exports = {
        Alert: {
          children: {
            AlertContent: { components: [] },
            AlertDefault: { components: [] },
            AlertDismiss: { components: [] },
            AlertLink: { components: [] },
            AlertUncontrolledDismiss: { components: [] }
          }
        },
        Badge: {
          children: {
            BadgeButton: { components: [] },
            BadgeDefault: { components: [] },
            BadgeLinks: { components: [] },
            BadgePills: { components: [] },
            BadgeVariations: { components: [] }
          }
        },
        Breadcrumb: { children: { BreadcrumbDefault: { components: [] }, BreadcrumbNoList: { components: [] } } },
        Button: {
          children: {
            ButtonDefault: { components: [] },
            ButtonDropdownDefault: { components: [] },
            ButtonDropdownMulti: { components: [] },
            ButtonDropdownMultiSplit: { components: [] },
            ButtonGroupDefault: { components: [] },
            ButtonOutline: { components: [] },
            ButtonStateful: { components: [] },
            ButtonToolbarDefault: { components: [] }
          }
        },
        Card: {
          children: {
            CardAlignment: { components: [] },
            CardBackgrounds: { components: [] },
            CardColumnsDefault: { components: [] },
            CardContentTypes: { components: [] },
            CardDecks: { components: [] },
            CardDefault: { components: [] },
            CardGroups: { components: [] },
            CardHeaderFooter: { components: [] },
            CardImageCaps: { components: [] },
            CardImageOverlay: { components: [] },
            CardOutline: { components: [] },
            CardSizing: { components: [] }
          }
        },
        Carousel: {
          children: {
            CarouselCustomTag: { components: [] },
            CarouselDefault: { components: [] },
            CarouselUncontrolled: { components: [] }
          }
        },
        Collapse: { children: { CollapseDefault: { components: [] }, CollapseEvents: { components: [] } } },
        Color: { children: { ColorDefault: { components: [] } } },
        Dropdown: {
          children: {
            DropDownCustom: { components: [] },
            DropdownDefault: { components: [] },
            DropdownSizing: { components: [] },
            DropdownUncontrolled: { components: [] }
          }
        },
        Fade: { children: { FadeDefault: { components: [] } } },
        Form: {
          children: {
            FormCustomControls: { components: [] },
            FormDefault: { components: [] },
            FormFeedbackDefault: { components: [] },
            FormGrid: { components: [] },
            FormInline: { components: [] },
            FormInlineCheckboxes: { components: [] },
            FormInputGridSizing: { components: [] },
            FormInputGroupAddon: { components: [] },
            FormInputGroupButton: { components: [] },
            FormInputGroupButtonDropdown: { components: [] },
            FormInputGroupButtonShorthand: { components: [] },
            FormInputGroupOverview: { components: [] },
            FormInputGroupSizing: { components: [] },
            FormInputSizing: { components: [] },
            FormInputType: { components: [] },
            FormLabelHidden: { components: [] }
          }
        },
        Jumbotron: { children: { JumbotronDefault: { components: [] }, JumbotronFluid: { components: [] } } },
        Layout: { children: { LayoutDefault: { components: [] } } },
        ListGroup: {
          children: {
            ListGroupAnchorsAndButtons: { components: [] },
            ListGroupBadge: { components: [] },
            ListGroupContextualClasses: { components: [] },
            ListGroupCustomContent: { components: [] },
            ListGroupDefault: { components: [] },
            ListGroupDisabledItems: { components: [] }
          }
        },
        Media: {
          children: {
            MediaAlignment: { components: [] },
            MediaDefault: { components: [] },
            MediaList: { components: [] },
            MediaNested: { components: [] }
          }
        },
        Modal: {
          children: {
            ModalBackdrop: { components: [] },
            ModalCustomTimeout: { components: [] },
            ModalDefault: { components: [] },
            ModalExternal: { components: [] },
            ModalFadeless: { components: [] },
            ModalNested: { components: [] }
          }
        },
        Nav: {
          children: {
            NavDefault: { components: [] },
            NavNavbarDefault: { components: [] },
            NavNavbarTogglerDefault: { components: [] },
            NavPills: { components: [] },
            NavTabs: { components: [] },
            NavVertical: { components: [] }
          }
        },
        Pagination: {
          children: {
            PaginationDefault: { components: [] },
            PaginationSizingLarge: { components: [] },
            PaginationSizingSmall: { components: [] },
            PaginationState: { components: [] }
          }
        },
        Popover: { children: { PopoverDefault: { components: [] }, PopoverMulti: { components: [] } } },
        Progress: {
          children: {
            ProgressAnimated: { components: [] },
            ProgressColor: { components: [] },
            ProgressDefault: { components: [] },
            ProgressLabels: { components: [] },
            ProgressMax: { components: [] },
            ProgressMulti: { components: [] },
            ProgressStriped: { components: [] }
          }
        },
        Table: {
          children: {
            TableBordered: { components: [] },
            TableBorderless: { components: [] },
            TableDark: { components: [] },
            TableDefault: { components: [] },
            TableHover: { components: [] },
            TableResponsive: { components: [] },
            TableSizing: { components: [] },
            TableStriped: { components: [] }
          }
        },
        Tabs: { children: { TabsDefault: { components: [] } } },
        Tooltip: {
          children: {
            TooltipAutoHide: { components: [] },
            TooltipDefault: { components: [] },
            TooltipMulti: { components: [] },
            TooltipUncontrolled: { components: [] }
          }
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      'use strict'
      var o = n(30),
        a = n(0),
        r = n.n(a),
        i = n(35)
      function s(e) {
        return (s =
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
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function c(e, t) {
        return !t || ('object' !== s(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      var d = (function(e) {
        function t() {
          var e, n, o
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
          return c(
            o,
            ((n = o = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r)))),
            (o.state = {}),
            n)
          )
        }
        var n, s, d
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['PureComponent']),
          (n = t),
          (s = [
            {
              key: 'toggle',
              value: function() {
                this.setState(function(e) {
                  return { dropdownOpen: !e.dropdownOpen }
                })
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this
                return r.a.createElement(i.b.Consumer, null, function(t) {
                  return r.a.createElement(
                    o.Dropdown,
                    {
                      isOpen: e.state.dropdownOpen,
                      toggle: function() {
                        return e.toggle()
                      }
                    },
                    r.a.createElement(o.DropdownToggle, { caret: !0 }, t.state.user.theme),
                    r.a.createElement(
                      o.DropdownMenu,
                      null,
                      r.a.createElement(
                        o.DropdownItem,
                        {
                          onClick: function() {
                            return t.state.updateUserByPropertyValue('theme', 'custom')
                          }
                        },
                        'Custom'
                      ),
                      r.a.createElement(
                        o.DropdownItem,
                        {
                          onClick: function() {
                            return t.state.updateUserByPropertyValue('theme', 'darkly')
                          }
                        },
                        'Darkly'
                      ),
                      r.a.createElement(
                        o.DropdownItem,
                        {
                          onClick: function() {
                            return t.state.updateUserByPropertyValue('theme', 'original')
                          }
                        },
                        'Original'
                      ),
                      r.a.createElement(
                        o.DropdownItem,
                        {
                          onClick: function() {
                            return t.state.updateUserByPropertyValue('theme', 'yeti')
                          }
                        },
                        'Yeti'
                      )
                    )
                  )
                })
              }
            }
          ]) && l(n.prototype, s),
          d && l(n, d),
          t
        )
      })()
      t.a = d
    },
    function(e, t, n) {
      e.exports = { default: n(748), __esModule: !0 }
    },
    function(e, t) {
      var n = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
            ? self
            : Function('return this')())
      'number' == typeof __g && (__g = n)
    },
    function(e, t) {
      var n = (e.exports = { version: '2.5.6' })
      'number' == typeof __e && (__e = n)
    },
    function(e, t) {
      function n(e) {
        return (n =
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
      e.exports = function(e) {
        return 'object' === n(e) ? null !== e : 'function' === typeof e
      }
    },
    function(e, t, n) {
      e.exports = !n(57)(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7
            }
          }).a
        )
      })
    },
    function(e, t) {
      e.exports = function(e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    function(e, t, n) {
      'use strict'
      var o = n(37)
      function a(e) {
        e.register(o),
          (e.languages.cpp = e.languages.extend('c', {
            keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            boolean: /\b(?:true|false)\b/,
            operator: /--?|\+\+?|!=?|<{1,2}=?|>{1,2}=?|->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|\|?|\?|\*|\/|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
          })),
          e.languages.insertBefore('cpp', 'keyword', { 'class-name': { pattern: /(class\s+)\w+/i, lookbehind: !0 } }),
          e.languages.insertBefore('cpp', 'string', {
            'raw-string': { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: 'string', greedy: !0 }
          })
      }
      ;(e.exports = a), (a.displayName = 'cpp'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          e.languages.ruby = e.languages.extend('clike', {
            comment: [/#.*/, { pattern: /^=begin(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?=end/m, greedy: !0 }],
            keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
          })
          var t = {
            pattern: /#\{[^}]+\}/,
            inside: { delimiter: { pattern: /^#\{|\}$/, alias: 'tag' }, rest: e.languages.ruby }
          }
          e.languages.insertBefore('ruby', 'keyword', {
            regex: [
              {
                pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
                greedy: !0,
                inside: { interpolation: t }
              },
              { pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/, greedy: !0, inside: { interpolation: t } },
              {
                pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
                greedy: !0,
                inside: { interpolation: t }
              },
              { pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/, greedy: !0, inside: { interpolation: t } },
              { pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/, greedy: !0, inside: { interpolation: t } },
              {
                pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
                lookbehind: !0,
                greedy: !0
              }
            ],
            variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
            symbol: { pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/, lookbehind: !0 }
          }),
            e.languages.insertBefore('ruby', 'number', {
              builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
              constant: /\b[A-Z]\w*(?:[?!]|\b)/
            }),
            (e.languages.ruby.string = [
              {
                pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
                greedy: !0,
                inside: { interpolation: t }
              },
              { pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/, greedy: !0, inside: { interpolation: t } },
              {
                pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
                greedy: !0,
                inside: { interpolation: t }
              },
              { pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/, greedy: !0, inside: { interpolation: t } },
              { pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/, greedy: !0, inside: { interpolation: t } },
              {
                pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0,
                inside: { interpolation: t }
              }
            ])
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'ruby'), (o.aliases = [])
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: 'black',
            background: 'none',
            textShadow: '0 1px white',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: 'black',
            background: '#f5f2f0',
            textShadow: '0 1px white',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#b3d4fc' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#b3d4fc' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#b3d4fc' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#b3d4fc' },
          'pre[class*="language-"]::selection': { textShadow: 'none', background: '#b3d4fc' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#b3d4fc' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: '#b3d4fc' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: '#b3d4fc' },
          ':not(pre) > code[class*="language-"]': {
            background: '#f5f2f0',
            padding: '.1em',
            borderRadius: '.3em',
            whiteSpace: 'normal'
          },
          comment: { color: 'slategray' },
          prolog: { color: 'slategray' },
          doctype: { color: 'slategray' },
          cdata: { color: 'slategray' },
          punctuation: { color: '#999' },
          '.namespace': { Opacity: '.7' },
          property: { color: '#905' },
          tag: { color: '#905' },
          boolean: { color: '#905' },
          number: { color: '#905' },
          constant: { color: '#905' },
          symbol: { color: '#905' },
          deleted: { color: '#905' },
          selector: { color: '#690' },
          'attr-name': { color: '#690' },
          string: { color: '#690' },
          char: { color: '#690' },
          builtin: { color: '#690' },
          inserted: { color: '#690' },
          operator: { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)' },
          entity: { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)', cursor: 'help' },
          url: { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)' },
          '.language-css .token.string': { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)' },
          '.style .token.string': { color: '#9a6e3a', background: 'hsla(0, 0%, 100%, .5)' },
          atrule: { color: '#07a' },
          'attr-value': { color: '#07a' },
          keyword: { color: '#07a' },
          function: { color: '#DD4A68' },
          'class-name': { color: '#DD4A68' },
          regex: { color: '#e90' },
          important: { color: '#e90', fontWeight: 'bold' },
          variable: { color: '#e90' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' }
        })
    },
    function(e, t) {
      var n = {}.hasOwnProperty
      e.exports = function(e, t) {
        return n.call(e, t)
      }
    },
    function(e, t, n) {
      var o = n(79),
        a = n(80)
      e.exports = function(e) {
        return o(a(e))
      }
    },
    function(e, t, n) {
      var o = n(763)
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return 'String' == o(e) ? e.split('') : Object(e)
          }
    },
    function(e, t) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e)
        return e
      }
    },
    function(e, t) {
      var n = Math.ceil,
        o = Math.floor
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? o : n)(e)
      }
    },
    function(e, t) {
      ;((t = e.exports = function(e) {
        return e.replace(/^\s*|\s*$/g, '')
      }).left = function(e) {
        return e.replace(/^\s*/, '')
      }),
        (t.right = function(e) {
          return e.replace(/\s*$/, '')
        })
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.java = e.languages.extend('clike', {
          keyword: /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
          number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
          operator: {
            pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
            lookbehind: !0
          }
        })),
          e.languages.insertBefore('java', 'function', {
            annotation: { alias: 'punctuation', pattern: /(^|[^.])@\w+/, lookbehind: !0 }
          }),
          e.languages.insertBefore('java', 'class-name', {
            generics: {
              pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
              alias: 'function',
              inside: { keyword: e.languages.java.keyword, punctuation: /[<>(),.:]/ }
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'java'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = e.util.clone(e.languages.javascript)
          ;(e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern = /<\/?[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{[^}]*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?>/i),
            (e.languages.jsx.tag.inside[
              'attr-value'
            ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ }
                }
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                script: {
                  pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
                  inside: { 'script-punctuation': { pattern: /^=(?={)/, alias: 'punctuation' }, rest: e.languages.jsx },
                  alias: 'language-javascript'
                }
              },
              e.languages.jsx.tag
            )
          var n = function e(t) {
            return 'string' === typeof t ? t : 'string' === typeof t.content ? t.content : t.content.map(e).join('')
          }
          e.hooks.add('after-tokenize', function(t) {
            ;('jsx' !== t.language && 'tsx' !== t.language) ||
              (function t(o) {
                for (var a = [], r = 0; r < o.length; r++) {
                  var i = o[r],
                    s = !1
                  if (
                    ('string' !== typeof i &&
                      ('tag' === i.type && i.content[0] && 'tag' === i.content[0].type
                        ? '</' === i.content[0].content[0].content
                          ? a.length > 0 && a[a.length - 1].tagName === n(i.content[0].content[1]) && a.pop()
                          : '/>' === i.content[i.content.length - 1].content ||
                            a.push({ tagName: n(i.content[0].content[1]), openedBraces: 0 })
                        : a.length > 0 && 'punctuation' === i.type && '{' === i.content
                          ? a[a.length - 1].openedBraces++
                          : a.length > 0 &&
                            a[a.length - 1].openedBraces > 0 &&
                            'punctuation' === i.type &&
                            '}' === i.content
                            ? a[a.length - 1].openedBraces--
                            : (s = !0)),
                    (s || 'string' === typeof i) && a.length > 0 && 0 === a[a.length - 1].openedBraces)
                  ) {
                    var l = n(i)
                    r < o.length - 1 &&
                      ('string' === typeof o[r + 1] || 'plain-text' === o[r + 1].type) &&
                      ((l += n(o[r + 1])), o.splice(r + 1, 1)),
                      r > 0 &&
                        ('string' === typeof o[r - 1] || 'plain-text' === o[r - 1].type) &&
                        ((l = n(o[r - 1]) + l), o.splice(r - 1, 1), r--),
                      (o[r] = new e.Token('plain-text', l, null, l))
                  }
                  i.content && 'string' !== typeof i.content && t(i.content)
                }
              })(t.tokens)
          })
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'jsx'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          ;(e.languages.php = e.languages.extend('clike', {
            keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
            constant: /\b[A-Z0-9_]{2,}\b/,
            comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }
          })),
            e.languages.insertBefore('php', 'string', {
              'shell-comment': { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: 'comment' }
            }),
            e.languages.insertBefore('php', 'keyword', {
              delimiter: { pattern: /\?>|<\?(?:php|=)?/i, alias: 'important' },
              variable: /\$+(?:\w+\b|(?={))/i,
              package: { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } }
            }),
            e.languages.insertBefore('php', 'operator', { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }),
            e.languages.insertBefore('php', 'string', {
              'nowdoc-string': {
                pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                greedy: !0,
                alias: 'string',
                inside: {
                  delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: 'symbol',
                    inside: { punctuation: /^<<<'?|[';]$/ }
                  }
                }
              },
              'heredoc-string': {
                pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                greedy: !0,
                alias: 'string',
                inside: {
                  delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: 'symbol',
                    inside: { punctuation: /^<<<"?|[";]$/ }
                  },
                  interpolation: null
                }
              },
              'single-quoted-string': { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: 'string' },
              'double-quoted-string': {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                alias: 'string',
                inside: { interpolation: null }
              }
            }),
            delete e.languages.php.string
          var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: { rest: e.languages.php }
          }
          ;(e.languages.php['heredoc-string'].inside.interpolation = t),
            (e.languages.php['double-quoted-string'].inside.interpolation = t),
            e.hooks.add('before-tokenize', function(t) {
              if (/(?:<\?php|<\?)/gi.test(t.code)) {
                e.languages['markup-templating'].buildPlaceholders(t, 'php', /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
              }
            }),
            e.hooks.add('after-tokenize', function(t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'php')
            })
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'php'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.sql = {
          comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 },
          string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/, greedy: !0, lookbehind: !0 },
          variable: /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/
        }
      }
      ;(e.exports = o), (o.displayName = 'sql'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.typescript = e.languages.extend('javascript', {
          keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
          builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
        })),
          (e.languages.ts = e.languages.typescript)
      }
      ;(e.exports = o), (o.displayName = 'typescript'), (o.aliases = ['ts'])
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = n(0),
        a = n.n(o),
        r = n(30),
        i = n(35),
        s = n(720),
        l = n(40),
        c = n.n(l),
        d = n(51),
        u = n(931)
      n.n(u)
      function p(e) {
        return (p =
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
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function m(e, t) {
        return !t || ('object' !== p(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      var f = (function(e) {
        function t() {
          var e, n, o
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
          return m(
            o,
            ((n = o = m(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r)))),
            (o.state = { rootKey: Object.keys(c.a)[0] }),
            n)
          )
        }
        var n, l, u
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, o['PureComponent']),
          (n = t),
          (l = [
            {
              key: 'render',
              value: function() {
                var e = this
                return a.a.createElement(
                  i.a,
                  null,
                  a.a.createElement(
                    r.Row,
                    null,
                    a.a.createElement(
                      'div',
                      { className: 'col-md-2 d-none d-md-block bg-light sidebar' },
                      a.a.createElement(
                        'div',
                        { className: 'sidebar-sticky py-2' },
                        a.a.createElement(d.a, null),
                        a.a.createElement('br', null),
                        Object.keys(c.a).map(function(t) {
                          return a.a.createElement(
                            o.Fragment,
                            { key: t },
                            a.a.createElement(
                              'h5',
                              null,
                              a.a.createElement(
                                r.Button,
                                {
                                  onClick: function() {
                                    return e.setState({ rootKey: t })
                                  },
                                  active: e.state.rootKey === t,
                                  color: (e.state.rootKey, 'link'),
                                  size: 'sm'
                                },
                                e.state.rootKey === t
                                  ? a.a.createElement('strong', null, t)
                                  : a.a.createElement(o.Fragment, null, t)
                              )
                            )
                          )
                        })
                      )
                    ),
                    a.a.createElement(
                      'div',
                      { className: 'col-md-9 ml-sm-auto col-lg-10 px-4' },
                      a.a.createElement(s.a, { rootKey: this.state.rootKey })
                    )
                  )
                )
              }
            }
          ]) && g(n.prototype, l),
          u && g(n, u),
          t
        )
      })()
      t.default = f
    },
    function(e, t, n) {
      'use strict'
      var o = n(0),
        a = n.n(o),
        r = n(40),
        i = n.n(r),
        s = n(30),
        l = n(8),
        c = n.n(l),
        d = n(721),
        u = n(927),
        p = function(e) {
          var t = e.parent,
            o = e.child,
            r = c()({
              loading: function() {
                return a.a.createElement(s.Loader, null)
              },
              loader: function() {
                return n(930)('./'.concat(t, '/').concat(o))
              },
              render: function(e, t) {
                var n = e.default
                return a.a.createElement(n, null)
              }
            })
          return a.a.createElement(r, null)
        }
      t.a = function(e) {
        var t = e.rootKey
        return a.a.createElement(
          o.Fragment,
          { key: t },
          a.a.createElement('h1', null, t),
          a.a.createElement('hr', null),
          Object.keys(i.a[t].children).map(function(e) {
            return a.a.createElement(
              o.Fragment,
              { key: e },
              a.a.createElement(
                'h2',
                null,
                e
                  .replace(t, t + ' - ')
                  .replace(/([A-Z]+)/g, ' $1')
                  .replace(/([A-Z][a-z])/g, ' $1')
              ),
              a.a.createElement(p, { parent: t, child: e }),
              a.a.createElement('h2', null, 'Code'),
              a.a.createElement(d.a, { parent: t, child: e + 'Code' }),
              i.a[t].children[e].components.map(function(e) {
                return a.a.createElement(
                  o.Fragment,
                  { key: e },
                  a.a.createElement('h3', null, e, ' Prop Types'),
                  a.a.createElement(u.a, { name: e })
                )
              })
            )
          })
        )
      }
    },
    function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      })
      var o = n(722),
        a = (n.n(o), n(0)),
        r = n.n(a),
        i = n(745),
        s = n.n(i)
      function l(e) {
        return (l =
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
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function d(e, t) {
        return !t || ('object' !== l(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      var u = (function(e) {
        function t() {
          var e, n, o
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
          return d(
            o,
            ((n = o = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r)))),
            (o.state = { code: '' }),
            n)
          )
        }
        var i, l, u
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['PureComponent']),
          (i = t),
          (l = [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this
                n(926)('./'.concat(this.props.parent, '/').concat(this.props.child)).then(function(t) {
                  e.setState({ code: t.default })
                })
              }
            },
            {
              key: 'render',
              value: function() {
                return r.a.createElement(s.a, { language: 'javascript', style: o.okaidia }, this.state.code)
              }
            }
          ]) && c(i.prototype, l),
          u && c(i, u),
          t
        )
      })()
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = n(723)
      Object.defineProperty(t, 'coy', {
        enumerable: !0,
        get: function() {
          return _(o).default
        }
      })
      var a = n(724)
      Object.defineProperty(t, 'dark', {
        enumerable: !0,
        get: function() {
          return _(a).default
        }
      })
      var r = n(725)
      Object.defineProperty(t, 'funky', {
        enumerable: !0,
        get: function() {
          return _(r).default
        }
      })
      var i = n(726)
      Object.defineProperty(t, 'okaidia', {
        enumerable: !0,
        get: function() {
          return _(i).default
        }
      })
      var s = n(727)
      Object.defineProperty(t, 'solarizedlight', {
        enumerable: !0,
        get: function() {
          return _(s).default
        }
      })
      var l = n(728)
      Object.defineProperty(t, 'tomorrow', {
        enumerable: !0,
        get: function() {
          return _(l).default
        }
      })
      var c = n(729)
      Object.defineProperty(t, 'twilight', {
        enumerable: !0,
        get: function() {
          return _(c).default
        }
      })
      var d = n(76)
      Object.defineProperty(t, 'prism', {
        enumerable: !0,
        get: function() {
          return _(d).default
        }
      })
      var u = n(730)
      Object.defineProperty(t, 'atomDark', {
        enumerable: !0,
        get: function() {
          return _(u).default
        }
      })
      var p = n(731)
      Object.defineProperty(t, 'base16AteliersulphurpoolLight', {
        enumerable: !0,
        get: function() {
          return _(p).default
        }
      })
      var g = n(732)
      Object.defineProperty(t, 'cb', {
        enumerable: !0,
        get: function() {
          return _(g).default
        }
      })
      var m = n(733)
      Object.defineProperty(t, 'darcula', {
        enumerable: !0,
        get: function() {
          return _(m).default
        }
      })
      var f = n(734)
      Object.defineProperty(t, 'duotoneDark', {
        enumerable: !0,
        get: function() {
          return _(f).default
        }
      })
      var b = n(735)
      Object.defineProperty(t, 'duotoneEarth', {
        enumerable: !0,
        get: function() {
          return _(b).default
        }
      })
      var h = n(736)
      Object.defineProperty(t, 'duotoneForest', {
        enumerable: !0,
        get: function() {
          return _(h).default
        }
      })
      var y = n(737)
      Object.defineProperty(t, 'duotoneLight', {
        enumerable: !0,
        get: function() {
          return _(y).default
        }
      })
      var S = n(738)
      Object.defineProperty(t, 'duotoneSea', {
        enumerable: !0,
        get: function() {
          return _(S).default
        }
      })
      var E = n(739)
      Object.defineProperty(t, 'duotoneSpace', {
        enumerable: !0,
        get: function() {
          return _(E).default
        }
      })
      var A = n(740)
      Object.defineProperty(t, 'ghcolors', {
        enumerable: !0,
        get: function() {
          return _(A).default
        }
      })
      var C = n(741)
      Object.defineProperty(t, 'hopscotch', {
        enumerable: !0,
        get: function() {
          return _(C).default
        }
      })
      var w = n(742)
      Object.defineProperty(t, 'pojoaque', {
        enumerable: !0,
        get: function() {
          return _(w).default
        }
      })
      var T = n(743)
      Object.defineProperty(t, 'vs', {
        enumerable: !0,
        get: function() {
          return _(T).default
        }
      })
      var v = n(744)
      function _(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, 'xonokai', {
        enumerable: !0,
        get: function() {
          return _(v).default
        }
      })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: 'black',
            background: 'none',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: 'black',
            background: 'none',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            position: 'relative',
            margin: '.5em 0',
            overflow: 'visible',
            padding: '0',
            backgroundColor: '#fdfdfd',
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
            marginBottom: '1em'
          },
          'pre[class*="language-"]>code': {
            position: 'relative',
            borderLeft: '10px solid #358ccb',
            boxShadow: '-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf',
            backgroundColor: '#fdfdfd',
            backgroundImage: 'linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)',
            backgroundSize: '3em 3em',
            backgroundOrigin: 'content-box',
            backgroundAttachment: 'local'
          },
          'code[class*="language"]': {
            maxHeight: 'inherit',
            height: 'inherit',
            padding: '0 1em',
            display: 'block',
            overflow: 'auto'
          },
          ':not(pre) > code[class*="language-"]': {
            backgroundColor: '#fdfdfd',
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
            marginBottom: '1em',
            position: 'relative',
            padding: '.2em',
            borderRadius: '0.3em',
            color: '#c92c2c',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            display: 'inline',
            whiteSpace: 'normal'
          },
          'pre[class*="language-"]:before': {
            content: "''",
            zIndex: '-2',
            display: 'block',
            position: 'absolute',
            bottom: '0.75em',
            left: '0.18em',
            width: '40%',
            height: '20%',
            maxHeight: '13em',
            boxShadow: '0px 13px 8px #979797',
            WebkitTransform: 'rotate(-2deg)',
            MozTransform: 'rotate(-2deg)',
            msTransform: 'rotate(-2deg)',
            OTransform: 'rotate(-2deg)',
            transform: 'rotate(-2deg)'
          },
          'pre[class*="language-"]:after': {
            content: "''",
            zIndex: '-2',
            display: 'block',
            position: 'absolute',
            bottom: '0.75em',
            left: 'auto',
            width: '40%',
            height: '20%',
            maxHeight: '13em',
            boxShadow: '0px 13px 8px #979797',
            WebkitTransform: 'rotate(2deg)',
            MozTransform: 'rotate(2deg)',
            msTransform: 'rotate(2deg)',
            OTransform: 'rotate(2deg)',
            transform: 'rotate(2deg)',
            right: '0.75em'
          },
          ':not(pre) > code[class*="language-"]:after': {
            right: '0.75em',
            left: 'auto',
            WebkitTransform: 'rotate(2deg)',
            MozTransform: 'rotate(2deg)',
            msTransform: 'rotate(2deg)',
            OTransform: 'rotate(2deg)',
            transform: 'rotate(2deg)'
          },
          comment: { color: '#7D8B99' },
          'block-comment': { color: '#7D8B99' },
          prolog: { color: '#7D8B99' },
          doctype: { color: '#7D8B99' },
          cdata: { color: '#7D8B99' },
          punctuation: { color: '#5F6364' },
          property: { color: '#c92c2c' },
          tag: { color: '#c92c2c' },
          boolean: { color: '#c92c2c' },
          number: { color: '#c92c2c' },
          'function-name': { color: '#c92c2c' },
          constant: { color: '#c92c2c' },
          symbol: { color: '#c92c2c' },
          deleted: { color: '#c92c2c' },
          selector: { color: '#2f9c0a' },
          'attr-name': { color: '#2f9c0a' },
          string: { color: '#2f9c0a' },
          char: { color: '#2f9c0a' },
          function: { color: '#2f9c0a' },
          builtin: { color: '#2f9c0a' },
          inserted: { color: '#2f9c0a' },
          operator: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
          entity: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)', cursor: 'help' },
          url: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
          variable: { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
          atrule: { color: '#1990b8' },
          'attr-value': { color: '#1990b8' },
          keyword: { color: '#1990b8' },
          'class-name': { color: '#1990b8' },
          regex: { color: '#e90' },
          important: { color: '#e90', fontWeight: 'normal' },
          '.language-css .token.string': { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
          '.style .token.string': { color: '#a67f59', background: 'rgba(255, 255, 255, 0.5)' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' },
          '.namespace': { Opacity: '.7' },
          'tab:not(:empty):before': { color: '#e0d7d1' },
          'cr:before': { color: '#e0d7d1' },
          'lf:before': { color: '#e0d7d1' },
          'pre[class*="language-"].line-numbers': { paddingLeft: '0' },
          'pre[class*="language-"].line-numbers code': { paddingLeft: '3.8em' },
          'pre[class*="language-"].line-numbers .line-numbers-rows': { left: '0' },
          'pre[class*="language-"][data-line]': { paddingTop: '0', paddingBottom: '0', paddingLeft: '0' },
          'pre[data-line] code': { position: 'relative', paddingLeft: '4em' },
          'pre .line-highlight': { marginTop: '0' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: 'white',
            background: 'none',
            textShadow: '0 -.1em .2em black',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: 'white',
            background: 'hsl(30, 20%, 25%)',
            textShadow: '0 -.1em .2em black',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto',
            border: '.3em solid hsl(30, 20%, 40%)',
            borderRadius: '.5em',
            boxShadow: '1px 1px .5em black inset'
          },
          ':not(pre) > code[class*="language-"]': {
            background: 'hsl(30, 20%, 25%)',
            padding: '.15em .2em .05em',
            borderRadius: '.3em',
            border: '.13em solid hsl(30, 20%, 40%)',
            boxShadow: '1px 1px .3em -.1em black inset',
            whiteSpace: 'normal'
          },
          comment: { color: 'hsl(30, 20%, 50%)' },
          prolog: { color: 'hsl(30, 20%, 50%)' },
          doctype: { color: 'hsl(30, 20%, 50%)' },
          cdata: { color: 'hsl(30, 20%, 50%)' },
          punctuation: { Opacity: '.7' },
          '.namespace': { Opacity: '.7' },
          property: { color: 'hsl(350, 40%, 70%)' },
          tag: { color: 'hsl(350, 40%, 70%)' },
          boolean: { color: 'hsl(350, 40%, 70%)' },
          number: { color: 'hsl(350, 40%, 70%)' },
          constant: { color: 'hsl(350, 40%, 70%)' },
          symbol: { color: 'hsl(350, 40%, 70%)' },
          selector: { color: 'hsl(75, 70%, 60%)' },
          'attr-name': { color: 'hsl(75, 70%, 60%)' },
          string: { color: 'hsl(75, 70%, 60%)' },
          char: { color: 'hsl(75, 70%, 60%)' },
          builtin: { color: 'hsl(75, 70%, 60%)' },
          inserted: { color: 'hsl(75, 70%, 60%)' },
          operator: { color: 'hsl(40, 90%, 60%)' },
          entity: { color: 'hsl(40, 90%, 60%)', cursor: 'help' },
          url: { color: 'hsl(40, 90%, 60%)' },
          '.language-css .token.string': { color: 'hsl(40, 90%, 60%)' },
          '.style .token.string': { color: 'hsl(40, 90%, 60%)' },
          variable: { color: 'hsl(40, 90%, 60%)' },
          atrule: { color: 'hsl(350, 40%, 70%)' },
          'attr-value': { color: 'hsl(350, 40%, 70%)' },
          keyword: { color: 'hsl(350, 40%, 70%)' },
          regex: { color: '#e90' },
          important: { color: '#e90', fontWeight: 'bold' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' },
          deleted: { color: 'red' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: 'black',
            color: 'white',
            boxShadow: '-.3em 0 0 .3em black, .3em 0 0 .3em black'
          },
          'pre[class*="language-"]': {
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '.4em .8em',
            margin: '.5em 0',
            overflow: 'auto',
            background:
              'url(\'data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>\')',
            backgroundSize: '1em 1em'
          },
          ':not(pre) > code[class*="language-"]': {
            padding: '.2em',
            borderRadius: '.3em',
            boxShadow: 'none',
            whiteSpace: 'normal'
          },
          comment: { color: '#aaa' },
          prolog: { color: '#aaa' },
          doctype: { color: '#aaa' },
          cdata: { color: '#aaa' },
          punctuation: { color: '#999' },
          '.namespace': { Opacity: '.7' },
          property: { color: '#0cf' },
          tag: { color: '#0cf' },
          boolean: { color: '#0cf' },
          number: { color: '#0cf' },
          constant: { color: '#0cf' },
          symbol: { color: '#0cf' },
          selector: { color: 'yellow' },
          'attr-name': { color: 'yellow' },
          string: { color: 'yellow' },
          char: { color: 'yellow' },
          builtin: { color: 'yellow' },
          operator: { color: 'yellowgreen' },
          entity: { color: 'yellowgreen', cursor: 'help' },
          url: { color: 'yellowgreen' },
          '.language-css .token.string': { color: 'yellowgreen' },
          '.toke.variable': { color: 'yellowgreen' },
          inserted: { color: 'yellowgreen' },
          atrule: { color: 'deeppink' },
          'attr-value': { color: 'deeppink' },
          keyword: { color: 'deeppink' },
          regex: { color: 'orange' },
          important: { color: 'orange', fontWeight: 'bold' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' },
          deleted: { color: 'red' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#f8f8f2',
            background: 'none',
            textShadow: '0 1px rgba(0, 0, 0, 0.3)',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: '#f8f8f2',
            background: '#272822',
            textShadow: '0 1px rgba(0, 0, 0, 0.3)',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto',
            borderRadius: '0.3em'
          },
          ':not(pre) > code[class*="language-"]': {
            background: '#272822',
            padding: '.1em',
            borderRadius: '.3em',
            whiteSpace: 'normal'
          },
          comment: { color: 'slategray' },
          prolog: { color: 'slategray' },
          doctype: { color: 'slategray' },
          cdata: { color: 'slategray' },
          punctuation: { color: '#f8f8f2' },
          '.namespace': { Opacity: '.7' },
          property: { color: '#f92672' },
          tag: { color: '#f92672' },
          constant: { color: '#f92672' },
          symbol: { color: '#f92672' },
          deleted: { color: '#f92672' },
          boolean: { color: '#ae81ff' },
          number: { color: '#ae81ff' },
          selector: { color: '#a6e22e' },
          'attr-name': { color: '#a6e22e' },
          string: { color: '#a6e22e' },
          char: { color: '#a6e22e' },
          builtin: { color: '#a6e22e' },
          inserted: { color: '#a6e22e' },
          operator: { color: '#f8f8f2' },
          entity: { color: '#f8f8f2', cursor: 'help' },
          url: { color: '#f8f8f2' },
          '.language-css .token.string': { color: '#f8f8f2' },
          '.style .token.string': { color: '#f8f8f2' },
          variable: { color: '#f8f8f2' },
          atrule: { color: '#e6db74' },
          'attr-value': { color: '#e6db74' },
          function: { color: '#e6db74' },
          keyword: { color: '#66d9ef' },
          regex: { color: '#fd971f' },
          important: { color: '#fd971f', fontWeight: 'bold' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#657b83',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: '#657b83',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto',
            borderRadius: '0.3em',
            backgroundColor: '#fdf6e3'
          },
          'pre[class*="language-"]::-moz-selection': { background: '#073642' },
          'pre[class*="language-"] ::-moz-selection': { background: '#073642' },
          'code[class*="language-"]::-moz-selection': { background: '#073642' },
          'code[class*="language-"] ::-moz-selection': { background: '#073642' },
          'pre[class*="language-"]::selection': { background: '#073642' },
          'pre[class*="language-"] ::selection': { background: '#073642' },
          'code[class*="language-"]::selection': { background: '#073642' },
          'code[class*="language-"] ::selection': { background: '#073642' },
          ':not(pre) > code[class*="language-"]': { backgroundColor: '#fdf6e3', padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#93a1a1' },
          prolog: { color: '#93a1a1' },
          doctype: { color: '#93a1a1' },
          cdata: { color: '#93a1a1' },
          punctuation: { color: '#586e75' },
          '.namespace': { Opacity: '.7' },
          property: { color: '#268bd2' },
          tag: { color: '#268bd2' },
          boolean: { color: '#268bd2' },
          number: { color: '#268bd2' },
          constant: { color: '#268bd2' },
          symbol: { color: '#268bd2' },
          deleted: { color: '#268bd2' },
          selector: { color: '#2aa198' },
          'attr-name': { color: '#2aa198' },
          string: { color: '#2aa198' },
          char: { color: '#2aa198' },
          builtin: { color: '#2aa198' },
          url: { color: '#2aa198' },
          inserted: { color: '#2aa198' },
          entity: { color: '#657b83', background: '#eee8d5', cursor: 'help' },
          atrule: { color: '#859900' },
          'attr-value': { color: '#859900' },
          keyword: { color: '#859900' },
          function: { color: '#b58900' },
          regex: { color: '#cb4b16' },
          important: { color: '#cb4b16', fontWeight: 'bold' },
          variable: { color: '#cb4b16' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#ccc',
            background: 'none',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: '#ccc',
            background: '#2d2d2d',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          ':not(pre) > code[class*="language-"]': {
            background: '#2d2d2d',
            padding: '.1em',
            borderRadius: '.3em',
            whiteSpace: 'normal'
          },
          comment: { color: '#999' },
          'block-comment': { color: '#999' },
          prolog: { color: '#999' },
          doctype: { color: '#999' },
          cdata: { color: '#999' },
          punctuation: { color: '#ccc' },
          tag: { color: '#e2777a' },
          'attr-name': { color: '#e2777a' },
          namespace: { color: '#e2777a' },
          deleted: { color: '#e2777a' },
          'function-name': { color: '#6196cc' },
          boolean: { color: '#f08d49' },
          number: { color: '#f08d49' },
          function: { color: '#f08d49' },
          property: { color: '#f8c555' },
          'class-name': { color: '#f8c555' },
          constant: { color: '#f8c555' },
          symbol: { color: '#f8c555' },
          selector: { color: '#cc99cd' },
          important: { color: '#cc99cd', fontWeight: 'bold' },
          atrule: { color: '#cc99cd' },
          keyword: { color: '#cc99cd' },
          builtin: { color: '#cc99cd' },
          string: { color: '#7ec699' },
          char: { color: '#7ec699' },
          'attr-value': { color: '#7ec699' },
          regex: { color: '#7ec699' },
          variable: { color: '#7ec699' },
          operator: { color: '#67cdcc' },
          entity: { color: '#67cdcc', cursor: 'help' },
          url: { color: '#67cdcc' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' },
          inserted: { color: 'green' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: 'white',
            background: 'none',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            textShadow: '0 -.1em .2em black',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: 'white',
            background: 'hsl(0, 0%, 8%)',
            fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            textAlign: 'left',
            textShadow: '0 -.1em .2em black',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            wordWrap: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            borderRadius: '.5em',
            border: '.3em solid hsl(0, 0%, 33%)',
            boxShadow: '1px 1px .5em black inset',
            margin: '.5em 0',
            overflow: 'auto',
            padding: '1em'
          },
          ':not(pre) > code[class*="language-"]': {
            background: 'hsl(0, 0%, 8%)',
            borderRadius: '.3em',
            border: '.13em solid hsl(0, 0%, 33%)',
            boxShadow: '1px 1px .3em -.1em black inset',
            padding: '.15em .2em .05em',
            whiteSpace: 'normal'
          },
          'pre[class*="language-"]::-moz-selection': { background: 'hsla(0, 0%, 93%, 0.15)', textShadow: 'none' },
          'pre[class*="language-"]::selection': { background: 'hsla(0, 0%, 93%, 0.15)', textShadow: 'none' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: 'hsla(0, 0%, 93%, 0.15)' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: 'hsla(0, 0%, 93%, 0.15)' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: 'hsla(0, 0%, 93%, 0.15)' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: 'hsla(0, 0%, 93%, 0.15)' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: 'hsla(0, 0%, 93%, 0.15)' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: 'hsla(0, 0%, 93%, 0.15)' },
          comment: { color: 'hsl(0, 0%, 47%)' },
          prolog: { color: 'hsl(0, 0%, 47%)' },
          doctype: { color: 'hsl(0, 0%, 47%)' },
          cdata: { color: 'hsl(0, 0%, 47%)' },
          punctuation: { Opacity: '.7' },
          '.namespace': { Opacity: '.7' },
          tag: { color: 'hsl(14, 58%, 55%)' },
          boolean: { color: 'hsl(14, 58%, 55%)' },
          number: { color: 'hsl(14, 58%, 55%)' },
          deleted: { color: 'hsl(14, 58%, 55%)' },
          keyword: { color: 'hsl(53, 89%, 79%)' },
          property: { color: 'hsl(53, 89%, 79%)' },
          selector: { color: 'hsl(53, 89%, 79%)' },
          constant: { color: 'hsl(53, 89%, 79%)' },
          symbol: { color: 'hsl(53, 89%, 79%)' },
          builtin: { color: 'hsl(53, 89%, 79%)' },
          'attr-name': { color: 'hsl(76, 21%, 52%)' },
          'attr-value': { color: 'hsl(76, 21%, 52%)' },
          string: { color: 'hsl(76, 21%, 52%)' },
          char: { color: 'hsl(76, 21%, 52%)' },
          operator: { color: 'hsl(76, 21%, 52%)' },
          entity: { color: 'hsl(76, 21%, 52%)', cursor: 'help' },
          url: { color: 'hsl(76, 21%, 52%)' },
          '.language-css .token.string': { color: 'hsl(76, 21%, 52%)' },
          '.style .token.string': { color: 'hsl(76, 21%, 52%)' },
          variable: { color: 'hsl(76, 21%, 52%)' },
          inserted: { color: 'hsl(76, 21%, 52%)' },
          atrule: { color: 'hsl(218, 22%, 55%)' },
          regex: { color: 'hsl(42, 75%, 65%)' },
          important: { color: 'hsl(42, 75%, 65%)', fontWeight: 'bold' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' },
          'pre[data-line]': { padding: '1em 0 1em 3em', position: 'relative' },
          '.language-markup .token.tag': { color: 'hsl(33, 33%, 52%)' },
          '.language-markup .token.attr-name': { color: 'hsl(33, 33%, 52%)' },
          '.language-markup .token.punctuation': { color: 'hsl(33, 33%, 52%)' },
          '': { position: 'relative', zIndex: '1' },
          '.line-highlight': {
            background: 'linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))',
            borderBottom: '1px dashed hsl(0, 0%, 33%)',
            borderTop: '1px dashed hsl(0, 0%, 33%)',
            left: '0',
            lineHeight: 'inherit',
            marginTop: '0.75em',
            padding: 'inherit 0',
            pointerEvents: 'none',
            position: 'absolute',
            right: '0',
            whiteSpace: 'pre',
            zIndex: '0'
          },
          '.line-highlight:before': {
            backgroundColor: 'hsl(215, 15%, 59%)',
            borderRadius: '999px',
            boxShadow: '0 1px white',
            color: 'hsl(24, 20%, 95%)',
            content: 'attr(data-start)',
            font: 'bold 65%/1.5 sans-serif',
            left: '.6em',
            minWidth: '1em',
            padding: '0 .5em',
            position: 'absolute',
            textAlign: 'center',
            textShadow: 'none',
            top: '.4em',
            verticalAlign: '.3em'
          },
          '.line-highlight[data-end]:after': {
            backgroundColor: 'hsl(215, 15%, 59%)',
            borderRadius: '999px',
            boxShadow: '0 1px white',
            color: 'hsl(24, 20%, 95%)',
            content: 'attr(data-end)',
            font: 'bold 65%/1.5 sans-serif',
            left: '.6em',
            minWidth: '1em',
            padding: '0 .5em',
            position: 'absolute',
            textAlign: 'center',
            textShadow: 'none',
            top: 'auto',
            verticalAlign: '.3em',
            bottom: '.4em'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#c5c8c6',
            textShadow: '0 1px rgba(0, 0, 0, 0.3)',
            fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: '#c5c8c6',
            textShadow: '0 1px rgba(0, 0, 0, 0.3)',
            fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto',
            borderRadius: '0.3em',
            background: '#1d1f21'
          },
          ':not(pre) > code[class*="language-"]': { background: '#1d1f21', padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#7C7C7C' },
          prolog: { color: '#7C7C7C' },
          doctype: { color: '#7C7C7C' },
          cdata: { color: '#7C7C7C' },
          punctuation: { color: '#c5c8c6' },
          '.namespace': { Opacity: '.7' },
          property: { color: '#96CBFE' },
          keyword: { color: '#96CBFE' },
          tag: { color: '#96CBFE' },
          'class-name': { color: '#FFFFB6', textDecoration: 'underline' },
          boolean: { color: '#99CC99' },
          constant: { color: '#99CC99' },
          symbol: { color: '#f92672' },
          deleted: { color: '#f92672' },
          number: { color: '#FF73FD' },
          selector: { color: '#A8FF60' },
          'attr-name': { color: '#A8FF60' },
          string: { color: '#A8FF60' },
          char: { color: '#A8FF60' },
          builtin: { color: '#A8FF60' },
          inserted: { color: '#A8FF60' },
          variable: { color: '#C6C5FE' },
          operator: { color: '#EDEDED' },
          entity: { color: '#FFFFB6', cursor: 'help' },
          url: { color: '#96CBFE' },
          '.language-css .token.string': { color: '#87C38A' },
          '.style .token.string': { color: '#87C38A' },
          atrule: { color: '#F9EE98' },
          'attr-value': { color: '#F9EE98' },
          function: { color: '#DAD085' },
          regex: { color: '#E9C062' },
          important: { color: '#fd971f', fontWeight: 'bold' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#f5f7ff',
            color: '#5e6687'
          },
          'pre[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#f5f7ff',
            color: '#5e6687',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#dfe2f1' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#dfe2f1' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#dfe2f1' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#dfe2f1' },
          'pre[class*="language-"]::selection': { textShadow: 'none', background: '#dfe2f1' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#dfe2f1' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: '#dfe2f1' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: '#dfe2f1' },
          ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#898ea4' },
          prolog: { color: '#898ea4' },
          doctype: { color: '#898ea4' },
          cdata: { color: '#898ea4' },
          punctuation: { color: '#5e6687' },
          namespace: { Opacity: '.7' },
          operator: { color: '#c76b29' },
          boolean: { color: '#c76b29' },
          number: { color: '#c76b29' },
          property: { color: '#c08b30' },
          tag: { color: '#3d8fd1' },
          string: { color: '#22a2c9' },
          selector: { color: '#6679cc' },
          'attr-name': { color: '#c76b29' },
          entity: { color: '#22a2c9', cursor: 'help' },
          url: { color: '#22a2c9' },
          '.language-css .token.string': { color: '#22a2c9' },
          '.style .token.string': { color: '#22a2c9' },
          'attr-value': { color: '#ac9739' },
          keyword: { color: '#ac9739' },
          control: { color: '#ac9739' },
          directive: { color: '#ac9739' },
          unit: { color: '#ac9739' },
          statement: { color: '#22a2c9' },
          regex: { color: '#22a2c9' },
          atrule: { color: '#22a2c9' },
          placeholder: { color: '#3d8fd1' },
          variable: { color: '#3d8fd1' },
          deleted: { textDecoration: 'line-through' },
          inserted: { borderBottom: '1px dotted #202746', textDecoration: 'none' },
          italic: { fontStyle: 'italic' },
          important: { fontWeight: 'bold', color: '#c94922' },
          bold: { fontWeight: 'bold' },
          'pre > code.highlight': { Outline: '0.4em solid #c94922', OutlineOffset: '.4em' },
          '.line-numbers .line-numbers-rows': { borderRightColor: '#dfe2f1' },
          '.line-numbers-rows > span:before': { color: '#979db4' },
          '.line-highlight': {
            background: 'linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#fff',
            textShadow: '0 1px 1px #000',
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            direction: 'ltr',
            textAlign: 'left',
            wordSpacing: 'normal',
            whiteSpace: 'pre',
            wordWrap: 'normal',
            lineHeight: '1.4',
            background: 'none',
            border: '0',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: '#fff',
            textShadow: '0 1px 1px #000',
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            direction: 'ltr',
            textAlign: 'left',
            wordSpacing: 'normal',
            whiteSpace: 'pre',
            wordWrap: 'normal',
            lineHeight: '1.4',
            background: '#222',
            border: '0',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '15px',
            margin: '1em 0',
            overflow: 'auto',
            MozBorderRadius: '8px',
            WebkitBorderRadius: '8px',
            borderRadius: '8px'
          },
          'pre[class*="language-"] code': { float: 'left', padding: '0 15px 0 0' },
          ':not(pre) > code[class*="language-"]': {
            background: '#222',
            padding: '5px 10px',
            lineHeight: '1',
            MozBorderRadius: '3px',
            WebkitBorderRadius: '3px',
            borderRadius: '3px'
          },
          comment: { color: '#797979' },
          prolog: { color: '#797979' },
          doctype: { color: '#797979' },
          cdata: { color: '#797979' },
          selector: { color: '#fff' },
          operator: { color: '#fff' },
          punctuation: { color: '#fff' },
          namespace: { Opacity: '.7' },
          tag: { color: '#ffd893' },
          boolean: { color: '#ffd893' },
          atrule: { color: '#B0C975' },
          'attr-value': { color: '#B0C975' },
          hex: { color: '#B0C975' },
          string: { color: '#B0C975' },
          property: { color: '#c27628' },
          entity: { color: '#c27628', cursor: 'help' },
          url: { color: '#c27628' },
          'attr-name': { color: '#c27628' },
          keyword: { color: '#c27628' },
          regex: { color: '#9B71C6' },
          function: { color: '#e5a638' },
          constant: { color: '#e5a638' },
          variable: { color: '#fdfba8' },
          number: { color: '#8799B0' },
          important: { color: '#E45734' },
          deliminator: { color: '#E45734' },
          'pre[data-line]': { position: 'relative', padding: '1em 0 1em 3em' },
          '.line-highlight': {
            position: 'absolute',
            left: '0',
            right: '0',
            marginTop: '1em',
            background: 'rgba(255,255,255,.2)',
            pointerEvents: 'none',
            lineHeight: 'inherit',
            whiteSpace: 'pre'
          },
          '.line-highlight:before': {
            content: 'attr(data-start)',
            position: 'absolute',
            top: '.3em',
            left: '.6em',
            minWidth: '1em',
            padding: '0 .5em',
            backgroundColor: 'rgba(255,255,255,.3)',
            color: '#fff',
            font: 'bold 65%/1.5 sans-serif',
            textAlign: 'center',
            MozBorderRadius: '8px',
            WebkitBorderRadius: '8px',
            borderRadius: '8px',
            textShadow: 'none'
          },
          '.line-highlight[data-end]:after': {
            content: 'attr(data-end)',
            position: 'absolute',
            top: 'auto',
            left: '.6em',
            minWidth: '1em',
            padding: '0 .5em',
            backgroundColor: 'rgba(255,255,255,.3)',
            color: '#fff',
            font: 'bold 65%/1.5 sans-serif',
            textAlign: 'center',
            MozBorderRadius: '8px',
            WebkitBorderRadius: '8px',
            borderRadius: '8px',
            textShadow: 'none',
            bottom: '.4em'
          },
          '.line-numbers-rows': { margin: '0' },
          '.line-numbers-rows span': { paddingRight: '10px', borderRight: '3px #d9d336 solid' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#a9b7c6',
            fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: '#a9b7c6',
            fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            lineHeight: '1.5',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto',
            background: '#2b2b2b'
          },
          'pre[class*="language-"]::-moz-selection': { color: 'inherit', background: 'rgba(33,66,131,.85)' },
          'pre[class*="language-"] ::-moz-selection': { color: 'inherit', background: 'rgba(33,66,131,.85)' },
          'code[class*="language-"]::-moz-selection': { color: 'inherit', background: 'rgba(33,66,131,.85)' },
          'code[class*="language-"] ::-moz-selection': { color: 'inherit', background: 'rgba(33,66,131,.85)' },
          'pre[class*="language-"]::selection': { color: 'inherit', background: 'rgba(33,66,131,.85)' },
          'pre[class*="language-"] ::selection': { color: 'inherit', background: 'rgba(33,66,131,.85)' },
          'code[class*="language-"]::selection': { color: 'inherit', background: 'rgba(33,66,131,.85)' },
          'code[class*="language-"] ::selection': { color: 'inherit', background: 'rgba(33,66,131,.85)' },
          ':not(pre) > code[class*="language-"]': { background: '#2b2b2b', padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#808080' },
          prolog: { color: '#808080' },
          cdata: { color: '#808080' },
          delimiter: { color: '#cc7832' },
          boolean: { color: '#cc7832' },
          keyword: { color: '#cc7832' },
          selector: { color: '#cc7832' },
          important: { color: '#cc7832' },
          atrule: { color: '#cc7832' },
          operator: { color: '#a9b7c6' },
          punctuation: { color: '#a9b7c6' },
          'attr-name': { color: '#a9b7c6' },
          tag: { color: '#e8bf6a' },
          'tag .punctuation': { color: '#e8bf6a' },
          doctype: { color: '#e8bf6a' },
          builtin: { color: '#e8bf6a' },
          entity: { color: '#6897bb' },
          number: { color: '#6897bb' },
          symbol: { color: '#6897bb' },
          property: { color: '#9876aa' },
          constant: { color: '#9876aa' },
          variable: { color: '#9876aa' },
          string: { color: '#6a8759' },
          char: { color: '#6a8759' },
          'attr-value': { color: '#a5c261' },
          'attr-value .punctuation': { color: '#a5c261' },
          'attr-value .punctuation:first-child': { color: '#a9b7c6' },
          url: { color: '#287bde', textDecoration: 'underline' },
          function: { color: '#ffc66d' },
          regex: { background: '#364135' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' },
          inserted: { background: '#294436' },
          deleted: { background: '#484a4a' },
          'code.language-css .token.property': { color: '#a9b7c6' },
          'code.language-css .token.property + .token.punctuation': { color: '#a9b7c6' },
          'code.language-css .token.id': { color: '#ffc66d' },
          'code.language-css .token.selector > .token.class': { color: '#ffc66d' },
          'code.language-css .token.selector > .token.attribute': { color: '#ffc66d' },
          'code.language-css .token.selector > .token.pseudo-class': { color: '#ffc66d' },
          'code.language-css .token.selector > .token.pseudo-element': { color: '#ffc66d' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#2a2734',
            color: '#9a86fd'
          },
          'pre[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#2a2734',
            color: '#9a86fd',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#6a51e6' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#6a51e6' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#6a51e6' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#6a51e6' },
          'pre[class*="language-"]::selection': { textShadow: 'none', background: '#6a51e6' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#6a51e6' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: '#6a51e6' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: '#6a51e6' },
          ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#6c6783' },
          prolog: { color: '#6c6783' },
          doctype: { color: '#6c6783' },
          cdata: { color: '#6c6783' },
          punctuation: { color: '#6c6783' },
          namespace: { Opacity: '.7' },
          tag: { color: '#e09142' },
          operator: { color: '#e09142' },
          number: { color: '#e09142' },
          property: { color: '#9a86fd' },
          function: { color: '#9a86fd' },
          'tag-id': { color: '#eeebff' },
          selector: { color: '#eeebff' },
          'atrule-id': { color: '#eeebff' },
          'code.language-javascript': { color: '#c4b9fe' },
          'attr-name': { color: '#c4b9fe' },
          'code.language-css': { color: '#ffcc99' },
          'code.language-scss': { color: '#ffcc99' },
          boolean: { color: '#ffcc99' },
          string: { color: '#ffcc99' },
          entity: { color: '#ffcc99', cursor: 'help' },
          url: { color: '#ffcc99' },
          '.language-css .token.string': { color: '#ffcc99' },
          '.language-scss .token.string': { color: '#ffcc99' },
          '.style .token.string': { color: '#ffcc99' },
          'attr-value': { color: '#ffcc99' },
          keyword: { color: '#ffcc99' },
          control: { color: '#ffcc99' },
          directive: { color: '#ffcc99' },
          unit: { color: '#ffcc99' },
          statement: { color: '#ffcc99' },
          regex: { color: '#ffcc99' },
          atrule: { color: '#ffcc99' },
          placeholder: { color: '#ffcc99' },
          variable: { color: '#ffcc99' },
          deleted: { textDecoration: 'line-through' },
          inserted: { borderBottom: '1px dotted #eeebff', textDecoration: 'none' },
          italic: { fontStyle: 'italic' },
          important: { fontWeight: 'bold', color: '#c4b9fe' },
          bold: { fontWeight: 'bold' },
          'pre > code.highlight': { Outline: '.4em solid #8a75f5', OutlineOffset: '.4em' },
          '.line-numbers .line-numbers-rows': { borderRightColor: '#2c2937' },
          '.line-numbers-rows > span:before': { color: '#3c3949' },
          '.line-highlight': {
            background: 'linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#322d29',
            color: '#88786d'
          },
          'pre[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#322d29',
            color: '#88786d',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#6f5849' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#6f5849' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#6f5849' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#6f5849' },
          'pre[class*="language-"]::selection': { textShadow: 'none', background: '#6f5849' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#6f5849' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: '#6f5849' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: '#6f5849' },
          ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#6a5f58' },
          prolog: { color: '#6a5f58' },
          doctype: { color: '#6a5f58' },
          cdata: { color: '#6a5f58' },
          punctuation: { color: '#6a5f58' },
          namespace: { Opacity: '.7' },
          tag: { color: '#bfa05a' },
          operator: { color: '#bfa05a' },
          number: { color: '#bfa05a' },
          property: { color: '#88786d' },
          function: { color: '#88786d' },
          'tag-id': { color: '#fff3eb' },
          selector: { color: '#fff3eb' },
          'atrule-id': { color: '#fff3eb' },
          'code.language-javascript': { color: '#a48774' },
          'attr-name': { color: '#a48774' },
          'code.language-css': { color: '#fcc440' },
          'code.language-scss': { color: '#fcc440' },
          boolean: { color: '#fcc440' },
          string: { color: '#fcc440' },
          entity: { color: '#fcc440', cursor: 'help' },
          url: { color: '#fcc440' },
          '.language-css .token.string': { color: '#fcc440' },
          '.language-scss .token.string': { color: '#fcc440' },
          '.style .token.string': { color: '#fcc440' },
          'attr-value': { color: '#fcc440' },
          keyword: { color: '#fcc440' },
          control: { color: '#fcc440' },
          directive: { color: '#fcc440' },
          unit: { color: '#fcc440' },
          statement: { color: '#fcc440' },
          regex: { color: '#fcc440' },
          atrule: { color: '#fcc440' },
          placeholder: { color: '#fcc440' },
          variable: { color: '#fcc440' },
          deleted: { textDecoration: 'line-through' },
          inserted: { borderBottom: '1px dotted #fff3eb', textDecoration: 'none' },
          italic: { fontStyle: 'italic' },
          important: { fontWeight: 'bold', color: '#a48774' },
          bold: { fontWeight: 'bold' },
          'pre > code.highlight': { Outline: '.4em solid #816d5f', OutlineOffset: '.4em' },
          '.line-numbers .line-numbers-rows': { borderRightColor: '#35302b' },
          '.line-numbers-rows > span:before': { color: '#46403d' },
          '.line-highlight': {
            background: 'linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#2a2d2a',
            color: '#687d68'
          },
          'pre[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#2a2d2a',
            color: '#687d68',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#435643' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#435643' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#435643' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#435643' },
          'pre[class*="language-"]::selection': { textShadow: 'none', background: '#435643' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#435643' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: '#435643' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: '#435643' },
          ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#535f53' },
          prolog: { color: '#535f53' },
          doctype: { color: '#535f53' },
          cdata: { color: '#535f53' },
          punctuation: { color: '#535f53' },
          namespace: { Opacity: '.7' },
          tag: { color: '#a2b34d' },
          operator: { color: '#a2b34d' },
          number: { color: '#a2b34d' },
          property: { color: '#687d68' },
          function: { color: '#687d68' },
          'tag-id': { color: '#f0fff0' },
          selector: { color: '#f0fff0' },
          'atrule-id': { color: '#f0fff0' },
          'code.language-javascript': { color: '#b3d6b3' },
          'attr-name': { color: '#b3d6b3' },
          'code.language-css': { color: '#e5fb79' },
          'code.language-scss': { color: '#e5fb79' },
          boolean: { color: '#e5fb79' },
          string: { color: '#e5fb79' },
          entity: { color: '#e5fb79', cursor: 'help' },
          url: { color: '#e5fb79' },
          '.language-css .token.string': { color: '#e5fb79' },
          '.language-scss .token.string': { color: '#e5fb79' },
          '.style .token.string': { color: '#e5fb79' },
          'attr-value': { color: '#e5fb79' },
          keyword: { color: '#e5fb79' },
          control: { color: '#e5fb79' },
          directive: { color: '#e5fb79' },
          unit: { color: '#e5fb79' },
          statement: { color: '#e5fb79' },
          regex: { color: '#e5fb79' },
          atrule: { color: '#e5fb79' },
          placeholder: { color: '#e5fb79' },
          variable: { color: '#e5fb79' },
          deleted: { textDecoration: 'line-through' },
          inserted: { borderBottom: '1px dotted #f0fff0', textDecoration: 'none' },
          italic: { fontStyle: 'italic' },
          important: { fontWeight: 'bold', color: '#b3d6b3' },
          bold: { fontWeight: 'bold' },
          'pre > code.highlight': { Outline: '.4em solid #5c705c', OutlineOffset: '.4em' },
          '.line-numbers .line-numbers-rows': { borderRightColor: '#2c302c' },
          '.line-numbers-rows > span:before': { color: '#3b423b' },
          '.line-highlight': {
            background: 'linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#faf8f5',
            color: '#728fcb'
          },
          'pre[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#faf8f5',
            color: '#728fcb',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#faf8f5' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#faf8f5' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#faf8f5' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#faf8f5' },
          'pre[class*="language-"]::selection': { textShadow: 'none', background: '#faf8f5' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#faf8f5' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: '#faf8f5' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: '#faf8f5' },
          ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#b6ad9a' },
          prolog: { color: '#b6ad9a' },
          doctype: { color: '#b6ad9a' },
          cdata: { color: '#b6ad9a' },
          punctuation: { color: '#b6ad9a' },
          namespace: { Opacity: '.7' },
          tag: { color: '#063289' },
          operator: { color: '#063289' },
          number: { color: '#063289' },
          property: { color: '#b29762' },
          function: { color: '#b29762' },
          'tag-id': { color: '#2d2006' },
          selector: { color: '#2d2006' },
          'atrule-id': { color: '#2d2006' },
          'code.language-javascript': { color: '#896724' },
          'attr-name': { color: '#896724' },
          'code.language-css': { color: '#728fcb' },
          'code.language-scss': { color: '#728fcb' },
          boolean: { color: '#728fcb' },
          string: { color: '#728fcb' },
          entity: { color: '#728fcb', cursor: 'help' },
          url: { color: '#728fcb' },
          '.language-css .token.string': { color: '#728fcb' },
          '.language-scss .token.string': { color: '#728fcb' },
          '.style .token.string': { color: '#728fcb' },
          'attr-value': { color: '#728fcb' },
          keyword: { color: '#728fcb' },
          control: { color: '#728fcb' },
          directive: { color: '#728fcb' },
          unit: { color: '#728fcb' },
          statement: { color: '#728fcb' },
          regex: { color: '#728fcb' },
          atrule: { color: '#728fcb' },
          placeholder: { color: '#93abdc' },
          variable: { color: '#93abdc' },
          deleted: { textDecoration: 'line-through' },
          inserted: { borderBottom: '1px dotted #2d2006', textDecoration: 'none' },
          italic: { fontStyle: 'italic' },
          important: { fontWeight: 'bold', color: '#896724' },
          bold: { fontWeight: 'bold' },
          'pre > code.highlight': { Outline: '.4em solid #896724', OutlineOffset: '.4em' },
          '.line-numbers .line-numbers-rows': { borderRightColor: '#ece8de' },
          '.line-numbers-rows > span:before': { color: '#cdc4b1' },
          '.line-highlight': { background: 'linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#1d262f',
            color: '#57718e'
          },
          'pre[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#1d262f',
            color: '#57718e',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#004a9e' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#004a9e' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#004a9e' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#004a9e' },
          'pre[class*="language-"]::selection': { textShadow: 'none', background: '#004a9e' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#004a9e' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: '#004a9e' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: '#004a9e' },
          ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#4a5f78' },
          prolog: { color: '#4a5f78' },
          doctype: { color: '#4a5f78' },
          cdata: { color: '#4a5f78' },
          punctuation: { color: '#4a5f78' },
          namespace: { Opacity: '.7' },
          tag: { color: '#0aa370' },
          operator: { color: '#0aa370' },
          number: { color: '#0aa370' },
          property: { color: '#57718e' },
          function: { color: '#57718e' },
          'tag-id': { color: '#ebf4ff' },
          selector: { color: '#ebf4ff' },
          'atrule-id': { color: '#ebf4ff' },
          'code.language-javascript': { color: '#7eb6f6' },
          'attr-name': { color: '#7eb6f6' },
          'code.language-css': { color: '#47ebb4' },
          'code.language-scss': { color: '#47ebb4' },
          boolean: { color: '#47ebb4' },
          string: { color: '#47ebb4' },
          entity: { color: '#47ebb4', cursor: 'help' },
          url: { color: '#47ebb4' },
          '.language-css .token.string': { color: '#47ebb4' },
          '.language-scss .token.string': { color: '#47ebb4' },
          '.style .token.string': { color: '#47ebb4' },
          'attr-value': { color: '#47ebb4' },
          keyword: { color: '#47ebb4' },
          control: { color: '#47ebb4' },
          directive: { color: '#47ebb4' },
          unit: { color: '#47ebb4' },
          statement: { color: '#47ebb4' },
          regex: { color: '#47ebb4' },
          atrule: { color: '#47ebb4' },
          placeholder: { color: '#47ebb4' },
          variable: { color: '#47ebb4' },
          deleted: { textDecoration: 'line-through' },
          inserted: { borderBottom: '1px dotted #ebf4ff', textDecoration: 'none' },
          italic: { fontStyle: 'italic' },
          important: { fontWeight: 'bold', color: '#7eb6f6' },
          bold: { fontWeight: 'bold' },
          'pre > code.highlight': { Outline: '.4em solid #34659d', OutlineOffset: '.4em' },
          '.line-numbers .line-numbers-rows': { borderRightColor: '#1f2932' },
          '.line-numbers-rows > span:before': { color: '#2c3847' },
          '.line-highlight': {
            background: 'linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#24242e',
            color: '#767693'
          },
          'pre[class*="language-"]': {
            fontFamily:
              'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
            fontSize: '14px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            background: '#24242e',
            color: '#767693',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          'pre[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#5151e6' },
          'pre[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#5151e6' },
          'code[class*="language-"]::-moz-selection': { textShadow: 'none', background: '#5151e6' },
          'code[class*="language-"] ::-moz-selection': { textShadow: 'none', background: '#5151e6' },
          'pre[class*="language-"]::selection': { textShadow: 'none', background: '#5151e6' },
          'pre[class*="language-"] ::selection': { textShadow: 'none', background: '#5151e6' },
          'code[class*="language-"]::selection': { textShadow: 'none', background: '#5151e6' },
          'code[class*="language-"] ::selection': { textShadow: 'none', background: '#5151e6' },
          ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#5b5b76' },
          prolog: { color: '#5b5b76' },
          doctype: { color: '#5b5b76' },
          cdata: { color: '#5b5b76' },
          punctuation: { color: '#5b5b76' },
          namespace: { Opacity: '.7' },
          tag: { color: '#dd672c' },
          operator: { color: '#dd672c' },
          number: { color: '#dd672c' },
          property: { color: '#767693' },
          function: { color: '#767693' },
          'tag-id': { color: '#ebebff' },
          selector: { color: '#ebebff' },
          'atrule-id': { color: '#ebebff' },
          'code.language-javascript': { color: '#aaaaca' },
          'attr-name': { color: '#aaaaca' },
          'code.language-css': { color: '#fe8c52' },
          'code.language-scss': { color: '#fe8c52' },
          boolean: { color: '#fe8c52' },
          string: { color: '#fe8c52' },
          entity: { color: '#fe8c52', cursor: 'help' },
          url: { color: '#fe8c52' },
          '.language-css .token.string': { color: '#fe8c52' },
          '.language-scss .token.string': { color: '#fe8c52' },
          '.style .token.string': { color: '#fe8c52' },
          'attr-value': { color: '#fe8c52' },
          keyword: { color: '#fe8c52' },
          control: { color: '#fe8c52' },
          directive: { color: '#fe8c52' },
          unit: { color: '#fe8c52' },
          statement: { color: '#fe8c52' },
          regex: { color: '#fe8c52' },
          atrule: { color: '#fe8c52' },
          placeholder: { color: '#fe8c52' },
          variable: { color: '#fe8c52' },
          deleted: { textDecoration: 'line-through' },
          inserted: { borderBottom: '1px dotted #ebebff', textDecoration: 'none' },
          italic: { fontStyle: 'italic' },
          important: { fontWeight: 'bold', color: '#aaaaca' },
          bold: { fontWeight: 'bold' },
          'pre > code.highlight': { Outline: '.4em solid #7676f4', OutlineOffset: '.4em' },
          '.line-numbers .line-numbers-rows': { borderRightColor: '#262631' },
          '.line-numbers-rows > span:before': { color: '#393949' },
          '.line-highlight': {
            background: 'linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#393A34',
            fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            fontSize: '0.95em',
            lineHeight: '1.2em',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: '#393A34',
            fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            fontSize: '0.95em',
            lineHeight: '1.2em',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto',
            border: '1px solid #dddddd',
            backgroundColor: 'white'
          },
          'pre[class*="language-"]::-moz-selection': { background: '#b3d4fc' },
          'pre[class*="language-"] ::-moz-selection': { background: '#b3d4fc' },
          'code[class*="language-"]::-moz-selection': { background: '#b3d4fc' },
          'code[class*="language-"] ::-moz-selection': { background: '#b3d4fc' },
          'pre[class*="language-"]::selection': { background: '#b3d4fc' },
          'pre[class*="language-"] ::selection': { background: '#b3d4fc' },
          'code[class*="language-"]::selection': { background: '#b3d4fc' },
          'code[class*="language-"] ::selection': { background: '#b3d4fc' },
          ':not(pre) > code[class*="language-"]': {
            padding: '.2em',
            paddingTop: '1px',
            paddingBottom: '1px',
            background: '#f8f8f8',
            border: '1px solid #dddddd'
          },
          comment: { color: '#999988', fontStyle: 'italic' },
          prolog: { color: '#999988', fontStyle: 'italic' },
          doctype: { color: '#999988', fontStyle: 'italic' },
          cdata: { color: '#999988', fontStyle: 'italic' },
          namespace: { Opacity: '.7' },
          string: { color: '#e3116c' },
          'attr-value': { color: '#e3116c' },
          punctuation: { color: '#393A34' },
          operator: { color: '#393A34' },
          entity: { color: '#36acaa' },
          url: { color: '#36acaa' },
          symbol: { color: '#36acaa' },
          number: { color: '#36acaa' },
          boolean: { color: '#36acaa' },
          variable: { color: '#36acaa' },
          constant: { color: '#36acaa' },
          property: { color: '#36acaa' },
          regex: { color: '#36acaa' },
          inserted: { color: '#36acaa' },
          atrule: { color: '#00a4db' },
          keyword: { color: '#00a4db' },
          'attr-name': { color: '#00a4db' },
          '.language-autohotkey .token.selector': { color: '#00a4db' },
          function: { color: '#9a050f', fontWeight: 'bold' },
          deleted: { color: '#9a050f' },
          '.language-autohotkey .token.tag': { color: '#9a050f' },
          tag: { color: '#00009f' },
          selector: { color: '#00009f' },
          '.language-autohotkey .token.keyword': { color: '#00009f' },
          important: { fontWeight: 'bold' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#b9b5b8',
            fontFamily: '"Fira Mono", Menlo, Monaco, "Lucida Console","Courier New", Courier, monospace',
            fontSize: '16px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            wordSpacing: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            wordWrap: 'break-word',
            background: '#322931'
          },
          'pre[class*="language-"]': {
            color: '#b9b5b8',
            fontFamily: '"Fira Mono", Menlo, Monaco, "Lucida Console","Courier New", Courier, monospace',
            fontSize: '16px',
            lineHeight: '1.375',
            direction: 'ltr',
            textAlign: 'left',
            wordSpacing: 'normal',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            wordWrap: 'break-word',
            background: '#322931',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto'
          },
          ':not(pre) > code[class*="language-"]': { padding: '.1em', borderRadius: '.3em' },
          comment: { color: '#797379' },
          prolog: { color: '#797379' },
          doctype: { color: '#797379' },
          cdata: { color: '#797379' },
          punctuation: { color: '#b9b5b8' },
          '.namespace': { Opacity: '.7' },
          null: { color: '#fd8b19' },
          operator: { color: '#fd8b19' },
          boolean: { color: '#fd8b19' },
          number: { color: '#fd8b19' },
          property: { color: '#fdcc59' },
          tag: { color: '#1290bf' },
          string: { color: '#149b93' },
          selector: { color: '#c85e7c' },
          'attr-name': { color: '#fd8b19' },
          entity: { color: '#149b93', cursor: 'help' },
          url: { color: '#149b93' },
          '.language-css .token.string': { color: '#149b93' },
          '.style .token.string': { color: '#149b93' },
          'attr-value': { color: '#8fc13e' },
          keyword: { color: '#8fc13e' },
          control: { color: '#8fc13e' },
          directive: { color: '#8fc13e' },
          unit: { color: '#8fc13e' },
          statement: { color: '#149b93' },
          regex: { color: '#149b93' },
          atrule: { color: '#149b93' },
          placeholder: { color: '#1290bf' },
          variable: { color: '#1290bf' },
          important: { color: '#dd464c', fontWeight: 'bold' },
          'pre > code.highlight': { Outline: '.4em solid red', OutlineOffset: '.4em' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            wordWrap: 'break-word',
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            fontSize: '15px',
            lineHeight: '1.5',
            color: '#dccf8f',
            textShadow: '0'
          },
          'pre[class*="language-"]': {
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            wordWrap: 'break-word',
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            fontSize: '15px',
            lineHeight: '1.5',
            color: '#DCCF8F',
            textShadow: '0',
            borderRadius: '5px',
            border: '1px solid #000',
            background:
              "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
            padding: '12px',
            overflow: 'auto'
          },
          ':not(pre) > code[class*="language-"]': {
            borderRadius: '5px',
            border: '1px solid #000',
            color: '#DCCF8F',
            background:
              "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
            padding: '2px 6px'
          },
          namespace: { Opacity: '.7' },
          comment: { color: '#586e75', fontStyle: 'italic' },
          prolog: { color: '#586e75', fontStyle: 'italic' },
          doctype: { color: '#586e75', fontStyle: 'italic' },
          cdata: { color: '#586e75', fontStyle: 'italic' },
          number: { color: '#b89859' },
          string: { color: '#468966' },
          char: { color: '#468966' },
          builtin: { color: '#468966' },
          inserted: { color: '#468966' },
          'attr-name': { color: '#b89859' },
          operator: { color: '#dccf8f' },
          entity: { color: '#dccf8f', cursor: 'help' },
          url: { color: '#dccf8f' },
          '.language-css .token.string': { color: '#dccf8f' },
          '.style .token.string': { color: '#dccf8f' },
          selector: { color: '#859900' },
          regex: { color: '#859900' },
          atrule: { color: '#cb4b16' },
          keyword: { color: '#cb4b16' },
          'attr-value': { color: '#468966' },
          function: { color: '#b58900' },
          variable: { color: '#b58900' },
          placeholder: { color: '#b58900' },
          property: { color: '#b89859' },
          tag: { color: '#ffb03b' },
          boolean: { color: '#b89859' },
          constant: { color: '#b89859' },
          symbol: { color: '#b89859' },
          important: { color: '#dc322f' },
          statement: { color: '#dc322f' },
          deleted: { color: '#dc322f' },
          punctuation: { color: '#dccf8f' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            color: '#393A34',
            fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            fontSize: '0.95em',
            lineHeight: '1.2em',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none'
          },
          'pre[class*="language-"]': {
            color: '#393A34',
            fontFamily: '"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace',
            direction: 'ltr',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            fontSize: '0.95em',
            lineHeight: '1.2em',
            MozTabSize: '4',
            OTabSize: '4',
            tabSize: '4',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            padding: '1em',
            margin: '.5em 0',
            overflow: 'auto',
            border: '1px solid #dddddd',
            backgroundColor: 'white'
          },
          'pre[class*="language-"]::-moz-selection': { background: '#C1DEF1' },
          'pre[class*="language-"] ::-moz-selection': { background: '#C1DEF1' },
          'code[class*="language-"]::-moz-selection': { background: '#C1DEF1' },
          'code[class*="language-"] ::-moz-selection': { background: '#C1DEF1' },
          'pre[class*="language-"]::selection': { background: '#C1DEF1' },
          'pre[class*="language-"] ::selection': { background: '#C1DEF1' },
          'code[class*="language-"]::selection': { background: '#C1DEF1' },
          'code[class*="language-"] ::selection': { background: '#C1DEF1' },
          ':not(pre) > code[class*="language-"]': {
            padding: '.2em',
            paddingTop: '1px',
            paddingBottom: '1px',
            background: '#f8f8f8',
            border: '1px solid #dddddd'
          },
          comment: { color: '#008000', fontStyle: 'italic' },
          prolog: { color: '#008000', fontStyle: 'italic' },
          doctype: { color: '#008000', fontStyle: 'italic' },
          cdata: { color: '#008000', fontStyle: 'italic' },
          namespace: { Opacity: '.7' },
          string: { color: '#A31515' },
          punctuation: { color: '#393A34' },
          operator: { color: '#393A34' },
          url: { color: '#36acaa' },
          symbol: { color: '#36acaa' },
          number: { color: '#36acaa' },
          boolean: { color: '#36acaa' },
          variable: { color: '#36acaa' },
          constant: { color: '#36acaa' },
          inserted: { color: '#36acaa' },
          atrule: { color: '#0000ff' },
          keyword: { color: '#0000ff' },
          'attr-value': { color: '#0000ff' },
          '.language-autohotkey .token.selector': { color: '#0000ff' },
          '.language-json .token.boolean': { color: '#0000ff' },
          '.language-json .token.number': { color: '#0000ff' },
          'code[class*="language-css"]': { color: '#0000ff' },
          function: { color: '#393A34' },
          deleted: { color: '#9a050f' },
          '.language-autohotkey .token.tag': { color: '#9a050f' },
          selector: { color: '#800000' },
          '.language-autohotkey .token.keyword': { color: '#00009f' },
          important: { fontWeight: 'bold' },
          bold: { fontWeight: 'bold' },
          italic: { fontStyle: 'italic' },
          'class-name': { color: '#2B91AF' },
          '.language-json .token.property': { color: '#2B91AF' },
          tag: { color: '#800000' },
          'attr-name': { color: '#ff0000' },
          property: { color: '#ff0000' },
          regex: { color: '#ff0000' },
          entity: { color: '#ff0000' },
          'directive.tag  .tag': { background: '#ffff00', color: '#393A34' },
          '.line-numbers .line-numbers-rows': { borderRightColor: '#a5a5a5' },
          '.line-numbers-rows > span:before': { color: '#2B91AF' },
          '.line-highlight': {
            background: 'linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          'code[class*="language-"]': {
            MozTabSize: '2',
            OTabSize: '2',
            tabSize: '2',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            whiteSpace: 'pre-wrap',
            wordWrap: 'normal',
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            fontSize: '14px',
            color: '#76d9e6',
            textShadow: 'none'
          },
          'pre[class*="language-"]': {
            MozTabSize: '2',
            OTabSize: '2',
            tabSize: '2',
            WebkitHyphens: 'none',
            MozHyphens: 'none',
            msHyphens: 'none',
            hyphens: 'none',
            whiteSpace: 'pre-wrap',
            wordWrap: 'normal',
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            fontSize: '14px',
            color: '#76d9e6',
            textShadow: 'none',
            background: '#2a2a2a',
            padding: '15px',
            borderRadius: '4px',
            border: '1px solid #e1e1e8',
            overflow: 'auto',
            position: 'relative'
          },
          ':not(pre)>code[class*="language-"]': {
            background: '#2a2a2a',
            padding: '0.15em 0.2em 0.05em',
            borderRadius: '.3em',
            border: '0.13em solid #7a6652',
            boxShadow: '1px 1px 0.3em -0.1em #000 inset'
          },
          'pre[class*="language-"] code': { whiteSpace: 'pre', display: 'block' },
          namespace: { Opacity: '.7' },
          comment: { color: '#6f705e' },
          prolog: { color: '#6f705e' },
          doctype: { color: '#6f705e' },
          cdata: { color: '#6f705e' },
          operator: { color: '#a77afe' },
          boolean: { color: '#a77afe' },
          number: { color: '#a77afe' },
          'attr-name': { color: '#e6d06c' },
          string: { color: '#e6d06c' },
          entity: { color: '#e6d06c', cursor: 'help' },
          url: { color: '#e6d06c' },
          '.language-css .token.string': { color: '#e6d06c' },
          '.style .token.string': { color: '#e6d06c' },
          selector: { color: '#a6e22d' },
          inserted: { color: '#a6e22d' },
          atrule: { color: '#ef3b7d' },
          'attr-value': { color: '#ef3b7d' },
          keyword: { color: '#ef3b7d' },
          important: { color: '#ef3b7d', fontWeight: 'bold' },
          deleted: { color: '#ef3b7d' },
          regex: { color: '#76d9e6' },
          statement: { color: '#76d9e6', fontWeight: 'bold' },
          placeholder: { color: '#fff' },
          variable: { color: '#fff' },
          bold: { fontWeight: 'bold' },
          punctuation: { color: '#bebec5' },
          italic: { fontStyle: 'italic' },
          'code.language-markup': { color: '#f9f9f9' },
          'code.language-markup .token.tag': { color: '#ef3b7d' },
          'code.language-markup .token.attr-name': { color: '#a6e22d' },
          'code.language-markup .token.attr-value': { color: '#e6d06c' },
          'code.language-markup .token.style': { color: '#76d9e6' },
          'code.language-markup .token.script': { color: '#76d9e6' },
          'code.language-markup .token.script .token.keyword': { color: '#76d9e6' },
          'pre[class*="language-"][data-line]': { position: 'relative', padding: '1em 0 1em 3em' },
          'pre[data-line] .line-highlight': {
            position: 'absolute',
            left: '0',
            right: '0',
            padding: '0',
            marginTop: '1em',
            background: 'rgba(255, 255, 255, 0.08)',
            pointerEvents: 'none',
            lineHeight: 'inherit',
            whiteSpace: 'pre'
          },
          'pre[data-line] .line-highlight:before': {
            content: 'attr(data-start)',
            position: 'absolute',
            top: '.4em',
            left: '.6em',
            minWidth: '1em',
            padding: '0.2em 0.5em',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            color: 'black',
            font: 'bold 65%/1 sans-serif',
            height: '1em',
            lineHeight: '1em',
            textAlign: 'center',
            borderRadius: '999px',
            textShadow: 'none',
            boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)'
          },
          'pre[data-line] .line-highlight[data-end]:after': {
            content: 'attr(data-end)',
            position: 'absolute',
            top: 'auto',
            left: '.6em',
            minWidth: '1em',
            padding: '0.2em 0.5em',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            color: 'black',
            font: 'bold 65%/1 sans-serif',
            height: '1em',
            lineHeight: '1em',
            textAlign: 'center',
            borderRadius: '999px',
            textShadow: 'none',
            boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
            bottom: '.4em'
          }
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = i(n(746)),
        a = i(n(76)),
        r = i(n(777))
      function i(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.default = (0, o.default)(r.default, a.default)
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = s(n(747)),
        a = s(n(52))
      t.default = function(e, t) {
        return function(n) {
          var i = n.language,
            s = n.children,
            p = n.style,
            g = void 0 === p ? t : p,
            m = n.customStyle,
            f = void 0 === m ? {} : m,
            b = n.codeTagProps,
            h = void 0 === b ? { style: g['code[class*="language-"]'] } : b,
            y = n.useInlineStyles,
            S = void 0 === y || y,
            E = n.showLineNumbers,
            A = void 0 !== E && E,
            C = n.startingLineNumber,
            w = void 0 === C ? 1 : C,
            T = n.lineNumberContainerStyle,
            v = n.lineNumberStyle,
            _ = n.wrapLines,
            k = n.lineProps,
            N = void 0 === k ? {} : k,
            I = n.renderer,
            x = n.PreTag,
            R = void 0 === x ? 'pre' : x,
            O = n.CodeTag,
            L = void 0 === O ? 'code' : O,
            D = n.code,
            M = void 0 === D ? (Array.isArray(s) ? s[0] : s) : D,
            P = (0, o.default)(n, [
              'language',
              'children',
              'style',
              'customStyle',
              'codeTagProps',
              'useInlineStyles',
              'showLineNumbers',
              'startingLineNumber',
              'lineNumberContainerStyle',
              'lineNumberStyle',
              'wrapLines',
              'lineProps',
              'renderer',
              'PreTag',
              'CodeTag',
              'code'
            ])
          ;(_ = !(!I || void 0 !== _) || _), (I = I || u)
          var F = [{ type: 'text', value: M }],
            B = (function(e) {
              var t = e.astGenerator,
                n = e.language,
                o = e.code,
                a = e.defaultCodeValue
              if (t.getLanguage) {
                var r = n && t.getLanguage(n)
                return 'text' === n ? { value: a, language: 'text' } : r ? t.highlight(n, o) : t.highlightAuto(o)
              }
              try {
                return n && 'text' !== n ? { value: t.highlight(o, n) } : { value: a }
              } catch (e) {
                return { value: a }
              }
            })({ astGenerator: e, language: i, code: M, defaultCodeValue: F })
          null === B.language && (B.value = F)
          var U = g.hljs || g['pre[class*="language-"]'] || { backgroundColor: '#fff' },
            z = S
              ? (0, a.default)({}, P, { style: (0, a.default)({}, U, f) })
              : (0, a.default)({}, P, { className: 'hljs' }),
            G = _
              ? (function(e, t) {
                  var n = (function e(t) {
                      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                      var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
                      for (var a = 0; a < t.length; a++) {
                        var r = t[a]
                        if ('text' === r.type) o.push(d({ children: [r], className: n }))
                        else if (r.children) {
                          var i = n.concat(r.properties.className)
                          o = o.concat(e(r.children, i))
                        }
                      }
                      return o
                    })(e.value),
                    o = [],
                    a = -1,
                    r = 0,
                    i = function() {
                      var e = n[r],
                        i = e.children[0].value,
                        s = i.match(l)
                      if (s) {
                        var c = i.split('\n')
                        c.forEach(function(i, s) {
                          var l = o.length + 1,
                            u = { type: 'text', value: i + '\n' }
                          if (0 === s) {
                            var p = n.slice(a + 1, r).concat(d({ children: [u], className: e.properties.className }))
                            o.push(d({ children: p, lineNumber: l, lineProps: t }))
                          } else if (s === c.length - 1) {
                            var g = n[r + 1] && n[r + 1].children && n[r + 1].children[0]
                            if (g) {
                              var m = { type: 'text', value: '' + i },
                                f = d({ children: [m], className: e.properties.className })
                              n.splice(r + 1, 0, f)
                            } else o.push(d({ children: [u], lineNumber: l, lineProps: t }))
                          } else o.push(d({ children: [u], lineNumber: l, lineProps: t }))
                        }),
                          (a = r)
                      }
                      r++
                    }
                  for (; r < n.length; ) i()
                  if (a !== n.length - 1) {
                    var s = n.slice(a + 1, n.length)
                    s && s.length && o.push(d({ children: s, lineNumber: o.length + 1, lineProps: t }))
                  }
                  return o
                })(B, N)
              : B.value,
            j = A
              ? r.default.createElement(c, {
                  containerStyle: T,
                  codeStyle: h.style || {},
                  numberStyle: v,
                  startingLineNumber: w,
                  codeString: M
                })
              : null
          return r.default.createElement(
            R,
            z,
            j,
            r.default.createElement(L, h, I({ rows: G, stylesheet: g, useInlineStyles: S }))
          )
        }
      }
      var r = s(n(0)),
        i = s(n(775))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var l = /\n/g
      function c(e) {
        var t = e.codeString,
          n = e.codeStyle,
          o = e.containerStyle,
          i = void 0 === o ? { float: 'left', paddingRight: '10px' } : o,
          s = e.numberStyle,
          l = void 0 === s ? {} : s,
          c = e.startingLineNumber
        return r.default.createElement(
          'code',
          { style: (0, a.default)({}, n, i) },
          (function(e) {
            var t = e.lines,
              n = e.startingLineNumber,
              o = e.style
            return t.map(function(e, t) {
              var a = t + n
              return r.default.createElement(
                'span',
                {
                  key: 'line-' + t,
                  className: 'react-syntax-highlighter-line-number',
                  style: 'function' === typeof o ? o(a) : o
                },
                a + '\n'
              )
            })
          })({ lines: t.replace(/\n$/, '').split('\n'), style: l, startingLineNumber: c })
        )
      }
      function d(e) {
        var t = e.children,
          n = e.lineNumber,
          o = e.lineProps,
          a = e.className,
          r = void 0 === a ? [] : a,
          i = ('function' === typeof o ? o(n) : o) || {}
        return (
          (i.className = i.className ? r.concat(i.className) : r),
          { type: 'element', tagName: 'span', properties: i, children: t }
        )
      }
      function u(e) {
        var t = e.rows,
          n = e.stylesheet,
          o = e.useInlineStyles
        return t.map(function(e, t) {
          return (0, i.default)({ node: e, stylesheet: n, useInlineStyles: o, key: 'code-segement' + t })
        })
      }
    },
    function(e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.default = function(e, t) {
          var n = {}
          for (var o in e) t.indexOf(o) >= 0 || (Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]))
          return n
        })
    },
    function(e, t, n) {
      n(749), (e.exports = n(54).Object.assign)
    },
    function(e, t, n) {
      var o = n(750)
      o(o.S + o.F, 'Object', { assign: n(760) })
    },
    function(e, t, n) {
      var o = n(53),
        a = n(54),
        r = n(751),
        i = n(753),
        s = n(77),
        l = function e(t, n, l) {
          var c,
            d,
            u,
            p = t & e.F,
            g = t & e.G,
            m = t & e.S,
            f = t & e.P,
            b = t & e.B,
            h = t & e.W,
            y = g ? a : a[n] || (a[n] = {}),
            S = y.prototype,
            E = g ? o : m ? o[n] : (o[n] || {}).prototype
          for (c in (g && (l = n), l))
            ((d = !p && E && void 0 !== E[c]) && s(y, c)) ||
              ((u = d ? E[c] : l[c]),
              (y[c] =
                g && 'function' != typeof E[c]
                  ? l[c]
                  : b && d
                    ? r(u, o)
                    : h && E[c] == u
                      ? (function(e) {
                          var t = function(t, n, o) {
                            if (this instanceof e) {
                              switch (arguments.length) {
                                case 0:
                                  return new e()
                                case 1:
                                  return new e(t)
                                case 2:
                                  return new e(t, n)
                              }
                              return new e(t, n, o)
                            }
                            return e.apply(this, arguments)
                          }
                          return (t.prototype = e.prototype), t
                        })(u)
                      : f && 'function' == typeof u
                        ? r(Function.call, u)
                        : u),
              f && (((y.virtual || (y.virtual = {}))[c] = u), t & e.R && S && !S[c] && i(S, c, u)))
        }
      ;(l.F = 1), (l.G = 2), (l.S = 4), (l.P = 8), (l.B = 16), (l.W = 32), (l.U = 64), (l.R = 128), (e.exports = l)
    },
    function(e, t, n) {
      var o = n(752)
      e.exports = function(e, t, n) {
        if ((o(e), void 0 === t)) return e
        switch (n) {
          case 1:
            return function(n) {
              return e.call(t, n)
            }
          case 2:
            return function(n, o) {
              return e.call(t, n, o)
            }
          case 3:
            return function(n, o, a) {
              return e.call(t, n, o, a)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      }
    },
    function(e, t) {
      e.exports = function(e) {
        if ('function' != typeof e) throw TypeError(e + ' is not a function!')
        return e
      }
    },
    function(e, t, n) {
      var o = n(754),
        a = n(759)
      e.exports = n(56)
        ? function(e, t, n) {
            return o.f(e, t, a(1, n))
          }
        : function(e, t, n) {
            return (e[t] = n), e
          }
    },
    function(e, t, n) {
      var o = n(755),
        a = n(756),
        r = n(758),
        i = Object.defineProperty
      t.f = n(56)
        ? Object.defineProperty
        : function(e, t, n) {
            if ((o(e), (t = r(t, !0)), o(n), a))
              try {
                return i(e, t, n)
              } catch (e) {}
            if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!')
            return 'value' in n && (e[t] = n.value), e
          }
    },
    function(e, t, n) {
      var o = n(55)
      e.exports = function(e) {
        if (!o(e)) throw TypeError(e + ' is not an object!')
        return e
      }
    },
    function(e, t, n) {
      e.exports =
        !n(56) &&
        !n(57)(function() {
          return (
            7 !=
            Object.defineProperty(n(757)('div'), 'a', {
              get: function() {
                return 7
              }
            }).a
          )
        })
    },
    function(e, t, n) {
      var o = n(55),
        a = n(53).document,
        r = o(a) && o(a.createElement)
      e.exports = function(e) {
        return r ? a.createElement(e) : {}
      }
    },
    function(e, t, n) {
      var o = n(55)
      e.exports = function(e, t) {
        if (!o(e)) return e
        var n, a
        if (t && 'function' == typeof (n = e.toString) && !o((a = n.call(e)))) return a
        if ('function' == typeof (n = e.valueOf) && !o((a = n.call(e)))) return a
        if (!t && 'function' == typeof (n = e.toString) && !o((a = n.call(e)))) return a
        throw TypeError("Can't convert object to primitive value")
      }
    },
    function(e, t) {
      e.exports = function(e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
      }
    },
    function(e, t, n) {
      'use strict'
      var o = n(761),
        a = n(772),
        r = n(773),
        i = n(774),
        s = n(79),
        l = Object.assign
      e.exports =
        !l ||
        n(57)(function() {
          var e = {},
            t = {},
            n = Symbol(),
            o = 'abcdefghijklmnopqrst'
          return (
            (e[n] = 7),
            o.split('').forEach(function(e) {
              t[e] = e
            }),
            7 != l({}, e)[n] || Object.keys(l({}, t)).join('') != o
          )
        })
          ? function(e, t) {
              for (var n = i(e), l = arguments.length, c = 1, d = a.f, u = r.f; l > c; )
                for (var p, g = s(arguments[c++]), m = d ? o(g).concat(d(g)) : o(g), f = m.length, b = 0; f > b; )
                  u.call(g, (p = m[b++])) && (n[p] = g[p])
              return n
            }
          : l
    },
    function(e, t, n) {
      var o = n(762),
        a = n(771)
      e.exports =
        Object.keys ||
        function(e) {
          return o(e, a)
        }
    },
    function(e, t, n) {
      var o = n(77),
        a = n(78),
        r = n(764)(!1),
        i = n(767)('IE_PROTO')
      e.exports = function(e, t) {
        var n,
          s = a(e),
          l = 0,
          c = []
        for (n in s) n != i && o(s, n) && c.push(n)
        for (; t.length > l; ) o(s, (n = t[l++])) && (~r(c, n) || c.push(n))
        return c
      }
    },
    function(e, t) {
      var n = {}.toString
      e.exports = function(e) {
        return n.call(e).slice(8, -1)
      }
    },
    function(e, t, n) {
      var o = n(78),
        a = n(765),
        r = n(766)
      e.exports = function(e) {
        return function(t, n, i) {
          var s,
            l = o(t),
            c = a(l.length),
            d = r(i, c)
          if (e && n != n) {
            for (; c > d; ) if ((s = l[d++]) != s) return !0
          } else for (; c > d; d++) if ((e || d in l) && l[d] === n) return e || d || 0
          return !e && -1
        }
      }
    },
    function(e, t, n) {
      var o = n(81),
        a = Math.min
      e.exports = function(e) {
        return e > 0 ? a(o(e), 9007199254740991) : 0
      }
    },
    function(e, t, n) {
      var o = n(81),
        a = Math.max,
        r = Math.min
      e.exports = function(e, t) {
        return (e = o(e)) < 0 ? a(e + t, 0) : r(e, t)
      }
    },
    function(e, t, n) {
      var o = n(768)('keys'),
        a = n(770)
      e.exports = function(e) {
        return o[e] || (o[e] = a(e))
      }
    },
    function(e, t, n) {
      var o = n(54),
        a = n(53),
        r = a['__core-js_shared__'] || (a['__core-js_shared__'] = {})
      ;(e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: o.version,
        mode: n(769) ? 'pure' : 'global',
        copyright: '\xa9 2018 Denis Pushkarev (zloirock.ru)'
      })
    },
    function(e, t) {
      e.exports = !0
    },
    function(e, t) {
      var n = 0,
        o = Math.random()
      e.exports = function(e) {
        return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + o).toString(36))
      }
    },
    function(e, t) {
      e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      )
    },
    function(e, t) {
      t.f = Object.getOwnPropertySymbols
    },
    function(e, t) {
      t.f = {}.propertyIsEnumerable
    },
    function(e, t, n) {
      var o = n(80)
      e.exports = function(e) {
        return Object(o(e))
      }
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = i(n(52)),
        a = i(n(776))
      ;(t.createStyleObject = s), (t.createClassNameString = l), (t.createChildren = c), (t.default = d)
      var r = i(n(0))
      function i(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments[2]
        return e.reduce(function(e, t) {
          return (0, a.default)({}, e, n[t])
        }, t)
      }
      function l(e) {
        return e.join(' ')
      }
      function c(e, t) {
        var n = 0
        return function(o) {
          return (
            (n += 1),
            o.map(function(o, a) {
              return d({ node: o, stylesheet: e, useInlineStyles: t, key: 'code-segment-' + n + '-' + a })
            })
          )
        }
      }
      function d(e) {
        var t = e.node,
          n = e.stylesheet,
          i = e.style,
          d = void 0 === i ? {} : i,
          u = e.useInlineStyles,
          p = e.key,
          g = t.properties,
          m = t.type,
          f = t.tagName,
          b = t.value
        if ('text' === m) return b
        if (f) {
          var h = c(n, u),
            y = u
              ? (0, a.default)(
                  {},
                  g,
                  { className: void 0 },
                  { style: s(g.className, (0, o.default)({}, g.style, d), n) }
                )
              : (0, a.default)({}, g, { className: l(g.className) }),
            S = h(t.children)
          return r.default.createElement(f, (0, a.default)({ key: p }, y), S)
        }
      }
    },
    function(e, t, n) {
      'use strict'
      t.__esModule = !0
      var o,
        a = n(52),
        r = (o = a) && o.__esModule ? o : { default: o }
      t.default =
        r.default ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }
    },
    function(e, t, n) {
      'use strict'
      var o = n(778)
      ;(e.exports = o),
        o.register(n(790)),
        o.register(n(791)),
        o.register(n(792)),
        o.register(n(793)),
        o.register(n(794)),
        o.register(n(795)),
        o.register(n(796)),
        o.register(n(797)),
        o.register(n(798)),
        o.register(n(799)),
        o.register(n(800)),
        o.register(n(801)),
        o.register(n(802)),
        o.register(n(803)),
        o.register(n(804)),
        o.register(n(805)),
        o.register(n(806)),
        o.register(n(807)),
        o.register(n(808)),
        o.register(n(37)),
        o.register(n(809)),
        o.register(n(810)),
        o.register(n(58)),
        o.register(n(811)),
        o.register(n(812)),
        o.register(n(813)),
        o.register(n(814)),
        o.register(n(815)),
        o.register(n(816)),
        o.register(n(817)),
        o.register(n(818)),
        o.register(n(819)),
        o.register(n(820)),
        o.register(n(821)),
        o.register(n(822)),
        o.register(n(823)),
        o.register(n(824)),
        o.register(n(825)),
        o.register(n(826)),
        o.register(n(827)),
        o.register(n(828)),
        o.register(n(829)),
        o.register(n(830)),
        o.register(n(831)),
        o.register(n(832)),
        o.register(n(833)),
        o.register(n(834)),
        o.register(n(835)),
        o.register(n(836)),
        o.register(n(837)),
        o.register(n(838)),
        o.register(n(839)),
        o.register(n(840)),
        o.register(n(841)),
        o.register(n(842)),
        o.register(n(843)),
        o.register(n(844)),
        o.register(n(845)),
        o.register(n(846)),
        o.register(n(847)),
        o.register(n(83)),
        o.register(n(848)),
        o.register(n(849)),
        o.register(n(84)),
        o.register(n(850)),
        o.register(n(851)),
        o.register(n(852)),
        o.register(n(853)),
        o.register(n(854)),
        o.register(n(855)),
        o.register(n(856)),
        o.register(n(857)),
        o.register(n(858)),
        o.register(n(859)),
        o.register(n(860)),
        o.register(n(861)),
        o.register(n(862)),
        o.register(n(863)),
        o.register(n(864)),
        o.register(n(865)),
        o.register(n(866)),
        o.register(n(867)),
        o.register(n(868)),
        o.register(n(869)),
        o.register(n(870)),
        o.register(n(871)),
        o.register(n(872)),
        o.register(n(873)),
        o.register(n(874)),
        o.register(n(875)),
        o.register(n(876)),
        o.register(n(877)),
        o.register(n(878)),
        o.register(n(879)),
        o.register(n(880)),
        o.register(n(881)),
        o.register(n(85)),
        o.register(n(882)),
        o.register(n(883)),
        o.register(n(884)),
        o.register(n(885)),
        o.register(n(886)),
        o.register(n(887)),
        o.register(n(888)),
        o.register(n(889)),
        o.register(n(890)),
        o.register(n(891)),
        o.register(n(892)),
        o.register(n(893)),
        o.register(n(894)),
        o.register(n(895)),
        o.register(n(896)),
        o.register(n(897)),
        o.register(n(898)),
        o.register(n(899)),
        o.register(n(59)),
        o.register(n(900)),
        o.register(n(901)),
        o.register(n(902)),
        o.register(n(903)),
        o.register(n(904)),
        o.register(n(905)),
        o.register(n(906)),
        o.register(n(907)),
        o.register(n(908)),
        o.register(n(86)),
        o.register(n(909)),
        o.register(n(910)),
        o.register(n(911)),
        o.register(n(912)),
        o.register(n(913)),
        o.register(n(914)),
        o.register(n(87)),
        o.register(n(915)),
        o.register(n(916)),
        o.register(n(917)),
        o.register(n(918)),
        o.register(n(919)),
        o.register(n(920)),
        o.register(n(921)),
        o.register(n(922)),
        o.register(n(923)),
        o.register(n(924)),
        o.register(n(925))
    },
    function(e, t, n) {
      'use strict'
      ;(function(t) {
        var o = (function() {
          var e = 'Prism' in t,
            n = e ? t.Prism : void 0
          return function() {
            e ? (t.Prism = n) : delete t.Prism
            ;(e = void 0), (n = void 0)
          }
        })()
        ;('undefined' === typeof window ? {} : window).Prism = { manual: !0 }
        var a = n(779),
          r = n(785),
          i = n(786),
          s = n(787),
          l = n(788),
          c = n(789)
        o()
        var d = {}.hasOwnProperty
        function u() {}
        u.prototype = r
        var p = new u()
        function g(e) {
          if ('function' !== typeof e || !e.displayName)
            throw new Error('Expected `function` for `grammar`, got `' + e + '`')
          void 0 === p.languages[e.displayName] && e(p)
        }
        ;(e.exports = p),
          (p.highlight = function(e, t) {
            var n = r.highlight
            if ('string' !== typeof e) throw new Error('Expected `string` for `value`, got `' + e + '`')
            if ('string' !== typeof t) throw new Error('Expected `string` for `name`, got `' + t + '`')
            if (!d.call(p.languages, t)) throw new Error('Unknown language: `' + t + '` is not registered')
            return n.call(this, e, p.languages[t], t)
          }),
          (p.register = g),
          (p.registered = function(e) {
            if ('string' !== typeof e) throw new Error('Expected `string` for `language`, got `' + e + '`')
            return d.call(p.languages, e)
          }),
          g(i),
          g(s),
          g(l),
          g(c),
          (p.util.encode = function(e) {
            return e
          }),
          (p.Token.stringify = function(e, t, n) {
            var o
            if ('string' === typeof e) return { type: 'text', value: e }
            if ('Array' === p.util.type(e))
              return (function(e, t) {
                var n,
                  o = [],
                  a = e.length,
                  r = -1
                for (; ++r < a; ) '' !== (n = e[r]) && null !== n && void 0 !== n && o.push(n)
                ;(r = -1), (a = o.length)
                for (; ++r < a; ) (n = o[r]), (o[r] = p.Token.stringify(n, t, o))
                return o
              })(e, t)
            ;(o = {
              type: e.type,
              content: p.Token.stringify(e.content, t, n),
              tag: 'span',
              classes: ['token', e.type],
              attributes: {},
              language: t,
              parent: n
            }),
              e.alias && (o.classes = o.classes.concat(e.alias))
            return p.hooks.run('wrap', o), a(o.tag + '.' + o.classes.join('.'), o.attributes, o.content)
          })
      }.call(t, n(7)))
    },
    function(e, t, n) {
      'use strict'
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
      var a = n(780),
        r = n(781),
        i = n(782),
        s = n(783).parse,
        l = n(784).parse
      function c(e, t, n) {
        var a,
          c = i(t) || {},
          d = n
        if (null !== n && void 0 !== n && n === n) {
          if ('style' === t) {
            if ('string' !== typeof n) {
              for (a in ((d = []), n)) d.push([a, n[a]].join(': '))
              d = d.join('; ')
            }
          } else
            c.spaceSeparated
              ? ((d = 'string' === typeof n ? s(d) : d), 'class' === t && e.className && (d = e.className.concat(d)))
              : c.commaSeparated && (d = 'string' === typeof n ? l(d) : d)
          ;(d = (function e(t, n, a) {
            var r = a
            var i
            var s
            if ('object' === o(a) && 'length' in a) {
              for (s = a.length, i = -1, r = []; ++i < s; ) r[i] = e(t, n, a[i])
              return r
            }
            t.numeric || t.positiveNumeric
              ? isNaN(r) || '' === r || (r = Number(r))
              : (t.boolean || t.overloadedBoolean) &&
                ('string' !== typeof r || ('' !== r && a.toLowerCase() !== n) || (r = !0))
            return r
          })(c, t, d)),
            (e[c.propertyName || r(t)] = d)
        }
      }
      e.exports = function(e, t, n) {
        var r,
          i = a(e)
        t &&
          !n &&
          ('string' === typeof t ||
            'length' in t ||
            (function(e, t) {
              var n = t.type
              'string' === typeof n && (n = n.toLowerCase())
              if ('input' === e || !n || 'string' !== typeof n) return !1
              if ('object' === o(t.children) && 'length' in t.children) return !0
              if ('button' === e) return 'menu' !== n && 'submit' !== n && 'reset' !== n && 'button' !== n
              return 'value' in t
            })(i.tagName, t)) &&
          ((n = t), (t = null))
        if (t) for (r in t) c(i.properties, r, t[r])
        ;(function e(t, n) {
          var a, r
          if (null !== n && void 0 !== n)
            if (
              (('string' !== typeof n && 'number' !== typeof n) || (n = { type: 'text', value: String(n) }),
              'object' === o(n) && 'length' in n)
            )
              for (a = -1, r = n.length; ++a < r; ) e(t, n[a])
            else {
              if ('object' !== o(n) || !('type' in n))
                throw new Error('Expected node, nodes, or string, got `' + n + '`')
              t.push(n)
            }
        })(i.children, n),
          'template' === i.tagName && ((i.content = { type: 'root', children: i.children }), (i.children = []))
        return i
      }
    },
    function(e, t, n) {
      'use strict'
      e.exports = function(e) {
        var t,
          n,
          r,
          i,
          s = null,
          l = [],
          c = e || '',
          d = 'div',
          u = null,
          p = -1,
          g = c.length
        ;(t = { type: 'element', tagName: null, properties: {}, children: [] }), (u = null)
        for (; ++p <= g; )
          ((n = c.charCodeAt(p)) && n !== o && n !== a) ||
            ((r = c.slice(i, p)) && (u === o ? l.push(r) : u === a ? (s = r) : (d = r)), (i = p + 1), (u = n))
        ;(t.tagName = d), s && (t.properties.id = s)
        0 !== l.length && (t.properties.className = l)
        return t
      }
      var o = '.'.charCodeAt(0),
        a = '#'.charCodeAt(0)
    },
    function(e, t, n) {
      'use strict'
      e.exports = function() {
        var e = [].map
          .call(arguments, function(e) {
            return e.trim()
          })
          .filter(function(e) {
            return e.length
          })
          .join('-')
        return e.length
          ? 1 === e.length
            ? e.toLowerCase()
            : /[_.\- ]+/.test(e)
              ? (e = (function(e) {
                  for (var t = !1, n = 0; n < e.length; n++) {
                    var o = e.charAt(n)
                    t && /[a-zA-Z]/.test(o) && o.toUpperCase() === o
                      ? ((e = e.substr(0, n) + '-' + e.substr(n)), (t = !1), n++)
                      : (t = o.toLowerCase() === o)
                  }
                  return e
                })(e))
                  .replace(/^[_.\- ]+/, '')
                  .toLowerCase()
                  .replace(/[_.\- ]+(\w|$)/g, function(e, t) {
                    return t.toUpperCase()
                  })
              : e === e.toUpperCase()
                ? e.toLowerCase()
                : e[0] !== e[0].toLowerCase()
                  ? e[0].toLowerCase() + e.slice(1)
                  : e
          : ''
      }
    },
    function(e, t, n) {
      'use strict'
      e.exports = c
      var o,
        a,
        r,
        i = {
          abbr: null,
          accept: 256,
          acceptCharset: 128,
          accessKey: 128,
          action: null,
          allowFullScreen: 9,
          allowTransparency: 1,
          alt: null,
          as: null,
          async: 8,
          autoComplete: 128,
          autoFocus: 8,
          autoPlay: 8,
          capture: 9,
          cellPadding: null,
          cellSpacing: null,
          challenge: 1,
          charSet: 1,
          checked: 10,
          cite: null,
          className: 129,
          cols: 49,
          colSpan: null,
          command: null,
          content: null,
          contentEditable: null,
          contextMenu: 1,
          controls: 10,
          controlsList: 128,
          coords: 272,
          crossOrigin: null,
          data: null,
          dateTime: 1,
          default: 8,
          defer: 8,
          dir: null,
          dirName: null,
          disabled: 9,
          download: 64,
          draggable: null,
          dropzone: 128,
          encType: null,
          form: 1,
          formAction: 1,
          formEncType: 1,
          formMethod: 1,
          formNoValidate: 8,
          formTarget: 1,
          frameBorder: 1,
          headers: 128,
          height: 49,
          hidden: 9,
          high: 16,
          href: null,
          hrefLang: null,
          htmlFor: 128,
          httpEquiv: 128,
          id: 2,
          inputMode: 1,
          is: 1,
          isMap: 8,
          keyParams: 1,
          keyType: 1,
          kind: null,
          label: null,
          lang: null,
          list: 1,
          loop: 10,
          low: 16,
          manifest: 1,
          marginHeight: 16,
          marginWidth: 16,
          max: null,
          maxLength: 49,
          media: 1,
          mediaGroup: null,
          menu: null,
          method: null,
          min: null,
          minLength: 49,
          multiple: 10,
          muted: 10,
          name: null,
          nonce: null,
          noValidate: 8,
          open: 8,
          optimum: 16,
          pattern: null,
          ping: 128,
          placeholder: null,
          playsInline: 8,
          poster: null,
          preload: null,
          profile: null,
          radioGroup: null,
          readOnly: 10,
          referrerPolicy: null,
          rel: 129,
          required: 8,
          reversed: 8,
          role: 1,
          rows: 49,
          rowSpan: 48,
          sandbox: 128,
          scope: null,
          scoped: 8,
          scrolling: null,
          seamless: 9,
          selected: 10,
          shape: null,
          size: 49,
          sizes: 129,
          slot: null,
          sortable: 8,
          sorted: 128,
          span: 48,
          spellCheck: null,
          src: null,
          srcDoc: 2,
          srcLang: null,
          srcSet: 257,
          start: 16,
          step: null,
          style: null,
          summary: null,
          tabIndex: 16,
          target: null,
          title: null,
          translate: null,
          type: null,
          typeMustMatch: 8,
          useMap: null,
          value: 2,
          volume: 48,
          width: 17,
          wmode: 1,
          wrap: null,
          autoCapitalize: null,
          autoCorrect: null,
          autoSave: null,
          itemProp: 129,
          itemScope: 9,
          itemType: 129,
          itemID: 1,
          itemRef: 129,
          property: null,
          results: null,
          security: 1,
          unselectable: 1,
          xmlLang: 1,
          xmlBase: 1
        },
        s = {
          xmlbase: 'xml:base',
          xmllang: 'xml:lang',
          classname: 'class',
          htmlfor: 'for',
          httpequiv: 'http-equiv',
          acceptcharset: 'accept-charset'
        },
        l = {}
      for (o in ((c.all = l), i))
        (a = u(o)),
          (a = s[a] || a),
          (r = i[o]),
          (l[a] = {
            name: a,
            propertyName: o,
            mustUseAttribute: d(r, 1),
            mustUseProperty: d(r, 2),
            boolean: d(r, 8),
            overloadedBoolean: d(r, 64),
            numeric: d(r, 16),
            positiveNumeric: d(r, 48),
            commaSeparated: d(r, 256),
            spaceSeparated: d(r, 128)
          })
      function c(e) {
        var t = u(e)
        return l[s[t] || t]
      }
      function d(e, t) {
        return (e & t) === t
      }
      function u(e) {
        return e.toLowerCase()
      }
    },
    function(e, t, n) {
      'use strict'
      var o = n(82)
      ;(t.parse = function(e) {
        var t = o(String(e || a))
        return t === a ? [] : t.split(i)
      }),
        (t.stringify = function(e) {
          return o(e.join(r))
        })
      var a = '',
        r = ' ',
        i = /[ \t\n\r\f]+/g
    },
    function(e, t, n) {
      'use strict'
      ;(t.parse = function(e) {
        var t,
          n = [],
          r = String(e || i),
          s = r.indexOf(a),
          l = 0,
          c = !1
        for (; !c; )
          -1 === s && ((s = r.length), (c = !0)),
            (!(t = o(r.slice(l, s))) && c) || n.push(t),
            (l = s + 1),
            (s = r.indexOf(a, l))
        return n
      }),
        (t.stringify = function(e, t) {
          var n = t || {},
            s = !1 === n.padLeft ? i : r,
            l = n.padRight ? r : i
          e[e.length - 1] === i && (e = e.concat(i))
          return o(e.join(l + a + s))
        })
      var o = n(82),
        a = ',',
        r = ' ',
        i = ''
    },
    function(e, t, n) {
      ;(function(t) {
        var n =
            'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
                ? self
                : {},
          o = (function() {
            var e = /\blang(?:uage)?-([\w-]+)\b/i,
              t = 0,
              o = (n.Prism = {
                manual: n.Prism && n.Prism.manual,
                disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
                util: {
                  encode: function(e) {
                    return e instanceof a
                      ? new a(e.type, o.util.encode(e.content), e.alias)
                      : 'Array' === o.util.type(e)
                        ? e.map(o.util.encode)
                        : e
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/\u00a0/g, ' ')
                  },
                  type: function(e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                  },
                  objId: function(e) {
                    return e.__id || Object.defineProperty(e, '__id', { value: ++t }), e.__id
                  },
                  clone: function(e, t) {
                    var n = o.util.type(e)
                    switch (((t = t || {}), n)) {
                      case 'Object':
                        if (t[o.util.objId(e)]) return t[o.util.objId(e)]
                        r = {}
                        for (var a in ((t[o.util.objId(e)] = r), e))
                          e.hasOwnProperty(a) && (r[a] = o.util.clone(e[a], t))
                        return r
                      case 'Array':
                        if (t[o.util.objId(e)]) return t[o.util.objId(e)]
                        var r = []
                        return (
                          (t[o.util.objId(e)] = r),
                          e.forEach(function(e, n) {
                            r[n] = o.util.clone(e, t)
                          }),
                          r
                        )
                    }
                    return e
                  }
                },
                languages: {
                  extend: function(e, t) {
                    var n = o.util.clone(o.languages[e])
                    for (var a in t) n[a] = t[a]
                    return n
                  },
                  insertBefore: function(e, t, n, a) {
                    var r = (a = a || o.languages)[e]
                    if (2 == arguments.length) {
                      for (var i in (n = arguments[1])) n.hasOwnProperty(i) && (r[i] = n[i])
                      return r
                    }
                    var s = {}
                    for (var l in r)
                      if (r.hasOwnProperty(l)) {
                        if (l == t) for (var i in n) n.hasOwnProperty(i) && (s[i] = n[i])
                        s[l] = r[l]
                      }
                    return (
                      o.languages.DFS(o.languages, function(t, n) {
                        n === a[e] && t != e && (this[t] = s)
                      }),
                      (a[e] = s)
                    )
                  },
                  DFS: function(e, t, n, a) {
                    for (var r in ((a = a || {}), e))
                      e.hasOwnProperty(r) &&
                        (t.call(e, r, e[r], n || r),
                        'Object' !== o.util.type(e[r]) || a[o.util.objId(e[r])]
                          ? 'Array' !== o.util.type(e[r]) ||
                            a[o.util.objId(e[r])] ||
                            ((a[o.util.objId(e[r])] = !0), o.languages.DFS(e[r], t, r, a))
                          : ((a[o.util.objId(e[r])] = !0), o.languages.DFS(e[r], t, null, a)))
                  }
                },
                plugins: {},
                highlightAll: function(e, t) {
                  o.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function(e, t, n) {
                  var a = {
                    callback: n,
                    selector:
                      'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                  }
                  o.hooks.run('before-highlightall', a)
                  for (var r, i = a.elements || e.querySelectorAll(a.selector), s = 0; (r = i[s++]); )
                    o.highlightElement(r, !0 === t, a.callback)
                },
                highlightElement: function(t, a, r) {
                  for (var i, s, l = t; l && !e.test(l.className); ) l = l.parentNode
                  l && ((i = (l.className.match(e) || [, ''])[1].toLowerCase()), (s = o.languages[i])),
                    (t.className = t.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + i),
                    t.parentNode &&
                      ((l = t.parentNode),
                      /pre/i.test(l.nodeName) &&
                        (l.className = l.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + i))
                  var c = { element: t, language: i, grammar: s, code: t.textContent }
                  if ((o.hooks.run('before-sanity-check', c), !c.code || !c.grammar))
                    return (
                      c.code &&
                        (o.hooks.run('before-highlight', c),
                        (c.element.textContent = c.code),
                        o.hooks.run('after-highlight', c)),
                      void o.hooks.run('complete', c)
                    )
                  if ((o.hooks.run('before-highlight', c), a && n.Worker)) {
                    var d = new Worker(o.filename)
                    ;(d.onmessage = function(e) {
                      ;(c.highlightedCode = e.data),
                        o.hooks.run('before-insert', c),
                        (c.element.innerHTML = c.highlightedCode),
                        r && r.call(c.element),
                        o.hooks.run('after-highlight', c),
                        o.hooks.run('complete', c)
                    }),
                      d.postMessage(JSON.stringify({ language: c.language, code: c.code, immediateClose: !0 }))
                  } else
                    (c.highlightedCode = o.highlight(c.code, c.grammar, c.language)),
                      o.hooks.run('before-insert', c),
                      (c.element.innerHTML = c.highlightedCode),
                      r && r.call(t),
                      o.hooks.run('after-highlight', c),
                      o.hooks.run('complete', c)
                },
                highlight: function(e, t, n) {
                  var r = { code: e, grammar: t, language: n }
                  return (
                    o.hooks.run('before-tokenize', r),
                    (r.tokens = o.tokenize(r.code, r.grammar)),
                    o.hooks.run('after-tokenize', r),
                    a.stringify(o.util.encode(r.tokens), r.language)
                  )
                },
                matchGrammar: function(e, t, n, a, r, i, s) {
                  var l = o.Token
                  for (var c in n)
                    if (n.hasOwnProperty(c) && n[c]) {
                      if (c == s) return
                      var d = n[c]
                      d = 'Array' === o.util.type(d) ? d : [d]
                      for (var u = 0; u < d.length; ++u) {
                        var p = d[u],
                          g = p.inside,
                          m = !!p.lookbehind,
                          f = !!p.greedy,
                          b = 0,
                          h = p.alias
                        if (f && !p.pattern.global) {
                          var y = p.pattern.toString().match(/[imuy]*$/)[0]
                          p.pattern = RegExp(p.pattern.source, y + 'g')
                        }
                        p = p.pattern || p
                        for (var S = a, E = r; S < t.length; E += t[S].length, ++S) {
                          var A = t[S]
                          if (t.length > e.length) return
                          if (!(A instanceof l)) {
                            if (f && S != t.length - 1) {
                              if (((p.lastIndex = E), !(k = p.exec(e)))) break
                              for (
                                var C = k.index + (m ? k[1].length : 0),
                                  w = k.index + k[0].length,
                                  T = S,
                                  v = E,
                                  _ = t.length;
                                T < _ && (v < w || (!t[T].type && !t[T - 1].greedy));
                                ++T
                              )
                                C >= (v += t[T].length) && (++S, (E = v))
                              if (t[S] instanceof l) continue
                              ;(N = T - S), (A = e.slice(E, v)), (k.index -= E)
                            } else {
                              p.lastIndex = 0
                              var k = p.exec(A),
                                N = 1
                            }
                            if (k) {
                              m && (b = k[1] ? k[1].length : 0)
                              w = (C = k.index + b) + (k = k[0].slice(b)).length
                              var I = A.slice(0, C),
                                x = A.slice(w),
                                R = [S, N]
                              I && (++S, (E += I.length), R.push(I))
                              var O = new l(c, g ? o.tokenize(k, g) : k, h, k, f)
                              if (
                                (R.push(O),
                                x && R.push(x),
                                Array.prototype.splice.apply(t, R),
                                1 != N && o.matchGrammar(e, t, n, S, E, !0, c),
                                i)
                              )
                                break
                            } else if (i) break
                          }
                        }
                      }
                    }
                },
                tokenize: function(e, t, n) {
                  var a = [e],
                    r = t.rest
                  if (r) {
                    for (var i in r) t[i] = r[i]
                    delete t.rest
                  }
                  return o.matchGrammar(e, a, t, 0, 0, !1), a
                },
                hooks: {
                  all: {},
                  add: function(e, t) {
                    var n = o.hooks.all
                    ;(n[e] = n[e] || []), n[e].push(t)
                  },
                  run: function(e, t) {
                    var n = o.hooks.all[e]
                    if (n && n.length) for (var a, r = 0; (a = n[r++]); ) a(t)
                  }
                }
              }),
              a = (o.Token = function(e, t, n, o, a) {
                ;(this.type = e),
                  (this.content = t),
                  (this.alias = n),
                  (this.length = 0 | (o || '').length),
                  (this.greedy = !!a)
              })
            if (
              ((a.stringify = function(e, t, n) {
                if ('string' == typeof e) return e
                if ('Array' === o.util.type(e))
                  return e
                    .map(function(n) {
                      return a.stringify(n, t, e)
                    })
                    .join('')
                var r = {
                  type: e.type,
                  content: a.stringify(e.content, t, n),
                  tag: 'span',
                  classes: ['token', e.type],
                  attributes: {},
                  language: t,
                  parent: n
                }
                if (e.alias) {
                  var i = 'Array' === o.util.type(e.alias) ? e.alias : [e.alias]
                  Array.prototype.push.apply(r.classes, i)
                }
                o.hooks.run('wrap', r)
                var s = Object.keys(r.attributes)
                  .map(function(e) {
                    return e + '="' + (r.attributes[e] || '').replace(/"/g, '&quot;') + '"'
                  })
                  .join(' ')
                return (
                  '<' +
                  r.tag +
                  ' class="' +
                  r.classes.join(' ') +
                  '"' +
                  (s ? ' ' + s : '') +
                  '>' +
                  r.content +
                  '</' +
                  r.tag +
                  '>'
                )
              }),
              !n.document)
            )
              return n.addEventListener
                ? (o.disableWorkerMessageHandler ||
                    n.addEventListener(
                      'message',
                      function(e) {
                        var t = JSON.parse(e.data),
                          a = t.language,
                          r = t.code,
                          i = t.immediateClose
                        n.postMessage(o.highlight(r, o.languages[a], a)), i && n.close()
                      },
                      !1
                    ),
                  n.Prism)
                : n.Prism
            var r = document.currentScript || [].slice.call(document.getElementsByTagName('script')).pop()
            return (
              r &&
                ((o.filename = r.src),
                o.manual ||
                  r.hasAttribute('data-manual') ||
                  ('loading' !== document.readyState
                    ? window.requestAnimationFrame
                      ? window.requestAnimationFrame(o.highlightAll)
                      : window.setTimeout(o.highlightAll, 16)
                    : document.addEventListener('DOMContentLoaded', o.highlightAll))),
              n.Prism
            )
          })()
        'undefined' !== typeof e && e.exports && (e.exports = o), 'undefined' !== typeof t && (t.Prism = o)
      }.call(t, n(7)))
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.markup = {
          comment: /<!--[\s\S]*?-->/,
          prolog: /<\?[\s\S]+?\?>/,
          doctype: /<!DOCTYPE[\s\S]+?>/i,
          cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
          tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            greedy: !0,
            inside: {
              tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
              'attr-value': {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: { punctuation: [/^=/, { pattern: /(^|[^\\])["']/, lookbehind: !0 }] }
              },
              punctuation: /\/?>/,
              'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
            }
          },
          entity: /&#?[\da-z]{1,8};/i
        }),
          (e.languages.markup.tag.inside['attr-value'].inside.entity = e.languages.markup.entity),
          e.hooks.add('wrap', function(e) {
            'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'))
          }),
          (e.languages.xml = e.languages.markup),
          (e.languages.html = e.languages.markup),
          (e.languages.mathml = e.languages.markup),
          (e.languages.svg = e.languages.markup)
      }
      ;(e.exports = o), (o.displayName = 'markup'), (o.aliases = ['xml', 'html', 'mathml', 'svg'])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: { pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } },
          url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
          selector: /[^{}\s][^{};]*?(?=\s*\{)/,
          string: { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
          important: /\B!important\b/i,
          function: /[-a-z0-9]+(?=\()/i,
          punctuation: /[(){};:]/
        }),
          (e.languages.css.atrule.inside.rest = e.languages.css),
          e.languages.markup &&
            (e.languages.insertBefore('markup', 'tag', {
              style: {
                pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                lookbehind: !0,
                inside: e.languages.css,
                alias: 'language-css',
                greedy: !0
              }
            }),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    'attr-name': { pattern: /^\s*style/i, inside: e.languages.markup.tag.inside },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    'attr-value': { pattern: /.+/i, inside: e.languages.css }
                  },
                  alias: 'language-css'
                }
              },
              e.languages.markup.tag
            ))
      }
      ;(e.exports = o), (o.displayName = 'css'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ }
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /[a-z0-9_]+(?=\()/i,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'clike'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.javascript = e.languages.extend('clike', {
          keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
          number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
          operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
        })),
          e.languages.insertBefore('javascript', 'keyword', {
            regex: {
              pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
              lookbehind: !0,
              greedy: !0
            },
            'function-variable': {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
              alias: 'function'
            },
            constant: /\b[A-Z][A-Z\d_]*\b/
          }),
          e.languages.insertBefore('javascript', 'string', {
            'template-string': {
              pattern: /`(?:\\[\s\S]|[^\\`])*`/,
              greedy: !0,
              inside: {
                interpolation: {
                  pattern: /\$\{[^}]+\}/,
                  inside: {
                    'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
                    rest: e.languages.javascript
                  }
                },
                string: /[\s\S]+/
              }
            }
          }),
          e.languages.markup &&
            e.languages.insertBefore('markup', 'tag', {
              script: {
                pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: e.languages.javascript,
                alias: 'language-javascript',
                greedy: !0
              }
            }),
          (e.languages.js = e.languages.javascript)
      }
      ;(e.exports = o), (o.displayName = 'javascript'), (o.aliases = ['js'])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.abap = {
          comment: /^\*.*/m,
          string: /(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          'string-template': { pattern: /([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/, lookbehind: !0, alias: 'string' },
          'eol-comment': { pattern: /(^|\s)".*/m, lookbehind: !0, alias: 'comment' },
          keyword: {
            pattern: /(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,
            lookbehind: !0
          },
          number: /\b\d+\b/,
          operator: { pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/, lookbehind: !0 },
          'string-operator': { pattern: /(\s)&&?(?=\s)/, lookbehind: !0, alias: 'keyword' },
          'token-operator': [
            { pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/, lookbehind: !0, alias: 'punctuation' },
            { pattern: /[|{}]/, alias: 'punctuation' }
          ],
          punctuation: /[,.:()]/
        }
      }
      ;(e.exports = o), (o.displayName = 'abap'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.actionscript = e.languages.extend('javascript', {
          keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
        })),
          (e.languages.actionscript['class-name'].alias = 'function'),
          e.languages.markup &&
            e.languages.insertBefore('actionscript', 'string', {
              xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: !0,
                inside: { rest: e.languages.markup }
              }
            })
      }
      ;(e.exports = o), (o.displayName = 'actionscript'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.ada = {
          comment: /--.*/,
          string: /"(?:""|[^"\r\f\n])*"/i,
          number: [
            { pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i },
            { pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i }
          ],
          'attr-name': /\b'\w+/i,
          keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
          boolean: /\b(?:true|false)\b/i,
          operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
          punctuation: /\.\.?|[,;():]/,
          char: /'.'/,
          variable: /\b[a-z](?:[_a-z\d])*\b/i
        }
      }
      ;(e.exports = o), (o.displayName = 'ada'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.apacheconf = {
          comment: /#.*/,
          'directive-inline': {
            pattern: /^(\s*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
            lookbehind: !0,
            alias: 'property'
          },
          'directive-block': {
            pattern: /<\/?\b(?:AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,
            inside: {
              'directive-block': { pattern: /^<\/?\w+/, inside: { punctuation: /^<\/?/ }, alias: 'tag' },
              'directive-block-parameter': {
                pattern: /.*[^>]/,
                inside: {
                  punctuation: /:/,
                  string: { pattern: /("|').*\1/, inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ } }
                },
                alias: 'attr-value'
              },
              punctuation: />/
            },
            alias: 'tag'
          },
          'directive-flags': { pattern: /\[(?:\w,?)+\]/, alias: 'keyword' },
          string: { pattern: /("|').*\1/, inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ } },
          variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
          regex: /\^?.*\$|\^.*\$?/
        }
      }
      ;(e.exports = o), (o.displayName = 'apacheconf'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.apl = {
          comment: /(?:\u235d|#[! ]).*$/m,
          string: { pattern: /'(?:[^'\r\n]|'')*'/, greedy: !0 },
          number: /\xaf?(?:\d*\.?\d+(?:e[+\xaf]?\d+)?|\xaf|\u221e)(?:j\xaf?(?:\d*\.?\d+(?:e[+\xaf]?\d+)?|\xaf|\u221e))?/i,
          statement: /:[A-Z][a-z][A-Za-z]*\b/,
          'system-function': { pattern: /\u2395[A-Z]+/i, alias: 'function' },
          constant: /[\u236c\u233e#\u2395\u235e]/,
          function: /[-+\xd7\xf7\u2308\u230a\u2223|\u2373\u2378?*\u235f\u25cb!\u2339<\u2264=>\u2265\u2260\u2261\u2262\u220a\u2377\u222a\u2229~\u2228\u2227\u2371\u2372\u2374,\u236a\u233d\u2296\u2349\u2191\u2193\u2282\u2283\u2286\u2287\u2337\u234b\u2352\u22a4\u22a5\u2355\u234e\u22a3\u22a2\u2341\u2342\u2248\u236f\u2197\xa4\u2192]/,
          'monadic-operator': { pattern: /[\\\/\u233f\u2340\xa8\u2368\u2336&\u2225]/, alias: 'operator' },
          'dyadic-operator': { pattern: /[.\u2363\u2360\u2364\u2218\u2338@\u233a]/, alias: 'operator' },
          assignment: { pattern: /\u2190/, alias: 'keyword' },
          punctuation: /[\[;\]()\u25c7\u22c4]/,
          dfn: { pattern: /[{}\u237a\u2375\u2376\u2379\u2207\u236b:]/, alias: 'builtin' }
        }
      }
      ;(e.exports = o), (o.displayName = 'apl'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.applescript = {
          comment: [/\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/, /--.+/, /#.+/],
          string: /"(?:\\.|[^"\\\r\n])*"/,
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i,
          operator: [
            /[&=\u2260\u2264\u2265*+\-\/\xf7^]|[<>]=?/,
            /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/
          ],
          keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
          class: {
            pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
            alias: 'builtin'
          },
          punctuation: /[{}():,\xac\xab\xbb\u300a\u300b]/
        }
      }
      ;(e.exports = o), (o.displayName = 'applescript'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(58)
      function a(e) {
        e.register(o),
          (e.languages.arduino = e.languages.extend('cpp', {
            keyword: /\b(?:setup|if|else|while|do|for|return|in|instanceof|default|function|loop|goto|switch|case|new|try|throw|catch|finally|null|break|continue|boolean|bool|void|byte|word|string|String|array|int|long|integer|double)\b/,
            builtin: /\b(?:KeyboardController|MouseController|SoftwareSerial|EthernetServer|EthernetClient|LiquidCrystal|LiquidCrystal_I2C|RobotControl|GSMVoiceCall|EthernetUDP|EsploraTFT|HttpClient|RobotMotor|WiFiClient|GSMScanner|FileSystem|Scheduler|GSMServer|YunClient|YunServer|IPAddress|GSMClient|GSMModem|Keyboard|Ethernet|Console|GSMBand|Esplora|Stepper|Process|WiFiUDP|GSM_SMS|Mailbox|USBHost|Firmata|PImage|Client|Server|GSMPIN|FileIO|Bridge|Serial|EEPROM|Stream|Mouse|Audio|Servo|File|Task|GPRS|WiFi|Wire|TFT|GSM|SPI|SD|runShellCommandAsynchronously|analogWriteResolution|retrieveCallingNumber|printFirmwareVersion|analogReadResolution|sendDigitalPortPair|noListenOnLocalhost|readJoystickButton|setFirmwareVersion|readJoystickSwitch|scrollDisplayRight|getVoiceCallStatus|scrollDisplayLeft|writeMicroseconds|delayMicroseconds|beginTransmission|getSignalStrength|runAsynchronously|getAsynchronously|listenOnLocalhost|getCurrentCarrier|readAccelerometer|messageAvailable|sendDigitalPorts|lineFollowConfig|countryNameWrite|runShellCommand|readStringUntil|rewindDirectory|readTemperature|setClockDivider|readLightSensor|endTransmission|analogReference|detachInterrupt|countryNameRead|attachInterrupt|encryptionType|readBytesUntil|robotNameWrite|readMicrophone|robotNameRead|cityNameWrite|userNameWrite|readJoystickY|readJoystickX|mouseReleased|openNextFile|scanNetworks|noInterrupts|digitalWrite|beginSpeaker|mousePressed|isActionDone|mouseDragged|displayLogos|noAutoscroll|addParameter|remoteNumber|getModifiers|keyboardRead|userNameRead|waitContinue|processInput|parseCommand|printVersion|readNetworks|writeMessage|blinkVersion|cityNameRead|readMessage|setDataMode|parsePacket|isListening|setBitOrder|beginPacket|isDirectory|motorsWrite|drawCompass|digitalRead|clearScreen|serialEvent|rightToLeft|setTextSize|leftToRight|requestFrom|keyReleased|compassRead|analogWrite|interrupts|WiFiServer|disconnect|playMelody|parseFloat|autoscroll|getPINUsed|setPINUsed|setTimeout|sendAnalog|readSlider|analogRead|beginWrite|createChar|motorsStop|keyPressed|tempoWrite|readButton|subnetMask|debugPrint|macAddress|writeGreen|randomSeed|attachGPRS|readString|sendString|remotePort|releaseAll|mouseMoved|background|getXChange|getYChange|answerCall|getResult|voiceCall|endPacket|constrain|getSocket|writeJSON|getButton|available|connected|findUntil|readBytes|exitValue|readGreen|writeBlue|startLoop|IPAddress|isPressed|sendSysex|pauseMode|gatewayIP|setCursor|getOemKey|tuneWrite|noDisplay|loadImage|switchPIN|onRequest|onReceive|changePIN|playFile|noBuffer|parseInt|overflow|checkPIN|knobRead|beginTFT|bitClear|updateIR|bitWrite|position|writeRGB|highByte|writeRed|setSpeed|readBlue|noStroke|remoteIP|transfer|shutdown|hangCall|beginSMS|endWrite|attached|maintain|noCursor|checkReg|checkPUK|shiftOut|isValid|shiftIn|pulseIn|connect|println|localIP|pinMode|getIMEI|display|noBlink|process|getBand|running|beginSD|drawBMP|lowByte|setBand|release|bitRead|prepare|pointTo|readRed|setMode|noFill|remove|listen|stroke|detach|attach|noTone|exists|buffer|height|bitSet|circle|config|cursor|random|IRread|setDNS|endSMS|getKey|micros|millis|begin|print|write|ready|flush|width|isPIN|blink|clear|press|mkdir|rmdir|close|point|yield|image|BSSID|click|delay|read|text|move|peek|beep|rect|line|open|seek|fill|size|turn|stop|home|find|step|tone|sqrt|RSSI|SSID|end|bit|tan|cos|sin|pow|map|abs|max|min|get|run|put)\b/,
            constant: /\b(?:DIGITAL_MESSAGE|FIRMATA_STRING|ANALOG_MESSAGE|REPORT_DIGITAL|REPORT_ANALOG|INPUT_PULLUP|SET_PIN_MODE|INTERNAL2V56|SYSTEM_RESET|LED_BUILTIN|INTERNAL1V1|SYSEX_START|INTERNAL|EXTERNAL|DEFAULT|OUTPUT|INPUT|HIGH|LOW)\b/
          }))
      }
      ;(e.exports = a), (a.displayName = 'arduino'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.arff = {
          comment: /%.*/,
          string: { pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          keyword: /@(?:attribute|data|end|relation)\b/i,
          number: /\b\d+(?:\.\d+)?\b/,
          punctuation: /[{},]/
        }
      }
      ;(e.exports = o), (o.displayName = 'arff'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = {
            pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,
            lookbehind: !0,
            inside: {
              quoted: { pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/, inside: { punctuation: /^[$`]|[$`]$/ } },
              interpreted: { pattern: /'(?:[^'\\]|\\.)*'/, inside: { punctuation: /^'|'$/ } },
              string: /"(?:[^"\\]|\\.)*"/,
              variable: /\w+(?==)/,
              punctuation: /^\[|\]$|,/,
              operator: /=/,
              'attr-value': /(?!^\s+$).+/
            }
          }
          ;(e.languages.asciidoc = {
            'comment-block': { pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m, alias: 'comment' },
            table: {
              pattern: /^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,
              inside: {
                specifiers: {
                  pattern: /(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,
                  alias: 'attr-value'
                },
                punctuation: { pattern: /(^|[^\\])[|!]=*/, lookbehind: !0 }
              }
            },
            'passthrough-block': {
              pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
              inside: { punctuation: /^\++|\++$/ }
            },
            'literal-block': {
              pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
              inside: { punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/ }
            },
            'other-block': {
              pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
              inside: { punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/ }
            },
            'list-punctuation': {
              pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
              lookbehind: !0,
              alias: 'punctuation'
            },
            'list-label': { pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im, lookbehind: !0, alias: 'symbol' },
            'indented-block': { pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/, lookbehind: !0 },
            comment: /^\/\/.*/m,
            title: {
              pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,
              alias: 'important',
              inside: { punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/ }
            },
            'attribute-entry': { pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m, alias: 'tag' },
            attributes: t,
            hr: { pattern: /^'{3,}$/m, alias: 'punctuation' },
            'page-break': { pattern: /^<{3,}$/m, alias: 'punctuation' },
            admonition: { pattern: /^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m, alias: 'keyword' },
            callout: [
              { pattern: /(^[ \t]*)<?\d*>/m, lookbehind: !0, alias: 'symbol' },
              { pattern: /<\d+>/, alias: 'symbol' }
            ],
            macro: {
              pattern: /\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
              inside: {
                function: /^[a-z\d-]+(?=:)/,
                punctuation: /^::?/,
                attributes: { pattern: /(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/, inside: t.inside }
              }
            },
            inline: {
              pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?: ['`]|.)+?(?:(?:\r?\n|\r)(?: ['`]|.)+?)*['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
              lookbehind: !0,
              inside: {
                attributes: t,
                url: {
                  pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
                  inside: { punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/ }
                },
                'attribute-ref': {
                  pattern: /^\{.+\}$/,
                  inside: {
                    variable: { pattern: /(^\{)[a-z\d,+_-]+/, lookbehind: !0 },
                    operator: /^[=?!#%@$]|!(?=[:}])/,
                    punctuation: /^\{|\}$|::?/
                  }
                },
                italic: { pattern: /^(['_])[\s\S]+\1$/, inside: { punctuation: /^(?:''?|__?)|(?:''?|__?)$/ } },
                bold: { pattern: /^\*[\s\S]+\*$/, inside: { punctuation: /^\*\*?|\*\*?$/ } },
                punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
              }
            },
            replacement: { pattern: /\((?:C|TM|R)\)/, alias: 'builtin' },
            entity: /&#?[\da-z]{1,8};/i,
            'line-continuation': { pattern: /(^| )\+$/m, lookbehind: !0, alias: 'punctuation' }
          }),
            (t.inside.interpreted.inside.rest = {
              macro: e.languages.asciidoc.macro,
              inline: e.languages.asciidoc.inline,
              replacement: e.languages.asciidoc.replacement,
              entity: e.languages.asciidoc.entity
            }),
            (e.languages.asciidoc['passthrough-block'].inside.rest = { macro: e.languages.asciidoc.macro }),
            (e.languages.asciidoc['literal-block'].inside.rest = { callout: e.languages.asciidoc.callout }),
            (e.languages.asciidoc.table.inside.rest = {
              'comment-block': e.languages.asciidoc['comment-block'],
              'passthrough-block': e.languages.asciidoc['passthrough-block'],
              'literal-block': e.languages.asciidoc['literal-block'],
              'other-block': e.languages.asciidoc['other-block'],
              'list-punctuation': e.languages.asciidoc['list-punctuation'],
              'indented-block': e.languages.asciidoc['indented-block'],
              comment: e.languages.asciidoc.comment,
              title: e.languages.asciidoc.title,
              'attribute-entry': e.languages.asciidoc['attribute-entry'],
              attributes: e.languages.asciidoc.attributes,
              hr: e.languages.asciidoc.hr,
              'page-break': e.languages.asciidoc['page-break'],
              admonition: e.languages.asciidoc.admonition,
              'list-label': e.languages.asciidoc['list-label'],
              callout: e.languages.asciidoc.callout,
              macro: e.languages.asciidoc.macro,
              inline: e.languages.asciidoc.inline,
              replacement: e.languages.asciidoc.replacement,
              entity: e.languages.asciidoc.entity,
              'line-continuation': e.languages.asciidoc['line-continuation']
            }),
            (e.languages.asciidoc['other-block'].inside.rest = {
              table: e.languages.asciidoc.table,
              'list-punctuation': e.languages.asciidoc['list-punctuation'],
              'indented-block': e.languages.asciidoc['indented-block'],
              comment: e.languages.asciidoc.comment,
              'attribute-entry': e.languages.asciidoc['attribute-entry'],
              attributes: e.languages.asciidoc.attributes,
              hr: e.languages.asciidoc.hr,
              'page-break': e.languages.asciidoc['page-break'],
              admonition: e.languages.asciidoc.admonition,
              'list-label': e.languages.asciidoc['list-label'],
              macro: e.languages.asciidoc.macro,
              inline: e.languages.asciidoc.inline,
              replacement: e.languages.asciidoc.replacement,
              entity: e.languages.asciidoc.entity,
              'line-continuation': e.languages.asciidoc['line-continuation']
            }),
            (e.languages.asciidoc.title.inside.rest = {
              macro: e.languages.asciidoc.macro,
              inline: e.languages.asciidoc.inline,
              replacement: e.languages.asciidoc.replacement,
              entity: e.languages.asciidoc.entity
            }),
            e.hooks.add('wrap', function(e) {
              'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'))
            })
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'asciidoc'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.asm6502 = {
          comment: /;.*/,
          directive: { pattern: /\.\w+(?= )/, alias: 'keyword' },
          string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          opcode: {
            pattern: /\b(?:adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya|ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA)\b/,
            alias: 'property'
          },
          hexnumber: { pattern: /#?\$[\da-f]{2,4}/i, alias: 'string' },
          binarynumber: { pattern: /#?%[01]+/, alias: 'string' },
          decimalnumber: { pattern: /#?\d+/, alias: 'string' },
          register: { pattern: /\b[xya]\b/i, alias: 'variable' }
        }
      }
      ;(e.exports = o), (o.displayName = 'asm6502'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.aspnet = e.languages.extend('markup', {
          'page-directive tag': {
            pattern: /<%\s*@.*%>/i,
            inside: {
              'page-directive tag': /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
              rest: e.languages.markup.tag.inside
            }
          },
          'directive tag': {
            pattern: /<%.*%>/i,
            inside: { 'directive tag': /<%\s*?[$=%#:]{0,2}|%>/i, rest: e.languages.csharp }
          }
        })),
          (e.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
          e.languages.insertBefore(
            'inside',
            'punctuation',
            { 'directive tag': e.languages.aspnet['directive tag'] },
            e.languages.aspnet.tag.inside['attr-value']
          ),
          e.languages.insertBefore('aspnet', 'comment', { 'asp comment': /<%--[\s\S]*?--%>/ }),
          e.languages.insertBefore('aspnet', e.languages.javascript ? 'script' : 'tag', {
            'asp script': {
              pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
              lookbehind: !0,
              inside: e.languages.csharp || {}
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'aspnet'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.autohotkey = {
          comment: { pattern: /(^[^";\n]*("[^"\n]*?"[^"\n]*?)*)(?:;.*$|^\s*\/\*[\s\S]*\n\*\/)/m, lookbehind: !0 },
          string: /"(?:[^"\n\r]|"")*"/m,
          function: /[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+?(?=\()/m,
          tag: /^[ \t]*[^\s:]+?(?=:(?:[^:]|$))/m,
          variable: /%\w+%/,
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
          operator: /\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,
          punctuation: /[{}[\]():,]/,
          boolean: /\b(?:true|false)\b/,
          selector: /\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,
          constant: /\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_formatfloat|a_formatinteger|a_gui|a_guievent|a_guicontrol|a_guicontrolevent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|programfiles|a_programfiles|a_programs|a_programscommon|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel)\b/i,
          builtin: /\b(?:abs|acos|asc|asin|atan|ceil|chr|class|cos|dllcall|exp|fileexist|Fileopen|floor|il_add|il_create|il_destroy|instr|substr|isfunc|islabel|IsObject|ln|log|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|onmessage|numget|numput|registercallback|regexmatch|regexreplace|round|sin|tan|sqrt|strlen|sb_seticon|sb_setparts|sb_settext|strsplit|tv_add|tv_delete|tv_getchild|tv_getcount|tv_getnext|tv_get|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__New|__Call|__Get|__Set)\b/i,
          symbol: /\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,
          important: /#\b(?:AllowSameLineComments|ClipboardTimeout|CommentFlag|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InstallKeybdHook|InstallMouseHook|KeyHistory|LTrim|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|WinActivateForce)\b/i,
          keyword: /\b(?:Abort|AboveNormal|Add|ahk_class|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Region|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|TryAgain|Type|UnCheck|underline|Unicode|Unlock|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i
        }
      }
      ;(e.exports = o), (o.displayName = 'autohotkey'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.autoit = {
          comment: [
            /;.*/,
            { pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m, lookbehind: !0 }
          ],
          url: { pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m, lookbehind: !0 },
          string: { pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/, greedy: !0, inside: { variable: /([%$@])\w+\1/ } },
          directive: { pattern: /(^\s*)#\w+/m, lookbehind: !0, alias: 'keyword' },
          function: /\b\w+(?=\()/,
          variable: /[$@]\w+/,
          keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
          number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
          boolean: /\b(?:True|False)\b/i,
          operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
          punctuation: /[\[\]().,:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'autoit'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = {
            variable: [
              {
                pattern: /\$?\(\([\s\S]+?\)\)/,
                inside: {
                  variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                  operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                  punctuation: /\(\(?|\)\)?|,|;/
                }
              },
              { pattern: /\$\([^)]+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } },
              /\$(?:[\w#?*!@]+|\{[^}]+\})/i
            ]
          }
          e.languages.bash = {
            shebang: { pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 },
            string: [
              {
                pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
                lookbehind: !0,
                greedy: !0,
                inside: t
              },
              { pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/, greedy: !0, inside: t }
            ],
            variable: t.variable,
            function: {
              pattern: /(^|[\s;|&])(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|[\s;|&])/,
              lookbehind: !0
            },
            keyword: {
              pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
              lookbehind: !0
            },
            boolean: { pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/, lookbehind: !0 },
            operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
          }
          var n = t.variable[1].inside
          ;(n.string = e.languages.bash.string),
            (n.function = e.languages.bash.function),
            (n.keyword = e.languages.bash.keyword),
            (n.boolean = e.languages.bash.boolean),
            (n.operator = e.languages.bash.operator),
            (n.punctuation = e.languages.bash.punctuation),
            (e.languages.shell = e.languages.bash)
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'bash'), (o.aliases = ['shell'])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.basic = {
          comment: { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
          string: { pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i, greedy: !0 },
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
          keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
          function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
          operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
          punctuation: /[,;:()]/
        }
      }
      ;(e.exports = o), (o.displayName = 'basic'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = /%%?[~:\w]+%?|!\S+!/,
            n = {
              pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
              alias: 'attr-name',
              inside: { punctuation: /:/ }
            },
            o = /"[^"]*"/,
            a = /(?:\b|-)\d+\b/
          e.languages.batch = {
            comment: [
              /^::.*/m,
              { pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im, lookbehind: !0 }
            ],
            label: { pattern: /^:.*/m, alias: 'property' },
            command: [
              {
                pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
                lookbehind: !0,
                inside: {
                  keyword: /^for\b|\b(?:in|do)\b/i,
                  string: o,
                  parameter: n,
                  variable: t,
                  number: a,
                  punctuation: /[()',]/
                }
              },
              {
                pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
                lookbehind: !0,
                inside: {
                  keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
                  string: o,
                  parameter: n,
                  variable: t,
                  number: a,
                  operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
                }
              },
              { pattern: /((?:^|[&()])[ \t]*)else\b/im, lookbehind: !0, inside: { keyword: /^else\b/i } },
              {
                pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                inside: {
                  keyword: /^set\b/i,
                  string: o,
                  parameter: n,
                  variable: [t, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                  number: a,
                  operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                  punctuation: /[()',]/
                }
              },
              {
                pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                inside: {
                  keyword: /^\w+\b/i,
                  string: o,
                  parameter: n,
                  label: { pattern: /(^\s*):\S+/m, lookbehind: !0, alias: 'property' },
                  variable: t,
                  number: a,
                  operator: /\^/
                }
              }
            ],
            operator: /[&@]/,
            punctuation: /[()']/
          }
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'batch'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(37)
      function a(e) {
        e.register(o),
          (e.languages.bison = e.languages.extend('c', {})),
          e.languages.insertBefore('bison', 'comment', {
            bison: {
              pattern: /^[\s\S]*?%%[\s\S]*?%%/,
              inside: {
                c: {
                  pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
                  inside: {
                    delimiter: { pattern: /^%?\{|%?\}$/, alias: 'punctuation' },
                    'bison-variable': {
                      pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                      alias: 'variable',
                      inside: { punctuation: /<|>/ }
                    },
                    rest: e.languages.c
                  }
                },
                comment: e.languages.c.comment,
                string: e.languages.c.string,
                property: /\S+(?=:)/,
                keyword: /%\w+/,
                number: { pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i, lookbehind: !0 },
                punctuation: /%[%?]|[|:;\[\]<>]/
              }
            }
          })
      }
      ;(e.exports = a), (a.displayName = 'bison'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.brainfuck = {
          pointer: { pattern: /<|>/, alias: 'keyword' },
          increment: { pattern: /\+/, alias: 'inserted' },
          decrement: { pattern: /-/, alias: 'deleted' },
          branching: { pattern: /\[|\]/, alias: 'important' },
          operator: /[.,]/,
          comment: /\S+/
        }
      }
      ;(e.exports = o), (o.displayName = 'brainfuck'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.bro = {
          comment: { pattern: /(^|[^\\$])#.*/, lookbehind: !0, inside: { italic: /\b(?:TODO|FIXME|XXX)\b/ } },
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          boolean: /\b[TF]\b/,
          function: {
            pattern: /(?:function|hook|event) \w+(?:::\w+)?/,
            inside: { keyword: /^(?:function|hook|event)/ }
          },
          variable: { pattern: /(?:global|local) \w+/i, inside: { keyword: /(?:global|local)/ } },
          builtin: /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,
          constant: { pattern: /const \w+/i, inside: { keyword: /const/ } },
          keyword: /\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          punctuation: /[{}[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'bro'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.clojure = {
          comment: /;+.*/,
          string: /"(?:\\.|[^\\"\r\n])*"/,
          operator: /(?:::|[:|'])\b[a-z][\w*+!?-]*\b/i,
          keyword: {
            pattern: /([^\w+*'?-])(?:def|if|do|let|\.\.|quote|var|->>|->|fn|loop|recur|throw|try|monitor-enter|\.|new|set!|def\-|defn|defn\-|defmacro|defmulti|defmethod|defstruct|defonce|declare|definline|definterface|defprotocol|==|defrecord|>=|deftype|<=|defproject|ns|\*|\+|\-|\/|<|=|>|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|conj|cons|constantly|cond|if-not|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|deref|difference|disj|dissoc|distinct|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|for|fnseq|frest|gensym|get-proxy-class|get|hash-map|hash-set|identical\?|identity|if-let|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|line-seq|list\*|list|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|time|to-array|to-array-2d|tree-seq|true\?|union|up|update-proxy|val|vals|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[^\w+*'?-])/,
            lookbehind: !0
          },
          boolean: /\b(?:true|false|nil)\b/,
          number: /\b[0-9A-Fa-f]+\b/,
          punctuation: /[{}\[\](),]/
        }
      }
      ;(e.exports = o), (o.displayName = 'clojure'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: 'variable' }
          ;(e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: n } }
            ],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' }
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
              'block-regex': { pattern: /\/{3}[\s\S]*?\/{3}/, alias: 'regex', inside: { comment: t, interpolation: n } }
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: { delimiter: { pattern: /^`|`$/, alias: 'punctuation' }, rest: e.languages.javascript }
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: 'string', inside: { interpolation: n } }
              ]
            }),
            e.languages.insertBefore('coffeescript', 'keyword', { property: /(?!\d)\w+(?=\s*:(?!:))/ }),
            delete e.languages.coffeescript['template-string']
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'coffeescript'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(59)
      function a(e) {
        e.register(o),
          (function(e) {
            ;(e.languages.crystal = e.languages.extend('ruby', {
              keyword: [
                /\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,
                { pattern: /(\.\s*)(?:is_a|responds_to)\?/, lookbehind: !0 }
              ],
              number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
            })),
              e.languages.insertBefore('crystal', 'string', {
                attribute: {
                  pattern: /@\[.+?\]/,
                  alias: 'attr-name',
                  inside: { delimiter: { pattern: /^@\[|\]$/, alias: 'tag' }, rest: e.languages.crystal }
                },
                expansion: [
                  {
                    pattern: /\{\{.+?\}\}/,
                    inside: { delimiter: { pattern: /^\{\{|\}\}$/, alias: 'tag' }, rest: e.languages.crystal }
                  },
                  {
                    pattern: /\{%.+?%\}/,
                    inside: { delimiter: { pattern: /^\{%|%\}$/, alias: 'tag' }, rest: e.languages.crystal }
                  }
                ]
              })
          })(e)
      }
      ;(e.exports = a), (a.displayName = 'crystal'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.csharp = e.languages.extend('clike', {
          keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
          string: [
            { pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
            { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/, greedy: !0 }
          ],
          'class-name': [
            { pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/, inside: { punctuation: /\./ } },
            { pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/, lookbehind: !0, inside: { punctuation: /\./ } },
            {
              pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ }
            },
            {
              pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
              lookbehind: !0,
              inside: { punctuation: /\./ }
            }
          ],
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i
        })),
          e.languages.insertBefore('csharp', 'class-name', {
            'generic-method': {
              pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
              inside: {
                function: /^\w+/,
                'class-name': { pattern: /\b[A-Z]\w*(?:\.\w+)*\b/, inside: { punctuation: /\./ } },
                keyword: e.languages.csharp.keyword,
                punctuation: /[<>(),.:]/
              }
            },
            preprocessor: {
              pattern: /(^\s*)#.*/m,
              lookbehind: !0,
              alias: 'property',
              inside: {
                directive: {
                  pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                  lookbehind: !0,
                  alias: 'keyword'
                }
              }
            }
          }),
          (e.languages.dotnet = e.languages.csharp)
      }
      ;(e.exports = o), (o.displayName = 'csharp'), (o.aliases = ['dotnet'])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.csp = {
          directive: {
            pattern: /\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,
            alias: 'keyword'
          },
          safe: {
            pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\d+=/]+)'/,
            alias: 'selector'
          },
          unsafe: { pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\*)/, alias: 'function' }
        }
      }
      ;(e.exports = o), (o.displayName = 'csp'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.css.selector = {
          pattern: /[^{}\s][^{}]*(?=\s*\{)/,
          inside: {
            'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            'pseudo-class': /:[-\w]+(?:\(.*\))?/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: /\[[^\]]+\]/
          }
        }),
          e.languages.insertBefore('css', 'function', {
            hexcode: /#[\da-f]{3,8}/i,
            entity: /\\[\da-f]{1,8}/i,
            number: /[\d%.]+/
          })
      }
      ;(e.exports = o), (o.displayName = 'cssExtras'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.d = e.languages.extend('clike', {
          string: [
            /\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/,
            /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/,
            /\bq"([_a-zA-Z][_a-zA-Z\d]*)(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\1"/,
            /\bq"(.)[\s\S]*?\1"/,
            /'(?:\\'|\\?[^']+)'/,
            /(["`])(?:\\[\s\S]|(?!\1)[^\\])*\1[cwd]?/
          ],
          number: [
            /\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i,
            {
              pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,
              lookbehind: !0
            }
          ],
          keyword: /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
          operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
        })),
          (e.languages.d.comment = [
            /^\s*#!.+/,
            { pattern: /(^|[^\\])\/\+(?:\/\+[\s\S]*?\+\/|[\s\S])*?\+\//, lookbehind: !0 }
          ].concat(e.languages.d.comment)),
          e.languages.insertBefore('d', 'comment', {
            'token-string': { pattern: /\bq\{(?:\{[^}]*\}|[^}])*\}/, alias: 'string' }
          }),
          e.languages.insertBefore('d', 'keyword', { property: /\B@\w*/ }),
          e.languages.insertBefore('d', 'function', {
            register: {
              pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
              alias: 'variable'
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'd'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.dart = e.languages.extend('clike', {
          string: [
            { pattern: /r?("""|''')[\s\S]*?\1/, greedy: !0 },
            { pattern: /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
          ],
          keyword: [
            /\b(?:async|sync|yield)\*/,
            /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/
          ],
          operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
        })),
          e.languages.insertBefore('dart', 'function', { metadata: { pattern: /@\w+/, alias: 'symbol' } })
      }
      ;(e.exports = o), (o.displayName = 'dart'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.diff = {
          coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
          deleted: /^[-<].*$/m,
          inserted: /^[+>].*$/m,
          diff: { pattern: /^!(?!!).+$/m, alias: 'important' }
        }
      }
      ;(e.exports = o), (o.displayName = 'diff'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        var t = {
          property: {
            pattern: /(?:{{|{%)[\s\S]*?(?:%}|}})/g,
            greedy: !0,
            inside: {
              string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
              keyword: /\b(?:\||load|verbatim|widthratio|ssi|firstof|for|url|ifchanged|csrf_token|lorem|ifnotequal|autoescape|now|templatetag|debug|cycle|ifequal|regroup|comment|filter|endfilter|if|spaceless|with|extends|block|include|else|empty|endif|endfor|as|endblock|endautoescape|endverbatim|trans|endtrans|[Tt]rue|[Ff]alse|[Nn]one|in|is|static|macro|endmacro|call|endcall|set|endset|raw|endraw)\b/,
              operator: /[-+=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
              function: /\b(?:_|abs|add|addslashes|attr|batch|callable|capfirst|capitalize|center|count|cut|d|date|default|default_if_none|defined|dictsort|dictsortreversed|divisibleby|e|equalto|escape|escaped|escapejs|even|filesizeformat|first|float|floatformat|force_escape|forceescape|format|get_digit|groupby|indent|int|iriencode|iterable|join|last|length|length_is|linebreaks|linebreaksbr|linenumbers|list|ljust|lower|make_list|map|mapping|number|odd|phone2numeric|pluralize|pprint|random|reject|rejectattr|removetags|replace|reverse|rjust|round|safe|safeseq|sameas|select|selectattr|sequence|slice|slugify|sort|string|stringformat|striptags|sum|time|timesince|timeuntil|title|trim|truncate|truncatechars|truncatechars_html|truncatewords|truncatewords_html|undefined|unordered_list|upper|urlencode|urlize|urlizetrunc|wordcount|wordwrap|xmlattr|yesno)\b/,
              important: /\b-?\d+(?:\.\d+)?\b/,
              variable: /\b\w+?\b/,
              punctuation: /[[\];(),.:]/
            }
          }
        }
        ;(e.languages.django = e.languages.extend('markup', { comment: /(?:<!--|{#)[\s\S]*?(?:#}|-->)/ })),
          (e.languages.django.tag.pattern = /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^>=]+))?)*\s*\/?>/i),
          e.languages.insertBefore('django', 'entity', t),
          e.languages.insertBefore('inside', 'tag', t, e.languages.django.tag),
          e.languages.javascript &&
            (e.languages.insertBefore('inside', 'string', t, e.languages.django.script),
            (e.languages.django.script.inside.string.inside = t)),
          e.languages.css &&
            (e.languages.insertBefore('inside', 'atrule', { tag: t.property }, e.languages.django.style),
            (e.languages.django.style.inside.string.inside = t)),
          (e.languages.jinja2 = e.languages.django)
      }
      ;(e.exports = o), (o.displayName = 'django'), (o.aliases = ['jinja2'])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.docker = {
          keyword: {
            pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
            lookbehind: !0
          },
          string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
          comment: /#.*/,
          punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
        }),
          (e.languages.dockerfile = e.languages.docker)
      }
      ;(e.exports = o), (o.displayName = 'docker'), (o.aliases = ['dockerfile'])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.eiffel = {
          comment: /--.*/,
          string: [
            { pattern: /"([^[]*)\[[\s\S]*?\]\1"/, greedy: !0 },
            { pattern: /"([^{]*)\{[\s\S]*?\}\1"/, greedy: !0 },
            { pattern: /"(?:%\s+%|%.|[^%"\r\n])*"/, greedy: !0 }
          ],
          char: /'(?:%.|[^%'\r\n])+'/,
          keyword: /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
          boolean: /\b(?:True|False)\b/i,
          'class-name': { pattern: /\b[A-Z][\dA-Z_]*\b/, alias: 'builtin' },
          number: [
            /\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
            /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/i
          ],
          punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
          operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
        }
      }
      ;(e.exports = o), (o.displayName = 'eiffel'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.elixir = {
          comment: { pattern: /#.*/m, lookbehind: !0 },
          regex: {
            pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,
            greedy: !0
          },
          string: [
            {
              pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,
              greedy: !0,
              inside: {}
            },
            { pattern: /("""|''')[\s\S]*?\1/, greedy: !0, inside: {} },
            { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0, inside: {} }
          ],
          atom: { pattern: /(^|[^:]):\w+/, lookbehind: !0, alias: 'symbol' },
          'attr-name': /\w+:(?!:)/,
          capture: { pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/, lookbehind: !0, alias: 'function' },
          argument: { pattern: /(^|[^&])&\d+/, lookbehind: !0, alias: 'variable' },
          attribute: { pattern: /@[\S]+/, alias: 'variable' },
          number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
          keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
          boolean: /\b(?:true|false|nil)\b/,
          operator: [
            /\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,
            { pattern: /([^<])<(?!<)/, lookbehind: !0 },
            { pattern: /([^>])>(?!>)/, lookbehind: !0 }
          ],
          punctuation: /<<|>>|[.,%\[\]{}()]/
        }),
          e.languages.elixir.string.forEach(function(t) {
            t.inside = {
              interpolation: {
                pattern: /#\{[^}]+\}/,
                inside: { delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' }, rest: e.languages.elixir }
              }
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'elixir'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.elm = {
          comment: /--.*|{-[\s\S]*?-}/,
          char: { pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/, greedy: !0 },
          string: [
            { pattern: /"""[\s\S]*?"""/, greedy: !0 },
            { pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/, greedy: !0 }
          ],
          import_statement: {
            pattern: /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+([A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
            inside: { keyword: /\b(?:import|as|exposing)\b/ }
          },
          keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
          builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
          number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
          operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
          hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
          constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
          punctuation: /[{}[\]|(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'elm'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(59)
      function a(e) {
        e.register(o),
          (function(e) {
            ;(e.languages.erb = e.languages.extend('ruby', {})),
              e.languages.insertBefore('erb', 'comment', { delimiter: { pattern: /^<%=?|%>$/, alias: 'punctuation' } }),
              e.hooks.add('before-tokenize', function(t) {
                e.languages['markup-templating'].buildPlaceholders(t, 'erb', /<%=?[\s\S]+?%>/g)
              }),
              e.hooks.add('after-tokenize', function(t) {
                e.languages['markup-templating'].tokenizePlaceholders(t, 'erb')
              })
          })(e)
      }
      ;(e.exports = a), (a.displayName = 'erb'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.erlang = {
          comment: /%.+/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          'quoted-function': { pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/, alias: 'function' },
          'quoted-atom': { pattern: /'(?:\\.|[^\\'\r\n])+'/, alias: 'atom' },
          boolean: /\b(?:true|false)\b/,
          keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
          number: [/\$\\?./, /\d+#[a-z0-9]+/i, /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i],
          function: /\b[a-z][\w@]*(?=\()/,
          variable: { pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/, lookbehind: !0 },
          operator: [
            /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
            { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
            { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 }
          ],
          atom: /\b[a-z][\w@]*/,
          punctuation: /[()[\]{}:;,.#|]|<<|>>/
        }
      }
      ;(e.exports = o), (o.displayName = 'erlang'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          ;(e.languages.flow = e.languages.extend('javascript', {})),
            e.languages.insertBefore('flow', 'keyword', {
              type: [{ pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/, alias: 'tag' }]
            }),
            (e.languages.flow[
              'function-variable'
            ].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i),
            e.languages.insertBefore('flow', 'operator', {
              'flow-punctuation': { pattern: /\{\||\|\}/, alias: 'punctuation' }
            }),
            'Array' !== e.util.type(e.languages.flow.keyword) &&
              (e.languages.flow.keyword = [e.languages.flow.keyword]),
            e.languages.flow.keyword.unshift(
              { pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/, lookbehind: !0 },
              {
                pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                lookbehind: !0
              }
            )
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'flow'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.fortran = {
          'quoted-number': { pattern: /[BOZ](['"])[A-F0-9]+\1/i, alias: 'number' },
          string: {
            pattern: /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/,
            inside: { comment: { pattern: /(&(?:\r\n?|\n)\s*)!.*/, lookbehind: !0 } }
          },
          comment: { pattern: /!.*/, greedy: !0 },
          boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
          number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
          keyword: [
            /\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i,
            /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,
            /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,
            /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i
          ],
          operator: [
            /\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i,
            { pattern: /(^|(?!\().)\/(?!\))/, lookbehind: !0 }
          ],
          punctuation: /\(\/|\/\)|[(),;:&]/
        }
      }
      ;(e.exports = o), (o.displayName = 'fortran'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.fsharp = e.languages.extend('clike', {
          comment: [
            { pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }
          ],
          keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
          string: { pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1)B?/, greedy: !0 },
          number: [
            /\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,
            /\b0b[01]+(?:y|uy)?\b/,
            /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
            /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/
          ]
        })),
          e.languages.insertBefore('fsharp', 'keyword', {
            preprocessor: {
              pattern: /^[^\r\n\S]*#.*/m,
              alias: 'property',
              inside: {
                directive: {
                  pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,
                  lookbehind: !0,
                  alias: 'keyword'
                }
              }
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'fsharp'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.gedcom = {
          'line-value': {
            pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
            lookbehind: !0,
            inside: {
              pointer: { pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/, alias: 'variable' }
            }
          },
          tag: {
            pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
            lookbehind: !0,
            alias: 'string'
          },
          level: { pattern: /(^\s*)\d+/m, lookbehind: !0, alias: 'number' },
          pointer: { pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/, alias: 'variable' }
        }
      }
      ;(e.exports = o), (o.displayName = 'gedcom'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.gherkin = {
          pystring: { pattern: /("""|''')[\s\S]+?\1/, alias: 'string' },
          comment: { pattern: /((?:^|\r?\n|\r)[ \t]*)#.*/, lookbehind: !0 },
          tag: { pattern: /((?:^|\r?\n|\r)[ \t]*)@\S*/, lookbehind: !0 },
          feature: {
            pattern: /((?:^|\r?\n|\r)[ \t]*)(?:Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Caracter\xedstica|Egenskab|Egenskap|Eiginleiki|Feature|F\u012b\u010da|Fitur|Fonctionnalit\xe9|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Func\u0163ionalitate|Func\u021bionalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalit\u0101te|Funkcionalnost|Funkcja|Funksie|Funktionalit\xe4t|Funktionalit\xe9it|Funzionalit\xe0|Hwaet|Hw\xe6t|Jellemz\u0151|Karakteristik|laH|Lastnost|Mak|Mogucnost|Mogu\u0107nost|Moznosti|Mo\u017enosti|OH HAI|Omadus|Ominaisuus|Osobina|\xd6zellik|perbogh|poQbogh malja'|Potrzeba biznesowa|Po\u017eadavek|Po\u017eiadavka|Pretty much|Qap|Qu'meH 'ut|Savyb\u0117|T\xednh n\u0103ng|Trajto|Vermo\xeb|Vlastnos\u0165|W\u0142a\u015bciwo\u015b\u0107|Zna\u010dilnost|\u0394\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1|\u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1|\u041c\u043e\u0433\u0443\u045b\u043d\u043e\u0441\u0442|\u041c\u04e9\u043c\u043a\u0438\u043d\u043b\u0435\u043a|\u041e\u0441\u043e\u0431\u0438\u043d\u0430|\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e|\u04ae\u0437\u0435\u043d\u0447\u04d9\u043b\u0435\u043a\u043b\u0435\u043b\u0435\u043a|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442|\u0424\u0443\u043d\u043a\u0446\u0438\u044f|\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b|\u05ea\u05db\u05d5\u05e0\u05d4|\u062e\u0627\u0635\u064a\u0629|\u062e\u0635\u0648\u0635\u06cc\u062a|\u0635\u0644\u0627\u062d\u06cc\u062a|\u06a9\u0627\u0631\u0648\u0628\u0627\u0631 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a|\u0648\u0650\u06cc\u0698\u06af\u06cc|\u0930\u0942\u092a \u0932\u0947\u0916|\u0a16\u0a3e\u0a38\u0a40\u0a05\u0a24|\u0a28\u0a15\u0a36 \u0a28\u0a41\u0a39\u0a3e\u0a30|\u0a2e\u0a41\u0a39\u0a3e\u0a02\u0a26\u0a30\u0a3e|\u0c17\u0c41\u0c23\u0c2e\u0c41|\u0cb9\u0cc6\u0c9a\u0ccd\u0c9a\u0cb3|\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e32\u0e07\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08|\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16|\u0e42\u0e04\u0e23\u0e07\u0e2b\u0e25\u0e31\u0e01|\uae30\ub2a5|\u30d5\u30a3\u30fc\u30c1\u30e3|\u529f\u80fd|\u6a5f\u80fd):(?:[^:]+(?:\r?\n|\r|$))*/,
            lookbehind: !0,
            inside: { important: { pattern: /(:)[^\r\n]+/, lookbehind: !0 }, keyword: /[^:\r\n]+:/ }
          },
          scenario: {
            pattern: /((?:^|\r?\n|\r)[ \t]*)(?:Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|\xc6r|Agtergrond|All y'all|Antecedentes|Antecedents|Atbur\xf0ar\xe1s|Atbur\xf0ar\xe1sir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|B\u1ed1i c\u1ea3nh|Cefndir|Cenario|Cen\xe1rio|Cenario de Fundo|Cen\xe1rio de Fundo|Cenarios|Cen\xe1rios|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|D\xe6mi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delinea\xe7\xe3o do Cen\xe1rio|Dis is what went down|D\u1eef li\u1ec7u|Dyagram senaryo|Dyagram Senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cen\xe1rio|Examples|EXAMPLZ|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgat\xf3k\xf6nyv|Forgat\xf3k\xf6nyv v\xe1zlat|Fundo|Ge\xe7mi\u015f|ghantoH|Grundlage|Hannergrond|H\xe1tt\xe9r|Heave to|Istorik|Juhtumid|Keadaan|Khung k\u1ecbch b\u1ea3n|Khung t\xecnh hu\u1ed1ng|K\u1ecbch b\u1ea3n|Koncept|Konsep skenario|Kont\xe8ks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut|lut chovnatlh|lutmey|L\xfdsing Atbur\xf0ar\xe1sar|L\xfdsing D\xe6ma|Menggariskan Senario|MISHUN|MISHUN SRSLY|mo'|N\xe1\u010drt Scen\xe1ra|N\xe1\u010drt Sc\xe9n\xe1\u0159e|N\xe1\u010drt Scen\xe1ru|Oris scenarija|\xd6rnekler|Osnova|Osnova Scen\xe1ra|Osnova sc\xe9n\xe1\u0159e|Osnutek|Ozadje|Paraugs|Pavyzd\u017eiai|P\xe9ld\xe1k|Piem\u0113ri|Plan du sc\xe9nario|Plan du Sc\xe9nario|Plan senaryo|Plan Senaryo|Plang vum Szenario|Pozad\xed|Pozadie|Pozadina|Pr\xedklady|P\u0159\xedklady|Primer|Primeri|Primjeri|Przyk\u0142ady|Raamstsenaarium|Reckon it's like|Rerefons|Scen\xe1r|Sc\xe9n\xe1\u0159|Scenarie|Scenarij|Scenarijai|Scenarijaus \u0161ablonas|Scenariji|Scen\u0101rijs|Scen\u0101rijs p\u0113c parauga|Scenarijus|Scenario|Sc\xe9nario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se \xf0e|Se the|Se \xfee|Senario|Senaryo|Senaryo deskripsyon|Senaryo Deskripsyon|Senaryo tasla\u011f\u0131|Shiver me timbers|Situ\u0101cija|Situai|Situasie|Situasie Uiteensetting|Skenario|Skenario konsep|Skica|Structura scenariu|Structur\u0103 scenariu|Struktura scenarija|Stsenaarium|Swa|Swa hwaer swa|Swa hw\xe6r swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|T\xecnh hu\u1ed1ng|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo\-ho\-ho|You'll wanna|Za\u0142o\u017cenia|\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1|\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03a3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03b1|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03bf|\u03a5\u03c0\u03cc\u03b2\u03b1\u03b8\u03c1\u03bf|\u041a\u0435\u0440\u0435\u0448|\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442|\u041a\u043e\u043d\u0446\u0435\u043f\u0442|\u041c\u0438\u0441\u0430\u043b\u043b\u0430\u0440|\u041c\u0438\u0441\u043e\u043b\u043b\u0430\u0440|\u041e\u0441\u043d\u043e\u0432\u0430|\u041f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0430|\u041f\u043e\u0437\u0430\u0434\u0438\u043d\u0430|\u041f\u0440\u0435\u0434\u0438\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0435\u0434\u044b\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438|\u041f\u0440\u0438\u043c\u0435\u0440|\u041f\u0440\u0438\u043c\u0435\u0440\u0438|\u041f\u0440\u0438\u043c\u0435\u0440\u044b|\u0420\u0430\u043c\u043a\u0430 \u043d\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u0421\u043a\u0438\u0446\u0430|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0430|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0456\u044e|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0441\u0438|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439\u043d\u044b\u04a3 \u0442\u04e9\u0437\u0435\u043b\u0435\u0448\u0435|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0438|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u043e|\u0421\u0446\u0435\u043d\u0430\u0440\u0456\u0439|\u0422\u0430\u0440\u0438\u0445|\u04ae\u0440\u043d\u04d9\u043a\u043b\u04d9\u0440|\u05d3\u05d5\u05d2\u05de\u05d0\u05d5\u05ea|\u05e8\u05e7\u05e2|\u05ea\u05d1\u05e0\u05d9\u05ea \u05ea\u05e8\u05d7\u05d9\u05e9|\u05ea\u05e8\u05d7\u05d9\u05e9|\u0627\u0644\u062e\u0644\u0641\u064a\u0629|\u0627\u0644\u06af\u0648\u06cc \u0633\u0646\u0627\u0631\u06cc\u0648|\u0627\u0645\u062b\u0644\u0629|\u067e\u0633 \u0645\u0646\u0638\u0631|\u0632\u0645\u06cc\u0646\u0647|\u0633\u0646\u0627\u0631\u06cc\u0648|\u0633\u064a\u0646\u0627\u0631\u064a\u0648|\u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0645\u062e\u0637\u0637|\u0645\u062b\u0627\u0644\u06cc\u06ba|\u0645\u0646\u0638\u0631 \u0646\u0627\u0645\u06d2 \u06a9\u0627 \u062e\u0627\u06a9\u06c1|\u0645\u0646\u0638\u0631\u0646\u0627\u0645\u06c1|\u0646\u0645\u0648\u0646\u0647 \u0647\u0627|\u0909\u0926\u093e\u0939\u0930\u0923|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f \u0930\u0942\u092a\u0930\u0947\u0916\u093e|\u092a\u0943\u0937\u094d\u0920\u092d\u0942\u092e\u093f|\u0a09\u0a26\u0a3e\u0a39\u0a30\u0a28\u0a3e\u0a02|\u0a2a\u0a1f\u0a15\u0a25\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a22\u0a3e\u0a02\u0a1a\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a30\u0a42\u0a2a \u0a30\u0a47\u0a16\u0a3e|\u0a2a\u0a3f\u0a1b\u0a4b\u0a15\u0a5c|\u0c09\u0c26\u0c3e\u0c39\u0c30\u0c23\u0c32\u0c41|\u0c15\u0c25\u0c28\u0c02|\u0c28\u0c47\u0c2a\u0c25\u0c4d\u0c2f\u0c02|\u0c38\u0c28\u0c4d\u0c28\u0c3f\u0c35\u0c47\u0c36\u0c02|\u0c89\u0ca6\u0cbe\u0cb9\u0cb0\u0ca3\u0cc6\u0c97\u0cb3\u0cc1|\u0c95\u0ca5\u0cbe\u0cb8\u0cbe\u0cb0\u0cbe\u0c82\u0cb6|\u0cb5\u0cbf\u0cb5\u0cb0\u0ca3\u0cc6|\u0cb9\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6\u0cb2\u0cc6|\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14|\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\ubc30\uacbd|\uc2dc\ub098\ub9ac\uc624|\uc2dc\ub098\ub9ac\uc624 \uac1c\uc694|\uc608|\u30b5\u30f3\u30d7\u30eb|\u30b7\u30ca\u30ea\u30aa|\u30b7\u30ca\u30ea\u30aa\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8|\u30c6\u30f3\u30d7\u30ec|\u4f8b|\u4f8b\u5b50|\u5267\u672c|\u5267\u672c\u5927\u7eb2|\u5287\u672c|\u5287\u672c\u5927\u7db1|\u573a\u666f|\u573a\u666f\u5927\u7eb2|\u5834\u666f|\u5834\u666f\u5927\u7db1|\u80cc\u666f):[^:\r\n]*/,
            lookbehind: !0,
            inside: { important: { pattern: /(:)[^\r\n]*/, lookbehind: !0 }, keyword: /[^:\r\n]+:/ }
          },
          'table-body': {
            pattern: /((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)+/,
            lookbehind: !0,
            inside: {
              outline: { pattern: /<[^>]+?>/, alias: 'variable' },
              td: { pattern: /\s*[^\s|][^|]*/, alias: 'string' },
              punctuation: /\|/
            }
          },
          'table-head': {
            pattern: /(?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*/,
            inside: { th: { pattern: /\s*[^\s|][^|]*/, alias: 'variable' }, punctuation: /\|/ }
          },
          atrule: {
            pattern: /((?:\r?\n|\r)[ \t]+)(?:'ach|'a|'ej|7|a|A tak\xe9|A taktie\u017e|A tie\u017e|A z\xe1rove\u0148|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|At\xe8s|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Bi\u1ebft|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|C\xe2nd|Cando|Cand|Ce|Cuando|\u010ce|\xd0a \xf0e|\xd0a|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Da\u0163i fiind|Da\u021bi fiind|Dato|DEN|Den youse gotta|Dengan|De|Diberi|Diyelim ki|Donada|Donat|Donita\u0135o|Do|Dun|Duota|\xd0urh|Eeldades|Ef|E\u011fer ki|Entao|Ent\xe3o|Ent\xf3n|Entonces|En|Epi|E|\xc9s|Etant donn\xe9e|Etant donn\xe9|Et|\xc9tant donn\xe9es|\xc9tant donn\xe9e|\xc9tant donn\xe9|Etant donn\xe9es|Etant donn\xe9s|\xc9tant donn\xe9s|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Je\u015bli|Je\u017celi|Kadar|Kada|Kad|Kai|Kaj|Kdy\u017e|Ke\u010f|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|L\xe8 sa a|L\xe8|Logo|Lorsqu'<|Lorsque|m\xe4|Maar|Mais|Maj\u0105c|Majd|Maka|Manawa|Mas|Ma|Menawa|Men|Mutta|Nalikaning|Nalika|Nanging|N\xe5r|N\xe4r|Nato|Nh\u01b0ng|Niin|Njuk|O zaman|Og|Och|Oletetaan|Onda|Ond|Oraz|Pak|Pero|Per\xf2|Podano|Pokia\u013e|Pokud|Potem|Potom|Privzeto|Pryd|qaSDI'|Quando|Quand|Quan|S\xe5|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|\u015ei|\u0218i|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Th\xec|Thurh|Toda|Too right|ugeholl|Und|Un|V\xe0|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za p\u0159edpokladu|Zadani|Zadano|Zadan|Zadate|Zadato|Zak\u0142adaj\u0105c|Zaradi|Zatati|\xdea \xfee|\xdea|\xde\xe1|\xdeegar|\xdeurh|\u0391\u03bb\u03bb\u03ac|\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5|\u039a\u03b1\u03b9|\u038c\u03c4\u03b1\u03bd|\u03a4\u03cc\u03c4\u03b5|\u0410 \u0442\u0430\u043a\u043e\u0436|\u0410\u0433\u0430\u0440|\u0410\u043b\u0435|\u0410\u043b\u0438|\u0410\u043c\u043c\u043e|\u0410|\u04d8\u0433\u04d9\u0440|\u04d8\u0439\u0442\u0438\u043a|\u04d8\u043c\u043c\u0430|\u0411\u0438\u0440\u043e\u043a|\u0412\u0430|\u0412\u04d9|\u0414\u0430\u0434\u0435\u043d\u043e|\u0414\u0430\u043d\u043e|\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c|\u0415\u0441\u043b\u0438|\u0417\u0430\u0434\u0430\u0442\u0435|\u0417\u0430\u0434\u0430\u0442\u0438|\u0417\u0430\u0434\u0430\u0442\u043e|\u0418|\u0406|\u041a \u0442\u043e\u043c\u0443 \u0436\u0435|\u041a\u0430\u0434\u0430|\u041a\u0430\u0434|\u041a\u043e\u0433\u0430\u0442\u043e|\u041a\u043e\u0433\u0434\u0430|\u041a\u043e\u043b\u0438|\u041b\u04d9\u043a\u0438\u043d|\u041b\u0435\u043a\u0438\u043d|\u041d\u04d9\u0442\u0438\u0497\u04d9\u0434\u04d9|\u041d\u0435\u0445\u0430\u0439|\u041d\u043e|\u041e\u043d\u0434\u0430|\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e, \u0449\u043e|\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e|\u041f\u0443\u0441\u0442\u044c|\u0422\u0430\u043a\u0436\u0435|\u0422\u0430|\u0422\u043e\u0433\u0434\u0430|\u0422\u043e\u0434\u0456|\u0422\u043e|\u0423\u043d\u0434\u0430|\u04ba\u04d9\u043c|\u042f\u043a\u0449\u043e|\u05d0\u05d1\u05dc|\u05d0\u05d6\u05d9|\u05d0\u05d6|\u05d1\u05d4\u05d9\u05e0\u05ea\u05df|\u05d5\u05d2\u05dd|\u05db\u05d0\u05e9\u05e8|\u0622\u0646\u06af\u0627\u0647|\u0627\u0630\u0627\u064b|\u0627\u06af\u0631|\u0627\u0645\u0627|\u0627\u0648\u0631|\u0628\u0627 \u0641\u0631\u0636|\u0628\u0627\u0644\u0641\u0631\u0636|\u0628\u0641\u0631\u0636|\u067e\u06be\u0631|\u062a\u0628|\u062b\u0645|\u062c\u0628|\u0639\u0646\u062f\u0645\u0627|\u0641\u0631\u0636 \u06a9\u06cc\u0627|\u0644\u0643\u0646|\u0644\u06cc\u06a9\u0646|\u0645\u062a\u0649|\u0647\u0646\u06af\u0627\u0645\u06cc|\u0648|\u0905\u0917\u0930|\u0914\u0930|\u0915\u0926\u093e|\u0915\u093f\u0928\u094d\u0924\u0941|\u091a\u0942\u0902\u0915\u093f|\u091c\u092c|\u0924\u0925\u093e|\u0924\u0926\u093e|\u0924\u092c|\u092a\u0930\u0928\u094d\u0924\u0941|\u092a\u0930|\u092f\u0926\u093f|\u0a05\u0a24\u0a47|\u0a1c\u0a26\u0a4b\u0a02|\u0a1c\u0a3f\u0a35\u0a47\u0a02 \u0a15\u0a3f|\u0a1c\u0a47\u0a15\u0a30|\u0a24\u0a26|\u0a2a\u0a30|\u0c05\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41|\u0c08 \u0c2a\u0c30\u0c3f\u0c38\u0c4d\u0c25\u0c3f\u0c24\u0c3f\u0c32\u0c4b|\u0c15\u0c3e\u0c28\u0c3f|\u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c2c\u0c21\u0c3f\u0c28\u0c26\u0c3f|\u0c2e\u0c30\u0c3f\u0c2f\u0c41|\u0c86\u0ca6\u0cb0\u0cc6|\u0ca8\u0c82\u0ca4\u0cb0|\u0ca8\u0cbf\u0cd5\u0ca1\u0cbf\u0ca6|\u0cae\u0ca4\u0ccd\u0ca4\u0cc1|\u0cb8\u0ccd\u0ca5\u0cbf\u0ca4\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1|\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e43\u0e2b\u0e49|\u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19|\u0e41\u0e15\u0e48|\u0e40\u0e21\u0e37\u0e48\u0e2d|\u0e41\u0e25\u0e30|\uadf8\ub7ec\uba74<|\uadf8\ub9ac\uace0<|\ub2e8<|\ub9cc\uc57d<|\ub9cc\uc77c<|\uba3c\uc800<|\uc870\uac74<|\ud558\uc9c0\ub9cc<|\u304b\u3064<|\u3057\u304b\u3057<|\u305f\u3060\u3057<|\u306a\u3089\u3070<|\u3082\u3057<|\u4e26\u4e14<|\u4f46\u3057<|\u4f46\u662f<|\u5047\u5982<|\u5047\u5b9a<|\u5047\u8a2d<|\u5047\u8bbe<|\u524d\u63d0<|\u540c\u65f6<|\u540c\u6642<|\u5e76\u4e14<|\u5f53<|\u7576<|\u800c\u4e14<|\u90a3\u4e48<|\u90a3\u9ebc<)(?=[ \t]+)/,
            lookbehind: !0
          },
          string: {
            pattern: /"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,
            inside: { outline: { pattern: /<[^>]+?>/, alias: 'variable' } }
          },
          outline: { pattern: /<[^>]+?>/, alias: 'variable' }
        }
      }
      ;(e.exports = o), (o.displayName = 'gherkin'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m
        }
      }
      ;(e.exports = o), (o.displayName = 'git'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.glsl = e.languages.extend('clike', {
          comment: [/\/\*[\s\S]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/],
          number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
          keyword: /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
        })),
          e.languages.insertBefore('glsl', 'comment', {
            preprocessor: {
              pattern: /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
              lookbehind: !0,
              alias: 'builtin'
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'glsl'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.go = e.languages.extend('clike', {
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          string: { pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 }
        })),
          delete e.languages.go['class-name']
      }
      ;(e.exports = o), (o.displayName = 'go'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.graphql = {
          comment: /#.*/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': /[a-z_]\w*(?=\s*:)/i,
          keyword: [
            { pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.{3}\s*)on\b/, lookbehind: !0 },
            /\b(?:query|fragment|mutation)\b/
          ],
          operator: /!|=|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/
        }
      }
      ;(e.exports = o), (o.displayName = 'graphql'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.groovy = e.languages.extend('clike', {
          keyword: /\b(?:as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
          string: [
            { pattern: /("""|''')[\s\S]*?\1|(?:\$\/)(?:\$\/\$|[\s\S])*?\/\$/, greedy: !0 },
            { pattern: /(["'\/])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
          ],
          number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
          operator: {
            pattern: /(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
            lookbehind: !0
          },
          punctuation: /\.+|[{}[\];(),:$]/
        })),
          e.languages.insertBefore('groovy', 'string', { shebang: { pattern: /#!.+/, alias: 'comment' } }),
          e.languages.insertBefore('groovy', 'punctuation', {
            'spock-block': /\b(?:setup|given|when|then|and|cleanup|expect|where):/
          }),
          e.languages.insertBefore('groovy', 'function', {
            annotation: { alias: 'punctuation', pattern: /(^|[^.])@\w+/, lookbehind: !0 }
          }),
          e.hooks.add('wrap', function(t) {
            if ('groovy' === t.language && 'string' === t.type) {
              var n = t.content[0]
              if ("'" != n) {
                var o = /([^\\])(?:\$(?:\{.*?\}|[\w.]+))/
                '$' === n && (o = /([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),
                  (t.content = t.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&')),
                  (t.content = e.highlight(t.content, {
                    expression: { pattern: o, lookbehind: !0, inside: e.languages.groovy }
                  })),
                  t.classes.push('/' === n ? 'regex' : 'gstring')
              }
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'groovy'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          e.languages.haml = {
            'multiline-comment': {
              pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ]+.+)*/,
              lookbehind: !0,
              alias: 'comment'
            },
            'multiline-code': [
              {
                pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ]+.+)/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby }
              },
              {
                pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
                lookbehind: !0,
                inside: { rest: e.languages.ruby }
              }
            ],
            filter: {
              pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
              lookbehind: !0,
              inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' } }
            },
            markup: { pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/, lookbehind: !0, inside: { rest: e.languages.markup } },
            doctype: { pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/, lookbehind: !0 },
            tag: {
              pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
              lookbehind: !0,
              inside: {
                attributes: [
                  { pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/, lookbehind: !0, inside: { rest: e.languages.ruby } },
                  {
                    pattern: /\([^)]+\)/,
                    inside: {
                      'attr-value': { pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/, lookbehind: !0 },
                      'attr-name': /[\w:-]+(?=\s*!?=|\s*[,)])/,
                      punctuation: /[=(),]/
                    }
                  },
                  { pattern: /\[[^\]]+\]/, inside: { rest: e.languages.ruby } }
                ],
                punctuation: /[<>]/
              }
            },
            code: {
              pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
              lookbehind: !0,
              inside: { rest: e.languages.ruby }
            },
            interpolation: {
              pattern: /#\{[^}]+\}/,
              inside: { delimiter: { pattern: /^#\{|\}$/, alias: 'punctuation' }, rest: e.languages.ruby }
            },
            punctuation: { pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/, lookbehind: !0 }
          }
          for (
            var t = [
                'css',
                { filter: 'coffee', language: 'coffeescript' },
                'erb',
                'javascript',
                'less',
                'markdown',
                'ruby',
                'scss',
                'textile'
              ],
              n = {},
              o = 0,
              a = t.length;
            o < a;
            o++
          ) {
            var r = t[o]
            ;(r = 'string' === typeof r ? { filter: r, language: r } : r),
              e.languages[r.language] &&
                (n['filter-' + r.filter] = {
                  pattern: RegExp(
                    '((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+'.replace(
                      '{{filter_name}}',
                      r.filter
                    )
                  ),
                  lookbehind: !0,
                  inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' }, rest: e.languages[r.language] }
                })
          }
          e.languages.insertBefore('haml', 'filter', n)
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'haml'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          ;(e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: { pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i, lookbehind: !0, alias: 'keyword' },
            brackets: { pattern: /\[[^\]]+\]/, inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ } },
            punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
          }),
            e.hooks.add('before-tokenize', function(t) {
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'handlebars',
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              )
            }),
            e.hooks.add('after-tokenize', function(t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'handlebars')
            })
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'handlebars'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.haskell = {
          comment: {
            pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m,
            lookbehind: !0
          },
          char: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
          string: {
            pattern: /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
            greedy: !0
          },
          keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
          import_statement: {
            pattern: /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
            lookbehind: !0,
            inside: { keyword: /\b(?:import|qualified|as|hiding)\b/ }
          },
          builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
          number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
          operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][\w']*\.)*[_a-z][\w']*`/,
          hvariable: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
          constant: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
          punctuation: /[{}[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'haskell'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.haxe = e.languages.extend('clike', {
          string: {
            pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
                lookbehind: !0,
                inside: { interpolation: { pattern: /^\$\w*/, alias: 'variable' } }
              }
            }
          },
          keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
          operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
        })),
          e.languages.insertBefore('haxe', 'class-name', {
            regex: { pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/, greedy: !0 }
          }),
          e.languages.insertBefore('haxe', 'keyword', {
            preprocessor: { pattern: /#\w+/, alias: 'builtin' },
            metadata: { pattern: /@:?\w+/, alias: 'symbol' },
            reification: { pattern: /\$(?:\w+|(?=\{))/, alias: 'variable' }
          }),
          (e.languages.haxe.string.inside.interpolation.inside.rest = e.languages.haxe),
          delete e.languages.haxe['class-name']
      }
      ;(e.exports = o), (o.displayName = 'haxe'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.hpkp = {
          directive: {
            pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
            alias: 'keyword'
          },
          safe: { pattern: /\d{7,}/, alias: 'selector' },
          unsafe: { pattern: /\d{0,6}/, alias: 'function' }
        }
      }
      ;(e.exports = o), (o.displayName = 'hpkp'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.hsts = {
          directive: { pattern: /\b(?:max-age=|includeSubDomains|preload)/, alias: 'keyword' },
          safe: { pattern: /\d{8,}/, alias: 'selector' },
          unsafe: { pattern: /\d{0,7}/, alias: 'function' }
        }
      }
      ;(e.exports = o), (o.displayName = 'hsts'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.http = {
          'request-line': {
            pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,
            inside: { property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/, 'attr-name': /:\w+/ }
          },
          'response-status': {
            pattern: /^HTTP\/1.[01] \d+.*/m,
            inside: { property: { pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0 } }
          },
          'header-name': { pattern: /^[\w-]+:(?=.)/m, alias: 'keyword' }
        }
        var t = {
          'application/json': e.languages.javascript,
          'application/xml': e.languages.markup,
          'text/xml': e.languages.markup,
          'text/html': e.languages.markup
        }
        for (var n in t)
          if (t[n]) {
            var o = {}
            ;(o[n] = {
              pattern: new RegExp('(content-type:\\s*' + n + '[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*', 'i'),
              lookbehind: !0,
              inside: { rest: t[n] }
            }),
              e.languages.insertBefore('http', 'header-name', o)
          }
      }
      ;(e.exports = o), (o.displayName = 'http'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.ichigojam = {
          comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
          string: { pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i, greedy: !0 },
          number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
          keyword: /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
          function: /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
          label: /(?:\B@[^\s]+)/i,
          operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
          punctuation: /[\[,;:()\]]/
        }
      }
      ;(e.exports = o), (o.displayName = 'ichigojam'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.icon = {
          comment: /#.*/,
          string: { pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/, greedy: !0 },
          number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
          'builtin-keyword': {
            pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
            alias: 'variable'
          },
          directive: { pattern: /\$\w+/, alias: 'builtin' },
          keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
          function: /(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
          operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
          punctuation: /[\[\](){},;]/
        }
      }
      ;(e.exports = o), (o.displayName = 'icon'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.inform7 = {
          string: {
            pattern: /"[^"]*"/,
            inside: {
              substitution: { pattern: /\[[^\]]+\]/, inside: { delimiter: { pattern: /\[|\]/, alias: 'punctuation' } } }
            }
          },
          comment: { pattern: /\[[^\]]+\]/, greedy: !0 },
          title: { pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im, alias: 'important' },
          number: {
            pattern: /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
            lookbehind: !0
          },
          verb: {
            pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
            lookbehind: !0,
            alias: 'operator'
          },
          keyword: {
            pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
            lookbehind: !0
          },
          property: {
            pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
            lookbehind: !0,
            alias: 'symbol'
          },
          position: {
            pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
            lookbehind: !0,
            alias: 'keyword'
          },
          type: {
            pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
            lookbehind: !0,
            alias: 'variable'
          },
          punctuation: /[.,:;(){}]/
        }),
          (e.languages.inform7.string.inside.substitution.inside.rest = e.languages.inform7),
          (e.languages.inform7.string.inside.substitution.inside.rest.text = {
            pattern: /\S(?:\s*\S)*/,
            alias: 'comment'
          })
      }
      ;(e.exports = o), (o.displayName = 'inform7'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.ini = {
          comment: /^[ \t]*;.*$/m,
          selector: /^[ \t]*\[.*?\]/m,
          constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
          'attr-value': { pattern: /=.*/, inside: { punctuation: /^[=]/ } }
        }
      }
      ;(e.exports = o), (o.displayName = 'ini'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.io = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
            { pattern: /(^|[^\\])#.*/, lookbehind: !0 }
          ],
          'triple-quoted-string': { pattern: /"""(?:\\[\s\S]|(?!""")[^\\])*"""/, greedy: !0, alias: 'string' },
          string: { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
          keyword: /\b(?:activate|activeCoroCount|asString|block|break|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getSlot|getEnvironmentVariable|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|call|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,
          builtin: /\b(?:Array|AudioDevice|AudioMixer|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Regex|SGML|SGMLElement|SGMLParser|SQLite|Server|Sequence|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink|Random|BigNum|Sequence)\b/,
          boolean: /\b(?:true|false|nil)\b/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?/i,
          operator: /[=!*/%+-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|(\b(?:return|and|or|not)\b)|@@?|\?\??|\.\./,
          punctuation: /[{}[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'io'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.j = {
          comment: /\bNB\..*/,
          string: { pattern: /'(?:''|[^'\r\n])*'/, greedy: !0 },
          keyword: /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
          verb: {
            pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
            alias: 'keyword'
          },
          number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,
          adverb: { pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/, alias: 'builtin' },
          operator: /[=a][.:]|_\./,
          conjunction: { pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/, alias: 'variable' },
          punctuation: /[()]/
        }
      }
      ;(e.exports = o), (o.displayName = 'j'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.jolie = e.languages.extend('clike', {
          keyword: /\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,
          builtin: /\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?l?/i,
          operator: /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,
          symbol: /[|;@]/,
          punctuation: /[,.]/,
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
        })),
          delete e.languages.jolie['class-name'],
          delete e.languages.jolie.function,
          e.languages.insertBefore('jolie', 'keyword', {
            function: { pattern: /((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/, lookbehind: !0 },
            aggregates: {
              pattern: /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
              lookbehind: !0,
              inside: {
                withExtension: { pattern: /\bwith\s+\w+/, inside: { keyword: /\bwith\b/ } },
                function: { pattern: /\w+/ },
                punctuation: { pattern: /,/ }
              }
            },
            redirects: {
              pattern: /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
              lookbehind: !0,
              inside: { punctuation: { pattern: /,/ }, function: { pattern: /\w+/ }, symbol: { pattern: /=>/ } }
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'jolie'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.json = {
          property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          punctuation: /[{}[\]);,]/,
          operator: /:/g,
          boolean: /\b(?:true|false)\b/i,
          null: /\bnull\b/i
        }),
          (e.languages.jsonp = e.languages.json)
      }
      ;(e.exports = o), (o.displayName = 'json'), (o.aliases = ['jsonp'])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.julia = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          string: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2/,
          keyword: /\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|let|local|macro|module|print|println|quote|return|try|type|typealias|using|while)\b/,
          boolean: /\b(?:true|false)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?/i,
          operator: /[-+*^%\xf7&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~\u2260\u2264\u2265]/,
          punctuation: /[{}[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'julia'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.keyman = {
          comment: /\bc\s.*/i,
          function: /\[\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*(?:[TKU]_[\w?]+|".+?"|'.+?')\s*\]/i,
          string: /("|').*?\1/,
          bold: [
            /&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,
            /\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i
          ],
          keyword: /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
          atrule: /\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
          number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
          operator: /[+>\\,()]/,
          tag: /\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i
        }
      }
      ;(e.exports = o), (o.displayName = 'keyman'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          ;(e.languages.kotlin = e.languages.extend('clike', {
            keyword: {
              pattern: /(^|[^.])\b(?:abstract|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|else|enum|final|finally|for|fun|get|if|import|in|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|out|override|package|private|protected|public|reified|return|sealed|set|super|tailrec|this|throw|to|try|val|var|when|where|while)\b/,
              lookbehind: !0
            },
            function: [/\w+(?=\s*\()/, { pattern: /(\.)\w+(?=\s*\{)/, lookbehind: !0 }],
            number: /\b(?:0[bx][\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?[fFL]?)\b/,
            operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
          })),
            delete e.languages.kotlin['class-name'],
            e.languages.insertBefore('kotlin', 'string', {
              'raw-string': { pattern: /("""|''')[\s\S]*?\1/, alias: 'string' }
            }),
            e.languages.insertBefore('kotlin', 'keyword', {
              annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: 'builtin' }
            }),
            e.languages.insertBefore('kotlin', 'function', { label: { pattern: /\w+@|@\w+/, alias: 'symbol' } })
          var t = [
            {
              pattern: /\$\{[^}]+\}/,
              inside: { delimiter: { pattern: /^\$\{|\}$/, alias: 'variable' }, rest: e.languages.kotlin }
            },
            { pattern: /\$\w+/, alias: 'variable' }
          ]
          e.languages.kotlin.string.inside = e.languages.kotlin['raw-string'].inside = { interpolation: t }
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'kotlin'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i,
            n = { 'equation-command': { pattern: t, alias: 'regex' } }
          e.languages.latex = {
            comment: /%.*/m,
            cdata: { pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: !0 },
            equation: [
              { pattern: /\$(?:\\[\s\S]|[^\\$])*\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/, inside: n, alias: 'string' },
              {
                pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
                lookbehind: !0,
                inside: n,
                alias: 'string'
              }
            ],
            keyword: {
              pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
              lookbehind: !0
            },
            url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0 },
            headline: {
              pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
              lookbehind: !0,
              alias: 'class-name'
            },
            function: { pattern: t, alias: 'selector' },
            punctuation: /[[\]{}&]/
          }
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'latex'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.less = e.languages.extend('css', {
          comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
          atrule: { pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i, inside: { punctuation: /[:()]/ } },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ }
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          punctuation: /[{}();:,]/,
          operator: /[+\-*\/]/
        })),
          e.languages.insertBefore('less', 'punctuation', { function: e.languages.less.function }),
          e.languages.insertBefore('less', 'property', {
            variable: [{ pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } }, /@@?[\w-]+/],
            'mixin-usage': { pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/, lookbehind: !0, alias: 'function' }
          })
      }
      ;(e.exports = o), (o.displayName = 'less'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.liquid = {
          keyword: /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/,
          number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
          operator: {
            pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
            lookbehind: !0
          },
          function: {
            pattern: /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/,
            lookbehind: !0
          }
        }
      }
      ;(e.exports = o), (o.displayName = 'liquid'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          function t(e) {
            return new RegExp('(\\()' + e + '(?=[\\s\\)])')
          }
          function n(e) {
            return new RegExp('([\\s([])' + e + '(?=[\\s)])')
          }
          var o = '[-+*/_~!@$%^=<>{}\\w]+',
            a = '(\\()',
            r = {
              heading: { pattern: /;;;.*/, alias: ['comment', 'title'] },
              comment: /;.*/,
              string: {
                pattern: /"(?:[^"\\]*|\\.)*"/,
                greedy: !0,
                inside: { argument: /[-A-Z]+(?=[.,\s])/, symbol: new RegExp('`' + o + "'") }
              },
              'quoted-symbol': { pattern: new RegExp("#?'" + o), alias: ['variable', 'symbol'] },
              'lisp-property': { pattern: new RegExp(':' + o), alias: 'property' },
              splice: { pattern: new RegExp(',@?' + o), alias: ['symbol', 'variable'] },
              keyword: [
                {
                  pattern: new RegExp(
                    a +
                      '(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)(?=\\s)'
                  ),
                  lookbehind: !0
                },
                {
                  pattern: new RegExp(a + '(?:for|do|collect|return|finally|append|concat|in|by)(?=\\s)'),
                  lookbehind: !0
                }
              ],
              declare: { pattern: t('declare'), lookbehind: !0, alias: 'keyword' },
              interactive: { pattern: t('interactive'), lookbehind: !0, alias: 'keyword' },
              boolean: { pattern: n('(?:t|nil)'), lookbehind: !0 },
              number: { pattern: n('[-+]?\\d+(?:\\.\\d*)?'), lookbehind: !0 },
              defvar: {
                pattern: new RegExp(a + 'def(?:var|const|custom|group)\\s+' + o),
                lookbehind: !0,
                inside: { keyword: /^def[a-z]+/, variable: new RegExp(o) }
              },
              defun: {
                pattern: new RegExp(a + '(?:cl-)?(?:defun\\*?|defmacro)\\s+' + o + '\\s+\\([\\s\\S]*?\\)'),
                lookbehind: !0,
                inside: {
                  keyword: /^(?:cl-)?def\S+/,
                  arguments: null,
                  function: { pattern: new RegExp('(^\\s)' + o), lookbehind: !0 },
                  punctuation: /[()]/
                }
              },
              lambda: {
                pattern: new RegExp(a + 'lambda\\s+\\((?:&?' + o + '\\s*)*\\)'),
                lookbehind: !0,
                inside: { keyword: /^lambda/, arguments: null, punctuation: /[()]/ }
              },
              car: { pattern: new RegExp(a + o), lookbehind: !0 },
              punctuation: [/(['`,]?\(|[)\[\]])/, { pattern: /(\s)\.(?=\s)/, lookbehind: !0 }]
            },
            i = {
              'lisp-marker': new RegExp('&[-+*/_~!@$%^=<>{}\\w]+'),
              rest: {
                argument: { pattern: new RegExp(o), alias: 'variable' },
                varform: {
                  pattern: new RegExp(a + o + '\\s+\\S[\\s\\S]*(?=\\))'),
                  lookbehind: !0,
                  inside: {
                    string: r.string,
                    boolean: r.boolean,
                    number: r.number,
                    symbol: r.symbol,
                    punctuation: /[()]/
                  }
                }
              }
            },
            s = '\\S+(?:\\s+\\S+)*',
            l = {
              pattern: new RegExp(a + '[\\s\\S]*(?=\\))'),
              lookbehind: !0,
              inside: {
                'rest-vars': { pattern: new RegExp('&(?:rest|body)\\s+' + s), inside: i },
                'other-marker-vars': { pattern: new RegExp('&(?:optional|aux)\\s+' + s), inside: i },
                keys: { pattern: new RegExp('&key\\s+' + s + '(?:\\s+&allow-other-keys)?'), inside: i },
                argument: { pattern: new RegExp(o), alias: 'variable' },
                punctuation: /[()]/
              }
            }
          ;(r.lambda.inside.arguments = l),
            (r.defun.inside.arguments = e.util.clone(l)),
            (r.defun.inside.arguments.inside.sublist = l),
            (e.languages.lisp = r),
            (e.languages.elisp = r),
            (e.languages.emacs = r),
            (e.languages['emacs-lisp'] = r)
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'lisp'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.livescript = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
            { pattern: /(^|[^\\])#.*/, lookbehind: !0 }
          ],
          'interpolated-string': {
            pattern: /(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              variable: { pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m, lookbehind: !0 },
              interpolation: {
                pattern: /(^|[^\\])#\{[^}]+\}/m,
                lookbehind: !0,
                inside: { 'interpolation-punctuation': { pattern: /^#\{|\}$/, alias: 'variable' } }
              },
              string: /[\s\S]+/
            }
          },
          string: [
            { pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
            { pattern: /<\[[\s\S]*?\]>/, greedy: !0 },
            /\\[^\s,;\])}]+/
          ],
          regex: [
            {
              pattern: /\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,
              greedy: !0,
              inside: { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 } }
            },
            { pattern: /\/(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}/, greedy: !0 }
          ],
          keyword: {
            pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
            lookbehind: !0
          },
          'keyword-operator': {
            pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
            lookbehind: !0,
            alias: 'operator'
          },
          boolean: { pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m, lookbehind: !0 },
          argument: { pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m, lookbehind: !0, alias: 'variable' },
          number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
          identifier: /[a-z_](?:-?[a-z]|[\d_])*/i,
          operator: [
            { pattern: /( )\.(?= )/, lookbehind: !0 },
            /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/
          ],
          punctuation: /[(){}\[\]|.,:;`]/
        }),
          (e.languages.livescript['interpolated-string'].inside.interpolation.inside.rest = e.languages.livescript)
      }
      ;(e.exports = o), (o.displayName = 'livescript'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.lolcode = {
          comment: [/\bOBTW\s+[\s\S]*?\s+TLDR\b/, /\bBTW.+/],
          string: {
            pattern: /"(?::.|[^"])*"/,
            inside: { variable: /:\{[^}]+\}/, symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/] },
            greedy: !0
          },
          number: /(?:\B-)?(?:\b\d+\.?\d*|\B\.\d+)/,
          symbol: {
            pattern: /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
            lookbehind: !0,
            inside: { keyword: /A(?=\s)/ }
          },
          label: { pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/, lookbehind: !0, alias: 'string' },
          function: { pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/, lookbehind: !0 },
          keyword: [
            {
              pattern: /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
              lookbehind: !0
            },
            /'Z(?=\s|,|$)/
          ],
          boolean: { pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/, lookbehind: !0 },
          variable: { pattern: /(^|\s)IT(?=\s|,|$)/, lookbehind: !0 },
          operator: {
            pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
            lookbehind: !0
          },
          punctuation: /\.{3}|\u2026|,|!/
        }
      }
      ;(e.exports = o), (o.displayName = 'lolcode'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.lua = {
          comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
          string: {
            pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
            greedy: !0
          },
          number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
          keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
          function: /(?!\d)\w+(?=\s*(?:[({]))/,
          operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 }],
          punctuation: /[\[\](){},;]|\.+|:+/
        }
      }
      ;(e.exports = o), (o.displayName = 'lua'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.makefile = {
          comment: { pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/, lookbehind: !0 },
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: { pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m, inside: { variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/ } },
          variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0
            }
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/
        }
      }
      ;(e.exports = o), (o.displayName = 'makefile'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.markdown = e.languages.extend('markup', {})),
          e.languages.insertBefore('markdown', 'prolog', {
            blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
            code: [
              { pattern: /^(?: {4}|\t).+/m, alias: 'keyword' },
              { pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword' }
            ],
            title: [
              { pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/, alias: 'important', inside: { punctuation: /==+$|--+$/ } },
              { pattern: /(^\s*)#+.+/m, lookbehind: !0, alias: 'important', inside: { punctuation: /^#+|#+$/ } }
            ],
            hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: 'punctuation' },
            list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: 'punctuation' },
            'url-reference': {
              pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
              inside: {
                variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
              },
              alias: 'url'
            },
            bold: {
              pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
              lookbehind: !0,
              inside: { punctuation: /^\*\*|^__|\*\*$|__$/ }
            },
            italic: {
              pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
              lookbehind: !0,
              inside: { punctuation: /^[*_]|[*_]$/ }
            },
            url: {
              pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
              inside: {
                variable: { pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ }
              }
            }
          }),
          (e.languages.markdown.bold.inside.url = e.languages.markdown.url),
          (e.languages.markdown.italic.inside.url = e.languages.markdown.url),
          (e.languages.markdown.bold.inside.italic = e.languages.markdown.italic),
          (e.languages.markdown.italic.inside.bold = e.languages.markdown.bold)
      }
      ;(e.exports = o), (o.displayName = 'markdown'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages['markup-templating'] = {}),
          Object.defineProperties(e.languages['markup-templating'], {
            buildPlaceholders: {
              value: function(t, n, o, a) {
                t.language === n &&
                  ((t.tokenStack = []),
                  (t.code = t.code.replace(o, function(e) {
                    if ('function' === typeof a && !a(e)) return e
                    for (var o = t.tokenStack.length; -1 !== t.code.indexOf('___' + n.toUpperCase() + o + '___'); ) ++o
                    return (t.tokenStack[o] = e), '___' + n.toUpperCase() + o + '___'
                  })),
                  (t.grammar = e.languages.markup))
              }
            },
            tokenizePlaceholders: {
              value: function(t, n) {
                if (t.language === n && t.tokenStack) {
                  t.grammar = e.languages[n]
                  var o = 0,
                    a = Object.keys(t.tokenStack)
                  !(function r(i) {
                    if (!(o >= a.length))
                      for (var s = 0; s < i.length; s++) {
                        var l = i[s]
                        if ('string' === typeof l || (l.content && 'string' === typeof l.content)) {
                          var c = a[o],
                            d = t.tokenStack[c],
                            u = 'string' === typeof l ? l : l.content,
                            p = u.indexOf('___' + n.toUpperCase() + c + '___')
                          if (p > -1) {
                            ++o
                            var g,
                              m = u.substring(0, p),
                              f = new e.Token(n, e.tokenize(d, t.grammar, n), 'language-' + n, d),
                              b = u.substring(p + ('___' + n.toUpperCase() + c + '___').length)
                            if (
                              (m || b
                                ? r(
                                    (g = [m, f, b].filter(function(e) {
                                      return !!e
                                    }))
                                  )
                                : (g = f),
                              'string' === typeof l
                                ? Array.prototype.splice.apply(i, [s, 1].concat(g))
                                : (l.content = g),
                              o >= a.length)
                            )
                              break
                          }
                        } else l.content && 'string' !== typeof l.content && r(l.content)
                      }
                  })(t.tokens)
                }
              }
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'markupTemplating'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.matlab = {
          comment: [/%\{[\s\S]*?\}%/, /%.+/],
          string: { pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0 },
          number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
          keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
          function: /(?!\d)\w+(?=\s*\()/,
          operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
          punctuation: /\.{3}|[.,;\[\](){}!]/
        }
      }
      ;(e.exports = o), (o.displayName = 'matlab'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.mel = {
          comment: /\/\/.*/,
          code: {
            pattern: /`(?:\\.|[^\\`\r\n])*`/,
            greedy: !0,
            alias: 'italic',
            inside: { delimiter: { pattern: /^`|`$/, alias: 'punctuation' } }
          },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          variable: /\$\w+/,
          number: /\b0x[\da-fA-F]+\b|\b\d+\.?\d*|\B\.\d+/,
          flag: { pattern: /-[^\d\W]\w*/, alias: 'operator' },
          keyword: /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
          function: /\w+(?=\()|\b(?:about|abs|addAttr|addAttributeEditorNodeHelp|addDynamic|addNewShelfTab|addPP|addPanelCategory|addPrefixToName|advanceToNextDrivenKey|affectedNet|affects|aimConstraint|air|alias|aliasAttr|align|alignCtx|alignCurve|alignSurface|allViewFit|ambientLight|angle|angleBetween|animCone|animCurveEditor|animDisplay|animView|annotate|appendStringArray|applicationName|applyAttrPreset|applyTake|arcLenDimContext|arcLengthDimension|arclen|arrayMapper|art3dPaintCtx|artAttrCtx|artAttrPaintVertexCtx|artAttrSkinPaintCtx|artAttrTool|artBuildPaintMenu|artFluidAttrCtx|artPuttyCtx|artSelectCtx|artSetPaintCtx|artUserPaintCtx|assignCommand|assignInputDevice|assignViewportFactories|attachCurve|attachDeviceAttr|attachSurface|attrColorSliderGrp|attrCompatibility|attrControlGrp|attrEnumOptionMenu|attrEnumOptionMenuGrp|attrFieldGrp|attrFieldSliderGrp|attrNavigationControlGrp|attrPresetEditWin|attributeExists|attributeInfo|attributeMenu|attributeQuery|autoKeyframe|autoPlace|bakeClip|bakeFluidShading|bakePartialHistory|bakeResults|bakeSimulation|basename|basenameEx|batchRender|bessel|bevel|bevelPlus|binMembership|bindSkin|blend2|blendShape|blendShapeEditor|blendShapePanel|blendTwoAttr|blindDataType|boneLattice|boundary|boxDollyCtx|boxZoomCtx|bufferCurve|buildBookmarkMenu|buildKeyframeMenu|button|buttonManip|CBG|cacheFile|cacheFileCombine|cacheFileMerge|cacheFileTrack|camera|cameraView|canCreateManip|canvas|capitalizeString|catch|catchQuiet|ceil|changeSubdivComponentDisplayLevel|changeSubdivRegion|channelBox|character|characterMap|characterOutlineEditor|characterize|chdir|checkBox|checkBoxGrp|checkDefaultRenderGlobals|choice|circle|circularFillet|clamp|clear|clearCache|clip|clipEditor|clipEditorCurrentTimeCtx|clipSchedule|clipSchedulerOutliner|clipTrimBefore|closeCurve|closeSurface|cluster|cmdFileOutput|cmdScrollFieldExecuter|cmdScrollFieldReporter|cmdShell|coarsenSubdivSelectionList|collision|color|colorAtPoint|colorEditor|colorIndex|colorIndexSliderGrp|colorSliderButtonGrp|colorSliderGrp|columnLayout|commandEcho|commandLine|commandPort|compactHairSystem|componentEditor|compositingInterop|computePolysetVolume|condition|cone|confirmDialog|connectAttr|connectControl|connectDynamic|connectJoint|connectionInfo|constrain|constrainValue|constructionHistory|container|containsMultibyte|contextInfo|control|convertFromOldLayers|convertIffToPsd|convertLightmap|convertSolidTx|convertTessellation|convertUnit|copyArray|copyFlexor|copyKey|copySkinWeights|cos|cpButton|cpCache|cpClothSet|cpCollision|cpConstraint|cpConvClothToMesh|cpForces|cpGetSolverAttr|cpPanel|cpProperty|cpRigidCollisionFilter|cpSeam|cpSetEdit|cpSetSolverAttr|cpSolver|cpSolverTypes|cpTool|cpUpdateClothUVs|createDisplayLayer|createDrawCtx|createEditor|createLayeredPsdFile|createMotionField|createNewShelf|createNode|createRenderLayer|createSubdivRegion|cross|crossProduct|ctxAbort|ctxCompletion|ctxEditMode|ctxTraverse|currentCtx|currentTime|currentTimeCtx|currentUnit|curve|curveAddPtCtx|curveCVCtx|curveEPCtx|curveEditorCtx|curveIntersect|curveMoveEPCtx|curveOnSurface|curveSketchCtx|cutKey|cycleCheck|cylinder|dagPose|date|defaultLightListCheckBox|defaultNavigation|defineDataServer|defineVirtualDevice|deformer|deg_to_rad|delete|deleteAttr|deleteShadingGroupsAndMaterials|deleteShelfTab|deleteUI|deleteUnusedBrushes|delrandstr|detachCurve|detachDeviceAttr|detachSurface|deviceEditor|devicePanel|dgInfo|dgdirty|dgeval|dgtimer|dimWhen|directKeyCtx|directionalLight|dirmap|dirname|disable|disconnectAttr|disconnectJoint|diskCache|displacementToPoly|displayAffected|displayColor|displayCull|displayLevelOfDetail|displayPref|displayRGBColor|displaySmoothness|displayStats|displayString|displaySurface|distanceDimContext|distanceDimension|doBlur|dolly|dollyCtx|dopeSheetEditor|dot|dotProduct|doubleProfileBirailSurface|drag|dragAttrContext|draggerContext|dropoffLocator|duplicate|duplicateCurve|duplicateSurface|dynCache|dynControl|dynExport|dynExpression|dynGlobals|dynPaintEditor|dynParticleCtx|dynPref|dynRelEdPanel|dynRelEditor|dynamicLoad|editAttrLimits|editDisplayLayerGlobals|editDisplayLayerMembers|editRenderLayerAdjustment|editRenderLayerGlobals|editRenderLayerMembers|editor|editorTemplate|effector|emit|emitter|enableDevice|encodeString|endString|endsWith|env|equivalent|equivalentTol|erf|error|eval|evalDeferred|evalEcho|event|exactWorldBoundingBox|exclusiveLightCheckBox|exec|executeForEachObject|exists|exp|expression|expressionEditorListen|extendCurve|extendSurface|extrude|fcheck|fclose|feof|fflush|fgetline|fgetword|file|fileBrowserDialog|fileDialog|fileExtension|fileInfo|filetest|filletCurve|filter|filterCurve|filterExpand|filterStudioImport|findAllIntersections|findAnimCurves|findKeyframe|findMenuItem|findRelatedSkinCluster|finder|firstParentOf|fitBspline|flexor|floatEq|floatField|floatFieldGrp|floatScrollBar|floatSlider|floatSlider2|floatSliderButtonGrp|floatSliderGrp|floor|flow|fluidCacheInfo|fluidEmitter|fluidVoxelInfo|flushUndo|fmod|fontDialog|fopen|formLayout|format|fprint|frameLayout|fread|freeFormFillet|frewind|fromNativePath|fwrite|gamma|gauss|geometryConstraint|getApplicationVersionAsFloat|getAttr|getClassification|getDefaultBrush|getFileList|getFluidAttr|getInputDeviceRange|getMayaPanelTypes|getModifiers|getPanel|getParticleAttr|getPluginResource|getenv|getpid|glRender|glRenderEditor|globalStitch|gmatch|goal|gotoBindPose|grabColor|gradientControl|gradientControlNoAttr|graphDollyCtx|graphSelectContext|graphTrackCtx|gravity|grid|gridLayout|group|groupObjectsByName|HfAddAttractorToAS|HfAssignAS|HfBuildEqualMap|HfBuildFurFiles|HfBuildFurImages|HfCancelAFR|HfConnectASToHF|HfCreateAttractor|HfDeleteAS|HfEditAS|HfPerformCreateAS|HfRemoveAttractorFromAS|HfSelectAttached|HfSelectAttractors|HfUnAssignAS|hardenPointCurve|hardware|hardwareRenderPanel|headsUpDisplay|headsUpMessage|help|helpLine|hermite|hide|hilite|hitTest|hotBox|hotkey|hotkeyCheck|hsv_to_rgb|hudButton|hudSlider|hudSliderButton|hwReflectionMap|hwRender|hwRenderLoad|hyperGraph|hyperPanel|hyperShade|hypot|iconTextButton|iconTextCheckBox|iconTextRadioButton|iconTextRadioCollection|iconTextScrollList|iconTextStaticLabel|ikHandle|ikHandleCtx|ikHandleDisplayScale|ikSolver|ikSplineHandleCtx|ikSystem|ikSystemInfo|ikfkDisplayMethod|illustratorCurves|image|imfPlugins|inheritTransform|insertJoint|insertJointCtx|insertKeyCtx|insertKnotCurve|insertKnotSurface|instance|instanceable|instancer|intField|intFieldGrp|intScrollBar|intSlider|intSliderGrp|interToUI|internalVar|intersect|iprEngine|isAnimCurve|isConnected|isDirty|isParentOf|isSameObject|isTrue|isValidObjectName|isValidString|isValidUiName|isolateSelect|itemFilter|itemFilterAttr|itemFilterRender|itemFilterType|joint|jointCluster|jointCtx|jointDisplayScale|jointLattice|keyTangent|keyframe|keyframeOutliner|keyframeRegionCurrentTimeCtx|keyframeRegionDirectKeyCtx|keyframeRegionDollyCtx|keyframeRegionInsertKeyCtx|keyframeRegionMoveKeyCtx|keyframeRegionScaleKeyCtx|keyframeRegionSelectKeyCtx|keyframeRegionSetKeyCtx|keyframeRegionTrackCtx|keyframeStats|lassoContext|lattice|latticeDeformKeyCtx|launch|launchImageEditor|layerButton|layeredShaderPort|layeredTexturePort|layout|layoutDialog|lightList|lightListEditor|lightListPanel|lightlink|lineIntersection|linearPrecision|linstep|listAnimatable|listAttr|listCameras|listConnections|listDeviceAttachments|listHistory|listInputDeviceAxes|listInputDeviceButtons|listInputDevices|listMenuAnnotation|listNodeTypes|listPanelCategories|listRelatives|listSets|listTransforms|listUnselected|listerEditor|loadFluid|loadNewShelf|loadPlugin|loadPluginLanguageResources|loadPrefObjects|localizedPanelLabel|lockNode|loft|log|longNameOf|lookThru|ls|lsThroughFilter|lsType|lsUI|Mayatomr|mag|makeIdentity|makeLive|makePaintable|makeRoll|makeSingleSurface|makeTubeOn|makebot|manipMoveContext|manipMoveLimitsCtx|manipOptions|manipRotateContext|manipRotateLimitsCtx|manipScaleContext|manipScaleLimitsCtx|marker|match|max|memory|menu|menuBarLayout|menuEditor|menuItem|menuItemToShelf|menuSet|menuSetPref|messageLine|min|minimizeApp|mirrorJoint|modelCurrentTimeCtx|modelEditor|modelPanel|mouse|movIn|movOut|move|moveIKtoFK|moveKeyCtx|moveVertexAlongDirection|multiProfileBirailSurface|mute|nParticle|nameCommand|nameField|namespace|namespaceInfo|newPanelItems|newton|nodeCast|nodeIconButton|nodeOutliner|nodePreset|nodeType|noise|nonLinear|normalConstraint|normalize|nurbsBoolean|nurbsCopyUVSet|nurbsCube|nurbsEditUV|nurbsPlane|nurbsSelect|nurbsSquare|nurbsToPoly|nurbsToPolygonsPref|nurbsToSubdiv|nurbsToSubdivPref|nurbsUVSet|nurbsViewDirectionVector|objExists|objectCenter|objectLayer|objectType|objectTypeUI|obsoleteProc|oceanNurbsPreviewPlane|offsetCurve|offsetCurveOnSurface|offsetSurface|openGLExtension|openMayaPref|optionMenu|optionMenuGrp|optionVar|orbit|orbitCtx|orientConstraint|outlinerEditor|outlinerPanel|overrideModifier|paintEffectsDisplay|pairBlend|palettePort|paneLayout|panel|panelConfiguration|panelHistory|paramDimContext|paramDimension|paramLocator|parent|parentConstraint|particle|particleExists|particleInstancer|particleRenderInfo|partition|pasteKey|pathAnimation|pause|pclose|percent|performanceOptions|pfxstrokes|pickWalk|picture|pixelMove|planarSrf|plane|play|playbackOptions|playblast|plugAttr|plugNode|pluginInfo|pluginResourceUtil|pointConstraint|pointCurveConstraint|pointLight|pointMatrixMult|pointOnCurve|pointOnSurface|pointPosition|poleVectorConstraint|polyAppend|polyAppendFacetCtx|polyAppendVertex|polyAutoProjection|polyAverageNormal|polyAverageVertex|polyBevel|polyBlendColor|polyBlindData|polyBoolOp|polyBridgeEdge|polyCacheMonitor|polyCheck|polyChipOff|polyClipboard|polyCloseBorder|polyCollapseEdge|polyCollapseFacet|polyColorBlindData|polyColorDel|polyColorPerVertex|polyColorSet|polyCompare|polyCone|polyCopyUV|polyCrease|polyCreaseCtx|polyCreateFacet|polyCreateFacetCtx|polyCube|polyCut|polyCutCtx|polyCylinder|polyCylindricalProjection|polyDelEdge|polyDelFacet|polyDelVertex|polyDuplicateAndConnect|polyDuplicateEdge|polyEditUV|polyEditUVShell|polyEvaluate|polyExtrudeEdge|polyExtrudeFacet|polyExtrudeVertex|polyFlipEdge|polyFlipUV|polyForceUV|polyGeoSampler|polyHelix|polyInfo|polyInstallAction|polyLayoutUV|polyListComponentConversion|polyMapCut|polyMapDel|polyMapSew|polyMapSewMove|polyMergeEdge|polyMergeEdgeCtx|polyMergeFacet|polyMergeFacetCtx|polyMergeUV|polyMergeVertex|polyMirrorFace|polyMoveEdge|polyMoveFacet|polyMoveFacetUV|polyMoveUV|polyMoveVertex|polyNormal|polyNormalPerVertex|polyNormalizeUV|polyOptUvs|polyOptions|polyOutput|polyPipe|polyPlanarProjection|polyPlane|polyPlatonicSolid|polyPoke|polyPrimitive|polyPrism|polyProjection|polyPyramid|polyQuad|polyQueryBlindData|polyReduce|polySelect|polySelectConstraint|polySelectConstraintMonitor|polySelectCtx|polySelectEditCtx|polySeparate|polySetToFaceNormal|polySewEdge|polyShortestPathCtx|polySmooth|polySoftEdge|polySphere|polySphericalProjection|polySplit|polySplitCtx|polySplitEdge|polySplitRing|polySplitVertex|polyStraightenUVBorder|polySubdivideEdge|polySubdivideFacet|polyToSubdiv|polyTorus|polyTransfer|polyTriangulate|polyUVSet|polyUnite|polyWedgeFace|popen|popupMenu|pose|pow|preloadRefEd|print|progressBar|progressWindow|projFileViewer|projectCurve|projectTangent|projectionContext|projectionManip|promptDialog|propModCtx|propMove|psdChannelOutliner|psdEditTextureFile|psdExport|psdTextureFile|putenv|pwd|python|querySubdiv|quit|rad_to_deg|radial|radioButton|radioButtonGrp|radioCollection|radioMenuItemCollection|rampColorPort|rand|randomizeFollicles|randstate|rangeControl|readTake|rebuildCurve|rebuildSurface|recordAttr|recordDevice|redo|reference|referenceEdit|referenceQuery|refineSubdivSelectionList|refresh|refreshAE|registerPluginResource|rehash|reloadImage|removeJoint|removeMultiInstance|removePanelCategory|rename|renameAttr|renameSelectionList|renameUI|render|renderGlobalsNode|renderInfo|renderLayerButton|renderLayerParent|renderLayerPostProcess|renderLayerUnparent|renderManip|renderPartition|renderQualityNode|renderSettings|renderThumbnailUpdate|renderWindowEditor|renderWindowSelectContext|renderer|reorder|reorderDeformers|requires|reroot|resampleFluid|resetAE|resetPfxToPolyCamera|resetTool|resolutionNode|retarget|reverseCurve|reverseSurface|revolve|rgb_to_hsv|rigidBody|rigidSolver|roll|rollCtx|rootOf|rot|rotate|rotationInterpolation|roundConstantRadius|rowColumnLayout|rowLayout|runTimeCommand|runup|sampleImage|saveAllShelves|saveAttrPreset|saveFluid|saveImage|saveInitialState|saveMenu|savePrefObjects|savePrefs|saveShelf|saveToolSettings|scale|scaleBrushBrightness|scaleComponents|scaleConstraint|scaleKey|scaleKeyCtx|sceneEditor|sceneUIReplacement|scmh|scriptCtx|scriptEditorInfo|scriptJob|scriptNode|scriptTable|scriptToShelf|scriptedPanel|scriptedPanelType|scrollField|scrollLayout|sculpt|searchPathArray|seed|selLoadSettings|select|selectContext|selectCurveCV|selectKey|selectKeyCtx|selectKeyframeRegionCtx|selectMode|selectPref|selectPriority|selectType|selectedNodes|selectionConnection|separator|setAttr|setAttrEnumResource|setAttrMapping|setAttrNiceNameResource|setConstraintRestPosition|setDefaultShadingGroup|setDrivenKeyframe|setDynamic|setEditCtx|setEditor|setFluidAttr|setFocus|setInfinity|setInputDeviceMapping|setKeyCtx|setKeyPath|setKeyframe|setKeyframeBlendshapeTargetWts|setMenuMode|setNodeNiceNameResource|setNodeTypeFlag|setParent|setParticleAttr|setPfxToPolyCamera|setPluginResource|setProject|setStampDensity|setStartupMessage|setState|setToolTo|setUITemplate|setXformManip|sets|shadingConnection|shadingGeometryRelCtx|shadingLightRelCtx|shadingNetworkCompare|shadingNode|shapeCompare|shelfButton|shelfLayout|shelfTabLayout|shellField|shortNameOf|showHelp|showHidden|showManipCtx|showSelectionInTitle|showShadingGroupAttrEditor|showWindow|sign|simplify|sin|singleProfileBirailSurface|size|sizeBytes|skinCluster|skinPercent|smoothCurve|smoothTangentSurface|smoothstep|snap2to2|snapKey|snapMode|snapTogetherCtx|snapshot|soft|softMod|softModCtx|sort|sound|soundControl|source|spaceLocator|sphere|sphrand|spotLight|spotLightPreviewPort|spreadSheetEditor|spring|sqrt|squareSurface|srtContext|stackTrace|startString|startsWith|stitchAndExplodeShell|stitchSurface|stitchSurfacePoints|strcmp|stringArrayCatenate|stringArrayContains|stringArrayCount|stringArrayInsertAtIndex|stringArrayIntersector|stringArrayRemove|stringArrayRemoveAtIndex|stringArrayRemoveDuplicates|stringArrayRemoveExact|stringArrayToString|stringToStringArray|strip|stripPrefixFromName|stroke|subdAutoProjection|subdCleanTopology|subdCollapse|subdDuplicateAndConnect|subdEditUV|subdListComponentConversion|subdMapCut|subdMapSewMove|subdMatchTopology|subdMirror|subdToBlind|subdToPoly|subdTransferUVsToCache|subdiv|subdivCrease|subdivDisplaySmoothness|substitute|substituteAllString|substituteGeometry|substring|surface|surfaceSampler|surfaceShaderList|swatchDisplayPort|switchTable|symbolButton|symbolCheckBox|sysFile|system|tabLayout|tan|tangentConstraint|texLatticeDeformContext|texManipContext|texMoveContext|texMoveUVShellContext|texRotateContext|texScaleContext|texSelectContext|texSelectShortestPathCtx|texSmudgeUVContext|texWinToolCtx|text|textCurves|textField|textFieldButtonGrp|textFieldGrp|textManip|textScrollList|textToShelf|textureDisplacePlane|textureHairColor|texturePlacementContext|textureWindow|threadCount|threePointArcCtx|timeControl|timePort|timerX|toNativePath|toggle|toggleAxis|toggleWindowVisibility|tokenize|tokenizeList|tolerance|tolower|toolButton|toolCollection|toolDropped|toolHasOptions|toolPropertyWindow|torus|toupper|trace|track|trackCtx|transferAttributes|transformCompare|transformLimits|translator|trim|trunc|truncateFluidCache|truncateHairCache|tumble|tumbleCtx|turbulence|twoPointArcCtx|uiRes|uiTemplate|unassignInputDevice|undo|undoInfo|ungroup|uniform|unit|unloadPlugin|untangleUV|untitledFileName|untrim|upAxis|updateAE|userCtx|uvLink|uvSnapshot|validateShelfName|vectorize|view2dToolCtx|viewCamera|viewClipPlane|viewFit|viewHeadOn|viewLookAt|viewManip|viewPlace|viewSet|visor|volumeAxis|vortex|waitCursor|warning|webBrowser|webBrowserPrefs|whatIs|window|windowPref|wire|wireContext|workspace|wrinkle|wrinkleContext|writeTake|xbmLangPathList|xform)\b/,
          operator: [
            /\+[+=]?|-[-=]?|&&|\|\||[<>]=|[*\/!=]=?|[%^]/,
            { pattern: /(^|[^<])<(?!<)/, lookbehind: !0 },
            { pattern: /(^|[^>])>(?!>)/, lookbehind: !0 }
          ],
          punctuation: /<<|>>|[.,:;?\[\](){}]/
        }),
          (e.languages.mel.code.inside.rest = e.languages.mel)
      }
      ;(e.exports = o), (o.displayName = 'mel'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.mizar = {
          comment: /::.+/,
          keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
          parameter: { pattern: /\$(?:10|\d)/, alias: 'variable' },
          variable: /\w+(?=:)/,
          number: /(?:\b|-)\d+\b/,
          operator: /\.\.\.|->|&|\.?=/,
          punctuation: /\(#|#\)|[,:;\[\](){}]/
        }
      }
      ;(e.exports = o), (o.displayName = 'mizar'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.monkey = {
          string: /"[^"\r\n]*"/,
          comment: [{ pattern: /^#Rem\s+[\s\S]*?^#End/im, greedy: !0 }, { pattern: /'.+/, greedy: !0 }],
          preprocessor: { pattern: /(^[ \t]*)#.+/m, lookbehind: !0, alias: 'comment' },
          function: /\w+(?=\()/,
          'type-char': { pattern: /(\w)[?%#$]/, lookbehind: !0, alias: 'variable' },
          number: { pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i, lookbehind: !0 },
          keyword: /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
          operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
          punctuation: /[.,:;()\[\]]/
        }
      }
      ;(e.exports = o), (o.displayName = 'monkey'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.n4js = e.languages.extend('javascript', {
          keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
        })),
          e.languages.insertBefore('n4js', 'constant', { annotation: { pattern: /@+\w+/, alias: 'operator' } }),
          (e.languages.n4jsd = e.languages.n4js)
      }
      ;(e.exports = o), (o.displayName = 'n4js'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.nasm = {
          comment: /;.*$/m,
          string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          label: { pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m, lookbehind: !0, alias: 'function' },
          keyword: [
            /\[?BITS (?:16|32|64)\]?/,
            { pattern: /(^\s*)section\s*[a-zA-Z.]+:?/im, lookbehind: !0 },
            /(?:extern|global)[^;\r\n]*/i,
            /(?:CPU|FLOAT|DEFAULT).*$/m
          ],
          register: {
            pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i,
            alias: 'variable'
          },
          number: /(?:\b|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i,
          operator: /[\[\]*+\-\/%<>=&|$!]/
        }
      }
      ;(e.exports = o), (o.displayName = 'nasm'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.nginx = e.languages.extend('clike', {
          comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 },
          keyword: /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|events|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i
        })),
          e.languages.insertBefore('nginx', 'keyword', { variable: /\$[a-z_]+/i })
      }
      ;(e.exports = o), (o.displayName = 'nginx'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.nim = {
          comment: /#.*/,
          string: {
            pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
            greedy: !0
          },
          number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
          keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
          function: {
            pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
            inside: { operator: /\*$/ }
          },
          ignore: { pattern: /`[^`\r\n]+`/, inside: { punctuation: /`/ } },
          operator: {
            pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
            lookbehind: !0
          },
          punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'nim'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.nix = {
          comment: /\/\*[\s\S]*?\*\/|#.*/,
          string: {
            pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
                lookbehind: !0,
                inside: { antiquotation: { pattern: /^\$(?=\{)/, alias: 'variable' } }
              }
            }
          },
          url: [
            /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
            {
              pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
              lookbehind: !0
            }
          ],
          antiquotation: { pattern: /\$(?=\{)/, alias: 'variable' },
          number: /\b\d+\b/,
          keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
          function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
          boolean: /\b(?:true|false)\b/,
          operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
          punctuation: /[{}()[\].,:;]/
        }),
          (e.languages.nix.string.inside.interpolation.inside.rest = e.languages.nix)
      }
      ;(e.exports = o), (o.displayName = 'nix'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.nsis = {
          comment: { pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|[#;].*)/, lookbehind: !0 },
          string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          keyword: {
            pattern: /(^\s*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(?:Font|Gradient|Image)|BrandingText|BringToFront|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DlgItem|DLLVersion(?:Local)?|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(?:Dialogs|Exec)|NSISdl|OutFile|Page(?:Callbacks)?|PE(?:DllCharacteristics|SubsysVer)|Pop|Push|Quit|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle)\b/m,
            lookbehind: !0
          },
          property: /\b(?:admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK((CR|CU|LM)(32|64)?|DD|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,
          constant: /\${[\w\.:\^-]+}|\$\([\w\.:\^-]+\)/i,
          variable: /\$\w+/i,
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
          operator: /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,
          punctuation: /[{}[\];(),.:]/,
          important: {
            pattern: /(^\s*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,
            lookbehind: !0
          }
        }
      }
      ;(e.exports = o), (o.displayName = 'nsis'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(37)
      function a(e) {
        e.register(o),
          (e.languages.objectivec = e.languages.extend('c', {
            keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
            string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
          }))
      }
      ;(e.exports = a), (a.displayName = 'objectivec'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i, greedy: !0 }
          ],
          number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
          type: { pattern: /\B['`]\w*/, alias: 'variable' },
          directive: { pattern: /\B#\w+/, alias: 'function' },
          keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
          punctuation: /[(){}\[\]|_.,:;]/
        }
      }
      ;(e.exports = o), (o.displayName = 'ocaml'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(37),
        a = n(58)
      function r(e) {
        e.register(o),
          e.register(a),
          (function(e) {
            e.languages.opencl = e.languages.extend('c', {
              keyword: /\b(?:__attribute__|(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|auto|break|case|cl_(?:image_format|mem_fence_flags)|clk_event_t|complex|const|continue|default|do|(?:float|double)(?:16(?:x(?:1|16|2|4|8))?|1x(?:1|16|2|4|8)|2(?:x(?:1|16|2|4|8))?|3|4(?:x(?:1|16|2|4|8))?|8(?:x(?:1|16|2|4|8))?)?|else|enum|event_t|extern|for|goto|(?:u?(?:char|short|int|long)|half|quad|bool)(?:2|3|4|8|16)?|if|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|imaginary|inline|intptr_t|ndrange_t|packed|pipe|ptrdiff_t|queue_t|register|reserve_id_t|restrict|return|sampler_t|signed|size_t|sizeof|static|struct|switch|typedef|uintptr_t|uniform|union|unsigned|void|volatile|while)\b/,
              'function-opencl-kernel': {
                pattern: /\b(?:abs(?:_diff)?|a?(?:cos|sin)(?:h|pi)?|add_sat|aligned|all|and|any|async(?:_work_group_copy|_work_group_strided_copy)?|atan(?:2?(?:pi)?|h)?|atom_(?:add|and|cmpxchg|dec|inc|max|min|or|sub|xchg|xor)|barrier|bitselect|cbrt|ceil|clamp|clz|copies|copysign|cross|degrees|distance|dot|endian|erf|erfc|exp(?:2|10)?|expm1|fabs|fast_(?:distance|length|normalize)|fdim|floor|fma|fmax|fmin|fract|frexp|fro|from|get_(?:global_(?:id|offset|size)|group_id|image_(?:channel_data_type|channel_order|depth|dim|height|width)|local(?:_id|_size)|num_groups|work_dim)|hadd|(?:half|native)_(?:cos|divide|exp(?:2|10)?|log(?:2|10)?|powr|recip|r?sqrt|sin|tan)|hypot|ilogb|is(?:equal|finite|greater(?:equal)?|inf|less(?:equal|greater)?|nan|normal|notequal|(?:un)?ordered)|ldexp|length|lgamma|lgamma_r|log(?:b|1p|2|10)?|mad(?:24|_hi|_sat)?|max|mem(?:_fence)?|min|mix|modf|mul24|mul_hi|nan|nextafter|normalize|pow[nr]?|prefetch|radians|read_(?:image)(?:f|h|u?i)|read_mem_fence|remainder|remquo|reqd_work_group_size|rhadd|rint|rootn|rotate|round|rsqrt|select|shuffle2?|sign|signbit|sincos|smoothstep|sqrt|step|sub_sat|tan|tanh|tanpi|tgamma|to|trunc|upsample|vec_(?:step|type_hint)|v(?:load|store)(?:_half)?(?:2|3|4|8|16)?|v(?:loada_half|storea?(?:_half)?)(?:2|3|4|8|16)?(?:_(?:rte|rtn|rtp|rtz))?|wait_group_events|work_group_size_hint|write_image(?:f|h|u?i)|write_mem_fence)\b/,
                alias: 'function'
              },
              'constant-opencl-kernel': {
                pattern: /\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:LOCAL|GLOBAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT)_(?:DIG|EPSILON|MANT_DIG|(?:MIN|MAX)(?:(?:_10)?_EXP)?)|FLT_RADIX|HUGE_VALF|INFINITY|(?:INT|LONG|SCHAR|SHRT|UCHAR|UINT|ULONG)_(?:MAX|MIN)|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN(?:2|10)|LOG(?:10|2)E?|PI[24]?|SQRT(?:1_2|2))|NAN)\b/,
                alias: 'constant'
              }
            })
            var t = {
              'type-opencl-host': {
                pattern: /\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|short|int|long)|float|double)(?:2|3|4|8|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,
                alias: 'keyword'
              },
              'boolean-opencl-host': { pattern: /\bCL_(?:TRUE|FALSE)\b/, alias: 'boolean' },
              'constant-opencl-host': {
                pattern: /\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BGRA|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|R|RA|READ_(?:ONLY|WRITE)_CACHE|RG|RGB|RGBA|RGBx|RGx|RUNNING|Rx|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:16|24|8|_101010|_101010_2)|UNORM_SHORT_(?:555|565)|VERSION_(?:1_0|1_1|1_2|2_0|2_1)|sBGRA|sRGB|sRGBA|sRGBx)\b/,
                alias: 'constant'
              },
              'function-opencl-host': {
                pattern: /\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image2D|Image3D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|Kernel|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,
                alias: 'function'
              }
            }
            e.languages.insertBefore('c', 'keyword', t),
              (t['type-opencl-host-c++'] = {
                pattern: /\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image|Image1D|Image1DArray|Image1DBuffer|Image2D|Image2DArray|Image2DGL|Image3D|Image3DGL|ImageFormat|ImageGL|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|Sampler|SVMAllocator|SVMTraitAtomic|SVMTraitCoarse|SVMTraitFine|SVMTraitReadOnly|SVMTraitReadWrite|SVMTraitWriteOnly|UserEvent)\b/,
                alias: 'keyword'
              }),
              e.languages.insertBefore('cpp', 'keyword', t)
          })(e)
      }
      ;(e.exports = r), (r.displayName = 'opencl'), (r.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.oz = {
          comment: /\/\*[\s\S]*?\*\/|%.*/,
          string: { pattern: /"(?:[^"\\]|\\[\s\S])*"/, greedy: !0 },
          atom: { pattern: /'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, alias: 'builtin' },
          keyword: /[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
          function: [/[a-z][A-Za-z\d]*(?=\()/, { pattern: /(\{)[A-Z][A-Za-z\d]*/, lookbehind: !0 }],
          number: /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,
          variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
          'attr-name': /\w+(?=:)/,
          operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
          punctuation: /[\[\](){}.:;?]/
        }
      }
      ;(e.exports = o), (o.displayName = 'oz'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        var t
        e.languages.parigp = {
          comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
          string: { pattern: /"(?:[^"\\\r\n]|\\.)*"/, greedy: !0 },
          keyword: ((t = [
            'breakpoint',
            'break',
            'dbg_down',
            'dbg_err',
            'dbg_up',
            'dbg_x',
            'forcomposite',
            'fordiv',
            'forell',
            'forpart',
            'forprime',
            'forstep',
            'forsubgroup',
            'forvec',
            'for',
            'iferr',
            'if',
            'local',
            'my',
            'next',
            'return',
            'until',
            'while'
          ]),
          (t = t
            .map(function(e) {
              return e.split('').join(' *')
            })
            .join('|')),
          RegExp('\\b(?:' + t + ')\\b')),
          function: /\w[\w ]*?(?= *\()/,
          number: {
            pattern: /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
            lookbehind: !0
          },
          operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
          punctuation: /[\[\]{}().,:;|]/
        }
      }
      ;(e.exports = o), (o.displayName = 'parigp'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.parser = e.languages.extend('markup', {
          keyword: {
            pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
            lookbehind: !0
          },
          variable: {
            pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
            lookbehind: !0,
            inside: { punctuation: /\.|:+/ }
          },
          function: {
            pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
            lookbehind: !0,
            inside: { keyword: { pattern: /(^@)(?:GET_|SET_)/, lookbehind: !0 }, punctuation: /\.|:+/ }
          },
          escape: { pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i, alias: 'builtin' },
          punctuation: /[\[\](){};]/
        })),
          e.languages.insertBefore('parser', 'keyword', {
            'parser-comment': { pattern: /(\s)#.*/, lookbehind: !0, alias: 'comment' },
            expression: {
              pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
              greedy: !0,
              lookbehind: !0,
              inside: {
                string: { pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/, lookbehind: !0 },
                keyword: e.languages.parser.keyword,
                variable: e.languages.parser.variable,
                function: e.languages.parser.function,
                boolean: /\b(?:true|false)\b/,
                number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
                escape: e.languages.parser.escape,
                operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
                punctuation: e.languages.parser.punctuation
              }
            }
          }),
          e.languages.insertBefore(
            'inside',
            'punctuation',
            {
              expression: e.languages.parser.expression,
              keyword: e.languages.parser.keyword,
              variable: e.languages.parser.variable,
              function: e.languages.parser.function,
              escape: e.languages.parser.escape,
              'parser-punctuation': { pattern: e.languages.parser.punctuation, alias: 'punctuation' }
            },
            e.languages.parser.tag.inside['attr-value']
          )
      }
      ;(e.exports = o), (o.displayName = 'parser'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.pascal = {
          comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
          string: { pattern: /(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i, greedy: !0 },
          keyword: [
            {
              pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
              lookbehind: !0
            },
            { pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i, lookbehind: !0 },
            {
              pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
              lookbehind: !0
            },
            {
              pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
              lookbehind: !0
            }
          ],
          number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
          operator: [
            /\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i,
            { pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/, lookbehind: !0 }
          ],
          punctuation: /\(\.|\.\)|[()\[\]:;,.]/
        }
      }
      ;(e.exports = o), (o.displayName = 'pascal'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.perl = {
          comment: [
            { pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m, lookbehind: !0 },
            { pattern: /(^|[^\\$])#.*/, lookbehind: !0 }
          ],
          string: [
            { pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
            { pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
            { pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/, greedy: !0 },
            { pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/, greedy: !0 },
            { pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/, greedy: !0 },
            { pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/, greedy: !0 },
            { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
            { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 }
          ],
          regex: [
            { pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/, greedy: !0 },
            { pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/, greedy: !0 },
            { pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/, greedy: !0 },
            { pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/, greedy: !0 },
            { pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/, greedy: !0 },
            { pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/, greedy: !0 },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
              lookbehind: !0,
              greedy: !0
            },
            {
              pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
              greedy: !0
            }
          ],
          variable: [
            /[&*$@%]\{\^[A-Z]+\}/,
            /[&*$@%]\^[A-Z_]/,
            /[&*$@%]#?(?=\{)/,
            /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i,
            /[&*$@%]\d+/,
            /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
          ],
          filehandle: { pattern: /<(?![<=])\S*>|\b_\b/, alias: 'symbol' },
          vstring: { pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/, alias: 'string' },
          function: { pattern: /sub [a-z0-9_]+/i, inside: { keyword: /sub/ } },
          keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
          number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
          operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
          punctuation: /[{}[\];(),:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'perl'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(85)
      function a(e) {
        e.register(o),
          e.languages.insertBefore('php', 'variable', {
            this: /\$this\b/,
            global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
            scope: { pattern: /\b[\w\\]+::/, inside: { keyword: /static|self|parent/, punctuation: /::|\\/ } }
          })
      }
      ;(e.exports = a), (a.displayName = 'phpExtras'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(86)
      function a(e) {
        e.register(o),
          (e.languages.plsql = e.languages.extend('sql', { comment: [/\/\*[\s\S]*?\*\//, /--.*/] })),
          'Array' !== e.util.type(e.languages.plsql.keyword) &&
            (e.languages.plsql.keyword = [e.languages.plsql.keyword]),
          e.languages.plsql.keyword.unshift(
            /\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i
          ),
          'Array' !== e.util.type(e.languages.plsql.operator) &&
            (e.languages.plsql.operator = [e.languages.plsql.operator]),
          e.languages.plsql.operator.unshift(/:=/)
      }
      ;(e.exports = a), (a.displayName = 'plsql'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.powershell = {
          comment: [{ pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 }, { pattern: /(^|[^`])#.*/, lookbehind: !0 }],
          string: [
            {
              pattern: /"(?:`[\s\S]|[^`"])*"/,
              greedy: !0,
              inside: { function: { pattern: /(^|[^`])\$\(.*?\)/, lookbehind: !0, inside: {} } }
            },
            { pattern: /'(?:[^']|'')*'/, greedy: !0 }
          ],
          namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
          boolean: /\$(?:true|false)\b/i,
          variable: /\$\w+\b/i,
          function: [
            /\b(?:Add-(?:Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(?:Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(?:Csv|Json|StringData)|Convert-Path|ConvertTo-(?:Csv|Html|Json|Xml)|Copy-(?:Item|ItemProperty)|Debug-Process|Disable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(?:Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(?:Custom|List|Table|Wide)|Get-(?:Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(?:Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(?:Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(?:Command|Object)|Move-(?:Item|ItemProperty)|New-(?:Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(?:Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(?:Job|PSSession)|Register-(?:EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(?:Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(?:Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(?:Computer|Service)|Restore-Computer|Resume-(?:Job|Service)|Save-Help|Select-(?:Object|String|Xml)|Send-MailMessage|Set-(?:Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(?:Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(?:Job|Process|Service|Sleep|Transaction)|Stop-(?:Computer|Job|Process|Service)|Suspend-(?:Job|Service)|Tee-Object|Test-(?:ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(?:Event|PSSessionConfiguration)|Update-(?:FormatData|Help|List|TypeData)|Use-Transaction|Wait-(?:Event|Job|Process)|Where-Object|Write-(?:Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i,
            /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
          ],
          keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
          operator: {
            pattern: /(\W?)(?:!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
            lookbehind: !0
          },
          punctuation: /[|{}[\];(),.]/
        }),
          (e.languages.powershell.string[0].inside.boolean = e.languages.powershell.boolean),
          (e.languages.powershell.string[0].inside.variable = e.languages.powershell.variable),
          (e.languages.powershell.string[0].inside.function.inside = e.languages.powershell)
      }
      ;(e.exports = o), (o.displayName = 'powershell'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.processing = e.languages.extend('clike', {
          keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
          operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
        })),
          e.languages.insertBefore('processing', 'number', {
            constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
            type: { pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/, alias: 'variable' }
          }),
          (e.languages.processing.function.pattern = /\w+(?=\s*\()/),
          (e.languages.processing['class-name'].alias = 'variable')
      }
      ;(e.exports = o), (o.displayName = 'processing'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.prolog = {
          comment: [/%.+/, /\/\*[\s\S]*?\*\//],
          string: { pattern: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
          variable: /\b[A-Z_]\w*/,
          function: /\b[a-z]\w*(?:(?=\()|\/\d+)/,
          number: /\b\d+\.?\d*/,
          operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
          punctuation: /[(){}\[\],]/
        }
      }
      ;(e.exports = o), (o.displayName = 'prolog'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.properties = {
          comment: /^[ \t]*[#!].*$/m,
          'attr-value': {
            pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
            lookbehind: !0
          },
          'attr-name': /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m,
          punctuation: /[=:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'properties'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.protobuf = e.languages.extend('clike', {
          keyword: /\b(?:package|import|message|enum)\b/,
          builtin: /\b(?:required|repeated|optional|reserved)\b/,
          primitive: {
            pattern: /\b(?:double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes)\b/,
            alias: 'symbol'
          }
        })
      }
      ;(e.exports = o), (o.displayName = 'protobuf'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          e.languages.pug = {
            comment: { pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m, lookbehind: !0 },
            'multiline-script': {
              pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0,
              inside: { rest: e.languages.javascript }
            },
            filter: {
              pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0,
              inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' } }
            },
            'multiline-plain-text': {
              pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
              lookbehind: !0
            },
            markup: { pattern: /(^[\t ]*)<.+/m, lookbehind: !0, inside: { rest: e.languages.markup } },
            doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
            'flow-control': {
              pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
              lookbehind: !0,
              inside: {
                each: { pattern: /^each .+? in\b/, inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ } },
                branch: { pattern: /^(?:if|unless|else|case|when|default|while)\b/, alias: 'keyword' },
                rest: e.languages.javascript
              }
            },
            keyword: { pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m, lookbehind: !0 },
            mixin: [
              {
                pattern: /(^[\t ]*)mixin .+/m,
                lookbehind: !0,
                inside: { keyword: /^mixin/, function: /\w+(?=\s*\(|\s*$)/, punctuation: /[(),.]/ }
              },
              {
                pattern: /(^[\t ]*)\+.+/m,
                lookbehind: !0,
                inside: { name: { pattern: /^\+\w+/, alias: 'function' }, rest: e.languages.javascript }
              }
            ],
            script: {
              pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
              lookbehind: !0,
              inside: { rest: e.languages.javascript }
            },
            'plain-text': {
              pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
              lookbehind: !0
            },
            tag: {
              pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
              lookbehind: !0,
              inside: {
                attributes: [
                  { pattern: /&[^(]+\([^)]+\)/, inside: { rest: e.languages.javascript } },
                  {
                    pattern: /\([^)]+\)/,
                    inside: {
                      'attr-value': {
                        pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                        lookbehind: !0,
                        inside: { rest: e.languages.javascript }
                      },
                      'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
                      punctuation: /[!=(),]+/
                    }
                  }
                ],
                punctuation: /:/
              }
            },
            code: [{ pattern: /(^[\t ]*(?:-|!?=)).+/m, lookbehind: !0, inside: { rest: e.languages.javascript } }],
            punctuation: /[.\-!=|]+/
          }
          for (
            var t = [
                { filter: 'atpl', language: 'twig' },
                { filter: 'coffee', language: 'coffeescript' },
                'ejs',
                'handlebars',
                'hogan',
                'less',
                'livescript',
                'markdown',
                'mustache',
                'plates',
                { filter: 'sass', language: 'scss' },
                'stylus',
                'swig'
              ],
              n = {},
              o = 0,
              a = t.length;
            o < a;
            o++
          ) {
            var r = t[o]
            ;(r = 'string' === typeof r ? { filter: r, language: r } : r),
              e.languages[r.language] &&
                (n['filter-' + r.filter] = {
                  pattern: RegExp(
                    '(^([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+'.replace(
                      '{{filter_name}}',
                      r.filter
                    ),
                    'm'
                  ),
                  lookbehind: !0,
                  inside: { 'filter-name': { pattern: /^:[\w-]+/, alias: 'variable' }, rest: e.languages[r.language] }
                })
          }
          e.languages.insertBefore('pug', 'filter', n)
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'pug'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          e.languages.puppet = {
            heredoc: [
              {
                pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
                lookbehind: !0,
                alias: 'string',
                inside: { punctuation: /(?=\S).*\S(?= *$)/ }
              },
              {
                pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
                lookbehind: !0,
                greedy: !0,
                alias: 'string',
                inside: { punctuation: /(?=\S).*\S(?= *$)/ }
              },
              {
                pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
                alias: 'string',
                inside: { punctuation: { pattern: /(\().+?(?=\))/, lookbehind: !0 } }
              }
            ],
            'multiline-comment': { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0, greedy: !0, alias: 'comment' },
            regex: {
              pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
              lookbehind: !0,
              greedy: !0,
              inside: {
                'extended-regex': { pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/, inside: { comment: /#.*/ } }
              }
            },
            comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
            string: {
              pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,
              greedy: !0,
              inside: { 'double-quoted': { pattern: /^"[\s\S]*"$/, inside: {} } }
            },
            variable: { pattern: /\$(?:::)?\w+(?:::\w+)*/, inside: { punctuation: /::/ } },
            'attr-name': /(?:\w+|\*)(?=\s*=>)/,
            function: [
              { pattern: /(\.)(?!\d)\w+/, lookbehind: !0 },
              /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/
            ],
            number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
            boolean: /\b(?:true|false)\b/,
            keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
            datatype: {
              pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
              alias: 'symbol'
            },
            operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
            punctuation: /[\[\]{}().,;]|:+/
          }
          var t = [
            {
              pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
              lookbehind: !0,
              inside: {
                'short-variable': {
                  pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
                  lookbehind: !0,
                  alias: 'variable',
                  inside: { punctuation: /::/ }
                },
                delimiter: { pattern: /^\$/, alias: 'variable' },
                rest: e.languages.puppet
              }
            },
            {
              pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
              lookbehind: !0,
              alias: 'variable',
              inside: { punctuation: /::/ }
            }
          ]
          ;(e.languages.puppet.heredoc[0].inside.interpolation = t),
            (e.languages.puppet.string.inside['double-quoted'].inside.interpolation = t)
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'puppet'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(37)
      function a(e) {
        e.register(o),
          (function(e) {
            e.languages.pure = {
              comment: [
                { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
                { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
                /#!.+/
              ],
              'inline-lang': {
                pattern: /%<[\s\S]+?%>/,
                greedy: !0,
                inside: {
                  lang: { pattern: /(^%< *)-\*-.+?-\*-/, lookbehind: !0, alias: 'comment' },
                  delimiter: { pattern: /^%<.*|%>$/, alias: 'punctuation' }
                }
              },
              string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 },
              number: {
                pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,
                lookbehind: !0
              },
              keyword: /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
              function: /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
              special: { pattern: /\b__[a-z]+__\b/i, alias: 'builtin' },
              operator: /(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,
              punctuation: /[(){}\[\];,|]/
            }
            ;['c', { lang: 'c++', alias: 'cpp' }, 'fortran', 'ats', 'dsp'].forEach(function(t) {
              var n = t
              if (('string' !== typeof t && ((n = t.alias), (t = t.lang)), e.languages[n])) {
                var o = {}
                ;(o['inline-lang-' + n] = {
                  pattern: RegExp(
                    '%< *-\\*- *{lang}\\d* *-\\*-[\\s\\S]+?%>'.replace(
                      '{lang}',
                      t.replace(/([.+*?\/\\(){}\[\]])/g, '\\$1')
                    ),
                    'i'
                  ),
                  inside: e.util.clone(e.languages.pure['inline-lang'].inside)
                }),
                  (o['inline-lang-' + n].inside.rest = e.util.clone(e.languages[n])),
                  e.languages.insertBefore('pure', 'inline-lang', o)
              }
            }),
              e.languages.c && (e.languages.pure['inline-lang'].inside.rest = e.util.clone(e.languages.c))
          })(e)
      }
      ;(e.exports = a), (a.displayName = 'pure'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          'triple-quoted-string': { pattern: /("""|''')[\s\S]+?\1/, greedy: !0, alias: 'string' },
          string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
          punctuation: /[{}[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'python'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.q = {
          string: /"(?:\\.|[^"\\\r\n])*"/,
          comment: [
            { pattern: /([\t )\]}])\/.*/, lookbehind: !0, greedy: !0 },
            {
              pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
              lookbehind: !0,
              greedy: !0
            },
            { pattern: /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m, greedy: !0 },
            { pattern: /^#!.+/m, greedy: !0 }
          ],
          symbol: /`(?::\S+|[\w.]*)/,
          datetime: {
            pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
            alias: 'number'
          },
          number: /\b(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,
          keyword: /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
          adverb: { pattern: /['\/\\]:?|\beach\b/, alias: 'function' },
          verb: { pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?_~=|$&#@^]):?/, alias: 'operator' },
          punctuation: /[(){}\[\];.]/
        }
      }
      ;(e.exports = o), (o.displayName = 'q'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.qore = e.languages.extend('clike', {
          comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/, lookbehind: !0 },
          string: { pattern: /("|')(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
          variable: /\$(?!\d)\w+\b/,
          keyword: /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
          number: /\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,
          boolean: /\b(?:true|false)\b/i,
          operator: {
            pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
            lookbehind: !0
          },
          function: /\$?\b(?!\d)\w+(?=\()/
        })
      }
      ;(e.exports = o), (o.displayName = 'qore'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.r = {
          comment: /#.*/,
          string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'percent-operator': { pattern: /%[^%\s]*%/, alias: 'operator' },
          boolean: /\b(?:TRUE|FALSE)\b/,
          ellipsis: /\.\.(?:\.|\d+)/,
          number: [/\b(?:NaN|Inf)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],
          keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
          operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
          punctuation: /[(){}\[\],;]/
        }
      }
      ;(e.exports = o), (o.displayName = 'r'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.reason = e.languages.extend('clike', {
          comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
          string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
          'class-name': /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
        })),
          e.languages.insertBefore('reason', 'class-name', {
            character: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, alias: 'string' },
            constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: 'variable' },
            label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' }
          }),
          delete e.languages.reason.function
      }
      ;(e.exports = o), (o.displayName = 'reason'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.renpy = {
          comment: { pattern: /(^|[^\\])#.+/, lookbehind: !0 },
          string: {
            pattern: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2|(?:^#?(?:(?:[0-9a-fA-F]{2}){3}|(?:[0-9a-fA-F]){3})$)/m,
            greedy: !0
          },
          function: /[a-z_]\w*(?=\()/i,
          property: /\b(?:insensitive|idle|hover|selected_idle|selected_hover|background|position|alt|xpos|ypos|pos|xanchor|yanchor|anchor|xalign|yalign|align|xcenter|ycenter|xofsset|yoffset|ymaximum|maximum|xmaximum|xminimum|yminimum|minimum|xsize|ysizexysize|xfill|yfill|area|antialias|black_color|bold|caret|color|first_indent|font|size|italic|justify|kerning|language|layout|line_leading|line_overlap_split|line_spacing|min_width|newline_indent|outlines|rest_indent|ruby_style|slow_cps|slow_cps_multiplier|strikethrough|text_align|underline|hyperlink_functions|vertical|hinting|foreground|left_margin|xmargin|top_margin|bottom_margin|ymargin|left_padding|right_padding|xpadding|top_padding|bottom_padding|ypadding|size_group|child|hover_sound|activate_sound|mouse|focus_mask|keyboard_focus|bar_vertical|bar_invert|bar_resizing|left_gutter|right_gutter|top_gutter|bottom_gutter|left_bar|right_bar|top_bar|bottom_bar|thumb|thumb_shadow|thumb_offset|unscrollable|spacing|first_spacing|box_reverse|box_wrap|order_reverse|fit_first|ysize|thumbnail_width|thumbnail_height|help|text_ypos|text_xpos|idle_color|hover_color|selected_idle_color|selected_hover_color|insensitive_color|alpha|insensitive_background|hover_background|zorder|value|width|xadjustment|xanchoraround|xaround|xinitial|xoffset|xzoom|yadjustment|yanchoraround|yaround|yinitial|yzoom|zoom|ground|height|text_style|text_y_fudge|selected_insensitive|has_sound|has_music|has_voice|focus|hovered|image_style|length|minwidth|mousewheel|offset|prefix|radius|range|right_margin|rotate|rotate_pad|developer|screen_width|screen_height|window_title|name|version|windows_icon|default_fullscreen|default_text_cps|default_afm_time|main_menu_music|sample_sound|enter_sound|exit_sound|save_directory|enter_transition|exit_transition|intra_transition|main_game_transition|game_main_transition|end_splash_transition|end_game_transition|after_load_transition|window_show_transition|window_hide_transition|adv_nvl_transition|nvl_adv_transition|enter_yesno_transition|exit_yesno_transition|enter_replay_transition|exit_replay_transition|say_attribute_transition|directory_name|executable_name|include_update|window_icon|modal|google_play_key|google_play_salt|drag_name|drag_handle|draggable|dragged|droppable|dropped|narrator_menu|action|default_afm_enable|version_name|version_tuple|inside|fadeout|fadein|layers|layer_clipping|linear|scrollbars|side_xpos|side_ypos|side_spacing|edgescroll|drag_joined|drag_raise|drop_shadow|drop_shadow_color|subpixel|easein|easeout|time|crop|auto|update|get_installed_packages|can_update|UpdateVersion|Update|overlay_functions|translations|window_left_padding|show_side_image|show_two_window)\b/,
          tag: /\b(?:label|image|menu|[hv]box|frame|text|imagemap|imagebutton|bar|vbar|screen|textbutton|buttoscreenn|fixed|grid|input|key|mousearea|side|timer|viewport|window|hotspot|hotbar|self|button|drag|draggroup|tag|mm_menu_frame|nvl|block|parallel)\b|\$/,
          keyword: /\b(?:as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|yield|adjustment|alignaround|allow|angle|around|box_layout|cache|changed|child_size|clicked|clipping|corner1|corner2|default|delay|exclude|scope|slow|slow_abortable|slow_done|sound|style_group|substitute|suffix|transform_anchor|transpose|unhovered|config|theme|mm_root|gm_root|rounded_window|build|disabled_text|disabled|widget_selected|widget_text|widget_hover|widget|updater|behind|call|expression|hide|init|jump|onlayer|python|renpy|scene|set|show|transform|play|queue|stop|pause|define|window|repeat|contains|choice|on|function|event|animation|clockwise|counterclockwise|circles|knot|null|None|random|has|add|use|fade|dissolve|style|store|id|voice|center|left|right|less_rounded|music|movie|clear|persistent|ui)\b/,
          boolean: /\b(?:[Tt]rue|[Ff]alse)\b/,
          number: /(?:\b(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*)|\B\.\d+)(?:e[+-]?\d+)?j?/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at)\b/,
          punctuation: /[{}[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'renpy'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.rest = {
          table: [
            {
              pattern: /(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1(?:[+|].+)+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,
              lookbehind: !0,
              inside: { punctuation: /\||(?:\+[=-]+)+\+/ }
            },
            {
              pattern: /(\s*)(?:=+ +)+=+(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1(?:=+ +)+=+(?=(?:\r?\n|\r){2}|\s*$)/,
              lookbehind: !0,
              inside: { punctuation: /[=-]+/ }
            }
          ],
          'substitution-def': {
            pattern: /(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
            lookbehind: !0,
            inside: {
              substitution: {
                pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
                alias: 'attr-value',
                inside: { punctuation: /^\||\|$/ }
              },
              directive: { pattern: /( +)[^:]+::/, lookbehind: !0, alias: 'function', inside: { punctuation: /::$/ } }
            }
          },
          'link-target': [
            { pattern: /(^\s*\.\. )\[[^\]]+\]/m, lookbehind: !0, alias: 'string', inside: { punctuation: /^\[|\]$/ } },
            {
              pattern: /(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
              lookbehind: !0,
              alias: 'string',
              inside: { punctuation: /^_|:$/ }
            }
          ],
          directive: {
            pattern: /(^\s*\.\. )[^:]+::/m,
            lookbehind: !0,
            alias: 'function',
            inside: { punctuation: /::$/ }
          },
          comment: { pattern: /(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m, lookbehind: !0 },
          title: [
            {
              pattern: /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
              inside: {
                punctuation: /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                important: /.+/
              }
            },
            {
              pattern: /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
              lookbehind: !0,
              inside: { punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/, important: /.+/ }
            }
          ],
          hr: {
            pattern: /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
            lookbehind: !0,
            alias: 'punctuation'
          },
          field: { pattern: /(^\s*):[^:\r\n]+:(?= )/m, lookbehind: !0, alias: 'attr-name' },
          'command-line-option': {
            pattern: /(^\s*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
            lookbehind: !0,
            alias: 'symbol'
          },
          'literal-block': {
            pattern: /::(?:\r?\n|\r){2}([ \t]+).+(?:(?:\r?\n|\r)\1.+)*/,
            inside: { 'literal-block-punctuation': { pattern: /^::/, alias: 'punctuation' } }
          },
          'quoted-literal-block': {
            pattern: /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
            inside: {
              'literal-block-punctuation': {
                pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
                alias: 'punctuation'
              }
            }
          },
          'list-bullet': {
            pattern: /(^\s*)(?:[*+\-\u2022\u2023\u2043]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
            lookbehind: !0,
            alias: 'punctuation'
          },
          'doctest-block': {
            pattern: /(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,
            lookbehind: !0,
            inside: { punctuation: /^>>>/ }
          },
          inline: [
            {
              pattern: /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
              lookbehind: !0,
              inside: {
                bold: { pattern: /(^\*\*).+(?=\*\*$)/, lookbehind: !0 },
                italic: { pattern: /(^\*).+(?=\*$)/, lookbehind: !0 },
                'inline-literal': { pattern: /(^``).+(?=``$)/, lookbehind: !0, alias: 'symbol' },
                role: { pattern: /^:[^:]+:|:[^:]+:$/, alias: 'function', inside: { punctuation: /^:|:$/ } },
                'interpreted-text': { pattern: /(^`).+(?=`$)/, lookbehind: !0, alias: 'attr-value' },
                substitution: { pattern: /(^\|).+(?=\|$)/, lookbehind: !0, alias: 'attr-value' },
                punctuation: /\*\*?|``?|\|/
              }
            }
          ],
          link: [
            {
              pattern: /\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
              alias: 'string',
              inside: { punctuation: /^\[|\]_$/ }
            },
            {
              pattern: /(?:\b[a-z\d](?:[_.:+]?[a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
              alias: 'string',
              inside: { punctuation: /^_?`|`$|`?_?_$/ }
            }
          ],
          punctuation: { pattern: /(^\s*)(?:\|(?= |$)|(?:---?|\u2014|\.\.|__)(?= )|\.\.$)/m, lookbehind: !0 }
        }
      }
      ;(e.exports = o), (o.displayName = 'rest'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.rip = {
          comment: /#.*/,
          keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
          builtin: /@|\bSystem\b/,
          boolean: /\b(?:true|false)\b/,
          date: /\b\d{4}-\d{2}-\d{2}\b/,
          time: /\b\d{2}:\d{2}:\d{2}\b/,
          datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
          character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
          regex: {
            pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0,
            greedy: !0
          },
          symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
          string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
          punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
          reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
        }
      }
      ;(e.exports = o), (o.displayName = 'rip'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.roboconf = {
          comment: /#.*/,
          keyword: {
            pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
            lookbehind: !0
          },
          component: { pattern: /[\w-]+(?=[ \t]*\{)/, alias: 'variable' },
          property: /[\w.-]+(?=[ \t]*:)/,
          value: { pattern: /(=[ \t]*)[^,;]+/, lookbehind: !0, alias: 'attr-value' },
          optional: { pattern: /\(optional\)/, alias: 'builtin' },
          wildcard: { pattern: /(\.)\*/, lookbehind: !0, alias: 'operator' },
          punctuation: /[{},.;:=]/
        }
      }
      ;(e.exports = o), (o.displayName = 'roboconf'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.rust = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }
          ],
          string: [
            { pattern: /b?r(#*)"(?:\\.|(?!"\1)[^\\\r\n])*"\1/, greedy: !0 },
            { pattern: /b?"(?:\\.|[^\\\r\n"])*"/, greedy: !0 }
          ],
          char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u{(?:[\da-fA-F]_*){1,6}|.)|[^\\\r\n\t'])'/, alias: 'string' },
          'lifetime-annotation': { pattern: /'[^\s>']+/, alias: 'symbol' },
          keyword: /\b(?:abstract|alignof|as|be|box|break|const|continue|crate|do|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|struct|super|true|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\b/,
          attribute: { pattern: /#!?\[.+?\]/, greedy: !0, alias: 'attr-name' },
          function: [/\w+(?=\s*\()/, /\w+!(?=\s*\(|\[)/],
          'macro-rules': { pattern: /\w+!/, alias: 'function' },
          number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
          'closure-params': { pattern: /\|[^|]*\|(?=\s*[{-])/, inside: { punctuation: /[|:,]/, operator: /[&*]/ } },
          punctuation: /[{}[\];(),:]|\.+|->/,
          operator: /[-+*\/%!^]=?|=[=>]?|@|&[&=]?|\|[|=]?|<<?=?|>>?=?/
        }
      }
      ;(e.exports = o), (o.displayName = 'rust'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.sas = {
          datalines: {
            pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
            alias: 'string',
            inside: { keyword: { pattern: /^(\s*)(?:(?:data)?lines|cards)/i, lookbehind: !0 }, punctuation: /;/ }
          },
          comment: [{ pattern: /(^\s*|;\s*)\*.*;/m, lookbehind: !0 }, /\/\*[\s\S]+?\*\//],
          datetime: { pattern: /'[^']+'(?:dt?|t)\b/i, alias: 'number' },
          string: { pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, greedy: !0 },
          keyword: /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then)\b/i,
          number: /\b(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
          operator: /\*\*?|\|\|?|!!?|\xa6\xa6?|<[>=]?|>[<=]?|[-+\/=&]|[~\xac^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
          punctuation: /[$%@.(){}\[\];,\\]/
        }
      }
      ;(e.exports = o), (o.displayName = 'sas'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          ;(e.languages.sass = e.languages.extend('css', {
            comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 }
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': { pattern: /^(?:[ \t]*)[@+=].+/m, inside: { atrule: /(?:@[\w-]+|[+=])/m } }
            }),
            delete e.languages.sass.atrule
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }]
          e.languages.insertBefore('sass', 'property', {
            'variable-line': { pattern: /^[ \t]*\$.+/m, inside: { punctuation: /:/, variable: t, operator: n } },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important
              }
            }
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            delete e.languages.sass.selector,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0
              }
            })
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'sass'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(83)
      function a(e) {
        e.register(o),
          (e.languages.scala = e.languages.extend('java', {
            keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
            string: [
              { pattern: /"""[\s\S]*?"""/, greedy: !0 },
              { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 }
            ],
            builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
            number: /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,
            symbol: /'[^\d\s\\]\w*/
          })),
          delete e.languages.scala['class-name'],
          delete e.languages.scala.function
      }
      ;(e.exports = a), (a.displayName = 'scala'), (a.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.scheme = {
          comment: /;.*/,
          string: { pattern: /"(?:[^"\\\r\n]|\\.)*"|'[^('\s]*/, greedy: !0 },
          keyword: {
            pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)/,
            lookbehind: !0
          },
          builtin: {
            pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)/,
            lookbehind: !0
          },
          number: { pattern: /(\s|[()])[-+]?\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?\b/, lookbehind: !0 },
          boolean: /#[tf]/,
          operator: { pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)/, lookbehind: !0 },
          function: { pattern: /(\()[^\s()]*(?=\s)/, lookbehind: !0 },
          punctuation: /[()]/
        }
      }
      ;(e.exports = o), (o.displayName = 'scheme'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.scss = e.languages.extend('css', {
          comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
          atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } },
          url: /(?:[-a-z]+-)*url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
          }
        })),
          e.languages.insertBefore('scss', 'atrule', {
            keyword: [
              /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
              { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }
            ]
          }),
          (e.languages.scss.property = {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }
          }),
          e.languages.insertBefore('scss', 'important', { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }),
          e.languages.insertBefore('scss', 'function', {
            placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
            statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
            boolean: /\b(?:true|false)\b/,
            null: /\bnull\b/,
            operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 }
          }),
          (e.languages.scss.atrule.inside.rest = e.languages.scss)
      }
      ;(e.exports = o), (o.displayName = 'scss'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.smalltalk = {
          comment: /"(?:""|[^"])+"/,
          string: /'(?:''|[^'])+'/,
          symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
          'block-arguments': {
            pattern: /(\[\s*):[^\[|]*\|/,
            lookbehind: !0,
            inside: { variable: /:[\da-z]+/i, punctuation: /\|/ }
          },
          'temporary-variables': { pattern: /\|[^|]+\|/, inside: { variable: /[\da-z]+/i, punctuation: /\|/ } },
          keyword: /\b(?:nil|true|false|self|super|new)\b/,
          character: { pattern: /\$./, alias: 'string' },
          number: [/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/, /\b\d+(?:\.\d+)?(?:e-?\d+)?/],
          operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
          punctuation: /[.;:?\[\](){}]/
        }
      }
      ;(e.exports = o), (o.displayName = 'smalltalk'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          ;(e.languages.smarty = {
            comment: /\{\*[\s\S]*?\*\}/,
            delimiter: { pattern: /^\{|\}$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
            variable: [
              /\$(?!\d)\w+/,
              /#(?!\d)\w+#/,
              { pattern: /(\.|->)(?!\d)\w+/, lookbehind: !0 },
              { pattern: /(\[)(?!\d)\w+(?=\])/, lookbehind: !0 }
            ],
            function: [{ pattern: /(\|\s*)@?(?!\d)\w+/, lookbehind: !0 }, /^\/?(?!\d)\w+/, /(?!\d)\w+(?=\()/],
            'attr-name': {
              pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
              inside: { variable: { pattern: /(=\s*)(?!\d)\w+/, lookbehind: !0 }, operator: /=/ }
            },
            punctuation: [/[\[\]().,:`]|->/],
            operator: [
              /[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,
              /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,
              /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/
            ],
            keyword: /\b(?:false|off|on|no|true|yes)\b/
          }),
            e.languages.insertBefore('smarty', 'tag', {
              'smarty-comment': { pattern: /\{\*[\s\S]*?\*\}/, alias: ['smarty', 'comment'] }
            }),
            e.hooks.add('before-tokenize', function(t) {
              var n = !1
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'smarty',
                /\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,
                function(e) {
                  return '{/literal}' === e && (n = !1), !n && ('{literal}' === e && (n = !0), !0)
                }
              )
            }),
            e.hooks.add('after-tokenize', function(t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'smarty')
            })
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'smarty'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            n = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/
          ;(e.languages.soy = {
            comment: [/\/\*[\s\S]*?\*\//, { pattern: /(\s)\/\/.*/, lookbehind: !0, greedy: !0 }],
            'command-arg': {
              pattern: /({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,
              lookbehind: !0,
              alias: 'string',
              inside: { punctuation: /\./ }
            },
            parameter: { pattern: /({+\/?\s*@?param\??\s+)\.?[\w.]+/, lookbehind: !0, alias: 'variable' },
            keyword: [
              {
                pattern: /({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,
                lookbehind: !0
              },
              /\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/
            ],
            delimiter: { pattern: /^{+\/?|\/?}+$/, alias: 'punctuation' },
            property: /\w+(?==)/,
            variable: {
              pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,
              inside: { string: { pattern: t, greedy: !0 }, number: n, punctuation: /[\[\].?]/ }
            },
            string: { pattern: t, greedy: !0 },
            function: [/\w+(?=\()/, { pattern: /(\|[^\S\r\n]*)\w+/, lookbehind: !0 }],
            boolean: /\b(?:true|false)\b/,
            number: n,
            operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,
            punctuation: /[{}()\[\]|.,:]/
          }),
            e.hooks.add('before-tokenize', function(t) {
              var n = !1
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'soy',
                /{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g,
                function(e) {
                  return '{/literal}' === e && (n = !1), !n && ('{literal}' === e && (n = !0), !0)
                }
              )
            }),
            e.hooks.add('after-tokenize', function(t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'soy')
            })
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'soy'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = {
            url: /url\((["']?).*?\1\)/i,
            string: { pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/, greedy: !0 },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: { pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/, lookbehind: !0 },
            hexcode: /#[\da-f]{3,6}/i,
            number: /\b\d+(?:\.\d+)?%?/,
            boolean: /\b(?:true|false)\b/,
            operator: [
              /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
            ],
            punctuation: /[{}()\[\];:,]/
          }
          ;(t.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: { delimiter: { pattern: /^{|}$/, alias: 'punctuation' }, rest: t }
          }),
            (t.func = { pattern: /[\w-]+\([^)]*\).*/, inside: { function: /^[^(]+/, rest: t } }),
            (e.languages.stylus = {
              comment: { pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
              'atrule-declaration': { pattern: /(^\s*)@.+/m, lookbehind: !0, inside: { atrule: /^@[\w-]+/, rest: t } },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: t }
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: t }
              },
              'property-declaration': {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: { property: { pattern: /^[^\s:]+/, inside: { interpolation: t.interpolation } }, rest: t }
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: { interpolation: t.interpolation, punctuation: /[{},]/ }
              },
              func: t.func,
              string: t.string,
              interpolation: t.interpolation,
              punctuation: /[{}()\[\];:.]/
            })
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'stylus'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.swift = e.languages.extend('clike', {
          string: {
            pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                inside: { delimiter: { pattern: /^\\\(|\)$/, alias: 'variable' } }
              }
            }
          },
          keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|Protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
          number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
          constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
          atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
          builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
        })),
          (e.languages.swift.string.inside.interpolation.inside.rest = e.languages.swift)
      }
      ;(e.exports = o), (o.displayName = 'swift'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.tcl = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          string: { pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/, greedy: !0 },
          variable: [
            { pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/, lookbehind: !0 },
            { pattern: /(\$){[^}]+}/, lookbehind: !0 },
            { pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m, lookbehind: !0 }
          ],
          function: { pattern: /(^\s*proc[ \t]+)[^\s]+/m, lookbehind: !0 },
          builtin: [
            {
              pattern: /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
              lookbehind: !0
            },
            /\b(?:elseif|else)\b/
          ],
          scope: { pattern: /(^\s*)(?:global|upvar|variable)\b/m, lookbehind: !0, alias: 'constant' },
          keyword: {
            pattern: /(^\s*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
            lookbehind: !0
          },
          operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
          punctuation: /[{}()\[\]]/
        }
      }
      ;(e.exports = o), (o.displayName = 'tcl'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          var t = '(?:\\([^|)]+\\)|\\[[^\\]]+\\]|\\{[^}]+\\})+',
            n = {
              css: { pattern: /\{[^}]+\}/, inside: { rest: e.languages.css } },
              'class-id': { pattern: /(\()[^)]+(?=\))/, lookbehind: !0, alias: 'attr-value' },
              lang: { pattern: /(\[)[^\]]+(?=\])/, lookbehind: !0, alias: 'attr-value' },
              punctuation: /[\\\/]\d+|\S/
            }
          e.languages.textile = e.languages.extend('markup', {
            phrase: {
              pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
              lookbehind: !0,
              inside: {
                'block-tag': {
                  pattern: RegExp('^[a-z]\\w*(?:' + t + '|[<>=()])*\\.'),
                  inside: {
                    modifier: {
                      pattern: RegExp('(^[a-z]\\w*)(?:' + t + '|[<>=()])+(?=\\.)'),
                      lookbehind: !0,
                      inside: n
                    },
                    tag: /^[a-z]\w*/,
                    punctuation: /\.$/
                  }
                },
                list: {
                  pattern: RegExp('^[*#]+(?:' + t + ')?\\s+.+', 'm'),
                  inside: {
                    modifier: { pattern: RegExp('(^[*#]+)' + t), lookbehind: !0, inside: n },
                    punctuation: /^[*#]+/
                  }
                },
                table: {
                  pattern: RegExp(
                    '^(?:(?:' +
                      t +
                      '|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:' +
                      t +
                      '|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|',
                    'm'
                  ),
                  inside: {
                    modifier: {
                      pattern: RegExp('(^|\\|(?:\\r?\\n|\\r)?)(?:' + t + '|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)'),
                      lookbehind: !0,
                      inside: n
                    },
                    punctuation: /\||^\./
                  }
                },
                inline: {
                  pattern: RegExp('(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:' + t + ')?.+?\\1'),
                  inside: {
                    bold: { pattern: RegExp('(^(\\*\\*?)(?:' + t + ')?).+?(?=\\2)'), lookbehind: !0 },
                    italic: { pattern: RegExp('(^(__?)(?:' + t + ')?).+?(?=\\2)'), lookbehind: !0 },
                    cite: { pattern: RegExp('(^\\?\\?(?:' + t + ')?).+?(?=\\?\\?)'), lookbehind: !0, alias: 'string' },
                    code: { pattern: RegExp('(^@(?:' + t + ')?).+?(?=@)'), lookbehind: !0, alias: 'keyword' },
                    inserted: { pattern: RegExp('(^\\+(?:' + t + ')?).+?(?=\\+)'), lookbehind: !0 },
                    deleted: { pattern: RegExp('(^-(?:' + t + ')?).+?(?=-)'), lookbehind: !0 },
                    span: { pattern: RegExp('(^%(?:' + t + ')?).+?(?=%)'), lookbehind: !0 },
                    modifier: { pattern: RegExp('(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])' + t), lookbehind: !0, inside: n },
                    punctuation: /[*_%?@+\-^~]+/
                  }
                },
                'link-ref': {
                  pattern: /^\[[^\]]+\]\S+$/m,
                  inside: {
                    string: { pattern: /(\[)[^\]]+(?=\])/, lookbehind: !0 },
                    url: { pattern: /(\])\S+$/, lookbehind: !0 },
                    punctuation: /[\[\]]/
                  }
                },
                link: {
                  pattern: RegExp('"(?:' + t + ')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
                  inside: {
                    text: { pattern: RegExp('(^"(?:' + t + ')?)[^"]+(?=")'), lookbehind: !0 },
                    modifier: { pattern: RegExp('(^")' + t), lookbehind: !0, inside: n },
                    url: { pattern: /(:).+/, lookbehind: !0 },
                    punctuation: /[":]/
                  }
                },
                image: {
                  pattern: RegExp('!(?:' + t + '|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?'),
                  inside: {
                    source: {
                      pattern: RegExp('(^!(?:' + t + '|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)'),
                      lookbehind: !0,
                      alias: 'url'
                    },
                    modifier: { pattern: RegExp('(^!)(?:' + t + '|[<>=()])+'), lookbehind: !0, inside: n },
                    url: { pattern: /(:).+/, lookbehind: !0 },
                    punctuation: /[!:]/
                  }
                },
                footnote: { pattern: /\b\[\d+\]/, alias: 'comment', inside: { punctuation: /\[|\]/ } },
                acronym: {
                  pattern: /\b[A-Z\d]+\([^)]+\)/,
                  inside: { comment: { pattern: /(\()[^)]+(?=\))/, lookbehind: !0 }, punctuation: /[()]/ }
                },
                mark: { pattern: /\b\((?:TM|R|C)\)/, alias: 'comment', inside: { punctuation: /[()]/ } }
              }
            }
          })
          var o = {
            inline: e.languages.textile.phrase.inside.inline,
            link: e.languages.textile.phrase.inside.link,
            image: e.languages.textile.phrase.inside.image,
            footnote: e.languages.textile.phrase.inside.footnote,
            acronym: e.languages.textile.phrase.inside.acronym,
            mark: e.languages.textile.phrase.inside.mark
          }
          ;(e.languages.textile.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i),
            (e.languages.textile.phrase.inside.inline.inside.bold.inside = o),
            (e.languages.textile.phrase.inside.inline.inside.italic.inside = o),
            (e.languages.textile.phrase.inside.inline.inside.inserted.inside = o),
            (e.languages.textile.phrase.inside.inline.inside.deleted.inside = o),
            (e.languages.textile.phrase.inside.inline.inside.span.inside = o),
            (e.languages.textile.phrase.inside.table.inside.inline = o.inline),
            (e.languages.textile.phrase.inside.table.inside.link = o.link),
            (e.languages.textile.phrase.inside.table.inside.image = o.image),
            (e.languages.textile.phrase.inside.table.inside.footnote = o.footnote),
            (e.languages.textile.phrase.inside.table.inside.acronym = o.acronym),
            (e.languages.textile.phrase.inside.table.inside.mark = o.mark)
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'textile'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      var o = n(84),
        a = n(87)
      function r(e) {
        e.register(o), e.register(a)
        var t = e.util.clone(e.languages.typescript)
        e.languages.tsx = e.languages.extend('jsx', t)
      }
      ;(e.exports = r), (r.displayName = 'tsx'), (r.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.twig = {
          comment: /\{#[\s\S]*?#\}/,
          tag: {
            pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
            inside: {
              ld: { pattern: /^(?:\{\{-?|\{%-?\s*\w+)/, inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ } },
              rd: { pattern: /-?(?:%\}|\}\})$/, inside: { punctuation: /.*/ } },
              string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, inside: { punctuation: /^['"]|['"]$/ } },
              keyword: /\b(?:even|if|odd)\b/,
              boolean: /\b(?:true|false|null)\b/,
              number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
              operator: [
                {
                  pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                  lookbehind: !0
                },
                /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
              ],
              property: /\b[a-zA-Z_]\w*\b/,
              punctuation: /[()\[\]{}:.,]/
            }
          },
          other: { pattern: /\S(?:[\s\S]*\S)?/, inside: e.languages.markup }
        }
      }
      ;(e.exports = o), (o.displayName = 'twig'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.vbnet = e.languages.extend('basic', {
          keyword: /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDEC|CDBL|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEFAULT|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LINE INPUT|LET|LIB|LIKE|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPERATOR|OPEN|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHORT|SINGLE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SYNCLOCK|SWAP|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
          comment: [
            { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
            { pattern: /(^|[^\\:])'.*/, lookbehind: !0 }
          ]
        })
      }
      ;(e.exports = o), (o.displayName = 'vbnet'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          e.languages.velocity = e.languages.extend('markup', {})
          var t = {
            variable: {
              pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,
              lookbehind: !0,
              inside: {}
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            number: /\b\d+\b/,
            boolean: /\b(?:true|false)\b/,
            operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
            punctuation: /[(){}[\]:,.]/
          }
          ;(t.variable.inside = {
            string: t.string,
            function: { pattern: /([^\w-])[a-z][\w-]*(?=\()/, lookbehind: !0 },
            number: t.number,
            boolean: t.boolean,
            punctuation: t.punctuation
          }),
            e.languages.insertBefore('velocity', 'comment', {
              unparsed: {
                pattern: /(^|[^\\])#\[\[[\s\S]*?]]#/,
                lookbehind: !0,
                greedy: !0,
                inside: { punctuation: /^#\[\[|]]#$/ }
              },
              'velocity-comment': [
                { pattern: /(^|[^\\])#\*[\s\S]*?\*#/, lookbehind: !0, greedy: !0, alias: 'comment' },
                { pattern: /(^|[^\\])##.*/, lookbehind: !0, greedy: !0, alias: 'comment' }
              ],
              directive: {
                pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
                lookbehind: !0,
                inside: {
                  keyword: { pattern: /^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/, inside: { punctuation: /[{}]/ } },
                  rest: t
                }
              },
              variable: t.variable
            }),
            (e.languages.velocity.tag.inside['attr-value'].inside.rest = e.languages.velocity)
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'velocity'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.verilog = {
          comment: /\/\/.*|\/\*[\s\S]*?\*\//,
          string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
          property: /\B\$\w+\b/,
          constant: /\B`\w+\b/,
          function: /\w+(?=\()/,
          keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
          important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
          number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
          operator: /[-+{}^~%*\/?=!<>&|]+/,
          punctuation: /[[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'verilog'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.vhdl = {
          comment: /--.+/,
          'vhdl-vectors': { pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i, alias: 'number' },
          'quoted-function': { pattern: /"\S+?"(?=\()/, alias: 'function' },
          string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
          constant: /\b(?:use|library)\b/i,
          keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
          boolean: /\b(?:true|false)\b/i,
          function: /\w+(?=\()/,
          number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
          operator: /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
          punctuation: /[{}[\];(),.:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'vhdl'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.vim = {
          string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
          comment: /".*/,
          function: /\w+(?=\()/,
          keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
          builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
          number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
          operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
          punctuation: /[{}[\](),;:]/
        }
      }
      ;(e.exports = o), (o.displayName = 'vim'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages['visual-basic'] = {
          comment: { pattern: /(?:['\u2018\u2019]|REM\b).*/i, inside: { keyword: /^REM/i } },
          directive: {
            pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
            alias: 'comment',
            greedy: !0
          },
          string: { pattern: /["\u201c\u201d](?:["\u201c\u201d]{2}|[^"\u201c\u201d])*["\u201c\u201d]C?/i, greedy: !0 },
          date: {
            pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))[^\S\r\n]*#/i,
            alias: 'builtin'
          },
          number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
          boolean: /\b(?:True|False|Nothing)\b/i,
          keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
          operator: [/[+\-*/\\^<=>&#@$%!]/, { pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/, lookbehind: !0 }],
          punctuation: /[{}().,:?]/
        }),
          (e.languages.vb = e.languages['visual-basic'])
      }
      ;(e.exports = o), (o.displayName = 'visualBasic'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ }
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/
        }
      }
      ;(e.exports = o), (o.displayName = 'wasm'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        ;(e.languages.wiki = e.languages.extend('markup', {
          'block-comment': { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0, alias: 'comment' },
          heading: { pattern: /^(=+).+?\1/m, inside: { punctuation: /^=+|=+$/, important: /.+/ } },
          emphasis: {
            pattern: /('{2,5}).+?\1/,
            inside: {
              'bold italic': { pattern: /(''''').+?(?=\1)/, lookbehind: !0 },
              bold: { pattern: /(''')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
              italic: { pattern: /('')[^'](?:.*?[^'])?(?=\1)/, lookbehind: !0 },
              punctuation: /^''+|''+$/
            }
          },
          hr: { pattern: /^-{4,}/m, alias: 'punctuation' },
          url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
          variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
          symbol: [/^#redirect/im, /~{3,5}/],
          'table-tag': {
            pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
            lookbehind: !0,
            inside: { 'table-bar': { pattern: /\|$/, alias: 'punctuation' }, rest: e.languages.markup.tag.inside }
          },
          punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
        })),
          e.languages.insertBefore('wiki', 'tag', {
            nowiki: {
              pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
              inside: {
                tag: {
                  pattern: /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
                  inside: e.languages.markup.tag.inside
                }
              }
            }
          })
      }
      ;(e.exports = o), (o.displayName = 'wiki'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        !(function(e) {
          ;(e.languages.xeora = e.languages.extend('markup', {
            constant: {
              pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
              inside: { punctuation: { pattern: /\$/ } }
            },
            variable: {
              pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
              inside: { punctuation: { pattern: /[$.]/ }, operator: { pattern: /#+|[-+*~=^@]/ } }
            },
            'function-inline': {
              pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?\$/,
              inside: {
                variable: {
                  pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
                  inside: { punctuation: { pattern: /[,.|]/ }, operator: { pattern: /#+|[-+*~=^@]/ } }
                },
                punctuation: { pattern: /\$\w:|[$:?.,|]/ }
              },
              alias: 'function'
            },
            'function-block': {
              pattern: /\$XF:{[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?}:XF\$/,
              inside: { punctuation: { pattern: /[$:{}?.,|]/ } },
              alias: 'function'
            },
            'directive-inline': {
              pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\/\w.]+\$/,
              inside: {
                punctuation: { pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/, inside: { tag: { pattern: /#\d/ } } }
              },
              alias: 'function'
            },
            'directive-block-open': {
              pattern: /\$\w+:{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\w.]+:{(![A-Z]+)?/,
              inside: {
                punctuation: { pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/, inside: { tag: { pattern: /#\d/ } } },
                attribute: { pattern: /![A-Z]+$/, inside: { punctuation: { pattern: /!/ } }, alias: 'keyword' }
              },
              alias: 'function'
            },
            'directive-block-separator': {
              pattern: /}:[-\w.]+:{/,
              inside: { punctuation: { pattern: /[:{}]/ } },
              alias: 'function'
            },
            'directive-block-close': {
              pattern: /}:[-\w.]+\$/,
              inside: { punctuation: { pattern: /[:{}$]/ } },
              alias: 'function'
            }
          })),
            e.languages.insertBefore(
              'inside',
              'punctuation',
              { variable: e.languages.xeora['function-inline'].inside.variable },
              e.languages.xeora['function-block']
            ),
            (e.languages.xeoracube = e.languages.xeora)
        })(e)
      }
      ;(e.exports = o), (o.displayName = 'xeora'), (o.aliases = ['xeoracube'])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.xojo = {
          comment: { pattern: /(?:'|\/\/|Rem\b).+/i, inside: { keyword: /^Rem/i } },
          string: { pattern: /"(?:""|[^"])*"/, greedy: !0 },
          number: [/(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i, /&[bchou][a-z\d]+/i],
          symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\b/i,
          keyword: /\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\b/i,
          operator: /<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\b/i,
          punctuation: /[.,;:()]/
        }
      }
      ;(e.exports = o), (o.displayName = 'xojo'), (o.aliases = [])
    },
    function(e, t, n) {
      'use strict'
      function o(e) {
        e.languages.yaml = {
          scalar: {
            pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
            lookbehind: !0,
            alias: 'string'
          },
          comment: /#.*/,
          key: {
            pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
            lookbehind: !0,
            alias: 'atrule'
          },
          directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
          datetime: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
            lookbehind: !0,
            alias: 'number'
          },
          boolean: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: 'important'
          },
          null: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: 'important'
          },
          string: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}))/m,
            lookbehind: !0,
            greedy: !0
          },
          number: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0
          },
          tag: /![^\s]+/,
          important: /[&*][\w]+/,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
        }
      }
      ;(e.exports = o), (o.displayName = 'yaml'), (o.aliases = [])
    },
    function(e, t, n) {
      var o = {
        './Alert/AlertContentCode': [88, 224],
        './Alert/AlertContentCode.js': [88, 224],
        './Alert/AlertDefaultCode': [89, 223],
        './Alert/AlertDefaultCode.js': [89, 223],
        './Alert/AlertDismissCode': [90, 222],
        './Alert/AlertDismissCode.js': [90, 222],
        './Alert/AlertLinkCode': [91, 221],
        './Alert/AlertLinkCode.js': [91, 221],
        './Alert/AlertUncontrolledDismissCode': [92, 220],
        './Alert/AlertUncontrolledDismissCode.js': [92, 220],
        './Badge/BadgeButtonCode': [93, 219],
        './Badge/BadgeButtonCode.js': [93, 219],
        './Badge/BadgeDefaultCode': [94, 218],
        './Badge/BadgeDefaultCode.js': [94, 218],
        './Badge/BadgeLinksCode': [95, 217],
        './Badge/BadgeLinksCode.js': [95, 217],
        './Badge/BadgePillsCode': [96, 216],
        './Badge/BadgePillsCode.js': [96, 216],
        './Badge/BadgeVariationsCode': [97, 215],
        './Badge/BadgeVariationsCode.js': [97, 215],
        './Breadcrumb/BreadcrumbDefaultCode': [98, 214],
        './Breadcrumb/BreadcrumbDefaultCode.js': [98, 214],
        './Breadcrumb/BreadcrumbNoListCode': [99, 213],
        './Breadcrumb/BreadcrumbNoListCode.js': [99, 213],
        './Button/ButtonDefaultCode': [100, 212],
        './Button/ButtonDefaultCode.js': [100, 212],
        './Button/ButtonDropdownDefaultCode': [101, 211],
        './Button/ButtonDropdownDefaultCode.js': [101, 211],
        './Button/ButtonDropdownMultiCode': [102, 210],
        './Button/ButtonDropdownMultiCode.js': [102, 210],
        './Button/ButtonDropdownMultiSplitCode': [103, 209],
        './Button/ButtonDropdownMultiSplitCode.js': [103, 209],
        './Button/ButtonGroupDefaultCode': [104, 208],
        './Button/ButtonGroupDefaultCode.js': [104, 208],
        './Button/ButtonOutlineCode': [105, 207],
        './Button/ButtonOutlineCode.js': [105, 207],
        './Button/ButtonStatefulCode': [106, 206],
        './Button/ButtonStatefulCode.js': [106, 206],
        './Button/ButtonToolbarDefaultCode': [107, 205],
        './Button/ButtonToolbarDefaultCode.js': [107, 205],
        './Card/CardAlignmentCode': [108, 204],
        './Card/CardAlignmentCode.js': [108, 204],
        './Card/CardBackgroundsCode': [109, 203],
        './Card/CardBackgroundsCode.js': [109, 203],
        './Card/CardColumnsDefaultCode': [110, 202],
        './Card/CardColumnsDefaultCode.js': [110, 202],
        './Card/CardContentTypesCode': [111, 201],
        './Card/CardContentTypesCode.js': [111, 201],
        './Card/CardDecksCode': [112, 200],
        './Card/CardDecksCode.js': [112, 200],
        './Card/CardDefaultCode': [113, 199],
        './Card/CardDefaultCode.js': [113, 199],
        './Card/CardGroupsCode': [114, 198],
        './Card/CardGroupsCode.js': [114, 198],
        './Card/CardHeaderFooterCode': [115, 197],
        './Card/CardHeaderFooterCode.js': [115, 197],
        './Card/CardImageCapsCode': [116, 196],
        './Card/CardImageCapsCode.js': [116, 196],
        './Card/CardImageOverlayCode': [117, 195],
        './Card/CardImageOverlayCode.js': [117, 195],
        './Card/CardOutlineCode': [118, 194],
        './Card/CardOutlineCode.js': [118, 194],
        './Card/CardSizingCode': [119, 193],
        './Card/CardSizingCode.js': [119, 193],
        './Carousel/CarouselCustomTagCode': [120, 192],
        './Carousel/CarouselCustomTagCode.js': [120, 192],
        './Carousel/CarouselDefaultCode': [121, 191],
        './Carousel/CarouselDefaultCode.js': [121, 191],
        './Carousel/CarouselUncontrolledCode': [122, 190],
        './Carousel/CarouselUncontrolledCode.js': [122, 190],
        './Collapse/CollapseDefaultCode': [123, 189],
        './Collapse/CollapseDefaultCode.js': [123, 189],
        './Collapse/CollapseEventsCode': [124, 188],
        './Collapse/CollapseEventsCode.js': [124, 188],
        './Color/ColorDefaultCode': [125, 187],
        './Color/ColorDefaultCode.js': [125, 187],
        './Dropdown/DropDownCustomCode': [126, 186],
        './Dropdown/DropDownCustomCode.js': [126, 186],
        './Dropdown/DropdownDefaultCode': [127, 185],
        './Dropdown/DropdownDefaultCode.js': [127, 185],
        './Dropdown/DropdownSizingCode': [128, 184],
        './Dropdown/DropdownSizingCode.js': [128, 184],
        './Dropdown/DropdownUncontrolledCode': [129, 183],
        './Dropdown/DropdownUncontrolledCode.js': [129, 183],
        './Fade/FadeDefaultCode': [130, 182],
        './Fade/FadeDefaultCode.js': [130, 182],
        './Form/FormCustomControlsCode': [131, 181],
        './Form/FormCustomControlsCode.js': [131, 181],
        './Form/FormDefaultCode': [132, 180],
        './Form/FormDefaultCode.js': [132, 180],
        './Form/FormFeedbackDefaultCode': [133, 179],
        './Form/FormFeedbackDefaultCode.js': [133, 179],
        './Form/FormGridCode': [134, 178],
        './Form/FormGridCode.js': [134, 178],
        './Form/FormInlineCheckboxesCode': [135, 177],
        './Form/FormInlineCheckboxesCode.js': [135, 177],
        './Form/FormInlineCode': [136, 176],
        './Form/FormInlineCode.js': [136, 176],
        './Form/FormInputGridSizingCode': [137, 175],
        './Form/FormInputGridSizingCode.js': [137, 175],
        './Form/FormInputGroupAddonCode': [138, 174],
        './Form/FormInputGroupAddonCode.js': [138, 174],
        './Form/FormInputGroupButtonCode': [139, 173],
        './Form/FormInputGroupButtonCode.js': [139, 173],
        './Form/FormInputGroupButtonDropdownCode': [140, 172],
        './Form/FormInputGroupButtonDropdownCode.js': [140, 172],
        './Form/FormInputGroupButtonShorthandCode': [141, 171],
        './Form/FormInputGroupButtonShorthandCode.js': [141, 171],
        './Form/FormInputGroupOverviewCode': [142, 170],
        './Form/FormInputGroupOverviewCode.js': [142, 170],
        './Form/FormInputGroupSizingCode': [143, 169],
        './Form/FormInputGroupSizingCode.js': [143, 169],
        './Form/FormInputSizingCode': [144, 168],
        './Form/FormInputSizingCode.js': [144, 168],
        './Form/FormInputTypeCode': [145, 167],
        './Form/FormInputTypeCode.js': [145, 167],
        './Form/FormLabelHiddenCode': [146, 166],
        './Form/FormLabelHiddenCode.js': [146, 166],
        './Jumbotron/JumbotronDefaultCode': [147, 165],
        './Jumbotron/JumbotronDefaultCode.js': [147, 165],
        './Jumbotron/JumbotronFluidCode': [148, 164],
        './Jumbotron/JumbotronFluidCode.js': [148, 164],
        './Layout/LayoutDefaultCode': [149, 163],
        './Layout/LayoutDefaultCode.js': [149, 163],
        './ListGroup/ListGroupAnchorsAndButtonsCode': [150, 162],
        './ListGroup/ListGroupAnchorsAndButtonsCode.js': [150, 162],
        './ListGroup/ListGroupBadgeCode': [151, 161],
        './ListGroup/ListGroupBadgeCode.js': [151, 161],
        './ListGroup/ListGroupContextualClassesCode': [152, 160],
        './ListGroup/ListGroupContextualClassesCode.js': [152, 160],
        './ListGroup/ListGroupCustomContentCode': [153, 159],
        './ListGroup/ListGroupCustomContentCode.js': [153, 159],
        './ListGroup/ListGroupDefaultCode': [154, 158],
        './ListGroup/ListGroupDefaultCode.js': [154, 158],
        './ListGroup/ListGroupDisabledItemsCode': [155, 157],
        './ListGroup/ListGroupDisabledItemsCode.js': [155, 157],
        './Media/MediaAlignmentCode': [156, 156],
        './Media/MediaAlignmentCode.js': [156, 156],
        './Media/MediaDefaultCode': [157, 155],
        './Media/MediaDefaultCode.js': [157, 155],
        './Media/MediaListCode': [158, 154],
        './Media/MediaListCode.js': [158, 154],
        './Media/MediaNestedCode': [159, 153],
        './Media/MediaNestedCode.js': [159, 153],
        './Modal/ModalBackdropCode': [160, 152],
        './Modal/ModalBackdropCode.js': [160, 152],
        './Modal/ModalCustomTimeoutCode': [161, 151],
        './Modal/ModalCustomTimeoutCode.js': [161, 151],
        './Modal/ModalDefaultCode': [162, 150],
        './Modal/ModalDefaultCode.js': [162, 150],
        './Modal/ModalExternalCode': [163, 149],
        './Modal/ModalExternalCode.js': [163, 149],
        './Modal/ModalFadelessCode': [164, 148],
        './Modal/ModalFadelessCode.js': [164, 148],
        './Modal/ModalNestedCode': [165, 147],
        './Modal/ModalNestedCode.js': [165, 147],
        './Nav/NavDefaultCode': [166, 146],
        './Nav/NavDefaultCode.js': [166, 146],
        './Nav/NavNavbarDefaultCode': [167, 145],
        './Nav/NavNavbarDefaultCode.js': [167, 145],
        './Nav/NavNavbarTogglerDefaultCode': [168, 144],
        './Nav/NavNavbarTogglerDefaultCode.js': [168, 144],
        './Nav/NavPillsCode': [169, 143],
        './Nav/NavPillsCode.js': [169, 143],
        './Nav/NavTabsCode': [170, 142],
        './Nav/NavTabsCode.js': [170, 142],
        './Nav/NavVerticalCode': [171, 141],
        './Nav/NavVerticalCode.js': [171, 141],
        './Pagination/PaginationDefaultCode': [172, 140],
        './Pagination/PaginationDefaultCode.js': [172, 140],
        './Pagination/PaginationSizingLargeCode': [173, 139],
        './Pagination/PaginationSizingLargeCode.js': [173, 139],
        './Pagination/PaginationSizingSmallCode': [174, 138],
        './Pagination/PaginationSizingSmallCode.js': [174, 138],
        './Pagination/PaginationStateCode': [175, 137],
        './Pagination/PaginationStateCode.js': [175, 137],
        './Popover/PopoverDefaultCode': [176, 136],
        './Popover/PopoverDefaultCode.js': [176, 136],
        './Popover/PopoverMultiCode': [177, 135],
        './Popover/PopoverMultiCode.js': [177, 135],
        './Progress/ProgressAnimatedCode': [178, 134],
        './Progress/ProgressAnimatedCode.js': [178, 134],
        './Progress/ProgressColorCode': [179, 133],
        './Progress/ProgressColorCode.js': [179, 133],
        './Progress/ProgressDefaultCode': [180, 132],
        './Progress/ProgressDefaultCode.js': [180, 132],
        './Progress/ProgressLabelsCode': [181, 131],
        './Progress/ProgressLabelsCode.js': [181, 131],
        './Progress/ProgressMaxCode': [182, 130],
        './Progress/ProgressMaxCode.js': [182, 130],
        './Progress/ProgressMultiCode': [183, 129],
        './Progress/ProgressMultiCode.js': [183, 129],
        './Progress/ProgressStripedCode': [184, 128],
        './Progress/ProgressStripedCode.js': [184, 128],
        './Table/TableBorderedCode': [185, 127],
        './Table/TableBorderedCode.js': [185, 127],
        './Table/TableBorderlessCode': [186, 126],
        './Table/TableBorderlessCode.js': [186, 126],
        './Table/TableDarkCode': [187, 125],
        './Table/TableDarkCode.js': [187, 125],
        './Table/TableDefaultCode': [188, 124],
        './Table/TableDefaultCode.js': [188, 124],
        './Table/TableHoverCode': [189, 123],
        './Table/TableHoverCode.js': [189, 123],
        './Table/TableResponsiveCode': [190, 122],
        './Table/TableResponsiveCode.js': [190, 122],
        './Table/TableSizingCode': [191, 121],
        './Table/TableSizingCode.js': [191, 121],
        './Table/TableStripedCode': [192, 120],
        './Table/TableStripedCode.js': [192, 120],
        './Tabs/TabsDefaultCode': [193, 119],
        './Tabs/TabsDefaultCode.js': [193, 119],
        './Tooltip/TooltipAutoHideCode': [194, 118],
        './Tooltip/TooltipAutoHideCode.js': [194, 118],
        './Tooltip/TooltipDefaultCode': [195, 117],
        './Tooltip/TooltipDefaultCode.js': [195, 117],
        './Tooltip/TooltipMultiCode': [196, 116],
        './Tooltip/TooltipMultiCode.js': [196, 116],
        './Tooltip/TooltipUncontrolledCode': [197, 115],
        './Tooltip/TooltipUncontrolledCode.js': [197, 115]
      }
      function a(e) {
        var t = o[e]
        return t
          ? n.e(t[1]).then(function() {
              return n(t[0])
            })
          : Promise.reject(new Error("Cannot find module '" + e + "'."))
      }
      ;(a.keys = function() {
        return Object.keys(o)
      }),
        (a.id = 926),
        (e.exports = a)
    },
    function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      })
      var o = n(30),
        a = n(928),
        r = n.n(a),
        i = n(0),
        s = n.n(i)
      function l(e) {
        return (l =
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
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function d(e, t) {
        return !t || ('object' !== l(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      var u = (function(e) {
        function t() {
          var e, n, o
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
          return d(
            o,
            ((n = o = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r)))),
            (o.state = { componentPropTypes: {} }),
            n)
          )
        }
        var a, l, u
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, i['PureComponent']),
          (a = t),
          (l = [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this
                new Promise(function(e) {
                  e()
                })
                  .then(n.bind(null, 30))
                  .then(function(t) {
                    var n = r()(t[e.props.name])
                    e.setState({ componentPropTypes: n })
                  })
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this
                return s.a.createElement(
                  o.Table,
                  null,
                  s.a.createElement(
                    'thead',
                    null,
                    s.a.createElement(
                      'tr',
                      null,
                      s.a.createElement('th', null, 'Name'),
                      s.a.createElement('th', null, 'Type'),
                      s.a.createElement('th', null, 'Required')
                    )
                  ),
                  s.a.createElement(
                    'tbody',
                    null,
                    Object.keys(this.state.componentPropTypes).map(function(t) {
                      return s.a.createElement(
                        'tr',
                        { key: t },
                        s.a.createElement('td', null, t),
                        s.a.createElement('td', null, e.state.componentPropTypes[t].type.name),
                        s.a.createElement('td', null, e.state.componentPropTypes[t].required.toString())
                      )
                    })
                  )
                )
              }
            }
          ]) && c(a.prototype, l),
          u && c(a, u),
          t
        )
      })()
    },
    function(e, t, n) {
      e.exports = n(929)
    },
    function(e, t, n) {
      'use strict'
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
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a,
        r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        i = n(6),
        s = (a = i) && a.__esModule ? a : { default: a }
      var l = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default[t]
        ;(n.type = r({}, n.type, { name: t })),
          n.isRequired &&
            ((n.isRequired.required = !0),
            Object.keys(n)
              .filter(function(e) {
                return !['isRequired'].includes(e)
              })
              .forEach(function(e) {
                n.isRequired[e] = n[e]
              }),
            e(t, n.isRequired))
      }
      Object.keys(s.default)
        .filter(function(e) {
          return !['exact', 'checkPropTypes', 'PropTypes'].includes(e)
        })
        .forEach(function(e) {
          return s.default[e].isRequired
            ? l(e)
            : ((t = e),
              (n = s.default[t]),
              void (s.default[t] = function(e) {
                var a = n(e)
                return (
                  'function' === typeof e && e.name.indexOf('checkType') >= 0
                    ? (a.type = { value: c(e).type })
                    : 'function' === typeof e
                      ? (a.type = { value: e.name })
                      : Array.isArray(e) && 'function' === typeof e[0]
                        ? (a.type = {
                            value: e.map(function(e) {
                              return c(e).type
                            })
                          })
                        : Array.isArray(e) || 'object' !== o(e)
                          ? (a.type = { value: e })
                          : (a.type = { value: d({ propTypes: e }) }),
                  l(t, a),
                  a
                )
              }))
          var t, n
        })
      var c = function(e, t) {
          e.isRequired
          var n = (function(e, t) {
            var n = {}
            for (var o in e) t.indexOf(o) >= 0 || (Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]))
            return n
          })(e, ['isRequired'])
          return r(
            { type: { name: 'custom' }, required: !1 },
            'undefined' !== typeof t ? { defaultValue: { value: t } } : {},
            n
          )
        },
        d = function(e) {
          var t = e.propTypes,
            n = void 0 === t ? {} : t,
            o = e.defaultProps,
            a = void 0 === o ? {} : o
          return Object.keys(n).reduce(function(e, t) {
            return r(
              {},
              e,
              ((o = {}),
              (i = t),
              (s = c(n[t], a[t])),
              i in o
                ? Object.defineProperty(o, i, { value: s, enumerable: !0, configurable: !0, writable: !0 })
                : (o[i] = s),
              o)
            )
            var o, i, s
          }, {})
        }
      t.default = d
    },
    function(e, t, n) {
      var o = {
        './Alert/AlertContent': [198, 114],
        './Alert/AlertContent.js': [198, 114],
        './Alert/AlertDefault': [199, 113],
        './Alert/AlertDefault.js': [199, 113],
        './Alert/AlertDismiss': [200, 112],
        './Alert/AlertDismiss.js': [200, 112],
        './Alert/AlertLink': [201, 111],
        './Alert/AlertLink.js': [201, 111],
        './Alert/AlertUncontrolledDismiss': [202, 110],
        './Alert/AlertUncontrolledDismiss.js': [202, 110],
        './Badge/BadgeButton': [203, 109],
        './Badge/BadgeButton.js': [203, 109],
        './Badge/BadgeDefault': [204, 108],
        './Badge/BadgeDefault.js': [204, 108],
        './Badge/BadgeLinks': [205, 107],
        './Badge/BadgeLinks.js': [205, 107],
        './Badge/BadgePills': [206, 106],
        './Badge/BadgePills.js': [206, 106],
        './Badge/BadgeVariations': [207, 105],
        './Badge/BadgeVariations.js': [207, 105],
        './Breadcrumb/BreadcrumbDefault': [208, 104],
        './Breadcrumb/BreadcrumbDefault.js': [208, 104],
        './Breadcrumb/BreadcrumbNoList': [209, 103],
        './Breadcrumb/BreadcrumbNoList.js': [209, 103],
        './Button/ButtonDefault': [210, 102],
        './Button/ButtonDefault.js': [210, 102],
        './Button/ButtonDropdownDefault': [211, 101],
        './Button/ButtonDropdownDefault.js': [211, 101],
        './Button/ButtonDropdownMulti': [212, 100],
        './Button/ButtonDropdownMulti.js': [212, 100],
        './Button/ButtonDropdownMultiSplit': [213, 99],
        './Button/ButtonDropdownMultiSplit.js': [213, 99],
        './Button/ButtonGroupDefault': [214, 98],
        './Button/ButtonGroupDefault.js': [214, 98],
        './Button/ButtonOutline': [215, 97],
        './Button/ButtonOutline.js': [215, 97],
        './Button/ButtonStateful': [216, 96],
        './Button/ButtonStateful.js': [216, 96],
        './Button/ButtonToolbarDefault': [217, 95],
        './Button/ButtonToolbarDefault.js': [217, 95],
        './Card/CardAlignment': [218, 94],
        './Card/CardAlignment.js': [218, 94],
        './Card/CardBackgrounds': [219, 93],
        './Card/CardBackgrounds.js': [219, 93],
        './Card/CardColumnsDefault': [220, 92],
        './Card/CardColumnsDefault.js': [220, 92],
        './Card/CardContentTypes': [221, 91],
        './Card/CardContentTypes.js': [221, 91],
        './Card/CardDecks': [222, 90],
        './Card/CardDecks.js': [222, 90],
        './Card/CardDefault': [223, 89],
        './Card/CardDefault.js': [223, 89],
        './Card/CardGroups': [224, 88],
        './Card/CardGroups.js': [224, 88],
        './Card/CardHeaderFooter': [225, 87],
        './Card/CardHeaderFooter.js': [225, 87],
        './Card/CardImageCaps': [226, 86],
        './Card/CardImageCaps.js': [226, 86],
        './Card/CardImageOverlay': [227, 85],
        './Card/CardImageOverlay.js': [227, 85],
        './Card/CardOutline': [228, 84],
        './Card/CardOutline.js': [228, 84],
        './Card/CardSizing': [229, 83],
        './Card/CardSizing.js': [229, 83],
        './Carousel/CarouselCustomTag': [230, 82],
        './Carousel/CarouselCustomTag.js': [230, 82],
        './Carousel/CarouselDefault': [231, 81],
        './Carousel/CarouselDefault.js': [231, 81],
        './Carousel/CarouselUncontrolled': [232, 80],
        './Carousel/CarouselUncontrolled.js': [232, 80],
        './Collapse/CollapseDefault': [233, 79],
        './Collapse/CollapseDefault.js': [233, 79],
        './Collapse/CollapseEvents': [234, 78],
        './Collapse/CollapseEvents.js': [234, 78],
        './Color/ColorDefault': [235, 77],
        './Color/ColorDefault.js': [235, 77],
        './Dropdown/DropDownCustom': [236, 76],
        './Dropdown/DropDownCustom.js': [236, 76],
        './Dropdown/DropdownDefault': [237, 75],
        './Dropdown/DropdownDefault.js': [237, 75],
        './Dropdown/DropdownSizing': [238, 74],
        './Dropdown/DropdownSizing.js': [238, 74],
        './Dropdown/DropdownUncontrolled': [239, 73],
        './Dropdown/DropdownUncontrolled.js': [239, 73],
        './Fade/FadeDefault': [240, 72],
        './Fade/FadeDefault.js': [240, 72],
        './Form/FormCustomControls': [241, 71],
        './Form/FormCustomControls.js': [241, 71],
        './Form/FormDefault': [242, 70],
        './Form/FormDefault.js': [242, 70],
        './Form/FormFeedbackDefault': [243, 69],
        './Form/FormFeedbackDefault.js': [243, 69],
        './Form/FormGrid': [244, 68],
        './Form/FormGrid.js': [244, 68],
        './Form/FormInline': [245, 67],
        './Form/FormInline.js': [245, 67],
        './Form/FormInlineCheckboxes': [246, 66],
        './Form/FormInlineCheckboxes.js': [246, 66],
        './Form/FormInputGridSizing': [247, 65],
        './Form/FormInputGridSizing.js': [247, 65],
        './Form/FormInputGroupAddon': [248, 64],
        './Form/FormInputGroupAddon.js': [248, 64],
        './Form/FormInputGroupButton': [249, 63],
        './Form/FormInputGroupButton.js': [249, 63],
        './Form/FormInputGroupButtonDropdown': [250, 62],
        './Form/FormInputGroupButtonDropdown.js': [250, 62],
        './Form/FormInputGroupButtonShorthand': [251, 61],
        './Form/FormInputGroupButtonShorthand.js': [251, 61],
        './Form/FormInputGroupOverview': [252, 60],
        './Form/FormInputGroupOverview.js': [252, 60],
        './Form/FormInputGroupSizing': [253, 59],
        './Form/FormInputGroupSizing.js': [253, 59],
        './Form/FormInputSizing': [254, 58],
        './Form/FormInputSizing.js': [254, 58],
        './Form/FormInputType': [255, 57],
        './Form/FormInputType.js': [255, 57],
        './Form/FormLabelHidden': [256, 56],
        './Form/FormLabelHidden.js': [256, 56],
        './Jumbotron/JumbotronDefault': [257, 55],
        './Jumbotron/JumbotronDefault.js': [257, 55],
        './Jumbotron/JumbotronFluid': [258, 54],
        './Jumbotron/JumbotronFluid.js': [258, 54],
        './Layout/LayoutDefault': [259, 53],
        './Layout/LayoutDefault.js': [259, 53],
        './ListGroup/ListGroupAnchorsAndButtons': [260, 52],
        './ListGroup/ListGroupAnchorsAndButtons.js': [260, 52],
        './ListGroup/ListGroupBadge': [261, 51],
        './ListGroup/ListGroupBadge.js': [261, 51],
        './ListGroup/ListGroupContextualClasses': [262, 50],
        './ListGroup/ListGroupContextualClasses.js': [262, 50],
        './ListGroup/ListGroupCustomContent': [263, 49],
        './ListGroup/ListGroupCustomContent.js': [263, 49],
        './ListGroup/ListGroupDefault': [264, 48],
        './ListGroup/ListGroupDefault.js': [264, 48],
        './ListGroup/ListGroupDisabledItems': [265, 47],
        './ListGroup/ListGroupDisabledItems.js': [265, 47],
        './Media/MediaAlignment': [266, 46],
        './Media/MediaAlignment.js': [266, 46],
        './Media/MediaDefault': [267, 45],
        './Media/MediaDefault.js': [267, 45],
        './Media/MediaList': [268, 44],
        './Media/MediaList.js': [268, 44],
        './Media/MediaNested': [269, 43],
        './Media/MediaNested.js': [269, 43],
        './Modal/ModalBackdrop': [270, 42],
        './Modal/ModalBackdrop.js': [270, 42],
        './Modal/ModalCustomTimeout': [271, 41],
        './Modal/ModalCustomTimeout.js': [271, 41],
        './Modal/ModalDefault': [272, 40],
        './Modal/ModalDefault.js': [272, 40],
        './Modal/ModalExternal': [273, 39],
        './Modal/ModalExternal.js': [273, 39],
        './Modal/ModalFadeless': [274, 38],
        './Modal/ModalFadeless.js': [274, 38],
        './Modal/ModalNested': [275, 37],
        './Modal/ModalNested.js': [275, 37],
        './Nav/NavDefault': [276, 36],
        './Nav/NavDefault.js': [276, 36],
        './Nav/NavNavbarDefault': [277, 35],
        './Nav/NavNavbarDefault.js': [277, 35],
        './Nav/NavNavbarTogglerDefault': [278, 34],
        './Nav/NavNavbarTogglerDefault.js': [278, 34],
        './Nav/NavPills': [279, 33],
        './Nav/NavPills.js': [279, 33],
        './Nav/NavTabs': [280, 32],
        './Nav/NavTabs.js': [280, 32],
        './Nav/NavVertical': [281, 31],
        './Nav/NavVertical.js': [281, 31],
        './Pagination/PaginationDefault': [282, 30],
        './Pagination/PaginationDefault.js': [282, 30],
        './Pagination/PaginationSizingLarge': [283, 29],
        './Pagination/PaginationSizingLarge.js': [283, 29],
        './Pagination/PaginationSizingSmall': [284, 28],
        './Pagination/PaginationSizingSmall.js': [284, 28],
        './Pagination/PaginationState': [285, 27],
        './Pagination/PaginationState.js': [285, 27],
        './Popover/PopoverDefault': [286, 26],
        './Popover/PopoverDefault.js': [286, 26],
        './Popover/PopoverMulti': [287, 25],
        './Popover/PopoverMulti.js': [287, 25],
        './Progress/ProgressAnimated': [288, 24],
        './Progress/ProgressAnimated.js': [288, 24],
        './Progress/ProgressColor': [289, 23],
        './Progress/ProgressColor.js': [289, 23],
        './Progress/ProgressDefault': [290, 22],
        './Progress/ProgressDefault.js': [290, 22],
        './Progress/ProgressLabels': [291, 21],
        './Progress/ProgressLabels.js': [291, 21],
        './Progress/ProgressMax': [292, 20],
        './Progress/ProgressMax.js': [292, 20],
        './Progress/ProgressMulti': [293, 19],
        './Progress/ProgressMulti.js': [293, 19],
        './Progress/ProgressStriped': [294, 18],
        './Progress/ProgressStriped.js': [294, 18],
        './Table/TableBordered': [295, 17],
        './Table/TableBordered.js': [295, 17],
        './Table/TableBorderless': [296, 16],
        './Table/TableBorderless.js': [296, 16],
        './Table/TableDark': [297, 15],
        './Table/TableDark.js': [297, 15],
        './Table/TableDefault': [298, 14],
        './Table/TableDefault.js': [298, 14],
        './Table/TableHover': [299, 13],
        './Table/TableHover.js': [299, 13],
        './Table/TableResponsive': [300, 12],
        './Table/TableResponsive.js': [300, 12],
        './Table/TableSizing': [301, 11],
        './Table/TableSizing.js': [301, 11],
        './Table/TableStriped': [302, 10],
        './Table/TableStriped.js': [302, 10],
        './Tabs/TabsDefault': [303, 9],
        './Tabs/TabsDefault.js': [303, 9],
        './Tooltip/TooltipAutoHide': [304, 8],
        './Tooltip/TooltipAutoHide.js': [304, 8],
        './Tooltip/TooltipDefault': [305, 7],
        './Tooltip/TooltipDefault.js': [305, 7],
        './Tooltip/TooltipMulti': [306, 6],
        './Tooltip/TooltipMulti.js': [306, 6],
        './Tooltip/TooltipUncontrolled': [307, 5],
        './Tooltip/TooltipUncontrolled.js': [307, 5]
      }
      function a(e) {
        var t = o[e]
        return t
          ? n.e(t[1]).then(function() {
              return n(t[0])
            })
          : Promise.reject(new Error("Cannot find module '" + e + "'."))
      }
      ;(a.keys = function() {
        return Object.keys(o)
      }),
        (a.id = 930),
        (e.exports = a)
    },
    function(e, t, n) {
      var o = n(932)
      'string' === typeof o && (o = [[e.i, o, '']])
      var a = { hmr: !1, transform: void 0 }
      n(29)(o, a)
      o.locals && (e.exports = o.locals)
    },
    function(e, t, n) {
      ;(e.exports = n(28)(!0)).push([
        e.i,
        '.sidebar{position:fixed;top:0;bottom:0;left:0;z-index:100;padding:0;-webkit-box-shadow:inset -1px 0 0 rgba(0,0,0,.1);box-shadow:inset -1px 0 0 rgba(0,0,0,.1)}.sidebar-sticky{position:-webkit-sticky;position:sticky;top:0;height:calc(100vh - 0px);padding-top:.5rem;overflow-x:hidden;overflow-y:auto}',
        '',
        {
          version: 3,
          sources: ['/Users/johnlivingston/Projects/create-react-app-base/src/style-guide/StyleGuideApp.scss'],
          names: [],
          mappings:
            'AAAA,SACE,eAAe,AACf,MAAM,AACN,SAAS,AACT,OAAO,AACP,YAAY,AACZ,UAAgB,AAChB,iDAA6C,AAA7C,wCAA6C,CAC9C,AAED,gBACE,wBAAgB,AAAhB,gBAAgB,AAChB,MAAM,AACN,yBAAyB,AACzB,kBAAmB,AACnB,kBAAkB,AAClB,eAAgB,CACjB',
          file: 'StyleGuideApp.scss',
          sourcesContent: [
            '.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  padding: 0px 0 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n}\n\n.sidebar-sticky {\n  position: sticky;\n  top: 0;\n  height: calc(100vh - 0px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n}'
          ],
          sourceRoot: ''
        }
      ])
    }
  ])
)
//# sourceMappingURL=225.036ecd94.chunk.js.map

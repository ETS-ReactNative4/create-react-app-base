webpackJsonp([357], {
  623: function(n, a, i) {
    var A = i(624)
    'string' === typeof A && (A = [[n.i, A, '']])
    var e = { hmr: !1, transform: void 0 }
    i(29)(A, e)
    A.locals && (n.exports = A.locals)
  },
  624: function(n, a, i) {
    ;(n.exports = i(28)(!0)).push([
      n.i,
      '@-webkit-keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.ball-beat>div{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block;-webkit-animation:ball-beat .7s 0s infinite linear;animation:ball-beat .7s 0s infinite linear}.ball-beat>div:nth-child(2n-1){-webkit-animation-delay:-.35s!important;animation-delay:-.35s!important}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-beat.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss'
        ],
        names: [],
        mappings:
          'AAGA,6BACE,IACE,WAAY,AACZ,6BAAsB,AAAtB,oBAAsB,CAAA,AAExB,GACE,UAAU,AACV,2BAAmB,AAAnB,kBAAmB,CAAA,CAAA,AAPvB,qBACE,IACE,WAAY,AACZ,6BAAsB,AAAtB,oBAAsB,CAAA,AAExB,GACE,UAAU,AACV,2BAAmB,AAAnB,kBAAmB,CAAA,CAAA,AAIvB,eCbE,sBCDkB,ADWlB,WCVc,ADWd,YCXc,ADYd,mBAAmB,AACnB,WCZU,ADGV,iCAAyB,AAAzB,yBAAyB,ADevB,qBAAqB,AACrB,mDAA4C,AAA5C,0CAA4C,CAK7C,AAZH,+BAUM,wCAAkC,AAAlC,+BAAkC,CACnC',
        file: 'ball-beat.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n\n@keyframes ball-beat {\n  50% {\n    opacity: 0.2;\n    transform: scale(0.75);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.ball-beat {\n\n  > div {\n    @include balls();\n    @include global-animation();\n\n    display: inline-block;\n    animation: ball-beat 0.7s 0s infinite linear;\n\n    &:nth-child(2n-1) {\n      animation-delay: -0.35s !important;\n    }\n  }\n}\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n',
          '$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=357.8fe0af28.chunk.js.map

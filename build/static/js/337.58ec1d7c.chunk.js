webpackJsonp([337], {
  663: function(n, A, a) {
    var t = a(664)
    'string' === typeof t && (t = [[n.i, t, '']])
    var r = { hmr: !1, transform: void 0 }
    a(29)(t, r)
    t.locals && (n.exports = t.locals)
  },
  664: function(n, A, a) {
    ;(n.exports = a(28)(!0)).push([
      n.i,
      '@-webkit-keyframes ball-zig{33%{-webkit-transform:translate(-15px,-30px);transform:translate(-15px,-30px)}66%{-webkit-transform:translate(15px,-30px);transform:translate(15px,-30px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes ball-zig{33%{-webkit-transform:translate(-15px,-30px);transform:translate(-15px,-30px)}66%{-webkit-transform:translate(15px,-30px);transform:translate(15px,-30px)}to{-webkit-transform:translate(0);transform:translate(0)}}@-webkit-keyframes ball-zag{33%{-webkit-transform:translate(15px,30px);transform:translate(15px,30px)}66%{-webkit-transform:translate(-15px,30px);transform:translate(-15px,30px)}to{-webkit-transform:translate(0);transform:translate(0)}}@keyframes ball-zag{33%{-webkit-transform:translate(15px,30px);transform:translate(15px,30px)}66%{-webkit-transform:translate(-15px,30px);transform:translate(-15px,30px)}to{-webkit-transform:translate(0);transform:translate(0)}}.ball-zig-zag{position:relative;-webkit-transform:translate(-15px,-15px);transform:translate(-15px,-15px)}.ball-zig-zag>div{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;-webkit-animation-fill-mode:both;animation-fill-mode:both;position:absolute;margin-left:15px;top:4px;left:-7px}.ball-zig-zag>div:first-child{-webkit-animation:ball-zig .7s 0s infinite linear;animation:ball-zig .7s 0s infinite linear}.ball-zig-zag>div:last-child{-webkit-animation:ball-zag .7s 0s infinite linear;animation:ball-zag .7s 0s infinite linear}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-zig-zag.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss'
        ],
        names: [],
        mappings:
          'AAKA,4BACE,IACE,yCAA0C,AAA1C,gCAA0C,CAAA,AAE5C,IACE,wCAAyC,AAAzC,+BAAyC,CAAA,AAE3C,GACE,+BAA0B,AAA1B,sBAA0B,CAAA,CAAA,AAR9B,oBACE,IACE,yCAA0C,AAA1C,gCAA0C,CAAA,AAE5C,IACE,wCAAyC,AAAzC,+BAAyC,CAAA,AAE3C,GACE,+BAA0B,AAA1B,sBAA0B,CAAA,CAAA,AAI9B,4BACE,IACE,uCAAwC,AAAxC,8BAAwC,CAAA,AAE1C,IACE,wCAAyC,AAAzC,+BAAyC,CAAA,AAE3C,GACE,+BAA0B,AAA1B,sBAA0B,CAAA,CAAA,AAR9B,oBACE,IACE,uCAAwC,AAAxC,8BAAwC,CAAA,AAE1C,IACE,wCAAyC,AAAzC,+BAAyC,CAAA,AAE3C,GACE,+BAA0B,AAA1B,sBAA0B,CAAA,CAAA,AAI9B,cACE,kBAAkB,AAClB,yCAAgD,AAAhD,gCAAgD,CAmBjD,AArBD,kBC5BE,sBCDkB,ADWlB,WCVc,ADWd,YCXc,ADYd,mBAAmB,AACnB,WCZU,ADGV,iCAAyB,AAAzB,yBAAyB,ADgCvB,kBAAkB,AAClB,iBAAwB,AACxB,QAAQ,AACR,SAAU,CASX,AApBH,8BAcM,kDAA2C,AAA3C,yCAA2C,CAC5C,AAfL,6BAkBM,kDAA2C,AAA3C,yCAA2C,CAC5C',
        file: 'ball-zig-zag.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n\n$amount: 30px;\n\n@keyframes ball-zig {\n  33% {\n    transform: translate(-$amount/2, -$amount);\n  }\n  66% {\n    transform: translate($amount/2, -$amount);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes ball-zag {\n  33% {\n    transform: translate($amount/2, $amount);\n  }\n  66% {\n    transform: translate(-$amount/2, $amount);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n.ball-zig-zag {\n  position: relative;\n  transform: translate(-$amount / 2, -$amount / 2);\n\n  > div {\n    @include balls();\n    @include global-animation();\n\n    position: absolute;\n    margin-left: $amount / 2;\n    top: 4px;\n    left: -7px;\n\n    &:first-child {\n      animation: ball-zig 0.7s 0s infinite linear;\n    }\n\n    &:last-child {\n      animation: ball-zag 0.7s 0s infinite linear;\n    }\n  }\n}\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n',
          '$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=337.58ec1d7c.chunk.js.map

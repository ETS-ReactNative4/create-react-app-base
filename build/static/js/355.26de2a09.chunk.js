webpackJsonp([355], {
  627: function(A, n, t) {
    var e = t(628)
    'string' === typeof e && (e = [[A.i, e, '']])
    var a = { hmr: !1, transform: void 0 }
    t(29)(e, a)
    e.locals && (A.exports = e.locals)
  },
  628: function(A, n, t) {
    ;(A.exports = t(28)(!0)).push([
      A.i,
      '@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.6);transform:rotate(180deg) scale(.6)}to{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.6);transform:rotate(180deg) scale(.6)}to{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}@-webkit-keyframes scale{30%{-webkit-transform:scale(.3);transform:scale(.3)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale{30%{-webkit-transform:scale(.3);transform:scale(.3)}to{-webkit-transform:scale(1);transform:scale(1)}}.ball-clip-rotate-pulse{position:relative;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.ball-clip-rotate-pulse>div{-webkit-animation-fill-mode:both;animation-fill-mode:both;position:absolute;top:0;left:0;border-radius:100%}.ball-clip-rotate-pulse>div:first-child{background:#fff;height:16px;width:16px;top:7px;left:-7px;-webkit-animation:scale 1s 0s cubic-bezier(.09,.57,.49,.9) infinite;animation:scale 1s 0s cubic-bezier(.09,.57,.49,.9) infinite}.ball-clip-rotate-pulse>div:last-child{position:absolute;border:2px solid #fff;width:30px;height:30px;left:-16px;top:-2px;background:transparent;border:2px solid;border-color:#fff transparent;-webkit-animation:rotate 1s 0s cubic-bezier(.09,.57,.49,.9) infinite;animation:rotate 1s 0s cubic-bezier(.09,.57,.49,.9) infinite;-webkit-animation-duration:1s;animation-duration:1s}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-clip-rotate-pulse.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss'
        ],
        names: [],
        mappings:
          'AAGA,0BACE,GACE,wCAAgC,AAAhC,+BAAgC,CAAA,AAElC,IACE,2CAAoC,AAApC,kCAAoC,CAAA,AAEtC,GACC,yCAAkC,AAAlC,gCAAkC,CAAA,CAAA,AARrC,kBACE,GACE,wCAAgC,AAAhC,+BAAgC,CAAA,AAElC,IACE,2CAAoC,AAApC,kCAAoC,CAAA,AAEtC,GACC,yCAAkC,AAAlC,gCAAkC,CAAA,CAAA,AAIrC,yBACE,IACE,4BAAqB,AAArB,mBAAqB,CAAA,AAEvB,GACE,2BAAmB,AAAnB,kBAAmB,CAAA,CAAA,AALvB,iBACE,IACE,4BAAqB,AAArB,mBAAqB,CAAA,AAEvB,GACE,2BAAmB,AAAnB,kBAAmB,CAAA,CAAA,AAIvB,wBACE,kBAAkB,AAClB,oCAA4B,AAA5B,2BAA4B,CAiC7B,AAnCD,4BCnBE,iCAAyB,AAAzB,yBAAyB,AD0BvB,kBAAkB,AAClB,MAAQ,AACR,OAAS,AACT,kBAAmB,CAwBpB,AAlCH,wCAaM,gBErCc,AFsCd,YAAY,AACZ,WAAW,AACX,QAAQ,AACR,UAAU,AACV,oEAA4D,AAA5D,2DAA4D,CAC7D,AAnBL,uCAsBM,kBAAkB,AAClB,sBE/Cc,AFgDd,WAAW,AACX,YAAY,AACZ,WAAW,AACX,SAAS,AACT,uBAAuB,AACvB,iBAAiB,AACjB,8BAAmE,AACnE,qEAA6D,AAA7D,6DAA6D,AAC7D,8BAAsB,AAAtB,qBAAsB,CACvB',
        file: 'ball-clip-rotate-pulse.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(0.6);\n  }\n  100% {\n   transform: rotate(360deg) scale(1);\n }\n}\n\n@keyframes scale {\n  30% {\n    transform: scale(0.3);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.ball-clip-rotate-pulse {\n  position: relative;\n  transform: translateY(-15px);\n\n  > div {\n    @include global-animation();\n\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    border-radius: 100%;\n\n    &:first-child {\n      background: $primary-color;\n      height: 16px;\n      width: 16px;\n      top: 7px;\n      left: -7px;\n      animation: scale 1s 0s cubic-bezier(.09,.57,.49,.9) infinite;\n    }\n\n    &:last-child {\n      position: absolute;\n      border: 2px solid $primary-color;\n      width: 30px;\n      height: 30px;  \n      left: -16px;\n      top: -2px;\n      background: transparent;\n      border: 2px solid;\n      border-color: $primary-color transparent $primary-color transparent;\n      animation: rotate 1s 0s cubic-bezier(.09,.57,.49,.9) infinite;\n      animation-duration: 1s;\n    }\n  }\n}\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n',
          '$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=355.26de2a09.chunk.js.map

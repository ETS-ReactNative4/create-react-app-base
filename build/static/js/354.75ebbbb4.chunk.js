webpackJsonp([354], {
  629: function(n, t, a) {
    var r = a(630)
    'string' === typeof r && (r = [[n.i, r, '']])
    var e = { hmr: !1, transform: void 0 }
    a(29)(r, e)
    r.locals && (n.exports = r.locals)
  },
  630: function(n, t, a) {
    ;(n.exports = a(28)(!0)).push([
      n.i,
      '@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.6);transform:rotate(180deg) scale(.6)}to{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.6);transform:rotate(180deg) scale(.6)}to{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}.ball-clip-rotate>div{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:2px solid #fff;border-bottom-color:transparent;height:25px;width:25px;background:transparent!important;display:inline-block;-webkit-animation:rotate .75s 0s linear infinite;animation:rotate .75s 0s linear infinite}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-clip-rotate.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss'
        ],
        names: [],
        mappings:
          'AAGA,0BACE,GACE,wCAAgC,AAAhC,+BAAgC,CAAA,AAElC,IACE,2CAAoC,AAApC,kCAAoC,CAAA,AAEtC,GACC,yCAAkC,AAAlC,gCAAkC,CAAA,CAAA,AARrC,kBACE,GACE,wCAAgC,AAAhC,+BAAgC,CAAA,AAElC,IACE,2CAAoC,AAApC,kCAAoC,CAAA,AAEtC,GACC,yCAAkC,AAAlC,gCAAkC,CAAA,CAAA,AAIrC,sBCdE,sBCDkB,ADWlB,WCVc,ADWd,YCXc,ADYd,mBAAmB,AACnB,WCZU,ADGV,iCAAyB,AAAzB,yBAAyB,ADgBvB,sBErBgB,AFsBhB,gCAAgC,AAChC,YAAY,AACZ,WAAW,AACX,iCAAkC,AAClC,qBAAqB,AACrB,iDAA0C,AAA1C,wCAA0C,CAC3C',
        file: 'ball-clip-rotate.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(0.6);\n  }\n  100% {\n   transform: rotate(360deg) scale(1);\n }\n}\n\n.ball-clip-rotate {\n\n  > div {\n    @include balls();\n    @include global-animation();\n\n    border: 2px solid $primary-color;\n    border-bottom-color: transparent;\n    height: 25px;\n    width: 25px;\n    background: transparent !important;\n    display: inline-block;\n    animation: rotate 0.75s 0s linear infinite;\n  }\n}\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n',
          '$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=354.75ebbbb4.chunk.js.map

webpackJsonp([346], {
  645: function(n, i, a) {
    var l = a(646)
    'string' === typeof l && (l = [[n.i, l, '']])
    var e = { hmr: !1, transform: void 0 }
    a(29)(l, e)
    l.locals && (n.exports = l.locals)
  },
  646: function(n, i, a) {
    ;(n.exports = a(28)(!0)).push([
      n.i,
      '@-webkit-keyframes ball-scale-multiple{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}5%{opacity:1}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes ball-scale-multiple{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}5%{opacity:1}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}.ball-scale-multiple{position:relative;-webkit-transform:translateY(-30px);transform:translateY(-30px)}.ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:-.2s;animation-delay:-.2s}.ball-scale-multiple>div{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;-webkit-animation-fill-mode:both;animation-fill-mode:both;position:absolute;left:-30px;top:0;opacity:0;margin:0;width:60px;height:60px;-webkit-animation:ball-scale-multiple 1s 0s linear infinite;animation:ball-scale-multiple 1s 0s linear infinite}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-scale-multiple.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_functions.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss'
        ],
        names: [],
        mappings:
          'AAMA,uCACE,GACE,2BAAqB,AAArB,mBAAqB,AACrB,SAAU,CAAA,AAEZ,GACE,SAAU,CAAA,AAEZ,GACE,2BAAqB,AAArB,mBAAqB,AACrB,SAAU,CAAA,CAAA,AAVd,+BACE,GACE,2BAAqB,AAArB,mBAAqB,AACrB,SAAU,CAAA,AAEZ,GACE,SAAU,CAAA,AAEZ,GACE,2BAAqB,AAArB,mBAAqB,AACrB,SAAU,CAAA,CAAA,AAYd,qBAGE,kBAAkB,AAClB,oCAAiC,AAAjC,2BAAiC,CAelC,AAzBG,sCACE,6BCtB+C,ADsB/C,oBCtB+C,CDuBhD,AAFD,sCACE,6BCtB+C,ADsB/C,oBCtB+C,CDuBhD,AAIL,yBE3BE,sBCDkB,ADWlB,WCVc,ADWd,YCXc,ADYd,mBAAmB,AACnB,WCZU,ADGV,iCAAyB,AAAzB,yBAAyB,AFiCvB,kBAAkB,AAClB,WAAW,AACX,MAAQ,AACR,UAAU,AACV,SAAS,AACT,WAvCO,AAwCP,YAxCO,AAyCP,4DAAoD,AAApD,mDAAoD,CACrD',
        file: 'ball-scale-multiple.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n@import '../functions';\n\n$size: 60px;\n\n@keyframes ball-scale-multiple {\n  0% {\n    transform: scale(0.0);\n    opacity: 0;\n  }\n  5% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n@mixin ball-scale-multiple ($n:3, $start:0) {\n  @for $i from 2 through $n {\n    > div:nth-child(#{$i}) {\n      animation-delay: delay(0.2s, $n, $i - 1);\n    }\n  }\n}\n\n.ball-scale-multiple {\n  @include ball-scale-multiple();\n\n  position: relative;\n  transform: translateY(-$size / 2);\n\n  > div {\n    @include balls();\n    @include global-animation();\n\n    position: absolute;\n    left: -30px;\n    top: 0px;\n    opacity: 0;\n    margin: 0;\n    width: $size;\n    height: $size;\n    animation: ball-scale-multiple 1s 0s linear infinite;\n  }\n}\n",
          '@function delay($interval, $count, $index) {\n  @return ($index * $interval) - ($interval * $count);\n}\n',
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n',
          '$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=346.edc19753.chunk.js.map

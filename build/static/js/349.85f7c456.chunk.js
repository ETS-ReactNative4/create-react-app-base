webpackJsonp([349], {
  639: function(n, s, i) {
    var a = i(640)
    'string' === typeof a && (a = [[n.i, a, '']])
    var l = { hmr: !1, transform: void 0 }
    i(29)(a, l)
    a.locals && (n.exports = a.locals)
  },
  640: function(n, s, i) {
    ;(n.exports = i(28)(!0)).push([
      n.i,
      '@-webkit-keyframes ball-pulse-sync{33%{-webkit-transform:translateY(10px);transform:translateY(10px)}66%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes ball-pulse-sync{33%{-webkit-transform:translateY(10px);transform:translateY(10px)}66%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.ball-pulse-sync>div:nth-child(0){-webkit-animation:ball-pulse-sync .6s -.21s infinite ease-in-out;animation:ball-pulse-sync .6s -.21s infinite ease-in-out}.ball-pulse-sync>div:first-child{-webkit-animation:ball-pulse-sync .6s -.14s infinite ease-in-out;animation:ball-pulse-sync .6s -.14s infinite ease-in-out}.ball-pulse-sync>div:nth-child(2){-webkit-animation:ball-pulse-sync .6s -.07s infinite ease-in-out;animation:ball-pulse-sync .6s -.07s infinite ease-in-out}.ball-pulse-sync>div:nth-child(3){-webkit-animation:ball-pulse-sync .6s 0s infinite ease-in-out;animation:ball-pulse-sync .6s 0s infinite ease-in-out}.ball-pulse-sync>div{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-pulse-sync.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss'
        ],
        names: [],
        mappings:
          'AAMA,mCACE,IACE,mCAA8B,AAA9B,0BAA8B,CAAA,AAEhC,IACE,oCAA+B,AAA/B,2BAA+B,CAAA,AAEjC,GACE,gCAAwB,AAAxB,uBAAwB,CAAA,CAAA,AAR5B,2BACE,IACE,mCAA8B,AAA9B,0BAA8B,CAAA,AAEhC,IACE,oCAA+B,AAA/B,2BAA+B,CAAA,AAEjC,GACE,gCAAwB,AAAxB,uBAAwB,CAAA,CAAA,AAMxB,kCACE,iEAAyE,AAAzE,wDAAyE,CAC1E,AAFD,iCACE,iEAAyE,AAAzE,wDAAyE,CAC1E,AAFD,kCACE,iEAAyE,AAAzE,wDAAyE,CAC1E,AAFD,kCACE,8DAAyE,AAAzE,qDAAyE,CAC1E,AAIL,qBCzBE,sBCDkB,ADWlB,WCVc,ADWd,YCXc,ADYd,mBAAmB,AACnB,WCZU,ADGV,iCAAyB,AAAzB,yBAAyB,AD4BvB,oBAAqB,CACtB',
        file: 'ball-pulse-sync.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n@import '../functions';\n\n$amount: 10px;\n\n@keyframes ball-pulse-sync {\n  33% {\n    transform: translateY($amount);\n  }\n  66% {\n    transform: translateY(-$amount);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@mixin ball-pulse-sync($n:3, $start:0) {\n  @for $i from $start through $n {\n    > div:nth-child(#{$i}) {\n      animation: ball-pulse-sync 0.6s delay(0.07s, $n, $i) infinite ease-in-out;\n    }\n  }\n}\n\n.ball-pulse-sync {\n  @include ball-pulse-sync();\n\n  > div {\n    @include balls();\n    @include global-animation();\n\n    display: inline-block;\n  }\n}\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n',
          '$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=349.85f7c456.chunk.js.map

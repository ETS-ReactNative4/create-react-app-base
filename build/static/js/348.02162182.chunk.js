webpackJsonp([348], {
  641: function(n, i, A) {
    var e = A(642)
    'string' === typeof e && (e = [[n.i, e, '']])
    var a = { hmr: !1, transform: void 0 }
    A(29)(e, a)
    e.locals && (n.exports = e.locals)
  },
  642: function(n, i, A) {
    ;(n.exports = A(28)(!0)).push([
      n.i,
      '@-webkit-keyframes scale{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.7}80%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scale{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.7}80%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.ball-pulse>div:nth-child(0){-webkit-animation:scale .75s -.36s infinite cubic-bezier(.2,.68,.18,1.08);animation:scale .75s -.36s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div:first-child{-webkit-animation:scale .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08);animation:scale .75s -.24s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div:nth-child(2){-webkit-animation:scale .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08);animation:scale .75s -.12s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div:nth-child(3){-webkit-animation:scale .75s 0s infinite cubic-bezier(.2,.68,.18,1.08);animation:scale .75s 0s infinite cubic-bezier(.2,.68,.18,1.08)}.ball-pulse>div{background-color:#fff;width:15px;height:15px;border-radius:100%;margin:2px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block}',
      '',
      {
        version: 3,
        sources: [
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/animations/ball-pulse.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_mixins.scss',
          '/Users/johnlivingston/Projects/create-react-app-base/node_modules/loaders.css/src/_variables.scss'
        ],
        names: [],
        mappings:
          'AAIA,yBACE,GACE,2BAAmB,AAAnB,mBAAmB,AACnB,SAAU,CAAA,AAEZ,IACE,4BAAqB,AAArB,oBAAqB,AACrB,UAAY,CAAA,AAEd,IACE,2BAAmB,AAAnB,mBAAmB,AACnB,SAAU,CAAA,CAAA,AAXd,iBACE,GACE,2BAAmB,AAAnB,mBAAmB,AACnB,SAAU,CAAA,AAEZ,IACE,4BAAqB,AAArB,oBAAqB,AACrB,UAAY,CAAA,AAEd,IACE,2BAAmB,AAAnB,mBAAmB,AACnB,SAAU,CAAA,CAAA,AAOV,6BACE,0EAAkF,AAAlF,iEAAkF,CACnF,AAFD,4BACE,0EAAkF,AAAlF,iEAAkF,CACnF,AAFD,6BACE,0EAAkF,AAAlF,iEAAkF,CACnF,AAFD,6BACE,uEAAkF,AAAlF,8DAAkF,CACnF,AAIL,gBC3BE,sBCDkB,ADWlB,WCVc,ADWd,YCXc,ADYd,mBAAmB,AACnB,WCZU,ADGV,iCAAyB,AAAzB,yBAAyB,AD8BvB,oBAAqB,CACtB',
        file: 'ball-pulse.scss',
        sourcesContent: [
          "@import '../variables';\n@import '../mixins';\n@import '../functions';\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  45% {\n    transform: scale(0.1);\n    opacity: 0.7;\n  }\n  80% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n// mixins should be separated out\n@mixin ball-pulse($n:3, $start:0) {\n  @for $i from $start through $n {\n    > div:nth-child(#{$i}) {\n      animation: scale 0.75s delay(0.12s, $n, $i) infinite cubic-bezier(.2,.68,.18,1.08);\n    }\n  }\n}\n\n.ball-pulse {\n  @include ball-pulse();\n\n  > div {\n    @include balls();\n    @include global-animation();\n\n    display: inline-block;\n  }\n}\n",
          '@mixin global-bg() {\n  background-color: $primary-color;\n}\n\n@mixin global-animation() {\n  animation-fill-mode: both;\n}\n\n@mixin balls() {\n  @include global-bg();\n\n  width: $ball-size;\n  height: $ball-size;\n  border-radius: 100%;\n  margin: $margin;\n}\n\n@mixin lines() {\n  @include global-bg();\n\n  width: $line-width;\n  height: $line-height;\n  border-radius: 2px;\n  margin: $margin;\n}\n',
          '$primary-color: #fff !default;\n$ball-size: 15px !default;\n$margin: 2px !default;\n$line-height: 35px !default;\n$line-width: 4px !default;\n\n'
        ],
        sourceRoot: ''
      }
    ])
  }
})
//# sourceMappingURL=348.02162182.chunk.js.map

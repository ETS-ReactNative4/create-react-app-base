webpackJsonp([129], {
  183: function(r, s, e) {
    'use strict'
    Object.defineProperty(s, '__esModule', { value: !0 })
    s.default =
      'import React from \'react\'\nimport { Progress } from \'components/Common\'\n\nconst ProgressMulti = props => {\n  return (\n    <div>\n      <div className="text-center">Plain</div>\n      <Progress multi>\n        <Progress bar value="15" />\n        <Progress bar color="success" value="20" />\n        <Progress bar color="info" value="25" />\n        <Progress bar color="warning" value="20" />\n        <Progress bar color="danger" value="15" />\n      </Progress>\n      <div className="text-center">With Labels</div>\n      <Progress multi>\n        <Progress bar value="15">\n          Meh\n        </Progress>\n        <Progress bar color="success" value="35">\n          Wow!\n        </Progress>\n        <Progress bar color="warning" value="25">\n          25%\n        </Progress>\n        <Progress bar color="danger" value="25">\n          LOOK OUT!!\n        </Progress>\n      </Progress>\n      <div className="text-center">Stripes and Animations</div>\n      <Progress multi>\n        <Progress bar striped value="15">\n          Stripes\n        </Progress>\n        <Progress bar animated color="success" value="30">\n          Animated Stripes\n        </Progress>\n        <Progress bar color="info" value="25">\n          Plain\n        </Progress>\n      </Progress>\n    </div>\n  )\n}\n\nexport default ProgressMulti\n'
  }
})
//# sourceMappingURL=129.93ae34f2.chunk.js.map

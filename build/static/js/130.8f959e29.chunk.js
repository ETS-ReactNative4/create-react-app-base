webpackJsonp([130], {
  182: function(e, r, s) {
    'use strict'
    Object.defineProperty(r, '__esModule', { value: !0 })
    r.default =
      'import React from \'react\'\nimport { Progress } from \'components/Common\'\n\nconst ProgressMax = props => {\n  return (\n    <div>\n      <div className="text-center">1 of 5</div>\n      <Progress value="1" max="5" />\n      <div className="text-center">50 of 135</div>\n      <Progress value={50} max="135" />\n      <div className="text-center">75 of 111</div>\n      <Progress value={75} max={111} />\n      <div className="text-center">463 of 500</div>\n      <Progress value="463" max={500} />\n\n      <div className="text-center">Various (40) of 55</div>\n      <Progress multi>\n        <Progress bar value="5" max={55}>\n          5\n        </Progress>\n        <Progress bar color="success" value="15" max={55}>\n          15\n        </Progress>\n        <Progress bar color="warning" value="10" max={55}>\n          10\n        </Progress>\n        <Progress bar color="danger" value="10" max={55}>\n          10\n        </Progress>\n      </Progress>\n    </div>\n  )\n}\n\nexport default ProgressMax\n'
  }
})
//# sourceMappingURL=130.8f959e29.chunk.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{468:function(r,n,e){"use strict";e.r(n);n.default='import React, { Fragment } from \'react\'\n\nimport { Progress } from \'components/Common\'\n\nconst ProgressAnimated = () => {\n  return (\n    <Fragment>\n      <Progress animated value={2 * 5} />\n      <Progress animated color="success" value="25" />\n      <Progress animated color="info" value={50} />\n      <Progress animated color="warning" value={75} />\n      <Progress animated color="danger" value="100" />\n      <Progress multi>\n        <Progress animated bar value="10" />\n        <Progress animated bar color="success" value="30" />\n        <Progress animated bar color="warning" value="20" />\n        <Progress animated bar color="danger" value="20" />\n      </Progress>\n    </Fragment>\n  )\n}\n\nexport default ProgressAnimated\n'}}]);
//# sourceMappingURL=15.c6c6b75a.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{521:function(e,n,t){"use strict";t.r(n);n.default="import React, { PureComponent } from 'react'\n\nimport { DatePicker } from 'components/Common'\n\nclass DatePickerDefault extends PureComponent {\n  state = {\n    date: new Date().toISOString()\n  }\n\n  dateChange = date => {\n    this.setState({ date })\n  }\n\n  render() {\n    return <DatePicker value={this.state.date} onChange={this.dateChange} />\n  }\n}\n\nexport default DatePickerDefault\n"}}]);
//# sourceMappingURL=69.19c00586.chunk.js.map
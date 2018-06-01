import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import config from '../config'
import { DateTime } from 'components/Common'

storiesOf('DateTime', module)
  .addDecorator(config.wrapper)
  .add('Default', withInfo(config.defaults.info)(() => <DateTime />))
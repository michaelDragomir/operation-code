import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import IconTextGrouping from '../IconTextGrouping';

storiesOf('Common/IconTextGrouping', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <IconTextGrouping
      fontAwesomeIcon={faExclamationTriangle}
      iconAboveHeading={boolean('iconAboveHeading', false)}
      iconSize={select(
        'iconSize',
        ['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
        '6x',
      )}
      subText={text('subText', 'staff@operationcode.org (PropTypes.node)')}
      theme={select('theme', ['primary', 'secondary', 'gray'])}
      title={text('title', 'Email')}
      url={text('url', 'mailto:staff@operationcode.org')}
    />
  ));

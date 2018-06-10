import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@app/components/button';

storiesOf('Button', module).add('vanilla', () => <Button>Hello Button</Button>);

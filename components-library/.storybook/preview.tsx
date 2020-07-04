import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/theme/ThemeProvider';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

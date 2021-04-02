import { CssBaseline } from '@material-ui/core';
import {
    StylesProvider,
    ThemeProvider,
} from '@material-ui/core/styles';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme } from '../muiTheme';
import { View } from './View';

export function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <StylesProvider injectFirst>
                <StyledThemeProvider theme={darkTheme}>
                    <IntlProvider locale="en-US">
                        <CssBaseline />
                        <HashRouter>
                            <View />
                        </HashRouter>
                    </IntlProvider>
                </StyledThemeProvider>
            </StylesProvider>
        </ThemeProvider>
    );
}

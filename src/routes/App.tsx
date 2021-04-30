import { ThemeProvider } from '@emotion/react';
import {
    CssBaseline,
    MuiThemeProvider,
} from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';

import { darkTheme } from '../muiTheme';
import { View } from './View';

export function App() {
    return (
        <MuiThemeProvider theme={darkTheme}>
            <StylesProvider injectFirst>
                <ThemeProvider theme={darkTheme}>
                    <IntlProvider locale="en-US">
                        <CssBaseline />
                        <HashRouter>
                            <View />
                        </HashRouter>
                    </IntlProvider>
                </ThemeProvider>
            </StylesProvider>
        </MuiThemeProvider>
    );
}

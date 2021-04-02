import {
    createIntl,
    createIntlCache,
} from '@formatjs/intl';

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

export const intl = createIntl(
    {
        locale: 'en-US',
        messages: {},
    },
    cache,
);

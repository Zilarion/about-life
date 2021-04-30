import { intl } from '../intl';

export function formatNumber(value: number) {
    return intl.formatNumber(
        value,
        {
            style: 'currency',
            currency: 'USD',
        },
    );
}

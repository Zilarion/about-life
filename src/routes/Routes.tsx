import { observer } from 'mobx-react-lite';
import {
    Route,
    Switch,
} from 'react-router-dom';

import { Home } from './Home';

export const Routes = observer(() => {
    return <Switch>
        <Route
            path="*"
            component={Home}
        />
    </Switch>;
});

import { observer } from 'mobx-react-lite';

import { JobDescription } from '../components/JobDescription';
import { useGame } from '../hooks/useGame';

export const Home = observer(() => {
    const {
        job,
        resources,
    } = useGame();
    return <div>
        <JobDescription job={job} />
    </div>;
});

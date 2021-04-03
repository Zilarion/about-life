import { observer } from 'mobx-react-lite';

import { JobCard } from '../components/JobCard';
import { useGame } from '../hooks/useGame';
import { ChooseJob } from '../view/ChooseJob';

export const Home = observer(() => {
    const {
        job,
        resources,
    } = useGame();
    return <div>
        <JobCard job={job} />
        {job == null && <ChooseJob />}
    </div>;
});

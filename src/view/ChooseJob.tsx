import { observer } from 'mobx-react-lite';

import { JobDescription } from '../components/JobDescription';
import { jobs } from '../data/jobs';
import { useGame } from '../hooks/useGame';
import { Job } from '../models/Job';
import styled from '../themed-components';

const JobWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${p => p.theme.spacing(2)}px;
`;

export const ChooseJob = observer(() => {
    const game = useGame();

    return <JobWrapper>
        {jobs.map((job) => <JobDescription
            key={job.name}
            job={job}
            onClick={() => game.setJob(new Job(job))}
        />)}
    </JobWrapper>;
});

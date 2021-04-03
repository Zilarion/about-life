import { observer } from 'mobx-react-lite';

import { JobCard } from '../components/JobCard';
import { ResourceCard } from '../components/ResourceCard';
import { useGame } from '../hooks/useGame';
import styled from '../themed-components';
import { ChooseJob } from '../view/ChooseJob';
import { JobActions } from './JobActions';

const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${p => p.theme.spacing(2)}px;
    padding: ${p => p.theme.spacing(2)}px;
    height: 100%;
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)}px;
    height: 100%;
`;

export const Home = observer(() => {
    const {
        job,
        resources,
    } = useGame();
    return <HomeWrapper>
        <Sidebar>
            <JobCard job={job} />
            <ResourceCard resources={resources} />
        </Sidebar>
        {job == null && <ChooseJob />}
        {job && <JobActions />}
    </HomeWrapper>;
});

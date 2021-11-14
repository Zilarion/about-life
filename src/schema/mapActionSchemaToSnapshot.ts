import { ActionSnapshot } from '../models/ActionModel';
import { ActionSchema } from './ActionSchema';

export function mapActionSchemaToSnapshot({
    description,
    name,
}: ActionSchema): ActionSnapshot {
    return {
        description,
        name,
    };
}

import { readFileSync } from 'fs';

const file = readFileSync('server/api/data.json', 'utf-8');

export default () => (
    {
        cv:  JSON.parse(file)
    }
)
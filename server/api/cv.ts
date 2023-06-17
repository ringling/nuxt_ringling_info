import { readFileSync } from 'fs';

const file = readFileSync('server/api/data.json', 'utf-8');

export default defineEventHandler(() => (
  {
    cv: JSON.parse(file)
  }
));
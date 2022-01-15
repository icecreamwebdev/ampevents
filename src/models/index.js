// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { League, Sports } = initSchema(schema);

export {
  League,
  Sports
};
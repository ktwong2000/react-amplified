// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AggregateModel, MasterModel, TransactionModel, KnownAsModel, RelatedModel } = initSchema(schema);

export {
  AggregateModel,
  MasterModel,
  TransactionModel,
  KnownAsModel,
  RelatedModel
};
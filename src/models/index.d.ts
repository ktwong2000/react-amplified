import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AggregateModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MasterModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TransactionModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type KnownAsModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RelatedModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class AggregateModel {
  readonly id: string;
  readonly rating: number;
  readonly ingredient: string;
  readonly count?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AggregateModel, AggregateModelMetaData>);
  static copyOf(source: AggregateModel, mutator: (draft: MutableModel<AggregateModel, AggregateModelMetaData>) => MutableModel<AggregateModel, AggregateModelMetaData> | void): AggregateModel;
}

export declare class MasterModel {
  readonly id: string;
  readonly ingredient: string;
  readonly active?: string | null;
  readonly totalCount?: number | null;
  readonly AggregateModel?: (AggregateModel | null)[] | null;
  readonly TransactionModel?: (TransactionModel | null)[] | null;
  readonly KnownAsModel?: (KnownAsModel | null)[] | null;
  readonly RelatedModel?: (RelatedModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MasterModel, MasterModelMetaData>);
  static copyOf(source: MasterModel, mutator: (draft: MutableModel<MasterModel, MasterModelMetaData>) => MutableModel<MasterModel, MasterModelMetaData> | void): MasterModel;
}

export declare class TransactionModel {
  readonly id: string;
  readonly sourceUrl: string;
  readonly ingredient: string;
  readonly sourceName?: string | null;
  readonly title?: string | null;
  readonly rating?: number | null;
  readonly knowAs?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TransactionModel, TransactionModelMetaData>);
  static copyOf(source: TransactionModel, mutator: (draft: MutableModel<TransactionModel, TransactionModelMetaData>) => MutableModel<TransactionModel, TransactionModelMetaData> | void): TransactionModel;
}

export declare class KnownAsModel {
  readonly id: string;
  readonly ingredientKnownAs: string;
  readonly ingredient: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<KnownAsModel, KnownAsModelMetaData>);
  static copyOf(source: KnownAsModel, mutator: (draft: MutableModel<KnownAsModel, KnownAsModelMetaData>) => MutableModel<KnownAsModel, KnownAsModelMetaData> | void): KnownAsModel;
}

export declare class RelatedModel {
  readonly id: string;
  readonly ingredientRelated: string;
  readonly ingredient: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RelatedModel, RelatedModelMetaData>);
  static copyOf(source: RelatedModel, mutator: (draft: MutableModel<RelatedModel, RelatedModelMetaData>) => MutableModel<RelatedModel, RelatedModelMetaData> | void): RelatedModel;
}
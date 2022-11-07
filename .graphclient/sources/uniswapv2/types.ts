// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Uniswapv2Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  secrethCipher?: Maybe<secreth_cipher>;
  secrethCiphers: Array<secreth_cipher>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerysecrethCipherArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysecrethCiphersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<secreth_cipher_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<secreth_cipher_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  secrethCipher?: Maybe<secreth_cipher>;
  secrethCiphers: Array<secreth_cipher>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionsecrethCipherArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsecrethCiphersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<secreth_cipher_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<secreth_cipher_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type secreth_cipher = {
  id: Scalars['ID'];
  cipher?: Maybe<Scalars['String']>;
};

export type secreth_cipher_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  cipher?: InputMaybe<Scalars['String']>;
  cipher_not?: InputMaybe<Scalars['String']>;
  cipher_gt?: InputMaybe<Scalars['String']>;
  cipher_lt?: InputMaybe<Scalars['String']>;
  cipher_gte?: InputMaybe<Scalars['String']>;
  cipher_lte?: InputMaybe<Scalars['String']>;
  cipher_in?: InputMaybe<Array<Scalars['String']>>;
  cipher_not_in?: InputMaybe<Array<Scalars['String']>>;
  cipher_contains?: InputMaybe<Scalars['String']>;
  cipher_contains_nocase?: InputMaybe<Scalars['String']>;
  cipher_not_contains?: InputMaybe<Scalars['String']>;
  cipher_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cipher_starts_with?: InputMaybe<Scalars['String']>;
  cipher_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cipher_not_starts_with?: InputMaybe<Scalars['String']>;
  cipher_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cipher_ends_with?: InputMaybe<Scalars['String']>;
  cipher_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cipher_not_ends_with?: InputMaybe<Scalars['String']>;
  cipher_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type secreth_cipher_orderBy =
  | 'id'
  | 'cipher';

  export type QuerySdk = {
      /** null **/
  secrethCipher: InContextSdkMethod<Query['secrethCipher'], QuerysecrethCipherArgs, MeshContext>,
  /** null **/
  secrethCiphers: InContextSdkMethod<Query['secrethCiphers'], QuerysecrethCiphersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  secrethCipher: InContextSdkMethod<Subscription['secrethCipher'], SubscriptionsecrethCipherArgs, MeshContext>,
  /** null **/
  secrethCiphers: InContextSdkMethod<Subscription['secrethCiphers'], SubscriptionsecrethCiphersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["uniswapv2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}

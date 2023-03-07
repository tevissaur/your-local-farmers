import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['ID'];
  user?: Maybe<User>;
};

export type Cart = {
  __typename?: 'Cart';
  items?: Maybe<Array<Maybe<CartProduct>>>;
  total?: Maybe<Scalars['Int']>;
};

export type CartInput = {
  items?: InputMaybe<Array<InputMaybe<CartProductInput>>>;
  total?: InputMaybe<Scalars['Int']>;
};

export type CartProduct = {
  __typename?: 'CartProduct';
  dateAdded?: Maybe<Scalars['String']>;
  farmID: Scalars['ID'];
  price: Scalars['Int'];
  productID: Scalars['ID'];
  quantity: Quantity;
};

export type CartProductInput = {
  dateAdded?: InputMaybe<Scalars['String']>;
  farmID: Scalars['ID'];
  price: Scalars['Int'];
  productID: Scalars['ID'];
  quantity: QuantityInput;
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID'];
  imgUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type EditLocation = {
  latitude?: InputMaybe<Scalars['Int']>;
  longitude?: InputMaybe<Scalars['Int']>;
};

export type Farm = {
  __typename?: 'Farm';
  _id: Scalars['ID'];
  avgScore?: Maybe<Scalars['Int']>;
  categoriesOffered?: Maybe<Array<Maybe<Category>>>;
  location?: Maybe<Location>;
  name: Scalars['String'];
  owners?: Maybe<Array<Maybe<User>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  purchaseOrders?: Maybe<Array<Maybe<PurchaseOrder>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  story: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createFarm?: Maybe<Farm>;
  createPO?: Maybe<PurchaseOrder>;
  createProduct?: Maybe<Farm>;
  login?: Maybe<Auth>;
  postReview?: Maybe<Review>;
  signup?: Maybe<Auth>;
  updateCart?: Maybe<User>;
  updateFarm?: Maybe<Farm>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCategoryArgs = {
  category?: InputMaybe<NewCategory>;
};


export type MutationCreateFarmArgs = {
  farm?: InputMaybe<NewFarm>;
};


export type MutationCreatePoArgs = {
  PO?: InputMaybe<NewPurchaseOrder>;
};


export type MutationCreateProductArgs = {
  farmId?: InputMaybe<Scalars['ID']>;
  product?: InputMaybe<NewProduct>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPostReviewArgs = {
  farm_id?: InputMaybe<Scalars['ID']>;
  product_id?: InputMaybe<Scalars['ID']>;
  review: NewReview;
  user?: InputMaybe<Scalars['ID']>;
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateCartArgs = {
  cart?: InputMaybe<CartInput>;
};


export type MutationUpdateFarmArgs = {
  farm?: InputMaybe<UpdatedFarm>;
};


export type MutationUpdateUserArgs = {
  user?: InputMaybe<UpdatedUser>;
};

export type NewCategory = {
  imgUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NewFarm = {
  address: Scalars['String'];
  name: Scalars['String'];
  owners: Array<InputMaybe<Scalars['ID']>>;
  story?: InputMaybe<Scalars['String']>;
};

export type NewProduct = {
  categories: Array<InputMaybe<Scalars['ID']>>;
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type NewPurchaseOrder = {
  buyer: Scalars['ID'];
  dateCreated?: InputMaybe<Scalars['String']>;
  items: Array<InputMaybe<Scalars['ID']>>;
  orderTotal?: InputMaybe<Scalars['Int']>;
  pickUpTime?: InputMaybe<Scalars['String']>;
  seller: Scalars['ID'];
};

export type NewReview = {
  author: Scalars['ID'];
  content: Scalars['String'];
  rating: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID'];
  avgScore?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  farm?: Maybe<Farm>;
  image?: Maybe<Scalars['String']>;
  inSeason?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity?: Maybe<Quantity>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type PurchaseOrder = {
  __typename?: 'PurchaseOrder';
  _id: Scalars['ID'];
  buyer?: Maybe<User>;
  dateCreated?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Product>>>;
  orderTotal?: Maybe<Scalars['Int']>;
  pickUpTime: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  seller?: Maybe<Farm>;
};

export type Quantity = {
  __typename?: 'Quantity';
  amount: Scalars['Int'];
  type: Scalars['String'];
};

export type QuantityInput = {
  amount: Scalars['Int'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  farmDashboard?: Maybe<Farm>;
  farmStore?: Maybe<Farm>;
  farms?: Maybe<Array<Maybe<Farm>>>;
  getPO?: Maybe<PurchaseOrder>;
  localFarms?: Maybe<Array<Maybe<Farm>>>;
  me?: Maybe<User>;
  oneProduct?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};


export type QueryFarmDashboardArgs = {
  _id: Scalars['ID'];
};


export type QueryFarmStoreArgs = {
  _id: Scalars['ID'];
};


export type QueryGetPoArgs = {
  _id: Scalars['ID'];
};


export type QueryLocalFarmsArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type QueryMeArgs = {
  _id: Scalars['ID'];
};


export type QueryOneProductArgs = {
  _id: Scalars['ID'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID'];
  author?: Maybe<User>;
  content: Scalars['String'];
  rating: Scalars['Int'];
};

export type UpdateCartInput = {
  cart?: InputMaybe<CartInput>;
  owner: Scalars['ID'];
};

export type UpdatedFarm = {
  _id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  story?: InputMaybe<Scalars['String']>;
};

export type UpdatedUser = {
  _id: Scalars['ID'];
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  isFarmer?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  cart?: Maybe<Cart>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  isFarmer: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  orders?: Maybe<Array<Maybe<PurchaseOrder>>>;
  password: Scalars['String'];
  profilePic?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  username: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Auth: ResolverTypeWrapper<Auth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cart: ResolverTypeWrapper<Cart>;
  CartInput: CartInput;
  CartProduct: ResolverTypeWrapper<CartProduct>;
  CartProductInput: CartProductInput;
  Category: ResolverTypeWrapper<Category>;
  EditLocation: EditLocation;
  Farm: ResolverTypeWrapper<Farm>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Location: ResolverTypeWrapper<Location>;
  Mutation: ResolverTypeWrapper<{}>;
  NewCategory: NewCategory;
  NewFarm: NewFarm;
  NewProduct: NewProduct;
  NewPurchaseOrder: NewPurchaseOrder;
  NewReview: NewReview;
  Product: ResolverTypeWrapper<Product>;
  PurchaseOrder: ResolverTypeWrapper<PurchaseOrder>;
  Quantity: ResolverTypeWrapper<Quantity>;
  QuantityInput: QuantityInput;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateCartInput: UpdateCartInput;
  UpdatedFarm: UpdatedFarm;
  UpdatedUser: UpdatedUser;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Auth: Auth;
  Boolean: Scalars['Boolean'];
  Cart: Cart;
  CartInput: CartInput;
  CartProduct: CartProduct;
  CartProductInput: CartProductInput;
  Category: Category;
  EditLocation: EditLocation;
  Farm: Farm;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Location: Location;
  Mutation: {};
  NewCategory: NewCategory;
  NewFarm: NewFarm;
  NewProduct: NewProduct;
  NewPurchaseOrder: NewPurchaseOrder;
  NewReview: NewReview;
  Product: Product;
  PurchaseOrder: PurchaseOrder;
  Quantity: Quantity;
  QuantityInput: QuantityInput;
  Query: {};
  Review: Review;
  String: Scalars['String'];
  UpdateCartInput: UpdateCartInput;
  UpdatedFarm: UpdatedFarm;
  UpdatedUser: UpdatedUser;
  User: User;
}>;

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = ResolversObject<{
  token?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartProduct']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProduct'] = ResolversParentTypes['CartProduct']> = ResolversObject<{
  dateAdded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  farmID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Quantity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imgUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FarmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Farm'] = ResolversParentTypes['Farm']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  avgScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  categoriesOffered?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  purchaseOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['PurchaseOrder']>>>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  story?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, Partial<MutationCreateCategoryArgs>>;
  createFarm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, Partial<MutationCreateFarmArgs>>;
  createPO?: Resolver<Maybe<ResolversTypes['PurchaseOrder']>, ParentType, ContextType, Partial<MutationCreatePoArgs>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, Partial<MutationCreateProductArgs>>;
  login?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  postReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationPostReviewArgs, 'review'>>;
  signup?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'email' | 'password' | 'username'>>;
  updateCart?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationUpdateCartArgs>>;
  updateFarm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, Partial<MutationUpdateFarmArgs>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
}>;

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  avgScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  farm?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inSeason?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Quantity']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PurchaseOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['PurchaseOrder'] = ResolversParentTypes['PurchaseOrder']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  buyer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  orderTotal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pickUpTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuantityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quantity'] = ResolversParentTypes['Quantity']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  farmDashboard?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, RequireFields<QueryFarmDashboardArgs, '_id'>>;
  farmStore?: Resolver<Maybe<ResolversTypes['Farm']>, ParentType, ContextType, RequireFields<QueryFarmStoreArgs, '_id'>>;
  farms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Farm']>>>, ParentType, ContextType>;
  getPO?: Resolver<Maybe<ResolversTypes['PurchaseOrder']>, ParentType, ContextType, RequireFields<QueryGetPoArgs, '_id'>>;
  localFarms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Farm']>>>, ParentType, ContextType, RequireFields<QueryLocalFarmsArgs, 'latitude' | 'longitude'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryMeArgs, '_id'>>;
  oneProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryOneProductArgs, '_id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFarmer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['PurchaseOrder']>>>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profilePic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Auth?: AuthResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartProduct?: CartProductResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Farm?: FarmResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  PurchaseOrder?: PurchaseOrderResolvers<ContextType>;
  Quantity?: QuantityResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;


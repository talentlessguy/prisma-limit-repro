/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../graphql/context"
import { FieldShieldResolver, ObjectTypeShieldResolver } from "nexus-shield"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ImageCreateNestedOneWithoutPostInput: { // input type
    connect?: NexusGenInputs['ImageWhereUniqueInput'] | null; // ImageWhereUniqueInput
    connectOrCreate?: NexusGenInputs['ImageCreateOrConnectWithoutPostInput'] | null; // ImageCreateOrConnectWithoutPostInput
    create?: NexusGenInputs['ImageCreateWithoutPostInput'] | null; // ImageCreateWithoutPostInput
  }
  ImageCreateOrConnectWithoutPostInput: { // input type
    create: NexusGenInputs['ImageCreateWithoutPostInput']; // ImageCreateWithoutPostInput!
    where: NexusGenInputs['ImageWhereUniqueInput']; // ImageWhereUniqueInput!
  }
  ImageCreateWithoutPostInput: { // input type
    bytes: number; // Int!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    etag: string; // String!
    format: string; // String!
    height: number; // Int!
    originalFilename: string; // String!
    publicId: string; // String!
    resourceType: string; // String!
    secureUrl: string; // String!
    signature: string; // String!
    type: string; // String!
    url: string; // String!
    version: number; // Int!
    width: number; // Int!
  }
  ImageWhereUniqueInput: { // input type
    id?: number | null; // Int
    publicId?: string | null; // String
    secureUrl?: string | null; // String
    url?: string | null; // String
  }
  PostCreateInput: { // input type
    author: NexusGenInputs['UserCreateNestedOneWithoutPostsInput']; // UserCreateNestedOneWithoutPostsInput!
    caption?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    image: NexusGenInputs['ImageCreateNestedOneWithoutPostInput']; // ImageCreateNestedOneWithoutPostInput!
    published?: boolean | null; // Boolean
    views?: number | null; // Int
  }
  PostCreateManyAuthorInput: { // input type
    caption?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: number | null; // Int
    imagePublicId: string; // String!
    published?: boolean | null; // Boolean
    views?: number | null; // Int
  }
  PostCreateManyAuthorInputEnvelope: { // input type
    data?: NexusGenInputs['PostCreateManyAuthorInput'][] | null; // [PostCreateManyAuthorInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  PostCreateNestedManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['PostCreateOrConnectWithoutAuthorInput'][] | null; // [PostCreateOrConnectWithoutAuthorInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
    createMany?: NexusGenInputs['PostCreateManyAuthorInputEnvelope'] | null; // PostCreateManyAuthorInputEnvelope
  }
  PostCreateOrConnectWithoutAuthorInput: { // input type
    create: NexusGenInputs['PostCreateWithoutAuthorInput']; // PostCreateWithoutAuthorInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostCreateWithoutAuthorInput: { // input type
    caption?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    image: NexusGenInputs['ImageCreateNestedOneWithoutPostInput']; // ImageCreateNestedOneWithoutPostInput!
    published?: boolean | null; // Boolean
    views?: number | null; // Int
  }
  PostWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // String
    emailVerified?: NexusGenScalars['DateTime'] | null; // DateTime
    followers?: number | null; // Int
    image?: string | null; // String
    name: string; // String!
    posts?: NexusGenInputs['PostCreateNestedManyWithoutAuthorInput'] | null; // PostCreateNestedManyWithoutAuthorInput
    slug?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    views?: number | null; // Int
  }
  UserCreateNestedOneWithoutPostsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutPostsInput'] | null; // UserCreateOrConnectWithoutPostsInput
    create?: NexusGenInputs['UserCreateWithoutPostsInput'] | null; // UserCreateWithoutPostsInput
  }
  UserCreateOrConnectWithoutPostsInput: { // input type
    create: NexusGenInputs['UserCreateWithoutPostsInput']; // UserCreateWithoutPostsInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserCreateWithoutPostsInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // String
    emailVerified?: NexusGenScalars['DateTime'] | null; // DateTime
    followers?: number | null; // Int
    image?: string | null; // String
    name: string; // String!
    slug?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    views?: number | null; // Int
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    emailVerified?: NexusGenScalars['DateTime'] | null; // DateTime
    image?: string | null; // String
    name?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
    slug?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Image: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    format: string; // String!
    height: number; // Int!
    id: number; // Int!
    originalFilename: string; // String!
    publicId: string; // String!
    resourceType: string; // String!
    secureUrl: string; // String!
    url: string; // String!
    width: number; // Int!
  }
  Mutation: {};
  Post: { // root type
    authorId: number; // Int!
    caption?: string | null; // String
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    views: number; // Int!
  }
  Query: {};
  User: { // root type
    email?: string | null; // String
    emailVerified?: NexusGenScalars['DateTime'] | null; // DateTime
    followers: number; // Int!
    id: number; // Int!
    image?: string | null; // String
    name: string; // String!
    slug: string; // String!
    views: number; // Int!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Image: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    format: string; // String!
    height: number; // Int!
    id: number; // Int!
    originalFilename: string; // String!
    publicId: string; // String!
    resourceType: string; // String!
    secureUrl: string; // String!
    url: string; // String!
    width: number; // Int!
  }
  Mutation: { // field return type
    createOneUser: NexusGenRootTypes['User']; // User!
    createPost: NexusGenRootTypes['Post'] | null; // Post
    updateUserSettings: NexusGenRootTypes['User'] | null; // User
    updateViews: NexusGenRootTypes['Post'] | null; // Post
  }
  Post: { // field return type
    author: NexusGenRootTypes['User']; // User!
    authorId: number; // Int!
    caption: string | null; // String
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    image: NexusGenRootTypes['Image']; // Image!
    views: number; // Int!
  }
  Query: { // field return type
    image: NexusGenRootTypes['Image'] | null; // Image
    images: NexusGenRootTypes['Image'][]; // [Image!]!
    post: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string | null; // String
    emailVerified: NexusGenScalars['DateTime'] | null; // DateTime
    followers: number; // Int!
    id: number; // Int!
    image: string | null; // String
    name: string; // String!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    slug: string; // String!
    views: number; // Int!
  }
}

export interface NexusGenFieldTypeNames {
  Image: { // field return type name
    createdAt: 'DateTime'
    format: 'String'
    height: 'Int'
    id: 'Int'
    originalFilename: 'String'
    publicId: 'String'
    resourceType: 'String'
    secureUrl: 'String'
    url: 'String'
    width: 'Int'
  }
  Mutation: { // field return type name
    createOneUser: 'User'
    createPost: 'Post'
    updateUserSettings: 'User'
    updateViews: 'Post'
  }
  Post: { // field return type name
    author: 'User'
    authorId: 'Int'
    caption: 'String'
    createdAt: 'DateTime'
    id: 'Int'
    image: 'Image'
    views: 'Int'
  }
  Query: { // field return type name
    image: 'Image'
    images: 'Image'
    post: 'Post'
    posts: 'Post'
    user: 'User'
    users: 'User'
  }
  User: { // field return type name
    email: 'String'
    emailVerified: 'DateTime'
    followers: 'Int'
    id: 'Int'
    image: 'String'
    name: 'String'
    posts: 'Post'
    slug: 'String'
    views: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    createPost: { // args
      data?: NexusGenInputs['PostCreateInput'] | null; // PostCreateInput
    }
    updateUserSettings: { // args
      data?: NexusGenInputs['UserUpdateInput'] | null; // UserUpdateInput
      id?: number | null; // Int
    }
    updateViews: { // args
      id?: number | null; // Int
      userId?: number | null; // Int
    }
  }
  Query: {
    image: { // args
      where: NexusGenInputs['ImageWhereUniqueInput']; // ImageWhereUniqueInput!
    }
    images: { // args
      after?: NexusGenInputs['ImageWhereUniqueInput'] | null; // ImageWhereUniqueInput
      before?: NexusGenInputs['ImageWhereUniqueInput'] | null; // ImageWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    posts: { // args
      after?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      before?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  User: {
    posts: { // args
      after?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      before?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
    /**
     * Default authorization rule to execute on all fields of this object
     */
    shield?: ObjectTypeShieldResolver<TypeName>
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization rule to execute for this field
     */
    shield?: FieldShieldResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}

/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Track
 * 
 */
export type Track = {
  id: number
  beatportTrackId: string
  title: string
  key: string | null
  labelId: number | null
  genreId: number | null
  previewSong: string | null
  length: string | null
  bpm: number | null
  released: string | null
  artwork: string | null
}

/**
 * Model Label
 * 
 */
export type Label = {
  id: number
  name: string
  beatportLabelId: string
}

/**
 * Model Genre
 * 
 */
export type Genre = {
  id: number
  name: string
  beatportGenreId: string
}

/**
 * Model Artist
 * 
 */
export type Artist = {
  id: number
  name: string
  beatportArtistId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tracks
 * const tracks = await prisma.track.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tracks
   * const tracks = await prisma.track.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<GlobalReject>;

  /**
   * `prisma.label`: Exposes CRUD operations for the **Label** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labels
    * const labels = await prisma.label.findMany()
    * ```
    */
  get label(): Prisma.LabelDelegate<GlobalReject>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<GlobalReject>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Track: 'Track',
    Label: 'Label',
    Genre: 'Genre',
    Artist: 'Artist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TrackCountOutputType
   */


  export type TrackCountOutputType = {
    artists: number
  }

  export type TrackCountOutputTypeSelect = {
    artists?: boolean
  }

  export type TrackCountOutputTypeGetPayload<S extends boolean | null | undefined | TrackCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TrackCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TrackCountOutputTypeArgs)
    ? TrackCountOutputType 
    : S extends { select: any } & (TrackCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TrackCountOutputType ? TrackCountOutputType[P] : never
  } 
      : TrackCountOutputType




  // Custom InputTypes

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect | null
  }



  /**
   * Count Type LabelCountOutputType
   */


  export type LabelCountOutputType = {
    Track: number
  }

  export type LabelCountOutputTypeSelect = {
    Track?: boolean
  }

  export type LabelCountOutputTypeGetPayload<S extends boolean | null | undefined | LabelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LabelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LabelCountOutputTypeArgs)
    ? LabelCountOutputType 
    : S extends { select: any } & (LabelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LabelCountOutputType ? LabelCountOutputType[P] : never
  } 
      : LabelCountOutputType




  // Custom InputTypes

  /**
   * LabelCountOutputType without action
   */
  export type LabelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LabelCountOutputType
     */
    select?: LabelCountOutputTypeSelect | null
  }



  /**
   * Count Type GenreCountOutputType
   */


  export type GenreCountOutputType = {
    Track: number
  }

  export type GenreCountOutputTypeSelect = {
    Track?: boolean
  }

  export type GenreCountOutputTypeGetPayload<S extends boolean | null | undefined | GenreCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? GenreCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (GenreCountOutputTypeArgs)
    ? GenreCountOutputType 
    : S extends { select: any } & (GenreCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof GenreCountOutputType ? GenreCountOutputType[P] : never
  } 
      : GenreCountOutputType




  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect | null
  }



  /**
   * Count Type ArtistCountOutputType
   */


  export type ArtistCountOutputType = {
    Track: number
  }

  export type ArtistCountOutputTypeSelect = {
    Track?: boolean
  }

  export type ArtistCountOutputTypeGetPayload<S extends boolean | null | undefined | ArtistCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ArtistCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ArtistCountOutputTypeArgs)
    ? ArtistCountOutputType 
    : S extends { select: any } & (ArtistCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ArtistCountOutputType ? ArtistCountOutputType[P] : never
  } 
      : ArtistCountOutputType




  // Custom InputTypes

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Track
   */


  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    id: number | null
    labelId: number | null
    genreId: number | null
    bpm: number | null
  }

  export type TrackSumAggregateOutputType = {
    id: number | null
    labelId: number | null
    genreId: number | null
    bpm: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: number | null
    beatportTrackId: string | null
    title: string | null
    key: string | null
    labelId: number | null
    genreId: number | null
    previewSong: string | null
    length: string | null
    bpm: number | null
    released: string | null
    artwork: string | null
  }

  export type TrackMaxAggregateOutputType = {
    id: number | null
    beatportTrackId: string | null
    title: string | null
    key: string | null
    labelId: number | null
    genreId: number | null
    previewSong: string | null
    length: string | null
    bpm: number | null
    released: string | null
    artwork: string | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    beatportTrackId: number
    title: number
    key: number
    labelId: number
    genreId: number
    previewSong: number
    length: number
    bpm: number
    released: number
    artwork: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    id?: true
    labelId?: true
    genreId?: true
    bpm?: true
  }

  export type TrackSumAggregateInputType = {
    id?: true
    labelId?: true
    genreId?: true
    bpm?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    beatportTrackId?: true
    title?: true
    key?: true
    labelId?: true
    genreId?: true
    previewSong?: true
    length?: true
    bpm?: true
    released?: true
    artwork?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    beatportTrackId?: true
    title?: true
    key?: true
    labelId?: true
    genreId?: true
    previewSong?: true
    length?: true
    bpm?: true
    released?: true
    artwork?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    beatportTrackId?: true
    title?: true
    key?: true
    labelId?: true
    genreId?: true
    previewSong?: true
    length?: true
    bpm?: true
    released?: true
    artwork?: true
    _all?: true
  }

  export type TrackAggregateArgs = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs = {
    where?: TrackWhereInput
    orderBy?: Enumerable<TrackOrderByWithAggregationInput>
    by: TrackScalarFieldEnum[]
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }


  export type TrackGroupByOutputType = {
    id: number
    beatportTrackId: string
    title: string
    key: string | null
    labelId: number | null
    genreId: number | null
    previewSong: string | null
    length: string | null
    bpm: number | null
    released: string | null
    artwork: string | null
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect = {
    id?: boolean
    beatportTrackId?: boolean
    title?: boolean
    key?: boolean
    labelId?: boolean
    genreId?: boolean
    previewSong?: boolean
    length?: boolean
    bpm?: boolean
    released?: boolean
    artwork?: boolean
    label?: boolean | LabelArgs
    genre?: boolean | GenreArgs
    artists?: boolean | Track$artistsArgs
    _count?: boolean | TrackCountOutputTypeArgs
  }


  export type TrackInclude = {
    label?: boolean | LabelArgs
    genre?: boolean | GenreArgs
    artists?: boolean | Track$artistsArgs
    _count?: boolean | TrackCountOutputTypeArgs
  }

  export type TrackGetPayload<S extends boolean | null | undefined | TrackArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Track :
    S extends undefined ? never :
    S extends { include: any } & (TrackArgs | TrackFindManyArgs)
    ? Track  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'label' ? LabelGetPayload<S['include'][P]> | null :
        P extends 'genre' ? GenreGetPayload<S['include'][P]> | null :
        P extends 'artists' ? Array < ArtistGetPayload<S['include'][P]>>  :
        P extends '_count' ? TrackCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TrackArgs | TrackFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'label' ? LabelGetPayload<S['select'][P]> | null :
        P extends 'genre' ? GenreGetPayload<S['select'][P]> | null :
        P extends 'artists' ? Array < ArtistGetPayload<S['select'][P]>>  :
        P extends '_count' ? TrackCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Track ? Track[P] : never
  } 
      : Track


  type TrackCountArgs = 
    Omit<TrackFindManyArgs, 'select' | 'include'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TrackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Track'> extends True ? Prisma__TrackClient<TrackGetPayload<T>> : Prisma__TrackClient<TrackGetPayload<T> | null, null>

    /**
     * Find one Track that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TrackFindUniqueOrThrowArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TrackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Track'> extends True ? Prisma__TrackClient<TrackGetPayload<T>> : Prisma__TrackClient<TrackGetPayload<T> | null, null>

    /**
     * Find the first Track that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TrackFindFirstOrThrowArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackFindManyArgs>(
      args?: SelectSubset<T, TrackFindManyArgs>
    ): Prisma.PrismaPromise<Array<TrackGetPayload<T>>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
    **/
    create<T extends TrackCreateArgs>(
      args: SelectSubset<T, TrackCreateArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Create many Tracks.
     *     @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const track = await prisma.track.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackCreateManyArgs>(
      args?: SelectSubset<T, TrackCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
    **/
    delete<T extends TrackDeleteArgs>(
      args: SelectSubset<T, TrackDeleteArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackUpdateArgs>(
      args: SelectSubset<T, TrackUpdateArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackDeleteManyArgs>(
      args?: SelectSubset<T, TrackDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackUpdateManyArgs>(
      args: SelectSubset<T, TrackUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
    **/
    upsert<T extends TrackUpsertArgs>(
      args: SelectSubset<T, TrackUpsertArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TrackClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    label<T extends LabelArgs= {}>(args?: Subset<T, LabelArgs>): Prisma__LabelClient<LabelGetPayload<T> | Null>;

    genre<T extends GenreArgs= {}>(args?: Subset<T, GenreArgs>): Prisma__GenreClient<GenreGetPayload<T> | Null>;

    artists<T extends Track$artistsArgs= {}>(args?: Subset<T, Track$artistsArgs>): Prisma.PrismaPromise<Array<ArtistGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Track base type for findUnique actions
   */
  export type TrackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUnique
   */
  export interface TrackFindUniqueArgs extends TrackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track base type for findFirst actions
   */
  export type TrackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: Enumerable<TrackScalarFieldEnum>
  }

  /**
   * Track findFirst
   */
  export interface TrackFindFirstArgs extends TrackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: Enumerable<TrackScalarFieldEnum>
  }


  /**
   * Track findMany
   */
  export type TrackFindManyArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: Enumerable<TrackScalarFieldEnum>
  }


  /**
   * Track create
   */
  export type TrackCreateArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }


  /**
   * Track createMany
   */
  export type TrackCreateManyArgs = {
    /**
     * The data used to create many Tracks.
     */
    data: Enumerable<TrackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Track update
   */
  export type TrackUpdateArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
  }


  /**
   * Track upsert
   */
  export type TrackUpsertArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }


  /**
   * Track delete
   */
  export type TrackDeleteArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
  }


  /**
   * Track.artists
   */
  export type Track$artistsArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    where?: ArtistWhereInput
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    cursor?: ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ArtistScalarFieldEnum>
  }


  /**
   * Track without action
   */
  export type TrackArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
  }



  /**
   * Model Label
   */


  export type AggregateLabel = {
    _count: LabelCountAggregateOutputType | null
    _avg: LabelAvgAggregateOutputType | null
    _sum: LabelSumAggregateOutputType | null
    _min: LabelMinAggregateOutputType | null
    _max: LabelMaxAggregateOutputType | null
  }

  export type LabelAvgAggregateOutputType = {
    id: number | null
  }

  export type LabelSumAggregateOutputType = {
    id: number | null
  }

  export type LabelMinAggregateOutputType = {
    id: number | null
    name: string | null
    beatportLabelId: string | null
  }

  export type LabelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    beatportLabelId: string | null
  }

  export type LabelCountAggregateOutputType = {
    id: number
    name: number
    beatportLabelId: number
    _all: number
  }


  export type LabelAvgAggregateInputType = {
    id?: true
  }

  export type LabelSumAggregateInputType = {
    id?: true
  }

  export type LabelMinAggregateInputType = {
    id?: true
    name?: true
    beatportLabelId?: true
  }

  export type LabelMaxAggregateInputType = {
    id?: true
    name?: true
    beatportLabelId?: true
  }

  export type LabelCountAggregateInputType = {
    id?: true
    name?: true
    beatportLabelId?: true
    _all?: true
  }

  export type LabelAggregateArgs = {
    /**
     * Filter which Label to aggregate.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: Enumerable<LabelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labels
    **/
    _count?: true | LabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabelMaxAggregateInputType
  }

  export type GetLabelAggregateType<T extends LabelAggregateArgs> = {
        [P in keyof T & keyof AggregateLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabel[P]>
      : GetScalarType<T[P], AggregateLabel[P]>
  }




  export type LabelGroupByArgs = {
    where?: LabelWhereInput
    orderBy?: Enumerable<LabelOrderByWithAggregationInput>
    by: LabelScalarFieldEnum[]
    having?: LabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabelCountAggregateInputType | true
    _avg?: LabelAvgAggregateInputType
    _sum?: LabelSumAggregateInputType
    _min?: LabelMinAggregateInputType
    _max?: LabelMaxAggregateInputType
  }


  export type LabelGroupByOutputType = {
    id: number
    name: string
    beatportLabelId: string
    _count: LabelCountAggregateOutputType | null
    _avg: LabelAvgAggregateOutputType | null
    _sum: LabelSumAggregateOutputType | null
    _min: LabelMinAggregateOutputType | null
    _max: LabelMaxAggregateOutputType | null
  }

  type GetLabelGroupByPayload<T extends LabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabelGroupByOutputType[P]>
            : GetScalarType<T[P], LabelGroupByOutputType[P]>
        }
      >
    >


  export type LabelSelect = {
    id?: boolean
    name?: boolean
    beatportLabelId?: boolean
    Track?: boolean | Label$TrackArgs
    _count?: boolean | LabelCountOutputTypeArgs
  }


  export type LabelInclude = {
    Track?: boolean | Label$TrackArgs
    _count?: boolean | LabelCountOutputTypeArgs
  }

  export type LabelGetPayload<S extends boolean | null | undefined | LabelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Label :
    S extends undefined ? never :
    S extends { include: any } & (LabelArgs | LabelFindManyArgs)
    ? Label  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Track' ? Array < TrackGetPayload<S['include'][P]>>  :
        P extends '_count' ? LabelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LabelArgs | LabelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Track' ? Array < TrackGetPayload<S['select'][P]>>  :
        P extends '_count' ? LabelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Label ? Label[P] : never
  } 
      : Label


  type LabelCountArgs = 
    Omit<LabelFindManyArgs, 'select' | 'include'> & {
      select?: LabelCountAggregateInputType | true
    }

  export interface LabelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Label that matches the filter.
     * @param {LabelFindUniqueArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LabelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LabelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Label'> extends True ? Prisma__LabelClient<LabelGetPayload<T>> : Prisma__LabelClient<LabelGetPayload<T> | null, null>

    /**
     * Find one Label that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LabelFindUniqueOrThrowArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LabelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LabelFindUniqueOrThrowArgs>
    ): Prisma__LabelClient<LabelGetPayload<T>>

    /**
     * Find the first Label that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindFirstArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LabelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LabelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Label'> extends True ? Prisma__LabelClient<LabelGetPayload<T>> : Prisma__LabelClient<LabelGetPayload<T> | null, null>

    /**
     * Find the first Label that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindFirstOrThrowArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LabelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LabelFindFirstOrThrowArgs>
    ): Prisma__LabelClient<LabelGetPayload<T>>

    /**
     * Find zero or more Labels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labels
     * const labels = await prisma.label.findMany()
     * 
     * // Get first 10 Labels
     * const labels = await prisma.label.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labelWithIdOnly = await prisma.label.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LabelFindManyArgs>(
      args?: SelectSubset<T, LabelFindManyArgs>
    ): Prisma.PrismaPromise<Array<LabelGetPayload<T>>>

    /**
     * Create a Label.
     * @param {LabelCreateArgs} args - Arguments to create a Label.
     * @example
     * // Create one Label
     * const Label = await prisma.label.create({
     *   data: {
     *     // ... data to create a Label
     *   }
     * })
     * 
    **/
    create<T extends LabelCreateArgs>(
      args: SelectSubset<T, LabelCreateArgs>
    ): Prisma__LabelClient<LabelGetPayload<T>>

    /**
     * Create many Labels.
     *     @param {LabelCreateManyArgs} args - Arguments to create many Labels.
     *     @example
     *     // Create many Labels
     *     const label = await prisma.label.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LabelCreateManyArgs>(
      args?: SelectSubset<T, LabelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Label.
     * @param {LabelDeleteArgs} args - Arguments to delete one Label.
     * @example
     * // Delete one Label
     * const Label = await prisma.label.delete({
     *   where: {
     *     // ... filter to delete one Label
     *   }
     * })
     * 
    **/
    delete<T extends LabelDeleteArgs>(
      args: SelectSubset<T, LabelDeleteArgs>
    ): Prisma__LabelClient<LabelGetPayload<T>>

    /**
     * Update one Label.
     * @param {LabelUpdateArgs} args - Arguments to update one Label.
     * @example
     * // Update one Label
     * const label = await prisma.label.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LabelUpdateArgs>(
      args: SelectSubset<T, LabelUpdateArgs>
    ): Prisma__LabelClient<LabelGetPayload<T>>

    /**
     * Delete zero or more Labels.
     * @param {LabelDeleteManyArgs} args - Arguments to filter Labels to delete.
     * @example
     * // Delete a few Labels
     * const { count } = await prisma.label.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LabelDeleteManyArgs>(
      args?: SelectSubset<T, LabelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labels
     * const label = await prisma.label.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LabelUpdateManyArgs>(
      args: SelectSubset<T, LabelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Label.
     * @param {LabelUpsertArgs} args - Arguments to update or create a Label.
     * @example
     * // Update or create a Label
     * const label = await prisma.label.upsert({
     *   create: {
     *     // ... data to create a Label
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Label we want to update
     *   }
     * })
    **/
    upsert<T extends LabelUpsertArgs>(
      args: SelectSubset<T, LabelUpsertArgs>
    ): Prisma__LabelClient<LabelGetPayload<T>>

    /**
     * Count the number of Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelCountArgs} args - Arguments to filter Labels to count.
     * @example
     * // Count the number of Labels
     * const count = await prisma.label.count({
     *   where: {
     *     // ... the filter for the Labels we want to count
     *   }
     * })
    **/
    count<T extends LabelCountArgs>(
      args?: Subset<T, LabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Label.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LabelAggregateArgs>(args: Subset<T, LabelAggregateArgs>): Prisma.PrismaPromise<GetLabelAggregateType<T>>

    /**
     * Group by Label.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabelGroupByArgs['orderBy'] }
        : { orderBy?: LabelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Label.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LabelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Track<T extends Label$TrackArgs= {}>(args?: Subset<T, Label$TrackArgs>): Prisma.PrismaPromise<Array<TrackGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Label base type for findUnique actions
   */
  export type LabelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * Filter, which Label to fetch.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label findUnique
   */
  export interface LabelFindUniqueArgs extends LabelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Label findUniqueOrThrow
   */
  export type LabelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * Filter, which Label to fetch.
     */
    where: LabelWhereUniqueInput
  }


  /**
   * Label base type for findFirst actions
   */
  export type LabelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * Filter, which Label to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: Enumerable<LabelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: Enumerable<LabelScalarFieldEnum>
  }

  /**
   * Label findFirst
   */
  export interface LabelFindFirstArgs extends LabelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Label findFirstOrThrow
   */
  export type LabelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * Filter, which Label to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: Enumerable<LabelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: Enumerable<LabelScalarFieldEnum>
  }


  /**
   * Label findMany
   */
  export type LabelFindManyArgs = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * Filter, which Labels to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: Enumerable<LabelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    distinct?: Enumerable<LabelScalarFieldEnum>
  }


  /**
   * Label create
   */
  export type LabelCreateArgs = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * The data needed to create a Label.
     */
    data: XOR<LabelCreateInput, LabelUncheckedCreateInput>
  }


  /**
   * Label createMany
   */
  export type LabelCreateManyArgs = {
    /**
     * The data used to create many Labels.
     */
    data: Enumerable<LabelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Label update
   */
  export type LabelUpdateArgs = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * The data needed to update a Label.
     */
    data: XOR<LabelUpdateInput, LabelUncheckedUpdateInput>
    /**
     * Choose, which Label to update.
     */
    where: LabelWhereUniqueInput
  }


  /**
   * Label updateMany
   */
  export type LabelUpdateManyArgs = {
    /**
     * The data used to update Labels.
     */
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyInput>
    /**
     * Filter which Labels to update
     */
    where?: LabelWhereInput
  }


  /**
   * Label upsert
   */
  export type LabelUpsertArgs = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * The filter to search for the Label to update in case it exists.
     */
    where: LabelWhereUniqueInput
    /**
     * In case the Label found by the `where` argument doesn't exist, create a new Label with this data.
     */
    create: XOR<LabelCreateInput, LabelUncheckedCreateInput>
    /**
     * In case the Label was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabelUpdateInput, LabelUncheckedUpdateInput>
  }


  /**
   * Label delete
   */
  export type LabelDeleteArgs = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
    /**
     * Filter which Label to delete.
     */
    where: LabelWhereUniqueInput
  }


  /**
   * Label deleteMany
   */
  export type LabelDeleteManyArgs = {
    /**
     * Filter which Labels to delete
     */
    where?: LabelWhereInput
  }


  /**
   * Label.Track
   */
  export type Label$TrackArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    where?: TrackWhereInput
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackScalarFieldEnum>
  }


  /**
   * Label without action
   */
  export type LabelArgs = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LabelInclude | null
  }



  /**
   * Model Genre
   */


  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
    beatportGenreId: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    beatportGenreId: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    beatportGenreId: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    beatportGenreId?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    beatportGenreId?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    beatportGenreId?: true
    _all?: true
  }

  export type GenreAggregateArgs = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs = {
    where?: GenreWhereInput
    orderBy?: Enumerable<GenreOrderByWithAggregationInput>
    by: GenreScalarFieldEnum[]
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }


  export type GenreGroupByOutputType = {
    id: number
    name: string
    beatportGenreId: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect = {
    id?: boolean
    name?: boolean
    beatportGenreId?: boolean
    Track?: boolean | Genre$TrackArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }


  export type GenreInclude = {
    Track?: boolean | Genre$TrackArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }

  export type GenreGetPayload<S extends boolean | null | undefined | GenreArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Genre :
    S extends undefined ? never :
    S extends { include: any } & (GenreArgs | GenreFindManyArgs)
    ? Genre  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Track' ? Array < TrackGetPayload<S['include'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (GenreArgs | GenreFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Track' ? Array < TrackGetPayload<S['select'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Genre ? Genre[P] : never
  } 
      : Genre


  type GenreCountArgs = 
    Omit<GenreFindManyArgs, 'select' | 'include'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GenreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Genre'> extends True ? Prisma__GenreClient<GenreGetPayload<T>> : Prisma__GenreClient<GenreGetPayload<T> | null, null>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GenreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Genre'> extends True ? Prisma__GenreClient<GenreGetPayload<T>> : Prisma__GenreClient<GenreGetPayload<T> | null, null>

    /**
     * Find the first Genre that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs>(
      args?: SelectSubset<T, GenreFindManyArgs>
    ): Prisma.PrismaPromise<Array<GenreGetPayload<T>>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs>(
      args: SelectSubset<T, GenreCreateArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs>(
      args?: SelectSubset<T, GenreCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs>(
      args: SelectSubset<T, GenreDeleteArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs>(
      args: SelectSubset<T, GenreUpdateArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs>(
      args?: SelectSubset<T, GenreDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs>(
      args: SelectSubset<T, GenreUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs>(
      args: SelectSubset<T, GenreUpsertArgs>
    ): Prisma__GenreClient<GenreGetPayload<T>>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GenreClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Track<T extends Genre$TrackArgs= {}>(args?: Subset<T, Genre$TrackArgs>): Prisma.PrismaPromise<Array<TrackGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Genre base type for findUnique actions
   */
  export type GenreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUnique
   */
  export interface GenreFindUniqueArgs extends GenreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre base type for findFirst actions
   */
  export type GenreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: Enumerable<GenreScalarFieldEnum>
  }

  /**
   * Genre findFirst
   */
  export interface GenreFindFirstArgs extends GenreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs = {
    /**
     * The data used to create many Genres.
     */
    data: Enumerable<GenreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }


  /**
   * Genre.Track
   */
  export type Genre$TrackArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    where?: TrackWhereInput
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackScalarFieldEnum>
  }


  /**
   * Genre without action
   */
  export type GenreArgs = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude | null
  }



  /**
   * Model Artist
   */


  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    name: string | null
    beatportArtistId: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    beatportArtistId: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    beatportArtistId: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    beatportArtistId?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    beatportArtistId?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    beatportArtistId?: true
    _all?: true
  }

  export type ArtistAggregateArgs = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs = {
    where?: ArtistWhereInput
    orderBy?: Enumerable<ArtistOrderByWithAggregationInput>
    by: ArtistScalarFieldEnum[]
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }


  export type ArtistGroupByOutputType = {
    id: number
    name: string
    beatportArtistId: string
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect = {
    id?: boolean
    name?: boolean
    beatportArtistId?: boolean
    Track?: boolean | Artist$TrackArgs
    _count?: boolean | ArtistCountOutputTypeArgs
  }


  export type ArtistInclude = {
    Track?: boolean | Artist$TrackArgs
    _count?: boolean | ArtistCountOutputTypeArgs
  }

  export type ArtistGetPayload<S extends boolean | null | undefined | ArtistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Artist :
    S extends undefined ? never :
    S extends { include: any } & (ArtistArgs | ArtistFindManyArgs)
    ? Artist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Track' ? Array < TrackGetPayload<S['include'][P]>>  :
        P extends '_count' ? ArtistCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ArtistArgs | ArtistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Track' ? Array < TrackGetPayload<S['select'][P]>>  :
        P extends '_count' ? ArtistCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Artist ? Artist[P] : never
  } 
      : Artist


  type ArtistCountArgs = 
    Omit<ArtistFindManyArgs, 'select' | 'include'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArtistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Artist'> extends True ? Prisma__ArtistClient<ArtistGetPayload<T>> : Prisma__ArtistClient<ArtistGetPayload<T> | null, null>

    /**
     * Find one Artist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ArtistFindUniqueOrThrowArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArtistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Artist'> extends True ? Prisma__ArtistClient<ArtistGetPayload<T>> : Prisma__ArtistClient<ArtistGetPayload<T> | null, null>

    /**
     * Find the first Artist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArtistFindFirstOrThrowArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistFindManyArgs>(
      args?: SelectSubset<T, ArtistFindManyArgs>
    ): Prisma.PrismaPromise<Array<ArtistGetPayload<T>>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
    **/
    create<T extends ArtistCreateArgs>(
      args: SelectSubset<T, ArtistCreateArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Create many Artists.
     *     @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artist = await prisma.artist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistCreateManyArgs>(
      args?: SelectSubset<T, ArtistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
    **/
    delete<T extends ArtistDeleteArgs>(
      args: SelectSubset<T, ArtistDeleteArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistUpdateArgs>(
      args: SelectSubset<T, ArtistUpdateArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistDeleteManyArgs>(
      args?: SelectSubset<T, ArtistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistUpdateManyArgs>(
      args: SelectSubset<T, ArtistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistUpsertArgs>(
      args: SelectSubset<T, ArtistUpsertArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArtistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Track<T extends Artist$TrackArgs= {}>(args?: Subset<T, Artist$TrackArgs>): Prisma.PrismaPromise<Array<TrackGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Artist base type for findUnique actions
   */
  export type ArtistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUnique
   */
  export interface ArtistFindUniqueArgs extends ArtistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist base type for findFirst actions
   */
  export type ArtistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: Enumerable<ArtistScalarFieldEnum>
  }

  /**
   * Artist findFirst
   */
  export interface ArtistFindFirstArgs extends ArtistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: Enumerable<ArtistScalarFieldEnum>
  }


  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: Enumerable<ArtistScalarFieldEnum>
  }


  /**
   * Artist create
   */
  export type ArtistCreateArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }


  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs = {
    /**
     * The data used to create many Artists.
     */
    data: Enumerable<ArtistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Artist update
   */
  export type ArtistUpdateArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }


  /**
   * Artist delete
   */
  export type ArtistDeleteArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist.Track
   */
  export type Artist$TrackArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    where?: TrackWhereInput
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackScalarFieldEnum>
  }


  /**
   * Artist without action
   */
  export type ArtistArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    beatportArtistId: 'beatportArtistId'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    beatportGenreId: 'beatportGenreId'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const LabelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    beatportLabelId: 'beatportLabelId'
  };

  export type LabelScalarFieldEnum = (typeof LabelScalarFieldEnum)[keyof typeof LabelScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TrackScalarFieldEnum: {
    id: 'id',
    beatportTrackId: 'beatportTrackId',
    title: 'title',
    key: 'key',
    labelId: 'labelId',
    genreId: 'genreId',
    previewSong: 'previewSong',
    length: 'length',
    bpm: 'bpm',
    released: 'released',
    artwork: 'artwork'
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type TrackWhereInput = {
    AND?: Enumerable<TrackWhereInput>
    OR?: Enumerable<TrackWhereInput>
    NOT?: Enumerable<TrackWhereInput>
    id?: IntFilter | number
    beatportTrackId?: StringFilter | string
    title?: StringFilter | string
    key?: StringNullableFilter | string | null
    labelId?: IntNullableFilter | number | null
    genreId?: IntNullableFilter | number | null
    previewSong?: StringNullableFilter | string | null
    length?: StringNullableFilter | string | null
    bpm?: IntNullableFilter | number | null
    released?: StringNullableFilter | string | null
    artwork?: StringNullableFilter | string | null
    label?: XOR<LabelRelationFilter, LabelWhereInput> | null
    genre?: XOR<GenreRelationFilter, GenreWhereInput> | null
    artists?: ArtistListRelationFilter
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    beatportTrackId?: SortOrder
    title?: SortOrder
    key?: SortOrder
    labelId?: SortOrder
    genreId?: SortOrder
    previewSong?: SortOrder
    length?: SortOrder
    bpm?: SortOrder
    released?: SortOrder
    artwork?: SortOrder
    label?: LabelOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
    artists?: ArtistOrderByRelationAggregateInput
  }

  export type TrackWhereUniqueInput = {
    id?: number
    beatportTrackId?: string
  }

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    beatportTrackId?: SortOrder
    title?: SortOrder
    key?: SortOrder
    labelId?: SortOrder
    genreId?: SortOrder
    previewSong?: SortOrder
    length?: SortOrder
    bpm?: SortOrder
    released?: SortOrder
    artwork?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TrackScalarWhereWithAggregatesInput>
    OR?: Enumerable<TrackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TrackScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    beatportTrackId?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    key?: StringNullableWithAggregatesFilter | string | null
    labelId?: IntNullableWithAggregatesFilter | number | null
    genreId?: IntNullableWithAggregatesFilter | number | null
    previewSong?: StringNullableWithAggregatesFilter | string | null
    length?: StringNullableWithAggregatesFilter | string | null
    bpm?: IntNullableWithAggregatesFilter | number | null
    released?: StringNullableWithAggregatesFilter | string | null
    artwork?: StringNullableWithAggregatesFilter | string | null
  }

  export type LabelWhereInput = {
    AND?: Enumerable<LabelWhereInput>
    OR?: Enumerable<LabelWhereInput>
    NOT?: Enumerable<LabelWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    beatportLabelId?: StringFilter | string
    Track?: TrackListRelationFilter
  }

  export type LabelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    beatportLabelId?: SortOrder
    Track?: TrackOrderByRelationAggregateInput
  }

  export type LabelWhereUniqueInput = {
    id?: number
    beatportLabelId?: string
  }

  export type LabelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    beatportLabelId?: SortOrder
    _count?: LabelCountOrderByAggregateInput
    _avg?: LabelAvgOrderByAggregateInput
    _max?: LabelMaxOrderByAggregateInput
    _min?: LabelMinOrderByAggregateInput
    _sum?: LabelSumOrderByAggregateInput
  }

  export type LabelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LabelScalarWhereWithAggregatesInput>
    OR?: Enumerable<LabelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LabelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    beatportLabelId?: StringWithAggregatesFilter | string
  }

  export type GenreWhereInput = {
    AND?: Enumerable<GenreWhereInput>
    OR?: Enumerable<GenreWhereInput>
    NOT?: Enumerable<GenreWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    beatportGenreId?: StringFilter | string
    Track?: TrackListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    beatportGenreId?: SortOrder
    Track?: TrackOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = {
    id?: number
    beatportGenreId?: string
  }

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    beatportGenreId?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GenreScalarWhereWithAggregatesInput>
    OR?: Enumerable<GenreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GenreScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    beatportGenreId?: StringWithAggregatesFilter | string
  }

  export type ArtistWhereInput = {
    AND?: Enumerable<ArtistWhereInput>
    OR?: Enumerable<ArtistWhereInput>
    NOT?: Enumerable<ArtistWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    beatportArtistId?: StringFilter | string
    Track?: TrackListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    beatportArtistId?: SortOrder
    Track?: TrackOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = {
    id?: number
    beatportArtistId?: string
  }

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    beatportArtistId?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArtistScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArtistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArtistScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    beatportArtistId?: StringWithAggregatesFilter | string
  }

  export type TrackCreateInput = {
    beatportTrackId: string
    title: string
    key?: string | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
    label?: LabelCreateNestedOneWithoutTrackInput
    genre?: GenreCreateNestedOneWithoutTrackInput
    artists?: ArtistCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateInput = {
    id?: number
    beatportTrackId: string
    title: string
    key?: string | null
    labelId?: number | null
    genreId?: number | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
    artists?: ArtistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
    label?: LabelUpdateOneWithoutTrackNestedInput
    genre?: GenreUpdateOneWithoutTrackNestedInput
    artists?: ArtistUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    labelId?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: NullableIntFieldUpdateOperationsInput | number | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: ArtistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id?: number
    beatportTrackId: string
    title: string
    key?: string | null
    labelId?: number | null
    genreId?: number | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
  }

  export type TrackUpdateManyMutationInput = {
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    labelId?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: NullableIntFieldUpdateOperationsInput | number | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabelCreateInput = {
    name: string
    beatportLabelId: string
    Track?: TrackCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateInput = {
    id?: number
    name: string
    beatportLabelId: string
    Track?: TrackUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportLabelId?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportLabelId?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelCreateManyInput = {
    id?: number
    name: string
    beatportLabelId: string
  }

  export type LabelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportLabelId?: StringFieldUpdateOperationsInput | string
  }

  export type LabelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportLabelId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateInput = {
    name: string
    beatportGenreId: string
    Track?: TrackCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    beatportGenreId: string
    Track?: TrackUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportGenreId?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportGenreId?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
    beatportGenreId: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportGenreId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportGenreId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistCreateInput = {
    name: string
    beatportArtistId: string
    Track?: TrackCreateNestedManyWithoutArtistsInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    name: string
    beatportArtistId: string
    Track?: TrackUncheckedCreateNestedManyWithoutArtistsInput
  }

  export type ArtistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportArtistId?: StringFieldUpdateOperationsInput | string
    Track?: TrackUpdateManyWithoutArtistsNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportArtistId?: StringFieldUpdateOperationsInput | string
    Track?: TrackUncheckedUpdateManyWithoutArtistsNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: number
    name: string
    beatportArtistId: string
  }

  export type ArtistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportArtistId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportArtistId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type LabelRelationFilter = {
    is?: LabelWhereInput | null
    isNot?: LabelWhereInput | null
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput | null
    isNot?: GenreWhereInput | null
  }

  export type ArtistListRelationFilter = {
    every?: ArtistWhereInput
    some?: ArtistWhereInput
    none?: ArtistWhereInput
  }

  export type ArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    beatportTrackId?: SortOrder
    title?: SortOrder
    key?: SortOrder
    labelId?: SortOrder
    genreId?: SortOrder
    previewSong?: SortOrder
    length?: SortOrder
    bpm?: SortOrder
    released?: SortOrder
    artwork?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    id?: SortOrder
    labelId?: SortOrder
    genreId?: SortOrder
    bpm?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    beatportTrackId?: SortOrder
    title?: SortOrder
    key?: SortOrder
    labelId?: SortOrder
    genreId?: SortOrder
    previewSong?: SortOrder
    length?: SortOrder
    bpm?: SortOrder
    released?: SortOrder
    artwork?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    beatportTrackId?: SortOrder
    title?: SortOrder
    key?: SortOrder
    labelId?: SortOrder
    genreId?: SortOrder
    previewSong?: SortOrder
    length?: SortOrder
    bpm?: SortOrder
    released?: SortOrder
    artwork?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    id?: SortOrder
    labelId?: SortOrder
    genreId?: SortOrder
    bpm?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportLabelId?: SortOrder
  }

  export type LabelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LabelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportLabelId?: SortOrder
  }

  export type LabelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportLabelId?: SortOrder
  }

  export type LabelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportGenreId?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportGenreId?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportGenreId?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportArtistId?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportArtistId?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    beatportArtistId?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LabelCreateNestedOneWithoutTrackInput = {
    create?: XOR<LabelCreateWithoutTrackInput, LabelUncheckedCreateWithoutTrackInput>
    connectOrCreate?: LabelCreateOrConnectWithoutTrackInput
    connect?: LabelWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutTrackInput = {
    create?: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTrackInput
    connect?: GenreWhereUniqueInput
  }

  export type ArtistCreateNestedManyWithoutTrackInput = {
    create?: XOR<Enumerable<ArtistCreateWithoutTrackInput>, Enumerable<ArtistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<ArtistCreateOrConnectWithoutTrackInput>
    connect?: Enumerable<ArtistWhereUniqueInput>
  }

  export type ArtistUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<Enumerable<ArtistCreateWithoutTrackInput>, Enumerable<ArtistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<ArtistCreateOrConnectWithoutTrackInput>
    connect?: Enumerable<ArtistWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LabelUpdateOneWithoutTrackNestedInput = {
    create?: XOR<LabelCreateWithoutTrackInput, LabelUncheckedCreateWithoutTrackInput>
    connectOrCreate?: LabelCreateOrConnectWithoutTrackInput
    upsert?: LabelUpsertWithoutTrackInput
    disconnect?: boolean
    delete?: boolean
    connect?: LabelWhereUniqueInput
    update?: XOR<LabelUpdateWithoutTrackInput, LabelUncheckedUpdateWithoutTrackInput>
  }

  export type GenreUpdateOneWithoutTrackNestedInput = {
    create?: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTrackInput
    upsert?: GenreUpsertWithoutTrackInput
    disconnect?: boolean
    delete?: boolean
    connect?: GenreWhereUniqueInput
    update?: XOR<GenreUpdateWithoutTrackInput, GenreUncheckedUpdateWithoutTrackInput>
  }

  export type ArtistUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Enumerable<ArtistCreateWithoutTrackInput>, Enumerable<ArtistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<ArtistCreateOrConnectWithoutTrackInput>
    upsert?: Enumerable<ArtistUpsertWithWhereUniqueWithoutTrackInput>
    set?: Enumerable<ArtistWhereUniqueInput>
    disconnect?: Enumerable<ArtistWhereUniqueInput>
    delete?: Enumerable<ArtistWhereUniqueInput>
    connect?: Enumerable<ArtistWhereUniqueInput>
    update?: Enumerable<ArtistUpdateWithWhereUniqueWithoutTrackInput>
    updateMany?: Enumerable<ArtistUpdateManyWithWhereWithoutTrackInput>
    deleteMany?: Enumerable<ArtistScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArtistUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Enumerable<ArtistCreateWithoutTrackInput>, Enumerable<ArtistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<ArtistCreateOrConnectWithoutTrackInput>
    upsert?: Enumerable<ArtistUpsertWithWhereUniqueWithoutTrackInput>
    set?: Enumerable<ArtistWhereUniqueInput>
    disconnect?: Enumerable<ArtistWhereUniqueInput>
    delete?: Enumerable<ArtistWhereUniqueInput>
    connect?: Enumerable<ArtistWhereUniqueInput>
    update?: Enumerable<ArtistUpdateWithWhereUniqueWithoutTrackInput>
    updateMany?: Enumerable<ArtistUpdateManyWithWhereWithoutTrackInput>
    deleteMany?: Enumerable<ArtistScalarWhereInput>
  }

  export type TrackCreateNestedManyWithoutLabelInput = {
    create?: XOR<Enumerable<TrackCreateWithoutLabelInput>, Enumerable<TrackUncheckedCreateWithoutLabelInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutLabelInput>
    createMany?: TrackCreateManyLabelInputEnvelope
    connect?: Enumerable<TrackWhereUniqueInput>
  }

  export type TrackUncheckedCreateNestedManyWithoutLabelInput = {
    create?: XOR<Enumerable<TrackCreateWithoutLabelInput>, Enumerable<TrackUncheckedCreateWithoutLabelInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutLabelInput>
    createMany?: TrackCreateManyLabelInputEnvelope
    connect?: Enumerable<TrackWhereUniqueInput>
  }

  export type TrackUpdateManyWithoutLabelNestedInput = {
    create?: XOR<Enumerable<TrackCreateWithoutLabelInput>, Enumerable<TrackUncheckedCreateWithoutLabelInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutLabelInput>
    upsert?: Enumerable<TrackUpsertWithWhereUniqueWithoutLabelInput>
    createMany?: TrackCreateManyLabelInputEnvelope
    set?: Enumerable<TrackWhereUniqueInput>
    disconnect?: Enumerable<TrackWhereUniqueInput>
    delete?: Enumerable<TrackWhereUniqueInput>
    connect?: Enumerable<TrackWhereUniqueInput>
    update?: Enumerable<TrackUpdateWithWhereUniqueWithoutLabelInput>
    updateMany?: Enumerable<TrackUpdateManyWithWhereWithoutLabelInput>
    deleteMany?: Enumerable<TrackScalarWhereInput>
  }

  export type TrackUncheckedUpdateManyWithoutLabelNestedInput = {
    create?: XOR<Enumerable<TrackCreateWithoutLabelInput>, Enumerable<TrackUncheckedCreateWithoutLabelInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutLabelInput>
    upsert?: Enumerable<TrackUpsertWithWhereUniqueWithoutLabelInput>
    createMany?: TrackCreateManyLabelInputEnvelope
    set?: Enumerable<TrackWhereUniqueInput>
    disconnect?: Enumerable<TrackWhereUniqueInput>
    delete?: Enumerable<TrackWhereUniqueInput>
    connect?: Enumerable<TrackWhereUniqueInput>
    update?: Enumerable<TrackUpdateWithWhereUniqueWithoutLabelInput>
    updateMany?: Enumerable<TrackUpdateManyWithWhereWithoutLabelInput>
    deleteMany?: Enumerable<TrackScalarWhereInput>
  }

  export type TrackCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<TrackCreateWithoutGenreInput>, Enumerable<TrackUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutGenreInput>
    createMany?: TrackCreateManyGenreInputEnvelope
    connect?: Enumerable<TrackWhereUniqueInput>
  }

  export type TrackUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<TrackCreateWithoutGenreInput>, Enumerable<TrackUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutGenreInput>
    createMany?: TrackCreateManyGenreInputEnvelope
    connect?: Enumerable<TrackWhereUniqueInput>
  }

  export type TrackUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<TrackCreateWithoutGenreInput>, Enumerable<TrackUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<TrackUpsertWithWhereUniqueWithoutGenreInput>
    createMany?: TrackCreateManyGenreInputEnvelope
    set?: Enumerable<TrackWhereUniqueInput>
    disconnect?: Enumerable<TrackWhereUniqueInput>
    delete?: Enumerable<TrackWhereUniqueInput>
    connect?: Enumerable<TrackWhereUniqueInput>
    update?: Enumerable<TrackUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<TrackUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<TrackScalarWhereInput>
  }

  export type TrackUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<TrackCreateWithoutGenreInput>, Enumerable<TrackUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<TrackUpsertWithWhereUniqueWithoutGenreInput>
    createMany?: TrackCreateManyGenreInputEnvelope
    set?: Enumerable<TrackWhereUniqueInput>
    disconnect?: Enumerable<TrackWhereUniqueInput>
    delete?: Enumerable<TrackWhereUniqueInput>
    connect?: Enumerable<TrackWhereUniqueInput>
    update?: Enumerable<TrackUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<TrackUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<TrackScalarWhereInput>
  }

  export type TrackCreateNestedManyWithoutArtistsInput = {
    create?: XOR<Enumerable<TrackCreateWithoutArtistsInput>, Enumerable<TrackUncheckedCreateWithoutArtistsInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutArtistsInput>
    connect?: Enumerable<TrackWhereUniqueInput>
  }

  export type TrackUncheckedCreateNestedManyWithoutArtistsInput = {
    create?: XOR<Enumerable<TrackCreateWithoutArtistsInput>, Enumerable<TrackUncheckedCreateWithoutArtistsInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutArtistsInput>
    connect?: Enumerable<TrackWhereUniqueInput>
  }

  export type TrackUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<Enumerable<TrackCreateWithoutArtistsInput>, Enumerable<TrackUncheckedCreateWithoutArtistsInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutArtistsInput>
    upsert?: Enumerable<TrackUpsertWithWhereUniqueWithoutArtistsInput>
    set?: Enumerable<TrackWhereUniqueInput>
    disconnect?: Enumerable<TrackWhereUniqueInput>
    delete?: Enumerable<TrackWhereUniqueInput>
    connect?: Enumerable<TrackWhereUniqueInput>
    update?: Enumerable<TrackUpdateWithWhereUniqueWithoutArtistsInput>
    updateMany?: Enumerable<TrackUpdateManyWithWhereWithoutArtistsInput>
    deleteMany?: Enumerable<TrackScalarWhereInput>
  }

  export type TrackUncheckedUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<Enumerable<TrackCreateWithoutArtistsInput>, Enumerable<TrackUncheckedCreateWithoutArtistsInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutArtistsInput>
    upsert?: Enumerable<TrackUpsertWithWhereUniqueWithoutArtistsInput>
    set?: Enumerable<TrackWhereUniqueInput>
    disconnect?: Enumerable<TrackWhereUniqueInput>
    delete?: Enumerable<TrackWhereUniqueInput>
    connect?: Enumerable<TrackWhereUniqueInput>
    update?: Enumerable<TrackUpdateWithWhereUniqueWithoutArtistsInput>
    updateMany?: Enumerable<TrackUpdateManyWithWhereWithoutArtistsInput>
    deleteMany?: Enumerable<TrackScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type LabelCreateWithoutTrackInput = {
    name: string
    beatportLabelId: string
  }

  export type LabelUncheckedCreateWithoutTrackInput = {
    id?: number
    name: string
    beatportLabelId: string
  }

  export type LabelCreateOrConnectWithoutTrackInput = {
    where: LabelWhereUniqueInput
    create: XOR<LabelCreateWithoutTrackInput, LabelUncheckedCreateWithoutTrackInput>
  }

  export type GenreCreateWithoutTrackInput = {
    name: string
    beatportGenreId: string
  }

  export type GenreUncheckedCreateWithoutTrackInput = {
    id?: number
    name: string
    beatportGenreId: string
  }

  export type GenreCreateOrConnectWithoutTrackInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
  }

  export type ArtistCreateWithoutTrackInput = {
    name: string
    beatportArtistId: string
  }

  export type ArtistUncheckedCreateWithoutTrackInput = {
    id?: number
    name: string
    beatportArtistId: string
  }

  export type ArtistCreateOrConnectWithoutTrackInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutTrackInput, ArtistUncheckedCreateWithoutTrackInput>
  }

  export type LabelUpsertWithoutTrackInput = {
    update: XOR<LabelUpdateWithoutTrackInput, LabelUncheckedUpdateWithoutTrackInput>
    create: XOR<LabelCreateWithoutTrackInput, LabelUncheckedCreateWithoutTrackInput>
  }

  export type LabelUpdateWithoutTrackInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportLabelId?: StringFieldUpdateOperationsInput | string
  }

  export type LabelUncheckedUpdateWithoutTrackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportLabelId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUpsertWithoutTrackInput = {
    update: XOR<GenreUpdateWithoutTrackInput, GenreUncheckedUpdateWithoutTrackInput>
    create: XOR<GenreCreateWithoutTrackInput, GenreUncheckedCreateWithoutTrackInput>
  }

  export type GenreUpdateWithoutTrackInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportGenreId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutTrackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportGenreId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUpsertWithWhereUniqueWithoutTrackInput = {
    where: ArtistWhereUniqueInput
    update: XOR<ArtistUpdateWithoutTrackInput, ArtistUncheckedUpdateWithoutTrackInput>
    create: XOR<ArtistCreateWithoutTrackInput, ArtistUncheckedCreateWithoutTrackInput>
  }

  export type ArtistUpdateWithWhereUniqueWithoutTrackInput = {
    where: ArtistWhereUniqueInput
    data: XOR<ArtistUpdateWithoutTrackInput, ArtistUncheckedUpdateWithoutTrackInput>
  }

  export type ArtistUpdateManyWithWhereWithoutTrackInput = {
    where: ArtistScalarWhereInput
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyWithoutArtistsInput>
  }

  export type ArtistScalarWhereInput = {
    AND?: Enumerable<ArtistScalarWhereInput>
    OR?: Enumerable<ArtistScalarWhereInput>
    NOT?: Enumerable<ArtistScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    beatportArtistId?: StringFilter | string
  }

  export type TrackCreateWithoutLabelInput = {
    beatportTrackId: string
    title: string
    key?: string | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
    genre?: GenreCreateNestedOneWithoutTrackInput
    artists?: ArtistCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutLabelInput = {
    id?: number
    beatportTrackId: string
    title: string
    key?: string | null
    genreId?: number | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
    artists?: ArtistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutLabelInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutLabelInput, TrackUncheckedCreateWithoutLabelInput>
  }

  export type TrackCreateManyLabelInputEnvelope = {
    data: Enumerable<TrackCreateManyLabelInput>
    skipDuplicates?: boolean
  }

  export type TrackUpsertWithWhereUniqueWithoutLabelInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutLabelInput, TrackUncheckedUpdateWithoutLabelInput>
    create: XOR<TrackCreateWithoutLabelInput, TrackUncheckedCreateWithoutLabelInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutLabelInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutLabelInput, TrackUncheckedUpdateWithoutLabelInput>
  }

  export type TrackUpdateManyWithWhereWithoutLabelInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutTrackInput>
  }

  export type TrackScalarWhereInput = {
    AND?: Enumerable<TrackScalarWhereInput>
    OR?: Enumerable<TrackScalarWhereInput>
    NOT?: Enumerable<TrackScalarWhereInput>
    id?: IntFilter | number
    beatportTrackId?: StringFilter | string
    title?: StringFilter | string
    key?: StringNullableFilter | string | null
    labelId?: IntNullableFilter | number | null
    genreId?: IntNullableFilter | number | null
    previewSong?: StringNullableFilter | string | null
    length?: StringNullableFilter | string | null
    bpm?: IntNullableFilter | number | null
    released?: StringNullableFilter | string | null
    artwork?: StringNullableFilter | string | null
  }

  export type TrackCreateWithoutGenreInput = {
    beatportTrackId: string
    title: string
    key?: string | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
    label?: LabelCreateNestedOneWithoutTrackInput
    artists?: ArtistCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutGenreInput = {
    id?: number
    beatportTrackId: string
    title: string
    key?: string | null
    labelId?: number | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
    artists?: ArtistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutGenreInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput>
  }

  export type TrackCreateManyGenreInputEnvelope = {
    data: Enumerable<TrackCreateManyGenreInput>
    skipDuplicates?: boolean
  }

  export type TrackUpsertWithWhereUniqueWithoutGenreInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutGenreInput, TrackUncheckedUpdateWithoutGenreInput>
    create: XOR<TrackCreateWithoutGenreInput, TrackUncheckedCreateWithoutGenreInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutGenreInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutGenreInput, TrackUncheckedUpdateWithoutGenreInput>
  }

  export type TrackUpdateManyWithWhereWithoutGenreInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutTrackInput>
  }

  export type TrackCreateWithoutArtistsInput = {
    beatportTrackId: string
    title: string
    key?: string | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
    label?: LabelCreateNestedOneWithoutTrackInput
    genre?: GenreCreateNestedOneWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutArtistsInput = {
    id?: number
    beatportTrackId: string
    title: string
    key?: string | null
    labelId?: number | null
    genreId?: number | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
  }

  export type TrackCreateOrConnectWithoutArtistsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutArtistsInput, TrackUncheckedCreateWithoutArtistsInput>
  }

  export type TrackUpsertWithWhereUniqueWithoutArtistsInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutArtistsInput, TrackUncheckedUpdateWithoutArtistsInput>
    create: XOR<TrackCreateWithoutArtistsInput, TrackUncheckedCreateWithoutArtistsInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutArtistsInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutArtistsInput, TrackUncheckedUpdateWithoutArtistsInput>
  }

  export type TrackUpdateManyWithWhereWithoutArtistsInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutTrackInput>
  }

  export type ArtistUpdateWithoutTrackInput = {
    name?: StringFieldUpdateOperationsInput | string
    beatportArtistId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateWithoutTrackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportArtistId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateManyWithoutArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    beatportArtistId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackCreateManyLabelInput = {
    id?: number
    beatportTrackId: string
    title: string
    key?: string | null
    genreId?: number | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
  }

  export type TrackUpdateWithoutLabelInput = {
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: GenreUpdateOneWithoutTrackNestedInput
    artists?: ArtistUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutLabelInput = {
    id?: IntFieldUpdateOperationsInput | number
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: NullableIntFieldUpdateOperationsInput | number | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: ArtistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutTrackInput = {
    id?: IntFieldUpdateOperationsInput | number
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    genreId?: NullableIntFieldUpdateOperationsInput | number | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackCreateManyGenreInput = {
    id?: number
    beatportTrackId: string
    title: string
    key?: string | null
    labelId?: number | null
    previewSong?: string | null
    length?: string | null
    bpm?: number | null
    released?: string | null
    artwork?: string | null
  }

  export type TrackUpdateWithoutGenreInput = {
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
    label?: LabelUpdateOneWithoutTrackNestedInput
    artists?: ArtistUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutGenreInput = {
    id?: IntFieldUpdateOperationsInput | number
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    labelId?: NullableIntFieldUpdateOperationsInput | number | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: ArtistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUpdateWithoutArtistsInput = {
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
    label?: LabelUpdateOneWithoutTrackNestedInput
    genre?: GenreUpdateOneWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    beatportTrackId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    labelId?: NullableIntFieldUpdateOperationsInput | number | null
    genreId?: NullableIntFieldUpdateOperationsInput | number | null
    previewSong?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableStringFieldUpdateOperationsInput | string | null
    bpm?: NullableIntFieldUpdateOperationsInput | number | null
    released?: NullableStringFieldUpdateOperationsInput | string | null
    artwork?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
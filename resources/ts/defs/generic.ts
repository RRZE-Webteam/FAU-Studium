/**
 * Generic type generates all possible path combinations from object definition.
 *
 * @link https://stackoverflow.com/a/58436959
 * @typeParam T Object definition.
 * @typeParam D Recursion depth. Good to use for complex object to prevent compiler performance overload.
 *
 * @example
 * ```
 * type MyObjectType = {
 *     prop1: any;
 *     prop2: {
 *         subProp1: any;
 *         subProp2: any;
 *     }
 * }
 *
 * type MyObjectTypePaths = Paths<MyObjectType>
 *     // 'prop1' | 'prop2' | 'prop2.subProp1' | 'prop2.subProp2'
 * ```
 */
export type Paths<T, D extends number = 10> = [D] extends [never]
    ? never
    : T extends object
    ? {
          [K in keyof T]-?: K extends string | number
              ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
              : never;
      }[keyof T]
    : '';

type Join<K, P> = K extends string | number
    ? P extends string | number
        ? `${K}${'' extends P ? '' : '.'}${P}`
        : never
    : never;

type Prev = [
    never,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    ...0[],
];

/**
 * Returns the type of the elements in an array.
 */
export type ArrayElement<ArrayType extends readonly unknown[]> =
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type ObjectValues<T> = T[keyof T];

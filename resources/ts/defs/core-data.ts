import { Post } from '@wordpress/core-data';
import { State } from '@wordpress/core-data/build-types/selectors';
import {
    CurriedSelectorsOf,
    DataRegistry,
    ReduxStoreConfig,
    StoreDescriptor,
} from '@wordpress/data/src/types';

import { WpTerm } from './term';

type Kind = 'postType' | 'taxonomy';

type Entity<K extends Kind> = K extends 'postType' ? Post : K extends 'taxonomy' ? WpTerm : never;

export type CoreDataSelectors = {
    getEntityRecords<K extends Kind>(
        state: State,
        kind: K,
        name: string,
        query?: Record<string, any>,
    ): Array<Entity<K>> | null;

    hasFinishedResolution(state: State, selectorName: string, args: Array<any>): boolean;
};

export type EditorStoreSelectors = {
    getCurrentPost(): Post | null;
};

export type MapSelect<Selectors> = (
    select: (
        store: string,
    ) => CurriedSelectorsOf<StoreDescriptor<ReduxStoreConfig<any, any, Selectors>>>,
    registry: DataRegistry,
) => any;

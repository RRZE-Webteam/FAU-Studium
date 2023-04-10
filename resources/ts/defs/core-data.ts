/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '@wordpress/core-data';
import { MediaType } from '@wordpress/core-data/build-types/entity-types/helpers';
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

    getMedia(state: State, mediaId: number): WpMedia;

    hasFinishedResolution(state: State, selectorName: string, args: Array<any>): boolean;
};

export type EditorStoreSelectors = {
    getCurrentPostId(): number;
    getCurrentPost(): Post | null;
    isSavingPost(): boolean;
    isAutosavingPost(): boolean;
};

export type MapSelect<Selectors> = (
    select: (
        store: string,
    ) => CurriedSelectorsOf<StoreDescriptor<ReduxStoreConfig<any, any, Selectors>>>,
    registry: DataRegistry,
) => any;

export interface WpMedia {
    id: number;
    media_type: MediaType;
    post: number;
    source_url: string;
    media_details: unknown;
}

export interface MediaImageSize {
    width: number;
    height: number;
    source_url: string;
    mime_type: string;
}

export interface WpMediaImage extends WpMedia {
    media_details: {
        sizes: Record<string, MediaImageSize>;
    };
}

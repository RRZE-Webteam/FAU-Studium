import { isArray, isEmpty } from 'lodash';
import { entityId } from 'util/idHelpers';
import serverData from 'util/serverData';

import { Post, store as coreStore } from '@wordpress/core-data';
import { withSelect } from '@wordpress/data';

import { MultiTermSelectorProps, TermSelectorProps } from '../defs';

const withDegreeProgramTerms = withSelect(
    (
        select,
        ownProps: TermSelectorProps | MultiTermSelectorProps,
    ): { entities: Array<Post<'view'>> } => {
        const { getEntityRecords } = select(coreStore.name);

        if (isEmpty(ownProps.value)) {
            return {
                entities: [],
            };
        }

        const ids = (
            (isArray(ownProps.value) ? ownProps.value : [ownProps.value]) as Array<string>
        ).map(entityId);

        const query = {
            ...{
                per_page: -1,
                orderby: 'include',
                context: 'view',
            },
            include: ids.join(','),
        };

        return {
            entities:
                getEntityRecords(
                    'taxonomy',
                    serverData().taxonomySlugs[ownProps.taxonomy],
                    query,
                ) ?? [],
        };
    },
);

export default withDegreeProgramTerms;

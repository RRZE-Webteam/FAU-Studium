import React from 'react';
import { useCombinationOfDegreeProgramEnabled } from 'hooks/useConditionalFields';

import { Flex, FlexBlock, Spinner } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import useDegreeProgramProperty from '../../hooks/useDegreeProgramProperty';
import RelatedDegreePrograms from './RelatedDegreePrograms';

export default function DegreeProgramCombinations(): JSX.Element | null {
    const enabled = useCombinationOfDegreeProgramEnabled();
    const [combinations, setCombinations] = useDegreeProgramProperty<Array<number>>('combinations');
    const [limitedCombinations, setLimitedCombinations] =
        useDegreeProgramProperty<Array<number>>('limited_combinations');

    if (!enabled) {
        return null;
    }

    if (combinations === undefined || limitedCombinations === undefined) {
        return (
            <Flex>
                <FlexBlock>
                    <Spinner />
                </FlexBlock>
            </Flex>
        );
    }

    return (
        <>
            <RelatedDegreePrograms
                relatedDegreeProgramIds={combinations}
                setRelatedDegreePrograms={setCombinations}
                label={_x('Combinations', 'backoffice: field label', 'fau-degree-program')}
                messages={{
                    added: _x('Combination added', 'backoffice: field label', 'fau-degree-program'),
                    removed: _x(
                        'Combination removed',
                        'backoffice: field label',
                        'fau-degree-program',
                    ),
                    remove: _x(
                        'Remove combination',
                        'backoffice: field label',
                        'fau-degree-program',
                    ),
                    __experimentalInvalid: _x(
                        'Invalid combination',
                        'backoffice: field label',
                        'fau-degree-program',
                    ),
                }}
            />
            <RelatedDegreePrograms
                relatedDegreeProgramIds={limitedCombinations}
                setRelatedDegreePrograms={setLimitedCombinations}
                label={_x('Limited Combinations', 'backoffice: field label', 'fau-degree-program')}
                messages={{
                    added: _x(
                        'Limited combination added',
                        'backoffice: field label',
                        'fau-degree-program',
                    ),
                    removed: _x(
                        'Limited combination removed',
                        'backoffice: field label',
                        'fau-degree-program',
                    ),
                    remove: _x(
                        'Remove limited combination',
                        'backoffice: field label',
                        'fau-degree-program',
                    ),
                    __experimentalInvalid: _x(
                        'Invalid limited combination',
                        'backoffice: field label',
                        'fau-degree-program',
                    ),
                }}
            />
        </>
    );
}

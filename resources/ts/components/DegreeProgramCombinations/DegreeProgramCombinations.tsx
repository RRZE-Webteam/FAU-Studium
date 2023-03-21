import React from 'react';

import { Flex, FlexBlock, Spinner } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import FormFieldLabel from 'components/Layouts/FormFieldLabel';
import FormFieldWrapper from 'components/Layouts/FormFieldWrapper';
import { useCombinationOfDegreeProgramEnabled } from 'hooks/useConditionalFields';

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
            <FormFieldWrapper>
                <RelatedDegreePrograms
                    relatedDegreeProgramIds={combinations}
                    setRelatedDegreePrograms={setCombinations}
                    label={
                        <FormFieldLabel
                            label={_x(
                                'Combinations (optional)',
                                'backoffice: field label',
                                'fau-degree-program',
                            )}
                        />
                    }
                    messages={{
                        added: _x(
                            'Combination added',
                            'backoffice: field label',
                            'fau-degree-program',
                        ),
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
            </FormFieldWrapper>
            <FormFieldWrapper>
                <RelatedDegreePrograms
                    relatedDegreeProgramIds={limitedCombinations}
                    setRelatedDegreePrograms={setLimitedCombinations}
                    label={
                        <FormFieldLabel
                            label={_x(
                                'Limited Combinations (optional)',
                                'backoffice: field label',
                                'fau-degree-program',
                            )}
                        />
                    }
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
            </FormFieldWrapper>
        </>
    );
}

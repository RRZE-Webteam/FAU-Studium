/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import produce from 'immer';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { BaseControl, Button, Flex, Icon, TextControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

interface FieldItem {
    id: string;
    value: string;
}

interface Props {
    value: string[];
    onChange(val: string[]): void;
}

const transformRawValue = (value: string[]): FieldItem[] => {
    return value.map((str) => ({
        value: str,
        id: nanoid(),
    }));
};

const StyledFieldRow = styled(Flex)`
    align-items: stretch;
    margin-bottom: 5px;

    > .components-base-control {
        flex: 1;

        .components-base-control__field,
        .components-text-control__input {
            margin-bottom: 0;
            height: 100%;
        }
    }
`;

const TextControlCollection = ({ value, onChange }: Props) => {
    const [fields, setFields] = useState<FieldItem[]>(transformRawValue(value));

    useEffect(() => {
        // Filter-out empty values
        onChange(fields.filter((f) => !!f.value).map((f) => f.value));
    }, [fields]);

    return (
        <div>
            <BaseControl>
                {fields.map((field, index) => (
                    <StyledFieldRow key={field.id}>
                        <TextControl
                            value={field.value}
                            onChange={(text: string) => {
                                setFields(
                                    produce(fields, (draft) => {
                                        draft[index].value = text;
                                    }),
                                );
                            }}
                        />

                        <Button
                            isDestructive
                            onClick={() => {
                                setFields([...fields.filter((f) => f.id !== field.id)]);
                            }}
                        >
                            <Icon icon="no" />
                        </Button>
                    </StyledFieldRow>
                ))}
            </BaseControl>

            <Button
                onClick={() => {
                    setFields(
                        produce(fields, (draft) => {
                            draft.push({
                                id: nanoid(),
                                value: '',
                            });
                        }),
                    );
                }}
                variant="primary"
            >
                {_x('Add', 'backoffice: TextControlCollection', 'fau-degree-program')}
            </Button>
        </div>
    );
};

export default TextControlCollection;

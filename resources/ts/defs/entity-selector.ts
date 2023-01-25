import { FormTokenFieldProps } from '@wordpress/components/build-types/form-token-field/types';

export type EntitySelectorProps<Entity = object> = Readonly<{
    label: string;
    messages: FormTokenFieldProps['messages'];
    maxLength?: number;
    maxSuggestions: number;
    entities: Array<Entity>;
    onChange(value: Array<Entity>): void;
    entityToToken(entity: Entity): string;
    searchedEntities: Array<Entity>;
    setSearch(value: string): void;
}>;

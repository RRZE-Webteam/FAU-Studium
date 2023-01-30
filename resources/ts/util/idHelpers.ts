export function propertyId(
    type: 'term' | 'option' | 'post_meta' | 'post' | 'term_meta',
    id: number | string,
    subField = '',
) {
    const parts = [type, id];
    if (subField) {
        parts.push(subField);
    }
    return parts.join(':');
}

export function entityId(id: string): number {
    return parseInt(id.split(':')[1] ?? 0, 10);
}

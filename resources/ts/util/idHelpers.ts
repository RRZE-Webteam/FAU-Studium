export function propertyId(type: 'term' | 'option' | 'post_meta' | 'post', id: number | string) {
    return `${type}:${id}`;
}

export function entityId(id: string): number {
    return parseInt(id.split(':')[1] ?? 0, 10);
}

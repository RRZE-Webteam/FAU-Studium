export function propertyId(type: 'term' | 'option' | 'post_meta' | 'post', id: number | string) {
    return `${type}:${id}`;
}

export default {};

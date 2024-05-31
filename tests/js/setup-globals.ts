const globalAny:any = global;
globalAny.wp = {};

const wordPressPackages = ['components', 'data', 'core-data'];
wordPressPackages.forEach((lib) => {
    Object.defineProperty(globalAny.wp, lib, {
        get: () => require(`@wordpress/${lib}`),
    });
});

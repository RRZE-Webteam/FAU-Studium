/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

global.wp = {};

const wordPressPackages = ['components', 'data', 'core-data'];
wordPressPackages.forEach((lib) => {
    Object.defineProperty(global.wp, lib, {
        get: () => require(`@wordpress/${lib}`),
    });
});

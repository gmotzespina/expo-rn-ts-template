module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 75],
        'subject-case': [2, 'always', 'sentence-case'],
        'type-enum': [ // The type-case rule should be disable
            1, 'always',
            ['Feature', 'Fix', 'Docs', 'Refactor', 'DevOps']
        ],
        'type-case': [0, 'always', 'lower-case'],
        'scope-enum': [1, 'always', ['front', 'back', 'ios', 'android']],
        'body-max-line-length': [1, 'always', 150],
    }
};

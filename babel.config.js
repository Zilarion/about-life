module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { node: 'current' } } ],
        [ '@babel/preset-react', { 'runtime': 'automatic' } ],
        '@babel/preset-typescript',

    ],
    plugins: [
        '@babel/plugin-transform-modules-commonjs',
        [ '@babel/plugin-proposal-decorators', { 'legacy': true } ],
        [ '@babel/plugin-proposal-class-properties', { 'loose': false } ],
        '@emotion',
    ],
};

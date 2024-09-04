import { RollupOptions } from 'rollup'
import { fileURLToPath } from 'node:url';
import typescript from '@rollup/plugin-typescript';

const libConfig: RollupOptions = {
    plugins: [typescript({ tsconfig: 'tsconfig.build.json' })],
    input: fileURLToPath(new URL('index.ts', import.meta.url)),
    output: [
        {
            name: 'tokenizer.cjs.js',
            file: 'dist/tokenizer.cjs.js',
            format: 'cjs'
        },
        {
            name: 'tokenizer.amd.js',
            file: 'dist/tokenizer.amd.js',
            format: 'amd'
        },
        {
            name: 'tokenizer.umd.js',
            file: 'dist/tokenizer.umd.js',
            format: 'umd'
        },
        {
            name: 'tokenizer.js',
            file: 'dist/tokenizer.js',
            format: 'umd'
        }
    ]
};


export default [libConfig]

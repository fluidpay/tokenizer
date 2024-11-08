import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

const outputs = [
  { format: 'iife', file: 'tokenizer.var.js', name: 'Tokenizer' },
  { format: 'cjs', file: 'tokenizer.commonjs2.js' },
  { format: 'amd', file: 'tokenizer.amd.js' },
  { format: 'umd', file: 'tokenizer.umd.js', name: 'Tokenizer' },
  { format: 'umd', file: 'tokenizer.js', name: 'Tokenizer' },
];

export default defineConfig({
  input: './index.ts',  // Entry point
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),  // Handles .ts files
  ],
  output: outputs.map(({ format, file, name }) => ({
    dir: path.resolve(__dirname, '../../dist'),
    format,
    name,        // Library name for iife and umd
    file,
    exports: 'default',  // Equivalent to `libraryExport: 'default'` in webpack
  })),
  external: [],  // Specify dependencies to exclude if necessary
});

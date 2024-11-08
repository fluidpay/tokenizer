import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: './index.ts',
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  output: [
    {
      file: path.resolve(__dirname, '../../dist/tokenizer.var.js'),
      format: 'iife',
      name: 'Tokenizer',
      exports: 'default',
    },
    {
      file: path.resolve(__dirname, '../../dist/tokenizer.commonjs2.js'),
      format: 'cjs',
      exports: 'default',
    },
    {
      file: path.resolve(__dirname, '../../dist/tokenizer.amd.js'),
      format: 'amd',
      exports: 'default',
    },
    {
      file: path.resolve(__dirname, '../../dist/tokenizer.umd.js'),
      format: 'umd',
      name: 'Tokenizer',
      exports: 'default',
    },
    {
      file: path.resolve(__dirname, '../../dist/tokenizer.js'),
      format: 'umd',
      name: 'Tokenizer',
      exports: 'default',
    },
  ],
  external: [],
});

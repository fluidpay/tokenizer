import path from 'path';
import { fileURLToPath } from 'url';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  input: fileURLToPath(new URL('index.ts', import.meta.url)),
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

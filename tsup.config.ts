import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'nodes/OndoFinance/OndoFinance.node.ts',
    'credentials/OndoFinanceApi.credentials': 'credentials/OndoFinanceApi.credentials.ts'
  },
  format: ['cjs'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  target: 'es2019',
  external: ['n8n-workflow'],
});
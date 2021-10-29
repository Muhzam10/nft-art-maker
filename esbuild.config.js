// eslint-disable-next-line @typescript-eslint/no-var-requires
const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: [
      './src/index.ts',
      './src/create-preview.ts',
      './src/update-img-paths.ts',
    ],
    bundle: true,
    minify: true,
    outdir: 'build',
    platform: 'node',
    external: ['canvas', 'svgo', 'cosmiconfig'],
  })
  .catch(() => process.exit(1));

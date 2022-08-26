require('esbuild').build({
    entryPoints: ['app.js'],
    minify: false,
    target: 'es2020',
    treeShaking: true,
    splitting: true,
    bundle: true,
    format: 'esm',
    outdir: 'dist',
  }).catch(() => process.exit(1))
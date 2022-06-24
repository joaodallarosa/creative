const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-ca6bffde.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-dfb9a20f.mjs"
    ]
  },
  "_bootstrap-dfb9a20f.mjs": {
    "file": "bootstrap-dfb9a20f.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "pages/index.vue",
      "pages/pieces/[piece].vue"
    ],
    "css": [
      "assets/bootstrap.aa8f46cd.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-d386b9ec.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-dfb9a20f.mjs"
    ],
    "dynamicImports": [
      "src/pieces/index.ts"
    ]
  },
  "pages/pieces/[piece].vue": {
    "file": "_piece_-1cf0973e.mjs",
    "src": "pages/pieces/[piece].vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-dfb9a20f.mjs"
    ],
    "dynamicImports": [
      "src/pieces/index.ts"
    ],
    "css": [
      "assets/_piece_.f6c0fda2.css"
    ]
  },
  "src/pieces/index.ts": {
    "file": "index-4f45f20b.mjs",
    "src": "src/pieces/index.ts",
    "isDynamicEntry": true
  }
};

export { client_manifest as default };

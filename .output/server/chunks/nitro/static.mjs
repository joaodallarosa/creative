import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/_piece_-1cf0973e.mjs": {
    "type": "application/javascript",
    "etag": "\"307-gosGUqS+GIsWCR6lELL5Jyewscg\"",
    "mtime": "2022-06-24T23:36:21.766Z",
    "path": "../public/_nuxt/_piece_-1cf0973e.mjs"
  },
  "/_nuxt/bootstrap-dfb9a20f.mjs": {
    "type": "application/javascript",
    "etag": "\"19df3-OROFtR8GMtso3vaH8TnPFHGRFiY\"",
    "mtime": "2022-06-24T23:36:21.757Z",
    "path": "../public/_nuxt/bootstrap-dfb9a20f.mjs"
  },
  "/_nuxt/entry-ca6bffde.mjs": {
    "type": "application/javascript",
    "etag": "\"65-HMmZ583xn8n/AEWtv6QY7f1IgnA\"",
    "mtime": "2022-06-24T23:36:21.754Z",
    "path": "../public/_nuxt/entry-ca6bffde.mjs"
  },
  "/_nuxt/index-4f45f20b.mjs": {
    "type": "application/javascript",
    "etag": "\"ce1ac-scpM1Vq1Bg4WtGqoQxGmslz0pj4\"",
    "mtime": "2022-06-24T23:36:21.751Z",
    "path": "../public/_nuxt/index-4f45f20b.mjs"
  },
  "/_nuxt/index-d386b9ec.mjs": {
    "type": "application/javascript",
    "etag": "\"37f-HRhjqFHHPbwF1mkxszR26NEz30c\"",
    "mtime": "2022-06-24T23:36:21.748Z",
    "path": "../public/_nuxt/index-d386b9ec.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"474-lESEuru/S8s5AUg9ODCldABSrWs\"",
    "mtime": "2022-06-24T23:36:21.746Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/assets/_piece_.f6c0fda2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3c-fVNBi4EYl1o/x25vt0MXVEQAV+w\"",
    "mtime": "2022-06-24T23:36:21.764Z",
    "path": "../public/_nuxt/assets/_piece_.f6c0fda2.css"
  },
  "/_nuxt/assets/bootstrap.aa8f46cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bf8-V8Yl0HTVydCB8sq0ze6GRmeVgCQ\"",
    "mtime": "2022-06-24T23:36:21.761Z",
    "path": "../public/_nuxt/assets/bootstrap.aa8f46cd.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/joao.rosa/fun/p5-showcase/dist" + "/" + "1656113776";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };

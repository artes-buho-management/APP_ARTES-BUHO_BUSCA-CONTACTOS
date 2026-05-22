const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");

function createUtilitiesMock() {
  return {
    DigestAlgorithm: { MD5: "MD5" },
    computeDigest: (_algorithm, text) => {
      return Array.from(
        crypto.createHash("md5").update(String(text || ""), "utf8").digest()
      );
    },
    base64EncodeWebSafe: (bytes) => {
      return Buffer.from(Array.isArray(bytes) ? bytes : [])
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
    }
  };
}

function loadGasCode() {
  const codePath = path.resolve(__dirname, "..", "Code.js");
  const code = fs.readFileSync(codePath, "utf8");

  const context = {
    console,
    Utilities: createUtilitiesMock()
  };

  context.global = context;
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(code, context, { filename: "Code.js" });
  return context;
}

module.exports = {
  loadGasCode
};

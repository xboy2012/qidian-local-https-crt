const path = /* @__PURE__ */ require('path');

const dir = /* @__PURE__ */ path.dirname(__dirname);
const crt = /* @__PURE__ */ path.join(dir, 'local.qiye.qq.com.crt');
const csr = /* @__PURE__ */ path.join(dir, 'local.qiye.qq.com.csr');
const key = /* @__PURE__ */ path.join(dir, 'local.qiye.qq.com.key');

export = { crt, csr, key };

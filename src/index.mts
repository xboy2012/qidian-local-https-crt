import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const getDir = () => dirname(dirname(fileURLToPath(import.meta.url)));

const dir = /* @__PURE__ */ getDir();
export const crt = /* @__PURE__ */ join(dir, 'local.qiye.qq.com.crt');
export const csr = /* @__PURE__ */ join(dir, 'local.qiye.qq.com.csr');
export const key = /* @__PURE__ */ join(dir, 'local.qiye.qq.com.key');

export default { crt, csr, key };

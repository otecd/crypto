import crypto from 'crypto';
import base64 from 'base-64';
import cryptoJs from 'crypto-js';

export const checkSignature = (data, sig, key) => crypto.createVerify('SHA1')
  .update(data)
  .verify(key, sig, 'base64')
export const encode = v => base64.encode(v)
export const decode = v => base64.decode(v)
export const hashHmacWithBase64 = (algo = 'sha256', v, k) => crypto.createHmac(algo, k)
  .update(v)
  .digest()
  .toString('base64')
export const sha1 = v => crypto.createHash('sha1')
  .update(v, 'binary')
  .digest('hex')
export const md5 = v => crypto.createHash('md5')
  .update(typeof v === 'string' ? v : JSON.stringify(v))
  .digest('hex')
export const encrypt = (v, salt) => cryptoJs.AES.encrypt(typeof v === 'string' ? v : JSON.stringify(v), salt)
  .toString()
export const decrypt = (v, salt) => JSON.parse(cryptoJs.AES.decrypt(v, salt)
  .toString(cryptoJs.enc.Utf8))

export default {
  checkSignature,
  hashHmacWithBase64,
  encode,
  decode,
  sha1,
  md5,
  encrypt,
  decrypt
}

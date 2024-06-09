export function generateSecurePassword(length = 32) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

export function generateSecureSalt(length = 16) {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return array;
}

export async function generateKey(context) {
  const passwordKey = await crypto.subtle.importKey(
    "raw",
    context.encoder.encode(context.password),
    { name: "PBKDF2" },
    false,
    ["deriveKey", "deriveBits"]
  );

  const keyMaterial = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: context.salt,
      iterations: context.iterations,
      hash: "SHA-256",
    },
    passwordKey,
    context.keyLength + context.ivLength
  );

  context.keyBytes = keyMaterial.slice(0, context.keyLength / 8);
  context.ivBytes = keyMaterial.slice(
    context.keyLength / 8,
    context.keyLength / 8 + context.ivLength / 8
  );
}

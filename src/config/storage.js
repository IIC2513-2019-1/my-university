module.exports = {
  provider: 'amazon',
  keyId: process.env.STORAGE_KEY,
  key: process.env.STORAGE_SECRET,
  region: 'sfo2',
  endpoint: 'https://sfo2.digitaloceanspaces.com',
};

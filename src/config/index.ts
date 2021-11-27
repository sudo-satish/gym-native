const apiBaseUrl =
  process.env.REACT_APP_API_BASE_URL || 'https://giant-dog-31.loca.lt';

console.log({
  apiBaseUrl,
});

export default {
  api: {
    baseUrl: apiBaseUrl,
  },
};

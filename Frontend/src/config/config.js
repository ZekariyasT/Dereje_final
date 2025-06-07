const config = {
  apiUrl: 'https://api.derejeturaengineering.com'
};

export const HOST = process.env.VITE_HOST || config.apiUrl;

export default config; 
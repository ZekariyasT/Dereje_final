module.exports = {
  apps: [{
    name: 'dereje-tura-api',
    script: 'server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
}; 
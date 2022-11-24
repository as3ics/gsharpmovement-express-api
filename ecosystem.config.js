module.exports = {
  apps: [{
    name: 'weshallprevail-api',
    script: 'dist/weshallprevail-api/weshallprevail-api.js',
    env_production: {
      NODE_ENV: "production",
      DEBUG: true,
      ENVIRONMENT: "production",
      PRODUCTION: true,
      DEBUG_CACHE: false,
      APP_URL: "https://api.gsharpmovement.com",
      APP_NAME: "weshallprevail-api",
      APP_HOSTNAME: "127.0.0.1",
      APP_PORT: 3000,
      APP_VERSION: "0.0.1",
      APP_LOGGING: true,
      MONGODB_URL: "mongodb://dbuser:amarbuff@127.0.0.1:27017/?authSource=admin",
      MONGODB_DATABASE: "weshallprevail",
      APP_BASE_URL: "https://gsharpmovement.com",
      SECRET_KEY: "scott_bakula",
      MAX_FILESIZE_MB: 5
    },
    env_development: {
      NODE_ENV: "production",
      DEBUG: true,
      ENVIRONMENT: "production",
      PRODUCTION: true,
      DEBUG_CACHE: false,
      APP_URL: "https://api.gsharpmovement.com",
      APP_NAME: "weshallprevail-api",
      APP_HOSTNAME: "127.0.0.1",
      APP_PORT: 3000,
      APP_VERSION: "0.0.1",
      APP_LOGGING: true,
      MONGODB_URL: "mongodb://dbuser:amarbuff@18.219.65.101:27017/?authSource=admin",
      MONGODB_DATABASE: "weshallprevail",
      APP_BASE_URL: "https://gsharpmovement.com",
      SECRET_KEY: "scott_bakula",
      MAX_FILESIZE_MB: 5
    }
  }],

  // Deployment Configuration
  deploy: {
    production: {
      "key": "~/.as3ics/weshallprevail.pem",
      "user": "ubuntu",
      "host": ["ec2-18-219-65-101.us-east-2.compute.amazonaws.com"],
      "ref": "origin/master",
      "repo": "https://github.com/as3ics/weshallprevail-api.git",
      "path": "/home/ubuntu/server",
      "post-deploy": "[ -d dist ] && rm -r dist ; [ -d  node_modules ] && rm -r node_modules ; npm ci && npx tsc && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
};

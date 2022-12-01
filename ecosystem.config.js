/** @format */

module.exports = {
  apps: [
    {
      name: "api",
      script: "api.js",
      env_production: {
        NODE_ENV: "production",
        DEBUG: true,
        ENVIRONMENT: "production",
        PRODUCTION: true,
        APP_PORT: 3000,
        APP_LOGGING: true,
        MYSQL_HOST:
          "mysql://admin:amarbuff@gsharpmovement-db.cbfnbhfmnv5p.us-east-2.rds.amazonaws.com:3305/gsharpmovement",
      },
      env_development: {
        NODE_ENV: "development",
        DEBUG: true,
        ENVIRONMENT: "development",
        PRODUCTION: false,
        APP_PORT: 3000,
        APP_LOGGING: true,
        MYSQL_HOST:
          "mysql://admin:amarbuff@gsharpmovement-db.cbfnbhfmnv5p.us-east-2.rds.amazonaws.com:3305/gsharpmovement",
      },
    },
  ],

  // Deployment Configuration
  deploy: {
    production: {
      "key": "~/.as3ics/weshallprevail.pem",
      "user": "ubuntu",
      "host": ["ec2-18-116-12-48.us-east-2.compute.amazonaws.com"],
      "ref": "origin/master",
      "repo": "https://github.com/as3ics/weshallprevail-api.git",
      "path": "/home/ubuntu/",
      "pre-setup": "echo 'commands or local script path to be run on the host before the setup process starts' && npm i -g pm2",
      "post-setup": "echo 'commands or a script path to be run on the host after cloning the repo' && npm i",
      "pre-deploy": "pm2 startOrRestart ecosystem.json --env production",
      "post-deploy": "pm2 startOrRestart ecosystem.json --env production",
      "pre-deploy-local": "echo 'This is a local executed command'"
    }
  }
};

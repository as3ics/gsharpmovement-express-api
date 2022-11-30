/** @format */

module.exports = {
  apps: [
    {
      name: "weshallprevail-api",
      script: "dist/weshallprevail-api/weshallprevail-api.js",
      env_production: {
        NODE_ENV: "production",
        DEBUG: true,
        ENVIRONMENT: "production",
        PRODUCTION: true,
        APP_PORT: 3000,
        APP_LOGGING: true,
        MYSQL_HOST:
          "mysql://admin:amarbuff@gsharpmovement-db.cbfnbhfmnv5p.us-east-2.rds.amazonaws.com:3305/gsharpmovement",
        MONGODB_URL: " ",
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
        MONGODB_URL: " ",
      },
    },
  ],

  // Deployment Configuration
  deploy: {
    production: {
      "key": "~/.as3ics/weshallprevail.pem",
      "user": "ubuntu",
      "host": ["ec2-3-129-45-159.us-east-2.compute.amazonaws.com"],
      "ref": "origin/master",
      "repo": "https://github.com/as3ics/weshallprevail-api.git",
      "path": "/home/ubuntu/",
      "post-deploy": "npm i && npm run build && npm run start"
    }
  }
};

/** @format */

module.exports = {
  apps: [
    {
      name: "api",
      script: "dist/gsharpmovement-api/api.js",
      env_production: {
        NODE_ENV: "production",
        DEBUG: true,
        ENVIRONMENT: "production",
        PRODUCTION: true,
        APP_PORT: 3000,
        APP_LOGGING: true,
        MYSQL_HOST:
          "mysql://admin:amarbuff@as3ics-db.cbfnbhfmnv5p.us-east-2.rds.amazonaws.com:3306/gsharpmovement",
      },
      env_development: {
        NODE_ENV: "development",
        DEBUG: true,
        ENVIRONMENT: "development",
        PRODUCTION: false,
        APP_PORT: 3000,
        APP_LOGGING: true,
        MYSQL_HOST:
          "mysql://admin:amarbuff@as3ics-db.cbfnbhfmnv5p.us-east-2.rds.amazonaws.com:3306/gsharpmovement",
      },
    },
  ],

  // Deployment Configuration
  deploy: {
    production: {
      key: "~/.as3ics/gsharpmovement.pem",
      user: "ubuntu",
      host: ["ec2-18-116-12-48.us-east-2.compute.amazonaws.com"],
      ref: "origin/master",
      repo: "https://github.com/as3ics/gsharpmovement-api.git",
      path: "/home/ubuntu/",
      "post-deploy": "npm install",
    },
  },
};

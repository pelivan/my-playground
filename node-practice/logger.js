const { createLogger, transports, format } = require("winston");

const appLogger = createLogger({
  transports: [
    new transports.File({
      filename: "app.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = { appLogger };

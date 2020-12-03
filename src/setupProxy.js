const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://api.koreafilm.or.kr/openapi-data2/wisenut",
      changeOrigin: true
    })
  );
};

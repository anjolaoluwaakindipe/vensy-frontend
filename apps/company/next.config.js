//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

const {BACKEND_URL} = process.env

// proxy
const  { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACKEND_URL}/api/v1/:path*`,
        // middleware: createProxyMiddleware({
        //   target: BACKEND_URL,
        //   changeOrigin: true,
        // }),
      },
    ];
  },
};

module.exports = withNx(nextConfig);

const {
  withHydrationOverlay,
} = require("@builder.io/react-hydration-overlay/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dealerscloud.blob.core.windows.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.autotrademark.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        pathname: '**',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withHydrationOverlay({
  /**
   * Optional: `appRootSelector` is the selector for the root element of your app. By default, it is `#__next` which works
   * for Next.js apps with pages directory. If you are using the app directory, you should change this to `main`.
   */
  appRootSelector: "main",
})(nextConfig);

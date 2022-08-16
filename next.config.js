/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    config.module.rules.push({
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  params: {
                    attrs: "false",
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
      test: /\.svg$/,
    });

    return config;
  },
};

module.exports = nextConfig;

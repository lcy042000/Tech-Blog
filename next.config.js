/** @type {import('next').NextConfig} */
import esbuildLoader from 'esbuild-loader'
const { ESBuildMinifyPlugin } = esbuildLoader

const nextConfig = {
  swcMinify: true, // SWC를 사용하여 JavaScript를 트랜스파일하고 최소화합니다.
  webpack: (config, { dev, isServer }) => {
    // ESBuild 로더를 설정합니다.
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx', // 또는 'ts' 또는 'jsx' - 파일에 맞게 설정
          target: 'es2017', // 원하는 ECMAScript 버전
        },
      },
    })

    // 프로덕션 빌드에서 ESBuild를 이용해 압축합니다.
    if (!dev && !isServer) {
      config.optimization.minimizer = [
        new ESBuildMinifyPlugin({
          target: 'es2017', // ECMAScript 버전
          css: true, // CSS 압축을 활성화합니다.
        }),
      ]
    }

    return config
  },
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {},
}

export default nextConfig

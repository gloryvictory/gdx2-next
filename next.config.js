/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
}

module.exports = nextConfig
// next.config.js



// module.exports = {
//   nextConfig,
//   webpack(config, options) {
//     return config
//   }
// }

// const withYAML = require('next-yaml')
// module.exports = withYAML(module.exports)

import copy from 'rollup-copy-plugin'

const createConfig = (filename, bundleName) => {
  return {
    input: filename,
    output: {
      file: `dist/${bundleName}.js`,
      format: 'iife'
    }
  }
}

export default [
  createConfig('src/backgroundScript/picket.js', 'picket'),
  createConfig('src/popup/popup.js', 'popup'),
  createConfig('src/blockedPage/blocked.js', 'blocked'),
  Object.assign(createConfig('src/warnBanner/addBanner.js', 'banner'),
  {
    plugins: [
      copy({
        'manifest.json': 'dist/manifest.json',
        'src/popup/popup.html': 'dist/popup.html',
        'src/popup/popup.css': 'dist/popup.css',
        'src/blockedPage/blocked.html': 'dist/blocked.html',
        'src/blockedPage/blocked.css': 'dist/blocked.css',
        'src/shared.css': 'dist/shared.css'
      })
    ]
  })
]
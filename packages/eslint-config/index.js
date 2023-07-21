const { isPackageExists } = require('local-pkg')

const IS_VUE = isPackageExists('vue')
const IS_REACT = isPackageExists('react')

module.exports = {
  extends: [
    IS_VUE ? '@evankwolf/eslint-config-vue' : null,
    '@evankwolf/eslint-config-react'
  ],
}

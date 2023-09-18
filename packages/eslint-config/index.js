const { isPackageExists } = require('local-pkg')

const IS_VUE = isPackageExists('vue')
const IS_REACT = isPackageExists('react')
const IS_TS = isPackageExists('typescript')

if (!IS_TS)
  console.warn('[@evanryuu/eslint-config] TypeScript is not installed, fallback to JS only.')

const frameExtends = [
  IS_VUE ? '@evanryuu/eslint-config-vue' : null,
  IS_REACT ? '@evanryuu/eslint-config-react' : null,
]

const typeExtends = [
  IS_TS ? '@evanryuu/eslint-config-ts' : '@evanryuu/eslint-config-basic',
]

const finalExtends = frameExtends.some(ext => ext !== null)
? frameExtends.filter(ext => ext !== null)
: typeExtends

module.exports = {
  extends: [
    ...finalExtends
  ],
}

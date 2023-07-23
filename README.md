# @evanryuu/eslint-config

> This repo is based on @antfu/eslint-config. Learn more from [his repo](https://github.com/antfu/eslint-config).
>

## Usage

### Install

```bash
pnpm add -D eslint @evanryuu/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@evanryuu"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

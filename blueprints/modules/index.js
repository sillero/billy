const fs = require('fs')
const path = require('path')
const srcPath = 'src/modules'
const modules = fs.readdirSync(srcPath).map(module => module.replace('.js', ''))

module.exports = {
  locals() {
    return {
      modules
    }
  }
}
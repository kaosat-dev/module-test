const scadApi = require('@jscad/scad-api')
const {cube, sphere, cylinder} = scadApi.primitives3d
const {scale} = scadApi.transformations

function supacube (size = 10) {
  return scale(size, cube())
}

module.exports = {
  supacube
}

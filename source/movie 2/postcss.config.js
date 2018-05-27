module.exports = ctx => ({
  plugins: [
    require('postcss-import')(),
    require('postcss-font-awesome')(),
    require('precss')(),
    require('autoprefixer')({
      "browses": "> 5%",
    })
  ]
})

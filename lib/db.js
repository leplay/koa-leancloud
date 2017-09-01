const AV = require('./leancloud')
var query = new AV.Query('Test')

const obj = {
  getList: async function (ctx) {
    query.descending('createdAt')
    let list = await query.find().then(function (resp) {
      return resp
    }, function (error) {
      return error
    })

    await ctx.render('index', { list })
  }
}

module.exports = obj

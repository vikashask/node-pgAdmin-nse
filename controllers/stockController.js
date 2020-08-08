var knex = require("../config/knex");
const path = require('path');
var fs = require('fs');


module.exports.test = async (req, res) => {
  // var data = await knex("test2").select('name');
  // console.log("module.exports.test -> data", data)
  // return res.status(httpStatus.OK).json(data);

  fs.readFile('faomktstats20191011.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});

}

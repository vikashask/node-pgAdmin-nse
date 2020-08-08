var knex = require("../config/knex");
const path = require('path');
var fs = require('fs');


module.exports.test = async (req, res) => {
  // var data = await knex("test2").select('name');
  // console.log("module.exports.test -> data", data)
  // return res.status(httpStatus.OK).json(data);

  // fs.readFile('faomktstats20191011.txt', 'utf8', function (err, data) {
  //   if (err) throw err;
  //   console.log(data);
  // });

}

// Table column
// transcode
// timeStamp
// msgLen
//   secToken
//   instName
//   symbol
//   exp
//   strikePrice
//   optType
//   openInt
//   mktType
//   checkSum
//   filler
//   field14
module.exports.addStockData = async (req, res) => {
  const csvFilePath = path.join(__dirname, '../306.ind.CSV')
  const csv = require('csvtojson')
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      // console.log(jsonObj);
      let insert_sql = `INSERT INTO public.stock_data(
      "checkSum", exp, filler, "instName", "mktType", "msgLen", "openInt", "optType", "secToken", "strikePrice", symbol, "timeStamp", transcode, field14)
      VALUES `
      for (let index = 0; index < 5; index++) {
        const element = jsonObj[index];
        insert_sql = `(${element.Transcode}, ${element.TimeStamp}, ${element.MsgLen}, ${element.SecToken}, ${element.InstName}, ${element.Symbol}, 
        ${element.Exp}, ${element.StrikePrice}, ${element.OptType}, ${element.OpenInt}, ${element.MktType}, ${element.CheckSum}, ${element.Filler}, ${element.field14}),`

      }
      console.log("module.exports.addStockData -> element", insert_sql)

    })
}
var knex = require("../config/knex");
const path = require('path');
var fs = require('fs');
const httpStatus = require('../utils/httpStatus');

module.exports.test = async (req, res) => {
  var data = await knex("test2").select('name');
  console.log("module.exports.test -> data", data)
  return res.status(httpStatus.OK).json(data);

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
      let insert_sql = `INSERT INTO stock_nse(
        "Transcode", "TimeStamp", "MsgLen", "SecToken", "InstName", "Symbol", "Exp", "StrikePrice", "OptType", "OpenInt", "MktType", "CheckSum", "Filler")
      VALUES `;
      for (let index = 0; index < jsonObj.length; index++) {
        const element = jsonObj[index];
        // console.log("module.exports.addStockData -> element.Filler", element.Filler.length)
        console.log("module.exports.addStockData -> typeof element.InstName;", typeof element.InstName,element.InstName,JSON.stringify(element.InstName).replace('"', "'").replace('"', "'"));
        element.Transcode = element.Transcode?element.Transcode:'';
        element.TimeStamp = element.TimeStamp?element.TimeStamp:'';
        element.MsgLen =element.MsgLen ?element.MsgLen:'';
        element.SecToken=element.SecToken?element.SecToken:'';
        element.InstName=element.InstName?JSON.stringify(element.InstName).replace('"', "'").replace('"', "'"):'';
        element.Symbol=element.Symbol?JSON.stringify(element.Symbol).replace('"', "'").replace('"', "'"):'';
        element.Exp=element.Exp?JSON.stringify(element.Exp).replace('"', "'").replace('"', "'"):'';
        element.StrikePrice=element.StrikePrice?element.StrikePrice:'';
        element.OptType=element.OptType?JSON.stringify(element.OptType).replace('"', "'").replace('"', "'"):'';
        element.OpenInt=element.OpenInt?element.OpenInt:'';
        element.MktType=element.MktType?JSON.stringify(element.MktType).replace('"', "'").replace('"', "'"):'';
        element.CheckSum=element.CheckSum?element.CheckSum:'';
        element.Filler=element.Filler.length>1?JSON.stringify(element.Filler).replace('"', "'").replace('"', "'"):"''";
        insert_sql += `(${element.Transcode}, ${element.TimeStamp}, ${element.MsgLen}, ${element.SecToken}, ${element.InstName}, ${element.Symbol}, 
        ${element.Exp}, ${element.StrikePrice}, ${element.OptType}, ${element.OpenInt}, ${element.MktType}, ${element.CheckSum}, ${element.Filler})`
          // if(index ===50-1){
            if(index ===jsonObj.length-1){
            insert_sql +='  ';
          }else{
            insert_sql +=' , ';
          }
      }
    // var data = await knex.raw(insert_sql);
    knex.raw(insert_sql).then(function(resp) { 
      // console.log('resp ----------',resp);
      return res.json({
                response: 'insertion done'
              });
    });
    })
};
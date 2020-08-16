module.exports.currentDate = (isTime) => {
  try {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var min = today.getMinutes();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (isTime) {
      return `${yyyy}-${mm}-${dd}-${hour}-${min}`;
    } else {
      return `${yyyy}-${mm}-${dd}`;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports.otpExpireTime = (isTime) => {
  try {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var min = today.getMinutes() + 10;
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (isTime) {
      return `${yyyy}-${mm}-${dd}-${hour}-${min}`;
    } else {
      return `${yyyy}-${mm}-${dd}`;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

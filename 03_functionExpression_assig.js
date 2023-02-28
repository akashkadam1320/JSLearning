var check_leap_year = function (leap_year) {
  if (
    leap_year == null ||
    typeof leap_year != "number" ||
    leap_year == undefined ||
    isNaN(leap_year)

  ) {
    console.log(`${leap_year}: Is Not Leap Year,Please Enter Valid Year`);
  } else if (
    (leap_year % 4 == 0 && leap_year % 100 != 0) ||
    leap_year % 400 == 0
  ) {
    console.log(`${leap_year}: Is Leap Year`);
  } else {
    console.log(`${leap_year}: This is Not Leap Year`);
  }
};

var Year = check_leap_year(2020);
var Year = check_leap_year(1999);
var Year = check_leap_year(1600);
var Year = check_leap_year(2022);
var Year = check_leap_year(1945);
var Year = check_leap_year(null);
var Year = check_leap_year("Twenty Twenty");
var Year = check_leap_year(undefined);
var year = check_leap_year(NaN);
var year = check_leap_year(1750);

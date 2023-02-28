function dayCheck(dayNumber) {
  if (
    dayNumber <= 0 ||
    dayNumber > 7 ||
    dayNumber == null ||
    isNaN(dayNumber)
  ) {
    console.log("Invalid day number");
  }
  if (dayNumber == 1) {
    console.log("Monday");
  }

  if (dayNumber == 2) {
    console.log("Tuesday");
  }

  if (dayNumber == 3) {
    console.log("Wed");
  }

  if (dayNumber == 4) {
    console.log("thur");
  }

  if (dayNumber == 5) {
    console.log("Fri");
  }

  if (dayNumber == 6) {
    console.log("Sat");
  }

  if (dayNumber == 7) {
    console.log("Sunday");
  }
}
dayCheck(null);
dayCheck(0);
dayCheck(-3);
dayCheck(9);

dayCheck(3);
dayCheck(5);
dayCheck(7);

function weekDay(day) {
  switch (day) {
    case 1:
      console.log(`Day of the week is ${day}: Monday`);
      console.log("Monday is the start day of the week");
      break;
    case 2:
      console.log(`Day of the week is ${day}: Tuesday`);
      break;
    case 3:
      console.log(`Day of the week is ${day}: Wed`);
      break;
    case 4:
      console.log(`Day of the week is ${day}: Thursday`);
      break;
    case 5:
      console.log(`Day of the week is ${day}: Friday`);
      break;
    case 6:
      console.log(`Day of the week is ${day}: Saturday`);
      break;
    case 7:
      console.log(`Day of the week is ${day}: Sunday`);
      break;
    default:
      console.log(`Invalid day : ${day}`);
      break;
  }
  console.log(`End of Switch case for ${day}`);
}
weekDay(3); // 1 to 7,invalid;
weekDay(7);
weekDay(0);
weekDay(-2);
weekDay(100);
weekDay(null);
weekDay(undefined);

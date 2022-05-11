function createCheckDigit(membershipId) {
  // Write the code that goes here.
  let iterate = true;
  let myNumber = membershipId + "";
  let sum = 0;
  let IdNumber = 0;
  let iteration = 0;

  while (iterate) {
    iteration++;
    console.log("entering loop :", myNumber);

    for (let i = 0; i < myNumber.length; i++) {
      sum = sum + Number(myNumber[i]);
    }
    sum = sum + "";
    console.log("sum is now ", sum);
    if (sum.length < 2) {
      IdNumber = sum;
      iterate = false;
    } else {
      myNumber = sum;
      sum = 0;
      console.log(typeof myNumber);
    }
  }

  return IdNumber;
}

console.log("solution" + createCheckDigit("55555"));

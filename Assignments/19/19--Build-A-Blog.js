function hoursAgo(then){

  var timeThen = new Date(then).getTime();//Converts string date value
  var timeNow = new Date().getTime();//Converts string date value
  var hourDiff = timeNow - timeThen; //Calculates time in milliseconds
  var hDiff = hourDiff / 3600 / 1000; //Converts it into hours
  var printDate = {};//Creates dictionary

  printDate.hours = Math.floor(hDiff);

  return (printDate.hours + ' hours ago');
}

function print(){
   x = hoursAgo("Oct 26 2014 11:00:00");
   y = hoursAgo("Oct 23 2014 19:30:00");
   document.getElementById("time1").innerHTML = x;
   document.getElementById("time2").innerHTML = y;
}

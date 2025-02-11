/*Display Current Day and Time
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

const displayCurrentDayAndTime = () => {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const period = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  console.log(`Today is : ${day}`);
  console.log(`Current time is : ${hour} ${period} : ${minutes} : ${seconds}`);
};
displayCurrentDayAndTime();

//Get Current Date in Various Formats Write a JavaScript program to get the current date. Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const getCurrentDate = () => {
  const now = new Date();
  const date = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  console.log(`${month}-${date}-${year}`);
  console.log(`${month}/${date}/${year}`);
  console.log(`${date}-${month}-${year}`);
  console.log(`${date}/${month}/${year}`);
};
getCurrentDate();

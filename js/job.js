function jobform(job) {
  if (job.firstname.value == "") {
    alert("Please,provide your First Name");
    return false;
  }
  if (job.lastname.value == "") {
    alert("Please,provide your Last Name");
    return false;
  }
   if (job.email.value == "") {
    alert("Please,provide your Email.");
    return false;
  }
   if (job.bday.value == "") {
    alert("Please,provide your Birth Date");
    return false;
  }
   if (job.gender.value == "") {
    alert("You need to specify your gender");
    return false;
  }
  if (job.gender.value == "") {
    alert("Plese select your country");
    return false;
  }

}
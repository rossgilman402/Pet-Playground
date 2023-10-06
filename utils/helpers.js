module.exports = {
  calculateBday: (birthday) => {
    const birthdate = birthday.split("-");
    console.log(birthdate[1]);
    const today = new Date();
    console.log(birthdate[0]);

    console.log(today.getFullYear());
    const thisYear = today.getFullYear().toString();
    if (thisYear == birthdate[0]) {
      return "< 1 year old";
    } else {
      const age =
        today.getFullYear() -
        birthdate[0] -
        (today.getMonth() < birthdate[1] ||
          (today.getMonth() === birthdate[1] &&
            today.getDate() < birthdate[2]));
      return age + " years old";
    }
  },
};

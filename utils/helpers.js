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
        birthdate[2] -
        (today.getMonth() < birthdate[0] ||
          (today.getMonth() === birthdate[0] &&
            today.getDate() < birthdate[1]));
      return age + " years old";
    }
  },
};

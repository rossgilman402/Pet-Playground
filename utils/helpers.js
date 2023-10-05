module.exports = {
  calculateBday: (birthday) => {
    const birthdate = birthday.split("-");
    const today = new Date();
    if (today.getFullYear() - birthdate[0] === 0) {
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

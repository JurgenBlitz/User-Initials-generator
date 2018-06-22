getUserInitials = function (userName) {
  let result = '';

  if (userName) {
    const initials = userName.trim()
      .split(' ')
      .filter(elem => elem !== '');

    if (initials && initials.length > 0) {

      initials.map((item, index) => {
        if (item && index < 2) {
          result += item[0].toUpperCase();
        }
      });
    }
  }

  return result;
}
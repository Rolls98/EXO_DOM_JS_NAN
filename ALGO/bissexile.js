function bissexile(nb) {
  if (nb % 4 === 0 && nb % 100 != 0) {
    return true;
  } else return false;
}

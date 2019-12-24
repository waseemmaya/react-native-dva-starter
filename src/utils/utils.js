const delay = duration => new Promise(res => setTimeout(() => res(), duration));

const utils = {
  delay,
};

export default utils;

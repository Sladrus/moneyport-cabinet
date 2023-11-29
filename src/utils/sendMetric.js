export const sendMetric = (type = 'reachGoal', value) => {
  window.ym('92731458', type, value);
};

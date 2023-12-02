import { sendMetric } from './sendMetric';

export const openInNewTab = (url, type) => {
  sendMetric('reachGoal', type);
  window.open(url, '', 'noopener,noreferrer');
};

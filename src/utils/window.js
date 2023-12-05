import { sendMetric } from './sendMetric';

export const openInNewTab = (url, type) => {
  sendMetric('reachGoal', 'go_to_chat');
  sendMetric('reachGoal', type);
  window.open(url, '', 'noopener,noreferrer');
};

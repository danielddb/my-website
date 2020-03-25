import { GatsbyBrowser } from 'gatsby';

export const onServiceWorkerUpdateReady: GatsbyBrowser['onServiceWorkerUpdateReady'] = () => {
  window.location.reload();
};

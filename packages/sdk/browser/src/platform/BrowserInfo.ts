import { Info, PlatformData, SdkData } from '@launchdarkly/js-client-sdk-common';

import { name, version } from '../../package.json';

export default class BrowserInfo implements Info {
  platformData(): PlatformData {
    return {
      name: 'JS', // Name maintained from previous 3.x implementation.
    };
  }
  sdkData(): SdkData {
    return {
      name,
      version,
      userAgentBase: 'JSClient',
    };
  }
}

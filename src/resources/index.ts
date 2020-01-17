import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/test-table'),
    PLATFORM.moduleName('./value-converters/number')
  ]);
}

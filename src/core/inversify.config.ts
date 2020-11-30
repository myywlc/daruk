import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import { PartialOptions } from '../../types/daruk_options';
import Daruk from './daruk';

const darukContainer = new Container({
  skipBaseClassChecks: true
});

const {
  /** @internal */
  lazyInject
} = getDecorators(darukContainer);

const DarukServer = (options?: PartialOptions) => {
  const instance = new Daruk();
  instance._initOptions(options);
  darukContainer.bind<Daruk>('Daruk').toConstantValue(instance);
  return instance;
};

export { darukContainer, lazyInject, DarukServer };

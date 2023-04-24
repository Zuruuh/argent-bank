import { LocalStoragePersister } from './LocalStoragePersister';
import { PersisterInterface } from './PersisterInterface.d';

export function providerPersister(): PersisterInterface {
  return LocalStoragePersister;
}

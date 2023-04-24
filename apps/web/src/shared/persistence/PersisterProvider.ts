import { LocalStoragePersister } from './LocalStoragePersister';
import { PersisterInterface } from './PersisterInterface';

export function providerPersister(): PersisterInterface {
  return LocalStoragePersister;
}

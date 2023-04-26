import { LocalStoragePersister } from './LocalStoragePersister';
import { PersisterInterface } from './PersisterInterface.d';

export function providePersister(): PersisterInterface {
  return LocalStoragePersister;
}

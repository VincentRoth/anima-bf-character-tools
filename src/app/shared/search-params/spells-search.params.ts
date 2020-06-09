import { SpellType } from '../models';
import { SearchParams } from './search.params';

export interface SpellsSearchParams extends SearchParams {
  type: SpellType;
}

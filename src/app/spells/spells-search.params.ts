import { SpellType } from '../shared/models';
import { SearchParams } from '../shared/search.params';

export interface SpellsSearchParams extends SearchParams {
  type: SpellType;
}

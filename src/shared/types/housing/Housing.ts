import type { StringIntRange } from '@tjmora/ts-range-types';
import type { Equipment } from './Equipment';
import type { Host } from './Host';
import type { Tag } from './Tag';
import type { URL } from '~/shared/types/URL';

export interface Housing {
  id: string;
  title: string;
  cover: URL;
  pictures: URL[];
  description: string;
  host: Host;
  rating: StringIntRange<0, 5>;
  location: string;
  equipments: Equipment[];
  tags: Tag[];
}

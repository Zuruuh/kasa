import type { Equipment } from './Equipment';
import type { Host } from './Host';
import type { Tag } from './Tag';
import type { URL } from '~/shared/types/shared/URL';

export interface Housing {
  id: string;
  title: string;
  cover: URL;
  pictures: URL[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipements: Equipment[];
  tags: Tag[];
}

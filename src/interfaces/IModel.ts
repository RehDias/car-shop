import { IdRequired } from './IdRequired';

export interface IModel<T> {
  create(obj: T): Promise<T & IdRequired>,
  read(): Promise<T[]>,
  readOne(id: string): Promise<T | null>,
  update(id: string, obj: T): Promise<T | null>,
  delete(id: string): Promise<T | null>
}

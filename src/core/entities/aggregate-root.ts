import { Entity } from './entity'

export abstract class AggregateRoot<Props> extends Entity<Props> {
  // this is the root entity class of an aggregate that will be an entity that will extend this class
}

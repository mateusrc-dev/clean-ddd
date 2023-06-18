import { UniqueEntityID } from "./unique-entity-id"

export class Entity<Props> { // generic (a parameter of types) to receive props of entities
  private _id: UniqueEntityID // so no file can change this id directly
  protected props: Props // this property has reference to all fields of our entity - 'protected' can be accessed by every class that extends the Entity class and accessed by this Entity class
  get id() {
    return this._id
  }

  constructor(props: any, id?: string) {
    this.props = props
    this._id = new UniqueEntityID(id)
  }
}
import { Entity } from "../../core/entities/entity"

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> { // we let's inherit properties from this class
  get name() { // method get - for property to be access outside this entity
    return this.props.name
  }

  /* constructor(props: InstructorProps, id?: string) { // id is a field that is optional because we are not always going to create a new instructor - we pass the id when we want to refer to an existing instructor
    super(props, id)  // here is the constructor of class Entity
  } */ // this constructor is not needed because we are extending Entity which has an equal constructor
}
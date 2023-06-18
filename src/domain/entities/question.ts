import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string 
  slug: Slug
  createdAt: Date
  updatedAt?: Date 
}

export class Question extends Entity<QuestionProps> {
  static create(props: Optional<QuestionProps, 'createdAt'>, id?: UniqueEntityID) { // createdAt will be optional when creating a new question - but not database optional
    const question = new Question(
      {...props, createdAt: new Date()}, id // let's automate the creation of createdAt
    ) // we can call Question class because we extend Entity class

    return question
  }
}
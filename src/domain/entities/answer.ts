import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date 
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }

  static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueEntityID) { // createdAt will be optional when creating a new question - but not database optional
    const answer = new Answer(
      {...props, createdAt: new Date()}, id // let's automate the creation of createdAt
    ) // we can call Answer class because we extend Entity class

    return answer
  }
}
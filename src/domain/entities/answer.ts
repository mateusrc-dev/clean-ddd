import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get authorId() {
    return this.props.authorId
  }

  get questionId() {
    return this.props.questionId
  }

  get content() {
    return this.props.content
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get excerpt() {
    // we can create a property that doesn't exist in the class's typing
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  /* set content(content: string) {
    /* if (content.length > 2400) { // example of how we can create validation in set and get methods
      throw new Error('Invalid content length!')
    } */

  //  this.props.content = content
  // }

  static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    // createdAt will be optional when creating a new question - but not database optional
    const answer = new Answer(
      { ...props, createdAt: new Date() },
      id, // let's automate the creation of createdAt
    ) // we can call Answer class because we extend Entity class

    return answer
  }
}

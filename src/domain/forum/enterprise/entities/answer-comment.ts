import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import dayjs from 'dayjs'

export interface AnswerCommentProps {
  authorId: UniqueEntityID
  answerId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class AnswerComment extends Entity<AnswerCommentProps> {
  get authorId() {
    return this.props.authorId
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

  get isNew(): boolean {
    // we can create a property that doesn't exist in the class's typing
    return dayjs().diff(this.createdAt, 'days') <= 3
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  static create(
    props: Optional<AnswerCommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    // createdAt will be optional when creating a new question - but not database optional
    const answerComment = new AnswerComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id, // let's automate the creation of createdAt and slug
    ) // we can call Question class because we extend Entity class

    return answerComment
  }
}

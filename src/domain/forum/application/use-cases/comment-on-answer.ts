import { AnswersRepository } from '../repositories/answer-repository'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface CommentOnAnswerUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  authorId: string
  answerId: string
  content: string
}

interface CommentOnAnswerUseCaseResponse {
  // response of use case
  answerComment: AnswerComment
}

export class CommentOnAnswerUseCase {
  // this class will have only one method - principle of SOLID
  constructor(
    private answerRepository: AnswersRepository,
    private answerCommentsRepository: AnswerCommentsRepository,
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
    const answer = this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityID(authorId),
      answerId: new UniqueEntityID(answerId),
      content,
    })

    await this.answerCommentsRepository.create(answerComment)

    return { answerComment }
  }
}

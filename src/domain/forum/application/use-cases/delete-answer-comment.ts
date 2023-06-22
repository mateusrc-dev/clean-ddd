import { Either, left, right } from '@/core/either'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface DeleteAnswerCommentUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseResponse = Either<string, {}>

export class DeleteAnswerCommentUseCase {
  // this class will have only one method - principle of SOLID
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment = await this.answerCommentsRepository.findById(
      answerCommentId,
    )

    if (!answerComment) {
      return left('Answer comment not found.')
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left('Not allowed.')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}

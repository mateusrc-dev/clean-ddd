import { QuestionsRepository } from '../repositories/question-repository'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface CommentOnQuestionUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  authorId: string
  questionId: string
  content: string
}

interface CommentOnQuestionUseCaseResponse {
  // response of use case
  questionComment: QuestionComment
}

export class CommentOnQuestionUseCase {
  // this class will have only one method - principle of SOLID
  constructor(
    private questionRepository: QuestionsRepository,
    private questionCommentsRepository: QuestionCommentsRepository,
  ) {}

  async execute({
    authorId,
    questionId,
    content,
  }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse> {
    const question = this.questionRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(questionId),
      content,
    })

    await this.questionCommentsRepository.create(questionComment)

    return { questionComment }
  }
}

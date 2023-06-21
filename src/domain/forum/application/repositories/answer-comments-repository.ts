import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  // this is repository is only a contract
  create(answerComment: AnswerComment): Promise<void>
}

import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  // this is repository is only a contract
  create(questionComment: QuestionComment): Promise<void>
}

import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  // this is repository is only a contract
  create(question: Question): Promise<void>
}

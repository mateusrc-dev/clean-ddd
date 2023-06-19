import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  // this is repository is only a contract
  findBySlug(slug: string): Promise<Question | null>
  create(question: Question): Promise<void>
}

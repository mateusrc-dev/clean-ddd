import { Question } from '../../enterprise/entities/question'

export interface QuestionsRepository {
  // this is repository is only a contract
  findById(id: string): Promise<Question | null>
  findBySlug(slug: string): Promise<Question | null>
  create(question: Question): Promise<void>
  delete(question: Question): Promise<void>
}

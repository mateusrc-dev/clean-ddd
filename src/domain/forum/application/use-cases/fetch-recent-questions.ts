import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'

interface FetchRecentQuestionsUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  page: number
}

interface FetchRecentQuestionsUseCaseResponse {
  // response of use case
  questions: Question[]
}

export class FetchRecentQuestionsUseCase {
  // this class will have only one method - principle of SOLID
  constructor(private questionRepository: QuestionsRepository) {}
  async execute({
    page,
  }: FetchRecentQuestionsUseCaseRequest): Promise<FetchRecentQuestionsUseCaseResponse> {
    const questions = await this.questionRepository.findManyRecent({ page })

    return { questions }
  }
}

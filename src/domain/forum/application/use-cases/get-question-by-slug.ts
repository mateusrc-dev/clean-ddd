import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'

interface GetQuestionBySlugUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  slug: string
}

interface GetQuestionBySlugUseCaseResponse {
  // response of use case
  question: Question
}

export class GetQuestionBySlugUseCase {
  // this class will have only one method - principle of SOLID
  constructor(private questionRepository: QuestionsRepository) {}
  async execute({
    slug,
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionRepository.findBySlug(slug)

    if (!question) {
      throw new Error('Question not found.')
    }

    return { question }
  }
}

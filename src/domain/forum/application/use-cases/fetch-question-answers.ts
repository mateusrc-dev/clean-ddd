import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answer-repository'

interface FetchQuestionAnswersUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  questionId: string
  page: number
}

interface FetchQuestionAnswersUseCaseResponse {
  // response of use case
  answers: Answer[]
}

export class FetchQuestionAnswersUseCase {
  // this class will have only one method - principle of SOLID
  constructor(private answersRepository: AnswersRepository) {}
  async execute({
    page,
    questionId,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return { answers }
  }
}

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'

interface CreateQuestionUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  authorId: string
  title: string
  content: string
}

interface CreateQuestionUseCaseResponse {
  // response of use case
  question: Question
}

export class CreateQuestionUseCase {
  // this class will have only one method - principle of SOLID
  constructor(private questionRepository: QuestionsRepository) {}
  async execute({
    authorId,
    content,
    title,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      content,
      title,
    })

    await this.questionRepository.create(question)

    return { question }
  }
}

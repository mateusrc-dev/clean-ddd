import { Either, right } from '@/core/either'
import { QuestionsRepository } from '../repositories/question-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { NotAllowedError } from './errors/not-allowed-error'

interface DeleteQuestionUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  authorId: string
  questionId: string
}

type DeleteQuestionUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {}
>

export class DeleteQuestionUseCase {
  // this class will have only one method - principle of SOLID
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({
    authorId,
    questionId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    // this method consists of an instructor answering a question from the student
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return right(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return right(new ResourceNotFoundError())
    }

    await this.questionsRepository.delete(question)
    return right({})
  }
}

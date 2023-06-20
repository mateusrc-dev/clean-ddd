import { AnswersRepository } from '../repositories/answer-repository'

interface DeleteAnswerUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  authorId: string
  answerId: string
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  // this class will have only one method - principle of SOLID
  constructor(private answerRepository: AnswersRepository) {}
  async execute({
    authorId,
    answerId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    // this method consists of an instructor answering a answer from the student
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.answerRepository.delete(answer)
    return {}
  }
}

import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/question-repository'
import { AnswersRepository } from '../repositories/answer-repository'

interface ChooseQuestionBestAnswerUseCaseRequest {
  // interface helps to identify what we are going to receive in this class as a parameter
  authorId: string
  answerId: string
}

interface ChooseQuestionBestAnswerUseCaseResponse {
  // response of use case
  question: Question
}

export class ChooseQuestionBestAnswerUseCase {
  // this class will have only one method - principle of SOLID
  constructor(
    private questionsRepository: QuestionsRepository,
    private answersRepository: AnswersRepository,
  ) {}

  async execute({
    authorId,
    answerId,
  }: ChooseQuestionBestAnswerUseCaseRequest): Promise<ChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    question.bestAnswerId = answer.id

    await this.questionsRepository.save(question)

    return { question }
  }
}

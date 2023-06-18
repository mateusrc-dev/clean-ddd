import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answer-repository"

interface AnswerQuestionUseCaseRequest { // interface helps to identify what we are going to receive in this class as a parameter
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  // this class will have only one method - principle of SOLID
  constructor(private answersRepository: AnswersRepository) {}
  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    // this method consists of an instructor answering a question from the student
    const answer = new Answer({ authorId: instructorId, content, questionId })

    await this.answersRepository.create(answer)

    return answer
  }
}
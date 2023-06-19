import { QuestionsRepository } from '../repositories/question-repository'
import { CreateQuestionUseCase } from './create-question'
import { Question } from '../../enterprise/entities/question'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy() // id cannot be undefined, null
})

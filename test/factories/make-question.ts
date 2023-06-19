import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  // 'Partial' makes all properties in 'QuestionProps' optional
  const question = Question.create({
    title: 'Example',
    // slug: Slug.create('example-question'), // automated creation
    authorId: new UniqueEntityID(),
    content: 'Example content',
    ...override, // to overwrite any value that was sent in 'override'
  })

  return question
}

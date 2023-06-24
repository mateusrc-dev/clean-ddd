import { QuestionAttachment } from '../../enterprise/entities/question-attachment'

export interface QuestionAttachmentRepository {
  // this is repository is only a contract
  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]>
}

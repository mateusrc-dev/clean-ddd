import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

interface NotificationProps {
    recipientId: UniqueEntityID,
    title: string
    content: string
    createAt: Date
    readAt?: Date
}

export class Notification extends Entity<NotificationProps> {
    get recipientId() {
        return this.props.recipientId
    }

    get title() {
        return this.props.recipientId
    }

    get content() {
        return this.props.recipientId
    }

    get readAt() {
        return this.props.recipientId
    }

    get createAt() {
        return this.props.recipientId
    }

    static create(props: Optional<NotificationProps, 'createAt'>, id?: UniqueEntityID) {
        const notification = new Notification({
            ...props,
            createdAt: props.createAt ?? new Date(),
        }, id)

        return notification
    }
}
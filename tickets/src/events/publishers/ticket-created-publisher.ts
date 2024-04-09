import { Publisher, Subjects, TicketCreatedEvent } from '@zibelina/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

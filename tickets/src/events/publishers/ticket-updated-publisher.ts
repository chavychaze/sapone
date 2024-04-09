import { Publisher, Subjects, TicketUpdatedEvent } from '@zibelina/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

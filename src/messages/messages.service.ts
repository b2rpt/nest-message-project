import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  getMessages(): string {
    return 'all messages ';
  }
  addMessages(): string {
    return 'added new message';
  }

  getMessage(id: string): string {
    return `one message for id ${id}`;
  }
}

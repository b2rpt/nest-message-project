import { Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}
  @Get()
  getMessages(): string {
    return this.messageService.getMessages();
  }
  @Post()
  addMessages(): string {
    return this.messageService.addMessages();
  }
  @Get(':id')
  getMessage(@Param('id') id: string): string {
    return this.messageService.getMessage(id);
  }
}

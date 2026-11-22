import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  // Other modules this module needs.
  imports: [],
  // Controllers responsible for receiving requests.
  controllers: [AppController],
  // Services and other injectable components Nest can create and manage.
  // A provider is something Nest can create, manage, and inject into other components when they need it.
  providers: [AppService],
})

// Providers this module makes available to other modules.
export class AppModule {}

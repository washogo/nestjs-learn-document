import { Module } from '@nestjs/common';
import { AdminController, AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [],
  controllers: [CatsController, AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}

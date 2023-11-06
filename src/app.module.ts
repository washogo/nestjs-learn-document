import { Module } from '@nestjs/common';
import { AdminController, AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}

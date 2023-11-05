import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controllerデコレータ：
 * クラスをコントローラに変換する
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}

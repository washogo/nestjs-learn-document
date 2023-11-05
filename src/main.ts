import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /**
   * NestFactoryクラス：
   * アプリケーションインスタンスを作成するためのいくつかの静的メソッドを公開している
   *
   * createメソッド：
   * INestApplicationインターフェースを満たすアプリケーションオブジェクトを返す
   */
  const app = await NestFactory.create(AppModule);
  // 単にHTTPリスナーを起動して、アプリケーションがHTTPリクエストを待機するようにする
  await app.listen(3000);
}
bootstrap();


import { NestFactory } from '@nestjs/core';
import { MainModule } from './nestjs/main.module';

export async function start() {
  bootstrap()
}

export async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(3000);
}
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes';

import { AppModule } from './app.module';

async function main() {
  const whitelist = true;
  const forbidNonWhitelisted = true;

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist, forbidNonWhitelisted }));
  await app.listen(3006);
}
main();

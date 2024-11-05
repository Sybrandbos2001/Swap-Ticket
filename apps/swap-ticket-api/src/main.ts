/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  try {
    logger.log('Starting application...');

    const app = await NestFactory.create(AppModule);
    logger.log('Application created');

    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    logger.log(`Global prefix set to: ${globalPrefix}`);

    const port = process.env.PORT || 3000;
    
    await app.listen(port);
    logger.log(`Application listening on port ${port}`);

    logger.log(
      `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
  } catch (error) {
    logger.error('Error during application startup', error);
    process.exit(1);
  }
}

bootstrap()
  .then(() => logger.log('Application fully started'))
  .catch((error) => {
    logger.error('Unhandled error during bootstrap', error);
    process.exit(1);
  });
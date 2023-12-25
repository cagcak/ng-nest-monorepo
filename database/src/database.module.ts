import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { dataSource, dataSourceOptions } from './data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
  exports: [TypeOrmModule],
})
export class DatabaseModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    dataSource
      .initialize()
      .then(() => consumer.apply(DataSource).forRoutes('*'))
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
  }
}

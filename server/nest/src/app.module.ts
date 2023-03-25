import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { TrackService } from './track.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../scrap', 'cached'),
    }),
  ],
  controllers: [AppController],
  providers: [PrismaService, TrackService],
})
export class AppModule {}

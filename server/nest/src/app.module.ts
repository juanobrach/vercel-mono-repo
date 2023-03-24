import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { TrackService } from './track.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, TrackService],
})
export class AppModule {}

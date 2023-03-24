import { Controller, Get } from '@nestjs/common';
import { Track } from '@prisma/client';
import { TrackService } from './track.service';

@Controller()
export class AppController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  async getHello(): Promise<Track[]> {
    const tracks = await this.trackService.tracks({});
    console.log(tracks.length);
    return this.trackService.tracks({});
  }
}

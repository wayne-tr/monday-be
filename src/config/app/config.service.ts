import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CF2 {
  constructor(private configService: ConfigService) {}
  get port() {
    return this.configService.get<string>('app.port');
  }
}

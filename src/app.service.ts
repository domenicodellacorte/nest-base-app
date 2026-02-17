import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly http: HttpService,
    private readonly config: ConfigService,) {}

  getHello(): string {
    return 'Hello World!';
  }

  getDate(): Date {
    return new Date();
  }

  async getExternalService(): Promise<String> {
    const url = this.config.get("EXTERNAL_SERVICE_BASEURL");
    const res = await firstValueFrom(this.http.get(url));
    return res.data;
  }
}

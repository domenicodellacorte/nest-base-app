import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from './response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('date')
  getDate(): Response<Date> {
    return new Response(this.appService.getDate());
  }

  @Get('external')
  async getExternalService(): Promise<Response<String>> {
    const res = await this.appService.getExternalService();
    return new Response(res);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  greeting(): string {
    return "Greeting Rut!!"
  }
}

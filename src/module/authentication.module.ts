import { Module } from '@nestjs/common';
import { AuthenticationService } from 'src/providers/authentication/authentication.service';
import { AuthenticationController } from '../controllers/authentication/authentication.controller';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}

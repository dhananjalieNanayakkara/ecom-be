import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  imports:[],
  controllers: [AuthController],
  providers: [AuthService, JwtService, UserService]
})
export class AuthModule {}

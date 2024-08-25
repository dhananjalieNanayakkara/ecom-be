import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from 'src/dtos/userLogin.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('/login')
    async userLogin(@Body() req: UserLoginDto){
        return await this.authService.userLogin(req);
    }
}

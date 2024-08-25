import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDto } from 'src/dtos/userLogin.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get('/all')
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Post('/login')
    async userLogin(@Body() req: UserLoginDto){
        const res = await this.userService.userLogin(req);
        return res;
    }

}

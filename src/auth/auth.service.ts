import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserLoginDto } from 'src/dtos/userLogin.dto';
import { User } from 'src/entities/User.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

    async userLogin(credentials: UserLoginDto){
        try {
            const user:any = await this.userService.getUserByCredentials(credentials);

            console.log(user);
            

            const isCorrect = await bcrypt.compare(credentials.password, user.password);

            if (isCorrect) {
                // create the jwt token
                const payload = {
                    roll: user.rollId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }
                const jwtToken = await this.jwtService.signAsync(payload);
                return { 
                    access_token: jwtToken, 
                    firstName: user.firstName, 
                    lastName: user.lastName, 
                    roll: user.rollId, 
                    email: user.email }
            } else {
                throw new UnauthorizedException('Wrong Credentials');
            }
        } catch (error) {
            throw new HttpException('Unhandled Exception', HttpStatus.UNAUTHORIZED)
        }
    }
}

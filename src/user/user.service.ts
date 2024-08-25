import { HttpCode, HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserLoginDto } from 'src/dtos/userLogin.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/User.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepo:Repository<User>, private readonly jwtService: JwtService) { }

    async getAllUsers() {
        // return this.userRepo.find({ where: { isActive: true } });
    }

    async getUserByCredentials(credentials: UserLoginDto): Promise<any> {
        try {
            const user: User = await this.userRepo.findOne({ where: { email: credentials.username } })

            if (!user) {
                throw new NotFoundException('Cannot find the user');
            }

            return user;

        } catch (error) {
            console.log(error);
            
            throw new HttpException('Unknown Error', HttpStatus.UNAUTHORIZED);
        }
    }

    async userLogin(credentials: UserLoginDto): Promise<any> {

    }
}

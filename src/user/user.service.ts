import { Injectable } from '@nestjs/common';
import { UserRepo } from './user.repository';

@Injectable()
export class UserService {

    constructor(private userRepo: UserRepo){}

    async getAllUsers(){
        return this.userRepo.find({where: {isActive: true}});
    }
}

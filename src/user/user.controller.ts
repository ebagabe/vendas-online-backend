import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "./user.service";
import { User } from "./interface/user.interface";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.CreateUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
}

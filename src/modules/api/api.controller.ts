import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { SignUpDto } from "./dtos/sign-up.dto";
import { JwtAuthGuard } from "../Infrastructure/auth/jwt-auth.guard";
import { CommandBus } from "@nestjs/cqrs";
import { SignUpHandler } from "./commands/sign-up/create-user.handler";
import { SignUpCommand } from "./commands/sign-up/create-user.command";

@Controller("api")
export class ApiController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post("users/sign-up")
  signUp(@Body() signUpDto: SignUpDto) {
    const { username, password, postCode } = signUpDto;
    return this.commandBus.execute(new SignUpCommand(username, password, postCode));
  }
}

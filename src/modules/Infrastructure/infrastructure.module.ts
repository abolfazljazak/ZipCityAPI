import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { InfrastructureService } from "./infrastructure.service";

@Module({
  providers: [InfrastructureService, JwtService, ConfigService],
  exports: [InfrastructureService, JwtService, ConfigService],
})
export class InfrastructureModule {}

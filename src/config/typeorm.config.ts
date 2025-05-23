import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmDbConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(
    connectionName?: string, // eslint-disable-line
  ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: "postgres",
      username: this.configService.get("Db.username"),
      password: this.configService.get("Db.password"),
      port: this.configService.get("Db.port"),
      host: this.configService.get("Db.host"),
      database: this.configService.get("Db.database"),
      synchronize: true,
      autoLoadEntities: true,
      entities: ["dist/**/**/**/*.entity.{ts, js}", "dist/**/**/*.entity.{ts, js}"],
    };
  }
}

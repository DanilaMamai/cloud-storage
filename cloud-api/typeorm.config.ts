import { config } from "dotenv";
import { DataSource } from "typeorm";

import { FileEntity } from "./src/files/entities/file.entity";
import { UserEntity } from "./src/users/entities/user.entity";

config();

export default new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  migrations: ["migrations/**"],
  entities: [FileEntity, UserEntity],
});

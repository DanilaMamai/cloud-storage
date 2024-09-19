import * as express from "express";

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { join } from "path";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use("/uploads", express.static(join(__dirname, "../../uploads")));

  const config = new DocumentBuilder()
    .setTitle("Cloud API")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
}

bootstrap();

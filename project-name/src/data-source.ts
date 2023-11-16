import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '123',
  database: 'restaurante',
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
})
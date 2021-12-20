module.exports={
 
    "type":"postgres",
    "host":process.env.Host || "localhost",
    "port":process.env.Port || 5437,
    "username":process.env.User || "postgres",
    "password":process.env.Password || "123",
    "database":process.env.Database ||"facile-challenge",
    "entities":[
        "./dist/modules/**/infra/typeorm/entities/*.ts"
    ],
    "migrations":[
        "./dist/shared/infra/typeorm/migrations/*.ts"
    ],
    "cli":{
        "migrationsDir":"./dist/shared/infra/typeorm/migrations/*.ts"
    },
    "extra": {
        "ssl": {
          "rejectUnauthorized": false,
        }
      }
}
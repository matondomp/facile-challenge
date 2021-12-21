module.exports={
 
    "type":"postgres",
    "host":process.env.Host || "localhost",
    "port":process.env.Port || 5437,
    "username":process.env.User || "postgres",
    "password":process.env.Password || "123",
    "database":process.env.Database ||"facile-challenge",
    "entities":[
        "./src/modules/**/infra/typeorm/entities/*.ts"
    ],
    "migrations":[
        "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    "cli":{
        "migrationsDir":"./src/shared/infra/typeorm/migrations/*.ts"
    },
    "extra": {
        "ssl": {
          "rejectUnauthorized": false,
        }
      }
}
module.exports={
    "type":"postgres",
    "host":process.env.APP_URL || "localhost",
    "port":5437,
    "username":"postgres",
    "password":"123",
    "database":"facile-challenge",
    "entities":[
        "./src/modules/**/infra/typeorm/entities/*.ts"
    ],
    "migrations":[
        "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    "cli":{
        "migrationsDir":"./src/shared/infra/typeorm/migrations/*.ts"
    }
}
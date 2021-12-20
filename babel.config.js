module.exports={
  presets: [ 
      ["@babel/preset-env",{targets:{ node:"current" }}],
      "@babel/preset-typescript"
   ],
   Plugins:[
      ['module-resover',{
          alias:{
            "@modules":"./src/modules",
            "@shared":"./src/shared",
            "@config":"./src/config"
          }
      }],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators",{"lagacy":true}],
      ["@babel/plugin-proposal-class-properties",{"loose":true}]
   ]

}
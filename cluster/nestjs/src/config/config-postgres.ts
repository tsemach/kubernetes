import { ConfigPostgresConnectionParams, ConfigPostgresParams } from "../types"
import { ConfigDefinctions, ClassMethodsRecord } from "./config-defintions"

export class ConfigPostgres extends ConfigDefinctions<ConfigPostgresParams> {
  constructor() {
    super()

    this._params.host = process.env.POSTGRES_HOST 
    this._params.port = +process.env.POSTGRES_PORT
    this._params.username = process.env.POSTGRES_USERNAME 
    this._params.password = process.env.POSTGRES_PASSWORD
    this._params.database = process.env.POSTGRES_DATABASE    

    this.defineAll()
  }   

  params() {
    return this._params
  }
  
  getUri() {
    return `postgres://${this._params.host}:${this._params.port}/${this._params.database}`;  
  }

  getConnectionParams(): ConfigPostgresConnectionParams {    
    return {
      host: this._params.host,
      port: this._params.port,
      username: this._params.username,
      password: this._params.password,        
      database: this._params.database
    }
  }

  static new() {
    return (new ConfigPostgres() as unknown ) as ClassMethodsRecord<ConfigPostgres> & ConfigPostgresParams & { _params: ConfigPostgresParams }    
  }
}



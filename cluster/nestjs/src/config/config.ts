import { ConfigPostgres } from './config-postgres'

export class Config {  
  public static readonly pg = ConfigPostgres.new()

  public static readonly port = +(process.env.PORT ?? 8001)  
  
  static isLocal() {
    return process.env.NODE_ENV === 'local'
  }
}
  
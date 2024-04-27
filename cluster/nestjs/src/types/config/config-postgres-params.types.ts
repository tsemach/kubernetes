export interface ConfigPostgresParams {
  host: string
  port: number
  username: string
  password: string
  database: string
  usemock?: boolean
}
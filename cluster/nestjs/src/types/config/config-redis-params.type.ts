import { RedisLockerOptions } from '../redis/redis-locker-options'

export interface ConfigRedisParams {
  host?: string,
  port?: number,
  tls?: any

  locker: { options: RedisLockerOptions, name: string }
}
export interface RedisLockerOptions {  
  driftFactor: number
  retryCount: number
  retryDelay: number
  retryJitter: number
  automaticExtensionThreshold: number
}


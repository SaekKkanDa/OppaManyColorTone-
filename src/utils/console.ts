import { isDev } from '@Utils/environment';

// HJ TODO: Enum 성능 측정, 얼마나 안좋은지.. 그리고 그게 유의미한 값인지
export enum EDebugLevel {
  INFO = 0,
  LOG,
  WARN,
  ERROR,
}

export class OmctConsole {
  private static s_debugLevel: EDebugLevel = isDev()
    ? EDebugLevel.INFO
    : EDebugLevel.LOG;
  private m_prefix: string;

  constructor(prefix: string) {
    this.m_prefix = `[${prefix}]`;
  }

  public static get debugLevel(): EDebugLevel {
    return OmctConsole.s_debugLevel;
  }

  public static set debugLevel(value: EDebugLevel) {
    OmctConsole.s_debugLevel = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info(...args: any) {
    if (OmctConsole.s_debugLevel <= EDebugLevel.INFO)
      console.info(this.m_prefix, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(...args: any) {
    if (OmctConsole.s_debugLevel <= EDebugLevel.LOG)
      console.log(this.m_prefix, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn(...args: any) {
    if (OmctConsole.s_debugLevel <= EDebugLevel.WARN)
      console.warn(this.m_prefix, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(...args: any) {
    if (OmctConsole.s_debugLevel <= EDebugLevel.ERROR)
      console.error(this.m_prefix, ...args);
  }
}

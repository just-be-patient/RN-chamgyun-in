export default class TimeUtil {
  private static readonly times = [
    {name: '년 전', milliSeconds: 60 * 60 * 24 * 365},
    {name: '개월 전', milliSeconds: 60 * 60 * 24 * 30},
    {name: '주 전', milliSeconds: 60 * 60 * 24 * 7},
    {name: '일 전', milliSeconds: 60 * 60 * 24},
    {name: '시간 전', milliSeconds: 60 * 60},
    {name: '분 전', milliSeconds: 60},
    {name: '초 전', milliSeconds: 1},
  ];

  public static getTime(preDate: Date) {
    const now = new Date();
    const timeDiff = (now.getTime() - preDate.getTime()) / 1000;

    for (const time of this.times) {
      const diff = Math.floor(timeDiff / time.milliSeconds);

      if (diff > 0) {
        return `${diff}${time.name}`;
      }
    }

    return '방금 전';
  }
}

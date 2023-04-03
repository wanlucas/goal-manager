export default class CoreError extends Error {
  public readonly type: string;
  public readonly status: number;

  constructor(message: string, status: number,  type: string) {
    super(message);
    this.type = type;
    this.status = status;
  }
}
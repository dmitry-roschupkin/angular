export class LogMessage
{
  date: Date = null;
  message: string = null;

  constructor(date, message) {
    this.date = date;
    this.message = message;
  }
}

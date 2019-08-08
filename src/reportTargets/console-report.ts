import { OutputTarget } from "../summary";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}

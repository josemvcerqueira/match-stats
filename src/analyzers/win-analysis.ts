import { Analyzer } from "../summary";
import { MatchData } from "../match-data.type";
import { MatchResult } from "../match-result.enum";

export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) wins++;
      if (match[2] === this.team && match[5] === MatchResult.AwayWin) wins++;
    }

    return `Team ${this.team} won ${wins} games.`;
  }
}

import { MatchReader } from "./match-reader";
import { Summary } from "./summary";
import { WinAnalysis } from "./analyzers/win-analysis";
import { ConsoleReport } from "./reportTargets/console-report";
import { HtmlReport } from "./reportTargets/html-report";

const cvsFileReader = new MatchReader("football.csv").read();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(cvsFileReader.data);

import { Rules } from "./constants";

export default function getRule(Value): string {
  let Rule = "";
  switch (Value) {
    case "AC":
    case "AS":
    case "AD":
    case "AH":
      Rule = Rules.AceRule;
      return Rule;

    case "2C":
    case "2S":
    case "2D":
    case "2H":
      Rule = Rules.TwoRule;
      return Rule;

    case "3C":
    case "3S":
    case "3D":
    case "3H":
      Rule = Rules.ThreeRule;
      return Rule;

    case "4C":
    case "4S":
    case "4D":
    case "4H":
      Rule = Rules.FourRule;
      return Rule;

    case "5C":
    case "5S":
    case "5D":
    case "5H":
      Rule = Rules.FiveRule;
      return Rule;

    case "6C":
    case "6S":
    case "6D":
    case "6H":
      Rule = Rules.SixRule;
      return Rule;

    case "7C":
    case "7S":
    case "7D":
    case "7H":
      Rule = Rules.SevenRule;
      return Rule;

    case "8C":
    case "8S":
    case "8D":
    case "8H":
      Rule = Rules.EightRule;
      return Rule;

    case "9C":
    case "9S":
    case "9D":
    case "9H":
      Rule = Rules.NineRule;
      return Rule;

    case "0C":
    case "0S":
    case "0D":
    case "0H":
      Rule = Rules.TenRule;
      return Rule;

    case "JC":
    case "JS":
    case "JD":
    case "JH":
      Rule = Rules.JackRule;
      return Rule;

    case "QC":
    case "QS":
    case "QD":
    case "QH":
      Rule = Rules.QueenRule;
      return Rule;

    case "KC":
    case "KS":
    case "KD":
    case "KH":
      Rule = Rules.KingRule;
      return Rule;
  }
}

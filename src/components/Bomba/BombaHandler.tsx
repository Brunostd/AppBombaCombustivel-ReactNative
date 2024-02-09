interface CombustivelStates {
  alcool: number;
  gasolina: number;
  modalVisible: boolean;
  whatFuelBetter: string;
}

interface CombustivelProps {
  alcool: number;
  gasolina: number;
  modalVisible: () => void;
  whatFuelBetter: string;
}

interface CombustivelManager {
  betterOption(
    alcool: number,
    gasolina: number,
    callback: (whatIsBetter: string) => void,
  ): void;
}

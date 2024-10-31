import { Console } from "@woowacourse/mission-utils";
import { checkAmount } from '../validation.js';

export async function inputAmount() {
    const userInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    checkAmount(userInput);
    return userInput;
}

export async function inputWinNumbers() {
    const userInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return userInput.split(',').map(a => Number(a));
}

export async function inputBonusNumber() {
    const userInput = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return userInput;
}
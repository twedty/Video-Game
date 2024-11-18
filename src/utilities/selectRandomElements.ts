import { shuffleArray } from './shuffle';

export function selectRandomElements<T>(array: T[], count: number): T[] {
    const shuffledArray = shuffleArray(array);
    return shuffledArray.slice(0, count);
}

function maxNumberOfBalloons(text: string): number {
    let word: string = "balloon";
    let dict: Map<string, number> = new Map();
    let ball: Map<string, number> = new Map();
    let count: number = 0;

    for (const char of text) {
        dict.set(char, (dict.get(char) || 0) + 1);
    }

    for (const char of word) {
        ball.set(char, (ball.get(char) || 0) + 1);
    }
    while (true) {
        for (const [key, value] of ball.entries()) {
            if (dict.get(key) && dict.get(key)! >= value) {
                dict.set(key, dict.get(key)! - value);
            } else {
                return count;
            }
        }
        count++;
    }
}

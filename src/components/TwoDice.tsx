import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left-die, setDie1] = useState<number>(1);
    const [right-die, setDie2] = useState<number>(2);

    return (
        <span>
            <Button onClick={() => setDie1(d6())}>Roll Left</Button>
        </span>
        <span>
            <Button onClick={() => setDie2(d6())}>Roll Right</Button>
        </span>
        <span>
            {die1 == die2 && die1!=1 && die2!=1 &7 <div>Win<\div>}
            {die1 == die2 && die1==1 && die2==1 &7 <div>Lose<\div>}
        </span>
    )
}

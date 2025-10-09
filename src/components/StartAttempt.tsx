import React, { useState } from "react";
import { Button } from "react-bootstrap";
export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setInProgress(!inProgress);
                }}
                disabled={!inProgress}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInProgress(!inProgress);
                }}
                disabled={inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={!inProgress}
            >
                Mulligan
            </Button>
            <div>attempts</div>
        </span>
    );
}

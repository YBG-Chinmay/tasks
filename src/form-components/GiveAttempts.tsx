import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleUse = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    const handleGain = () => {
        const parsed = parseInt(requestedAttempts);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of attempts left: {attemptsLeft}</div>
            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Requested attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => {
                        setRequestedAttempts(e.target.value);
                    }}
                />
            </Form.Group>
            <div>
                <Button onClick={handleUse} disabled={attemptsLeft === 0}>
                    use
                </Button>
                <Button onClick={handleGain}>
                    gain
                </Button>
            </div>
        </div>
    );
}

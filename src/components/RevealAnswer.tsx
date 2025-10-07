import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answer, setAnswerVisible] = useState<boolean>(false);

    return (
        <span>
            <Button onClick={() => setAnswerVisible(!answer)}>
                Reveal Answer
            </Button>
            {answer && <div>42</div>}
        </span>
    );
}

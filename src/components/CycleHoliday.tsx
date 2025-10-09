import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🪔");

    function AdvanceAlpha(): void {
        if (holiday == "🪔") {
            setHoliday("🎄");
        } else if (holiday == "🎄") {
            setHoliday("🎃");
        } else {
            setHoliday("🪔");
        }
    }

    function AdvanceNum(): void {
        if (holiday == "🪔") {
            setHoliday("🎃");
        } else if (holiday == "🎃") {
            setHoliday("🎄");
        } else {
            setHoliday("🪔");
        }
    }

    return (
        <span>
            <Button
                onClick={() => {
                    AdvanceAlpha();
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    AdvanceNum();
                }}
            >
                Advance by Year
            </Button>
            <div>`Holiday: ${holiday}</div>
        </span>
    );
}

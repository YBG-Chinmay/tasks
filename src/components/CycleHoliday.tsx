import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = [
        "Christmas",
        "Easter",
        "Halloween",
        "New Year",
        "Thanksgiving"
    ];

    const [currentHoliday, setCurrentHoliday] = useState<string>("Christmas");

    const cycleAlphabetically = () => {
        const currentIndex = holidays.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        setCurrentHoliday(holidays[nextIndex]);
    };

    const cycleByYear = () => {
        const currentIndex = holidays.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        setCurrentHoliday(holidays[nextIndex]);
    };

    return (
        <div>
            <span>Holiday: {currentHoliday}</span>
            <div>
                <Button onClick={cycleAlphabetically}>Alphabet</Button>
                <Button onClick={cycleByYear}>Year</Button>
            </div>
        </div>
    );
}

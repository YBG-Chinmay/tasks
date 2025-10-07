import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red", "blue", "green", "orange", "purple", "cyan", "magenta", "white", "black"
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    type="radio"
                    name="color-choice"
                    id={`color-choice-${color}`}
                    label={color}
                    value={color}
                    inline
                    checked={selectedColor === color}
                    onChange={(e) => {
                        setSelectedColor(e.target.value);
                    }}
                    style={{ color: color }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: selectedColor === "black" ? "white" : "black",
                    padding: "10px",
                    marginTop: "10px",
                    border: "1px solid #ccc"
                }}
            >
                You have chosen {selectedColor}.
            </div>
        </div>
    );
}

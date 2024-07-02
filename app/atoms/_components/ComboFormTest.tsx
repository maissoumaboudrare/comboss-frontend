/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

type Input = {
  inputName: string;
  inputSrc: string;
  order: number;
};

type Combo = {
  characterID: number;
  comboName: string;
  position: string;
  likes: number;
};

const inputsData = [
  { name: 'd', src: 'https://www.streetfighter.com/6/assets/images/common/controller/key-d.png' },
  { name: 'dr', src: 'https://www.streetfighter.com/6/assets/images/common/controller/key-dr.png' },
  { name: 'r', src: 'https://www.streetfighter.com/6/assets/images/common/controller/key-r.png' },
  { name: 'P', src: 'https://www.streetfighter.com/6/assets/images/common/controller/icon_punch.png' },
  // Ajoutez les autres inputs ici...
];

const ComboForm = () => {
  const [combo, setCombo] = useState<Combo>({
    characterID: 1,
    comboName: '',
    position: 'Standing',
    likes: 0,
  });

  const [lines, setLines] = useState<Input[][]>([[]]);

  const addInputToLine = (inputName: string, inputSrc: string) => {
    const currentLineIndex = lines.length - 1;
    const order = lines[currentLineIndex].length + 1;
    const newInput: Input = { inputName, inputSrc, order };

    const updatedLines = [...lines];
    updatedLines[currentLineIndex].push(newInput);
    setLines(updatedLines);
  };

  const addNewLine = () => {
    setLines([...lines, []]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const flatInputs = lines.flat().map(input => ({
      inputName: input.inputName,
      inputSrc: input.inputSrc,
      order: input.order,
    }));

    const comboData = {
      combo,
      inputs: flatInputs,
    };

    const response = await fetch('http://localhost:3010/api/combos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comboData),
    });

    if (response.ok) {
      alert('Combo added successfully!');
    } else {
      alert('Failed to add combo');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Create Combo</h1>
      <div>
        <label className="block text-sm font-medium">Combo Name</label>
        <input
          type="text"
          value={combo.comboName}
          onChange={(e) => setCombo({ ...combo, comboName: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="flex space-x-2">
            {line.map((input, inputIndex) => (
              <img key={inputIndex} src={input.inputSrc} alt={input.inputName} className="w-8 h-8" />
            ))}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Add Inputs</h2>
        <div className="flex space-x-2">
          {inputsData.map((input, index) => (
            <button
              key={index}
              type="button"
              onClick={() => addInputToLine(input.name, input.src)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <img src={input.src} alt={input.name} className="w-8 h-8" />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={addNewLine}
          className="mt-2 p-2 border border-gray-300 rounded-md"
        >
          Add New Line
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Submit Combo
      </button>
    </form>
  );
};

export default ComboForm;
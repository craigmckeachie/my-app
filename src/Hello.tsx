import React from 'react';
import { Settings } from './Settings';

export interface Props {
  settings: Settings;
}

function Hello(props: Props) {
  const { enthusiasmLevel, name } = props?.settings;
  if (enthusiasmLevel && enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {enthusiasmLevel && name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

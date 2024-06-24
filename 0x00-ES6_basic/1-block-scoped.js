export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; /* eslint-disable no-unused-vars */
    const task2 = false; /* eslint-disable no-unused-vars */
  }

  return [task, task2];
}

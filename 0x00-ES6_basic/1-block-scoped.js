export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* change-vars to-const */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* change-vars to-const */

  return [task, task2];
}

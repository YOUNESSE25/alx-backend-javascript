export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable change-vars-to-const */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* eslint-disable change-vars-to-const */


  return [task, task2];
}

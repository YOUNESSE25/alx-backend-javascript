export default function guardrail(mathFunction) {
  const line = [];
  try {
    const resulta = mathFunction();
    line.push(resulta);
  } catch (error) {
    line.push(`Error: ${error.message}`);
  } finally {
    line.push('Guardrail was processed');
  }
  return line;
}

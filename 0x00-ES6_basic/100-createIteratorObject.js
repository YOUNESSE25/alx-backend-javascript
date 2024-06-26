export default function createIteratorObject(report) {
  const resolt = [];
  for (const indx of Object.values(report.allEmployees)) {
    resolt.push(...indx);
  }
  return resolt;
}

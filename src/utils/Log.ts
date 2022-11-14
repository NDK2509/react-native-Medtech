export default {
  d: (tag: string, data: any) => console.log(`[Log.d] ${tag} > `, data),
  e: (tag: string, messageError: string | number) =>
    console.log(`[Log.e] ${tag} > ${messageError}`),
  i: (tag: string, message: string) =>
    console.log(`[Log.i] ${tag} > ${message}`),
};

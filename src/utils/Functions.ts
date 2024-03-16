export const inputType = (idx: number, values: any) =>
  idx === 0 ? values?.name : idx === 1 ? values?.state : values?.email;
export const errorType = (idx: number, errors: any) =>
  idx === 0 ? errors?.name : idx === 1 ? errors?.state : errors?.email;
export const touchedType = (idx: number, touched: any) =>
  idx === 0 ? touched?.name : idx === 1 ? touched?.state : touched?.email;



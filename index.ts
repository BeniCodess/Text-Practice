export const addUp = (a: number, b: number) => {
  return a + b;
};

export const myName = (name: string): string => {
  return name;
};

export const zero = (a: number): number => {
  return a - a;
};

interface iProps {
  name: string;
  id: number;
}

export const objData = (name: string): iProps => {
  return { id: 3, name };
};

let student: Array<string> = ["Peter", "Amaka", "James"];

export const newStudent = (name: string): Array<string> => {
  let x = [...student, name];

  return x;
};

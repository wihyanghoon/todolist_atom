import { atom } from "recoil";

type TodoTypes = {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
};

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    // setSelf -> Callbacks to set or reset the value of the atom.
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
	
    // onSet -> Subscribe to changes in the atom value.
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const toDoAtom = atom<TodoTypes[]>({
  key: "todo",
  default: [],
  effects: [localStorageEffect('todo')],
});

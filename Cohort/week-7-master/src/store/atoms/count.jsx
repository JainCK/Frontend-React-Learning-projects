import { atom } from "recoil";

export const countAtom = atom({
    key: 'countAtom',
    default: 0
});


// dont make conflicting keys
import { atom } from "recoil";

const countAtom = atom({
    key: 'countAtom',
    default: 0
});


// dont make conflicting keys
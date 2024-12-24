export const hashGenerate = (num: number) => {
    const myString =
        "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";

    let hash = "";

    for (let index = 0; index < num; index++) {
        const i = Math.floor(Math.random() * myString.length);
        const element = myString[i];
        hash += element;
    }

    return hash;
};

import { processArray, formatArrayStrings }  from "./arrayManipulation";


function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length){
        throw new Error("The arrays should have the same length");
    }

    return names.map((nameOfPerson, index) => {
        return {
            id: index + 1,
            originalName: nameOfPerson,
            modifiedName: modifiedNames[index] 
        };
    });
}

const originalName = ['Juan', 'Leticia', 'Sadiq', 'Lia', 'Lisa'];
const modifiedName = formatArrayStrings(originalName, newArray);

//console.log(modifiedName);
const userProfiles = createUserProfiles(originalName, modifiedName);
console.log(userProfiles);
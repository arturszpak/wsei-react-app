import IEntityProps from "./IEntityProps"

export let entityData: IEntityProps[] = [];

const entityCompanies: IEntityProps[] = [
    {
        title: "World Company SAS",
        content: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        title: "Subsid Corp LTD.",
        content: "Caracas 1050, Distrito Capital, Venezuela"
    },
]

function setDataArray(){
    for(let i=0; i<15; i++){
        entityCompanies.forEach(company => entityData.push(company));
    }
}

setDataArray();
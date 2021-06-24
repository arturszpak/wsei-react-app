import IEntityProps from "./IEntityProps"

export let entityData: IEntityProps[] = [];

const entityCompanies: IEntityProps[] = [
    {
        imgSrc: "https://static.wixstatic.com/media/426fc4_e0974ef66c9b4890b0a187b07a59f6d2~mv2_d_4843_4289_s_4_2.png/v1/fill/w_560,h_496,al_c,q_85,usm_0.66_1.00_0.01/MARTINEZ%20KING%20LAW%20FIRM%20LOGO%20FIX%20(%20trans%20.webp",
        title: "World Company SAS",
        content: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        imgSrc: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/82269348_1060102907662373_2265885614199013376_n.png?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XQ_V4GiJr18AX8EbY5Z&tn=yPzCWomHQqb48ofG&_nc_ht=scontent-waw1-1.xx&oh=f6c6aed6bc1e54117d127e59295984df&oe=60D219DA",
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
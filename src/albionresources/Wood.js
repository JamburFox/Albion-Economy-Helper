class Wood {
    constructor(name, tier, weight, imageUrl){
        this.name = name;
        this.tier = tier;
        this.weight = weight;
        this.imageUrl = imageUrl;
    }
}

const roughLogs = {
    name: "Rough Logs",
    type: "raw",
    tier: 1,
    weight: 0.15,
    imageUrl: "https://render.albiononline.com/v1/item/Rough%20Logs.png",
    marketName: "T1_WOOD"
};

const birchLogs = {
    name: "Birch Logs",
    type: "raw",
    tier: 2,
    weight: 0.23,
    imageUrl: "https://render.albiononline.com/v1/item/Birch%20Logs.png",
    marketName: "T2_WOOD"
};
  
const chestnutLogs = {
    name: "Chestnut Logs",
    type: "raw",
    tier: 3,
    weight: 0.34,
    imageUrl: "https://render.albiononline.com/v1/item/Chestnut%20Logs.png",
    marketName: "T3_WOOD"
};

const pineLogs = {
    name: "Pine Logs",
    type: "raw",
    tier: 4,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Pine%20Logs.png",
    marketName: "T4_WOOD"
};
const uncommonPineLogs = {
    name: "Uncommon Pine Logs",
    type: "raw",
    tier: 4.1,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Pine%20Logs.png",
    marketName: "T4_WOOD_LEVEL1@1"
};
const rarePineLogs = {
    name: "Rare Pine Logs",
    type: "raw",
    tier: 4.2,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Pine%20Logs.png",
    marketName: "T4_WOOD_LEVEL2@2"
};
const exceptionalPineLogs = {
    name: "Exceptional Pine Logs",
    type: "raw",
    tier: 4.3,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Pine%20Logs.png",
    marketName: "T4_WOOD_LEVEL3@3"
};
const pristinePineLogs = {
    name: "Pristine Pine Logs",
    type: "raw",
    tier: 4.4,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Pine%20Logs.png",
    marketName: "T4_WOOD_LEVEL4@4"
};

  
const cedarLogs = {
    name: "Cedar Logs",
    type: "raw",
    tier: 5,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Cedar%20Logs.png",
    marketName: "T5_WOOD"
};
const uncommonCedarLogs = {
    name: "Uncommon Cedar Logs",
    type: "raw",
    tier: 5.1,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Cedar%20Logs.png",
    marketName: "T5_WOOD_LEVEL1@1"
};
const rareCedarLogs = {
    name: "Rare Cedar Logs",
    type: "raw",
    tier: 5.2,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Cedar%20Logs.png",
    marketName: "T5_WOOD_LEVEL2@2"
};
const exceptionalCedarLogs = {
    name: "Exceptional Cedar Logs",
    type: "raw",
    tier: 5.3,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Cedar%20Logs.png",
    marketName: "T5_WOOD_LEVEL3@3"
};
const pristineCedarLogs = {
    name: "Pristine Cedar Logs",
    type: "raw",
    tier: 5.4,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Cedar%20Logs.png",
    marketName: "T5_WOOD_LEVEL4@4"
};
  
const bloodoakLogs = {
    name: "Bloodoak Logs",
    type: "raw",
    tier: 6,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Bloodoak%20Logs.png",
    marketName: "T6_WOOD"
};
const uncommonBloodoakLogs = {
    name: "Uncommon Bloodoak Logs",
    type: "raw",
    tier: 6.1,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Bloodoak%20Logs.png",
    marketName: "T6_WOOD_LEVEL1@1"
};
const rareBloodoakLogs = {
    name: "Rare Bloodoak Logs",
    type: "raw",
    tier: 6.2,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Bloodoak%20Logs.png",
    marketName: "T6_WOOD_LEVEL2@2"
};
const exceptionalBloodoakLogs = {
    name: "Exceptional Bloodoak Logs",
    type: "raw",
    tier: 6.3,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Bloodoak%20Logs.png",
    marketName: "T6_WOOD_LEVEL3@3"
};
const pristineBloodoakLogs = {
    name: "Pristine Bloodoak Logs",
    type: "raw",
    tier: 6.4,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Bloodoak%20Logs.png",
    marketName: "T6_WOOD_LEVEL4@4"
};
  
const ashenbarkLogs = {
    name: "Ashenbark Logs",
    type: "raw",
    tier: 7,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Ashenbark%20Logs.png",
    marketName: "T7_WOOD"
};
const uncommonAshenbarkLogs = {
    name: "Uncommon Ashenbark Logs",
    type: "raw",
    tier: 7.1,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Ashenbark%20Logs.png",
    marketName: "T7_WOOD_LEVEL1@1"
};
const rareAshenbarkLogs = {
    name: "Rare Ashenbark Logs",
    type: "raw",
    tier: 7.2,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Ashenbark%20Logs.png",
    marketName: "T7_WOOD_LEVEL2@2"
};
const exceptionalAshenbarkLogs = {
    name: "Exceptional Ashenbark Logs",
    type: "raw",
    tier: 7.3,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Ashenbark%20Logs.png",
    marketName: "T7_WOOD_LEVEL3@3"
};
const pristineAshenbarkLogs = {
    name: "Pristine Ashenbark Logs",
    type: "raw",
    tier: 7.4,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Ashenbark%20Logs.png",
    marketName: "T7_WOOD_LEVEL4@4"
};
  
const whitewoodLogs = {
    name: "Whitewood Logs",
    type: "raw",
    tier: 8,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Whitewood%20Logs.png",
    marketName: "T8_WOOD"
};
const uncommonWhitewoodLogs = {
    name: "Uncommon Whitewood Logs",
    type: "raw",
    tier: 8.1,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Whitewood%20Logs.png",
    marketName: "T8_WOOD_LEVEL1@1"
};
const rareWhitewoodLogs = {
    name: "Rare Whitewood Logs",
    type: "raw",
    tier: 8.2,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Whitewood%20Logs.png",
    marketName: "T8_WOOD_LEVEL2@2"
};
const exceptionalWhitewoodLogs = {
    name: "Exceptional Whitewood Logs",
    type: "raw",
    tier: 8.3,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Whitewood%20Logs.png",
    marketName: "T8_WOOD_LEVEL3@3"
};
const pristineWhitewoodLogs = {
    name: "Pristine Whitewood Logs",
    type: "raw",
    tier: 8.4,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Whitewood%20Logs.png",
    marketName: "T8_WOOD_LEVEL4@4"
};

export { roughLogs, birchLogs, chestnutLogs,
    pineLogs, uncommonPineLogs, rarePineLogs, exceptionalPineLogs, pristinePineLogs,
    cedarLogs, uncommonCedarLogs, rareCedarLogs, exceptionalCedarLogs, pristineCedarLogs,
    bloodoakLogs, uncommonBloodoakLogs, rareBloodoakLogs, exceptionalBloodoakLogs, pristineBloodoakLogs,
    ashenbarkLogs, uncommonAshenbarkLogs, rareAshenbarkLogs, exceptionalAshenbarkLogs, pristineAshenbarkLogs,
    whitewoodLogs, uncommonWhitewoodLogs, rareWhitewoodLogs, exceptionalWhitewoodLogs, pristineWhitewoodLogs };
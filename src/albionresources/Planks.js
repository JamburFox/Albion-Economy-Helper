import { roughLogs, birchLogs, chestnutLogs,
    pineLogs, uncommonPineLogs, rarePineLogs, exceptionalPineLogs, pristinePineLogs,
    cedarLogs, uncommonCedarLogs, rareCedarLogs, exceptionalCedarLogs, pristineCedarLogs,
    bloodoakLogs, uncommonBloodoakLogs, rareBloodoakLogs, exceptionalBloodoakLogs, pristineBloodoakLogs,
    ashenbarkLogs, uncommonAshenbarkLogs, rareAshenbarkLogs, exceptionalAshenbarkLogs, pristineAshenbarkLogs,
    whitewoodLogs, uncommonWhitewoodLogs, rareWhitewoodLogs, exceptionalWhitewoodLogs, pristineWhitewoodLogs } from './Wood'
//https://albionhub.com/items/T4_PLANKS

class Plank {
    constructor(name, tier, weight, imageUrl){
        this.name = name;
        this.tier = tier;
        this.weight = weight;
        this.imageUrl = imageUrl;
    }
}

const birchPlanks = {
    name: "Birch Planks",
    type: "refined",
    tier: 2,
    weight: 0.23,
    imageUrl: "https://render.albiononline.com/v1/item/Birch%20Planks.png",
    marketName: "T2_PLANKS",
    craft: {
        food: 0,
        resources: [{name: birchLogs.name, count: 1}]
    }
};

const chestnutPlanks = {
    name: "Chestnut Planks",
    type: "refined",
    tier: 3,
    weight: 0.34,
    imageUrl: "https://render.albiononline.com/v1/item/Chestnut%20Planks.png",
    marketName: "T3_PLANKS",
    craft: {
        food: 0.9,
        resources: [{name: chestnutLogs.name, count: 2}, {name: birchPlanks.name, count: 1}]
    }
};

const pinePlanks = {
    name: "Pine Planks",
    type: "refined",
    tier: 4,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Pine%20Planks.png",
    marketName: "T4_PLANKS",
    craft: {
        food: 1.8,
        resources: [{name: pineLogs.name, count: 2}, {name: chestnutPlanks.name, count: 1}]
    }
};
const uncommonPinePlanks = {
    name: "Uncommon Pine Planks",
    type: "refined",
    tier: 4.1,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Pine%20Planks.png",
    marketName: "T4_PLANKS_LEVEL1@1",
    craft: {
        food: 3.6,
        resources: [{name: uncommonPineLogs.name, count: 2}, {name: chestnutPlanks.name, count: 1}]
    }
};
const rarePinePlanks = {
    name: "Rare Pine Planks",
    type: "refined",
    tier: 4.2,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Pine%20Planks.png",
    marketName: "T4_PLANKS_LEVEL2@2",
    craft: {
        food: 7.2,
        resources: [{name: rarePineLogs.name, count: 2}, {name: chestnutPlanks.name, count: 1}]
    }
};
const exceptionalPinePlanks = {
    name: "Exceptional Pine Planks",
    type: "refined",
    tier: 4.3,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Pine%20Planks.png",
    marketName: "T4_PLANKS_LEVEL3@3",
    craft: {
        food: 14.4,
        resources: [{name: exceptionalPineLogs.name, count: 2}, {name: chestnutPlanks.name, count: 1}]
    }
};
const pristinePinePlanks = {
    name: "Pristine Pine Planks",
    type: "refined",
    tier: 4.4,
    weight: 0.51,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Pine%20Planks.png",
    marketName: "T4_PLANKS_LEVEL4@4",
    craft: {
        food: 28.8,
        resources: [{name: pristinePineLogs.name, count: 2}, {name: chestnutPlanks.name, count: 1}]
    }
};

const cedarPlanks = {
    name: "Cedar Planks",
    type: "refined",
    tier: 5,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Cedar%20Planks.png",
    marketName: "T5_PLANKS",
    craft: {
        food: 3.6,
        resources: [{name: cedarLogs.name, count: 3}, {name: pinePlanks.name, count: 1}]
    }
};
const uncommonCedarPlanks = {
    name: "Uncommon Cedar Planks",
    type: "refined",
    tier: 5.1,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Cedar%20Planks.png",
    marketName: "T5_PLANKS_LEVEL1@1",
    craft: {
        food: 7.2,
        resources: [{name: uncommonCedarLogs.name, count: 3}, {name: uncommonPinePlanks.name, count: 1}]
    }
};
const rareCedarPlanks = {
    name: "Rare Cedar Planks",
    type: "refined",
    tier: 5.2,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Cedar%20Planks.png",
    marketName: "T5_PLANKS_LEVEL2@2",
    craft: {
        food: 14.4,
        resources: [{name: rareCedarLogs.name, count: 3}, {name: rarePinePlanks.name, count: 1}]
    }
};
const exceptionalCedarPlanks = {
    name: "Exceptional Cedar Planks",
    type: "refined",
    tier: 5.3,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Cedar%20Planks.png",
    marketName: "T5_PLANKS_LEVEL3@3",
    craft: {
        food: 28.8,
        resources: [{name: exceptionalCedarLogs.name, count: 3}, {name: exceptionalPinePlanks.name, count: 1}]
    }
};
const pristineCedarPlanks = {
    name: "Pristine Cedar Planks",
    type: "refined",
    tier: 5.4,
    weight: 0.76,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Cedar%20Planks.png",
    marketName: "T5_PLANKS_LEVEL4@4",
    craft: {
        food: 57.6,
        resources: [{name: pristineCedarLogs.name, count: 3}, {name: pristinePinePlanks.name, count: 1}]
    }
};

const bloodoakPlanks = {
    name: "Bloodoak Planks",
    type: "refined",
    tier: 6,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Bloodoak%20Planks.png",
    marketName: "T6_PLANKS",
    craft: {
        food: 7.2,
        resources: [{name: bloodoakLogs.name, count: 4}, {name: cedarPlanks.name, count: 1}]
    }
};
const uncommonBloodoakPlanks = {
    name: "Uncommon Bloodoak Planks",
    type: "refined",
    tier: 6.1,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Bloodoak%20Planks.png",
    marketName: "T6_PLANKS_LEVEL1@1",
    craft: {
        food: 14.4,
        resources: [{name: uncommonBloodoakLogs.name, count: 4}, {name: uncommonCedarPlanks.name, count: 1}]
    }
};
const rareBloodoakPlanks = {
    name: "Rare Bloodoak Planks",
    type: "refined",
    tier: 6.2,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Bloodoak%20Planks.png",
    marketName: "T6_PLANKS_LEVEL2@2",
    craft: {
        food: 28.8,
        resources: [{name: rareBloodoakLogs.name, count: 4}, {name: rareCedarPlanks.name, count: 1}]
    }
};
const exceptionalBloodoakPlanks = {
    name: "Exceptional Bloodoak Planks",
    type: "refined",
    tier: 6.3,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Bloodoak%20Planks.png",
    marketName: "T6_PLANKS_LEVEL3@3",
    craft: {
        food: 57.6,
        resources: [{name: exceptionalBloodoakLogs.name, count: 4}, {name: exceptionalCedarPlanks.name, count: 1}]
    }
};
const pristineBloodoakPlanks = {
    name: "Pristine Bloodoak Planks",
    type: "refined",
    tier: 6.4,
    weight: 1.14,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Bloodoak%20Planks.png",
    marketName: "T6_PLANKS_LEVEL4@4",
    craft: {
        food: 115.2,
        resources: [{name: pristineBloodoakLogs.name, count: 4}, {name: pristineCedarPlanks.name, count: 1}]
    }
};

const ashenbarkPlanks = {
    name: "Ashenbark Planks",
    type: "refined",
    tier: 7,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Ashenbark%20Planks.png",
    marketName: "T7_PLANKS",
    craft: {
        food: 14.4,
        resources: [{name: ashenbarkLogs.name, count: 5}, {name: bloodoakPlanks.name, count: 1}]
    }
};
const uncommonAshenbarkPlanks = {
    name: "Uncommon Ashenbark Planks",
    type: "refined",
    tier: 7.1,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Ashenbark%20Planks.png",
    marketName: "T7_PLANKS_LEVEL1@1",
    craft: {
        food: 28.8,
        resources: [{name: uncommonAshenbarkLogs.name, count: 5}, {name: uncommonBloodoakPlanks.name, count: 1}]
    }
};
const rareAshenbarkPlanks = {
    name: "Rare Ashenbark Planks",
    type: "refined",
    tier: 7.2,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Ashenbark%20Planks.png",
    marketName: "T7_PLANKS_LEVEL2@2",
    craft: {
        food: 57.6,
        resources: [{name: rareAshenbarkLogs.name, count: 5}, {name: rareBloodoakPlanks.name, count: 1}]
    }
};
const exceptionalAshenbarkPlanks = {
    name: "Exceptional Ashenbark Planks",
    type: "refined",
    tier: 7.3,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Ashenbark%20Planks.png",
    marketName: "T7_PLANKS_LEVEL3@3",
    craft: {
        food: 115.2,
        resources: [{name: exceptionalAshenbarkLogs.name, count: 5}, {name: exceptionalBloodoakPlanks.name, count: 1}]
    }
};
const pristineAshenbarkPlanks = {
    name: "Pristine Ashenbark Planks",
    type: "refined",
    tier: 7.4,
    weight: 1.71,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Ashenbark%20Planks.png",
    marketName: "T7_PLANKS_LEVEL4@4",
    craft: {
        food: 230.4,
        resources: [{name: pristineAshenbarkLogs.name, count: 5}, {name: pristineBloodoakPlanks.name, count: 1}]
    }
};

const whitewoodPlanks = {
    name: "Whitewood Planks",
    type: "refined",
    tier: 8,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Whitewood%20Planks.png",
    marketName: "T8_PLANKS",
    craft: {
        food: 28.8,
        resources: [{name: whitewoodLogs.name, count: 5}, {name: ashenbarkPlanks.name, count: 1}]
    }
};
const uncommonWhitewoodPlanks = {
    name: "Uncommon Whitewood Planks",
    type: "refined",
    tier: 8.1,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Uncommon%20Whitewood%20Planks.png",
    marketName: "T8_PLANKS_LEVEL1@1",
    craft: {
        food: 57.6,
        resources: [{name: uncommonWhitewoodLogs.name, count: 5}, {name: uncommonAshenbarkPlanks.name, count: 1}]
    }
};
const rareWhitewoodPlanks = {
    name: "Rare Whitewood Planks",
    type: "refined",
    tier: 8.2,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Rare%20Whitewood%20Planks.png",
    marketName: "T8_PLANKS_LEVEL2@2",
    craft: {
        food: 115.2,
        resources: [{name: rareWhitewoodLogs.name, count: 5}, {name: rareAshenbarkPlanks.name, count: 1}]
    }
};
const exceptionalWhitewoodPlanks = {
    name: "Exceptional Whitewood Planks",
    type: "refined",
    tier: 8.3,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Exceptional%20Whitewood%20Planks.png",
    marketName: "T8_PLANKS_LEVEL3@3",
    craft: {
        food: 230.4,
        resources: [{name: exceptionalWhitewoodLogs.name, count: 5}, {name: exceptionalAshenbarkPlanks.name, count: 1}]
    }
};
const pristineWhitewoodPlanks = {
    name: "Pristine Whitewood Planks",
    type: "refined",
    tier: 8.4,
    weight: 2.56,
    imageUrl: "https://render.albiononline.com/v1/item/Pristine%20Whitewood%20Planks.png",
    marketName: "T8_PLANKS_LEVEL4@4",
    craft: {
        food: 460.8,
        resources: [{name: pristineWhitewoodLogs.name, count: 5}, {name: pristineAshenbarkPlanks.name, count: 1}]
    }
};

const plankResources = [birchPlanks, chestnutPlanks,
    pinePlanks, uncommonPinePlanks, rarePinePlanks, exceptionalPinePlanks, pristinePinePlanks,
    cedarPlanks, uncommonCedarPlanks, rareCedarPlanks, exceptionalCedarPlanks, pristineCedarPlanks,
    bloodoakPlanks, uncommonBloodoakPlanks, rareBloodoakPlanks, exceptionalBloodoakPlanks, pristineBloodoakPlanks,
    ashenbarkPlanks, uncommonAshenbarkPlanks, rareAshenbarkPlanks, exceptionalAshenbarkPlanks, pristineAshenbarkPlanks,
    whitewoodPlanks, uncommonWhitewoodPlanks, rareWhitewoodPlanks, exceptionalWhitewoodPlanks, pristineWhitewoodPlanks];
export { plankResources };
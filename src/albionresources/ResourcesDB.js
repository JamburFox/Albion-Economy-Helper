import { roughLogs, birchLogs, chestnutLogs,
  pineLogs, uncommonPineLogs, rarePineLogs, exceptionalPineLogs, pristinePineLogs,
  cedarLogs, uncommonCedarLogs, rareCedarLogs, exceptionalCedarLogs, pristineCedarLogs,
  bloodoakLogs, uncommonBloodoakLogs, rareBloodoakLogs, exceptionalBloodoakLogs, pristineBloodoakLogs,
  ashenbarkLogs, uncommonAshenbarkLogs, rareAshenbarkLogs, exceptionalAshenbarkLogs, pristineAshenbarkLogs,
  whitewoodLogs, uncommonWhitewoodLogs, rareWhitewoodLogs, exceptionalWhitewoodLogs, pristineWhitewoodLogs } from './Wood'
import { plankResources } from './Planks';

const combineArraysToDict = (arrays) => {
    const result = new Map();
    
    arrays.forEach((array) => {
      array.forEach((resource) => {
        result.set(resource.name, resource);
      });
    });
    
    return result;
};
  
const woodResources = [roughLogs, birchLogs, chestnutLogs,
  pineLogs, uncommonPineLogs, rarePineLogs, exceptionalPineLogs, pristinePineLogs,
  cedarLogs, uncommonCedarLogs, rareCedarLogs, exceptionalCedarLogs, pristineCedarLogs,
  bloodoakLogs, uncommonBloodoakLogs, rareBloodoakLogs, exceptionalBloodoakLogs, pristineBloodoakLogs,
  ashenbarkLogs, uncommonAshenbarkLogs, rareAshenbarkLogs, exceptionalAshenbarkLogs, pristineAshenbarkLogs,
  whitewoodLogs, uncommonWhitewoodLogs, rareWhitewoodLogs, exceptionalWhitewoodLogs, pristineWhitewoodLogs];
const resourcesDict = combineArraysToDict([woodResources, plankResources]);

export { resourcesDict };
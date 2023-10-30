

class AlbionItemData {
    getPrices = async (itemName) => {
        try {
            console.log(`Fetching Prices for ${itemName}`);
            const response = await fetch(`https://east.albion-online-data.com/api/v2/stats/prices/${itemName}`, {
                method: 'get'
            });

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();

            let prices = [];
            for(let i = 0; i < result.length; i++){
                let city = result[i].city;
                const cities = ["Martlock", "Bridgewatch", "Lymhurst", "Fort Sterling", "Thetford", "Caerleon"];
                if (cities.includes(city)){
                    prices.push(result[i]);
                }
            }
            return prices;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    getAllPrices = async (itemNames) => {
        try {
            console.log(`Fetching Prices for ${itemNames.join(',')}`);
            const response = await fetch(`https://east.albion-online-data.com/api/v2/stats/prices/${itemNames.join(',')}`, {
                method: 'get'
            });

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();

            let prices = [];
            for(let i = 0; i < result.length; i++){
                let city = result[i].city;
                const cities = ["Martlock", "Bridgewatch", "Lymhurst", "Fort Sterling", "Thetford", "Caerleon"];
                if (cities.includes(city)){
                    prices.push(result[i]);
                }
            }
            return prices;
        } catch (err) {
            console.error(err);
            return null;
        } 
    }

    filterItemPrices = (itemName, allPrices) => {
        let prices = [];
        for(let i = 0; i < allPrices.length; i++){
            if (allPrices[i].item_id === itemName){
                prices.push(allPrices[i]);
            }
        }
        return prices;
    }

}

export default AlbionItemData;
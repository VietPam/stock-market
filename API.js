let api_key = 'f7b20df80cf14f4a9817676ff26d1e98'
let url = 'https://api.twelvedata.com/quote'

export default function API(code) {
    try {
        const query = `?symbol=${code}&apikey=${api_key}`
        const response = fetch(url + query).then(
            function (res) {
                // Parse the JSON response
                return res.json();
            }
        )
            .then(function (data) {
                const stock = {
                    stockIndex: data.close,
                    stockChangeRaw: data.change,
                    stockChangePercent: data.percent_change
                };
                return stock;
            })
        return response;
    } catch (error) {
        console.error(error);
    }
}
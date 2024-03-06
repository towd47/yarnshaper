import fetch from 'node-fetch'

const api_key = process.env.SHEETS_API_KEY;
const sheet_id = process.env.SHEETS_ID;
    
exports.handler = async function(event, context) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values/Events?alt=json&key=${api_key}`
    // const url = `https://opensheet.elk.sh/${sheet_id}/Events`
    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json"
            }
        });
        const jsonResponse = await response.json()
        return {
            statusCode: 200,
            body: JSON.stringify(jsonResponse)
        }
    } catch (error) {
        return { statusCode: 422, body: error.stack };
    }
}
exports.handler = async (event) => {
  const headers = { 'Access-Control-Allow-Origin': '*' };
  try {
    const response = await fetch(
      'https://api.football-data.org/v4/competitions/2000/matches',
      { headers: { 'X-Auth-Token': process.env.FOOTBALL_API_KEY } }
    );
    const text = await response.text();
    return { statusCode: 200, headers: { ...headers, 'Content-Type': 'application/json' }, body: text };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};

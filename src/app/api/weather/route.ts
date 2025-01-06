const API_URI = 'http://www.7timer.info/bin/api.pl'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (!lat || !lon) {
    return Response.json({ error: 'Missing lat or lon' }, { status: 400 });
  }

  try {
    const response = await fetch(`${API_URI}?${searchParams.toString()}&product=civil&output=json`);
    const data = await response.json();

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

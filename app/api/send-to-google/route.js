export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyvLR7p99q6P47Zrx_NcQLS189WUizxr5I7LEsxMFkVjYUpQReYiOYybLQy3_toDExW/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

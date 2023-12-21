export async function GET() {
  return Response.json({
    msg: "Hola mundo",
    data: {
      name: "Mike",
    },
  });
}

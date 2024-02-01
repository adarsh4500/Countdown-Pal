export async function GET(request, { params }) {
  const EventID = Number(params.id);
  const testEvents = [
    {
      id: 1,
      name: "Tech Conference",
      time: "2024-02-01T10:00",
      type: "public",
      desc: "Join us for the latest in technology trends and innovations.",
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tech-conference-motion-poster-design-template-c9069c85b38025df6afa89df4647d346_screen.jpg?ts=1568457742",
    },
    {
      id: 2,
      name: "Family Picnic",
      time: "2024-03-15T14:30",
      type: "personal",
      desc: "A fun-filled day with family and friends at the park.",
      img: "https://www.aexplorers.com/wp-content/uploads/elementor/thumbs/familia-feliz-tomando-cafe-da-manha-em-um-parque-q3phxpujtjk9ux3u33hhns5adyqzly613ee8h73vag.jpg",
    },
    {
      id: 3,
      name: "Product Launch",
      time: "2024-04-10T18:00",
      type: "public",
      desc: "Be the first to witness the unveiling of our latest product.",
      img: "https://myexhibiteam.com/wp-content/uploads/2018/04/launch.png",
    },
  ];
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const result = testEvents.filter((event) => {
    return event.id === EventID;
  });
  if (result.length === 0) return Response.json({ error: "event not found" });
  return Response.json(result[0]);
}

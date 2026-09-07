const SERVICES = [
  {
    id: 1,
    title: "Go Digital Get eSIM",
    image: "/images/Promotion1.png",
    link: "#esim",
  },
  {
    id: 2,
    title: "Gift Card? Just a Click Away",
    image: "/images/Promotion2.png",
    link: "#gift-cards",
  },
  {
    id: 3,
    title: "Turn on Smart Living",
    image: "/images/Promotion3.png",
    link: "#smart-living",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SERVICES.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="group block relative overflow-hidden rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 bg-gray-100"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover block rounded-2xl group-hover:scale-[1.02] transition-transform duration-300"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

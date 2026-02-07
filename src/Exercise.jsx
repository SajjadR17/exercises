function CardRender() {
  const list = [
    { id: 1, title: "Laptop" },
    { id: 2, title: "Phone" },
  ];

  return (
    <>
      {list.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </>
  );
}

export default CardRender;

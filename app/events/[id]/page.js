import Timer from "@/app/components/timer";

const Page = async (props) => {
  const id = props.params.id;
  const uri = `http://localhost:3000/api/geteventdetails/${id}`;
  const response = await fetch(uri, {
    cache: "no-store",
  });
  const responseData = await response.json();
  const backgroundImageStyle = {
    backgroundImage: `url(${responseData.img})`,
    backgroundSize: "100% 100%",
  };

  return (
    <div
      className=" flex flex-col h-4/5 w-4/5 mx-auto my-auto items-center justify-center text-center border-2 "
      style={backgroundImageStyle}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-center bg-black bg-opacity-60">
        <h1 className=" text-6xl my-4">{responseData.name}</h1>
        <Timer eventDate={responseData.time} />
        <div className=" text-sm my-8 text-left mx-10">{responseData.desc}</div>
      </div>
    </div>
  );
};

export default Page;

import { Contactus } from "./Contactus";

export const Home = () => {
  return (
    <div className="container w-screen">
      {/* intro */}
      <div className=" flex justify-center">
        <div className="flex flex-row p-2">
          <div className="p-2">image</div>
          <div className="p-2">
            <div></div>
            <div>Welcome to Pixiez!</div>
            <div className="flex justify-center items-center text-wrap text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              magnam reiciendis veniam quos incidunt. Rerum, asperiores. Quas
              rem sed eveniet ducimus, tempora quis ab non eligendi voluptatibus
              commodi, fuga porro.
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <Contactus />
    </div>
  );
};

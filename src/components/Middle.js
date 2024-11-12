import flower_png from '../Asset/pngwing 6.png';
import flower_png_2 from '../Asset/pngwing 7.png'
import flower_png_3 from '../Asset/pngwing 5.png'
function Flower({ cmp_color, img, name }) {
  return (
    <div className='flex flex-col items-center'>
    <div
    style={{
        backgroundColor: cmp_color,
      }}
      className=" flex justify-center items-end  w-[250px] h-[325px] m-5 rounded-tl-[50%] rounded-tr-[50%]"
    >
      <img src={img} className="w-[200px] h-auto" alt="Flower" />
    </div>
    <p>{name}</p>
    </div>
  );
}

function Middle() {
  return (
    <div className="grid grid-cols-1 min-w-[400px] sm:grid-cols-2 md:grid-cols-3 max-w-[1600px] w-full mx-auto justify-center">
      <Flower cmp_color="rgba(167, 33, 98, 0.15)" img={flower_png} name="Pink Flower Tree" />
      <Flower cmp_color="rgba(5, 151, 160, 0.15)" img={flower_png_2} name="Green Flower Tree" />
      <Flower cmp_color="rgba(71, 125, 17, 0.15)" img={flower_png_3} name="Grey Flower"/>
    </div>
  );
}

export default Middle;

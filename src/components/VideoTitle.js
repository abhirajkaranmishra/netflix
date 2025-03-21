
const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36 px-12 w-screen aspect-video 'px-24' absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
      <button className="bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">▶️Play</button>
      <button className="bg-gray-500 mx-2 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
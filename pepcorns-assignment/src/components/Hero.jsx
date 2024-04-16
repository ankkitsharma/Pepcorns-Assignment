import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:items-center">
      <div className="main flex flex-col gap-2 mt-10 ml-4 md:w-[700px]">
        <div className="text-4xl font-bold flex items-center gap-2">
          <img
            src="https://uploads.republic.com/p/offerings/logos/small/000/003/828/3828-1699371072-c871491e2c437a068520bdde18d94ca81a9e365a.png"
            className="w-8 h-8"
          />
          <h1>Supersapiens</h1>
        </div>
        <div className="text-gray-600">
          Glucose: The cornerstone of metabolic health
        </div>
        <ul className="flex gap-2 flex-wrap text-gray-600 text-xs">
          <li className="bg-gray-200 p-1">SAAS</li>
          <li className="bg-teal-100  p-1">WOMEN FOUNDERS</li>
          <li className="bg-gray-200 p-1">WELLBEING & LONGEVITY</li>
          <li className="bg-gray-200 p-1">FITNESS</li>
          <li className="bg-gray-200 p-1">HEATHTECH</li>
          <li className="bg-gray-200 p-1">BIOTECHNOLOGY</li>
          <li className="bg-gray-200 p-1">WEARABLES</li>
        </ul>
        <div className="carousel rounded-lg mt-6 mr-6">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/020/082/20082-1701507571-b947f36da5fec894b0fff7ab0842cc0bf6b73ac4.jpg"
              className="w-full"
            />
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-outline">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-outline">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/022/062/22062-1705697384-7af29616af148bbbdf66d9434f7557e9e0a25308.png"
              className="w-full"
            />
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-outline">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle btn-outline">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/022/063/22063-1705697414-7f17210e54c0859bb1e5a58843c752ec91cd4fad.png"
              className="w-full"
            />
            <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-outline">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle btn-outline">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-4">
          <a href="#slide1" className="bg-gray-200 h-3 w-3 rounded-xl"></a>
          <a href="#slide2" className="bg-gray-200 h-3 w-3 rounded-xl"></a>
          <a href="#slide3" className="bg-gray-200 h-3 w-3 rounded-xl"></a>
        </div>
      </div>
      <div className="extra">
        <div className="md:h-[300px] mt-10 mx-4 border-gray-200 border rounded-md px-3 py-5 flex flex-col gap-2">
          <div className="text-gray-600 font-bold">
            Supersapiens has withdrawn its campaign
          </div>
          <div className="text-gray-600">
            All investments have been refunded.
          </div>
          <hr></hr>
          <div>
            <a href="#" className="text-blue-600">
              Check out other startups
            </a>
          </div>
        </div>
        <div className="z-10 md:z-0 md:border-0 fixed md:static bottom-0 flex flex-col items-center w-screen md:w-full border-t-2 bg-white py-2">
          <div className="bg-blue-300 hover:bg-blue-700 text-white p-2 rounded-md w-5/6 md:w-full flex items-center justify-center gap-1 py-3 ">
            <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/lock/default/24px.svg"></img>
            Invest in Supersapiens
          </div>
          <div className="md:hidden flex items-center justify-center gap-1 py-2">
            <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/lock/default/24px.svg"></img>{" "}
            Campaign closed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

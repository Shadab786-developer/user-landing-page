import React, { useState } from "react";

function Profile() {
  const [image, setImage] = useState(
    "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full h-screen mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col justify-start items-center pt-[10%]">
      <div className="p-6 border-dashed border-b-3 border-gray-400">
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={image}
              alt="Profile"
              className="w-30 h-30 rounded-full mr-4"
            />
            <label
              htmlFor="upload-image"
              className="absolute bottom-0 right-4 bg-blue-800 p-2 rounded-full cursor-pointer hover:bg-blue-950 transition-colors mb-6 mr-2"
            >
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-4 w-4 text-white "
                fill="#ffffff"
              >
                <path d="M488 128H360l-35.1-68.9C317.1 42.1 304.3 32 288 32h-64c-16.3 0-29.1 10.1-36.9 27.1L152 128H24C10.7 128 0 138.7 0 152v288c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24zM112 224c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm352 160H48V288c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v96zM256 320c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zm0-128c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
                <path d="M256 352c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-160c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" />
              </svg>
            </label>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-800">Marry Doe</h2>
            <p className="text-sm text-gray-500 font-semibold">
              Marry@Gmail.Com
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed font-semibold">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profile;

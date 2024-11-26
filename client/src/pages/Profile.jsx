import React, { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {

  const user = useSelector((state) => state.user.userData);

  const [userFiles, setUserFiles] = useState([]);

  const userId = user._id;

  useEffect(() => {
    const getUserFiles = async () => {
      const result = await axios.get(`http://localhost:3000/notes/getFiles/${userId}`);
      console.log(result.data);
      setUserFiles(result.data.data);
    };

    getUserFiles();
  }, [userId]);

  const numberofUploads = userFiles.length;
  const numberofFiles = userFiles.reduce((count, file) => count + 1, 0);

  return (
    <div className="lg:h-heightWithoutNavbar flex flex-col items-center justify-center border lg:flex-row text-white">
      <div className="flex w-full flex-col items-center justify-center border-[3px]  py-4 lg:h-full lg:w-[40%]">
        <div className="grid h-[200px] w-[200px] place-content-center overflow-hidden rounded-full bg-gray-400 text-2xl font-black">
          {/* 200 x 200 */}
          <img src={user.profileImage} alt="userprofile" className="" />
        </div>
        <div className="">
          <div className=" my-2 flex flex-col items-center justify-center ">
            <h2 className="text-3xl font-black">
              <span>{user.firstName}</span> <span>{user.lastName}</span>
            </h2>
            <p className="mt-1 text-center text-gray-500 text-xl">{`@${user.userName}`}</p>
            <p className="mt-1 text-center text-xl">
              {user.userBio}
            </p>
          </div>
        </div>
        {/* counts */}
        <div className="flex items-center justify-center gap-4 px-10 py-2 border-2 rounded-2xl mt-5">
          <div className="grid h-[80px] w-[100px] place-content-center">
            <p className="text-center text-xl whitespace-nowrap font-bold">
              No. of Uploads :
            </p>
            <p className="text-center text-3xl font-black">{numberofUploads}</p>
          </div>
          <span className="h-[90px] w-[2px] bg-gray-400 mx-5" />
          <div className="grid h-[80px] w-[100px] place-content-center">
            <p className="text-center text-xl font-bold whitespace-nowrap">No. of Files :</p>
            <p className="text-center text-3xl font-black">{numberofFiles}</p>
          </div>
        </div>
      </div>
      <div className="h-auto w-full border-[3px] p-5 lg:h-full lg:w-[60%]">
        <h1 className="mb-3 text-xl font-black">My Documents :</h1>
        <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3">
          {userFiles.map((file) => (
            <a
              href={`http://localhost:3000/files/${file.files}`}
              key={file._id}
              className="mb-3 flex h-[45px] min-w-fit items-center justify-between gap-3 rounded-xl border border-white px-4 text-xl"
              target="_blank"
            >
              <div className="flex items-center justify-center gap-2">
              <FaFilePdf/>
              <p className="font-semibold whitespace-nowrap -mt-1"> {file.fileName}</p>
              </div>
                <FaArrowRightToBracket/>
            </a>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Profile;

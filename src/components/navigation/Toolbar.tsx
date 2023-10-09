"use client";
import { useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { RiNotification2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import profile from "../../assets/profile.jpg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../../hoc/CustomAxios";

const Toolbar = () => {
  const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false);
  const [isInputOpen, setInputOpen] = useState(false);
  // const [visible, setVisible] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleInput = () => {
    setInputOpen(!isInputOpen);
    if (inputRef.current) {
      if (isInputOpen) {
        inputRef.current.blur();
      } else {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className="bg-white h-20 flex items-center   shadow-lg">
      <div className="w-11/12 mx-auto flex justify-between ">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            className={`${
              isInputOpen
                ? "w-60  transition-all"
                : "w-0  transition-all opacity-0"
            } transition-all duration-500 delay-300 outline-none border rounded py-2 px-4 shadow-md`}
            placeholder="Search"
          />
          <button onClick={handleInput}>
            {isInputOpen ? (
              <RxCross2 className=" text-gray-700 text-xl" />
            ) : (
              <AiOutlineSearch className=" text-gray-700 text-xl" />
            )}
          </button>
        </div>

        <div className="flex justify-center items-center gap-12 ">
          <div className="flex gap-8  relative">
            <button className="">
              {" "}
              <RiNotification2Line className="text-gray-700 text-xl font-bold " />
              <div
                className={`bg-red-300 h-3 w-3  font-semibold text-xs rounded-full flex items-center justify-center text-white absolute -top-2 -right-3 p-2`}
              >
                5
              </div>
            </button>
          </div>
          <div className="flex gap-8  relative">
            <button>
              {" "}
              <BiMessageRounded className="text-gray-700 text-xl font-bold" />
              <div
                className={`bg-green-300 h-3 w-3  font-semibold text-xs rounded-full flex items-center justify-center text-white absolute -top-2 -right-3 p-2`}
              >
                5
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 relative">
            <img
              src={profile}
              alt="profile"
              className="w-10 h-10 rounded-full border-white"
            />
            <div
              onClick={() => setProfileIsOpen(!profileIsOpen)}
              className="flex items-center justify-center gap-2 cursor-pointer"
            >
              <h1 className="font-semibold">John Doe</h1>
              <MdKeyboardArrowDown className="text-gray-500" />
            </div>
            {profileIsOpen && (
              <div className="absolute bg-white top-10 right-2 shadow-xl border-gray-400 flex flex-col gap-2 z-50 py-2  cursor-pointer my-2 w-48">
                <div className="hover:bg-gray-200 hover:transition-all hover:duration-700 delay-200 ease-in-out mt-2 ">
                  <h1 className="flex gap-2 items-center p-2   text-sm font-semibold">
                    <FiSettings />
                    Settings
                  </h1>
                </div>
                <div className="hover:bg-gray-200 hover:transition-all hover:duration-700 delay-200 ease-in-out ">
                  <h1 className="flex gap-2 items-center p-2 text-sm font-semibold">
                    <GoPerson />
                    Profile
                  </h1>
                </div>

                <div className="hover:bg-gray-200 hover:transition-all hover:duration-700 delay-200 ease-in-out ">
                  <button
                    className="flex gap-2 items-center p-2 text-sm font-semibold"
                    onClick={() => {
                      try {
                        axios
                          .get(`/auth/logout`, { withCredentials: true })
                          .then((res) => {
                            console.log(res);
                            // localStorage.removeItem("token");
                            Cookies.remove("token");
                            navigate("/login", {
                              replace: true, //replace with refresh the page
                            });
                          });
                      } catch (err) {
                        console.log(err);
                      }
                      // localStorage.removeItem("token");
                      // Cookies.remove("token");
                      // navigate("/login", {
                      //   replace: true, //replace with refresh the page
                      // });
                    }}
                  >
                    <AiOutlineLogout />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

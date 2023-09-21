
"use client"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React,{useState} from "react";


interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
}


function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  type,
}: Props) {
  
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };

  return (
    <div className='flex w-full flex-col justify-start'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='relative h-20 w-20 object-cover'>
            <a  className="cursor-pointer" target="_blank" >

            <Image
              src={imgUrl}
              alt='logo'
              fill
              className='rounded-full object-cover shadow-2xl'
              
              onClick={handleClickOpen}
              
              />   
              </a>
          </div>
             <div>
            {popup ? (
              <div className="main">
            <div 
                 className="sm:bg-[url('../public/assets/BGCO.jpg')] bg-[url('../public/assets/MBBG.jpg')] 
                 sm:w-[1000px] w-screen h-full sm:h-screen sm:absolute absolute sm:right-[-20px] z-40 right-[5px] mt-[-79px] no-repeat bg-cover bg-center backdrop-blur-[2px]   ">
                <div className="-mt-10  sm:w-[1000px] w-screen h-full sm:h-full backdrop-blur-[2px]  z-0 ">
                   <div className="absolute  sm:right-[286px] right-[-655px]  mt-20 sm:mt-20 py-10 p-5 rounded-2xl sm:w-[400px] w-[1000px]">
                     <div className="absolute w- h-[1000px] sm:w-screen sm:h-screen backdrop-blur-[2px] ">
                        <img
                          src={imgUrl}
                          alt="project_image"
                          className="sm:relative relative righ-[1px] sm:h-[400px] sm:w-[400px] h-[300px] w-[316px] -mt-[-20px] object-cover rounded-full "
                        />
                      </div>
                      <div className="text-[30px] absolute left-[120px] top-[-60px] ">
   
                       <a
                          onClick={closePopup}
                          className=" flex items-center rounded-full absolute left-[186px]  top-[66px] sm:left-[310px]  sm:top-[50px] px-2 py-0.9 outline-[#055dd0] border-2 cursor-pointer  text-white hover:text-[#055dd0]  text-[15px]  gap-3"
                        >X
                       
                        </a>
                      </div>
                      <div className="mt-5"></div>
                    </div>
                  </div>
                </div>
                </div>
            ) : (
              ""
            )}
          </div>
         
          <div className='flex-1'>
            <h2 className='text-left text-heading3-bold text-light-1'>
              {name}
            </h2>
            <p className='text-base-medium text-gray-1'>@{username}</p>
          </div>
        </div>
        {accountId === authUserId && type !== "Community" && (
          <Link href='/profile/edit'>
            <div className='flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2'>
              <Image
                src='/assets/edit.svg'
                alt='logout'
                width={16}
                height={16}
              />

              <p className='text-light-2 max-sm:hidden'>Edit</p>
            </div>
          </Link>
        )}
      </div>

      <p className='mt-6 max-w-lg text-base-regular text-light-2'>{bio}</p>

      <div className='mt-12 h-0.5 w-full bg-dark-3' />
    </div>
  );
}

export default ProfileHeader;

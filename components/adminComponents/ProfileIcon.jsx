import Image from "next/image";

const ProfileIcon = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
        <Image
          src={`https://avatars.dicebear.com/api/initials/${encodeURIComponent("Admin")}.svg?background=%23ffffff&color=%23000000&size=40`}
          alt="Profile"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileIcon;

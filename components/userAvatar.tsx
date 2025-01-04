import Image from "next/image";

export default function UserAvatar({ image }: { image: string }) {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <Image
        className="object-cover w-full h-full"
        alt="GitHub Logo"
        src={image}
        width={100}
        height={100}
      />
    </div>
  );
}

import type { Author } from "@/sanity.types";

interface AvatarProps {
  name: Author['name']
  src: string
}

export default function Avatar({ name, src }: AvatarProps) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <img
          src={src}
          className="h-full rounded-full object-cover"
          alt={name || 'Author'}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}

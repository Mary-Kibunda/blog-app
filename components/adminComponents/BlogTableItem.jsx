import Image from "next/image";

export const BlogTableItem = ({
  authorImage,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const BlogDate = new Date(date);
  return (
    <tr className="bg-white py-4 border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap sm:flex items-center gap-3"
      >
        <Image
          src={authorImage ? authorImage : "/assets/woman.jpg"}
          alt="Author image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p>{author ? author : "No author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "No Title"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td
        onClick={() => {
          if (typeof deleteBlog === "function") {
            deleteBlog(mongoId);
          } else {
            console.warn("deleteBlog prop is missing or not a function", mongoId);
          }
        }}
        className="px-6 py-4 cursor-pointer "
      >
        X
      </td>
    </tr>
  );
};

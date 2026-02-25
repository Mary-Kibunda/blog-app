import BlogModel from "../../../lib/models/BlogModel";
import ConnectDB from "../../../lib/config/db";
import { NextResponse } from "next/server";
import cloudinary from "../../../lib/config/cloudinary";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

//api end point to get all posts/blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blogDoc = await BlogModel.findById(blogId);
    if (!blogDoc) return NextResponse.json({ blog: null });
    const blog = blogDoc.toObject ? blogDoc.toObject() : blogDoc;
    return NextResponse.json({ blog });
  }

  const blogDocs = await BlogModel.find({});
  const blogs = blogDocs.map((b) => {
    return b.toObject ? b.toObject() : b;
  });

  return NextResponse.json({ blogs });
}

//api endpoint for uploading blogs
export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "blog-app",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      );
      uploadStream.end(imageBuffer);
    });

    const blogData = {
      title: `${formData.get("title")}`,
      content: `${formData.get("content")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: result.secure_url,
      authorImage: `${formData.get("authorImage")}`,
    };

    await BlogModel.create(blogData);
    return NextResponse.json({
      success: true,
      msg: "Blog Created Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: error.message },
      { status: 500 },
    );
  }
}

//creating api endpoint for deleting blogs
export async function DELETE(request) {
  try {
    const id = await request.nextUrl.searchParams.get("id");
    const blog = await BlogModel.findById(id);

    if (blog && blog.image) {
      // Extract public_id from Cloudinary URL
      // URL format: https://res.cloudinary.com/cloud_name/image/upload/v123/blog-app/public_id.png
      const urlParts = blog.image.split("/");
      const filename = urlParts[urlParts.length - 1];
      const publicId = `blog-app/${filename.split(".")[0]}`;

      // Delete from Cloudinary
      await cloudinary.uploader.destroy(publicId);
    }

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      msg: "Blog Deleted Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: error.message },
      { status: 500 },
    );
  }
}

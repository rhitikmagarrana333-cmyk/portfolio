import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({
  privateKey: "private_aeXTbzt99nA/lbTZstchFQfl1jU=",
});

const fileupload = async (file) => {
  const result = await imagekit.files.upload({
    file: file,
    fileName: `product-${Date.now()}`,
    folder: "/ecommerce",
  });

  return result;
};

export default {
  fileupload,
};



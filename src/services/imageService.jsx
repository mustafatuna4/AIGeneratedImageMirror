import axios from "axios";
const baseUrl = "https://aigeneratedimagemirror.fly.dev/api/images";
const getImage = async (prompt) => {
  const response = await axios.get(baseUrl, {
    params: {
      prompt: prompt,
    },
  });
  return response.data;
};
const postImage = async (imageLink, mode) => {
  const response = await axios.post(baseUrl, {
    link: imageLink,
    searchMode: mode,
  });
  return response.data;
};

export default { getImage, postImage };

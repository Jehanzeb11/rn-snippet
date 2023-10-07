
const formData = new FormData();

formData.append('imagesList', null)

image.forEach((file) => {
  formData.append('postFile', {
    name: file?.path,
    size: file?.size,
    type: file?.mime,
    uri: file?.path
  });
});
  let res = await fetch(
   "url",
    {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  let responseJson = await res.json();
  console.log("response ======= ",responseJson)


  console.log(formData)

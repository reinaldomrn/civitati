export const prepareDataSend = (data) => {
  console.log(data);
  const formData = new FormData();

  // const lessonProduct = data.lessonProducts.map((item) => item.id);
  const skills = data.skills.map((data) => {
    return {
      id: data.id,
      add: data.new ?? false,
    };
  });
  const lessons = data.lessonProducts.map((data) => {
    return {
      id: data.id,
      add: data.new ?? false,
    };
  });

  let imgCoach = [];

  for (let item of data.coach_images) {
    imgCoach = [...imgCoach, item.id];
  }
  // console.log(data.coach_images[0].new);
  formData.append('lessonProducts', JSON.stringify(lessons));
  formData.append('skills', JSON.stringify(skills));
  formData.append('category_id', data.category_id);
  formData.append('coach_available_id', data.coach_available_id);
  formData.append('coach_images', imgCoach);
  formData.append('description', data.description);
  formData.append('email', data.email);
  formData.append('gender_id', data.gender_id);
  formData.append('link_video', data.link_video);
  formData.append('location_id', data.location_id);
  formData.append('name', data.name);
  formData.append('phone', data.phone);
  formData.append('profile_status_id', data.profile_status_id);
  // formData.append('rcp_fileDB', data.rcp_fileDB);
  formData.append('ssn', data.ssn);
  formData.append('status_id', data.status_id);
  // formData.append('w9_fileDB', data.w9_fileDB);
  formData.append('year_experience', data.year_experience);
  formData.append(
    'routeImgProfileExist',
    !data.coach_images[0] ? 0 : !data.coach_images[0].new ? data.coach_images[0].url : 0,
  );

  if (data.rcp_file != '') {
    formData.append('rcp_file', data.rcp_file);
  }
  if (data.w9_file != '') {
    formData.append('w9_file', data.w9_file);
  }
  if (Object.entries(data.coach_images_new).length > 0) {
    for (const file of data.coach_images_new) {
      formData.append('coach_images_new', file);
    }
  }

  return formData;
};

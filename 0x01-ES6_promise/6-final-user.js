import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const SignUpUserPromise = signUpUser(firstName, lastName);
  const UploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([SignUpUserPromise, UploadPhotoPromise]).then((values) => {
    const resulta = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        resulta.push({ status: element.status, value: element.value });
      } else {
        resulta.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return resulta;
  });
}

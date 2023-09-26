export const UOA_BASE_API = "https://apis.auckland.ac.nz/courses/v3";
export const UOA_OAUTH_API = `${UOA_BASE_API}/oauth2/token`;
export const UOA_SUBJECTS_API = `${UOA_BASE_API}/subjects`;
export const UOA_ENGINEERING_API = `${UOA_BASE_API}/courses?acadGroup=1600&from=0&mainProgramRelated=true&size=2000&year=2023`;

export const getOAuthToken = async (): Promise<string> => {
  const formData = new FormData();

  formData.append("client_id", process.env.UOA_CLIENT_ID ?? "");
  formData.append("client_secret", process.env.UOA_CLIENT_SECRET ?? "");
  formData.append("grant_type", "client_credentials");
  formData.append("scope", "https://apis.auckland.ac.nz/course-general-read");

  const oauth_response = await fetch(UOA_OAUTH_API, {
    method: "POST",
    body: formData,
  });

  const oauth_payload = await oauth_response.json();

  return oauth_payload.access_token;
};

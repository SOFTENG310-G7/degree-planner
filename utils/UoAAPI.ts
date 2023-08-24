export const UOA_BASE_API = "https://apis.auckland.ac.nz/courses/v3";
export const UOA_OAUTH_API = `${UOA_BASE_API}/oauth2/token`;
export const UOA_SUBJECTS_API = `${UOA_BASE_API}/subjects`;

export const getOAuthToken = async () : Promise<string> => {
  const formData = new FormData();

  formData.append("client_id", process.env.UOA_CLIENT_ID ?? "");
  formData.append("client_secret", process.env.UOA_CLIENT_SECRET ?? "");
  formData.append("grant_type", "client_credentials");
  formData.append("scope", "https://apis.auckland.ac.nz/course-general-read");

  const oauth_response = await fetch(UOA_OAUTH_API, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: formData,
  });

  const oauth_payload = await oauth_response.json();

  return oauth_payload.access_token;
}
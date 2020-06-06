
export type LoginApiResponse = {
  token: string
}

export function login(): Promise<LoginApiResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "fake-token" });
    }, 2000);
  });
}

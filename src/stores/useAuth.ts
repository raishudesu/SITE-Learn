export const signUp = async (
  name: string,
  email: string,
  isAdmin: boolean,
  pwd: string,
  confirmPwd: string
) => {
  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        isAdmin,
        pwd,
        confirmPwd,
      }),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

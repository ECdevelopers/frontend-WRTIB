export const getIdetifiUser = async (token: string) => {
  try {
    const res = await fetch("/api/getuser", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

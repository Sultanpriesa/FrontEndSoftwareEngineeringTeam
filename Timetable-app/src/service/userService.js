export async function fetchUserSchedule() {
  const res = await fetch("http://localhost:5174/api/user/schedule", {
    credentials: "include", // or send token if needed
  });
  if (!res.ok) throw new Error("Failed to fetch user schedule");
  return res.json();
}
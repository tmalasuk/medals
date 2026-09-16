const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  "https://medals-api-theresa1-a7c4e8cffccrgbfh.eastus2-01.azurewebsites.net";

export async function getCountries() {
  const res = await fetch(`${API_BASE_URL}/api/country`);
  return res.json();
}

export async function addCountry(name) {
  const res = await fetch(`${API_BASE_URL}/api/country`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
}

export async function deleteCountry(id) {
  await fetch(`${API_BASE_URL}/api/country/${id}`, { method: "DELETE" });
}

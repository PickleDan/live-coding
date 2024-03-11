async function fetchWithRetries(retries = 0, ...fetchArgs) {
  let result;

  for (let attempt = 0; attempt <= retries; attempt++) {
    const response = await fetch(...fetchArgs);

    if (response.ok) {
      result = await response.json();
      break;
    }
  }

  return result;
}

(async () => {
  console.log(
    "### result",
    await fetchWithRetries(5, "https://jsonplaceholder.typicode.com/posts"),
  );
})();

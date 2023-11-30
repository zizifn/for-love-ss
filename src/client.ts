function testHttpCacheControl() {
  const btn = document.querySelector(
    "#http-test-cache-control"
  ) as HTMLButtonElement;

  btn.addEventListener("click", async () => {
    const resp = await fetch("/http/api/cache-control", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await resp.json();
    console.log(json);
  });
}

testHttpCacheControl();

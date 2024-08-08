const fetchData = async (url) => {
  try {
    console.log("API call");
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

// Debounce function

function debounce(func, delay) {
  if (typeof func !== "function") {
    return;
  }
  if (typeof delay !== "number" || delay < 0) {
    return;
  }

  let sid = null;
  return function (...args) {
    return new Promise((resolve) => {
      clearTimeout(sid);
      sid = setTimeout(async () => {
        const res = await fetchData(...args);
        resolve(res);
      }, delay);
    });
  };
}

const debounceQuery = debounce(fetchData, 1000);

export default debounceQuery;

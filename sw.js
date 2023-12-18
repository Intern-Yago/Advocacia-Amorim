const deleteCache = async (key) => {
    await caches.delete(key);
  };
  
  const deleteOldCaches = async () => {
    const cacheKeepList = ["v2"];
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(cachesToDelete.map(deleteCache));
  };
  
  self.addEventListener("activate", (event) => {
    event.waitUntil(deleteOldCaches());
    return self.skipWaiting()
  });
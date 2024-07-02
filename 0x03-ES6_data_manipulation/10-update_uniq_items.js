export default function updateUniqueItems(map) {
  if (map.constructor === Map) {
    map.forEach((_, data) => {
      if (map.get(data) === 1) {
        map.set(data, 100);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
}

export default function getAllPaths(path) {
  const segments = path.split('/').filter((segment) => segment !== ''); // удаляем пустые сегменты
  const result = [];
  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    result.push(currentPath);
  }
  return result;
}

import { useEffect, useState } from 'react';

function useData<ReturnedData>(url): ReturnedData | null {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}

export default function TestPage() {
  // const data = useData<any>(`https://hn.algolia.com/api/v1/search?query=redux`);
  // const data = useData<any>(`https://dashboard.uplium.com/mainapi/stocks`);
  const data = useData<any>(`https://dev.dashboard.uplium.com/mainapi/stocks`);
  // const data = useData<any>(`http://localhost:3026/stocks`);

  // console.log('__LOG__.res', data);

  const aaa = () => {
    throw new Error('aaaaaaaaaeeee');
  };

  return (
    <div>
      <h2>Test page !!!</h2>
      <h3>This is test</h3>

      <button onClick={aaa}>aaa</button>

      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <a href={item.url}>
                {item.FirstName} {item.LastName}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

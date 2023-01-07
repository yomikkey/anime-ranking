import React, {useState, useEffect} from 'react'
import Card from './Card';
import '../styles/Grid.css'
import { getAnimes } from '../services/api'
import Chart from './Chart';

export default function Grid() {
  const [animesList, setAnimesList] = useState([]);
  useEffect(() => {
    const fetchAnimesList = async () => {
      const result = await getAnimes();
      setAnimesList(result)
    }
    fetchAnimesList();
  }, [])

  return (
    <>
    <div className='root-grid'>
      {
        animesList && animesList.map((anime) => {
          return <>
            <Card anime={anime} />
          </>;
        })
      }
    </div>
      <Chart animesList = {animesList} />
    </>
  )
}

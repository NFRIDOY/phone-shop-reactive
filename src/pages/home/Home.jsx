import { useLoaderData } from "react-router-dom"
import Phones from '../../components/Phones/Phones'


export default function Home() {
  const phones = useLoaderData(); 

  return (
    <div>Home
      {/* {console.log(phones)} */}
      <Phones phones={phones}></Phones>
    </div>
  )
}

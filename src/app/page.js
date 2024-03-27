import '../styles/global.css';
import Header from "../Component/header/header"
import Banner from '../Component/banner/bannercontent';

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Banner/>
      </div>
    </main>
  );
}

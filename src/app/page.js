import '../styles/global.css';
import Header from "../Component/header/header"
import Banner from '../Component/banner/bannercontent';
import Body from '../Component/body/body';

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Banner/>
        <Body/>
      </div>
    </main>
  );
}

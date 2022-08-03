import './App.scss';
import './sass/Header.scss';
import './sass/BodyWrap.scss';
import './sass/FootStrip.scss';

import Header from './components/Header';
import BodyWrap from './components/BodyWrap';
import FootStrip from './components/FootStrip';
import Default from './components/Default';

import { useRef } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SocialVideo from './videos/social.mp4';

function App() {
  const main = useRef('');
  const [headerHeight, setHeaderHeight] = useState('');
  const [footHeight, setFootHeight] = useState('');
  const mainHeight = main.current.clientHeight;
  const body_max_height = (mainHeight - headerHeight) - footHeight;
  const [load, setLoad] = useState(true);

  let pre_load = document.querySelector('.pre_load');

  if (pre_load) {
    setTimeout(() => {
      pre_load.style.display = 'none';
      setLoad(false);
    }, 2000);
  }

  return (
    <>
      {!load && (<BrowserRouter>
        <Routes>
          <Route
            path='/'
            element=
            {
              <>
                <main ref={main}>
                  <div className='video_overlay'>
                    <div className='videowrap'>
                      <video autoPlay muted loop >
                        <source src={SocialVideo} type='video/mp4' />
                      </video>
                    </div>
                  </div>
                  <Header setHeaderHeight={setHeaderHeight} />
                  <BodyWrap bodyWrapHeight={body_max_height} />
                  <FootStrip setFootHeight={setFootHeight} />
                </main>
              </>
            }
          />

          <Route path='user/:name' element={<Default />} />
          <Route path='signup' element={<Default />} />
        </Routes>
      </BrowserRouter>)}
    </>
  );
}

export default App;
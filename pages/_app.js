import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  /**
   * KARTEタグ
   */
   useEffect(() => {
    (function(){var t,e,n,r,a;for(t=function(){var t;return t=[],function(){var e,n,r,a;for(n=["init","start","stop","user","track","action","event","goal","chat","buy","page","view","admin","group","alias","ready","link","form","click","submit","cmd","emit","on","send","css","js","style","option","get","set","collection"],e=function(e){return function(){return t.push([e].concat(Array.prototype.slice.call(arguments,0)))}},r=0,a=[];r<n.length;)t[n[r]]=e(n[r]),a.push(r++);return a}(),t.init=function(e,n){var r,a;return t.api_key=e,t.options=n||{},a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.charset="utf-8",a.src=t.options.tracker_url||"https://static.karte.io/libs/tracker.js",r=document.getElementsByTagName("script")[0],r.parentNode.insertBefore(a,r)},t},r=window.karte_tracker_names||["tracker"],e=0,n=r.length;n>e;e++)a=r[e],window[a]||(window[a]=t());tracker.init("a2c92492ba22b791babbc7ba8d0f8525")}).call(this);
  })

  /**
   * Munchkinタグ
   */
  useEffect(() => {
    var didInit = false;
    function initMunchkin() {
      if(didInit === false) {
        didInit = true;
        Munchkin.init('452-MFY-481');
      }
    }
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//munchkin.marketo.net/munchkin.js';
    s.onreadystatechange = function() {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        initMunchkin();
      }
    };
    s.onload = initMunchkin;
    document.getElementsByTagName('head')[0].appendChild(s);
  }, [])

  return <Component {...pageProps} />
}

export default MyApp

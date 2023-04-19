import { Provider } from 'react-redux';
import { wrapper } from '../store/store';
import '../styles/globals.css';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

/*
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={wrapper.store}>
      <Component {...pageProps} />
    </Provider>
  )
}
*/
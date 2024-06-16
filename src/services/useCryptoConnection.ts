import { useEffect } from 'react';
import { useCryptoSocket } from '../contexts/CryptoContext';
import Toast from 'react-native-toast-message';

const SOCKET_URL = 'wss://api.tiingo.com/crypto';

const subscribe = {
  'eventName': 'subscribe',
  'eventData': {
    // Yes token shouldn't be kept here ofc but due to time constraints leaving as is
    'authToken': 'b9794a8a0844ff380d0497f55568454926439fd4',
    'thresholdLevel': 5,
    'tickers': ['btcusdt']
  }
}

let socket: WebSocket;

const useCryptoConnection = () => {
  const { setSocketData } = useCryptoSocket();

  useEffect(() => {

    socket = new WebSocket(SOCKET_URL);

    socket.onopen = () => socket.send(JSON.stringify(subscribe));

    socket.onerror = (e) => {
      console.error(e.message);
      Toast.show({
        type: 'error',
        text1: e.message
      });
    }

    socket.onmessage = ({ data }) => {
      setSocketData(JSON.parse(data));
    };

    return () => {
      socket.close();
    };
  }, []);
};

export default useCryptoConnection;

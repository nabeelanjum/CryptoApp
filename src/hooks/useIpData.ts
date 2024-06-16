import { useState, useEffect, useCallback } from 'react';
import Toast from 'react-native-toast-message';
import { fetchIpData } from '../services/IpService';

const useIpData = () => {
  const [ipData, setIpData] = useState({});
  const [ip, setIp] = useState('');
  const [isLoading, setLoading] = useState(false);

  const getIpData = useCallback(async () => {
    try {
      setLoading(true);
      const resp = await fetchIpData(ip);
      setIpData(resp);
    } catch (e) {
      console.error(e);
      Toast.show({
        type: 'error',
        text1: e.toString(),
      });
    } finally {
      setLoading(false);
    }
  }, [ip]);

  useEffect(() => {
    getIpData();
  }, []);

  const updateIp = useCallback((ip: string) => {
    setIp(ip);
  }, []);

  return {
    ipData,
    getIpData,
    updateIp,
    ip,
    isLoading,
  };
};

export default useIpData;

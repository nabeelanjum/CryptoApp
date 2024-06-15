import { useState, useEffect, useCallback } from 'react';
import { fetchIpData } from '../services/ipService';

const useIpData = () => {
  const [ipData, setIpData] = useState({});
  const [ip, setIp] = useState('');

  const getIpData = useCallback(async (ip: string) => {
    try {
      const resp = await fetchIpData(ip);
      setIpData(resp);
    } catch (e) {
      console.error(e)
    }
  }, []);

  useEffect(() => {
    getIpData(ip);
  }, [ip]);

  const updateIp = useCallback((ip: string) => {
    setIp(ip);
  }, []);

  return {
    ipData,
    getIpData,
    updateIp,
    ip,
  };
};

export default useIpData;

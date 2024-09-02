import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Aquí puedes verificar si el usuario está autenticado
      // Si está autenticado, redirige a /tabs
      router.replace('/login');
    }
  }, [isMounted]);

  return null;
}

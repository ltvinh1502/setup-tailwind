import Layout from '@/app/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Layout>
        <Button variant='outline' onClick={() => setCount(count + 1)}>
          Button
        </Button>
        <p>{count}</p>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

import { Layout, PageContainer } from './layouts/main';

function App() {
  return (
    <Layout>
      <PageContainer title="Dashboard">
        <div className="grid gap-6">
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-950">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Welcome to Your Dashboard
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              This is a modern dashboard layout with dark mode support.
            </p>
          </div>
        </div>
      </PageContainer>
    </Layout>
  );
}

export default App;

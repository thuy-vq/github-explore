import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

dayjs.extend(utc)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 10000,
    },
    mutations: {
      onError: () => {
        // Xử lý lỗi mutations ở đây
      },
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto]">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </QueryClientProvider>
  )
}

export default App

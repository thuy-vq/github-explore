import React from 'react';
import OTable from "@/components/OTable";
import SearchInput from "@/components/SearchInput";
import {useApiGet} from "@/utils/useApi.ts";
import {useAuthStore} from "../../store/auth.ts";
import axios from "axios";
import {request} from "../../utils/network.ts";

const Home = () => {
  const username = useAuthStore((state) => state.username)
  const setUsername = useAuthStore((state) => state.setUsername)
  const token = useAuthStore((state) => state.token)

  const {
    data,
    isLoading,
    error,
    isError,
    isLoadingError,
    refetch
  } = useApiGet(
    ["repos", username],
    () =>
      request({
        token,
        options: {
          url: `/users/${username}/repos`,
          method: "GET",
        }
      }),
    {
      enabled: !!username,
      refetchOnWindowFocus: true,
      retry: 0
    }
  );

  const handleChange = (value: string) => {
    setUsername(value);
  };

  return (
    <div className='flex gap-8 flex-col w-full p-4'>
      <SearchInput
        placeholder="Search a github's username"
        label='Search'
        onChange={handleChange}
      />

      <OTable dataSource={data}/>
    </div>
  );
};

export default Home;

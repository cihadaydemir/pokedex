"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();
export const ProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
};

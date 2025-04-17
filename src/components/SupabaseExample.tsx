"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@/lib/supabase";

interface TableData {
  id: string;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export default function SupabaseExample() {
  const [data, setData] = useState<TableData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createBrowserClient();
        const { data, error } = await supabase
          .from("your_table_name")
          .select("*");

        if (error) throw error;
        setData(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>Error loading data</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Supabase Data</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

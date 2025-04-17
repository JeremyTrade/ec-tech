"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface TableData {
  id: string;
  [key: string]: any;
}

export default function SupabaseExample() {
  const [data, setData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("your_table_name")
          .select("*");

        if (error) throw error;
        setData(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Supabase Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
